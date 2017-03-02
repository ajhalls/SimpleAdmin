<?php

namespace App\Http\Controllers;
use Auth;
use Illuminate\Http\Request;
use App\Icons;
use App\Menuitems;
use DB;

class menuAdmin extends Controller
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
     $dataicons = Icons::where('status', 'ACTIVE')
    ->ORDERBY('parent_id', 'ASC')
    ->ORDERBY('sortorder', 'ASC')
    ->ORDERBY('name', 'ASC')
    ->GET()->toArray();

        return view('menuadmin')
            ->with('dataicons', $dataicons);

    }

    public function updateMenu(Request $request)
    {
        if($request->do == "moveItem"){
            $query = Menuitems::where('id', $request->id);
            $query->update([
                'parent_id' => $request->parent_id,
                'status' => $request->status
                ]);
            foreach($request->sortorder as $updateorder){
                $updateordersql = Menuitems::where('id', $updateorder['id']);
                $updateordersql->update([
                'sortorder' => $updateorder["sortorder"]
                ]);
            }
        }

        if($request->do == "addItem"){
            print_r($request->do);
            Menuitems::insert([
                'parent_id' => $request->parent_id,
                'name' => $request->name,
                'code' => $request->code,
                'url' => $request->url,
                'group' => $request->group,
                'prefix' => $request->prefix,
                'sortorder' => $request->sortorder,
                'modifier' => $request->modifier,
                'custom' => $request->custom,
                'restricted' => $request->restricted,
                'status' => $request->status
                ]);


        }
        if($request->do == "updatemenuitem"){
            print_r($request->do);
            $query = Menuitems::where('id', $request->id);

            $query->update([
                'parent_id' => $request->parent_id,
                'name' => $request->name,
                'code' => $request->code,
                'url' => $request->url,
                'group' => $request->group,
                'prefix' => $request->prefix,
                'sortorder' => $request->sortorder,
                'modifier' => $request->modifier,
                'custom' => $request->custom,
                'restricted' => $request->restricted,
                'status' => $request->status
                ]);


        }

        if($request->deletetask == "YES"){
            print_r($request->do);
            $query = Menuitems::where('id', $request->id);
            $query->delete();
        }







    }
}
