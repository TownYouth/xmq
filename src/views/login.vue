<template>
    <div>
      <div class="bg_dv"/>
      <div class="login_box" @keyup.enter="handleSubmit">
        <div class="title">登 录</div>
        <a-form-model
          ref="ruleForm"
          :model="form"
          :rules="rules"
          :label-col="{ span: 5, offset: 1 }"
          :wrapper-col="{ span: 15 }">
          <a-form-model-item
            label="用户名"
            prop="userName"
          >
            <a-input
              v-model="form.userName"
              placeholder="请输入您的用户名"
            />
          </a-form-model-item>
          <a-form-model-item
            label="密码"
            prop="passWord"
          >
            <a-input-password
              v-model="form.passWord"
              placeholder="请输入您的密码"
            />
          </a-form-model-item>
          <a-form-model-item>
            <a-button type="primary" html-type="submit" class="login_button" @click="handleSubmit">
              登录
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      checkNick: false,
      form: {
        userName: '',
        passWord: ''
      },
      rightKey: {
        userName: 'admin',
        passWord: 'admin'
      },
      rules: {
        userName: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 3, max: 5, message: '用户名长度应为3到5位', trigger: 'blur' }
        ],
        passWord: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 3, max: 8, message: '密码长度应为3到8位', trigger: 'blur' }
        ],
      },
    }
  },
  methods: {
    handleSubmit(e) {
      let that = this
      that.$refs.ruleForm.validate(valid => {
        if (valid) {
          let loginThrough = ((that.form.userName === that.rightKey.userName) && (that.form.passWord === that.rightKey.passWord))
          if (loginThrough) {
            window.sessionStorage.setItem('token', 'token')
            that.$message.success('登录成功')
            this.$router.push('/index')
          } else {
            that.$message.error('登录信息错误')
            this.$router.push('/error')
          }
        } else {
          return false;
        }
      });
    },
    handleChange(e) {
    },
  },
  mounted () {

  }
}
</script>

<style scoped lang="less">
.bg_dv {
    width: 100%;
    height: 300px;
    background-color: var(--baseColor_bg);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    filter: blur(100px);
    z-index: -100;
  }
  .login_box {
    width: 450px;
    height: 500px;
    background-color: #fff;
    box-shadow: 0 0 700px 0px rgba(50, 100, 50, 0.1), 0px 0px 10px 2px rgba(100, 100, 100, 0.12) inset, 0 0 2px 0px rgba(50, 50, 50, 0.1);
    border-radius: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    box-sizing: border-box;
    padding: 0 25px;
    .title {
      font-size: 28px;
      font-weight: 700;
      text-align: center;
      color: var(--baseColor);
      margin-top: 120px;
      margin-bottom: 50px;
    }
    .login_button {
      width: 300px;
      position: relative;
      left: 50px;
      top: 20px;
    }
  }
</style>
