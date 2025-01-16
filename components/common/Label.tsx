import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  label: {
    display: 'inline',
    padding: '.2em .6em .3em',
    fontSize: '75%',
    fontWeight: 700,
    lineHeight: 1,
    color: '#fff',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'baseline',
    borderRadius: '.25em',
  },
  labelPrimary: {
    backgroundColor: 'var(--accent-color)',
  }
})

type LabelProps = {
  variant?: 'none' | 'primary'
  className?: string
}

export function Label(props: PropsWithChildren<LabelProps> = {}) {
  const classes = useStyles();

  const labelClasses = clsx(
    classes.label,
    props.variant === 'primary' && classes.labelPrimary,
    props.className
  );

  return (
    <span className={ labelClasses }>
      {props.children}
    </span>
  )
}
