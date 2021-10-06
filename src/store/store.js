import Vue from 'vue'
import Vuex from 'vuex'
// 引入编辑岗位 vuex 模块
import moduleEditPost from './editPost'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    m_editPost: moduleEditPost
  }
})
