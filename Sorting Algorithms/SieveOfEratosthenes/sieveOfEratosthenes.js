// *****************************************************
// *************** SIEVE OF ERATOSTHENES ***************
// *****************************************************

// Return all prime numbers from 2 to n

var sieveOfEratosthenes = (n, nextPrime = 2, sieve = [0, 0], primes = []) => {
  if (nextPrime > n) {
    return primes;
  }

  primes.push(nextPrime);
  for (let i = nextPrime; i <= n; i += nextPrime) {
    sieve[i] = i;
  }

  for (let i = nextPrime; i <= n; i++) {
    if (!sieve[i]) {
      sieveOfEratosthenes(n, i, sieve, primes);
      break;
    }
  }
  return primes;
}


// >>>>>>>>>>>>>>>>>> TEST CASES >>>>>>>>>>>>>>>>>> //

let result1 = sieveOfEratosthenes(50);
console.log(result1); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]

let result2 = sieveOfEratosthenes(100);
console.log(result2); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ]