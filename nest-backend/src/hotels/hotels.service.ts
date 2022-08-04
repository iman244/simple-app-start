import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hotel } from './hotels.schema';

@Injectable()
export class HotelsService {
  constructor(
    @InjectModel('Hotel') private readonly HotelModel: Model<Hotel>,
  ) {}

  createHotel() {}
  updateHotel() {}
  deleteHotel() {}
  async getHotel(id: string): Promise<Hotel> {
    return await this.HotelModel.findById(id);
  }
  getAllHotels() {}
}
