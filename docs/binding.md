---
id: binding
title: Binding
sidebar_label: Binding
slug: /binding
---

- Binding is a class responsible for performing the query and returning the result to the cache.
- It should implement the Binding interface.

```
interface Binding {
    perform: (query: QueryData) => Promise<any>;
    getAllCollections: () => Promise<any>;
}
```

## Runtime Binding

- Runtime binding lets you perform queries without any backend resources.

- It stores data in-memory. See [LocalStorage Binding](xyz).

#### Creating connection object

```jsx
import { RuntimeBinding, Connection } from "@usedb/core";

const connection = new Connection({ bind: new RuntimeBinding(), db });
```

## ServerSide Binding

Serverside binding lets you perform queries with any backend resources.

You need to write binding to fetch the data from the backend.

```jsx title="ServerSideBinding.js"
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

#### Creating the connection object

```jsx
const connection = new Connection({ bind: new ServerBinding(), db });
```

Examples to implement your custom binding can be found [here](https://github.com/use-db/core/tree/master/src/binding)
