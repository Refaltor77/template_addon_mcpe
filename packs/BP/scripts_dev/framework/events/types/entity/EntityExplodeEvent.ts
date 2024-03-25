import {
    Block, Dimension,
    Effect,
    Entity, Player,
} from "@minecraft/server";
import {Event} from "../../Event";
import {EVENTS} from "../../EventList";
import {World} from "../../../world/World";

export default class EntityExplodeEvent extends Event
{
    private readonly entity: Entity;
    private affectedBlocks: Block[];

    constructor(entity: Entity, affectedBlocks: Block[])
    {
        super();
        this.entity = entity;
        this.affectedBlocks = affectedBlocks;
    }

    public getEntity(): Entity {return this.entity;}
    public getAffectedBlocks(): Block[] {return this.affectedBlocks;}


    public setAffectedBlocks(blocks: Block[]): void {
        this.affectedBlocks = blocks;
    }

    getEventName(): string {
        return EVENTS.entityExplodeEvent;
    }

    isCancellable(): boolean {
        return true;
    }
}