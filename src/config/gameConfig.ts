import type { GameConfig } from '../types/game'

export const gameConfig: GameConfig = {
  title: '恋爱物语',
  initialResources: 100,
  maxActionsPerDay: 3,
  daysPerWeek: 7,
  maxAffinity: 100,
  minAffinity: -50,
  maxMood: 100,
  minMood: 0,
  moodDecayPerDay: 5,
  affinityDecayPerDay: 1,
  timeSlots: ['morning', 'afternoon', 'evening', 'night'],

  characters: [
    {
      id: 'linxiaoyu',
      name: '林小雨',
      avatar: '🌸',
      description: '温柔善良的图书馆管理员，喜欢读书和花草',
      personality: '温柔内向，有些害羞，但对喜欢的事物非常热情',
      favoriteGifts: ['flower', 'book', 'tea'],
      dislikedGifts: ['alcohol', 'game_console'],
      chatTopics: [
        { topic: '文学', affinity: 3 },
        { topic: '花草', affinity: 3 },
        { topic: '天气', affinity: 1 },
        { topic: '游戏', affinity: -1 },
        { topic: '运动', affinity: 0 }
      ],
      baseAffinity: 10,
      baseMood: 60,
      unlocked: true
    },
    {
      id: 'sufei',
      name: '苏菲',
      avatar: '🔥',
      description: '活泼开朗的咖啡馆女老板，热爱烘焙',
      personality: '热情外向，有点毒舌但内心温柔',
      favoriteGifts: ['coffee', 'dessert', 'game_console'],
      dislikedGifts: ['flower', 'book'],
      chatTopics: [
        { topic: '美食', affinity: 3 },
        { topic: '游戏', affinity: 3 },
        { topic: '天气', affinity: 1 },
        { topic: '文学', affinity: -1 },
        { topic: '运动', affinity: 2 }
      ],
      baseAffinity: 5,
      baseMood: 70,
      unlocked: true
    },
    {
      id: 'yeqing',
      name: '叶青',
      avatar: '🌙',
      description: '神秘的转学生，总是独来独往',
      personality: '冷静寡言，似乎藏着很多秘密',
      favoriteGifts: ['book', 'tea', 'music_box'],
      dislikedGifts: ['dessert', 'alcohol'],
      chatTopics: [
        { topic: '文学', affinity: 2 },
        { topic: '音乐', affinity: 3 },
        { topic: '天气', affinity: 0 },
        { topic: '游戏', affinity: 1 },
        { topic: '运动', affinity: -1 }
      ],
      baseAffinity: 0,
      baseMood: 50,
      unlocked: false,
      hidden: true,
      unlockCondition: 'unlock_yeqing'
    }
  ],

  gifts: [
    { id: 'flower', name: '鲜花', price: 30, icon: '🌹', description: '一束美丽的鲜花' },
    { id: 'book', name: '小说', price: 25, icon: '📚', description: '一本畅销小说' },
    { id: 'tea', name: '茶叶', price: 40, icon: '🍵', description: '上等的茶叶礼盒' },
    { id: 'coffee', name: '咖啡豆', price: 35, icon: '☕', description: '精品咖啡豆' },
    { id: 'dessert', name: '甜点', price: 20, icon: '🍰', description: '精致的手工甜点' },
    { id: 'game_console', name: '游戏机', price: 80, icon: '🎮', description: '最新款掌上游戏机' },
    { id: 'alcohol', name: '红酒', price: 60, icon: '🍷', description: '一瓶高档红酒' },
    { id: 'music_box', name: '音乐盒', price: 50, icon: '🎵', description: '精致的八音盒' }
  ],

  cards: [
    { id: 'linxiaoyu_common_1', name: '图书馆的邂逅', characterId: 'linxiaoyu', rarity: 'common', image: '📖', description: '第一次在图书馆见到小雨的场景', unlockCondition: 'meet_linxiaoyu' },
    { id: 'linxiaoyu_rare_1', name: '花田中', characterId: 'linxiaoyu', rarity: 'rare', image: '🌻', description: '小雨在花田中微笑的样子', unlockCondition: 'linxiaoyu_affinity_40' },
    { id: 'linxiaoyu_epic_1', name: '雨中伞', characterId: 'linxiaoyu', rarity: 'epic', image: '☂️', description: '一起在雨中撑伞回家', unlockCondition: 'linxiaoyu_affinity_70' },
    { id: 'linxiaoyu_legendary_1', name: '告白', characterId: 'linxiaoyu', rarity: 'legendary', image: '💝', description: '樱花树下的告白', unlockCondition: 'linxiaoyu_affinity_100' },
    { id: 'sufei_common_1', name: '咖啡馆的相遇', characterId: 'sufei', rarity: 'common', image: '☕', description: '第一次走进苏菲的咖啡馆', unlockCondition: 'meet_sufei' },
    { id: 'sufei_rare_1', name: '烘焙时光', characterId: 'sufei', rarity: 'rare', image: '🧁', description: '苏菲教你做蛋糕', unlockCondition: 'sufei_affinity_40' },
    { id: 'sufei_epic_1', name: '深夜游戏', characterId: 'sufei', rarity: 'epic', image: '🎮', description: '一起打游戏到深夜', unlockCondition: 'sufei_affinity_70' },
    { id: 'sufei_legendary_1', name: '夕阳下的吻', characterId: 'sufei', rarity: 'legendary', image: '🌅', description: '咖啡馆关门前的浪漫时刻', unlockCondition: 'sufei_affinity_100' },
    { id: 'yeqing_common_1', name: '月下身影', characterId: 'yeqing', rarity: 'common', image: '🌙', description: '月光下独自散步的叶青', unlockCondition: 'meet_yeqing' },
    { id: 'yeqing_rare_1', name: '琴音缭绕', characterId: 'yeqing', rarity: 'rare', image: '🎹', description: '叶青弹奏钢琴的样子', unlockCondition: 'yeqing_affinity_40' }
  ],

  events: [
    {
      id: 'intro_linxiaoyu',
      title: '图书馆的邂逅',
      description: '你在图书馆寻找一本书时，一位温柔的女生帮你找到了它。她叫林小雨，是这里的管理员。',
      characterId: 'linxiaoyu',
      triggerCondition: { minDay: 1, maxDay: 1, timeOfDay: 'morning' },
      choices: [
        {
          id: 'thankful',
          text: '道谢并和她聊聊天',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 5, moodChange: 10 }],
          addCardId: 'linxiaoyu_common_1'
        },
        {
          id: 'hurry',
          text: '道谢后匆匆离开',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 2 }]
        }
      ],
      once: true,
      priority: 100
    },
    {
      id: 'intro_sufei',
      title: '咖啡馆的偶遇',
      description: '你走进一家新开的咖啡馆，热情的女老板苏菲立刻迎了上来。"欢迎光临！今天想来点什么？"',
      characterId: 'sufei',
      triggerCondition: { minDay: 1, maxDay: 2, timeOfDay: 'afternoon' },
      choices: [
        {
          id: 'coffee',
          text: '点一杯招牌咖啡',
          effects: [{ characterId: 'sufei', affinityChange: 5, moodChange: 10 }],
          resourceChange: -10,
          addCardId: 'sufei_common_1'
        },
        {
          id: 'dessert',
          text: '点一份甜点尝尝',
          effects: [{ characterId: 'sufei', affinityChange: 7, moodChange: 15 }],
          resourceChange: -20
        }
      ],
      once: true,
      priority: 99
    },
    {
      id: 'rainy_day_1',
      title: '突如其来的暴雨',
      description: '天空突然下起了大雨，你看到林小雨站在屋檐下，似乎没带伞。',
      characterId: 'linxiaoyu',
      triggerCondition: { minDay: 3, timeOfDay: 'evening', minAffinity: 20, characterId: 'linxiaoyu' },
      choices: [
        {
          id: 'share_umbrella',
          text: '把伞借给她',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 15, moodChange: 20 }]
        },
        {
          id: 'wait_together',
          text: '陪她等雨停',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 10, moodChange: 10 }]
        },
        {
          id: 'leave',
          text: '假装没看到走开',
          effects: [{ characterId: 'linxiaoyu', affinityChange: -5, moodChange: -10 }]
        }
      ],
      once: true,
      priority: 90
    },
    {
      id: 'cafe_late_night',
      title: '深夜咖啡馆',
      description: '你路过咖啡馆，发现灯还亮着。苏菲一个人在店里，看起来有些疲惫。',
      characterId: 'sufei',
      triggerCondition: { minDay: 5, timeOfDay: 'night', minAffinity: 30, characterId: 'sufei' },
      choices: [
        {
          id: 'help',
          text: '进去帮帮忙',
          effects: [{ characterId: 'sufei', affinityChange: 12, moodChange: 15 }],
          resourceChange: -5
        },
        {
          id: 'company',
          text: '点杯咖啡陪陪她',
          effects: [{ characterId: 'sufei', affinityChange: 8, moodChange: 10 }],
          resourceChange: -15
        },
        {
          id: 'ignore',
          text: '不打扰她了',
          effects: [{ characterId: 'sufei', affinityChange: -3 }]
        }
      ],
      once: true,
      priority: 85
    },
    {
      id: 'mysterious_girl',
      title: '神秘的转学生',
      description: '在公园的角落里，你看到一个安静的女生独自坐在长椅上。她似乎注意到了你，微微点了点头。',
      characterId: 'yeqing',
      triggerCondition: { minDay: 7, minAffinity: 40 },
      choices: [
        {
          id: 'approach',
          text: '上前打招呼',
          effects: [
            { characterId: 'yeqing', affinityChange: 5 },
            { characterId: 'linxiaoyu', affinityChange: -3 },
            { characterId: 'sufei', affinityChange: -3 }
          ],
          unlockCharacterId: 'yeqing',
          addCardId: 'yeqing_common_1'
        },
        {
          id: 'leave_quietly',
          text: '悄悄离开',
          effects: []
        }
      ],
      once: true,
      priority: 80
    },
    {
      id: 'birthday_surprise_1',
      title: '小雨的生日',
      description: '你想起今天是林小雨的生日，要准备什么惊喜吗？',
      characterId: 'linxiaoyu',
      triggerCondition: { minDay: 14, minAffinity: 50, characterId: 'linxiaoyu' },
      choices: [
        {
          id: 'big_surprise',
          text: '准备一个大惊喜',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 25, moodChange: 30 }],
          resourceChange: -50
        },
        {
          id: 'small_gift',
          text: '送一个小礼物',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 10, moodChange: 15 }],
          resourceChange: -20
        },
        {
          id: 'forget',
          text: '算了，假装不知道',
          effects: [{ characterId: 'linxiaoyu', affinityChange: -10, moodChange: -20 }]
        }
      ],
      once: true,
      priority: 95
    },
    {
      id: 'conflict_1',
      title: '两人的邀约',
      description: '林小雨和苏菲同时邀请你周末出去，你该怎么办？',
      triggerCondition: { minDay: 10, minAffinity: 35 },
      choices: [
        {
          id: 'choose_xiaoyu',
          text: '答应小雨',
          effects: [
            { characterId: 'linxiaoyu', affinityChange: 10, moodChange: 15 },
            { characterId: 'sufei', affinityChange: -8, moodChange: -10 }
          ]
        },
        {
          id: 'choose_sufei',
          text: '答应苏菲',
          effects: [
            { characterId: 'sufei', affinityChange: 10, moodChange: 15 },
            { characterId: 'linxiaoyu', affinityChange: -8, moodChange: -10 }
          ]
        },
        {
          id: 'reject_both',
          text: '都拒绝，说有事',
          effects: [
            { characterId: 'linxiaoyu', affinityChange: -3 },
            { characterId: 'sufei', affinityChange: -3 }
          ]
        },
        {
          id: 'suggest_together',
          text: '建议三个人一起',
          effects: [
            { characterId: 'linxiaoyu', affinityChange: -2 },
            { characterId: 'sufei', affinityChange: -2 }
          ]
        }
      ],
      once: true,
      priority: 88
    }
  ],

  actions: [
    { type: 'chat', name: '聊天', icon: '💬', description: '和角色聊聊天，增进感情', energyCost: 1 },
    { type: 'gift', name: '送礼', icon: '🎁', description: '送礼物给角色，效果因人而异', energyCost: 1 },
    { type: 'work', name: '打工', icon: '💼', description: '辛苦工作赚取代币', energyCost: 2 }
  ],

  workRewards: { min: 15, max: 35 },

  tutorial: [
    {
      id: 'welcome',
      title: '欢迎来到恋爱物语',
      content: '这里是一个充满浪漫邂逅的世界。在接下来的日子里，你将遇到性格各异的角色，与她们共同书写属于你们的故事。让我来带你熟悉一下这个世界吧~',
      emoji: '💝',
      isKeyTip: true
    },
    {
      id: 'select_character',
      title: '选择心仪的对象',
      content: '在左侧的角色面板中，你可以看到目前已登场的角色。点击角色头像来选择想要互动的对象，每位角色都有独特的性格和喜好哦！',
      emoji: '👆',
      highlightSelector: '.character-panel',
      isKeyTip: true
    },
    {
      id: 'unlock_action_chat',
      title: '初次交谈',
      content: '很好！现在让我们来试试「聊天」功能吧。聊天可以增进与角色之间的好感度，但不同的话题会带来不同的效果。试试和角色聊聊天吧~',
      emoji: '💬',
      highlightSelector: '.action-btn.chat',
      unlockActions: ['chat'],
      isKeyTip: true
    },
    {
      id: 'tip_event',
      title: '剧情事件',
      content: '随着时间推移和好感度变化，会触发各种精彩的剧情事件！在事件中做出的选择会影响故事走向，一定要谨慎选择哦。',
      emoji: '📖',
      triggerCondition: { eventTriggered: true },
      isKeyTip: true
    },
    {
      id: 'unlock_action_gift',
      title: '赠送礼物',
      content: '聊天完成得很棒！礼物是增进感情的好方法。每位角色都有自己喜欢和讨厌的礼物，送对了可以大幅提升好感度，送错了可就适得其反了。现在解锁「送礼」功能，去试试吧~',
      emoji: '🎁',
      highlightSelector: '.action-btn.gift',
      unlockActions: ['gift'],
      triggerCondition: { action: 'chat' },
      isKeyTip: true
    },
    {
      id: 'tip_resources',
      title: '关于代币',
      content: '送礼需要消耗代币💰。代币是有限的资源，当你需要更多时，可以通过「打工」来赚取。不过打工比较耗费体力，合理安排时间和资源是很重要的！',
      emoji: '💰',
      triggerCondition: { action: 'gift' }
    },
    {
      id: 'unlock_action_work',
      title: '努力工作',
      content: '现在解锁「打工」功能。当你需要更多代币购买礼物时，可以选择打工来赚取。注意：打工消耗2点行动力，比其他行动更累哦，快去试试看吧~',
      emoji: '💼',
      highlightSelector: '.action-btn.work',
      unlockActions: ['work'],
      triggerCondition: { action: 'gift' },
      isKeyTip: true
    },
    {
      id: 'tip_mood',
      title: '好感度与心情',
      content: '每个角色都有好感度❤️和心情😊两个重要指标：\n• 好感度：决定你们的关系程度，达到特定值会解锁新卡牌\n• 心情：影响互动的效果，心情好时互动效果更好\n\n每天心情和好感度会略有下降，记得常和角色们互动哦！',
      emoji: '❤️',
      triggerCondition: { action: 'work' }
    },
    {
      id: 'tip_save',
      title: '存档与读档',
      content: '游戏会在每天结束时自动存档。你也可以随时点击右上角的 💾 按钮手动保存。如果对选择不满意，还可以使用历史回退功能回到之前的状态。',
      emoji: '💾',
      highlightSelector: '.toolbar-btn'
    },
    {
      id: 'complete',
      title: '新手引导完成',
      content: '恭喜你已经熟悉了所有基本操作！聊天、送礼、打工三大行动都已解锁，关键玩法也都了解了。现在可以自由地探索这个世界了，祝你有一段美好的恋爱之旅~',
      emoji: '🎉',
      isKeyTip: true
    }
  ]
}

export default gameConfig
