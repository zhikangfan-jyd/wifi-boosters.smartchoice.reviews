<template>
  <div class="product-wrapper">
      <div :class="{'product-item': true, 'first-item': index == 0, 'last-item': index == productList.length - 1}" v-for="(product,index) in productList" :key="index">
          <div class="circle" v-if="index != productList.length- 1">
              <span class="num">{{index + 1}}</span>
          </div>
          <div class="corner-box" v-if="index == 0">
              <span class="text">50% Discount Today!</span>
          </div>
          <div class="big-title" v-if="index == productList.length - 1">The Most Popular Wifi-Booster In 2020</div>
          <a :href="product.link" @click.stop="handleExecute" target="_blank" class="product-link-box">
            <div class="product-container">
                <div class="product-container-left">
                    <div class="picture-box">
                        <img :src="product.picture" :alt="product.name" class="picture">
                    </div>
                    <div class="desc-list-box">
                        <h2 class="product-name">{{product.name}}</h2>
                        <ul class="list-box">
                            <li v-for="(item,id) in product.list" :key="id">
                                <span class="icon"></span>
                                <p class="text">{{item.text}}</p>
                            </li>
                        </ul>
                        <p class="buys" v-if="index == 0 || index == productList.length - 1">More than {{product.buys}} people choose RangeXTD Today!</p>
                    </div>
                </div>
                <div class="product-container-right">
                    <p class="good">
                        <span class="text">{{index == 0 || index == productList.length - 1 ? 'Excellent': index == 1 ? 'Very Good': 'Good'}}</span>
                        <span class="king-icon" v-if="index == 0 || index == productList.length - 1"></span>
                        <span class="good-icon" v-if="index == 1"></span>
                    </p>
                    <p class="rate-box"><span class="score">{{product.score}}</span><span>/10</span></p>
                    <a :href="product.link" target="_blank" @click.stop="handleExecute" class="btn">
                        <span class="text">Visit Site</span>
                        <span class="icon"></span>
                    </a>
                    <!-- <a :href="product.reviewLink" class="review">Read Our Review</a> -->
                </div>
            </div>
          </a>
      </div>
      
  </div>
</template>

<script>
export default {
    data() {
        return {
            productList: [
                {
                    id: 1,
                    name: 'RangeXTD',
                    picture: require('@/assets/image/wifi/RX.png'),
                    link: 'https://www.frnchprl.com/7QLQCMW/4T9WDC1/?uid=5271',
                    reviewLink: '',
                    buys: 788,
                    list: [
                        {
                            text: 'Up to 300Mbps transfer speeds'
                        },
                        {
                            text: 'Multiple connection modes'
                        },
                        {
                            text: 'Easy plug & play setup'
                        },
                        {
                            text: 'Great quality & affordable price'
                        },
                        {
                            text: '30-day money back guarantee'
                        },
                        {
                            text: 'Blazing fast data transfer'
                        },
                        {
                            text: 'Increases your Wi-Fi coverage'
                        },
                        {
                            text: 'Receive up to 50% OFF'
                        }
                    ],
                    score: '9.8'

                },
                {
                    id: 2,
                    name: 'Ultra boost',
                    picture: require('@/assets/image/wifi/UB.png'),
                    link: 'https://hypertechx.com/ps/wifiultraboost/index.php?net=9785&aff={AFFID}&sid={SUBID}&cid={CLICKID}',
                    reviewLink: '',
                    buys: 788,
                    list: [
                        {
                            text: 'Eliminates dead zones'
                        },
                        {
                            text: 'Easy installation'
                        },
                        {
                            text: 'Secure and practical'
                        },
                        {
                            text: 'Compatible with every internet brand'
                        },
                        {
                            text: 'Faster downloads'
                        }
                    ],
                    score: '9.6'

                },

                {
                    id: 3,
                    name: 'Superboost',
                    picture: require('@/assets/image/wifi/SB.png'),
                    link: 'https://www.frnchprl.com/7QLQCMW/4886H65/?uid=3901',
                    reviewLink: '',
                    buys: 788,
                    list: [
                        {
                            text: 'Extends your Wi-Fi range'
                        },
                        {
                            text: 'Very simple & Easy to use'
                        },
                        {
                            text: 'Seamless smart roaming'
                        },
                        {
                            text: 'Good price after discount'
                        }
                    ],
                    score: '9.3'

                },
                {
                    id: 4,
                    name: 'TriFiBoost',
                    picture: require('@/assets/image/wifi/TB.png'),
                    link: 'https://www.esplma.com/7QLQCMW/56NCCFQ/?uid=6518',
                    reviewLink: '',
                    buys: 788,
                    list: [
                        {
                            text: 'Has 3 Antennas'
                        },
                        {
                            text: 'Blasting a strong, steady signal'
                        },
                        {
                            text: 'Faster 5GHz protocol'
                        },
                        {
                            text: '30-day money back guarantee'
                        }
                    ],
                    score: '9.0'

                },
                {
                    id: 1,
                    name: 'RangeXTD',
                    picture: require('@/assets/image/wifi/RX.png'),
                    link: 'https://www.frnchprl.com/7QLQCMW/4T9WDC1/?uid=5271',
                    reviewLink: '',
                    buys: 788,
                    list: [
                        {
                            text: 'Up to 300Mbps transfer speeds'
                        },
                        {
                            text: 'Multiple connection modes'
                        },
                        {
                            text: 'Easy plug & play setup'
                        },
                        {
                            text: 'Great quality & affordable price'
                        },
                        {
                            text: '30-day money back guarantee'
                        },
                        {
                            text: 'Blazing fast data transfer'
                        }
                    ],
                    score: '9.8'

                },
            ]
        }
    },
    methods: {
        handleExecute() {
            window.execute();
        }
    }

}
</script>

<style lang="less" scoped>
@import url('../assets/css/wifi-product.less');
</style>