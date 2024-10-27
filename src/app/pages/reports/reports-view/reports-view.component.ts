import { Component } from "@angular/core";
import { TABLE_CONFIG } from "src/app/config/tableConfig";
import { ReportsService } from "src/app/services/reports.service";

@Component({
  selector: "app-reports-view",
  templateUrl: "./reports-view.component.html",
  styleUrls: ["./reports-view.component.scss"],
})
export class ReportsViewComponent {
  private isFirstTime: boolean = true;

  perPage: number = TABLE_CONFIG.PER_PAGE;
  pageNo: number = TABLE_CONFIG.PAGE_NO;

  loading: boolean = false;

  dataList: any = [];

  totalItems: number = 0; // total numbers of records from API

  constructor(private reportsService: ReportsService) {}

  ngOnInit() {
    this.getAll();
  }

  public copyToClipBoard(data: any, msg: any) {}

  onPageChanged(event: any) {}

  getAll() {
    this.loading = true;

    this.reportsService.getAllReportData('limit=10&page=1&column=0&order=desc').subscribe(
      (response) => {
        this.loading = false;

        if(response?.data?.data?.length){

          this.dataList = response?.data?.data.slice(0,20);
  
          this.totalItems =  this.dataList?.length;
        }

      },
      (error) => {
        this.loading = false;
        // this._MsgHandelService.handleError(error);

     
      }
    );
  }

  search() {}

  reset() {}
}
