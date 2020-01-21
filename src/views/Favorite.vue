<template>
	<div class="hy-favorite-container">
		<div class="hy-favorite-container-top">
			<div class="hy-favorite-container-top-content">
				<svg class="Zi Zi--Star" color="#0084ff" fill="currentColor" viewBox="0 0 24 24" width="32" height="32"><path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path></svg>
				<h2>热门收藏夹</h2>
			</div>
		</div>
		<div v-for="(favorite,index) in  allFavorite" :key="index">
			<v-card class="mx-auto" outlined style="display: flex;height: 22%;padding: 2%;margin-bottom: 1%;">
				<div class="hy-favorite-card-left">
					<div class="hy-favorite-left-top">
						<span class="font-weight-bold">{{favorite.title}}</span>
					</div>
					<div class="hy-favorite-left-mid">
						<v-avatar tile size="35" style="border-radius: 10%;">
							<img :src="favorite.creatorAvatar">
						</v-avatar>
						<span style="margin-left: 3%;">{{favorite.creatorName}}</span>
						<span class="font-weight-light grey--text" style="font-size: 14px;">创建</span>
					</div>
					<div class="hy-favorite-left-bottom">
						<v-btn color="blue  lighten-5" depressed>
							<span class="font-weight-bold blue--text">关注收藏夹</span>
						</v-btn>
						<span class="font-weight-light grey--text" style="font-size: 14px;margin-left: 8%;">{{favorite.follows}}人关注</span>
					</div>
				</div>
			
				<div class="hy-favorite-card-right">
					<div class="hy-favorite-right-top">
						<span class="font-weight-bold">{{favorite.questionTitle}}</span>
					</div>
					<div class="hy-favorite-right-mid">
						<span>{{favorite.answerAuthorName}}：</span>
						<span v-html="favorite.answerContent.substring(0,58)+'...'"></span>
						<br>
						<span class="font-weight-light grey--text" style="font-size: 13px;">{{favorite.voteupCount}}赞同，{{favorite.commentCounut}}评论</span>
					</div>
					<div class="hy-favorite-right-bottom">
						<span class="font-weight grey--text" style="font-size: 14px;">已收藏{{favorite.totalCount}}条内容</span>
					</div>
				</div>
			</v-card>
		</div>
	</div>
</template>

<script >
	export default{
		data(){
			return{
				allFavorite:[]
			}

		},
		methods:{
			getAllFavorite(){
				this.axios({
					methods:'get',
					url:this.GLOBAL.baseUrl+'/favorite/all'
				}).then(res=>{
					console.log(res.data.data)
					this.allFavorite=res.data.data;
				})
			}
			
		},
		created() {
			this.getAllFavorite();
		}
	}
	
</script>

<style scoped="scoped">
	.hy-favorite-container {
		width: 100%;
		height: 1000px;
		padding:  0 5% 5% 5%;
		background-color: #f6f6f6;
	}

	.hy-favorite-card-left {
		width: 30%;
		height: 100%;
		/* background-color: red; */
		/* padding: 2%; */
	}

	.hy-favorite-card-right {
		width: 70%;
		height: 100%;
		/* background-color: green; */
		padding-left: 2%;
		border-left: 1px solid #eeeeee;
	}

	.hy-favorite-left-top {
		width: 90%;
		height: 20%;
	}

	.hy-favorite-left-mid {
		width: 90%;
		height: 50%;
		padding-top: 1%;
		margin-top: 3%;
	}

	.hy-favorite-left-bottom {
		width: 90%;
		height: 30%;
		margin-top: 8%;
	}

	.hy-favorite-right-top {
		width: 90%;
		height: 20%;
	}

	.hy-favorite-right-mid {
		width: 90%;
		height: 50%;
	}

	.hy-favorite-right-bottom {
		width: 90%;
		height: 30%;
		padding-top: 1%;
	}
	.hy-favorite-container-top{
		width: 135%;
		height: 12%;
		position: relative;
		left: -16%;
		padding: 3% 0 0 16%;
		background-color: white;
		border-bottom: 1px solid #e0e0e0;
		margin-bottom: 1%;
	}
	.hy-favorite-container-top-content{
		display: flex;
		width: 15%;
		
	}
</style>
