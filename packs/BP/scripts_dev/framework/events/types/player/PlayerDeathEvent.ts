import {Entity, EntityDamageSource, Player} from "@minecraft/server";

export class PlayerDeathEvent
{
    private readonly player: Player;
    private readonly cause: EntityDamageSource;

    constructor(player: Player, damage: EntityDamageSource)
    {
        this.player = player;
        this.cause = damage;
    }

    public getPlayer(): Entity {return this.player;}
    public getCause(): EntityDamageSource {return this.cause;}
}