<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="eventName"
        label="事件名称"
        align="center"
        min-width="11%"
      ></el-table-column>
      <el-table-column
        prop="startTime"
        label="事件发生时间"
        :formatter="formatterTime"
        align="center"
        min-width="11%"
      ></el-table-column>
      <el-table-column
        prop="countryId"
        label="国家"
        align="center"
        min-width="11%"
      ></el-table-column>
      <el-table-column
        prop="people"
        label="人物"
        align="center"
        min-width="11%"
      ></el-table-column>
      <el-table-column
        prop="grade"
        label="等级"
        align="center"
        min-width="11%"
      ></el-table-column>
      <el-table-column
        prop="infrastructures"
        label="建筑物"
        align="center"
        min-width="11%"
      ></el-table-column>
      <el-table-column
        prop="arms"
        label="军事要素"
        align="center"
        min-width="11%"
      ></el-table-column>
      <el-table-column
        prop="natureDisaster"
        label="自然要素"
        align="center"
        min-width="11%"
      ></el-table-column>
      <el-table-column
        prop="emotionScore"
        label="情感分数"
        align="center"
        min-width="11%"
      ></el-table-column>
      <el-table-column
        prop="eventEffect"
        label="影响力"
        align="center"
        min-width="11%"
      ></el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="11%"
      >
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.row)"
            type="text"
            size="small"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      :total="total"
      :Emotion="cEmotion"
      @PageNum="CpageNum"
    ></pagination>
  </div>
</template>

<script>
import pagination from "@/components/layout/general/original/Pagination.vue";
import { formatterDateStr, formatterDate } from "@/utils/filter.js";

export default {
  name: "CtuTable",
  props: {
    ctdData: Object,
    CEmotion: Object
  },
  watch: {
    ctdData: function(newData, oldData) {
      if (newData) {
        this.tableData = newData.list;
        this.total = newData.total;
      }
    },
    CEmotion: function(newData, oldData) {
      if (newData) {
        this.cEmotion=newData
      }
    }
  },
  data() {
    return {
      tableData: [],
      total: 0,
      cEmotion: {}
    };
  },
  components: {
    pagination
  },
  methods: {
    formatterTime(val) {
      return formatterDateStr(val.startTime);
    },
    CpageNum(value) {
      this.$emit("CpageNum", value);
    },
    deleteRow(row) {
      this.$emit("Cid", row.id);
    }
  }
};
</script>

<style lang='less' scoped>
</style>
