<!-- 登录页面 -->
<template>
	<div class="hy-login-large">
		<div class="hy-login-container">
			<div class="img pos-abs">
				<img src="../assets/logo.png" alt="" style="background-color:#b8e5f8;">
			</div>
			<div class="hy-login-content pos-abs">
				<v-card class="mx-auto" height="380px">
					<v-tabs>
						<v-tab @click="tochangelogin()">免密码登录</v-tab>
						<v-tab @click="tochangelogin()">密码登录</v-tab>
					</v-tabs>

					<v-container v-if="changelogin==true">
						<v-col cols="12" sm="12">
							<v-text-field label="手机号" single-line></v-text-field>
							<v-text-field label="输入6位短信验证码" single-line>
							</v-text-field>
						</v-col>
					</v-container>



					<v-container v-if="changelogin==false">
						<v-col cols="12" sm="12">
							<v-text-field label="手机号或邮箱" single-line></v-text-field>
							<v-text-field label="密码" single-line></v-text-field>
						</v-col>
					</v-container>

					<v-card-actions style="padding-left: 7%;">
						<div class="my-1">
							<v-btn color="#0084ff" class="white--text " width="320px"> 注册/登录</v-btn>
						</div>
					</v-card-actions>
					<v-list-item-content class="hy-login-content-bottom light-grey">
						<v-list-item-subtitle>未注册手机验证后自动登录</v-list-item-subtitle>
						<v-spacer></v-spacer>
						<v-list-item-subtitle>注册即代表同意《知乎协议》《隐私保护指引》</v-list-item-subtitle>
					</v-list-item-content>
				</v-card>
			</div>


			<div class="hy-login-smallcard pos-abs">
				<v-card class="mx-auto">
					<v-list-item two-line>
						<div class="hy-login-smallcard-content-box ">社交账号登录</div>
						<div class="hy-login-smallcard-content-box ">微信</div>
						<div class="hy-login-smallcard-content-box ">QQ</div>
						<div class="hy-login-smallcard-content-box ">微博</div>
					</v-list-item>
				</v-card>
			</div>

			<div class="hy-login-content-toapp pos-abs mt-5">
				<div class="my-1">
					<v-btn color="#ffffff" class="blue--text " width="380px">下载知乎App</v-btn>
				</div>
			</div>

		</div>

	</div>


</template>

<script>
	export default {
		data() {
			return {
				changelogin: true
			}
		},
		methods: {
			tochangelogin() {
				this.changelogin = !this.changelogin;
			}
		}
	}
</script>

<style scoped>
	.hy-login-large {
		height: 800px;
	}

	.hy-login-container {
		height: 100%;
		background: url(../assets/image/登录界面背景图.png);
		background-color: #b8e5f8;
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;
	}

	.img {
		width: 10%;
		height: 80px;
		top: 4%;
		left: 45%;
	}

	.hy-login-content {
		width: 30%;
		top: 17%;
		left: 35%;
	}

	.hy-login-content-bottom {
		padding: 4%;
	}

	.hy-login-smallcard {
		width: 30%;
		top: 67%;
		left: 35%;
	}
	.hy-login-smallcard-content-box {
		margin: 5%;
		color: gray;
	}

	.hy-login-content-toapp {
		width: 30%;
		top: 73%;
		left: 35%;
	}
</style>
