import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaProducerModule } from './common/producer/kafka-producer.module';
import { PersistenceModule } from './persistence/persistence.module';

@Module({
  imports: [KafkaProducerModule, PersistenceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
