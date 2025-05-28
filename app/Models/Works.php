<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Works extends Model
{
    /** @use HasFactory<\Database\Factories\WorksFactory> */
    use HasFactory;
	
	protected $table = 'works';
	protected $fillable = ['name', 'enterprise', 'location', 'time', 'salary', 'description', 'user_id'];
	
	public function user() {
		return $this->belongsTo(User::class);
	}
	
	public function contacts() {
		return $this->hasMany(Contacts::class);
	}
}
