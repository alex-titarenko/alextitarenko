import { Container } from './Container';
import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import { mediaQueries } from 'utils/mediaQueries';

const useStyles = createUseStyles({
  jumbotron: {
    paddingTop: '48px',
    paddingBottom: '48px',
    marginBottom: '30px',
    backgroundColor: 'var(--accent-color)',
    color: 'white',
    borderBottom: '1px solid #eee',

    '& h1': {
      display: 'flex',
      gap: 10,
      fontSize: '63px',
    },

    '& p': {
      marginBottom: '15px',
      fontSize: '21px',
      fontWeight: 200
    },

    [mediaQueries.compactSize]: {
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',

      paddingTop: '30px',
      paddingBottom: '30px',

      '& h1': {
        fontSize: '36px'
      }
    }
  },

  container: {
    [mediaQueries.compactSize]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }
})

type JumbotronProps = {
  className?: string
}

export function Jumbotron(props: PropsWithChildren<JumbotronProps> = {}) {
  const classes = useStyles();

  return (
    <div className={ clsx(classes.jumbotron, props.className) }>
      <Container className={ classes.container }>
        { props.children }
      </Container>
    </div>
  )
}
