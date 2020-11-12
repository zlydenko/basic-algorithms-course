# Sherlock and Array

Watson gives Sherlock an array of integers. His challenge is to find an element of the array such that the sum of all elements to the left is equal to the sum of all elements to the right. For instance, given the array `arr = [5,6,8,11]`, `8` is between two subarrays that sum to `11`. If your starting array is `[1]`, that element satisfies the rule as left and right sum to `0`.

You will be given arrays of integers and must determine whether there is an element that meets the criterion.

### Function Description

Complete the _balancedSums_ function in the editor below. It should return a string, either `YES` if there is an element meeting the criterion or `NO` otherwise.

balancedSums has the following parameter(s):

- _arr_: an array of integers

### Input Format

The first line contains `T`, the number of test cases.

The next `T` pairs of lines each represent a test case.

- The first line contains `n`, the number of elements in the array `arr`.
- The second line contains `n` space-separated integers `arr[i]` where `0 <= i < n`.

### Constraints

```
1 <= T <= 10
1 <= n <= 10^5
1 <= arr[i] <= 2 * 10^4
0 <= i < n
```

### Output Format

For each test case print `YES` if there exists an element in the array, such that the sum of the elements on its left is equal to the sum of the elements on its right; otherwise print `NO`.
