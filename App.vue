<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-6 offset-2">
                <h1>Things to do!</h1>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-6 offset-2">
                <ul class="list-group">
                    <li class="list-group-item" v-for="task of todos">
                        <input type="checkbox" v-model="task.isCompleted" class="mr-1">
                        <template v-if="task.isCompleted">
                            <del>{{ task.title }}</del>
                            <button class="btn btn-danger btn-sm ml-1" @click="removeTodo(task)">Delete</button>
                        </template>
                        <span v-else>{{ task.title }}</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-6 offset-2">
                <hr>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-6 offset-2">
                <h3>Add new todo</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-6 offset-2">
                <input class="form-control" placeholder="New todo..." v-model="newTodo" @keyup.enter="addTodo">
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-6 offset-2">
                <button class="btn btn-primary" @click="addTodo">Add</button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            todos: [
                {
                    title: 'Buy everything in store',
                    isCompleted: true,
                },
                {
                    title: 'Learn JS',
                    isCompleted: false,
                },
                {
                    title: 'Be Awesome!',
                    isCompleted: true,
                },
            ],
            newTodo: '',
        }
    },
    methods: {
        addTodo() {
            this.todos.push({
                    title: this.newTodo,
                    isCompleted: false,
            });
            this.newTodo = '';
        },
        removeTodo(todo) {
            let index = this.todos.indexOf(todo);
            this.todos.splice(index, 1);
        }
    }
}
</script>