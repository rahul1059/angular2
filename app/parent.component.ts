import { Component } from '@angular/core';


@Component({
  selector: 'parent-comp',
  templateUrl: `app/parent.component.html`,
  styles: [`
	  .parent{
	  	border: 5px red solid
	  }
	  .child{
	  	border: 3px green dashed
	  }
  `]
})

export class ParentComponent  { 
	public childValue: string;
}


