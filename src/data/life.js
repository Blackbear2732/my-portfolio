export const lifeSections = [
  {
    id: 'beijing',
    title: '2024年10月1日至10月5日 · 北京游',
    subtitle: '国庆假期，漫步古都，感受历史文化的魅力',
    timeline: { date: '2024.10', title: '北京游' },
    items: [
      { src: 'image/life/beijing/beijing-01.jpg', title: '天安门夜景', date: '2024年10月1日', desc: '华灯初上，金碧辉煌的城楼在夜色中愈发庄严肃穆。' },
      { src: 'image/life/beijing/beijing-02.jpg', title: '圆明园遗址', date: '2024年10月1日', desc: '昔日皇家园林的遗迹，诉说着历史的沧桑与警示。' },
      { src: 'image/life/beijing/beijing-03.jpg', title: '万里长城', date: '2024年10月2日', desc: '蜿蜒于山脉之巅，展现着中华民族的伟大智慧与气魄。' },
      { src: 'image/life/beijing/beijing-04.jpg', title: '天坛', date: '2024年10月4日', desc: '明清两代帝王祭天的场所，中国现存规模最大的古代祭祀建筑群。' },
      { src: 'image/life/beijing/beijing-05.jpg', title: '天安门广场', date: '2024年10月4日', desc: '象征着新中国的心脏，见证了无数历史时刻的庄严广场。' },
      { src: 'image/life/beijing/beijing-06.jpg', title: '北京大学', date: '2024年10月4日', desc: '百年学府的精神象征，静谧优雅的未名湖映照着燕园的文化底蕴。' }
    ]
  },
  {
    id: 'qingdao',
    title: '2024年7月31日至8月4日 · 青岛游',
    subtitle: '夏日海滨，感受海风与啤酒之都的独特魅力',
    timeline: { date: '2024.08', title: '青岛游' },
    subSections: [
      {
        title: '青岛啤酒博物馆',
        date: '2024年8月1日',
        items: [
          { src: 'image/life/qingdao/museum-01.jpg', title: '百年青啤', date: '2024年8月1日', desc: '百年青啤，传承经典，见证历史。' },
          { src: 'image/life/qingdao/museum-02.jpg', title: '酿造工艺', date: '2024年8月1日', desc: '古老的酿造设备，诉说着百年酿造工艺。' },
          { src: 'image/life/qingdao/museum-03.jpg', title: '金色麦芽', date: '2024年8月1日', desc: '金色的麦芽，酿造出醇厚的啤酒。' },
          { src: 'image/life/qingdao/museum-04.jpg', title: '现代工艺', date: '2024年8月1日', desc: '现代化的生产线，延续传统工艺。' },
          { src: 'image/life/qingdao/museum-05.jpg', title: '历史长廊', date: '2024年8月1日', desc: '博物馆内部，展示着青岛啤酒的发展历程。' }
        ]
      },
      {
        title: '海滨风光',
        date: '2024年8月1日至8月4日',
        items: [
          { src: 'image/life/qingdao/beach-01.jpg', title: '海边日出', date: '2024年8月3日', desc: '晨曦中的海边，金光洒满海面。' },
          { src: 'image/life/qingdao/beach-02.jpg', title: '碧海金沙', date: '2024年8月4日', desc: '蔚蓝的海水，金色的沙滩，构成完美的夏日风光。' },
          { src: 'image/life/qingdao/beach-03.jpg', title: '海天一色', date: '2024年8月1日', desc: '海天一色，波光粼粼，美不胜收。' },
          { src: 'image/life/qingdao/beach-04.jpg', title: '扬帆起航', date: '2024年8月1日', desc: '扬帆起航，乘风破浪，追逐梦想。' },
          { src: 'image/life/qingdao/beach-05.jpg', title: '守望灯塔', date: '2024年8月2日', desc: '古老的灯塔，守护着这片海域。' },
          { src: 'image/life/qingdao/beach-06.jpg', title: '夕阳剪影', date: '2024年8月2日', desc: '夕阳下的剪影，定格美好时刻。' },
          { src: 'image/life/qingdao/beach-07.jpg', title: '晨曦海边', date: '2024年8月3日', desc: '清晨的海边，宁静而美好。' }
        ]
      }
    ]
  },
  {
    id: 'wuyue',
    title: '2024年8月7日至8月15日 · 五岳挑战',
    subtitle: '追寻华夏五岳，挑战自我极限的壮举之旅',
    timeline: {
      date: '2024.08',
      title: '五岳挑战',
      children: [
        { id: 'songshan', title: '嵩山' },
        { id: 'taishan', title: '泰山' },
        { id: 'huashan', title: '华山' }
      ]
    },
    subSections: [
      {
        id: 'songshan',
        title: '嵩山 · 中岳',
        date: '2024年8月7日至8月10日',
        items: [
          { src: 'image/life/wuyue/songshan/songshan-01.jpg', title: '嵩山山门', date: '2024年8月8日', desc: '中岳嵩山，巍峨壮丽的山门迎接着每一位朝圣者。' },
          { src: 'image/life/wuyue/songshan/songshan-02.jpg', title: '高山仰止', date: '2024年8月8日', desc: '仰望嵩山，感受中岳的雄伟与神圣。' },
          { src: 'image/life/wuyue/songshan/songshan-03.jpg', title: '云雾缭绕', date: '2024年8月8日', desc: '云雾缭绕间，嵩山若隐若现，宛如仙境。' },
          { src: 'image/life/wuyue/songshan/songshan-04.jpg', title: '巅峰时刻', date: '2024年8月8日', desc: '历经攀登，终至嵩山之巅，俯瞰大地。' },
          { src: 'image/life/wuyue/songshan/songshan-05.jpg', title: '巅峰远眺', date: '2024年8月8日', desc: '站在嵩山之巅，感受中岳的磅礴与壮阔。' },
          { src: 'image/life/wuyue/songshan/songshan-06.jpg', title: '群峰连绵', date: '2024年8月10日', desc: '嵩山群峰连绵，气势恢宏。' },
          { src: 'image/life/wuyue/songshan/songshan-07.jpg', title: '历史印记', date: '2024年8月10日', desc: '古老的石刻，记录着嵩山的历史与文化。' },
          { src: 'image/life/wuyue/songshan/songshan-08.jpg', title: '石刻艺术', date: '2024年8月10日', desc: '石刻艺术，展现着古人的智慧与匠心。' },
          { src: 'image/life/wuyue/songshan/songshan-09.jpg', title: '千年印记', date: '2024年8月10日', desc: '千年石刻，诉说着嵩山的沧桑历史。' },
          { src: 'image/life/wuyue/songshan/songshan-10.jpg', title: '文化传承', date: '2024年8月10日', desc: '石刻文化，传承着中华文明的精髓。' },
          { src: 'image/life/wuyue/songshan/songshan-11.jpg', title: '历史碑文', date: '2024年8月10日', desc: '古老的碑文，镌刻着历史的痕迹。' },
          { src: 'image/life/wuyue/songshan/songshan-12.jpg', title: '峰峦叠嶂', date: '2024年8月10日', desc: '嵩山峰峦叠嶂，雄伟壮观。' },
          { src: 'image/life/wuyue/songshan/songshan-13.jpg', title: '少林寺', date: '2024年8月10日', desc: '少林寺，武术与禅宗的圣地，千年文化的传承。' }
        ]
      },
      {
        id: 'taishan',
        title: '泰山 · 东岳',
        date: '2024年8月11日至8月13日',
        items: [
          { src: 'image/life/wuyue/taishan/taishan-01.jpg', title: '泰山日出', date: '2024年8月13日', desc: '泰山日出，金光万丈，云海翻腾。' },
          { src: 'image/life/wuyue/taishan/taishan-02.jpg', title: '盘山古道', date: '2024年8月13日', desc: '蜿蜒盘旋的石阶，见证千年朝圣之路。' },
          { src: 'image/life/wuyue/taishan/taishan-03.jpg', title: '古代石刻', date: '2024年8月13日', desc: '历代文人墨客留下的石刻，诉说着泰山的文化底蕴。' },
          { src: 'image/life/wuyue/taishan/taishan-04.jpg', title: '巍峨山峰', date: '2024年8月13日', desc: '巍峨的山峰直插云霄，展现五岳之首的气势。' },
          { src: 'image/life/wuyue/taishan/taishan-05.jpg', title: '云海奇观', date: '2024年8月13日', desc: '云海翻腾，如梦似幻，尽显大自然神奇。' },
          { src: 'image/life/wuyue/taishan/taishan-06.jpg', title: '山云相映', date: '2024年8月13日', desc: '险峻的山势与柔美的云海相映成趣。' },
          { src: 'image/life/wuyue/taishan/taishan-07.jpg', title: '群峰叠嶂', date: '2024年8月13日', desc: '群峰叠嶂，气势磅礴，尽显泰山雄伟。' },
          { src: 'image/life/wuyue/taishan/taishan-08.jpg', title: '登天石阶', date: '2024年8月13日', desc: '千级石阶盘旋而上，通向云端天庭。' },
          { src: 'image/life/wuyue/taishan/taishan-09.jpg', title: '云雾缭绕', date: '2024年8月13日', desc: '远眺山下，云雾缭绕，恍若仙境。' }
        ]
      },
      {
        id: 'huashan',
        title: '华山 · 西岳',
        date: '2024年8月15日',
        items: [
          { src: 'image/life/wuyue/huashan/huashan-01.jpg', title: '华山之巅', date: '2024年8月15日', desc: '巅峰时刻，俯瞰华山绝景，天地尽在脚下。' },
          { src: 'image/life/wuyue/huashan/huashan-02.jpg', title: '华山论剑', date: '2024年8月15日', desc: '华山论剑，千年侠客梦，豪情壮志在此凝聚。' },
          { src: 'image/life/wuyue/huashan/huashan-03.jpg', title: '千年石刻', date: '2024年8月15日', desc: '古人留下的墨宝，见证华山千年历史。' },
          { src: 'image/life/wuyue/huashan/huashan-04.jpg', title: '石壁文字', date: '2024年8月15日', desc: '石壁上的文字，讲述着华山的传奇故事。' },
          { src: 'image/life/wuyue/huashan/huashan-05.jpg', title: '文化印记', date: '2024年8月15日', desc: '历代文人墨客在此留下不朽印记。' },
          { src: 'image/life/wuyue/huashan/huashan-06.jpg', title: '云雾缭绕', date: '2024年8月15日', desc: '华山奇峰，云雾缭绕，宛如仙境。' },
          { src: 'image/life/wuyue/huashan/huashan-07.jpg', title: '险峻山势', date: '2024年8月15日', desc: '险峻的山势，展现华山独特的魅力。' },
          { src: 'image/life/wuyue/huashan/huashan-08.jpg', title: '群峰竞秀', date: '2024年8月15日', desc: '群峰竞秀，尽显华山雄奇壮丽。' },
          { src: 'image/life/wuyue/huashan/huashan-09.jpg', title: '绝壁天险', date: '2024年8月15日', desc: '陡峭的山崖，诠释着华山天下第一险。' }
        ]
      }
    ]
  }
]