import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output()
  searching: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  filter = '';

  debounce: Subject<string> = new Subject<string>();


  constructor() { }

  ngOnInit() {

    this.debounce.pipe(
      debounceTime(300)
    ).subscribe(filter => this.searching.emit(filter));

  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
