import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vmessage',
  templateUrl: './vmessage.component.html'
})
export class VmessageComponent implements OnInit {

  @Input()
  field;

  constructor() { }

  ngOnInit() {
  }

}
