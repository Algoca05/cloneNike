import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ProductsComponent } from './products/products.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    { path: '', component: ContentComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'form', component: FormComponent }
];