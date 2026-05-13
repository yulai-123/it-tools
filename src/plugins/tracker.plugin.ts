import type { App } from 'vue';

export interface TrackerClient {
  trackEvent: (eventName: string) => void
  enableAutoPageviews: () => void
}

const disabledTracker: TrackerClient = {
  trackEvent: () => {},
  enableAutoPageviews: () => {},
};

export const trackerPlugin = {
  install: (app: App) => {
    app.provide('tracker', disabledTracker);
  },
};
