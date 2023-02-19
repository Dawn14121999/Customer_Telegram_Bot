import { Injectable, Logger } from '@nestjs/common';
import {TEST_USER_ID} from "./telegram.constants"
// import * as TelegramBot from 'node-telegram-bot-api'; // works after installing types
const TelegramBot = require('node-telegram-bot-api');


//token
const TELEGRAM_TOKEN = "6105192877:AAFmUc02zlU1ZIC0mZzspjVaSlVDQXlpiXw";

@Injectable()
export class TelegramService {
    private  bot:any
    // private readonly bot:TelegramBot // works after installing types
    private logger = new Logger(TelegramService.name)

    constructor(){
        this.bot = new TelegramBot(TELEGRAM_TOKEN, {polling: true});

        // this.bot.on("message",this.onReceiveMessage)

        // this.sendMessageToUser(TEST_USER_ID,`Server started at ${new Date()}`)
    }


    onReceiveMessage = (msg:any)=>{
        this.logger.debug(msg)
    }

    sendMessageToUser = (userId:string,message:string)=>{
        this.bot.sendMessage(userId, message);
    }
}
