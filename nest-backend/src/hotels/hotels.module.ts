import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomSchema } from 'src/rooms/rooms.schema';
import { RoomsService } from 'src/rooms/rooms.service';
import { HotelsResolver } from './hotels.resolver';
import { HotelSchema } from './hotels.schema';
import { HotelsService } from './hotels.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Hotel', schema: HotelSchema },
      { name: 'Room', schema: RoomSchema },
    ]),
  ],
  providers: [HotelsService, HotelsResolver, RoomsService],
})
export class HotelsModule {}
