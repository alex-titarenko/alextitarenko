import { Handshake } from 'components/icons';
import { Jumbotron } from 'components/Jumbotron';
import Layout from 'components/Layout';

export default function TermsOfService() {
  return (
    <Layout
      title='Terms Of Service - Custom Workouts'
      description='Review our terms and conditions for using our services. By accessing and using our services, you agree to comply with and be bound by these terms.'
      pageId='custom-workouts'
    >
      <Jumbotron>
        <h1 style={{ display: 'flex', gap: 10 }}>Terms Of Service <Handshake /></h1>
        <p>For <b>Custom Workouts</b> app</p>
      </Jumbotron>
    </Layout>
  )
}
