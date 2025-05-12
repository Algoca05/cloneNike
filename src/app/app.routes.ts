import { Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { ProductsComponent } from './components/products/products.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { middlewareGuard } from './middleware.guard'; // updated guard import

export const routes: Routes = [
    { path: '', component: ContentComponent },
    { path: 'products', component: ProductsComponent, canActivate: [middlewareGuard] },
    { path: 'form', component: FormComponent, canActivate: [middlewareGuard] },
    { path: 'login', component: LoginComponent }, // Login route
    { path: 'register', component: RegisterComponent }, // Register route
    { path: '**', redirectTo: 'login' } // Redirect to login by default
];