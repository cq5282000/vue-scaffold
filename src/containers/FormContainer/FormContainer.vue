<template>
<div>
    <h1>{{Test}}</h1>
    <ol>
        <li v-bind:key="index" v-for="(item, index) in todos">{{ item.text }}</li>
    </ol>
    <div>
        <button id="button1" @click="onButtonClick">按钮</button>
    </div>
    <input v-model="inputValue" />
    <div class="test-class" v-bind:class="classObj">{{inputResult}}</div>
    <div>
        <div>时间绑定测试</div>
        <button v-on:click="sayHi('hello')">点我测试</button>
    </div>
    <div>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
    </div>
    <div>
        <ComponentC v-bind:todos="todos" v-bind:querystring="querystring">
            <template slot-scope="slotScope">
                {{slotScope.todo.id}}
            </template>
            <!-- <template slot-scope="slotString">
                {{slotString.querystring}}
            </template> -->
        </ComponentC>
    </div>
</div>
</template>
<script src="./FormContainer.js"></script>
<style src="./FormContainer.less"></style>
