import { Model } from 'mongoose';
import { Hotel } from './hotels.schema';
export declare class HotelsService {
    private readonly HotelModel;
    constructor(HotelModel: Model<Hotel>);
    createHotel(): void;
    updateHotel(): void;
    deleteHotel(): void;
    getHotel(id: string): Promise<Hotel>;
    getAllHotels(): void;
}
