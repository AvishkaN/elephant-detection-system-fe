import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-confirm-dialog",
  templateUrl: "./confirm-dialog.component.html",
  styleUrls: ["./confirm-dialog.component.scss"],
})
export class ConfirmDialogComponent implements OnInit {
  successTitle: String;
  msg: String;
  html: String;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dataFromParentComponent: any
  ) {}

  ngOnInit() {
    this.successTitle = this.dataFromParentComponent.title;
    this.msg = this.dataFromParentComponent.msg;
    this.html = this.dataFromParentComponent.html;
  }

  /**
   * close dialog
   */
  close() {
    this.dialogRef.close({ status: false });
  }

  /**
   * do things when press confirm
   */
  confirm() {
    this.dialogRef.close({ status: true });
  }
}
