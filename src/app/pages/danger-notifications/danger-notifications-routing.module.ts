import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DangerNotificationViewComponent } from "./danger-notification-view/danger-notification-view.component";

export const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: DangerNotificationViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DangerNotificationsRoutingModule {}
