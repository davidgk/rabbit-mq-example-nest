import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configApp } from '@app/lib/config.app';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBIT_MQ_ADDRESS],
        queue: 'cats_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  configApp(app);
  await app.listen();
}

bootstrap();
