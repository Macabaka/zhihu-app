<!-- 所有专题页面 -->
<template>
	<div>
		<div class="hy-special-content-row p-1 d-flex" v-for="(special,index) in AllSpecial" :key="index">
			
			<v-card class="mx-auto" outlined>
				<v-list-item three-line>
					<div class="m-4" style="width: 30%;">
						<v-img class="align-end" height="130px"  :src="special.banner">
						</v-img>
					</div>

					<v-list-item-content>
						<v-list-item-title class="headline mb-0">{{special.title}}</v-list-item-title>
						<v-list-item-subtitle>{{special.updated}}</v-list-item-subtitle>
						<v-list-item-subtitle>{{special.introduction}}</v-list-item-subtitle>
						<div>
							<span class="hy-special-smalltips m-2" v-for="(section,num) in special.sections" :key="num" >{{section.sectionTitle}}</span>
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
	.hy-special-content-row {
		height: 200px;
		margin: 1% 0 0 0;
	}
	.hy-special-smalltips{
		font-size: 12px;
		background-color: #e0e0e0;
		border-radius: 9%;
		color: #9e9e9e;
	}
</style>
