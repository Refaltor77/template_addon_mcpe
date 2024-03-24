abstract class Listener {
    abstract onEvent(...args: any[]): void;
}

export default Listener;