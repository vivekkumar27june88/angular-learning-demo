import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  title: string;

  public isVisible = false;

  constructor() {}

  ngOnInit() {}

  public togglePost(event: MouseEvent): void {
    this.isVisible = !this.isVisible;
  }
}
