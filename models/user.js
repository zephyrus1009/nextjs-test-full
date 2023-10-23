// file này dùng để tạo model schema data user. Tức là một user phải có những thông tin gì.
import {Schema, model, models} from 'mongoose';

const UserSchema = new Schema({
  email: {
type: String,
unique: [true, 'Email already exists!'], required: [true,'Email is required!'],
  },
  // các properties unique và required phải là một array 2 thành phần: Thành phần đầu là giá trị khi true và thành phần thứ 2 là giá trị khi false. Ví dụ tính unique của email nếu đúng thì giả về true, nếu sai thì giả về string là Email already exists!
  username: {
type: String, 
required: [true, 'Username is required!'],
match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"],
  },
  image: {
    type: String,
  }
  // chỗ này chưa hiểu lắm vì sao image type là String.
});

const User = models.User ||model("User", UserSchema);
// cú pháp như trên hiểu là nếu đã tồn tại models.User thì dùng luôn, còn không thì mới tạo mới User.
export default User;