import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { ConnectableObservable } from 'rxjs/internal/observable/ConnectableObservable';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string =
    this.defaultColor;
  @HostBinding('style.color') color: string;
  constructor(private elRef: ElementRef, private render: Renderer2) {}
  ngOnInit() {
    //this.render.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    console.log(this.elRef.nativeElement.innerText);
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
    this.color = 'black';
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'red');
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;

    // this.render.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
  }
}
