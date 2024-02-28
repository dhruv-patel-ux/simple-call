import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
   pathMatch:'full',
   redirectTo:"home"
  },
  {
    path: 'home',
    loadComponent: () => import('./home-page/home-page.component').then(c => c.HomePageComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./sign-up-page/sign-up-page.component').then(c => c.SignUpPageComponent)
  },
  {
    path: 'main',
    loadComponent: () => import('./main-page/main-page.component').then(c => c.MainPageComponent)
  },
  {
    path: 'chat-room',
    loadComponent: () => import('./chat-room/chat-room.component').then(c => c.ChatRoomComponent)
  },

];
