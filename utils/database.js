// file này để kết nối tới database
import mongoose from 'mongoose';
let isConnected = false; // biến để track connection status
export const connectToDB = async () => {
  mongoose.set('strictQuery',true);
  // nếu đã kết nối rồi thì hiện thông báo
  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

// nếu chưa kết nối thì cố kết nối
try {
  await mongoose.connect(process.env.MONGODB_URI,{dbName: 'share_prompt',useNewUrlParser:true,useUnifiedTopology:true,})
  isConnected = true;
  console.log('MongoDB connected')
} catch (error) {
  console.log(error);
}

}