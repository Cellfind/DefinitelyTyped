function testStoryMoment(m: TwineSugarCube.StoryMoment): void {
    const s: string = m.title;
    // @ts-expect-error
    m.variable.a;
    // @ts-expect-error
    m.variable[s];

    m.title = "blah-blah"; // pointless, but SugarCube API allows that
}

let a: any;
let b = true;
let n = 1;

testStoryMoment(State.active);
testStoryMoment(State.bottom);
testStoryMoment(State.current);
testStoryMoment(State.top);

State.getVar("varName"); // $ExpectType any

b = State.has("passage");
b = State.hasPlayed("passage");

testStoryMoment(State.index(1));

b = State.isEmpty();

n = State.length;

// @ts-expect-error
State.metadata = a;

n = State.metadata.size;
// @ts-expect-error
State.metadata.size = 3;

State.metadata.clear();
State.metadata.delete("key");
State.metadata.entries(); // $ExpectType [string, any][]
State.metadata.get("key"); // $ExpectType any
b = State.metadata.has("key");
State.metadata.keys(); // $ExpectType string[]
State.metadata.set("key", a);

let s: string = State.passage;

testStoryMoment(State.peek());
testStoryMoment(State.peek(1));

State.prng.init();
State.prng.init("seedStr");
State.prng.init("seedStr", b);

b = State.prng.isEnabled();
n = State.prng.pull();
s = State.prng.seed();

n = State.random();

b = State.setVar("varName", a);

n = State.size;
// @ts-expect-error
State.size = n;

State.temporary.varName = a;
a = State.temporary.anotherVar;

n = State.turns;
// @ts-expect-error
State.turns = n;

export {};
