import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-erp",
  templateUrl: "./erp.component.html",
  styleUrls: ["./erp.component.scss"],
})
export class ErpComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openModal(wrapContactModal) {
    wrapContactModal.classList.add("active");
  }
}
