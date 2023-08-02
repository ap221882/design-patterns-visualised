function cache<This>(
  toBeCachedFunction: (arg: number) => boolean,
  context: ClassMethodDecoratorContext<This>
): (arg: number) => boolean {
  const cache: Record<string, boolean> = {};
  const methodName = String(context.name);

  function cachedFunction(this: This, arg: any): boolean {
    console.log(`ENTERING ${methodName}`);

    if (cache[arg]) {
      console.log("returned from cache");
      console.log(`EXITING ${methodName}`);
      return cache[arg];
    }
    cache[arg] = toBeCachedFunction.call(this, arg);
    console.log("not returned from cache");
    console.log(`EXITING ${methodName}`);
    return cache[arg];
  }

  return cachedFunction;
}

class Prime {
  @cache
  public isPrime(value: number): boolean {
    const max = Math.sqrt(value);
    for (let div: number = 2; max >= div; div++)
      if (value % div == 0) return false;
    return true;
  }
}

const prime: Prime = new Prime();
console.log(prime.isPrime(999_999_000_001));
console.log(prime.isPrime(999_999_000_001));
console.log(prime.isPrime(999_999_000_001));
