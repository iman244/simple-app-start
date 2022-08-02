import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Hotel } from 'src/hotels/hotels.schema';

export type RoomDocument = Room & Document;

@Schema()
export class Room {
  @Prop()
  number: number;

  @Prop()
  hotel: string;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
