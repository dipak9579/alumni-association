import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded user information (id and role) to req
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};


export const isAlumni = (req, res, next) => {
  if (req.user.role !== 'alumni') {
    return res.status(403).json({ message: 'Access denied' });
  }
  next();
};

