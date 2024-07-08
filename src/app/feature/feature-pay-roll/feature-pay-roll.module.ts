import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneratePaySlipComponent } from './generate-pay-slip/generate-pay-slip.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ViewPaySlipComponent } from './view-pay-slip/view-pay-slip.component';
import { PaySlipComponent } from './pay-slip/pay-slip.component';
import { DownloadPaySlipComponent } from './download-pay-slip/download-pay-slip.component';
import { MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
  declarations: [
    GeneratePaySlipComponent,
    ViewPaySlipComponent,
    PaySlipComponent,
    DownloadPaySlipComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule
  ]
})
export class FeaturePayRollModule { }
