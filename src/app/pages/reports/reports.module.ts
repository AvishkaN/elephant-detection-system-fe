import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReportsRoutingModule } from "./reports-routing.module";
import { ReportsViewComponent } from "./reports-view/reports-view.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatTableModule } from "@angular/material/table";
import { TablerIconsModule } from "angular-tabler-icons";
import { NgApexchartsModule } from "ng-apexcharts";
import { MaterialModule } from "src/app/material.module";
import { SharedModule } from "src/app/shared/shared/shared.module";

@NgModule({
  declarations: [ReportsViewComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    TablerIconsModule,
    MatCardModule,
    NgApexchartsModule,
    MatTableModule,
    SharedModule,
  ],
})
export class ReportsModule {}
