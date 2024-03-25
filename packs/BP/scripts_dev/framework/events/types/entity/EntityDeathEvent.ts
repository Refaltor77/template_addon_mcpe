import {Entity, EntityDamageSource, Player} from "@minecraft/server";
import {Event} from "../../Event";
import {EVENTS} from "../../EventList";

export default class EntityDeathEvent extends Event
{
    private readonly entity: Entity;
    private readonly cause: EntityDamageSource;

    constructor(entity: Entity, damage: EntityDamageSource)
    {
        super();
        this.entity = entity;
        this.cause = damage;
    }

    public getEntity(): Entity {return this.entity;}
    public getCause(): EntityDamageSource {return this.cause;}

    getEventName(): string {
        return EVENTS.entityDeathEvent;
    }
}