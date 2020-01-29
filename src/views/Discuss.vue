<!-- 所有圆桌页面 -->
<template>
	<div class="hy-discuss-container d-flex pos-rel">
		<div class="hy-discuss-left ba-col-8 d-flex flex-wrap pos-rel">
			<v-card class="mx-auto" max-width="220" max-height="255" style="margin: 2%;" v-for="(discuss,index) in allDiscuss" :key="index">
				<v-img class="white--text align-end" height="200px" :src="discuss.banner">
					<v-card-title>Top 10 Australian beaches</v-card-title>
				</v-img>
				<v-card-subtitle class="pb-4">{{discuss.name}}</v-card-subtitle>
			</v-card>
		</div>

		<div class="hy-discuss-right ba-col-4">
			    <v-col cols="12" sm="10" offset-sm="1">
			      <v-card>
			        <v-list three-line>
			          <template >
			            <v-subheader>主办方</v-subheader>
						
			            <v-list-item>
			              <v-list-item-avatar tile >
			                <img src="../assets/logo.png">
			              </v-list-item-avatar>
						  
			              <v-list-item-content>
			                <v-list-item-title>这个是标题</v-list-item-title>
			                <v-list-item-subtitle>这个是内容</v-list-item-subtitle>
			              </v-list-item-content>
						  
			            </v-list-item>
						
						<v-list-item>
						  <v-list-item-avatar tile >
						    <img src="https://pic1.zhimg.com/50/v2-3645e7ed5f39f47295bd57950e4ecf32_hd.jpg">
						  </v-list-item-avatar>
						  
						  <v-list-item-content>
						    <v-list-item-title>这个是标题</v-list-item-title>
						    <v-list-item-subtitle>这个是内容</v-list-item-subtitle>
						  </v-list-item-content>
						  
						</v-list-item>
						
						<v-list-item>
						  <v-list-item-avatar tile >
						    <img src="https://pic1.zhimg.com/50/v2-a539601f579abf46ab3b47e620340d71_hd.jpg">
						  </v-list-item-avatar>
						  
						  <v-list-item-content>
						    <v-list-item-title>这个是标题</v-list-item-title>
						    <v-list-item-subtitle>这个是内容</v-list-item-subtitle>
						  </v-list-item-content>
						  
						</v-list-item>
						
						<v-list-item>
						  <v-list-item-avatar tile >
						    <img src="https://pic4.zhimg.com/50/v2-b93fb41275d2636ab9c6ab4d7dd91af9_hd.jpg">
						  </v-list-item-avatar>
						  
						  <v-list-item-content>
						    <v-list-item-title>这个是标题</v-list-item-title>
						    <v-list-item-subtitle>这个是内容</v-list-item-subtitle>
						  </v-list-item-content>
						  
						</v-list-item>
						
						
			          </template>
					  
					  
			        </v-list>
			      </v-card>
			    </v-col>
		</div>
	</div>


</template>

<script>
	export default {
	    data: () => ({
	      items: [
	        { header: 'Today' },
	        { avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', title: 'Brunch this weekend?', subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
	        { divider: true, inset: true },
	        { avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend." },
	        { divider: true, inset: true },
	        { avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', title: 'Oui oui', subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" },
	      ],
		  allDiscuss:[]
	    }),
		methods:{
			
			getDiscuss(){
				this.axios({
					methods:'get',
					url:this.GLOBAL.baseUrl+'/roundtable/all'
				}).then(res=>{
					this.allDiscuss=res.data.data;
					console.log(res.data.data);
				})
			}
			
		},
		created() {
			this.getDiscuss()
		}
	  }
</script>

<style scoped="scoped">
	.hy-discuss-container {
		top: 50px;
	}
	.hy-discuss-right {
		width: 30%;
	}
</style>
