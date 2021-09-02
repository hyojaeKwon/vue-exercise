<template>
  <RouterLink 
    to="/"
    class="logo"
  >
    <span>OMBbAPI</span>.COM
  </RouterLink>
</template>

<style lang="scss" scoped>
@import "../scss/main.scss";

  .logo{
    font-size: 20px;
    text-decoration: none;
    color: $black;
    &:hover{
      color: $black;
    }
    span{
      color: $primary;
    }
  }
</style>