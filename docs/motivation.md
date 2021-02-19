---
id: motivation
title: Motivation
sidebar_label: Motivation
slug: /motivation
---

As a React developer who has experience with full-stack backend frameworks like [Laravel](https://laravel.com/) and [Ruby on Rails](https://rubyonrails.org/), I miss how simple it was to build CRUD apps with a database model available right in the controller and the view files.

To interact with the database in React, we first build APIs, then write layers in the front-end to consume them.

When we disconnect these two, the mental model of building with full control of data changes, we start to lose power and control — our focus shifts to dealing with intermediate layers.

We have tried to solve this overhead with useDB. useDB works like a secure DB connection for React & JS apps. On a high level, useDB provides a query-builder similar to the backend frameworks that is serialized and sent over to the server. The server then reads the queries and responds with the dataset from the database.

We have built plugins for Laravel and Node that simplifies the backend handling further.

You might relate it to GraphQL and the tooling around it. It's similar but more relatable to database CRUD operations.
