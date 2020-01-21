<template>
	<div class="hy-special-container">
		<div class="hy-special-content-row" v-for="(special,index) in AllSpecial" :key="index">
			
			<v-card class="mx-auto" outlined width="100%">
				<v-list-item three-line>
					<div style="margin: 2%;width: 30%;">
						<v-img class="align-end" height="130px"  :src="special.banner">
						</v-img>
					</div>

					<v-list-item-content>
						<v-list-item-title class="headline mb-0">{{special.title}}</v-list-item-title>
						<v-list-item-subtitle>{{special.updated}}</v-list-item-subtitle>
						<v-list-item-subtitle>{{special.introduction}}</v-list-item-subtitle>
						
						<div style="width: 100%;" >
							<span class="hy-special-smalltips" v-for="(section,num) in special.sections" :key="num" >{{section.sectionTitle}}</span>
						</div>
						
					</v-list-item-content>

					<v-card-actions >
						<v-btn color="blue  lighten-5">
							<span class="font-weight-bold blue--text">关注专题</span>
						</v-btn>
					</v-card-actions>
				</v-list-item>
				
			</v-card>
		</div>



	</div>
</template>

<script>
	export default {
		data() {
			return {
				AllSpecial: []
			}

		},
		methods: {
			getAllSpecial(){
				this.axios({
					method: 'get',
					url: this.GLOBAL.baseUrl + '/special/all',
				}).then(res => {
					this.AllSpecial = res.data.data;
					console.log(res.data.data[5].sections[0].sectionTitle);
				})
			}
			
			
		},
		created() {
			this.getAllSpecial()
		}
	}
</script>

<style scoped="scoped">
	.hy-special-container {
		height: 1000px;
		width: 100%;
	}

	.hy-special-content-row {
		height: 200px;
		width: 98%;
		margin: 1% 0 0 0;
		padding: 1%;
		display: flex;
		/* border: 1px solid #e0e0e0; */
		/* font-size: 14px; */
	}

	.img {
		width: 90%;
		border-radius: 5%;
		height: 100%;
		margin: 1%;
	}
	.hy-special-smalltips{
		font-size: 12px;
		background-color: #e0e0e0;
		border-radius: 9%;
		color: #9e9e9e;
		margin: 1%;
	}
</style>
