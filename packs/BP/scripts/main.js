import { world, system } from "@minecraft/server";
const sayMessageEveryTick = (message) => {
    system.runInterval(() => {
        world.getDimension('overworld').runCommand('say ' + message);
    }, 20);
};
sayMessageEveryTick("Hello World");
