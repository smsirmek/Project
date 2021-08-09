<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post,index) in sampleBlogPost" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View more Blog Market</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
import BlogCard from "../components/BlogCard";
export default {
  name: "Home",
  components: {BlogPost,BlogCard},
  data(){
    return{
      welcomeScreen:{
        title: "Welcome",
        BlogPost: "Register to create BlogMarket",
        welcomeScreen: true,
        photo: "coding",

      },
      sampleBlogPost:[
        {
          title: "test 1",
          blogHTML: "test test",
          blogCoverPhoto: "beautiful-stories",
      },
      {
          title: "test 2",
          blogHTML: "test test test",
          blogCoverPhoto: "designed-for-everyone",
      },
      ],
    };
  },
  computed:{
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-card-wrap{
  h3{
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
</style>