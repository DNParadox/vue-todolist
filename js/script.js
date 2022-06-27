var app = new Vue( 
    {
        el: '#root',
        data: {
            newTodoText: '',
            todos: [
                {
                    text: 'fare la spesa',
                    done: false
                },
                {
                    text: 'Andare in palestra',
                    done: false
                },
                {
                    text: 'Finire la To Do list',
                    done: false
                },
                {
                    text: 'Chiamare Papà',
                    done: true
                },
            ]                
        },
        methods: {
            addNewTodo() {
                if (this.newTodoText.length > 0) {
                    this.todos.push(
                        {
                            text: this.newTodoText,
                            done: false
                        }
                    );

                  
                    this.newTodoText = '';
                }
            },
            removeTodo(index) {
                this.todos.splice(index, 1);
            },
            clicked(index) {
            //    if (  this.todos[index].done === false) {
                    // console.log(  this.todos[index].done)
                    // this.todos[index].done = true
                    // this.todos[index]
                    // console.log(this.todos[done])
                    // this.todos.done =  true
                    

            //    }

            this.todos[index].done = !this.todos[index].done

            }
        }
    }
);