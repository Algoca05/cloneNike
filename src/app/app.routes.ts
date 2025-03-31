import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ProductsComponent } from './products/products.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { middlewareGuard } from './middleware.guard';

export const routes: Routes = [
    { path: '', component: ContentComponent },
    { path: 'products', component: ProductsComponent, canActivate: [middlewareGuard] },
    { path: 'form', component: FormComponent, canActivate: [middlewareGuard] },
    { path: 'login', component: LoginComponent }, // Login route
    { path: 'register', component: RegisterComponent }, // Register route
    { path: '**', redirectTo: 'login' } // Redirect to login by default
];