class Prime {
  @cache
  public isPrime(value: number): boolean {
    const max = Math.sqrt(value);
    for (let div: number = 2; max >= div; div++)
      if (value % div == 0) return false;
    return true;
  }
}

function cache(
  toBeCachedFunction: (arg: number) => boolean,
  context: ClassMethodDecoratorContext
): (arg: number) => boolean {
  const cache: Record<string, boolean> = {};

  function cachedFunction(arg: number): boolean {
    if (cache[arg]) {
      return cache[arg];
    }
    cache[arg] = toBeCachedFunction(arg);
    return cache[arg];
  }

  return cachedFunction;
}

const prime: Prime = new Prime();
console.log(prime.isPrime(999_999_000_001));
console.log(prime.isPrime(999_999_000_001));
console.log(prime.isPrime(999_999_000_001));
