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

}
