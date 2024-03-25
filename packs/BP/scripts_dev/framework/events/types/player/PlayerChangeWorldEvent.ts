import {Dimension, Entity, Player, Vector3} from "@minecraft/server";
import {World} from "../../../world/World";
import {Event} from "../../Event";
import {EVENTS} from "../../EventList";

export class PlayerChangeWorldEvent extends Event
{
    private readonly player: Player;
    private readonly fromWorld: Dimension;
    private readonly toWorld: Dimension;
    private readonly fromPosition: Vector3;
    private readonly toPosition: Vector3;

    constructor(player: Player, fromWorld: Dimension, toWorld: Dimension, fromPos: Vector3, toPos: Vector3)
    {
        super();
        this.player = player;
        this.fromWorld = fromWorld;
        this.toWorld = toWorld;
        this.fromPosition = fromPos;
        this.toPosition = toPos;
    }

    public getPlayer(): Entity {return this.player;}
    public getBeforeWorld(): World {return new World(this.fromWorld);}
    public getNewWorld(): World {return new World(this.toWorld);}
    public getBeforePosition(): Vector3 {return this.fromPosition;}
    public getNewPosition(): Vector3 {return this.toPosition;}

    getEventName(): string {
        return EVENTS.playerChangeWorldEvent;
    }
}