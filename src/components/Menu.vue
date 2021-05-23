<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav-links">
        <li class="link">
          <router-link to="/">Tất cả sản phẩm</router-link>
        </li>
        <li class="link">
          <router-link to="/LamSach">Làm sạch</router-link>
        </li>
        <li class="link">
          <router-link to="/DuongDa">Dưỡng da</router-link>
        </li>
        <!-- <li class="link">
          <router-link to="/TrangDiemNen">Trang điểm nền</router-link>
        </li> -->
        <li class="link">
          <router-link to="/ChamSocCoThe">Chăm sóc cơ thể</router-link>
        </li>
        <li class="link">
          <router-link to="/PhuKien">Phụ kiện</router-link>
        </li>
      </ul>
    </nav>
    <slot></slot>
  </header>
</template>

<script>
export default {
};
</script>

<style scoped>
  .header {
    width: 100%;
    height: 70px;
    background-color: #333333;
    box-sizing: border-box;
    padding: .5em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav {
    width: 950px;
    position: relative;
    left:80px;
  }

  .nav-links {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .link {
    list-style: none;
    padding: 0 2em;
  }

  .link a:hover{
    color:red;
  }

  .link a {
    color: #fff;
    text-decoration: none;

  }
</style>
