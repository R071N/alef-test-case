<script>
export default {
  data() {
    return {
      data: JSON.parse(localStorage.getItem('data')) || {},
    };
  },
};
</script>

<template>
  <main class="main">
    <section class="preview" v-if="data.name && data.age">
      <h2 class="main__title">Персональные данные</h2>
      <div class="preview__text">{{ data.name }}, {{ data.age }}
        <span v-if="data.age % 10 === 1 && data.age % 100 !== 11">
          год
        </span>
        <span v-else-if="data.age % 10 >= 2 && data.age % 10 <= 4 && (data.age % 100 < 10 || data.age % 100 >= 20)">
          года
        </span>
        <span v-else>
          лет
        </span>
      </div>
      <h2 class="main__title preview__title">Дети:</h2>
      <ul class="preview__list" v-if="data.children.length">
        <li class="preview__text preview__item" v-for="(child, index) in data.children" :key="index">
          {{ child.name }}, {{ child.age }}
          <span v-if="child.age % 10 === 1 && child.age % 100 !== 11">
            год
          </span>
          <span v-else-if="child.age % 10 >= 2 && child.age % 10 <= 4 && (child.age % 100 < 10 || child.age % 100 >= 20)">
            года
          </span>
          <span v-else>
            лет
          </span>
        </li>
      </ul>
      <p v-else>Нет данных о детях</p>
    </section>
    <section v-else>
      <h2>Нет данных</h2>
    </section>
  </main>
</template>

<style></style>
