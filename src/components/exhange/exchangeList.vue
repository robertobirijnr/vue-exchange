<template>
    <div class="columns is-multiline">
          <div v-for="exchange in exchanges" :key="exchange.type" class="column is-12-mobile is-6-tablet is-4-widescreen is-6-desktop">
            <div class="item post-card bottom-border">
              <a class="item-link" href="#">
                <figure class="image is-2by1 item-figure background-img" :style="{ 'background-image': `url(${exchange.image})` }" alt="">
                </figure>
                <div class="item-featured">
                  <div class="awesome-icon">
                    <font-awesome-icon icon="star"/>
                  </div>
                 
                </div>
              </a>
              <div v-for="tag in exchange.tags" :key="tag" class="item-tags">
                <a class="button is-rounded" href="#" title="Some Title">#{{tag}}</a>
              </div>
              <h2 class="title item-title is-size-4 has-text-weight-extra-bold"><a class="item-link" href="#">{{exchange.title}}</a></h2>
              <div class="level">
                <div class="level-left">
                  <div class="item-author">{{exchange.user}}</div>
                </div>
                <div class="level-right">
                  27th December 2019
                </div>
              </div>
            </div>
          </div>
          <div class="column is-12-mobile is-6-tablet is-4-widescreen is-6-desktop">
            <div class="item post-card has-border">
              <a class="item-link" href="#">
                <div class="item-featured">
                  Icon
                </div>
              </a>
              <div  class="item-tags">
                <a class="button is-rounded" href="#" title="Some Title">3Art</a>
              </div>
              <h2 class="title item-title is-size-4 has-text-weight-extra-bold"><a class="item-link" href="#">Some Title</a></h2>
              <div class="item-description">
                Aaaaaaa
              </div>
              <div class="level">
                <div class="level-left">
                  <div class="item-author">Filip Jerga</div>
                </div>
                <div class="level-right">
                  27th December 2019
                </div>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  data:function(){
    return{
    exchanges:[{
          id: "ad7asdsa68dasd",
          type: "product", // service or product
          title: "I have Driller",
          description: "I will exchange this super driller...",
          value: 20, // value per hour in case of service,
          user: "2398173193",
          image: "https://images.unsplash.com/photo-1458829549177-e9a8f3db5b14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
          country: "Germany",
          city: "Berlin",
          status: "active",
          tags: ["tools","helping"] // can be active/inactive,
        },
        {
          id: "ad7asdsa68dasd",
          type: "service", // service or product
          title: "I will teach programming",
          description: "I will make you super programmer",
          value: 20, // value per hour in case of service,
          user: "2398173193",
          image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
          country: "Germany",
          city: "Berlin",
          status: "active", // can be active/inactive
          tags:["Nodejs","VueJs"]
        }]
    }
  }
}
</script>

<style>
  .font-awesome-icon{
    height: 25px;
    width: 25px;
    background-color: #ffbc8c;
    display:flex;
    align-items: center;
    justify-content: center;
  }
</style>