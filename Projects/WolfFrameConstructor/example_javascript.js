/**
 * JavaScript - Comprehensive utility library
 * Demonstrates ES6+ features and common algorithms
 */

class DataStructures {
    constructor() {
        this.data = [];
    }

    bubbleSort(arr) {
        const n = arr.length;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr;
    }

    quickSort(arr) {
        if (arr.length <= 1) return arr;
        const pivot = arr[Math.floor(arr.length / 2)];
        const left = arr.filter(x => x < pivot);
        const middle = arr.filter(x => x === pivot);
        const right = arr.filter(x => x > pivot);
        return [...this.quickSort(left), ...middle, ...this.quickSort(right)];
    }

    mergeSort(arr) {
        if (arr.length <= 1) return arr;
        const mid = Math.floor(arr.length / 2);
        const left = this.mergeSort(arr.slice(0, mid));
        const right = this.mergeSort(arr.slice(mid));
        return this.merge(left, right);
    }

    merge(left, right) {
        const result = [];
        let i = 0, j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                result.push(left[i++]);
            } else {
                result.push(right[j++]);
            }
        }
        return [...result, ...left.slice(i), ...right.slice(j)];
    }

    binarySearch(arr, target) {
        let left = 0, right = arr.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) return mid;
            if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }
}

class MathUtilities {
    static fibonacci(n, memo = {}) {
        if (n in memo) return memo[n];
        if (n <= 1) return n;
        memo[n] = this.fibonacci(n - 1, memo) + this.fibonacci(n - 2, memo);
        return memo[n];
    }

    static factorial(n) {
        if (n <= 1) return 1;
        return n * this.factorial(n - 1);
    }

    static isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    static gcd(a, b) {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    static lcm(a, b) {
        return Math.abs(a * b) / this.gcd(a, b);
    }

    static generatePrimes(limit) {
        const primes = [];
        for (let i = 2; i <= limit; i++) {
            if (this.isPrime(i)) primes.push(i);
        }
        return primes;
    }
}

class StringUtilities {
    static isPalindrome(str) {
        const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        return cleaned === cleaned.split('').reverse().join('');
    }

    static reverseWords(str) {
        return str.split(' ').reverse().join(' ');
    }

    static countVowels(str) {
        return (str.match(/[aeiou]/gi) || []).length;
    }

    static removeDuplicates(str) {
        return [...new Set(str)].join('');
    }

    static capitalize(str) {
        return str.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }

    static anagramCheck(str1, str2) {
        const normalize = s => s.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
        return normalize(str1) === normalize(str2);
    }
}

class ArrayUtilities {
    static findMax(arr) {
        return Math.max(...arr);
    }

    static findMin(arr) {
        return Math.min(...arr);
    }

    static sum(arr) {
        return arr.reduce((acc, val) => acc + val, 0);
    }

    static average(arr) {
        return this.sum(arr) / arr.length;
    }

    static removeDuplicates(arr) {
        return [...new Set(arr)];
    }

    static flatten(arr) {
        return arr.reduce((acc, val) =>
            Array.isArray(val) ? acc.concat(this.flatten(val)) : acc.concat(val), []);
    }

    static chunk(arr, size) {
        const chunks = [];
        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size));
        }
        return chunks;
    }
}

// Demonstration
const ds = new DataStructures();
const testArray = [64, 34, 25, 12, 22, 11, 90];

console.log('Original:', testArray);
console.log('Bubble sorted:', ds.bubbleSort([...testArray]));
console.log('Quick sorted:', ds.quickSort([...testArray]));
console.log('Merge sorted:', ds.mergeSort([...testArray]));

console.log('Fibonacci(10):', MathUtilities.fibonacci(10));
console.log('Factorial(5):', MathUtilities.factorial(5));
console.log('Is 17 prime?', MathUtilities.isPrime(17));

const testString = 'A man a plan a canal Panama';
console.log('Is palindrome?', StringUtilities.isPalindrome(testString));
console.log('Reversed words:', StringUtilities.reverseWords(testString));
