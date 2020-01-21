<template>
	<div class="hy-queWaiting-container">
		<div class="hy-queWaiting-container-left ba-col-8">
			<v-col cols="12" sm="11" offset-sm="1">
				<v-card>
					<v-list three-line>
						<template>
							<v-subheader>
								<div class="text-center" style="margin: 1%;">
									<v-btn rounded depressed color="#ebf5ff" class="blue--text">人气问题</v-btn>
								</div>

								<div class="text-center" style="margin: 2%;">
									<v-btn rounded depressed color="#f0f2f4">潜力好文</v-btn>
								</div>

								<div class="text-center" style="margin: 2%;">
									<v-btn rounded depressed color="#f0f2f4">新问题</v-btn>
								</div>

								<div class="text-center" style="margin: 2%;">
									<v-btn rounded depressed color="#f0f2f4">人人答</v-btn>
								</div>
							</v-subheader>
							<v-divider></v-divider>
							<div style="position: relative;">
								<v-list-item>
									<v-list-item-content>
										<v-list-item-title>这个是标题</v-list-item-title>
										<v-list-item-subtitle>这个是内容</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
								<v-btn class="ma-2" outlined color="blue">
									<v-icon left>mdi-pencil</v-icon>写回答
								</v-btn>
								<v-btn class="ma-2" style="border: none;" outlined color="grey">+关注问题</v-btn>
								<v-btn class="ma-2" style="border: none;" outlined color="grey">稍后答</v-btn>
								<span class="font-weight-thin grey--text" style="position: absolute;right: 4%;bottom: 10%;">
									10个回答·3,981个浏览
								</span>
								<v-divider></v-divider>
							</div>

							<div style="position: relative;">
								<v-list-item>
									<v-list-item-content>
										<v-list-item-title>这个是标题</v-list-item-title>
										<v-list-item-subtitle>这个是内容</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
								<v-btn class="ma-2" outlined color="blue">
									<v-icon left>mdi-pencil</v-icon>写回答
								</v-btn>
								<v-btn class="ma-2" style="border: none;" outlined color="grey">+关注问题</v-btn>
								<v-btn class="ma-2" style="border: none;" outlined color="grey">稍后答</v-btn>
								<span class="font-weight-thin grey--text" style="position: absolute;right: 4%;bottom: 10%;">
									10个回答·3,981个浏览
								</span>
								<v-divider></v-divider>
							</div>
							<div style="position: relative;">
								<v-list-item>
									<v-list-item-content>
										<v-list-item-title>这个是标题</v-list-item-title>
										<v-list-item-subtitle>这个是内容</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
								<v-btn class="ma-2" outlined color="blue">
									<v-icon left>mdi-pencil</v-icon>写回答
								</v-btn>
								<v-btn class="ma-2" style="border: none;" outlined color="grey">+关注问题</v-btn>
								<v-btn class="ma-2" style="border: none;" outlined color="grey">稍后答</v-btn>
								<span class="font-weight-thin grey--text" style="position: absolute;right: 4%;bottom: 10%;">
									10个回答·3,981个浏览
								</span>
								<v-divider></v-divider>
							</div>
							<div style="position: relative;">
								<v-list-item>
									<v-list-item-content>
										<v-list-item-title>这个是标题</v-list-item-title>
										<v-list-item-subtitle>这个是内容</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
								<v-btn class="ma-2" outlined color="blue">
									<v-icon left>mdi-pencil</v-icon>写回答
								</v-btn>
								<v-btn class="ma-2" style="border: none;" outlined color="grey">+关注问题</v-btn>
								<v-btn class="ma-2" style="border: none;" outlined color="grey">稍后答</v-btn>
								<span class="font-weight-thin grey--text" style="position: absolute;right: 4%;bottom: 10%;">
									10个回答·3,981个浏览
								</span>
								<v-divider></v-divider>
							</div>
						</template>


					</v-list>
				</v-card>
			</v-col>

		</div>
		<div class="ba-col-4 hy-queWaiting-container-right">
			<div class="hy-queWaiting-container-right-top">

			</div>

			<div class="hy-queWaiting-container-right-mid">

			</div>

			<div class="hy-queWaiting-container-right-bottom">

			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.hy-queWaiting-container {
		width: 100%;
		height: 1000px;
		/* 		background-color: red; */
		display: flex;
	}

	.hy-queWaiting-container-left {
		/* background-color: red */
	}

	.hy-queWaiting-container-right {
		width: 100%;
	}

	.hy-queWaiting-container-right-top {
		height: 260px;
		width: 84%;
		background-color: white;
		margin: 3%;
		border: 1px solid #e0e0e0;
	}

	.hy-queWaiting-container-right-mid {
		height: 70px;
		width: 84%;
		margin: 3%;
		background-color: white;
		border: 1px solid #e0e0e0;
	}

	.hy-queWaiting-container-right-bottom {
		height: 260px;
		width: 84%;
		background-color: white;
		margin: 3%;
		border: 1px solid #e0e0e0;
	}
</style>
