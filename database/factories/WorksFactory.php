<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Works>
 */
class WorksFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->jobTitle(),
            'enterprise' => fake()->company(),
			'location' => fake()->city(),
			'time' => fake()->randomElement(['Part-Time', 'Full-Time']),
			'salary' => fake()->numberBetween(700, 10000),
			'description' => fake()->paragraph(),
			'user_id' => User::inRandomOrder()->first()->id // Peger de forma aleatória um id de um user existente
        ];
    }
}
