<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of products with search and filters.
     */
    public function index()
    {
        $query = request()->get('q', '');
        $category = request()->get('category', '');

        $products = Product::active()
            ->when($query, function ($q) use ($query) {
                return $q->where('name', 'like', '%' . $query . '%')
                        ->orWhere('brand', 'like', '%' . $query . '%');
            })
            ->when($category, function ($q) use ($category) {
                return $q->where('category', $category);
            })
            ->orderBy('name')
            ->paginate(12);

        return Inertia::render('products/search', [
            'products' => $products,
            'query' => $query,
            'category' => $category,
            'categories' => Product::active()->select('category')->distinct()->pluck('category'),
        ]);
    }
}