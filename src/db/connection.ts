import {connect} from 'mongoose';
import { disconnect } from 'process';

//Pass: ZPsQ5m7c0JEP2O7B

async function connectToDatabase(){
    try {
       await connect(process.env.MONGODB_URL); 
    } catch (error) {
        console.log(error);
        throw new Error("Cannot Connect To MongoDB")
    }
}
async function disconnectFromDatabase() {
    try {
        await disconnect();
    } catch (error) {
        console.log(error);
        throw new Error('Could not Disconnect from MongoDB');
    }
}
export {connectToDatabase, disconnectFromDatabase };