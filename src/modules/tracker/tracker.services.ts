import { inject } from 'vue';
import type { TrackerClient } from '@/plugins/tracker.plugin';

export { createTrackerService, useTracker };

function createTrackerService({ trackerClient }: { trackerClient: TrackerClient }) {
  return {
    trackEvent({ eventName }: { eventName: string }) {
      trackerClient.trackEvent(eventName);
    },
  };
}

function useTracker() {
  const trackerClient: TrackerClient | undefined = inject('tracker');

  if (!trackerClient) {
    throw new TypeError('Tracker must be instantiated');
  }

  const tracker = createTrackerService({ trackerClient });

  return {
    tracker,
  };
}
