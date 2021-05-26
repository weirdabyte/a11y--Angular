import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Contact/contact.component';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './About/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'Home', component: HomeComponent},
  { path: 'About', component: AboutComponent},
  { path: 'Contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routiongComponents = [HomeComponent, AboutComponent, ContactComponent]
