<template>
	<h1>Watchlist</h1>
	<input type="text" v-model="movieType">
	<input @click="addMovie" type="button" value="Ajouter à la liste">
	<h2 v-if="!films[0] && movieType === ''">Veuillez ajouter des films à la liste!</h2>
	<h2 v-else>{{ movieType }}</h2>
	<ul>
		<li @click="deleteMovie(index)" v-for="(film, index) in films">
			{{ index }}
			{{ film }}
		</li>
	</ul>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'TaskList',
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
			films: [],
       		movieType: '',
		};
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
		addMovie(){
			this.films.push(this.movieType);
			this.movieType = '';
		},
		deleteMovie(index){
			this.films.splice(index, 1);
		},
	},
});
</script>

<style scoped lang="css">
</style>