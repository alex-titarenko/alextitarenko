import {
  ContentCopy as CopyIcon,
  Check as DoneIcon,
  WrapText as WrapTextIcon
} from './icons'
import {
  PropsWithChildren,
  ReactNode,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react'

import clsx from 'clsx';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    position: 'relative',

    '&:hover button': {
      opacity: '.4'
    },

    '& button:focus-visible,button:hover': {
      opacity: '1!important'
    },

    pre: {
      display: 'flex',
      minHeight: '35px',
      alignItems: 'center'
    },

    '@media print': {
      '& code': {
        whiteSpace: 'pre-wrap',
        overflowWrap: 'anywhere'
      }
    }
  },
  wordWrap: {
    '& code': {
      whiteSpace: 'pre-wrap',
      overflowWrap: 'anywhere'
    }
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    gap: '0.2rem',
    top: '10px',
    right: '10px',

    '@media print': {
      display: 'none'
    }
  },
  button: {
    color: 'var(--codeBlock-textColor)',
    lineHeight: 0,
    border: '1px solid',
    cursor: 'pointer',
    borderRadius: '4px',
    minWidth: 0,
    padding: '0.4rem',
    borderColor: 'var(--codeBlock-borderColor)',
    opacity: 0,

    '&:hover': {
      borderColor: 'var(--codeBlock-borderColor)',
      backgroundColor: 'var(--codeBlock-backgroundColor)'
    },

    '& svg': {
      width: '1.2rem',
      height: '1.2rem',
    }
  },

  inherit: {
    color: 'inherit'
  },

  primary: {
    color: 'var(--accent-color)'
  },

  success: {
    color: 'green'
  }
});

type CodeBlockProps = {
  sourceCode?: string
  className?: string
}

function CodeBlockComponent(props: PropsWithChildren<CodeBlockProps>) {
  const classes = useStyles();
  const containerRef = useRef<HTMLDivElement>(null);
  const [canWordWrap, setCanWordWrap] = useState(false);
  const [wordWrap, setWordWrap] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const validateContainerWidth = () => {
      const codeElement = containerRef.current?.querySelector('code');
      if (codeElement) {
        setCanWordWrap(codeElement.scrollWidth > codeElement.clientWidth);
      }
    }

    const resizeObserver = new ResizeObserver(validateContainerWidth);
    validateContainerWidth();

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, []);

  const onToggleWordWrap = () => {
    setWordWrap(value => !value);
  }

  const onCopySourceCode = async () => {
    if (navigator.clipboard) {
      const sourceCode = props.sourceCode ||
        extractSourceCode(props.children);

      if (sourceCode) {
        await navigator.clipboard.writeText(sourceCode);
        setDone(true);
        setTimeout(() => { setDone(false); }, 1000);
      }
    }
  }

  return (
    <div
      ref={ containerRef }
      className={ clsx(classes.container, wordWrap && classes.wordWrap) }
    >
      <pre className={ props.className }>
        { props.children }
      </pre>

      <div className={ classes.buttonGroup }>
        { (canWordWrap || wordWrap) && (
          <button
            aria-label='Toggle word wrap'
            className={ classes.button }
            onClick={ onToggleWordWrap }
          >
            <WrapTextIcon className={ wordWrap ? classes.primary: classes.inherit } />
          </button>
        )}
        { (props.sourceCode || props.children) && (
          <button
            aria-label='Copy code to clipboard'
            className={ classes.button }
            onClick={ onCopySourceCode }
          >
            { done ? <DoneIcon className={ classes.success } /> : <CopyIcon /> }
          </button>
        )}
      </div>
    </div>
  )
}

function extractSourceCode(children: ReactNode): string | undefined {
  function sanitizeSourceCode(sourceCode: string): string {
    return sourceCode.replace(/\r?\n$/, '')
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function isCodeBlock(node: any): boolean {
    return node?.type === 'code'
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function extractFromCodeBlock(codeNode: any): string | undefined {
    if (codeNode.props && typeof codeNode.props.children === 'string') {
      return sanitizeSourceCode(codeNode.props.children);
    }

    if (!codeNode.props || !Array.isArray(codeNode.props.children)) {
      return;
    }

    const codeNodeChildren = codeNode.props.children;

    if (codeNodeChildren.length === 1 && typeof codeNodeChildren[0] === 'string') {
      return sanitizeSourceCode(codeNodeChildren[0]);
    }
  }

  if (isCodeBlock(children)) {
    return extractFromCodeBlock(children);
  }

  if (!Array.isArray(children) || children.length === 0) {
    return;
  }

  if (children.length === 1 && typeof children[0] === 'string') {
    return children[0];
  }

  const codeNode = children.find(isCodeBlock);
  if (codeNode) {
    return extractFromCodeBlock(codeNode);
  }
}

export const CodeBlock = memo(CodeBlockComponent);
