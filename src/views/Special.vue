<template>
	<div class="hy-special-container">
		<div class="hy-special-content-row" v-for="(special,index) in AllSpecial" :key="index">
			<div class="ba-col-4">
				<div class="img">
					<img :src="special.banner" alt="">
				</div>
			</div>

			<div class="ba-col-8">
				<h3>{{special.title}}</h3>
				<span>{{special.updated}}</span>
				<br>
				<span>{{special.introduction}}</span>
			</div>
			

			
		</div>
		
		<div class="hy-special-content-row">
			
		</div>
		
		<div class="hy-special-content-row">
			
		</div>
		
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				AllSpecial:[]
			}

		},
		methods:{
			
		},
		created() {
		
			this.axios({
				method:'get',
				url: this.GLOBAL.baseUrl+'/special/all',
			}).then(res=>{
				this.AllSpecial =res.data.data;
			})
		}
	}
	
</script>

<style>
	.hy-special-container{
		height: 1000px;
		width: 100%;
	}
	.hy-special-content-row{
		height:200px;
		width: 98%;
		margin: 1%;
		padding: 2%;
		display: flex;
		border: 1px solid #e0e0e0;
	}
	.img{
		width: 100%;
		border-radius: 5%;
		height: 100%;
	}
</style>
