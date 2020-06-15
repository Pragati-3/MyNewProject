import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNewstyle]'
})
export class NewstyleDirective {

  constructor(private newRef:ElementRef) {
    newRef.nativeElement.style.color = "pink";
   }

}
