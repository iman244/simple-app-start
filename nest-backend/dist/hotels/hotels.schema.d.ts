import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare type HotelDocument = Hotel & Document;
export declare class Hotel {
    name: string;
    rooms: string[];
}
export declare const HotelSchema: mongoose.Schema<Hotel, mongoose.Model<Hotel, any, any, any, any>, {}, {}, {}, {}, "type", Hotel>;
