import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() measage: string;
  @Output() closeAlert = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  close(){
    this.closeAlert.emit();
  }
}
