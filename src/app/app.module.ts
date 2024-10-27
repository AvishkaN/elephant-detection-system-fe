import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// icons
import { TablerIconsModule } from "angular-tabler-icons";
import * as TablerIcons from "angular-tabler-icons/icons";

//Import all material modules
import { MaterialModule } from "./material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgScrollbarModule } from "ngx-scrollbar";

//Import Layouts
import { FullComponent } from "./layouts/full/full.component";
import { BlankComponent } from "./layouts/blank/blank.component";

// Vertical Layout
import { SidebarComponent } from "./layouts/full/sidebar/sidebar.component";
import { HeaderComponent } from "./layouts/full/header/header.component";
import { BrandingComponent } from "./layouts/full/sidebar/branding.component";
import { AppNavItemComponent } from "./layouts/full/sidebar/nav-item/nav-item.component";
import { JwtService } from "./infrastructure/jwt.service";
import { MainService } from "./infrastructure/api.service";
import { AuthGuardService } from "./infrastructure/auth-guard.service";
import { MsgHandelService } from "./services/msg-handel.service";
import { JwtTokenValidatorService } from "./services/jwt-token-validator.service";
import { LocalStorageHandleService } from "./services/local-storage-handle.service";
import { ToastrModule } from "ngx-toastr";
import { sweetAlertConfig } from "src/assets/configs/sweetAlertConfig";
import { SharedModule } from "./shared/shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    SidebarComponent,
    HeaderComponent,
    BrandingComponent,
    AppNavItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
    NgScrollbarModule,
    ToastrModule.forRoot(sweetAlertConfig),
    SharedModule,
  ],
  exports: [TablerIconsModule],
  bootstrap: [AppComponent],
  providers: [
    JwtService,
    MainService,
    AuthGuardService,
    MsgHandelService,
    JwtTokenValidatorService,
    LocalStorageHandleService,
    JwtService,
  ],
})
export class AppModule {}
