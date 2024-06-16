import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { LoanCalculatorModule } from './modules/loan-calculator/loan-calculator.module';
import { BcraModule } from './modules/bcra/bcra.module';
import * as redisStore from 'cache-manager-redis-store';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    CacheModule.register({
      useFactory: async () => ({
        store: redisStore as any,
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
        password: process.env.REDIS_PASSWORD || undefined,

        // ttl: 1000,
      }),
      isGlobal: true,
    }),
    ConfigModule.forRoot(),
    LoanCalculatorModule,
    BcraModule,
  ],
})
export class AppModule { }
