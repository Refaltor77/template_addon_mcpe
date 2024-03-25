import {Entity, EntityDamageSource} from "@minecraft/server";
import {Event} from "../../Event";
import {EVENTS} from "../../EventList";

export class EntityDamageEvent extends Event
{
    private readonly entity: Entity;
    private readonly cause: EntityDamageSource;
    private readonly damageCount: number;

    constructor(entity: Entity, damage: EntityDamageSource, damageCount: number)
    {
        super();
        this.entity = entity;
        this.cause = damage;
        this.damageCount = damageCount;
    }

    public getEntity(): Entity {return this.entity;}
    public getCause(): EntityDamageSource {return this.cause;}
    public getDamage(): number {return this.damageCount;}

    getEventName(): string {
        return EVENTS.entityDamageEvent;
    }
}