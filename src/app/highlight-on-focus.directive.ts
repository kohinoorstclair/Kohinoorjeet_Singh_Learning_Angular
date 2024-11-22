import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {

 @Input() focusColor = '';
  private originalBackgroundColor: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('focus') onFocus() {
    // Store the original background color
    this.originalBackgroundColor = this.el.nativeElement.style.backgroundColor || '';
    // Set the new background color
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.focusColor);
  }

  @HostListener('blur') onBlur() {
    // Restore the original background color
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.originalBackgroundColor);
  }}
