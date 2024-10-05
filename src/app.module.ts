import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { RedisOptions } from './config/CacheConfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfig, PostgresConfig } from 'config';
import { BcraPresentationModule } from './contexts/bcra/presentation/bcra-presentation.module';
import { LoanCalculatorPresentationModule } from './contexts/loan-calculator/presentation/loan-calculator-presentation.module';
import { UserPresentationModule } from './contexts/user/presentation/user-presentation.module';
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
    LoanCalculatorPresentationModule,
    BcraPresentationModule,
    UserPresentationModule,
  ],
})
export class AppModule { }
