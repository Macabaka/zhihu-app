<template>
	<div>
		<div  style="width: 200px;background-color: red;" >
				 <v-btn color="primary" dark height=30 width=40 min-width="24">
					 <svg class="Zi Zi--TriangleDown" fill="currentColor" viewBox="0 0 24 24" width="10" height="10">
					 	<path d="M20.044 3H3.956C2.876 3 2 3.517 2 4.9c0 .326.087.533.236.896L10.216 19c.355.571.87 1.143 1.784 1.143s1.429-.572 1.784-1.143l7.98-13.204c.149-.363.236-.57.236-.896 0-1.386-.876-1.9-1.956-1.9z"
					 	 fill-rule="evenodd"></path>
					 </svg>
				 </v-btn>
		</div>
	</div>

</template>

<script>
	export default{
		data(){
			return{
				token: this.$store.state.user.nickname,
			}
		}
		,
		methods:{
			
		},
		created() {
			//获取图片主色
			// this.$nextTick(()=>{
			// 	console.log(this.$refs.img)
			// 	let img =this.$refs.img;
			// 	let pic = this.$refs.pic;
			// 	RGBaster.colors(img,{
			// 		success:function(payload){
			// 			console.log('主色：'+payload.dominant+'次色：'+payload.secondary);
			// 			pic.style.background = payload.dominant;
			// 			console.log(pic);
			// 		}
			// 	});
			// });
			
			//模拟请求json数据
			this.axios.get('/api/hot-lists/total').then(res=>{
				console.log(res.data.data.data[0]);
			})
			// 本地创建token,数据模拟
			// console.log(this.token)
		}
	}
</script>

<style scoped>
</style>
