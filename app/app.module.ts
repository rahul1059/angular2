import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

// Components
import { AppComponent }  from './app.component';
import { ParentComponent }  from './parent.component';
import { ChildComponent }  from './child.component';
import { FormComponent }  from './form.component';
import { UserComponent }  from './user.component';
import { AboutComponent }  from './about.component';
import { ContactComponent }  from './contact.component';
import { PageNotFoundComponent }  from './pageNotFoundComponent.component';

// Routing
import { APP_ROUTES} from './app.routing';
// Services
import { UserService }  from './user.service';

// Pipes and directives
import { DoubleMePipe }  from './double.pipe';
import { StyleDirective }  from './style.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(APP_ROUTES) ], // All angular services/components to be used
  declarations: [ AppComponent, AboutComponent, ContactComponent, PageNotFoundComponent, UserComponent, DoubleMePipe, ParentComponent, ChildComponent, StyleDirective, FormComponent], // All go here
  providers: [UserService],
  bootstrap:    [ AppComponent ] // Only bootstraped components needed.
})
export class AppModule { }
