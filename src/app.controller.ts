import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TelegramService } from './telegram/telegram.service';

@Controller()
export class AppController {
  [x: string]: any;
  constructor(private readonly TelegramService: TelegramService) {}

  @Post("/sendMessage/")
  getProduct(@Body() message:JSON): string {
    this.TelegramService.sendMessageToUser("-888787067",message['message']);
    return "ok";
  }
}
