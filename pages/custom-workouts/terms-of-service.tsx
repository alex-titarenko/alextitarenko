import { Container } from 'components/common/Container';
import { Handshake } from 'components/icons';
import { Jumbotron } from 'components/Jumbotron';
import Layout from 'components/Layout';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    '& h3': {
      fontWeight: 'bold'
    }
  }
})

export default function TermsOfService() {
  const classes = useStyles();

  return (
    <Layout
      title='Terms Of Service - Custom Workouts'
      description='Review our terms and conditions for using our services. By accessing and using our services, you agree to comply with and be bound by these terms.'
      pageId='custom-workouts'
    >
      <Jumbotron>
        <h1>Terms Of Service <Handshake /></h1>
        <p>For <b>Custom Workouts</b> app</p>
      </Jumbotron>

      <Container className={ classes.container }>
        <section id="content">
          <i>Last updated: Jan 14, 2025</i>
          <h3>Acceptance of Terms</h3>
          <p>
            By downloading, accessing, or using our <b>Custom Workouts</b> app (&quot;the App&quot;), you agree to comply with and be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree with these Terms, do not use the App.
          </p>

          <h3>User Responsibilities</h3>
          <p>
            <b>Eligibility:</b> You must be at least 13 years old to use the App. By using the App, you represent and warrant that you meet this age requirement. Younger users should seek parental guidance before using the App.
          </p>

          <h3>Use of the App</h3>
          <p>
            <b>Personal Use:</b> The App is intended for your personal, non-commercial use. You agree not to use the App for any unlawful or prohibited activities.
          </p>
          <p>
            <b>Compliance with Laws:</b> You agree to comply with all applicable laws and regulations when using the App.
          </p>

          <h3>Data and Privacy</h3>
          <p>
            <b>Data Collection:</b> We do not collect any personal information or analytics data from users.
          </p>
          <p>
            <b>iCloud Sync:</b> The App uses Apple&apos;s iCloud service to sync user&apos;s data across their devices. By using the App, you consent to the use of iCloud for this purpose.
          </p>

          <h3>Intellectual Property</h3>
          <p>
            <b>Ownership:</b> All content, features, and functionality of the App, including but not limited to text, graphics, logos, and software, are owned by or licensed to us and are protected by intellectual property laws.
          </p>

          <p>
            <b>Restrictions:</b> You may not copy, modify, distribute, or create derivative works of any part of the App without our prior written consent.
          </p>

          <h3>Health</h3>
          <p>
            <b>No Liability for Injuries:</b> The workouts created using the App are for informational purposes only. You acknowledge and agree that any physical activity carries inherent risks of injury. We are not responsible or liable for any injuries or damages you may sustain while performing workouts created using the App. It is your responsibility to consult with a healthcare professional before starting any new exercise program.
          </p>

          <h3>Disclaimer of Warranties</h3>
          <p>The App is provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind, either express or implied. We do not warrant that the App will be uninterrupted or error-free.</p>

          <h3>Limitation of Liability</h3>
          <p>To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the App.</p>

          <h3>Changes to Terms</h3>
          <p>
            We may update these Terms from time to time. Any changes will be posted on this page, and your continued use of the App after such changes constitutes your acceptance of the new Terms.
          </p>
        </section>
      </Container>
    </Layout>
  )
}
