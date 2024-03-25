import {Block, Dimension, ItemStack, Player, PlayerBreakBlockBeforeEvent} from "@minecraft/server";

export default class BlockBreakEvent
{
    private readonly player: Player;
    private readonly block: Block;
    private readonly world: Dimension;
    private readonly item: ItemStack;
    private readonly event: PlayerBreakBlockBeforeEvent;

    constructor(player: Player, block: Block, world: Dimension, itemStack: ItemStack, event: PlayerBreakBlockBeforeEvent)
    {
        this.player = player;
        this.block = block;
        this.world = world;
        this.item = itemStack;
        this.event = event;
    }

    public getPlayer(): Player {return this.player;}
    public getBlock(): Block {return this.block;}
    public getWorld(): Dimension {return this.world;}
    public getItem(): ItemStack {return this.item};

    // for cancel event
    public cancel(value: boolean): void {
        this.event.cancel = value;
    }
}