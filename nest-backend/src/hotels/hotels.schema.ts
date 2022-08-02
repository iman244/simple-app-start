import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Room } from 'src/rooms/rooms.schema';

export type HotelDocument = Hotel & Document;

@Schema()
export class Hotel {
  @Prop()
  name: string;

  @Prop()
  rooms: string[];
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
