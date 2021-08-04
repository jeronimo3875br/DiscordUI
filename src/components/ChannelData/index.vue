<template>
    <div class="container">
        <div class="messages">
            <ChannelMessage v-for="servers in 10" :key="servers" author="Sistema" date="25/12/1985">
                Essa é uma mansagem de teste!
            </ChannelMessage>
            <ChannelMessage author="Pedro Henrique" date="Ontem às 20:10">
                Esse Jerônimo é um belo homem, não é?
            </ChannelMessage>
            <ChannelMessage author="Armando Antunes" date="Ontem às 20:12">
                Sim, um rapaz realmente muito belo!
            </ChannelMessage>
            <ChannelMessage author="Marcus Neves" date="Ontem às 20:15">
                E gostoso, vale lembrar
            </ChannelMessage>
            <ChannelMessage author="Paulo Henrique" date="Ontem às 20:25">
                Sim, muito gostoso, quero ser como ele quando crescer
            </ChannelMessage>
            <ChannelMessage author="Bruno  Mello" date="Hoje às 15:30" hasMention isBot>
                <a class="link" href="#">@Jerônimo</a> quando vai sair aquela partida nossa no lolzinho para você me carregar?
            </ChannelMessage>
        </div>
        <div class="input-wrapper">
            <input type="text" placeholder="Conversar em #chat-livre" />
            <div class="icon">
                <AtIcon :size="24" />
            </div>
        </div>
    </div>
</template>

<script>

    import AtIcon from "vue-material-design-icons/At";

    import ChannelMessage from "./ChannelMessage.vue";

    export default {
        components: {
            AtIcon,
            ChannelMessage
        },

        mounted(){
            this.setLastMessage();
        },

        methods: {
            setLastMessage(){
                const messageContainer = document.querySelector(".messages");
                const messageContainerHeight = messageContainer.scrollHeight;
                

                messageContainer.scrollTo({
                    top: messageContainerHeight
                })
            }
        }
    }
</script>

<style scoped>
.container {
    grid-area: CD;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--primary);
    flex: 1;
}

.messages {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 46px - 68px);
    max-height: calc(100vh - 46px - 68px);
    overflow-y: scroll;
}

.messages::-webkit-scrollbar {
    width: 8px;
}
.messages::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
}

.messages::-webkit-scrollbar-track {
    background-color: var(--secondary);
}

.input-wrapper {
    width: 100%;
    padding: 0 16px;
    height: 68px;
}

.input-wrapper input {
    width: 100%;
    height: 44px;
    padding: 0 10px 0 57px;
    border-radius: 5px;
    color: var(--white);
    background-color: var(--chat-input);
    position: relative;
    border: none;
}

.icon {
    color: var(--grey);
    position: relative;
    top: -50%;
    left: 14px;
    transition: ease-out all 0.2s;
    width: 24px;
}

.link {
    text-decoration: none;
    color: var(--link);
}
</style>