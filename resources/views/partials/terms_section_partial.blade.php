<ul class="section__table">
<li><b>Title:</b> {{$title}}</li> 
<li><b>Description:</b> {{$description}}</li>
<li><b>ID:</b> {{$id}}</li> 
<form action="{{route('terms.delete', $id)}}" method="POST">
    @csrf
    {{ method_field('DELETE') }}
    <button class="button--delete"><span>Delete</span></button>
</form>
</ul>