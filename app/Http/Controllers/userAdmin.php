<?php

namespace App\Http\Controllers;
use Auth;
use Hash;
use Illuminate\Http\Request;
use App\User;
use DB;

class userAdmin extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    } 

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
     $users = User::where('status', 'ACTIVE')
    ->ORDERBY('username', 'ASC')
    ->GET();
        return view('useradmin')
            ->with('users', $users);
    }

    public function updateUser(Request $request)
    {
        if($request->do == "addUser"){
            User::insert([
                'name' => $request->name,
                'username' => $request->username,
                'email' => $request->email,
                'username' => $request->username,
                'password' => Hash::make($request->password),
                'status' => $request->status
            ]);
        }
        if($request->do == "updateUser"){
            $query = User::where('id', $request->id);
            $query->update([
                'name' => $request->name,
                'username' => $request->username,
                'email' => $request->email,
                'username' => $request->username,
                'password' => Hash::make($request->password),
                'status' => $request->status
            ]);
        }

        if($request->deleteUser == "YES"){
            $query = User::where('id', $request->id);
            $query->delete();
        }


    }
}
