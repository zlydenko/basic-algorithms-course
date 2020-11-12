def noTwoSlash(url: str) -> str:
    arr = list(url)
    result = [arr[0]]

    for y in range(1, len(arr)):
      current = arr[y]
      prev = result[len(result)-1]
      
      if (current == '/') and (prev == '/'):
        continue
      else:
        result.append(current)
    return ''.join(result)