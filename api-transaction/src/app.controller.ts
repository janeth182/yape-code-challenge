import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Transaction } from './interfaces/transaction.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/send-transaction')
  async sendTrasaction(@Body() transaction: Transaction): Promise<void> {
    return await this.appService.publishMessage(transaction);
  }
}
