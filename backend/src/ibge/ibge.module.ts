import { Module } from '@nestjs/common';
import { IbgeService } from './ibge.service';
import { IbgeController } from './ibge.controller';

@Module({
  providers: [IbgeService],
  controllers: [IbgeController]
})
export class IbgeModule {}
