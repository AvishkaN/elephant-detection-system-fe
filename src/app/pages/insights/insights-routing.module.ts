import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InsightsViewComponent } from "./insights-view/insights-view.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: InsightsViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsightsRoutingModule {}
