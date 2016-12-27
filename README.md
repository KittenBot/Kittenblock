# This is the source code of KittenBlock
![](https://cloud.githubusercontent.com/assets/3390845/21489461/e95cd10e-cc25-11e6-8c7b-77d492bfe2e8.png)

Kittenblock is based on the latest code-base of Scratch 3.0, it includes 3 major parts:

scratch-vm: the major running environment of Scratch blocks (Scratch 3.0), joint point of Scratch-blocks and Scratch-render.

scratch-blocks: blocks front-end with modified from blockly.

scratch-render: the stage of scratch3.0

app: based on scratch-gui, developed in react

All these three parts already included in this repo, I have modified some of the code in Scratch VM and Scratch Blocks.

Basically I sync to official scratch code base every week.

## For KittenBlock Users:
Please download the Windows application here:
http://kittenbot.cc/kittenblock/download/

## Deploy:
clone this repo

    git clone https://github.com/KittenBot/Kittenblock.git

enter the root directory of repo

	cd KittenbotGui

install packages

	npm install

to make kittenblock run offline locally you still need kittenblock-pc depends [http://git.oschina.net/Kittenbot/kittenblock-pc](http://git.oschina.net/Kittenbot/kittenblock-pc)

	https://git.oschina.net/Kittenbot/kittenblock-pc.git

go into kitteblock-pc:
	
	cd kittenbot-pc
	npm install

pack the source code of kittenblock-pc

	node_modules\bin\wepback

back to root repos and pack everything else

	cd ..
	node_modules\bin\wepback

all the source code need for will locate in nwjs folder
the next thing is get [nwjs](http://nwjs.io/) and unzip to nwjs folder, have fun.

PS:

Due to Github blocked by GFW from time to time, my major dev repo is [https://git.oschina.net/Kittenbot/KittenbotGui.git
](https://git.oschina.net/Kittenbot/KittenbotGui.git) .

And this is my first JavaScript and react project, pardon me for not doing everything in best practice. And we need your contributition to make it move forward.

