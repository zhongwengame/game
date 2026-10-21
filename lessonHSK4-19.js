/*
================================================================
== 课程数据文件 (Lesson Data File)
== 第十九课: 生活的味道
== 内容来源: 19课PPT.pdf (生词1-5 / 语言点5个 / 课文一至五)
== 配图: img19/ 目录 (本地图片, 与 index.html 同级)
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
    "students": [ "列夏", "丽莎", "明溪", "星悦", "德昊", "任华", "梦航", "基里尔", "萨~沙~", "萨沙", "达铭", "安德烈", "纪嘉", "高斯佳", "瓦列", "Maiia" ],

    "pinyin_map": {
        "学期": "xuéqī", "出生": "chūshēng", "性别": "xìngbié", "道歉": "dàoqiàn", "打印": "dǎyìn", "复印": "fùyìn",
        "申请": "shēnqǐng", "表格": "biǎogé", "粗心": "cūxīn", "继续": "jìxù", "按照": "ànzhào", "重新": "chóngxīn",
        "地址": "dìzhǐ", "饺子": "jiǎozi", "刀": "dāo", "破": "pò", "脱": "tuō", "理发": "lǐfà",
        "零钱": "língqián", "打破": "dǎpò", "口袋": "kǒudài", "餐厅": "cāntīng", "严重": "yánzhòng", "流血": "liúxuè",
        "打招呼": "dǎ zhāohu", "戴": "dài", "眼镜": "yǎnjìng", "舞蹈": "wǔdǎo", "国籍": "guójí", "抬": "tái",
        "胳膊": "gēbo", "转": "zhuǎn", "基础": "jīchǔ", "故意": "gùyì", "稍微": "shāowēi", "动作": "dòngzuò",
        "标准": "biāozhǔn", "仔细": "zǐxì", "租": "zū", "吵": "chǎo", "厨房": "chúfáng", "房东": "fángdōng",
        "占线": "zhànxiàn", "满意": "mǎnyì", "周围": "zhōuwéi", "环境": "huánjìng", "广告": "guǎnggào", "路过": "lùguò",
        "功夫": "gōngfu", "乒乓球": "pīngpāngqiú", "羽毛球": "yǔmáoqiú", "场": "chǎng", "禁止": "jìnzhǐ", "座位": "zuòwèi",
        "体育": "tǐyù", "选择": "xuǎnzé", "条件": "tiáojiàn"
    },

    "translation_dict": {
        "学期": "semester; school term", "出生": "to be born", "性别": "gender; sex", "道歉": "to apologize", "打印": "to print", "复印": "to photocopy",
        "申请": "to apply; application", "表格": "form; table", "粗心": "careless", "继续": "to continue", "按照": "according to", "重新": "again; anew",
        "地址": "address", "饺子": "dumpling", "刀": "knife", "破": "broken; to break", "脱": "to take off", "理发": "to get a haircut",
        "零钱": "small change", "打破": "to break; to smash", "口袋": "pocket", "餐厅": "restaurant; dining hall", "严重": "serious; severe", "流血": "to bleed",
        "打招呼": "to greet; to say hello", "戴": "to wear (glasses, hat, watch)", "眼镜": "glasses", "舞蹈": "dance", "国籍": "nationality", "抬": "to lift; to raise",
        "胳膊": "arm", "转": "to turn", "基础": "foundation; basis", "故意": "on purpose; deliberately", "稍微": "slightly; a little", "动作": "movement; action",
        "标准": "standard", "仔细": "careful; attentive", "租": "to rent", "吵": "noisy", "厨房": "kitchen", "房东": "landlord",
        "占线": "(the line is) busy", "满意": "satisfied", "周围": "surrounding; around", "环境": "environment", "广告": "advertisement", "路过": "to pass by",
        "功夫": "kung fu; skill", "乒乓球": "table tennis; ping-pong", "羽毛球": "badminton", "场": "(measure word for games, films)", "禁止": "to prohibit; to forbid", "座位": "seat",
        "体育": "sports; physical education", "选择": "to choose; choice", "条件": "condition; requirement"
    },

    "collocations": [
        { "left": "下个", "right": "学期" }, { "left": "出生", "right": "年月" }, { "left": "填写", "right": "性别" },
        { "left": "向你", "right": "道歉" }, { "left": "打印", "right": "表格" }, { "left": "复印", "right": "护照" },
        { "left": "重新", "right": "申请" }, { "left": "联系", "right": "地址" }, { "left": "粗心", "right": "大意" },
        { "left": "继续", "right": "学习" }, { "left": "按照", "right": "规定" }, { "left": "重新", "right": "打印" },
        { "left": "包", "right": "饺子" }, { "left": "一把", "right": "刀" }, { "left": "手弄", "right": "破了" },
        { "left": "脱", "right": "衣服" }, { "left": "去", "right": "理发" }, { "left": "十几块", "right": "零钱" },
        { "left": "打破", "right": "杯子" }, { "left": "衣服", "right": "口袋" }, { "left": "去", "right": "餐厅" },
        { "left": "病得很", "right": "严重" }, { "left": "手", "right": "流血了" }, { "left": "跟老师", "right": "打招呼" },
        { "left": "戴", "right": "眼镜" }, { "left": "中国", "right": "舞蹈" }, { "left": "中国", "right": "国籍" },
        { "left": "抬", "right": "胳膊" }, { "left": "向右", "right": "转" }, { "left": "有点儿", "right": "基础" },
        { "left": "不是", "right": "故意的" }, { "left": "稍微", "right": "有点儿" }, { "left": "动作", "right": "标准" },
        { "left": "仔细", "right": "看" }, { "left": "租", "right": "房子" }, { "left": "环境很", "right": "吵" },
        { "left": "厨房", "right": "很大" }, { "left": "房东", "right": "的电话" }, { "left": "电话", "right": "占线" },
        { "left": "很", "right": "满意" }, { "left": "周围", "right": "很安静" }, { "left": "保护", "right": "环境" },
        { "left": "看", "right": "广告" }, { "left": "路过", "right": "门口" }, { "left": "会", "right": "功夫" },
        { "left": "打", "right": "乒乓球" }, { "left": "打", "right": "羽毛球" }, { "left": "一场", "right": "比赛" },
        { "left": "禁止", "right": "吸烟" }, { "left": "找", "right": "座位" }, { "left": "选择", "right": "专业" },
        { "left": "条件", "right": "不错" }
    ],

    // 1. 词汇基础模块
    "module_1_vocab": {
        "pinyin_match": [
            ["学期", "出生", "性别", "道歉", "打印", "复印"],
            ["申请", "表格", "粗心", "继续", "按照", "重新"],
            ["地址", "饺子", "刀", "破", "脱", "理发"],
            ["零钱", "打破", "口袋", "餐厅", "严重", "流血"],
            ["打招呼", "戴", "眼镜", "舞蹈", "国籍", "抬", "胳膊"]
        ],
        "char_match": [
            ["新学期", "出生日期", "性别", "道歉", "打印", "复印"],
            ["申请表", "填写表格", "粗心", "继续", "按照", "重新"],
            ["联系地址", "羊肉饺子", "菜刀", "弄破", "脱下来", "理发店"],
            ["零钱", "打破", "衣服口袋", "餐厅", "严重", "流血"],
            ["打招呼", "戴眼镜", "一副眼镜", "中国舞蹈", "国籍", "抬胳膊"]
        ],
        "guess_words": [
            "学期", "出生", "性别", "道歉", "打印", "复印",
            "申请", "表格", "粗心", "继续", "按照", "重新",
            "地址", "饺子", "刀", "破", "脱", "理发",
            "零钱", "打破", "口袋", "餐厅", "严重", "流血",
            "打招呼", "戴", "眼镜"
        ]
    },

    // 2. 词汇操练 (图片炸弹、抢答揭盖、盲盒造句)
    "module_2_vocab_drill": {
        "word_bomb": [
            { "word": "饺子", "img_url": "img19/jiaozi.jpg", "en_hint": "a plate of dumplings" },
            { "word": "厨房", "img_url": "img19/chufang.jpg", "en_hint": "home kitchen" },
            { "word": "眼镜", "img_url": "img19/yanjing.jpg", "en_hint": "a pair of glasses" },
            { "word": "乒乓球", "img_url": "img19/pingpang.jpg", "en_hint": "ping-pong table" },
            { "word": "羽毛球", "img_url": "img19/yumaoqiu.jpg", "en_hint": "badminton racket" },
            { "word": "理发", "img_url": "img19/lifa.jpg", "en_hint": "getting a haircut" },
            { "word": "餐厅", "img_url": "img19/canting.jpg", "en_hint": "restaurant" },
            { "word": "座位", "img_url": "img19/zuowei.jpg", "en_hint": "rows of seats" },
            { "word": "广告", "img_url": "img19/guanggao.jpg", "en_hint": "advertising billboard" },
            { "word": "舞蹈", "img_url": "img19/wudao.jpg", "en_hint": "Chinese dance" }
        ],
        "guess_words": [
            { "target_word": "学期" }, { "target_word": "出生" }, { "target_word": "性别" },
            { "target_word": "道歉" }, { "target_word": "表格" }, { "target_word": "粗心" },
            { "target_word": "零钱" }, { "target_word": "口袋" }, { "target_word": "严重" },
            { "target_word": "胳膊" }, { "target_word": "国籍" }, { "target_word": "基础" },
            { "target_word": "房东" }, { "target_word": "占线" }, { "target_word": "功夫" },
            { "target_word": "禁止" }
        ],
        "blind_box_spinner": [
            { "words": [{ "text": "饺子" }, { "text": "刀" }, { "text": "厨房" }] },
            { "words": [{ "text": "学期" }, { "text": "申请" }, { "text": "表格" }] },
            { "words": [{ "text": "理发" }, { "text": "零钱" }, { "text": "口袋" }] },
            { "words": [{ "text": "眼镜" }, { "text": "打招呼" }, { "text": "故意" }] },
            { "words": [{ "text": "舞蹈" }, { "text": "基础" }, { "text": "动作" }] },
            { "words": [{ "text": "租" }, { "text": "厨房" }, { "text": "环境" }] },
            { "words": [{ "text": "广告" }, { "text": "房东" }, { "text": "占线" }] },
            { "words": [{ "text": "乒乓球" }, { "text": "座位" }, { "text": "禁止" }] },
            { "words": [{ "text": "羽毛球" }, { "text": "体育" }, { "text": "条件" }] },
            { "words": [{ "text": "功夫" }, { "text": "选择" }, { "text": "满意" }] }
        ]
    },

    // 3. 语法逻辑多关卡
    "module_3_grammar": {
        "grammar_points": [
            {
                "grammar_point_name": "疑问代词任指：谁 / 什么 / 哪儿 / 怎么 / 哪……都、也……",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["谁", "都", "有", "粗心", "填错", "的时候。"], "correct_answer": "谁都有粗心填错的时候。", "en_hint": "Everyone has times when they are careless and fill things in wrong." },
                        { "chunks": ["刚来中国的时候，", "我", "对", "什么", "都", "不熟悉。"], "correct_answer": "刚来中国的时候，我对什么都不熟悉。", "en_hint": "When I first came to China, I was not familiar with anything." },
                        { "chunks": ["今天点的菜太多了，", "我", "怎么", "吃", "也", "吃不完。"], "correct_answer": "今天点的菜太多了，我怎么吃也吃不完。", "en_hint": "We ordered too much food today; no matter how I eat, I can't finish it." },
                        { "chunks": ["那个商场的衣服", "哪件", "都", "很漂亮，", "不过", "哪件", "都", "很贵。"], "correct_answer": "那个商场的衣服哪件都很漂亮，不过哪件都很贵。", "en_hint": "Every piece of clothing in that mall is pretty, but every piece is expensive." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img19/canting.jpg",
                            "hint": "用“什么都”介绍这家餐厅。",
                            "en_hint": "Use '什么都' to introduce this restaurant.",
                            "keywords": ["餐厅", "什么菜", "都"],
                            "reference_answer": "这家餐厅的什么菜都很好吃。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "朋友问你：刚来这座城市的时候，你觉得怎么样？请用“哪儿……都/也……”回答。",
                            "en_scenario": "A friend asks how you felt when you first came to this city. Answer with '哪儿……都/也……'.",
                            "reference": "刚来的时候我哪儿都不熟悉，连超市在哪儿都不知道。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "趋向补语引申义：V + 上（达到了目的）",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["他", "没", "通过", "考试，", "所以", "没", "考上", "大学。"], "correct_answer": "他没通过考试，所以没考上大学。", "en_hint": "He didn't pass the exam, so he didn't get into university." },
                        { "chunks": ["他", "申请", "上", "了", "国外", "大学", "的", "博士。"], "correct_answer": "他申请上了国外大学的博士。", "en_hint": "He was accepted into a PhD program at a foreign university." },
                        { "chunks": ["看来", "今天", "坐不上", "8点", "那趟", "飞机", "了。"], "correct_answer": "看来今天坐不上8点那趟飞机了。", "en_hint": "It looks like we won't be able to catch the 8 o'clock flight today." },
                        { "chunks": ["你", "终于", "能", "吃", "上", "妈妈", "做的", "菜", "了。"], "correct_answer": "你终于能吃上妈妈做的菜了。", "en_hint": "You can finally eat the food your mom cooks." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img19/zuowei.jpg",
                            "hint": "用“坐上”说一句话。",
                            "en_hint": "Make a sentence with '坐上' (manage to sit down / get a seat).",
                            "keywords": ["座位", "坐", "上"],
                            "reference_answer": "我们终于坐上了最后一排的座位。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你考了三次驾照，这次终于通过了。请用“考上/考过”这类“V+上”的说法告诉朋友这个好消息。",
                            "en_scenario": "You took the driving test three times and finally passed. Tell your friend the good news using 'V+上'.",
                            "reference": "我考了三次，这次终于考上了！"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "趋向补语引申义：V + 出来（从无到有、从隐到显）",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["他们", "应该", "把", "自己的", "想法", "都", "说", "出来，", "好好", "谈谈。"], "correct_answer": "他们应该把自己的想法都说出来，好好谈谈。", "en_hint": "They should say what they think and have a good talk." },
                        { "chunks": ["这个", "数学题", "太", "难", "了，", "我", "也", "还没", "做", "出来", "呢。"], "correct_answer": "这个数学题太难了，我也还没做出来呢。", "en_hint": "This math problem is too hard; I haven't worked it out either." },
                        { "chunks": ["你", "要", "的", "那篇", "文章", "我", "已经", "翻译", "出来", "了。"], "correct_answer": "你要的那篇文章我已经翻译出来了。", "en_hint": "I've already translated the article you wanted." },
                        { "chunks": ["刚才", "我", "没", "看", "出来", "你", "跳得", "这么", "好！"], "correct_answer": "刚才我没看出来你跳得这么好！", "en_hint": "I didn't realize just now that you dance so well!" }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img19/wudao.jpg",
                            "hint": "用“看出来”说一句话。",
                            "en_hint": "Make a sentence with '看出来' (tell from something).",
                            "keywords": ["看得出来", "舞蹈", "基础"],
                            "reference_answer": "从她的动作可以看出来，她学过舞蹈，很有基础。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "上课时老师问了一个问题，全班没有人能回答。请用“出来”描述这个情况。",
                            "en_scenario": "The teacher asked a question and nobody in class could answer it. Describe it with '出来'.",
                            "reference": "老师问的这个问题太难了，谁都没能回答出来。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "插入语：总的来说（从总体上进行评论）",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["这个厨房", "比较", "大，", "也", "很", "干净，", "总的来说，", "很", "不错。"], "correct_answer": "这个厨房比较大，也很干净，总的来说，很不错。", "en_hint": "This kitchen is fairly big and clean; overall, it's quite good." },
                        { "chunks": ["这套房子", "交通", "方便，", "周围", "很", "安静，", "总的来说，", "他", "很", "满意。"], "correct_answer": "这套房子交通方便，周围很安静，总的来说，他很满意。", "en_hint": "The apartment has convenient transportation and is quiet; overall, he is satisfied." },
                        { "chunks": ["这个公司的", "工资", "虽然", "不算", "很高，", "但是", "奖金", "很多，", "总的来说", "收入", "还不错。"], "correct_answer": "这个公司的工资虽然不算很高，但是奖金很多，总的来说收入还不错。", "en_hint": "The salary isn't very high, but the bonus is good; overall the income is not bad." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img19/chufang.jpg",
                            "hint": "用“总的来说”评价这个厨房。",
                            "en_hint": "Use '总的来说' to comment on this kitchen.",
                            "keywords": ["厨房", "干净", "总的来说"],
                            "reference_answer": "这个厨房又大又干净，什么都有，总的来说很不错。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "朋友问你去丽江旅游怎么样。请先说不好的地方，再用“总的来说”给出结论。",
                            "en_scenario": "A friend asks how your trip to Lijiang was. Say something negative first, then conclude with '总的来说'.",
                            "reference": "那儿游客太多，东西也有点儿贵，不过总的来说，景色很美，值得去。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "动词：在于（关键在于……）",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["成功", "的", "关键", "在于", "自己", "的", "努力。"], "correct_answer": "成功的关键在于自己的努力。", "en_hint": "The key to success lies in your own effort." },
                        { "chunks": ["选择", "职业", "的", "关键", "在于", "兴趣。"], "correct_answer": "选择职业的关键在于兴趣。", "en_hint": "The key to choosing a career lies in interest." },
                        { "chunks": ["生命", "在于", "运动。"], "correct_answer": "生命在于运动。", "en_hint": "Life lies in movement." },
                        { "chunks": ["教育", "孩子", "的", "关键", "不在于", "让", "孩子", "听话，", "而在于", "养成", "好", "习惯。"], "correct_answer": "教育孩子的关键不在于让孩子听话，而在于养成好习惯。", "en_hint": "The key to educating children is not making them obedient, but helping them form good habits." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img19/pingpang.jpg",
                            "hint": "用“在于”说说运动的重要性。",
                            "en_hint": "Use '在于' to talk about the importance of sports.",
                            "keywords": ["生命", "在于", "运动"],
                            "reference_answer": "人们常说“生命在于运动”，所以我每天都打乒乓球。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "有人问你：想学好一门外语，最重要的是什么？请用“在于”回答。",
                            "en_scenario": "Someone asks what matters most in learning a foreign language. Answer with '在于'.",
                            "reference": "我觉得学好外语的关键在于每天坚持练习，而不是只记生词。"
                        }
                    ]
                }
            }
        ],
        "synonym_distinction": [
            {
                "sentence": "我的日记本掉到沙发后面了，拿不____了，你帮我抬一下沙发吧。",
                "options": ["出来", "起来"],
                "answer": "出来",
                "explanation": "<strong>出来 (chūlái):</strong> 表示从里面到外面，沙发后面是“里面”，所以用“拿出来”。<br><strong>起来 (qǐlái):</strong> 表示从下到上，如“站起来、抬起来”。"
            },
            {
                "sentence": "尽管现在才4月，天气已经开始慢慢热____。",
                "options": ["出来", "起来"],
                "answer": "起来",
                "explanation": "<strong>起来:</strong> 放在形容词后表示状态开始并继续，如“热起来、高兴起来”。<br><strong>出来:</strong> 表示从无到有、从隐蔽到显现，不能表示“开始”。"
            },
            {
                "sentence": "这道题太难了，我实在想不____。",
                "options": ["出来", "起来"],
                "answer": "出来",
                "explanation": "<strong>想出来:</strong> 大脑里原来没有的信息，经过思考产生了。<br><strong>想起来:</strong> 原有的记忆忘了，经过回忆又恢复了，如“我想起来他叫什么了”。"
            },
            {
                "sentence": "我想____了，那个唱歌的男孩子是高老师的孙子。",
                "options": ["出来", "起来"],
                "answer": "起来",
                "explanation": "这里说的是记忆恢复，用“想起来”。用“想出来”就变成“创造出一个新想法”，意思不对。"
            },
            {
                "sentence": "你回去以后，把今天大家在会上提的意见都整理____，明天交给我。",
                "options": ["出来", "起来"],
                "answer": "出来",
                "explanation": "意见原来是零散的、口头说的，整理后变成有条理的东西，是“从无到有、从隐到显”，用“整理出来”。"
            }
        ]
    },

    // 4. 篇章阅读 (语段排序)
    "module_4_text": {
        "level_1_sorting": [
            {
                "id": 1,
                "shuffled_items": [
                    { "tag": "A", "content": "马克希望下个学期继续在学校学习，所以他来找高老师，问是不是还需要重新申请。" },
                    { "tag": "B", "content": "高老师给了他一张表格，出生年月、性别、护照号码都要填，还要写联系地址和联系电话。" },
                    { "tag": "C", "content": "马克不小心把护照号码填错了，高老师没有批评他，只是重新打印了一份，还要把他的护照复印一下。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "先说马克来申请的原因，再说老师给他表格、告诉他填什么，最后说填错以后老师怎么处理，是完整的办事过程。"
            },
            {
                "id": 2,
                "shuffled_items": [
                    { "tag": "A", "content": "王静想给李进做羊肉饺子，可是用刀切肉的时候，不小心把手弄破了，流了血。" },
                    { "tag": "B", "content": "李进说伤得不太严重，过几天就好了，还让她把沾了血的衣服脱下来，他帮着洗。" },
                    { "tag": "C", "content": "看来今天吃不上饺子了，他们决定去理发店附近那家餐厅买包子，王静口袋里的零钱够用。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "从受伤的原因，到处理伤口和衣服，再到改变吃饭计划，事情一件接一件。"
            },
            {
                "id": 3,
                "shuffled_items": [
                    { "tag": "A", "content": "马克早上跟安娜打招呼，安娜没看见，因为她今天忘了戴眼镜，看不清楚。" },
                    { "tag": "B", "content": "马克看到安娜在跳中国舞，才知道她小时候学过两年，稍微有点儿基础。" },
                    { "tag": "C", "content": "安娜说舞蹈和国籍无关，然后给马克示范动作：先抬胳膊，然后抬腿，最后头再向右转一下。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "先解释误会，再说马克的新发现，最后才引出安娜对舞蹈的看法和动作示范。"
            },
            {
                "id": 4,
                "shuffled_items": [
                    { "tag": "A", "content": "马克去年租的房子离马路很近，周围环境非常吵，所以房子还没到期，他就急着换房子。" },
                    { "tag": "B", "content": "他在小区门口看到一个租房的广告，上面说交通方便、周围安静、厨房很大，总的来说，他很满意。" },
                    { "tag": "C", "content": "他记下了房东的手机号码，可是回家打电话总是占线，第二天才发现自己记号码时写错了一个数字。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "先说为什么换房，再说看广告挑中房子，最后说打电话占线的原因，前后有因果关系。"
            },
            {
                "id": 5,
                "shuffled_items": [
                    { "tag": "A", "content": "很多外国人认为所有中国人都会功夫和乒乓球，其实只是喜爱这两种运动的中国人比较多。" },
                    { "tag": "B", "content": "像乒乓球、羽毛球、跑步这样的运动，对条件要求不高，所以是不错的选择，人们常说“生命在于运动”。" },
                    { "tag": "C", "content": "看乒乓球比赛时，尤其是运动员发球的时候，观众要安静，禁止大声讲话或者离开座位随便走动。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "先纠正外国人的印象，再说明这些运动流行的原因，最后提醒看比赛的礼貌，是从“印象”到“原因”再到“规则”。"
            }
        ]
    },

    // 5. 跟读练习
    "module_4_repetition": {
        "sentences": [
            "老师，我希望下个学期在这里继续学习，请问还需要重新申请吗？",
            "真抱歉，我不小心把护照号码填错了，您能再给我一份新的申请表吗？",
            "没关系，不用道歉，谁都有粗心填错的时候。",
            "请把你的护照给我，我们要把护照复印一下。",
            "刚才用刀切肉的时候，我把手弄破了。",
            "看来今天吃不上羊肉饺子了。",
            "我衣服口袋里有十几块零钱，买包子应该够。",
            "今天早上我忘戴眼镜了，看不清楚，所以没看见你跟我打招呼。",
            "没看出来你跳得这么好，难道你以前在你们国家就学过中国舞蹈吗？",
            "舞蹈不仅是一门艺术，也是一种“语言”，这种语言与国籍无关。",
            "你应该像我这样：先抬胳膊，然后抬腿，最后头再向右转一下。",
            "广告上说房子交通方便，周围很安静，厨房很大，总的来说，这套房子他很满意。",
            "像乒乓球、羽毛球、跑步等运动对条件要求不高，所以它们都成为人们运动不错的选择。",
            "在看乒乓球比赛时，尤其是在运动员发球的时候，观众要安静，禁止大声讲话或者离开座位随便走动。"
        ]
    },

    // 6. 动态词云
    "module_5_wordcloud": {
        "title": "💬 你觉得“生活的味道”是什么？",
        "hint": "请扫码发送1-2个词描述（如：饺子、家的味道、忙、安静、幸福…）"
    },

    // 7. 极限挑战
    "module_6_challenge": {
        "challenge_sets": [
            { "id": 1, "keywords": ["学期", "申请", "表格"], "framework": "下个____我想继续在这里学习，所以要重新____，还要填很多____。", "translation": "Next semester I want to continue studying here, so I have to apply again and fill in many forms." },
            { "id": 2, "keywords": ["饺子", "刀", "破"], "framework": "我想给他包羊肉____，可是用____切肉的时候把手弄____了。", "translation": "I wanted to make him mutton dumplings, but I cut my hand while chopping meat with a knife." },
            { "id": 3, "keywords": ["眼镜", "打招呼", "舞蹈"], "framework": "今天我忘戴____，所以没看见他跟我____；不过我看到了他跳的中国____。", "translation": "I forgot my glasses today, so I didn't see him greet me; but I did see the Chinese dance he performed." },
            { "id": 4, "keywords": ["租", "厨房", "环境"], "framework": "我想____一套房子，____要大，周围的____要安静。", "translation": "I want to rent an apartment with a big kitchen and a quiet surrounding environment." },
            { "id": 5, "keywords": ["乒乓球", "座位", "禁止"], "framework": "周末我们去看____比赛，找到____坐下以后，一定要安静，那里____大声讲话。", "translation": "We're going to watch a ping-pong match this weekend. After finding our seats we must stay quiet; talking loudly is forbidden there." },
            { "id": 6, "keywords": ["在于", "选择", "条件"], "framework": "____职业的关键____兴趣和____，不只是工资高低。", "translation": "The key to choosing a career lies in interest and conditions, not just the salary." }
        ]
    },

    // 8. 找茬大师（文字辨错）
    "module_7_find_error": {
        "questions": [
            { "sentence": "2003年他是出生的。", "error": "他是出生的", "correct": "他是2003年出生的。", "explanation": "「是……的」句里，时间要放在「是」的后面。" },
            { "sentence": "我昨天去理发店理发了头发。", "error": "理发了头发", "correct": "我昨天去理发店理发了。", "explanation": "「理发」本身就是「理头发」，后面不用再带宾语。「头发」可说「剪了头发」。" },
            { "sentence": "我没看出来你跳舞得这么好。", "error": "跳舞得这么好", "correct": "我没看出来你跳得这么好。", "explanation": "「得」字补语前面要用动词「跳」，不能整个动宾结构「跳舞」都放进去。" },
            { "sentence": "成功的关键在于是自己的努力。", "error": "在于是", "correct": "成功的关键在于自己的努力。", "explanation": "「在于」后面直接带宾语，再加「是」就重复了。" },
            { "sentence": "这个厨房总的来说很不错。", "error": "", "correct": "(此句语法正确)", "explanation": "「总的来说」是插入语，用逗号隔开，位置正确。" },
            { "sentence": "谁都有粗心填错的时候。", "error": "", "correct": "(此句语法正确)", "explanation": "疑问代词「谁」表示任指，后面用「都」，句子正确。" },
            { "sentence": "他把衣服脱下来了，放在椅子上。", "error": "", "correct": "(此句语法正确)", "explanation": "「V+下来」表示使东西跟身体分开，用法正确。" },
            { "sentence": "这里的周围环境很安静，我很满意。", "error": "这里的周围环境", "correct": "这里周围的环境很安静。", "explanation": "「周围」已经包含「这里」的意思，说「这里的周围」意思重复。" }
        ]
    },

    // 9. 终极对决 Jeopardy (诸神之战)
    "module_8_jeopardy": {
        "categories": ["词语应用", "课文理解", "语法造句"],
        "teamNames": { "wei": "魏国", "shu": "蜀国", "wu": "吴国" },
        "teamColors": { "wei": "#ef4444", "shu": "#10b981", "wu": "#3b82f6" },
        "questions": {
            "q_0_10": { "question": "请填空：请在表格里填写姓名、____和出生日期。", "question_en": "Fill in the blank: Please write your name, ____ and date of birth on the form.", "answer": "性别" },
            "q_0_20": { "question": "请填空：用刀切肉的时候，我不小心把手弄____了。", "question_en": "Fill in the blank: While chopping meat I accidentally ____ my hand.", "answer": "破" },
            "q_0_30": { "question": "请填空：那家餐厅的电话总是____，怎么也打不通。", "question_en": "Fill in the blank: That restaurant's phone is always ____; I can't get through.", "answer": "占线" },
            "q_1_10": { "question": "课文一中，马克为什么去找高老师？", "question_en": "In Text 1, why did Mark go to see Teacher Gao?", "answer": "他想下个学期继续在学校学习，问是不是还需要重新申请。" },
            "q_1_20": { "question": "课文二中，王静的手是怎么弄破的？", "question_en": "In Text 2, how did Wang Jing hurt her hand?", "answer": "她想做羊肉饺子，用刀切肉的时候不小心弄破的。" },
            "q_1_30": { "question": "课文四中，房东的电话为什么总是占线？", "question_en": "In Text 4, why was the landlord's phone always busy?", "answer": "因为马克记号码的时候写错了一个数字，他打的根本不是房东的电话。" },
            "q_2_10": { "question": "用“谁……都/也……”造一个句子。", "question_en": "Make a sentence with '谁……都/也……'.", "answer": "这件事太难了，谁都不想去做。" },
            "q_2_20": { "question": "用“V+上”（表示达到目的）造一个句子。", "question_en": "Make a sentence with 'V+上' meaning to achieve a goal.", "answer": "他考了两次，终于考上了理想的大学。" },
            "q_2_30": { "question": "用“总的来说”造一个句子。", "question_en": "Make a sentence with '总的来说'.", "answer": "这家餐厅的服务一般，但是菜很好吃，总的来说还不错。" }
        },
        "extra_pk_questions": [
            { "type": "快问快答", "q": "中国人见面的时候常常怎么打招呼？", "q_en": "How do Chinese people usually greet each other?", "a": "熟悉的熟人之间常问“你吃了吗？”，正式的场合握手、点头，说“您好”。" },
            { "type": "抢答", "q": "看乒乓球比赛时，观众要注意什么？", "q_en": "What should the audience pay attention to when watching a ping-pong match?", "a": "要安静，尤其是运动员发球的时候，禁止大声讲话，也不要离开座位随便走动。" }
        ]
    },

    // 10. 词义搭配测验
    "module_9_vocab_practice": [
        { "question": "这个____快要结束了，下个学期我还在中国学习。", "options": ["学期", "性别", "地址", "表格"], "answer": "学期" },
        { "question": "请在表格上填写你的姓名、____和出生日期。", "options": ["性别", "基础", "条件", "动作"], "answer": "性别" },
        { "question": "真抱歉，我把护照号码填错了，我向你____。", "options": ["道歉", "复印", "打印", "继续"], "answer": "道歉" },
        { "question": "申请表在这里，请您先____一份。", "options": ["打印", "租", "抬", "转"], "answer": "打印" },
        { "question": "我要把护照____一份，请稍等。", "options": ["复印", "打破", "流血", "脱"], "answer": "复印" },
        { "question": "我想下个学期继续学习，还需要重新____吗？", "options": ["申请", "选择", "禁止", "路过"], "answer": "申请" },
        { "question": "这份____上有很多空格，要一个一个填。", "options": ["表格", "广告", "零钱", "座位"], "answer": "表格" },
        { "question": "他太____了，连自己的名字都写错了。", "options": ["粗心", "仔细", "标准", "严重"], "answer": "粗心" },
        { "question": "下课以后，我们____讨论这个问题。", "options": ["继续", "禁止", "路过", "占线"], "answer": "继续" },
        { "question": "请____老师的要求填写这份表格。", "options": ["按照", "稍微", "故意", "仔细"], "answer": "按照" },
        { "question": "表格填错了，请____拿一张新的。", "options": ["重新", "曾经", "稍微", "故意"], "answer": "重新" },
        { "question": "请写下你的联系____，我们好把材料寄给你。", "options": ["地址", "条件", "动作", "基础"], "answer": "地址" },
        { "question": "我最喜欢吃妈妈包的____。", "options": ["饺子", "零钱", "口袋", "广告"], "answer": "饺子" },
        { "question": "用____切肉的时候一定要小心。", "options": ["刀", "场", "座位", "表格"], "answer": "刀" },
        { "question": "真不巧，我的手不小心弄____了。", "options": ["破", "吵", "标准", "满意"], "answer": "破" },
        { "question": "屋里太热了，把外套____下来吧。", "options": ["脱", "戴", "抬", "转"], "answer": "脱" },
        { "question": "头发太长了，我要去____。", "options": ["理发", "复印", "打印", "出生"], "answer": "理发" },
        { "question": "我口袋里只有十几块____，买不了太多东西。", "options": ["零钱", "广告", "表格", "基础"], "answer": "零钱" },
        { "question": "小心点儿，别把杯子____了。", "options": ["打破", "抬", "戴", "申请"], "answer": "打破" },
        { "question": "我的____里有钥匙，你帮我拿一下。", "options": ["口袋", "厨房", "座位", "环境"], "answer": "口袋" },
        { "question": "楼下新开了一家____，菜很好吃。", "options": ["餐厅", "表格", "广告", "国籍"], "answer": "餐厅" },
        { "question": "他的病很____，现在还在住院。", "options": ["严重", "仔细", "标准", "满意"], "answer": "严重" },
        { "question": "切菜的时候，他不小心让手____了。", "options": ["流血", "占线", "道歉", "复印"], "answer": "流血" },
        { "question": "见到老师要主动____。", "options": ["打招呼", "理发", "租", "禁止"], "answer": "打招呼" },
        { "question": "他今天____了一副新买的眼镜。", "options": ["戴", "脱", "抬", "打印"], "answer": "戴" },
        { "question": "王老师戴着一副黑色的新____。", "options": ["眼镜", "舞蹈", "功夫", "座位"], "answer": "眼镜" },
        { "question": "她跳的____非常优美。", "options": ["舞蹈", "广告", "表格", "条件"], "answer": "舞蹈" },
        { "question": "他的____是中国，但是他一直住在俄罗斯。", "options": ["国籍", "地址", "环境", "动作"], "answer": "国籍" },
        { "question": "请把腿再____高一点儿。", "options": ["抬", "转", "戴", "租"], "answer": "抬" },
        { "question": "今天打完球，我的____有点儿疼。", "options": ["胳膊", "厨房", "广告", "零钱"], "answer": "胳膊" }
    ],

    // 11. 课文篇章理解
    "module_10_comprehension": [
        {
            "sectionTitle": "课文一：马克申请下个学期继续在学校学习",
            "textContext": "马克：老师，您好！我希望下个学期在这里继续学习，请问还需要重新申请吗？\n高老师：是的。给你表格，出生年月、性别、护照号码都要填，还有联系地址、联系电话。\n马克：真抱歉，我不小心把护照号码填错了，您能再给我一份新的申请表吗？\n高老师：没关系，不用道歉，谁都有粗心填错的时候。申请表都被别人拿走了，我给你重新打印一份，你等一下。\n马克：这次我按照要求都填写完了，请问还需要做别的事情吗？\n高老师：请把你的护照给我，我们要把护照复印一下。",
            "questions": [
                { "question": "马克找高老师做什么？", "options": ["申请下个学期继续学习", "交学费", "换宿舍", "请假"], "answer": "申请下个学期继续学习" },
                { "question": "高老师为什么没有批评马克？", "options": ["因为马克不是故意的，谁都会粗心", "因为她没看见", "因为表格不重要", "因为马克是新生"], "answer": "因为马克不是故意的，谁都会粗心" }
            ]
        },
        {
            "sectionTitle": "课文二：王静做饺子时手受伤了",
            "textContext": "李进：呀，你的手怎么流血了？等一下，我给你包起来。\n王静：没关系，我想给你做点儿羊肉饺子，刚才用刀切肉的时候把手弄破了。\n李进：你也太不小心了，不过好像不太严重，过几天就好了。衣服上也有一点儿血，你把衣服脱下来，我给你洗洗。\n王静：看来今天吃不上羊肉饺子了。\n李进：那我们就吃点儿别的。我常去的那家理发店附近有个餐厅，那里的包子很好吃，我一会儿去买一点儿。\n王静：好吧，我衣服口袋里有十几块零钱，买包子应该够。",
            "questions": [
                { "question": "王静是怎么把手弄破的？", "options": ["切肉的时候不小心", "洗碗时摔倒了", "被门夹了", "打球时受伤"], "answer": "切肉的时候不小心" },
                { "question": "他们最后决定吃什么？", "options": ["餐厅的包子", "羊肉饺子", "面条", "米饭"], "answer": "餐厅的包子" }
            ]
        },
        {
            "sectionTitle": "课文三：安娜帮助马克练习舞蹈动作",
            "textContext": "马克：我早上跟你打招呼，你没看见。想不到又在这儿碰见你了。\n安娜：真是对不起，我不是故意的，今天早上我忘戴眼镜了，看不清楚。\n马克：刚才我在旁边看到你跳中国舞了，没看出来你跳得这么好！难道你以前在你们国家就学过中国舞蹈吗？\n安娜：我小时候妈妈教我跳过两年的舞，所以稍微有点儿基础。再说，舞蹈不仅是一门艺术，也是一种“语言”，这种语言与国籍无关，无论哪个国家的人都能看懂。\n马克：太好了！我刚学习跳这种舞没多久，你帮我看看，我的这个动作对不对？\n安娜：你这个动作做得还是不太标准，我给你跳一遍。你仔细看着，应该像我这样：先抬胳膊，然后抬腿，最后头再向右转一下。",
            "questions": [
                { "question": "安娜早上为什么没看见马克打招呼？", "options": ["忘了戴眼镜", "故意不理他", "在打电话", "没认出他"], "answer": "忘了戴眼镜" },
                { "question": "安娜认为舞蹈和什么无关？", "options": ["国籍", "年龄", "天气", "时间"], "answer": "国籍" }
            ]
        },
        {
            "sectionTitle": "课文四：马克想租一套安静的房子",
            "textContext": "马克去年租的房子离马路很近，对面有大大小小的商店，周围环境非常吵。所以，房子还没到期，马克就开始着急换房子了。有一天，他在小区门口看到一个租房子的广告。广告上说房子交通方便，周围很安静，厨房很大。总的来说，这套房子他很满意，于是他就记下了房东的手机号码。可回家后打电话，电话总是占线。第二天，他路过小区门口时，又仔细看了一下广告，原来在记号码的时候写错了一个数字。",
            "questions": [
                { "question": "马克为什么想换房子？", "options": ["周围环境太吵", "房子太小", "房租太贵", "离学校太远"], "answer": "周围环境太吵" },
                { "question": "电话为什么总是占线？", "options": ["他记号码时写错了一个数字", "房东出差了", "手机坏了", "号码停机了"], "answer": "他记号码时写错了一个数字" }
            ]
        },
        {
            "sectionTitle": "课文五：运动是不错的选择",
            "textContext": "很多外国人认为所有中国人都会功夫和乒乓球，其实只是喜爱这两种运动的中国人比较多。中国人特别喜欢打乒乓球，在中国你会发现到处都有乒乓球桌。像乒乓球、羽毛球、跑步等运动对条件要求不高，所以它们都成为人们运动不错的选择。人们常说“生命在于运动”，所以很多人一到周末就会到体育馆打几场球。“乒乓球”这个名字也很有意思，“乒”和“乓”就是打球时发出的声音。在看乒乓球比赛时，尤其是在运动员发球的时候，观众要安静，禁止大声讲话或者离开座位随便走动。",
            "questions": [
                { "question": "外国人常常认为中国人都会什么？", "options": ["功夫和乒乓球", "书法和京剧", "羽毛球和跑步", "舞蹈和音乐"], "answer": "功夫和乒乓球" },
                { "question": "看乒乓球比赛时，观众应该怎么做？", "options": ["保持安静，不随便走动", "大声加油", "站起来拍照", "随时离开座位"], "answer": "保持安静，不随便走动" }
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
