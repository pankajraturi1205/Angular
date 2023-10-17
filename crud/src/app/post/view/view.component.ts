import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  constructor(private store: Store<{ counter: { counter: number } }>) {}
  counterD!: number;
  ngOnInit(): void {
    this.store.select('counter').subscribe(
      (data) => {
        console.log(data);
        this.counterD = data.counter;
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
  }
}
