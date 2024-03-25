import {
    Block, Dimension,
    Entity,
} from "@minecraft/server";
import {Event} from "../../Event";
import {EVENTS} from "../../EventList";

export default class ButtonPushEvent extends Event
{
    private readonly source: Entity;
    private readonly block: Block;
    private readonly world: Dimension;
    public isCancel: boolean = false;

    constructor(source: Entity, block: Block, world: Dimension)
    {
        super();
        this.source = source;
        this.block = block;
    }

    public getEntity(): Entity {return this.source;}
    public getBlock(): Block {return this.block;}
    public getWorld(): Dimension {return this.world;}

    // for cancel event
    public cancel(value: boolean): void {
        this.isCancel = value;
    }

    getEventName(): string {
        return EVENTS.buttonPushEvent;
    }
}