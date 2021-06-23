new-home-project
====

An OS-like portfolio template for creepy developers.

![badge](https://www.travis-ci.com/pjc0247/new-home.svg?branch=master&status=started)

Creating an Application
----

```tsx
const GithubApp = {
  icon: require('asset/app/github/icon.png').default,
  width: 800,
  height: 1000,
  Component: <Github />
} as IApp;
```
```tsx
const onClickGithub = () => {
  App.launch(GithubApp);
  
  // or you may pass launch parameters just like `argv`.
  // App.launch(GithubApp, { url: 'https://www.github.com/pjc0247' });
};
```

[EXAMPLE: Blank Application](src/app/blank)

Retrieving `application` object
----
```tsx
const YourHandsomeApp = () => {
  const app = useApplication();
  
  /* .... */
};
```

Retrieving `window` object
----
Applications may contain more than 1 windows.
Each window has its own context.
The example below shows how to get and control its own `window` instance.
```tsx
const YourHandsomeApp = () => {
  const window = useWindow();

  const onClickClose = () => {
    window.close();
  };

  return (
    <>Hello</>
  );
};
```

Built-in Applications
----

#### Github

<div style="display:flex">
<img src="img/github1.png" width="320" />
<img src="img/github2.png" width="320" />
</div>

(Using [github-e](https://github.com/trungdq88/github-explorer) project since official Github.com cannot be embedded by CORS policy.)

#### CodeView

<img src="img/codeview.png" width="640" />

#### Gallery

<img src="img/gallery.png" width="640" />
