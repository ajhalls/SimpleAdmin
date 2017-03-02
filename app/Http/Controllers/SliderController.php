<?php

namespace App\Http\Controllers;
use Auth;
use Illuminate\Http\Request;
use App\Rightclick;
use App\Greensock;
use App\SliderData;
use App\Easing;
use DB;

class SliderController extends Controller
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
     $greensockOptions = Greensock::where('status', 'ACTIVE')
    ->ORDERBY('parent_id', 'ASC')
    ->ORDERBY('sortorder', 'ASC')
    ->ORDERBY('name', 'ASC')
    ->GET();
    $greensockOptions =parseNav($greensockOptions);

    $availablegreensockOptions = Greensock::where('status', 'AVAILABLE')
    ->ORDERBY('name', 'ASC')
    ->GET();

    $dbrightMenu = Rightclick::where('status', 'ACTIVE')
        ->ORDERBY('parent_id', 'ASC')
        ->ORDERBY('sortorder', 'ASC')
        ->ORDERBY('name', 'ASC')
        ->GET();

    $easing = Easing::where('status', 'ACTIVE')
        ->ORDERBY('userId', 'ASC')
        ->ORDERBY('name', 'ASC')
        ->GET();


      
        $saved = SliderData::where('user-id', 0 )
        ->ORDERBY('title', 'ASC')
        ->GET();
        if(isset(Auth::user()->id)){
            $saved = SliderData::where('user-id', "Auth::user()->id" )
            ->ORDERBY('title', 'ASC')
            ->GET();
        }


    $menu = parseTree($dbrightMenu,$whichlist="rightclick");

        return view('slider')
            ->with('greensockOptions', $greensockOptions)
            ->with('availablegreensockOptions', $availablegreensockOptions)
            ->with('saved', $saved)
            ->with('easing', $easing)
            ->with('menu', $menu);


    }

    public function storeSlider(Request $request)
    {
        //return $request->all();
        $slider_data = new sliderData;
        $user_id = $request->user_id;
        $title = $request->title;
        $slider_data = $request->data;
        DB::table('slider_data')->insert(
            ['data' => $slider_data, 'user-id' => $user_id, 'title' => $title]
        );
        
    }
    public function loadSlider(Request $request)
    {

        $id = $request->id;
        $loadSlide = SliderData::where('id', $id)
        ->GET();

        return $loadSlide[0]{"data"};
    }

     public function easingVisualizer(Request $request)
    {

         return view('partials/easingVisualizer');
    }   
}
