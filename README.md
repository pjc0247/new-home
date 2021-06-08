new-home-project
====

An OS-like portfolio template for creepy developers.


Creating an Application
----

* Define your app data
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
