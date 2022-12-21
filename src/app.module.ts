import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { ConfigModule } from '@nestjs/config';
import { envConfigParam } from '@config/env-config-params';

@Module({
  imports: [ConfigModule.forRoot(envConfigParam)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
