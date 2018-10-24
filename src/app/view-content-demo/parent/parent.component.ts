import { Component, OnInit, TemplateRef, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild('templateInsideParent')
  view: TemplateRef<any>;

  @ContentChild('templateInsideChild')
  content: TemplateRef<any>;

  templatePlaceholder: TemplateRef<any>;

  activePlaceholderItem: 'view' | 'content' | '' = '';

  constructor() {}

  ngOnInit() {}

  public changePlaceholderItem() {
    if (this.activePlaceholderItem === 'content') {
      this.templatePlaceholder = this.view;
      this.activePlaceholderItem = 'view';
    } else {
      this.templatePlaceholder = this.content;
      this.activePlaceholderItem = 'content';
    }
  }
}
