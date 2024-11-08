import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role, enrollmentYear, graduationYear } = req.body;

    // Validate the role
    if (!['student', 'alumni'].includes(role)) {
      return res.status(400).json({ message: 'Role must be either student or alumni' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user based on role
    const userData = {
      name,
      email,
      password: hashedPassword,
      role,
    };

    if (role === 'student') {
      userData.enrollmentYear = enrollmentYear;
    } else if (role === 'alumni') {
      userData.graduationYear = graduationYear;
    }

    const user = await User.create(userData);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login User
export const loginUser = async (req, res) => {
    const { email, password, role } = req.body;
  
    try {
      // Check if the user exists and matches the role
      const user = await User.findOne({ email, role });
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials or role' });
      }
  
      // Compare the provided password with the hashed password in the database
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Create JWT token
      const token = jwt.sign(
        { id: user._id, role: user.role }, // Payload contains user id and role
        process.env.JWT_SECRET, // Secret key from .env file
        { expiresIn: '1h' } // Token expiration time
      );
  
      // Respond with the token
      res.json({ message: 'Logged in successfully', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
