import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";


export type UserDocument = User & Document;

@Schema({
    timestamps: true,
})
export class User {
    @Prop({
        required: true,
    })
    name: string;

    @Prop({
        required: true,
    })
    email: string;

    @Prop()
    dob: string;

    @Prop()
    photoURL: string;

    @Prop()
    description: string;

    @Prop()
    website: string;

    @Prop({
        default: Array,
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'posts' }],
    })
    posts: [];

    @Prop({
        default: Array,
    })
    interests: Array<String>
}

export const UserSchema = SchemaFactory.createForClass(User);