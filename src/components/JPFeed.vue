<template>
  <div class="content">
    <div class="logo"></div>
    <div>
      <div class="dailyDrop">
        <div></div>
        <h1 v-if="dailyDrop != undefined">
          {{ dailyDrop.currency }}
          <IOdometer class="iOdometer" :value="dailyDrop.amount" />
        </h1>
        <CountDown v-if="dailyDrop != undefined" :date="dailyDrop.must_drop_in">
        </CountDown>
      </div>
      <div class="superDrop">
        <table>
          <tr>
            <td><img src="../assets/2.png" /></td>
            <td>
              <span v-if="superDrop != undefined"
                >{{ superDrop.currency }}
                <IOdometer class="iOdometer" :value="superDrop.amount"
              /></span>
            </td>
          </tr>
        </table>
      </div>
      <div class="hourlyDrop">
        <table>
          <tr>
            <td><img src="../assets/3.png" /></td>
            <td>
              <span v-if="hourlyDrop != undefined">
                {{ hourlyDrop.currency }}
                <IOdometer class="iOdometer" :value="hourlyDrop.amount" />
              </span>
              <br />
              <CountDown
                v-if="hourlyDrop != undefined"
                :date="hourlyDrop.must_drop_in"
              >
              </CountDown>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CountDown from "../components/CountDown.vue";

import IOdometer from "vue-odometer";
import "odometer/themes/odometer-theme-default.css";
export default {
  components: {
    CountDown,
    IOdometer,
  },
  created() {
    // this.fetchPots();
  },

  computed: {
    ...mapState({
      dailyDrop: (state) =>
        state.jackpot.pots.filter((x) => x.imageType === "daily_drop")[0],
      superDrop: (state) =>
        state.jackpot.pots.filter((x) => x.imageType === "super_drop")[0],
      hourlyDrop: (state) =>
        state.jackpot.pots.filter((x) => x.imageType === "hourly_drop")[0],
      pots: (state) => state.jackpot.pots,
      potsIsLoading: (state) => state.jackpot.potsIsLoading,
    }),
  },
  mounted() {
    this.fetchPots();
    this.reloadData();
  },
  methods: {
    reloadData: function () {
      this.intervalid = setInterval(() => this.fetchPots(), 30000);
    },
    formatCurrency(amount) {
      var formatter = new Intl.NumberFormat("en-US", {
        currency: "USD",
      });

      return formatter.format(amount);
    },
    fetchPots() {
      this.$store.dispatch("fetchPots");
    },
  },
};
</script>
<style scoped>
div {
  max-width: 300px;
  min-width: 150px;
}
.dailyDrop {
  background-repeat: no-repeat;
  background-size: 130%;
  box-shadow: inset 0 0 20px 10px#282a5d;
  margin: 10px 0 0 0;
}
.dailyDrop > div {
  height: 120px;
}
.hourlyDrop,
.superDrop {
  background-image: url("../assets/stars.png");
  background-position: bottom;
  background-repeat: no-repeat;
  width: 100%;
  margin: 15px 0;
  box-shadow: inset 0 0 20px 10px#282a5d;
  /* background: rgba(71, 118, 245, 0.1); */
}
.hourlyDrop img {
  margin: 10px;
}

.content {
  height: 100%;
  margin: 0;
  background-position: center;
  background-image: url("../assets/bg.png");
  background-size: 100% auto;
  background-repeat: repeat-y;
  margin: 0 auto;
  overflow: auto;
}
.content > div {
  box-shadow: inset 0 0 40px 5px#282a5d;
  margin: -150px 10px;
  padding: 5px 0;
  border-radius: 10px;
}
.content > .logo {
  background: url("../assets/1.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 120%;
  height: 250px;
  margin: 0px 0 0 0;
  width: 120%;
  box-shadow: none;
}
.dailyDrop > h1 {
  background-image: url("../assets/box.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  width: 100%;
  margin: 0;
  display: block;
  color: #f9fd74;
  padding: 10px 0px;
}
img {
  max-width: 100%;
  max-height: 100%;
  margin: 10px;
}
table td:first-child {
  width: 35%;
}
.superDrop span,
.hourlyDrop span {
  color: #f9fd74;
  padding: 10px 0px;
  font-size: x-large;
  margin: 0;
}
.dailyDrop .mustDrop {
  margin: 20px 0;
  padding: 5px 15px;
  border-radius: 50px;
  color: white;
  background: black;
  display: inline-block;
  font-size: small;
}
.hourlyDrop .mustDrop {
  font-size: x-small;
  color: white;
  background: black;
  padding: 5px 5px;
  border-radius: 50px;
}
</style>