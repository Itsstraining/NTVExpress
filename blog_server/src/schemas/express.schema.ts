import { HydratedDocument } from "mongoose";
import { Schema, Prop, SchemaFactory} from '@nestjs/mongoose';

export type ExpressDocument = HydratedDocument<Express>;
@Schema()
export class Express {
    @Prop({required: true})
    id: string;

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    title: string;

    @Prop({required: true})
    content: string;
}

export const ExpressSchema = SchemaFactory.createForClass(Express);