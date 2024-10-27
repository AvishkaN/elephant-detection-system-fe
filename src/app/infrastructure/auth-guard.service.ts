import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from "@angular/router";

/**
 * import services
 */
import { JwtService } from "./jwt.service";

@Injectable()
export class AuthGuardService {
  constructor(private router: Router, private _JwtService: JwtService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this._JwtService.getToken()) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigateByUrl("/authentication/login");
    return false;
  }
}
