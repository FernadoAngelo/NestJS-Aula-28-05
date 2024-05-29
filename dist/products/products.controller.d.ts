/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/product.entity").Product> & import("./entities/product.entity").Product & Required<{
        _id: unknown;
    }>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./entities/product.entity").Product> & import("./entities/product.entity").Product & Required<{
        _id: unknown;
    }>)[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/product.entity").Product> & import("./entities/product.entity").Product & Required<{
        _id: unknown;
    }>>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/product.entity").Product> & import("./entities/product.entity").Product & Required<{
        _id: unknown;
    }>>;
    remove(id: string): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, import("./entities/product.entity").Product> & import("./entities/product.entity").Product & Required<{
        _id: unknown;
    }>, {}, import("./entities/product.entity").Product, "deleteOne", {}>;
}
