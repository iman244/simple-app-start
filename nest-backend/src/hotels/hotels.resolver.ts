import { Query, Resolver } from '@nestjs/graphql';
import { Hotel } from './hotels.model';
import { HotelsService } from './hotels.service';

@Resolver(() => Hotel)
export class HotelResolver {
  constructor(private readonly HotelService: HotelsService) {}

  @Query(() => Hotel, { name: 'hotel', nullable: true })
  async getHotel(): Promise<Hotel> {
    return this.HotelService.getHotel();
  }
}
