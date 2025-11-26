const productSchema = new mongoose.Schema({ name: String, description: String, tags: [String] });
productSchema.index({ name: 'text', description: 'text', tags: 'text' });