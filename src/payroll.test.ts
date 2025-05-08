import { calculatePayslip } from "./payroll";

describe("calculatePayslip", () => {
    test("16-Jähriger Lernender mit 700.-", () => {
        const salary = {
            born: new Date(Date.parse("2007-01-01 00:00:00+01:00")),
            payday: new Date(Date.parse("2023-01-01 00:00:00+01:00")),
            gross: 700,
        };
        expect(() => calculatePayslip(salary)).toThrow("Lernende unter 17 Jahren haben keine Abzüge.");
    });
})