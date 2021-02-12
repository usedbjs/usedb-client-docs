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

- Examples to implement your custom binding can be found [here](https://github.com/use-db/core/tree/master/src/binding)
- Also refer [Runtime Binding](/docs/using-the-runtime-binding)
