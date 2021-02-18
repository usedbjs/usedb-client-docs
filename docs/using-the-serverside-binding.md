---
id: using-the-serverside-binding
title: Using the ServerSide Binding
sidebar_label: Using the ServerSide Binding
slug: /using-the-serverside-binding
---

Serverside binding lets you perform queries with any backend resources.

## Steps

### 1. Define Models

```jsx
import { types } from "@usedb/core";

export const Post = types.model({
  id: types.identifierNumber,
  title: types.string,
});
```

It stores data in-memory. See [LocalStorage Binding](https://www.notion.so/geekyants/xyz).

### 2. Initialize cache

```jsx
import { createModel } from "@usedb/core";
import { Post } from "./models/Post";

const models = [Post];

const DBModel = createModel({
  models,
});

export const db = DBModel.create();
```

### 3. Server Binding

```jsx
import { Binding, QueryData } from "@usedb/core";
const getURL = "http://localhost:8000/usedb";
export class ServerBinding {
  getAllCollections() {
    return new Promise(async (resolve, reject) => {
      try {
        resolve([]);
      } catch (err) {
        reject(err);
      }
    });
  }
  async perform(query) {
    console.log("QUERY :: ", query);
    const res = await fetch(getURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cors: "true",
      },
      body: JSON.stringify(query),
    });
    const json = await res.json();
    console.log("BINDING RESPONSE :: ", json);
    return json;
  }
}
```

`getURL` contains your backend URL to connect.

### 4. Create Connection object

```jsx
import "./App.css";
import { Provider, useDB } from "@usedb/react";
import { RuntimeBinding, Connection } from "@usedb/core";
import { db } from "./db";
import { ServerBinding } from "./ServerBinding";
import { Blog } from "./models/Blog";
import PostComponent from "./components/PostComponent";

const connection = new Connection({ bind: new ServerBinding(), db });

function App() {
  return (
    <Provider connection={connection}>
      <PostComponent />
    </Provider>
  );
}

export default App;
```

### 5. Perform Queries

Now you can perform the CRUD operations as discussed in the [Runtime Binding](using-the-runtime-binding.md#4-perform-queries). For example, to create a Post object:

```jsx
import React from "react";
import { useDB } from "@usedb/react";
import { db } from "@usedb/core";

export default function PostComponent() {
  const result = useDB(
    db.Post.create({
      data: {
        title: "Hello world",
        body: "body",
      },
    })
  );
  console.log(result);
  return <div></div>;
}
```
