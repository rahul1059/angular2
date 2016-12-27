import { Routes } from '@angular/router';
import { ParentComponent }  from './parent.component';
import { FormComponent }  from './form.component';
import { UserComponent }  from './user.component';
import { AboutComponent }  from './about.component';
import { ContactComponent }  from './contact.component';
import { PageNotFoundComponent }  from './pageNotFoundComponent.component';


export const APP_ROUTES : Routes = [
{path : "", component : UserComponent},
{path : "about", component : AboutComponent},
{path : "contact", component : ContactComponent},
{path : "parent", component : ParentComponent},
{path : "form", component : FormComponent},
{path : "**", component : PageNotFoundComponent}
]