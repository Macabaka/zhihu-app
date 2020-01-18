<template>
	<div>
		<div class="hy-nav-container">
			<div class="hy-nav-container-img">
				<img src="../assets/image/知乎2.png" alt="">
			</div>
			<router-link to="/home" class="hy-nav-a">
				首页
			</router-link>
			<router-link to="/explore" class="hy-nav-a">
				发现
			</router-link>
			<router-link to="/question/waiting" class="hy-nav-a">
				等你来答
			</router-link>
			<router-link to="/login" class="hy-nav-a">
				登录
			</router-link>
			<div style="position: relative;width: 27%;height: 20%;margin-top: 5px;">
					<v-text-field
					outlined
					dense
				  ></v-text-field>
			</div>
			<v-btn depressed class="blue white--text" style="margin:7px;">提问</v-btn>
			
				
		
			
		</div>
		<div class="hy-nav-most">
			<div style="width:8%;">

			</div>
			<div style="width: 84%;">
				<router-view />
			</div>
			<div style="width: 8%;">

			</div>
		</div>
	</div>



</template>

<script>
</script>

<style scoped="scoped">
	.hy-nav-container {
		height: 54px;
		width: 100%;
		background-color: #ffffff;
		display: flex;
		flex-direction: row;
		/* padding-left: 17%; */
		border-bottom: 1px solid #efefef;
	}

	.hy-nav-a {
		margin: 2%;
		display: flex;
		align-items: center;
		margin-left: 2%;
		color: #8798b0;
	}

	.hy-nav-most {
		display: flex;
		background-color: #f6f6f6;
	}

	.hy-nav-container-img {
		width: 5%;
		height: 55%;
		margin: 1%;
		margin-left: 11%;
	}
</style>
