import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LeaveService } from 'src/app/core/services/leave.service';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent {

  constructor(private leaveService: LeaveService, private dialogRef: MatDialogRef<ConfirmationModalComponent>, @Inject(MAT_DIALOG_DATA) public data: { leaveStatus: string, id: string }) { }

  onConfirm(): void {
    if (this.data.leaveStatus === 'approved') {
      this.leaveService.leaveApproveUpdate(this.data.id).subscribe((res) => {
        this.dialogRef.close(res)
      })
    } else if (this.data.leaveStatus === 'reject') {
      this.leaveService.leaveRejectUpdate(this.data.id).subscribe((res) => {
        this.dialogRef.close(res)
      })
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
