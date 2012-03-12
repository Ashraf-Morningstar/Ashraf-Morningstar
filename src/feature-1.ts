export interface Feature1Options {
  message?: string;
  count?: number;
}

export function initializeFeature1(options: Feature1Options = {}): string {
  const { message = "Feature 1 initialized!", count = 0 } = options;
  console.log(`Log from Feature 1: ${message} (Count: ${count})`);
  return `Feature 1 setup complete with message: "${message}"`;
}

export const FEATURE_1_NAME = "MyAwesomeFeature1";
