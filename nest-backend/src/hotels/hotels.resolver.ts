import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { RoomsService } from 'src/rooms/rooms.service';
import { Hotel } from './hotels.model';
import { HotelsService } from './hotels.service';

@Resolver((of) => Hotel)
export class HotelsResolver {
  constructor(
    private HotelsService: HotelsService,
    private RoomsService: RoomsService,
  ) {}

  @Query((returns) => Hotel)
  async hotel(@Args('id') id: string) {
    return this.HotelsService.getHotel(id);
  }

  @ResolveField()
  async rooms(@Parent() hotel: Hotel) {
    const { id } = hotel;
    return this.RoomsService.getAllRooms({ hotelId: id });
  }
}
