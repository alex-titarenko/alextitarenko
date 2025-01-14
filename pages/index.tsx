import { Jumbotron } from 'components/Jumbotron';
import Layout from 'components/Layout'
import appConfig from 'app.config.json'

export default function HomePage() {
const facts: string[] = [
    "Jogging gives me a lot of energy to push myself forward, develop, and achieve my goals",
    "My hobby is traveling and I hope to visit as many places as possible",
    "I'm a dreamer, and my greatest dream is space flight",
    "I'm somewhat a perfectionist and a goal-oriented person‏",
    "I greatly appreciate the time, because it cannot be recompensed",
    "I love programming, and I find it hard to imagine my life without a line of code"
  ];

  const factsListItems = facts.map((fact, index) => {
    return (
      <li key={ index }>
        { fact }
      </li>
    );
  });

  return (
    <Layout
      title={ `${ appConfig.brandName } - Software Developer` }
      description="My personal website/portfolio."
      pageId="home">

      <Jumbotron className='page-header-home'>
        <h1>HELLO FOLKS!</h1>
        <p>My name is Alex Titarenko, and I&apos;m a <strong>software developer</strong><br />I do a lot of coding, learning, reading, jogging, dreaming, and enjoying life!</p>
      </Jumbotron>

      <div className="container">
        <section id="content" className="home-content">
        <div className="text-center moto-block">
            <h4>
              <strong className="text-uppercase">My motto:</strong><br />
              <strong>&quot;I can&apos;t&quot; needs to be excluded from your thoughts. One could do it, so can many. Nobody could - so be the first!</strong>
            </h4>
          </div>

          <p>
            My name is Alex Titarenko. I live in WA, USA.
          </p>
          <p>
            I&apos;m a patient, responsible, purposeful and committed engineer, who has the desire to continue evolving and discovering new technologies. Productive in team-based as well as self-managed projects. I&apos;m dedicated to maintaining up-to-date industry knowledge and IT skills.
          </p>
          <p>
            My expertise spans both backend and frontend development, encompassing a range of platforms from web to desktop, mobile, and cloud computing. I feel confident working with diverse technologies and tools to create effective solutions.
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
