---
id: todo-example
title: Todo App
hide_table_of_contents: true
---

   <iframe src="https://codesandbox.io/embed/todo-nv180?fontsize=14&hidenavigation=1&theme=dark"
     style = {{ width: "100%", height:'500px', border:'0', borderRadius:'4px',  overflow:'hidden' }}
     title="todo"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
<br/>
<br/>
You can also implement ServerSide Binding by connecting it to your Backend App. To connect to the ServerSide binding, just uncomment line no. 11 in App.js and comment the line no. 10 to disconnect Runtime Binding. 
<br/>

```php
// const connection = new Connection({ bind: new RuntimeBinding(), db });
const connection = new Connection({ bind: new ServerSideBinding(), db });
```

<br/>
Note here that we have provided you a class `ServerSideBinding` to connect with your server.

In the `ServerSideBinding.js` file, at line No. 2, you need to mention the URL on which your backend App is running.

```php
const getURL = "http://localhost:8000/usedb";
```

We have created a Todo App in Laravel which you can clone from [here](https://github.com/amars29/usedb-todo-app). Run the command `php artisan serve` to run your app. In React App, write your `<App_Url>/usedb` in `getUrl` variable of your `ServerSideBinding.js` file
