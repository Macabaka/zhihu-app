<!-- 所有专栏页面 -->
<template>
	<div>
		<div class="hy-column-container-top pos-rel">
			<div class="hy-column-container-top-content d-flex flex-column pos-abs">
				<v-btn class="ma-1" block  outlined color="blue">
					开始写文章
				</v-btn>
				<span class="font-weight-regular" style="margin-left: 17%;">申请开通专栏</span>
			</div>
		</div>
		<div>
			<div class="hy-column-container-tip d-flex justify-content-center">
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
			<div class="hy-column-container-mid-btn d-flex justify-content-center">
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
		height: 470px;
		background-image: url(https://static.zhihu.com/heifetz/assets/patterns.c72a480c.png);
		background-size: cover;
		background-repeat: no-repeat;
	}
	.hy-column-container-top-content{
		bottom: 0;
		right: 44%;
	}
	.hy-column-container-tip{
		margin: 5% 0 2% 0;
	}
	.hy-column-container-mid-btn{
		height: 30px;
		margin: 2% 0 10% 0;
	}
</style>
