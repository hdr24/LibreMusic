<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/app' => [[['_route' => 'app', '_controller' => 'App\\Controller\\AppController::index'], null, null, null, false, false, null]],
        '/' => [[['_route' => 'app_home_getlocale', '_controller' => 'App\\Controller\\HomeController::getLocale'], null, null, null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/(en|fr|es)(?'
                    .'|/admin(*:27)'
                    .'|(*:34)'
                .')'
                .'|/([^/]++)(*:51)'
                .'|/(en|fr|es)/(?'
                    .'|register(*:81)'
                    .'|login(*:93)'
                .')'
                .'|/logout(*:108)'
                .'|/_error/(\\d+)(?:\\.([^/]++))?(*:144)'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        27 => [[['_route' => 'admin', '_controller' => 'App\\Controller\\Admin\\DashboardController::index'], ['_locale'], null, null, false, false, null]],
        34 => [[['_route' => 'app_home', '_controller' => 'App\\Controller\\HomeController::index'], ['_locale'], null, null, false, true, null]],
        51 => [[['_route' => 'app_not_found', '_controller' => 'App\\Controller\\NotFoundController::index'], ['slug'], null, null, false, true, null]],
        81 => [[['_route' => 'app_register', '_controller' => 'App\\Controller\\RegistrationController::register'], ['_locale'], null, null, false, false, null]],
        93 => [[['_route' => 'app_login', '_controller' => 'App\\Controller\\SecurityController::login'], ['_locale'], null, null, false, false, null]],
        108 => [[['_route' => 'app_logout', '_controller' => 'App\\Controller\\SecurityController::logout'], [], null, null, false, false, null]],
        144 => [
            [['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
