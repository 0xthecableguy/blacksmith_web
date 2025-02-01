<script lang="ts">
	import Chat from '$lib/ChatUI.svelte';
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
        font-family: 'Advent Pro', sans-serif;
    }

		.page-container {
        width: 100vw;
        height: 100vh;
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        align-items: center;
        background-image: url("/background.jpg");
    }
</style>