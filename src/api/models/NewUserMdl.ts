import mongoose, { Document, Model, Schema } from "mongoose";

const newUserSchema: Schema = new Schema(
  {
    username: {type:String, required:true},
    mail: { type: String, required: true },
    password: { type: String, required: true },
  },
  { collection: "newUser" }
);

interface InewUser extends Document {
  username: string
  mail: string;
  password: string;
}

const User: Model<InewUser> = mongoose.model<InewUser>("newUser", newUserSchema);

export default User;