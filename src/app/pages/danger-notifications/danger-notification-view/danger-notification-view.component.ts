import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { TABLE_CONFIG } from "src/app/config/tableConfig";
import { MsgHandelService } from "src/app/services/msg-handel.service";
import { ReportsService } from "src/app/services/reports.service";
import { DangerNotificationSubscribeModelComponent } from "../danger-notification-subscribe-model/danger-notification-subscribe-model.component";

@Component({
  selector: "app-danger-notification-view",
  templateUrl: "./danger-notification-view.component.html",
  styleUrls: ["./danger-notification-view.component.scss"],
})
export class DangerNotificationViewComponent {
  private isFirstTime: boolean = true;

  perPage: number = TABLE_CONFIG.PER_PAGE;
  pageNo: number = TABLE_CONFIG.PAGE_NO;

  loading: boolean = false;

  dataList: any = [];

  totalItems: number = 0; // total numbers of records from API

  constructor(
    private reportsService: ReportsService,
    private msgHandelService: MsgHandelService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAll();
  }

  public copyToClipBoard(data: any, msg: any) {}

  onPageChanged(event: any) {}

  getAll() {
    this.loading = true;

    this.reportsService
      .getAllSendedNotifications(`limit=10&page=1&column=0&order=desc`)
      .subscribe(
        (response) => {
          this.loading = false;
          this.dataList = response?.data?.records;

          this.totalItems = response?.data?.recordsTotal;
        },
        (error) => {
          this.loading = false;
          this.msgHandelService.handleError(error);
        }
      );
  }

  search() {}

  reset() {}

  openSubscriptionModel() {
    const dialogRef = this.dialog.open(
      DangerNotificationSubscribeModelComponent,
      {
        width: "515px",
        maxHeight: "85vh",
        autoFocus: false,
        disableClose: true,
        data: {},
      }
    );
    dialogRef.afterClosed().subscribe((result) => {
      if (result?.status && result?.navigate_to_profile_page) {
      }
    });
  }
}
