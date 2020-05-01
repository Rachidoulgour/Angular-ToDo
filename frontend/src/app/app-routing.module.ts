import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { ListsComponent } from './components/lists/lists.component';

const routes: Routes = [
    {
      path: 'registrarse',
      component: SignupComponent
    },
    {
      path: 'entrar',
      component: LoginComponent
    },
    {
      path: 'añadir-lista',
      component: PublicationsComponent
    },
    {
      path: 'listas',
      component: ListsComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  