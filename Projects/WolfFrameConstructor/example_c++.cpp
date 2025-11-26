/**
 * C++ - High-performance utility library
 * Demonstrates modern C++ features and algorithms
 */

#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <cmath>
#include <map>
#include <set>
#include <memory>

class DataStructures {
public:
    std::vector<int> bubbleSort(std::vector<int> arr) {
        int n = arr.size();
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    std::swap(arr[j], arr[j + 1]);
                }
            }
        }
        return arr;
    }

    std::vector<int> quickSort(std::vector<int> arr) {
        if (arr.size() <= 1) return arr;

        int pivot = arr[arr.size() / 2];
        std::vector<int> left, middle, right;

        for (int x : arr) {
            if (x < pivot) left.push_back(x);
            else if (x == pivot) middle.push_back(x);
            else right.push_back(x);
        }

        std::vector<int> result;
        std::vector<int> sortedLeft = quickSort(left);
        std::vector<int> sortedRight = quickSort(right);

        result.insert(result.end(), sortedLeft.begin(), sortedLeft.end());
        result.insert(result.end(), middle.begin(), middle.end());
        result.insert(result.end(), sortedRight.begin(), sortedRight.end());

        return result;
    }

    int binarySearch(const std::vector<int>& arr, int target) {
        int left = 0, right = arr.size() - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) return mid;
            if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }
};

class MathUtilities {
private:
    static std::map<int, long long> fibCache;

public:
    static long long fibonacci(int n) {
        if (n <= 1) return n;
        if (fibCache.find(n) != fibCache.end()) return fibCache[n];
        fibCache[n] = fibonacci(n - 1) + fibonacci(n - 2);
        return fibCache[n];
    }

    static long long factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }

    static bool isPrime(int n) {
        if (n < 2) return false;
        for (int i = 2; i <= std::sqrt(n); i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    static int lcm(int a, int b) {
        return std::abs(a * b) / gcd(a, b);
    }

    static std::vector<int> generatePrimes(int limit) {
        std::vector<int> primes;
        for (int i = 2; i <= limit; i++) {
            if (isPrime(i)) primes.push_back(i);
        }
        return primes;
    }
};

std::map<int, long long> MathUtilities::fibCache;

class StringUtilities {
public:
    static bool isPalindrome(std::string str) {
        std::string cleaned;
        for (char c : str) {
            if (std::isalnum(c)) cleaned += std::tolower(c);
        }
        std::string reversed = cleaned;
        std::reverse(reversed.begin(), reversed.end());
        return cleaned == reversed;
    }

    static std::string reverseWords(std::string str) {
        std::vector<std::string> words;
        std::string word;
        for (char c : str) {
            if (c == ' ') {
                if (!word.empty()) {
                    words.push_back(word);
                    word.clear();
                }
            } else {
                word += c;
            }
        }
        if (!word.empty()) words.push_back(word);

        std::reverse(words.begin(), words.end());
        std::string result;
        for (size_t i = 0; i < words.size(); i++) {
            result += words[i];
            if (i < words.size() - 1) result += " ";
        }
        return result;
    }

    static int countVowels(std::string str) {
        int count = 0;
        std::string vowels = "aeiouAEIOU";
        for (char c : str) {
            if (vowels.find(c) != std::string::npos) count++;
        }
        return count;
    }

    static std::string removeDuplicates(std::string str) {
        std::string result;
        std::set<char> seen;
        for (char c : str) {
            if (seen.find(c) == seen.end()) {
                seen.insert(c);
                result += c;
            }
        }
        return result;
    }
};

int main() {
    DataStructures ds;
    std::vector<int> testArray = {64, 34, 25, 12, 22, 11, 90};

    std::cout << "Original: ";
    for (int x : testArray) std::cout << x << " ";
    std::cout << std::endl;

    auto bubbleSorted = ds.bubbleSort(testArray);
    std::cout << "Bubble sorted: ";
    for (int x : bubbleSorted) std::cout << x << " ";
    std::cout << std::endl;

    auto quickSorted = ds.quickSort(testArray);
    std::cout << "Quick sorted: ";
    for (int x : quickSorted) std::cout << x << " ";
    std::cout << std::endl;

    std::cout << "Fibonacci(10): " << MathUtilities::fibonacci(10) << std::endl;
    std::cout << "Factorial(5): " << MathUtilities::factorial(5) << std::endl;
    std::cout << "Is 17 prime? " << (MathUtilities::isPrime(17) ? "true" : "false") << std::endl;

    std::string testString = "A man a plan a canal Panama";
    std::cout << "Is palindrome? " << (StringUtilities::isPalindrome(testString) ? "true" : "false") << std::endl;

    return 0;
}
