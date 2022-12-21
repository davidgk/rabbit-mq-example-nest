import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from '@cat/cat.service';
import { ClientRMQ, ClientsModule, Transport } from '@nestjs/microservices';

const catClientModule = () => {
  return {
    name: 'CAT_MQ_SERVICE',
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBIT_MQ_ADDRESS],
      queue: 'cats_queue',
      queueOptions: {
        durable: false,
      },
    },
  };
};

@Module({
  imports: [ClientsModule.register([catClientModule])],
  controllers: [CatController],
  providers: [
    CatService,
    {
      provide: 'CAT_MQ_SERVICE',
      useClass: ClientRMQ,
    },
  ],
})
export class CatModule {}
