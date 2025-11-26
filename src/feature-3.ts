export function processFeature3Data(data: string[]): string {
  if (data.length === 0) {
    return "No data for Feature 3";
  }
  const processed = data.map(item => item.trim().toUpperCase());
  return `Processed items: ${processed.join(', ')}`;
}

export const FEATURE_3_ENABLED = true;
