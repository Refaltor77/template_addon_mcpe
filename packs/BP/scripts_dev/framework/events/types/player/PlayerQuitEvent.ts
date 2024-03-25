import {Player} from "@minecraft/server";
import {Event} from "../../Event";
import {EVENTS} from "../../EventList";

export default class PlayerQuitEvent extends Event
{
    private readonly player: Player;

    constructor(player: Player)
    {
        super();
        this.player = player;
    }

    public getPlayer(): Player {return this.player;}

    getEventName(): string {
        return EVENTS.playerQuitEvent;
    }
}