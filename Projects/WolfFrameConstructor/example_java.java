/**
 * Java - Comprehensive utility library
 * Demonstrates OOP principles and common algorithms
 */

import java.util.*;
import java.util.stream.*;

public class UtilityLibrary {

    public static class DataStructures {
        public int[] bubbleSort(int[] arr) {
            int n = arr.length;
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        int temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            return arr;
        }

        public int[] quickSort(int[] arr, int low, int high) {
            if (low < high) {
                int pi = partition(arr, low, high);
                quickSort(arr, low, pi - 1);
                quickSort(arr, pi + 1, high);
            }
            return arr;
        }

        private int partition(int[] arr, int low, int high) {
            int pivot = arr[high];
            int i = low - 1;
            for (int j = low; j < high; j++) {
                if (arr[j] < pivot) {
                    i++;
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
            int temp = arr[i + 1];
            arr[i + 1] = arr[high];
            arr[high] = temp;
            return i + 1;
        }

        public int binarySearch(int[] arr, int target) {
            int left = 0, right = arr.length - 1;
            while (left <= right) {
                int mid = left + (right - left) / 2;
                if (arr[mid] == target) return mid;
                if (arr[mid] < target) left = mid + 1;
                else right = mid - 1;
            }
            return -1;
        }
    }

    public static class MathUtilities {
        private static Map<Integer, Long> fibCache = new HashMap<>();

        public static long fibonacci(int n) {
            if (n <= 1) return n;
            if (fibCache.containsKey(n)) return fibCache.get(n);
            long result = fibonacci(n - 1) + fibonacci(n - 2);
            fibCache.put(n, result);
            return result;
        }

        public static long factorial(int n) {
            if (n <= 1) return 1;
            return n * factorial(n - 1);
        }

        public static boolean isPrime(int n) {
            if (n < 2) return false;
            for (int i = 2; i <= Math.sqrt(n); i++) {
                if (n % i == 0) return false;
            }
            return true;
        }

        public static int gcd(int a, int b) {
            while (b != 0) {
                int temp = b;
                b = a % b;
                a = temp;
            }
            return a;
        }

        public static int lcm(int a, int b) {
            return Math.abs(a * b) / gcd(a, b);
        }

        public static List<Integer> generatePrimes(int limit) {
            List<Integer> primes = new ArrayList<>();
            for (int i = 2; i <= limit; i++) {
                if (isPrime(i)) primes.add(i);
            }
            return primes;
        }
    }

    public static class StringUtilities {
        public static boolean isPalindrome(String str) {
            String cleaned = str.toLowerCase().replaceAll("[^a-z0-9]", "");
            return cleaned.equals(new StringBuilder(cleaned).reverse().toString());
        }

        public static String reverseWords(String str) {
            String[] words = str.split(" ");
            Collections.reverse(Arrays.asList(words));
            return String.join(" ", words);
        }

        public static int countVowels(String str) {
            return (int) str.toLowerCase().chars()
                .filter(c -> "aeiou".indexOf(c) != -1)
                .count();
        }

        public static String removeDuplicates(String str) {
            return str.chars()
                .distinct()
                .mapToObj(c -> String.valueOf((char) c))
                .collect(Collectors.joining());
        }

        public static boolean areAnagrams(String str1, String str2) {
            char[] arr1 = str1.toLowerCase().replaceAll("[^a-z]", "").toCharArray();
            char[] arr2 = str2.toLowerCase().replaceAll("[^a-z]", "").toCharArray();
            Arrays.sort(arr1);
            Arrays.sort(arr2);
            return Arrays.equals(arr1, arr2);
        }
    }

    public static void main(String[] args) {
        DataStructures ds = new DataStructures();
        int[] testArray = {64, 34, 25, 12, 22, 11, 90};

        System.out.println("Original: " + Arrays.toString(testArray));
        System.out.println("Bubble sorted: " + Arrays.toString(ds.bubbleSort(testArray.clone())));

        int[] quickSortArray = testArray.clone();
        ds.quickSort(quickSortArray, 0, quickSortArray.length - 1);
        System.out.println("Quick sorted: " + Arrays.toString(quickSortArray));

        System.out.println("Fibonacci(10): " + MathUtilities.fibonacci(10));
        System.out.println("Factorial(5): " + MathUtilities.factorial(5));
        System.out.println("Is 17 prime? " + MathUtilities.isPrime(17));

        String testString = "A man a plan a canal Panama";
        System.out.println("Is palindrome? " + StringUtilities.isPalindrome(testString));
        System.out.println("Reversed words: " + StringUtilities.reverseWords(testString));
    }
}
