<script>
    import { getContext, onDestroy } from 'svelte';

    const intersectionContext = getContext('intersection-observer');
    const cleanup = [];
    let root;
    let visible = false;

    onDestroy(() => cleanup.forEach(fn => fn()));

    $: if ($intersectionContext && root) {
        $intersectionContext.observe(root);
        cleanup.push(() => $intersectionContext.unobserve(root));

        $intersectionContext.onIntersect.addEventListener('intersect', onIntersect);
        cleanup.push(() =>
            $intersectionContext.onIntersect
                .removeEventListener('intersect', onIntersect)
        );
    }

    function onIntersect(e) {
        const entries = e.detail;
        const entry = entries.find(entry => entry.target === root);

        if (entry)
            visible = entry.isIntersecting;
    }
</script>

<div bind:this={root} class:show={visible} class:invisible={!visible} class="show transition-all delay-200 container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 h-full">
    <slot></slot>
</div>

<style>

</style>