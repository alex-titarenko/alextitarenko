import { PropsWithChildren } from 'react';
import clsx from 'clsx';

type ContainerProps = {
  className?: string
}

export function Container(props: PropsWithChildren<ContainerProps> = {}) {
  return (
    <div className={ clsx("container", props.className) }>
      { props.children }
    </div>
  )
}
