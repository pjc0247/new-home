Window
====

#### close()

#### maximize()

#### minimize()

#### setTimeout(fn: () => void, timeout: number)
Create a timer that belongs to the window. Timer will be automatically lost(cleared) when closed.
```tsx
const window = useWindow();

window.setTimeout(() => {
  window.close();
}, 1000);
window.setTimeout(() => {
  // This won't be executed!
  window.maximize();
}, 5000);
```
