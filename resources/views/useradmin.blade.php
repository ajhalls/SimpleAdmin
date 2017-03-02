@extends('layouts.app')

@section('content')
    <?PHP
    use App\Menuitems;
    use Libraries\functions;
    ?>
    <BR><BR><BR><BR>
    <div class="col-md-12">  
    @foreach ($users as $option)
    <div class="col-md-8">  
        
        <div class="col-md-1">
        <form action="/updateUser" method="POST">
            <input type="hidden" name="deleteUser" value="YES">
            <input type="hidden" name="id" value="{{ $option->id }}">
            <button class="btn btn-danger btn-xs" type="submit">Delete</button>
        </form>
        </div>
        <div class="col-md-1">
           <a class="btn modaledit" data-target="#edituser" data-toggle="modal" data-id="{{ $option->id }}" data-username="{{ $option->username }}" data-name="{{ $option->name }}" data-email="{{ $option->email }}" >Edit</a>
            
        </div>
        <div class="col-md-2">
            {{ $option->name }}
        </div>
        <div class="col-md-2">
            {{ $option->username }}
        </div>
        <div class="col-md-2">
            {{ $option->email }}
        </div>
        </form>
    </div>
    @endforeach
    </div>



    @include('partials.adminUserModal')
    <BR><BR>
    <button class="btn btn-primary btn-xs" data-target="#modal-sizes-2" data-toggle="modal">Add User</button>

    <script type="text/javascript">
    <!--
    $(function() {
        $('form').on('submit', function(e){
            e.preventDefault();
            var $this = $(this);
            $.ajax({
                type: $this.prop('method'),
                url: $this.prop('action'),
                data: $this.serialize(),
                success: function(data){
                  //do something with the return of the php script
                  alert("Form Saved");
                }
            });
            return false; //prevent the form from causing the page to refresh
        });
            
        $( ".modaledit" ).click(function() {
            $(".editmodal-id").val( $(this).attr("data-id") );
            $(".editmodal-username").val( $(this).attr("data-username") );
            $(".editmodal-name").val( $(this).attr("data-name") );
            $(".editmodal-email").val( $(this).attr("data-email") );
            $(".editmodal-name").val( $(this).attr("data-name") );
        });
    });
    //-->
    </script>
@endsection

