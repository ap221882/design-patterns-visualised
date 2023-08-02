class Prime {
    isPrime(value) {
        const max = Math.sqrt(value);
        for (let div = 2; div <= max; div++)
            if (value % div == 0)
                return false;
        return true;
    }
}

const prime = new Prime();
console.log(prime.isPrime(999_999_000_001))
console.log(prime.isPrime(999_999_000_001))
console.log(prime.isPrime(999_999_000_001))