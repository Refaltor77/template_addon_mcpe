import {
    Block, Dimension,
    Effect,
    Entity, EntityInitializationCause, Player,
} from "@minecraft/server";
import {Event} from "../../Event";
import {EVENTS} from "../../EventList";
import {World} from "../../../world/World";

export default class EntitySpawnEvent extends Event
{
    private readonly entity: Entity;
    private readonly cause: EntityInitializationCause;

    constructor(entity: Entity, cause: EntityInitializationCause)
    {
        super();
        this.entity = entity;
        this.cause = cause;
    }

    public getEntity(): Entity {return this.entity;}
    public getCause(): EntityInitializationCause {return this.cause;}


    getEventName(): string {
        return EVENTS.entitySpawnEvent;
    }
}