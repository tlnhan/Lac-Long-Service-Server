import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from '../../Schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async getProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async detailProduct(id: number): Promise<Product> {
    return this.productModel.findOne({ id }).exec();
  }

  async createProduct(product: Product): Promise<Product> {
    const createdProduct = new this.productModel(product);
    return createdProduct.save();
  }

  async updateProduct(id: number, product: Product): Promise<Product> {
    return this.productModel.findOneAndUpdate({ id }, product).exec();
  }

  async deleteProduct(id: number): Promise<void> {
    await this.productModel.deleteOne({ id }).exec();
  }
}
