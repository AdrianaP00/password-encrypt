import mongoose, { Document, Model, Schema } from "mongoose";

const userSchema: Schema = new Schema(
  {
    mail: { type: String, required: true },
    password: { type: String, required: true },
  },
  { collection: "user" }
);

interface IUser extends Document {
  mail: string;
  password: string;
}

const User: Model<IUser> = mongoose.model<IUser>("user", userSchema);

export default User;