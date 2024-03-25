import {
    Effect,
    Entity, Player,
} from "@minecraft/server";
import {Event} from "../../Event";
import {EVENTS} from "../../EventList";

export default class PlayerAddEffectEvent extends Event
{
    private readonly entity: Player;
    private readonly effect: Effect;

    constructor(entity: Player, effect: Effect)
    {
        super();
        this.entity = entity;
        this.effect = effect;
    }

    public getPlayer(): Player {return this.entity;}
    public getEffect(): Effect {return this.effect;}



    getEventName(): string {
        return EVENTS.entityAddEffectEvent;
    }

    isCancellable(): boolean {
        return true;
    }
}