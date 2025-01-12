import Link from 'next/link';
import { Spacer } from './common/Spacer';
import appConfig from 'app.config.json';
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  navBarContainer: {
    display: 'flex',
    alignItems: 'center'
  },

  navbarBrand: {
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
    <header className="navbar navbar-default navbar-static-top">
      <div className={ clsx(classes.navBarContainer, "container") }>
        <Link href="/" className={ classes.navbarBrand }>
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

        <nav id="navbar" className="collapse navbar-collapse bs-navbar-collapse">
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
