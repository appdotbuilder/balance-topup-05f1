<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Transaction;

use App\Models\BalanceHistory;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display the user dashboard.
     */
    public function index()
    {
        $user = Auth::user();
        
        // Get recent transactions
        $recentTransactions = Transaction::where('user_id', $user->id)
            ->with('product')
            ->latest()
            ->limit(5)
            ->get();



        // Get balance history
        $balanceHistory = BalanceHistory::where('user_id', $user->id)
            ->latest()
            ->limit(10)
            ->get();

        // Calculate statistics
        $stats = [
            'total_transactions' => Transaction::where('user_id', $user->id)->count(),
            'successful_transactions' => Transaction::where('user_id', $user->id)->where('status', 'success')->count(),
            'total_spent' => Transaction::where('user_id', $user->id)->where('status', 'success')->sum('amount'),
            'total_topups' => 0, // Will be implemented later
            'referral_count' => $user->referrals()->count(),
        ];

        return Inertia::render('dashboard', [
            'user' => $user,
            'recentTransactions' => $recentTransactions,
            'balanceHistory' => $balanceHistory,
            'stats' => $stats,
        ]);
    }
}