import { Component, OnInit } from '@angular/core';
import { PayRollApiInterface } from 'src/app/core/models/api.model';
import { PayRollService } from 'src/app/core/services/pay-roll.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Invoice } from 'src/app/core/models/payRoll.model';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-download-pay-slip',
  templateUrl: './download-pay-slip.component.html',
  styleUrls: ['./download-pay-slip.component.css']
})
export class DownloadPaySlipComponent implements OnInit {
  paySlip: PayRollApiInterface[] = [];
  invoices: Invoice;


  ngOnInit(): void {
    this.getPaySlipById()
  }

  constructor(private payRollService: PayRollService) { }

  getPaySlipById() {
    this.payRollService.getPaySlipById().subscribe((res: { status: string, data: PayRollApiInterface }) => {
      this.paySlip.push(res.data);
      this.invoices = {
        id:res.data.findedEmployess.id,
        clientName:res.data.findedEmployess.fullname,
        deductions:res.data.findedEmployess.deduction,
        invoiceDate:new Date(res.data.pX.paymentDate),
        totalAmount:res.data.pX.netPay
      }
    })
  }

  downloadInvoice() {
    const documentDefinition = this.createInvoiceDocument(this.invoices);
    pdfMake.createPdf(documentDefinition).download(`Invoice_${this.invoices.id}.pdf`);
  }

  createInvoiceDocument(invoice: Invoice) {
    console.log(invoice);
    return {
      content: [
        { text: `Invoice #${invoice.id}`, style: 'header' },
        { text: `Client: ${invoice.clientName}`, style: 'subheader' },
        { text: `Date: ${invoice.invoiceDate.toLocaleDateString()}`, style: 'subheader' },
        { text: 'Receipt:', style: 'subheader' },
        {
          table: {
            widths: ['*', 'auto'],
            body: [
              ['Description', 'Amount'],
              // ...itemsTable,
              ['Total', { text: invoice.totalAmount, alignment: 'right' }]
            ]
          }
        }
      ],
      styles: {
        header: { fontSize: 22, bold: true, margin: [0, 0, 0, 10] },
        subheader: { fontSize: 16, margin: [0, 10, 0, 5] }
      }
    };
  }
}
