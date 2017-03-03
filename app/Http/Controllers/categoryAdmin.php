<?php

namespace App\Http\Controllers;
use Auth;
use Hash;
use Illuminate\Http\Request;
use App\Categories;
use App\CategoryItem;
use DB;


class categoryAdmin extends Controller
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
  //  dd($printcategoriesList);
    $categories = Categories::where('status', 'ACTIVE')
    ->ORDERBY('sortorder', 'ASC')
    ->GET();
        return view('categoryadmin')
            ->with('categories', $categories);
    }
    public function getCategoryItem(Request $request)
    {
        $CategoryItem = CategoryItem::where('id', $request->id)
        ->GET();
        return $CategoryItem;
    }
    public function updateCategory(Request $request)
    {
        if($request->do == "addCategory"){
            User::insert([
                'name' => $request->name,
                'username' => $request->username,
                'email' => $request->email,
                'username' => $request->username,
                'password' => Hash::make($request->password),
                'status' => $request->status
            ]);
        }
        if($request->do == "updateCategory"){
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

        if($request->deleteCategory == "YES"){
            $query = User::where('id', $request->id);
            $query->delete();
        }


    }
}
