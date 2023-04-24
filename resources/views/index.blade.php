<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Memory</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <script src="{{ asset('js/jquery.js') }}" defer></script>
    <script src="{{ asset('js/index.js') }}" defer></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    
</head>
<body>

    <div class="terms__section">
        <button class="button--back"><span>Back</span></button>
        @foreach ($terms as $term)
            @include('partials.terms_section_partial', ['title'
            => $term->title, 'description' => $term->description, 'id' => $term->id])
        @endforeach
    </div>

    <div class="memory__section">
        @if(session('error'))
        <div class="section__error">{{ session('error') }}</div>
        @endif
        <div class="section__logo">
            <div class="logo__shape"></div>
            <img src="{{asset('images/memory-logo.png')}}" alt="Memory image">
        </div>
        <div class="section__form--add">
            <h1 class="section__title">Memory game</h1>
            <form action="{{route('terms.add')}}" method="POST" class="section__form">
                @csrf
                <h2>Add term</h2>
                <div class="form__title">
                    <label for="term_title">Title</label>
                    <input type="text" required name="title" id="">
                </div>
                <div class="form__description">
                    <label for="term_description">Description</label>
                    <textarea type="textarea" required rows="2" cols="25" name="description" id=""></textarea>
                </div>
                <div class="form__button--submit">
                    <input type="hidden" name="_method" value="PUT">
                    <button type="submit">Insert</button>
                </div>
            </form>
        </div>
        <div class="section__buttons">
            <button class="button--show"><span>Show terms</span></button>
            <button class="button--play"><span>Play</span></button>
        </div>
        <div class="section__play">
            <div class="cards--upper">
              @foreach ($terms as $term)
              <div class="card__container" id="{{$term->id}}">
                  @include('partials.memory_card_upper_facedown')
                  @include('partials.memory_card_upper_upside', ['term' => $term->title])
              </div>
              @endforeach
            </div>
            <div class="cards--lower">
              @foreach ($termsShuffle as $termShuffle)
                  <div class="card__container" id="{{$termShuffle->id}}">
                  @include('partials.memory_card_lower_facedown')
                  @include('partials.memory_card_lower_upside', ['answer' => $termShuffle->description])
            </div>
            @endforeach
          </div>
          <div class="container__reset" content="reset">
            <h3>You successfully finished a game.</h3>
            <button>Play again</button>
          </div>
        </div>
    </div>

</body>

<script>
$(".terms__section").hide();
$(".section__play").hide();

$(".button--play").click( function() {
    @if ($terms->count()>0) {
        $(".button--play").fadeToggle();
        setTimeout(() => {
            $(".section__play").fadeToggle();
        }, 600);
    }
    @else 
        alert("There are no terms inserted.");
    @endif
});

$(".button--show").click( function(){
    @if ($terms->count()>0) {
        $(".memory__section").fadeToggle();
        setTimeout(() => {
            $(".terms__section").fadeToggle();
        }, 600);
    }
    @else 
        alert("There are no terms inserted.");
    @endif
})

$(".button--back").click( function(){
    $(".terms__section").fadeToggle();
    setTimeout(() => {
        $(".memory__section ").fadeToggle();
    }, 600);
})
</script>

</html>