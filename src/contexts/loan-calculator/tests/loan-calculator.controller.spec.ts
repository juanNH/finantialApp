import { Test, TestingModule } from '@nestjs/testing';
import { LoanCalculatorController } from '../presentation/loan-calculator.controller';
import { CalculateFrenchSystemUseCase } from '../application/use-cases/calculate-french-system-table/calculate-french-system-table-use-case';
import { amortizationTableMock } from './mocks/table.mock';
describe('LoanCalculatorController', () => {
  let controller: LoanCalculatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoanCalculatorController],
      providers: [CalculateFrenchSystemUseCase],
    }).compile();

    controller = module.get<LoanCalculatorController>(LoanCalculatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
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

    const result = controller.loanCalculatorTableFrenchSystem({
      loanDebth,
      yearlyInterest,
      totalYears,
    });

    jest.spyOn(controller, 'loanCalculatorTableFrenchSystem').mockReturnValue(amortizationTableMock);

    expect(result).toEqual(amortizationTableMock);
  });
});
