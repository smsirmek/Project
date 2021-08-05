<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post,index) in sampleBlogPost" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View more Blog Market</h3>
        <div class="blog-cards">
          <BlogCards :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
import BlogCards from "../components/BlogCard";
export default {
  name: "Home",
  components: {BlogPost,BlogCards},
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
      sampleBlogCards:[
        
        { blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogDate: "Aug 1,2021"},
        { blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogDate: "Aug 1,2021"},
        { blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogDate: "Aug 1,2021"},
        { blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogDate: "Aug 1,2021"},
      ],
    };
  },

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