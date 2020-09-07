<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img slot="item-icon" src="@/assets/img/tabbar/home.png" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/home_select.png" alt="">
      <div slot="item-text">Main</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="blue">
      <img slot="item-icon" src="@/assets/img/tabbar/categories.png" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/catogeries_select.png" alt="">
      <div slot="item-text">Category</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="blue">
      <img slot="item-icon" src="@/assets/img/tabbar/shoppingCart.png" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/shoppingCart_select.png" alt="">
      <div slot="item-text">Cart</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="blue">
      <img slot="item-icon" src="@/assets/img/tabbar/profile.png" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/profile_select.png" alt="">
      <div slot="item-text">Profile</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '@/components/tabbar/TabBar.vue'
  import TabBarItem from '@/components/tabbar/TabBarItem.vue'
  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>
