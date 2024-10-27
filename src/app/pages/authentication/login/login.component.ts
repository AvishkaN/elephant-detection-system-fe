import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { JwtService } from "src/app/infrastructure/jwt.service";
import { LocalStorageHandleService } from "src/app/services/local-storage-handle.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class AppSideLoginComponent {
  constructor(
    private _Router: Router,
    private _JwtService: JwtService,
    private _LocalStorageHandleService: LocalStorageHandleService
  ) {}

  ngOnInit() {
    this._Router.navigateByUrl("/dashboard");

    // store token
    this._JwtService.saveToken("11111");

    this._LocalStorageHandleService.saveItem({
      name: "user_id",
      value: "111111",
    });

    this._Router.navigateByUrl("/dashboard");
  }
}
