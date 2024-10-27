import { Injectable, OnDestroy } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, takeUntil } from "rxjs/operators";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";

/**
 * import services
 * */
import { JwtService } from "./jwt.service";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

import {
  OnDestroyMixin,
  untilComponentDestroyed,
} from "@w11k/ngx-componentdestroyed";
import { MsgHandelService } from "../services/msg-handel.service";
import { LocalStorageHandleService } from "../services/local-storage-handle.service";
import { USER_ROUTE } from "src/assets/configs/localstorage.config";

@Injectable({
  providedIn: "root",
})
export class MainService extends OnDestroyMixin implements OnDestroy {
  constructor(
    private http: HttpClient,
    private jwtService: JwtService,
    private _Router: Router,
    private _MsgHandelService: MsgHandelService,
    private _LocalStorageHandleService: LocalStorageHandleService
  ) {
    super();
  }

  // Setting Headers for API Request
  private setHeaders(token?: string): HttpHeaders {
    const headersConfig: any = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    if (this.jwtService.getToken() || token) {
      headersConfig["Authorization"] = `Bearer ${
        token || this.jwtService.getToken()
      }`;
    }
    return new HttpHeaders(headersConfig);
  }

  private setFormDataHeader(): HttpHeaders {
    const headersConfig: any = {};
    if (this.jwtService.getToken()) {
      headersConfig["Authorization"] = `Bearer ${this.jwtService.getToken()}`;
    }
    return new HttpHeaders(headersConfig);
  }

  // Perform a GET Request
  get(path: string, external_api: boolean = false): Observable<any> {
    return this.http
      .get(external_api ? `${path}` : `${environment.api_url}${path}`, {
        headers: this.setHeaders(),
      })
      .pipe(untilComponentDestroyed(this))
      .pipe(
        catchError((error) => {
          // check if the token is already expired
          this.handleTokenExp(error);
          throw error;
        })
      );
  }

  // Perform a external api GET Request
  getExternalApi(path: string): Observable<any> {
    return this.http
      .get(`${path}`, {})
      .pipe(untilComponentDestroyed(this))
      .pipe(
        catchError((error) => {
          // check if the token is already expired
          this.handleTokenExp(error);
          throw error;
        })
      );
  }

  // Perform a PUT Request
  put(path: string, body: any): Observable<any> {
    return this.http
      .put(`${environment.api_url}${path}`, JSON.stringify(body), {
        headers: this.setHeaders(),
      })
      .pipe(untilComponentDestroyed(this))
      .pipe(
        catchError((error) => {
          // check if the token is already expired
          this.handleTokenExp(error);
          throw error;
        })
      );
  }

  // Perform POST Request
  post(path: any, body: any, token?: string): Observable<any> {
    return this.http
      .post(`${environment.api_url}${path}`, JSON.stringify(body), {
        headers: this.setHeaders(token),
      })
      .pipe(untilComponentDestroyed(this))
      .pipe(
        catchError((error) => {
          // check if the token is already expired
          this.handleTokenExp(error);
          throw error;
        })
      );
  }

  // POST to other be
  postOtherBE(full_path: any, body: any, token?: string): Observable<any> {
    return this.http
      .post(`${full_path}`, JSON.stringify(body), {
        headers: this.setHeaders(token),
      })
      .pipe(untilComponentDestroyed(this))
      .pipe(
        catchError((error) => {
          // check if the token is already expired
          this.handleTokenExp(error);
          throw error;
        })
      );
  }
  postString(path: any, message: any): Observable<any> {
    let string = JSON.stringify({ string: message });
    let body = new HttpParams();
    body = body.set("string", string);

    return this.http
      .post(`${environment.api_url}${path}`, message, {
        // headers: this.setHeaders(),
      })
      .pipe(untilComponentDestroyed(this))
      .pipe(
        catchError((error) => {
          // check if the token is already expired
          this.handleTokenExp(error);
          throw error;
        })
      );
  }

  // Perform a PUT Request
  putFormData(path: string, body: any): Observable<any> {
    return this.http
      .put(`${environment.api_url}${path}`, body, {
        headers: this.setFormDataHeader(),
      })
      .pipe(untilComponentDestroyed(this))
      .pipe(
        catchError((error) => {
          // check if the token is already expired
          this.handleTokenExp(error);
          throw error;
        })
      );
  }

  postFormData(path: any, body: any): Observable<any> {
    return this.http
      .post(`${environment.api_url}${path}`, body, {
        headers: this.setFormDataHeader(),
      })
      .pipe(untilComponentDestroyed(this))
      .pipe(
        catchError((error) => {
          // check if the token is already expired
          this.handleTokenExp(error);
          throw error;
        })
      );
  }

  // Perform Delete Request
  delete(path: any): Observable<any> {
    return this.http
      .delete(`${environment.api_url}${path}`, { headers: this.setHeaders() })
      .pipe(untilComponentDestroyed(this))
      .pipe(
        catchError((error) => {
          // check if the token is already expired
          this.handleTokenExp(error);
          throw error;
        })
      );
  }

  checkErrorType = (error: any) => {
    if (
      error
        ? error["error"]
          ? error["error"]["msg"]
            ? true
            : false
          : false
        : false
    ) {
      return error["error"]["msg"];
    } else {
      return "error_not_found";
    }
  };

  handleTokenExp = (error: any) => {
    if (
      this.checkErrorType(error) !== "error_not_found" &&
      this.checkErrorType(error) === "TokenExpiredError: jwt expired"
    ) {
      // auto logout user
      this._LocalStorageHandleService.destroyAll();

      this._Router.navigateByUrl("/login");
      throw new Error("Login session ended. Please login again");
    }
    return true;
  };
}
