import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',

    '&:before, &:after': {
      display: 'table',
      content: '" "'
    },

    '@media (min-width: 768px)': {
      width: '750px',
    },

    '@media (min-width: 992px)': {
      width: '970px',
    },

    /* '@media (min-width: 1200px)': {
        width: '1170px',
    }, */
  }
})

type ContainerProps = {
  className?: string
  itemScope?: boolean
  itemType?: string
}

export function Container(props: PropsWithChildren<ContainerProps> = {}) {
  const classes = useStyles();

  return (
    <div
      className={ clsx(classes.container, props.className) }
      itemScope={ props.itemScope }
      itemType={ props.itemType }
    >
      { props.children }
    </div>
  )
}
