import ReactGA from 'react-ga'
import appConfig from '../app.config.json'

export class Analytics {
  private static initialized: boolean = false;

  static init() {
    if (!this.initialized) {
      console.log('GA init')
      ReactGA.initialize(appConfig.google.analyticsId);
      this.initialized = true;
    }
  }

  static logPageView() {
    console.log(`Logging pageview for ${window.location.pathname}`);
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }

  static logEvent(category: string, action: string, label: string) {
    ReactGA.event({ category: category, action: action, label: label })
  }

  static logException (description: string, fatal = false) {
    if (description) {
      ReactGA.exception({ description, fatal })
    }
  }
}
