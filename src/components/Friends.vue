<template>
	<div>
	<UnAmi 
		v-for="unAmi in lesAmis" 
		:key="unAmi.id"
		:id="unAmi.id" 
		:nom="unAmi.name" 
		:phone="unAmi.phone" 
		:mail="unAmi.email" 
		:premium="unAmi.premium" 
		@monEventPremium="showStatusPremium">
	</UnAmi>
	</div>
</template>

<script lang='js'>
import { defineComponent } from 'vue';
import UnAmi from './UnAmi.vue';

export default defineComponent({
	name: 'Friends',
	components: {
		UnAmi
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
			lesAmis: [
        {
            id: 'lasticot',
            name: 'COCO L ASTICOT',
            phone: '01234 5678 991',
            email: 'coco@lasticot.com',
			premium: false,
        },
        {
            id: 'janine',
            name: 'Janine DeLavega',
            phone: '09876 543 221',
            email: 'janine@delavega.com',
			premium: false,
        },
        {
            id:'jojo',
            name:"jojoLeBarjo",
            phone:'123 12346 24',
            email:'jojo@barjo.com',
			premium: false,
        },
        {
            id:'kimonoSurUnFrigo',
            name:"Steven Seagal",
            phone:'+338765477',
            email:'steven@seagal.com',
			premium: false,
        },
    ],
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
		showStatusPremium(leId){
			let unAmiIdentified = this.lesAmis;
			unAmiIdentified = unAmiIdentified.find(unTruc => unTruc.id === leId);
			unAmiIdentified.premium = !unAmiIdentified.premium;
			// alert("Ca fonctionne au max!");
		}
	},
});
</script>

<style scoped lang="css">
</style>