import Vue from 'vue'
// const Vue = require('vue');

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
var app = new Vue({
    el: '#app',
    data: {
        title: '这是一个title',
        messages: [
            1,3,4,5
        ],
        inputValue: 'hello vue',
        groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '随便其它什么人吃的东西' }
        ]
    },
    methods: {
        reverseMessage: function() {
            this.messages = this.messages.reverse();
        }
    },
    components: {

    }
})