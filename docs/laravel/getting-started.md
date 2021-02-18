---
id: getting-started
title: Getting Started Laravel
sidebar_label: Getting Started
---

## Introduction

Laravel-usedb is a Generic-CRUD composer package for Laravel apps which eliminates the need to write Apis for each and every model in a Laravel app.

## **Installation**

```bash
#COMPOSER
composer require geekyants/laravel-usedb
```

### Publish the configuration

After installation, run the command below to move package's config files to your project config.

```jsx
php artisan vendor:publish --tag=config
```

You will find the `usedb.php` file in your project config folder. All the configuration to be applied to the package is defined here.

### Set the Model path

To make the package track your models, you need to define the path of the folder in the config file where all the models of your app will be present.

```jsx
'modelPath' => 'App\Models\\'
```