<template>
    <div>
        <h1>{{name}}</h1>
        <h1>{{computedName}}</h1>
        <h3>{{parentProps}}</h3>
        <div class="slot-style"><slot></slot></div>
    </div>
</template>
<script src="./index.js"></script>
<style src="./index.less"></style>