import { ApplicationInsights } from '@microsoft/applicationinsights-web';

class PRApplicationInsights extends ApplicationInsights {
  trackDuration(eventName: string) {
    const now = Date.now();
    const duration = now - LastActivityTime.value;
    LastActivityTime.value = now;

    this.trackEvent({ name: eventName }, { duration });
  }
}
