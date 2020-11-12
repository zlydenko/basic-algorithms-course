# Part one

Find the number of times f() is called as a function of the input size n (using Big O notation)

```
for (i = n; i > 1; i /= 2)
    f()
```

```
for (i = 0; i * i < n; i++)
    f()
```

```
for (i = 0; i < n; i++)
    for (j = 0; j < 256; j++)
        f()
```

```
for (i = 1; i <= n * n - 10; i++)
    for (j = 1; j <= i; j ++)
        f()
```

```
for (i = 1; i <= n; i++)
    for (j = 1; j <= i; j++)
        for (k = 1; k <= j; k++)
            f()
```

```
for (i = 1; i <= n; i++)
    for (j = 1; j < i; j *= 2)
        f()
```

```
for (i = 1; i <= n; i++)
    for (j = 1; j <= n; j += i)
        f()
```

```
void compute(int n)
    if (n == 0) return;
    for (int i = 0; i < n; i++)
        f()
    compute(n/2)
    compute(n/2)
```

[part one](part_1.md)

# Part two

```
Існує популярний веб-сервер задача якого прибирати зайві символи "/". Наприклад, рядок "/page1///page2////page3/test.html" має стиснутись до "/page1/page2/page3/test.html". На жаль, оригінальний алгоритм має квадратичну складність, чим можуть скористатись хакери відправивши одночасно ряд запитів з великою кількістью символів "/".
Вас запросили як спеціаліста з алгоритмів для усунення потенційної небезпеки.
Пришвидшіть оригінальний алгоритм, аби він працював за лінію.
```

```python
def noTwoSlash(url: str) -> str:
    arr = list(url)
    i = 1
    while i < len(arr):
        if (arr[i-1] == '/') and (arr[i] == '/'):
            for y in range(i+1, len(arr)):
                arr[y-1] = arr[y]
            arr = arr[:-1]
        else:
            i += 1
    return ''.join(arr)
```

[part two](part_2.py)

[part three](part_3/README.md)
