/*
================================================================
== 课程数据文件 (Lesson Data File)
== 第十八课: 科技与世界
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
    "lesson": "HSK 4 - 第十八课《科技与世界》",
    "students": [ "列夏", "丽莎", "明溪", "星悦", "德昊", "任华", "梦航", "基里尔", "萨~沙~", "萨沙", "达铭", "安德烈", "纪嘉", "高斯佳", "瓦列", "Maiia" ],

    "pinyin_map": {
        "降落": "jiàngluò", "火": "huǒ", "作者": "zuòzhě", "交通": "jiāotōng", "技术": "jìshù",
        "是否": "shìfǒu", "秒": "miǎo", "方式": "fāngshì", "受不了": "shòu bu liǎo", "日记": "rìjì",
        "安全": "ānquán", "密码": "mìmǎ", "允许": "yǔnxǔ", "座": "zuò", "桥": "qiáo",
        "危险": "wēixiǎn", "警察": "jǐngchá", "抓": "zhuā", "咸": "xián", "矿泉水": "kuàngquánshuǐ",
        "接着": "jiēzhe", "付款": "fùkuǎn", "举": "jǔ", "迷路": "mílù", "地址": "dìzhǐ",
        "地点": "dìdiǎn", "除此之外": "chúcǐyǐwài", "世纪": "shìjì", "邮局": "yóujú", "收": "shōu",
        "信封": "xìnfēng", "网站": "wǎngzhàn", "信息": "xìnxī", "更新": "gēngxīn", "社会": "shèhuì",
        "增长": "zēngzhǎng", "科学": "kēxué", "普遍": "pǔbiàn", "节约": "jiéyuē", "解决": "jiějué",
        "仍然": "réngrán", "解释": "jiěshì", "奇怪": "qíguài", "现代": "xiàndài", "巨大": "jùdà",
        "乘坐": "chéngzuò", "地球": "dìqiú", "发展": "fāzhǎn", "价格": "jiàgé", "降低": "jiàngdī"
    },

    "translation_dict": {
        "降落": "to descend; to land", "火": "popular; in vogue", "作者": "author", "交通": "traffic; communication", "技术": "technology; skill",
        "是否": "whether or not; if", "秒": "second (unit of time)", "方式": "way; method", "受不了": "cannot bear; unbearable", "日记": "diary",
        "安全": "safe; secure", "密码": "password", "允许": "to permit; to allow", "座": "(measure word for mountains, bridges, buildings)", "桥": "bridge",
        "危险": "dangerous", "警察": "police", "抓": "to catch; to seize", "咸": "salty", "矿泉水": "mineral water",
        "接着": "then; immediately after", "付款": "to pay (a bill)", "举": "to lift; to raise", "迷路": "to get lost", "地址": "address",
        "地点": "place; site", "除此之外": "besides this; in addition to this", "世纪": "century", "邮局": "post office", "收": "to receive",
        "信封": "envelope", "网站": "website", "信息": "information; message", "更新": "to update; to renew", "社会": "society",
        "增长": "to increase; to grow", "科学": "science", "普遍": "universal; general; widespread", "节约": "to save; to economize", "解决": "to solve",
        "仍然": "still; yet", "解释": "to explain", "奇怪": "strange; odd", "现代": "modern", "巨大": "huge; gigantic",
        "乘坐": "to ride (in a vehicle)", "地球": "Earth", "发展": "to develop; development", "价格": "price", "降低": "to lower; to reduce"
    },

    "collocations": [
        { "left": "飞机", "right": "降落" }, { "left": "这首歌很", "right": "火" }, { "left": "书的", "right": "作者" },
        { "left": "交通", "right": "工具" }, { "left": "科学", "right": "技术" }, { "left": "几", "right": "秒钟" },
        { "left": "生活", "right": "方式" }, { "left": "疼得", "right": "受不了" }, { "left": "写", "right": "日记" },
        { "left": "交通", "right": "安全" }, { "left": "手机", "right": "密码" }, { "left": "不", "right": "允许" },
        { "left": "一", "right": "座桥" }, { "left": "有", "right": "危险" }, { "left": "抓住", "right": "坏人" },
        { "left": "吃得太", "right": "咸" }, { "left": "一瓶", "right": "矿泉水" }, { "left": "手机", "right": "付款" },
        { "left": "举", "right": "手" }, { "left": "在森林中", "right": "迷路" }, { "left": "家庭", "right": "地址" },
        { "left": "会议", "right": "地点" }, { "left": "21", "right": "世纪" }, { "left": "去", "right": "邮局" },
        { "left": "收到", "right": "邮件" }, { "left": "打开", "right": "信封" }, { "left": "新闻", "right": "网站" },
        { "left": "获得", "right": "信息" }, { "left": "内容", "right": "很新" }, { "left": "适应", "right": "社会" },
        { "left": "知识", "right": "增长" }, { "left": "科学", "right": "知识" }, { "left": "普遍", "right": "使用" },
        { "left": "节约", "right": "用纸" }, { "left": "解决", "right": "问题" }, { "left": "仍然", "right": "记得" },
        { "left": "对梦", "right": "进行解释" }, { "left": "感到", "right": "奇怪" }, { "left": "现代", "right": "技术" },
        { "left": "巨大的", "right": "变化" }, { "left": "乘坐", "right": "飞机" }, { "left": "保护", "right": "地球" },
        { "left": "科技", "right": "发展" }, { "left": "降低", "right": "价格" }
    ],

    // 1. 词汇基础模块
    "module_1_vocab": {
        "pinyin_match": [
            ["降落", "火", "作者", "交通", "技术", "是否"],
            ["秒", "方式", "受不了", "日记", "安全", "密码"],
            ["允许", "座", "桥", "危险", "警察", "抓"],
            ["咸", "矿泉水", "付款", "举", "迷路", "地址"],
            ["地点", "世纪", "邮局", "收", "信封", "网站", "信息"]
        ],
        "char_match": [
            ["降落", "火爆", "作者", "交通", "技术", "是否"],
            ["秒钟", "方式", "受不了", "日记本", "安全", "密码"],
            ["允许", "一座", "桥梁", "危险", "警察", "抓住"],
            ["咸味", "矿泉水", "付款", "举手", "迷路", "地址"],
            ["地点", "世纪", "邮局", "收到", "信封", "网站", "信息"]
        ],
        "guess_words": [
            "降落", "火", "作者", "交通", "技术", "是否",
            "秒", "方式", "受不了", "日记", "安全", "密码",
            "允许", "危险", "警察", "抓", "咸", "付款",
            "举", "迷路", "地址", "地点", "世纪", "邮局",
            "收", "网站", "信息"
        ]
    },

    // 2. 词汇操练 (图片炸弹、抢答揭盖、盲盒造句)
    "module_2_vocab_drill": {
        "word_bomb": [
            { "word": "降落", "img_url": "https://images.unsplash.com/photo-1540321287130-1c70e3ed5edb?w=400", "en_hint": "airplane landing" },
            { "word": "火", "img_url": "https://images.unsplash.com/photo-1534388484179-8b8098c4c34a?w=400", "en_hint": "trending/popular" },
            { "word": "交通", "img_url": "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=400", "en_hint": "city traffic" },
            { "word": "技术", "img_url": "https://images.unsplash.com/photo-1526374965328-7f66d40af354?w=400", "en_hint": "high technology" },
            { "word": "日记", "img_url": "https://images.unsplash.com/photo-1522204523234-87295a702a06?w=400", "en_hint": "personal diary" },
            { "word": "密码", "img_url": "https://images.unsplash.com/photo-1510511459019-5be7462c76d0?w=400", "en_hint": "digital password" },
            { "word": "警察", "img_url": "https://images.unsplash.com/photo-1570710895574-e8517c3776e7?w=400", "en_hint": "police officer" },
            { "word": "桥", "img_url": "https://images.unsplash.com/photo-1526482163931-e125b27376c6?w=400", "en_hint": "bridge" },
            { "word": "付款", "img_url": "https://images.unsplash.com/photo-1579227114347-c023c55adc43?w=400", "en_hint": "mobile payment" },
            { "word": "迷路", "img_url": "https://images.unsplash.com/photo-1485846234648-a9159c470897?w=400", "en_hint": "lost in forest" },
            { "word": "网站", "img_url": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400", "en_hint": "website" },
            { "word": "信息", "img_url": "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=400", "en_hint": "information data" }
        ],
        "guess_words": [
            { "target_word": "作者" }, { "target_word": "秒" }, { "target_word": "方式" },
            { "target_word": "受不了" }, { "target_word": "允许" }, { "target_word": "危险" },
            { "target_word": "抓" }, { "target_word": "咸" }, { "target_word": "矿泉水" },
            { "target_word": "举" }, { "target_word": "地址" }, { "target_word": "地点" },
            { "target_word": "世纪" }, { "target_word": "邮局" }, { "target_word": "收" },
            { "target_word": "信封" }
        ],
        "blind_box_spinner": [
            { "words": [{ "text": "降落" }, { "text": "起飞" }, { "text": "飞机" }] },
            { "words": [{ "text": "火" }, { "text": "流行" }, { "text": "热销" }] },
            { "words": [{ "text": "交通" }, { "text": "警察" }, { "text": "安全" }] },
            { "words": [{ "text": "技术" }, { "text": "科学" }, { "text": "发展" }] },
            { "words": [{ "text": "受不了" }, { "text": "难受" }, { "text": "忍受" }] },
            { "words": [{ "text": "日记" }, { "text": "密码" }, { "text": "记录" }] },
            { "words": [{ "text": "危险" }, { "text": "安全" }, { "text": "注意" }] },
            { "words": [{ "text": "付款" }, { "text": "购物" }, { "text": "方便" }] },
            { "words": [{ "text": "迷路" }, { "text": "地址" }, { "text": "地点" }] },
            { "words": [{ "text": "网站" }, { "text": "信息" }, { "text": "互联网" }] }
        ]
    },

    // 3. 语法逻辑多关卡
    "module_3_grammar": {
        "grammar_points": [
            {
                "grammar_point_name": "副词：是否 (shìfǒu)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["这本书你", "是否", "看过？"], "correct_answer": "这本书你是否看过？", "en_hint": "Have you read this book or not? (Written)" },
                        { "chunks": ["你", "是否", "同意", "这个", "决定？"], "correct_answer": "你是否同意这个决定？", "en_hint": "Do you agree with this decision or not? (Written)" },
                        { "chunks": ["他们", "讨论", "了", "是否", "要", "去", "旅行。"], "correct_answer": "他们讨论了是否要去旅行。", "en_hint": "They discussed whether or not to go on the trip." },
                        { "chunks": ["婚姻", "是否", "幸福", "跟", "年龄", "没有", "关系。"], "correct_answer": "婚姻是否幸福跟年龄没有关系。", "en_hint": "Whether or not a marriage is happy has nothing to do with age." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1543269865-cbf427fdce8f?w=400", // Group discussion
                            "hint": "用“是否”询问大家是否理解。",
                            "en_hint": "Use '是否' to ask if everyone understands.",
                            "keywords": ["大家", "是否", "明白"],
                            "reference_answer": "请问大家是否明白我的意思？"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你在公司会议上发表了一个新方案，想知道同事们的看法。请用“是否”来询问他们是否支持这个方案。",
                            "en_scenario": "You presented a new proposal at a company meeting and want to know your colleagues' opinions. Use '是否' to ask if they support the proposal.",
                            "reference": "各位同事，你们是否支持这个新方案？"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "受不了 (shòu bu liǎo)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["每天", "学习", "30", "个词，", "我", "实在", "受不了。"], "correct_answer": "每天学习30个词，我实在受不了。", "en_hint": "Learning 30 words every day, I really can't bear it." },
                        { "chunks": ["他", "最近", "总是", "对我", "发脾气，", "我", "实在", "受不了", "他。"], "correct_answer": "他最近总是对我发脾气，我实在受不了他。", "en_hint": "He's been losing his temper with me recently, I really can't stand him." },
                        { "chunks": ["天天", "对着", "电脑", "看，", "眼睛", "实在", "受不了。"], "correct_answer": "天天对着电脑看，眼睛实在受不了。", "en_hint": "Staring at the computer every day, my eyes really can't take it anymore." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1506784983877-ce60a4725ccd?w=400", // Person with headache
                            "hint": "用“受不了”描述头疼。",
                            "en_hint": "Use '受不了' to describe a headache.",
                            "keywords": ["头疼", "受不了"],
                            "reference_answer": "我的头疼得实在受不了了。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你最受不了什么事情？请用“受不了”来表达你最不能忍受的一件事。",
                            "en_scenario": "What is the one thing you can't stand the most? Use '受不了' to express it.",
                            "reference": "我最受不了好朋友骗我。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "介词：除此之外 (chúcǐyǐwài)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["手机", "除了", "能", "打电话，", "除此以外", "还能", "听音乐。"], "correct_answer": "手机除了能打电话，除此以外还能听音乐。", "en_hint": "Besides making calls, cell phones can also play music." },
                        { "chunks": ["在中国", "很多", "地方的", "动物园", "都能", "看到", "熊猫，", "除此之外", "在国外", "也能", "看到。"], "correct_answer": "在中国很多地方的动物园都能看到熊猫，除此之外在国外也能看到。", "en_hint": "Besides zoos in many places in China, pandas can also be seen abroad." },
                        { "chunks": ["他", "和", "弟弟", "同一天", "出生，", "长得很像，", "但", "除此之外", "几乎", "再找不到", "其他", "共同点。"], "correct_answer": "他和弟弟同一天出生，长得很像，但除此之外几乎再找不到其他共同点。", "en_hint": "He and his brother were born on the same day and look very alike, but besides that, they have almost no other common points." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1506784983877-ce60a4725ccd?w=400", // Studying
                            "hint": "用“除此之外”说明除了看中文电影，还能做什么来提高汉语水平。",
                            "en_hint": "Use '除此之外' to state what else one can do besides watching Chinese movies to improve Chinese level.",
                            "keywords": ["看电影", "提高", "读报纸"],
                            "reference_answer": "看中文电影能提高汉语水平，除此之外，你还可以试着看中文报纸。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你觉得跑步是一种很好的锻炼方式。请用“除此之外”再举一个跑步的好处。",
                            "en_scenario": "You think running is a good way to exercise. Use '除此之外' to give another benefit of running.",
                            "reference": "跑步是一种很好的锻炼身体的方式，除此之外，还可以交到很多朋友。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "把 …… 叫作 ……",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["人们", "都", "把", "地球", "叫作", "“地球村”。"], "correct_answer": "人们都把地球叫作“地球村”。", "en_hint": "People call the Earth 'Global Village'." },
                        { "chunks": ["人们", "把", "黄河", "叫作", "“母亲河”。"], "correct_answer": "人们把黄河叫作“母亲河”。", "en_hint": "People call the Yellow River 'Mother River'." },
                        { "chunks": ["中国人", "把", "搬新家", "后", "的", "请客", "叫作", "“暖房”。"], "correct_answer": "中国人把搬新家后的请客叫作“暖房”。", "en_hint": "Chinese people call inviting guests after moving into a new home 'Nuànfáng'." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1622737133706-e177b0d87930?w=400", // Sea and river characters
                            "hint": "用“把...叫作...”解释“三点水”。",
                            "en_hint": "Use '把...叫作...' to explain 'san dianshui' (氵).",
                            "keywords": ["氵", "叫作", "三点水"],
                            "reference_answer": "在汉语里，我们把“氵”叫作“三点水”。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "中国有56个民族，其中汉族人最多。其他人数较少的民族，大家怎么称呼他们？请用“把...叫作...”来表达。",
                            "en_scenario": "China has 56 ethnic groups, with the Han ethnic group being the largest. How do people refer to the other smaller ethnic groups? Please use '把...叫作...' to express it.",
                            "reference": "我们把人数较少的民族叫作“少数民族”。"
                        }
                    ]
                }
            }
        ],
        "synonym_distinction": [
            {
                "sentence": "他毕业后工作了一年，____又考上了北京大学，读研究生。",
                "options": ["接着", "然后"],
                "answer": "接着",
                "explanation": "<strong>接着 (jiēzhe):</strong> 副词，强调时间上紧跟着，表示动作紧密相连，不能有明显的时间间隔。主语可以相同或不同。<br><strong>然后 (ránhòu):</strong> 连词，表示事情的顺序，前后动作可以有间隔，常用在“先……然后……”结构中。主语一般相同。此处“工作一年”后“考上大学”时间紧密，且强调顺承。"
            },
            {
                "sentence": "咱们先去吃晚饭，____看电影，好不好？",
                "options": ["接着", "然后"],
                "answer": "然后",
                "explanation": "<strong>然后 (ránhòu):</strong> 用于表示动作的先后顺序，且常与“先”搭配。这里“吃饭”和“看电影”是两个有顺序的活动。"
            },
            {
                "sentence": "这本书你看完了我____看吧。",
                "options": ["接着", "然后"],
                "answer": "接着",
                "explanation": "<strong>接着 (jiēzhe):</strong> 强调在前面一个动作结束后，立即进行下一个动作，且主语可以不同（你看完，我接着看）。"
            },
            {
                "sentence": "他已经学了一年汉语了，明年还要____学。",
                "options": ["接着", "然后"],
                "answer": "接着",
                "explanation": "<strong>接着 (jiēzhe):</strong> 表示在原来基础上继续进行，强调持续性。"
            },
            {
                "sentence": "遇到不认识的词语，我会马上查词典，____写在本子上。",
                "options": ["接着", "然后"],
                "answer": "然后",
                "explanation": "<strong>然后 (ránhòu):</strong> 表示动作的先后顺序，“查词典”和“写在本子上”是按次序进行的动作，用“然后”更自然。"
            }
        ]
    },

    // 4. 篇章阅读 (语段排序)
    "module_4_text": {
        "level_1_sorting": [
            {
                "id": 1,
                "shuffled_items": [
                    { "tag": "A", "content": "孩子眼中的世界是美丽和奇特的。有一本书叫《新十万个为什么》，现在卖得非常火。" },
                    { "tag": "B", "content": "书里的内容都是儿童想知道的科学知识，相信你女儿一定喜欢读。" },
                    { "tag": "C", "content": "《新十万个为什么》的内容更新，介绍了各种科学知识，包括地球、动物、植物、交通、科学技术、社会和文化等很多方面。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "从描述孩子对世界的好奇引出推荐书籍，然后说明书籍内容适合孩子，最后具体介绍书籍包含的知识面。"
            },
            {
                "id": 2,
                "shuffled_items": [
                    { "tag": "A", "content": "现在的大学生一遇到不明白的问题，可以马上在网上查找答案，几秒钟就把问题解决了，这比我们上学的时候方便多了。" },
                    { "tag": "B", "content": "电脑和互联网技术的发展使学生们的学习方式发生了很多变化，不过天天对着电脑看，眼睛实在受不了。" },
                    { "tag": "C", "content": "不仅是学习方式，而且连生活方式也发生了很大改变。现在越来越多的学生喜欢在网上写日记。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "首先介绍互联网解决问题的便利性，然后提到电脑对学习方式的影响及副作用，最后引申到对生活方式的影响，以网上写日记为例。"
            },
            {
                "id": 3,
                "shuffled_items": [
                    { "tag": "A", "content": "我昨天晚上做了一个特别奇怪的梦，梦到自己正在一座桥上走，走着走着，突然开过来一辆车，非常危险，接着又梦见我跳到车上，跟警察一起抓住了一个坏人。" },
                    { "tag": "B", "content": "每个人都会做梦，区别只是有多有少。有的人睡醒之后还记得梦里的事情，有的人却记不清楚了。" },
                    { "tag": "C", "content": "一般晚上睡觉时，身体感觉到什么，人就容易梦到什么内容。记得有一次，我晚饭吃得太咸，那天晚上就梦见自己到处找商店买矿泉水。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "从一个具体的梦境开始，引出对梦的普遍性讨论，最后用具体的例子解释梦的形成原因。"
            },
            {
                "id": 4,
                "shuffled_items": [
                    { "tag": "A", "content": "现在手机不但价格降低了，而且作用也越来越大，打电话、发短信已经成了人们普遍使用的联系方法。" },
                    { "tag": "B", "content": "除此之外，你还可以用它来听音乐、看电影、阅读、玩儿游戏、付款购物等，这大大方便了人们的生活。" },
                    { "tag": "C", "content": "举一个例子，迷路时，只要用手机地图查一下地址，马上就能知道怎么去那个地点。现在的手机更像是一部可以拿在手中的电脑。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "从手机功能普及开始，接着列举其他多功能，最后以迷路为例说明手机的便利性，总结手机的电脑化趋势。"
            },
            {
                "id": 5,
                "shuffled_items": [
                    { "tag": "A", "content": "21世纪，我们的生活发生了巨大变化，几千公里以外的国家，以前坐船需要几个月，现在乘坐飞机不过是几个小时。" },
                    { "tag": "B", "content": "原来寄信需要好几天，现在连邮局都不用去，只要在家里上网发个电子邮件，用不了一分钟，远处的朋友就能收到，比写信封用的时间都短。" },
                    { "tag": "C", "content": "以前外地的新闻要几天后才能知道，现在只要打开网站，任何信息都可以在第一时间获得。现代科学技术的发展让世界变得越来越小，所以现在人们都把地球叫作“地球村”。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "首先概述21世纪生活巨变和交通变化，接着讲述通信方式的变革，最后总结信息获取的便利性，引出“地球村”概念。"
            }
        ]
    },

    // 5. 跟读练习
    "module_4_repetition": {
        "sentences": [
            "上次女儿问我飞机是怎么起飞和降落的，真不知道该怎么回答她。",
            "《新十万个为什么》的内容更新，介绍了各种科学知识，包括交通和科学技术。",
            "她这么小，我不知道她是否能读懂。",
            "现在的大学生一遇到不明白的问题，可以马上在网上查找答案，几秒钟就把问题解决了。",
            "天天对着电脑看，眼睛实在受不了。",
            "可以在网上写日记，这样可以让朋友及时了解自己的生活。",
            "我昨天晚上做了一个特别奇怪的梦，梦到自己正在一座桥上走。",
            "我晚饭吃得太咸，那天晚上就梦见自己到处找商店买矿泉水。",
            "手机除了能打电话、发短信，除此之外，还可以听音乐、看电影、付款购物。",
            "迷路时，只要用手机地图查一下地址，马上就能知道怎么去那个地点。",
            "现在连邮局都不用去，只要在家里上网发个电子邮件，远处的朋友就能收到。",
            "现代科学技术的发展让世界变得越来越小，所以现在人们都把地球叫作“地球村”。"
        ]
    },

    // 6. 动态词云
    "module_5_wordcloud": {
        "title": "💬 21世纪的科技，哪方面让你觉得最神奇？",
        "hint": "请扫码发送1-2个词描述（如：人工智能、手机、互联网、太空探索...）"
    },

    // 7. 极限挑战
    "module_6_challenge": {
        "challenge_sets": [
            { "id": 1, "keywords": ["降落", "火", "作者"], "framework": "那本很____的书，____是谁？我想知道飞机是怎么起飞和____的。", "translation": "Who is the author of that very popular book? I want to know how planes take off and land." },
            { "id": 2, "keywords": ["交通", "技术", "是否"], "framework": "随着科技的发展，未来的____会使用什么新____？你____相信？", "translation": "With the development of technology, what new technologies will future transportation use? Do you believe it?" },
            { "id": 3, "keywords": ["受不了", "日记", "密码"], "framework": "我眼睛____了，不想再对着电脑了。把我的____本加上____，不给别人看。", "translation": "My eyes can't take it anymore, I don't want to stare at the computer. I'll add a password to my diary, not letting anyone else see it." },
            { "id": 4, "keywords": ["危险", "警察", "抓"], "framework": "我在梦里看到一座____，非常____，后来____来了，把坏人____住了。", "translation": "I dreamed of a bridge, which was very dangerous. Later, the police came and caught the bad guy." },
            { "id": 5, "keywords": ["付款", "迷路", "地址"], "framework": "我____的时候，用手机查了一下____，然后很快就找到了可以____的商店。", "translation": "When I got lost, I used my phone to check the address, and then quickly found a store where I could pay." },
            { "id": 6, "keywords": ["世纪", "网站", "信息"], "framework": "21____，通过____我们可以获得各种各样的____，非常方便。", "translation": "In the 21st century, through websites, we can get all kinds of information, which is very convenient." }
        ]
    },

    // 8. 找茬大师（文字辨错）
    "module_7_find_error": {
        "questions": [
            { "sentence": "飞机顺利降落在北京机场。", "error": "", "correct": "(此句语法正确)", "explanation": "“降落”是动词，可以直接跟地点状语。" },
            { "sentence": "这本书的作者名字我没记住。", "error": "", "correct": "(此句语法正确)", "explanation": "“作者名字”作宾语，语法无误。" },
            { "sentence": "你是否同意了这次旅行？", "error": "", "correct": "(此句语法正确)", "explanation": "“是否”用于疑问句，表示选择，正确。" },
            { "sentence": "他疼的受不了。", "error": "疼的受不了", "correct": "疼得受不了", "explanation": "“得”应是补语助词，表示程度，而不是定语助词“的”。" },
            { "sentence": "我每天写日记网上。", "error": "写日记网上", "correct": "在网上写日记", "explanation": "地点状语“在网上”应放在动词“写”前面。" },
            { "sentence": "他接着然后又考上了大学。", "error": "接着然后", "correct": "接着 / 然后", "explanation": "“接着”和“然后”都表示顺序，但用法不同，不能同时使用。" },
            { "sentence": "除了手机能打电话，除此以外还能听音乐。", "error": "除了...除此以外", "correct": "手机除了能打电话，还能听音乐。", "explanation": "“除了...以外”和“除此之外”语义重复，二选一即可。" },
            { "sentence": "人们都叫地球“地球村”。", "error": "都叫地球“地球村”", "correct": "都把地球叫作“地球村”", "explanation": "动词“叫作”常与“把”字句搭配，形成“把A叫作B”的结构。" }
        ]
    },

    // 9. 终极对决 Jeopardy (诸神之战)
    "module_8_jeopardy": {
        "categories": ["词语应用", "课文理解", "语法造句"],
        "teamNames": { "wei": "魏国", "shu": "#10b981", "wu": "#3b82f6" },
        "teamColors": { "wei": "#ef4444", "shu": "#10b981", "wu": "#3b82f6" },
        "questions": {
            "q_0_10": { "question": "请填空：这首歌最近很____。", "question_en": "Fill in the blank: This song has been very ____ recently.", "answer": "火" },
            "q_0_20": { "question": "请填空：我最受不了____骗我。", "question_en": "Fill in the blank: I can't stand ____ lying to me.", "answer": "好朋友" },
            "q_0_30": { "question": "请填空：请留下您的联系____。", "question_en": "Fill in the blank: Please leave your contact ____.", "answer": "方式" },
            "q_1_10": { "question": "课文一中，王静给孙月推荐的是一本什么书？", "question_en": "In Text 1, what book did Wang Jing recommend to Sun Yue?", "answer": "《新十万个为什么》" },
            "q_1_20": { "question": "课文二中，人们遇到问题时，首先想到的是什么？", "question_en": "In Text 2, what do people first think of when they encounter problems?", "answer": "上网找答案" },
            "q_1_30": { "question": "课文三中，王静为什么会梦见自己找矿泉水？", "question_en": "In Text 3, why did Wang Jing dream of looking for mineral water?", "answer": "因为她晚饭吃得太咸了。" },
            "q_2_10": { "question": "用“是否”造一个句子。", "question_en": "Make a sentence with '是否'.", "answer": "我想知道他是否会来参加我的生日派对。" },
            "q_2_20": { "question": "用“受不了”造一个句子。", "question_en": "Make a sentence with '受不了'.", "answer": "北京的夏天太热了，我实在受不了。" },
            "q_2_30": { "question": "用“除此以外”造一个句子。", "question_en": "Make a sentence with '除此以外'.", "answer": "他会说英语和法语，除此以外，他还会说一点儿汉语。" }
        },
        "extra_pk_questions": [
            { "type": "快问快答", "q": "21世纪，人们把地球叫作什么？", "q_en": "What do people call Earth in the 21st century?", "a": "地球村" },
            { "type": "抢答", "q": "现代手机的功能有哪些？请举出三个。", "q_en": "What are the functions of modern mobile phones? Please list three.", "a": "打电话、发短信、听音乐、看电影、阅读、玩儿游戏、付款购物、查地址等。" }
        ]
    },

    // 10. 词义搭配测验
    "module_9_vocab_practice": [
        { "question": "飞机正在慢慢____。", "options": ["降落", "火", "交通", "技术"], "answer": "降落" },
        { "question": "这首歌最近非常____。", "options": ["安全", "火", "咸", "危险"], "answer": "火" },
        { "question": "这本书的____是谁？", "options": ["警察", "作者", "方式", "世纪"], "answer": "作者" },
        { "question": "城市的____情况很复杂。", "options": ["技术", "方式", "交通", "信息"], "answer": "交通" },
        { "question": "他的驾驶____非常高超。", "options": ["交通", "信息", "方式", "技术"], "answer": "技术" },
        { "question": "我不知道他____会同意。", "options": ["接着", "仍然", "是否", "普遍"], "answer": "是否" },
        { "question": "一分钟有60____。", "options": ["座", "公里", "秒", "米"], "answer": "秒" },
        { "question": "请告诉我你的联系____。", "options": ["技术", "日记", "信息", "方式"], "answer": "方式" },
        { "question": "疼得我____。", "options": ["允许", "危险", "受不了", "咸"], "answer": "受不了" },
        { "question": "我每天晚上都写____。", "options": ["信息", "日记", "网站", "地址"], "answer": "日记" },
        { "question": "请注意____。", "options": ["危险", "密码", "安全", "允许"], "answer": "安全" },
        { "question": "你手机的____是多少？", "options": ["地址", "地点", "密码", "信息"], "answer": "密码" },
        { "question": "学校不____学生抽烟。", "options": ["受不了", "抓", "允许", "举"], "answer": "允许" },
        { "question": "这____山很高。", "options": ["个", "条", "片", "座"], "answer": "座" },
        { "question": "不要做____的事情。", "options": ["安全", "火", "危险", "咸"], "answer": "危险" },
        { "question": "____抓住了坏人。", "options": ["作者", "司机", "警察", "医生"], "answer": "警察" },
        { "question": "猫____老鼠。", "options": ["举", "收", "抓", "付款"], "answer": "抓" },
        { "question": "今天的菜有点儿____，吃饭一直想喝水。", "options": ["甜", "酸", "辣", "咸"], "answer": "咸" },
        { "question": "他看完电影____去吃饭了。", "options": ["接", "仍然", "然后", "以后"], "answer": "以后" },
        { "question": "一共198元，请问您怎么____？", "options": ["举", "收", "付款", "抓"], "answer": "付款" },
        { "question": "请大家____手发言。", "options": ["抓", "收", "付", "举"], "answer": "举" },
        { "question": "我在森林里____了。", "options": ["安全", "危险", "火", "迷路"], "answer": "迷路" },
        { "question": "请告诉我你的家庭____。", "options": ["地点", "方式", "信息", "地址"], "answer": "地址" },
        { "question": "会议的____在三楼。", "options": ["地址", "方式", "信息", "地点"], "answer": "地点" },
        { "question": "21____是信息时代。", "options": ["时代", "年代", "世纪", "时间"], "answer": "世纪" },
        { "question": "我去____寄信。", "options": ["银行", "医院", "学校", "邮局"], "answer": "邮局" },
        { "question": "我____到一封电子邮件。", "options": ["发", "写", "看", "收"], "answer": "收" },
        { "question": "请把信装进____里。", "options": ["网站", "地址", "日记", "信封"], "answer": "信封" },
        { "question": "爷爷每天早上都会打开新闻____看新闻。", "options": ["邮局", "地址", "地点", "网站"], "answer": "网站" },
        { "question": "这个____对我很重要，谢谢你告诉我。", "options": ["交通", "技术", "方式", "信息"], "answer": "信息" }
    ],

    // 11. 课文篇章理解
    "module_10_comprehension": [
        {
            "sectionTitle": "课文一：王静给孙月推荐一本书",
            "textContext": "孙月：上次女儿问我飞机是怎么起飞和降落的，真不知道该怎么回答她，她现在总是有各种各样的“为什么”。\n王静：孩子眼中的世界是美丽和奇特的。有一本书叫《新十万个为什么》，现在卖得非常火。书里的内容都是儿童想知道的科学知识，相信你女儿一定喜欢读。\n孙月：难道它和我们小时候看的《十万个为什么》不一样吗？作者是谁啊？\n王静：作者的名字我没记住。《新十万个为什么》的内容更新，介绍了各种科学知识，包括地球、动物、植物、交通、科学技术、社会和文化等很多方面。\n孙月：太好了！不过她这么小，我不知道她是否能读懂。\n王静：放心吧，这本书的语言简单易懂，一定能增长孩子的科学知识。",
            "questions": [
                { "question": "王静推荐的是一本什么书？", "options": ["童话故事", "科学知识书", "历史书", "小说"], "answer": "科学知识书" },
                { "question": "孙月担心女儿什么？", "options": ["不喜欢这本书", "读不懂这本书", "书太贵", "书太厚"], "answer": "读不懂这本书" }
            ]
        },
        {
            "sectionTitle": "课文二：李老师和高老师在聊电脑和互联网技术的发展",
            "textContext": "李老师：现在的大学生一遇到不明白的问题，可以马上在网上查找答案，几秒钟就把问题解决了，这比我们上学的时候方便多了。\n高老师：现在的人们，尤其是大学生开始普遍使用电脑，他们的生活已经离不开电脑。据调查，70%的人遇到问题时，首先想到的就是上网找答案。\n李老师：电脑和互联网技术的发展使学生们的学习方式发生了很多变化，不过天天对着电脑看，眼睛实在受不了。\n高老师：不仅是学习方式，而且连生活方式也发生了很大改变。现在越来越多的学生喜欢在网上写日记，他们说这样可以让朋友及时了解自己的生活。\n李老师：这个办法不错，既能方便大家的交流，还能节约用纸，保护环境。但是如果别人都能看到我的日记的话，多不安全啊！\n高老师：放心吧，可以给网上的日记加密码，那样只有得到了允许，别人才能看到。",
            "questions": [
                { "question": "现在大学生遇到不明白的问题会怎么做？", "options": ["问老师", "查字典", "上网找答案", "问同学"], "answer": "上网找答案" },
                { "question": "高老师认为网上写日记有什么好处？", "options": ["能赚钱", "能保护隐私", "方便交流和节约用纸", "能找到工作"], "answer": "方便交流和节约用纸" }
            ]
        },
        {
            "sectionTitle": "课文三：王静和孙月再聊关于梦的情况",
            "textContext": "王静：我昨天晚上做了一个特别奇怪的梦，梦到自己正在一座桥上走，走着走着，突然开过来一辆车，非常危险，接着又梦见我跳到车上，跟警察一起抓住了一个坏人。\n孙月：奇怪，你怎么总能记住自己做了什么梦？我好像从来没做过梦。\n王静：每个人都会做梦，区别只是有多有少。有的人睡醒之后还记得梦里的事情，有的人却记不清楚了。你之所以觉得从来没做过梦，只不过是忘记了。\n孙月：你说的有道理，我一般都是一觉睡到天亮。很多人认为做梦是上天要告诉他们将来会发生的一些事情，可能上天不想让我知道吧。\n王静：一般晚上睡觉时，身体感觉到什么，人就容易梦到什么内容。记得有一次，我晚饭吃得太咸，那天晚上就梦见自己到处找商店买矿泉水。\n孙月：很多人都试着对梦进行解释，有些人甚至专门写过这方面的书，可惜到现在仍然没有一个科学的说法。",
            "questions": [
                { "question": "孙月为什么觉得自己从来没做过梦？", "options": ["睡眠不好", "不记得了", "不爱做梦", "梦不真实"], "answer": "不记得了" },
                { "question": "王静梦见找矿泉水的原因是什么？", "options": ["口渴", "晚饭吃得太咸", "白天想喝水", "梦中情景"], "answer": "晚饭吃得太咸" }
            ]
        },
        {
            "sectionTitle": "课文四：现在手机不但价格降低了，而且作用也越来越大",
            "textContext": "现在手机不但价格降低了，而且作用也越来越大，打电话、发短信已经成了人们普遍使用的联系方法。除此之外，你还可以用它来听音乐、看电影、阅读、玩儿游戏、付款购物等，这大大方便了人们的生活。举一个例子，迷路时，只要用手机地图查一下地址，马上就能知道怎么去那个地点。现在的手机更像是一部可以拿在手中的电脑，现代人的生活已经越来越离不开手机了。",
            "questions": [
                { "question": "手机的主要联系方式有哪些？", "options": ["写信和发邮件", "打电话和发短信", "用微信和QQ", "面对面交流"], "answer": "打电话和发短信" },
                { "question": "文章认为手机最像什么？", "options": ["照相机", "游戏机", "电脑", "电视"], "answer": "电脑" }
            ]
        },
        {
            "sectionTitle": "课文五：21世纪，我们的生活发生了巨大变化",
            "textContext": "21世纪，我们的生活发生了巨大变化，几千公里以外的国家，以前坐船需要几个月，现在乘坐飞机不过是几个小时。原来寄信需要好几天，现在连邮局都不用去，只要在家里上网发个电子邮件，用不了一分钟，远处的朋友就能收到，比写信封用的时间都短。以前外地的新闻要几天后才能知道，现在只要打开网站，任何信息都可以在第一时间获得。现代科学技术的发展让世界变得越来越小，所以现在人们都把地球叫作“地球村”。",
            "questions": [
                { "question": "现在去几千公里外的国家需要多长时间？", "options": ["几个月", "几天", "几个小时", "一分钟"], "answer": "几个小时" },
                { "question": "现在人们怎么获取外地新闻最快？", "options": ["看报纸", "听广播", "打开网站", "问朋友"], "answer": "打开网站" }
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
window.LESSONS_DATA['hsk4-18'] = lessonData;
window.lessonData = lessonData; // For direct access during development

// Node.js export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lessonData;
}