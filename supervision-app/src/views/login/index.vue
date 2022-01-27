<script setup lang="ts">
import { reactive } from 'vue';
import type { UnwrapRef } from 'vue';
import type { FormProps } from 'ant-design-vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import VerifyCode from '@/components/VerifyCode/index.vue';
/*
* defineProps 或 defineEmits 要么使用运行时声明，要么使用类型声明。同时使用两种声明方式会导致编译报错。
* */
interface FormState {
  user: string;
  password: string;
}

const formState: UnwrapRef<FormState> = reactive({
  user: '',
  password: '',
});
const handleFinish: FormProps['onFinish'] = values => {
  console.log(values, formState);
};
const handleFinishFailed: FormProps['onFinishFailed'] = errors => {
  console.log(errors);
};
const handleValidate = (errors: any) => {
  console.log(errors);
};

</script>
<template>
  <a-layout class="login-layout">
    <a-layout-content class="layout-content">
      <a-row class="formRow" :wrap="true">
        <a-space direction="vertical" size="middle" class="titleContainer">
          <a-typography-title class="title">
            <DIcon name="logo" size="middle"/>
            <span>电网智能视频综合管控平台</span>
          </a-typography-title>
          <a-typography-title
              class="text"
              :level="5"
          >Grid intelligent video integrated control platform
          </a-typography-title>
        </a-space>
      </a-row>
      <a-row justify="center" class="form-row-contain">
        <a-col :span="24" class="login-tips">
          用户登录
          <a-divider/>
        </a-col>
        <a-col class="formContain">
          <a-form
              size="large"
              :model="formState"
              @finish="handleFinish"
              @finishFailed="handleFinishFailed"
              aria-autocomplete="none"
          >
            <a-form-item>
              <a-col :span="12">
                <a-input autocomplete="off" v-model:value="formState.user" placeholder="请输入用户名">
                  <template #prefix>
                    <UserOutlined style="color: rgba(0, 0, 0, 0.25)"/>
                  </template>
                </a-input>
              </a-col>
            </a-form-item>
            <a-form-item>
              <a-col :span="12">
                <a-input autocomplete="off" v-model:value="formState.password" type="password" placeholder="请输入密码">
                  <template #prefix>
                    <LockOutlined style="color: rgba(0, 0, 0, 0.25)"/>
                  </template>
                </a-input>
              </a-col>
            </a-form-item>
            <a-form-item>
              <a-col :span="12">
                <VerifyCode @onValidation="handleValidate"/>
              </a-col>
            </a-form-item>
            <a-form-item>
              <a-button
                  type="primary"
                  html-type="submit"
                  :disabled="formState.user === '' || formState.password === ''"
              >登录
              </a-button>
            </a-form-item>
          </a-form>
        </a-col>
      </a-row>
    </a-layout-content>
  </a-layout>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_helper.scss";

.login-layout {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background: url("~@/assets/imgs/bg_img.png") no-repeat center center;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  .layout-content {
    display: flex;
    flex-direction: column;
    @include play-center;
    margin-bottom: 12%;

    .form-row-contain {
      min-width: 30vw;
      background-color: #ffffff;
      box-shadow: 0px 0px 15.4px rgba(0, 0, 0, 0.035), 0px 0px 46px rgba(0, 0, 0, 0.07);
      margin-top: pxtorem(120);
      border-radius: pxtorem(12);

      .login-tips {
        font-size: pxtorem(22);
        text-align: center;
        padding-top: pxtorem(24);
        font-weight: 500;
        font-family: 'appfont-bold', 'monospace';
        ::v-deep(.ant-divider-horizontal) {
          margin: pxtorem(24) 0 pxtorem(42) 0;
        }
      }

      .formContain {
        width: 100%;
        text-align: center;

        ::v-deep(.ant-form-item-control-input-content) {
          @include play-center;
        }
      }
    }
  }

  .formRow {
    width: pxtorem(1200);

    @include play-center;

    .titleContainer {
      margin-top: 12%;

      .title {
        color: #f2f2f2;
        font-size: pxtorem(50);
        font-family: appfont-bold;
        line-height: pxtorem(51);
        font-weight: normal;
        position: relative;
        text-align: center;
        display: flex;
        align-items: center;
        margin-bottom: 0;

        span {
          margin-left: pxtorem(15);
          margin-bottom: pxtorem(10);
        }
      }

      .text {
        text-align: center;
        color: #ccc;
        font-size: pxtorem(24);
        font-family: "Source Code Pro","monospace",'system-ui';
      }
    }
  }
}
</style>
