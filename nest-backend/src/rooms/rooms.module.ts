import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomSchema } from './rooms.schema';
import { RoomsService } from './rooms.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Room', schema: RoomSchema }])],
  exports: [RoomsService],
  providers: [RoomsService],
})
export class RoomsModule {}
