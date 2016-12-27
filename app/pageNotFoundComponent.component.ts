import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `<h1>Page not found....</h1>
  <button (click)="goHome()" class="badge"> Go Home </button>
  `,
})

export class PageNotFoundComponent  {
	constructor(private router: Router){}
	goHome(){
		this.router.navigate(['about']);
	}
}

