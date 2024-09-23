const ListRendering = {
    data() {
        return {
            todos: [
            { text: 'Clean the House' },
            { text: 'Get ready for school' },
            { text: 'Listen to the professors' }
            ]
        }
    }
}

Vue.createApp(ListRendering).mount('#list-rendering')