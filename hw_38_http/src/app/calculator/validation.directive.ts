import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appValidation]'
})
export class ValidationDirective {
  @Input('appValidation') className: string

  @HostListener('focus') onElFocus() {
    this.highlight(); 
  }

  @HostListener('blur') onElBlur() {
    this.unhighlight(); 
  }

  constructor(private el: ElementRef) { 
  }

  highlight(){
    this.el.nativeElement.className = this.className;
  }

  unhighlight(){
    this.el.nativeElement.className = null;
  }

}
