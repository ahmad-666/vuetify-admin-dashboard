<template>
  <div id="map-wrap" :style="{ width: '100%', height: '50vh' }">
    <client-only>
      <l-map
        :options="{
          zoomControl: true,
          attributionControl: false,
          doubleClickZoom: true,
          dragging: true,
        }"
        :zoom="16"
        :center="[36.2605, 59.6168]"
      >
        <l-tile-layer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker :lat-lng="[36.2605, 59.6168]" :draggable="true"></l-marker>
      </l-map>
    </client-only>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped></style>
