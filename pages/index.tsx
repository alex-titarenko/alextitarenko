import Layout from 'components/Layout'
import appConfig from 'app.config.json'

export default function HomePage() {
const facts: string[] = [
    "Jogging gives me a lot of energy to push myself forward, develop and achieve the goals",
    "My hobby is traveling and I hope to visit as many places as possible",
    "I'm a dreamer, and my greatest dream is space flight",
    "I'm somewhat a perfectionist and a goal-oriented person‏",
    "I greatly appreciate the time, because it cannot be recompensed",
    "I love programming, and I find it hard to imagine my life without a line of code"
  ];

  const factsListItems = facts.map((fact, index) => {
    return (
      <li key={ index }><span className='glyphicon glyphicon-ok'></span><span>{ fact }</span></li>
    );
  });

  return (
    <Layout
      title={ `${ appConfig.brandName } - Software Developer` }
      description="My personal website/portfolio."
      pageId="home">
      <div className="jumbotron page-header page-header-home">
        <div className="container">
          <h1>HELLO FOLKS!</h1>
          <p>My name is Alex Titarenko, and I&apos;m a <strong>software developer</strong><br />I do a lot of <a target="_blank" rel="noopener" href={appConfig.social.gitHub}>coding</a>, learning, reading, jogging, dreaming and enjoy life!</p>
        </div>
      </div>
      <div className="container">
        <section id="content" className="home-content">
        <div className="text-center moto-block">
            <h4>
              <strong className="text-uppercase">My motto:</strong><br />
              <strong>&quot;I can&apos;t&quot; needs to be excluded from his thoughts. Enable one enable many. Nobody could - so be the first!</strong>
            </h4>
          </div>

          <p>
            My name is Alex Titarenko. I live in WA, USA.
          </p>
          <p>
            I&apos;m a patient, responsible, purposeful and committed engineer, who has the desire to continue evolving and discovering new technologies. Productive in team-based as well as self-managed projects. Dedicated to maintaining up-to-date industry knowledge and IT skills.
          </p>
          <p>
            Focusing mainly on .NET technology stack,
            I feel comfortable with both backend and frontend development using a variety of technologies from web (ASP.NET MVC, WCF, Javascript, AngularJS) to desktop (WPF, WinForms), mobile (Windows 10 Mobile) and cloud computing (Azure Cloud).
          </p>
          <p>
            In leisure time I develop personal projects and push code on <a target="_blank" rel="noopener" href={ appConfig.social.gitHub }>GitHub</a>.
          </p>

          <div className="random-facts">
            <h3>Some facts about me</h3>
            <ul className='check-list'>
              { factsListItems }
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}
