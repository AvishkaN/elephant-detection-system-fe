import { Routes } from "@angular/router";

import { AppSideLoginComponent } from "./login/login.component";
import { PublicGuardService } from "src/app/infrastructure/public-guard.service";

export const AuthenticationRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "login",
        component: AppSideLoginComponent,
        canActivate: [PublicGuardService],
      },
    ],
  },
];
