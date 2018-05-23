<template>
    <div>
        <h1>{{name}}</h1>
        <h1>{{computedName}}</h1>
        <button v-on:click="onButtonClick">componentB 点击</button>
        <input v-model="input" v-on:input="onInputChange"/> 
    </div>
</template>
<script src="./index.js"></script>
<style src="./index.less"></style>