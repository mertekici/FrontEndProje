import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // product: any = { productId: 1, productName: 'Bardak', categoryId: 1, unitPrice: 5,unitsInStock:3 }   // any yaparsanız her türlü veri konulabilir yapmasak da olur
  // product1 = { productId: 2, productName: 'Laptop', categoryId: 1, unitPrice: 5 , unitsInStock:6}
  // product2 = { productId: 3, productName: 'Mause', categoryId: 1, unitPrice: 5 ,unitsInStock:1}
  // product3 = { productId: 4, productName: 'Klavye', categoryId: 1, unitPrice: 5 , unitsInStock:9}
  // product4 = { productId: 5, productName: 'Çaydanlık', categoryId: 1, unitPrice: 5 }

  products:Product[] = [
   
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
