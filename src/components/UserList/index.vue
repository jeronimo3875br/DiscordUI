<template>
    <div class="container">
        <div class="state">Disponível - 1</div>
        <User nickname="Bruno Mello" isBot/>
        <User nickname="Pedro Henrique" />
        <User nickname="Armando Antunes" />
        <User nickname="Marcus Neves" />
        <User nickname="Paulo Henrique" />
        <dv class="state">Offline - 18</dv>
        <User nickname="Sistema" v-for="sistema in 20" :key="sistema" />
    </div>
</template>

<script>

    import User from "./User.vue";

    export default {
        components: {
            User
        }
    }
</script>

<style scoped>
.container {
    grid-area: UL;
    display: flex;
    flex-direction: column;
    padding: 3px 6px 10px 16px;
    background-color: var(--secondary);
    max-height: calc(100vh - 46px);
    overflow-y: scroll;
}

.container::-webkit-scrollbar {
    width: 4px;
}

.container::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
}
.container::-webkit-scrollbar-track {
    background-color: var(--secondary);
}

.state {
    margin-top: 20px;
    color: var(--grey);
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
}
</style>