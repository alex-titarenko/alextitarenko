import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    '& h1': {
      display: 'flex',
      gap: 10
    }
  }
})

type JumbotronProps = {
  className?: string
}

export function Jumbotron(props: PropsWithChildren<JumbotronProps> = {}) {
  const classes = useStyles();

  return (
    <div className={ clsx('jumbotron', 'page-header', props.className) }>
      <div className={ clsx('container', classes.container) }>
        { props.children }
      </div>
    </div>
  )
}
