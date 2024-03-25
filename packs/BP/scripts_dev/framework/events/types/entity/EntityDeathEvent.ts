import {Entity, EntityDamageSource, Player} from "@minecraft/server";

export default class EntityDeathEvent
{
    private readonly entity: Entity;
    private readonly cause: EntityDamageSource;

    constructor(entity: Entity, damage: EntityDamageSource)
    {
        this.entity = entity;
        this.cause = damage;
    }

    public getEntity(): Entity {return this.entity;}
    public getCause(): EntityDamageSource {return this.cause;}
}