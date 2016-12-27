import { Component } from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';

@Component({
  selector: 'user-comp',
  templateUrl: `app/user.component.html`,
  styleUrls: [`app/app.component.css`, `app/user.component.css`]
})

export class UserComponent  { 
	users: User [] = [];
	timeNow: string;
	constructor(private userService: UserService){
	}
	ngOnInit(){
		this.userService.getUserData().subscribe(people=>this.users= people,
			error=>console.log("Error"),
			()=>console.log("FINISHED!!"));

		this.userService.getDateTime().subscribe(data=>this.timeNow= data.time,
			error=>console.log("Error"),
			()=>console.log("FINISHED!!"));
	}
	totIncome(){
		let total = 0;
		for (const user of this.users) {
			total = total + user.income;
		}
		return total;
	}
	addVote(user : User){
		user.vote ++;
	}
	decalreWinner(){
		let winner : User;
		for (const user of this.users) {
			if(winner) {
				if(winner.vote < user.vote){
					winner = user;
				}
			}else{
				winner = user;
			}
		}
		return "And the winner is " + winner.firstName + " " + winner.lastName;
	}
}


