import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Auth {
    @Prop({ unique: true, required: true })
    name: string

    @Prop({ unique: true, required: true })
    username: string

    @Prop({ required: true })
    password: string
}

export const AuthSchema = SchemaFactory.createForClass(Auth);