<template>
  <div id="app" >
    <tab-bar>
      <tab-bar-item>
        <img slot="item-icon" src="@/assets/img/tabbar/home.png" alt="">
        <div slot="item-text">Main</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="@/assets/img/tabbar/categories.png" alt="">
        <div slot="item-text">Category</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="@/assets/img/tabbar/shoppingCart.png" alt="">
        <div slot="item-text">Cart</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="@/assets/img/tabbar/profile.png" alt="">
        <div slot="item-text">Profile</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from '@/components/tabbar/TabBar.vue'
  import TabBarItem from './components/tabbar/TabBarItem.vue'
  export default {
    name: 'App',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  @import "./assets/css/base.css";
</style>
