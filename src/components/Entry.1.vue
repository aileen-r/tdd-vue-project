<template>
<div>
    <template v-if="loading">
      <div class="d-flex justify-content-center mb-5">
        <b-spinner type="grow" label="Loading..."></b-spinner>
      </div>
    </template>

    <template v-else>
      <!-- Add transition -->

      <!-- Contains <a> with class="wio-link" -->
      <prismic-edit-button :documentId="entryId" />

      <h1>{{ $prismic.richTextAsPlain(fields.title) }}</h1>
      <p>
        <span>{{
          Intl.DateTimeFormat('en-GB', dateOptions).format(new Date(fields.date))
        }}</span>
        &nbsp;&middot;&nbsp;
        <span>{{ fields.location }}</span>
      </p>

      <!-- Slice section template -->
      <section v-for="(slice, index) in slices" :key="'slice-' + index">
        <!-- Text slice template -->
        <template v-if="slice.slice_type === 'text'">
          <text-slice :text="slice.primary.text" />
        </template>
        <!-- Image with caption slice template -->
        <template v-else-if="slice.slice_type === 'image'">
          <image-slice
            :img="slice.primary.image"
            :caption="slice.primary.image_caption"
          />
        </template>
      </section>
    </template>
</div>
</template>

<script>
import TextSlice from './slices/TextSlice';
import ImageSlice from './slices/ImageSlice';
export default {
  name: 'Post',
  components: {
    ImageSlice,
    TextSlice
  },
  data() {
    return {
      dateOptions: { year: 'numeric', month: 'short', day: '2-digit' },
      entryId: '',
      fields: {
        title: null,
        date: null
      },
      loading: true,
      slices: []
    };
  },
  methods: {
    async getContent(uid) {
      const entry = await this.$prismic.client.getByUID('blog_entry', uid);
      if (entry) {
        this.entryId = entry.id;
        this.fields.title = entry.data.title;
        this.fields.date = entry.data.date;
        this.fields.location = entry.data.location;
        this.slices = entry.data.body;
        this.loading = false;
      } else {
        this.$router.push({ name: 'not-found' });
      }
    }
  },
  created() {
    this.getContent('hello-from-canada');
  }
  // beforeRouteUpdate (to, from, next) {
  //   this.getContent(to.params.uid)
  //   next()
  // }
};
</script>
<style>
.wio-link {
  float: right;
  padding: 5px 10px;
  margin: 8px 5px;
}
</style>
