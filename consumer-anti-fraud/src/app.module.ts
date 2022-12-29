import { Module } from '@nestjs/common';
import { ConsumerModule } from './consumer/consumer.module';
import { KafkaProducerModule } from './producer/kafka-producer.module';

@Module({
  imports: [ConsumerModule, KafkaProducerModule],
})
export class AppModule {}
