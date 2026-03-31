import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  callout: {
    padding: '1px 20px',
    margin: '20px 0',
    border: '1px solid #eee',
    borderLeft: '5px solid var(--accent-color)',
    borderRadius: '4px',
    backgroundColor: 'var(--callout-bg)',
  }
})

type CalloutProps = {
  className?: string
}

export function Callout(props: PropsWithChildren<CalloutProps> = {}) {
  const classes = useStyles();

  return (
    <div className={ clsx(classes.callout, props.className) }>
      { props.children }
    </div>
  )
}
