import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const { ADMIN_USERNAME, ADMIN_PASSWORD, JWT_SECRET } = process.env;

// Hash admin password
const hashedPassword = bcrypt.hashSync(ADMIN_PASSWORD, 10);

/**
 * Admin login handler
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
export const loginAdmin = async (req, res) => {
    const { username, password } = req.body;

    if (username === ADMIN_USERNAME && bcrypt.compareSync(password, hashedPassword)) {
        // Generate JWT
        const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ token });
    } else {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
};

export const getProtectedRoute = (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
};