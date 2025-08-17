import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Filter } from 'lucide-react';

interface Product {
    id: number;
    name: string;
    category: string;
    brand: string;
    sell_price: number;
    reseller_price: number;
    description: string;
}

interface PaginationData {
    data: Product[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

interface Props {
    products: PaginationData;
    query: string;
    category: string;
    categories: string[];
    [key: string]: unknown;
}

export default function ProductSearch({ 
    products, 
    query = '', 
    category = '', 
    categories = [] 
}: Props) {
    const [searchQuery, setSearchQuery] = React.useState(query);
    const [selectedCategory, setSelectedCategory] = React.useState(category);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get('/search', { 
            q: searchQuery,
            category: selectedCategory
        });
    };

    const handleCategorySelect = (cat: string) => {
        setSelectedCategory(cat);
        router.get('/search', { 
            q: searchQuery,
            category: cat
        });
    };

    return (
        <AppShell>
            <Head title={`Search Results ${query ? `for "${query}"` : ''} - TopUp Store`} />
            
            <div className="min-h-screen bg-gray-50">
                <div className="container mx-auto px-4 py-8">
                    {/* Search Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-4">🔍 Product Search</h1>
                        
                        {/* Search Form */}
                        <form onSubmit={handleSearch} className="mb-6">
                            <div className="flex gap-4">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <Input
                                        type="text"
                                        placeholder="Search for games, mobile credits, or services..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-10"
                                    />
                                </div>
                                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                                    <Search className="h-4 w-4 mr-2" />
                                    Search
                                </Button>
                            </div>
                        </form>

                        {/* Category Filter */}
                        <div className="flex items-center gap-2 flex-wrap">
                            <Filter className="h-5 w-5 text-gray-600" />
                            <span className="text-sm text-gray-600 mr-2">Categories:</span>
                            <Button
                                variant={!selectedCategory ? "default" : "outline"}
                                size="sm"
                                onClick={() => handleCategorySelect('')}
                            >
                                All
                            </Button>
                            {categories.map((cat) => (
                                <Button
                                    key={cat}
                                    variant={selectedCategory === cat ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => handleCategorySelect(cat)}
                                >
                                    {cat}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Search Results */}
                    <div className="mb-6">
                        <div className="flex items-center gap-4 mb-4">
                            <h2 className="text-xl font-semibold">
                                Search Results
                            </h2>
                            <Badge variant="secondary">
                                {products.total} products found
                            </Badge>
                        </div>
                        
                        {query && (
                            <p className="text-gray-600 mb-4">
                                Showing results for: <strong>"{query}"</strong>
                                {category && <span> in <strong>{category}</strong></span>}
                            </p>
                        )}
                    </div>

                    {/* Products Grid */}
                    {products.data.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {products.data.map((product) => (
                                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="flex justify-between items-start mb-2">
                                            <Badge variant="outline" className="text-xs">
                                                {product.category}
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-lg">{product.brand}</CardTitle>
                                        <CardDescription className="text-sm">
                                            {product.name}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            <p className="text-sm text-gray-600 line-clamp-2">
                                                {product.description}
                                            </p>
                                            
                                            <div className="space-y-1">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm text-gray-600">Guest Price:</span>
                                                    <span className="font-semibold text-blue-600">
                                                        Rp {product.sell_price.toLocaleString('id-ID')}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm text-gray-600">Reseller Price:</span>
                                                    <span className="font-semibold text-green-600">
                                                        Rp {product.reseller_price.toLocaleString('id-ID')}
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                                💳 Buy Now
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold mb-2">No products found</h3>
                            <p className="text-gray-600 mb-6">
                                Try adjusting your search terms or browse different categories
                            </p>
                            <Button asChild>
                                <Link href="/">
                                    🏠 Back to Home
                                </Link>
                            </Button>
                        </div>
                    )}

                    {/* Pagination */}
                    {products.data.length > 0 && products.last_page > 1 && (
                        <div className="flex justify-center mt-8">
                            <div className="flex gap-2">
                                {Array.from({ length: products.last_page }, (_, i) => i + 1).map((page) => (
                                    <Button
                                        key={page}
                                        variant={page === products.current_page ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => router.get('/search', {
                                            q: query,
                                            category: category,
                                            page: page
                                        })}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AppShell>
    );
}