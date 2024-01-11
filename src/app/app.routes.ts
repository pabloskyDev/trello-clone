import { Routes } from "@angular/router";
import NotFoundComponent from "@pages/errors/not-found/not-found.component";

const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('@pages/auth/login/login.component'),
  },
  /*{
    path: '',

  },*/
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

export default routes;
