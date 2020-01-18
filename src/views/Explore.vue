<template>
	<div>
		<div class="hy-explore-smalltips">
			<h2>最新专题</h2>
		</div>
		<div class="hy-explore-container">

			<v-card class="mx-auto hy-explore-card"  v-for="(section,index) in recentSpecial" :key="index">
				<v-img class="white--text align-end" height="200px" :src="section.banner">
				</v-img>
				<div class="hy-explore-card-content">
					<div style="position: absolute;left: 3%;">
						<v-card-title>{{section.title}}</v-card-title>
						<v-card-subtitle class="pb-0">{{section.updated}}更新，{{section.viewCount}}浏览</v-card-subtitle>
					</div>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="blue  lighten-5" style="position: absolute;right: 3%;">
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
			<h2>圆桌讨论</h2>
		</div>

		<div class="hy-explore-container">
			<v-card class="mx-auto hy-explore-card" v-for="(discuss,index) in roundTable" :key="index" >
				<v-img class="white--text align-end" height="200px" :src="discuss.banner">
					
						<v-card-title class="font-weight-bold white--text">{{discuss.name}}</v-card-title>
					
					
					
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="blue  lighten-5">
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
	</div>

</template>

<script>
	export default {
		data() {
			return {
				recentSpecial: [],
				roundTable: []
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
					console.log(res.data.data)
				})
			}
		},
		created() {
			this.getSpeciacl()
			this.getRoundTable()
		}
	}
</script>

<style scoped="scoped">
	.hy-explore-container {
		width: 100%;
		height: 1000px;
		display: flex;
		flex-wrap: wrap;
		/* background-color: red; */
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
		height: 60px;
		width: 100%;
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
	}

	.hy-explore-card {
		height: 400px;
		width: 45%;
	}

	.hy-explore-card-content {
		width: 96%;
		display: flex;
		justify-content: space-around;
		border-bottom: 1px solid #e0e0e0;
		margin: 1%;
		position: relative;
	}
</style>
