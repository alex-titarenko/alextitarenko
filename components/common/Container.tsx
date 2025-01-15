import { PropsWithChildren } from 'react';

export function Container(props: PropsWithChildren<unknown>) {
  return (
    <div className="container">
      { props.children }
    </div>
  )
}
