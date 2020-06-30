<template>
<!--Main Navigation-->
<header>
  <nav class="navbar navbar-expand-lg navbar-dark pink scrolling-navbar">
    <a class="navbar-brand" href="#"><strong>Vue Js Assigment</strong></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
      </ul>
    </div>
  </nav>

</header>
<!--Main Navigation-->
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

header{
    margin-bottom: 50px;
}

header nav{
    background: #000;
}
</style>