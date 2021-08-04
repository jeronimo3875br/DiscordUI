<template>
    <div class="userInfo">
        <div class="profile">
            <div class="avatar"></div>
            <div class="userData">
                <strong>Jerônimo</strong>
                <span>#3875</span>
            </div>
        </div>
        <div class="actions">
            <MicIcon :size="20" />
            <HeadPhonesIcon :size="20" />
            <SettingsIcon :size="20" />
        </div>
    </div>
</template>

<script>

    import MicIcon from "vue-material-design-icons/Microphone";
    import HeadPhonesIcon from "vue-material-design-icons/Headphones";
    import SettingsIcon from "vue-material-design-icons/CogOutline";

    export default {
        components: {
            MicIcon,
            HeadPhonesIcon,
            SettingsIcon
        }
    };
</script>

<style scoped>
.userInfo {
    grid-area: UI;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: var(--quaternary);
    box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
}

.profile {
    display: flex;
    align-items: center;
}

.avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--grey);
}

.userData {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
    font-size: 13px;
}

.userData strong {
    display: block;
    color: var(--white);
}

.userData span {
    color: var(--grey);
}

.actions {
    color: var(--grey);
}

.actions span {
    cursor: pointer;
    transition: .2s;
    margin-left: 4px;
}

.actions span:hover {
    color: var(--white);
}
</style>