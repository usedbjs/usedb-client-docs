---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
# hide_title: true
---

## Introduction

Laravel-usedb is a Generic-CRUD composer package for Laravel apps which eliminates the need to write Apis for each and every model in a Laravel app.

## **Installation**

```bash
#COMPOSER
composer require geekyants/laravel-usedb
```

### Publish the configuration

After installation, run the command below to move the package's config files to your project config directory.

```jsx
php artisan vendor:publish --tag=config
```

You will find the `usedb.php` file in your project config folder. All the configuration to be applied to the package is defined here.

### Set the Model path

To make the package track your models, you need to define the path of the folder in the config file where all the models are stored.

```jsx
'modelPath' => 'App\Models\\'
```
