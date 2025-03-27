// Admin login
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Find admin by email
        const admin = await Admin.findOne({ where: { email } });
        if (!admin) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Don't send password back
        const adminData = admin.toJSON();
        delete adminData.password;

        res.status(200).json({
            message: 'Login successful',
            admin: adminData
        });
    } catch (error) {
        next(error);
    }
};