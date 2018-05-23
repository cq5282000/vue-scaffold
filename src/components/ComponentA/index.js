export default {
    data: function() {
        return {
            name: 'ComponentA'
        };
    },
    props: ['props'],
    beforeCreate: function() {
        console.log('ComponentA', 'beforeCreate')
    },
    created: function() {
        console.log('ComponentA', 'created');
    },
    beforeMount: function() {
        console.log('ComponentA', 'beforeMounted');
    },
    mounted: function() {
        console.log('ComponentA', 'mounted');
    },
    computed: {
        computedName: function() {
            return `computed-${this.name}`;
        },
        parentProps: function() {
            return `${this.props}-parentprops`
        }
    }
}