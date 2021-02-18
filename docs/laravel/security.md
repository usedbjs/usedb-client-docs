---
id: security
title: Security
sidebar_label: Security
---

## Authentication

For adding authentication, first, you need to install any authentication service in your Laravel app and then add the provided by it in the middleware group of usedb.

For instance, if you install [Jetstream](https://jetstream.laravel.com/2.x/introduction.html) as an authentication service, the middleware provided by Jetstream is `auth:sanctum` so you need to add it in the middleware group in the config file as shown.

```php title="usedb.php"
'middleware' => [
		'usedb',
		'model-usedb',
		"auth:sanctum",
]
```

## Authorization

Authorization can be done in two ways: Gates and Policies. After creating them, you need to mention them in the usedb config file.

1. **Gates**: To map a gate to a particular operation of a model, you have to define it in the gates property of type array in the permissions field.
   Syntax:

```php
'gates' => [
		'modelName' => [
        'update' => [],
        'delete' => [],
        'create' => [],
        'findOne' => [],
        'findMany' => []
    ]
]
```

modelName represents the name of the model in which you want to apply gates. `update`, `delete`, `create`, `findOne`, and `findMany` map the array of gates to be applied to their respective operations.

**Example**

We have a Blog model and we need to define a gate for its update and delete operation.

i) Defining gate in your app

```php
Gate::define('update-delete-blog', function (User $user, Post $post) {
    return $user->id == $post->user_id;
});

Gate::define('demo', function (User $user, Post $post) {
    return $user->id == $post->user_id;
});
```

ii) Mapping gates

usedb.php

```jsx
'permissions' => [
				'gates' => [
            'Blog' => [
                'update' => ['update-delete-blog', 'demo'],
                'delete' => ['update-delete-blog'],
            ]
        ],

        'policies' => [
        ],
]
```

2.  **Policy**: To apply a policy to a certain operation of a particular model, you have to define it in the `policies` property of type array in the `permissions` field.
    The syntax for the same:

```php
'policies' => [
		'modelName' => [
				'update' => '',
        'delete' => '',
        'create' => '',
        'findOne' => '',
        'findMany' => ''
    ]
]
```

modelName represents the name of the model in which you want to apply policies. `update`, `delete`, `create`, `findOne`, and `findMany` maps to the policy to be applied to their respective operations.

**Example**

We have a model Blog.

i) Defining a policy BlogPolicy for Blog:

BlogPolicy.php

```php
class BlogPolicy
{
    use HandlesAuthorization;

		public function update(User $user, Blog $blog)
    {
        return $user->id === $blog->user_id;
    }

    public function delete(User $user, Blog $blog)
    {
        return false;
    }
}
```

ii) Mapping Policies

```php
'permissions' => [
		'gates' => [
		],

		'policies' => [
					'Blog' => [
		        'update' => 'update',
		        'create' => 'create',
		      ]
		],
]
```
