<template>
    <n-space vertical style="align-items: center;">
        <n-card style="width: 30vh; margin-top: 30vh; height: 40vh;">
            <n-form ref="formRef" :label-width="80" :model="formValue" size="large" :rules="rules">
                <n-form-item label="用户名" path="user.name">
                    <n-input v-model:value="formValue.user.name" placeholder="用户名" />
                </n-form-item>
                <n-form-item label="密码" path="user.pwd">
                    <n-input v-model:value="formValue.user.pwd" placeholder="密码" />
                </n-form-item>
                <n-form-item>
                    <n-button attr-type="button" @click="handleLoginClick">
                        登录
                    </n-button>
                </n-form-item>
            </n-form>
        </n-card>
    </n-space>
</template>

<script setup>
import { ref, h } from 'vue'
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter, NSpace, NLayoutSider } from 'naive-ui'
import { NForm, NFormItem, NInput, NButton } from 'naive-ui'
import { NCard } from 'naive-ui'
import axios from 'axios'
import md5 from 'js-md5'

const formRef = ref(null)
const formValue = ref({
    user: {
        name: '',
        pwd: ''
    },
})
const rules = {
    user: {
        name: {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
        },
        pwd: {
            required: true,
            message: '请输入密码',
            trigger: ['input', 'blur']
        }
    }

}

function handleLoginClick() {
    formRef.value.validate((errors) => {
        if (!errors) {
            const uname = formValue.value.user.name
            const pwd = md5(formValue.value.user.pwd + uname)
            console.log(uname)
            console.log(formValue.value.user.pwd)
            console.log(formValue.value.user.pwd + uname)
            console.log(pwd)
            axios.post('/api/login', {
                username: uname,
                password: pwd,
            }).then(res => {
                console.log(res)
                if(res.status == 200) {
                    window.location.href = '/'
                }
            })
        } else {
            console.log('请输入用户名和密码')
        }
    })
}
</script>