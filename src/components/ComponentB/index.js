export default {
    data: function() {
        return {
            name: 'ComponentB'
        };
    },
    computed: {
        computedName: function() {
            return `compute-${this.name}`
        }
    },
    methods: {
        onButtonClick: function() {
            console.log('buttonClick');
            this.$emit('myevent');
        }
    }
}