<template>
	<div class="login" style="">
		<h1 class="title">区域稳定性评估示范系统</h1>
		<el-form label-width="125px" status-icon :model="formLabelAlign" :rules="rules2" ref="formLabelAlign">
		  <el-form-item label="用户名" prop="username">
		  	<span><i></i></span>
		    <el-input v-model="formLabelAlign.username" ></el-input>
		  </el-form-item>
		  <el-form-item label="密码" prop="password">
		    <el-input v-model="formLabelAlign.password"  auto-complete="off" type="password"></el-input>
		  </el-form-item>
  			   <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="submitForm('formLabelAlign')">登录</el-button>
		</el-form>
	</div>
</template>

<script>
   import {login} from '@/api/login.js'
	export default {
		data(){
			      const checkUserName = (rule, value, callback) => {
				      if (!value) {
				        return callback(new Error('用户名不得为空'))
				      } else {
				        callback()
				      }
				    };
			    const checkPassWord = (rule, value, callback) => {
			      if (!value) {
			        return callback(new Error('密码不得为空'))
			      } else {
			        callback()
			      }
			    };
		         return {
			           formLabelAlign:{
			           	username:'',
			           	password:''
			           },
				        rules2: {
				          password: [
				            { 
											validator: checkPassWord,
				            	trigger: 'blur' 
				            },{
											min:6,
											message: '密码长度为6位数', 
											trigger: 'blur'
										}
				          ],
				          username: [
				            { 
				            	validator: checkUserName,
					             trigger: 'blur' 
					         }
				          ]
				        },
				        loading: false
                 }; 
		  },
		methods:{
			submitForm(formName) {
				let that = this
				    debugger
		        this.$refs[formName].validate((valid) => {
		          if (valid) {
		          	that.loading=true
		            this.$store.dispatch('Login', this.formLabelAlign).then(() => {
			            this.loading = false
			            this.$router.push({ path: '/' })
			          }).catch((err) => {
			            this.loading = false
			          })
		          } else{
		            return false;
		          }
		        })
		      }
		}
	}
</script>

<style scoped lang="less">
.login{
			background:url('../assets/login.jpg') no-repeat;
			background-size: 100% 100%;
			width: 100%;
			height: 100%;
			.title{
					font-size: 40px;
					color: #fff;
					text-align: center;
					line-height: 394px;
				}
			.el-form{
				width: 500px;
				border: 1px solid #fff;
				background: rgba(255, 255, 255,0.6) ;
				padding: 50px 30px;
				margin: 0 auto;
				border-radius: 10px;
				.el-form-item{
					.el-input{
								border-color:#000;
					}
				}
			}
		}
</style>
