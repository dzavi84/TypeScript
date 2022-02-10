"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // private name: string;
        this.employees = [];
        // this.name = n;
        // this.id = id;
    }
    static createEmployee(name) {
        return { name: name };
    }
    // console.log(`Department (${this.id}):${this.name}`);
    addEmployee(employee) {
        this.employees.push(employee);
        // this.id = 'd2';
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2022;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT Department - ID' + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found!');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass a valid value!');
        }
        this.addReport(value);
    }
    addEmployee(name) {
        if (name === 'Milan') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
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
