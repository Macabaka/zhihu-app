<template>
	<div class="hy-column-container">
		<div class="hy-column-container-top">
			<div class="hy-column-container-top-content">
				<v-btn class="ma-1" block  outlined color="blue">
					开始写文章
				</v-btn>
				<span class="font-weight-regular" style="font-size: 14px;margin-left: 17%;">申请开通专栏</span>
			</div>
		</div>
		<div class="hy-column-container-mid">
			<div class="hy-column-container-tip">
				<p class="font-weight-bold">专栏·发现</p>
			</div>
			<div style="display: flex;">
				<div style="width: 10%;"></div>
				<div style="display: flex;flex-wrap: wrap;width: 80%;">
					<v-card class="mx-auto" height="280" width="23%" style="display: flex;flex-direction: column;align-items: center;padding: 1% 0 1% 0;margin-bottom: 1%;"
					 v-for="(columns,index) in pageColumns" :key="index">
						<v-card-text style="display: flex;flex-direction: column;align-items: center;">
							<a :href="columns.url">
								<v-avatar size="68">
									<img :src="columns.imageUrl">
								</v-avatar>
							</a>
					
							<a :href="columns.url">
								<p class="font-weight-black" style="font-size: 16px;color: black;">{{columns.title.substring(0,10)}}</p>
							</a>
							<p>{{columns.followers}}关注·{{columns.articlesCount}}文章</p>
							<div class="text--primary">
								{{columns.description.substring(0,20)}}
							</div>
						</v-card-text>
						<a :href="columns.url">
							<v-card-actions style="position: absolute;bottom: 3%;right: 25%;">
								<v-btn class="font-weight-black blue--text" depressed color="#d9edff">进入专栏</v-btn>
							</v-card-actions>
						</a>
					</v-card>
				</div>
			</div>
			<div class="hy-column-container-mid-btn">
				<v-btn class="ma-1"   outlined color="blue" @click="getBatch()">
					换一批
				</v-btn>
			</div>
			

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				recentColumns: [],
				pageColumns:[],
				count:0
			}

		},
		methods: {
			getColumns() {
				this.axios({
					method: 'get',
					url: this.GLOBAL.baseUrl + '/columns/all'
				}).then(res => {
					// console.log(res.data.data);
					this.recentColumns = res.data.data;
					this.pageColumns = this.recentColumns.slice(this.count,this.count+8);
					console.log(this.pageColumns);
				})
			},
			getBatch(){
				// alert(123)
				// alert(this.recentColumns.length)
				this.count+=8;
				this.pageColumns = this.recentColumns.slice(this.count,this.count+8);
				if(this.count+7>=this.recentColumns.length){
					this.count=0;
					
				}
			}
			
		},
		created() {
			
			this.getColumns()
		}
	}
</script>

<style>
	.hy-column-container-top{
		width: 100%;
		height: 470px;
		/* background-color: red; */
		background-image: url(https://static.zhihu.com/heifetz/assets/patterns.c72a480c.png);
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		/* background-color: red; */
	}
	.hy-column-container{
		width: 100%;
		height: 100%;
	}
	.hy-column-container-top-content{
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		position: absolute;
		bottom: 0;
		right: 44%;
	}
	.hy-column-container-mid{
		width: 100%;
		/* height: 500px; */
		/* background-color: #0084FF; */
		
	}
	.hy-column-container-tip{
		width: 100%;
		margin: 5% 0 2% 0;
		/* background-color: red; */
		display: flex;
		justify-content: center;
	}
	.hy-column-container-mid-btn{
		width: 100%;
		height: 30px;
		display: flex;
		justify-content: center;
		margin: 2% 0 10% 0;
		/* background-color: red; */
	}
</style>
