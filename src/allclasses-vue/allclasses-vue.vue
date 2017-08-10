<template>
  <div class="allclasses">
    <div class="middle">
      <singleclass-vue class = "start-vue-class"
      v-for="i in page_amount"
      :category='classData[i-1].category'
      v-bind:class="{'top-margin' : overFour(i),'left-margin' : isLast(i)}"
      v-bind:classpic = "isDefined(classData)? info_default : classData[i-1].cover_240x140"
      v-bind:classprice = "isDefined(classData)? info_default : classData[i-1].bill"
      v-bind:title = "isDefined(classData)? info_default : classData[i-1].title"
      :classtitle = "classData[i-1].title"
      v-bind:classheadpic = "getHeadpic(i)"
      :classamount = "classData[i-1].count"
      :free = 'classData[i-1].bill_type === "mianfei"'
      v-bind:classname = "getName(i)"
      v-bind:classevaluate = "class_evaluates_default"
      :id='classData[i-1]._id'
      v-bind:key = "i">
      </singleclass-vue>
    </div>

  </div>
</template>

<script>
import SingleclassVue from "../singleclass-vue/index.js"

//此组件为全部课程和分页组件的集成页面,引用了课程格子组件和分页组件
//数据在mounted中获取,并储存在data的classData中
export default {
  props:['index','pageNum','category'],
  watch:{
    pageNum(itm){
        this._fetch()
    },
    category(itm){
        this._fetch()
    }
  },

  //从服务器获取课程数据
  mounted: function() {
    this._fetch()
  },

  name: 'allclasses-vue',

  data() {
    return {
      //课程数据
      classData: [],
      //用于设置一页显示的课程数,请勿修改
      page_amount: 0,
      //当前被选中的page数值,默认为1,传至<pagination-vue>分页子组件,对应selected_num
      selected_page: 1,
      //调试阶段数据,class显示上半部的图片
      // class_pics: ['../../imgs/man1.png', '../../imgs/man2.png', '../../imgs/man3.png', '../../imgs/woman1.png', ],
      class_pics: [],
      //若接收到的数据中没有teacher属性,则默认为此值
      //下方老师头像
      // class_headpics: ['../../imgs/head.png', ],
      class_headpics:[],
      //@评分数据中暂未有,数据有之后将评分部分改成  v-bind:title = "isDefined(classData)?'数据正在获取中':classData[i-1].evaluate"
      class_evaluates_default: '评分8.7',
      //默认的教师名称,用于数据传输未完成或者obj对象没有teacher属性时的显示
      teacher_name_default: '',
      //用于数据加载时的其他课程属性的显示
      info_default: '数据正在获取中',
    }
  },

  components: {
    //课程格子组件 使用: <singleclass-vue/>
    SingleclassVue,
    //分页组件 使用: <pagination-vue/>
    // PaginationVue,
  },

  methods: {
    _fetch(){
      const url = this.index?'/api/coulson/index_course':'/api/course/all';
      fetch(url,{
          method: 'post',
          body: `pageNum=${this.pageNum||1}&pageCount=12&category=${this.category||''}`,
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
          },
        })
        .then(re => re.json())
        .then(re => {
          //将数据储存至classData中,classData为一个对象,包含了12个课程对象和length属性
          this.classData = re.data.list;
          const {length} = re.data.list;
          this.page_amount = this.index?length - length%4 :length;
          if(re.data.count){
              this.$emit('getcount',re.data.count)
          }else{
            this.$emit('getcount',0);
          }
          //@调试数据接收
          // console.log(this.classData);
        })
    },
    //用于v-for循环体中,表示第二行开始加入margin-top属性
    overFour: function(x) {
      return x > 4
    },

    //用于v-for循环体中,表示每行第一个格子无margin-left属性
    isLast: function(x) {
      return ((x % 4) != 1)
    },

    //用于v-for循环体给子组件传值时,若数据传输   **未完毕**==>**true**
    //上方使用此函数时的三元运算符为 数据未接收到?"默认值":"接收值"  接收值写在后面
    isDefined: function(x) {
      return x == null;
    },

    //用于处理获取到的title数据,去掉期数和书名号
    getTitle: function(x) {
      // return x.slice(x.indexOf("《") + 1, x.indexOf("》"));
    },

    //用于处理获取到的课程种类和订阅人数数据
    getCatAmo: function(x) {
      //如果课程数据已经接收并对classData赋值完毕
      if (this.classData) {
        var amount = "";
        var category = this.classData[x - 1].category
        if (this.classData[x - 1].count) {
          amount = this.classData[x - 1].count;
        } else {
          amount = "0";
        }
      } else {
        return this.info_default;
      }
      return category.concat(" | ").concat(amount).concat("万人报名");
    },

    //用于处理教师头像数据,若数据传输未完成返回默认头像
    getHeadpic: function(x) {
      if (this.classData) {
        if (this.classData[x - 1].teacher) {
          return this.classData[x - 1].teacher.headimgurl;
        } else {
          // return '../../imgs/head.png'
        }
      } else {
        // return '../../imgs/head.png'
      }
    },

    //用于处理教师名称数据 若数据传输未完成返回默认值四个字
    getName: function(x) {
      if (this.classData) {
        if (this.classData[x - 1].teacher) {
          return this.classData[x - 1].teacher.name;
        } else {
          return this.teacher_name_default;
        }
      } else {
        return this.teacher_name_default;
      }
    },

  },
}
</script>
