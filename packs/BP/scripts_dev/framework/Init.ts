import {HandlerListManager} from "./events/HandlerListManager";
import {World} from "./world/World";
import {Dimension} from "@minecraft/server";

export default class Init
{
    private readonly eventManager: HandlerListManager;
    private readonly world: World;

    constructor(world: Dimension)
    {
        this.eventManager = new HandlerListManager();
        this.world = new World(world);
    }

    public getWorld(): World {return this.world;}

    public getEventManager(): HandlerListManager
    {
        return this.eventManager;
    }
}