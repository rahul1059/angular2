import { Component, EventEmitter } from '@angular/core';
@Component({
  selector: 'child-comp',
  templateUrl: `app/child.component.html`,
  inputs: ['parentValue'],
  outputs: ['childChanged']
})

export class ChildComponent  {
	public parentValue: string
	childChanged = new EventEmitter<string>();
	onKeyUp(value: string){
		this.childChanged.emit(value);
	}
}


