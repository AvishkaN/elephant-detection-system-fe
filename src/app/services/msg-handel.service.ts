import { Injectable } from "@angular/core";
import { ErrorHandler } from "@angular/core";

/**
 * services import
 */
import { JwtService } from "../infrastructure/jwt.service";
import { IndividualConfig, ToastrService } from "ngx-toastr";

/**
 * common services
 */
import { Router } from "@angular/router";
// import Swal from 'sweetalert2/dist/sweetalert2.js';

@Injectable()
export class MsgHandelService implements ErrorHandler {
  // declare error msg
  private REFRESH_MESSAGE = "Something went wrong. Please Login again!";
  private DEFAULT_ERROR_TITLE = "Something went wrong";

  constructor(
    private _Router: Router,
    private _JwtService: JwtService,
    private toastr: ToastrService
  ) {}

  private getConfigWithoutAutoClose(): Partial<IndividualConfig> {
    return {
      // timeOut: 0,
      // extendedTimeOut: 0,
      closeButton: true,
    };
  }

  /**
   * show success msg as notifications
   * @param title : string
   * @param content : string
   */
  public showSuccessMsg(title: string, content: string) {
    this.toastr.success(content, title, this.getConfigWithoutAutoClose());
  }

  /**
   * show Error msg as notifications
   * @param title : string
   * @param content : string
   */
  public showErrorMsg(title: string, content: string) {
    // console.log("Workng here ");
    this.toastr.error(content, title, this.getConfigWithoutAutoClose());
    // this.toastr.success(" asdsad", "sad sad")
  }

  /**
   * show warning message
   * @param title
   * @param content
   */
  public showWarningMsg(title: string, content: string) {
    this.toastr.warning(content, title, this.getConfigWithoutAutoClose());
  }

  /**
   * handle common errors
   * @param error : error with the response
   */
  public handleError(error: any) {
    const httpErrorCode = error.status;
    switch (httpErrorCode) {
      case 403:
        this.showError("Forbidden");
        this._Router.navigateByUrl("");
        break;
      case 401:
        this.showError("Unauthorized");
        this._Router.navigateByUrl("");
        break;
      case 400:
        this.showError("Bad Request");
        break;
      default: {
        if (error?.error?.msg !== undefined || error.error?.msg !== null) {
          // call for customized error handle
          this.handleCustomErrors(error);
        } else {
          this.showError(this.DEFAULT_ERROR_TITLE);
        }
      }
    }
  }

  /**
   * show custom errors according to
   * @param errorMsg : custom error appended with response body
   */
  private handleCustomErrors(errorMsg: any) {
    if (errorMsg?.message == "Login session ended. Please login again") {
      this.showError(errorMsg?.message);
    } else {
      this.showError(errorMsg.error?.msg);
    }
  }

  /**
   * show error msg in common way
   * @param message : error msg
   */
  private showError(message: string) {
    if (message !== undefined && message.length) {
      this.toastr.error(message, "", this.getConfigWithoutAutoClose());
    } else {
      this.toastr.error(
        "Network issue. Please refresh and try again",
        "",
        this.getConfigWithoutAutoClose()
      );
    }
  }
}
