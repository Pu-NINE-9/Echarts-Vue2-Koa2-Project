<!--
 针对/sellerpage这个路径而显示出来
 在这个组件中，通过子组件注册的方式，显示出这个组件
 即SellerPage需要显示Seller的内容
-->
<template>
  <div class="com-page">
    <seller></seller>
  </div>
</template>

<script>
import Seller from '@/components/Seller.vue'

export default {
    components:{ // 子组件注册
        seller: Seller
    },
}
</script>

<style>

</style>
