import { Container } from 'components/common/Container';
import { Jumbotron } from 'components/Jumbotron';
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
      title='Privacy Policy - Custom Workouts'
      description='Learn how we collect, use, share, and protect your personal information.'
      pageId='custom-workouts'
    >
      <Jumbotron>
        <h1>Privacy Policy <Lock /></h1>
        <p>For <b>Custom Workouts</b> app</p>
      </Jumbotron>

      <Container className={ classes.container }>
        <section id="content">
          <i>Last updated: Jan 14, 2025</i>

          <h3>
            Introduction
          </h3>
          <p>
            Your privacy is important to us. This Privacy Policy outlines how we handle your data when you use our app.
          </p>

          <h3>Data Collection</h3>
          <p>
            <b>Personal Information:</b> We do not collect any personal information or analytics data from users.<br />
            <b>iCloud Sync:</b> Our app uses Apple’s iCloud service to sync user data across their devices. This means your workout data is stored in your iCloud account and shared between your devices.
          </p>

          <h3>Data Usage</h3>
          <p>
            <b>iCloud Data:</b> The data synced via iCloud is used solely for providing you with a seamless experience across your devices.
          </p>

          <h3>Data Sharing</h3>
          <p>
            We do not share your data with any third parties.
          </p>

          <h3>Data Security</h3>
          <p>
            Your data’s security is important to us. We rely on Apple’s iCloud security measures to protect your data.
          </p>

          <h3>Changes to This Privacy Policy</h3>
          <p>
            We may update our Privacy Policy from time to time. Any changes will be posted on this page.
          </p>
        </section>
      </Container>
    </Layout>
  )
}
