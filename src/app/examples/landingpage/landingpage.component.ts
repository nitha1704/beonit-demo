import { Component, OnInit, OnDestroy } from "@angular/core";
import Glide from "../../../../node_modules/@glidejs/glide";

@Component({
  selector: "app-landingpage",
  templateUrl: "landingpage.component.html",
  styleUrls: ["landingpage.component.scss"],
})
export class LandingpageComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    // var body = document.getElementsByTagName("body")[0];
    // body.classList.add("landing-page");

    new Glide(".glide", {
      type: "carousel",
      perView: 4,
      startAt: 2,
      focusAt: 2,
      animationDuration: 500,
    }).mount();
    
  }
  ngOnDestroy() {
    // var body = document.getElementsByTagName("body")[0];
    // body.classList.remove("landing-page");
  }
}
