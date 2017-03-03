<?PHP
use App\Menuitems;
use Libraries\functions;

///
/// LEFT HAND NAVIGATION SECTION
///
?>
<!-- 4. $MAIN_SIDE_MENU ================================================================================= -->

    <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
            <ul class="nav" id="side-menu">

			{{ printNav(getLeftnav()) }}
            {{ printNav(parseNav(left_categories_nav())) }}
		 <!-- / .navigation -->

                        @if (Auth::guest())

                            <li><a href="{{ url('/login') }}">&nbsp;<i class="menu-icon fa fa-sign-in fa-lg" title="Login">&nbsp;</i><span class="mm-text mmc-dropdown-delay animated fadeIn">&nbsp;Login</span></a></li>                            
                            <li><a href="{{ url('/register') }}">&nbsp;<i class="menu-icon fa fa-user-plus fa-lg" title="Register">&nbsp;</i><span class="mm-text mmc-dropdown-delay animated fadeIn">&nbsp;Register</span></a></li>
                        @else
                            <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">&nbsp;<i class="menu-icon fa fa-user-circle-o fa-lg" title="{{ Auth::user()->name }}">&nbsp;</i><span class="mm-text mmc-dropdown-delay animated fadeIn">&nbsp;{{ Auth::user()->name }} <span class="caret"></span></span></a>


                                <ul class="dropdown-menu" role="menu">
                                    <li>
                                    <a href="{{ url('/logout') }} " onclick="event.preventDefault();
                                        document.getElementById('logout-form').submit();>&nbsp;<i class="menu-icon fa fa-user-times fa-lg" title="Logout">&nbsp;</i><span class="mm-text mmc-dropdown-delay animated fadeIn">&nbsp;Logout</span></a>
                                        <form id="logout-form" action="{{ url('/logout') }}" method="POST" style="display: none;">
                                            {{ csrf_field() }}
                                        </form>
                                    </li>
                                </ul>
                            </li>
                        @endif

            </ul>

</div>
<div id="login" class="modal fade" style="display: none;" role="dialog" tabindex="-1" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<button class="close" aria-hidden="true" data-dismiss="modal" type="button">x</button>
				<h4 class="modal-title">Login</h4>
			</div>
			<div class="modal-body">
				<form name="form1" class="panel  form-horizontal" method="post" action="./includes/auth.php">
				<div class="panel-body">
					<div class="row form-group">
					<label class="col-sm-4 control-label">Username</label>
						<div class="col-sm-8">
						<input class="form-control" type="textbox" name="myusername" id="myusername" size="20" value="">
						</div>
					</div>
					<div class="row form-group">
					<label class="col-sm-4 control-label">Password</label>
						<div class="col-sm-8">
						<input class="form-control" name="mypassword" type="textbox" id="mypassword" size="20" value="" onKeyPress="return submitenter(this,event)">
						</div>
					</div>
					<div class="panel-footer text-right">
					<a class="btn" onclick="$(this).closest('form').submit()">Login</a> 
					</div>
				</div>
				</form>
			</div>					
		</div>
	</div>
</div>
</nav>			
<div id="page-wrapper" class="gray-bg">



<SCRIPT TYPE="text/javascript">
<!--
    function submitenter(myfield,e)
    {
        var keycode;
        if (window.event) keycode = window.event.keyCode;
        else if (e) keycode = e.which;
        else return true;

        if (keycode == 13)
        {
            myfield.form.submit();
            return false;
        }
        else
            return true;
    }
//-->
</SCRIPT>