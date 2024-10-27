import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NotifyUsersRoutingModule } from "./notify-users-routing.module";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { NotifyUsersViewComponent } from "./notify-users-view/notify-users-view.component";

@NgModule({
  declarations: [NotifyUsersViewComponent],
  imports: [CommonModule, SharedModule, NotifyUsersRoutingModule],
})
export class NotifyUsersModule {}
