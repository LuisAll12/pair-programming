export type Salary = {
  born: Date;
  payday: Date;
  gross: number;
};

export type Deductions = Map<string, number>;

export const DEDUCTION_RATES: Deductions = new Map([
  ["AHV", 8.7],
  ["IV", 1.4],
  ["EO", 0.5],
  ["ALV", 1.1],
  ["NBU", 0.73],
  ["PK", 8.9],
]);

export type Payslip = {
  salary: Salary;
  deductions: Deductions;
  totalDeductions: number;
  net: number;
};

export function calculatePayslip(salary: Salary): Payslip {
  // TODO: implement
  const above17 = getAge(salary.born, salary.payday);
  let totalDeducitions = 0.0;
  if (above17) {
    const deductions = new Map<string, number>();

    for (const [key, value] of DEDUCTION_RATES) {
      totalDeducitions += (value / 100) * salary.gross;
    }

  }

  const result: Payslip = {
    salary: salary,
    deductions: new Map(),
    totalDeductions: 0.0,
    net: salary.gross,
  };
  return result;
}

function getAge(born: Date, payday: Date): boolean {

  const birthDate = new Date(born);
  const payDate = new Date(payday);

  const age =  payDate.getFullYear() - birthDate.getFullYear();

  if (age > 17) {
    return true;
  }
  else {
    throw new Error("Lernende unter 17 Jahren haben keine Abzüge.");
    return false;
  }
}
