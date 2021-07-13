<template>
    <div>
        <!-- 新增Todo -->
        <input v-model="newTode" type="text" @keyup.enter='addTodo' autofouse placeholder='新增今日待办' autocomplete='off' />

        <!-- todoList列表 -->
        <ul>
            <li v-for="item in filterdTodos" :key="item.id" :class="{completed:item.completed,editing:item===editedTodo}">

                <!--绑定完成状态-->
                <div class="view">
                    <input type="checkbox" v-model="item.completed" />
                    <label @dblclick="editTodo(item)">{{ item.title }}</label>
                    <button @click="removeTodo(item)">X</button>
                </div>

                <!--编辑待办-->
                <input v-todo-focus="item===editedTodo" type="text" class="edit" v-model="item.title" @blur="doneEdit(item)" @keyup.enter="doneEdit(item)" @keyup.escape="cancelEdit(item)" />

            </li>
        </ul>

        <!--过滤-->
        <p class="filters">
            <span @click="visibility = 'all'" :class="{ selected: visibility === 'all' }">All</span>
            <span @click="visibility = 'active'" :class="{ selected: visibility === 'active' }">Active</span>
            <span @click="visibility = 'completed'" :class="{ selected: visibility === 'completed' }">Completed</span>
        </p>

    </div>
</template>

<script>
import { reactive, toRefs, computed, watchEffect } from 'vue'

// 过滤操作
const filters = {
    all(todos) {
        return todos
    },
    active(todos) {
        return todos.filter(todo => !todo.completed)
    },
    completed(todos) {
        return todos.filter(todo => todo.completed)
    },
}

//缓存操作
const todoStorage = {
    fetch() {
        let todos = JSON.parse(localStorage.getItem('vue3-todos') || '[]')
        todos.forEach((todo, index) => {
            todo.id = index + 1
        })
        return todos
    },
    save(todos) {
        localStorage.setItem('vue3-todos', JSON.stringify(todos))
    }
}


export default {
    setup() {
        const state = reactive({
            newTode: '',
            todoList: todoStorage.fetch(),
            beforeEditCache: "", //缓存编辑前的title
            editedTodo: null, //正在编辑的todo
            visibility: 'all',
            filterdTodos: computed(() => {
                return filters[state.visibility](state.todoList)
            })

        })

        function addTodo() {
            state.todoList.push({
                id: state.todoList.length + 1,
                title: state.newTode,
                completed: false
            })
        }
        function removeTodo(item) {
            state.todoList.splice(state.todoList.indexOf(item), 1)
        }
        function editTodo(item) {
            state.beforeEditCache = item.title
            state.editedTodo = item
        }
        function cancelEdit(item) {
            todo.title = state.beforeEditCache
            state.editedTodo = null
        }
        function doneEdit(item) {
            state.editedTodo = null
        }

        watchEffect(() => {
            todoStorage.save(state.todoList)
        })


        return {
            ...toRefs(state),
            addTodo,
            removeTodo,
            editTodo,
            cancelEdit,
            doneEdit
        }
    },
    directives: {
        "todo-focus": (el, { value }) => {
            if (value) {
                el.focus()
            }
        }
    }

}
</script>

<style scoped>
.completed label {
    text-decoration: line-through;
}
.edit,
.view .view {
    display: none;
}
.view,
.editing .edit {
    display: block;
}
.filters > span {
    padding: 2px 4px;
    margin-right: 4px;
    border: 1px solid transparent;
}
.filters > span.selected {
    border-color: rgba(173, 47, 47，0.2);
}
</style>