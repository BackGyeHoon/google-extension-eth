<template>
    <el-row>
        <el-col :span="24">
            <h2>Crossfit Open 22</h2>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="12">
            <el-input
                v-model="userName"
                class="w-50 m-2"
                size="large"
                placeholder="Please Input"
            />
        </el-col>
        <el-col :span="5">
            <el-button type="primary" size="large" :icon="Search" @click="getMember">클릭</el-button>
        </el-col>
    </el-row>
    <el-row>
        <el-table :data="resultData" style="width: 100%" :fit="true">
            <el-table-column prop="name" label="이름" />
            <el-table-column prop="gender" label="성별" />
            <el-table-column prop="affiliate" label="소속"/>
            <el-table-column prop="leaderboard_tiers[0].name" label="22open" />
        </el-table>
    </el-row>
</template>
<script>
export default {
    name: 'MainPage',
    data() {
        return {
            userName:'',
            resultData:''
        }
    },
    methods: {
        async getMember() {
            await this.axios.get(`/athletes?term=${this.userName}`)
            .then(res => {
                this.resultData = res.data
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}
</script>