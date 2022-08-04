import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Hotel } from 'src/hotels/hotels.model';

@ObjectType()
export class Room {
  @Field((type) => ID)
  id: string;

  @Field((type) => Int)
  number: number;

  @Field((type) => Hotel)
  hotelId: Hotel;
}
