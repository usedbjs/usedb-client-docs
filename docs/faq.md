---
id: faq
title: FAQ's
---

**How is it different from GraphQL?**

GraphQL is a specification, useDB is more like a utility built on existing tools to make data fetching simpler.

Below points might be helpful to list the differences.

useDB has two layers. Client and Server side.

**Client side**

- useDB client provides a client-side data fetching and caching library for React.

  **Is it like Apollo Client?**

  - Kind of, but supports REST or any backend.
  - Normalized caching is optional, if you specify the incoming response structure, it will be saved in the normalized cache, or else falls back to a standard cache.

  **So, Is it like React Query?**

  - Kind of, but has a normalized cache to make updates easier.
  - Has similar refetching APIs.
  - Shares same notion of stale while revalidate.

  **Ugh, so is it like Firestore or Datastore Amplify?**

  - useDB can be hosted on a custom backend and can be used with any form of APIs (as long as it's not HotWire 😏)
  - There is no support for real time subscriptions in useDB yet.

  In simple words, useDB client is a platform-agnostic data fetching library with an **optional** normalized cache.

**Server side**

- useDB is built on top of existing ORMs like eloquent for laravel or sequelize for NodeJS.
- No support for custom resolvers yet.

**Is it like Hasura?**

- Similar to Hasura, it supports selective fetching/updation and role based access.
- Authorization can be specified via Gates/Middlewares.
- It simply allows ORMs to resolve by restricting their access.

**Is it like Nexus?**

- Yes, just like nexus, useDB makes data fetching on Data model layer simpler.
- But there are additional features, as stated in above answers.

**How do you ensure the security?**

- User can apply restrictions through authorization.
- Any resource only becomes accessible once whitelisted via middlewares or Policies.

**Can I use laravel-usedb independently?**

Yes, you can use it with any front-end. You only need to make sure that mandatory fields required by laravel-usedb should be present in your request.
