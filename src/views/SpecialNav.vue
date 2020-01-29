<!-- 所有圆桌页面的导航栏 -->
<template>
	<div>
		<div>
			<div class="hy-nav-container fill-white d-flex flex-row border-bottom pos-fix">
			<div class="hy-nav-search pt-1">
				          <v-text-field
				            label="搜索你感兴趣的内容..."
				            single-line
				            solo
							dense
				          ></v-text-field>
			</div>
				<router-link to="/home" class="hy-nav-a m-4 d-flex align-items-center ">
							首页
				</router-link>
				<router-link to="/explore"  class="hy-nav-a m-4 d-flex align-items-center ">
							发现
				</router-link>
				<router-link to="/question/waiting"  class="hy-nav-a m-4 d-flex align-items-center ">
							消息
				</router-link>
				 <div class="my-1 pos-rel" style="left: 15%;">
				        <v-btn depressed class="blue  lighten-2">提问</v-btn>
				 </div>
			</div>
		</div>
		
		
		<div class="hy-nav-most d-flex fill-white pos-abs">
			<div class="col-1"></div>
			<div class="col-10">
				<router-view/>
			</div>
			<div class="col-1"></div>
		</div>
	</div>

</template>

<script>
</script>

<style scoped="scoped">
	.hy-nav-container{
		height: 45px;
		width: 100%;
		padding-left: 17%;
		background-color: #0664c3;
		z-index: 2;
	}
	.hy-nav-a{
		color:white;
	}
	.hy-nav-most{
		z-index: 1;
	}
	.hy-nav-search{
		width: 30%;
	}
</style>

