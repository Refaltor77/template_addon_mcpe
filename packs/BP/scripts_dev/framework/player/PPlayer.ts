import {EntityHealableComponent, EntityHealthComponent, Player, system} from "@minecraft/server";
import {PlayerInventory} from "../inventory/PlayerInventory";
import {PlayerArmorInventory} from "../inventory/PlayerArmorInventory";
import {Database} from "../database/Database";

export class PPlayer
{
    private readonly realPlayer: Player;
    private readonly inventory: PlayerInventory;
    private readonly armorInventory: PlayerArmorInventory;
    private readonly databasePlayer: Database;

    constructor(realPlayer: Player)
    {
        this.realPlayer = realPlayer;
        this.inventory = new PlayerInventory(this);
        this.armorInventory = new PlayerArmorInventory(this);
        this.databasePlayer = new Database(this.getRealPlayer().name + ":data_player");
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

    public getDatabasePlayer(): Database
    {
        return this.databasePlayer;
    }


    // database system (data was save in the world)
    public setData(key: string, value: string|number|boolean): void
    {
        this.getDatabasePlayer().set(key, value);
    }

    public getData(key: string): string|number|boolean
    {
        return this.getDatabasePlayer().get(key);
    }

    public hasData(key: string): boolean
    {
        return this.getDatabasePlayer().has(key);
    }

    public getHealth(): number
    {
        const component = this.getHealthComponent();
        if (component instanceof EntityHealthComponent)
        {
            return component.currentValue;
        }
        return 0;
    }

    public getMaxHealth(): number
    {
        const component = this.getHealthComponent();
        if (component instanceof EntityHealthComponent)
        {
            return component.effectiveMax;
        }
        return 0;
    }

    public setHealth(value: number): boolean
    {
        const component = this.getHealthComponent();
        if (component instanceof EntityHealthComponent)
        {
            system.run(() =>
            {
                component.setCurrentValue(value);
            });
            return true;
        }
        return false;
    }

    public resetHealth(): boolean
    {
        const component = this.getHealthComponent();
        if (component instanceof EntityHealthComponent)
        {
            system.run(() =>
            {
                component.resetToMaxValue();
            });
            return true;
        }
        return false;
    }


    // components for this class
    private getHealthComponent(): EntityHealthComponent|null
    {
        const component = this.getRealPlayer().getComponent(EntityHealthComponent.componentId);
        if (component instanceof EntityHealthComponent)
        {
            return component;
        }
        return null;
    }
}