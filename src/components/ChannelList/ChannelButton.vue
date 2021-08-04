<template>
    <div class="channelButton" :class="{ active: selected }">
        <div class="channelInfo">
            <HashTagIcon class="hash-icon" :size="18" />
            <div>{{ channelName }}</div>
        </div>
        <div class="channelActions">
            <InviteIcon class="action-icon" :size="16" />
            <SettingsIcon class="action-icon" :size="16" />
        </div>
    </div>
</template>

<script>

    import HashTagIcon from "vue-material-design-icons/Pound";
    import InviteIcon from "vue-material-design-icons/AccountPlus";
    import SettingsIcon from "vue-material-design-icons/CogOutline";

    export default {
        props: {
            selected: Boolean,
            channelName: String
        },
        components: {
            HashTagIcon,
            InviteIcon,
            SettingsIcon
        }
    }
</script>

<style scoped>
.channelButton {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 4px 4px;
    border-radius: 5px;
    transition: .2s;
    color: var(--senary);
}

.channelButton:hover, .active {
    background-color: var(--quinary);
    color: var(--white);
}

.channelInfo {
    display: flex;
}

.hash-icon {
    margin-right: 4px;
}

.channelActions {
    display: flex;
}

.action-icon {
    transition: .2s;
    color: var(--symbol);
    margin-left: 4px;
}

.action-icon:hover {
    color: var(--white);
}
</style>