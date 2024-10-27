import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DomManipulationService {
  constructor() {}

  scrollToTop() {
    window.scrollTo(0, 0);
  }
  scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
