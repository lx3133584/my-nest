import { Controller, Get } from '@nestjs/common';
import { SMSService } from './sms.service';


@Controller('sms')
export class SmsController {
  private lastSent: Date | null = null;
  constructor(private readonly smsService: SMSService) { }

  @Get('send')
  async sendMsg() {
    const now = new Date();
    if (this.lastSent && now.getTime() - this.lastSent.getTime() < 10 * 60 * 1000) {
      // 如果在过去的10分钟内已经发送过短信，直接返回
      return;
    }

    const result = await this.smsService.sendMsg('15510005512');

    // 更新上次发送短信的时间
    this.lastSent = now;

    return result;
  }
}
