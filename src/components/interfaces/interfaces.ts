export interface IProducts{
    id:number,
    brand:string,
    title:string
    category:string,
    description:string
    discountPercentage:number,
    images:string[],
    price:number
    rating:number,
    stock:number,
    thumbnail:string,
}

export interface IProductsResponse{
    counter:any
}

export interface INewProduct {
    title: string;
    author: string;
    date: string;
    rating:number
  }