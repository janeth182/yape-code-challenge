import { Module } from '@nestjs/common';
import { ConsumerModule } from './consumer/consumer.module';
import { PersistenceModule } from './persistence/persistence.module';

@Module({
  imports: [ConsumerModule, PersistenceModule],
})
export class AppModule {}
