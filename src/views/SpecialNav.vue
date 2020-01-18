<template>
	<div>
		<div>
			<div class="hy-nav-container">
			<div class="hy-nav-search">
				          <v-text-field
				            label="搜索你感兴趣的内容..."
				            single-line
				            solo
							dense
				          ></v-text-field>
			</div>
				<router-link to="/home" class="hy-nav-a">
							首页
				</router-link>
				<router-link to="/explore"  class="hy-nav-a">
							发现
				</router-link>
				<router-link to="/question/waiting"  class="hy-nav-a">
							消息
				</router-link>
				 <div class="my-1" style="position: relative;left: 15%;">
				        <v-btn depressed class="blue  lighten-2">提问</v-btn>
				 </div>
			</div>
		</div>
		
		
		<div class="hy-nav-most">
			<div style="width:8%;">
				
			</div>
			<div style="width: 84%;">
				<router-view/>
			</div>
			<div style="width: 8%;">
			
			</div>
		</div>
	</div>

</template>

<script>
</script>

<style scoped="scoped">
	.hy-nav-container{
		height: 45px;
		width: 100%;
		background-color: #ffffff;
		display: flex;
		flex-direction: row;
		padding-left: 17%;
		border-bottom: 1px solid #efefef;
		background-color: #0664c3;
		position: fixed;
		z-index: 2;
	}
	.hy-nav-a{
		margin: 2%;
		display: flex;
		align-items: center;
		color:white;
		font-size: 14px;
	}
	.hy-nav-most{
		display: flex;
		background-color:#f6f6f6;
		position: absolute;
		z-index: 1;
	}
	.hy-nav-search{
		width: 30%;
		padding-top: 3px;
	}
</style>

