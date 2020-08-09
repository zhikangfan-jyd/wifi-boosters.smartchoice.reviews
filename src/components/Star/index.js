import Star from './src/Star.vue';

Star.install = (Vue) => {
    Vue.component(Star.name,Star)
}


export default Star;