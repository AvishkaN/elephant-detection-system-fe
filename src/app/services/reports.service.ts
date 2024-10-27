import { Injectable } from "@angular/core";
import { MainService } from "../infrastructure/api.service";
import { Observable } from "rxjs/internal/Observable";
import { catchError, map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ReportsService {
  constructor(private _MainService: MainService) {}

  getAllAnalysis(data: string): Observable<any> {
    return this._MainService.get(`data?${data}`).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }
  getAllReportData(data: string): Observable<any> {
    return this._MainService.get(`data/get-report-data?${data}`).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }
  getAllSendedNotifications(data: string): Observable<any> {
    return this._MainService.get(`sended-notifications?${data}`).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }
}
