import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-fidelite',
  templateUrl: './fidelite.component.html',
  styleUrls: ['./fidelite.component.scss']
})
export class FideliteComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  delete10points() {
    if( this.dataService.fideliteArray[0].valeur < 10){
      return
    } else {    
      this.dataService.fideliteArray[0].valeur -= 10
    }
  }

  delete20points() {
    if( this.dataService.fideliteArray[0].valeur < 20){
      return
    } else {    
      this.dataService.fideliteArray[0].valeur -= 20
    }  }
  
  delete30points() {
    if( this.dataService.fideliteArray[0].valeur < 30){
      return
    } else {    
      this.dataService.fideliteArray[0].valeur -= 30
    }  }

  delete40points() {
    if( this.dataService.fideliteArray[0].valeur < 40){
      return
    } else {    
      this.dataService.fideliteArray[0].valeur -= 40
    }  }

  delete50points() {
    if( this.dataService.fideliteArray[0].valeur < 50){
      return
    } else {    
      this.dataService.fideliteArray[0].valeur -= 50
    }  }

  delete60points() {
    if( this.dataService.fideliteArray[0].valeur < 60){
      return
    } else {    
      this.dataService.fideliteArray[0].valeur -= 60
    }  }

  delete70points() {
    if( this.dataService.fideliteArray[0].valeur < 70){
      return
    } else {    
      this.dataService.fideliteArray[0].valeur -= 70
    }  }

  delete80points() {
    if( this.dataService.fideliteArray[0].valeur < 80){
      return
    } else {    
      this.dataService.fideliteArray[0].valeur -= 80
    }  }

  delete90points() {
    if( this.dataService.fideliteArray[0].valeur < 90){
      return
    } else {    
      this.dataService.fideliteArray[0].valeur -= 90
    }  }

  delete100points() {
    if( this.dataService.fideliteArray[0].valeur < 100){
      return
    } else {    
      this.dataService.fideliteArray[0].valeur -= 100
    }  }

  delete110points() {
    if( this.dataService.fideliteArray[0].valeur < 110){
      return
    } else {    
      this.dataService.fideliteArray[0].valeur -= 110
    }  }

  delete120points() {
    if( this.dataService.fideliteArray[0].valeur < 120){
      return
    } else {    
      this.dataService.fideliteArray[0].valeur -= 120
    }  }

}
