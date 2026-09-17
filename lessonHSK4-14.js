/*
================================================================
== 课程数据文件 (Lesson Data File)
== 第十四课: 保护地球母亲
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
    "lesson": "HSK 4 - 第十四课《保护地球母亲》",
    "students": [ "列夏", "丽莎", "明溪", "星悦", "德昊", "任华", "梦航", "基里尔", "萨~沙~", "萨沙", "达铭", "安德烈", "纪嘉", "高斯佳", "瓦列", "Maiia" ], // Reusing from L12/L13 as L14 doesn't specify unique students

    "pinyin_map": {
        "出差": "chūchāi", "毛巾": "máojīn", "牙膏": "yágāo", "牙刷": "yáshuā", "重": "zhòng",
        "行": "xíng", "省": "shěng", "污染": "wūrǎn", "卫生间": "wèishēngjiān", "脏": "zāng",
        "抱歉": "bàoqiàn", "空": "kōng", "扔": "rēng", "速度": "sùdù", "地球": "dìqiú",
        "停": "tíng", "得意": "déyì", "目的": "mùdì", "暖": "nuǎn", "塑料袋": "sùliàodài",
        "于是": "yúshì", "鼓励": "gǔlì", "拒绝": "jùjué", "减少": "jiǎnshǎo", "数量": "shùliàng",
        "温度": "wēndù", "乘坐": "chéngzuò", "丢": "diū", "垃圾桶": "lājītǒng", "美丽": "měilì",
        "环境": "huánjìng", "免费": "miǎnfèi", "严重": "yánzhòng", "气候": "qìhòu", "环保": "huánbǎo",
        "节约": "jiéyuē", "习惯": "xíguàn", "堵车": "dǔchē" // Added key terms from texts
    },

    "translation_dict": {
        "出差": "go on a business trip", "毛巾": "towel", "牙膏": "toothpaste", "牙刷": "toothbrush", "重": "heavy",
        "行": "O.K.; all right", "省": "save; spare", "污染": "pollute", "卫生间": "bathroom; washroom", "脏": "dirty",
        "抱歉": "be sorry; feel apologetic", "空": "empty", "扔": "throw; toss", "速度": "speed", "地球": "earth",
        "停": "stop", "得意": "proud of oneself; pleased with oneself", "目的": "purpose; aim; goal", "暖": "warm", "塑料袋": "plastic bag",
        "于是": "hence; therefore", "鼓励": "to encourage", "拒绝": "to refuse; to reject", "减少": "to reduce; to decrease", "数量": "quantity; amount",
        "温度": "temperature", "乘坐": "to take (a vehicle); to ride (in a vehicle)", "丢": "to throw; to cast", "垃圾桶": "dustbin; trash can", "美丽": "beautiful",
        "环境": "environment", "免费": "free of charge", "严重": "serious; grave", "气候": "climate", "环保": "environmental protection",
        "节约": "save", "习惯": "habit", "堵车": "traffic jam"
    },

    "collocations": [
        { "left": "去", "right": "出差" }, { "left": "到外地", "right": "出差" },
        { "left": "箱子很", "right": "重" }, { "left": "省", "right": "钱" }, { "left": "省", "right": "时间" },
        { "left": "环境", "right": "污染" }, { "left": "污染", "right": "环境" }, { "left": "污染", "right": "空气" },
        { "left": "卫生间很", "right": "脏" }, { "left": "感到", "right": "抱歉" }, { "left": "瓶子", "right": "空了" },
        { "left": "扔", "right": "垃圾" }, { "left": "最快的", "right": "速度" }, { "left": "保护", "right": "地球" },
        { "left": "关", "right": "灯" }, { "left": "得意的", "right": "样子" }, { "left": "学习", "right": "目的" },
        { "left": "气候", "right": "变暖" }, { "left": "塑料", "right": "袋" }, { "left": "鼓励", "right": "大家" },
        { "left": "拒绝", "right": "邀请" }, { "left": "减少", "right": "浪费" }, { "left": "减少", "right": "污染" },
        { "left": "使用", "right": "数量" }, { "left": "室内", "right": "温度" }, { "left": "乘坐", "right": "地铁" },
        { "left": "丢进", "right": "垃圾桶" }, { "left": "变得更", "right": "美丽" }, { "left": "节约", "right": "用电" },
        { "left": "养成", "right": "习惯" }, { "left": "交通", "right": "堵车" }
    ],

    // 1. 词汇基础模块
    "module_1_vocab": {
        "pinyin_match": [
            ["出差", "毛巾", "牙膏", "牙刷", "重", "行"],
            ["省", "污染", "卫生间", "脏", "抱歉", "空"],
            ["扔", "速度", "地球", "停", "得意", "目的"],
            ["暖", "塑料袋", "于是", "鼓励", "拒绝", "减少"],
            ["数量", "温度", "乘坐", "丢", "垃圾桶", "美丽"]
        ],
        "char_match": [
            ["出差", "毛巾", "牙膏", "牙刷", "重", "行"],
            ["省", "污染", "卫生间", "脏", "抱歉", "空"],
            ["扔", "速度", "地球", "停", "得意", "目的"],
            ["暖", "塑料袋", "于是", "鼓励", "拒绝", "减少"],
            ["数量", "温度", "乘坐", "丢", "垃圾桶", "美丽"]
        ],
        "guess_words": [
            "出差", "毛巾", "牙膏", "牙刷", "重", "行", "省", "污染", "卫生间", "脏",
            "抱歉", "空", "扔", "速度", "地球", "停", "得意", "目的", "暖", "塑料袋",
            "于是", "鼓励", "拒绝", "减少", "数量", "温度", "乘坐", "丢", "垃圾桶", "美丽"
        ]
    },

    // 2. 词汇操练
    "module_2_vocab_drill": {
        "word_bomb": [
            { "word": "污染", "img_url": "https://images.unsplash.com/photo-1549445100-36d7a4b1f61d?w=400", "en_hint": "pollution" },
            { "word": "卫生间", "img_url": "https://images.unsplash.com/photo-1579737402808-1153e7c87c7e?w=400", "en_hint": "bathroom" },
            { "word": "地球", "img_url": "https://images.unsplash.com/photo-1618337130541-11e2f38d3b5b?w=400", "en_hint": "Earth" },
            { "word": "塑料袋", "img_url": "https://images.unsplash.com/photo-1601004183427-024507000e3f?w=400", "en_hint": "plastic bag" },
            { "word": "垃圾桶", "img_url": "https://images.unsplash.com/photo-1573046756611-399086e11500?w=400", "en_hint": "trash can" },
            { "word": "美丽", "img_url": "https://images.unsplash.com/photo-1502652194957-c3cf6d6287c8?w=400", "en_hint": "beautiful" },
            { "word": "拒绝", "img_url": "https://images.unsplash.com/photo-1542385989-10657c913501?w=400", "en_hint": "refuse" },
            { "word": "减少", "img_url": "https://images.unsplash.com/photo-1517441589139-27083232cf62?w=400", "en_hint": "decrease" }
        ],
        "guess_words": [
            { "target_word": "出差" }, { "target_word": "毛巾" }, { "target_word": "重" },
            { "target_word": "抱歉" }, { "target_word": "速度" }, { "target_word": "目的" },
            { "target_word": "鼓励" }, { "target_word": "数量" }, { "target_word": "温度" }
        ],
        "blind_box_spinner": [
            { "words": [{ "text": "污染" }, { "text": "环境" }, { "text": "地球" }] },
            { "words": [{ "text": "节约" }, { "text": "省钱" }, { "text": "省时间" }] },
            { "words": [{ "text": "垃圾桶" }, { "text": "扔" }, { "text": "丢" }] },
            { "words": [{ "text": "得意" }, { "text": "目的" }, { "text": "态度" }] } // Added attitude for variety
        ]
    },

    // 3. 语法逻辑多关卡
    "module_3_grammar": {
        "grammar_points": [
            {
                "grammar_point_name": "动词/副词：够",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["客", "人", "来了，", "中", "国", "人", "一定", "要", "把", "家", "里", "最好", "吃", "的", "东西", "拿", "出来", "请", "客", "人", "吃，", "并且", "让", "客", "人", "吃", "够、", "吃", "饱。"], "correct_answer": "客人来了，中国人一定要把家里最好的东西拿出来请客人吃，并且让客人吃够、吃饱。", "en_hint": "When guests come, Chinese people must bring out the best food at home for guests to eat, and make sure they eat enough and are full." },
                        { "chunks": ["不用", "拿", "这些，", "宾馆", "都", "会", "免费", "提供", "的。", "再", "说，", "箱子", "已经", "够", "重", "的", "了！"], "correct_answer": "不用拿这些，宾馆都会免费提供的。再说，箱子已经够重的了！", "en_hint": "No need to bring these, the hotel will provide them for free. Besides, the suitcase is heavy enough already!" }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1533035336149-a22c50543e3f?w=400", // Person looking at empty wallet
                            "hint": "用“够”表示钱不够。",
                            "en_hint": "Use '够' to say not enough money.",
                            "keywords": ["钱", "不够", "买"],
                            "reference_answer": "这个手机太贵了，我的钱不够买。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你和朋友在饭馆点菜，朋友问你菜够不够，你怎么用“够”来回答？",
                            "en_scenario": "You are ordering food with a friend. How would you use '够' to answer if there's enough food?",
                            "reference": "我觉得菜已经够了，再点就吃不完了。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "介词：以",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["经理", "您", "放心，", "我", "一定", "以", "最", "快", "的", "速度", "完成。"], "correct_answer": "经理您放心，我一定以最快的速度完成。", "en_hint": "Manager, don't worry, I will definitely complete it at the fastest speed." },
                        { "chunks": ["老", "师", "应该", "以", "最", "简单", "的", "语言", "回答", "学", "生", "的", "问题。"], "correct_answer": "老师应该以最简单的语言回答学生的问题。", "en_hint": "Teachers should answer students' questions in the simplest language." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400", // People in a meeting, focused
                            "hint": "用“以”表示以什么为主要目的。",
                            "en_hint": "Use '以' to express taking something as the main purpose.",
                            "keywords": ["以", "工作", "为主"],
                            "reference_answer": "我们开会要以解决问题为主，不要浪费时间。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你是一位老师，你的学生对学习汉语不感兴趣。请你用“以”向学生解释，你需要想办法引起他们的兴趣。",
                            "en_scenario": "You are a teacher and your students are not interested in learning Chinese. Use '以' to explain that you need to find ways to attract their interest.",
                            "reference": "老师经常要想一些有意思的教学方法，以引起同学们的兴趣。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "连词：既然",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["既然", "塑料袋", "会", "污染", "环境，", "就", "应该", "减少", "使用", "塑料袋。"], "correct_answer": "既然塑料袋会污染环境，就应该减少使用塑料袋。", "en_hint": "Since plastic bags pollute the environment, their use should be reduced." },
                        { "chunks": ["既然", "明天", "晚上", "公司", "会", "关灯", "停电，", "那么", "我们", "肯定", "不用", "加班", "了。"], "correct_answer": "既然明天晚上公司会关灯停电，那么我们肯定不用加班了。", "en_hint": "Since the company will turn off the lights and cut power tomorrow night, we definitely won't have to work overtime." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1507925921958-818a7a275467?w=400", // Path diverging
                            "hint": "用“既然”表达既然选择了一条路，就坚持下去。",
                            "en_hint": "Use '既然' to express 'since you've chosen a path, stick to it'.",
                            "keywords": ["既然", "选择", "坚持"],
                            "reference_answer": "既然你选择了这条路，就应该坚持走下去。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你的朋友抱怨一件事情已经无法改变。请你用“既然”来安慰他。",
                            "en_scenario": "Your friend complains about something that cannot be changed. Use '既然' to comfort him.",
                            "reference": "有些事情过去了就是过去了，既然不能改变，我们就只能想办法走好以后的路。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "连词：于是",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["由于", "天气", "的", "原因，", "飞机", "无法", "按时", "起飞，", "于是，", "马克", "不得", "不", "改变", "计划，", "明天", "再", "走。"], "correct_answer": "由于天气的原因，飞机无法按时起飞，于是，马克不得不改变计划，明天再走。", "en_hint": "Due to the weather, the plane couldn't take off on time, so Mark had to change his plan and leave tomorrow." },
                        { "chunks": ["我", "看见", "路", "上", "有", "一家", "咖啡店，", "于是", "进去", "买", "了", "一杯", "咖啡。"], "correct_answer": "我看见路上有一家咖啡店，于是进去买了一杯咖啡。", "en_hint": "I saw a coffee shop on the road, so I went in and bought a cup of coffee." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1521405924361-b44fef49f99d?w=400", // Someone looking at a map, then deciding to go
                            "hint": "用“于是”描述看到指示牌后决定去一个地方。",
                            "en_hint": "Use '于是' to describe deciding to go somewhere after seeing a sign.",
                            "keywords": ["看到", "指示牌", "于是", "决定"],
                            "reference_answer": "我看到前方有旅游区的指示牌，于是决定进去看看。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你和朋友在逛街，看到一家新开的餐厅，你俩都觉得很有趣。请用“于是”描述你们接下来的行动。",
                            "en_scenario": "You and a friend are shopping and see a new restaurant that looks interesting. Use '于是' to describe what you do next.",
                            "reference": "我们都觉得那家新餐厅看起来很有趣，于是决定进去尝尝。"
                        }
                    ]
                }
            }
        ],
        "synonym_distinction": [
            { "sentence": "她发现门没关，____打开门进去了。", "options": ["于是", "因此"], "answer": "于是", "explanation": "<strong>于是:</strong> 表示前一个动作或情况直接导致后一个动作或情况的发生，强调时间上的紧密衔接或顺理成章的下一步。<br><strong>因此:</strong> 表示因果关系，强调后半句是前半句的逻辑结果或结论，不一定强调动作的连续性。" },
            { "sentence": "他坚持锻炼，____身体一直很健康。", "options": ["于是", "因此"], "answer": "因此", "explanation": "<strong>因此:</strong> 强调“身体健康”是“坚持锻炼”的长期结果和结论。<br><strong>于是:</strong> 不适合用于这种表示总结性、长期结果的语境。" },
            { "sentence": "外面的雪下得特别大，大家都很兴奋，____都跑到外面去玩儿雪。", "options": ["于是", "因此"], "answer": "于是", "explanation": "“大家都很兴奋”直接导致了“跑到外面玩雪”的动作，强调了动作的连续性。" },
            { "sentence": "他感到不舒服，____请假回家了。", "options": ["于是", "因此"], "answer": "于是", "explanation": "“感到不舒服”直接导致了“请假回家”这个动作的发生。" }
        ]
    },

    // 4. 篇章阅读 (语段排序)
    "module_4_text": {
        "level_1_sorting": [
            {
                "id": 1,
                "shuffled_items": [
                    { "tag": "A", "content": "他三岁跟父亲母亲一起来到这儿，就再也没离开过这里。" },
                    { "tag": "B", "content": "因此，他对这个地方感情很深。" },
                    { "tag": "C", "content": "我们都很喜欢听他讲关于这里的老故事。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "先交代背景（没离开过），然后引出结果（感情深），最后补充细节（喜欢听故事）。"
            },
            {
                "id": 2,
                "shuffled_items": [
                    { "tag": "A", "content": "自从有了这个活动，越来越多的人开始关注环保问题。" },
                    { "tag": "B", "content": "“地球一小时”活动从2007年开始，每年都会举行。" },
                    { "tag": "C", "content": "它的目的是提醒人们节约用电，保护地球母亲。" }
                ],
                "correct_order": ["B", "C", "A"],
                "explanation": "先介绍活动的起源和频率，然后说明活动的目的，最后讲活动产生的影响。"
            }
        ]
    },

    // 5. 跟读练习
    "module_4_repetition": {
        "sentences": [
            "不用拿这些，宾馆都会免费提供的。再说，箱子已经够重的了。",
            "你不是一直说要保护环境吗？现在就从身边的小事做起吧。",
            "我一定以最快的速度完成。",
            "既然明天晚上公司会关灯停电，那么我们肯定不用加班了。",
            "塑料袋给人们的生活带来方便，受到人们的普遍欢迎，可是，它的大量使用也带来了严重的环境污染问题。"
        ]
    },

    // 6. 动态词云
    "module_5_wordcloud": {
        "title": "💡 谈谈你认为个人在保护地球环境方面能做些什么。",
        "hint": "请扫码发送1-2个词描述你的想法（如：节约、减少、回收、参与...）"
    },

    // 7. 极限挑战
    "module_6_challenge": {
        "challenge_sets": [
            { "id": 1, "keywords": ["既然", "污染", "省"], "framework": "**既然**塑料袋会**污染**环境，我们平时就应该**省**着用。", "translation": "Since plastic bags pollute the environment, we should use them sparingly in daily life." },
            { "id": 2, "keywords": ["目的", "速度", "美丽"], "framework": "我们保护环境的**目的**是为了让地球变得更**美丽**，需要以最快的**速度**行动起来。", "translation": "Our goal in protecting the environment is to make the Earth more beautiful, and we need to act with the fastest speed." },
            { "id": 3, "keywords": ["于是", "垃圾桶", "习惯"], "framework": "他看到地上有垃圾，**于是**就弯腰把它**丢进垃圾桶**，这真是个好**习惯**。", "translation": "He saw trash on the ground, so he bent down and threw it into the trash can. This is truly a good habit." }
        ]
    },

    // 8. 找茬大师（文字辨错）
    "module_7_find_error": {
        "questions": [
            { "sentence": "这件衣服已经够好看了，不需要再改了。", "error": "", "correct": "（此句语法正确）", "explanation": "“够+形容词+的”表示程度上达到了一定标准，且含有强调意味，此句使用正确。" },
            { "sentence": "他以最简单的方法解决了这个问题。", "error": "", "correct": "（此句语法正确）", "explanation": "“以+方式/手段”表示用某种方式或方法，此句使用正确。" },
            { "sentence": "既然下雨了，我就不去了，因此我不喜欢淋雨。", "error": "因此", "correct": "所以/因为", "explanation": "后半句解释了为什么不去，而不是前一句的逻辑结果。这里“因此”使用不当，应该用“所以”或将语序改为“我不喜欢淋雨，因此下雨了我就不去了。”" },
            { "sentence": "他工作很努力，于是他成功了。", "error": "于是", "correct": "因此", "explanation": "“成功”是“努力工作”的最终结果和结论，用“因此”更合适。“于是”强调动作的紧密衔接或下一步。" }
        ]
    },

    // 9. 终极对决 Jeopardy (诸神之战)
    "module_8_jeopardy": {
        "categories": ["词语应用", "课文理解", "语法造句"],
        "teamNames": { "wei": "魏国", "shu": "蜀国", "wu": "吴国" },
        "teamColors": { "wei": "#ef4444", "shu": "#10b981", "wu": "#3b82f6" },
        "questions": {
            "q_0_10": { "question": "请填空：他明天要去北京____。", "question_en": "Fill in the blank: He is going to Beijing for a ____ tomorrow.", "answer": "出差" },
            "q_0_20": { "question": "请填空：我把我的空瓶子____到垃圾桶里了。", "question_en": "Fill in the blank: I ____ my empty bottle into the trash can.", "answer": "扔" },
            "q_0_30": { "question": "请填空：这次活动的____是提醒人们保护环境。", "question_en": "Fill in the blank: The ____ of this event is to remind people to protect the environment.", "answer": "目的" },
            "q_1_10": { "question": "李进为什么不想带毛巾、牙膏和牙刷去出差？", "question_en": "Why didn't Li Jin want to bring a towel, toothpaste, and toothbrush for his business trip?", "answer": "因为宾馆会免费提供，而且箱子已经够重了。" },
            "q_1_20": { "question": "经理对服务员打扫卫生的要求是什么？", "question_en": "What was the manager's request to the waiter about cleaning?", "answer": "不管客人多不多，生意多忙，都要保证餐厅干净卫生。" },
            "q_1_30": { "question": "“地球一小时”活动的主要目的是什么？", "question_en": "What is the main purpose of the 'Earth Hour' event?", "answer": "提醒人们节约用电，希望引起人们对气候变暖问题的关注。" },
            "q_2_10": { "question": "用“够”造一个句子。", "question_en": "Make a sentence with '够'.", "answer": "这件衣服价格够贵的，我买不起。" },
            "q_2_20": { "question": "用“既然”造一个句子。", "question_en": "Make a sentence with '既然'.", "answer": "既然你已经决定了，那就去做吧。" },
            "q_2_30": { "question": "用“于是”造一个句子。", "question_en": "Make a sentence with '于是'.", "answer": "我感到有点儿饿了，于是走进一家餐厅。" }
        },
        "extra_pk_questions": [
            { "type": "快问快答", "q": "课文中提到，乘坐什么交通工具可以减少空气污染？", "q_en": "What modes of transportation can reduce air pollution, according to the text?", "a": "地铁和公共汽车" },
            { "type": "抢答", "q": "除了少开车，保护环境还可以怎么做？ (说出一点)", "q_en": "Besides driving less, what else can be done to protect the environment? (Name one thing)", "a": "空调温度开高一些 / 出门时关空调和电脑 / 养成把垃圾丢进垃圾桶的习惯 / 节约用电" }
        ]
    },

    // 10. 词义搭配测验
    "module_9_vocab_practice": [
        { "question": "我明天要去上海____。", "options": ["出差", "省", "扔", "美丽"], "answer": "出差" },
        { "question": "他把用过的____和牙刷都放进了包里。", "options": ["毛巾", "速度", "地球", "数量"], "answer": "毛巾" },
        { "question": "这个箱子太____了，我一个人拿不动。", "options": ["重", "空", "脏", "暖"], "answer": "重" },
        { "question": "A: 我们一起去吃饭吧？ B: ____，没问题。", "options": ["行", "抱歉", "得意", "美丽"], "answer": "行" },
        { "question": "为了____钱，他每天都自己做饭。", "options": ["省", "污染", "拒绝", "减少"], "answer": "省" },
        { "question": "工厂排放的废水____了河流。", "options": ["污染", "扔", "鼓励", "丢"], "answer": "污染" },
        { "question": "这个____有点儿脏，需要打扫一下。", "options": ["卫生间", "目的", "塑料袋", "垃圾桶"], "answer": "卫生间" },
        { "question": "我的衣服很____，需要洗一洗了。", "options": ["脏", "空", "重", "暖"], "answer": "脏" },
        { "question": "非常____，我迟到了。", "options": ["抱歉", "得意", "美丽", "行"], "answer": "抱歉" },
        { "question": "这个瓶子是____的，里面没有水。", "options": ["空", "脏", "重", "暖"], "answer": "空" },
        { "question": "请不要随地____垃圾。", "options": ["扔", "污染", "鼓励", "减少"], "answer": "扔" },
        { "question": "他跑步的____很快，我跟不上。", "options": ["速度", "目的", "数量", "温度"], "answer": "速度" },
        { "question": "我们只有一个____，那就是保护环境。", "options": ["目的", "速度", "数量", "温度"], "answer": "目的" },
        { "question": "今天天气很____，出去散步很舒服。", "options": ["暖", "脏", "重", "空"], "answer": "暖" },
        { "question": "超市里已经不提供免费的____了。", "options": ["塑料袋", "毛巾", "牙膏", "牙刷"], "answer": "塑料袋" },
        { "question": "老师经常____我们多读书。", "options": ["鼓励", "拒绝", "减少", "污染"], "answer": "鼓励" },
        { "question": "她____了朋友的邀请，没有去参加派对。", "options": ["拒绝", "鼓励", "减少", "污染"], "answer": "拒绝" },
        { "question": "我们要努力____浪费。", "options": ["减少", "拒绝", "鼓励", "污染"], "answer": "减少" },
        { "question": "今年的水果____比去年多了很多。", "options": ["数量", "速度", "温度", "目的"], "answer": "数量" },
        { "question": "夏天的____很高，要注意防暑。", "options": ["温度", "速度", "数量", "目的"], "answer": "温度" },
        { "question": "他每天____地铁上班。", "options": ["乘坐", "扔", "丢", "停"], "answer": "乘坐" },
        { "question": "请把垃圾____进垃圾桶。", "options": ["丢", "扔", "乘坐", "停"], "answer": "丢" },
        { "question": "这个公园的景色非常____。", "options": ["美丽", "得意", "抱歉", "脏"], "answer": "美丽" },
        { "question": "我们只有一个____，那就是保护____。", "options": ["地球, 环境", "目的, 速度", "数量, 温度", "生活, 习惯"], "answer": "地球, 环境" }
    ],

    // 11. 课文篇章理解
    "module_10_comprehension": [
        {
            "sectionTitle": "课文一：李进的环保意识",
            "textContext": "王静：这是明天你出差要带的毛巾、牙膏和牙刷，把它们放到箱子里吧。\n李进：不用拿这些，宾馆都会免费提供的。再说，箱子已经够重的了。\n王静：我当然知道宾馆里有。你不是一直说要保护环境吗？现在就从身边的小事做起吧。\n李进：行，没问题。我明天上午10点的飞机，你能开车把我送到机场吗？\n王静：那个时间路上堵车多严重啊！你还是坐地铁去机场吧。这样不仅省油钱，而且还不会污染空气。\n李进：好，那就听你的。",
            "questions": [
                { "question": "李进为什么最初不想带自己的洗漱用品？", "options": ["觉得麻烦", "宾馆免费提供且箱子重", "他忘记了", "他没有洗漱用品"], "answer": "宾馆免费提供且箱子重" },
                { "question": "王静建议李进坐地铁去机场的原因是什么？", "options": ["省油钱且不会污染空气", "李进喜欢坐地铁", "地铁速度快", "王静不想开车"], "answer": "省油钱且不会污染空气" }
            ]
        },
        {
            "sectionTitle": "课文二：餐厅卫生问题",
            "textContext": "经理：小王，卫生间怎么那么脏啊？这会给客人留下不好的印象，快去打扫一下。\n服务员：经理，实在抱歉。今天店里太忙了，我还没来得及打扫。\n经理：那张桌子下面还有一些空饮料瓶子和纸盒子。\n服务员：好的，我马上就去把它们扔掉。\n经理：以后你一定得注意这个问题，不管客人多多，生意多忙，我们都要保证餐厅干净卫生。\n服务员：经理您放心，我一定以最快的速度完成。不过咱们真的应该再多招聘几个服务员了。",
            "questions": [
                { "question": "服务员没有及时打扫卫生间的原因是什么？", "options": ["她太懒了", "她忘记了", "店里太忙了", "她身体不舒服"], "answer": "店里太忙了" },
                { "question": "经理强调了什么重要的要求？", "options": ["提高服务速度", "保证餐厅干净卫生", "多招聘服务员", "多卖饮料"], "answer": "保证餐厅干净卫生" }
            ]
        },
        {
            "sectionTitle": "课文三：地球一小时",
            "textContext": "孙月：早上听新闻说明天有一个叫“地球一小时”的活动，你对这个活动了解吗？\n王静：这个活动年年都有，最早是从2007年开始的。明天晚上很多人都会关灯一小时，支持这个活动。你没看到门口的通知吗？我们公司也参加了。\n孙月：真的吗？太好了！既然明天晚上公司会关灯停电，那么我们肯定不用加班了。\n王静：看你得意的样子！还以为你高兴是为了支持环保，原来是因为不用加班啊！\n孙月：环境保护我当然也支持了！对了，为什么会有这么一个活动啊？\n王静：其实目的挺简单的，就是提醒人们节约用电，希望引起人们对气候变暖问题的关注。",
            "questions": [
                { "question": "“地球一小时”活动开始于哪一年？", "options": ["2000年", "2007年", "2010年", "今年"], "answer": "2007年" },
                { "question": "孙月最初为什么那么高兴？", "options": ["可以放假", "支持环保", "不用加班", "可以参加活动"], "answer": "不用加班" }
            ]
        },
        {
            "sectionTitle": "课文四：塑料袋与环保",
            "textContext": "塑料袋给人们的生活带来方便，受到人们的普遍欢迎，可是，它的大量使用也带来了严重的环境污染问题。于是，一些国家规定，超市、商场不能为顾客提供免费塑料袋，并且鼓励大家购买可以多次使用的购物袋。我们每个人都有责任保护环境，因此，请大家节约使用塑料袋，或者购物时自备购物袋，甚至拒绝使用塑料袋。虽然这是一件很小的事，但这样做可以减少塑料袋的使用数量，对环境保护有很大的作用。",
            "questions": [
                { "question": "塑料袋给人们生活带来了什么方便？", "options": ["可以装很多东西", "方便携带", "价格便宜", "课文中没说具体方便"], "answer": "课文中没说具体方便" }, // Text says "带来方便", doesn't specify how.
                { "question": "为了减少塑料袋污染，一些国家采取了什么措施？", "options": ["禁止使用塑料袋", "规定超市不能提供免费塑料袋", "惩罚使用塑料袋的人", "鼓励人们自己生产塑料袋"], "answer": "规定超市不能提供免费塑料袋" }
            ]
        },
        {
            "sectionTitle": "课文五：保护地球的小事",
            "textContext": "保护地球环境，并不是一件离我们很远、很难做到的事情。实际上，我们只需注意一下身边的小事就可以。例如，夏天把空调的温度开得高一些，出门时记得关空调和电脑，这样可以节约用电；少开车，多骑车或者乘坐地铁和公共汽车，这样能降低空气污染；还有养成把垃圾丢进垃圾桶的习惯什么的。这些是我们每个人都能够做到的小事，但却有实实在在的效果。地球是我们共同的家，只有大家共同努力，减少污染、保护环境，才能使我们的家变得更美丽。",
            "questions": [
                { "question": "以下哪项不是文中提到的保护环境的小事？", "options": ["空调温度开高一些", "出门关空调和电脑", "少开车", "买环保产品"], "answer": "买环保产品" },
                { "question": "文中强调了保护地球环境的什么特点？", "options": ["很难做到", "离我们很远", "需要每个人共同努力", "只需要政府努力"], "answer": "需要每个人共同努力" }
            ]
        }
    ]
};

// Auto shuffle options for relevant modules
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

// Global export for mounting
window.LESSONS_DATA = window.LESSONS_DATA || {};
window.LESSONS_DATA['hsk4-14'] = lessonData;
window.lessonData = lessonData; // For direct access during development

// Node.js export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lessonData;
}