import ProductService from '../services/product.service';

export default class ProductController {
  productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }
}