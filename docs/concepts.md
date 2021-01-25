---
id: concepts
title: What is useDB?
sidebar_label: What is useDB?
slug: /
---

import useBaseUrl from '@docusaurus/useBaseUrl';

useDB is an open source library to make backend agnostic API calls using ORM like querying interface.

It also comes with a normalized cache that is powered by [MST](https://mobx-state-tree.js.org/).

useDB consists of 3 layers,

1. **Binding**

- Client-side interface to interact with backend (could be (localStorage, firestore, graphQL/REST)).

2. **Cache**

- This is where the data returned from the Binding is stored in a normalized form. The cache is reactive and modeled using MST.

3. **Backend ORM and security layer** (In development)

### Flow Diagram

<img alt="Docusaurus with Keytar" src={useBaseUrl('img/overview.jpg')} />
