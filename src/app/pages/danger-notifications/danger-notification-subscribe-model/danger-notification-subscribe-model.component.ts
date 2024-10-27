import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from "@angular/material/dialog";
import { MsgHandelService } from "src/app/services/msg-handel.service";
import { NotifyUsersService } from "src/app/services/notify-users.service";
import { pureEmail } from "src/app/services/validations/validator";
import { ConfirmDialogComponent } from "src/app/shared/confirm-dialog/confirm-dialog.component";

@Component({
  selector: "app-danger-notification-subscribe-model",
  templateUrl: "./danger-notification-subscribe-model.component.html",
  styleUrls: ["./danger-notification-subscribe-model.component.scss"],
})
export class DangerNotificationSubscribeModelComponent {
  loading: Boolean = false;
  rForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<DangerNotificationSubscribeModelComponent>,
    @Inject(MAT_DIALOG_DATA) public parentData: any,
    public dialog: MatDialog,
    private notifyUsersService: NotifyUsersService,
    private _FormBuilder: FormBuilder,
    private msgHandelService: MsgHandelService
  ) {}

  ngOnInit(): void {
    console.log("parentData", this.parentData);

    this.rForm = this._FormBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(pureEmail),
        ]),
      ],
      company: [null, Validators.compose([Validators.required])],
    });
  }

  public closeModel() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "30vw",
      data: {
        title: "Please Confirm",
        msg: "Do you want to discard changes?",
      },
      panelClass: "confirmation-dialog",
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        if (result.status) {
          this.dialogRef.close({
            status: false,
          });
        }
      }
    });
  }

  submitForm() {
    this.loading = true;
    this.notifyUsersService
      .saveNotifyUsers({
        name: this.rForm.controls["name"].value,
        email: this.rForm.controls["email"].value,
        company: this.rForm.controls["company"].value,
      })
      .subscribe(
        (response) => {
          if (response.status) {
            this.msgHandelService.showSuccessMsg(
              "",
              "Successfully subscribed email notification service"
            );

            this.dialogRef.close({
              status: false,
            });
          }
          this.loading = false;
        },
        (error) => {
          this.loading = false;
          // show msg
          this.msgHandelService.handleError(error);
        }
      );
  }
}
