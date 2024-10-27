import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import * as L from "leaflet";
import { Subscription } from "rxjs";
import { MsgHandelService } from "src/app/services/msg-handel.service";
import { NotifyUsersService } from "src/app/services/notify-users.service";
import { pureEmail } from "src/app/services/validations/validator";

@Component({
  selector: "app-notify-users-view",
  templateUrl: "./notify-users-view.component.html",
  styleUrls: ["./notify-users-view.component.scss"],
})
export class NotifyUsersViewComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  rForm: FormGroup;

  constructor(
    private _FormBuilder: FormBuilder,
    public dialog: MatDialog,
    private notifyUsersService: NotifyUsersService,
    private msgHandelService: MsgHandelService
  ) {}

  ngOnInit(): void {
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
              "Successfully subscribed email notification servie"
            );

            this.rForm.reset();
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

  ngOnDestroy(): void {}
}
