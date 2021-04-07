import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route:ActivatedRoute,
  ) { }

  ngOnInit() {
    // 订阅了路由参数，并且根据 productId 获取了该产品。
    this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });
  }

}