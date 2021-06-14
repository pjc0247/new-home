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
};
```

[Blank Application](src/app/blank)


Retrieving `window` object
----
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

#### CodeView

<img src="img/codeview.png" width="640" />

#### Gallery

<img src="img/gallery.png" width="640" />
