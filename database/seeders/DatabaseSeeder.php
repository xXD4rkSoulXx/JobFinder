<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Works;
use App\Models\Contacts;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
		// Vai criar quantidades aleatórias para cada factory
		User::factory()->count(rand(1, 100))->create();
		Works::factory()->count(rand(0, 100))->create();
		Contacts::factory()->count(rand(0, 100))->create();
    }
}
