import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactmodal',
  templateUrl: './contactmodal.component.html',
  styleUrls: ['./contactmodal.component.scss']
})
export class ContactmodalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    const wrapContactModal = document.querySelector(".wrap-contact-modal");
    wrapContactModal.classList.remove('active')
  }

}
