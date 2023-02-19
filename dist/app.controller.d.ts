import { TelegramService } from './telegram/telegram.service';
export declare class AppController {
    private readonly TelegramService;
    [x: string]: any;
    constructor(TelegramService: TelegramService);
    getProduct(message: JSON): string;
}
