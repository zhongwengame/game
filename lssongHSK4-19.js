/*
================================================================
== 课程数据文件 (Lesson Data File)
== 第十九课: 生活的味道
================================================================
*/

// Helper function to shuffle an array (Fisher-Yates shuffle)
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const lessonData = {
    "lesson": "HSK 4 - 第十九课《生活的味道》",
    "students": ["张伟", "李娜", "王明", "赵丽", "刘强", "陈芳", "周华", "黄丽丽", "孙浩", "朱琳"], // Example student names

    "pinyin_map": {
        "学期": "xuéqī", "出生": "chūshēng", "性别": "xìngbié", "道歉": "dàoqiàn", "打印": "dǎyìn",
        "复印": "fùyìn", "饺子": "jiǎozi", "刀": "dāo", "破": "pò", "脱": "tuō",
        "理发": "lǐfà", "零钱": "língqián", "打招呼": "dǎ zhāohu", "戴": "dài", "眼镜": "yǎnjìng",
        "舞蹈": "wǔdǎo", "国籍": "guójí", "抬": "tái", "胳膊": "gēbo", "转": "zhuǎn",
        "占线": "zhànxiàn", "租": "zū", "吵": "chǎo", "厨房": "chúfáng", "房东": "fángdōng",
        "座位": "zuòwèi", "功夫": "gōngfu", "乒乓球": "pīngpāngqiú", "羽毛球": "yǔmáoqiú", "场": "chǎng",
        "禁止": "jìnzhǐ", "申请": "shēnqǐng", "表格": "biǎogé", "粗心": "cūxīn", "继续": "jìxù",
        "按照": "ànzhào", "重新": "chóngxīn", "地点": "dìdiǎn", "邮箱": "yóuxiāng", "信封": "xìnfēng",
        "网站": "wǎngzhàn", "信息": "xìnxī", "更新": "gēngxīn", "社会": "shèhuì", "增长": "zēngzhǎng",
        "科学": "kēxué", "普遍": "pǔbiàn", "节约": "jiéyuē", "解决": "jiějué", "仍然": "réngrán",
        "解释": "jiěshì", "奇怪": "qíguài", "现代": "xiàndài", "巨大": "jùdà", "乘坐": "chéngzuò",
        "地球": "dìqiú", "发展": "fāzhǎn", "价格": "jiàgé", "降低": "jiàngdī", "流血": "liúxuè",
        "严重": "yánzhòng", "餐厅": "cāntīng", "口袋": "kǒudài", "基础": "jīchǔ", "故意": "gùyì",
        "动作": "dòngzuò", "标准": "biāozhǔn", "仔细": "zǐxì", "满意": "mǎnyì", "周围": "zhōuwéi",
        "环境": "huánjìng", "广告": "guǎnggào", "路过": "lùguò", "体育": "tǐyù", "选择": "xuǎnzé",
        "条件": "tiáojiàn"
    },

    "translation_dict": {
        "学期": "semester; term", "出生": "to be born", "性别": "gender", "道歉": "to apologize", "打印": "to print",
        "复印": "to photocopy", "饺子": "dumplings", "刀": "knife", "破": "broken; torn", "脱": "to take off (clothes)",
        "理发": "to have a haircut", "零钱": "small change", "打招呼": "to greet; to say hello", "戴": "to wear (accessories)", "眼镜": "glasses",
        "舞蹈": "dance", "国籍": "nationality", "抬": "to lift; to raise", "胳膊": "arm", "转": "to turn; to rotate",
        "占线": "to be busy (phone line)", "租": "to rent", "吵": "noisy", "厨房": "kitchen", "房东": "landlord",
        "座位": "seat", "功夫": "kung fu", "乒乓球": "ping-pong; table tennis", "羽毛球": "badminton", "场": "(measure word for games, performances)",
        "禁止": "to forbid; to prohibit", "申请": "to apply; application", "表格": "form; table", "粗心": "careless", "继续": "to continue",
        "按照": "according to; in accordance with", "重新": "again; anew", "地点": "place; site", "邮箱": "mailbox; email address", "信封": "envelope",
        "网站": "website", "信息": "information", "更新": "to update", "社会": "society", "增长": "to increase",
        "科学": "science", "普遍": "universal; general", "节约": "to save", "解决": "to solve", "仍然": "still; yet",
        "解释": "to explain", "奇怪": "strange", "现代": "modern", "巨大": "huge", "乘坐": "to ride (in a vehicle)",
        "地球": "Earth", "发展": "to develop", "价格": "price", "降低": "to lower", "流血": "to bleed",
        "严重": "serious; severe", "餐厅": "restaurant", "口袋": "pocket", "基础": "foundation; basis", "故意": "deliberately; on purpose",
        "动作": "action; movement", "标准": "standard; criterion", "仔细": "careful; attentive", "满意": "satisfied", "周围": "surroundings",
        "环境": "environment", "广告": "advertisement", "路过": "to pass by", "体育": "physical education; sports", "选择": "to choose; choice",
        "条件": "condition; requirement"
    },

    "collocations": [
        { "left": "这个", "right": "学期" }, { "left": "出生", "right": "日期" }, { "left": "填写", "right": "性别" },
        { "left": "向朋友", "right": "道歉" }, { "left": "打印", "right": "文件" }, { "left": "复印", "right": "材料" },
        { "left": "吃", "right": "饺子" }, { "left": "用刀", "right": "切" }, { "left": "把手弄", "right": "破" },
        { "left": "脱", "right": "衣服" }, { "left": "去", "right": "理发" }, { "left": "零钱", "right": "不够" },
        { "left": "向他", "right": "打招呼" }, { "left": "戴", "right": "眼镜" }, { "left": "跳", "right": "舞" },
        { "left": "中国", "right": "国籍" }, { "left": "抬", "right": "胳膊" }, { "left": "向左", "right": "转" },
        { "left": "电话", "right": "占线" }, { "left": "租", "right": "房子" }, { "left": "环境很", "right": "吵" },
        { "left": "干净的", "right": "厨房" }, { "left": "联系", "right": "房东" }, { "left": "空", "right": "座位" },
        { "left": "练", "right": "中国功夫" }, { "left": "打", "right": "乒乓球" }, { "left": "打", "right": "羽毛球" },
        { "left": "一场", "right": "比赛" }, { "left": "禁止", "right": "吸烟" }, { "left": "填写", "right": "申请表" },
        { "left": "申请", "right": "表格" }, { "left": "做事情很", "right": "粗心" }, { "left": "继续", "right": "学习" },
        { "left": "按照", "right": "规定" }, { "left": "重新", "right": "开始" }, { "left": "严重", "right": "受伤" },
        { "left": "去", "right": "餐厅" }, { "left": "在", "right": "口袋" }, { "left": "舞蹈", "right": "基础" },
        { "left": "不是", "right": "故意" }, { "left": "舞蹈", "right": "动作" }, { "left": "符合", "right": "标准" },
        { "left": "检查得很", "right": "仔细" }, { "left": "感到很", "right": "满意" }, { "left": "周围的", "right": "环境" },
        { "left": "做", "right": "广告" }, { "left": "路过", "right": "学校" }, { "left": "去", "right": "体育馆" },
        { "left": "做出", "right": "选择" }, { "left": "学习", "right": "条件" }, { "left": "手", "right": "流血" }
    ],

    // 1. 词汇基础模块
    "module_1_vocab": {
        "pinyin_match": [
            ["学期", "出生", "性别", "道歉", "打印", "复印"],
            ["饺子", "刀", "破", "脱", "理发", "零钱"],
            ["打招呼", "戴", "眼镜", "舞蹈", "国籍", "抬"],
            ["胳膊", "转", "占线", "租", "吵", "厨房"],
            ["房东", "座位", "功夫", "乒乓球", "羽毛球", "场", "禁止"]
        ],
        "char_match": [
            ["学期", "出生", "性别", "道歉", "打印", "复印"],
            ["饺子", "刀子", "破损", "脱掉", "理发", "零钱"],
            ["打招呼", "戴上", "眼镜", "舞蹈", "国籍", "抬高"],
            ["胳膊", "转动", "占线", "租房", "吵闹", "厨房"],
            ["房东", "座位", "功夫", "乒乓球", "羽毛球", "一场", "禁止"]
        ],
        "guess_words": [
            "学期", "出生", "性别", "道歉", "打印", "复印",
            "饺子", "刀", "破", "脱", "理发", "零钱",
            "打招呼", "戴", "眼镜", "舞蹈", "国籍", "抬",
            "胳膊", "转", "占线", "租", "吵", "厨房",
            "房东", "座位", "功夫", "乒乓球", "羽毛球", "场", "禁止"
        ]
    },

    // 2. 词汇操练 (图片炸弹、抢答揭盖、盲盒造句)
    "module_2_vocab_drill": {
        "word_bomb": [
            { "word": "道歉", "img_url": "https://images.unsplash.com/photo-1543714421-50e50f38072e?w=400", "en_hint": "to say sorry; to apologize" },
            { "word": "打印", "img_url": "https://images.unsplash.com/photo-1510125594112-bd77c8c352c1?w=400", "en_hint": "printing documents" },
            { "word": "饺子", "img_url": "https://images.unsplash.com/photo-1594998799484-91696015d045?w=400", "en_hint": "Chinese dumplings" },
            { "word": "刀", "img_url": "https://images.unsplash.com/photo-1597405230303-380d3ce3d211?w=400", "en_hint": "kitchen knife" },
            { "word": "脱", "img_url": "https://images.unsplash.com/photo-1558244795-0373059f130b?w=400", "en_hint": "taking off clothes" },
            { "word": "理发", "img_url": "https://images.unsplash.com/photo-1587352329302-39c09c3149e9?w=400", "en_hint": "getting a haircut" },
            { "word": "戴", "img_url": "https://images.unsplash.com/photo-1505333550389-130456108502?w=400", "en_hint": "wearing glasses" },
            { "word": "舞蹈", "img_url": "https://images.unsplash.com/photo-1498801550990-2521199990f3?w=400", "en_hint": "dance performance" },
            { "word": "占线", "img_url": "https://images.unsplash.com/photo-1589996078696-ed7a51c72092?w=400", "en_hint": "busy phone line" },
            { "word": "租", "img_url": "https://images.unsplash.com/photo-1448630360428-65456885c650?w=400", "en_hint": "renting an apartment" },
            { "word": "吵", "img_url": "https://images.unsplash.com/photo-1533479155799-a1789d3112c3?w=400", "en_hint": "noisy environment" },
            { "word": "禁止", "img_url": "https://images.unsplash.com/photo-1586567990473-b09e0a0d9b59?w=400", "en_hint": "no entry / prohibited" }
        ],
        "guess_words": [
            { "target_word": "学期" }, { "target_word": "出生" }, { "target_word": "性别" },
            { "target_word": "复印" }, { "target_word": "破" }, { "target_word": "零钱" },
            { "target_word": "打招呼" }, { "target_word": "眼镜" }, { "target_word": "国籍" },
            { "target_word": "抬" }, { "target_word": "胳膊" }, { "target_word": "转" },
            { "target_word": "厨房" }, { "target_word": "房东" }, { "target_word": "座位" },
            { "target_word": "功夫" }
        ],
        "blind_box_spinner": [
            { "words": [{ "text": "学期" }, { "text": "开始" }, { "text": "结束" }] },
            { "words": [{ "text": "道歉" }, { "text": "错误" }, { "text": "原谅" }] },
            { "words": [{ "text": "饺子" }, { "text": "中国" }, { "text": "好吃" }] },
            { "words": [{ "text": "理发" }, { "text": "发型" }, { "text": "漂亮" }] },
            { "words": [{ "text": "戴" }, { "text": "眼镜" }, { "text": "帽子" }] },
            { "words": [{ "text": "舞蹈" }, { "text": "艺术" }, { "text": "优美" }] },
            { "words": [{ "text": "占线" }, { "text": "电话" }, { "text": "打不通" }] },
            { "words": [{ "text": "租" }, { "text": "房子" }, { "text": "房东" }] },
            { "words": [{ "text": "乒乓球" }, { "text": "运动" }, { "text": "中国" }] },
            { "words": [{ "text": "禁止" }, { "text": "吸烟" }, { "text": "危险" }] }
        ]
    },

    // 3. 语法逻辑多关卡
    "module_3_grammar": {
        "grammar_points": [
            {
                "grammar_point_name": "“谁/什么...都/也...”",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["这个菜我喜欢，", "那个菜我也喜欢，", "这些菜", "我都喜欢。"], "correct_answer": "这个菜我喜欢，那个菜我也喜欢，这些菜我都喜欢。", "en_hint": "I like this dish, I also like that dish, I like all these dishes." },
                        { "chunks": ["谁", "都有", "粗心", "填错的", "时候。"], "correct_answer": "谁都有粗心填错的时候。", "en_hint": "Anyone can be careless and make mistakes." },
                        { "chunks": ["刚来中国的时候，", "我", "什么", "地方", "都不", "熟悉。"], "correct_answer": "刚来中国的时候，我什么地方都不熟悉。", "en_hint": "When I first came to China, I wasn't familiar with any places." },
                        { "chunks": ["那个商场的", "衣服", "哪件", "都很", "漂亮。"], "correct_answer": "那个商场的衣服哪件都很漂亮。", "en_hint": "Every piece of clothing in that mall is beautiful." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1549490214-3d02a0a3a78c?w=400", // Person looking at many food choices
                            "hint": "用“什么...都...”表达对多种食物的喜爱。",
                            "en_hint": "Use '什么...都...' to express liking various foods.",
                            "keywords": ["食物", "喜欢", "什么"],
                            "reference_answer": "这里的食物什么味道的都有，我什么都喜欢吃。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你班上的同学来自不同的国家，你想表达他们无论来自哪里，都对学习汉语很认真。请用“谁...都...”来表达。",
                            "en_scenario": "Your classmates come from different countries. You want to express that no matter where they come from, they are all serious about learning Chinese. Please use '谁...都...' to express it.",
                            "reference": "我们班的同学谁都对汉语学习很认真，无论来自哪个国家。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "V + 上",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["他没通过考试，", "所以", "没考上", "大学。"], "correct_answer": "他没通过考试，所以没考上大学。", "en_hint": "He didn't pass the exam, so he didn't get into university." },
                        { "chunks": ["他申请", "上了", "国外", "大学的", "博士。"], "correct_answer": "他申请上了国外大学的博士。", "en_hint": "He successfully applied for a Ph.D. at a foreign university." },
                        { "chunks": ["现在", "堵车", "这么", "厉害，", "今天", "坐不上", "8点", "那趟", "去上海", "的飞机", "了。"], "correct_answer": "现在堵车这么厉害，今天坐不上8点那趟去上海的飞机了。", "en_hint": "The traffic jam is so bad now, it seems I won't be able to catch the 8 o'clock flight to Shanghai today." },
                        { "chunks": ["要是", "你想去", "云南旅游，", "应该", "早点儿买", "火车票，", "否则", "就坐不上", "火车了。"], "correct_answer": "要是你想去云南旅游，应该早点儿买火车票，否则就坐不上火车了。", "en_hint": "If you want to travel to Yunnan, you should buy train tickets early, otherwise you won't be able to get on the train." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1507925232049-74e5025916ba?w=400", // Train station, crowded
                            "hint": "用“V+上”说明很难买到火车票。",
                            "en_hint": "Use 'V+上' to explain it's hard to get a train ticket.",
                            "keywords": ["火车票", "买上"],
                            "reference_answer": "火车票很难买，不提前买的话恐怕买不上。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你非常想去听一场著名歌手的演唱会，但是票非常难买。用“V+上”来表达你是否买到了票。",
                            "en_scenario": "You really want to go to a concert by a famous singer, but the tickets are very hard to get. Use 'V+上' to express whether or not you got the tickets.",
                            "reference": "演唱会门票太难买了，我抢了半天也没抢上。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "V + 出来",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["他们应该把自己的", "想法都", "说出来，", "好好谈谈。"], "correct_answer": "他们应该把自己的想法都说出来，好好谈谈。", "en_hint": "They should express their thoughts and talk it over properly." },
                        { "chunks": ["如果你做", "出来了，", "就给我", "讲讲", "怎么做吧。"], "correct_answer": "如果你做出来了，就给我讲讲怎么做吧。", "en_hint": "If you've figured it out, please explain to me how to do it." },
                        { "chunks": ["如果你没听懂，", "你应该", "说出来。"], "correct_answer": "如果你没听懂，你应该说出来。", "en_hint": "If you didn't understand, you should say it." },
                        { "chunks": ["老师问了个问题，", "谁", "都没能", "回答出来。"], "correct_answer": "老师问了个问题，谁都没能回答出来。", "en_hint": "The teacher asked a question, and no one could answer it." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1522204523234-87295a702a06?w=400", // Person with a thought bubble
                            "hint": "用“说出来”表达应该把心里的想法告诉别人。",
                            "en_hint": "Use '说出来' to express that one should tell others what's on their mind.",
                            "keywords": ["心里", "想法", "说出来"],
                            "reference_answer": "有什么想法就直接说出来吧，别憋在心里。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你在考试时遇到一道难题，思考了很久，最终把它解决了。用“V+出来”来描述这个过程。",
                            "en_scenario": "You encountered a difficult problem during an exam, thought about it for a long time, and finally solved it. Use 'V+出来' to describe this process.",
                            "reference": "这道题我算了半个小时，终于算出来了！"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "V + 起来",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["声音", "听着", "挺熟悉的，", "不过我", "一下子", "想不起来。"], "correct_answer": "声音听着挺熟悉的，不过我一下子想不起来。", "en_hint": "The voice sounds familiar, but I can't recall it right now." },
                        { "chunks": ["他连忙", "坐起来", "接电话。"], "correct_answer": "他连忙坐起来接电话。", "en_hint": "He quickly sat up to answer the phone." },
                        { "chunks": ["天气", "已经开始", "慢慢", "热起来。"], "correct_answer": "天气已经开始慢慢热起来。", "en_hint": "The weather has started to get warmer slowly." },
                        { "chunks": ["你回去后把", "今天", "大家", "在会上提的", "意见", "都整理", "起来。"], "correct_answer": "你回去后把今天大家在会上提的意见都整理起来。", "en_hint": "After you go back, please organize all the opinions raised by everyone at the meeting today." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1526482163931-e125b27376c6?w=400", // Sunrise
                            "hint": "用“V+起来”描述太阳升起。",
                            "en_hint": "Use 'V+起来' to describe the sunrise.",
                            "keywords": ["太阳", "升起"],
                            "reference_answer": "清晨，太阳从东方慢慢升起来了。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你早上被闹钟吵醒了，但是很困，挣扎着从床上起来。用“V+起来”来描述你起床的动作。",
                            "en_scenario": "You were woken up by an alarm clock in the morning but were very sleepy, struggling to get out of bed. Use 'V+起来' to describe your action of getting up.",
                            "reference": "闹钟响了，我挣扎着从床上坐起来。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "总的来说 (zǒng de lái shuō)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["这个", "厨房", "很不错，", "总的来说", "我很", "满意。"], "correct_answer": "这个厨房很不错，总的来说我很满意。", "en_hint": "This kitchen is very good, overall I am very satisfied." },
                        { "chunks": ["生词", "不是", "很多，", "语法", "讲得很", "清楚，", "总的来说，", "这本", "书很", "适合", "我们", "学习。"], "correct_answer": "生词不是很多，语法讲得很清楚，总的来说，这本书很适合我们学习。", "en_hint": "There aren't many new words, and the grammar is explained clearly, overall this book is very suitable for our study." },
                        { "chunks": ["去国外", "留学", "有好处", "也有坏处，", "但", "总的来说，", "好处", "比坏处", "多。"], "correct_answer": "去国外留学有好处也有坏处，但总的来说，好处比坏处多。", "en_hint": "Studying abroad has pros and cons, but generally speaking, the benefits outweigh the drawbacks." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1549490214-3d02a0a3a78c?w=400", // City skyline
                            "hint": "用“总的来说”评价一个城市的整体印象。",
                            "en_hint": "Use '总的来说' to evaluate the overall impression of a city.",
                            "keywords": ["城市", "干净", "交通方便"],
                            "reference_answer": "这个城市很干净，交通也很方便，总的来说，给我的印象很好。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你最近看了一部电影，虽然有些小缺点，但是整体感觉很棒。请用“总的来说”来评价这部电影。",
                            "en_scenario": "You recently watched a movie; although it had some minor flaws, the overall feeling was great. Please use '总的来说' to evaluate this movie.",
                            "reference": "这部电影虽然有些地方不太完美，但总的来说，非常值得一看。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "在于 (zàiyú)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["教育", "孩子的", "关键", "不在于", "让孩子", "听话，", "而在于", "帮助", "孩子", "养成", "好习惯。"], "correct_answer": "教育孩子的关键不在于让孩子听话，而在于帮助孩子养成好习惯。", "en_hint": "The key to educating children is not to make them obedient, but to help them develop good habits." },
                        { "chunks": ["成功", "的", "关键", "在于", "自己的", "努力。"], "correct_answer": "成功的关键在于自己的努力。", "en_hint": "The key to success lies in one's own efforts." },
                        { "chunks": ["选择", "职业的", "关键", "在于", "兴趣。"], "correct_answer": "选择职业的关键在于兴趣。", "en_hint": "The key to choosing a career lies in interest." },
                        { "chunks": ["区别", "在于", "有的人", "能接受", "失败，", "而有的人", "却在", "失败面前", "停下了", "脚步。"], "correct_answer": "区别在于有的人能接受失败，而有的人却在失败面前停下了脚步。", "en_hint": "The difference lies in some people being able to accept failure, while others stop in the face of it." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1522204523234-87295a702a06?w=400", // Person studying
                            "hint": "用“在于”说明学好汉语的关键。",
                            "en_hint": "Use '在于' to explain the key to learning Chinese well.",
                            "keywords": ["学好汉语", "在于", "多说多练"],
                            "reference_answer": "学好汉语的关键在于多说多练，不要害怕犯错。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你的朋友正在为毕业论文烦恼，问你如何才能写好论文。请你用“在于”给他一些建议。",
                            "en_scenario": "Your friend is troubled by his graduation thesis and asks you how to write a good one. Please give him some advice using '在于'.",
                            "reference": "写好论文的关键在于平时多积累知识，多阅读相关文献。"
                        }
                    ]
                }
            }
        ],
        "synonym_distinction": [
            {
                "sentence": "这本书你看完了我____看吧。",
                "options": ["接着", "然后"],
                "answer": "接着",
                "explanation": "<strong>接着 (jiēzhe):</strong> 副词，强调时间上紧跟着，表示动作紧密相连，不能有明显的时间间隔。主语可以相同或不同。这里强调你一读完，我就立刻读。<br><strong>然后 (ránhòu):</strong> 连词，表示事情的顺序，前后动作可以有间隔，常用在“先……然后……”结构中。主语一般相同。"
            },
            {
                "sentence": "吃完饭，咱们____去看电影。",
                "options": ["接着", "然后"],
                "answer": "然后",
                "explanation": "<strong>然后 (ránhòu):</strong> 用于表示动作的先后顺序，这里“吃饭”和“看电影”是按顺序进行的两个活动，中间可能有短暂的间隔。"
            },
            {
                "sentence": "他已经学了一年汉语了，明年还要____学。",
                "options": ["接着", "然后"],
                "answer": "接着",
                "explanation": "<strong>接着 (jiēzhe):</strong> 表示在原来基础上继续进行，强调持续性，没有中断。"
            },
            {
                "sentence": "先洗手，____吃饭。",
                "options": ["接着", "然后"],
                "answer": "然后",
                "explanation": "<strong>然后 (ránhòu):</strong> 表示动作的先后顺序，先洗手再吃饭。"
            },
            {
                "sentence": "他说完话，____又唱了一首歌。",
                "options": ["接着", "然后"],
                "answer": "接着",
                "explanation": "<strong>接着 (jiēzhe):</strong> 强调紧密顺承，说完话后紧接着唱歌，动作之间无明显间隔。"
            }
        ]
    },

    // 4. 篇章阅读 (语段排序)
    "module_4_text": {
        "level_1_sorting": [
            {
                "id": 1,
                "shuffled_items": [
                    { "tag": "A", "content": "马克希望下学期继续在这里学习，老师给他表格，要求填写出生年月、性别、护照号码、联系地址和电话。" },
                    { "tag": "B", "content": "马克不小心把护照号码填错了，感到很抱歉，问老师能不能再给一份新表。" },
                    { "tag": "C", "content": "老师说没关系，谁都有粗心填错的时候，并给他重新打印了一份。最后，老师还要把马克护照复印一下。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "叙述马克申请学习的流程：从填写表格、犯错道歉，到老师处理错误并完成后续手续。"
            },
            {
                "id": 2,
                "shuffled_items": [
                    { "tag": "A", "content": "王静在厨房给李进做羊肉饺子，结果不小心用刀切肉时把手弄破流血了。" },
                    { "tag": "B", "content": "李进赶紧帮她包扎，并让她把沾血的衣服脱下来洗。王静说看来今天吃不上饺子了。" },
                    { "tag": "C", "content": "李进提议去附近餐厅买包子吃，王静同意了，并说自己口袋里有零钱。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "描述王静做饭受伤的经过：从受伤、李进帮忙，到改变就餐计划。"
            },
            {
                "id": 3,
                "shuffled_items": [
                    { "tag": "A", "content": "马克早上跟安娜打招呼，安娜没看见。安娜解释说她忘戴眼镜，看不清楚，所以不是故意的。" },
                    { "tag": "B", "content": "马克看到安娜跳中国舞跳得很好，很惊讶，问她是否以前学过。安娜说小时候学过两年，舞蹈是与国籍无关的“语言”。" },
                    { "tag": "C", "content": "马克请安娜帮他看看一个舞蹈动作对不对。安娜指出他的动作不太标准，并亲自示范了正确的动作：先抬胳膊，然后抬腿，最后头向右转。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "描述马克与安娜的互动：从偶遇误会、聊舞蹈，到安娜指导马克舞蹈动作。"
            },
            {
                "id": 4,
                "shuffled_items": [
                    { "tag": "A", "content": "马克去年租的房子离马路近，周围环境很吵，所以他着急换房子。" },
                    { "tag": "B", "content": "他在小区门口看到一个租房广告，广告上说房子交通方便、安静、厨房大。总的来说，马克很满意。" },
                    { "tag": "C", "content": "马克记下房东手机号回家打电话，却总是占线。第二天路过时才发现，记号码时写错了一个数字。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "叙述马克换房子的过程：从换房原因、发现广告，到联系房东遇到问题并找到原因。"
            },
            {
                "id": 5,
                "shuffled_items": [
                    { "tag": "A", "content": "很多外国人认为中国人都会功夫和乒乓球，但其实只是喜爱这两种运动的中国人比较多。" },
                    { "tag": "B", "content": "乒乓球、羽毛球等运动对条件要求不高，所以成为人们不错的选择。人们常说“生命在于运动”，很多人周末会去体育馆打球。" },
                    { "tag": "C", "content": "“乒乓球”这个名字很有趣，是打球时发出的声音。看比赛时观众要注意安静，禁止大声讲话或离开座位。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "解释中国人对功夫和乒乓球的误解，介绍这类运动受欢迎的原因和理念，最后说明乒乓球名字的由来及观赛礼仪。"
            }
        ]
    },

    // 5. 跟读练习
    "module_4_repetition": {
        "sentences": [
            "我希望下个学期在这里继续学习，请问还需要重新申请吗？",
            "没关系，不用道歉，谁都有粗心填错的时候。",
            "我不小心把护照号码填错了，您能再给我一份新的申请表吗？",
            "看来今天吃不上羊肉饺子了。",
            "我常去的那家理发店附近有个餐厅，那里的包子很好吃。",
            "呀，你的手怎么流血了？",
            "我早上跟你打招呼，你没看见。",
            "我不是故意的，今天早上我忘戴眼镜了，看不清楚。",
            "我小时候妈妈教我跳过两年的舞，所以稍微有点儿基础。",
            "舞蹈不仅是一门艺术，也是一种“语言”，这种语言与国籍无关。",
            "你这个动作做得还是不太标准，我给你跳一遍。",
            "他路过小区门口时，又仔细看了一下广告，原来在记号码的时候写错了一个数字。",
            "环境很吵，我受不了了。",
            "总的来说，这套房子他很满意。",
            "很多外国人认为所有中国人都会功夫和乒乓球。",
            "人们常说“生命在于运动”，所以很多人一到周末就会到体育馆打几场球。",
            "看乒乓球比赛时，尤其在运动员发球的时候，禁止大声讲话或者离开座位随便走动。"
        ]
    },

    // 6. 动态词云 (不变)
    "module_5_wordcloud": {
        "title": "💬 生活的味道是什么？",
        "hint": "请扫码发送1-2个词描述（如：甜、苦、酸、辣、惊喜、挑战...）"
    },

    // 7. 极限挑战
    "module_6_challenge": {
        "challenge_sets": [
            { "id": 1, "keywords": ["道歉", "粗心", "打印"], "framework": "我因为____把表格填错了，已经向老师____了，她帮我重新____了一份。", "translation": "Because I was careless, I filled out the form incorrectly, and I apologized to the teacher. She helped me print a new one." },
            { "id": 2, "keywords": ["饺子", "刀", "破"], "framework": "妈妈在包____的时候不小心用____把手弄____了。", "translation": "When mom was making dumplings, she accidentally cut her hand with a knife." },
            { "id": 3, "keywords": ["理发", "脱", "零钱"], "framework": "我去____的时候，要____掉外套，然后发现口袋里只有____了。", "translation": "When I went to get a haircut, I had to take off my jacket, and then I found I only had change in my pocket." },
            { "id": 4, "keywords": ["戴", "眼镜", "打招呼"], "framework": "早上我没________，所以没看到你，没能跟你____。", "translation": "In the morning I wasn't wearing my glasses, so I didn't see you and couldn't say hello." },
            { "id": 5, "keywords": ["抬", "胳膊", "转"], "framework": "跳舞的时候，先________，然后身体向左____。", "translation": "When dancing, first raise your arm, then turn your body to the left." },
            { "id": 6, "keywords": ["租", "吵", "房东"], "framework": "我去年____的房子太____了，所以跟____商量换个安静的。", "translation": "The apartment I rented last year was too noisy, so I talked to the landlord about changing to a quiet one." }
        ]
    },

    // 8. 找茬大师（文字辨错）
    "module_7_find_error": {
        "questions": [
            { "sentence": "谁都粗心的时候。", "error": "谁都粗心的时候", "correct": "谁都有粗心的时候", "explanation": "缺少动词“有”。" },
            { "sentence": "你喜欢哪个菜我都喜欢。", "error": "你喜欢哪个菜我都喜欢", "correct": "哪个菜我都喜欢", "explanation": "“哪个菜”是疑问代词，放在句首更自然，或用“你喜欢吃的菜，哪个我都喜欢”" },
            { "sentence": "他没考上大学通过考试。", "error": "没考上大学通过考试", "correct": "他没通过考试，所以没考上大学。", "explanation": "“没考上大学”和“通过考试”语序颠倒且因果关系不清晰。" },
            { "sentence": "声音听着挺熟悉，不过我一下子想不出来。", "error": "想不出来", "correct": "想不起来", "explanation": "“想不起来”指忘记了，经过记忆又恢复；“想不出来”指从无到有创造性思维。" },
            { "sentence": "这个房间总的来说有点儿小。", "error": "", "correct": "(此句语法正确)", "explanation": "“总的来说”表示总体评价，用法正确。" },
            { "sentence": "他成功的原因在于很努力。", "error": "", "correct": "(此句语法正确)", "explanation": "“在于”后接原因或关键，用法正确。" },
            { "sentence": "我把衣服脱下。", "error": "脱下", "correct": "脱下来", "explanation": "动词“脱”与趋向补语“下来”搭配，表示将衣物从身上拿下的动作。" },
            { "sentence": "禁止这里抽烟。", "error": "禁止这里抽烟", "correct": "这里禁止抽烟。", "explanation": "“禁止”是动词，其宾语是“抽烟”，地点状语“这里”应放在动词前。" }
        ]
    },

    // 9. 终极对决 Jeopardy (诸神之战)
    "module_8_jeopardy": {
        "categories": ["词语应用", "课文理解", "语法造句"],
        "teamNames": { "wei": "魏国", "shu": "#10b981", "wu": "#3b82f6" },
        "teamColors": { "wei": "#ef4444", "shu": "#10b981", "wu": "#3b82f6" },
        "questions": {
            "q_0_10": { "question": "请填空：请问您的____是什么？", "question_en": "Fill in the blank: What is your ____?", "answer": "性别/国籍" },
            "q_0_20": { "question": "请填空：我没有____，不能买饮料了。", "question_en": "Fill in the blank: I don't have ____, so I can't buy drinks.", "answer": "零钱" },
            "q_0_30": { "question": "请填空：我打电话给他，总是____。", "question_en": "Fill in the blank: I call him, but it's always ____.", "answer": "占线" },
            "q_1_10": { "question": "课文一中，马克为什么需要重新申请？", "question_en": "In Text 1, why did Mark need to reapply?", "answer": "因为他希望下学期继续在这里学习。" },
            "q_1_20": { "question": "课文二中，王静的手是怎么受伤的？", "question_en": "In Text 2, how did Wang Jing hurt her hand?", "answer": "她用刀切肉的时候不小心弄破的。" },
            "q_1_30": { "question": "课文五中，“乒乓球”这个名字是怎么来的？", "question_en": "In Text 5, how did the name 'ping-pong' come about?", "answer": "是打球时发出的声音。" },
            "q_2_10": { "question": "用“谁...都...”造一个句子。", "question_en": "Make a sentence with '谁...都...'.", "answer": "谁都知道明天有考试。" },
            "q_2_20": { "question": "用“V+上”造一个句子。", "question_en": "Make a sentence with 'V+上'.", "answer": "我终于买上了回家的火车票。" },
            "q_2_30": { "question": "用“总的来说”造一个句子。", "question_en": "Make a sentence with '总的来说'.", "answer": "这部电影总的来说很不错，值得一看。" }
        },
        "extra_pk_questions": [
            { "type": "快问快答", "q": "看乒乓球比赛时，观众应该注意什么？", "q_en": "What should the audience pay attention to when watching a ping-pong match?", "a": "安静，禁止大声讲话或者离开座位随便走动。" },
            { "type": "抢答", "q": "马克租房子为什么会遇到困难？", "q_en": "Why did Mark encounter difficulties when renting an apartment?", "a": "他去年租的房子太吵了，而且记房东电话时写错了一个数字。" }
        ]
    },

    // 10. 词义搭配测验
    "module_9_vocab_practice": [
        { "question": "这个____，我有很多新的学习计划。", "options": ["出生", "学期", "性别", "道歉"], "answer": "学期" },
        { "question": "他____在1990年。", "options": ["性别", "出生", "道歉", "打印"], "answer": "出生" },
        { "question": "表格上要求填写姓名和____。", "options": ["国籍", "学期", "姓别", "刀"], "answer": "国籍" },
        { "question": "做错事情应该及时____。", "options": ["打招呼", "打印", "道歉", "复印"], "answer": "道歉" },
        { "question": "请把这份文件____出来。", "options": ["复印", "出生", "打印", "道歉"], "answer": "打印" },
        { "question": "我需要把护照____一份。", "options": ["戴", "印", "脱", "转"], "answer": "印" },
        { "question": "过年时，大家喜欢吃____。", "options": ["包子", "零钱", "饺子", "米饭"], "answer": "饺子" },
        { "question": "用____切菜要小心。", "options": ["眼镜", "刀", "胳膊", "零钱"], "answer": "刀" },
        { "question": "我的衣服____了一个洞。", "options": ["脱", "破", "理发", "零钱"], "answer": "破" },
        { "question": "天气热了，____掉外套吧。", "options": ["脱", "破", "戴", "转"], "answer": "脱" },
        { "question": "我明天要去____。", "options": ["打招呼", "戴", "理发", "眼镜"], "answer": "理发" },
        { "question": "我身上只有一些____。", "options": ["零钱", "舞蹈", "国籍", "胳膊"], "answer": "零钱" },
        { "question": "见到老师要____。", "options": ["戴", "理发", "打招呼", "眼镜"], "answer": "打招呼" },
        { "question": "她喜欢____帽子和围巾。", "options": ["打招呼", "戴", "抬", "转"], "answer": "戴" },
        { "question": "他____了一副黑色的____。", "options": ["戴，眼镜", "戴，胳膊", "抬，眼镜", "转，眼镜"], "answer": "戴，眼镜" },
        { "question": "她跳的____非常优美。", "options": ["国籍", "抬", "舞蹈", "胳膊"], "answer": "舞蹈" },
        { "question": "你是哪个国家的____？", "options": ["胳膊", "舞蹈", "国籍", "转"], "answer": "国籍" },
        { "question": "请____起你的手。", "options": ["转", "戴", "抬", "吵"], "answer": "抬" },
        { "question": "他的____受伤了。", "options": ["转", "国籍", "胳膊", "舞蹈"], "answer": "胳膊" },
        { "question": "车子向右____。", "options": ["吵", "转", "占线", "租"], "answer": "转" },
        { "question": "我打电话给她，但电话____了。", "options": ["租", "吵", "占线", "厨房"], "answer": "占线" },
        { "question": "我想____一套小公寓。", "options": ["吵", "厨房", "房东", "租"], "answer": "租" },
        { "question": "外面太____了，我睡不着。", "options": ["厨房", "租", "吵", "房东"], "answer": "吵" },
        { "question": "这个____很干净。", "options": ["房东", "座", "厨房", "功夫"], "answer": "厨房" },
        { "question": "我需要联系____谈房租的事情。", "options": ["房东", "座位", "功夫", "乒乓球"], "answer": "房东" },
        { "question": "这里还有一个空____。", "options": ["功夫", "羽毛球", "座位", "场"], "answer": "座位" },
        { "question": "他会中国____。", "options": ["乒乓球", "羽毛球", "座位", "功夫"], "answer": "功夫" },
        { "question": "我喜欢打____和____。", "options": ["功夫，场", "乒乓球，羽毛球", "座位，禁止", "厨房，座位"], "answer": "乒乓球，羽毛球" },
        { "question": "去年夏天一____比赛，我得了第一。", "options": ["禁止", "座位", "场", "功夫"], "answer": "场" },
        { "question": "室内____吸烟！", "options": ["座位", "场", "禁止", "功夫"], "answer": "禁止" }
    ],

    // 11. 课文篇章理解
    "module_10_comprehension": [
        {
            "sectionTitle": "课文一：马克申请下个学期继续在学校学习",
            "textContext": "马克：老师，您好！我希望下个学期在这里继续学习，请问还需要重新申请吗？\n高老师：是的。给你表格，出生年月、性别、护照号码都要填，还有联系地址、联系电话。\n马克：真抱歉，我不小心把护照号码填错了，您能再给我一份新的申请表吗？\n高老师：没关系，不用道歉，谁都有粗心填错的时候。申请表都被别人拿走了，我给你重新打印一份，你等一下。\n马克：这次我按照要求都填写完了，请问还需要做别的事情吗？\n高老师：请把你的护照给我，我们要把护照复印一下。",
            "questions": [
                { "question": "马克为什么需要重新申请？", "options": ["想换专业", "希望下学期继续学习", "表格填错了", "护照过期了"], "answer": "希望下学期继续学习" },
                { "question": "马克在申请表上填错了什么信息？", "options": ["出生年月", "性别", "护照号码", "联系地址"], "answer": "护照号码" },
                { "question": "高老师最后让马克做什么？", "options": ["重新填写表格", "复印护照", "回家等通知", "交学费"], "answer": "复印护照" }
            ]
        },
        {
            "sectionTitle": "课文二：王静做饺子时手受伤了",
            "textContext": "李进：呀，你的手怎么流血了？等一下，我给你包起来。\n王静：没关系，我想给你做点儿羊肉饺子，刚才用刀切肉的时候把手弄破了。\n李进：你也太不小心了，不过好像不太严重，过几天就好了。衣服上也有一点儿血，你把衣服脱下来，我给你洗洗。\n王静：看来今天吃不上羊肉饺子了。\n李进：那我们就吃点儿别的。我常去的那家理发店附近有个餐厅，那里的包子很好吃，我一会儿去买一点儿。\n王静：好吧，我衣服口袋里有十几块零钱，买包子应该够。",
            "questions": [
                { "question": "王静的手为什么会流血？", "options": ["被门夹了", "摔倒了", "用刀切肉时弄破了", "被狗咬了"], "answer": "用刀切肉时弄破了" },
                { "question": "王静本来想做什么饭？", "options": ["羊肉饺子", "面条", "米饭", "包子"], "answer": "羊肉饺子" },
                { "question": "他们最后决定吃什么？", "options": ["羊肉饺子", "自己做饭", "去餐厅吃面", "包子"], "answer": "包子" }
            ]
        },
        {
            "sectionTitle": "课文三：安娜帮助马克练习舞蹈动作",
            "textContext": "马克：我早上跟你打招呼，你没看见。想不到又在这儿碰见你了。\n安娜：真是对不起，我不是故意的，今天早上我忘戴眼镜了，看不清楚。\n马克：刚才我在旁边看到你跳中国舞了，没看出来你跳得这么好！难道你以前在你们国家就学过中国舞蹈吗？\n安娜：我小时候妈妈教我跳过两年的舞，所以稍微有点儿基础。再说，舞蹈不仅是一门艺术，也是一种“语言”，这种语言与国籍无关，无论哪个国家的人都能看懂。\n马克：太好了！我刚学习跳这种舞没多久，你帮我看看，我的这个动作对不对？\n安娜：你这个动作做得还是不太标准，我给你跳一遍。你仔细看着，应该像我这样：先抬胳膊，然后抬腿，最后头再向右转一下。",
            "questions": [
                { "question": "安娜为什么没看见马克打招呼？", "options": ["她不喜欢马克", "她走神了", "她忘戴眼镜了", "她当时在打电话"], "answer": "她忘戴眼镜了" },
                { "question": "安娜认为舞蹈是一种什么？", "options": ["一种运动", "一种语言", "一种游戏", "一种工作"], "answer": "一种语言" },
                { "question": "安娜给马克示范的舞蹈动作顺序是？", "options": ["抬腿-抬胳膊-转头", "转头-抬胳膊-抬腿", "抬胳膊-抬腿-转头", "抬胳膊-转头-抬腿"], "answer": "抬胳膊-抬腿-转头" }
            ]
        },
        {
            "sectionTitle": "课文四：马克找房子",
            "textContext": "马克去年租的房子离马路很近，对面有大大小小的商店，周围环境非常吵。所以，房子还没到期，马克就开始着急换房子了。有一天，他在小区门口看到一个租房子的广告。广告上说房子交通方便，周围很安静，厨房很大。总的来说，这套房子他很满意，于是他就记下了房东的手机号码。可回家后打电话，电话总是占线。第二天，他路过小区门口时，又仔细看了一下广告，原来在记号码的时候写错了一个数字。",
            "questions": [
                { "question": "马克为什么要换房子？", "options": ["房租太贵", "不喜欢房东", "周围环境太吵", "房子太小了"], "answer": "周围环境太吵" },
                { "question": "马克对广告上的房子满意吗？", "options": ["不满意", "不确定", "很满意", "无所谓"], "answer": "很满意" },
                { "question": "房东的电话为什么总是占线？", "options": ["房东很忙", "电话坏了", "马克记错了号码", "房东故意不接"], "answer": "马克记错了号码" }
            ]
        },
        {
            "sectionTitle": "课文五：中国人喜爱乒乓球",
            "textContext": "很多外国人认为所有中国人都会功夫和乒乓球，其实只是喜爱这两种运动的中国人比较多。中国人特别喜欢打乒乓球，在中国你会发现到处都有乒乓球桌。像乒乓球、羽毛球、跑步等运动对条件要求不高，所以它们都成为人们运动不错的选择。人们常说“生命在于运动”，所以很多人一到周末就会到体育馆打几场球。“乒乓球”这个名字也很有意思，“乒”和“乓”就是打球时发出的声音。在看乒乓球比赛时，尤其是在运动员发球的时候，观众要安静，禁止大声讲话或者离开座位随便走动。",
            "questions": [
                { "question": "中国人普遍喜欢打什么球？", "options": ["篮球", "足球", "乒乓球", "排球"], "answer": "乒乓球" },
                { "question": "“生命在于运动”这句话的意思是？", "options": ["运动很重要", "生命很脆弱", "运动很危险", "生命很短暂"], "answer": "运动很重要" },
                { "question": "看乒乓球比赛时，观众不应该做什么？", "options": ["鼓掌", "加油", "安静", "大声讲话或随便走动"], "answer": "大声讲话或随便走动" }
            ]
        }
    ]
};

// 自动打乱选项
if (lessonData.module_9_vocab_practice) {
    lessonData.module_9_vocab_practice.forEach(q => shuffleArray(q.options));
}
if (lessonData.module_3_grammar && lessonData.module_3_grammar.synonym_distinction) {
    lessonData.module_3_grammar.synonym_distinction.forEach(q => shuffleArray(q.options));
}
if (lessonData.module_10_comprehension) {
    lessonData.module_10_comprehension.forEach(section => {
        if (section.questions) {
            section.questions.forEach(q => shuffleArray(q.options));
        }
    });
}

// 全局/模块导出绑定（全兼容）
window.LESSONS_DATA = window.LESSONS_DATA || {};
window.LESSONS_DATA['hsk4-19'] = lessonData;
window.lessonData = lessonData; // For direct access during development

// Node.js export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lessonData;
}
