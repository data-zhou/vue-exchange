<template>
    <div class="safety-auth-wrapper">
        <div class="safety-pro-title">
            <span>{{ $t("safety.auth") }}</span>
        </div>
        <div class="safety-pro-cont">
            <div class="safety-auth-tit">
                <h4 class="red">{{ $t("safety.notAuth") }}</h4>
                <div class="safety-auth-tit-list">
                    <p>{{ $t("safety.authMessage") }}</p>
                    <p>{{ $t("safety.authName") }}：<span>张三</span></p>
                    <p>{{ $t("safety.authIDtype") }}：<span>{{ $t("safety.authID") }}</span></p>
                    <p>{{ $t("safety.authIDnum") }}：<span>420683********4624</span></p>
                    <p>{{ $t("safety.authTime") }}：<span>2018-11-20 15:30:30</span></p>
                </div>
            </div>
            <div class="safety-auth-box">
                <div class="safety-tips auth-tips">
                    <i></i><span class="auth-tip">{{ $t("safety.AuthTips") }}</span>
                </div>
                <el-form class="safety-auth-form" ref="form" :model="form" label-width="150px">
                    <el-form-item :label="$t('safety.handIDface')">
                        <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon">{{ $t("safety.handFacePhoto") }}</i>
                        </el-upload>
                        <div class="safety-auth-picshow">
                            <img :src="imageUrl" alt="">
                        </div>
                    </el-form-item>
                    <el-form-item :label="$t('safety.IDface')">
                        <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess2"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon">{{ $t("safety.FacePhoto") }}</i>
                        </el-upload>
                        <div class="safety-auth-picshow">
                            <img :src="imageUrl2" alt="">
                        </div>
                    </el-form-item>
                    <el-form-item :label="$t('safety.IDback')">
                        <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess3"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl3" :src="imageUrl3" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon">{{ $t("safety.backPhoto") }}</i>
                        </el-upload>
                        <div class="safety-auth-picshow">
                            <img :src="imageUrl3" alt="">
                        </div>
                    </el-form-item>
                    <el-form-item label="">
                        <el-checkbox-group v-model="form.type">
                        <el-checkbox checkbox="checked" :label="$t('safety.checkText')" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">{{ $t("safety.authSubmit") }}</el-button>
                        <el-button>{{ $t("safety.authCancel") }}</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        imageUrl: '',
        imageUrl2: '',
        imageUrl3: '',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        // console.log('submit!');
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      handleAvatarSuccess2(res, file) {
        this.imageUrl2 = URL.createObjectURL(file.raw);
      },
      handleAvatarSuccess3(res, file) {
        this.imageUrl3 = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
}
</script>

<style>
.safety-auth-wrapper{
    padding: 40px 0;
}
.safety-auth-wrapper .safety-pro-title{
    padding: 0 80px;
}
.safety-auth-wrapper .safety-auth-tit{
    padding: 30px 80px;
    border-bottom: 1px solid #ccc;
}
.safety-auth-tit h4{
    line-height: 2;
    margin-bottom: 10px;
}
.safety-auth-tit .safety-auth-tit-list p{
    line-height: 2;
}
.safety-auth-box{
    padding: 20px 80px;
}
/* 上传证件 */
.safety-tips{
    font-size: 16px;
    text-align: center;
}
.safety-tips i{
    display: inline-block;
    width:14px;
    height:14px;
    vertical-align: top;
    margin-right: 5px;
    background:url('../../assets/images/weizhuce.png') no-repeat;
    background-position: center center;
    background-size: 14px 14px;
    box-sizing: border-box;
    margin-top:6px;
}
.auth-tips i{
    margin-top:7px;
}
.safety-tips span{
    vertical-align: top;
    line-height: 28px;
}
.safety-tips .auth-tip{
    font-size: 14px;
}
.safety-form,.safety-auth-form{
    margin-top: 50px;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    /* margin-top: 50px; */
}
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.avatar-uploader .avatar-uploader-icon {
    font-size: 16px;
    color: #8c939d;
    width: 300px;
    height: 180px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 300px;
    height: 180px;
    display: block;
}
.safety-auth-picshow{
    width: 300px;
    height: 180px;
    position: absolute;
    right: 150px;
    top: 0;
    border:1px solid #ccc;
    border-radius: 6px;
    overflow: hidden;
}
.safety-auth-picshow img{
    width: 300px;
    height: 180px;
}
.safety-auth-form .el-button--primary {
    width: 120px;
    color:#fff;
    background-color: #333752;
    border-color: #333752;
}
.safety-auth-form .el-button--primary:hover {
    background-color: #626b89;
    border-color: #626b89;
}
.safety-auth-form .el-button+.el-button {
    width: 120px;
    margin-left: 30px;
    background-color: #999;
    border-color:#999;
    color:#fff;
}
.safety-auth-form .el-button+.el-button:hover{
    background-color: #888;
    border-color:#888;
}
</style>