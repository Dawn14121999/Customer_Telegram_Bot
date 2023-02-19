"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TelegramService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramService = void 0;
const common_1 = require("@nestjs/common");
const TelegramBot = require('node-telegram-bot-api');
const TELEGRAM_TOKEN = "6105192877:AAFmUc02zlU1ZIC0mZzspjVaSlVDQXlpiXw";
let TelegramService = TelegramService_1 = class TelegramService {
    constructor() {
        this.logger = new common_1.Logger(TelegramService_1.name);
        this.onReceiveMessage = (msg) => {
            this.logger.debug(msg);
        };
        this.sendMessageToUser = (userId, message) => {
            this.bot.sendMessage(userId, message);
        };
        this.bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });
    }
};
TelegramService = TelegramService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], TelegramService);
exports.TelegramService = TelegramService;
//# sourceMappingURL=telegram.service.js.map