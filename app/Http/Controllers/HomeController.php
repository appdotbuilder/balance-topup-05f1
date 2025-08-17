<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the homepage.
     */
    public function index()
    {
        // Get popular products from different categories
        $gameProducts = Product::active()
            ->where('category', 'Game')
            ->orderBy('name')
            ->limit(6)
            ->get();

        $pulsaProducts = Product::active()
            ->where('category', 'Pulsa')
            ->orderBy('name')
            ->limit(6)
            ->get();

        $ppobProducts = Product::active()
            ->where('category', 'PPOB')
            ->orderBy('name')
            ->limit(6)
            ->get();

        // Get all categories for navigation
        $categories = Product::active()
            ->select('category')
            ->distinct()
            ->orderBy('category')
            ->pluck('category');

        return Inertia::render('welcome', [
            'gameProducts' => $gameProducts,
            'pulsaProducts' => $pulsaProducts,
            'ppobProducts' => $ppobProducts,
            'categories' => $categories,
            'totalProducts' => Product::active()->count(),
        ]);
    }


}