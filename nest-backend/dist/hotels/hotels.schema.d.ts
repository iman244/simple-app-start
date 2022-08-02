import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Room } from 'src/rooms/rooms.schema';
export declare type HotelDocument = Hotel & Document;
export declare class Hotel {
    name: string;
    rooms: Room[];
}
export declare const HotelSchema: mongoose.Schema<Hotel, mongoose.Model<Hotel, any, any, any, any>, {}, {}, {}, {}, "type", Hotel>;
