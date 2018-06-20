<template>
<div >
    <!-- 轮播图 -->
    <slide :slides="slides" :inv="inv" :style="styleObject" :name="transitionName1" :target="target"></slide>
     <!--  公告 -->
    <div class="newsBox ">
       <div class="banxin clearfix">
           <div class="newsBoxfl fl">
                <span class="newIcon newAnnounceIcon" ></span>
                <ul class="newsList" id="newStateListId2" ref="newStateListSlider2"  :style="{top:newStateTop,transition:newStateTop=='0px' ?  'top 0s' : 'top 0.5s'}"  >
                    <li v-for="item in newAnnounceList">
                        {{item.Title}}
                        <span>（{{item.ReleaseDate}}）</span>
                    </li>

                </ul>
                <a href="javascript:;" class="newsMore">更多 <span>»</span></a>
           </div>
           <div class="newsBoxfr fr">
                <span class="newIcon newStateIcon"></span>
                <ul class="newsList" id="newStateListId1" ref="newStateListSlider1" :style="{top:newAnnounceTop,transition:newAnnounceTop=='0px' ?  'top 0s' : 'top 0.5s'}" >
                    <li v-for="item in newStateList">
                        {{item.Title}}
                        <span>（{{item.ReleaseDate}}）</span>
                    </li>
                </ul>
                <a href="javascript:;" class="newsMore">更多 <span>»</span></a>
           </div>
       </div>
    </div>
    <!--  保障类型 guarantee -->
    <div class="guaranteeBox">
        <div class="banxin">
            <ul class="clearfix">
                <li class="clearfix">
                    <div class="guaranteeImg modelIcon fl">

                    </div>
                    <div class="guaranteeText fl">
                        <h3>强大背景</h3>
                        <p>国际集团旗下控股，实力雄厚</p>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="guaranteeImg rateIcon fl">

                    </div>
                    <div class="guaranteeText fl">
                        <h3>资金安全</h3>
                        <p>第三方托管，平台与资金有效隔阂</p>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="guaranteeImg majorIcon fl">

                    </div>
                    <div class="guaranteeText fl">
                        <h3>电子签章</h3>
                        <p>牵手易保全，安全更进一步</p>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="guaranteeImg safeIcon fl">
                    </div>
                    <div class="guaranteeText fl">
                        <h3>合规运营</h3>
                        <p>专业风控，真诚透明 稳健规范</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <!-- 体验标 -->
    <div class='banxin newWelfare  box' style="height:210px;">

        <div class='newWelfareBox newWelfareLeft'>
            <h3>体验标</h3>
        </div>

        <div class='newWelfareBox newWelfareCenter' onclick="window.location='https://www.hyft88.com/invest/experiencedetail-10179'">

            <div class="newWelfareCenterTop">
                <h3>汇银富通体验标 </h3>
                <table class="newWelfareCenterCentent">
                    <tbody>
                    <tr>
                        <td><span style="font-size:22px;color:#666">1亿4334万元</span> <span></span></td>
                        <td><span style="font-size:22px;color:#666">1</span>天</td>

                        <td style="text-align:right;padding-right: 10px;"><span style="font-size: 32px;color: #ff7800;">12.00</span><span style="font-size:24px;color:#f36b36">%</span></td>
                    </tr>
                    <tr>
                        <td>已投金额</td>
                        <td>期限</td>
                        <td style="text-align:right;text-align: right;padding-right:20px;">历史年化收益</td>


                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="newWelfareCenterBottom " style="padding-left: 28px;height:57px;margin-top:10px;">
                <div class="newWelfareCenterBottomBox">
                    <p>到期付息回收体验金</p>
                    <p style="color:#999;">还款方式</p>
                </div>
                <div class="newWelfareCenterbtnBG" >
                    <div class="newWelfareCenterbtnMove"></div>
                    <a href="https://www.hyft88.com/invest/experiencedetail-10179" id="newpro_0Link" class="newWelfareCenterBottomBox newWelfareCenterPosition newWelfareCenterbtn newWelfareCenterbtn">购买</a>
                </div>


            </div>
        </div>

        <a class='newWelfareBox newWelfareRight ' style="width: 288px;" href="https://www.hyft88.com/home/NewActivities">

        </a>
    </div>
    <!--  票富通 企业经营贷 -->
    <div class="banxin">

        <h3 class="linkMore">
            <span class="linkMoreTilte">票富通</span>
            <span class="linkMoreText">银行承兑汇票，到期刚性兑付风险较低，100起投</span>
            <a class="fr" href="#">查看更多</a>
        </h3>
        <div class="PFDBox HYtBox "  style="height: 352px;">
            <div class='HYtloansBG HYtloans' v-for="item in PFDList" onclick="#">
                <h3>票富通  <span>{{item.no}}</span></h3>
                <p class="HYtloansBGNthOftype1">{{item.LoanRate}}<span>%</span></p>
                <p class="HYtloansBGNthOftype2">历史年化收益</p>
                <div class="clearfix" style="width:220px;margin:0 auto;margin-left:-9px;">
                    <div class="fl" style="width:105px;text-align: center;border-right: 1px solid #ddd;height: 35px;margin-top: 5px;">
                        <p class="Number18" style="margin-top: -5px;">{{item.ValidDays}}天<p>
                        <p>期限</p>
                    </div>
                    <div class="fr" style="width:115px;text-align: center;padding-left: 21px;">
                        <p class="Number18">{{item.Amount}}元<p>
                        <p>总额</p>
                    </div>
                </div>
                <div class="newWelfareSliderBG sliderBG" style="width:190px;">
                    <div class="sliderColor" style="width:40%">
                    </div>
                    <span class="slidePercent slidePercentTop">{{item.Ratio}}%</span>
                </div>
                <div class="bidNowBtnBg bidNowBtnBgNO">
                    <a href="#" id="newpro_1Link" class="bidNowBtn">立即投标</a>
                </div>

            </div>
        </div>
    </div>
    <!--  企业/车贷 -->
    <div class="banxin">
        <h3 class="linkMore">
            <span class="linkMoreTilte">企业/车贷</span>
            <span class="linkMoreText">资金托管，专业风控</span>
            <a class="fr" href="#">查看更多</a>
        </h3>
        <div class="bidCentent">
            <div style="height:445px;">
                <div class="fl bidCententFl">
                    <ul class="bidCententFlTitle">
                        <li @mouseover="mouseOVER(index)" :class="bidCententIndex==index?'active':0" v-for="(item,index) in bidCententList" >
                            {{item.name}}
                            <!-- 数字代表剩余标的-->
                            <span class='fr'>{{item.num}}</span>
                        </li>
                    </ul>
                </div>
                <div class="fr bidCententFr">
                    <!--  汇富通 -->
                    <ul class="bidCententHFT" :style="{display: bidCententIndex==0?'none':'block'}">
                       <!--
                            <div class="bidNOne" style="color: #999; font-size: 28px; line-height: 455px; text-align: center; padding-left: 16px;">
                                即将上线，敬请期待 . . .
                            </div> -->
                            <li>
                                <a href="javascript:;">
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td class="firstTable">
                                                <span class="title">12333</span><br/>
                                            </td>
                                            <td class="twoTable">
                                                <span class="rate">11111<i>%</i></span><br/>
                                            </td>
                                            <td class="threeTable">
                                                <span class="time">12<i>天</i></span><br/>
                                            </td>
                                            <td class="lastTable">
                                                <a class="bidNowStatus"  href="#">过期</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="firstTable">
                                                <span class="monery lastText">金额:200</span>
                                                <span class="lastText">起投:100元</span>
                                            </td>
                                            <td class="twoTable">
                                                <span class="lastText">年化利率</span>
                                            </td>
                                            <td class="threeTable">
                                                <span class="lastText">期限</span>
                                            </td>
                                            <td class="lastTable"></td>

                                        </tr>
                                        </tbody>
                                    </table>
                                </a>
                            </li>
                              <li>
                                <a href="javascript:;">
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td class="firstTable">
                                                <span class="title">12333</span><br/>
                                            </td>
                                            <td class="twoTable">
                                                <span class="rate">11111<i>%</i></span><br/>
                                            </td>
                                            <td class="threeTable">
                                                <span class="time">12<i>天</i></span><br/>
                                            </td>
                                            <td class="lastTable">
                                                <a class="bidNowStatus"  href="#">过期</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="firstTable">
                                                <span class="monery lastText">金额:200</span>
                                                <span class="lastText">起投:100元</span>
                                            </td>
                                            <td class="twoTable">
                                                <span class="lastText">年化利率</span>
                                            </td>
                                            <td class="threeTable">
                                                <span class="lastText">期限</span>
                                            </td>
                                            <td class="lastTable"></td>

                                        </tr>
                                        </tbody>
                                    </table>
                                </a>
                            </li>
                    </ul>
                    <!--  车富通 -->
                    <ul class="bidCententCFT" :style="{display: bidCententIndex==1?'none':'block'}">

                            <!-- <div class="bidNOne" style="color: #999; font-size: 28px; line-height: 455px; text-align: center; padding-left: 16px;">
                                即将上线，敬请期待 . . .
                            </div> -->

                                <li>
                                    <a href="javascript:;">
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td class="firstTable">
                                                    <span class="title">12333</span><br/>
                                                </td>
                                                <td class="twoTable">
                                                    <span class="rate">11111<i>%</i></span><br/>
                                                </td>
                                                <td class="threeTable">
                                                    <span class="time">12<i>天</i></span><br/>
                                                </td>
                                                <td class="lastTable">
                                                    <a class="bidNowStatus"  href="#">过期</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="firstTable">
                                                    <span class="monery lastText">金额:200</span>
                                                    <span class="lastText">起投:100元</span>
                                                </td>
                                                <td class="twoTable">
                                                    <span class="lastText">年化利率</span>
                                                </td>
                                                <td class="threeTable">
                                                    <span class="lastText">期限</span>
                                                </td>
                                                <td class="lastTable"></td>

                                            </tr>
                                            </tbody>
                                        </table>
                                    </a>
                                </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- 新闻动态 -->
    <div class="banxin NewsVer">
        <div class="NewsVerBox clearfix">
            <div class="newsLeft">
                <h3 class="newsTitle clearfix">
                    媒体报道
                    <i>MEDIA REPORT</i>
                    <a href="@(ViewBag.Com)home/article-16" class='fr newMore'>更多 <span>»</span></a>
                </h3>
                <div vlass="dynamic clearfix">

                    <a href="javascript:;" class="lzn1">
                        <div class="sketch-headlines">
                            <img src="http://res.hyft88.com//Content/Upload/Image/Informt/20180313/0/bb9c997630b84f10aa80405ea9a013b0.png" alt="Alternate Text" />
                        </div>
                        <h3>普惠世纪家人家庭 创造共赢 钻..</h3>
                        <p class="digest">
                            发布时间：
                            <i>2018-03-30</i>
                        </p>
                    </a>




                    <a href="javascript:;" class="lzn1">
                        <div class="sketch-headlines">
                            <img src="http://res.hyft88.com//Content/Upload/Image/Informt/20180313/0/bb9c997630b84f10aa80405ea9a013b0.png" alt="Alternate Text" />
                        </div>
                        <h3>普惠世纪家人家庭 创造共赢 钻..</h3>
                        <p class="digest">
                            发布时间：
                            <i>2018-03-30</i>
                        </p>
                    </a>
                    <a href="javascript:;" class="lzn1">
                        <div class="sketch-headlines">
                            <img src="http://res.hyft88.com//Content/Upload/Image/Informt/20180313/0/bb9c997630b84f10aa80405ea9a013b0.png" alt="Alternate Text" />
                        </div>
                        <h3>普惠世纪家人家庭 创造共赢 钻..</h3>
                        <p class="digest">
                            发布时间：
                            <i>2018-03-30</i>
                        </p>
                    </a>
                    <a href="javascript:;" class="lzn1">
                        <div class="sketch-headlines">
                            <img src="http://res.hyft88.com//Content/Upload/Image/Informt/20180313/0/bb9c997630b84f10aa80405ea9a013b0.png" alt="Alternate Text" />
                        </div>
                        <h3>普惠世纪家人家庭 创造共赢 钻..</h3>
                        <p class="digest">
                            发布时间：
                            <i>2018-03-30</i>
                        </p>
                    </a>
                </div>
            </div>
            <div class="newsRight">
                <div class="news-box">
                    <h3 class="newsTitle clearfix"> 公司动态 <i>COMPANY DYNAMIC</i> <a href="@(ViewBag.Com)home/article-9" class="fr newMore">更 多 <span>»</span></a></h3>
                    <div class="media clearfix" style="border-top:1px solid transparent;">
                        <ul class="clearfix">
                            <li><a href="/dfafa/mtbd/3239.html" rel="nofollow">【财经网】四周年，创始人最想…<span>2017-12-19</span></a></li>
                            <li><a href="/dfafa/mtbd/3238.html" rel="nofollow">【财经新闻网】创始人谈互联网…<span>2017-12-19</span></a></li>
                            <li><a href="/dfafa/mtbd/3228.html" rel="nofollow">【中华网】创始人：上线4年，…<span>2017-12-14</span></a></li>
                        </ul>
                    </div>
                </div>
                <div class="news-box news-box2">
                    <h3 class="newsTitle clearfix"> 行业新闻 <i>INDUSRTY NEWS</i> <a href="@(ViewBag.Com)home/article-11" class="fr newMore">更 多 <span>»</span></a></h3>
                    <div class="industry clearfix">
                        <ul class="clearfix">
                            <li><a href="/dfafa/news/3376.html" rel="nofollow">专家：互联网资管迎来最严监管 穿透嵌套资…<span>2018-04-09</span> </a></li>
                            <li><a href="/dfafa/news/3375.html" rel="nofollow">自律公约规范互联网金融从业机构催债行为<span>2018-04-08</span> </a></li>
                            <li><a href="/dfafa/news/3373.html" rel="nofollow">互联网资管结束野蛮生长 存量业务6月底前…<span>2018-04-04</span> </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 合作伙伴 -->
    <div class="banxin cooperativePartner">
        <h3>合作伙伴</h3>
        <div id="group">
            <div class="hdArrow">
                <a class="prev" @click="prev" href="javascript:void(0)"></a>
                <a class="next" @click="next" href="javascript:void(0)"></a>
            </div>
            <div class="group">
                <ul :style="{width:groupTotol*240+'px'}">
                    <li  style="float:left;">
                        <a href="javascript:;"  target="_blank"><img src="http://res.hyft88.com/Content/Upload/Image/Partner/20180125/31/ed6378654fc54b08a2efd8dee2d8c97f.jpg" alt=""></a>
                    </li>
                    <li  style="float:left;">
                        <a href="javascript:;"  target="_blank"><img src="http://res.hyft88.com/Content/Upload/Image/Partner/20180125/31/ed6378654fc54b08a2efd8dee2d8c97f.jpg" alt=""></a>
                    </li>
                    <li  style="float:left;">
                        <a href="javascript:;"  target="_blank"><img src="http://res.hyft88.com/Content/Upload/Image/Partner/20180125/31/ed6378654fc54b08a2efd8dee2d8c97f.jpg" alt=""></a>
                    </li>
                    <li  style="float:left;">
                        <a href="javascript:;"  target="_blank"><img src="http://res.hyft88.com/Content/Upload/Image/Partner/20180125/31/ed6378654fc54b08a2efd8dee2d8c97f.jpg" alt=""></a>
                    </li>
                    <li  style="float:left;">
                        <a href="javascript:;"  target="_blank"><img src="http://res.hyft88.com/Content/Upload/Image/Partner/20180125/31/ed6378654fc54b08a2efd8dee2d8c97f.jpg" alt=""></a>
                    </li>
                    <li  style="float:left;">
                        <a href="javascript:;"  target="_blank"><img src="http://res.hyft88.com/Content/Upload/Image/Partner/20180125/31/ed6378654fc54b08a2efd8dee2d8c97f.jpg" alt=""></a>
                    </li>

                </ul>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import api from '../../api'
/*轮播图组件*/
 import slide from '@/components/common/slide/slide.vue'

export default {
    components:{
        slide
    },
    data(){
        return {
            slides: [
              {
                src: 'https://www.hyft88.com/Content/Upload/Image/AdImg/20180611/0/f7a837daf15a460eb27feef4f308e46d.png',
                href: ''
              },
              {
                src: 'https://www.hyft88.com/Content/Upload/Image/AdImg/20180522/49/4fbce4e2243346b58a79ba659069ceee.png',
                href: ''
              },
              {
                src: 'https://www.hyft88.com/Content/Upload/Image/AdImg/20180607/35/7a0b3c8660f34d45a83ee2874fd586be.png',
                href: ''
              },
              {
                src: 'https://www.hyft88.com/Content/Upload/Image/AdImg/20171110/27/f6d1b0cd8031477b984a56f318a286f0.PNG',
                href: ''
              },
            ],
            inv: 3000,
            styleObject: {
              width: '100%',
              height: '400px'
            },
            transitionName1: 'move',
            /*transitionName2: 'fade',*/
            target: '_blank',
            /*最新公告*/
            newAnnounceList:[
                {
                    Title:"最新公告1",
                    ReleaseDate:"2018-09-12"
                },
                {
                    Title:"最新公告2",
                    ReleaseDate:"2018-09-12"
                },
                {
                    Title:"最新公告3",
                    ReleaseDate:"2018-09-12"
                },
                {
                    Title:"最新公告4",
                    ReleaseDate:"2018-09-12"
                }
            ],
            /*最新动态*/
            newStateList:[
                {
                    Title:"最新动态1",
                    ReleaseDate:"2018-09-12"
                },
                {
                    Title:"最新动态2",
                    ReleaseDate:"2018-09-12"
                },
                {
                    Title:"最新动态3",
                    ReleaseDate:"2018-09-12"
                },
                {
                    Title:"最新动态4",
                    ReleaseDate:"2018-09-12"
                }

            ],
           /*最新公告 动态效果*/
            newStateListIndex:0,
            newAnnounceindex:0,
            newStateTop:0,
            newAnnounceTop:0,
            /*合作伙伴总条数*/
            groupTotol:6,
            groupLeft:0,
            slider:true,
            /*票付通数据*/
            PFDList:[
                {
                   no:2018061907,
                   LoanRate:"10.00",
                   ValidDays:30,
                   Amount:5000,
                   Ratio:"40"
                },
                {
                   no:2018061907,
                   LoanRate:"10.00",
                   ValidDays:30,
                   Amount:5000,
                   Ratio:"40"
                },
                {
                   no:2018061907,
                   LoanRate:"10.00",
                   ValidDays:30,
                   Amount:5000,
                   Ratio:"40"
                },
                {
                   no:2018061907,
                   LoanRate:"10.00",
                   ValidDays:30,
                   Amount:5000,
                   Ratio:"40"
                }
            ],
            /*企业/车贷*/
            bidCententList:[
                {
                    name:"汇富通",
                    num:1
                },
                {
                    name:"车富通",
                    num:1
                }
            ],
            bidCententIndex:0
        }
    },
    mounted() {
        this.newSlider1(this.$refs.newStateListSlider1.offsetHeight,this.newStateList.length-1);
        this.newSlider2(this.$refs.newStateListSlider2.offsetHeight,this.newStateList.length-1);
    },
    computed: {

    },
    methods:{
        newSlider1(height,length){
            console.log(length)
            var count=0;
           var timer= setInterval(() => {
                if(length>count){
                    count++;
                }else {
                    count=0;
                }
                this.newStateTop=(-height*count)+"px";

            },2000)
        },
        newSlider2(height,length){
            console.log(length)
            var count=0;
           var timer= setInterval(() => {
                if(length>count){
                    count++;
                }else {
                    count=0;
                }
                this.newAnnounceTop=(-height*count)+"px";

            },2000)
        },
        /*  合作伙伴上*/
        prev(){
            if(this.slider){
                this.slider=false;
                if(this.groupLeft == 0){
                    this.groupLeft=-(this.groupTotol-5);
                }else {
                    this.groupLeft++;
                }
                $(".group ul").animate({left: this.groupLeft*240,},  500,() =>{
                    this.slider=true
                })
            }
        },
      /*  合作伙伴下*/
        next(){
            if(this.slider){
                this.slider=false;
                if(this.groupLeft==-(this.groupTotol-5)){
                    this.groupLeft=0;
                }else {
                    this.groupLeft--;
                }
                $(".group ul").animate({left: this.groupLeft*240,}, 500,() =>{
                    this.slider=true
                });
            }

        },
        mouseOVER(index){
            this.bidCententIndex=index;

        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* 新闻 */
.newsBox{
    height:51px;
    width: 100%;
    border-bottom:1px solid #ececec;
    background:#fff;
    overflow:hidden;

    .newsBoxfl ,.newsBoxfr{
        width:530px;
        position:relative;
    }
    .newsBoxfl{
        margin-right: 140px;
    }

    .newIcon{
        display:inline-block;
        width:67px;
        height:50px;
        margin-right: 10px;
        position:absolute;
      /*   top:-80px; */
        left:0px;
    }
    .newAnnounceIcon{
        background:url(../../assets/images/index/text1.png) center center no-repeat;
    }
     .newStateIcon{
        background:url(../../assets/images/index/text2.png) center center no-repeat;
    }
    .newsList{
        display:inline-block;
        width:380px;
        height:50px;
        line-height:50px;
        position:relative;
        margin-left:80px;
       /*  transition: top 0.5s;
       margin-left:80px; */
        li{
            color:#aaa;
            font-size:14px;
        }
    }
    .newsMore{
        line-height:50px;
        display:inline-block;
        float: right;
        font-size:12px;
        color:#aaa;
        span{
            font-size:16px;
        }

    }

}
/* 保障类型 */
.guaranteeBox{
    padding:20px 0px;
    background:#fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
    ul{

        li{
            float: left;
            margin-right: 53px;
            cursor: pointer;
            position: relative;
            top: 0px;
            transition: all .5s linear;
            .guaranteeImg{
                width:85px;
                height:84px;
                vertical-align:middle;
            }
            .modelIcon{
                background:url(../../assets/images/index/assetListImg1.png) center center no-repeat;
            }
            .rateIcon{
                background:url(../../assets/images/index/assetListImg2.png) center center no-repeat;
            }
            .majorIcon{
                background:url(../../assets/images/index/assetListImg3.png) center center no-repeat;
            }
            .safeIcon{
                background:url(../../assets/images/index/assetListImg4.png) center center no-repeat;
            }
            .guaranteeText{
                margin-left: 15px;
                padding-top: 20px;

                h3{
                    font-size:16px;
                    color:#333;
                    padding-bottom: 3px;
                }
                p{
                    font-size:12px;
                    color:#999;
                }
            }
          /*   .guaranteeImg:hover{
              animation: 2s ease 0s normal none 1 running fx_animate;
              -moz-animation: 2s ease 0s normal none 1 running fx_animate;
              -webkit-animation: 2s ease 0s normal none 1 running fx_animate;
              -o-animation: 2s ease 0s normal none 1 running fx_animate;
          } */

        }
        li:last-child{
            margin-right: 0px;
        }
        li:hover {
            top: -10px;
        }
    }
}
/* 新手福利 */

.newWelfare {
    margin-top: 30px;
    .newWelfareLeft {
        width: 288px;
        height: 210px;
        background: url(../../assets/images/index/newWelfare.png) no-repeat;
        color: #fff;
        margin-right: 16px;
    }
    .newWelfareLeft > h3 {
        font-size: 24px;
        padding-left: 13px;
        line-height: 60px;
        padding-top: 8px;
        font-weight: bold;
        color: #558afc;
        text-align: center;
    }
    .newWelfareLeft > p {
        font-size: 18px;
        padding-left: 30px;
        line-height: 30px;
    }
    .newWelfareBox {
        display: inline-block;
        vertical-align: middle;
        float: left
    }
    .newWelfareCenter {

        background-color: #fff;
        height: 210px;
        width: 593px;
        padding-top: 15px;
    }

}

.newWelfareCenterTop {
    padding-left: 40px;
}

.newWelfareCenterTop > h3 {
    font-size: 20px;
    color: #333;
}

.newWelfareCenterTop > h3 > span {
    font-size: 16px;
}

.newWelfareCenterCentent {
    font-size: 14px;
    color: #999;
    margin: 10px 0px;
    margin-left: -45px;
    margin-top: 13px;
    width:100%;
}

.newWelfareCenterCentent tr > td {
    width: 33.33%;
    text-align: center;
}

.newWelfareCenterBottom {
}

.newWelfareCenterBottomBox {
    float: left
}

.newWelfareCenterBottomBox:first-child {
    width: 155px;
    text-align: center;
    padding-top: 15px;
    font-size: 14px;
    color: #666;
}


.slidePercentTop {
    top: -20px;
    right: 0px;
}

.newWelfareCenterBottomBox {
    /*  margin-top: 18px;
   margin-right: 30px; */
}

.newWelfareCenterbtn {
    width: 85px !important;
    height: 33px;
    color: rgb(255, 187, 32);
    font-size: 14px;
    text-align: center;
    line-height: 30px;
    font-family: Microsoft YaHei;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(255, 187, 32);
    border-image: initial;
    padding-top: 0px !important;
    position: relative;
    z-index: 1;
}

.newWelfareCenterbtnBG {
    width: 85px;
    height: 33px;
    display: inline-block;
    position: relative;
    margin-left: 262px;
    margin-top: 20px;
    overflow: hidden;
}

.newWelfareCenterbtnMove {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 33px;
    left: 0px;
    background: #ffbb20;
}


.newWelfareCenterbtnBG:hover .newWelfareCenterbtn {
    animation: color 0.1s 0.1s forwards;
}

.newWelfareCenterbtnBG:hover .newWelfareCenterbtnMove {
    animation: topMove1 0.5s forwards;
}

@keyframes topMove1 {
    0% {
        top: 32px;
    }

    100% {
        top: 0px
    }
}
.newWelfare .newWelfareBox.newWelfareRight {
    width: 320px;
    height: 210px;
    background: url(../../assets/images/index/redPacket.png) no-repeat;
    float: right;
}

.linkMore {
    height: 58px;
    padding-top: 17px;
    .linkMoreTilte {
        font-size: 22px;
        color: #333;
        margin-right: 20px;
    }
    .linkMoreText {
        color: #999;
        font-size: 14px;
    }
}

.linkMore > a {
    color: #999;
    position: relative;
    top: 18px;
    font-size: 12px;
}
/* 票富贷 */
.PFDBox{
    .HYtloansBG {
        float:left;
    }
    .HYtloansBG {
        background: #fff;
        width: 288px;
        padding-left: 44px;
        height: 346px;
        transition: all 0.5s;
    }
    .HYtloansBG:hover {
        transform: translate(0, -2px);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
    .HYtloans:first-child a {
        color: #fff;
    }
    .HYtloans:first-child > h4 > a {
        font-size: 36px;
        padding-left: 30px;
        line-height: 60px;
        padding-top: 20px;
        font-weight: bolder;
        display: block;
    }
    .HYtloans:first-child .loockMore {
        position: absolute;
        bottom: 41px;
        left: 50%;
        width: 78px;
        height: 27px;
        border: 1px solid #fff;
        line-height: 27px;
        text-align: center;
        margin-left: -39px;
        font-size: 12px;
    }
    .HYtloansBG:nth-child(2) {
        margin-left:16px;
    }
    .HYtloansBG:nth-child(3) {
        margin: 0px 16px;
    }
    .HYtloansBG > h3 {
        font-size: 18px;
        color: #333;
        padding-top: 42px;
        margin-left: -44px;
        text-align: center;
    }
    .HYtloansBG > h3 > span {
        font-size: 18px;
    }
    .HYtloansBG {
        p {
            font-size: 14px;
            color: #999;
        }
        .Number18 {
            font-size: 18px;
            color: #333;
            padding-bottom: 2px;
        }
        p.HYtloansBGNthOftype1 {
            padding-top: 25px;
            padding-bottom: 5px;
            font-size: 46px;
            color: #ff7800;
            margin-left: -44px;
            text-align: center;
        }
        p.HYtloansBGNthOftype1 > span {
            font-size: 22px;
        }
        p.HYtloansBGNthOftype2 {
            padding-bottom: 25px;
            text-align: center;
            margin-left: -44px;
        }
    }
}

.triangle-facing-right {
    display: inline-block;
    border-right: 3px solid;
    border-bottom: 3px solid;
    width: 25px;
    height: 25px;
    transform: rotate(-45deg);
    margin-left: 70px;
}
.ProjectDetails {
    padding-bottom: 10px;
}

.bidNowBtnBg {
    width: 172px;
    height: 36px;
    border: 1px solid #ffbb20;
    margin-top: 36px;
    display: none;
    background: #fff;
    position: relative;
    overflow: hidden;
    left: 20px;
}
    /* .bidNowBtnBgYes::after{
    background:#ffbb20;
} */

    .bidNowBtnBg::after {
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
        top: 39px;
        left: 0px;
        background: #ffbb20;
    }

.bidNowBtnBgNO {
    border: 1px solid #bdbdbd;
}

.bidNowBtnBgNO::after {
    background: #bdbdbd;
}

.bidNowBtn {
    width: 172px;
    height: 36px;
    font-size: 16px;
    display: inline-block;
    line-height: 36px;
    text-align: center;
    color: #ffbb20;
    position: relative;
    z-index: 2;
}

@keyframes topMove {
    0% {
        top: 35px;
    }

    100% {
        top: 0px
    }
}

@keyframes color {
    0% {
        color: #fff;
    }

    100% {
        color: #fff;
    }
}

.PFDBox .HYtloansBG:hover .newWelfareSliderBG {
    display: none;
}

.PFDBox .HYtloansBG .newWelfareSliderBG {
    display: block;
}

.PFDBox .HYtloansBG:hover .bidNowBtnBg {
    display: block;
}

.PFDBox .HYtloansBG:hover .bidNowBtn {
    color: #ffbb20;
    animation: color 0s forwards;
}

.PFDBox .HYtloansBG:hover .bidNowBtnBg::after {
    animation: topMove 0.5s forwards;
}

.newWelfareSliderBG {
    margin-top: 50px;
    margin-left: -9px
}

.sliderColor {
    position: absolute;
    width: 45%;
    background: #ffbb20;
    height: 3px;
    border-radius: 0px;
    display: inline-block;
}

.slidePercentTop {
    top: -9px;
    right: -40px;
}
/* 企业车贷网 样式*/

.bidCententFl {
    height: 445px;
    width: 269px;
    background: url(../../assets/images/index/bidContentbg.png) no-repeat;
}

.bidCententFlTitle{
    li {
        height: 64px;
        line-height: 64px;
        text-align: center;
        color: #fff;
        font-size: 16px;
        padding-left: 6px;
        cursor: pointer;
        span {
            margin-right: 24px;
        }
    }
    li.active {
        background: #7caaff;
        border-left: 6px solid #c8d5fe;
        padding-left: 0px;
    }
}

.bidCententFr {
    width: 915px;
    height: 445px;
    li {
        padding-top: 25px;
        transition: all 0.2s linear;
        background: #fff;
        height: 111.25px;
    }
    li:hover {
        -webkit-transform: translate(0, -1px);
        -moz-transform: translate(0, -1px);
        transform: translate(0, -1px);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }
    table {
        width: 100%;
        .lastText {
            color: #999;
            font-size: 14px;
        }
        .firstTable {
            width: 389px;
            .title {
                font-size: 18px;
                color: #3d3d3d;
                margin-bottom: 17px;
                display: inline-block;
            }
            .monery {
                display: inline-block;
                width: 180px;
            }

        }
        .twoTable {
            width: 134px;
            .rate {
                font-size: 32px;
                color: #ff7800;
                i {
                    font-size: 20px;
                    font-style: normal;
                }
            }
        }
        .threeTable {
            width: 169px;
            text-align: center;
            .time {
                font-size: 24px;
                color: #333;
                i {
                    font-size: 18px;
                    font-style: normal;
                }
            }
        }
        .lastTable {
            width: 153px;
            text-align: right;
            a {
                display: inline-block;
                width: 110px;
                height: 40px;
                color: #fff;
                line-height: 40px;
                text-align: center;
                font-size: 16px;
                background-color: #ff9906;
                position: relative;
                top: 17px;
            }
        }
    }
    li > a {
        display: block;
        padding-bottom: 22px;
        border-bottom: 1px solid #f5f5f5;
        margin-left: 22px;
        margin-right: 38px;
    }
}


.bidCententFr > ul li:nth-child(4) a {
    border-bottom: 0px solid #eee;
}


/* 企业车贷网 样式 */
/*新闻动态*/
.NewsVer{
    margin-top:30px;
}
.NewsVerBox{
    position:relative;
}

.NewsVerBox .newsLeft {
    width: 760px;
    height: 361px;
    margin-right: 10px;
    background:#fff;
}
.NewsVerBox .newsRight, .newsLeft {
    margin-left: 0px;
    float: left;
    position: relative;
}
.newsTitle{
    line-height: 30px;
    padding: 10px 20px;
    font-size: 18px;
    color: #666;
    font-weight: 500;
    position: relative;
    background: #fff;
    border-bottom: 1px solid #f6f6f6;
}
.newsTitle i{
    font-style:normal;
    font-size: 12px;
    color: #d1d1d1;
    padding-left: 12px;
    margin-bottom: -2px;
    text-transform: uppercase
}
.newMore{
    font-size:14px;
    color:#ccc
}
.newMore span{
   font-size: 20px;
}
.lzn1 {
    width: 47%;
    height: 127px;
    margin: 20px 8px 0 14px;
    float: left;
    display: block;
    overflow: hidden;
    border-bottom: 0px dashed #ccc;
    -webkit-transition: all 0.2s ease-in;
    -ms-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
}

.sketch-headlines {
    width: 140px;
    height: 100px;
    float: left;
    text-align: center;
    margin-right: 12px;
    background: #EFEFEF;
    display: table-cell;
    vertical-align: middle;
    position: relative;
    overflow: hidden;
}

.sketch-headlines img {
    width: 140px;
    height: 110px;
    vertical-align: middle;
    transition: all 0.5s ease 0s;
    -webkit-transition: all 0.5s ease 0s;
    -moz-transition: all 0.5s ease 0s;
    -ms-transition: all 0.5s ease 0s;
    -o-transition: all 0.5s ease 0s;
}

.lzn1:hover .sketch-headlines>img {
    transform: translateY(-10px);
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    -o-transform: translateY(-10px);
}

.lzn1 h3 {
    line-height: 28px;
    font-size: 16px;
    color: #272727;
    font-weight: 400;
}
.lzn1 .digest {
    font-size: 12px;
    line-height: 24px;
    margin-top: 18px;
    color: #BDBDBD;
}
.lzn1 .digest i{
    font-size:12px;
    font-style:normal;
}

.newsRight {
    width: 430px;

}
.newsRight .news-box{
    background:#fff;
}
.newsRight .news-box2 {
    margin-top: 20px;
}
.media ul, .industry ul{
    padding: 10px;
}
.media li, .industry li {
    line-height: 32px;
    font-size: 14px;
}
.media li a, .industry li a {
    width: 100%;
    color: #272727;
}
.media li a span, .industry li a span {
    float: right;
    font-size: 12px;
    color: #D0D0D0;
}
/* 新闻动态*/
/* 合作伙伴 */
#group{
    overflow:hidden;
}
.cooperativePartner{
    margin-bottom: 50px;
}
.cooperativePartner h3{
    font-size:22px;
    color:#666;
    height:62px;
    padding-top: 24px;
    padding-left: 3px;
}
.cooperativePartner .group {
    border:1px solid #ececec;
    border-left:0px;
    background:#fff;
}
.cooperativePartner .group ul {
    height:134px;
    position:relative;

}
.cooperativePartner .group ul li{
    width:240px;
}
.cooperativePartner .group ul li a{
    display:block;
    text-align:center;
    border-left:1px solid #ececec;
    height:134px;

}

.cooperativePartner .group ul li a img{
    position:relative;
    top:50%;
    transform:translate(0,-50%)
}
#group{
    position:relative;
}
#group:hover .prev, #group:hover .next{
    display: block;
}
#group .prev, #group .next {
    position: absolute;
    left:0px;
    top: 0px;
    display: block;
    height: 134px;
    width: 40px;
    z-index: 2;
    display: none;
}

#group .prev {
    background: url(../../assets/images/index/left.png) center center no-repeat;
}
#group .next {
    left: auto;
    right:0px;
    background:url(../../assets/images/index/right.png) center center no-repeat;
}
/* 合作伙伴改版后先隐藏 */
</style>
