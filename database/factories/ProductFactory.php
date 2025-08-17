<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = ['Game', 'Pulsa', 'PPOB'];
        $category = $this->faker->randomElement($categories);
        
        $modal = $this->faker->numberBetween(5000, 50000);
        $sellPrice = $modal * 1.1;
        $resellerPrice = $modal * 1.05;

        return [
            'code' => strtoupper($this->faker->unique()->bothify('??-###-##')),
            'name' => $this->faker->words(3, true),
            'category' => $category,
            'brand' => $this->faker->company(),
            'type' => $this->faker->randomElement(['prepaid', 'postpaid']),
            'modal' => $modal,
            'sell_price' => $sellPrice,
            'reseller_price' => $resellerPrice,
            'description' => $this->faker->sentence(),
            'input_fields' => json_encode([
                ['name' => 'user_id', 'label' => 'User ID', 'type' => 'text', 'required' => true]
            ]),
            'is_active' => $this->faker->boolean(90),
            'check_account_available' => $this->faker->boolean(70),
        ];
    }

    /**
     * Indicate that the product is active.
     */
    public function active(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_active' => true,
        ]);
    }

    /**
     * Indicate that the product is for gaming category.
     */
    public function game(): static
    {
        return $this->state(fn (array $attributes) => [
            'category' => 'Game',
        ]);
    }

    /**
     * Indicate that the product is for pulsa category.
     */
    public function pulsa(): static
    {
        return $this->state(fn (array $attributes) => [
            'category' => 'Pulsa',
        ]);
    }
}