import { INestMicroservice, ValidationPipe } from '@nestjs/common';

export const configApp = (app: INestMicroservice) => {
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      stopAtFirstError: true,
      whitelist: true,
    }),
  );
};
