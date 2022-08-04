import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from './rooms.schema';

@Injectable()
export class RoomsService {
  constructor(@InjectModel('Room') private readonly RoomModel: Model<Room>) {}

  createRoom() {}
  updateRoom() {}
  deleteRoom() {}
  async getRoom(id: string): Promise<Room> {
    return await this.RoomModel.findById(id);
  }
  async getAllRooms(q) {
    return await this.RoomModel.find(q);
  }
}
