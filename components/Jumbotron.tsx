import { PropsWithChildren } from 'react';
import clsx from 'clsx';

type JumbotronProps = {
  className?: string
}

export function Jumbotron(props: PropsWithChildren<JumbotronProps> = {}) {
  return (
    <div className={ clsx('jumbotron', 'page-header', props.className) }>
      <div className="container">
        { props.children }
      </div>
    </div>
  )
}
