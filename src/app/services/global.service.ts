import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  private loggedUserObj: BehaviorSubject<any>;

  constructor() {
    this.loggedUserObj = new BehaviorSubject<any>(null);
  }

  getLoggedUserObj(): Observable<any> {
    return this.loggedUserObj.asObservable();
  }

  setLoggedUserObj(value: any): void {
    this.loggedUserObj.next(value);
  }
}
