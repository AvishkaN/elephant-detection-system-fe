import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TablerIconsModule } from "angular-tabler-icons";
import { QRCodeModule } from "angularx-qrcode";
import { MaterialModule } from "src/app/material.module";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { MapsViewComponent } from "./maps-view/maps-view.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: MapsViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule,
    QRCodeModule,
    MaterialModule,
    TablerIconsModule,
  ],
  exports: [RouterModule],
})
export class MapsRoutingModule {}
