<template>
  <div>
    <ul class="container_artists">
      <li class="li_artists" v-for="(artist, index) in artists" :key="artist.id">
        <p class="position_artists">{{ index + 1 }}</p>
        <img :src="artist.image[2]['#text']" />
        <section class="artists">
          <p class="name">
            Artista / Grupo:
            <a :href="artist.url" target="_blank">
              <br />
              {{ artist.name }}
            </a>
          </p>
          <p>
            Oyentes:
            <br />
            {{ artist.listeners }}
          </p>
        </section>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopArtistsTable",
  props: {
    artists: Array
  }
};
</script>

<style scoped>
ul.container_artists {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
li.li_artists {
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
.position_artists {
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
.artists {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 2;
}

.artists p {
  color: rgb(168, 33, 67);
  text-shadow: 1px 1px green;
  padding: 0.2rem;
  font-size: 0.8rem;
  font-weight: bolder;
}
p.name {
  font-size: 0.75rem;
}

a {
  color: white;
  text-shadow: 1px 1px green;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1rem;
}
@media (min-width: 400px) {
  li.li_artists {
    width: 80%;
  }
  .position_artists {
    font-size: 45px;
  }

  img {
    width: 100px;
  }

  .artists p {
    font-size: 1rem;
  }
  p.name {
    font-size: 1rem;
  }

  a {
    text-shadow: 1px 1px green;
    font-size: 1.5rem;
  }
}
@media (min-width: 600px) {
  li.li_artists {
    width: 70%;
  }
  .position_artists {
    font-size: 50px;
  }

  img {
    width: 120px;
  }

  .artists p {
    font-size: 1.2rem;
  }
  p.name {
    font-size: 1.3rem;
  }

  a {
    text-shadow: 2px 2px green;
    font-size: 1.75rem;
  }
}

@media (min-width: 900px) {
  li.li_artists {
    width: 60%;
    max-width: 800px;
  }
  .position_artists {
    font-size: 80px;
  }

  .artists p {
    font-size: 1.25rem;
  }

  p.name {
    font-size: 1.5rem;
  }

  a {
    text-shadow: 3px 3px green;
    font-size: 2rem;
  }
}
</style>