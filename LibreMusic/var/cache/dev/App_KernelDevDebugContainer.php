<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerILZguHa\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerILZguHa/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerILZguHa.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerILZguHa\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerILZguHa\App_KernelDevDebugContainer([
    'container.build_hash' => 'ILZguHa',
    'container.build_id' => 'c6fada21',
    'container.build_time' => 1708691545,
    'container.runtime_mode' => \in_array(\PHP_SAPI, ['cli', 'phpdbg', 'embed'], true) ? 'web=0' : 'web=1',
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerILZguHa');
