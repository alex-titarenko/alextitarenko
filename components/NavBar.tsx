import Link from 'next/link';
import { Spacer } from './common/Spacer';
import appConfig from 'app.config.json';
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  navBarContainer: {
    display: 'flex'
  }
})

export function NavBar(props: { ref: React.RefObject<HTMLUListElement | null> }) {
  const classes = useStyles();

  return (
    <header className="navbar navbar-default navbar-static-top">
      <div className={ clsx(classes.navBarContainer, "container") }>
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <Link href="/" className="navbar-brand">
            &lt; <span>{ appConfig.brandName }</span> /&gt;
          </Link>
        </div>

        <Spacer />

        <nav id="navbar" className="collapse navbar-collapse bs-navbar-collapse">
          <ul id="mainmenu" ref={ props.ref } className="nav navbar-nav">
            <li >
              <Link href="https://noteshub.app">NotesHub</Link>
            </li>

            <li >
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
