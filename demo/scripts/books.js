const books = Vue.createApp({
    data(){
    return {
        showBooks: true,
        btitle: 'The Hotdog',
        bauthor: 'Kulob',
        year: 2023
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
            }
        }
    });

books.mount('#books')