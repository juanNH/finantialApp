import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { LoanCalculatorModule } from './modules/loan-calculator/loan-calculator.module';
import { BcraModule } from './modules/bcra/bcra.module';
import { redisStore }from 'cache-manager-redis-yet';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => ({
        store: await redisStore({
          socket: {
            host: process.env.REDIS_HOST,
            port: Number(process.env.REDIS_PORT) || 6379
          }
        })
      })
    }),
    CacheModule.register({ isGlobal: true }),
    ConfigModule.forRoot(),
    LoanCalculatorModule,
    BcraModule,
  ],
})
export class AppModule { }
