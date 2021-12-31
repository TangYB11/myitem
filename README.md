一、系统设计
===
1．系统的主要目标：
---
实现商品管理系统

2．项目的功能说明：
---
（1）用户登录与注册：可以注册用户并登陆，成功登陆后进入商品管理界面。

（2）商品展示：商品的名称、图片、价格、邮费都会展示在商品列表中，若遇到没有商品的问题，请点击上一页按钮，展示商品。

（3）增加商品：可以实现自行添加商品。

（4）删除商品：可以将商品删除。

（5）修改商品：可以对商品信息进行修改。

（6）查找商品：可以查找出想要的商品。

二、详细设计说明
==
1、mongodb数据库说明
--
数据库拥有三个表：

1）存放用户的user：name、password

2）存放商品的products：proName、procost、propostage、prodes、proImg

3)查询商品用的searchProduct：proName、procost、propostage、prodes、proImg

![JCKP11KPHGW6(`KI889CL)H](https://user-images.githubusercontent.com/95195374/147814214-df2d688b-9314-4eb9-b33b-558bdc37a4c1.png)

2.引入的包
--
npm install express --save  路由 开发框架

npm install ejs --save  渲染

npm install mongodb --save  数据库

npm install mongoose --save  mongoose模块

npm install exprss-session  保存用户信息

npm install md5-node --save  对密码进行加密

npm install multiparty --save  图片的保存

3.项目目录结构和各个部分的说明
--
![FGM~4(A``G17GPE()IJA5%0](https://user-images.githubusercontent.com/95195374/147817918-49cf7274-0757-4252-ac6f-89120c1cf78a.png)

1）public 引入的前端界面需要的css js bootstrap

2）router 包括各种js 实现例如上一页、下一页的功能

3）upload 商品的图片

4）views 页面的设置

5）app.js 主程序

6）mongodb.js 数据库连接

7）其他 开发过程测试的js

三、使用说明
==
1.系统首页
--
![Ubuntu20-2021-12-31-16-46-24](https://user-images.githubusercontent.com/95195374/147813931-29679b8c-9754-4bde-98a4-977422685ce5.png)

可以选择用户注册与用户登录，跳转到用户的注册与登录。

2.登录界面
--
![N6XBYOV7V_5Y{H}DS0BERSM](https://user-images.githubusercontent.com/95195374/147815349-b662df33-2b9d-4fc3-a410-a2d7dbfd62d3.png)

可以核对数据库的表中数据，正确输入密码后实现登录跳转功能（密码为加密密码）。

3.注册界面
--
![M4KHMLFW4DO5BI5CF4XQYNN](https://user-images.githubusercontent.com/95195374/147817534-e7778f54-71e9-4df7-8958-b38a558f42f7.png)

可以进行新用户的注册，将数据保存到数据库中，从而能实现登录。

4.商品列表（商品的展示、修改与删除）
--
![MX7A)8)A`F{XWQS~)MDYEQ3](https://user-images.githubusercontent.com/95195374/147815571-0fe2729a-8623-481b-8077-92a914ccb670.png)

可以展示所有商品的名称、价格、图片、邮费等详细信息，还可以通过点击修改与删除实现对商品的修改与删除，上一页与下一页可以
实现翻页（如若商品显示不出，请点击上一页，商品即可刷新出来）。

5.增加商品
--
![JZ )7%{6$K0C0PD)JYO8T](https://user-images.githubusercontent.com/95195374/147817793-693cbdaa-6e6b-48c3-bd19-c11d8964d0e2.png)

可以通过此界面实现对商品的增加。

6.查询商品
--
![9%MMKJV0BZQM_0G _1DLP%Y](https://user-images.githubusercontent.com/95195374/147818198-a9babdb8-c570-464a-8c9f-c6bc841b3369.png)

此栏可以对商品进行查找，找到自己想要修改或者删除的商品，亦或者想要看到的商品。

7.更多
---
待开发

四、开发日记
==
因为我的vscode与github仓库传输出了问题，所以我第一个项目tybsitem只有一个雏形便停止了，我当时尝试了很多方法，但迫于交作业的deadline，我就先另创项目做了，没有

实时传输数据到github仓库，最后是一起通过命令行使用token传输到github仓库的。

项目大概流程：先引用了css等建好了首页、登录与注册页面，然后实现了与数据库相连（此时只有user，来实现注册与登录），然后顺利实现登录注册功能后又开始对商品的增、删、改、查

等功能进行一步步实现，增与删是蛮简单的，修改略微复杂一点，查找最为复杂，虽然只是实现了简单的增删改查但中途也遇到了许多困难，上百度各种查找，有时候一个bug要花费几个小时来

解决，这两天做各种大作业做的我头疼肩膀酸的，一点活力都没有，还有南方的冬天太冷了，开空调都顶不住，想赶快回家享受地暖了，快点结束吧，大作业也是，期末考试也是，太难了。


