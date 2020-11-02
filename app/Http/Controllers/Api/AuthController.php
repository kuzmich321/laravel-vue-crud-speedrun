<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Http\Response;
use App\Http\Requests\RegisterFormRequest;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $token = auth()->attempt($request->only('email', 'password'));

        if (!$token) {
            return response()->json([
               'message' => 'Wrong email or password. Try again.'
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        return response()->json(compact('token'), Response::HTTP_OK);
    }

    public function register(RegisterFormRequest $request)
    {
        $input = $request->validated();
        $input['password'] = bcrypt($input['password']);

        $user = User::create($input);

        return response()->json([
           'status' => true,
           'user' => $user
        ], Response::HTTP_OK);
    }

    public function logout()
    {
        return auth()->logout();
    }

    public function me(Request $request)
    {
        $user = $request->user();

        return response()->json([
            'id' => $user->id,
            'email' => $user->email,
            'name' => $user->email
        ], Response:: HTTP_OK);
    }
}
