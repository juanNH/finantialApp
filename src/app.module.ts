import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { LoanCalculatorModule } from './modules/loan-calculator/loan-calculator.module';
import { BcraModule } from './modules/bcra/bcra.module';
import { RedisOptions } from './config/CacheConfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfig, PostgresConfig } from 'config';
import { UserModule } from './modules/user/user.module';
@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true, cache:true, load:[AppConfig, PostgresConfig]}),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useFactory:(configService: ConfigService) => ({
        ...configService.get('postgres')
      }),
      inject: [ConfigService]
    }),
    CacheModule.registerAsync(RedisOptions),
    LoanCalculatorModule,
    BcraModule,
    UserModule,
  ],
})
export class AppModule { }
