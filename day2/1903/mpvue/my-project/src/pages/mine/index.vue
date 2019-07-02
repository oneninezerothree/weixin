<template>
  <view>
    <p v-text="title"></p>
    <p v-text="title"></p>
    <p v-text="title"></p>
    <p v-text="title"></p>
    <ul>
      <li v-for="(a,index) in arr" :key="index" v-text="a"></li>
    </ul>
    <search />
    <button @longtap="changeTitle">ok</button>
    <map
      id="map"
      longitude="113.324520"
      latitude="23.099994"
      scale="14"
      :controls="controls"
      @controltap="controltap"
      :markers="markers"
      @markertap="markertap"
      :polyline="polyline"
      @regionchange="regionchange"
      show-location
      style="width: 100%; height: 300px;"
    ></map>
    <camera device-position="back" flash="off" @error="error" style="width: 100%; height: 300px;"></camera>
  </view>
</template>
<script>
import store from '../../stores/store'
import search from '../../components/search'
export default {
  data () {
    return {
      title: 'hello world',
      arr: [1, 2, 3],
      markers: [
        {
          iconPath: '/resources/others.png',
          id: 0,
          latitude: 23.099994,
          longitude: 113.32452,
          width: 50,
          height: 50
        }
      ],
      polyline: [
        {
          points: [
            {
              longitude: 113.3245211,
              latitude: 23.10229
            },
            {
              longitude: 113.32452,
              latitude: 23.21229
            }
          ],
          color: '#FF0000DD',
          width: 2,
          dottedLine: true
        }
      ],
      controls: [
        {
          id: 1,
          iconPath: '/resources/location.png',
          position: {
            left: 0,
            top: 300 - 50,
            width: 50,
            height: 50
          },
          clickable: true
        }
      ]
    }
  },
  methods: {
    changeTitle () {
      this.title = 'hi'
    }
  },
  computed: {
    store () {
      console.log(store.state.count)
      return store.state.count
    }
  },
  components: {
    search
  }
}
</script>