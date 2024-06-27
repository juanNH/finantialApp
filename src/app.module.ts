import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { LoanCalculatorModule } from './modules/loan-calculator/loan-calculator.module';
import { BcraModule } from './modules/bcra/bcra.module';
import { redisConfig } from './config/CacheConfig';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    CacheModule.register(redisConfig),
    ConfigModule.forRoot(),
    LoanCalculatorModule,
    BcraModule,
  ],
})
export class AppModule { }
