<template>
	<div>

		<div class="hy-explore-smalltips">
			<svg class="Zi Zi--LabelSpecial" color="#0084ff" fill="currentColor" viewBox="0 0 24 24" width="36" height="36">
				<path d="M7.667 3.667h11.466a1.2 1.2 0 0 1 1.2 1.2v13.066a2.4 2.4 0 0 1-2.4 2.4H6.467V4.867a1.2 1.2 0 0 1 1.2-1.2zM4.2 9.619h1.689v10.714H5.4a2.4 2.4 0 0 1-2.4-2.4V10.82a1.2 1.2 0 0 1 1.2-1.2zm5.178-2.38a.6.6 0 0 0-.6.6v.585a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378zm0 3.57a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.585a.6.6 0 0 0-.6-.6H9.378zm0 3.572a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h4.578a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378z"
				 fill-rule="evenodd"></path>
			</svg>
			<h2>最新专题</h2>
		</div>
		<div class="hy-explore-container">

			<v-card class="mx-auto hy-explore-card" v-for="(section,index) in recentSpecial" :key="index" style="margin-bottom: 5%;">
				<v-img class="white--text align-end" height="200px" :src="section.banner">
				</v-img>
				<div class="hy-explore-card-content">
					<div style="position: absolute;left: 3%;">
						<v-card-title>{{section.title}}</v-card-title>
						<v-card-subtitle class="pb-0">{{section.updated}}更新，{{section.viewCount}}浏览</v-card-subtitle>
					</div>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="blue  lighten-5" depressed style="position: absolute;right: 3%;">
							<span class="font-weight-bold blue--text">关注专题</span>
						</v-btn>
					</v-card-actions>
					<br><br><br><br>
				</div>
				<v-card-text class="text--primary">
					<div>{{section.introduction.substring(0,30)}}</div>
				</v-card-text>
			</v-card>

			<div class="text-center hy-explore-bottom">
				<router-link to="/special/all">
					<v-btn rounded color="font-weight-bold white grey--text">查看更多专题</v-btn>
				</router-link>
			</div>
		</div>
		<div class="hy-explore-smalltips">
			<svg class="Zi Zi--LabelRoundtable" fill="currentColor" viewBox="0 0 24 24" width="36" height="36" color="#0084ff">
				<path d="M12 21.333a9.333 9.333 0 1 1 0-18.666 9.333 9.333 0 0 1 0 18.666zm-.66-11.287c.332.385.609.77.775 1.21.055-.054.665-.99.72-1.706.055-.385.126-1.616-.443-2.367-.443-.496-1.219-.77-1.884-.55a1.788 1.788 0 0 0-1.33 2.036c.887.276 1.607.771 2.161 1.377zm-1.33 1.541c.443-.055.941-.11 1.44 0 0-.055-.484-.936-1.108-1.486-.665-.496-1.33-.973-2.216-.771-.72.11-1.723.77-1.55 2.092.11.606.553 1.101 1.162 1.321.61-.605 1.44-1.046 2.272-1.156zm2.714.165c.056 0 1.164.055 1.828-.165.72-.275 1.412-.68 1.773-1.541.11-.276.23-1.248-.443-1.872-.72-.716-1.717-.716-2.438-.165.222.825.063 1.966-.11 2.532-.103.348-.333.88-.61 1.211zm-1.44.55c-.056 0-1.33.056-1.828.221-.72.275-1.447.668-1.773 1.541-.11.276-.21 1.26.443 1.872.665.661 1.718.661 2.438.11-.295-.811-.166-1.761.055-2.477.166-.495.388-.936.665-1.266zm5.041-.99c-.665.605-1.44.99-2.327 1.211-.443.055-.941.11-1.44 0 0 .055.554.991 1.108 1.431.665.496 1.385.771 2.216.771.72-.11 1.678-.692 1.551-2.092-.055-.605-.554-1.101-1.108-1.321zm-3.656 2.642a3.475 3.475 0 0 1-.776-1.156c-.055.055-.665.991-.72 1.707-.055.385-.101 1.506.499 2.312.443.496 1.218.77 1.883.55.887-.275 1.496-1.1 1.33-2.036a5.38 5.38 0 0 1-2.216-1.377z"
				 fill-rule="evenodd"></path>
			</svg>
			<h2>圆桌讨论</h2>
		</div>

		<div class="hy-explore-container">
			<v-card class="mx-auto hy-explore-card" v-for="(discuss,index) in roundTable" :key="index" style="margin-bottom: 5%;">
				<v-img class="white--text align-end" height="200px" :src="discuss.banner">

					<v-card-title class="font-weight-bold white--text">{{discuss.name}}</v-card-title>



					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="blue depressed lighten-5">
							<span class="font-weight-bold blue--text">关注圆桌</span>
						</v-btn>
					</v-card-actions>
				</v-img>
				<v-card-subtitle class="pb-0">{{discuss.includeCount}}位嘉宾参与|{{discuss.visitsCount}}人关注</v-card-subtitle>
			</v-card>

			<div class="text-center hy-explore-bottom">
				<router-link to="/specialnav/discuss/all">
					<v-btn rounded color="font-weight-bold white grey--text ">查看更多圆桌</v-btn>
				</router-link>
			</div>
		</div>

		<div class="hy-explore-smalltips">
			<svg class="Zi Zi--Star" color="#0084ff" fill="currentColor" viewBox="0 0 24 24" width="36" height="36">
				<path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
				 fill-rule="evenodd"></path>
			</svg>
			<h2>热门收藏夹</h2>
		</div>


		<div class="hy-explore-container">
			<v-card class="mx-auto hy-explore-card" v-for="(favorite,index) in recentfavorite" :key="index" style="margin-bottom: 5%;">
				<div class="hy-explore-card-faviorite-top">
					<div style="display: flex;">
						<p class="font-weight-black" style="font-size: 22px;">{{favorite.title}}</p>
						<v-btn color="blue  lighten-5" depressed style="position: absolute;right: 5%;">
							<span class="font-weight-bold blue--text">关注专题</span>
						</v-btn>
					</div>
					<div style="display: flex;margin: 1%;">
						<v-avatar tile size="35" style="border-radius: 10%;">
							<v-img :src="favorite.creatorAvatar">
							</v-img>
						</v-avatar>
						<p class="text-justify" style="font-size: 16px;margin: 1%;">
							{{favorite.creatorName}}
						</p>
						<span class="font-weight-light grey--text" style="font-size: 16px;margin-top: 1%;">创建</span>
						<span class="font-weight-light grey--text" style="font-size: 16px;margin: 1%;">{{favorite.follows}}人关注</span>
					</div>
				</div>
				<div class="hy-explore-card-faviorite-mid">
					<div class="hy-explore-card-faviorite-mid-row">
						<span class="font-weight-bold" style="font-size:20px;">{{favorite.questionTitle}}</span>
						<br>
						<span class="font-weight-regular">{{favorite.answerAuthorName}}：</span>
						<span class="font-weight-regular" v-html="favorite.answerContent.substring(0,20)+'...'"></span>
						<br>
						<span class="font-weight-light grey--text" style="font-size: 13px;background-color: #e0e0e0;border-radius: 10%;">回答</span>
						<span class="font-weight-light grey--text" style="font-size: 13px;margin-left: 3%;">{{favorite.voteupCount}}赞同·{{favorite.commentCounut}}评论</span>
						<!-- <p class="font-weight-bold" style="font-size:20px;">123</p> -->
						<!-- <p class="font-weight-regular">Normal weight text.</p> -->
						<!-- <p class="font-weight-light" style="font-size: 15px;">Light weight text.</p> -->
					</div>
				</div>

				<div class="hy-explore-card-faviorite-bottom">
					<span class="font-weight-bold grey--text">已收藏{{favorite.totalCount}}内容</span>
				</div>
			</v-card>

			<div class="text-center hy-explore-bottom">
				<router-link to="/favorite/all">
					<v-btn rounded color="font-weight-bold white grey--text">查看更多收藏夹</v-btn>
				</router-link>
			</div>
		</div>

		<div class="hy-explore-smalltips">
			<svg class="Zi Zi--EditCircle" color="#0084ff" fill="currentColor" viewBox="0 0 24 24" width="36" height="36">
				<path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.043-15.524a.745.745 0 0 0-1.053.017l-6.857 7.071 2.237 2.17 6.857-7.071a.743.743 0 0 0-.016-1.052l-1.168-1.135zm-9.028 9.476l-.348 1.381 1.37-.39 1.274-.36-1.973-1.916-.323 1.285z"
				 fill-rule="evenodd"></path>
			</svg>
			<h2>专栏</h2>
		</div>

		<div class="hy-explore-container">
			<v-card class="mx-auto" height="335" width="23%" style="display: flex;flex-direction: column;align-items: center;padding: 1% 0 1% 0;margin-bottom: 5%;"
			 v-for="(columns,index) in recentColumns" :key="index">
				<v-card-text style="display: flex;flex-direction: column;align-items: center;">
					<a :href="columns.url">
						<v-avatar size="88">
							<img :src="columns.imageUrl">
						</v-avatar>
					</a>

					<a :href="columns.url">
						<p class="font-weight-black" style="font-size: 18px;color: black;">{{columns.title.substring(0,10)}}</p>
					</a>

					<p>{{columns.followers}}关注·{{columns.articlesCount}}文章</p>
					<div class="text--primary">
						{{columns.description.substring(0,20)}}
					</div>
				</v-card-text>
				<br>
				<a :href="columns.url">
					<v-card-actions>
						<v-btn class="font-weight-black blue--text" depressed color="#d9edff">进入专栏</v-btn>
					</v-card-actions>
				</a>


			</v-card>
			<div class="text-center hy-explore-bottom">
				<router-link to="/columnnav/column/all">
					<v-btn rounded color="font-weight-bold white grey--text ">查看更多专栏</v-btn>
				</router-link>
			</div>
		</div>
		<div class="text-center hy-explore-bottom" style="margin:5% 0 15% 0;">
			 <p class="font-weight-regular" style="color: #9e9e9e;font-size: 14px;">Jack·知乎指南·知乎协议·应用·工作·联系我们@2020知乎</p>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				recentSpecial: [],
				roundTable: [],
				recentfavorite: [],
				recentColumns: []
			}

		},
		methods: {
			getSpeciacl() {

				this.axios({
					method: 'get',
					url: this.GLOBAL.baseUrl + '/special',
				}).then(res => {
					this.recentSpecial = res.data.data;
					// console.log(this.recentSpecial);
				})

			},

			getRoundTable() {
				this.axios({
					method: 'get',
					url: this.GLOBAL.baseUrl + '/roundtable'
				}).then(res => {
					this.roundTable = res.data.data;
					// console.log(res.data.data)
				})
			},
			getFavorite() {
				this.axios({
					method: 'get',
					url: this.GLOBAL.baseUrl + '/favorite'
				}).then(res => {
					// console.log(res.data.data)
					this.recentfavorite = res.data.data
				})
			},
			getColumns() {
				this.axios({
					method: 'get',
					url: this.GLOBAL.baseUrl + '/columns'
				}).then(res => {
					console.log(res.data.data);
					this.recentColumns = res.data.data;
				})
			}
		},
		created() {
			this.getSpeciacl()
			this.getRoundTable()
			this.getFavorite()
			this.getColumns()
		}
	}
</script>

<style scoped="scoped">
	.hy-explore-container {
		width: 100%;
		/* height: 1000px; */
		display: flex;
		flex-wrap: wrap;
	}

	.hy-explore-content {
		height: 400px;
		margin: 1%;
		display: flex;
		flex-direction: column;
		border: 1px solid #e0e0e0;
		padding: 1%;
		border-radius: 3%;
	}

	.img {
		width: 100%;
	}
	.hy-explore-bottom {
		height: 10%;
		width: 100%;
		/* background-color: red; */
	}

	.hy-explore-bottom-pos {
		font-size: 24px;
		height: 100%;
		display: flex;
		justify-content: center;
		background-color: #0e88eb;
		padding-top: 1%;
	}

	.hy-explore-smalltips {
		margin: 2%;
		display: flex;
	}

	.hy-explore-card {
		height: 400px;
		width: 45%;
		/* background-color: gray; */
		/* display: flex; */
	}

	.hy-explore-card-content {
		width: 96%;
		display: flex;
		justify-content: space-around;
		border-bottom: 1px solid #e0e0e0;
		margin: 1%;
		position: relative;
		/* background-color: red; */
	}

	.hy-explore-card-faviorite-top {
		width: 94%;
		height: 30%;
		/* background-color: green; */
		margin: 3% auto 0 auto;
		border-bottom: 1px solid grey;
		padding: 3%;


	}

	.hy-explore-card-faviorite-mid {
		width: 90%;
		height: 55%;
		/* background-color: green; */
		margin: 0 auto 0 auto;
		/* border-bottom: 1px solid grey; */
	}

	.hy-explore-card-faviorite-bottom {
		width: 90%;
		height: 15%;
		/* background-color: green; */
		margin: 0 auto 0 auto;
	}

	.hy-explore-card-faviorite-mid-row {
		width: 98%;
		height: 45%;
		/* background-color: red; */
		margin: 2%;
	}
</style>
