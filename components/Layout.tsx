import {
  Bluesky,
  GitHub,
  Instagram,
  X
} from './icons'
import React, { PropsWithChildren, useEffect, useState } from 'react'

import Head from 'next/head'
import { NavBar } from './NavBar'
import { Threads } from './icons/Threads'
import appConfig from 'app.config.json'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  footer: {
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'gray',
    paddingTop: '25px',

    /* Sticky footer styles */
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 'var(--footer-height)',
  },

  socialLinks: {
    display: 'flex',
    justifyContent: 'center'
  },

  socialLink: {
    display: 'flex',
    fontSize: '25px',
    margin: '5px 7px',
    color: 'gray',
    opacity: 0.6,

    '& svg': {
      color: 'inherit',
      width: '1em',
      height: '1em',
    },

    '&:hover': {
      color: 'gray',
      opacity: 1,
      textDecoration: 'none',
    },
  }
})

type LayoutProps = {
  title: string;
  description: string;
  pageId: string;
  canonicalUrl?: string;
  keywords?: string;
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const mainMenu = React.createRef<HTMLUListElement>();
  const [canonicalUrl, setCanonicalUrl] = useState(props.canonicalUrl)

  const selectMenuItem = (menu: HTMLElement, munuItem: string, selectClass: string) => {
    if (munuItem) {
      const item = menu.querySelector(`li[class~="${munuItem}"]`);

      if (item) {
        item.classList.add(selectClass);
      }
    }
  }

  useEffect(() => {
    setCanonicalUrl(props.canonicalUrl || getDefaultCanonicalUrl());

    if (mainMenu.current) {
      selectMenuItem(mainMenu.current, props.pageId, "active");
    }
  }, [mainMenu, props.canonicalUrl, props.pageId]);

  return (
    <div>
      <Head>
        <title>{ props.title }</title>
        <meta name="keywords" content={ props.keywords ?? appConfig.defaultKeywords } />
        <meta name="description" content={ props.description } />
        <link rel="canonical" href={ canonicalUrl } />
      </Head>

      <div>
        <NavBar ref={ mainMenu } />

        { props.children }

        <Footer />
      </div>
    </div>
  )
}

function SocialLink(props: PropsWithChildren<{ href: string; title: string }>) {
  const classes = useStyles();

  return (
    <a
      href={ props.href }
      className={ classes.socialLink }
      target="_blank"
      rel="noopener"
      title={ props.title }
    >
      { props.children }
    </a>
  )
}

function Footer() {
  const classes = useStyles();

  return (
    <footer className={ classes.footer }>
      <div>Copyright &copy; { appConfig.brandName } 2011-{ new Date().getFullYear() }</div>

      <div className={ classes.socialLinks }>
        {/* <SocialLink href={ appConfig.social.facebook } title="Facebook"><Facebook /></SocialLink>
        <SocialLink href={ appConfig.social.linkedIn } title="LinkedIn"><LinkedIn /></SocialLink> */}
        <SocialLink href={ appConfig.social.x } title="X"><X /></SocialLink>
        <SocialLink href={ appConfig.social.threads } title="Threads"><Threads /></SocialLink>
        <SocialLink href={ appConfig.social.bluesky } title="Bluesky"><Bluesky /></SocialLink>
        <SocialLink href={ appConfig.social.gitHub } title="GitHub"><GitHub /></SocialLink>
        <SocialLink href={ appConfig.social.instagram } title="Instagram"><Instagram /></SocialLink>
      </div>
    </footer>
  )
}

function getDefaultCanonicalUrl() {
  const baseUrl = appConfig.canonicalBaseUrl.replace(new RegExp("[/]+$"), "");
  const canonicalUrl = baseUrl + location.pathname + location.search;

  return canonicalUrl;
}
