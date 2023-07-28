<script>
    export let items = [
        {
            name: 'Home',
            icon: 'home',
            href: '#'
        },
        {
            name: 'About',
            icon: 'user',
            href: '#about'
        },
        {
            name: 'Contact',
            icon: 'phone',
            href: '#contact'
        }
    ];
</script>

<ul>
    {#each items as item }
        <li>
            <a href={item.href}>
                {item.name}
            </a>
        </li>
    {/each}
</ul>
