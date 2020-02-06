import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		token:'jkk',
		baseUrl:'http://locclhost:8080/api',
		user:{
			id:1,
			url:'hy',
			nickname:'KingMacabaka',
			avatar:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580882170672&di=310ca26e06b8aaa0c6fea7c7af35fe86&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F12%2F20161012021323_ysvZ2.jpeg'
		}
	},
	mutations:{
		setToken(state,data){
			state.token = data;
		},
		setUer(state,data){
			state.user = data;
		}
	},
	getters:{},
	actions:{},
	modules:{}
	
})