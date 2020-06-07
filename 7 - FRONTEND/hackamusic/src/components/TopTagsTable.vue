<template>
  <div class="tag">
    <ul class="container_tags">
      <li class="tags" v-for="(tag, index) in tags" :key="tag.id">
        <p class="position_tags">{{ index + 1 }}</p>
        <p class="url_tags">
          <a :href="tag.url" target="_blank">{{ tag.name }}</a>
        </p>
        <section class="data_tags">
          <p>
            Taggings:
            <br />
            {{ tag.taggings }}
          </p>
          <p>
            Reach:
            <br />
            {{ tag.reach }}
          </p>
        </section>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopTagsTable",
  props: {
    tags: Array
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");
.tag {
  margin: 0 auto;
  padding: 0.5rem;
}

ul.container_tags {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(3, 30%);
  grid-auto-rows: minmax(175px, auto);
  justify-content: center;
  justify-items: center;
}
li.tags {
  border: 6px solid blue;
  border-radius: 20px;
  padding: 0.5rem;
  width: 70%;
  height: 100%;
  background: rgba(10, 156, 230, 0.549);
}
.position_tags {
  display: inline-block;
  border-radius: 50%;
  width: 5rem;
  color: rgb(41, 245, 245);
  text-shadow: 3px 3px black;
  font-size: 2rem;
  padding: 1rem 0;
  border: 4px solid rgb(41, 245, 245);
}
.url_tags {
  font-size: 2rem;
  text-transform: uppercase;
  padding: 0.5rem 0;
}

.data_tags {
  display: flex;
  justify-content: center;
}

.data_tags p {
  color: rgb(168, 33, 67);
  text-shadow: 2px 2 px black;
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: bolder;
  background: rgba(10, 156, 230, 0.549);
}

a {
  color: white;
  text-shadow: 3px 3px red;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 2rem;
}
</style>
