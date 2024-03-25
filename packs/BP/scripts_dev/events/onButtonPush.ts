import Listener from "../framework/events/Listener";
import Loader from "../Loader";
import ButtonPushEvent from "../framework/events/types/block/ButtonPushEvent";
import {Player} from "@minecraft/server";

export class onButtonPush extends Listener
{
    onEvent(event: ButtonPushEvent, loader: Loader): void
    {
        const source = event.getEntity();
        if (source instanceof Player)
        {
            source.sendMessage("Wow ! You have pushed this button ? Seriously ?");
        }
    }
}