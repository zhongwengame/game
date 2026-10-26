/*
================================================================
== 课程数据文件 (Lesson Data File)
== 第二十课: 路上的风景
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
    "lesson": "HSK 4 - 第二十课《路上的风景》",
    "students": [ "列夏", "丽莎", "明溪", "星悦", "德昊", "任华", "梦航", "基里尔", "萨~沙~", "萨沙", "达铭", "安德烈", "纪嘉", "高斯佳", "瓦列", "Maiia" ],

    "pinyin_map": {
        "加油站": "jiāyóuzhàn", "航班": "hángbān", "推迟": "tuīchí", "高速公路": "gāosù gōnglù", "登机牌": "dēngjīpái", "首都": "shǒudū", "长江": "Chángjiāng",
        "旅行": "lǚxíng", "怪": "guài", "可怜": "kělián", "对面": "duìmiàn", "烤鸭": "kǎoyā", "祝贺": "zhùhè", "合格": "hégé",
        "干杯": "gānbēi", "民族": "mínzú", "打扮": "dǎban", "笑话": "xiàohua", "存": "cún", "钥匙": "yàoshi", "究竟": "jiūjìng",
        "棵": "kē", "汤": "tāng", "对话": "duìhuà", "普通话": "pǔtōnghuà", 
        "小吃": "xiǎochī", "收拾": "shōushi", "出发": "chūfā", "辣": "là", "香": "xiāng", "酸": "suān"
    },

    "translation_dict": {
        "加油站": "gas station", "航班": "flight", "推迟": "to postpone; to delay", "高速公路": "expressway; highway", "登机牌": "boarding pass", "首都": "capital (city)", "长江": "the Yangtze River",
        "旅行": "to travel; journey", "怪": "quite; rather (adv)", "可怜": "pitiful; poor", "对面": "opposite; across", "烤鸭": "roast duck", "祝贺": "to congratulate", "合格": "qualified; up to standard",
        "干杯": "cheers; to toast", "民族": "ethnic group; nation", "打扮": "to dress up; to make up", "笑话": "joke", "存": "to keep; to save; to deposit", "钥匙": "key", "究竟": "after all; exactly (in questions)",
        "棵": "(measure word for trees/plants)", "汤": "soup", "对话": "dialogue; to converse", "普通话": "Mandarin Chinese",
        "小吃": "snack; local delicacies", "收拾": "to put in order; to pack", "出发": "to set out; to depart", "辣": "spicy; hot", "香": "fragrant; sweet-smelling", "酸": "sour"
    },

    "collocations": [
        { "left": "去", "right": "加油站" }, { "left": "航班", "right": "推迟了" }, { "left": "上", "right": "高速公路" },
        { "left": "换", "right": "登机牌" }, { "left": "首都", "right": "机场" }, { "left": "长江", "right": "大桥" },
        { "left": "去", "right": "旅行" }, { "left": "怪", "right": "可怜的" }, { "left": "马路", "right": "对面" },
        { "left": "北京", "right": "烤鸭" }, { "left": "祝贺", "right": "毕业" }, { "left": "成绩", "right": "合格" },
        { "left": "大家", "right": "干杯" }, { "left": "少数", "right": "民族" }, { "left": "打扮得", "right": "很漂亮" },
        { "left": "讲", "right": "笑话" }, { "left": "去银行", "right": "存钱" }, { "left": "一把", "right": "钥匙" },
        { "left": "一棵", "right": "树" }, { "left": "喝", "right": "汤" }, { "left": "用汉语", "right": "对话" },
        { "left": "说", "right": "普通话" }, { "left": "特色", "right": "小吃" }, { "left": "收拾", "right": "行李" },
        { "left": "准时", "right": "出发" }, { "left": "味道", "right": "很辣" }, { "left": "饭菜", "right": "很香" },
        { "left": "味道", "right": "很酸" }
    ],

    // 1. 词汇基础模块
    "module_1_vocab": {
        "pinyin_match": [
            ["加油站", "航班", "推迟", "高速公路", "登机牌", "首都"],
            ["长江", "旅行", "怪", "可怜", "对面", "烤鸭"],
            ["祝贺", "合格", "干杯", "民族", "打扮", "笑话"],
            ["存", "钥匙", "究竟", "棵", "汤", "对话"],
            ["普通话", "小吃", "收拾", "出发", "辣", "香", "酸"]
        ],
        "char_match": [
            ["去加油站", "航班推迟", "高速公路", "换登机牌", "首都机场", "长江大桥"],
            ["去旅行", "怪可怜的", "马路对面", "吃烤鸭", "祝贺你", "成绩合格"],
            ["大家干杯", "少数民族", "打扮漂亮", "讲笑话", "存包柜", "一把钥匙"],
            ["一棵树", "牛肉汤", "用汉语对话", "说普通话", "收拾行李", "准备出发"],
            ["特色小吃", "味道很辣", "花很香", "酸奶", "究竟是谁"]
        ],
        "guess_words": [
            "加油站", "航班", "推迟", "登机牌", "首都", "长江",
            "旅行", "怪", "可怜", "对面", "烤鸭", "祝贺", "合格",
            "干杯", "民族", "打扮", "笑话", "存", "钥匙", "究竟",
            "棵", "汤", "普通话", "小吃", "收拾", "出发", "辣"
        ]
    },

    // 2. 词汇操练 (图片炸弹、抢答揭盖、盲盒造句)
    "module_2_vocab_drill": {
        "word_bomb": [
            { "word": "加油站", "img_url": "img20/jiayouzhan.jpg", "en_hint": "gas station" },
            { "word": "登机牌", "img_url": "img20/dengjipai.jpg", "en_hint": "boarding pass" },
            { "word": "烤鸭", "img_url": "img20/kaoya.jpg", "en_hint": "roast duck" },
            { "word": "钥匙", "img_url": "img20/yaoshi.jpg", "en_hint": "a bunch of keys" },
            { "word": "汤", "img_url": "img20/tang.jpg", "en_hint": "a bowl of soup" },
            { "word": "行李", "img_url": "img20/xingli.jpg", "en_hint": "packing luggage" },
            { "word": "干杯", "img_url": "img20/ganbei.jpg", "en_hint": "cheers (clinking glasses)" },
            { "word": "小吃", "img_url": "img20/xiaochi.jpg", "en_hint": "street food/snacks" }
        ],
        "guess_words": [
            { "target_word": "推迟" }, { "target_word": "高速公路" }, { "target_word": "首都" },
            { "target_word": "怪" }, { "target_word": "可怜" }, { "target_word": "祝贺" },
            { "target_word": "合格" }, { "target_word": "民族" }, { "target_word": "打扮" },
            { "target_word": "存" }, { "target_word": "究竟" }, { "target_word": "普通话" },
            { "target_word": "收拾" }, { "target_word": "出发" }, { "target_word": "辣" },
            { "target_word": "香" }
        ],
        "blind_box_spinner": [
            { "words": [{ "text": "航班" }, { "text": "推迟" }, { "text": "加油站" }] },
            { "words": [{ "text": "登机牌" }, { "text": "首都" }, { "text": "出发" }] },
            { "words": [{ "text": "旅行" }, { "text": "怪" }, { "text": "可怜" }] },
            { "words": [{ "text": "对面" }, { "text": "烤鸭" }, { "text": "祝贺" }] },
            { "words": [{ "text": "干杯" }, { "text": "打扮" }, { "text": "笑话" }] },
            { "words": [{ "text": "民族" }, { "text": "存" }, { "text": "钥匙" }] },
            { "words": [{ "text": "普通话" }, { "text": "对话" }, { "text": "棵" }] },
            { "words": [{ "text": "小吃" }, { "text": "汤" }, { "text": "香" }] },
            { "words": [{ "text": "收拾" }, { "text": "行李" }, { "text": "辣" }] }
        ]
    },

    // 3. 语法逻辑多关卡
    "module_3_grammar": {
        "grammar_points": [
            {
                "grammar_point_name": "语法1：V着 V着 (一个动作进行时，出现了另一个动作)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["她", "正", "开车", "去机场，", "开着开着", "没", "油", "了。"], "correct_answer": "她正开车去机场，开着开着没油了。", "en_hint": "She was driving to the airport, and as she was driving, the car ran out of gas." },
                        { "chunks": ["她", "刚才", "在", "看书，", "看着看着", "就", "睡着了。"], "correct_answer": "她刚才在看书，看着看着就睡着了。", "en_hint": "She was reading just now, and as she was reading, she fell asleep." },
                        { "chunks": ["路上", "我们", "聊聊天儿，", "聊着聊着", "很快", "就", "到了。"], "correct_answer": "路上我们聊聊天儿，聊着聊着很快就到了。", "en_hint": "We chatted on the way, and as we chatted, we arrived very quickly." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img20/tang.jpg",
                            "hint": "用“V着V着”完成句子：那天的羊肉饺子太好吃了，______。",
                            "en_hint": "Complete the sentence using 'V着V着': The mutton dumplings that day were so delicious, ...",
                            "keywords": ["吃着吃着", "吃多了"],
                            "reference_answer": "那天的羊肉饺子太好吃了，吃着吃着就吃多了。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你昨晚在听音乐，可是后来不知不觉就睡着了。请用“V着V着”描述这个情况。",
                            "en_scenario": "You were listening to music last night, and without realizing it, you fell asleep. Describe this using 'V着V着'.",
                            "reference": "昨天晚上我听音乐，听着听着就睡着了。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "语法2：一......就...... (两个动作紧接着发生)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["等", "女儿", "一", "回来，", "我", "就", "告诉她", "这个", "好消息。"], "correct_answer": "等女儿一回来，我就告诉她这个好消息。", "en_hint": "As soon as our daughter comes back, I'll tell her this good news." },
                        { "chunks": ["妈妈", "一", "进房间，", "他", "就", "把", "手机", "关上了。"], "correct_answer": "妈妈一进房间，他就把手机关上了。", "en_hint": "As soon as mom entered the room, he turned off his phone." },
                        { "chunks": ["每次", "我", "一", "去", "上海，", "就", "要", "去", "那家饭店", "吃饭。"], "correct_answer": "每次我一去上海，就要去那家饭店吃饭。", "en_hint": "Every time as soon as I go to Shanghai, I have to go to that restaurant to eat." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img20/kaoya.jpg",
                            "hint": "用“一......就......”说一句话：下课以后你要去做什么？",
                            "en_hint": "Make a sentence with '一......就......': What will you do after class?",
                            "keywords": ["一", "下课", "就", "去吃烤鸭"],
                            "reference_answer": "我一买完单就去对面饭店吃烤鸭。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你的朋友总是喝咖啡才能精神起来。请用“一......就......”造句。",
                            "en_scenario": "Your friend always needs coffee to feel energetic. Make a sentence with '一...就...'.",
                            "reference": "他每天早上一下床就要喝咖啡，不喝就没精神。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "语法3：究竟 (用于疑问句，追究到底)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["现在", "机票", "很便宜，", "放假后", "你", "究竟", "回不回国？"], "correct_answer": "现在机票很便宜，放假后你究竟回不回国？", "en_hint": "Air tickets are cheap now; exactly are you returning to your country after the holiday?" },
                        { "chunks": ["前面", "站着", "这么多人，", "那儿", "究竟", "发生了", "什么", "事情？"], "correct_answer": "前面站着这么多人，那儿究竟发生了什么事情？", "en_hint": "There are so many people standing ahead; what on earth happened there?" },
                        { "chunks": ["究竟", "哪个", "季节", "去", "丽江旅游", "比较好", "呢？"], "correct_answer": "究竟哪个季节去丽江旅游比较好呢？", "en_hint": "Exactly which season is better to travel to Lijiang?" }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img20/dengjipai.jpg",
                            "hint": "用“究竟”提问：你不知道航班是什么时间起飞。",
                            "en_hint": "Use '究竟' to ask: You don't know exactly what time the flight takes off.",
                            "keywords": ["航班", "究竟", "几点"],
                            "reference_answer": "去北京的航班究竟是几点的？"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "这道题算了几次答案都不一样，你想找出哪里出了问题。请用“究竟”提问。",
                            "en_scenario": "You calculated this problem several times and got different answers. Ask where the problem is using '究竟'.",
                            "reference": "真奇怪，究竟是哪儿出问题了？"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "语法4：起来 (动作的开始或对事物的评价)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["你", "听，", "邻居", "小王", "又", "唱", "起来", "了。"], "correct_answer": "你听，邻居小王又唱起来了。", "en_hint": "Listen, the neighbor Xiao Wang started singing again." },
                        { "chunks": ["上海话", "听起来", "就像", "外语", "一样。"], "correct_answer": "上海话听起来就像外语一样。", "en_hint": "Shanghai dialect sounds just like a foreign language." },
                        { "chunks": ["这件事情", "说起来", "容易，", "做起来", "难。"], "correct_answer": "这件事情说起来容易，做起来难。", "en_hint": "This matter is easy to say, but hard to do." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img20/kaoya.jpg",
                            "hint": "用“看起来”或“吃起来”评价这道菜。",
                            "en_hint": "Use '看起来' or '吃起来' to comment on this dish.",
                            "keywords": ["烤鸭", "看起来", "吃起来"],
                            "reference_answer": "这只烤鸭看起来颜色很漂亮，吃起来味道一定很香。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你听到一些老人在公园唱京剧，觉得他们很专业。用带“听起来”的句子表达。",
                            "en_scenario": "You hear some elderly people singing Peking Opera in the park and think they are professional. Express this using '听起来'.",
                            "reference": "公园里的老人唱得真好，听起来非常专业。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "语法5：V+起 (说起、聊起、回忆起)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["说起", "吃的", "东西，", "给", "我", "印象最深的", "是", "湖南菜。"], "correct_answer": "说起吃的东西，给我印象最深的是湖南菜。", "en_hint": "Speaking of food, what left the deepest impression on me is Hunan cuisine." },
                        { "chunks": ["聊起", "那场", "网球比赛，", "他们俩", "就", "兴奋得", "停不下来了。"], "correct_answer": "聊起那场网球比赛，他们俩就兴奋得停不下来了。", "en_hint": "Chatting about that tennis match, the two of them got so excited they couldn't stop." },
                        { "chunks": ["要是", "有人", "问起", "开会的时间，", "你", "就", "告诉他。"], "correct_answer": "要是有人问起开会的时间，你就告诉他。", "en_hint": "If anyone asks about the meeting time, just tell them." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img20/xiaochi.jpg",
                            "hint": "用“说起”介绍你最喜欢的小吃。",
                            "en_hint": "Use '说起' to introduce your favorite snack.",
                            "keywords": ["说起", "小吃", "最喜欢"],
                            "reference_answer": "说起大连的特色小吃，我最喜欢的是烤鱿鱼。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "看到这些老照片，你想到了小时候的事情。请用“想/回忆+起”表达。",
                            "en_scenario": "Seeing these old photos reminds you of your childhood. Express this using '想/回忆+起'.",
                            "reference": "看着这些照片，总会让我想起小时候有趣的事情。"
                        }
                    ]
                }
            }
        ],
        "synonym_distinction": [
            {
                "sentence": "这场比赛太精彩了，你猜____谁能先进球？",
                "options": ["究竟", "到底"],
                "answer": "究竟",
                "explanation": "其实此处【究竟/到底】均可使用，都表示进一步追究，用在疑问句中加强语气。"
            },
            {
                "sentence": "无论做什么事情都不会很容易就成功，只有坚持____，才会有希望。",
                "options": ["到底", "究竟"],
                "answer": "到底",
                "explanation": "<strong>到底:</strong> 可以做动词，表示“一直到结束，到终点”（坚持到底）。<br><strong>究竟:</strong> 没有动词用法，只能做副词。"
            },
            {
                "sentence": "她决心一定要将减肥进行____。",
                "options": ["到底", "究竟"],
                "answer": "到底",
                "explanation": "这里表示把动作进行到最后，必须用“到底”。"
            },
            {
                "sentence": "这个题我做了三遍，答案都不一样，____是哪儿出问题了？",
                "options": ["究竟", "到底"],
                "answer": "究竟",
                "explanation": "在疑问句中两者均可，但本题训练中，作副词强调疑问语气时选“究竟/到底”均算对（通常可互换）。"
            }
        ]
    },

    // 4. 篇章阅读 (语段排序)
    "module_4_text": {
        "level_1_sorting": [
            {
                "id": 1,
                "shuffled_items": [
                    { "tag": "A", "content": "去机场的路上，小张的朋友问能不能找到加油站，因为快没油了。" },
                    { "tag": "B", "content": "小张说过了长江大桥往右拐就有一个，并告诉朋友不用着急。" },
                    { "tag": "C", "content": "航班本来是十点的，后来推迟了一个小时，所以加完油再上高速公路时间也来得及。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "首先提出没油了需要找加油站（A），接着回答加油站的位置（B），最后说明航班推迟所以时间充足（C）。"
            },
            {
                "id": 2,
                "shuffled_items": [
                    { "tag": "A", "content": "孙月和丈夫计划放寒假的时候带女儿去旅行，让她放松放松。" },
                    { "tag": "B", "content": "因为听说广西不错，冬天也非常暖和，他们决定带女儿去广西。" },
                    { "tag": "C", "content": "他们打算中午去对面的饭店吃烤鸭，祝贺女儿成绩合格时，再告诉她这个好消息。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "先说旅行的计划初衷（A），再说决定去哪里（B），最后说什么时候告诉女儿（C）。"
            },
            {
                "id": 3,
                "shuffled_items": [
                    { "tag": "A", "content": "安娜向马克展示了她在丽江旅行时照的照片，那里的自然风景真美。" },
                    { "tag": "B", "content": "马克看到一张安娜和导游干杯的照片，导游虽然不是少数民族，但打扮得很漂亮。" },
                    { "tag": "C", "content": "导游不仅给他们讲了很多笑话，还在安娜把存包的钥匙丢了时，帮她找了回来。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "先引出丽江的照片和风景（A），接着看到照片里的人物（B），最后详细说这个人物（导游）做的事情（C）。"
            },
            {
                "id": 4,
                "shuffled_items": [
                    { "tag": "A", "content": "从北方坐火车到南方旅游，一路上你会发现不同的地方有不同的风景。" },
                    { "tag": "B", "content": "北方也许还下着雪，南方的树却已经一棵一棵地变绿了，到处都是绿色。" },
                    { "tag": "C", "content": "除了风景，南北方的饮食和语言也有很大不同，比如南方汤鲜美，上海话听起来像外语。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "先总起说南北方旅行风景的变化（A），再具体描述风景上的区别（B），最后转折扩展到饮食和语言的区别（C）。"
            },
            {
                "id": 5,
                "shuffled_items": [
                    { "tag": "A", "content": "放假的时候，我会收拾好行李，向目的地出发，去尝各地的特色小吃。" },
                    { "tag": "B", "content": "说起吃的东西，给我印象最深的是湖南菜，它的特点就是辣。" },
                    { "tag": "C", "content": "与其他地方不同，湖南菜主要是咸辣、香辣和酸辣，吃过之后让人精神百倍。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "先说放假出发去吃小吃（A），引出印象最深的湖南菜（B），最后具体说明湖南菜的味道特点（C）。"
            }
        ]
    },

    // 5. 跟读练习
    "module_4_repetition": {
        "sentences": [
            "该加油了，去机场的路上有加油站吗？",
            "别开着开着没油了。你去北京的航班是几点的？",
            "航班本来是十点的，后来机场网站上通知推迟了一个小时。",
            "一会儿我自己进去换登机牌，等我到了首都机场再给你发短信。",
            "平时女儿那么多课，怪可怜的。这次放假咱们带她去哪儿玩儿比较好呢？",
            "中午我们不是要去对面的饭店吃烤鸭，祝贺她考试成绩都合格吗？",
            "那个人是少数民族吗？她打扮得真漂亮。",
            "有一次我把存包的钥匙丢了，最后还是导游帮我找到的。",
            "究竟哪个季节去丽江旅游比较好呢？",
            "窗外的树一棵一棵地变绿，南方却已经到处都是绿色了。",
            "你跟上海人对话时，会发现上海话听起来就像外语一样。",
            "放假的时候，我会收拾好行李，买张火车票，向目的地出发。",
            "说起吃的东西，给我印象最深的是湖南菜。",
            "与其他地方的辣不同，湖南菜的辣主要是咸辣、香辣和酸辣。"
        ]
    },

    // 6. 动态词云
    "module_5_wordcloud": {
        "title": "💬 提到“旅行”，你会想到什么？",
        "hint": "请扫码发送1-2个词描述（如：航班、风景、拍照、累、放松、美食…）"
    },

    // 7. 极限挑战
    "module_6_challenge": {
        "challenge_sets": [
            { "id": 1, "keywords": ["加油站", "航班", "推迟"], "framework": "去机场的路上先找个____加油；我不着急，因为去北京的________了一个小时。", "translation": "Find a gas station on the way to the airport to get gas; I'm not in a hurry because the flight to Beijing has been delayed by an hour." },
            { "id": 2, "keywords": ["祝贺", "合格", "烤鸭"], "framework": "为了____女儿的考试成绩全部____，周末我们带她去对面的饭店吃____。", "translation": "To congratulate our daughter on passing all her exams, we will take her to the restaurant across the street to eat roast duck this weekend." },
            { "id": 3, "keywords": ["打扮", "笑话", "钥匙"], "framework": "那个____得漂亮的导游，一路上给我们讲____，还帮我找回了存包的____。", "translation": "That beautifully dressed tour guide told us jokes along the way and even helped me find the locker key." },
            { "id": 4, "keywords": ["对话", "普通话", "起来"], "framework": "上海人虽然会说____，但是和他们____时，上海话听____就像外语一样。", "translation": "Although Shanghai people can speak Mandarin, when conversing with them, Shanghai dialect sounds just like a foreign language." },
            { "id": 5, "keywords": ["收拾", "出发", "小吃"], "framework": "我____好行李向目的地____了，这次旅行一定要尝尝当地有名的____。", "translation": "I packed my luggage and set off for my destination. On this trip, I must taste the famous local snacks." },
            { "id": 6, "keywords": ["辣", "香", "酸"], "framework": "说起湖南菜，它的特点就是____，主要是咸辣、____辣和____辣。", "translation": "Speaking of Hunan cuisine, its characteristic is spicy, mainly salty-spicy, fragrant-spicy, and sour-spicy." }
        ]
    },

    // 8. 找茬大师（文字辨错）
    "module_7_find_error": {
        "questions": [
            { "sentence": "他听着听着音乐就睡着了。", "error": "听着听着音乐", "correct": "他听音乐听着听着就睡着了。", "explanation": "「V着V着」前面如果有宾语，最好把宾语放在最前面或者V前面，如“听音乐听着听着”。不能拆开动宾插入宾语。" },
            { "sentence": "究竟你在干什么？", "error": "究竟你在干什么", "correct": "你究竟在干什么？", "explanation": "「究竟」作副词，如果主语是代词/名词，应该放在主语的后面。" },
            { "sentence": "我一下班就去医院看你了。", "error": "", "correct": "(此句语法正确)", "explanation": "「一……就……」表示两个动作连续发生，用法完全正确。" },
            { "sentence": "我们要把这个计划坚持到底。", "error": "", "correct": "(此句语法正确)", "explanation": "「到底」在这里作动词补充成分，表示到最后，用法正确。" },
            { "sentence": "我们要把这个计划坚持究竟。", "error": "坚持究竟", "correct": "我们要把这个计划坚持到底。", "explanation": "「究竟」没有这种作补语/动词的用法，不能替换「到底」。" },
            { "sentence": "这个菜看起来好吃，吃起来很咸。", "error": "", "correct": "(此句语法正确)", "explanation": "「V+起来」表示对事物的评价，用法正确。" },
            { "sentence": "一说起旅行，她就激动得不得了。", "error": "", "correct": "(此句语法正确)", "explanation": "「V+起」表示涉及、提到，用法正确。" },
            { "sentence": "她打扮很漂亮地去参加晚会了。", "error": "打扮很漂亮地", "correct": "她打扮得很漂亮，去参加晚会了。", "explanation": "「打扮」后面带评价，要用程度补语结构「打扮得……」。" }
        ]
    },

    // 9. 终极对决 Jeopardy (诸神之战)
    "module_8_jeopardy": {
        "categories": ["词汇搭配", "课文理解", "语法造句"],
        "teamNames": { "wei": "魏国", "shu": "蜀国", "wu": "吴国" },
        "teamColors": { "wei": "#ef4444", "shu": "#10b981", "wu": "#3b82f6" },
        "questions": {
            "q_0_10": { "question": "请填空：我们要去首都机场，请问去机场的路上有____吗？车快没油了。", "question_en": "Fill in the blank: Are there any ____ on the way to the airport? The car is almost out of gas.", "answer": "加油站" },
            "q_0_20": { "question": "请填空：朋友考试都____了，我们去饭店吃烤鸭____她。", "question_en": "Fill in the blank: Our friend ____ all her exams; let's go eat roast duck to ____ her.", "answer": "合格 / 祝贺" },
            "q_0_30": { "question": "请填空：我的包存在那里了，但是存包柜的____找不到了。", "question_en": "Fill in the blank: I stored my bag there, but I can't find the ____ for the locker.", "answer": "钥匙" },
            "q_1_10": { "question": "课文一中，去北京的航班时间发生了什么变化？", "question_en": "In Text 1, what changed about the flight time to Beijing?", "answer": "航班本来是10点的，后来通知推迟了一个小时。" },
            "q_1_20": { "question": "课文三中，安娜为什么觉得那个导游很有趣？", "question_en": "In Text 3, why did Anna think the tour guide was interesting?", "answer": "因为她一路上给大家讲了很多有趣的笑话，还帮安娜找到了存包的钥匙。" },
            "q_1_30": { "question": "课文五中，湖南菜有什么特点？", "question_en": "In Text 5, what are the characteristics of Hunan cuisine?", "answer": "特点是辣，主要是咸辣、香辣和酸辣。" },
            "q_2_10": { "question": "用“V着V着”造一个句子。", "question_en": "Make a sentence with 'V着V着'.", "answer": "我们在路上聊着聊着，很快就到了。" },
            "q_2_20": { "question": "用“一……就……”造一个句子。", "question_en": "Make a sentence with '一……就……'.", "answer": "等女儿一回来我就告诉她这个好消息。" },
            "q_2_30": { "question": "用“究竟”提问造一个句子。", "question_en": "Make a sentence asking a question with '究竟'.", "answer": "前面发生了什么事，究竟是怎么回事？" }
        },
        "extra_pk_questions": [
            { "type": "快问快答", "q": "“坚持到底”可以换成“坚持究竟”吗？为什么？", "q_en": "Can we change '坚持到底' to '坚持究竟'? Why?", "a": "不可以。因为“究竟”只能做副词用于疑问句，不能做动词表示“到最后”。" },
            { "type": "抢答", "q": "课文四里说，冬天从北方坐火车去南方，风景会有什么变化？", "q_en": "According to Text 4, how does the scenery change when taking a train from North to South in winter?", "a": "窗外的树一棵一棵地变绿，北方下雪，南方已经到处都是绿色了。" }
        ]
    },

    // 10. 词汇多项选择 (已按需分布正确答案 A/B/C/D)
    "module_9_vocab_practice": [
        { "question": "去机场的路上有____吗？车快没油了。", "options": ["加油站", "登机牌", "航班", "高速公路"], "answer": "加油站" },
        { "question": "由于天气原因，去北京的____被取消了。", "options": ["首都", "航班", "长江", "民族"], "answer": "航班" },
        { "question": "会议的时间____到了下周三。", "options": ["出发", "收拾", "推迟", "打扮"], "answer": "推迟" },
        { "question": "在____上开车，一定要注意安全。", "options": ["加油站", "首都", "对面", "高速公路"], "answer": "高速公路" },
        { "question": "请拿好您的护照和____，准备上飞机。", "options": ["登机牌", "钥匙", "笑话", "汤"], "answer": "登机牌" },
        { "question": "北京是中国的____。", "options": ["民族", "首都", "对面", "航班"], "answer": "首都" },
        { "question": "____是中国第一大河。", "options": ["黄河", "首都", "长江", "汤"], "answer": "长江" },
        { "question": "放寒假的时候我计划去____。", "options": ["打扮", "收拾", "推迟", "旅行"], "answer": "旅行" },
        { "question": "天气____冷的，你多穿点衣服。", "options": ["怪", "酸", "辣", "香"], "answer": "怪" },
        { "question": "那个考试没考好的小孩哭得怪____的。", "options": ["合格", "可怜", "香", "辣"], "answer": "可怜" },
        { "question": "马路____有一家很好吃的饭店。", "options": ["首都", "长江", "对面", "民族"], "answer": "对面" },
        { "question": "去北京一定要尝尝北京____。", "options": ["小吃", "汤", "钥匙", "烤鸭"], "answer": "烤鸭" },
        { "question": "____你顺利通过了考试！", "options": ["祝贺", "推迟", "出发", "收拾"], "answer": "祝贺" },
        { "question": "这次的产品质量全部____。", "options": ["可怜", "合格", "香", "酸"], "answer": "合格" },
        { "question": "为了我们的友谊，大家____！", "options": ["打扮", "祝贺", "干杯", "存"], "answer": "干杯" },
        { "question": "中国有56个____。", "options": ["首都", "航班", "小吃", "民族"], "answer": "民族" },
        { "question": "她今天____得很漂亮。", "options": ["打扮", "收拾", "出发", "推迟"], "answer": "打扮" },
        { "question": "他很幽默，喜欢给大家讲____。", "options": ["普通话", "笑话", "对话", "汤"], "answer": "笑话" },
        { "question": "请问这里有____包的地方吗？", "options": ["收拾", "打扮", "存", "出发"], "answer": "存" },
        { "question": "哎呀，我把开门的____弄丢了。", "options": ["登机牌", "航班", "小吃", "钥匙"], "answer": "钥匙" },
        { "question": "你____去不去参加晚会？", "options": ["究竟", "怪", "可怜", "合格"], "answer": "究竟" },
        { "question": "院子里有一____很高大的树。", "options": ["场", "棵", "把", "个"], "answer": "棵" },
        { "question": "这个西红柿鸡蛋____很好喝。", "options": ["小吃", "烤鸭", "汤", "钥匙"], "answer": "汤" },
        { "question": "你能用英语和外国人____吗？", "options": ["笑话", "普通话", "出发", "对话"], "answer": "对话" },
        { "question": "他的____说得非常标准，像北京人一样。", "options": ["普通话", "对话", "笑话", "民族"], "answer": "普通话" },
        { "question": "去旅游一定要尝尝当地的特色____。", "options": ["汤", "小吃", "烤鸭", "长江"], "answer": "小吃" },
        { "question": "快去把你的房间____干净！", "options": ["打扮", "推迟", "收拾", "存"], "answer": "收拾" },
        { "question": "明天早上8点我们准时____。", "options": ["推迟", "收拾", "打扮", "出发"], "answer": "出发" },
        { "question": "我不喜欢吃辣椒，太____了。", "options": ["辣", "酸", "香", "怪"], "answer": "辣" },
        { "question": "这朵花闻起来真____。", "options": ["辣", "香", "酸", "怪"], "answer": "香" },
        { "question": "这个苹果放太久了，味道有点____。", "options": ["香", "辣", "酸", "可怜"], "answer": "酸" }
    ],

    // 11. 课文篇章理解
    "module_10_comprehension": [
        {
            "sectionTitle": "课文一：小张去北京，朋友送他去机场",
            "textContext": "朋友：该加油了，去机场的路上有加油站吗？\n小张：我记得过了长江大桥往右一拐就有一个，大概有四五公里远。\n朋友：好，那我就放心了，别开着开着没油了。你去北京的航班是几点的？时间来得及吗？\n小张：航班本来是十点的，后来机场网站上通知推迟了一个小时，所以九点半以前到就应该没问题。\n朋友：一会儿加完油，往西走五百米就能上高速公路。走高速公路大约半个小时就到了。\n小张：一会儿我自己进去换登机牌，你就不用送我了，等我到了首都机场再给你发短信。",
            "questions": [
                { "question": "小张的航班本来是几点的？", "options": ["十点的", "九点半的", "十一点的", "九点的"], "answer": "十点的" },
                { "question": "加完油以后他们怎么去机场？", "options": ["走高速公路", "坐地铁", "走长江大桥", "打车"], "answer": "走高速公路" }
            ]
        },
        {
            "sectionTitle": "课文二：孙月和丈夫计划带女儿旅行",
            "textContext": "孙月：女儿下个星期就要放寒假了，咱们带她去旅游，放松放松，怎么样？\n丈夫：平时女儿那么多课，怪可怜的。这次放假咱们带她去哪儿玩儿比较好呢？\n孙月：听说广西很不错，我们就去广西吧。\n丈夫：好啊，那里的气候和北方很不同，即使是冬天也非常暖和。等女儿一回来我就告诉她这个好消息。\n孙月：先别着急说。中午我们不是要去对面的饭店吃烤鸭，祝贺她考试成绩都合格吗？那时候再告诉她，不是更好？",
            "questions": [
                { "question": "他们为什么想带女儿去旅行？", "options": ["让女儿放松放松，祝贺她成绩合格", "因为女儿吵着要去", "因为天气太冷", "因为广西的烤鸭好吃"], "answer": "让女儿放松放松，祝贺她成绩合格" },
                { "question": "广西冬天的天气怎么样？", "options": ["非常暖和", "经常下雪", "和北方一样", "非常寒冷"], "answer": "非常暖和" }
            ]
        },
        {
            "sectionTitle": "课文三：安娜向马克介绍丽江旅行的经验",
            "textContext": "马克：这么多照片都是你在丽江照的？自然风景可真美！\n安娜：是啊，每年都吸引成千上万的游客。这张照片上和我干杯的人是我们的导游，一路上她给我们讲了很多有趣的笑话。\n马克：导游是少数民族吗？她打扮得真漂亮。\n安娜：她不是少数民族。有一次我把存包的钥匙丢了，最后还是她帮我找到的。\n马克：究竟哪个季节去丽江旅游比较好呢？\n安娜：最美的季节是春天和秋天，不过人比较多。稍微好一点儿的时间是12月到第二年3月，不仅风景美，吃住也很便宜。",
            "questions": [
                { "question": "关于导游，下列哪项是正确的？", "options": ["她不是少数民族，但打扮漂亮，还帮安娜找到了钥匙", "她是少数民族", "她丢了存包的钥匙", "她不喜欢讲笑话"], "answer": "她不是少数民族，但打扮漂亮，还帮安娜找到了钥匙" },
                { "question": "安娜建议马克什么时候去丽江最好？", "options": ["12月到3月比较便宜", "只有春天最好", "夏天去最好", "任何时候都一样"], "answer": "12月到3月比较便宜" }
            ]
        },
        {
            "sectionTitle": "课文四：南北方的不同风景与文化",
            "textContext": "中国南北距离约5500公里，因此气候有很大区别。每年三四月份，如果从北方坐火车到南方去旅游，一路上你会发现：窗外的树一棵一棵地变绿，北方也许还下着雪，南方却已经到处都是绿色了。南方菜很有特点，特别是汤，味道鲜美，很多北方人都喜欢喝。另外，语言也有很大不同。比如跟上海人对话时，会发现上海话听起来就像外语一样。虽然上海人也会讲普通话，可是仔细听，还是有上海味儿。",
            "questions": [
                { "question": "三四月份从北向南坐火车，能看到什么变化？", "options": ["树一棵一棵地变绿", "天越来越冷", "一直在下雪", "到处都没有绿色"], "answer": "树一棵一棵地变绿" },
                { "question": "作者觉得上海话听起来怎么样？", "options": ["像外语一样", "非常容易听懂", "和北方话完全一样", "味道很鲜美"], "answer": "像外语一样" }
            ]
        },
        {
            "sectionTitle": "课文五：旅行与品尝小吃",
            "textContext": "一个人有时间一定要去旅行，旅行不仅能丰富一个人的经历，而且是很好的减压方法。对我来说，最重要的是旅行能让我有机会尝到各地有名的小吃。放假时，我会收拾好行李，买张火车票，向目的地出发。说起吃的东西，给我印象最深的是湖南菜。湖南菜的特点就是辣，与其他地方的辣不同，湖南菜主要是咸辣、香辣和酸辣。每次旅行结束后，我都会精神百倍地开始我的工作。",
            "questions": [
                { "question": "对作者来说，旅行最重要的是什么？", "options": ["能尝到各地的小吃", "能拍很多好看的照片", "能买到便宜的衣服", "能练习说普通话"], "answer": "能尝到各地的小吃" },
                { "question": "湖南菜的辣有什么特别之处？", "options": ["分为咸辣、香辣和酸辣", "一点儿也不辣", "只有甜辣", "和其他地方的辣完全一样"], "answer": "分为咸辣、香辣和酸辣" }
            ]
        }
    ]
};

// 自动打乱选项 (保留动态打乱，以增加课堂的随机性)
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
window.LESSONS_DATA['hsk4-20'] = lessonData;
window.lessonData = lessonData; // For direct access during development

// Node.js export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lessonData;
}