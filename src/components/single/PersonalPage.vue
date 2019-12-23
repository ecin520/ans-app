<template>
  <div class="personal-page">

    <div class="avatar-background">
      <a style="color: white;font-size: 1.6em;">{{user.nickname}}</a><br>
      <a style="color: white;font-size: 1em;">ID : {{user.id}}</a>
    </div>
    <div class="avatar">
      <mu-flex class="flex-wrapper" justify-content="center">
        <!--                <a style="color: white">nickname</a>-->
        <mu-avatar size="90">
          <img :src="user.avatar_url"/>
        </mu-avatar>
        <!--                <a style="color: white">nickname</a>-->
      </mu-flex>
    </div>
    <br>
    <div class="content">
      <br><br><br>
      <a style="color: #2b2b2b;font-size: 1.1em;"><a style="color: #58b1ec">个人签名：</a>
        {{user.sign}}</a>
      <br> <br>
      <mu-chip style="float: left" color="#ff7043">
        Tel：{{user.tel_number}}
      </mu-chip>
      <mu-chip style="float: right" color="teal">
        擅长类型：{{user.good_at}}
      </mu-chip>
      <br><br>
      <mu-chip style="float: left" color="#a1887f">
        等级：{{level}}
      </mu-chip>
      <mu-chip style="float: right" color="#40c4ff">
        注册时间：{{user.register_time}}
      </mu-chip>
      <br><br>
      <mu-chip style="float: left" color="#ab47bc">
        学历：{{education}}
      </mu-chip>
      <br><br><br>
<!--        <mu-flex class="flex-wrapper" justify-content="center">-->
<!--            <a style="text-align: center;font-size: 1.5em;color: #453b48">exp</a>-->
<!--        </mu-flex>-->
        <mu-row>
            <mu-linear-progress :size="11" color="success" mode="determinate" :value="exp"></mu-linear-progress>
        </mu-row>
      <br>
      <mu-flex justify-content="center">
        <div style="float: left">
          <p style="font-size: 1.3em">正确率: {{(user.correct_number/user.ans_number).toFixed(3)*100}}%</p>
          <mu-circular-progress
              class="demo-circular-progress"
              mode="determinate"
              :value="(user.correct_number/user.ans_number).toFixed(3)*100"
              color="success"
              :stroke-width="7"
              :size="76">
          </mu-circular-progress>
        </div>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div style="float: right">
          <p style="font-size: 1.3em">排名: 80%</p>
          <mu-circular-progress
              class="demo-circular-progress"
              mode="determinate"
              :value="80"
              color="red"
              :stroke-width="7"
              :size="76">
          </mu-circular-progress>
        </div>
      </mu-flex>
    </div>


  </div>
</template>

<script>
    export default {
        name: "PersonalPage",
        data() {
            return {
                user: {
                    id: '',
                    username: '',
                    nickname: '',
                    avatar_url: '',
                    tel_number: '',
                    rank: '',
                    sign: '',
                    ans_number: '',
                    correct_number: '',
                    good_at: '',
                    register_time: ''
                },
                education: '',
                exp: '',
                level: ''

            }
        },
        mounted() {
            this.$axios({
                url: '/api/client/user/getUserByUsername',
                method: 'post',
                params: {
                    'username': this.$cookies.get('user')
                }
            }).then(response => {
                this.user = response.data;

                this.exp = this.user.rank % 100;

                this.level = parseInt(this.user.rank / 100);

                this.education = this.getEducation(this.user.rank);



            }).catch(error => {
                console.log(error)
            });


        }
    }
</script>

<style scoped lang="less">
  .personal-page {

    .avatar-background {
      display: block;
      width: 100%;
      height: 18vh;
      background: #26c6da;
      text-align: center;
      /*color: white;*/
      /*font-size: 3em;*/
    }

    .avatar {
      margin-top: -40px;
    }

    .content {
      /*background: #f8f7ff;*/
      width: 100%;
      /*height: 35vh;*/
      margin-top: -71px;
      padding: 10px;
    }
  }


</style>
