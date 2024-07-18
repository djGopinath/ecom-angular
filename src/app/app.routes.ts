import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const APP_ROUTES: Routes = [{
    path:'signup',
    component: SignUpComponent
},{
    path:'login',
    component: LoginComponent
},
{
    path:'admin',
    loadChildren:() => import('./admin/admin.routes').then((m) =>m.ADMIN_ROUTES)
}
];
