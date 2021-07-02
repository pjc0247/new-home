Window
====

#### close()

#### maximize()

#### minimize()

#### setTimeout(fn: () => void, timeout: number)
Create a timer that belongs to the window. Timer will be automatically lost(cleared) when closed.\
```tsx
const window = useWindow();

window.setTimeout(() => {
  window.maximize();
}, 1000);
```
