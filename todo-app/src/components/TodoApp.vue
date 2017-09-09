<template>
  <div class="todoApp">
    <input-area :todo-list="todoList"></input-area>
    <!--<filter-area></filter-area>-->
    <list-area :todo-list="todoList"></list-area>
  </div>
</template>

<script>
  import InputArea from './InputArea.vue'
  import ListArea from './ListArea.vue'
  import FilterArea from './FilterArea.vue'

  export default {
    name: 'hello',
    components: {
      'InputArea': InputArea,
      'ListArea': ListArea,
      'FilterArea': FilterArea
    },
    data () {
      return {
        todoList: [{priority: 1, content: '세탁소 가기', isComplete: true}, {priority: 2, content: '강아지 산책', isComplete: false}]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
