import { Injectable,Logger } from '@nestjs/common';
import { Kafka, Producer } from 'kafkajs';
import { clientId, TopicTransactionRetrieve, broker, connectionTimeout, authenticationTimeout, reauthenticationThreshold } from '../../kafka-config.json';

@Injectable()
export class KafkaProducerService {
  private readonly logger = new Logger(KafkaProducerService.name);
  private readonly kafkaInstance: Kafka;
  private producer: Producer;

  constructor() {
    this.kafkaInstance = new Kafka({
      clientId: clientId,
      brokers: [broker],
      connectionTimeout: connectionTimeout,
      authenticationTimeout: authenticationTimeout,
      reauthenticationThreshold: reauthenticationThreshold,
    });

    this.producer = this.kafkaInstance.producer();
  }

  async publish(message: string): Promise<void> {
    this.logger.log(`TransactionResponse: ${JSON.stringify(message)}`)
    await this.producer.connect();
    await this.producer.send({
      topic: TopicTransactionRetrieve,
      messages: [{ value: message }],
    });
  }
}
