<template>
	<section id="props">
		<h2>
			{{ nom }} - 
			{{ premium? "Ami Premium" : "Ami Nul" }}
		</h2>
		<div v-show="show">
			{{ phone }}
		</div>
		<div v-show="show">
			{{ mail }}
		</div>
		<input @click="afficherPremium" type="button" value="Premium ?">
		<input type="button" @click="showMore" :value="displayMsg">
	</section>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'UnAmi',

	components: {
	},

	props: {	
		id:{
			type: String,
			required: true,
		},
		nom:{
            type: String,
            required: true,
		},
		phone:{
            type: String,
            required: true,
		},
		mail:{
            type: String,
            required: true,
		},
		premium:{
            type: Boolean,
            required: false,
            default: false,
            // validator: function(value){return value ==='1' || value ==='0'}
        },
	},

	emits: {
		// v-model event with validation
		'update:modelValue': (value) => value !== null,
	},
	data() {
		return {
			show: false,
			displayMsg: "Afficher plus",
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
		showMore(){
			if(!this.show){
				this.displayMsg = "Masquer"
			}
			else{
				this.displayMsg = "Afficher plus"
			}
			this.show = !this.show;
		},
		afficherPremium(){
			// this.premiumData = !this.premiumData;
			this.$emit("monEventPremium", this.id);
		}
	},
});
</script>

<style scoped lang="css">
</style>