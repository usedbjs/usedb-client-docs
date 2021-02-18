---
id: introduction
title: What is useDB?
sidebar_label: Introduction
---

import useBaseUrl from '@docusaurus/useBaseUrl';

useDB is an open source library to make backend agnostic API calls using ORM like querying interface.

It also comes with a normalized cache that is powered by [MST](https://mobx-state-tree.js.org/).

useDB consists of 3 layers,

1. **Binding**

- Client-side interface to fetch data from backend and put into the cache layer.

2. **Cache**

- This is where the data returned from the Binding is stored in a normalized form. The cache is reactive and modeled using MST.

3. **Backend**

- This layer is responsible for generating and passing the response to the frontend Binding layer.
- This could be your server or even localStorage/IndexDB.

### Flow Diagram

<img alt="Flow diagram" src={useBaseUrl('img/activityDiagram.jpg')} />
