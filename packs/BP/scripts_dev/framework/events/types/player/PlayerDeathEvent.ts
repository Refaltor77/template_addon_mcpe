import {Entity, EntityDamageSource, Player} from "@minecraft/server";
import {Event} from "../../Event";
import {EVENTS} from "../../EventList";

export class PlayerDeathEvent extends Event
{
    private readonly player: Player;
    private readonly cause: EntityDamageSource;

    constructor(player: Player, damage: EntityDamageSource)
    {
        super();
        this.player = player;
        this.cause = damage;
    }

    public getPlayer(): Entity {return this.player;}
    public getCause(): EntityDamageSource {return this.cause;}

    getEventName(): string {
        return EVENTS.playerDeathEvent;
    }
}