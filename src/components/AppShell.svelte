<script>

    import { onMount, setContext } from 'svelte';
    import { writable } from 'svelte/store';
  import Sidebar from './Sidebar.svelte';

    const context = setContext('intersection-observer', writable(null));

    onMount(() => {
        const event = new EventTarget();
        const observer = new IntersectionObserver(
            entries => event.dispatchEvent(new CustomEvent('intersect', { detail: entries })),
            { root: null, rootMargin: '0px', threshold: 0 },
        );

        $context = {
            observe: element => observer.observe(element),
            unobserve: element => observer.unobserve(element),
            onIntersect: event,
        };

        return () => observer.disconnect();
    });

</script>

<div class="w-screen h-screen overflow-auto bg-slate-600">
    <Sidebar/>
    <slot/>
</div>

<style>

</style>