---
id: model
title: Model
sidebar_label: Model
slug: /model
---

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
