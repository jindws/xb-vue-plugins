<template lang="html">

    <div class="pagination">
      <div class="square-item" v-for="i in amount"
        v-show="move_isShow(i)"
        @click="item_onClick(i);"
        v-bind:class="{'isSelected-class':isSelected(i)}"
        >
        {{showWhich(i)}}</div>
    </div>


</template>

<script>
//此组件为分页组件,需要接收两个外来值
export default {
  name: 'pagination-vue',
  //props_selectednum表示当前选中的分页格 props_totalamount表示总页数
  props: ['props_selectednum', 'props_totalamount', ],
  data() {
    return {
      selected: 1, //当前选中分页的数字,在mounted中赋值为props_selectednum
      total: 0, //总共的分页数量 在mounted中赋值为props_totalamount
      amount: 9, //表示分页组件总共的格子数,包括省略号格,左右移动格和数字格
      move: 0, //表示分页组件已经移动的格数
    }
  },
  components: {

  },
  //将从props接收到的数据赋值至data
  mounted: function() {
    this.selected = this.props_selectednum;
    this.total = parseInt(this.props_totalamount / 12) + 1;
  },
  methods: {
    //showWhich函数用于处理每个格子显示什么内容
    showWhich: function(x) {
      let _amount = this.amount;
      let _total = this.total;
      let _selected = this.selected
      if (x == 1) return "<";
      if (x == 2) return "1";
      if (x == 3) return "...";
      if (x == _amount - 1) return _total;
      if (x == _amount) return ">";

      if (_selected < 5) {
        if (x == 7) return "...";
        return x - 2;
      } else if (_selected >= _total - 4) {
        return _total + 1 + x - _amount;
      } else {
        if (x == _amount - 2) return "...";
        else {
          return _selected + x - 5;
        }
      }
    },

    //点击分页组件格子逻辑
    item_onClick: function(x) {
      let _selected = this.selected;
      let _total = this.total;
      let _amount = this.amount;

      if (_selected <= 4) {
        if (x == _amount) {
          this.selected++;
          return;
        }
        if (x == _amount - 2) {
          this.selected += 3;
          return;
        }
        if (x == 1) {
          if (_selected == 1) return;

          this.selected--;
          return;
        }
        if (x >= 4 && x <= 6) {
          console.log(1);
          this.selected = x - 2;
          return;
        }
        if (x == _amount - 1) {
          this.selected = _total;
          return;
        }
        if(x == 2){
          this.selected = 1;
          return ;
        }
      }

      else if (_selected >= _total - 4) {
        if (x == 1) {
          this.selected--;
          return;
        }
        if (x == 3) {
          this.selected -= 3;
          return;
        }
        if (x == _amount) {
          if (_selected == _total) return;

          this.selected++;
          return;
        }
        if (x >= 4 && x <= _amount - 1) {
          this.selected = _total - 8 + x;
          console.log(_total);
          console.log(x);
        }
      }
      else {
        if (x == 1){
          this.selected--;
          return;
        }
        if (x == 3){
          this.selected -= 3;
          return;
        }
        if (x == _amount){
          this.selected++;
          return;
        }
        if (x == _amount - 2){
          this.selected += 3;
          return;
        }

        if(x==4 || x==6){
          if(x == 4){
            this.selected--;
            return;
          }
          if(x == 6){
            this.selected++;
            return;
          }
        }
      }



    },
    //v-for中调用,循环查找被选中的格子,并且返回一个bool用于v-bind设置红色背景样式
    isSelected: function(x) {
      let _selected = this.selected;
      let _total = this.total;
      let _amount = this.amount;

      if(_selected <= 4){
        if(x == 2 && _selected==1){
          return true;
        }
        if(x>=4 && x<= 6){
          if (x == _selected + 2){
            return true;
          }
        }
      }
      else if(_selected >= _total - 4){
        if(_total - _selected == _amount - x -1){
          return true;
        }
      }
      else {
        if(x == 5){
          return true;
        }
      }
    },

    move_isShow: function(x) {
      if (x == 3) {
        if (this.selected < 5) {
          return false;
        }
      }
      // if(x == 7){
      //   if(this.selected>this.total-4){
      //     return false;
      //   }
      // }
      return true;
    },
  },
}
</script>

<style lang="scss" scoped>
//分页组件样式
.pagination {
    width: 600px;
    height: 80px;
}

//单个分页格样式
.square-item {
    margin-right: 19.2px;
    opacity: 0.9;
    text-align: center;
    background-color: #ffffff;
    width: 40px;
    height: 40px;
    float: left;
    line-height: 40px;
    border: 1px solid rgba(0,0,0,0.17);
    transition: all 0.2s ease-in 0s;
}

//格子鼠标悬停样式
.square-item:hover {
    cursor: pointer;
    opacity: 1;
    box-shadow: 0 20px 50px 0 rgba(0,0,0,.2);
    transform: translate3d(0,-0.3px,0);
    background-color: #fa525d;
}

//格子被选中样式,设置为红色
.isSelected-class {
    background-color: #fa525d;
}
</style>
