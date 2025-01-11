// import {
//   ContentCopy as CopyIcon,
//   Done as DoneIcon,
//   WrapText as WrapTextIcon
// } from '@mui/icons-material'
import {
  PropsWithChildren,
  ReactNode,
  memo,
  useEffect,
  useRef,
  useState
} from 'react'

// const styles: { [key: string]: SxProps } = {
//   container: {
//     position: 'relative',

//     '&:hover button': {
//       opacity: '.4'
//     },

//     'button:focus-visible,button:hover': {
//       opacity: '1!important'
//     },

//     pre: {
//       display: 'flex',
//       minHeight: '35px',
//       alignItems: 'center'
//     },

//     '@media print': {
//       'code': {
//         whiteSpace: 'pre-wrap',
//         overflowWrap: 'anywhere'
//       }
//     }
//   },
//   wordWrap: {
//     'code': {
//       whiteSpace: 'pre-wrap',
//       overflowWrap: 'anywhere'
//     }
//   },
//   buttonGroup: {
//     flexDirection: 'row',
//     position: 'absolute',
//     gap: '0.2rem',
//     top: '10px',
//     right: '10px'
//   },
//   button: {
//     minWidth: 0,
//     padding: '0.4rem',
//     color: 'var(--nh-palette-richTextBlock-codeBlock-textColor)',
//     borderColor: 'var(--nh-palette-richTextBlock-codeBlock-borderColor)',
//     opacity: 0,

//     ':hover': {
//       borderColor: 'var(--nh-palette-richTextBlock-codeBlock-borderColor)',
//       backgroundColor: 'var(--nh-palette-richTextBlock-codeBlock-backgroundColor)'
//     },

//     'svg': {
//       width: '1.2rem',
//       height: '1.2rem',
//     }
//   }
// }

type CodeBlockProps = {
  sourceCode?: string
  className?: string
}

function CodeBlockComponent(props: PropsWithChildren<CodeBlockProps>) {
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

    containerRef.current && resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const onToggleWordWrap = () => {
    setWordWrap(value => !value);
  }

  const onCopySourceCode = async () => {
    if (navigator.clipboard) {
      const sourceCode = props.sourceCode || extractSourceCode(props.children);

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
      // sx={[
      //   ...(Array.isArray(styles.container) ? styles.container : [styles.container]),
      //   wordWrap && styles.wordWrap
      // ]}
    >
      <pre className={ props.className }>
        { props.children }
      </pre>

      {/* <Stack sx={ styles.buttonGroup } displayPrint="none">
        { (canWordWrap || wordWrap) && (
          <Button
            aria-label='Toggle word wrap'
            variant='outlined'
            size='small'
            sx={ styles.button }
            onClick={ onToggleWordWrap }
          >
            <WrapTextIcon color={ wordWrap ? 'primary': 'inherit' } />
          </Button>
        )}
        { (props.sourceCode || props.children) && (
          <Button
            aria-label='Copy code to clipboard'
            variant='outlined'
            size='small'
            sx={ styles.button }
            onClick={ onCopySourceCode }
          >
            { done ? <DoneIcon color='success' /> : <CopyIcon /> }
          </Button>
        )}
      </Stack> */}
    </div>
  )
}

function extractSourceCode(children: ReactNode): string | undefined {
  if (!Array.isArray(children) || children.length === 0) {
    return;
  }

  if (children.length === 1 && typeof children[0] === 'string') {
    return children[0];
  }

  const codeNode = children.find(x => x?.type === 'code');
  if (codeNode) {
    if (!codeNode.props || !Array.isArray(codeNode.props.children)) {
      return;
    }

    const codeNodeChildren = codeNode.props.children;

    if (codeNodeChildren.length === 1 && typeof codeNodeChildren[0] === 'string') {
      let sourceCode = codeNodeChildren[0];
      sourceCode = sourceCode.replace(/\r?\n$/, ''); // trim last new line
      return sourceCode;
    }
  }
}

export const CodeBlock = memo(CodeBlockComponent);
