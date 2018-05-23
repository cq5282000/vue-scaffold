<template>
<div>
     <div>
        <h1>{{name}}</h1>
        <ComponentA v-bind:props="sendProps">这是一个slot测试</ComponentA>
    </div>
    <button v-on:click="onChangeProps">change props</button>
    <ComponentB v-bind:inputValue="inputValue" v-on:myevent="onComponentBClick" v-on:inputevent="onInputChange">
        <!-- <template slot="slot1"><h1>slot1-></h1></template>
        <template slot="slot2"><h2>slot2======></h2></template> -->
        <div slot="slot1">
            <h1>slot1-----></h1>
            啊231312321312
        </div>
        <template slot-scope="slotScope">
            <div slot="slot2">
                <h2>slot2======></h2>
            </div>
        </template>
    </ComponentB>
</div>
</template>
<script src="./DetailContainer.js"></script>
<style src="./DetailContainer.less"></style>

