<template>
	<div class="hy-explore-container">
		<div class="hy-explore-content ba-col-4" v-for="(section,index) in recentSpecial" :key="index">
			<div class="img">
				<img :src="section.banner" alt="">
			</div>
			<h3>{{section.title}}</h3>
			<span style="font-size: 14px;color: gray;">{{section.updated}}更新，{{section.viewCount}}次被浏览</span>
			<span style="font-size: 14px;">{{section.introduction}}</span>
		</div>
		<div class="hy-explore-bottom">
			<router-link to="/special/all" class="hy-explore-bottom-pos">全部专题</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				recentSpecial:[]
			}

		},
		methods:{
			
		},
		created() {
		
			this.axios({
				method:'get',
				url: this.GLOBAL.baseUrl+'/special',
			}).then(res=>{
				this.recentSpecial =res.data.data;
				console.log(this.recentSpecial);
			})
		}
	}
	
</script>

<style>
	.hy-explore-container {
		width: 100%;
		height: 1000px;
		display: flex;
		flex-wrap: wrap;
	}
	.hy-explore-content{
		height: 400px;
		margin:1%;
		display: flex;
		flex-direction: column;
		border: 1px solid #e0e0e0;
		padding: 1%;
		border-radius: 3%;
	}
	.img{
		width: 100%;
		height: 55%;
	}
	.hy-explore-bottom{
		height: 60px;
		width: 100%;
	}
	.hy-explore-bottom-pos{
		font-size: 24px;
		height:100%;
		display: flex;
		justify-content: center;
		background-color: #0e88eb;
		padding-top: 1%;
	}
</style>
