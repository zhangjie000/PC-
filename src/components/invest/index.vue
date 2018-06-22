<template>
    <div class="banxin">
        <div class='navigationSite'>
            <span class="currentSize" >当前位置：</span><router-link to="/">首页</router-link>
            <span class="spacingLine" >&gt;</span>
            <a class="" href="#">我要投资</a>
        </div>
        <div class='investHeaderBox background-FFF'>
            <div class='investTabTitle'>
                <ul >
                    <li v-for="(item,index) in investType" @click="investTypeClick(index)"  :class='investTypeIndex==index?"active":""'>{{item}}</li>

                </ul>
            </div>
            <div class="investTabList">
                <ul class='clearfix investTabGroupList'>
                    <li>
                        <h3>项目状态：</h3>
                        <ul class='investProjecList' >
                            <li v-for="(item,index) in investProjec" @click="investProjecClick(index)"  :class='investProjecIndex==index?"active":""'>{{item}}</li>

                        </ul>
                    </li>
                    <li>
                        <h3>项目期限：</h3>
                        <ul class='investProjecList' >
                          <li v-for="(item,index) in investTime" @click="investTimeClick(index)"  :class='investTimeIndex==index?"active":""'>{{item}}</li>

                        </ul>
                    </li>
                    <li>
                        <h3>项目收益：</h3>
                        <ul class='investProjecList' >
                            <li v-for="(item,index) in investIncome" @click="investIncomeClick(index)"  :class='investIncomeIndex==index?"active":""'>{{item}}</li>

                        </ul>
                    </li>
                </ul>
            </div>
        </div>
         <!-- 列表内容 -->
    <div class="banxin background-FFF investContentListBoxStyle">

        <div id="listTable" @click="goDetails">
                <div class='investContentListBox' >
                    <h3 class='investContentTitle'>票据质押贷 <span class="nthOfType1">(2018062004)</span><span class="nthOfType2">一次性还本付息</span><!-- <span class="nthOfType2">定向项目</span> --></h3>
                    <div class="investContentList">
                        <table class='investContentListTable dib'>
                            <tbody>
                                <tr class="investContentListTableFirstChild">
                                    <td>12元</td>
                                    <td>12天</td>
                                    <td class="ListTablenth3"><span class="ListTablenth3Font">11</span><span>40%</span></td>
                                    <td>12元</td>
                                </tr>
                                <tr class="investContentListTableLastChild">
                                    <td>借款金额</td>
                                    <td>项目期限</td>
                                    <td>预期年利率</td>
                                    <td>起投金额</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="investContentListProgerss dib">
                            <div class="newWelfareSliderBG sliderBG dib" style="width:166px;">
                                <div class="sliderColor" style="width:40%">
                                </div>
                                <span class="slidePercent" style="color:#333;">40%</span>
                            </div>
                            <a href="#"  class="investDetails investbidNow timeBar">立即投标</a>
                        </div>

                    </div>
                </div>
        </div>

       <div class="block" :style="{display:total==0?'none':'block'}">
          <el-pagination
            layout="prev, pager, next"
            :total="total"
            prev-text="上一页"
            next-text="下一页"
            @current-change="handleSizeChange"
            >
          </el-pagination>
        </div>
    </div>
    </div>
</template>
<script>
export default{
    data(){
        return {
            /*投标类型数据*/
            investType:['全部','票富通','汇富通','车富通'],
            investTypeIndex:0,
            /*项目状态数据*/
            investProjec:['不限','投标中','核保审批','还款中','还款完成'],
            investProjecIndex:0,
            /*项目期限*/
            investTime:['不限','0-3个月','3-6个月','6-9个月','9-12个月','12-15个月','15个月以上'],
            investTimeIndex:0,
            /*项目收益*/
            investIncome:['不限','9%以下','9-10%','10-11%','11-12%','12%以上'],
            investIncomeIndex:0,
            /*分页数据*/
            total:4
        }
    },
    methods:{
        /*投标类型*/
        investTypeClick(index){
            this.investTypeIndex=index;
        },
        /*项目状态*/
        investProjecClick(index){
            this.investProjecIndex=index;
        },
        /*项目期限*/
        investTimeClick(index){
            this.investTimeIndex=index;
        },
        /*项目收益*/
        investIncomeClick(index){
            this.investIncomeIndex=index;
        },
        handleSizeChange(event){
            console.log(event)
        },
        /*调转到详情页面*/
        goDetails(){
            this.$router.push({path:'/investDetails'})
        }
    }
}
</script>
<style scoped lang="scss">
/* 投资详情页切换样式 start*/
.investHeaderBox {
    border: 1px solid #ececec;
    padding: 0px 45px;
    padding-bottom: 16px;
    .investTabTitle > ul {
        border-bottom: 1px solid #ececec;
        height: 60px;
        line-height: 60px;
    }
    .investTabTitle {
        li {
            display: inline-block;
            padding: 0px 15px;
            margin-right: 40px;
            font-size: 18px;
            color: #7c7c7c;
            cursor: pointer;
        }
        li.active {
            color: #f90;
            border-bottom: 2px solid #f90;
        }
    }
    .investTabGroupList > li > h3 {
        display: inline-block;
        margin-right: 20px;
        font-size: 16px;
        color: #333;
    }
    .investProjecList {
        display: inline-block;
        height: 60px;
        padding-top: 20px;
    }
    .investProjecList > li {
        display: inline-block;
        cursor: pointer;
        margin-right: 15px;
        padding: 5px 15px;
        border-radius: 15px;
        font-size: 14px;
        color: #404040;
    }
    .investProjecList > li.active {
        background: #ffbb20;
        color: #fff;
    }
    .investProjecList > li:hover {
        color: #ffbb20;
    }
    .investProjecList > li.active:hover {
        background: #ffbb20;
        color: #fff;
    }
}
/* 投资详情页切换样式 end*/

.investContentListBoxStyle {
    padding-bottom: 15px;
    margin-top: 14px;
    border: 1px solid #ececec;
    margin-bottom:30px;
}

.investContentListBox {
    border-bottom: 1px dashed #ececec;
}

.investContentTitle {
    font-size: 18px;
    color: #333;
    padding: 15px 0px;
    padding-bottom: 10px;
    padding-left: 45px;
}

.investContentTitle > span.nthOfType1 {
    font-size: 16px;
}

.investContentTitle > span.nthOfType2 {
    font-size: 12px;
    display: inline-block;
    color: #ffbb20;
    padding: 1px 4px;
    border: 1px solid #ffbb20;
    border-radius: 20px;
    margin-left: 20px;
}

.investContentListTable {
    width: 700px;
}

.investContentListTable tr td {
    width: 175px;
    text-align: center;
    font-size: 14px;
}

.investContentListTable tr.investContentListTableFirstChild td {
    color: #404040;
    font-size: 16px;
}

.investContentListTable tr.investContentListTableFirstChild td.ListTablenth3 span {
    color: #f36b3b;
    font-size: 16px;
}

.investContentListTable tr.investContentListTableFirstChild td.ListTablenth3 span.ListTablenth3Font {
    font-size: 26px;
}


.investContentListTable tr.investContentListTableLastChild td {
    color: #7c7c7c;
    padding-bottom: 10px;
}

.investContentListProgerss .sliderBG {
    margin-top: 24px;
}

.investContentListProgerss {
    padding-top: 5px;
}

.investContentListProgerss .sliderBG {
    height: 3px;
}

.investContentListProgerss .sliderColor {
    height: 3px;
}

.investContentListProgerss {
    padding-top: 5px;
    margin-left: 31px;
}

.investContentListProgerss .investDetails{
    display: inline-block;
    margin-left: 115px;
    width: 117px;
    height: 40px;
    color: #fff;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    border-radius: 4px;
}

.investDetailsTable table.projectIntroductionColorNone tr {
    background: #fff;
}

.investContentListProgerss .investbidNow {
    background-color: #ffbb20;
}

.investbidNow:hover {
    background-color: #f90;
}

.InPayment {
    background-color: #bdbdbd;
}

</style>