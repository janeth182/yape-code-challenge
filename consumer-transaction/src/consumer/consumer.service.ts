import { Injectable, Logger } from '@nestjs/common';
import { TransactionResponse } from 'src/interfaces/transaction-response.interface';
import { MessageDto } from '../common/message/message.dto';
import { Transaction } from '../interfaces/transaction.interfaces';
import { TransactionPersistenceService } from '../persistence/transaction-persistence.service';

@Injectable()
export class ConsumerService {
  private readonly logger = new Logger(ConsumerService.name);
  constructor(private readonly transactionPersistenceService:TransactionPersistenceService) { }
   getConsumerMessage(message: MessageDto): void {
    const transactionResponse: TransactionResponse = JSON.parse(JSON.stringify(message.value));
    const transaction: Transaction = new Transaction();
    transaction.transactionExternalId = transactionResponse.transactionExternalId;
    transaction.status= transactionResponse.transactionStatus.name;
    transaction.extraData = JSON.stringify(transactionResponse);

    this.logger.log(`TransactionResponse: ${JSON.stringify(message.value)}`);
    
    this.transactionPersistenceService.updateTransaction(transaction);
  }
}
