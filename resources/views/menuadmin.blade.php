@extends('layouts.app')

@section('content')
<?PHP
use App\Menuitems;
use Libraries\functions;
?>

{{ adminMenu(parseNav(left_admin_nav()), $list="active") }}

{{ adminMenu(parseNav(left_inactive_nav()), $list="available") }}


@include('partials.addMenuModal')


<script src="/js/jquery.dataTables.rowReordering.js"></script>     
<script src="/js/jquery.dataTables.rowGrouping.js"></script>     
<script src="/js/jquery.nestable.js"></script>     
<script src="/js/menuAdmin.js"></script>     



<script type="text/javascript">
<!--
$(function(){

	$('.panel-heading-controls').on('click', function(e)
    {
        var target = $(e.target),
            action = target.data('action');
        if (action === 'expand-all') {
            $('.dd').nestable('expandAll');
        }
        if (action === 'collapse-all') {
            $('.dd').nestable('collapseAll');
        }
    });


});
//-->
</script>
@endsection

