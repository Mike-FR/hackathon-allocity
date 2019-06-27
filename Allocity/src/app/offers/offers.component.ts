import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {


  offersArray = [{
    photo: 'https://memegenerator.net/img/images/300x300/11615964.jpg',
    name: 'Michel',
    serviceName: 'Plomberie',
    description: 'Bonjour, je propose mes services pour tout vos petits travaux de plomberie. Je me trouve à l\'intersection de la rue Mehdi Hettak et de la rue Omar El Bouslamti. Au plaisir vous rencontrer autour d\'une tuyauterie.',
    days: {
      lundi: true,
      mardi: false,
      mercredi: false,
      jeudi: false,
      vendredi: false,
      samedi: true,
      dimanche: true,
    }
  }, {
    photo: 'https://toutelaculture.com/wp-content/uploads/2009/05/clara-morgane-300x300.jpg',
    name: 'Jacquie',
    serviceName: 'Jardinage',
    description: 'Bonjour, paysagiste de profession, je suis disponible chaque mercredi pour vous aider et vous conseiller sur l\'entretien de votre jardin',
    days: {
      lundi: false,
      mardi: false,
      mercredi: true,
      jeudi: false,
      vendredi: false,
      samedi: false,
      dimanche: false,
    }
  },
  ];

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


  constructor() { }

  ngOnInit() {
  }

  showFormOffers() {
    this.showFormOffer = !this.showFormOffer;
  }


  createOffer() {
    console.log(this.offerForm.value);
    this.offersArray.push(this.offerForm.value)
  }


}
