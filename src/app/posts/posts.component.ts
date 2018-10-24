import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public posts = [];

  constructor() {
    this.initPosts();
  }

  ngOnInit() {}

  private initPosts() {
    for (let i = 0; i < 10; i++) {
      this.posts = [
        ...this.posts,
        {
          id: i,
          title: `Post Title: ${i}`,
          content: `Post content ${i}. Post content ${i}. Post content ${i}. Post content ${i}.`,
          imgUrl: 'https://picsum.photos/200'
        }
      ];
    }
  }
}
