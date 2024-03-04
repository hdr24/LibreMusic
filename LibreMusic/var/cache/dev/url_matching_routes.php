<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/app' => [[['_route' => 'app_app', '_controller' => 'App\\Controller\\AppController::index'], null, null, null, false, false, null]],
        '/' => [[['_route' => 'app_home_getlocale', '_controller' => 'App\\Controller\\HomeController::getLocale'], null, null, null, false, false, null]],
        '/logout' => [[['_route' => 'app_logout', '_controller' => 'App\\Controller\\SecurityController::logout'], null, null, null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_error/(\\d+)(?:\\.([^/]++))?(*:35)'
                .'|/(en|fr|es)(?'
                    .'|/admin(*:62)'
                    .'|(*:69)'
                .')'
                .'|/([^/]++)/aa(*:89)'
                .'|/(en|fr|es)/(?'
                    .'|register(*:119)'
                    .'|login(*:132)'
                .')'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        35 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        62 => [[['_route' => 'admin', '_controller' => 'App\\Controller\\Admin\\DashboardController::index'], ['_locale'], null, null, false, false, null]],
        69 => [[['_route' => 'app_home', '_controller' => 'App\\Controller\\HomeController::index'], ['_locale'], null, null, false, true, null]],
        89 => [[['_route' => 'app_not_found', '_controller' => 'App\\Controller\\NotFoundController::index'], ['any'], null, null, false, false, null]],
        119 => [[['_route' => 'app_register', '_controller' => 'App\\Controller\\RegistrationController::register'], ['_locale'], null, null, false, false, null]],
        132 => [
            [['_route' => 'app_login', '_controller' => 'App\\Controller\\SecurityController::login'], ['_locale'], null, null, false, false, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
