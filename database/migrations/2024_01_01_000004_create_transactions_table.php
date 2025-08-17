<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->string('invoice_id')->unique();
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('set null');
            $table->foreignId('product_id')->constrained();
            $table->string('customer_phone')->nullable();
            $table->string('customer_email')->nullable();
            $table->json('customer_data');
            $table->decimal('amount', 15, 2);
            $table->decimal('service_fee', 15, 2)->default(0);
            $table->decimal('total_amount', 15, 2);
            $table->enum('status', ['pending', 'processing', 'success', 'failed', 'cancelled', 'failed_pending_refund'])->default('pending');
            $table->enum('payment_method', ['balance', 'tripay', 'manual_transfer']);
            $table->string('payment_reference')->nullable();
            $table->string('digiflazz_trx_id')->nullable();
            $table->text('notes')->nullable();
            $table->string('refund_token')->nullable();
            $table->timestamp('processed_at')->nullable();
            $table->timestamps();
            
            $table->index(['user_id', 'status']);
            $table->index(['status', 'created_at']);
            $table->index('invoice_id');
            $table->index('refund_token');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};