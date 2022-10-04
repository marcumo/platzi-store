export class CreateProductDto {
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly image: string;
  readonly stok: number;
}

export class UpdateProductDto {
  readonly name?: string;
  readonly description?: string;
  readonly price?: number;
  readonly image?: string;
  readonly stok?: number;
}

