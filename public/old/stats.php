	<?PHP
	function meminfo()
	{
	    foreach ( file ( '/proc/meminfo' ) as $result )
		{
		    $array = explode ( ':', str_replace ( ' ', '', $result ) );
		    $value = preg_replace ( '/kb/i', '', $array[1] );
		    if ( preg_match ( '/^MemTotal/', $result ) )
		    {
		        $totalmem = $value;
		    }

		    elseif ( preg_match ( '/^MemFree/', $result ) )
		    {
		        $freemem = $value;
		    }

		    elseif ( preg_match ( '/^Buffers/', $result ) )
		    {
		        $buffers = $value;
		    }

		    elseif ( preg_match ( '/^Cached/', $result ) )
		    {
		        $cached = $value;
		    }

		}
		$freemem = ( $freemem + $buffers + $cached );
		$usedmem = round ( 100 - ( ( $freemem / $totalmem ) * 100 )  );
		return array(
			'used' => $usedmem,
			'free' => $freemem,
			'total' => $totalmem
		);
	}
		$meminfo = meminfo();

		$loadavg = explode ( ' ', file_get_contents ( '/proc/loadavg' ) );
		$loadavg = "{$loadavg[1]} {$loadavg[2]}";

		$diskinfo['total'] = disk_total_space ( '/' );
		$diskinfo['free']  = disk_free_space  ( '/' );
		$diskinfo['used']   = round ( 100 - ( ( $diskinfo['free'] / $diskinfo['total'] ) * 100 ) );

		$uptime = floor ( preg_replace ( '/\.[0-9]+/', '', file_get_contents ( '/proc/uptime' ) ) / 86400 );

		$kernel = explode ( ' ', file_get_contents ( '/proc/version' ) );
		$kernel = $kernel[2];


?>
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
			<div class="stat-panel " style="width:400px">
				<div class="stat-row">
					<!-- Success darker background -->
					<div class="stat-cell bg-primary darker">
						<!-- Stat panel bg icon -->
						<i class="fa  fa-medkit bg-icon" style="font-size:60px;line-height:80px;height:80px;"></i>
						<!-- Big text -->
						<span class="text-bg">Server Health</span><br>
						<!-- Small text -->
						<span class="text-sm">Ubuntu <?PHP echo  $kernel ;  ?> Statistics</span>
						<br>
						<span class="text-sm"><a href="{{ URL::to('admin/phpinfo') }}">PHP Info</a></span>
					</div>
				</div> <!-- /.stat-row -->
				<div class="stat-row">
					<!-- Success background, without bottom border, without padding, horizontally centered text -->
					<div class="stat-counters bg-success no-border-b no-padding text-center">
						<!-- Small padding, without horizontal padding -->
						<div class="stat-cell col-xs-4 bg-info padding-sm no-padding-hr">
							<!-- Big text -->
							<span class="text-bg"><strong><?PHP echo number_format($meminfo['used'], 0) ;  ?></strong>%</span><br>
							<!-- Extra small text -->
							<span class="text-xs">Memory Usage</span>
						</div>
						<!-- Small padding, without horizontal padding -->
						<div class="stat-cell col-xs-4 bg-info padding-sm no-padding-hr">
							<!-- Big text -->
							<span class="text-bg"><strong><?PHP echo  number_format( (float)$meminfo['free']/1000000, 2 ) ;  ?></strong> GB</span><br>
							<!-- Extra small text -->
							<span class="text-xs">Free Memory</span>
						</div>
						<!-- Small padding, without horizontal padding -->
						<div class="stat-cell col-xs-4 bg-info padding-sm no-padding-hr">
							<!-- Big text -->
							<span class="text-bg"><strong><?PHP echo $loadavg ;  ?></strong></span><br>
							<!-- Extra small text -->
							<span class="text-xs">Load Average</span>
						</div>
					</div> <!-- /.stat-counters -->
				</div> <!-- /.stat-row -->
				<div class="stat-row">
					<!-- Success background, without bottom border, without padding, horizontally centered text -->
					<div class="stat-counters bg-success no-border-b no-padding text-center">
						<!-- Small padding, without horizontal padding -->
						<div class="stat-cell col-xs-4 bg-info padding-sm no-padding-hr">
							<!-- Big text -->
							<span class="text-bg"><strong><?PHP echo $diskinfo['used'] ;  ?></strong>%</span><br>
							<!-- Extra small text -->
							<span class="text-xs">Disk Usage</span>
						</div>
						<div class="stat-cell col-xs-4 bg-info padding-sm no-padding-hr">
							<!-- Big text -->
							<span class="text-bg"><strong><?PHP echo number_format( (float)$diskinfo['free']/1000000000, 2 ) ;  ?></strong> GB</span><br>
							<!-- Extra small text -->
							<span class="text-xs">Free Space</span>
						</div>
						<div class="stat-cell col-xs-4 bg-info padding-sm no-padding-hr">
							<!-- Big text -->
							<span class="text-bg"><strong><?PHP echo number_format($uptime) ;  ?></strong> days</span><br>
							<!-- Extra small text -->
							<span class="text-xs">Up Time</span>
						</div>
					</div> <!-- /.stat-counters -->
				</div> <!-- /.stat-row -->
			</div>
