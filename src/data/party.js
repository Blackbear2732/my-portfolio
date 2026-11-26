export const partySteps = [
  { name: '递交申请书', date: '2023.9' },
  { name: '积极分子', date: '2024.10' },
  { name: '发展对象', date: '2025.11' },
  { name: '预备党员', date: '2025.12', active: true },
  { name: '转正', date: '待定' }
]

export const partyBasicInfo = [
  { key: '姓名', value: '张钧益' },
  { key: '性别', value: '男' },
  { key: '民族', value: '汉' },
  { key: '籍贯', value: '山西省万荣县' },
  { key: '班级', value: '软件2305班' },
  { key: '最高职务', value: '校青年融媒体中心主要负责人' }
]

export const partyHonors = [
  '2023-2024学年专业二等奖学金',
  '2024-2025学年专业三等奖学金',
  '2024-2025学年社会活动积极分子',
  '2024年度优秀志愿者',
  '2025年度优秀共青团干部'
]

export const partyStages = [
  {
    title: '入党积极分子阶段',
    rows: [
      { date: '2021年10月', event: '入团时间' },
      { date: '2023.9', event: '提交入党申请书时间' },
      { date: '2024.6', event: '同入党申请人谈话时间' },
      { date: '2024.10', event: '确定入党积极分子时间', highlight: true },
      { date: '2024.10.11', event: '团支部推荐意见时间' },
      { date: '2024.10.12', event: '学院团委推荐意见时间' },
      { date: '2024.10.13', event: '党支部推荐意见时间' },
      { date: '2024.10.15', event: '征求党员群众意见时间' },
      { date: '2024.11.2', event: '党支部意见时间' },
      { date: '2024.11.9', event: '基层党委备案时间' },
      { date: '2025.6.19 - 6.23', event: '二级党课培训日期' }
    ]
  },
  {
    title: '发展对象阶段',
    rows: [
      { date: '2025.11', event: '确定发展对象时间', highlight: true },
      { date: '2025.11.1', event: '征求党员群众意见时间' },
      { date: '2025.11.2', event: '培养人意见时间' },
      { date: '2025.11.3', event: '党支部意见时间' },
      { date: '2025.11.10', event: '基层党委备案情况时间' },
      { date: '2025.11.25 - 11.30', event: '重培班结业证书时间' },
      { date: '2025.12.1', event: '民意测验结果时间' },
      { date: '2025.12.2 - 12.18', event: '公示（公示开始至结束）' }
    ]
  },
  {
    title: '接收预备党员阶段',
    rows: [
      { date: '2025.12.8', event: '基层组织派专人谈话及意见' },
      { date: '2025.12.9', event: '支委会审查意见时间' },
      { date: '2025.12.10', event: '基层党组织审查意见时间' },
      { date: '2025.12.18', event: '党委组织部备案时间' },
      { date: '2025.12.21', event: '本人签名时间' },
      { date: '2025.12.22', event: '入党介绍人意见时间' },
      { date: '2025.12.25', event: '支部大会通过（预备党员入党时间）', highlight: true },
      { date: '2025.12.26', event: '上级党组织指派专人谈话时间' },
      { date: '2025.12.31', event: '基层党委审批意见时间' }
    ]
  },
  {
    title: '预备期考察与转正阶段',
    rows: [
      { date: '2026.2.9', event: '党支部意见时间' },
      { date: '2026.2.10', event: '基层党委意见时间' },
      { date: '2026.6.1', event: '教育考察情况时间1' },
      { date: '', event: '转正时间 / 党员类型', pending: true }
    ]
  }
]