import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, GamepadIcon, Smartphone, Zap, Users, Shield, Clock, CreditCard } from 'lucide-react';

interface Product {
    id: number;
    name: string;
    category: string;
    brand: string;
    sell_price: number;
    reseller_price: number;
}

interface Props {
    gameProducts: Product[];
    pulsaProducts: Product[];
    ppobProducts: Product[];
    categories: string[];
    totalProducts: number;
    [key: string]: unknown;
}

export default function Welcome({ 
    gameProducts = [], 
    pulsaProducts = [], 
    ppobProducts = [], 
    totalProducts = 0 
}: Props) {
    const [searchQuery, setSearchQuery] = React.useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get('/search', { q: searchQuery });
    };

    return (
        <AppShell>
            <Head title="💳 TopUp Store - Instant Digital Top-Up Services" />
            
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
                {/* Hero Section */}
                <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative container mx-auto px-4 py-24">
                        <div className="text-center text-white">
                            <h1 className="text-5xl font-bold mb-6">
                                💳 TopUp Store
                            </h1>
                            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                                🚀 Instant digital top-up services for games, mobile credits, and bills. 
                                Fast, secure, and reliable - just like Codashop!
                            </p>
                            
                            {/* Search Bar */}
                            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
                                <div className="flex gap-2">
                                    <div className="relative flex-1">
                                        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                        <Input
                                            type="text"
                                            placeholder="🔍 Search for games, mobile credits, or services..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="pl-10 py-6 text-lg bg-white"
                                        />
                                    </div>
                                    <Button type="submit" size="lg" className="px-8 py-6 bg-white text-blue-600 hover:bg-gray-100">
                                        Search
                                    </Button>
                                </div>
                            </form>

                            {/* Key Stats */}
                            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
                                <div>
                                    <div className="text-2xl font-bold">{totalProducts}+</div>
                                    <div className="text-sm opacity-90">Products</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">24/7</div>
                                    <div className="text-sm opacity-90">Service</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">Instant</div>
                                    <div className="text-sm opacity-90">Delivery</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">✨ Why Choose TopUp Store?</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Experience the best digital top-up platform with features designed for both casual users and resellers
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Card className="text-center hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <Clock className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                                    <CardTitle>⚡ Instant Process</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">Lightning-fast processing with automated delivery in seconds</p>
                                </CardContent>
                            </Card>

                            <Card className="text-center hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <Shield className="h-12 w-12 text-green-600 mx-auto mb-2" />
                                    <CardTitle>🔒 Secure Payment</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">Bank-level security with multiple payment options available</p>
                                </CardContent>
                            </Card>

                            <Card className="text-center hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CreditCard className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                                    <CardTitle>💰 Account Balance</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">Registered users get balance system with better pricing</p>
                                </CardContent>
                            </Card>

                            <Card className="text-center hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <Users className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                                    <CardTitle>🤝 Referral System</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">Earn commission by referring friends and grow your network</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Product Categories */}
                <div className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">🎮 Popular Categories</h2>
                            <p className="text-gray-600">Top-up for your favorite games and services</p>
                        </div>

                        {/* Game Products */}
                        {gameProducts.length > 0 && (
                            <div className="mb-16">
                                <div className="flex items-center gap-3 mb-8">
                                    <GamepadIcon className="h-8 w-8 text-blue-600" />
                                    <h3 className="text-2xl font-bold">🎮 Gaming</h3>
                                    <Badge variant="secondary">{gameProducts.length} products</Badge>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {gameProducts.slice(0, 6).map((product) => (
                                        <Card key={product.id} className="hover:shadow-lg transition-shadow">
                                            <CardHeader>
                                                <CardTitle className="text-lg">{product.brand}</CardTitle>
                                                <CardDescription>{product.name}</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <p className="text-sm text-gray-600">Starting from</p>
                                                        <p className="text-lg font-bold text-green-600">
                                                            Rp {product.sell_price.toLocaleString('id-ID')}
                                                        </p>
                                                    </div>
                                                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                                        Top Up
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Mobile Credits */}
                        {pulsaProducts.length > 0 && (
                            <div className="mb-16">
                                <div className="flex items-center gap-3 mb-8">
                                    <Smartphone className="h-8 w-8 text-green-600" />
                                    <h3 className="text-2xl font-bold">📱 Mobile Credits</h3>
                                    <Badge variant="secondary">{pulsaProducts.length} products</Badge>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {pulsaProducts.slice(0, 6).map((product) => (
                                        <Card key={product.id} className="hover:shadow-lg transition-shadow">
                                            <CardHeader>
                                                <CardTitle className="text-lg">{product.brand}</CardTitle>
                                                <CardDescription>{product.name}</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <p className="text-sm text-gray-600">Starting from</p>
                                                        <p className="text-lg font-bold text-green-600">
                                                            Rp {product.sell_price.toLocaleString('id-ID')}
                                                        </p>
                                                    </div>
                                                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                                        Top Up
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* PPOB Services */}
                        {ppobProducts.length > 0 && (
                            <div className="mb-16">
                                <div className="flex items-center gap-3 mb-8">
                                    <Zap className="h-8 w-8 text-yellow-600" />
                                    <h3 className="text-2xl font-bold">⚡ PPOB Services</h3>
                                    <Badge variant="secondary">{ppobProducts.length} products</Badge>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {ppobProducts.slice(0, 6).map((product) => (
                                        <Card key={product.id} className="hover:shadow-lg transition-shadow">
                                            <CardHeader>
                                                <CardTitle className="text-lg">{product.brand}</CardTitle>
                                                <CardDescription>{product.name}</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <p className="text-sm text-gray-600">Starting from</p>
                                                        <p className="text-lg font-bold text-green-600">
                                                            Rp {product.sell_price.toLocaleString('id-ID')}
                                                        </p>
                                                    </div>
                                                    <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                                                        Pay Bill
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
                    <div className="container mx-auto px-4 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">🚀 Ready to Start?</h2>
                        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                            Join thousands of users who trust TopUp Store for their digital needs. 
                            Register now and get access to better prices and exclusive features!
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button size="lg" asChild className="bg-white text-purple-600 hover:bg-gray-100">
                                <Link href="/register">
                                    🎯 Register Now
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-purple-600">
                                <Link href="/login">
                                    🔑 Login
                                </Link>
                            </Button>
                        </div>
                        
                        <div className="mt-12 text-center">
                            <p className="text-sm opacity-75 mb-4">💡 Guest users can purchase directly with payment gateway (service fee applies)</p>
                            <p className="text-sm opacity-75">🎁 Registered users enjoy balance system, vouchers, referral rewards, and better pricing!</p>
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}