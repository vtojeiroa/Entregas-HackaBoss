<template>
  <div>
    <ul class="container_tracks">
      <li class="li_tracks" v-for="(track, index) in tracks" :key="track.id">
        <p class="position_tracks">{{ index + 1 }}</p>
        <img :src="track.image[2]['#text']" />
        <section class="tracks">
          <p class="track">
            <a :href="track.url" target="_blank">
              <br />
              {{ track.name }}
            </a>
          </p>
          <article class="data_tracks">
            <p>
              Artista / Grupo:
              <br />
              {{ track.artist.name }}
            </p>
            <p>
              Oyentes:
              <br />
              {{ track.listeners }}
            </p>
          </article>
        </section>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopTraksTable",
  props: {
    tracks: Array
  }
};
</script>

<style scoped>
ul.container_tracks {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
li.li_tracks {
  justify-content: center;
  border: 2px solid blue;
  border-radius: 20px;
  width: 40%;
  background: rgba(153, 144, 144, 0.749);
  display: flex;
  flex-direction: row;
  padding: 0.3rem 0;
  margin-bottom: 0.5rem;
}
.position_tracks {
  align-self: center;
  font-size: 80px;
  color: aquamarine;
  flex-basis: 20%;
  font-size: 80px;
  text-align: center;
}

img {
  border-radius: 50%;
}
.tracks {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 2;
}

.tracks p {
  color: rgb(168, 33, 67);
  text-shadow: 2px 2px green;
  padding: 0.5rem;
  font-size: 1.25rem;
  font-weight: bolder;
}
p.name {
  font-size: 1.5rem;
}

a {
  color: white;
  text-shadow: 3px 3px green;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 2rem;
}
.data_tracks {
  display: flex;
  justify-content: center;
}
</style>
