import {HandlerListManager} from "./HandlerListManager";
import Loader from "../../Loader";

export abstract class Event
{
    public abstract getEventName(): string;

    public call()
    {
        HandlerListManager.callEvent(this.getEventName(), this, Loader.getInstance());
    }
}