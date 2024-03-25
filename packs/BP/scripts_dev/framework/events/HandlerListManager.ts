/*
 *
 *  _____                   _       _     _
 * | ____|__ _ ___ _   _   / \   __| | __| | ___  _ __
 * |  _| / _` / __| | | | / _ \ / _` |/ _` |/ _ \| '_ \
 * | |__| (_| \__ \ |_| |/ ___ \ (_| | (_| | (_) | | | |
 * |_____\__,_|___/\__, /_/   \_\__,_|\__,_|\___/|_| |_|
 *                 |___/
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * @author Refaltor77
 *
 *
 */

import Listener from "./Listener";

export class HandlerListManager
{
    private static events: { [eventName: string]: Function[] } = {};

    static registerEvent(eventName: string, listener: Listener) {
        if (!HandlerListManager.events[eventName]) {
            HandlerListManager.events[eventName] = [];
        }
        this.events[eventName].push(listener.onEvent.bind(listener));
    }

    static callEvent(eventName: string, ...args: any[]) {
        const listeners = HandlerListManager.events[eventName];
        if (listeners) {
            listeners.forEach(listener => {
                listener(...args);
            });
        }
    }
}