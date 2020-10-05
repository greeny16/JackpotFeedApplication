<template>
  <span class="mustDrop"
    >Must drop in: &#x1F550; {{ hour | two_digits }} : {{ min | two_digits }} :
    {{ sec | two_digits }}
  </span>
</template>
<script>
export default {
  props: {
    date: String,
  },

  data() {
    return {
      hour: 0,
      min: 0,
      sec: 0,
    };
  },
  mounted() {
    let time = this.date.split(":").map((x) => +x);
    this.hour = time[0];
    this.min = time[1];
    this.sec = time[2];
    this.startCD();
  },
  methods: {
    startCD: function () {
      this.intervalid = setInterval(
        function () {
          if (this.sec == 0 && this.min == 0 && this.hour == 0) {
            clearInterval(this.intervalid);
          } else if (this.sec == 0) {
            this.sec = 59;
            if (this.min > 0) {
              this.min--;
            } else if (this.min == 0) {
              if (this.hour == 0) return;
              else {
                this.hour--;
                this.min = 59;
              }
            }
          } else {
            this.sec--;
          }
        }.bind(this),
        1000
      );
    },
  },
};
</script>
<style scoped>
</style>