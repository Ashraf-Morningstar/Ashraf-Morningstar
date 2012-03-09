export function processFeatureData(data: { id: number; value: string }): string {
  if (data.id === 34) {
    return `Feature 34 processed: ${data.value.toUpperCase()}`;
  }
  return `Generic feature processed: ${data.value}`;
}

export const FEATURE_ID_CONSTANT = 34;
