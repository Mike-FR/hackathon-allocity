import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

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

  fideliteArray = [{
    valeur: 350,
    name: '',
  }]
  
  constructor() { }
}
