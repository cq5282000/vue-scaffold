<template>
<div>
    <div>
        <button v-on:click="onPlusClick">plus</button>
        <button v-on:click="onMinusClick">minus</button>
        <h3>count: {{count}}</h3>
        <h3>computedCount: {{getterCount}}</h3>
    </div>
    <div>-----------------------------------------------------------------------------------------------</div>
    <div>
        <button v-on:click="fetchInfoClick"><h3>发起fetch请求</h3></button>
        <div>
            请求数据: {{listData}}
        </div>
    </div>
    <div>-----------------------------------------------------------------------------------------------</div>
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
    <div>-----------------------------------------------------------------------------------------</div>
</div>
</template>
<script src="./DetailContainer.js"></script>
<style src="./DetailContainer.less"></style>

