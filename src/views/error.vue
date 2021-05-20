<template>
    <div>
        <div class="error_box">
            <img class="error_image" src="../assets/images/no_login.png" alt=""/>
            <div class="error_text">登录信息错误</div>
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
            width: 436px;
            height: 309px;
            margin-bottom: 20px;
        }
        .error_text {
            font-size: 25px;
            color: rgba(255, 85, 18, 0.6);
            font-weight: 500;
        }
    }
</style>
