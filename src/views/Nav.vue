<template>
	<div>
		<div class="hy-nav-container">
			<router-link to="/home" class="hy-nav-a">
						首页
			</router-link>
			<router-link to="/explore"  class="hy-nav-a">
						发现
			</router-link>
			<router-link to="/question/waiting"  class="hy-nav-a">
						等你来答
			</router-link>
			<router-link to="/login"  class="hy-nav-a">
						登录
			</router-link>

		</div>
		<div class="hy-nav-most">
			<div class="ba-col-1"></div>
			<div class="ba-col-10">
				<router-view/>
			</div>
			<div class="ba-col-1"></div>
		</div>
	</div>


	
</template>

<script>
</script>

<style scoped="scoped">
	.hy-nav-container{
		height: 55px;
		width: 100%;
		background-color: #ffffff;
		display: flex;
		flex-direction: row;
		padding-left: 17%;
		border-bottom: 1px solid #efefef;
	}
	.hy-nav-a{
		margin: 2%;
		display: flex;
		align-items: center;
		margin-left: 2%;
		color: #8798b0;
	}
	.hy-nav-most{
		display: flex;
	}
</style>
