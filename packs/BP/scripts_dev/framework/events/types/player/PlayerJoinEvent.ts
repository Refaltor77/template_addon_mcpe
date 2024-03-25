import {Player} from "@minecraft/server";
import {Event} from "../../Event";
import {EVENTS} from "../../EventList";

export default class PlayerJoinEvent extends Event
{
    private readonly player: Player;
    private readonly initialSpawn: boolean;

    constructor(player: Player, initialSpawn: boolean)
    {
        super();
        this.player = player;
        this.initialSpawn = initialSpawn;
    }

    public getPlayer(): Player {return this.player;}
    public hasPlayedBefore(): boolean {return this.initialSpawn;}

    getEventName(): string {
        return EVENTS.playerJoinEvent;
    }
}