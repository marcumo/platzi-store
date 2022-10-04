import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Holi!';
  }

  @Get('Nuevo')
  newEndpoint() {
    return 'yo suy nuevo'
  }

  @Get('ruta')
  hello() {
    return 'con /sas/'
  }




}
