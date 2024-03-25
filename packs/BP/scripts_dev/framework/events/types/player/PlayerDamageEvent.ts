import {Entity, EntityDamageSource, Player} from "@minecraft/server";

export class PlayerDamageEvent
{
    private readonly player: Player;
    private readonly cause: EntityDamageSource;
    private readonly damageCount: number;

    constructor(player: Player, damage: EntityDamageSource, damageCount: number)
    {
        this.player = player;
        this.cause = damage;
        this.damageCount = damageCount;
    }

    public getPlayer(): Entity {return this.player;}
    public getCause(): EntityDamageSource {return this.cause;}
    public getDamage(): number {return this.damageCount;}
}