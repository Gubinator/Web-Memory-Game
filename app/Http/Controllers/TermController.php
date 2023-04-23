<?php

namespace App\Http\Controllers;

use App\Models\Terms;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TermController extends Controller
{
    public function index(){
        $terms = Terms::all();
        $randomizedTerms = $terms->take(6)->shuffle();
        $randomizedTermsShuffle = $randomizedTerms->shuffle();
        
        return view('index', [
            'terms' => $randomizedTerms,
            'termsShuffle' => $randomizedTermsShuffle
        ]);
    }

    public function addTerm(Request $request){

        $term = new Terms;

        $term->title = $request->title;
        $term->description = $request->description;
        $term->save();

        return redirect('/index');

    }
}
