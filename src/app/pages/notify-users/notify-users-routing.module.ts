import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotifyUsersViewComponent } from './notify-users-view/notify-users-view.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: NotifyUsersViewComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotifyUsersRoutingModule { }
