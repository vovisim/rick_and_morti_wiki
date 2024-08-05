<template>
  <nav class="navbar sticky-top  navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="../assets/img/RickAndMorty.png"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Персонажи</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/episodes">Эпизоды</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/locations">Локации</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2 custom-search"  type="search" placeholder="Поиск" aria-label="Найти">
          <button class="btn btn-outline-success custom-button" type="submit">Найти</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss" scoped>
  .navbar {
    background: #fff;
    padding: 8px 120px;
  }
  .custom-search{
    border-color: #1A9DB3;

    &::placeholder{
      color: rgba(0, 0, 0, 0.18);
    }
    &:focus::placeholder{
      color: rgba(0, 0, 0, 0.38);
    }
  }
  .custom-button{
    border-color: #1A9DB3;
    background: rgba(26, 157, 179, 0.13);
    color: #000;
  }
  .nav-link{
    margin: 8px 70px;
  }
</style>
