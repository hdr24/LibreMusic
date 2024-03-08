<?php

// This file has been auto-generated by the Symfony Routing Component.

return [
    'admin' => [['_locale'], ['_controller' => 'App\\Controller\\Admin\\DashboardController::index'], ['_locale' => 'en|fr|es'], [['text', '/admin'], ['variable', '/', 'en|fr|es', '_locale', true]], [], [], []],
    'app' => [[], ['_controller' => 'App\\Controller\\AppController::index'], [], [['text', '/app']], [], [], []],
    'app_home' => [['_locale'], ['_controller' => 'App\\Controller\\HomeController::index'], ['_locale' => 'en|fr|es'], [['variable', '/', 'en|fr|es', '_locale', true]], [], [], []],
    'app_home_getlocale' => [[], ['_controller' => 'App\\Controller\\HomeController::getLocale'], [], [['text', '/']], [], [], []],
    'app_not_found' => [['slug'], ['_controller' => 'App\\Controller\\NotFoundController::index'], ['_locale' => 'en|fr|es'], [['variable', '/', '[^/]++', 'slug', true]], [], [], []],
    'app_register' => [['_locale'], ['_controller' => 'App\\Controller\\RegistrationController::register'], ['_locale' => 'en|fr|es'], [['text', '/register'], ['variable', '/', 'en|fr|es', '_locale', true]], [], [], []],
    'app_login' => [['_locale'], ['_controller' => 'App\\Controller\\SecurityController::login'], ['_locale' => 'en|fr|es'], [['text', '/login'], ['variable', '/', 'en|fr|es', '_locale', true]], [], [], []],
    'app_logout' => [[], ['_controller' => 'App\\Controller\\SecurityController::logout'], [], [['text', '/logout']], [], [], []],
    '_preview_error' => [['code', '_format'], ['_controller' => 'error_controller::preview', '_format' => 'html'], ['code' => '\\d+'], [['variable', '.', '[^/]++', '_format', true], ['variable', '/', '\\d+', 'code', true], ['text', '/_error']], [], [], []],
    'App\Controller\Admin\DashboardController::index' => [['_locale'], ['_controller' => 'App\\Controller\\Admin\\DashboardController::index'], ['_locale' => 'en|fr|es'], [['text', '/admin'], ['variable', '/', 'en|fr|es', '_locale', true]], [], [], []],
    'App\Controller\AppController::index' => [[], ['_controller' => 'App\\Controller\\AppController::index'], [], [['text', '/app']], [], [], []],
    'App\Controller\HomeController::index' => [['_locale'], ['_controller' => 'App\\Controller\\HomeController::index'], ['_locale' => 'en|fr|es'], [['variable', '/', 'en|fr|es', '_locale', true]], [], [], []],
    'App\Controller\HomeController::getLocale' => [[], ['_controller' => 'App\\Controller\\HomeController::getLocale'], [], [['text', '/']], [], [], []],
    'App\Controller\NotFoundController::index' => [['slug'], ['_controller' => 'App\\Controller\\NotFoundController::index'], ['_locale' => 'en|fr|es'], [['variable', '/', '[^/]++', 'slug', true]], [], [], []],
    'App\Controller\RegistrationController::register' => [['_locale'], ['_controller' => 'App\\Controller\\RegistrationController::register'], ['_locale' => 'en|fr|es'], [['text', '/register'], ['variable', '/', 'en|fr|es', '_locale', true]], [], [], []],
    'App\Controller\SecurityController::login' => [['_locale'], ['_controller' => 'App\\Controller\\SecurityController::login'], ['_locale' => 'en|fr|es'], [['text', '/login'], ['variable', '/', 'en|fr|es', '_locale', true]], [], [], []],
    'App\Controller\SecurityController::logout' => [[], ['_controller' => 'App\\Controller\\SecurityController::logout'], [], [['text', '/logout']], [], [], []],
];
