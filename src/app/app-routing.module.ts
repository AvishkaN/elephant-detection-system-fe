import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlankComponent } from "./layouts/blank/blank.component";
import { FullComponent } from "./layouts/full/full.component";
import { AuthGuardService } from "./infrastructure/auth-guard.service";
import { PublicGuardService } from "./infrastructure/public-guard.service";

const routes: Routes = [
  {
    path: "",
    component: FullComponent,
    children: [
      {
        path: "",
        redirectTo: "/maps",
        pathMatch: "full",
      },
      {
        path: "dashboard",
        redirectTo: "/maps",
      },

      {
        path: "maps",
        loadChildren: () =>
          import("./pages/maps/maps.module").then((m) => m.MapsModule),
        canActivate: [AuthGuardService],
      },
      {
        path: "insights",
        loadChildren: () =>
          import("./pages/insights/insights.module").then(
            (m) => m.InsightsModule
          ),
        canActivate: [AuthGuardService],
      },
      {
        path: "reports",
        loadChildren: () =>
          import("./pages/reports/reports.module").then((m) => m.ReportsModule),
        canActivate: [AuthGuardService],
      },
      {
        path: "notify-users",
        loadChildren: () =>
          import("./pages/notify-users/notify-users.module").then(
            (m) => m.NotifyUsersModule
          ),
        canActivate: [AuthGuardService],
      },
      {
        path: "danger-notifications",
        loadChildren: () =>
          import(
            "./pages/danger-notifications/danger-notifications.module"
          ).then((m) => m.DangerNotificationsModule),
        canActivate: [AuthGuardService],
      },
    ],
  },
  {
    path: "",
    component: BlankComponent,
    children: [
      {
        path: "authentication",
        loadChildren: () =>
          import("./pages/authentication/authentication.module").then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
