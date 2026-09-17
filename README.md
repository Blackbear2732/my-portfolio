# 张钧益 · 个人网站

> 一个基于 Vue 3 + Vite 构建的响应式个人网站，用于展示个人信息、生活记录、项目经历与荣誉证书。

🔗 在线预览：https://www.blackbearcode.dpdns.org

---

## ✨ 项目简介

这是我从大二开始维护的个人网站，最初是纯 HTML/CSS/JS，后重构为 Vue 3 单页应用。网站包含个人主页、生活记录、个人成就、项目经历四大板块，同时提供电脑技术支持类服务的联系入口。

做这个网站的初衷有三个：

- **展示自己**：把简历之外的东西（摄影、学生工作、证书）可视化呈现
- **练习前端**：主修 Java 后端，但需要一个持续练手的前端项目
- **长期维护**：内容数据抽离到 `data/` 目录，改内容不用动组件

---

## 🛠️ 技术栈

| 类别   | 技术                                |
| ---- | --------------------------------- |
| 前端框架 | Vue 3（Composition API）            |
| 路由   | Vue Router 4（history 模式）          |
| 构建工具 | Vite 2                            |
| 样式   | 原生 CSS（CSS 变量 + 媒体查询）             |
| 图标   | Font Awesome 6                    |
| 状态管理 | 轻量 reactive store（无 Vuex / Pinia） |
| 部署   | Cloudflare Pages                  |
| 版本控制 | Git + GitHub                      |

> **为什么是 Vite 2？** 因为我当时的开发环境是 Node 14，Vite 5 需要 Node 18+。如果你用 Node 18+，可以无缝升级到 Vite 5。

---

## 📁 项目结构



my-portfolio/
├── public/                     # 静态资源（构建时直接拷贝）
│   ├── image/                  # 图片资源
│   │   ├── avatar.jpg          # 头像
│   │   ├── wechat-qr.jpg       # 微信二维码
│   │   ├── lunbo/              # 首页轮播图
│   │   ├── life/               # 生活记录 - 北京
│   │   ├── qingdao/            # 生活记录 - 青岛
│   │   ├── wuyue/              # 生活记录 - 五岳
│   │   └── zuopin/             # 证书与作品
│   └── _redirects              # SPA 回退配置（Cloudflare Pages 用）
│
├── src/
│   ├── assets/styles/
│   │   └── main.css            # 全局样式
│   ├── components/             # 通用组件
│   │   ├── NavBar.vue          # 顶部导航栏
│   │   ├── FooterBar.vue       # 底部社交栏
│   │   ├── BackToTop.vue       # 返回顶部按钮
│   │   ├── ImageViewer.vue     # 图片大图查看器
│   │   ├── QrModal.vue         # 微信二维码弹窗
│   │   ├── QqModal.vue         # QQ 号弹窗
│   │   ├── PhoneModal.vue      # 电话弹窗
│   │   └── PriceModal.vue      # 获取报价弹窗
│   ├── data/                   # 内容数据（改内容只改这里）
│   │   ├── site.js             # 联系方式、社交链接
│   │   ├── life.js             # 生活记录照片
│   │   ├── portfolio.js        # 个人成就证书
│   │   └── projects.js         # 项目经历
│   ├── router/
│   │   └── index.js            # 路由配置
│   ├── store/
│   │   └── ui.js               # 全局弹窗状态
│   ├── utils/
│   │   └── asset.js            # 图片路径处理
│   ├── views/                  # 页面级组件
│   │   ├── HomeView.vue        # 首页
│   │   ├── LifeView.vue        # 生活记录
│   │   ├── PortfolioView.vue   # 个人成就
│   │   └── ProjectsView.vue    # 项目经历
│   ├── App.vue                 # 根组件
│   └── main.js                 # 应用入口
│
├── index.html                  # HTML 模板
├── vite.config.js              # Vite 配置
├── package.json
└── README.md



## 🚀 本地运行

### 环境要求

- Node.js ≥ 14.16（推荐 16 或 18）
- npm ≥ 6

# 克隆仓库

```bash
git clone https://github.com/Blackbear2732/Blackbear2732.git
cd Blackbear2732
```

# 安装依赖

```bash
npm install
```

# 启动开发服务器

```bash
npm run dev
```

打开浏览器访问 `http://localhost:80/`

### 构建生产版本

```bash
npm run build
```

产物输出到 `dist/` 目录，可直接部署到任意静态托管服务。

### 本地预览生产构建

```bash
npm run preview
```

---

## 📝 内容维护指南

网站所有文字、图片、联系方式都通过**数据文件**管理，改内容不需要碰组件代码。

### 修改联系方式 / 社交链接

编辑 `src/data/site.js`：

```js
export const site = {
  name: '张钧益',
  email: 'zhangjunyi2732@outlook.com',
  phone: '13133093346',
  qq: '1239748544',
  wechatQr: 'image/wechat-qr.jpg',
  douyin: 'https://www.douyin.com/user/...',
  bilibili: 'https://space.bilibili.com/426836964'
}
```

### 添加生活记录照片

1. 把图片放到 `public/image/life/`（或对应子目录），**文件名用英文小写 + 连字符**
2. 在 `src/data/life.js` 对应分类的 `items` 数组里加一行：

```js
{
  src: 'image/life/beijing-07.jpg',
  title: '故宫',
  date: '2024年10月3日',
  desc: '红墙黄瓦，六百年紫禁城的沧桑与辉煌。'
}
```

### 添加荣誉证书

1. 证书图片放到 `public/image/zuopin/`，命名如 `cert-scholarship-2.jpg`
2. 在 `src/data/portfolio.js` 里加一条：

```js
{
  category: '荣誉奖励',
  title: '某某奖学金',
  desc: '获奖说明',
  tags: ['学术成就'],
  certificate: 'image/zuopin/cert-scholarship-2.jpg'
}
```

> 没有图片时把 `certificate` 设为 `''`，页面会自动隐藏"查看证明"按钮。

### 修改首页轮播图

编辑 `src/views/HomeView.vue` 里的 `carouselImages` 数组。

---

## 🌐 部署

当前部署在 **Cloudflare Pages**，通过 GitHub 自动部署。

### 首次部署步骤

1. Cloudflare Dashboard → `Workers & Pages` → `Create` → `Pages` → `Connect to Git`

2. 选择 GitHub 仓库

3. 配置构建参数：
   
   | 字段                     | 值               |
   | ---------------------- | --------------- |
   | Framework preset       | `Vue`           |
   | Build command          | `npm run build` |
   | Build output directory | `dist`          |

4. 添加环境变量：
   
   | 变量名            | 值         |
   | -------------- | --------- |
   | `NODE_VERSION` | `16.20.2` |

5. 点击 `Save and Deploy`

### 自动部署

之后每次 `git push` 到 `main` 分支，Cloudflare 会自动重新构建并部署，1-3 分钟生效。

### SPA 路由配置

因为使用 history 模式，`public/_redirects` 文件内容必须是：

```
/*    /index.html   200
```

这确保刷新子页面（如 `/life`）时不会 404。

---

## 🎨 功能特性

- ✅ **响应式布局**：桌面 / 平板 / 手机自适应
- ✅ **图片懒加载**：生活记录页 49 张照片不卡顿
- ✅ **图片查看器**：支持左右箭头、键盘方向键、ESC 关闭
- ✅ **一键复制**：电话、QQ 号点击复制到剪贴板
- ✅ **弹窗式联系**：微信二维码、QQ、电话、报价无需跳转
- ✅ **滚动动画**：导航栏头像淡入、返回顶部按钮浮现
- ✅ **平滑滚动**：锚点定位带过渡动画
- ✅ **数据驱动**：内容与组件分离，改内容不动代码

---

## 📌 后续计划

- [ ] 新增「技能栈」区块
- [ ] 项目详情页（技术架构、难点总结）
- [ ] 深色模式
- [ ] 后端留言板（Spring Boot + MySQL）
- [ ] 访客统计与展示

---

## 👤 关于作者

**张钧益**，山西农业大学软件学院在读，主修 Java 后端开发。

- 学生工作：山西农业大学青年融媒体中心副主任
- 兴趣方向：后端开发 / 摄影 / 视频剪辑
- 邮箱：zhangjunyi2732@outlook.com

---

## 📄 License

本项目基于 [MIT License](LICENSE) 开源。

网站中的**图片、文字、证书等内容均为个人所有，未经许可请勿转载使用**。代码部分欢迎参考、学习、二次开发。

---

## 🙏 致谢

- [Vue.js](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Vue Router](https://router.vuejs.org/)
- [Font Awesome](https://fontawesome.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

---


