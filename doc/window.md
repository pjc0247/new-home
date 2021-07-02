Window
====

* close()

* maximize()

* minimize()

* setTimeout(fn: () => void, timeout: number)

```tsx
const window = useWindow();

window.setTimeout(() => {
  window.maximize();
}, 1000);
```
