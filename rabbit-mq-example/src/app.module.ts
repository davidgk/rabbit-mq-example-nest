import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { ConfigModule } from '@nestjs/config';
import { envConfigParam } from '@config/env-config-params';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [ConfigModule.forRoot(envConfigParam), CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
