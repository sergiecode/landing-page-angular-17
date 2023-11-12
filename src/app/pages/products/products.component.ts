import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productList: IProduct[] = []
  private _apiService = inject(ApiService);
  private _router = inject(Router);

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: IProduct[]) => {
      console.log(data)
      this.productList = data;
    }
    );
  }

  navegate(id: number): void {
    this._router.navigate(['/products', id]);
  }
}
