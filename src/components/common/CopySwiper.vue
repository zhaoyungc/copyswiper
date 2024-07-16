<template>
    <div class="copy-swiper-ct">
        <div class="swiper-items" ref="swiperItems">
            <slot></slot>
        </div>
        <div class="swiper-btn btn-pre" :class="swiperRunIndex <= 0 ? 'no-show' : ''" @click="toPre"></div>
        <div class="swiper-btn btn-next" :class="swiperRunIndex >= itemLength - 1 ? 'no-show' : ''" @click="toNext"></div>
    </div>
</template>

<script>
export default {
    name: 'CopySwiper',
    props: {
        autoplay: {// 自动播放
            type: Boolean,
            default: true
        },
        duration: {// 自动播放时间
            type: Number,
            default: 3000
        },
    },
    data: () => {
        return {
            swiperRunIndex: 0, // 当前的滚动点
            isRunning: false, // 是否在滚动中
            ctWidth: 0,
            itemLength: 0, //子节点个数
            nextAutoRunTime: 0,
        };
    },
    methods: {
        toRun(run_index) {
            if (this.nextAutoRunTime){
                clearTimeout(this.nextAutoRunTime);
            }
            this.isRunning = true;
            this.$refs.swiperItems.scrollTo({
                left: this.ctWidth * run_index,
                behavior: 'smooth'
            });
            setTimeout(() => {
                this.swiperRunIndex = run_index;
                this.$emit('runOver', run_index);
                this.isRunning = false;
            }, 1000);

            this.nextAutoRunTime = setTimeout(() => {
                if (run_index <= this.itemLength - 1) {
                    this.toRun(run_index + 1);
                } else {
                    this.toRun(0);
                }
            }, this.duration);
        },
        toPre() {
            if (this.isRunning) {
                return;
            }
            const nowRunIndex = this.swiperRunIndex - 1;
            if (nowRunIndex >= 0) {
                this.toRun(nowRunIndex);
            }
        },
        toNext() {
            if (this.isRunning) {
                return;
            }
            const nowRunIndex = this.swiperRunIndex + 1;
            if (nowRunIndex <= this.itemLength - 1) {
                this.toRun(nowRunIndex);
            }
        },
    },
    mounted() {
        this.ctWidth = this.$refs.swiperItems.getBoundingClientRect().width;
        this.itemLength = this.$slots.default.length;
        this.nextAutoRunTime = setTimeout(() => {
            this.toRun(1);
        }, this.duration);
    },
    updated() {
        this.itemLength = this.$slots.default.length;
    }
}
</script>

<style lang="scss" scoped>
.copy-swiper-ct {
    width: 100%;
    height: 100%;
    position: relative;

    .swiper-items {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        overflow-x: scroll;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    .swiper-btn {
        width: 30px;
        height: 30px;
        border-left: 3px solid #f1f1f1;
        border-top: 3px solid #f1f1f1;
        position: absolute;
        z-index: 9;
        top: 50%;
        cursor: pointer;

        &.btn-pre {
            left: 10px;
            transform: translate(0, -50%) rotate(-45deg);
        }

        &.btn-next {
            right: 10px;
            transform: translate(0, -50%) rotate(135deg);
        }

        &:hover {
            border-color: #dfdfdf;
        }

        &.no-show {
            display: none;
        }
    }
}
</style>
