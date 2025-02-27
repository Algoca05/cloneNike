import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContentComponent, FooterComponent, FormComponent, NavComponent, ProductsComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoComponentesWebUF3';
}
