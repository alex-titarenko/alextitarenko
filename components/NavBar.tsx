import Link from 'next/link';
import { Spacer } from './common/Spacer';
import appConfig from 'app.config.json';
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  navbar: {
    position: 'relative',
    minHeight: '50px',
    marginBottom: '20px',
    backgroundColor: '#f8f8f8',
    border: '1px solid transparent',
    borderWidth: '0 0 1px',
    borderColor: '#e7e7e7',
    zIndex: 1000,
  },

  container: {
    display: 'flex',
    alignItems: 'center'
  },

  brand: {
    fontSize: '18px',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: 'silver',
    textShadow: '0 1px 2px #fff',
    transition: 'color .3s ease-in',

    '&:hover': {
      textDecoration: 'none'
    },

    '& span': {
      color: 'gray',
      transition: 'color .3s ease-in'
    }
  },

  nav: {
    '& a': {
      color: '#777',
      paddingTop: '10px',
      paddingBottom: '10px',

      '&:hover': {
        color: '#333'
      }
    },

    '& .active a, & .active a:hover': {
      color: '#555',
      backgroundColor: '#e7e7e7'
    }
  },

  toggleButton: {
    position: 'relative',
    padding: '9px 10px',
    marginRight: '15px',
    marginTop: '8px',
    marginBottom: '8px',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    border: '1px solid transparent',
    borderRadius: '4px',
    borderColor: '#ddd',
  },

  iconBar: {
    display: 'block',
    width: '22px',
    height: '2px',
    borderRadius: '1px',
    backgroundColor: '#888',

    '&+&': {
      marginTop: '4px'
    }
  }
})

export function NavBar(props: { ref: React.RefObject<HTMLUListElement | null> }) {
  const classes = useStyles();

  return (
    <header className={ classes.navbar }>
      <div className={ clsx(classes.container, "container") }>
        <Link href="/" className={ classes.brand }>
          &lt; <span>{ appConfig.brandName }</span> /&gt;
        </Link>

        <Spacer />

        <button
          type="button"
          className={ classes.toggleButton }
          aria-expanded="false"
          aria-controls="navbar"
        >
          <span className={ classes.iconBar }></span>
          <span className={ classes.iconBar }></span>
          <span className={ classes.iconBar }></span>
        </button>

        <nav className={ classes.nav }>
          <ul id="mainmenu" ref={ props.ref } className="nav navbar-nav">
            <li>
              <Link href="https://noteshub.app">NotesHub</Link>
            </li>

            <li>
              <Link href="https://multicalculator.app">MultiCalc</Link>
            </li>

            <li className="blog">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
