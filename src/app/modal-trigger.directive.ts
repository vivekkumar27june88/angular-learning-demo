import { Directive, OnInit, Inject, HostListener } from '@angular/core';
import { JQ_TOKEN } from './services/jquery.service';

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  constructor(@Inject(JQ_TOKEN) private $: any) {}

  ngOnInit() {}

  @HostListener('click')
  openModalDialog() {
    this.$('#simple-modal').modal({});
  }
}
