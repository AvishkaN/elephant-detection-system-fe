import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReportsViewComponent } from "./reports-view/reports-view.component";

export const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ReportsViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
