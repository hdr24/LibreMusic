<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class NotFoundController extends AbstractController
{
    // The page renders but only for first levels
    #[Route('/{slug}', name: 'app_not_found', requirements: [ '_locale' => 'en|fr|es'])]
    public function index(): Response
    {
        return $this->render('404.html.twig');
    }
}
