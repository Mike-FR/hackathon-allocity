import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  constructor(private dataService: DataService, private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
}

}
