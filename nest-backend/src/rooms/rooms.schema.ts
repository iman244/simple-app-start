import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RoomDocument = Room & Document;

@Schema()
export class Room {
  @Prop()
  number: string;

  @Prop()
  hotelId: string;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
