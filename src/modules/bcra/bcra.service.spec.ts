import { Test, TestingModule } from '@nestjs/testing';
import { BcraService } from './bcra.service';

describe('BcraService', () => {
  let service: BcraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BcraService],
    }).compile();

    service = module.get<BcraService>(BcraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
