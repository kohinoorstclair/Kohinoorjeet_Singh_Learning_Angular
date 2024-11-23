import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appShowDetailsOnHover]',
  standalone: true
})
export class ShowDetailsOnHoverDirective {
  @Input('appShowDetailsOnHover') hoverText!: string;

  private tooltip: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltip) {
      // Create the tooltip element
      this.tooltip = this.renderer.createElement('span');
      // @ts-ignore
      this.tooltip.textContent = this.hoverText;

      // Style the tooltip
      this.renderer.setStyle(this.tooltip, 'position', 'absolute');
      this.renderer.setStyle(this.tooltip, 'background', '#000');
      this.renderer.setStyle(this.tooltip, 'color', '#fff');
      this.renderer.setStyle(this.tooltip, 'padding', '5px 10px');
      this.renderer.setStyle(this.tooltip, 'borderRadius', '4px');
      this.renderer.setStyle(this.tooltip, 'fontSize', '12px');
      this.renderer.setStyle(this.tooltip, 'whiteSpace', 'nowrap');
      this.renderer.setStyle(this.tooltip, 'zIndex', '1000');
      this.renderer.setStyle(this.tooltip, 'boxShadow', '0 4px 6px rgba(0,0,0,0.1)');

      // Position the tooltip relative to the text
      const rect = this.el.nativeElement.getBoundingClientRect();
      this.renderer.setStyle(this.tooltip, 'top', `${rect.top - 30}px`);
      this.renderer.setStyle(this.tooltip, 'left', `${rect.left}px`);

      // Append the tooltip to the document body
      this.renderer.appendChild(document.body, this.tooltip);
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    // Remove the tooltip when mouse leaves
    if (this.tooltip) {
      this.renderer.removeChild(document.body, this.tooltip);
      this.tooltip = null;
    }
  }
}
