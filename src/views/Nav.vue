<!-- 主要导航栏 -->
<template>
	<div>
		<!-- 第一导航栏 -->
		<transition name="main-nav">
			<div class="hy-nav-container d-flex border-bottom fill-white pos-fix" v-if="changeNav">
				<div class="hy-nav-container-img">
					<svg viewBox="0 0 200 91" class="Icon ZhihuLogo ZhihuLogo--blue Icon--logo" width="64" height="30" aria-hidden="true"
					 style="height: 30px; width: 64px;">
						<title></title>
						<g>
							<path d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z"
							 fill-rule="evenodd"></path>
						</g>
					</svg>
				</div>
				<router-link to="/home" class="hy-nav-a-base">
					首页
				</router-link>
				<router-link to="/explore" class="hy-nav-a-base">
					发现
				</router-link>
				<router-link to="/question/waiting" class="hy-nav-a-base">
					等你来答
				</router-link>
				<router-link  to="/login" class="hy-nav-a-base">
					登录
				</router-link>
				
				<div class="d-flex align-items-center">
					
					  <div class="text-center">
					    <v-menu offset-y>
					      <template v-slot:activator="{ on }">
					      <div class="mt-1"  >
					      	<input type="text" style="" class="hy-top-input input pl-2" placeholder="一个人的正版电影能共享吗" v-on="on">
					      </div>
					      </template>
					      <v-list>
					        <v-list-item
					          v-for="(item, index) in news"
					          :key="index"
					        >
					          <v-list-item-title>{{ item.title }}
							  <svg class="Zi Zi--Hot" v-if="index>0&&index<4" fill="currentColor" viewBox="0 -5 24 24" width="18" height="18"><defs><linearGradient id="id-2014200654-a" x1="63.313%" x2="46.604%" y1="-13.472%" y2="117.368%"><stop offset="2.35%" stop-color="#EC471E"></stop><stop offset="100%" stop-color="#FF6DC4"></stop></linearGradient></defs><path fill="url(#id-2014200654-a)" d="M14.553 20.78c.862-.651 1.39-1.792 1.583-3.421.298-2.511-.656-4.904-2.863-7.179.209 2.291.209 3.73 0 4.314-.41 1.143-1.123 1.983-1.91 2.03-1.35.079-2.305-.512-2.863-1.774-.676 1.25-.782 2.556-.318 3.915.31.906.94 1.684 1.89 2.333C7.144 20.131 5 17.336 5 14.022c0-2.144.898-4.072 2.325-5.4.062 2.072.682 3.598 2.13 4.822-.67-1.112-.734-2.11-.734-3.517 0-3.253 2.067-6.007 4.913-6.927a7.35 7.35 0 0 0 2.157 4.918C17.722 9.214 19 11.463 19 14.022c0 3.073-1.844 5.7-4.447 6.758z" fill-rule="evenodd"></path></svg>
							  </v-list-item-title>
							  
					        </v-list-item>
					      </v-list>
					    </v-menu>
					  </div>
					  
					<v-btn depressed class="blue white--text mt-1 ml-4" min-width=32 width=55 height=34  style>提问</v-btn>
				</div>
				
				<div class="d-flex pos-abs" style="width: 15%;justify-content: space-around;align-items: center;right: 7%;">
					<div class="hy-nav-top-icons link">
						<svg class="Zi Zi--Bell" fill="currentColor" viewBox="0 -2 24 24" width="22" height="22">
							<path d="M4.523 15.076l.804-6.757a6.753 6.753 0 0 1 4.945-5.7 1.823 1.823 0 0 1 3.623 0 6.753 6.753 0 0 1 4.945 5.7l.804 6.757a2.293 2.293 0 0 0 1.712 2.108 1.093 1.093 0 0 1-.297 2.15H3.108a1.093 1.093 0 0 1-.297-2.15 2.293 2.293 0 0 0 1.712-2.108zM12.083 23a2.758 2.758 0 0 1-2.753-2.509.229.229 0 0 1 .232-.24h5.043a.229.229 0 0 1 .232.24 2.759 2.759 0 0 1-2.753 2.51z"></path>
						</svg>
					</div>
					<div class="hy-nav-top-icons link">
						<svg class="Zi Zi--Comments" fill="currentColor" viewBox="0 -2 24 24" width="22" height="22">
							<path d="M11 2c5.571 0 9 4.335 9 8 0 6-6.475 9.764-11.481 8.022-.315-.07-.379-.124-.78.078-1.455.54-2.413.921-3.525 1.122-.483.087-.916-.25-.588-.581 0 0 .677-.417.842-1.904.064-.351-.14-.879-.454-1.171A8.833 8.833 0 0 1 2 10c0-3.87 3.394-8 9-8zm10.14 9.628c.758.988.86 2.009.86 3.15 0 1.195-.619 3.11-1.368 3.938-.209.23-.354.467-.308.722.12 1.073.614 1.501.614 1.501.237.239-.188.562-.537.5-.803-.146-1.495-.42-2.546-.811-.29-.146-.336-.106-.563-.057-2.043.711-4.398.475-6.083-.927 5.965-.524 8.727-3.03 9.93-8.016z"
							 fill-rule="evenodd"></path>
						</svg>
					</div>
					<!-- 导航栏点击出现菜单 -->
					<div class="text-center">
					    <v-menu offset-y >
					      <template v-slot:activator="{ on }">
							<v-avatar tile size="34" style="border-radius: 10%;" v-if="token" v-on="on" class="link">
							  <img
							    :src="user.avatar"
							  >
							</v-avatar>
							<router-link v-else to="/login" class="hy-nav-a-base">
								登录
							</router-link>
					      </template>
					      <v-list >
					        <v-list-item
					          v-for="(item, index) in items"
					          :key="index"
					        >
							<div v-html="icons[index]"></div>
					          <v-list-item-title style="color: #76839b;" class="body-2">{{ item.title }}</v-list-item-title>
					        </v-list-item>
					      </v-list>
					    </v-menu>
					  </div>
				</div>
				
				
			</div>
		</transition>

		<transition name="minor-nav">
			<!-- 第二导航栏 -->
			<div class="hy-hide-bar d-flex border-bottom fill-white pos-fix" v-if="!changeNav">
				<div class="hy-nav-container-img">
					<svg viewBox="0 0 200 91" class="Icon ZhihuLogo ZhihuLogo--blue Icon--logo" width="64" height="30" aria-hidden="true"
					 style="height: 30px; width: 64px;">
						<title></title>
						<g>
							<path d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z"
							 fill-rule="evenodd"></path>
						</g>
					</svg>
				</div>
				<router-link to="/home/recommoned" class="hy-hide-bar-base">
					推荐
				</router-link>
				<router-link to="/home/follow" class="hy-hide-bar-base">
					关注
				</router-link>
				<router-link to="/home/hot" class="hy-hide-bar-base" >
					热榜
				</router-link>
				<div class="d-flex pos-abs align-items-center" style="right: 4%;width: 26%;">
					<div>
						<input type="text" style="" class="hy-top-hidebar-input input pl-3" placeholder="搜索你感兴趣的内容...">
					</div>
					<v-btn depressed class="blue white--text ml-3"  min-width=32 width=55 height=34>提问</v-btn>
				</div>
			</div>
		</transition>

		<div class="fill-light-grey d-flex pos-abs" style="top: 52px;width: 100%;">
			<div style="width: 10%;"></div>
			<div style="width: 90%;">
				<router-view />
			</div>
			<div style="width: 5%;"></div>
			
		</div>
		
		<div class="hy-main-toTop pos-fix">
			<div class="my-2">
				<v-tooltip left>
					<template v-slot:activator="{ on }">
						<v-btn color="#ffffff" fab small tile style="border-radius:12%;" v-on="on">
							<svg class="Zi Zi--Feedback" color="#8590a6" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
								<path d="M19.99 6.99L18 5s-1-1-2-1H8C7 4 6 5 6 5L4 7S3 8 3 9v9s0 2 2.002 2H19c2 0 2-2 2-2V9c0-1-1.01-2.01-1.01-2.01zM16.5 5.5L19 8H5l2.5-2.5h9zm-2 5.5s.5 0 .5.5-.5.5-.5.5h-5s-.5 0-.5-.5.5-.5.5-.5h5z"></path>
							</svg>
						</v-btn>
					</template>
					<span style="font-size: 12px;">建议反馈</span>
				</v-tooltip>
			</div>
		
			<div class="my-2" v-show="toTop">
				<v-tooltip left>
					<template v-slot:activator="{ on }">
						<v-btn color="#ffffff" fab small tile style="border-radius:12%;" v-on="on" @click="goTop()">
							<svg class="Zi Zi--BackToTop" color="#8590a6" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
								<path d="M16.036 19.59a1 1 0 0 1-.997.995H9.032a.996.996 0 0 1-.997-.996v-7.005H5.03c-1.1 0-1.36-.633-.578-1.416L11.33 4.29a1.003 1.003 0 0 1 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.005z"></path>
							</svg>
						</v-btn>
					</template>
					<span style="font-size: 12px;">回到顶部</span>
				</v-tooltip>
			</div>
		
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				changeNav: true,
				token:this.$store.state.token,
				user:this.$store.state.user,
				items: [
				        { title: '我的主页' },
				        { title: '设置' },
				        { title: '退出' },
				      ],
				news:[{title:'知乎热搜'},{title:'全国诊所28060例'},{title:'武汉病毒研究所'},{title:'蝙蝠为何如此毒'},{title:'疫情对高考的影响'},{title:'男子武汉返乡却谎称菲律宾回来'}],
				icons:[
					'<div><svg class="Zi Zi--Profile" fill="#76839b" viewBox="2 0 24 20" width="16" height="16"><path d="M15.417 12.923c-.376.653-.837 1.281-.763 1.863.292 2.273 5.562 1.77 6.78 3.048.566.595.566.664.566 4.164-6.611-.07-13.363 0-20 0 .027-3.5 0-3.478.62-4.164 1.303-1.44 6.581-.715 6.78-3.133.045-.545-.38-1.114-.763-1.778C6.511 9.233 5.697 2 12 2s5.422 7.443 3.417 10.923z" fill-rule="evenodd"></path></svg></div>',
					'<div><svg class="Zi Zi--Settings" fill="#76839b" viewBox="2 0 24 20" width="16" height="16"><path d="M20.868 17.185a.896.896 0 0 1-.452.137c-.123 0-1.397-.26-1.617-.233-1.354.014-1.78 1.276-1.835 1.742-.055.453 0 .892.191 1.303a.8.8 0 0 1-.068.851C16.224 21.877 14.922 22 14.73 22a.548.548 0 0 1-.356-.151c-.11-.096-.685-1.138-1.069-1.468-1.304-.955-2.247-.329-2.63 0-.398.33-.672.7-.836 1.125a.632.632 0 0 1-.329.37c-1.354.426-2.918-.919-3.014-1.056a.564.564 0 0 1-.123-.356c-.014-.138.383-1.276.342-1.688-.342-1.9-1.836-1.687-2.096-1.673a3.192 3.192 0 0 0-.918.178.873.873 0 0 1-.59-.055c-.887-.462-1.136-2.332-1.109-2.51.055-.315.192-.521.438-.604.425-.164.809-.452 1.151-.85.931-1.262.343-2.25 0-2.634-.342-.356-.726-.645-1.15-.809-.138-.041-.234-.151-.33-.316-.38-1.434.613-2.552.867-2.77.255-.22.6-.055.723 0 .425.164.877.219 1.343.15C6.7 6.636 6.784 5.141 6.81 4.908c.014-.247-.11-1.29-.137-1.4a.488.488 0 0 1 .027-.315C7.317 2.178 9.071 2 9.222 2a.56.56 0 0 1 .439.178c.11.124.63 1.111 1 1.4.4.338 1.583.83 2.59.013.397-.274.959-1.29 1.082-1.413A.55.55 0 0 1 14.717 2c1.56 0 2.329 1.029 2.438 1.22a.458.458 0 0 1 .069.371c-.028.151-.329 1.152-.26 1.605.365 1.537 1.383 1.742 1.89 1.783.493.028 1.644-.356 1.809-.343a.63.63 0 0 1 .424.206c.535.31.85 1.715.905 2.14.027.233-.014.439-.11.562-.11.138-1.165.714-1.48 1.112-.855.982-.342 2.25-.068 2.606.26.37 1.22.905 1.288.96.15.137.26.302.315.494.146 1.413-.89 2.387-1.069 2.47zm-8.905-.535c.644 0 1.246-.123 1.822-.356a4.576 4.576 0 0 0 1.493-1.016 4.694 4.694 0 0 0 1-1.495c.247-.562.357-1.18.357-1.81 0-.659-.11-1.262-.356-1.825a4.79 4.79 0 0 0-1-1.481 4.542 4.542 0 0 0-1.494-1.002 4.796 4.796 0 0 0-3.631 0 4.627 4.627 0 0 0-1.48 1.002c-.424.425-.767.919-1 1.481a4.479 4.479 0 0 0-.37 1.825c0 .644.124 1.248.37 1.81a4.62 4.62 0 0 0 1 1.495c.425.426.918.768 1.48 1.016a4.677 4.677 0 0 0 1.809.356z" fill-rule="evenodd"></path></svg></div>',
					'<div><svg class="Zi Zi--Logout" fill="#76839b" viewBox="2 0 24 20" width="16" height="16"><path d="M2 11.999c0-2.756 1.154-5.417 3.167-7.3a1.266 1.266 0 0 1 1.73 1.847 7.396 7.396 0 0 0-2.367 5.453c0 4.119 3.35 7.47 7.47 7.47 4.119 0 7.47-3.351 7.47-7.47a7.41 7.41 0 0 0-2.279-5.37 1.266 1.266 0 0 1 1.76-1.819A9.923 9.923 0 0 1 22 12c0 5.513-4.486 10-10 10s-10-4.487-10-10zm8.699-.482V3.26a1.26 1.26 0 1 1 2.52 0v8.257a1.26 1.26 0 1 1-2.52 0z" fill-rule="evenodd"></path></svg></div>'
				],
				toTop: false
			}
		},
		methods: {
			onScroll() {
				var str = JSON.stringify(this.$route.path);
				if (str.indexOf('/home') == 1) {
					var scrolled = document.documentElement.scrollTop || document.body.scrollTop;
					this.changeNav = scrolled < 168
					this.toTop = scrolled > 168
				}
			}
			,scrollToTop(){
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop ||document.scrollTop;
				this.scrollTop = scrollTop;
				if(scrollTop >300){
					this.toTop = true;
				}else{
					this.toTop = false;					
				}
			},
			// 通过计时器实现返回顶层功能
			goTop(){
				let timer = setInterval(()=>{
					let speed =Math.floor(-this.scrollTop /5);
					document.documentElement.scrollTop = document.body.scrollTop =this.scrollTop+speed;
					if(document.documentElement.scrollTop < 10){
						clearInterval(timer);
					}
				},16)
			}
		},
		created() {},
		mounted() {
			window.addEventListener('scroll',this.scrollToTop);
			this.$nextTick(function(){
				window.addEventListener('scroll', this.onScroll)
			});
		}
	}
</script>

<style scoped>
	.hy-top-input{
		width: 325px;
	}
	.hy-top-hidebar-input{
		width: 180px;
	}

	.hy-nav-container {
		width: 1260px;
		top: 0;
		line-height: 50px;
		height: 52px;
		z-index: 2;
	}
	.hy-hide-bar{
		width: 100%;
		top: 0;
		line-height: 50px;
		height: 52px;
		z-index: 2;
	}

	.hy-nav-a-base {
		margin: auto 1% auto 1%;
		color: grey;
	}
	.hy-hide-bar-base{
		margin: auto 1% auto 2%;
		color: black;
	}

	.hy-nav-container-img {
		height: 55%;
		margin: 1%;
		margin-left: 11%;
		fill: #0084ff;
	}

	.hy-nav-top-icons {
		margin: 5px 0 0 3%;
		color: #8590a6;
	}

	.hy-nav-a-base:hover {
		color: black;
	}

	.hy-nav-container .router-link-active {
		color: black;
		border-bottom: 2px solid #0084ff;
		font-weight: 600;
	}
	.hy-hide-bar .router-link-active{
		color: #0084FF;
	}

	.main-nav-enter-active,
	.main-nav-leave-active {
		transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
	}
	.main-nav-enter,
	.main-nav-leave-to {
		transform: translateY(-52px);
		opacity: 0;
	}
	.minor-nav-enter-active,
	.minor-nav-leave-active {
		transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
	}
	.minor-nav-enter,
	.minor-nav-leave-to {
		transform: translateY(52px);
		opacity: 0;
	}
	.hy-main-toTop {
		bottom: 20px;
		right: 20px;
	}
</style>
