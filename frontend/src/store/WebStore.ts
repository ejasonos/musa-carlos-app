import { defineStore } from 'pinia'

export const useWebStore: Function = defineStore('WebStore', {
    state: () => ({
        name: 'Favour Ejakpevweoghene',
        logo: '/space-awesome.svg',
        news: [
            {
                id: Math.floor((Math.random() * 10000) + 1),
                image: '/newspaper.svg',
                author: 'Joshua Curtey',
                date: '25 Oct',
                title: 'The Junior Developer\'s Dilemma',
                information: 'We have seen students bother about their pcs and we have tried to help them out. Many of them have problems with their personal workstation and it is no good. I know there is more in them but with limited resources they can only do much'
            },
            {
                id: Math.floor((Math.random() * 10000) + 1),
                image: '/newspaper.svg',
                author: 'Joshua Curtey',
                date: '25 Oct',
                title: 'The Junior Developer\'s Dilemma',
                info: 'We have seen students bother about their pcs and we have tried to help them out. Many of them have problems with their personal workstation and it is no good. I know there is more in them but with limited resources they can only do much'
            },
            {
                id: Math.floor((Math.random() * 10000) + 1),
                image: '/newspaper.svg',
                author: 'Joshua Curtey',
                date: '25 Oct',
                title: 'The Junior Developer\'s Dilemma',
                info: 'We have seen students bother about their pcs and we have tried to help them out. Many of them have problems with their personal workstation and it is no good. I know there is more in them but with limited resources they can only do much'
            },
            {
                id: Math.floor((Math.random() * 10000) + 1),
                image: '/newspaper.svg',
                author: 'Joshua Curtey',
                date: '25 Oct',
                title: 'The Junior Developer\'s Dilemma',
                info: 'We have seen students bother about their pcs and we have tried to help them out. Many of them have problems with their personal workstation and it is no good. I know there is more in them but with limited resources they can only do much'
            }
        ]
    }),
    getters: {
        // State functions go in here
    }
})