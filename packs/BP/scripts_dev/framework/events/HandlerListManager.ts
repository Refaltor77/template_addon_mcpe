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