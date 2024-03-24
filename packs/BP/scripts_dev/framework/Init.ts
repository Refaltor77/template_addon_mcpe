import {HandlerListManager} from "./events/HandlerListManager";

export default class Init
{
    private eventManager: HandlerListManager;

    constructor()
    {
        this.eventManager = new HandlerListManager();
    }

    public getEventManager(): HandlerListManager
    {
        return this.eventManager;
    }
}