<template>
    <div class="container">
        <div id="title">Servidor do Jerônimo</div>
        <div id="icon">
            <ExpandIcon :size="28" />
        </div>
    </div>
</template>

<script>

    import ExpandIcon from "vue-material-design-icons/ChevronDown";

    export default {
        components: {
            ExpandIcon
        }
    };
</script>

<style scoped>
.container {
    grid-area: SN;
    display: flex;
    padding: 12px;
    align-items: center;
    justify-content: space-between;
    background-color: var(--secondary);
    box-shadow: rgb(0 0 0 / 20%) 0px 1px 0px 0px;
    z-index: 2;
}

.container #title {
    color: var(--white);
    font-size: 15px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
}

.container #icon {
    color: var(--white);
    cursor: pointer;
}
</style>