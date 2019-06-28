import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  @ViewChild('basicModal') basicModal: ModalDirective;
  
  //@ViewChild ('basicModal') basicModal: ElementRef

  showFormOffer = false;


  offerForm = new FormGroup({
    name: new FormControl(''),
    serviceName: new FormControl(''),
    description: new FormControl(''),
    days: new FormGroup({
      lundi: new FormControl(''),
      mardi: new FormControl(''),
      mercredi: new FormControl(''),
      jeudi: new FormControl(''),
      vendredi: new FormControl(''),
      samedi: new FormControl(''),
      dimanche: new FormControl(''),
    })
  });


  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  showFormOffers() {
    this.showFormOffer = !this.showFormOffer;
  }

  public showModal(){this.basicModal.show()}

  createOffer() {
    console.log(this.offerForm.value);
    this.dataService.offersArray.push(this.offerForm.value);
  }

  openModalOK() {
    setTimeout(() => this.showModal(), 5000);    
  }

  allopoints() {
    this.dataService.fideliteArray[0].valeur += 5
  }


}
