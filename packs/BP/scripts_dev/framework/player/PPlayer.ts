import {EntityHealableComponent, EntityHealthComponent, GameMode, Player, system} from "@minecraft/server";
import {PlayerInventory} from "../inventory/PlayerInventory";
import {PlayerArmorInventory} from "../inventory/PlayerArmorInventory";
import {Database} from "../database/Database";
import {Gamemode} from "../gamemodes/Gamemode";
import Loader from "../../Loader";
import {Survival} from "../gamemodes/Survival";
import {Adventure} from "../gamemodes/Adventure";
import {Creative} from "../gamemodes/Creative";
import {Spectator} from "../gamemodes/Spectator";

export class PPlayer
{
    private readonly realPlayer: Player;
    private readonly inventory: PlayerInventory;
    private readonly armorInventory: PlayerArmorInventory;
    private readonly databasePlayer: Database;
    private gameMode: Gamemode;

    constructor(realPlayer: Player)
    {
        this.realPlayer = realPlayer;
        this.inventory = new PlayerInventory(this);
        this.armorInventory = new PlayerArmorInventory(this);
        this.databasePlayer = new Database(this.getRealPlayer().name + ":data_player");


        const gamemode: string = this.getGamemode();
        if (gamemode === GameMode.survival) this.gameMode = new Survival();
        if (gamemode === GameMode.adventure) this.gameMode = new Adventure();
        if (gamemode === GameMode.creative) this.gameMode = new Creative();
        if (gamemode === GameMode.spectator) this.gameMode = new Spectator();
    }

    public getRealPlayer(): Player
    {
        return this.realPlayer;
    }

    private getGamemode() {
        const player = this.getRealPlayer();
        return Object.getOwnPropertyNames(GameMode)
            .find(gameMode => {
                return Loader.getInstance().getWorld().getDimension().getPlayers({
                    name: player.name,
                    // @ts-ignore
                    gameMode: gameMode
                }).length;
            }) ?? 'default'
    }

    public getGameMode(): Gamemode
    {
        return this.gameMode;
    }

    public getId(): string
    {
        return this.getRealPlayer().id;
    }

    public sendMessage(message: string): void
    {
        this.getRealPlayer().sendMessage(message);
    }

    public setGameMode(mode: Gamemode): void
    {
        const name = this.getRealPlayer().name;
        system.run(() =>
        {
            this.gameMode = mode;
            Loader.getInstance().getWorld().getDimension().runCommand("gamemode " + mode.getName() + " " + name);
        });
    }

    public getName(): string
    {
        return this.getRealPlayer().name;
    }

    public setOnFire(seconds: number): void
    {
        this.getRealPlayer().setOnFire(seconds);
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


    // experience functions
    public getTotalXp(): number
    {
        const player = this.getRealPlayer();
        return player.getTotalXp();
    }

    public getLevel(): number
    {
        const player = this.getRealPlayer();
        return player.level;
    }

    public getTotalXpNeededForNextLevel(): number
    {
        const player = this.getRealPlayer();
        return player.totalXpNeededForNextLevel
    }

    public getXpEarnedAtCurrentLevel(): number
    {
        const player = this.getRealPlayer();
        return player.xpEarnedAtCurrentLevel
    }

    public addXp(xp: number): number
    {
        const player = this.getRealPlayer();
        return player.addExperience(xp);
    }

    public addLevels(levels: number): number
    {
        const player = this.getRealPlayer();
        return player.addLevels(levels);
    }

    public resetXp(levels: number): void
    {
        const player = this.getRealPlayer();
        player.resetLevel();
    }
}