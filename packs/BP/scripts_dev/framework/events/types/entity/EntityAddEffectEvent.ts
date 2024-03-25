import {
    Effect,
    Entity,
} from "@minecraft/server";
import {Event} from "../../Event";
import {EVENTS} from "../../EventList";

export default class EntityAddEffectEvent extends Event
{
    private readonly entity: Entity;
    private readonly effect: Effect;

    constructor(entity: Entity, effect: Effect)
    {
        super();
        this.entity = entity;
        this.effect = effect;
    }

    public getEntity(): Entity {return this.entity;}
    public getEffect(): Effect {return this.effect;}



    getEventName(): string {
        return EVENTS.entityAddEffectEvent;
    }

    isCancellable(): boolean {
        return true;
    }
}