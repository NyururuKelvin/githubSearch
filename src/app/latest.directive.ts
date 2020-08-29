import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appLatest]'
})
export class LatestDirective {

  constructor(private elem:ElementRef) { }

  @HostListener("click") onClicks(){
    this.elem.nativeElement.style.color='magenta';
  }

}
