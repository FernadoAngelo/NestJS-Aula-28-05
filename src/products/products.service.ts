import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async create(createProductDto: CreateProductDto) {
    const createProduct = await this.productModel.create(createProductDto);
    return createProduct;
  }

  async findAll() {
    const allProduct = await  this.productModel.find();
    return allProduct;
  }

  async findOne(id: number) {
    const findedProduct = await this.productModel.findById(id);
    return findedProduct;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const newProduct = await this.productModel.findByIdAndUpdate(id);
    return newProduct;
  }

  remove(id: number) {
    const deletedProduct = this.productModel.deleteOne({ id: id });
    return deletedProduct;
  }
}
