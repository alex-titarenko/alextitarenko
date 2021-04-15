function gtag(command: string, ...parameters: any[]) {
  const gtagObj: any = (window as any).gtag;
  gtagObj && gtagObj(command, ...parameters);
}

export function trackEvent(eventName: string, parameters?: {}) {
  gtag('event', eventName, parameters);
}
