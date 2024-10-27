import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { LoaderComponent } from "../loader/loader.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { MatCardModule } from "@angular/material/card";
import { TruncateTextPipe } from "../pipe/truncate-text.pipe";
import { MaterialModule } from "src/app/material.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { TablerIconsModule } from "angular-tabler-icons";

@NgModule({
  declarations: [ConfirmDialogComponent, LoaderComponent, TruncateTextPipe],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatCardModule,
    MaterialModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    TablerIconsModule,
  ],
  exports: [
    MatDialogModule,
    ConfirmDialogComponent,
    LoaderComponent,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    TruncateTextPipe,
    MaterialModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    TablerIconsModule,
  ],
})
export class SharedModule {}
