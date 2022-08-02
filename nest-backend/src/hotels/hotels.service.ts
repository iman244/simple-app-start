import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hotel } from './hotels.model';

@Injectable()
export class HotelsService {
  constructor(
    @InjectModel('Hotel') private readonly HotelModel: Model<Hotel>,
  ) {}

  createHotel() {}
  updateHotel() {}
  deleteHotel() {}
  async getHotel(): Promise<Hotel> {
    return { id: '1', name: 'ali', roomsId: ['1'] };
  }
  getAllHotels() {}
}
