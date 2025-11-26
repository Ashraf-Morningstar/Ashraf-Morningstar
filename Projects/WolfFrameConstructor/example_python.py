"""
Python - Multi-purpose utility module
Demonstrates various Python features and algorithms
"""

import math
import random
from typing import List, Dict, Optional, Tuple
from collections import defaultdict, deque
from functools import lru_cache

class DataStructures:
    """Collection of common data structure implementations."""

    def __init__(self):
        self.data = []

    def bubble_sort(self, arr: List[int]) -> List[int]:
        """Bubble sort implementation."""
        n = len(arr)
        for i in range(n):
            for j in range(0, n - i - 1):
                if arr[j] > arr[j + 1]:
                    arr[j], arr[j + 1] = arr[j + 1], arr[j]
        return arr

    def quick_sort(self, arr: List[int]) -> List[int]:
        """Quick sort implementation."""
        if len(arr) <= 1:
            return arr
        pivot = arr[len(arr) // 2]
        left = [x for x in arr if x < pivot]
        middle = [x for x in arr if x == pivot]
        right = [x for x in arr if x > pivot]
        return self.quick_sort(left) + middle + self.quick_sort(right)

    def merge_sort(self, arr: List[int]) -> List[int]:
        """Merge sort implementation."""
        if len(arr) <= 1:
            return arr
        mid = len(arr) // 2
        left = self.merge_sort(arr[:mid])
        right = self.merge_sort(arr[mid:])
        return self._merge(left, right)

    def _merge(self, left: List[int], right: List[int]) -> List[int]:
        """Helper function for merge sort."""
        result = []
        i = j = 0
        while i < len(left) and j < len(right):
            if left[i] <= right[j]:
                result.append(left[i])
                i += 1
            else:
                result.append(right[j])
                j += 1
        result.extend(left[i:])
        result.extend(right[j:])
        return result

class MathUtilities:
    """Mathematical utility functions."""

    @staticmethod
    @lru_cache(maxsize=None)
    def fibonacci(n: int) -> int:
        """Calculate nth Fibonacci number."""
        if n <= 1:
            return n
        return MathUtilities.fibonacci(n - 1) + MathUtilities.fibonacci(n - 2)

    @staticmethod
    def factorial(n: int) -> int:
        """Calculate factorial of n."""
        if n <= 1:
            return 1
        return n * MathUtilities.factorial(n - 1)

    @staticmethod
    def is_prime(n: int) -> bool:
        """Check if number is prime."""
        if n < 2:
            return False
        for i in range(2, int(math.sqrt(n)) + 1):
            if n % i == 0:
                return False
        return True

    @staticmethod
    def gcd(a: int, b: int) -> int:
        """Calculate greatest common divisor."""
        while b:
            a, b = b, a % b
        return a

    @staticmethod
    def lcm(a: int, b: int) -> int:
        """Calculate least common multiple."""
        return abs(a * b) // MathUtilities.gcd(a, b)

class StringUtilities:
    """String manipulation utilities."""

    @staticmethod
    def is_palindrome(s: str) -> bool:
        """Check if string is palindrome."""
        s = ''.join(c.lower() for c in s if c.isalnum())
        return s == s[::-1]

    @staticmethod
    def reverse_words(s: str) -> str:
        """Reverse words in string."""
        return ' '.join(s.split()[::-1])

    @staticmethod
    def count_vowels(s: str) -> int:
        """Count vowels in string."""
        return sum(1 for c in s.lower() if c in 'aeiou')

    @staticmethod
    def remove_duplicates(s: str) -> str:
        """Remove duplicate characters."""
        seen = set()
        result = []
        for char in s:
            if char not in seen:
                seen.add(char)
                result.append(char)
        return ''.join(result)

def binary_search(arr: List[int], target: int) -> int:
    """Binary search implementation."""
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

def generate_random_data(size: int) -> List[int]:
    """Generate random integer list."""
    return [random.randint(1, 1000) for _ in range(size)]

if __name__ == "__main__":
    # Demonstration
    ds = DataStructures()
    math_utils = MathUtilities()
    str_utils = StringUtilities()

    test_array = [64, 34, 25, 12, 22, 11, 90]
    print(f"Original: {test_array}")
    print(f"Bubble sorted: {ds.bubble_sort(test_array.copy())}")
    print(f"Quick sorted: {ds.quick_sort(test_array.copy())}")
    print(f"Merge sorted: {ds.merge_sort(test_array.copy())}")

    print(f"Fibonacci(10): {math_utils.fibonacci(10)}")
    print(f"Factorial(5): {math_utils.factorial(5)}")
    print(f"Is 17 prime? {math_utils.is_prime(17)}")

    test_string = "A man a plan a canal Panama"
    print(f"Is palindrome? {str_utils.is_palindrome(test_string)}")
