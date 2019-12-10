<template>
    <div class="contest-page">


        <div class="title-bar">
          <mu-appbar style="width: 100%;" color="#ba68c8">
            <mu-button @click="open = true" icon slot="left">
              <mu-icon value="menu"></mu-icon>
            </mu-button>
            {{title}}
          </mu-appbar>
          <mu-tabs color="#ba68c8" indicator-color="#ba68c8" full-width>
            <mu-tab>
              <!--                    <mu-icon value="line_style"></mu-icon>-->
              <!--                    Make your choice-->
            </mu-tab>
          </mu-tabs>

        </div>

        <scroller>
          <br><br><br><br><br><br>
        <mu-drawer width="100%" :docked="true" :open.sync="open">
          <mu-button @click="open = false" style="float: right" icon color="#ba68c8">
            <mu-icon value="home"></mu-icon>
          </mu-button>
        </mu-drawer>

        <div style="margin: 8px;height: 250px;padding: 8px;">
          <mu-row>
            <!--                <h2>书山有路勤为径</h2>-->
          </mu-row>
          <mu-row>
            <mu-col span="6">
              <mu-button style="width: 95%;height: 120px;" color="#66bb6a">
                <mu-icon size="90" value="av_timer"></mu-icon>
              </mu-button>
            </mu-col>
            <mu-col span="6">
              <mu-button style="width: 95%;height: 55px;" color="#26a69a">
                我要出题
              </mu-button>
              <mu-button style="width: 95%;height: 55px;margin-top: 10px;" color="#26a69a">
                我的出题
              </mu-button>
            </mu-col>
          </mu-row>
          <br><br>
          <mu-row>
            <!--                <h2>学海无涯苦作舟</h2>-->
          </mu-row>
          <mu-row>
            <mu-col span="6">
              <mu-button style="width: 95%;height: 55px;" color="#cddc39">
                比赛记录
              </mu-button>
              <mu-button style="width: 95%;height: 55px;margin-top: 10px;" color="#cddc39">
                我的答题统计
              </mu-button>
            </mu-col>
            <mu-col span="6">
              <mu-button style="width: 95%;height: 120px;" color="#81d4fa">
                <mu-icon size="90" value="memory"></mu-icon>
              </mu-button>
            </mu-col>
          </mu-row>
          <br><br><br>
        </div>

      </scroller>

    </div>
</template>

<script>
    export default {
        name: "ContestPage",
        data() {
            return {
                title: 'Contest',
                open: false,
                progress: '12'
            }
        }
    }
</script>

<style scoped>
    .title-bar {
        position: sticky;
        top: 0;
        z-index: 1;
    }
</style>
