import { Jumbotron } from 'components/Jumbotron';
import Layout from 'components/Layout';
import { Lock } from 'components/icons'

export default function PrivacyPolicy() {
  return (
    <Layout
      title='Privacy Policy - Custom Workouts'
      description='Learn how we collect, use, share, and protect your personal information.'
      pageId='custom-workouts'
    >
      <Jumbotron>
        <h1 style={{ display: 'flex', gap: 10 }}>
        Privacy Policy <Lock />
        </h1>
        <p>For <b>Custom Workouts</b> app</p>
      </Jumbotron>
    </Layout>
  )
}
