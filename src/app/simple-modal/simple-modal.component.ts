import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQUERY_TOKEN } from '../shared/j-query.service';

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent {

  @Input() title: string;
  @Input() elementId: string;
  @Input() closeOnBodyClick: string;
  @ViewChild('modalcontainer') containerEl: ElementRef;

  constructor(@Inject(JQUERY_TOKEN) private $: any) { }

  closeModal() {
    if(this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
      this.$(`#${this.containerEl.nativeElement.id}`).modal('hide');
      // this.$(`#${this.elementId}`).modal('hide');
    }
  }
}
