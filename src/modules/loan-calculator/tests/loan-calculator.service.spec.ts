import { Test, TestingModule } from '@nestjs/testing';
import { LoanCalculatorService } from '../loan-calculator.service';
import { amortizationTableMock } from './mocks';

describe('LoanCalculatorService', () => {
  let service: LoanCalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoanCalculatorService],
    }).compile();

    service = module.get<LoanCalculatorService>(LoanCalculatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it(`
  loanCalculatorTableFrenchSystem Service
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

    const result = service.loanCalculatorTableFrenchSystem({
      loanDebth,
      yearlyInterest,
      totalYears,
    });

    jest.spyOn(service, 'loanCalculatorTableFrenchSystem').mockReturnValue(amortizationTableMock);

    expect(result).toEqual(amortizationTableMock);
  });
});
