<template>
  <div class="login-container">
    <div class="login-aside-container">
      <div class="logo"></div>
      <ul>
        <li class="input-container">
          <!--这行代码是去除chrome表单的自动填充-->
          <input type="password" style="display: none;">
          <input type="text" autocomplete="off" placeholder="请输入用户名" v-model="username" v-placeholder>
        </li>
        <li class="input-container">
          <input type="password" autocomplete="new-password" placeholder="请输入用户密码" v-model="password" v-placeholder>
        </li>
        <li class="input-container">
          <div class="line">
            <input type="checkbox" id="login-remember">
            <label for="login-remember">记住用户名</label>
          </div>
        </li>
        <li class="input-container">
          <div class="btn" @click="loginClick()">登录</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import auth from '@/services/auth'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    loginClick () {
      console.log(auth)
      // console.log(this.username)
      // console.log(this.password)
    }
  }
}
</script>

<style lang="scss">
  .login-container {
    height: 100%;
    background: url('../../assets/images/login_page.jpg') no-repeat center scroll;
    background-size: cover;
    position: relative;
  }
  .login-aside-container {
    background: rgba(#fff, 0.9);
    box-shadow: 20px 0 40px 0 rgba(6,45,61,0.30);
    width: 30%;
    height: 70%;
    min-width: 380px;
    min-height: 590px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;

    .logo {
      height: 240px;
      margin: 100px 0 30px 0;
      background: url('../../assets/images/logo_login@2x.png') no-repeat center scroll;
      background-size: 300px;
    }
    .input-container {
      padding: 10px 0;
      text-align: center;
      >input {
        background: transparent;
        border: none;
        /*box-shadow: inset 0 -1px 0 0 #DFE2E7;*/
        border-bottom: 1px solid #DFE2E7;
        padding: 5px;
        font-size: 14px;
        width: 50%;
        color: #666;
        transition: all 0.2s;
        &::-moz-placeholder {
          color: #C4C4C4;
        }
        &:-ms-input-placeholder {
          color: #C4C4C4;
        }
        &::-webkit-input-placeholder {
          color: #C4C4C4;
        }
        &:focus, &:hover {
          /*box-shadow: inset 0 -1px 0 0 #73859F;*/
          border-bottom-color: #73859F;
        }
      }
      >div {
        width: 50%;
        display: inline-block;
        margin-left: 20px;
        text-align: left;
        font-size: 12px;
      }
      .btn {
        background: #4499EE;
        background-image: linear-gradient(-180deg, #4499EE 0%, #3377BB 100%);
        border-radius: 4px;
        text-align: center;
        color: #fff;
        padding: 6px 0;
        font-size: 16px;
        letter-spacing: 10px;
        cursor: pointer;
        margin-left: 0;
      }
    }
  }
</style>
