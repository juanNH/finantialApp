import { Test, TestingModule } from '@nestjs/testing';
import { CalculateFrenchSystemUseCase } from '../application/use-cases/calculate-french-system-table/calculate-french-system-table-use-case';
import { amortizationTableMock } from './mocks/table.mock';

describe('CalculateFrenchSystem', () => {
  let service: CalculateFrenchSystemUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculateFrenchSystemUseCase],
    }).compile();

    service = module.get<CalculateFrenchSystemUseCase>(CalculateFrenchSystemUseCase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it(`
  CalculateFrenchSystem Use Case use case
  should return TableFrenchSystem for dto
  {
    loanDebth = 1000,
    yearlyInterest = 5,
    totalYears = 1
  }
  `, async () => {
    const loanDebth = 1000;
    const yearlyInterest = 5;
    const totalYears = 1;

    const result = service.execute({
      loanDebth,
      yearlyInterest,
      totalYears,
    });

    jest.spyOn(service, 'execute').mockReturnValue(amortizationTableMock);

    expect(result).toEqual(amortizationTableMock);
  });
});