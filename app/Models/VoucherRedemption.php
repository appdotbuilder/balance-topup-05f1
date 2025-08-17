<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\VoucherRedemption
 *
 * @property int $id
 * @property int $user_id
 * @property int $voucher_id
 * @property float $amount
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $user
 * @property-read \App\Models\Voucher $voucher
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|VoucherRedemption newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|VoucherRedemption newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|VoucherRedemption query()
 * @method static \Illuminate\Database\Eloquent\Builder|VoucherRedemption whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|VoucherRedemption whereVoucherId($value)

 * 
 * @mixin \Eloquent
 */
class VoucherRedemption extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'user_id',
        'voucher_id',
        'amount',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'amount' => 'decimal:2',
    ];

    /**
     * Get the user who redeemed the voucher.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the voucher that was redeemed.
     */
    public function voucher(): BelongsTo
    {
        return $this->belongsTo(Voucher::class);
    }
}