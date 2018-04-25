<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="list of lists" :key="list.id">
          <td>
            <input type="checkbox" v-model="list.checked">
          </td>
          <td>{{ list.name }}</td>
          <td>{{ list.age }}</td>
          <td>{{ list.sex }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DynamicTable',
  data () {
    return {
      lists: []
    }
  },
  created () {
    this.lists.push({
      name: '张三',
      age: 12,
      sex: '男',
      checked: false
    })

    this.lists.push({
      name: '张三',
      age: 12,
      sex: '男',
      checked: false
    })
  }
}
</script>

<style scoped lang="scss">
  table {
    width: 100%;
    th, td {
      text-align: center;
    }
  }
</style>
