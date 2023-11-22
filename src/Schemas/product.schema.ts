import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product {
  @Prop()
  id?: number;

  @Prop()
  categoryId?: number;

  @Prop()
  productName?: string;

  @Prop()
  productDetail?: string;

  @Prop()
  price?: number;
}

export type ProductDocument = Product & Document;

export const ProductSchema = SchemaFactory.createForClass(Product);
