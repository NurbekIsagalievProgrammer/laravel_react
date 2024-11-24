<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User; 
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        
        $validated = $request->validate([
            'name' => 'required|string|max:255',  
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8|regex:/[a-z]/|regex:/[A-Z]/|regex:/[0-9]/',
        ]);
    
        try {
           
            $user = User::create([
                'name' => $request->name, 
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
    
            return response()->json(['message' => 'User registered successfully'], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Registration failed', 'message' => $e->getMessage()], 500);
        }
    }

    public function login(Request $request)
    {
    
    $credentials = $request->validate([
        'email' => 'required|email',
        'password' => 'required|string',
    ]);

   
    if ($token = auth()->attempt($credentials)) {
        return response()->json(['token' => $token], 200);
    }

    return response()->json(['error' => 'Unauthorized'], 401);
    }

    
}
