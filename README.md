# Pair Programming

Diese Aufgaben werden zu zweit im [Pair Programming](https://m426.frickelbude.ch/essays/pair-programming/index.html) bearbeitet.

## Aufgabe 0: Schaltjahr (Aufwärmübung)

Die Datei `src/utils.ts` enthält eine Funktion namens `isLeapYear`, die für ein gegebenes Jahr zurückgibt, ob es sich hierbei um ein Schaltjahr handelt oder nicht. Die Funktion ist jedoch falsch umgesetzt, wie der Test `src/utils-test.ts` zeigt.

Implementiert die Funktion korrekt, wobei folgende Regeln zu beachten sind:

- Ein Jahr ist ein Schaltjahr, wenn es restlos durch 4 teilbar ist.
    - Ausnahme: Ein Jahr ist _kein_ Schaltjahr, wenn es restlos durch 100 teilbar ist.
        - Ausnahme: Ein Jahr ist _doch_ ein Schaltjahr, wenn es restlos durch 400 teilbar ist.

Am Ende müssen alle Tests durchlaufen.

## Aufgabe 1: Ferientagsberechnung

In `src/vacation-days.ts` ist eine Datenstruktur namens `Employment` (Anstellung) definiert. Eine Anstellung ist durch zwei Daten begrenzt (`startDate`, `untilDate`) und verfügt über einen Beschäftigungsgrad in Prozent (`percentage`). Zusätzlich gibt es eine Anzahl Ferientage pro Jahr (`vacationDays`), die sich auf ein 100%-Pensum beziehen.

Ein Angestellter erhält jedoch nur die vollen Ferientage, wenn

1. die Anstellung das ganze Jahr dauert und
2. die Anstellung ein Pensum von 100% umfasst.

Ansonsten werden die Ferientage verhältnismässig ("pro rata") nach der tatsächlichen Anstellungsdauer (Anzahl Tage) und dem Pensum gekürzt.

Beispiel: Dauert die Anstellung mit 25 Ferientagen nur vom 1. Januar 2025 bis am 31. März 2025 und beträgt ihr Pensum nur 70%, werden nur `25 * (31+28+31)/365 * 0.7 = 4.32` Ferientage gutgeschrieben.

Bei der Berechnung müssen die tatsächlichen Tage pro Monat und Schaltjahre beachtet werden!

Implementiert die Funktion `calculateProRataVacationDays` in `src/vacation-days.ts` und schreibt dazu Tests in `src/vacation-days.test.ts`. Es müssen mindestens folgende Fälle behandelt werden:

1. Eine Vollzeitanstellung über das ganze Jahr (Test vorgegeben).
2. Eine Teilzeitanstellung über das ganze Jahr.
3. Eine Vollzeitanstellung über weniger als das ganze Jahr.
4. Eine Teilzeitanstellung über weniger als das ganze Jahr.

**Wichtig**: Der Datentyp (`Employment`) und die Funktionssignatur (`calculateProRataVacationDays`) dürfen _nicht_ angepasst werden! (Die Implementierung soll auch den Testfällen der anderen Paare genügen.)

## Aufgabe 2: Lohnabrechnung

In `src/payroll.ts` ist eine Datenstruktur namens `Salary` (Gehalt) definiert. Zu jedem Gehalt gibt es ein Geburtsdatum (`born`), den jeweiligen Zahltag (`payday`) und ein Bruttogehalt (`gross`).

Weiter sind der Datentyp `Deductions` (Abzüge) und eine Reihe von konkreten Lohnabzügen (`DEDUCTION_RATES`) definiert. Die Datenstruktur `Payslip` beschreibt eine Lohnabrechnung, welche neben einem Gehalt auch eine Reihe von Abzügen (`deductions`) und ihr Total (`totalDeductions`) enthält. Der Nettolohn (`net`) ist das Bruttogehalt (`salary.gross`) minus Abzüge (`totalDeductions`).

Die Abzüge sollen nach den folgenden Regeln berechnet werden:

- AHV, IV und EO werden ab dem 1. Januar nach dem 17. Geburtstag abgezogen.
- ALV und NBU werden ab einem Jahreslohn(!) von 2'500.- abgezogen.
- Pensionskasse (PK) wird ab einem Jahreslohn von 22'680.- abgezogen.

Implementiert die Funktion `calculatePayslip` gemäss diesen Regeln und schreibt dazu Tests in `src/payroll.test.ts`. Es sollen mindestens folgende Fälle abgedeckt werden:

- ein 16 jähriger Lernender mit einem Monatsgehalt von 700.-
- ein 18 jähriger Lernender mit einem Monatsgehalt von 1200.-
- ein 21 jähriger Angestellter mit einem Monatsgehalt von 5900.-
