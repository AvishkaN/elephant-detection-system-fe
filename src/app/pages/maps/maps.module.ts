import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MapsRoutingModule } from "./maps-routing.module";
import { MapsViewComponent } from "./maps-view/maps-view.component";
import { TablerIconsModule } from "angular-tabler-icons";
import { QRCodeModule } from "angularx-qrcode";
import { MaterialModule } from "src/app/material.module";
import { SharedModule } from "src/app/shared/shared/shared.module";

@NgModule({
  declarations: [MapsViewComponent],
  imports: [CommonModule, MapsRoutingModule, SharedModule, QRCodeModule],
})
export class MapsModule {}
