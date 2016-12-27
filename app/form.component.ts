import { Component } from '@angular/core';

@Component({
  selector: 'form-comp',
  templateUrl: `app/form.component.html`,
  styles: [`
  label{
  	width: 100px;
  }
  .ng-invalid[required]{
  	border-left: 5px red solid;
  }
  .ng-valid[required]{
  	border-left: 5px green solid;
  }`]
})

export class FormComponent  {
	registerMe(){
		console.log('test')
	}
}

