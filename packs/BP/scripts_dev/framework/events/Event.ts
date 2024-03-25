import {HandlerListManager} from "./HandlerListManager";
import Loader from "../../Loader";

export abstract class Event
{
    public isCancel: boolean = false;
    public abstract getEventName(): string;

    public call()
    {
        HandlerListManager.callEvent(this.getEventName(), this, Loader.getInstance());
    }

    public isCancellable(): boolean {return false;}
    public cancel(value: boolean)
    {
        this.isCancel = value;
    }
}