<template>
	<section>
		<div id="meteo">
			<h1>Météo de {{ data.city_info.name }}</h1>
			<p>T° Max du jour : {{ data.fcst_day_0.tmax }}°C</p>
			<p>T° Min du jour : {{ data.fcst_day_0.tmin }}°C</p>
			<p>T° actuelle : {{ data.current_condition.tmp }}°C</p>
			<p>Conditions météo : {{ data.current_condition.condition }}</p>
		</div>
	</section>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Meteo',
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
			data: {},
		};
	},
	created() {
    // Simple GET request using fetch
		fetch("https://prevision-meteo.ch/services/json/toulouse")
		.then(response => response.json())
		.then(data => this.data = data)
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