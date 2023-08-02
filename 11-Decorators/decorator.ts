class Prime {
  @cache
  public isPrime(value: number): boolean {
    const max = Math.sqrt(value);
    for (let div: number = 2; max >= div; div++)
      if (value % div == 0) return false;
    return true;
  }
}

function cache(target: any, property: string, descriptor: PropertyDescriptor) {
  const cache = new Map();
  const original: Function = descriptor.value;
  console.log(cache);

  descriptor.value = function (arg: any) {
    console.log(cache);
    return cache.get(arg) ?? cache.set(arg, original.call(this, arg)).get(arg);
  };
  return descriptor;
}

const prime: Prime = new Prime();
console.log(prime.isPrime(999_999_000_001));
console.log(prime.isPrime(999_999_000_001));
console.log(prime.isPrime(999_999_000_001));
