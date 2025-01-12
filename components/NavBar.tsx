import { useEffect, useState } from 'react';

import Link from 'next/link';
import { Spacer } from './common/Spacer';
import appConfig from 'app.config.json';
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'
import { useMediaQuery } from 'hooks/useMediaQuery';

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

  navbarContainer: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',

    '@media (max-width: 767px)': {
      flexDirection: 'column',
      alignItems: 'stretch'
    }
  },

  brandContainer: {
    display: 'flex',
    flexGrow: 1,
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
    overflow: 'hidden',
    transition: 'height 0.2s ease-out',

    '& ul': {
      padding: 0,

      '& li': {
        display: 'inline-block',
      }
    },

    '& a': {
      color: '#777',
      padding: '10px 15px',

      '&:hover': {
        color: '#333',
      },

      '&:focus, &:hover': {
        textDecoration: 'none'
      }
    },

    '& .active a, & .active a:hover': {
      color: '#555',
      backgroundColor: '#e7e7e7'
    },

    '@media (max-width: 767px)': {
      '& ul li': {
        display: 'block !important',
        margin: '10px 0px'
      }
    }
  },

  toggleButton: {
    position: 'relative',
    padding: '9px 10px',
    marginTop: '8px',
    marginBottom: '8px',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    border: '1px solid transparent',
    borderRadius: '4px',
    borderColor: '#ddd',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#ddd',
    },
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

  const compactSize = useMediaQuery('(max-width: 768px)');
  const [menuCollapsed, setMenuCollapsed] = useState(true);

  useEffect(() => {
    const navElement = props.ref.current

    if (navElement) {
      if (compactSize) {
        navElement.style.height = menuCollapsed ? '0' : `${navElement.scrollHeight}px`;
      } else {
        navElement.style.height = `auto`;
        setMenuCollapsed(true);
      }
    }
  }, [menuCollapsed, compactSize, props.ref]);

  return (
    <header className={ classes.navbar }>
      <div className={ clsx(classes.navbarContainer, "container") }>
        <div className={ classes.brandContainer }>
          <Link href="/" className={ classes.brand }>
            &lt; <span>{ appConfig.brandName }</span> /&gt;
          </Link>

          <Spacer />

          { compactSize && (
            <button
              type="button"
              className={ classes.toggleButton }
              aria-expanded="false"
              aria-controls="navbar"
              onClick={ () => setMenuCollapsed((value) => !value) }
            >
              <span className={ classes.iconBar }></span>
              <span className={ classes.iconBar }></span>
              <span className={ classes.iconBar }></span>
            </button>
          )}
        </div>

        <nav className={ classes.nav } ref={ props.ref }>
          <ul id="mainmenu">
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
