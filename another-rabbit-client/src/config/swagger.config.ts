import { DocumentBuilder } from '@nestjs/swagger';

const documentBuilder = new DocumentBuilder()
  .setTitle('Football API')
  .setDescription('APIs for Exercise.')
  .setVersion('1.0')
  .build();

export default documentBuilder;
