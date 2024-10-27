import { Injectable } from "@angular/core";
import { Observable, map, catchError } from "rxjs";
import { MainService } from "../infrastructure/api.service";

@Injectable({
  providedIn: "root",
})
export class NotifyUsersService {
  constructor(private _MainService: MainService) {}

  getAll(data: string): Observable<any> {
    return this._MainService.get(`notify-users?${data}`).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }
  saveNotifyUsers(data: any): Observable<any> {
    return this._MainService.post(`notify-users`, data).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }
}
