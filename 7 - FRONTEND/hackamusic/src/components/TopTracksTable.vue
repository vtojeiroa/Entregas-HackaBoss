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
  width: 90%;
  background: rgba(153, 144, 144, 0.749);
  display: flex;
  flex-direction: row;
  padding: 0.3rem 0;
  margin-bottom: 0.5rem;
}
.position_tracks {
  align-self: center;
  color: aquamarine;
  flex-basis: 20%;
  font-size: 40px;
  text-align: center;
}

img {
  width: 60px;
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
  text-shadow: 1px 1px green;
  padding: 0.1rem;
  font-size: 0.7rem;
  font-weight: bolder;
}
p.name {
  font-size: 0.75rem;
}

a {
  color: white;
  text-shadow: 1px 1px green;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.9rem;
}
.data_tracks {
  display: flex;
  justify-content: center;
}

@media (min-width: 400px) {
  li.li_tracks {
    width: 80%;
  }
  .position_tracks {
    font-size: 45px;
  }

  img {
    width: 80px;
  }

  .tracks p {
    font-size: 0.75rem;
  }

  a {
    text-shadow: 1px 1px green;
    font-size: 1rem;
  }
}

@media (min-width: 600px) {
  li.li_tracks {
    width: 90%;
  }
  .position_tracks {
    font-size: 50px;
  }

  img {
    width: 120px;
  }

  .tracks p {
    font-size: 1.2rem;
  }

  a {
    text-shadow: 2px 2px green;
    font-size: 1.75rem;
  }
}

@media (min-width: 900px) {
  li.li_tracks {
    width: 80%;
  }
  .position_tracks {
    font-size: 80px;
  }
  img {
    width: 140px;
  }

  .tracks p {
    font-size: 1.25rem;
    padding: 1rem 1rem;
  }

  a {
    text-shadow: 3px 3px green;
    font-size: 2.25rem;
  }
}
@media (min-width: 1200px) {
  li.li_tracks {
    width: 50%;
    max-width: 800px;
  }
  .position_tracks {
    font-size: 80px;
  }
  img {
    width: 140px;
  }

  .tracks p {
    font-size: 1.25rem;
    padding: 1rem 1rem;
  }

  a {
    text-shadow: 3px 3px green;
    font-size: 2.25rem;
  }
}
</style>
