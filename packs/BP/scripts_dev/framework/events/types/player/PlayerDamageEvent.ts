import {Entity, EntityDamageSource, Player} from "@minecraft/server";
import {Event} from "../../Event";
import {EVENTS} from "../../EventList";

export class PlayerDamageEvent extends Event
{
    private readonly player: Player;
    private readonly cause: EntityDamageSource;
    private readonly damageCount: number;

    constructor(player: Player, damage: EntityDamageSource, damageCount: number)
    {
        super();
        this.player = player;
        this.cause = damage;
        this.damageCount = damageCount;
    }

    public getPlayer(): Entity {return this.player;}
    public getCause(): EntityDamageSource {return this.cause;}
    public getDamage(): number {return this.damageCount;}

    getEventName(): string {
        return EVENTS.playerDamageEvent;
    }
}