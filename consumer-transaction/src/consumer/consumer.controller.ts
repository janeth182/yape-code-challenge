import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ConsumerService } from './consumer.service';
import { ParseMessagePipe } from '../common/message/parse-message.pipe';

import { topicTransactionRetrieve } from '../../kafka-config.json';

@Controller()
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService) {}

  @MessagePattern(topicTransactionRetrieve)
  getConsumerMessage(@Payload(new ParseMessagePipe()) message): void {
    return this.consumerService.getConsumerMessage(message);
  }
}
