<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contacts extends Model
{
    /** @use HasFactory<\Database\Factories\ContactsFactory> */
    use HasFactory;
	
	protected $table = 'contacts';
	protected $fillable = ['email', 'phone', 'message', 'works_id'];
	
	public function job() {
		return $this->belongsTo(Works::class);
	}
}
