import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddProductsService } from '../../services/add-products.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private fb: FormBuilder, private addProductsService: AddProductsService, private route: ActivatedRoute) {
    this.form = this.fb.group({
      referenceNumber: ['', [Validators.required]],
      productName: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.pattern(/^(?!0\.00)\d+(\.\d{1,2})?$/), Validators.min(1)]],
      description: ['', [Validators.required]],
      productType: ['', [Validators.required]],
      onSale: [false],
      productImage: [null, [Validators.required]]
    });

    this.route.queryParams.subscribe(params => {
      const referenceNumber = params['referenceNumber'];
      if (referenceNumber) {
        this.loadProduct(referenceNumber);
      }
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

  loadProduct(referenceNumber: string) {
    const product = this.addProductsService.getProductByReferenceNumber(referenceNumber);
    if (product) {
      this.form.patchValue(product);
    }
  }

  saveFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      const arrayBuffer = reader.result as ArrayBuffer;
      const blob = new Blob([arrayBuffer], { type: file.type });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const referenceNumber = this.form.get('referenceNumber')?.value || 'default';
      link.download = `${referenceNumber}.${file.name.split('.').pop()}`;
      link.click();
      URL.revokeObjectURL(url);
    };
    reader.readAsArrayBuffer(file);
  }

  onSubmit() {
    if (this.form.valid) {
      const referenceNumber = this.form.get('referenceNumber')?.value;
      if (this.addProductsService.getProductByReferenceNumber(referenceNumber)) {
        this.addProductsService.updateProduct(this.form.value);
      } else {
        this.addProductsService.addProduct(this.form.value);
      }
      this.form.reset();
    } else {
      console.log('Form not valid');
    }
  }
}
