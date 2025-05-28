<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Works;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Contacts>
 */
class ContactsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
			'email' => fake()->email(),
			'phone' => fake()->phoneNumber(),
			'message' => fake()->paragraph(),
			'works_id' => Works::inRandomOrder()->first()->id // Peger de forma aleatória um id de um trabalho existente
        ];
    }
}
