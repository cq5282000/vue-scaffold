export default {
    data: function() {
        return {
            name: 'ComponentB',
        };
    },
    props: ['inputValue'],
    // modle: {
    //     props: 'value'
    // },
    computed: {
        computedName: function() {
            return `compute-${this.name}`
        },
        input: {
            get: function() {
                return this.inputValue
            },
            set: function() {
                // return this.
            }
        }
    },
    methods: {
        onButtonClick: function() {
            console.log('buttonClick');
            this.$emit('myevent');
        },
        onInputChange: function(e){
            this.$emit('inputevent', e.target.value)
        }
    }
}