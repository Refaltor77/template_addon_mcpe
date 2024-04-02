import {Gamemode} from "./Gamemode";
import {GameMode} from "@minecraft/server";

export class Spectator extends Gamemode
{
    public getName(): string
    {
        return GameMode.spectator;
    }

    public static get(): Spectator
    {
        return new this();
    }
}