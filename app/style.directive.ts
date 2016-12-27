import { Directive, ElementRef } from '@angular/core';
@Directive({
	selector: '[styleDirective]',
})
export class StyleDirective {
	constructor(private el: ElementRef){
		el.nativeElement.style.backgroundColor = "rgba(51, 122, 183, 0.15)";
	}
}