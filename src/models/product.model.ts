export class Product {
  id?: number;
  categoryId?: number;
  productName?: string;
  productDetail?: string;
  price?: number;

  constructor({ id, categoryId, productName, productDetail, price }) {
    if (id !== null) this.id = id;
    if (categoryId !== null) this.categoryId = categoryId;
    if (productName !== null) this.productName = productName;
    if (productDetail !== null) this.productDetail = productDetail;
    if (price !== null) this.price = price;
  }
}
