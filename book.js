module.exports = {
    // 书籍信息
    title: 'CSS学习笔记',
    description: '描述',
    isbn: '图书编号',
    author: '作者',
    lang: 'zh-cn',
  
    // 插件列表
    plugins: ["-lunr","-search","-sharing",//禁用gitbook自带的搜索和分享功能
    "search-pro",// 搜索插件 
    "code",// 代码插件
    "expandable-chapters",// 菜单折叠插件 
    "back-to-top-button",// 返回顶部插件 
    "theme-lou"// 主题插件
    ],
  
    // 插件全局配置
    pluginsConfig: {
        "theme-lou" :  { 
            "color" :  "#2096ff" ,  // 主题色 
            "favicon" :  "theme_img/favicon.ico" ,  // favicon图标 
            "logo" :  "theme_img/logo.png" ,  // 顶部左侧图标 
            "appleTouchIconPrecomposed152" :  "theme_img/apple.png" ,  // apple图标 
            "copyrightLogo" :  "assets/copyright.png" ,   // 底部水印LOGO 
            "forbidCopy" :  false ,  // 页面是否禁止复制 
            "search-placeholder" :  "关键词搜索" ,  // 搜索框默认文本 
            "book-summary-title" :  "目录" ,  // 目录标题 
            "book-anchor-title" :  "本章目录" ,  // 本章目录标题 
            "hide-elements" :  [ ".summary .gitbook-link" ,  ".summary .divider" ] ,  // 需要隐藏的标签 
            "copyright" :  { 
                "author" :  "北极熊说它怕冷"   // 底部版权展示的作者名 
            } 
        } 
    },
  
    // 模板变量
    variables: {
        "themeLou" :  { 
        // 顶部导航栏配置 
            "nav" :  [ 
                { 
                "target" :  "_blank" ,  // 跳转方式: 打开新页面 
                "url" :  "http://..." ,   // 跳转页面 
                "name" :  ""   // 导航名称 
                } 
            ] , 
            // 底部打赏配置 
            "footer" :  { 
                "donate" :  { 
                    "button" :  "捐赠" ,  // 打赏按钮 
                    "avatar" :  "theme_img/头像.jpg",  // 头像地址 
                    "nickname" :  "北极熊说它怕冷",  // 昵称 
                    "message" :  "随意打赏，但不要超过一顿早餐钱！",  // 打赏消息文本 
                    "text" :  "『 赠人玫瑰 🌹 手有余香 』",  // 打赏话语 
                    "wxpay" :  "theme_img/微信收款码.png",  // 微信收款码 
                    "alipay" :  "theme_img/支付宝收款码.jpg"  // 支付宝收款码 
                } , 
                "copyright" :  true  // 是否显示版权 
            } 
        } 
    },
  };