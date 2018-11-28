<template>
  <label>
    <input type="checkbox">
    <span class="menu">
      <span class="hamburger"></span>
    </span>
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Work</a>
      </li>
    </ul>
  </label>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

label {
  .menu {
    position: absolute;
    right: -100px;
    top: -100px;
    z-index: 100;
    width: 200px;
    height: 200px;
    background: #fff;
    border-radius: 50% 50% 50% 50%;
    transition: 0.5s ease-in-out;
    box-shadow: 0 0 0 0 #fff, 0 0 0 0 #fff;
    cursor: pointer;
  }
  .hamburger {
    position: absolute;
    top: 135px;
    left: 50px;
    width: 30px;
    height: 2px;
    background: #000;
    display: block;
    transform-origin: center;
    transition: 0.5s ease-in-out;
    &:after,
    &:before {
      transition: 0.5s ease-in-out;
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background: #000;
    }
    &:before {
      top: -10px;
    }
    &:after {
      bottom: -10px;
    }
  }
  input {
    display: none;
  }
  input:checked + .menu {
    box-shadow: 0 0 0 100vw #fff, 0 0 0 100vh #fff;
    border-radius: 0;
    .hamburger {
      transform: rotate(45deg);
      &:after {
        transform: rotate(90deg);
        bottom: 0;
      }
      &:before {
        transform: rotate(90deg);
        top: 0;
      }
    }
  }

  input:checked + .menu + ul {
    opacity: 1;
  }

  ul {
    z-index: 200;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: 0.25s 0s ease-in-out;
  }

  a {
    margin-bottom: 1em;
    display: block;
    color: #000;
    text-decoration: none;
  }
}
</style>
