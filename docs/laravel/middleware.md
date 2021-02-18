---
id: middleware
title: Middleware
sidebar_label: Middleware
---

The middleware property of the usedb.php config file contains entries for the middleware to be included with our route. If you would like to assign middleware to routes, make an entry in the middleware. By default, usedb, and model-usedb middlewares are added in the config and they are mandatory for usedb.

```jsx
'middleware' => [
        'myMiddlewareName'
    ],
```

<br/>
Let's say you have a middleware MyMiddleware and have registered it in your app with the name **first**.

```jsx title="MyMiddleware.php"
class MyMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        return $next($request);
    }
}
```

**Adding middleware to the usedb**

```jsx title="usedb.php"
'middleware' => [
        'first'
        // OR
        App\Http\Middleware\MyMiddlware::class
    ],
```
