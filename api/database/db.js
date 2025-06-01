const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" MongoDB Atlas conectado com sucesso!");
  } catch (err) {
    console.error("🔴 Erro ao conectar com MongoDB:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
