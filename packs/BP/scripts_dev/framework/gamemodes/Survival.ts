import {Gamemode} from "./Gamemode";
import {GameMode} from "@minecraft/server";

export class Survival extends Gamemode
{
    public getName(): string
    {
        return GameMode.survival;
    }

    public static get(): Survival
    {
        return new this();
    }
}