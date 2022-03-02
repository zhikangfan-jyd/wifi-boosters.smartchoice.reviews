<template>
  <div class="product-wrapper">
    <div v-for="(product,index) in productList"
         :key="index"
         :class="{'product-item': true, 'first-item': index == 0, 'last-item': index == productList.length - 1}">
      <div v-if="index != productList.length- 1" class="circle">
        <span class="num">{{ index + 1 }}</span>
      </div>
      <div v-if="index == 0" class="corner-box">
        <span class="text">50% Discount Today!</span>
      </div>
      <div v-if="index == productList.length - 1" class="big-title">The Most Popular Wifi-Booster In 2021</div>
      <a :href="product.link" class="product-link-box" target="_blank">
        <div class="product-container">
          <div class="product-container-left">
            <div class="picture-box">
              <img :alt="product.name" :src="product.picture" class="picture">
            </div>
            <div class="desc-list-box">
              <h2 class="product-name">{{ product.name }}</h2>
              <ul class="list-box">
                <li v-for="(item,id) in product.list" :key="id">
                  <span class="icon"></span>
                  <p class="text">{{ item.text }}</p>
                </li>
              </ul>
              <p v-if="index == 0 || index == productList.length - 1" class="buys">More than {{ product.buys }} people
                choose TechPro Today!</p>
            </div>
          </div>
          <div class="product-container-right">
            <p class="good">
              <span
                  class="text">{{
                  index == 0 || index == productList.length - 1 ? 'Excellent' : index == 1 ? 'Very Good' : 'Good'
                }}</span>
              <span v-if="index == 0 || index == productList.length - 1" class="king-icon"></span>
              <span v-if="index == 1" class="good-icon"></span>
            </p>
            <p class="rate-box"><span class="score">{{ product.score }}</span><span>/10</span></p>
            <a :href="product.link" class="btn" target="_blank">
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
          name: 'TechPro',
          picture: require('@/assets/image/wifi/TechPro.png'),
          link: 'https://newest-creation.com/?a=208800&c=23512&s2={clickid}',
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
          id: 4,
          name: 'RangeXTD',
          picture: require('@/assets/image/wifi/RX.png'),
          link: 'https://www.frnchprl.com/88MJP83/4T9WDC1/?uid=5271',
          reviewLink: '',
          buys: 788,
          list: [
            {
              text: 'Boosts WiFi signal dramatically'
            },
            {
              text: 'Increases WiFi coverage in large homes'
            },
            {
              text: 'Lightning-fast data transfer'
            },
            {
              text: 'Easy to install and use'
            },
            {
              text: 'Small and inconspicuous enough'
            },
            {
              text: '30-day money back guarantee'
            }
          ],
          score: '9.5'

        },
        {
          id: 2,
          name: 'Ultra Boost',
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
          score: '9.0'

        },
        {
          id: 3,
          name: 'SuperBoost',
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
          score: '8.8'

        },


        {
          id: 1,
          name: 'TechPro',
          picture: require('@/assets/image/wifi/TechPro.png'),
          link: 'https://newest-creation.com/?a=208800&c=23512&s2={clickid}',
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
  methods: {}

}
</script>

<style lang="less" scoped>
@import url('../assets/css/wifi-product.less');
</style>