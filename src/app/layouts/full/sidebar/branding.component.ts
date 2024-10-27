import { Component } from "@angular/core";

@Component({
  selector: "app-branding",
  template: `
    <div class="branding text-center">
      <a href="/">
        <img
          src="./assets/images/site/logo.png"
          class="align-middle m-2"
          alt="logo"
          style="max-width: 8em;"
        />
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
