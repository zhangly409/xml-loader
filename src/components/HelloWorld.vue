<template>
  <div class="hello">
    <!-- <h3>物料 Mock 自动化工具</h3>
    <div>
      <div class="unit">
        <el-button type="info">增量物料查询</el-button>
        <el-form :model="incrementUnit">
          <div style="display: flex;justify-content: space-between" class="item-row">
            <el-form-item label="开始时间" required class="inline-item">
              <el-date-picker
                style="width: 100%;"
                v-model="incrementUnit.startTime"
                type="datetime"
                placeholder="选择日期时间">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="结束时间" required class="inline-item">
              <el-date-picker
                v-model="incrementUnit.endTime"
                type="datetime"
                placeholder="选择日期时间">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="增量个数" required class="inline-item">
              <el-input
                v-model="incrementUnit.increment"
                placeholder="填写增量">
              </el-input>
            </el-form-item>
            <el-form-item label="分片数" required class="inline-item">
              <el-select v-model="incrementUnit.fragment" placeholder="请选择">
                <el-option
                  v-for="item in fragmentOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="计划类型" required class="inline-item">
              <el-input
                v-model="incrementUnit.planType"
                placeholder="填写类型">
              </el-input>
            </el-form-item>
            <el-form-item label="流水环境" required class="inline-item">
              <el-select v-model="incrementUnit.environment" placeholder="请选择">
                <el-option
                  v-for="item in environmentOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="inline-item">
              <div slot="label">操作</div>
              <el-button type="primary" @click="handleSubmitIncrement">确定</el-button>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="返回结果" required class="inline-item">
              <div style="width: 100%">
                 <el-input
                  style="display: block;width: 40%;"
                  v-model="incrementUnit.result"
                  type="textarea"
                  :rows="5"
                  placeholder="返回结果">
                </el-input>
              </div>  
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div class="unit">
        <el-button type="info">单元物料解析</el-button>
        <el-form :model="materialUnit">
          <div style="display: flex;justify-content: space-between;width: 60%" class="item-row">
            <el-form-item label="单元 ID" required class="inline-item">
              <el-input v-model="materialUnit.ID" placeholder="填写 ID">
              </el-input>
            </el-form-item>
            <el-form-item label="serial_num" required class="inline-item">
              <el-select v-model="materialUnit.seriaLNum" placeholder="请选择">
                <el-option
                  v-for="item in serialNumOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="流水环境" required class="inline-item">
              <el-select v-model="materialUnit.environment" placeholder="请选择">
                <el-option
                  v-for="item in environmentOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="inline-item">
              <div slot="label">操作</div>
              <el-button type="primary" @click="handleSubmitMaterial">确定</el-button>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="返回结果" required class="inline-item">
              <div style="width: 100%">
                 <el-input
                  style="display: block;width: 40%;"
                  v-model="incrementUnit.result"
                  type="textarea"
                  :rows="5"
                  placeholder="返回结果">
                </el-input>
              </div>  
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div class="unit">
        <el-button type="info">单元物料 Mock</el-button>
        <el-form :model="materialMock">
          <div style="display: flex;justify-content: space-between;width: 30%" class="item-row">
            <el-form-item label="mock_data" required class="inline-item">
              <el-input
                  v-model="materialMock.mockData"
                  type="textarea"
                  :rows="5"
                  placeholder="mock 数据">
                </el-input>
            </el-form-item>
            <el-form-item class="inline-item">
              <div slot="label">操作</div>
              <el-button type="primary" @click="handleSubmitMaterialMock">确定</el-button>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="返回结果（网盘地址）" required class="inline-item">
              <div style="width: 100%">
                 <el-input
                  style="display: block;width: 40%;"
                  v-model="materialMock.result"
                  type="textarea"
                  :rows="2"
                  placeholder="返回结果">
                </el-input>
              </div>  
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div class="unit">
        <el-button type="info">物料上传</el-button>
        <el-form :model="materialUpload">
          <div style="display: flex;justify-content: space-between;width: 40%" class="item-row">
             <el-form-item label="机器IP" required class="inline-item">
              <el-input
                  v-model="materialUpload.machineIP"
                  placeholder="填写 IP">
                </el-input>
            </el-form-item>
            <el-form-item label="Mock 物料（网盘地址）" required class="inline-item">
              <el-input
                  v-model="materialMock.mockAddress"
                  placeholder="填写网盘地址">
                </el-input>
            </el-form-item>
            <el-form-item class="inline-item">
              <div slot="label">操作</div>
              <el-button type="primary" @click="handleSubmitMaterialUpload">确定</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      incrementUnit: {
        startTime: '',
        endTime: '',
        increment: 0,
        fragment: 0,
        planType: '',
        environment: '',
        result: '',
      },
      fragmentOptions: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      environmentOptions: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      materialUnit: {
        id: 0,
        seriaLNum: 0,
        environment: '',
        result: '',
      },
      serialNumOptions:  [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      materialMock: {
        mockData: '',
        result: '',
      },
      materialUpload: {
        machineIP: '',
        mockAddress: ''
      }
    }
  },
  methods: {
    handleSubmitIncrement() {
      console.log(this.incrementUnit)
      let url = '/api'
      this.$axios.get(url, {
        params:{
          startTime: this.incrementUnit.startTime,
          endTime: this.incrementUnit.endTime
        }
      }).then(
        response => {
          this.incrementUnit.result = response.data.data
          // 实现增量单元查询的结果list的第一个元素填充到至单元物料解析的表单
          let resultListFirst = this.incrementUnit.result[0]
          this.materialUnit.id = resultListFirst.id
          this.materialUnit.seriaLNum = resultListFirst.seriaLNum
          this.materialUnit.environment = resultListFirst.environment
        }
      )
    },
    handleSubmitMaterial() {
      console.log(this.materialUnit)
    },
    handleSubmitMaterialMock() {
      console.log(this.materialMock)
    },
    handleSubmitMaterialUpload() {
      console.log(this.materialUpload)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin: 20px;
}
h3 {
  margin: 10px 0;
}
a {
  color: #42b983;
}
.inline-item {
  margin-right: 10px;
}
</style>
