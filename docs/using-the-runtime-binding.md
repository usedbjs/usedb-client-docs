---
id: using-the-runtime-binding
title: Using the Runtime Binding
sidebar_label: Using the Runtime Binding
slug: /using-the-runtime-binding
---

## Runtime Binding

- Runtime binding lets you perform queries without any backend resources.

- It stores data in-memory. See [LocalStorage Binding](xyz).

## Steps

### 1. Define Models

```
import { types } from "@usedb/core";

const Post = types.model({
    id: types.identifierNumber,
    title: types.string
});
```

- For complete type references [refer.](https://mobx-state-tree.js.org/overview/types)

### 2. Initialize cache

```
import { createModel } from "@usedb/core";
import { Post } from "./models";

const models = {
    Post,
}

const DBModel = createModel({
  models
});

export const db = DBModel.create();
```

### 3. Create Connection object

```jsx
import { Provider } from '@usedb/react';
import { RuntimeBinding, Connection } from "@usedb/core";
import { db } from "./db";

const connection = new Connection({ bind: new RuntimeBinding(), db });

const App = () => {
  return (
    <Provider connection={connection}>
      <!-- Your components -->
    </Provider>
  );
};
```

### 4. Perform Queries

##### Create

```
const result = useDB(db.Post.create({ data: { title: "Hello world" } }));
```

##### Read

Single entity

```
const result = useDB(db.Post.findOne({ where: { id: 1 }}))
```

Multiple entities with pagination

```
const result = useDB(db.Post.findMany({ skip: 0, take: 5} ))
```

##### Update

```
const result = useDB(db.Post.update({ where: { id: 1 }, data: { title: "Hello new world" } }))
```

##### Delete

```
const result = useDB(db.Post.delete({ where: { id: 1 }}))
```
