<template>
    <div class="serverButton" :class="{'serverButton-isHome': isHome, 'serverButton-hasNotification': hasNotification}">
        <img src="../../assets/images/discord.svg" alt="button-image" v-if="isHome"/>
        <div class="mentions" v-if="mentions">{{ mentions }}</div>
    </div>
</template>

<script>
    export default {
        props: {
            isHome: Boolean,
            mentions: Number,
            hasNotification: Boolean
        }
    }
</script>

<style scoped>
.serverButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: var(--primary);
    transition: .2s;
    margin-bottom: 8px;
    cursor: pointer;
    flex-shrink: 0;
}

.serverButton:hover {
    border-radius: 15px;
    background-color: var(--discord);
}

.serverButton img {
    width: 25px;
    height: 25px;
    color: #ffffff;
}

.serverButton-isHome {
    background-color: var(--discord);
}

.serverButton-isHome:hover {
    border-radius: 16px;
    background-color: var(--discord);
}

.serverButton-hasNotification::before {
    content: "";
    display: block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: var(--white);
    position: relative;
    left: -37px;
    flex-shrink: 0;
}

.mentions {
    background-color: var(--notification);
    width: auto;
    height: 24px;
    padding: 1px 4px;
    position: relative;
    bottom: -14px;
    right: -13px;
    border-radius: 12px;
    border: solid 4px var(--tertiary);
    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);
}
</style>