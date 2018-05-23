<template>
<div>
     <div>
        <h1>{{name}}</h1>
        <ComponentA v-bind:props="sendProps"/>
    </div>
    <button v-on:click="onChangeProps">change props</button>
    <ComponentB v-bind:inputValue="inputValue" v-on:myevent="onComponentBClick" v-on:inputevent="onInputChange"/>
</div>
</template>
<script src="./DetailContainer.js"></script>
<style src="./DetailContainer.less"></style>

