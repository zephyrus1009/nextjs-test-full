// file này define schema data model cho prompt
// cũng tương đối giống như tạo class
import {Schema, model, models} from 'mongoose';

const PromptSchema = new Schema({
  creator: {
type: Schema.Types.ObjectId,
ref: 'User'
  },
 prompt: {
type: String,
required: [true,'Prompt is required']
 },
 tag: {
type: String,
required: [true, 'Tag is required']
 }
});
//PromptSchema sẽ chứa các thông tin về creator (người tạo prompt),các thông tin về prompt và tag
const Prompt = models.Prompt || model('Prompt', PromptSchema);
// Dòng này hiểu như sau:
//This line of code is useful when you want to ensure that you are using a single instance of a Mongoose model throughout your application. By checking if the model already exists in the registry, you can avoid creating multiple instances of the same model.
//The models.Prompt statement checks if the Prompt model already exists in the Mongoose models registry. If it does, the existing model is returned and assigned to the Prompt constant.
//If the Prompt model does not exist in the registry, the model() function is called to create a new model with the name 'Prompt' and the schema defined in PromptSchema. This new model is then assigned to the Prompt constant.
export default Prompt;