abstract class Department {
  static fiscalYear = 2022;
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
    // this.id = id;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;
  // console.log(`Department (${this.id}):${this.name}`);

  addEmployee(employee: string) {
    this.employees.push(employee);
    // this.id = 'd2';
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('IT Department - ID' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found!');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass a valid value!');
    }

    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }
  addEmployee(name: string) {
    if (name === 'Milan') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
  describe() {
    console.log('Accounting Department -ID' + this.id);
  }
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }
}

const employee1 = Department.createEmployee('Igor');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('id', ['Milan']);

it.addEmployee('Max');
it.addEmployee('Milan');

console.log(it);

it.describe();
it.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();

console.log(it);

// const accounting = new AccountingDepartment('d2', []);

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);

accounting.mostRecentReport = 'Year end report';

accounting.addReport('Something went wrong...');

console.log(accounting.mostRecentReport);

accounting.addEmployee('Milan');
accounting.addEmployee('Maximilian');

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();
