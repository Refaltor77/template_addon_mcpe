import {Entity, EntityDamageSource} from "@minecraft/server";

export class EntityDamageEvent
{
    private readonly entity: Entity;
    private readonly cause: EntityDamageSource;
    private readonly damageCount: number;

    constructor(entity: Entity, damage: EntityDamageSource, damageCount: number)
    {
        this.entity = entity;
        this.cause = damage;
        this.damageCount = damageCount;
    }

    public getEntity(): Entity {return this.entity;}
    public getCause(): EntityDamageSource {return this.cause;}
    public getDamage(): number {return this.damageCount;}
}