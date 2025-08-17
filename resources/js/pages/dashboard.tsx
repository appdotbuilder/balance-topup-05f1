import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wallet, TrendingUp, Users, Gift, Plus, History, ArrowRight } from 'lucide-react';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    main_balance: number;
    commission_balance: number;
    referral_code: string;
}

interface Transaction {
    id: number;
    invoice_id: string;
    status: string;
    amount: number;
    created_at: string;
    product: {
        name: string;
        brand: string;
    };
}



interface BalanceHistory {
    id: number;
    type: string;
    amount: number;
    balance_after: number;
    description: string;
    created_at: string;
}

interface Stats {
    total_transactions: number;
    successful_transactions: number;
    total_spent: number;
    total_topups: number;
    referral_count: number;
}

interface Props {
    user: User;
    recentTransactions: Transaction[];
    balanceHistory: BalanceHistory[];
    stats: Stats;
    [key: string]: unknown;
}

export default function Dashboard({ 
    user, 
    recentTransactions = [], 
    balanceHistory = [], 
    stats 
}: Props) {
    const getStatusBadge = (status: string) => {
        const statusConfig = {
            success: { variant: 'default' as const, color: 'bg-green-500', label: '✅ Success' },
            pending: { variant: 'secondary' as const, color: 'bg-yellow-500', label: '⏳ Pending' },
            processing: { variant: 'secondary' as const, color: 'bg-blue-500', label: '🔄 Processing' },
            failed: { variant: 'destructive' as const, color: 'bg-red-500', label: '❌ Failed' },
            cancelled: { variant: 'destructive' as const, color: 'bg-gray-500', label: '🚫 Cancelled' },
        };
        
        return statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    };

    const getBalanceTypeIcon = (type: string) => {
        const icons = {
            topup: '💰',
            purchase: '🛒',
            refund: '↩️',
            commission: '🤝',
            withdrawal: '💸'
        };
        return icons[type as keyof typeof icons] || '📄';
    };

    return (
        <AppShell>
            <Head title="💼 Dashboard - TopUp Store" />
            
            <div className="min-h-screen bg-gray-50">
                <div className="container mx-auto px-4 py-8">
                    {/* Welcome Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-2">
                            👋 Welcome back, {user.name}!
                        </h1>
                        <p className="text-gray-600">
                            {user.role === 'reseller' ? '🏪 Reseller Account' : '👤 Basic Account'} • 
                            Manage your balance and transactions
                        </p>
                    </div>

                    {/* Balance Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <Wallet className="h-5 w-5" />
                                    Main Balance
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold mb-4">
                                    Rp {user.main_balance.toLocaleString('id-ID')}
                                </div>
                                <Button size="sm" className="bg-white text-blue-600 hover:bg-gray-100">
                                    <Plus className="h-4 w-4 mr-1" />
                                    Top Up
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <TrendingUp className="h-5 w-5" />
                                    Commission Balance
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold mb-4">
                                    Rp {user.commission_balance.toLocaleString('id-ID')}
                                </div>
                                <Button size="sm" className="bg-white text-green-600 hover:bg-gray-100">
                                    💸 Withdraw
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <Users className="h-5 w-5" />
                                    Referral Program
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-lg font-bold mb-2">
                                    {stats.referral_count} Referrals
                                </div>
                                <div className="text-sm opacity-90 mb-3">
                                    Code: <strong>{user.referral_code || 'Generate Code'}</strong>
                                </div>
                                <Button size="sm" className="bg-white text-purple-600 hover:bg-gray-100">
                                    <Gift className="h-4 w-4 mr-1" />
                                    Share Code
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <Card>
                            <CardContent className="pt-6 text-center">
                                <div className="text-2xl font-bold text-blue-600">{stats.total_transactions}</div>
                                <div className="text-sm text-gray-600">Total Orders</div>
                            </CardContent>
                        </Card>
                        
                        <Card>
                            <CardContent className="pt-6 text-center">
                                <div className="text-2xl font-bold text-green-600">{stats.successful_transactions}</div>
                                <div className="text-sm text-gray-600">Successful</div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="pt-6 text-center">
                                <div className="text-2xl font-bold text-purple-600">
                                    Rp {stats.total_spent.toLocaleString('id-ID', { notation: 'compact' })}
                                </div>
                                <div className="text-sm text-gray-600">Total Spent</div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="pt-6 text-center">
                                <div className="text-2xl font-bold text-orange-600">
                                    Rp {stats.total_topups.toLocaleString('id-ID', { notation: 'compact' })}
                                </div>
                                <div className="text-sm text-gray-600">Total Top-ups</div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Recent Transactions */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle className="flex items-center gap-2">
                                    <History className="h-5 w-5" />
                                    Recent Transactions
                                </CardTitle>
                                <Button variant="ghost" size="sm" asChild>
                                    <Link href="/transactions">
                                        View All <ArrowRight className="h-4 w-4 ml-1" />
                                    </Link>
                                </Button>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {recentTransactions.length > 0 ? recentTransactions.map((transaction) => (
                                        <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                            <div className="flex-1">
                                                <div className="font-medium text-sm">
                                                    {transaction.product.brand} - {transaction.product.name}
                                                </div>
                                                <div className="text-xs text-gray-600">
                                                    {transaction.invoice_id} • {new Date(transaction.created_at).toLocaleDateString()}
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-bold text-sm">
                                                    Rp {transaction.amount.toLocaleString('id-ID')}
                                                </div>
                                                <Badge variant={getStatusBadge(transaction.status).variant} className="text-xs">
                                                    {getStatusBadge(transaction.status).label}
                                                </Badge>
                                            </div>
                                        </div>
                                    )) : (
                                        <div className="text-center text-gray-500 py-8">
                                            <div className="text-4xl mb-2">📋</div>
                                            <p>No transactions yet</p>
                                            <Button size="sm" className="mt-2" asChild>
                                                <Link href="/">Start Shopping</Link>
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Balance History */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle className="flex items-center gap-2">
                                    <Wallet className="h-5 w-5" />
                                    Balance Activity
                                </CardTitle>
                                <Button variant="ghost" size="sm" asChild>
                                    <Link href="/balance-history">
                                        View All <ArrowRight className="h-4 w-4 ml-1" />
                                    </Link>
                                </Button>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {balanceHistory.length > 0 ? balanceHistory.map((history) => (
                                        <div key={history.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <div className="text-lg">
                                                    {getBalanceTypeIcon(history.type)}
                                                </div>
                                                <div>
                                                    <div className="font-medium text-sm capitalize">
                                                        {history.type.replace('_', ' ')}
                                                    </div>
                                                    <div className="text-xs text-gray-600">
                                                        {history.description}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className={`font-bold text-sm ${history.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                    {history.amount > 0 ? '+' : ''}Rp {Math.abs(history.amount).toLocaleString('id-ID')}
                                                </div>
                                                <div className="text-xs text-gray-600">
                                                    Balance: Rp {history.balance_after.toLocaleString('id-ID')}
                                                </div>
                                            </div>
                                        </div>
                                    )) : (
                                        <div className="text-center text-gray-500 py-8">
                                            <div className="text-4xl mb-2">💰</div>
                                            <p>No balance activity yet</p>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Quick Actions */}
                    <Card className="mt-6">
                        <CardHeader>
                            <CardTitle>🚀 Quick Actions</CardTitle>
                            <CardDescription>Frequently used features</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <Button asChild className="h-auto py-4">
                                    <Link href="/topup">
                                        <div className="text-center">
                                            <div className="text-2xl mb-1">💰</div>
                                            <div className="text-sm">Top Up Balance</div>
                                        </div>
                                    </Link>
                                </Button>

                                <Button asChild variant="outline" className="h-auto py-4">
                                    <Link href="/voucher">
                                        <div className="text-center">
                                            <div className="text-2xl mb-1">🎟️</div>
                                            <div className="text-sm">Redeem Voucher</div>
                                        </div>
                                    </Link>
                                </Button>

                                <Button asChild variant="outline" className="h-auto py-4">
                                    <Link href="/referrals">
                                        <div className="text-center">
                                            <div className="text-2xl mb-1">🤝</div>
                                            <div className="text-sm">My Referrals</div>
                                        </div>
                                    </Link>
                                </Button>

                                <Button asChild variant="outline" className="h-auto py-4">
                                    <Link href="/transactions">
                                        <div className="text-center">
                                            <div className="text-2xl mb-1">📊</div>
                                            <div className="text-sm">All Transactions</div>
                                        </div>
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppShell>
    );
}