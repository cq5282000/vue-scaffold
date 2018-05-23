<template>
    <div>
        <div>qwewqeqwe</div>
        <ul>
            <li v-for="todo in todos" v-bind:key="todo.id">
                <slot v-bind:todo="todo">{{todo.text}}</slot>
            </li>
        </ul>
        <!-- <slot v-bind:querystring="querystring"></slot> -->
    </div>
</template>
<script src="./index.js"></script>
<style src="./index.less"></style>