<template>
  <div class="inputArea">
    <el-input
      placeholder="할 일을 입력해주세요."
      icon="search"
      v-on:keyup.enter="addTodoList"
      v-model="contentInput"
      >
      <el-select slot="prepend" placeholder="중요도" v-model="selectedPriority">
        <el-option label="매우 중요" value="1"></el-option>
        <el-option label="중요" value="2"></el-option>
        <el-option label="보통" value="3"></el-option>
      </el-select>
      <el-button slot="append" :loading="false" v-on:click="addTodoList">추가</el-button>
    </el-input>
  </div>
</template>
<script>
export default{
  props: ['todoList'],
  data () {
    return {
      contentInput: '',
      selectedPriority: ''
    }
  },
  methods: {
    addTodoList () {
      if (this.todoList) {
        if (this.selectedPriority === '' || this.selectedPriority === undefined) {
          return false
        }
        if (this.contentInput === '' || this.contentInput === undefined) {
          return false
        }
        this.todoList.push({
          priority: this.selectedPriority,
          content: this.contentInput,
          isComplete: false
        })
        this.contentInput = ''
      }
    }
  }
}
</script>
<style scope>
.el-select {
  width: 110px;
}

</style>
