Question:

```
for (i = n; i > 1; i /= 2)
    f()
```

Answer: `O(log n)`

---

Question:

```
for (i = 0; i * i < n; i++)
    f()
```

Answer: `O(sqrt(n)) → O(n^1/2) → O(n)`

---

Question:

```
for (i = 0; i < n; i++)
    for (j = 0; j < 256; j++)
        f()
```

Answer: `O(n)`

---

Question:

```
for (i = 1; i <= n * n - 10; i++)
    for (j = 1; j <= i; j ++)
        f()
```

Answer: `O(n^2)` 🙅

---

Question:

```
for (i = 1; i <= n; i++)
    for (j = 1; j <= i; j++)
        for (k = 1; k <= j; k++)
            f()
```

Answer: `O(n^3)`

---

Question:

```
for (i = 1; i <= n; i++)
    for (j = 1; j < i; j *= 2)
        f()
```

Answer: `O(n*logn)`

---

Question:

```
for (i = 1; i <= n; i++)
    for (j = 1; j <= n; j += i)
        f()
```

Answer: `O(n^2)` 🙅

---

Question:

```
void compute(int n)
    if (n == 0) return;
    for (int i = 0; i < n; i++)
        f()
    compute(n/2)
    compute(n/2)
```

Answer: `O(n*logn)`
