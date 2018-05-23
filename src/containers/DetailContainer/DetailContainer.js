import ComponentA from '../../components/ComponentA/index.vue';
import ComponentB from '../../components/ComponentB/index.vue';
export default {
    data: function() {
        return {
            name: 'DetailContainer',
            sendProps: 'parent',
            inputValue: 'test'
        };
    },
    components: {
        ComponentA,
        ComponentB
    },
    watch: {
        inputValue: function(val) {
            console.log(val)
        }
    },
    methods: {
        onChangeProps: function() {
            this.sendProps = 'son';
            this.inputValue = 'test11111';
        },
        onComponentBClick: function() {
            console.log('componetB parent')
        },
        onInputChange: function(val) {
            console.log(val);
        }
    }
}
