import { Test, TestingModule } from '@nestjs/testing';
import { BcraService } from './bcra.service';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';
import { redisConfig } from './../../config/CacheConfig';

describe('BcraService', () => {
  let service: BcraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BcraService],
      imports: [
        HttpModule,
        CacheModule.register(redisConfig)
      ]
    }).compile();

    service = module.get<BcraService>(BcraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
