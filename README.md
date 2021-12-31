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

![image](https://github.com/lTangYB11/myitem/new/master/IMG/ps2.png)

