<template>
	<!-- <p>{{ pokemon }}</p> -->
	<section id="pokemons">
		<div v-for="poke in pokemon">
			{{ poke.name }}
			<a :href="poke.url">
				Lien vers l'API
			</a>
			{{ sprites }}
			<img :src="poke.name.sprites" alt="">
		</div>
	</section>
</template>

<script lang='js'>
import { capitalize, defineComponent } from 'vue'

export default defineComponent({
	name: 'PokeApi',
	components: {
	},
	props: {
		// v-model
		modelValue: {
			default: '',
		},
	},
	emits: {
		// v-model event with validation
		'update:modelValue': (value) => value !== null,
	},
	data() {
		return {
            pokemon : [],
		};
	},
	created() {
    // Simple GET request using fetch
		fetch("https://pokeapi.co/api/v2/pokemon/")
		.then(response => response.json())
		.then(data => {
			data.results.forEach(poke => {
				this.pokemon.push(poke);
			});
		})
		.catch((e)=>(console.log(e)));

		
  	},
	computed: {
		value: {
			get () {
				return this.modelValue;
			},
			set (value) {
				this.$emit('update:modelValue', value);
			},
		},
	},
	watch: {
		modelValue: {
			async handler (_newValue, _oldValue) {
				// do something
			},
			immediate: true
		},
	},
	beforeMount() {
	},
	mounted() {
	},
	updated() {
	},
	beforeUnmount() {
		// stop the wacher on modelValue
		this.$watch('modelValue', () => {}, {});
	},
	methods: {
	},
});
</script>

<style scoped lang="css">
</style>