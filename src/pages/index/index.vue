<template>
  <view class="fs20 index">
    <view>
      <swiper
        class='test-h'
        indicator-color='#999'
        indicator-active-color='#333'
        :vertical="false"
        :circular="true"
        :indicator-dots="true"
        :autoplay="true"
      >
        <swiper-item>
          <image
            style="width: 300px;height: 100px;background: #fff;"
            src=""
          />
        </swiper-item>
        <swiper-item>
          <view class='demo-text-2'>2</view>
        </swiper-item>
        <swiper-item>
          <view class='demo-text-3'>3</view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import './index.scss'
import {testReq} from "../../api";
const msg = ref('周深')
testReq()
</script>
