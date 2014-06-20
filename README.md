### 1 解压AisinoMobi_UI_template_requirejs

**目录结构及推荐存放资源位置如下：**

index.html :页面主文件，包含UI页面和模版</br>

libs:库文件</br>

css/custom.css: 如果需要定制个性化UI style，在此文件中添加样式</br>

images：图片资源文件


### 2 打开命令行工具，执行以下步骤

	cd www  
	npm install -g grunt-cli
	npm install
	
### 3 检查javascript代码错误
	
	grunt check
	
### 4 生成release工程文件

	grunt

此步骤自动处理以下流程：

（1）根据requirejs依赖关系，生成唯一压缩过的js文件，其中包含所有js目录中各个文件内容，并且优化压缩  

（2）压缩index.html和css文件

（3）新建built目录，拷贝以上生成文件及libs下所有资源到built目录

将built目录下内容拷贝到对应平台目录下，编译即可

### 5 清除所有生成文件
	grunt clean


**注意：不要在任何js文件的define前加任何注释，影响r.js optimer 编译结果**
