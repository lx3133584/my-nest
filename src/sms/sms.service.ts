import { Injectable } from '@nestjs/common';
import Dysmsapi20170525, * as $Dysmsapi20170525 from '@alicloud/dysmsapi20170525';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import Util, * as $Util from '@alicloud/tea-util';

@Injectable()
export class SMSService {
  client: Dysmsapi20170525
  constructor() {
    this.client = this.createClient(process.env['ALIBABA_CLOUD_ACCESS_KEY_ID'], process.env['ALIBABA_CLOUD_ACCESS_KEY_SECRET'])
  }
  createClient(accessKeyId: string, accessKeySecret: string): Dysmsapi20170525 {
    let config = new $OpenApi.Config({
      // 必填，您的 AccessKey ID
      accessKeyId: accessKeyId,
      // 必填，您的 AccessKey Secret
      accessKeySecret: accessKeySecret,
    });
    // Endpoint 请参考 https://api.aliyun.com/product/Dysmsapi
    config.endpoint = `dysmsapi.aliyuncs.com`;
    return new Dysmsapi20170525(config);
  }
  async sendMsg(phoneNumber: string) {
    let sendSmsRequest = new $Dysmsapi20170525.SendSmsRequest({ 
      phoneNumbers: phoneNumber,
      signName: 'liangxu',
      templateCode: 'SMS_462435619',
    });
    let runtime = new $Util.RuntimeOptions({ });
    let resp = await this.client.sendSmsWithOptions(sendSmsRequest, runtime);
    return resp;
  }
}
