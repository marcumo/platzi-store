import { Body, Controller, Post } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Post()
  Create(@Body() lodemas: any) {
    return {
      message : 'Metodo Post para Orders',
      ...lodemas
    }
  }
}
