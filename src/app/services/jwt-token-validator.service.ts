import { Injectable } from '@angular/core';
// import jwt token decoder
import jwt_decode from 'jwt-decode';
// import local storage handle service
import { LocalStorageHandleService } from './local-storage-handle.service';
// message handle service
import { MsgHandelService } from './msg-handel.service';

@Injectable()
export class JwtTokenValidatorService {
  constructor(
    private _LocalStorageHandleService: LocalStorageHandleService,
    private _MsgHandelService: MsgHandelService
  ) {}

  public validateUserRole(userRole: string) {
    try {
      const tokenBody: any = jwt_decode(
        this._LocalStorageHandleService.getItem('token')
      );

      if (userRole === tokenBody['role']) {
        return true;
      } else {
        return false;
      }
    } catch (Error) {
      // this._MsgHandelService.showErrorMsg('Error', 'Could not read token');
      return false;
    }
  }

  public getLoggedUserRole() {
    try {
      const tokenBody : any = jwt_decode(
        this._LocalStorageHandleService.getItem('token')
      );
      return tokenBody['role'] === undefined ? null : tokenBody['role'];
    } catch (Error) {
      // this._MsgHandelService.showErrorMsg('Error', 'Could not read token');
      return null;
    }
  }

  public getLoggedUserId() {
    try {
      const tokenBody : any = jwt_decode(
        this._LocalStorageHandleService.getItem('token')
      );
      return tokenBody['id'] === undefined ? null : tokenBody['id'];
    } catch (Error) {
      // this._MsgHandelService.showErrorMsg('Error', 'Could not read token');
      return null;
    }
  }

  public getLoggedUserFullName() {
    try {
      const tokenBody : any = jwt_decode(
        this._LocalStorageHandleService.getItem('token')
      );
      return tokenBody['name'] === undefined ? null : tokenBody['name'];
    } catch (Error) {
      // this._MsgHandelService.showErrorMsg('Error', 'Could not read token');
      return null;
    }
  }

  public getLoggedUserName() {
    try {
      const tokenBody : any = jwt_decode(
        this._LocalStorageHandleService.getItem('token')
      );
      return tokenBody['user_name'] === undefined
        ? null
        : tokenBody['user_name'];
    } catch (Error) {
      // this._MsgHandelService.showErrorMsg('Error', 'Could not read token');
      return null;
    }
  }

  public getAuthorizedRoutes() {
    try {
      const tokenBody : any = jwt_decode(
        this._LocalStorageHandleService.getItem('token')
      );
      return tokenBody['routs'] === undefined ? null : tokenBody['routs'];
    } catch (Error) {
      // this._MsgHandelService.showErrorMsg('Error', 'Could not read token');
      return null;
    }
  }

  public validateLogin() {
    try {
      return jwt_decode(this._LocalStorageHandleService.getItem('token'));
    } catch (error) {
      return null;
    }
  }

  public validateGuestAccount() {
    try {
      return jwt_decode(this._LocalStorageHandleService.getItem('guestToken'));
    } catch (error) {
      return null;
    }
  }
}
