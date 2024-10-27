import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DangerNotificationsRoutingModule } from "./danger-notifications-routing.module";
import { DangerNotificationViewComponent } from "./danger-notification-view/danger-notification-view.component";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { DangerNotificationSubscribeModelComponent } from './danger-notification-subscribe-model/danger-notification-subscribe-model.component';

@NgModule({
  declarations: [DangerNotificationViewComponent, DangerNotificationSubscribeModelComponent],
  imports: [CommonModule, SharedModule, DangerNotificationsRoutingModule],
})
export class DangerNotificationsModule {}
