import { Component, OnInit, ViewContainerRef, ViewChild, TemplateRef } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-view-container-ref-comp',
  templateUrl: './view-container-ref-comp.component.html',
  styleUrls: ['./view-container-ref-comp.component.css'],
  providers: [TestService]
})
export class ViewContainerRefCompComponent implements OnInit {
  @ViewChild('vcr1', { read: ViewContainerRef })
  vcr1: ViewContainerRef;

  @ViewChild('vcr2', { read: ViewContainerRef })
  vcr2: ViewContainerRef;

  @ViewChild('templateA')
  templateA: TemplateRef<any>;

  @ViewChild('templateB')
  templateB: TemplateRef<any>;

  constructor( private testService: TestService) {}

  ngOnInit() {}

  addTemplateA() {
    this.vcr1.createEmbeddedView(this.templateA);
  }

  addTemplateB() {
    this.vcr2.createEmbeddedView(this.templateB);
  }

  clearVCR1() {
    this.vcr1.clear();
  }

  clearVCR2() {
    this.vcr2.clear();
  }
}
