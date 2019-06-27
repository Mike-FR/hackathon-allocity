import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-notif-allopoints',
  templateUrl: './notif-allopoints.component.html',
  styleUrls: ['./notif-allopoints.component.scss']
})
export class NotifAllopointsComponent implements OnInit {

  @ViewChild ('basicModal') basicModal: ElementRef

  constructor(private dataService: DataService) { }

  ngOnInit() { }

  openModal() {
    setTimeout(function(){this.basicModal}, 1000);    
  }

  allopoints() {
    this.dataService.fideliteArray[0].valeur += 5
  }

}


 



