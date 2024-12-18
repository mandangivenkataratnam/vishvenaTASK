import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',component:NavbarComponent,
    children:[
      {path:'expertise',component:ExpertiseComponent},
      {path:'footer',component:FooterComponent},
      {path:'contact',component:ContactComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
