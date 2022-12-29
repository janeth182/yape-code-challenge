import { Injectable,Logger } from '@nestjs/common';
import { TransactionResponse } from 'src/interfaces/transaction-response.interface';
import { MessageDto } from '../common/message/message.dto';
import { Transaction } from '../interfaces/transaction.interfaces';
import { TransactionEnum } from '../enums/transaction-type';
import { KafkaProducerService } from '../producer/kafka-producer.service';
import { TransactionStatus } from 'src/const/transaction-status';

@Injectable()
export class ConsumerService {
  private readonly logger = new Logger(ConsumerService.name);
  constructor(private readonly kafkaProducerService: KafkaProducerService) {}
  getConsumerMessage(message: MessageDto): void {
    const transaction: Transaction = JSON.parse(JSON.stringify(message.value)) ;
    let transactionResponse: TransactionResponse = new TransactionResponse();
    transactionResponse.transactionExternalId = transaction.transactionExternalId;
    transactionResponse.transactionStatus = {
      name : transaction.value > 1000 ? TransactionStatus.REJECTED : TransactionStatus.APPROVED
    };
    transactionResponse.transactionType = { 
      name: TransactionEnum[transaction.tranferTypeId]
    };
    transactionResponse.value = transaction.value;
    transactionResponse.createdAt = new Date();
    
    this.logger.log(`TransactionResponse: ${JSON.stringify(message.value)}`)

    const messageResponse: string = JSON.stringify(transactionResponse);
    
    this.kafkaProducerService.publish(messageResponse);
  }
}
