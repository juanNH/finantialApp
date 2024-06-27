import { Test, TestingModule } from '@nestjs/testing';
import { BcraResolver } from './bcra.resolver';
import { BcraService } from './bcra.service';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';
import { redisConfig } from './../../config/CacheConfig';

describe('BcraResolver', () => {
  let resolver: BcraResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BcraResolver, BcraService],
      imports: [
        HttpModule, 
        CacheModule.register(redisConfig)],
    }).compile();

    resolver = module.get<BcraResolver>(BcraResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
