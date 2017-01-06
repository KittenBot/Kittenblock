# This is the source code of KittenBlock
![](http://git.oschina.net/uploads/images/2016/1226/212757_19ab1d69_76038.png)
Kittenblock基于最新Scratch3.0代码开发, 主要有三个部分的代码:

scratch-vm: Scratch3.0的虚拟机, 代码块的运行环境, 连接render和blocks的核心.

scratch-blocks: Scratch3.0的模块代码,基于blockly改造而来.

scratch-render: Scratch3.0的舞台前端

app: 基于Scratch-gui改造而来,使用react开发

以上三块代码已经全部包含到仓库中,不需要从scratch官方github重新下载,目前我们对vm和blocks做了部分修改,每周都会与官方代码进行同步.


## 部署方法:
先将仓库克隆到本地

    git clone https://git.oschina.net/Kittenbot/KittenbotGui.git

进入仓库目录

	cd KittenbotGui

安装相关依赖包

	npm install

在pc上运行还需要kittenbot-pc相关依赖[http://git.oschina.net/Kittenbot/kittenblock-pc](http://git.oschina.net/Kittenbot/kittenblock-pc)

	git clone https://git.oschina.net/Kittenbot/kittenblock-pc.git

进入kitteblock-pc包下:
	
	cd kittenbot-pc
	npm install

并且webpack打包源代码

	node_modules\bin\wepback

回到仓库根目录打包scratch3.0的代码

	cd ..
	node_modules\bin\wepback

所有需要的源代码文件都被打包放到了nwjs目录下
之后只需要从[nwjs](http://nwjs.io/)下载最新的可执行包放到nwjs目录下就行了


