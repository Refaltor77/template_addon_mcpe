import {Block, BlockPermutation, Dimension, ItemStack, Player} from "@minecraft/server";

export default class PlayerBreakBlock
{
    private readonly player: Player;
    private readonly block: Block;
    private readonly world: Dimension;
    private readonly itemBeforeBreak: ItemStack;
    private readonly itemAfterBreak: ItemStack;
    private readonly brokenBlockPermutation: BlockPermutation;

    constructor(player: Player, block: Block, world: Dimension, itemBefore: ItemStack, itemAfter: ItemStack, permutation: BlockPermutation)
    {
        this.player = player;
        this.block = block;
        this.world = world;
        this.itemBeforeBreak = itemBefore;
        this.itemAfterBreak = itemAfter;
        this.brokenBlockPermutation = permutation;
    }

    public getPlayer(): Player {return this.player;}
    public getBlock(): Block {return this.block;}
    public getWorld(): Dimension {return this.world;}
    public getItemBefore(): ItemStack {return this.itemBeforeBreak;}
    public getItemAfter(): ItemStack {return this.itemAfterBreak;}
    public getBlockPermutation(): BlockPermutation {return this.brokenBlockPermutation;}
}