import {
    Block, Dimension,
    Direction,
    ItemStack,
    ItemUseOnBeforeEvent,
    Player,
    Vector3
} from "@minecraft/server";

export default class BlockPlaceEvent
{
    private readonly player: Player;
    private readonly block: Block;
    private readonly world: Dimension;
    public isCancel: boolean = false;

    constructor(player: Player, block: Block, world: Dimension)
    {
        this.player = player;
        this.block = block;
    }

    public getPlayer(): Player {return this.player;}
    public getBlock(): Block {return this.block;}
    public getWorld(): Dimension {return this.world;}

    // for cancel event
    public cancel(value: boolean): void {
        this.isCancel = value;
    }
}