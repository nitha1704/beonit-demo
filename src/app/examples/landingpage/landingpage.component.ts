import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-landingpage",
  templateUrl: "landingpage.component.html",
  styleUrls: ["landingpage.component.scss"],
})
export class LandingpageComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {

  }
  ngOnDestroy() {

  }

  openModal(wrapContactModal) {
    console.log(wrapContactModal);
    wrapContactModal.classList.add('active');
  }
}
