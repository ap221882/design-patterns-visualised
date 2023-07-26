interface FlyingObject {
  fly: () => void;
}

class Superman implements FlyingObject {
  fly(): void {
    console.log("I am flying!");
  }
}

class Mosquito implements FlyingObject {
  fly(): void {
    console.log("Bzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz...");
  }
}

class Aeroplane implements FlyingObject {
  fly(): void {
    console.log("I am a flying aeroplane!");
  }
}

const flyingObjects: Array<FlyingObject> = [];
flyingObjects.push(new Superman());
flyingObjects.push(new Mosquito());
flyingObjects.push(new Aeroplane());

//~# we are able to call same method(pass same message) to different objects that behave differently -, i.e., Polymorphism
flyingObjects.forEach((obj) => obj.fly());
