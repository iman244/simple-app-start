import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { HotelsModule } from './hotels/hotels.module';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://iman244:tn6GeLcHmxgQobRu@imanlab.djjqy6q.mongodb.net/graphql-booking-play',
    ),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    HotelsModule,
    RoomsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
