---
id: motivation
title: Motivation
sidebar_label: Motivation
slug: /motivation
---

GraphQL separates database models from client APIs by using resolvers, so your APIs are not tightly coupled with your underlying data model. So, you just define queries, put resolvers and those resolvers can fetch from any backend.

**But here're the limitations:**

- GraphQL increases complexity for general use-cases.
- Performance issues with nested resolvers, if not set up correctly) (n+1 issue, needs DataLoader to fix)

**Why useDB ?**

1. Simplifies Access control.
2. No need to setup resolvers. ORM already knows how to resolve. Just restrict the access of ORM.
3. No n+1 issue as findMany will directly execute on ORM.

<!-- <br/>
This is what it takes to get a CRUD on the Post model in useDB with role-base access. API+Role based access with so few lines of code:

1. Define Model in your ORM
2. Define middleware for rules in your own programming language. -->
