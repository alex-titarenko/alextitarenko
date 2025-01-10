import Layout from 'components/Layout'
import Link from 'next/link'
import appConfig from 'app.config.json'

export default function HomePage() {
  return (
    <Layout
      title={ `${ appConfig.brandName } - Software Developer` }
      description="My personal website/portfolio."
      pageId="home">
      <div className="jumbotron page-header page-header-home">
        <div className="container">
          <h1>HELLO FOLKS!</h1>
          <p>My name is Alex Titarenko, and I'm a <strong>software developer</strong><br />I do a lot of <a target="_blank" rel="noopener" href={appConfig.social.gitHub}>coding</a>, learning, reading, jogging, dreaming and enjoy life!</p>
        </div>
      </div>
      <div className="container">
        <section id="content" className="home-content">
          <div className="row row-content">
            <div className="col-sm-6 text-content">
              <h1><Link href="/projects">Projects</Link></h1>
              <p>
                In my spare time, I have a passion for developing my personal projects to create something new, to make everyday life better and more productive.
              </p>
            </div>

            <div className="col-sm-6 image-content">
              <Link href="/projects">
                <img src="/images/projects-home.png" className="img-responsive" />
              </Link>
            </div>
          </div>

          <div className="row row-content row-alternate">
            <div className="col-sm-6 text-content">
              <h1><a target="_blank" rel="noopener" href={ appConfig.social.gitHub }>Open source contribution</a></h1>
              <p>
                Each day in our professional work as well as in personal development we touch open source code. Millions of people around us create amazing code for sharing with other people.
              </p>
              <p>
                Just proceed to my <a target="_blank" rel="noopener" href={ appConfig.social.gitHub }>GitHub</a> account to see what I'm contributing to open source community.
              </p>
            </div>

            <div className="col-sm-6 image-content">
              <a target="_blank" rel="noopener" href={ appConfig.social.gitHub }>
                <img src="/images/open-source-home.png" className="img-responsive" />
              </a>
            </div>
          </div>

          <div className="row row-content">
            <div className="col-sm-6 text-content">
              <h1><Link href="/blog">Blogging</Link></h1>
              <blockquote>
                <p>and the internet allows us to engage in a lot more real-time conversations as opposed to a one-way dump of information or a message.</p>
                <footer>Indra Nooyi</footer>
              </blockquote>
            </div>

            <div className="col-sm-6 image-content">
              <Link href="/blog">
                <img src="/images/blogging-home.png" className="img-responsive" />
              </Link>
            </div>
          </div>

          <div className="row row-content row-alternate">
            <div className="col-sm-6 text-content">
              <h1><a target="_blank" rel="noopener" href={ appConfig.contactInfo.resumeLink }>Résumé</a></h1>
              <p>
                I'm open for new opportunities. If you have something interesting to offer, feel free to contact me. You can find my professional experience in the <a target="_blank" rel="noopener" href={ appConfig.contactInfo.resumeLink }>resume</a> or <a target="_blank" rel="noopener" href={ appConfig.social.linkedIn }>LinkedIn</a> profile.
              </p>
            </div>

            <div className="col-sm-6 image-content">
              <a target="_blank" rel="noopener" href={ appConfig.contactInfo.resumeLink }>
                <img src="/images/cv-home.png" className="img-responsive" />
              </a>
            </div>
          </div>

          <div className="row row-content">
            <div className="col-sm-6 text-content">
              <h1><Link href="/about">About Me</Link></h1>
              <p>
                Maybe we already know each other, if not, visit <Link href="/about">about</Link> page and find out more about me.
              </p>
            </div>

            <div className="col-sm-6 image-content">
              <Link href="/about">
                <img src="/images/about-home.png" className="img-responsive" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
