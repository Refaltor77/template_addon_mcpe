import {
    Block,
    Direction,
    ItemStack,
    ItemUseOnBeforeEvent,
    Player,
    Vector3
} from "@minecraft/server";
import {Event} from "../../Event";
import {EVENTS} from "../../EventList";

export default class PlayerInteractEvent extends Event
{
    private readonly player: Player;
    private readonly block: Block;
    private readonly face: Direction;
    private readonly item: ItemStack;
    private readonly faceLocation: Vector3;
    private readonly event: ItemUseOnBeforeEvent;

    constructor(player: Player, block: Block, itemStack: ItemStack, face: Direction, faceLocation: Vector3, event: ItemUseOnBeforeEvent)
    {
        super();
        this.player = player;
        this.block = block;
        this.item = itemStack;
        this.event = event;
        this.face = face;
        this.faceLocation = faceLocation;
    }

    public getPlayer(): Player {return this.player;}
    public getBlock(): Block {return this.block;}
    public getItem(): ItemStack {return this.item};
    public getFace(): Direction {return this.face;}
    public getFaceLocation(): Vector3 {return this.faceLocation;}

    // for cancel event
    public cancel(value: boolean): void {
        this.event.cancel = value;
    }

    getEventName(): string {
        return EVENTS.playerInteractEvent;
    }
}