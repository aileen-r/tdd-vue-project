<template>
  <div class="container">
      <!-- Button to edit document in dashboard -->
      <prismic-edit-button :documentId="documentId"/>

      <h1>{{ $prismic.richTextAsPlain(fields.title) }}</h1>
      <p>
        <span>{{ Intl.DateTimeFormat('en-GB', dateOptions).format(new Date(fields.date)) }}</span>
        &nbsp;&middot;&nbsp;
        <span>{{ fields.location }}</span>
      </p>

      <!-- Slice section template -->
      <section v-for="(slice, index) in slices" :key="'slice-' + index">
        <!-- Text slice template -->
        <template v-if="slice.slice_type === 'text'">
          <text-slice :text="slice.primary.text"/>
        </template>
        <!-- Image with caption slice template -->
        <template v-else-if="slice.slice_type === 'image'">
          <image-slice 
            :img="slice.primary.image"
            :caption="slice.primary.caption"
          />
        </template>
      </section>
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
  data () {
    return {
      dateOptions: { year: 'numeric', month: 'short', day: '2-digit' },
      documentId: '',
      fields: {
        title: null,
        date: null,
      },
      slices: []
    }
  },
  methods: {
    getContent (uid) {
      //Query to get post content
      this.$prismic.client.getByUID('blog_entry', uid)
        .then((document) => {
          if (document) {
            this.documentId = document.id
            this.fields.title = document.data.title
            this.fields.date = document.data.date
            this.fields.location = document.data.location;
            
            //Set slices as variable
            this.slices = document.data.body
          } 
          else {
            //returns error page
            this.$router.push({ name: 'not-found' })
          }
        })
    }
  },
  created () {
    this.getContent('hello-from-canada')
  },
  // beforeRouteUpdate (to, from, next) {
  //   this.getContent(to.params.uid)
  //   next()
  // }
}
</script>