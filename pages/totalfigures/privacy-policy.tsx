import { Callout } from 'components/common/Callout';
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

const appName = 'TotalFigures';
const lastUpdated = 'March 30, 2026';

export default function PrivacyPolicy() {
  const classes = useStyles();

  return (
    <Layout
      title={`Privacy Policy - ${appName}`}
      description={`Learn how ${appName} handles your data. We do not collect any personal information.`}
      pageId='totalfigures'
    >
      <Jumbotron>
        <h1>Privacy Policy <Lock /></h1>
        <p>For <b>{appName}</b> app</p>
      </Jumbotron>

      <Container className={ classes.container }>
        <section>
          <i>Last updated: {lastUpdated}</i>

          <Callout>
            <h4><b>The Short Version</b></h4>
            <p>
              <i>
                {appName} does not collect, store, or transmit your personal data to any server.
              All of your financial information stays on your device and in your personal iCloud account.
              </i>
            </p>
          </Callout>

          <h3>What Data You Enter</h3>
          <p>
            {appName} helps you track your finances — accounts, balances, transactions, and net worth.
            All data you enter into the app is created and managed by you.
          </p>
          <p>
            Certain fields, such as the last four digits of an account number or an address, are entirely optional.
            These exist solely to support automated workflows like auto-importing balances and transactions,
            and are never required to use the app.
          </p>

          <h3>Where Your Data Is Stored</h3>
          <p>
            All data is stored locally on your device. iCloud sync is enabled by default, which means your data
            is also stored in your personal iCloud account using Apple&apos;s CloudKit service. You can disable iCloud
            sync at any time in your device&apos;s System Settings. Whether synced or not, your data is encrypted and
            managed under your own Apple ID — we have no access to it.
          </p>
          <p>
            We do not operate any servers that receive or store your financial data. There is no account to create,
            no sign-up required, and no data transmitted to us or any third party.
          </p>

          <h3>FinanceKit and Account Data</h3>
          <p>
            {appName} may use Apple&apos;s FinanceKit APIs to access financial account information (such as account
            details, balances, and transactions) with your explicit consent. This data is referred to as
            &quot;Account Data&quot; under Apple&apos;s FinanceKit terms.
          </p>
          <p>
            When you grant access, {appName} collects only the minimum Account Data necessary to provide
            the features you use. This data is processed and stored entirely on your device and in your personal
            iCloud account — it is never sent to us or any third party.
          </p>
          <p>
            You can revoke FinanceKit access at any time through your device settings. If you revoke access,
            previously imported data will be handled in accordance with this policy and any applicable laws.
            You may delete it at any time from within the app.
          </p>
          <p>
            Account Data is never used for advertising, marketing, or shared with data brokers, affiliates,
            or information resellers.
          </p>

          <h3>Apple Shortcuts and Automations</h3>
          <p>
            {appName} supports Apple Shortcuts for automating tasks such as processing information from
            Messages or email. All such processing happens entirely on your device. No message content, email
            content, or other personal information is sent to any external server as part of these automations.
          </p>

          <h3>AI and On-Device Processing</h3>
          <p>
            If {appName} offers any AI-powered features, they use Apple&apos;s foundation models running locally
            on your device. Your financial data is not sent to any cloud service or third-party API for AI processing.
          </p>

          <h3>Shared Profiles</h3>
          <p>
            {appName} offers shared profiles functionality that lets you collaborate on finance tracking with other
            people, such as a partner or family member. Sharing is powered entirely by Apple&apos;s CloudKit sharing —
            the shared data remains stored in the owner&apos;s iCloud account and is made accessible to invited participants via their Apple IDs.
          </p>
          <p>
            No shared data passes through our servers. Only the people you explicitly invite can access a Shared
            Profile. You can stop sharing or remove participants at any time.
          </p>

          <h3>Third-Party Services</h3>
          <p>
            {appName} does not integrate any third-party analytics, advertising, or tracking services.
            The app does not contain ads and does not share your data with any external parties.
          </p>
          <p>
            In-app purchases, if any, are handled entirely by Apple through the App Store. We do not collect
            or have access to your payment information.
          </p>

          <h3>Data Security</h3>
          <p>
            Because your data stays on your device and in your personal iCloud account, its security is managed
            by Apple&apos;s built-in protections — including device encryption, iCloud encryption in transit and at
            rest, and your device passcode or biometric authentication.
          </p>
          <p>
            We recommend keeping your device software up to date and using a strong passcode to protect your data.
          </p>

          <h3>Deleting Your Data</h3>
          <p>
            You can delete any data within the app at any time. To remove all data entirely, delete the app from
            your device and remove {appName} data from your iCloud storage in your device settings (unless you
            previously disabled iCloud sync).
          </p>

          <h3>Changes to This Policy</h3>
          <p>
            This privacy policy may be updated at any time. When changes are made, the &quot;Last updated&quot; date at the
            top of this page will be revised. We encourage you to review this page periodically.
          </p>
        </section>
      </Container>
    </Layout>
  )
}
