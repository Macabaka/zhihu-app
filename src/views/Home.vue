<template>
		<div class="hy-home-container">
			<div class="ba-col-8 hy-home-left" >
				<div class="hy-home-left-top">
					<router-link to="/home/recommoned" class="hy-home-left-a">推荐</router-link>
					<router-link to="/home/follow" class="hy-home-left-a">关注</router-link>
					<router-link to="/home/hot" class="hy-home-left-a">热榜</router-link>
				</div>
				<div>
					<router-view/>
				
				</div>

			</div>
			<div class="ba-col-4 hy-home-right">
				<div class="hy-home-right-top">
					
				</div>
				
				<div class="hy-home-right-mid">
				</div>
				
				<div class="hy-home-right-bottom">
				</div>
			</div>
		</div>
</template>

<script>
</script>

<style scoped="scoped"> 
	.hy-home-container{
		display: flex;
	}
	.hy-home-left{
		width: 100%;
	}
	.hy-home-right{
		width: 100%;
	}
	.hy-home-left-top{
		margin-top: 2%;
		width: 99%;
		height: 65px;
		border: 1px solid #e0e0e0;
		background-color: white;
		padding: 3%;
		margin: 1%;
	}
	.hy-home-left-a{
		margin-left: 3%;
		font-size: 18px;
	}
	.hy-home-right-top{
		height: 260px;
		width: 90%;
		background-color: white;
		margin: 3%;	
		border: 1px solid #e0e0e0;
	}
	.hy-home-right-mid{
		height: 100px;
		width: 90%;
		margin: 3%;
		background-color: white;
		border: 1px solid #e0e0e0;
	}
	.hy-home-right-bottom{
		height: 260px;
		width: 90%;
		background-color: white;
		margin: 3%;
		border: 1px solid #e0e0e0;
	}

</style>
