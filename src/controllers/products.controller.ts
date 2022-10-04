import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus, ParseIntPipe } from '@nestjs/common';

import { ProductsService } from 'src/services/products.service';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService){}

  @Get()
  getProducts(@Query('limit') limit = 200,@Query('offset') offset: number, @Query('brand') brand: string ) {
    return this.productsService.findAll();
  }

  @Get('Filter')
  getProductFilter() {
    return `Filter!`
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateProductDto){
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }
}
