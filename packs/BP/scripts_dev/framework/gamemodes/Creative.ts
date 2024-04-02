import {Gamemode} from "./Gamemode";
import {GameMode} from "@minecraft/server";

export class Creative extends Gamemode
{
    public getName(): string
    {
        return GameMode.creative;
    }

    public static get(): Creative
    {
        return new this();
    }
}