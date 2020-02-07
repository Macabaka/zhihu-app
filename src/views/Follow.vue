<!-- 首页关注页面 -->
<template>
	<div class="border-bottom ml-1" style="width: 100%;">
		<div v-for="(moment,index) in momentsList" :key="index" class="border-bottom ">
			<v-list>
				<span class="ml-5 body-1 " style="color: #9099b0;">{{moment.target.question.author.name}}回答了这个问题</span>
				<br>
				<span class="font-weight-black title ml-5">{{ moment.target.question.title }}</span>
				
				<div v-if="!flag[index]">
					
					<div class="ml-5 mt-1 mb-1">
						<v-avatar tile size=30 style="border-radius: 10%;">
							<img :src="moment.target.author.avatar_url" >
						</v-avatar>
						<span class="font-weight-bold ml-2">{{moment.target.author.name}}</span>
						<span class="font-weight caption ml-2" style="color: #9099b0;">{{moment.target.author.headline}}</span>
					</div>
					<!-- 带有视频显示的四行文本内容区 -->
					<div class="hy-moments-card-content d-flex ml-2" v-if="moment.target.thumbnail">
						<div class="col-4">
							<img :src="moment.target.thumbnail" >
						</div>
						<div class="col-8">
							<span style="line-height: 26px;" v-html="moment.target.excerpt.substring(0,105)+'...'">

							</span>
							<a @click="getReadAll(index)">
								阅读全文
								<svg class="Zi Zi--ArrowDown ContentItem-arrowIcon" fill="currentColor" viewBox="8 0 24 18" width="24" height="16">
									<path d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
									 fill-rule="evenodd"></path>
								</svg>
							</a>
						</div>
					</div>

					<!-- 不带视频的两行文本内容区 -->
					<div style="height: 55px;" class="p-2 ml-3" v-if="!moment.target.thumbnail">
						<span v-html="moment.target.excerpt.substring(0,50)+'...'">
						</span>
						<a @click="getReadAll(index)">
							阅读全文
							<svg class="Zi Zi--ArrowDown ContentItem-arrowIcon" fill="currentColor" viewBox="8 0 24 18" width="24" height="16">
								<path d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
								 fill-rule="evenodd"></path>
							</svg>
						</a>
					</div>
				</div>

				<!-- 点击阅读全文出现全部内容 -->
				<div class="pl-5 pr-5 mt-1" v-if="flag[index]">
			
					<p v-html="moment.target.content"></p>
				</div>
				<!-- :class="changetab=='one'?'mr-5 align-items-center  d-flex hy-nav-a-base light-grey  hy-nav-a-more strong':'mr-5 align-items-center d-flex hy-nav-a-base '" -->
				<!-- 隐藏的评论条，如果展开全部按钮被触发，则激活stick属性，默认不激活（跟随上层div） -->
				<div :class="flag[index]?'hy-moments-hideLine pos-sti hy-moments-hideLine-more pl-3' :'hy-moments-hideLine  mt-1 pl-3'">
					<v-btn  class="ma-1 blue--text" depressed color="#d9edff" width=100 height=33>
						<svg class="Zi Zi--TriangleUp VoteButton-TriangleUp" fill="currentColor" viewBox="0 0 24 24" width="10" height="10">
							<path d="M2 18.242c0-.326.088-.532.237-.896l7.98-13.203C10.572 3.57 11.086 3 12 3c.915 0 1.429.571 1.784 1.143l7.98 13.203c.15.364.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H3.955c-1.08 0-1.955-.517-1.955-1.9z"
							 fill-rule="evenodd"></path>
						</svg>
						赞同{{moment.target.voteup_count }}</v-btn>
					<v-btn small class="blue--text" depressed color="#d9edff" height=33 min-width=16>
						<svg class="Zi Zi--TriangleDown" fill="currentColor" viewBox="0 0 24 24" width="10" height="10">
							<path d="M20.044 3H3.956C2.876 3 2 3.517 2 4.9c0 .326.087.533.236.896L10.216 19c.355.571.87 1.143 1.784 1.143s1.429-.572 1.784-1.143l7.98-13.204c.149-.363.236-.57.236-.896 0-1.386-.876-1.9-1.956-1.9z"
							 fill-rule="evenodd"></path>
						</svg>
					</v-btn>
					<span class="mt-5 ml-5 hy-moments-card-span light-grey">
						<svg class="Zi Zi--Comment Button-zi" fill="currentColor" color="#8590a6" viewBox="0 0 25 16" width="1.2em"
						 height="1.2em">
							<path d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z"
							 fill-rule="evenodd"></path>
						</svg>
						{{moment.target.comment_count}}条评论
					</span>
					<span class="mt-5 ml-5 hy-moments-card-span light-grey">
						<svg class="Zi Zi--Share Button-zi" fill="currentColor" color="#8590a6" viewBox="0 0 25 16" width="1.2em" height="1.2em">
							<path d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z"
							 fill-rule="evenodd"></path>
						</svg>
						分享
					</span>
					<span class="mt-5 ml-5 hy-moments-card-span light-grey">
						<svg class="Zi Zi--Star Button-zi" fill="currentColor" color="#8590a6" viewBox="0 0 25 16" width="1.2em" height="1.2em">
							<path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
							 fill-rule="evenodd"></path>
						</svg>
						收藏
					</span>
					<span class="mt-5 ml-5 hy-moments-card-span light-grey">
						<svg class="Zi Zi--Heart Button-zi" color="#8590a6" fill="currentColor" viewBox="0 0 25 16" width="1.2em" height="1.2em">
							<path d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z"
							 fill-rule="evenodd"></path>
						</svg>
						喜欢
					</span>
					<span class="mt-5 offset-l-2 hy-moments-card-span light-grey link" v-if="flag[index]" @click="getPackUp(index)">
						收起
						<svg class="Zi Zi--ArrowDown ContentItem-arrowIcon is-active" color="#8590a6" fill="currentColor" viewBox="6 0 24 10"
						 width="24" height="24">
							<path d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
							 fill-rule="evenodd"></path>
						</svg>
					</span>
				</div>

			</v-list>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				momentsList: [],
				flag: []
			}
		},
		methods: {
			getmoments() {
				this.axios.get('/api/moments').then(res => {
					this.momentsList = res.data.data.data;
					for (var i = 0, len = this.momentsList.length; i < len; i++) {
						this.flag.splice(i, 0, false);
						const regex = new RegExp('<img', 'gi');
						this.momentsList[i].target.content = this.momentsList[i].target.content.replace(regex,
							`<img style="max-width: 100%; height: auto"`);
					}
				})
			},
			// 点击阅读全文触发方法
			getReadAll(index) {
				this.flag.splice(index, 1, true)
			},
			// 点击收起触发方法
			getPackUp(index) {
				this.flag.splice(index, 1, false)
			}

		},
		created() {
			this.getmoments();
		},
		mounted() {

		}
	}
</script>

<style scoped="scoped">
	.hy-moments-card-span {
		font-size: 14px;
	}
	.hy-moments-hideLine {
		height: 45px;
		bottom: 0px;
	}
	/* 如果隐藏功能条出现,那么就加上边框以及背景 */
	.hy-moments-hideLine-more {
		background-color: #ffffff;
	}
	.hy-moments-card-content {
		height: 125px;
	}
</style>
