import { Component } from '@angular/core';

@Component({
  template: `<h1>Page not found....</h1>
  <button (click)="goHome()" class="badge"> Go Home </button>
  `,
})

export class PageNotFoundComponent  {
	goHome(){
		window.location.href = "/"
	}
}

