<template>
    <div id="app">
        <div class="top_box">
            <div class="info_box">
                <img :src="userData.headImage" alt="头像" class="head_image">
                <div class="textInfo_box">
                    <div class="text_item">姓名：{{userData.name}}</div>
                    <div class="text_item">性别：{{userData.sex === 0 ? '男' : '女'}}</div>
                    <div class="text_item">联系电话：{{userData.phone}}</div>
                    <div class="text_item">面试岗位：{{userData.interviewPosition}}</div>
                </div>
                <div class="loginout_button none_select" @click="loginout">退出登录</div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        userData: {
          name: '邢明强',
          sex: 0,
          headImage: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-9f4a056949fe8ea72383b0bc75c058fd_hd.jpg&refer=http%3A%2F%2Fpic2.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623570918&t=cd3150a737baebff636cee39dfc91596',
          phone: '17323270315',
          interviewPosition: 'web前端',
        }
      }
    },
    methods: {
      loginout () {
        window.sessionStorage.removeItem('token')
        this.$router.push('/login')
      }
    },
    mounted () {

    }
  }
</script>

<style scoped lang="less">
    #app {
        position: relative;
        .top_box {
            width: 100vw;
            height: 250px;
            background-repeat: no-repeat;
            background-position: center top;
            background-position-x: center;
            background-position-y: top;
            background-attachment: scroll;
            background-image: url(http://custom.hjrfw.com/94786_top.jpg);
            background-color: #011a51;
            .info_box {
                width: 800px;
                min-height: 100px;
                box-sizing: border-box;
                border-radius: 5px;
                padding: 20px;
                position: absolute;
                left: 50%;
                top: 200px;
                background-color: #f4f4f4;
                transform: translateX(-50%);
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                .head_image {
                    width: 120px;
                    height: 120px;
                    border-radius: 2px;
                    border: #FFF 3px solid;
                }
                .textInfo_box {
                    font-size: 16px;
                    color: #666666;
                    padding-left: 15px;
                    .text_item {
                        margin-bottom: 9px;
                    }
                }
                .loginout_button {
                    width: 90px;
                    height: 30px;
                    border-radius: 4px;
                    border: 1px solid #999999;
                    color: #666666;
                    text-align: center;
                    line-height: 30px;
                    position: absolute;
                    bottom: 20px;
                    right: 20px;
                    cursor: pointer;
                    &:hover {
                        background-color: #eeeeee;
                    }
                }
                .none_select {
                    moz-user-select: -moz-none;
                    -moz-user-select: none;
                    -o-user-select:none;
                    -khtml-user-select:none;
                    -webkit-user-select:none;
                    -ms-user-select:none;
                    user-select:none;
                }
            }
        }
    }
</style>
