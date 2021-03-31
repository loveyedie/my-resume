<template>
  <div class="header-container">
    <div class="top-box">
      <div class="top-part-one"><router-link to="/toggle">轮换展示</router-link></div>
      <div class="top-part-two">
        <div class="background"></div>
        <div class="my-picture"><img alt="my picture" src="../assets/me.jpg"></div>
        <div class="nav-box">
          <router-link to="/">前端技术</router-link>
          <router-link to="/work">工作经历</router-link>
        </div>
      </div>
    </div>
    <div class="content-box">
      <div class="info-box">
        <p class="box-header">个人信息</p>
        <div class="box-content">
          <ul>
            <li><label>姓名:</label>李鹏飞</li>
            <li><label>年龄:</label>34</li>
            <li><label>手机:</label>139****4944</li>
            <li><label>住址:</label>上海浦东沔北路558弄</li>
            <li><label>邮箱:</label>loveyedie@163.com</li>
            <li><label>工作经验:</label>11年</li>
          </ul>
        </div>
      </div>
      <div class="info-box">
        <p class="box-header">求职意向</p>
        <div class="box-content">
          <ul>
            <li><label>求职职业:</label>前端工程师</li>
            <li><label>期望月薪:</label>面议</li>
          </ul>
        </div>
      </div>
      <div class="info-box">
        <p class="box-header">教育背景</p>
        <div class="box-content">
          <ul>
            <li><label>学校名称:</label>河南大学</li>
            <li><label>就读时间:</label>2003.09~2007.06</li>
            <li><label>所学专业:</label>教育技术</li>
            <li><label>学历学位:</label>本科</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'myheader',
  props: {
    activePage: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header-container {
  margin: 0 auto;
}
.top-box{
  height: 240px;
  .top-part-one{
    height: 40px;
    padding: 0 40px;
    line-height: 40px;
    font-size: 12px;
    background:#1890FF;
    text-align: right;
    a{
      color: #fff;
      &:hover{
        opacity: .8;
      }
    }
  }
  .top-part-two{
    position: relative;
    height: 200px;
    .background{
      position: relative;
      width: 100%;
      height: 140px;

      &::after{
        position: absolute;
        width: 100%;
        height: 0;
        top: 0;
        left: 0;
        border-top: 140px solid #1890FF;
        border-left: 580px solid transparent;
        border-right:580px solid transparent;
        border-bottom: 0;
        content: '';
        z-index: 2;
      }
    }
    .my-picture{
      position: absolute;
      width: 150px;
      height:150px;
      top: 40px;
      left: 50%;
      margin-left:-75px;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid #1890FF;
      background: #fff;
      z-index: 10;
      img{
        max-width: 100%;
        max-height: 120%;
      }
    }
    .nav-box{
     display: flex;
     justify-content: space-between;
     width: 700px;
     position: absolute;
     top: 110px;
     left: 50%;
     margin-left: -350px;
     font-size: 16px;
     z-index: 20;
     .active{
       font-weight: 600;
     }
     a{
       color: #1890FF;
       &:hover{
         opacity: .8;
       }
     }
    }
  }
}
.content-box{
  padding: 10px 50px;
}

a {
  color: #1890FF;
}
</style>
