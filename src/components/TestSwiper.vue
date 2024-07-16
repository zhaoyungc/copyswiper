<template>
    <div class="test-swiper-ct">
        <CopySwiper @runOver="runOver" class="test-copy-swiper">
            <copy-slide v-for="(item, index) in swiperList" :key="index">
                <div class="bg-img">
                    <img src="http://www.metwo.cn/resource/huli.jpeg">
                </div>
                <div class="content"> {{ item }}</div>
            </copy-slide>
        </CopySwiper>
    </div>
</template>

<script>
import CopySwiper from './common/CopySwiper.vue';
import CopySlide from './common/CopySlide.vue';
// import request from '@/utils/request';

export default {
    name: 'TestSwiper',
    data: () => {
        return {
            swiperList: [1, 2, 3, 4],
        };
    },
    components: {
        CopySwiper,
        CopySlide,
    },
    methods: {
        runOver(index) {
            if (index >= this.swiperList.length - 1) {
                this.getShici();
            }
        },
        getShici() {
            // 这个好像挂了
            // request.get('/all.json', {}, (status, res) => {
            //     console.log(status, res);
            //     // if (status == 1) {
            //     //     this.swiperList.push(res.content);
            //     // }
            // });

            setTimeout(() => {
                this.swiperList.push("这是诗句");
            }, 1000);
        }
    },
    mounted() {
        // this.getShici();
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