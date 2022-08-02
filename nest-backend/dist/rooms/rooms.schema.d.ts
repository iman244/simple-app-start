import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Hotel } from 'src/hotels/hotels.schema';
export declare type RoomDocument = Room & Document;
export declare class Room {
    number: number;
    hotel: Hotel;
}
export declare const RoomSchema: mongoose.Schema<Room, mongoose.Model<Room, any, any, any, any>, {}, {}, {}, {}, "type", Room>;
