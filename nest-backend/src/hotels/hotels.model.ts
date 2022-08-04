import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Room } from 'src/rooms/rooms.model';

@ObjectType()
export class Hotel {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field((type) => [Room])
  rooms: Room[];
}
