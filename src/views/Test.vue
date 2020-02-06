<template>
	<div>
		<div  style="width: 500px;" >
			<img src="../assets/image/知乎.png" ref="img">
		</div>
		<div style="width: 660px;height: 200px;background: white;" ref="pic">
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
