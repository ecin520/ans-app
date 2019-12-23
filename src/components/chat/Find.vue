<template>
  <div class="find">
    <mu-list @change="findClick">
      <mu-divider></mu-divider>
      <mu-list-item value="dynamic" style="background-color: #ffffff" button>
        <mu-list-item-action>
          <mu-icon value="track_changes"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>动态</mu-list-item-title>
      </mu-list-item>
      <mu-divider></mu-divider>
      <br>

      <mu-divider></mu-divider>

      <mu-list-item style="background-color: #ffffff" button>
        <mu-list-item-action>
          <mu-icon value="record_voice_over"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>社区</mu-list-item-title>
      </mu-list-item>

      <mu-divider shallow-inset></mu-divider>

      <mu-list-item style="background-color: #ffffff" button>
        <mu-list-item-action>
          <mu-icon value="turned_in"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>收藏</mu-list-item-title>
      </mu-list-item>

      <mu-divider shallow-inset></mu-divider>

      <mu-list-item style="background-color: #ffffff" button>
        <mu-list-item-action>
          <mu-icon value="wallpaper"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>相册</mu-list-item-title>
      </mu-list-item>

      <mu-divider></mu-divider>

    </mu-list>


    <mu-drawer right width="100%" :docked="true" :open.sync="dynamicOpen">
      <mu-row>
        <mu-button @click="dynamicOpen = false" style="float: left" icon :color="this.$store.state.themColor">
          <mu-icon value="arrow_back"></mu-icon>
        </mu-button>
      </mu-row>


    </mu-drawer>


  </div>
</template>

<script>
    export default {
        name: "Find",
        data() {
            return {
                dynamicOpen: false
            }
        },
        methods: {
            findClick(value) {
                if (value === 'dynamic') {
                    this.dynamicOpen = true;
                }

                // this.$router.push({name: 'Dynamic'});
            }
        }
    }
</script>

<style scoped>

</style>
