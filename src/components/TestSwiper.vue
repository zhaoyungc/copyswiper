<template>
    <div class="test-swiper-ct">
        <CopySwiper v-if="swiperList && swiperList.length" @runOver="runOver" class="test-copy-swiper">
            <copy-slide v-for="(item, index) in swiperList" :key="index">
                <div class="bg-img">
                    <img :src="normalImage">
                </div>
                <div class="content"> {{ item }}</div>
            </copy-slide>
        </CopySwiper>
        <div v-else class="loading">加载中</div>
    </div>
</template>

<script>
import CopySwiper from './common/CopySwiper.vue';
import CopySlide from './common/CopySlide.vue';
// import request from '@/utils/request';

import huli from '../assets/huli.jpeg';

export default {
    name: 'TestSwiper',
    data: () => {
        return {
            swiperList: [],
            normalImage: huli,
        };
    },
    components: {
        CopySwiper,
        CopySlide,
    },
    methods: {
        runOver(index) {
            if (index >= this.swiperList.length - 1) {
                this.getShici(index+1);
            }
        },
        getShici(index) {
            // 这个好像挂了
            // request.get('/all.json', {}, (status, res) => {
            //     console.log(status, res);
            //     // if (status == 1) {
            //     //     this.swiperList.push(res.content);
            //     // }
            // });

            setTimeout(() => {
                this.swiperList[index] = "这是一个测试诗句" + index;
                this.swiperList = [...this.swiperList];
            }, 500);
        }
    },
    mounted() {
        this.getShici(0);
        this.getShici(1);
        this.getShici(2);
        this.getShici(3);
    }
}
</script>

<style lang="scss" scoped>
.test-swiper-ct {
    width: 450px;
    height: 300px;

    .bg-img {
        width: 100%;
        height: 100%;
    }

    .loading {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0,0,0,0.1);
    }

    .content {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
    }
}
</style>