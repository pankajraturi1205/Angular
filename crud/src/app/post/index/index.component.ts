import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  posts: Post[] = [];
  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((data: Post[]) => {
      this.posts = data;
      console.log(this.posts);
    });
  }
}
