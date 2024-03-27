import {Player} from "@minecraft/server";
import {PlayerInventory} from "../inventory/PlayerInventory";
import {PlayerArmorInventory} from "../inventory/PlayerArmorInventory";

export class PPlayer
{
    private readonly realPlayer: Player;
    private readonly inventory: PlayerInventory;
    private readonly armorInventory: PlayerArmorInventory;

    constructor(realPlayer: Player)
    {
        this.realPlayer = realPlayer;
        this.inventory = new PlayerInventory(this);
        this.armorInventory = new PlayerArmorInventory(this);
    }

    public getRealPlayer(): Player
    {
        return this.realPlayer;
    }

    public getInventory(): PlayerInventory
    {
        return this.inventory;
    }

    public getArmorInventory(): PlayerArmorInventory
    {
        return this.armorInventory;
    }

    public isValid(): boolean
    {
        const realPlayer: Player = this.getRealPlayer();
        if (!realPlayer.isValid()) return false;
        return this.getArmorInventory().inventoryIsValid();
    }
}