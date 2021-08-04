<template>
    <div class="container">
        <div class="icon">
            <HashTagIcon :size="22" />
        </div>
        <h1 class="title">chat-livre</h1>
        <div class="separator"></div>
        <div class="description">Canal aberto para conversas</div>
    </div>
</template>

<script>

    import HashTagIcon from "vue-material-design-icons/Pound";

    export default {
        components: {
            HashTagIcon
        }
    }
</script>

<style scoped>
.container {
    grid-area: CI;
    display: flex;
    align-items: center;
    background-color: var(--primary);
    z-index: 2;
    box-shadow: rgb(0 0 0 / 20%) 0px 1px 0px 0px;
    padding: 0 17px;
}

.icon {
    color: var(--symbol);
}

.title {
    color: var(--white);
    margin-left: 9px;
    font-weight: bold;
    font-size: 16px;
    font-weight: bold;
}

.description {
    color: var(--grey);
    font-size: 15px;
}

.separator {
    background-color: var(--white);
    height: 24px;
    width: 1px;
    opacity: 0.2;
    margin: 0 13px;
}
</style>