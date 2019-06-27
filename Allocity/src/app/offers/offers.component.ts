import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  
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


  createOffer() {
    console.log(this.offerForm.value);
    this.dataService.offersArray.push(this.offerForm.value);
  }

  openModal() {
    setTimeout(function(){this.basicModal}, 1000);    
  }

}
