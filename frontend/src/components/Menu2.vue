<template>
  <div>
    <div class="hamburger">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <div class="menu">
      <div class="menu-item">Home</div>
      <div class="menu-item">About</div>
      <div class="menu-item">Contact</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>


.hamburger {
  position: absolute;
  margin: 50px;
  z-index: 2;
  cursor: pointer;
}

.line {
  width: 50px;
  height: 6px;
  background: #BCAD90;
  margin-bottom: 5px;
}

.menu {
  width: 320px;
  height: 100%;
  background: #BCAD90;
  position: fixed;
  top: 0;
  left: -320px;
  transition: left .1s;
}

.menu-item:first-child {
  margin-top: 180px;
}

.menu--open {
  left: 0;
}

.menu-item {
  color: #fff;
  width: 100%;
  padding: 1rem 3rem;
  box-sizing: border-box;
}

.menu-item:hover {
  background: #91966E;
  cursor: pointer;
}
</style>
