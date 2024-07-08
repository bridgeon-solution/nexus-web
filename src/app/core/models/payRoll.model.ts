export interface PayRoll {
    employeeId: number,
    paymentDate: Date,
    baseSalary: number,
    deductions: number,
    netPay: number,
    note?: string,
    timestamps?: boolean
}

export interface Invoice {
    id?: number;
    clientName: string;
    deductions: number;
    totalAmount: number;
    invoiceDate: Date;
}