<!-- 首页的热榜页面 -->
<template>
	<div class="hy-hot-container ml-1 pos-rel fill-white">
		<div class="hy-hot-top">
			<div class="hy-hot-top-littleBox d-flex border-bottom justify-content-between align-items-center">
				<div class="d-flex">
					<div class="my-2 ml-5" v-for="(single,index) in tabTitle" :key="index" >
						<!-- :class="{active :count==index}" -->
						<v-btn depressed small   :class="count==index?'hy-hot-top-btn-more ':'hy-hot-top-btn-base '" @click="change(index)">{{single}}</v-btn>
					</div>
				</div>
				<div class="text-center mr-5">
					<v-btn rounded color="#9099b0" outlined small dark @click="fold=!fold">
						展开
						<svg class="Zi Zi--ArrowDown HotListNav-expandButtonIcon" width="10" height="10" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
							 fill-rule="evenodd"></path>
						</svg>
					</v-btn>
				</div>
			</div>

			<div class="hy-hot-top-largeBox fill-white pos-abs border-bottom" v-if="fold">
				<!-- 展开弹框内容第一行 -->
				<div class="p-3 justify-content-between d-flex">
					<div>
						<span class="font-weight-bold mr-5">我的榜单</span>
						<span style="color: #9099b0;">拖动调整顺序</span>
					</div>
					<div class="text-center mr-1">
						<v-btn rounded color="#9099b0" outlined small dark @click="fold=!fold">
							收起
							<svg class="Zi Zi--ArrowUp HotListNav-expandButtonIcon" width="10" height="10" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 11l-3.716 3.782a.758.758 0 0 1-1.064 0 .738.738 0 0 1 0-1.052l4.249-4.512a.758.758 0 0 1 1.064 0l4.246 4.512a.738.738 0 0 1 0 1.052.757.757 0 0 1-1.063 0L12.002 11z"
								 fill-rule="evenodd"></path>
							</svg>
						</v-btn>
					</div>
				</div>
				<!-- 第二行 -->
				<div class="d-flex">
					<div class="my-2   ml-5" v-for="(single,index) in tabTitle" :key="index">
						<v-btn depressed small color="#f6f6f6" style="color: #9099b0;">{{single}}</v-btn>
					</div>
				</div>
				<!-- 第三行 -->
				<div class="p-3">
					<span class="font-weight-bold mr-5">推荐榜单</span>
					<span style="color: #9099b0;">拖动添加至我的榜单</span>
				</div>
				<!-- 第四行 -->
				<div class="d-flex">
					<div class="my-2   ml-5">
						<v-btn depressed small color="#f6f6f6" style="color: #9099b0;">校园</v-btn>
					</div>
					<div class="my-2   ml-5">
						<v-btn depressed small color="#f6f6f6" style="color: #9099b0;">汽车</v-btn>
					</div>
				</div>
				<!-- 第五行 -->
				<div class="d-flex justify-content-end">
					<div class="my-2 mr-5">
						<v-btn outlined color="#9099b0">取消</v-btn>
					</div>
					<div class="my-2 mr-5">
						<v-btn depressed color="#0084ff">确认</v-btn>
					</div>
				</div>
			</div>

		</div>
		<div class="hy-hot-content" v-for="(single,index) in content[count]" :key="index">
			<!-- 热门页面有图行类型 -->
			<div class="hy-hot-content-firstrow d-flex pos-rel border-bottom fill-white" v-if="single.children[0].thumbnail">
				<div class="hy-hot-first-left  d-flex p-3" style="width: 70%;">
					<div class="hy-hot-first-left-num d-flex justify-content-center" style="width: 5%;">
						<span :class="index<3?'hy-hot-headline hy-hot-topNum':'hy-hot-headline'">{{index+1}}</span>
					</div>
					<div class="hy-hot-first-left-content ml-3" style="width: 95%;">
						<a class="hy-hot-headline" :href="'https://www.zhihu.com/question/' + single.target.id">{{single.target.title}}</a>
						<div>
							<span>{{single.target.excerpt.substring(0,25)}}...</span>
						</div>
						<div class="pos-abs" style="bottom: 6%;">
							<span class="mr-5">
								<svg class="Zi Zi--Hot"  fill="#a5b2ca" viewBox="0 0 24 15" width="18" height="18">
									<defs>
										<linearGradient id="id-2014200654-a" x1="63.313%" x2="46.604%" y1="-13.472%" y2="117.368%">
											<stop offset="2.35%" stop-color="#a5b2ca"></stop>
											<stop offset="100%" stop-color="#a5b2ca"></stop>
										</linearGradient>
									</defs>
									<path fill="url(#id-2014200654-a)" d="M14.553 20.78c.862-.651 1.39-1.792 1.583-3.421.298-2.511-.656-4.904-2.863-7.179.209 2.291.209 3.73 0 4.314-.41 1.143-1.123 1.983-1.91 2.03-1.35.079-2.305-.512-2.863-1.774-.676 1.25-.782 2.556-.318 3.915.31.906.94 1.684 1.89 2.333C7.144 20.131 5 17.336 5 14.022c0-2.144.898-4.072 2.325-5.4.062 2.072.682 3.598 2.13 4.822-.67-1.112-.734-2.11-.734-3.517 0-3.253 2.067-6.007 4.913-6.927a7.35 7.35 0 0 0 2.157 4.918C17.722 9.214 19 11.463 19 14.022c0 3.073-1.844 5.7-4.447 6.758z"
									 fill-rule="evenodd"></path>
								</svg>
								{{single.detail_text}}
							</span>
							<span class="ml-5">
								<svg class="Zi Zi--Share Button-zi" fill="#a5b2ca" viewBox="0 0 24 15" width="1.2em" height="1.2em">
									<path d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z"
									 fill-rule="evenodd"></path>
								</svg>
								分享</span>
						</div>
					</div>
				</div>
				<!-- 图片 -->
				<div class="mt-3 mr-2" style="width: 30%;height: 80%;">
						<img :src="single.children[0].thumbnail"  style="border-radius: 3%;">
				</div>
			</div>
			<!-- 热门页面无图行类型 -->
			<div class="hy-hot-content-secondrow d-flex pos-rel border-bottom fill-white p-3" v-else>
				<div class="hy-hot-content-second-left" style="width:5%;" >
					<div class="hy-hot-first-left-num d-flex justify-content-center" style="width: 60%;" >
						<span :class="index<3?'hy-hot-headline hy-hot-topNum':'hy-hot-headline'">{{index+1}}</span>
					</div>
				</div>
				<div class="hy-hot-content-second-right" style="width: 95%;">
					<a class="hy-hot-headline" :href="'https://www.zhihu.com/question/' + single.target.id">{{single.target.title}}</a>
					<div>
						<span>{{single.target.excerpt.substring(0,40)}}...</span>
					</div>
					<!-- 尾注 -->
					<div class="pos-abs" style="bottom: 8%;">
						<span class="mr-5">
							<svg class="Zi Zi--Hot"  fill="#a5b2ca" viewBox="0 0 24 15" width="18" height="18">
								<defs>
									<linearGradient id="id-2014200654-a" x1="63.313%" x2="46.604%" y1="-13.472%" y2="117.368%">
										<stop offset="2.35%" stop-color="#a5b2ca"></stop>
										<stop offset="100%" stop-color="#a5b2ca"></stop>
									</linearGradient>
								</defs>
								<path fill="url(#id-2014200654-a)" d="M14.553 20.78c.862-.651 1.39-1.792 1.583-3.421.298-2.511-.656-4.904-2.863-7.179.209 2.291.209 3.73 0 4.314-.41 1.143-1.123 1.983-1.91 2.03-1.35.079-2.305-.512-2.863-1.774-.676 1.25-.782 2.556-.318 3.915.31.906.94 1.684 1.89 2.333C7.144 20.131 5 17.336 5 14.022c0-2.144.898-4.072 2.325-5.4.062 2.072.682 3.598 2.13 4.822-.67-1.112-.734-2.11-.734-3.517 0-3.253 2.067-6.007 4.913-6.927a7.35 7.35 0 0 0 2.157 4.918C17.722 9.214 19 11.463 19 14.022c0 3.073-1.844 5.7-4.447 6.758z"
								 fill-rule="evenodd"></path>
							</svg>
							{{single.detail_text}}
						</span>
						<span class="ml-5">
							<svg class="Zi Zi--Share Button-zi" fill="#a5b2ca" viewBox="0 0 24 15" width="1.2em" height="1.2em">
								<path d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z"
								 fill-rule="evenodd"></path>
							</svg>
							分享</span>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabTitle: ['全站', '科学', '数码', '体育', '时尚', '影视'],
				category:['total','science','digital','sport','fashion','film'],
				content:[[],[],[],[],[],[]],
				fold: false,
				count:0
			}
		},
		methods: {
			getTotal(){
				this.axios.get('/api/hot-lists/total').then(res=>{
					// console.log(res.data.data.data)
					this.content.splice(0,0,res.data.data.data)
					// console.log(this.content)
				})
			},
			getDigital(){
				this.axios.get('/api/hot-lists/digital').then(res=>{
					this.content.splice(2,0,res.data.data.data)
				})
			},
			getFashion(){
				this.axios.get('/api/hot-lists/fashion').then(res=>{
					this.content.splice(4,0,res.data.data.data)
				})
			},
			getFilm(){
				this.axios.get('/api/hot-lists/film').then(res=>{
					this.content.splice(5,0,res.data.data.data)
				})
			},
			getScience(){
				this.axios.get('/api/hot-lists/science').then(res=>{
					this.content.splice(1,0,res.data.data.data)
				})
			},
			getSport(){
				this.axios.get('/api/hot-lists/sport').then(res=>{
					this.content.splice(3,0,res.data.data.data);
				})
			},
			change(index){
				this.count = index;
				let param = this.category[this.count];
				this.axios.get('/api/hot-lists/'+param).then(res=>{
					this.content.splice(this.count,1,res.data.data.data)
					// console.log(this.content);
				})
				if(param == 'total'){
					this.$router.push('/home/hot')
				}
				else{
					this.$router.push('/home/hot?list='+param)
				}
			}
		},
		created() {
			this.getTotal()
		}
	}
</script>

<style scoped="scoped">
	.hy-hot-headline{
		font-weight: 600;
		font-size: 18px;
		color: black;
	}
	.hy-hot-topNum{
		color: #ff9607;
	}
	.hy-hot-container {
		width: 100%;
	}

	.hy-hot-top-littleBox {
		height: 70px;
	}

	.hy-hot-top-largeBox {
		width: 100%;
		height: 255px;
		top: 5px;
		z-index: 10;
	}

	.hy-hot-content {
		width: 100%;
	}

	.hy-hot-content-firstrow {
		width: 100%;
		height: 140px;
		/* background-color: green; */
	}
	.hy-hot-content-secondrow{
		width: 100%;
		height: 140px;
	}
	.hy-hot-content-second-left{
		
	}
	.hy-hot-content-second-right{}
	.hy-hot-top-btn-base{
		color: #9099b0;
	}
	.hy-hot-top-btn-more{
		font-weight: 800;
		color: #0084ff;
	}
</style>
