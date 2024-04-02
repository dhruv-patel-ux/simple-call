import { Routes } from '@angular/router';
import { authGuard } from './common/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: "home"
  },
  {
    path: 'home',
    canActivate: [authGuard],
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
    canActivate: [authGuard],
    loadComponent : () => import('./main-page/main-page.component').then(c => c.MainPageComponent),
    children: [
      {
        path: '',
        pathMatch:'full',
        redirectTo:'message-list'
      },
      {
        path: "message-list",
        loadComponent: () => import('../app/main-page/message-list/message-list.component').then(c => c.MessageListComponent)
      },
      {
        path: "search",
        loadComponent: () => import('../app/main-page/search-list/search-list.component').then(c => c.SearchListComponent)
      }
    ],

  },
  {
    path: 'chat-room/:id',
    canActivate: [authGuard],
    loadComponent: () => import('./main-page/chat-room/chat-room.component').then(c => c.ChatRoomComponent)
  },
  {
    path: 'camara',
    canActivate: [authGuard],
    loadComponent: () => import('./video/video.component').then(c => c.VideoComponent)
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        canActivateChild: [authGuard],
        loadComponent: () => import('./profile/profile.component').then(c => c.ProfileComponent)
      },
      {
        path: ':id',
        canActivateChild: [authGuard],
        loadComponent: () => import('./profile/profile-photo-edit/profile-photo-edit.component').then(c => c.ProfilePhotoEditComponent)
      }
    ]
  },
  {
    path:'**',
    loadComponent:()=> import('./home-page/home-page.component').then(c => c.HomePageComponent)
  }
];
