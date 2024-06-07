import { Test, TestingModule } from '@nestjs/testing';
import { BcraResolver } from './bcra.resolver';
import { BcraService } from './bcra.service';

describe('BcraResolver', () => {
  let resolver: BcraResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BcraResolver, BcraService],
    }).compile();

    resolver = module.get<BcraResolver>(BcraResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
