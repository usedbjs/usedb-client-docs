---
id: configuration
title: Configuration
sidebar_label: Configuration
slug: /configuration
---

## Models

- Models are the core entities of the application.
- For example, for a Blog application, this can be User, Post and Comment.

### Defining Models

```
import { types } from "@usedb/core";

const User = types.model({
    id: types.identifierNumber,
    name: types.string
});

const Post = types.model({
    id: types.identifierNumber,
    text: types.string,
    author: types.reference(User)
});

```

- For complete type references [refer.](https://mobx-state-tree.js.org/overview/types)

## Binding

- Binding is an interface responsible for performing the query and returning the result.
  It should implement the Binding interface.

```
export interface Binding {
    perform: (query: QueryData) => Promise<any>;
    getAllCollections: () => Promise<any>;
}
```

- Examples to implement your custom binding can be found [here](https://github.com/use-db/core/tree/master/src/binding)

## Cache DB

- This is the cache layer used by useDB to store data in a normalized form.
- It is created using the above defined models.

```
import { createModel } from "@usedb/core";
import { Post, User } from "./models";

const models = {
    Post,
    User
}

const DBModel = createModel({
  models
});

export const db = DBModel.create();

```

## Connection

- Connection is a class used by useDB to query the provided Binding.
- It should be instantiated with a binding and an instance of the db.

```
import { Provider } from '@usedb/react';
import { db } from "./db";
import { MyAppBinding } from "./binding";

const connection = new Connection({ bind: new MyAppBinding(), db });

const App = () => {
  return (
    <Provider connection={connection}>
      <!-- Your components -->
    </Provider>
  );
};


```

<!--
## Actions

- Many times DB queries are not enough and you may have to call an API endpoint (e.g. REST/GraphQL).
- Actions provide a way to call an external API and still populate the normalized cache.
- Example - As shown below, getPopularPosts returns an array of Post model defined above.

## Defining Action output types

```
import { types } from "@usedb/core";

const getPopularPosts = types.array(types.reference(Post))

``` -->

## Querying

### Create

```
const result = useDB(db.Post.create({ data: { text: "Hello world" }}))
```

### Read

```
const result = useDB(db.Post.findOne({ where: { id: 1 }}))
```

### Update

```
const result = useDB(db.Post.update({ where: { id: 1 }, data: { text: "Hello new world" } }))
```

### Delete

```
const result = useDB(db.Post.delete({ where: { id: 1 }}))
```
