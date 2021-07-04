<template>
  <div style="padding: 20px">
    <div class="panel panel-primary">
      <div class="panel-heading">用户管理</div>
      <table class="table table-bordered table-striped text-center">
        <thead>
          <tr>
            <th style="width: 25%" v-for="(item, index) in title" :key="index">
              {{ item }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index" :class="{'first': index === 0}" :style="{color: index===0 ? 'red':'blue'}">
            <td>{{ index + 1 }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.school }}</td>
            <td><button v-on:click="remove(index)">remove</button></td>
          </tr>
          <tr>
            <td></td>
            <td><input type="text" id="name" v-model="user.name" /></td>
            <td><input type="text" id="age" v-model="user.age" /></td>
            <td><input type="text" id="school" v-model="user.school" /></td>
            <td><button @click="insert">insert</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
export default {
  name: "Table",
  data() {
    return {
      user: { name: "", age: "", school: "" },
      users: [
        { name: "xx", age: "25", school: "hdu" },
        { name: "ss", age: "23", school: "hdu" },
        { name: "rr", age: "22", school: "hdu" },
      ],
      title: ["序号", "用户名", "年龄", "学校", "操作"],
    };
  },
  methods: {
    insert: function () {
      this.users.push(this.user);
    },
    remove: function (index) {
      this.users.splice(index, 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
tr,
th {
  text-align: center;
}
.first {
    color: #f5f5f5;
    background: lightblue;
}
</style>
