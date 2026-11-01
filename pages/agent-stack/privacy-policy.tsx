import { Container } from 'components/common/Container';
import { Jumbotron } from 'components/common/Jumbotron';
import Layout from 'components/Layout';
import { Lock } from 'components/icons'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    '& h3': {
      fontWeight: 'bold'
    }
  }
})

export default function PrivacyPolicy() {
  const classes = useStyles();

  return (
    <Layout
      title='Privacy Policy - Agent Stack'
      description='Learn how Agent Stack collects, uses, shares, and deletes information.'
      pageId='agent-stack'
    >
      <Jumbotron>
        <h1>Privacy Policy <Lock /></h1>
        <p>For <b>Agent Stack</b></p>
      </Jumbotron>

      <Container className={ classes.container }>
        <section>
          <i>Last updated: Oct 31, 2026</i>

          <h3>Introduction</h3>
          <p>
            This Privacy Policy explains how Agent Stack handles information. Agent Stack is a private tool that connects our own Meta accounts to an AI assistant, to publish and manage our content. It is not offered to the public.
          </p>

          <h3>Information We Collect</h3>
          <p>
            <b>Account information:</b> access tokens that Meta issues for our own accounts.<br />
            <b>Content and statistics:</b> our posts, their statistics, and the replies and mentions on them, including the public name, profile picture and text of the people who wrote them.<br />
            <b>Public information:</b> where Meta has approved this access, public profiles, Pages and posts on Threads, Facebook and Instagram, including usernames, names, profile pictures, bios, follower counts and post statistics.
          </p>

          <h3>How We Use Information</h3>
          <p>
            We use this information to publish and manage our content, understand how it performs, respond to people, and carry out market research. We do not use it for advertising, and we do not use it to contact people outside normal replies.
          </p>

          <h3>Sharing</h3>
          <p>
            We do not sell this information. It is processed by service providers that help us run Agent Stack.
          </p>

          <h3>Data Retention</h3>
          <p>
            Access tokens are kept, encrypted, until the account is disconnected or the token is replaced. Media attached to a post is deleted within a day. Other information is read when needed and is not stored by Agent Stack. Our service providers may keep it, and short-term technical logs, under their own policies.
          </p>

          <h3>Deleting Your Data</h3>
          <p>
            To ask us to delete information about you, email <a href='mailto:contact@alextitarenko.me'>contact@alextitarenko.me</a>. You can also edit or delete your own replies and posts on Threads, Facebook and Instagram at any time.
          </p>

          <h3>Changes to This Policy</h3>
          <p>
            We may update this policy from time to time. Any changes will be posted on this page.
          </p>

          <h3>Contact</h3>
          <p>
            For questions about this policy, email <a href='mailto:contact@alextitarenko.me'>contact@alextitarenko.me</a>.
          </p>
        </section>
      </Container>
    </Layout>
  )
}
