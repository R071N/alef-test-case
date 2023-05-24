<script>
export default {
  data() {
    return {
      name: '',
      age: '',
      children: [],
    };
  },
  methods: {
    addChild() {
      this.children.push({ name: '', age: '' });
    },
    removeChild(index) {
      this.children.splice(index, 1);
    },
    saveData() {
      const data = { name: this.name, age: this.age, children: this.children };
      localStorage.setItem('data', JSON.stringify(data));
      alert('Данные сохранены!');
    },
  },
};
</script>

<template>
  <main class="main">
    <section>
      <form @submit.prevent="saveData">
        <div class="data-personal">
          <h2 class="main__title">Персональные данные</h2>
          <div class="main__block">
            <label class="main__block__label">Имя:</label>
            <input class="main__block__input" type="text" v-model="name" required>
          </div>
          <div class="main__block">
            <label class="main__block__label">Возраст:</label>
            <input class="main__block__input" type="number" v-model="age" required>
          </div>
        </div>
        <div class="children">
          <div class="children__add">
            <h2 class="main__title" v-if="children.length > 0">Дети (макс. 5)</h2>
            <button class="btn btn__add" @click="addChild" :disabled="children.length >= 5">
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M2.13332 7.85555C1.50125 7.85555 0.988866 8.36794 0.988867 9C0.988867 9.63206 1.50126 10.1445 2.13332 10.1445L7.85544 10.1445L7.85545 15.8668C7.85545 16.4989 8.36784 17.0113 8.9999 17.0113C9.63196 17.0113 10.1444 16.4989 10.1444 15.8668L10.1443 10.1445L15.8667 10.1445C16.4988 10.1445 17.0112 9.63207 17.0112 9.00001C17.0112 8.36795 16.4988 7.85556 15.8667 7.85556L10.1443 7.85556L10.1443 2.13338C10.1443 1.50132 9.63195 0.988927 8.99989 0.988927C8.36783 0.988927 7.85544 1.50131 7.85544 2.13338L7.85544 7.85555L2.13332 7.85555Z"
                  fill="#01A7FD" />
              </svg>
              <span>Добавить ребенка</span>
            </button>
          </div>
          <div class="children__block" v-for="(child, index) in children" :key="index">
            <div class="main__block">
              <label class="main__block__label">Имя:</label>
              <input class="main__block__input" type="text" v-model="child.name" required>
            </div>
            <div class="main__block">
              <label class="main__block__label">Возраст:</label>
              <input class="main__block__input" type="number" v-model="child.age" required>
            </div>
            <button class="btn" @click="removeChild(index)">Удалить</button>
          </div>
        </div>
        <button class="btn btn__save" type="submit">Сохранить</button>
      </form>
    </section>
  </main>
</template>

<style></style>
