<?php

namespace App\Http\Controllers;

use App\Models\Terms;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TermController extends Controller
{
    public function index(){
        $terms = Terms::all();
        
        return view('index', [
            'terms' => $terms
        ]);
    }

    public function addTerm(Request $request){


        $term = new Terms;

        $term->title = $request->title;
        $term->description = $request->description;
        $term->image_path = $request->image_path;
        $term->save();

        return redirect('/index');

    }
}
