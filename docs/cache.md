---
id: cache
title: Cache
sidebar_label: Cache
slug: /cache
---

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
