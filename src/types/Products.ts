export interface ProductItem {
  name: string;
  type: string;
  price: string;
  image: string;
}

export type ProductsData = ProductItem[];

export type ProductsResponse = Promise<ProductsData>;
