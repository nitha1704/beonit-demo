import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-research",
  templateUrl: "./research.component.html",
  styleUrls: ["./research.component.scss"],
})
export class ResearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  
  openModal(wrapContactModal) {
    wrapContactModal.classList.add("active");
  }
}
