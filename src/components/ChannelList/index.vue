<template>
    <div class="container">
        <div class="category">
            <div>Canais de texto</div>
            <div class="category-icon">
                <AddCategoryIcon :size="21" />
            </div>
        </div>
        <ChannelButton channelName="chat-livre" />
        <ChannelButton channelName="lol" />
        <ChannelButton channelName="trabalho" />
        <ChannelButton channelName="wildrift" />
        <ChannelButton channelName="csgo" />
        <ChannelButton channelName="animes" />
        <ChannelButton channelName="mangás" />
        <ChannelButton channelName="novels" />
        <ChannelButton channelName="minecraft" />
    </div>
</template>

<script>

    import AddCategoryIcon from "vue-material-design-icons/Plus";

    import ChannelButton from "./ChannelButton.vue";

    export default {
        components: {
            ChannelButton,
            AddCategoryIcon
        }
    }
</script>

<style scoped>
.container {
    grid-area: CL;
    display: flex;
    flex-direction: column;
    background-color: var(--secondary);
    padding: 24px 10px 0 16px;
}

.category {
    display: flex;
    justify-content: space-between;
    color: var(--grey);
    font-size: 12px;
    text-transform: uppercase;
    margin-bottom: 2px;
    font-weight: bold;
}

.category-icon {
    cursor: pointer;
    color: var(--symbol);
}
</style>