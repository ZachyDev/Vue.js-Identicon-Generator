// create a vue instance
new Vue({
    el: "#app",
    data: { //describes the initial state of the application
        textInput: ''
    },
    computed: { // turn the data to viewable values/content
        identiconGenerator() {
            return jdenticon.toSvg(this.textInput,200)
        }
    },
    methods: { // functions that change the state of the application
        userInput: function(event) {
            this.textInput = event.target.value;
        }
    }

})