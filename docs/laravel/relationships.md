---
id: relationships
title: Relationships
sidebar_label: Relationships
---

## Fetching Data

When you want objects to be returned with their associated models, then you have to mention the property to access child elements from a parent in the `include` property of `payload` field of the JSON provided.

Let's say, we have an OneToMany relation between Blogs and comments.

Blog.php

```php
use Illuminate\Database\Eloquent\Model;
use Watson\Validating\ValidatingTrait;

class Blog extends Model
{
    use HasFactory;
    use ValidatingTrait;

   public function comments()
    {

        return $this->hasMany('App\Models\Comment');
    }
}
```

Comment.php

```php
use Illuminate\Database\Eloquent\Model;
use Watson\Validating\ValidatingTrait;

class Comment extends Model
{
    use HasFactory;

    public function blog()
    {
        return $this->belongsTo('App\Models\Blog');
    }
}
```

To retrieve the blog with its associated comments, we have to provide the name of the relationship method defined in the base model in the `include` field of JSON. Here, in the Blog model, the method `comments` define the relationship of Blog to comments, so we need to provide its name in the `include` field of JSON.

```jsx
{
    "collection":"Blog",
    "operation":"findOne",
    "payload": {
        "where":{
            "id": 139
        },
       "include":{
            "comments":{}
        }
    }
}
```
