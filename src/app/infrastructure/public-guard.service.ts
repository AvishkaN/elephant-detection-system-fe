import { Injectable } from "@angular/core";
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { JwtService } from "./jwt.service";

@Injectable({
  providedIn: "root",
})
export class PublicGuardService {
  constructor(private router: Router, private _JwtService: JwtService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this._JwtService.getToken()) {
      // not logged in so redirect to login page
      this.router.navigateByUrl("/dashboard");
      return false;
    } else {
      // logged in so return true
      return true;
    }
  }
}
