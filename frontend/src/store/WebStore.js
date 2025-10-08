import { defineStore } from 'pinia'

export const useWebStore = defineStore('WebStore', {
    state: () => ({
        name: 'Favour Ejakpevweoghene',
        logo: '/logo.png',
        users: [],
        news: [
            {
                id: Math.floor((Math.random() * 10000) + 1),
                image: '/newspaper.svg',
                author: 'Victor B. Boulhavkh',
                date: '25 Oct',
                title: 'The B Team',
                info: 'We have seen students bother about their pcs and we have tried to help them out. Many of them have problems with their personal workstation and it is no good. I know there is more in them but with limited resources they can only do much'
            },
            {
                id: Math.floor((Math.random() * 10000) + 1),
                image: '/newspaper.svg',
                author: 'Haeman Freedmond',
                date: '25 Oct',
                title: 'Taking after the best, not witstanding',
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
                author: 'Berner Seaman',
                date: '27 Oct',
                title: 'Taking a Senior Developer role',
                info: 'Today we have alot of vibe coders and what do you know, you might be one. Many of them have problems with their personal workstation and it is no good. I know there is more in them but with limited resources they can only do much'
            },
            {
                id: Math.floor((Math.random() * 10000) + 1),
                image: '/newspaper.svg',
                author: 'Victor B. Boulhavkh',
                date: '25 Oct',
                title: 'The B Team',
                info: 'We have seen students bother about their pcs and we have tried to help them out. Many of them have problems with their personal workstation and it is no good. I know there is more in them but with limited resources they can only do much'
            },
            {
                id: Math.floor((Math.random() * 10000) + 1),
                image: '/newspaper.svg',
                author: 'Haeman Freedmond',
                date: '25 Oct',
                title: 'Taking after the best, not witstanding',
                info: 'We have seen students bother about their pcs and we have tried to help them out. Many of them have problems with their personal workstation and it is no good. I know there is more in them but with limited resources they can only do much'
            }
        ]
    }),
    getters: {
        getUsersCount: (state) => state.users.length
    },
    actions: {
        // State functions go in here
    async  fetchUsers () {
            try {
                const res = await fetch("http://localhost:3000/", {
                    method: "GET",
                    headers: { 
                        "Content-Type": "application/json"
                    }
                });
                if (!res.ok) throw new Error(`Fetch failed: ${res.status}`)
                const data = await res.json()
                this.users = Array.isArray(data) ? data : []
                return this.users
            } catch (err) {
                console.error("fetchUsers error: ", err)
                this.users = []
                return []
            }
        }
    }
})