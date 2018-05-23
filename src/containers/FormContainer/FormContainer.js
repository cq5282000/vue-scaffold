import ComponentC from '../../components/ComponentC/index.vue';
export default {
    data: function() {
        return {
            Test: 'hello form',
            todos: [
                {
                    id: 'id1',
                    text: '1123123'
                },
                {
                    id: 'id2',
                    text: '1123123'
                },
            ],
            seen: true,
            inputValue: '',
            isActive1: true,
            isActive2: false,
            checked: true,
            querystring: '123123122312'
        }
    },
    beforeCreate: function() {
        console.log('beforeCreate');
    },
    created: function() {
        console.log('created');
    },
    beforeMount: function() {
        console.log('beforeMount');
    },
    mounted: function() {
        console.log('mounted');
    },
    computed: {
        inputResult: function() {
            return this.inputValue
        },
        classObj: function() {
            return {
                'class1': this.isActive1,
                'class2': this.isActive2
            }
        }
    },
    watch: {
        inputValue: function(val) {
            console.log(val)
        }
    },
    methods: {
        onButtonClick: function(e) {
            // console.log(e.target.id);
            // this.todos[0] = 'aaaaaaa';
            this.todos.splice(0, 1, {
                id: '12313',
                text: 'zzzzzzzzzzzzzz'
            })
        },
        sayHi: function(message) {
            console.log(message);
        }
    },
    components: {
        ComponentC
    }
}

