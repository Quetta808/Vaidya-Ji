const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Industry best practice: Establish connection with strict configuration flags
        const conn = await mongoose.connect(process.env.MONGO_URI);
        
        console.log(`[DATABASE] Secure Connection Established: ${conn.connection.host}`);
    } catch (error) {
        console.error(`[DATABASE ERROR] Connection failed: ${error.message}`);
        // Exit process with failure code (stops server if database fails to connect)
        process.exit(1);
    }
};

module.exports = connectDB;
