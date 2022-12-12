import mongoose, { HydratedDocument } from "mongoose";
import { Schema, Prop, SchemaFactory} from '@nestjs/mongoose';

export type ExpressDocument = HydratedDocument<Express>;
@Schema({
    timestamps: true,
})
export class Express {


    @Prop({required: true})
    title: string;

    @Prop({required: true})
    content: string;

    @Prop({default: Array})
    image: Array<{
        url: string;
        hashTag: string;
    }>;

    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId, ref: "users"
    })
    authorId: string;

    @Prop({default: Array})
    tags: string;

    @Prop({
        default: Array,
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "users"}]
    })
    likes: [];

    @Prop({
        default: Array,
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "comments"}]
    })
    comments: [];

    @Prop({required: true})
    coverImage: string;

    @Prop({default: Array<string>})
    links: Array<string>;
}

export const ExpressSchema = SchemaFactory.createForClass(Express);