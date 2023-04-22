<?php

namespace App\Http\Controllers;

use App\Models\Terms;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TermController extends Controller
{
    public function index(){
        $term = Terms::all();
        
        return view('index');
    }

    public function addTerm(Request $request){

        $validator = Validator::make($request->all(),
        [
            'name' => 'required|max:30',
            'description' => 'required|max:150',
            'image_path' => 'required'
        ]);

        if($validator->fails()){
            return redirect('/index');
        }

        $term = new Terms;

        $term->title = $request->title;
        $term->description = $request->description;
        $term->image_path = $request->image_path;



    }
}
