import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb://0.0.0.0:27017/nest'),ProductsModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) { //acesso aos request e response 
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('products');
  }
}
