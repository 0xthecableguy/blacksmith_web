<script lang="ts">
	import Chat from '$lib/components/ChatUI.svelte';
</script>

<div class="page-container">
	<Chat />
</div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
        /*font-family: 'Questrial', sans-serif;*/
    }

		.page-container {
        width: 100vw;
        height: 100vh;
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        background-size: cover;
        /*background-position: center;*/
        /*background-repeat: no-repeat;*/
        align-items: center;
        background: rgba(255, 255, 255, 0.7);
        /*background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/chat_component_res/background.jpg");*/
    }
</style>