// file này nhằm mục đích đẩy dữ liệu prompt lên database
import {connectToDB} from '@utils/database';
import Prompt from '@models/prompt';
// import model Prompt để có thể dùng tạo prompt
export const POST = async (req) => {
  const {userId, prompt, tag} = await req.json();
  try {
    await connectToDB();
    const newPrompt = new Prompt({creator: userId,
      prompt, 
    tag
  });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt),{status:201})
  } catch (error) {
    return new Response('Failed to create a new prompt!', {status:500});
  }
}