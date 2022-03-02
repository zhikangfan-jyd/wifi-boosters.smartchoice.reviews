<template>
  <div class="mosquito-wrapper">
    <div class="maskLayer">
      <div class="mask-content ">
        <span class="close"></span>
        <a :href="mainLink" class="mask-box clearfix" target="_blank">
          <div class="mask-left">
            <img alt="TechPro" class="ad" src="@/assets/image/wifi/TechPro.png">
          </div>
          <div class="mask-right">
            <p class="offer">Limited Time Offer</p>
            <p class="save"><span>SAVE</span><strong>50% MONEY</strong></p>
            <p class="OEI">Offer Expires In</p>

            <div class="date-area">
              <div class="time-box colon">
                <span class="text">Hours</span>
                <div class="time">
                  <span class="hours-decade">0</span>
                  <span class="hours-unit">0</span>
                </div>
              </div>
              <div class="time-box colon">
                <span class="text">Minutes</span>
                <div class="time">
                  <span class="minutes-decade">0</span>
                  <span class="minutes-unit">0</span>
                </div>
              </div>
              <div class="time-box">
                <span class="text">Seconds</span>
                <div class="time">
                  <span class="seconds-decade">0</span>
                  <span class="seconds-unit">0</span>
                </div>
              </div>
            </div>
            <p class="desc">30 Days Money Back Guarantee</p>
            <a :href="mainLink" class="btn" rel="noopener noreferrer" target="_blank">Get the discount today!</a>
          </div>
        </a>
      </div>
    </div>
    <header class="mosquito-header">
      <div class="header-left">
        <img alt="SMART CHOICES" class="logo" src="@/assets/image/logo.png">
        <p class="text">Enjoy Faster Internet Speeds With a WiFi Booster！</p>
      </div>
      <a class="btn" href="/">Top4 WiFi Booster</a>

    </header>
    <section class="banner">
      <div class="banner-container">
        <div class="banner-content">
          <h1 class="g">2022’s TOP 4</h1>
          <h1 class="a">WiFi Booster</h1>
        </div>
      </div>

    </section>
    <main class="container">
      <div class="desc-area">
        <h2 class="area-title">The Best WiFi Booster In 2022</h2>
        <div class="desc-content">
          <p>Whether you are working from home or at the office, a speedy internet connection is a must. Unfortunately,
            most Wi-Fi routers only cover a small part of your home, and often have a very weak signal strength.</p>
          <p>Luckily for you, there is a simple and effective solution to this problem: WiFi Boosters. With WiFi
            Boosters, you easily boost the strength of your Wi-Fi signal, and massively extend the range of your
            wireless network.</p>
          <p>We tested the most popular WiFi Boosters on price, product quality, design, compatibility, speed &
            coverage. </p>
        </div>
      </div>
      <div class="product-area">
        <p class="product-area-title">Here is our Top 4 List for Best WiFi Boosters 2022:</p>
        <WifiProduct/>
      </div>
      <div class="why-area">
        <h2 class="area-title">Why Is TechPro The Best WiFi Booster?</h2>
        <div class="why-container">
          <div class="img-box">
            <div class="img-item">
              <img alt="" class="svg" src="@/assets/image/wifi/sudu.svg">
              <span class="text">Fast Speed</span>
            </div>
            <div class="img-item">
              <img alt="" class="svg" src="@/assets/image/wifi/lianjie.svg">
              <span class="text">Easy Connection</span>
            </div>
            <div class="img-item">
              <img alt="" class="svg" src="@/assets/image/wifi/zhiliang.svg">
              <span class="text">High Quality</span>
            </div>
            <div class="img-item">
              <img alt="" class="svg" src="@/assets/image/wifi/menu.svg">
              <span class="text">Easy to Use</span>
            </div>
          </div>
          <div class="content">
            <p>Each of us has access to a number of devices we use every day, including laptops, tablets, phones, PC’s,
              gaming stations, etc. And of course, everyone wants to log on at the same time.</p>
            <p>Despite assurances from my internet supplier that we were getting the best package for our household,
              there never seemed to be enough bandwidth to keep everyone happy. And some rooms were completely void of
              any signal at all! No one could agree on a fixed schedule for sharing. Fights ensued. Lots of yelling.</p>
            <p>No matter the time of day, which room I was in, or what device I was using, half the time, the internet
              just kept cutting out.></p>
            <p>TechPro is a compact gadget that fits in the palm of your hand. By plugging it into any wall outlet
              within your home, you can effectively boost the range of your current router. He mentioned it had dual
              antennas built-in with a speed up to 300 Mbps.</p>
            <p>Using TechPro, so will no longer have WiFi dead zones in and around your house or office. If you have a
              large house, or want to extend all the way into your garden, we suggest buying multiple TechPro WiFi
              Boosters. The great thing about TechPro is that you can chain them together, creating a massive high
              speed WiFi network! TechPro gives you even more discount if you buy several, so make sure you choose the
              best option for you.</p>
          </div>
        </div>
      </div>
      <div class="special-area">
        <div class="special-container">
          <h3 class="offer">Special Offer on Now!</h3>
          <p class="sub">Now there is a special offer, but such a low price, there may not be much left! </p>
          <p class="sub">So do it now!</p>
          <p class="get-up">Get Up To <span class="big-red">50% OFF</span> Your <strong>TechPro</strong> Today!</p>
          <img alt="" class="picture" src="@/assets/image/wifi/TechPro-special-offer.jpg">
          <a :href="mainLink" class="btn" rel="noopener noreferrer" target="_blank">Get Your TechPro Now!</a>
        </div>
      </div>
      <div class="faq-area">
        <h2 class="area-title">FAQ</h2>
        <div class="question-box">
          <div v-for="(item,index) in questionData" :key="index" class="question-item">
            <h3 class="question-title">{{ item.title }}</h3>
            <div class="question-content" v-html="item.content"></div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import WifiProduct from '@/components/wifi-product.vue'
import $ from 'jquery'

export default {
  components: {
    WifiProduct
  },
  data() {
    return {
      mainLink: 'https://newest-creation.com/?a=208800&c=23512&s2={clickid}',
      questionData: [
        {
          title: 'How Does a Best Wifi Range Extenders Work?',
          content: `<p>Wi-Fi booster can eliminate all dead zones. Even if your house has thick concrete walls and reflective surfaces that slow down your regular router, Wi-Fi booster can tackle this and provide a fast and stable internet connection in all of your rooms. This Best Wifi Range Extenders quickly boosts your Wifi and you’ll notice an instant upgrade in Internet speed and signal strength.</p>`
        },
        {
          title: 'How to Install Your Best Wifi Range Extenders?',
          content: `<p>The Best Wifi Range Extenders are super easy to install and made to function right out of the box. All you have to do to get started is simply plug it in the power socket. After you’ve plugged your Best Wifi Range Extenders in, follow the simple instructions for your device to finalize the installation. Some routers come with an app that you can use to help guide you through the Best Wifi Range Extenders installation process. When setting up your Best Wifi Range Extenders, you’ll have to decide whether to keep the same network name and passcode or choose a different one.</p>`
        },
        {
          title: 'Where in My Home Should I Put My Best Wifi Range Extenders?',
          content: `<p >When picking your Best Wifi Range Extenders’s location, avoid objects that will reflect the signal. This includes microwaves or baby monitors. If you haven’t purchased your Wifi booster yet, there are a few things you can do in the meantime. To boost your Wi-Fi signal, open the door to the room where you have your router. Place the router up, fix it on a wall at a certain height, or on a high shelf. If your router is on lower ground than you’ll be wasting much of its 360-degree signals. Ideally, you should place your router somewhere in the center of your house. It can be hard to find a central location, but this really impacts your Wi-Fi signal. If you’re not able to find a central location, getting a Wi-Fi booster or Wi-Fi extender as soon as possible is the best option.</p>`
        }
      ],
      timer: null,
      timer1: null,
      count: 0
    }
  },
  methods: {
    /**
     * 倒计时
     */
    countDown() {
      //结束时间
      let finishTime = new Date('2022/3/1').getTime();
      let startTime = new Date(new Date().toLocaleDateString()).getTime();
      let intervalTime = 0,
          day = 0,
          hours = 0,
          minutes = 0,
          seconds = 0;
      let that = this;
      this.timer = setInterval(function () {
        if (finishTime - new Date().getTime() <= 0) {
          finishTime = new Date(new Date().toLocaleDateString()).getTime() + 1 * 24 * 60 * 60 * 1000;
        }
        intervalTime = finishTime - new Date().getTime();

        day = Math.floor(intervalTime / (1000 * 60 * 60 * 24));
        hours = Math.floor(intervalTime / (60 * 60 * 1000) % 24) + day * 24;
        minutes = Math.floor(intervalTime / (60 * 1000) % 60);
        seconds = Math.floor(intervalTime / 1000 % 60);
        that.renderTime(hours, minutes, seconds);

      }, 1000)

    },
    renderTime(hours, minutes, seconds) {
      let hoursObj = this.splitCell(hours);
      let minutesObj = this.splitCell(minutes);
      let secondsObj = this.splitCell(seconds);
      $('.hours-decade').text(hoursObj.decade);
      $('.hours-unit').text(hoursObj.unit);
      $('.minutes-decade').text(minutesObj.decade);
      $('.minutes-unit').text(minutesObj.unit);
      $('.seconds-decade').text(secondsObj.decade);
      $('.seconds-unit').text(secondsObj.unit);

    },
    splitCell(num) {
      let unit = Math.floor(num % 10);
      let decade = Math.floor(num / 10);
      return {
        unit: unit,
        decade: decade
      }
    },
    alert() {
      $('.maskLayer').css({
        display: 'block'
      })

      $('.mask-content').animate({
        top: '50%',
        opacity: 1
      }, 400)

    },
    closeAlert() {
      $('.mask-content').animate({
        top: '40%',
        opacity: 0
      }, 400, function () {
        $('.maskLayer').css({
          display: 'none'
        })
      })

      clearInterval(this.timer);
    }
  },
  mounted() {
    this.countDown();
    let that = this;

    this.timer1 = setTimeout(() => {
      $('body').on('mouseenter', function () {
        $('body').one('mouseleave', function () {
          if (that.count == 0) {

            that.alert();
          }
          that.count++;
        })
      })
    }, 8000)

    $('.close').on('click', function (event) {
      event.stopPropagation();
      that.closeAlert();
    })
    $('.maskLayer').on('click', function (e) {
      e.stopPropagation();
      that.closeAlert();
    })
  },
  beforeDestroy() {
    $('body').off('mouseenter');
    clearInterval(this.timer);
    clearTimeout(this.timer1);
    this.timer = null;
  }
}
</script>

<style lang="less" scoped>
@import url('../assets/css/wifi.less');
</style>