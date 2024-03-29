const INF = '2099-12-31';
const markDate = {
  start: '活動開始日',
  end: '活動結束日(最後一日)',
  duration: '活動持續期間',
}

const markStyle = {
  underDot: '下方圓點',
  underLine: '下方底線',
  background: '背景實心圓',
  border: '背景空心圓',
  bold: '粗體日期',
  Italics: '斜體日期',
  BoldAndItalics: '粗斜體日期',
}

const eventClassification = {
  ignore: 999, // 忽略
  /*{
    content: [
      '戰鬥訓練',
      '培養挑戰',
      '福利扭蛋機',
      '限時簽到',
      '百日回饋',
      '一般召喚',
      '餐廳新海幣收益up',
      '商城內容更新',
      '停機維護',
      '精品展櫃',
    ]
  },*/
  longTermEvent: 1, // "長期活動", // '版本活動','【合約】'
  versionUpdate: 2, // 大版本更新
  clubBattle: 3, // "社團特訓", // '社團特訓'
  specialSummon: 4, // '活動召喚', // '活動召喚'
  periodicityEvent: 5, // '短時間事件', // '定向作戰'
  periodicityDiscount: 6, // '短時間優惠', // '全副武裝'
  shortTermEvent: 7, // "短期活動", // '緊急封鎖', '噩夢迴響'
  worldBoss: 8, // '世界首領' // '世界首領'
}

const eventList = {
  1.5: [
    {
      name: 'v1.5 秀色可餐',
      type: eventClassification.versionUpdate,
      period: {
        start: '2024-02-28',
        end: '2024-03-26',
      },
    },
    {
      name: '停機維護',
      type: eventClassification.ignore,
      period: {
        start: '2024-02-28',
        end: '2024-02-28',
      },
    },
    {
      name: '夢境奇緣',
      type: eventClassification.longTermEvent,
      period: {
        start: '2024-02-28',
        end: '2024-03-19',
      },
    },
    {
      name: '活動召喚「清平樂」',
      type: eventClassification.specialSummon,
      period: {
        start: '2024-02-28',
        end: '2024-03-12',
      },
    },
    {
      name: '活動召喚「醉紅塵」',
      type: eventClassification.specialSummon,
      period: {
        start: '2024-02-28',
        end: '2024-03-12',
      },
    },
    {
      name: '戰鬥訓練 - 米飯 清平樂',
      type: eventClassification.ignore,
      period: {
        start: '2024-02-28',
        end: '2024-03-12',
      },
    },
    {
      name: '戰鬥訓練 - 紅茶 醉紅塵',
      type: eventClassification.ignore,
      period: {
        start: '2024-02-28',
        end: '2024-03-12',
      },
    },
    {
      name: '培養挑戰 - 米飯 清平樂',
      type: eventClassification.ignore,
      period: {
        start: '2024-02-28',
        end: '2024-03-12',
      },
    },
    {
      name: '培養挑戰 - 紅茶 醉紅塵',
      type: eventClassification.ignore,
      period: {
        start: '2024-02-28',
        end: '2024-03-12',
      },
    },
    {
      name: '限時簽到',
      type: eventClassification.ignore,
      period: {
        start: '2024-02-28',
        end: '2024-03-19',
      },
    },
    {
      name: '「噩夢迴響」第五期',
      type: eventClassification.shortTermEvent,
      period: {
        start: '2024-02-28',
        end: '2024-03-12',
      },
    },
    {
      name: '餐廳新海幣收益UP',
      type: eventClassification.ignore,
      period: {
        start: '2024-02-28',
        end: '2024-03-12',
      },
    },
    {
      name: '定向作戰',
      type: eventClassification.periodicityEvent,
      period: {
        start: '2024-03-03',
        end: '2024-03-05',
      },
    },
    {
      name: '商城更新',
      type: eventClassification.ignore,
      period: {
        start: '2024-02-28',
        end: '2024-03-12',
      },
    },
    {
      name: '停機維護',
      type: eventClassification.ignore,
      period: {
        start: '2024-03-06',
        end: '2024-03-06',
      },
    },
    {
      name: '福利扭蛋機',
      type: eventClassification.ignore,
      period: {
        start: '2024-03-06',
        end: '2024-03-19',
      },
    },
    {
      name: '社團特訓 - 第六期',
      type: eventClassification.clubBattle,
      period: {
        start: '2024-03-06',
        end: '2024-03-12',
      },
    },
    {
      name: '定向作戰',
      type: eventClassification.periodicityEvent,
      period: {
        start: '2024-03-10',
        end: '2024-03-12',
      },
    },
    {
      name: '【合約】法夕黛-指尖芳菲',
      type: eventClassification.longTermEvent,
      period: {
        start: '2024-03-10',
        end: '2024-04-09',
      },
    },
    {
      name: '停機維護',
      type: eventClassification.ignore,
      period: {
        start: '2024-03-13',
        end: '2024-03-13',
      },
    },
    {
      name: '世界首領 - 竹牙巨人',
      type: eventClassification.worldBoss,
      period: {
        start: '2024-03-13',
        end: '2024-03-19',
      },
    },
    {
      name: '活動召喚「離夢蝶」',
      type: eventClassification.specialSummon,
      period: {
        start: '2024-03-13',
        end: '2024-03-26',
      },
    },
    {
      name: '戰鬥訓練 - 祈 離夢蝶',
      type: eventClassification.ignore,
      period: {
        start: '2024-03-13',
        end: '2024-03-26',
      },
    },
    {
      name: '戰鬥訓練 - 法夕黛 指尖芳菲',
      type: eventClassification.ignore,
      period: {
        start: '2024-03-13',
        end: '2024-04-09',
      },
    },
    {
      name: '培養挑戰 - 祈 離夢蝶',
      type: eventClassification.ignore,
      period: {
        start: '2024-03-13',
        end: '2024-03-26',
      },
    },
    {
      name: '抽獎活動「精品展櫃」',
      type: eventClassification.ignore,
      period: {
        start: '2024-03-13',
        end: '2024-03-26',
      },
    },
    {
      name: '緊急封鎖',
      type: eventClassification.shortTermEvent,
      period: {
        start: '2024-03-13',
        end: '2024-03-19',
      },
    },
    {
      name: '「噩夢迴響」第六期',
      type: eventClassification.shortTermEvent,
      period: {
        start: '2024-03-13',
        end: '2024-03-26',
      },
    },
    {
      name: '全副武裝',
      type: eventClassification.periodicityDiscount,
      period: {
        start: '2024-03-13',
        end: '2024-03-19',
      },
    },
    {
      name: '定向作戰',
      type: eventClassification.periodicityEvent,
      period: {
        start: '2024-03-17',
        end: '2024-03-19',
      },
    },
    {
      name: '商城更新',
      type: eventClassification.ignore,
      period: {
        start: '2024-03-13',
        end: '2024-03-26',
      },
    },
    {
      name: '停機維護',
      type: eventClassification.ignore,
      period: {
        start: '2024-03-20',
        end: '2024-03-20',
      },
    },
    {
      name: '世界首領 - 狂傲騎士',
      type: eventClassification.worldBoss,
      period: {
        start: '2024-03-20',
        end: '2024-03-26',
      },
    },
    {
      name: '社團特訓 - 第七期',
      type: eventClassification.clubBattle,
      period: {
        start: '2024-03-20',
        end: '2024-03-26',
      },
    },
    {
      name: '定向作戰',
      type: eventClassification.periodicityEvent,
      period: {
        start: '2024-03-24',
        end: '2024-03-26',
      },
    },
    {
      name: '擬真戰鬥中心層數更新',
      type: eventClassification.ignore,
      period: {
        start: '2024-03-20',
        end: INF,
      },
    },
    {
      name: '新增挑戰模式',
      type: eventClassification.ignore,
      period: {
        start: '2024-03-20',
        end: INF,
      },
    },
  ],
  1.6: [
    {
      name: 'v1.6 竹野熊踪',
      type: eventClassification.versionUpdate,
      period: {
        start: '2024-03-27',
        end: '2024-04-23',
      },
    },
    {
      name: '停機維護',
      type: eventClassification.ignore,
      period: {
        start: '2024-03-27',
        end: '2024-03-27',
      },
    },
    {
      name: '竹野熊蹤',
      type: eventClassification.longTermEvent,
      period: {
        start: '2024-03-27',
        end: '2024-04-16',
      },
    },
    {
      name: '活動召喚「幽篁月韻」',
      type: eventClassification.specialSummon,
      period: {
        start: '2024-03-27',
        end: '2024-04-09',
      },
    },
    {
      name: '活動召喚「滌蕩者」復刻',
      type: eventClassification.specialSummon,
      period: {
        start: '2024-03-27',
        end: '2024-04-09',
      },
    },
    {
      name: '戰鬥訓練 - 特莉絲 幽篁月韻',
      type: eventClassification.ignore,
      period: {
        start: '2024-03-27',
        end: '2024-04-09',
      },
    },
    {
      name: '戰鬥訓練 - 小白 滌蕩者',
      type: eventClassification.ignore,
      period: {
        start: '2024-03-27',
        end: '2024-04-09',
      },
    },
    {
      name: '培養挑戰 - 特莉絲 幽篁月韻',
      type: eventClassification.ignore,
      period: {
        start: '2024-03-27',
        end: '2024-04-09',
      },
    },
    {
      name: '百日回饋',
      type: eventClassification.ignore,
      period: {
        start: '2024-03-27',
        end: '2024-04-09',
      },
    },
    {
      name: '限時簽到',
      type: eventClassification.ignore,
      period: {
        start: '2024-03-27',
        end: '2024-04-16',
      },
    },
    {
      name: '「噩夢迴響」第七期',
      type: eventClassification.shortTermEvent,
      period: {
        start: '2024-03-27',
        end: '2024-04-09',
      },
    },
    {
      name: '定向作戰',
      type: eventClassification.periodicityEvent,
      period: {
        start: '2024-03-31',
        end: '2024-04-02',
      },
    },
    {
      name: '商城更新',
      type: eventClassification.ignore,
      period: {
        start: '2024-03-27',
        end: '2024-04-09',
      },
    },
  ],
}


export default {
  eventList,
  eventClassification,
  markStyle,
  markDate,
}
