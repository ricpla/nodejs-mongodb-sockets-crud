import { connect } from 'mongoose'

export const connectDB = async () => {
    try {
        await connect('')
        console.log('connect to DB');
    } catch (error) {
        console.error(error);
    }
}