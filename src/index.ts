import app from './app.js';
import { connectToDatabase } from './db/connection.js';

//connections and Listeners
const PORT = process.env.PORT || 5001
connectToDatabase()
.then(() => {
  app.listen(PORT, () => console.log('Server Started & Connected to Database 🤟'));
})
.catch((err) => console.log(err));

