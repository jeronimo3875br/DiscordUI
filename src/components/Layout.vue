<template>
    <div id="grid">
        <UserList />
        <UserInfo />
        <ServerList />
        <ServerName />
        <ChannelList />  
        <ChannelInfo />
        <ChannelData />
    </div>
</template>

<script>

    import UserList from "./UserList";
    import UserInfo from "./UserInfo";
    import ServerList from "./ServerList";
    import ServerName from "./ServerName";
    import ChannelData from "./ChannelData";
    import ChannelList from "./ChannelList";
    import ChannelInfo from "./ChannelInfo";

    export default {
        components: {
            UserList,
            UserInfo,
            ServerList,
            ServerName,
            ChannelList,
            ChannelInfo,
            ChannelData
        }
    }
</script>

<style>
#grid {
    display: grid;
    height: 100vh;
    grid-template-columns: 71px 240px auto 240px;
    grid-template-rows: 46px auto 52px;
    grid-template-areas: 
        "SL SN CI CI"
        "SL CL CD UL"
        "SL UI CD UL"
    ;
}
</style>