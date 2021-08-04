<template>
    <div class="container">
        <ServerButton isHome />
        <div id="separator"></div>
        <ServerButton :mentions="5" />
        <ServerButton :mentions="17" />
        <ServerButton />
        <ServerButton hasNotification />
        <ServerButton :mentions="3" hasNotification />
        <ServerButton />
        <ServerButton />
        <ServerButton hasNotification />
        <ServerButton />
        <ServerButton :mentions="73" />
        <ServerButton hasNotification />
        <ServerButton hasNotification />
        <ServerButton />
        <ServerButton />
        <ServerButton />
        <ServerButton />
        <ServerButton />
        <ServerButton hasNotification />
        <ServerButton />
        <ServerButton />
        <ServerButton />
        <ServerButton hasNotification/>
        <ServerButton />
        <ServerButton />
        <ServerButton />
        <ServerButton :mentions="999" />
    </div>
</template>

<script>

    import ServerButton from "./ServerButton.vue";

    export default {
        components: {
            ServerButton
        }
    }
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-area: SL;
    background-color: var(--tertiary);
    max-height: 100vh;
    padding: 10px;
    overflow-y: scroll;
}

.container::-webkit-scrollbar {
    display: none;
}

#separator {
    width: 32px;
    border-bottom: solid 2px var(--quaternary);
    margin-bottom: 8px;
}
</style>