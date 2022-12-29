import { Injectable } from '@nestjs/common';
import { KafkaProducerService } from './common/producer/kafka-producer.service';
import { Transaction } from './interfaces/transaction.interface';
import { v4 as uuidv4 } from 'uuid';
import { TransactionPersistenceService } from './persistence/transaction-persistence.service';

@Injectable()
export class AppService {
  constructor(private readonly KafkaProducerService: KafkaProducerService,
    private readonly transactionPersistenceService:TransactionPersistenceService) {}
  publishMessage(transaction: Transaction): Promise<void> {
    transaction.transactionExternalId = uuidv4();
    transaction.status = 'CREATED';
    const message: string = JSON.stringify(transaction);
    this.transactionPersistenceService.createTransaction(transaction);
    return this.KafkaProducerService.publish(message);
  }
}