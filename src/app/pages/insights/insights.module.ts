import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InsightsRoutingModule } from "./insights-routing.module";
import { InsightsViewComponent } from "./insights-view/insights-view.component";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  declarations: [InsightsViewComponent],
  imports: [
    CommonModule,
    InsightsRoutingModule,
    NgApexchartsModule,
    SharedModule,
  ],
})
export class InsightsModule {}
