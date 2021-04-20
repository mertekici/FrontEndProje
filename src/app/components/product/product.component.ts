import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any = { productId: 1, productName: 'Bardak', categoryId: 1, unitPrice: 5 }   // any yaparsanız her türlü veri konulabilir yapmasak da olur
  product1 = { productId: 2, productName: 'Laptop', categoryId: 1, unitPrice: 5 }
  product2 = { productId: 3, productName: 'Mause', categoryId: 1, unitPrice: 5 }
  product3 = { productId: 4, productName: 'Klavye', categoryId: 1, unitPrice: 5 }
  product4 = { productId: 5, productName: 'Çaydanlık', categoryId: 1, unitPrice: 5 }

  products = [
    this.product,
    this.product1,
    this.product2,
    this.product3,
    this.product4
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
