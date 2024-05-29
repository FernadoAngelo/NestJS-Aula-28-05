import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { ProductsSchema } from './schema/products.schema';


@Module({
  imports: [MongooseModule.forFeature([{name: Product.name, schema: ProductsSchema}])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
