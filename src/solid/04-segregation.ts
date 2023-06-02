
interface Bird {
    eat(): void;
}

interface FlayingBird {
    fly(): void;
}

interface SwimBird {
    swim(): void
}
interface RuningBird {
    run(): void
}

class Tucan implements Bird, FlayingBird {

    public fly() { }
    public eat() { }

}

class Colibri implements Bird, FlayingBird {

    public fly() { }
    public eat() { }


}

class Estruç implements Bird, RuningBird {

    public eat() { }
    public run() { }
}

class Pingui implements Bird, SwimBird {
    public eat() { }
    public run() { }
    public swim() { }
}