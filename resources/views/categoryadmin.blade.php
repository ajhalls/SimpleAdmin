@extends('layouts.app')

@section('content')
<?php
    include(app_path().'/Libraries/categoriesFunctions.php');
?>
    <BR><BR><BR><BR>
    <div class="col-md-12">  
    <div class="col-md-8">  

        {!! printCategories(parseCategories(categories())) !!}

    </div>
    </div>



    @include('partials.adminCategoryModal')
    <BR><BR>
    <button class="btn btn-primary btn-xs" data-target="#modal-sizes-2" data-toggle="modal">Add User</button>

    <script type="text/javascript">
    <!--
    $(function() {
        $('.modaledit').on('click', function(e){
            var $this = $(this);
            console.log();
            $.ajax({
                type: "POST",
                url: "/getCategoryItem",
                data: {'id':$(this)[0].id},
                success: function(data){
            $("#editCategory").show();                    
            $(".editmodal-id").val( data[0].id );
            $(".editmodal-username").val( $(this).attr("data-username") );
            $(".editmodal-name").val( data[0].name );
            console.log(data[0].name);
            $(".editmodal-email").val( $(this).attr("data-email") );
            $(".editmodal-name").val( $(this).attr("data-name") );

                }
            });
            return false; //prevent the form from causing the page to refresh
        });
        $('form').on('submit', function(e){
            e.preventDefault();
            var $this = $(this);
            $.ajax({
                type: "POST",
                url: "/getCategoryItem",
                data: $this.serialize(),
                success: function(data){
                  //do something with the return of the php script
                  alert("Form Saved");
                }
            });
            return false; //prevent the form from causing the page to refresh
        });
    });
    //-->
    </script>
@endsection

