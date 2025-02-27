import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddProductsService } from '../add-products.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  form: FormGroup;
  errorMessages: { [key: string]: { [key: string]: string } } = {
    referenceNumber: {
      required: 'Nº de referencia es obligatorio.'
    },
    productName: {
      required: 'Nombre del producto es obligatorio.',
      minlength: 'Nombre del producto debe tener al menos 3 caracteres.'
    },
    price: {
      required: 'Precio es obligatorio.',
      pattern: 'Tiene que ser un numero positivo',
      min: 'Precio debe ser mayor a 0.'
    },
    description: {
      required: 'Descripcion es obligatoria.'
    },
    productType: {
      required: 'Tipo de producto es obligatorio.'
    },
    productImage: {
      required: 'Imagen del producto es obligatoria.'
    }
  };

  constructor(private fb: FormBuilder, private addProductsService: AddProductsService) {
    this.form = this.fb.group({
      referenceNumber: ['', [Validators.required]],
      productName: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.pattern(/^(?!0\.00)\d+(\.\d{1,2})?$/), Validators.min(1)]],
      description: ['', [Validators.required]],
      productType: ['', [Validators.required]],
      onSale: [false],
      productImage: [null, [Validators.required]]
    });
  }

  getErrorMessage(controlName: string): string {
    const control = this.form.get(controlName);
    if (control && control.errors) {
      for (const error in control.errors) {
        if (control.errors.hasOwnProperty(error)) {
          return this.errorMessages[controlName][error];
        }
      }
    }
    return '';
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.form.patchValue({
        productImage: file
      });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.addProductsService.addProduct(this.form.value);
      this.form.reset();
    } else {
      console.log('Form not valid');
    }
  }
}
