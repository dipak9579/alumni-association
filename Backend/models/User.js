import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'alumni'], required: true },
  enrollmentYear: { type: Number, required: function() { return this.role === 'student'; } },
  graduationYear: { type: Number, required: function() { return this.role === 'alumni'; } },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('User', UserSchema);
