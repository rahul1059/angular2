/*Services in Angular 2
Injected Items in application
Apply provider in module
create instance and access the module*/
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {User} from './user';
// Include only required library
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
	constructor(private http : Http){}
	getUserData(){
		return this.http.get("app/user-data.json")
			.map(response=><User[]>response.json().data);
	}
	getDateTime(){
		return this.http.get(" http://date.jsontest.com").map(response=>response.json());
	}
}



/*Observable
Promise cut connections , observable keeps watch on data.
Promise are not cancellable.
we need additional library for observable
rxjs 


*/