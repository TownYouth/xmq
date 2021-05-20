<template>
    <div>
        <div class="error_box">
            <img class="error_image" src="../assets/images/404.png" alt=""/>
            <div class="error_text">页面找不到了</div>
        </div>

    </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {

    },
    mounted () {

    }
  }
</script>

<style scoped lang="less">
    .error_box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        .error_image {
            width: 600px;
            height: 600px;
        }
        .error_text {
            font-size: 25px;
            color: rgba(255, 85, 18, 0.6);
            font-weight: 500;
            position: relative;
            top: -100px;
        }
    }
</style>
