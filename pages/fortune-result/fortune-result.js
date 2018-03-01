// pages/fortune-result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pixelRatio: 0,
    windowWidth: 0,
    windowHeight: 0,
    showBgImagePath:'',
    showBgImagePath2: '../../images/showtextbg@2x.png',
    showBgImagePath3: '../../images/showtextbg@3x.png',
    dogBgImagePath:'',
    dogBgImagePath2: '../../images/dog@2x.png',
    dogBgImagePath3: '../../images/dog@3x.png',
    qrBgImagePath: '../../images/qr@2x.jpg',
    name: '',
    title: '',
    desc: ''
  },

  returnIndex: () => {
    // 关闭跳转
    wx.redirectTo({
      url: '../index/index'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let arr = wx.getStorageSync('currentFortuneData') || {};
    this.setData({
      name: arr.name +'的2018运势',
      title: arr.title,
      desc: arr.desc
    })

    wx: wx.getSystemInfo({
      success: function (res) {
        that.setData({
          pixelRatio: res.pixelRatio,
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.drawCanvas();
  },

  drawCanvas: function () {
    // 根据像素比绘画不同的图片
    if (this.data.pixelRatio == 2) {
      this.setData({
        showBgImagePath: this.data.showBgImagePath2,
        dogBgImagePath: this.data.dogBgImagePath2
      });
    } else {
      this.setData({
        showBgImagePath: this.data.showBgImagePath3,
        dogBgImagePath: this.data.dogBgImagePath3
      });
    }
    let ctx = wx.createCanvasContext('myCanvas');
    // 画布宽高
    let ctxW = this.data.windowWidth;
    let ctxH = this.data.windowHeight - 80;
    // 默认像素比
    let pixelRatio = this.data.pixelRatio;
    // 屏幕系数比，以设计稿375*667（iphone7）为例
    let XS = this.data.windowWidth/375;

    // 垂直渐变
    const grd = ctx.createLinearGradient(0, 0, 0, ctxH);
    grd.addColorStop(0, '#0E128D');
    grd.addColorStop(1, '#080E3A');
    ctx.setFillStyle(grd);

    ctx.fillRect(0, 0, ctxW, ctxH);

    ctx.drawImage(this.data.showBgImagePath, ctxW / 2 - 158*XS, 34 * XS, 317 * XS, 361 * XS);
    ctx.drawImage(this.data.dogBgImagePath, 20 * XS, 331 * XS, 61 * XS, 98 * XS);

    ctx.setFontSize(18 * XS);
    ctx.setFillStyle('#F7F7FA');
    ctx.setTextAlign('center');
    ctx.setTextBaseline('middle');
    ctx.fillText(this.data.name, ctxW / 2, 58 * XS);

    ctx.setTextAlign('center');
    ctx.setTextBaseline('middle');
    ctx.setFontSize(35 * XS);
    ctx.setFillStyle('#232884');
    this.fontLineFeed(ctx, this.data.title, 1, 38 * XS, ctxW / 2, 120 * XS);

    ctx.setTextAlign('center');
    ctx.setTextBaseline('middle');
    ctx.setFontSize(14);
    ctx.setFillStyle('#FF72A5');
    this.fontLineFeed(ctx, this.data.desc, 18 * XS, 20 * XS, 200 * XS, 330 * XS);

    ctx.drawImage(this.data.qrBgImagePath, ctxW / 2 - 46 * XS, 400 * XS, 80 * XS, 80 * XS);

    ctx.stroke();
    ctx.draw();
  },
  // 文字换行
  /**
   * ctx,画布对象
   * str,需要绘制的文字
   * splitLen,切割的长度字符串
   * strHeight,每行文字之间的高度
   * x,位置
   * y
   */
  fontLineFeed:function(ctx,str,splitLen,strHeight,x,y){
    let strArr=[];
    for (let i = 0, len = str.length / splitLen;i<len;i++){
      strArr.push(str.substring(i * splitLen, i * splitLen + splitLen));
    }
    let s=0;
    for (let j = 0, len = strArr.length ; j < len; j++) {
      s = s + strHeight;
      ctx.fillText(strArr[j], x, y+s);
    }
  },
  // 保存图片
  saveImage: function (e) {
    
    wx.canvasToTempFilePath({
      canvasId: 'myCanvas',
      success: function (res) {
        console.log(res);
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success(result){
            wx.showToast({
              title: '图片保存成功',
              icon: 'success',
              duration: 2000
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '2018运势小程序',
      path: 'pages/index/index',
      success: function (res) {
        // 转发成功
        wx.showToast({
          title: '转发成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (res) {
        // 转发失败
        wx.showToast({
          title: '转发失败',
          icon: 'loading',
          duration: 2000
        })
      }
    }
  }
})