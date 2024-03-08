<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class HomeController extends AbstractController
{
    // The locale lets us set the language of the page to use Twig translations
    #[Route('/{_locale}', name: 'app_home', requirements: [ '_locale' => 'en|fr|es'])]
    public function index($_locale): Response
    {
        
        return $this->render('home/index.html.twig', ['locale' => $_locale]);
    }
    #[Route('/')]
    public function getLocale(): Response
    {
        return $this->redirectToRoute('app_home');
    }
}
