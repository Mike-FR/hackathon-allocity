import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-notif-allopoints',
  templateUrl: './notif-allopoints.component.html',
  styleUrls: ['./notif-allopoints.component.scss']
})
export class NotifAllopointsComponent implements OnInit {

  @ViewChild ('basicModal') basicModal: ElementRef

  constructor() { }

  ngOnInit() { }

  openModal() {
    setTimeout(function(){show(this.basicModal)}, 1000);    
  }
}


 



