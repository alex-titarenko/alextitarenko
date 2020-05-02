import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import appConfig from '@root/app.config.json'
import { Project } from '@models/Project'
import { ProjectRepository } from '@repositories/ProjectRepository'
import { Analytics } from '@utils/analytics'
import '@root/styles/site.scss'

type LayoutProps = {
  title: string;
  description: string;
  pageId: string;
  canonicalUrl?: string;
  keywords?: string;
}

type LayoutState = {
  canonicalUrl?: string;
  projects: Project[];
}

export default class Layout extends React.Component<LayoutProps, LayoutState> {
  private mainMenu = React.createRef<HTMLUListElement>();

  public static defaultProps = {
    keywords: appConfig.defaultKeywords
  }

  constructor(props: LayoutProps) {
    super(props);

    const projectRepository = new ProjectRepository();
    this.state = {
      canonicalUrl: this.props.canonicalUrl,
      projects: projectRepository.getAll(),
    }
  }

  public componentDidMount() {
    this.setState({
      canonicalUrl: this.props.canonicalUrl || this.getDefaultCanonicalUrl()
    });

    if (this.mainMenu.current) {
      this.selectMenuItem(this.mainMenu.current, this.props.pageId, "active");
    }

    Analytics.init();
    Analytics.logPageView();
  }

  public render() {
    const projectElements = this.state.projects.map(proj => {
      return (
        <li key={ proj.id }>
          <Link href="/projects/[alias]" as={ `/projects/${ proj.alias }` }>
            <a title={ `${ proj.name } Project Information` }>{ proj.name }</a>
          </Link>
        </li>
      )
    });

    return (
      <div>
        <Head>
          <title>{ this.props.title }</title>
          <meta name="keywords" content={ this.props.keywords } />
          <meta name="description" content={ this.props.description } />
          <link rel="canonical" href={ this.state.canonicalUrl } />
        </Head>

        <div>
          <header className="navbar navbar-default navbar-static-top">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link href="/"><a className="navbar-brand">&lt; <span>{ appConfig.brandName }</span> /&gt;</a></Link>
              </div>

              <nav id="navbar" className="collapse navbar-collapse bs-navbar-collapse">
                <ul id="mainmenu" ref={ this.mainMenu } className="nav navbar-nav navbar-right">
                  <li className="projects dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                      Projects&nbsp;<span className="caret"></span>
                    </a>

                    <ul className="dropdown-menu" role="menu">
                      { projectElements }
                    </ul>
                  </li>

                  <li className="blog">
                    <Link href="/blog"><a>Blog</a></Link>
                  </li>

                  <li className="about">
                    <Link href="/about"><a>About</a></Link>
                  </li>

                  <li className="company">
                    <Link href="/contact"><a>Contact</a></Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          { this.props.children }

          <footer className="footer">
            <div>Copyright &copy; { appConfig.brandName } 2011-{ new Date().getFullYear() }</div>

            <div className="contacts">
              <a href={ appConfig.social.facebook } target="_blank" rel="noopener" title="Facebook"><i className="fa fa-facebook-square"></i></a>
              <a href={ appConfig.social.linkedIn } target="_blank" rel="noopener" title="LinkedIn"><i className="fa fa-linkedin"></i></a>
              <a href={ appConfig.social.gitHub } target="_blank" rel="noopener" title="GitHub"><i className="fa fa-github"></i></a>
              <a href={ appConfig.social.stackoverflow } target="_blank" rel="noopener" title="StackOverflow"><i className="fa fa-stack-overflow"></i></a>
              <a href={ appConfig.social.instagram } target="_blank" rel="noopener" title="Instagram"><i className="fa fa-instagram"></i></a>
              <a href={ appConfig.social.twitter } target="_blank" rel="noopener" title="Twitter"><i className="fa fa-twitter"></i></a>
            </div>
          </footer>
        </div>
      </div>
    );
  }

  private getDefaultCanonicalUrl(): string {
    const baseUrl = appConfig.canonicalBaseUrl.replace(new RegExp("[/]+$"), "");
    const canonicalUrl = baseUrl + location.pathname + location.search;

    return canonicalUrl;
  }

  private selectMenuItem(menu: HTMLElement, munuItem: string, selectClass: string) {
    if (munuItem) {
      const item = menu.querySelector(`li[class~="${munuItem}"]`);

      if (item != null) {
        item.classList.add(selectClass);
      }
    }
  }
}
