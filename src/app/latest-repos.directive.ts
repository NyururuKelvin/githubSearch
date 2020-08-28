import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class LatestReposDirective {

  constructor(private elem:ElementRef) {}
  @HostListener("click") onClicks(){
    this.elem.nativeElement.style.color='red';
  }

}
