<script lang="ts">
	import { service } from '$lib/machine';

	// id: string in 4.22.0, id: any in 4.23.0
	const id = $service.context.id;
</script>

<h1>{id}</h1>
