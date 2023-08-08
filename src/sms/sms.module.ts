import { Module } from '@nestjs/common';
import { SmsController } from './sms.controller';
import { SMSService } from './sms.service';

@Module({
  imports: [],
  controllers: [SmsController],
  providers: [SMSService],
})
export class SmsModule {}
