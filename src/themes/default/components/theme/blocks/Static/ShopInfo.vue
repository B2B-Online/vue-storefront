<template>
  <div class="shop-info">
    <div class="container">
      <ul>
        <li class="delivery">
          Dostawa Gratis
          <br>
          <span>od 300 zł brutto</span>
        </li>
        <li class="return">
          30 dni na zwrot
          <br>
          <span>Bez podania przyczyny</span>
        </li>
        <li class="warranty">
          Garancja oryginalności
          <br>
          <span>Sprzedajemy tylko oryginalne produkty</span>
        </li>
        <li class="security">
          Bezpieczne zakupy
          <br>
          <span>Ochrona do 10 tys. zł i min. 2 lata gwarancji</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.shop-info {
  background: #f7f9fc;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0px;
    padding: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
    li {
      font-size: 18px;
      font-weight: normal;
      line-height: 18px;
      color: #000000;
      padding-right: 0px;
      position: relative;
      display: block;
      padding-top: 10px;
      padding-bottom: 10px;
      box-sizing: border-box;
      span {
        font-size: 14px;
        line-height: 18px;
      }
      &:before {
        position: absolute;
        content: "";
        display: block;
      }
      &.delivery {
        padding-left: 80px;
        &:before {
          position: absolute;
          background: url("/assets/atat/delivery.svg") no-repeat;
          background-size: cover;
          width: 68px;
          height: 36px;
          top: 0px;
          bottom: 0px;
          left: 0px;
          margin: auto;
        }
      }
      &.return {
        padding-left: 80px;
        &:before {
          position: absolute;
          background: url("/assets/atat/return.svg") no-repeat;
          background-size: cover;
          width: 27px;
          height: 29px;
          top: 0px;
          bottom: 0px;
          left: 40px;
          margin: auto;
        }
      }
      &.warranty {
        padding-left: 80px;
        &:before {
          position: absolute;
          background: url("/assets/atat/warranty.svg") no-repeat;
          background-size: cover;
          width: 29px;
          height: 36px;
          top: 0px;
          bottom: 0px;
          left: 40px;
          margin: auto;
        }
      }
      &.security {
        padding-left: 80px;
        &:before {
          position: absolute;
          background: url("/assets/atat/security.svg") no-repeat;
          background-size: cover;
          width: 32px;
          height: 35px;
          top: 0px;
          bottom: 0px;
          left: 40px;
          margin: auto;
        }
      }
      @media (max-width: 1200px) {
        width: 35%;
      }
      @media (max-width: 992px) {
        width: 50%;
      }
      @media (max-width: 576px) {
        width: 80%;
      }
    }
  }
}
</style>
