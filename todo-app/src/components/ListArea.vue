<template>
  <div class="listArea">
    <el-row :gutter="20" v-for="todo in todoList">
      <el-col :span="1">
        <div>
          <el-checkbox v-model="todo.isComplete"></el-checkbox>
        </div>
      </el-col>
      <el-col :span="2">
        <div>
          <el-tag v-if="todo.priority == 1" type="danger">매우중요</el-tag>
          <el-tag v-if="todo.priority == 2" type="warning">중요</el-tag>
          <el-tag v-if="todo.priority == 3" type="gray">보통</el-tag>
        </div>
      </el-col>
      <el-col :span="21"><div class="grid-content" v-bind:class="todo.isComplete? 'done' : ''">{{ todo.content }}</div></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: [ 'todoList' ],
  data () {
    return {
      tableData: 'msg',
      checked: false
    }
  }
}
</script>
<style scoped>
  .done {
    color: darkgray;
    text-decoration: line-through;
  }
  .grid-content {
    border-radius: 4px;
    text-align: left;
  }
</style>
