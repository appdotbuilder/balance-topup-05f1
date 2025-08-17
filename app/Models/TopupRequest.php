<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\TopupRequest
 *
 * @property int $id
 * @property string $invoice_id
 * @property int $user_id
 * @property float $amount
 * @property float $service_fee
 * @property float $total_amount
 * @property string $payment_method
 * @property string|null $payment_reference
 * @property string $status
 * @property string|null $notes
 * @property \Illuminate\Support\Carbon|null $processed_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $user
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|TopupRequest newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TopupRequest newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TopupRequest query()
 * @method static \Illuminate\Database\Eloquent\Builder|TopupRequest whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TopupRequest whereUserId($value)

 * 
 * @mixin \Eloquent
 */
class TopupRequest extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'invoice_id',
        'user_id',
        'amount',
        'service_fee',
        'total_amount',
        'payment_method',
        'payment_reference',
        'status',
        'notes',
        'processed_at',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'amount' => 'decimal:2',
        'service_fee' => 'decimal:2',
        'total_amount' => 'decimal:2',
        'processed_at' => 'datetime',
    ];

    /**
     * Get the user who made this top-up request.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Check if top-up is successful.
     *
     * @return bool
     */
    public function isSuccessful(): bool
    {
        return $this->status === 'success';
    }
}