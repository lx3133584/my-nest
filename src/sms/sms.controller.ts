import { Controller, Get } from '@nestjs/common';
import { SMSService } from './sms.service';


@Controller('sms')
export class SmsController {
    constructor(private readonly smsService: SMSService) {}

  @Get('send')
  sendMsg() {
    return this.smsService.sendMsg('15510005512');
  }
}
