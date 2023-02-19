export declare class TelegramService {
    private bot;
    private logger;
    constructor();
    onReceiveMessage: (msg: any) => void;
    sendMessageToUser: (userId: string, message: string) => void;
}
