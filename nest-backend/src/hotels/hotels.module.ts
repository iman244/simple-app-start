import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomSchema } from 'src/rooms/rooms.schema';
import { HotelSchema } from './hotels.schema';
import { HotelsService } from './hotels.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Hotel', schema: HotelSchema },
      { name: 'Room', schema: RoomSchema },
    ]),
  ],
  providers: [HotelsService],
})
export class HotelsModule {}
