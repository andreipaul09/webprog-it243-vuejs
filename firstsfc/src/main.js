import { createApp } from 'vue'
import App from './App.vue'

import CommentForm from './components/CommentForm.vue'
import Comment from './components/Comment.vue'
import RestApi from './components/RestApi.vue'

const app = createApp(App)

app.component('comment-form', CommentForm)
app.component('comment', Comment)
app.component('rest-api', RestApi)
app.mount('#app')