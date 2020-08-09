<template>
  <div class="star-wrapper">
      <span @click="disabled_1 ? '' : select(index)" @mouseenter="disabled_1 ? '' : enter(index)" :class="item" v-for="(item,index) in this.starClass" :key="index"></span>
  </div>
</template>

<script>
/**
 * （展示）主要思路：
 *  1. 获取用户规定的满分，和传递的分数，进行比例换算
 *  2. 根据比例进行换算具体要显示的星星数量
 *  3. 最终通过控制类名来达到渲染的效果
 */

export default {
    name: 'Star',
    props: {
        //用户传递的分数
        score: {
            type: Number,
            default: 0
        },
        //满分值，默认5分
        max: {
            type: Number,
            default: 5
        },
        //是否只作为显示，默认为true
        disabled: {
            type: Boolean,
            default: true
        },
        //分值改变之后触发，触发该函数，参数为分数
        change: {
            type: Function
        }
    },
    data() {
        return {
            bascisStarNum: 5, //要显示的星星数量
            ratio: 1, //比例，用于折算分数
            starClass: [],
            disabled_1: this.disabled,
            score_1: this.score
        }
    },
    methods: {
        //渲染星星
        renderStar(score) {
            let n = 0;
            let result = [];
            this.ratio = this.max / this.bascisStarNum; //计算出每颗星星表示的分数
            let full_star = Math.floor(score / this.ratio); // 得到显示整颗星星的数量
            
            for (let i = 0; i < full_star; i++) {
                result.push('star-full');
                n += 1;
            }

            //计算多余的分数显示为半颗star
            let half_score = score % this.ratio; 
            if (half_score > 0 && half_score < Math.floor(this.ratio) / 2) {
                result.push('star-half');
                n += 1;
            } else if (half_score >= Math.floor(this.ratio) / 2){
                result.push('star-full');
                n += 1;
            }

            let off_star = this.bascisStarNum - n; //计算空星星数量
            for (let j = 0; j < off_star; j++) {
                result.push('star-off')
            }
            this.starClass = result;
        },
        //鼠标经过
        enter(index) {
            this.score_1 = (index + 1) * this.ratio;
            if (this.score_1 > this.max) {
                this.score_1 = this.max;
            }
            this.renderStar(this.score_1);
        },
        //最终点击选择的分数
        select(index) {
            this.disabled_1 = true;
            this.score_1 = (index + 1) * this.ratio;
            
            this.$emit('change',this.score_1)
        }
    },
    created() {
        this.renderStar(this.score_1)
    }

}
</script>

<style lang="less" scoped>
@import url('./Star.less');
</style>