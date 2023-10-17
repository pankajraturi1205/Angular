import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increement } from 'src/app/shared/store/counter.action';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  posts: Post[] = [];
  counter$: Observable<number>;

  constructor(
    private service: PostService,
    private store: Store<{ counter: { counter: number } }>
  ) {
    this.counter$ = this.store.pipe(
      select('counter'),
      map((state) => state.counter)
    );
    console.log(this.counter$);
  }

  ngOnInit(): void {
    this.service.getAll().subscribe((data: Post[]) => {
      this.posts = data;
      console.log(this.posts);
    });
  }

  increment() {
    this.store.dispatch(increement());
  }
}
