//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInputName: '',
    pixelRatio:'',
    indexHeadBgSrc:'',
    indexHeadBgSrc2:'../../images/constellation@2x.png',
    indexHeadBgSrc3: '../../images/constellation@3x.png',
    indexHeadInputBgSrc:'',
    indexHeadInputBgSrc2: '../../images/inputbg@2x.png',
    indexHeadInputBgSrc3: '../../images/inputbg@3x.png',
    indexLogoSrc:'',
    indexLogoSrc2:'../../images/logo@2x.png',
    indexLogoSrc3: '../../images/logo@3x.png',
    fortuneArr: [
      { title: '旺旺旺', desc: '过去就过去了,俗话说的好,风水轮流转,2018年你将,一路旺到底。' },
      { title: '财运亨通', desc: '在今年你的财运指数up up up，恭喜你离土豪越来越接近了！' },
      { title: '颜值爆表', desc: '颜值即正义，颜值爆表的你，就是地球一道绚丽的风景线！' },
      { title: '吃不胖', desc: '不管是一日三餐,还是甜食夜宵，吃前吃后一个样，反正别人都胖我不胖。' },
      { title: '一夜暴富', desc: '你有福了，终于迎来转运，很有可能一夜暴富，横财爆发,不缺富贵不缺钱。' },
      { title: '升职加薪', desc: '今年你必定能运势旺，升职加薪出任CEO,迎娶白富美或嫁给高富帅。' },
      { title: '桃花不停', desc: '今年的桃花运旺盛，单身狗终于遇到了真爱，再也不用过光棍节了。' },
      { title: '瘦瘦瘦', desc: '今年的你将会瘦瘦瘦，瘦成一道闪电，亮瞎众人的双眼。' },
      { title: '年轻十岁', desc: '今年的你面色红润，青春焕彩，活力四射，年轻十岁不是梦。' },
      { title: '梦想成真', desc: '大胆想，勇敢做，万一梦想变成真，下个比尔盖斯就是你。' },
      { title: '事事顺心', desc: '今年家庭、事业、爱情将一帆风顺，事事顺心事事成。' },
      { title: '智商爆表', desc: '一眼就能识破真相，洞察和逻辑能力杠杠的，下个最强大脑就是你。' },
      { title: '赚一个亿', desc: '恭喜你，你的目标马上就能实现了，说不定你就是中国下一个王健林。' },
      { title: '两情相悦', desc: '新的一年终于不用做单身狗了，原来你爱的有刚好爱你。祝你幸福！' },
      { title: '走狗屎运', desc: '新的一年不是踩狗屎，而是走狗屎运，财运大把、贵人进门，万事大吉！' },
      { title: '不要装B', desc: '不要装AC,小心被雷劈。新的一年做人要真诚，做事要谨慎，这样就逢凶化吉啦！' },
      { title: '逢凶化吉', desc: '俗说人生不如意之事十有八九，善良的你往往能逢凶化吉。' },
      { title: '前途光明', desc: '历经风雨总能见彩虹，前方的路宽阔平坦，前程似锦。' },
      { title: '事业有成', desc: '抓住机遇，人生就像开了挂，飞鸿腾达，一飞冲天。' },
      { title: '人品爆棚', desc: '走在路上也能捡到钱，是时候要去买买彩票中大奖了。' },
      { title: '婚姻美满', desc: '和爱人拍拖多年，终于走上了婚姻的殿堂，从此过上幸福美满的生活。' },
      { title: '贵人相助', desc: '今年将会遇到一些不如意的事，所幸巧遇贵人，鼎力相助，走出困惑。' },
      { title: '财气冲天', desc: '2018发发发，赚它何止一个亿，从此过上土豪生活。' },
      { title: '步步高升', desc: '不管是学习还是工作，成绩和职位都大幅度提升，前途一片美好。' },
      { title: '创造奇迹', desc: '不要以为几率小就不可能发生，今年的你就能打破不可能，创造奇迹。' },
      { title: '666', desc: '今年的你不管是玩游戏还是做什么方面，都会得到众人的夸赞，忍不住举起大拇指：666' },
      { title: '扎心了', desc: '今年跟老铁们在一起请注意了，某些话某些动作总会扎你心。' },
      { title: '也是醉了', desc: '也许你对过去充满无奈、郁闷，新的一年收拾心情、重新出发，遇见更好的寄几！' },
      { title: '有钱任性', desc: '没错！有钱就可以任性，你就是这样的人，2018年将开始逆袭人生。' },
      { title: '靠脸吃饭', desc: '你的美貌倾国倾城，你完全可以靠脸吃饭，没必要靠才华赚钱。' },
      { title: '靠才华', desc: '明明可以靠脸吃饭，但你偏偏靠才华！你用实力证明了你寄几，可喜可贺！' },
      { title: '存款翻倍', desc: '钱包涨起来，存款涨起来。新一年你将越来越会做理财，存款正在成倍的往上升！' },
      { title: '扎心了', desc: '过去一年可能遇到了很多不顺新的事情，很扎心！莫担心，今年一切都会好起来。' },
      { title: '皮皮虾走', desc: '皮皮虾将带你走向人生巅峰，新的一年你将事事顺心。' },
      { title: '没毛病', desc: '今年运势没毛病，恭喜你将平步青云，涨薪啥的木有问题啦！' },
      { title: '猥琐发育', desc: '猥琐发育别浪~新的一年会沉稳一些，无论事业还是爱情都会有好的收获！' },
      { title: '大吉大利', desc: '大吉大利，今晚吃鸡！相信你能够成为最后的逃生者，赢取最终的胜利！' },
      { title: '百毒不侵', desc: '新的一年你将无所畏惧，无论遇到什么事情都无法伤害你！' },
      { title: '处变不惊', desc: '你拥有临危不惧的处事能力，这个能力非常重要，相信会对你未来带来大的变化！' },
      { title: '站起来撸', desc: '新年新气象，新的一年站起来干，你将会有不错的成果。' },
      { title: '撸起袖子', desc: '撸起袖子加油干！幸福都是靠自己来争取，相信你会越来越好' },
      { title: '摇到车牌', desc: '一线城市的车牌有多难相信你都知道了！恭喜你，有福星高照，很快就荣获一枚车牌。' },
      { title: '吃货一枚', desc: '空有一颗想减肥的心，偏偏生了一条吃货的命。横扫天下美食，享受人间美味。' },
      { title: '鞭策自己', desc: '既然选择了远方，便只顾风雨兼程，只为遇到更好的自己。' },
      { title: '戏精', desc: '语言肢体动作十分丰富，总能为身边的人带来欢乐，下个小金人就是你。' },
      { title: '不差钱', desc: '别人最多的是时间，而我最多的是金钱，怎么花都花不完。' },
      { title: '都是浮云', desc: '繁华落尽，曾经在意、不舍的东西，已不值一提。神马都是浮云！' }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    // 保留当前页跳转
    wx.navigateTo({
      url: '../logs/logs'
    })
    // 关闭跳转
    //wx.redirectTo({
    //  url: '../logs/logs'
    //})
  },
    // 用户输入的名字事件
  bindNameInput: function(e) {
    this.setData({
      userInputName: e.detail.value
    })
  },
  // 开始分析事件
  getUserFortune: function () {
    if (this.data.userInputName) {
      let currentFortuneData = this.getUserIsFortune(this.data.userInputName);
      // 名字已经测试过运势
      if (currentFortuneData && currentFortuneData.name) {
        wx.setStorageSync('currentFortuneData', currentFortuneData);
      } else {
        let max = this.data.fortuneArr.length;
        let min = 0;
        let ranNumber = parseInt(Math.random() * (max - min) + min, 10);
        let obj ={'title':this.data.fortuneArr[ranNumber].title,'desc':this.data.fortuneArr[ranNumber].desc,'name':this.data.userInputName};
        this.addUserFortune(obj);
        wx.setStorageSync('currentFortuneData', obj);
      }
      // 关闭跳转
      wx.redirectTo({
        url: '../fortune-result/fortune-result'
      })
    } else {
      wx.showToast({
        title: '请输入您的名字',
        icon: 'none',
        duration: 2000
      })
    }
  },
  // 判断该名字是否测试过运势
  getUserIsFortune: function(name){
    let returnVal = {};
    let arr = wx.getStorageSync('fortuneData') || [];
    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i].name == name) {
        returnVal = arr[i];
        break;
      }
    }
    return returnVal;
  },
  addUserFortune: function(obj) {
    let arr = wx.getStorageSync('fortuneData') || [];
    arr.push(obj);
    wx.setStorageSync('fortuneData',arr);
  },
  onLoad: function (options) {
    let pixelRatio = this.getPixelRatio();
    if (pixelRatio == 2){
      this.setData({
        indexHeadBgSrc: this.data.indexHeadBgSrc2,
        indexHeadInputBgSrc: this.data.indexHeadInputBgSrc2,
        indexLogoSrc: this.data.indexLogoSrc2
      });
    }else{
      this.setData({
        indexHeadBgSrc: this.data.indexHeadBgSrc3,
        indexHeadInputBgSrc: this.data.indexHeadInputBgSrc3,
        indexLogoSrc: this.data.indexLogoSrc3
      });
    }
    this.setData({
      pixelRatio: pixelRatio
    });
  },
  //获取设备像素比
  getPixelRatio: function() {
    let pixelRatio = 0
    wx.getSystemInfo({
      success: function (res) {
        pixelRatio = res.pixelRatio
      },
      fail: function () {
        pixelRatio = 0
      }
    })
    return pixelRatio
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
