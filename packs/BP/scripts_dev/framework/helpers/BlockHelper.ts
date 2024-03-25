import {Block} from "@minecraft/server";
import {MinecraftBlockTypes} from "./Vanilla";
import Loader from "../../Loader";

export class BlockHelper
{
    // ultra laggy, warning script pick
    public static getBlockTypeId(block: Block): string|null
    {
        const enumKeys = Object.keys(MinecraftBlockTypes);
        let value = null;
        enumKeys.map(key => {
            let typeId: string = MinecraftBlockTypes[key];
            typeId = typeId.replace("minecraft:", "");
            if (block.permutation.matches(typeId)) value = typeId;
        });
        return value;
    }
}