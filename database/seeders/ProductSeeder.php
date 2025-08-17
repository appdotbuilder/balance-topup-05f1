<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        // Gaming Products
        $gameProducts = [
            [
                'code' => 'ML-DIAMOND-86',
                'name' => 'Mobile Legends 86 Diamond',
                'category' => 'Game',
                'brand' => 'Mobile Legends',
                'type' => 'prepaid',
                'modal' => 18000,
                'sell_price' => 20000,
                'reseller_price' => 19000,
                'description' => 'Mobile Legends 86 Diamond instant top-up',
                'input_fields' => json_encode([
                    ['name' => 'user_id', 'label' => 'User ID', 'type' => 'text', 'required' => true],
                    ['name' => 'zone_id', 'label' => 'Zone ID', 'type' => 'text', 'required' => true]
                ]),
                'is_active' => true,
                'check_account_available' => true,
            ],
            [
                'code' => 'FF-DIAMOND-70',
                'name' => 'Free Fire 70 Diamond',
                'category' => 'Game',
                'brand' => 'Free Fire',
                'type' => 'prepaid',
                'modal' => 9500,
                'sell_price' => 11000,
                'reseller_price' => 10500,
                'description' => 'Free Fire 70 Diamond instant top-up',
                'input_fields' => json_encode([
                    ['name' => 'user_id', 'label' => 'User ID', 'type' => 'text', 'required' => true]
                ]),
                'is_active' => true,
                'check_account_available' => true,
            ],
            [
                'code' => 'PUBGM-UC-60',
                'name' => 'PUBG Mobile 60 UC',
                'category' => 'Game',
                'brand' => 'PUBG Mobile',
                'type' => 'prepaid',
                'modal' => 13500,
                'sell_price' => 15000,
                'reseller_price' => 14000,
                'description' => 'PUBG Mobile 60 UC instant top-up',
                'input_fields' => json_encode([
                    ['name' => 'user_id', 'label' => 'User ID', 'type' => 'text', 'required' => true]
                ]),
                'is_active' => true,
                'check_account_available' => true,
            ],
            [
                'code' => 'VALORANT-VP-420',
                'name' => 'Valorant 420 VP',
                'category' => 'Game',
                'brand' => 'Valorant',
                'type' => 'prepaid',
                'modal' => 25000,
                'sell_price' => 28000,
                'reseller_price' => 26500,
                'description' => 'Valorant 420 VP instant top-up',
                'input_fields' => json_encode([
                    ['name' => 'riot_id', 'label' => 'Riot ID', 'type' => 'text', 'required' => true],
                    ['name' => 'tagline', 'label' => 'Tagline', 'type' => 'text', 'required' => true]
                ]),
                'is_active' => true,
                'check_account_available' => false,
            ],
            [
                'code' => 'GENSHIN-GENESIS-60',
                'name' => 'Genshin Impact 60 Genesis Crystal',
                'category' => 'Game',
                'brand' => 'Genshin Impact',
                'type' => 'prepaid',
                'modal' => 13500,
                'sell_price' => 15000,
                'reseller_price' => 14000,
                'description' => 'Genshin Impact 60 Genesis Crystal',
                'input_fields' => json_encode([
                    ['name' => 'uid', 'label' => 'UID', 'type' => 'text', 'required' => true],
                    ['name' => 'server', 'label' => 'Server', 'type' => 'select', 'required' => true, 'options' => ['Asia', 'Europe', 'America', 'TW/HK/MO']]
                ]),
                'is_active' => true,
                'check_account_available' => true,
            ],
        ];

        // Pulsa Products
        $pulsaProducts = [
            [
                'code' => 'TELKOMSEL-5K',
                'name' => 'Telkomsel 5.000',
                'category' => 'Pulsa',
                'brand' => 'Telkomsel',
                'type' => 'prepaid',
                'modal' => 5250,
                'sell_price' => 5500,
                'reseller_price' => 5350,
                'description' => 'Telkomsel Pulsa 5.000',
                'input_fields' => json_encode([
                    ['name' => 'phone', 'label' => 'Phone Number', 'type' => 'tel', 'required' => true]
                ]),
                'is_active' => true,
                'check_account_available' => false,
            ],
            [
                'code' => 'XL-10K',
                'name' => 'XL 10.000',
                'category' => 'Pulsa',
                'brand' => 'XL Axiata',
                'type' => 'prepaid',
                'modal' => 10200,
                'sell_price' => 10500,
                'reseller_price' => 10300,
                'description' => 'XL Pulsa 10.000',
                'input_fields' => json_encode([
                    ['name' => 'phone', 'label' => 'Phone Number', 'type' => 'tel', 'required' => true]
                ]),
                'is_active' => true,
                'check_account_available' => false,
            ],
            [
                'code' => 'INDOSAT-20K',
                'name' => 'Indosat 20.000',
                'category' => 'Pulsa',
                'brand' => 'Indosat Ooredoo',
                'type' => 'prepaid',
                'modal' => 19500,
                'sell_price' => 20000,
                'reseller_price' => 19750,
                'description' => 'Indosat Pulsa 20.000',
                'input_fields' => json_encode([
                    ['name' => 'phone', 'label' => 'Phone Number', 'type' => 'tel', 'required' => true]
                ]),
                'is_active' => true,
                'check_account_available' => false,
            ],
        ];

        // PPOB Products
        $ppobProducts = [
            [
                'code' => 'PLN-TOKEN-20K',
                'name' => 'PLN Token 20.000',
                'category' => 'PPOB',
                'brand' => 'PLN',
                'type' => 'prepaid',
                'modal' => 20750,
                'sell_price' => 21250,
                'reseller_price' => 21000,
                'description' => 'PLN Token Listrik 20.000',
                'input_fields' => json_encode([
                    ['name' => 'customer_id', 'label' => 'Meter ID', 'type' => 'text', 'required' => true]
                ]),
                'is_active' => true,
                'check_account_available' => true,
            ],
            [
                'code' => 'PDAM-JAKARTA-50K',
                'name' => 'PDAM Jakarta 50.000',
                'category' => 'PPOB',
                'brand' => 'PDAM Jakarta',
                'type' => 'postpaid',
                'modal' => 50250,
                'sell_price' => 51000,
                'reseller_price' => 50500,
                'description' => 'PDAM Jakarta Payment',
                'input_fields' => json_encode([
                    ['name' => 'customer_id', 'label' => 'Customer ID', 'type' => 'text', 'required' => true]
                ]),
                'is_active' => true,
                'check_account_available' => true,
            ],
        ];

        // Create all products
        foreach (array_merge($gameProducts, $pulsaProducts, $ppobProducts) as $product) {
            Product::create($product);
        }
    }
}