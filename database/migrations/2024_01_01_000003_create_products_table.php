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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->string('name');
            $table->string('category');
            $table->string('brand');
            $table->string('type');
            $table->decimal('modal', 15, 2);
            $table->decimal('sell_price', 15, 2);
            $table->decimal('reseller_price', 15, 2);
            $table->text('description')->nullable();
            $table->json('input_fields');
            $table->boolean('is_active')->default(true);
            $table->boolean('check_account_available')->default(false);
            $table->timestamps();
            
            $table->index(['category', 'is_active']);
            $table->index(['brand', 'is_active']);
            $table->index('is_active');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};