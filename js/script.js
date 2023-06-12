const {createApp} = Vue

createApp({
    data(){
        return{
            tasks: [
                {
                    text:'andiamo  mangiare una pizza',
                    done: false
                },
                {
                    text:'guardare la finale di champions',
                    done: false
                },
                {
                    text:'uscire per bere una grappa 903',
                    done: false
                },
                {
                    text:'chiamare Luciano',
                    done: false
                },
                {
                    text:'uscire il cane',
                    done: false
                },
                {
                    text:'fare la spesa',
                    done: false
                },
                {
                    text:'prenotare il viaggio in America',
                    done: false
                },
                {
                    text:'andare dal medico',
                    done: false
                },
                {
                    text:'completare questo esercizio',
                    done: false
                },
            ]

        }
    },
    methods:{
        taskDone(index){
            this.tasks[index].done = !this.tasks[index].done
        },

        taskDelete(index){
            this.tasks.splice(index, 1)
        },

        addTask(){
            let new_task = {
                text: this.txt,
                done: true
            }

            this.tasks.push(new_task);
            this.txt = ''
        }
    }
}).mount('.container')