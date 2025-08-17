<?php

namespace Database\Factories;

use App\Models\Transaction;
use App\Models\User;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Transaction>
 */
class TransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $amount = $this->faker->numberBetween(10000, 100000);
        $serviceFee = $this->faker->numberBetween(1000, 5000);
        
        return [
            'invoice_id' => 'TRX-' . strtoupper($this->faker->bothify('##########')),
            'user_id' => User::factory(),
            'product_id' => Product::factory(),
            'customer_phone' => $this->faker->phoneNumber(),
            'customer_email' => $this->faker->email(),
            'customer_data' => json_encode([
                'user_id' => $this->faker->numerify('############'),
                'zone_id' => $this->faker->numerify('####'),
            ]),
            'amount' => $amount,
            'service_fee' => $serviceFee,
            'total_amount' => $amount + $serviceFee,
            'status' => $this->faker->randomElement(['pending', 'processing', 'success', 'failed', 'cancelled']),
            'payment_method' => $this->faker->randomElement(['balance', 'tripay', 'manual_transfer']),
            'payment_reference' => $this->faker->optional()->uuid(),
            'digiflazz_trx_id' => $this->faker->optional()->uuid(),
            'notes' => $this->faker->optional()->sentence(),
            'processed_at' => $this->faker->optional()->dateTimeBetween('-1 month', 'now'),
        ];
    }

    /**
     * Indicate that the transaction is successful.
     */
    public function successful(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'success',
            'processed_at' => $this->faker->dateTimeBetween('-1 month', 'now'),
        ]);
    }

    /**
     * Indicate that the transaction is pending.
     */
    public function pending(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'pending',
            'processed_at' => null,
        ]);
    }
}