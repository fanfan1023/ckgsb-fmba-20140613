长江商学院金融MBA论坛•广州 互联网金融的创业机会与实践

------

长江商学院金融MBA论坛•广州 互联网金融的创业机会与实践

注：只测试过 webkit/blink 内核、以及微信浏览器。其他地段浏览器不进行兼容，另外，不兼容横屏。设计图比例为 1080/1920。因此最佳查看分辨率为一般手机竖屏查看。


##本地使用

1、保存到本地  
```
git clone git://github.com/ingbaobeigroup/hot.ingbaobei.com.git 
```
或者点击这里右下边的 ```Download Zip```


2、到最顶层目录下面，使用静态文件存储，进行发布。  
这里采用了朴灵大神的静态文件服务器，  
先安装[nodejs](http://nodejs.org/)  

再安装 cnpm
```
$ npm i -g cnpm
```

再安装 anywhere
```
$ cnpm i -g anywhere
```

然后，运行
```
$ cd /path to project
$ anywhere 80
```

然后就能运行了。浏览器此时目测自动打开了这个网页了。

##文件架构
```
\father
  css\: css 目录
  icon\: icon 目录
  icon.height\: 输出点质量高一点的jpg，网络好的时候浪费下别人的流量咯。
  js\: js 目录
    index.js: app js
    index.min.js：压缩
    jquery.min.js：自行构建的 jquery 库，精简的
    jquery-ui.min.js：自行构建的 jquery-ui 库，精简的
    jquery.fullPage.min.js: full page js lib
  less\: less 目录
    index.less：app css
    jquery.fullPage.less：full page css lib

  
```



先运行服务
```
anywhere 80
```
然后浏览器会蹦个页面出来对吧，效果就是那个。
```
http://你的ip/index.html
```

3、不想走第二步，那就直接点击目录下面的 index.html 看看就知道。

------

本地测试没问题是吧，有问题，就继续重头回跑过流程吧。没问题了，通过微信客户端打开这个网站，当然这个时候可以登录微信网页版把链接发送到对话窗口就能打开啦。

测试手机都没问题之后，就发布吧。

##查看效果
打开 chrome 或其他浏览器。拉到竖屏的比例。然后
```
http://你的ip/index.html
```
记得强制刷新。

打开，就能查看。   
没啥错误的话，就可以了。如果有错误。那就只能重新发布了。肯定是操作失误就对了。

##提交版本
效果算是查看完毕了，那就 提交版本吧。把这个提交到github上面，管理员会做事的了。至于怎么提交，这个见仁见智，反正 git 这个工具，基本都懂，不同平台，都不同。


##怎么开发这个？
项目的 css 采用的是 less 编写，使用 [koala](http://koala-app.com/) 进行编译。
然后 js 是使用 grunt 进行 构建的，开发版本可以使用单独的 js 引入进行开发。
生产版本必须安装环境，然后构建。  
安装环境 
``` 
1、nodejs
2、npm
3、cnpm
```
然后，``` cnpm install ```
最后大刀下去
``` grunt ``` 即可。 ```Gruntfile.js``` 里面已经写好了 ```default``` 任务了。