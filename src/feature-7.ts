export interface FeatureSevenOptions {
  threshold?: number;
  enabled?: boolean;
}

export function initializeFeatureSeven(options: FeatureSevenOptions = {}): string {
  const { threshold = 10, enabled = true } = options;

  if (!enabled) {
    return "Feature 7 is disabled.";
  }

  if (threshold < 0) {
    console.warn("Feature 7 threshold cannot be negative.");
  }

  return `Feature 7 initialized with threshold: ${threshold}`;
}
