/*
================================================================
== 课程数据文件 (Lesson Data File)
== 第十一课: 读书好，读好书，好读书
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
    "lesson": "HSK 4 - 第十一课《读书好，读好书，好读书》",
    "students": [ "列夏", "丽莎", "明溪", "星悦", "德昊", "德华", "梦航", "基里尔", "萨~沙~", "萨沙", "达铭", "安德烈", "季佳", "高斯佳", "瓦列", "Maiia" ],

    "pinyin_map": {
        "流利": "liúlì", "厉害": "lìhai", "语法": "yǔfǎ", "准确": "zhǔnquè", "词语": "cíyǔ",
        "连": "lián", "阅读": "yuèdú", "来得及": "láidejí", "复杂": "fùzá", "只好": "zhǐhǎo",
        "填空": "tiánkòng", "猜": "cāi", "否则": "fǒuzé", "客厅": "kètīng", "无论": "wúlùn",
        "杂志": "zázhì", "著名": "zhùmíng", "页": "yè", "增加": "zēngjiā", "文章": "wénzhāng",
        "之": "zhī", "内容": "nèiróng", "然而": "rán'ér", "看法": "kànfǎ", "相同": "xiāngtóng",
        "顺序": "shùnxù", "表示": "biǎoshì", "养成": "yǎngchéng", "同时": "tóngshí", "精彩": "jīngcǎi"
    },

    "translation_dict": {
        "流利": "бегло, свободно", "厉害": "сильный, потрясающий", "语法": "грамматика", "准确": "точный, правильный", "词语": "слова, выражения",
        "连": "даже", "阅读": "читать, чтение", "来得及": "успевать", "复杂": "сложный", "只好": "приходится, вынужден",
        "填空": "заполнить пробелы", "猜": "угадывать", "否则": "иначе, в противном случае", "客厅": "гостиная", "无论": "независимо от",
        "杂志": "журнал", "著名": "известный, знаменитый", "页": "страница", "增加": "увеличивать, добавлять", "文章": "статья, сочинение",
        "之": "служебное слово (связка)", "内容": "содержание, контент", "然而": "но, однако", "看法": "мнение, взгляд", "相同": "одинаковый",
        "顺序": "порядок, последовательность", "表示": "выражать, означать", "养成": "формировать, развивать", "同时": "одновременно, в то же время", "精彩": "замечательный, чудесный"
    },

    "collocations": [
        { "left": "增加", "right": "知识" },
        { "left": "养成", "right": "习惯" },
        { "left": "表达", "right": "看法" },
        { "left": "丰富", "right": "情感" },
        { "left": "解决", "right": "问题" },
        { "left": "按照", "right": "顺序" },
        { "left": "减轻", "right": "压力" },
        { "left": "查", "right": "词典" },
        { "left": "坚持", "right": "阅读" },
        { "left": "交流", "right": "思想" },
        { "left": "提高", "right": "能力" },
        { "left": "做", "right": "笔记" }
    ],

    // 1. 词汇基础模块
    "module_1_vocab": {
        "pinyin_match": [
            ["流利", "厉害", "语法", "准确", "词语", "连"],
            ["阅读", "来得及", "复杂", "只好", "填空", "猜"],
            ["否则", "客厅", "无论", "杂志", "著名", "页"],
            ["增加", "文章", "之", "内容", "然而", "看法"],
            ["相同", "顺序", "表示", "养成", "同时", "精彩"]
        ],
        "char_match": [
            ["流利", "厉害", "语法", "准确", "词语", "不同"],
            ["阅读", "来得及", "复杂", "只好", "填空", "猜猜"],
            ["否则", "客厅", "无论", "杂志", "著名"],
            ["增加", "文章", "之前", "内容", "然而", "看法"],
            ["相同", "顺序", "表示", "养成", "同时", "精彩"]
        ],
        "guess_words": [
            "流利", "厉害", "语法", "准确", "词语", "连", "阅读", "来得及", "复杂", "只好",
            "填空", "猜", "否则", "客厅", "无论", "杂志", "著名", "页", "增加", "文章",
            "之", "内容", "然而", "看法", "相同", "顺序", "表示", "养成", "同时", "精彩"
        ]
    },

    // 2. 词汇操练 (图片炸弹、抢答揭盖、盲盒造句)
    "module_2_vocab_drill": {
        "word_bomb": [
            { "word": "客厅", "img_url": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400", "en_hint": "living room" },
            { "word": "猜", "img_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400", "en_hint": "guess" },
            { "word": "复杂", "img_url": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400", "en_hint": "complicated" },
            { "word": "阅读", "img_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400", "en_hint": "reading" },
            { "word": "杂志", "img_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400", "en_hint": "magazine" },
            { "word": "笔记", "img_url": "https://images.unsplash.com/photo-1517842645767-c639042777db?w=400", "en_hint": "notebook / notes" },
            { "word": "填空", "img_url": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400", "en_hint": "fill in the blanks" },
            { "word": "顺序", "img_url": "https://images.unsplash.com/photo-1509869175650-a1d97972541a?w=400", "en_hint": "order / sequence" }
        ],
        "guess_words": [
            { "target_word": "流利" }, { "target_word": "准确" }, { "target_word": "来得及" },
            { "target_word": "否则" }, { "target_word": "无论" }, { "target_word": "著名" },
            { "target_word": "增加" }, { "target_word": "然而" }, { "target_word": "养成" }
        ],
        "blind_box_spinner": [
            { "words": [{ "text": "流利" }, { "text": "交流" }, { "text": "提高" }] },
            { "words": [{ "text": "复杂" }, { "text": "只好" }, { "text": "放弃" }] },
            { "words": [{ "text": "无论" }, { "text": "坚持" }, { "text": "阅读" }] },
            { "words": [{ "text": "增加" }, { "text": "知识" }, { "text": "精彩" }] }
        ]
    },

    // 3. 语法逻辑多关卡
    "module_3_grammar": {
        "grammar_points": [
            {
                "grammar_point_name": "介词：连……也/都……",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["他", "连", "中文", "报纸", "都", "看得懂。"], "correct_answer": "他连中文报纸都看得懂。", "en_hint": "He can even read Chinese newspapers." },
                        { "chunks": ["这个", "箱子", "太重", "连", "大人", "都", "搬不动。"], "correct_answer": "这个箱子太重连大人都搬不动。", "en_hint": "This box is so heavy that even adults can't move it." },
                        { "chunks": ["他", "太忙了", "连", "吃饭", "的", "时间", "都没有。"], "correct_answer": "他太忙了连吃饭的时间都没有。", "en_hint": "He is so busy that he doesn't even have time to eat." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400",
                            "hint": "用“连……都……”描述他看懂复杂报纸/书籍。",
                            "en_hint": "Use '连...都...' to write a sentence about reading capability.",
                            "keywords": ["连", "都", "看得懂"],
                            "reference_answer": "他太厉害了，连这么难的文章都看得懂。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你的朋友工作非常非常忙，连休息的时间都没有。请用“连……都/也……”来向大家介绍他的情况。",
                            "en_scenario": "Describe a friend who is extremely busy using '连...都/也...'.",
                            "reference": "他最近工作太忙了，连周末都不能休息。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "连词：否则",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["你要", "认真", "复习，", "否则", "考试", "考不好。"], "correct_answer": "你要认真复习，否则考试考不好。", "en_hint": "You need to review carefully, otherwise you won't do well in the exam." },
                        { "chunks": ["我们", "快点儿", "走吧，", "否则", "会", "迟到。"], "correct_answer": "我们快点儿走吧，否则会迟到。", "en_hint": "Let's hurry up, otherwise we'll be late." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1509869175650-a1d97972541a?w=400",
                            "hint": "用“否则”给考试答题提出建议。",
                            "en_hint": "Use '否则' to give advice for exams.",
                            "keywords": ["注意方法", "否则"],
                            "reference_answer": "考试时要注意时间，否则会做的题也来不及做了。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "朋友打算去中国留学，但还没开始学汉语。请你用“否则”给他一个建议。",
                            "en_scenario": "Give advice to a friend going to study in China using '否则'.",
                            "reference": "去中国留学前应该先学好汉语，否则生活会很不方便。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "连词：无论……都/也……",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["无论", "天气", "怎么样，", "他", "都", "坚持", "跑步。"], "correct_answer": "无论天气怎么样，他都坚持跑步。", "en_hint": "No matter how the weather is, he insists on running." },
                        { "chunks": ["无论", "遇到", "什么", "困难，", "我们", "都", "不能", "放弃。"], "correct_answer": "无论遇到什么困难，我们都不能放弃。", "en_hint": "No matter what difficulties we encounter, we cannot give up." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400",
                            "hint": "用“无论是……还是……”描述爱看书的人。",
                            "en_hint": "Use '无论是...还是...' to describe a book lover.",
                            "keywords": ["无论", "杂志", "小说"],
                            "reference_answer": "无论是普通杂志还是著名小说，他都非常喜欢读。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你的同学每天都认真学习，不管是周一还是周末，也不管天气好坏。请用“无论”夸夸他。",
                            "en_scenario": "Praise a hardworking classmate using '无论'.",
                            "reference": "无论是工作日还是周末，他都会抽出时间来学习。"
                        }
                    ]
                }
            }
        ],
        "synonym_distinction": [
            { "sentence": "____别人说什么，我只相信自己眼睛看见的东西。", "options": [ "无论/不管", "只允许用无论" ], "answer": "无论/不管", "explanation": "<strong>无论 / 不管:</strong> 后面接疑问代词（说什么），两者均可使用。" },
            { "sentence": "____去不去，最后都别忘了告诉我一声。", "options": [ "不管", "无论" ], "answer": "不管", "explanation": "<strong>不管:</strong> 多用于口语，可以直接接正反形式“去不去”。<strong>无论:</strong> 接正反形式时通常要加“还是/跟/与”。" },
            { "sentence": "____是工作还是学习，“光说不练”都是不行的。", "options": [ "无论/不管", "只允许用不管" ], "answer": "无论/不管", "explanation": "<strong>无论 / 不管:</strong> 后面带有选择关系“是...还是...”，两者均可使用。" },
            { "sentence": "虽然压力很大，但是为了我们共同的理想，____如何一定不能放弃。", "options": [ "无论", "不管" ], "answer": "无论", "explanation": "<strong>无论:</strong> 多用于书面语，可接“如何、是否”等词。<strong>不管:</strong> 用于口语，后面不能接“如何、是否”。" }
        ]
    },

    // 4. 篇章阅读 (语段排序)
    "module_4_text": {
        "level_1_sorting": [
            {
                "id": 1,
                "shuffled_items": [
                    { "tag": "A", "content": "“读书好”说的是读书有很多好处；" },
                    { "tag": "B", "content": "其次，每个人的时间都是有限的，所以要读好的书；" },
                    { "tag": "C", "content": "最后，“好读书”就是要养成阅读的习惯。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "按照逻辑顺序“首先 (A) -> 其次 (B) -> 最后 (C)”解释“读书好，读好书，好读书”的三层含义。"
            },
            {
                "id": 2,
                "shuffled_items": [
                    { "tag": "A", "content": "做读书笔记有很多种，最简单的就是把好词好句记下来。" },
                    { "tag": "B", "content": "另外，看完一篇文章后，还可以写下主要内容和自己的想法。" },
                    { "tag": "C", "content": "然而，不能完全相信书本上的内容，要有自己的看法和判断。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "先介绍基础笔记方法，再介绍进阶方法，最后用“然而”进行转折说明批判性思考。"
            }
        ]
    },

    // 5. 跟读练习
    "module_4_repetition": {
        "sentences": [
            "平时多交一些中国朋友，经常和他们聊天儿，听说能力自然就能得到很大的提高。",
            "看来要想考好，不但要认真复习，还得注意考试的方法，否则，会做的题也没时间做了。",
            "无论是普通杂志，还是著名小说，只要打开它们，就会发现世界上有那么多有趣的事情。",
            "看完一篇文章或一本书之后，还可以把它的主要内容和自己的想法写下来。",
            "读书好，读好书，好读书。让阅读成为你的习惯吧！"
        ]
    },

    // 6. 动态词云
    "module_5_wordcloud": {
        "title": "💬 谈谈你在学习汉语或阅读时的好习惯",
        "hint": "请扫码发送1-2个词描述你的阅读或学习习惯（如：做笔记、查词典、坚持...）"
    },

    // 7. 极限挑战
    "module_6_challenge": {
        "challenge_sets": [
            { "id": 1, "keywords": ["流利", "语法", "连"], "framework": "他的汉语说得很**流利**，虽然**语法**偶尔有错，但**连**中文报纸都看得懂。", "translation": "He speaks Chinese fluently. Although his grammar has occasional errors, he can even read Chinese newspapers." },
            { "id": 2, "keywords": ["复杂", "只好", "否则"], "framework": "前面的题太**复杂**了，他**只好**放弃，**否则**简单的题也来不及做了。", "translation": "The previous questions were too complicated, so he had to give up, otherwise there wouldn't be time for the easy ones." },
            { "id": 3, "keywords": ["相同", "顺序", "养成"], "framework": "用**相同**的汉字，按不同**顺序**排列，意思不同。我们要**养成**读书的好习惯。", "translation": "Using the same Chinese characters in a different order conveys different meanings. We should form a good habit of reading." }
        ]
    },

    // 8. 找茬大师（文字辨错）
    "module_7_find_error": {
        "questions": [
            { "sentence": "不管如何，我都不会放弃这次学习汉语的机会。", "error": "不管如何", "correct": "无论如何", "explanation": "“不管”后面不能与具文言色彩的“如何、是否”搭配，应改为“无论如何”。" },
            { "sentence": "这个盒子连大人拿不动，小孩子更拿不动了。", "error": "连大人拿不动", "correct": "连大人都拿不动", "explanation": "“连”结构通常要与“也”或“都”配合使用，应为“连大人都拿不动”。" },
            { "sentence": "每天花半个小时读书，月就可以读300页。", "error": "月就可以", "correct": "一个月就可以", "explanation": "缺少数量词，应补全为“一个月就可以”。" }
        ]
    },

    // 9. 终极对决 Jeopardy (诸神之战)
    "module_8_jeopardy": {
        "categories": ["词语应用", "课文理解", "语法造句"],
        "teamNames": { "wei": "魏国", "shu": "蜀国", "wu": "吴国" },
        "teamColors": { "wei": "#ef4444", "shu": "#10b981", "wu": "#3b82f6" },
        "questions": {
            "q_0_10": { "question": "请填空：请大家按照“先下后上”的____上下车。", "question_en": "Please get on and off in order.", "answer": "顺序" },
            "q_0_20": { "question": "请填空：阅读不仅能____知识，还能帮助减轻压力。", "question_en": "Reading can increase knowledge and relieve stress.", "answer": "增加" },
            "q_0_30": { "question": "请填空：做读书笔记时，要写下自己的____和判断。", "question_en": "Write down your own views and judgment.", "answer": "看法" },
            "q_1_10": { "question": "马克建议大卫通过什么方法来学新词语？", "question_en": "How does Mark suggest David learn new words?", "answer": "坚持看中文报纸，遇到不认识的查词典并复习" },
            "q_1_20": { "question": "小雨阅读考试没做完的主要原因是什么？", "question_en": "Why didn't Xiaoyu finish the reading test?", "answer": "先做了比较难、比较复杂的题，花了太多时间" },
            "q_1_30": { "question": "“好(hào)读书”是什么意思？", "question_en": "What does 'hào dú shū' mean?", "answer": "养成阅读的习惯，使读书真正成为自己的兴趣爱好" },
            "q_2_10": { "question": "用“连...都...”造一个句子。", "question_en": "Make a sentence with '连...都...'.", "answer": "这个字太难了，连老师都不认识。" },
            "q_2_20": { "question": "用“否则”造一个句子。", "question_en": "Make a sentence with '否则'.", "answer": "你要快点儿走，否则会迟到的。" },
            "q_2_30": { "question": "用“无论...都...”造一个句子。", "question_en": "Make a sentence with '无论...都...'.", "answer": "无论是晴天还是下雨，他都坚持锻炼。" }
        },
        "extra_pk_questions": [
            { "type": "快问快答", "q": "“读书好，读好书，好读书”中第三个“好”读什么音？", "q_en": "Pronunciation of the third '好'?", "a": "hào (第四声)" },
            { "type": "抢答", "q": "小李计算，每天读半个小时书，一个月大约能读多少页？", "q_en": "How many pages in a month if read 30 mins a day?", "a": "差不多300页（约一本书）" }
        ]
    },

    // 10. 词义搭配测验
    "module_9_vocab_practice": [
        { "question": "大家读得很____，声音也很响亮。", "options": ["流利", "复杂", "相同", "精彩"], "answer": "流利" },
        { "question": "汉语说得和中国人一样流利，真____！", "options": ["厉害", "准确", "著名", "复杂"], "answer": "厉害" },
        { "question": "很多句子的____不太准确，需要多练习。", "options": ["语法", "顺序", "客厅", "杂志"], "answer": "语法" },
        { "question": "这个消息____吗？我怎么不知道？", "options": ["准确", "流利", "精彩", "相同"], "answer": "准确" },
        { "question": "在中文报纸上，他学到了很多新____。", "options": ["词语", "语法", "顺序", "看法"], "answer": "词语" },
        { "question": "他太忙了，____吃饭的时间都没有。", "options": ["连", "之", "只好", "否则"], "answer": "连" },
        { "question": "HSK考试有听力、____和书写三个部分。", "options": ["阅读", "填空", "看法", "顺序"], "answer": "阅读" },
        { "question": "还有三分钟，我们现在跑过去还____。", "options": ["来得及", "来不及", "只好", "无论"], "answer": "来得及" },
        { "question": "这个问题有点____，你耐心听我解释一下。", "options": ["复杂", "流利", "精彩", "相同"], "answer": "复杂" },
        { "question": "没赶上最后一班车，我们____打车回家。", "options": ["只好", "否则", "然而", "同时"], "answer": "只好" },
        { "question": "老师请大家把那道题的____补全。", "options": ["填空", "猜", "文章", "杂志"], "answer": "填空" },
        { "question": "我不知道答案，就随便____了一个。", "options": ["猜", "增加", "表示", "养成"], "answer": "猜" },
        { "question": "要想考好一定要认真复习，____会做的题也没时间做。", "options": ["否则", "然而", "同时", "无论"], "answer": "否则" },
        { "question": "小李家的____里到处都堆满了书。", "options": ["客厅", "文章", "内容", "顺序"], "answer": "客厅" },
        { "question": "____天气好坏，他每天都坚持锻炼。", "options": ["无论", "否则", "然而", "之"], "answer": "无论" },
        { "question": "桌子上放着几本最新的体育____。", "options": ["杂志", "文章", "语法", "顺序"], "answer": "杂志" },
        { "question": "他是一位非常____的篮球运动员。", "options": ["著名", "复杂", "准确", "相同"], "answer": "著名" },
        { "question": "请大家把书翻到第20____。", "options": ["页", "项", "种", "段"], "answer": "页" },
        { "question": "阅读不仅能____知识，还能减轻压力。", "options": ["增加", "养成", "表示", "猜"], "answer": "增加" },
        { "question": "读完这篇____后，请写下你的感想。", "options": ["文章", "词语", "杂志", "客厅"], "answer": "文章" },
        { "question": "在去美国留学____前，一定要学好英语。", "options": ["之", "连", "然而", "否则"], "answer": "之" },
        { "question": "这本小说____丰富，语言幽默。", "options": ["内容", "语法", "顺序", "看法"], "answer": "内容" },
        { "question": "他虽然失败了很多次，____一直没有放弃。", "options": ["然而", "同时", "否则", "无论"], "answer": "然而" },
        { "question": "关于这件事，每个人都有自己的____。", "options": ["看法", "词语", "顺序", "语法"], "answer": "看法" },
        { "question": "这两个词的意思完全____。", "options": ["相同", "复杂", "精彩", "准确"], "answer": "相同" },
        { "question": "请大家按照从高到矮的____排队。", "options": ["顺序", "内容", "看法", "语法"], "answer": "顺序" },
        { "question": "点头在很多国家____同意的意思。", "options": ["表示", "增加", "养成", "猜测"], "answer": "表示" },
        { "question": "我们要从小____良好的生活习惯。", "options": ["养成", "增加", "表示", "阅读"], "answer": "养成" },
        { "question": "学习汉语的____，我还了解了中国文化。", "options": ["同时", "然而", "否则", "之"], "answer": "同时" },
        { "question": "昨晚的足球比赛非常____。", "options": ["精彩", "流利", "准确", "相同"], "answer": "精彩" }
    ],

    // 11. 课文篇章理解
    "module_10_comprehension": [
        {
            "sectionTitle": "课文一：马克学习汉语的方法",
            "textContext": "大卫：你来中国才一年，汉语就说得这么流利，真厉害！\n马克：谢谢！其实我的语法不太好，很多句子说得都不太准确。\n大卫：但是我看你跟中国人交流没什么问题，你是怎么做到的？\n马克：平时多交一些中国朋友，经常和他们聊天儿，听说能力自然就能得到很大的提高。另外，我建议你坚持看中文报纸，这样能学到很多新词语。\n大卫：你太厉害了！连中文报纸都看得懂。\n马克：刚开始肯定有困难，不过遇到不认识的词语，你可以查词典，然后写在本子上，有空儿就拿出来复习一下，慢慢地就会发现中文报纸也没那么难了。",
            "questions": [
                { "question": "马克认为自己的汉语有什么不足？", "options": ["听不懂别人说话", "语法不太好，句子说得不太准确", "不会写汉字", "词汇量太小"], "answer": "语法不太好，句子说得不太准确" },
                { "question": "马克建议大卫如何学习新词语？", "options": ["多背词典", "坚持看中文报纸", "多看电视", "听中文歌"], "answer": "坚持看中文报纸" }
            ]
        },
        {
            "sectionTitle": "课文二：小夏和小雨聊考试",
            "textContext": "小夏：考试结束了，你对自己的成绩满意吗？\n小雨：说真的，我不太满意。这次阅读考试的题太多了，我没做完。\n小夏：两个小时的时间应该来得及吧？\n小雨：这次主要是因为我先做了比较难、比较复杂的题，结果花了太多时间，后面简单的题虽然会，可是时间来不及，最后只好放弃了。\n小夏：其实我考得也不怎么样。有几个填空题不会做，有几个选择题，实在想不出来该选哪个，就随便猜了一个答案，结果一个都没猜对。\n小雨：看来要想考好，不但要认真复习，还得注意考试的方法，否则，会做的题也没时间做了。",
            "questions": [
                { "question": "小雨没做完阅读题的原因是什么？", "options": ["题目太难不会做", "先做了复杂的题，花了太多时间", "考试时间太短", "生病了影响答题"], "answer": "先做了复杂的题，花了太多时间" },
                { "question": "小雨总结的考试教训是什么？", "options": ["复习时间不够", "要注意答题方法，否则没时间做会做的题", "猜答案是好办法", "不需要复习了"], "answer": "要注意答题方法，否则没时间做会做的题" }
            ]
        },
        {
            "sectionTitle": "课文三：阅读的好处",
            "textContext": "小林：你的客厅里怎么到处是书啊？这些书你都喜欢看吗？\n小李：当然，我每天都要看书。无论是普通杂志，还是著名小说，只要打开它们，就会发现，世界上有那么多有趣的事情，有那么多不一样的生活。\n小林：想不到你工作那么忙，还能每天坚持阅读。\n小李：如果3分钟读一页书，半个小时就可以读10页。每天花半个小时来读书，一个月就可以读300页，差不多就是一本书了。\n小林：是啊，一个真正爱看书的人总能找出时间来阅读。\n小李：坚持阅读，除了能增加知识外，还能帮助我减轻压力，人也会变得轻松起来。",
            "questions": [
                { "question": "小李计算每天读半小时，一个月大约能读多少页？", "options": ["100页", "200页", "300页", "500页"], "answer": "300页" },
                { "question": "根据小李所说，坚持阅读有什么好处？", "options": ["增加知识和减轻压力", "提高写作水平", "能够赚更多钱", "能认识更多朋友"], "answer": "增加知识和减轻压力" }
            ]
        },
        {
            "sectionTitle": "课文四：做读书笔记",
            "textContext": "根据调查，阅读能力好的人，不但容易找到工作，而且工资也比较高。怎么才能有效提高自己的阅读能力呢？做读书笔记就是其中一种好方法。读书笔记有很多种，最简单就是把自己喜欢或者觉得有用的词语和句子记下来。另外，在看完一篇文章或一本书之后，还可以把它的主要内容和自己的想法写下来。然而，你不能完全相信书本上的内容，要有自己的看法和判断。坚持做读书笔记，对提高阅读能力有很大帮助。",
            "questions": [
                { "question": "文章提到的提高阅读能力的好方法是什么？", "options": ["做读书笔记", "多做考试题", "多跟朋友聊天", "买很多书"], "answer": "做读书笔记" },
                { "question": "作者对于书本上的内容持什么态度？", "options": ["完全相信", "不能完全相信，要有自己的看法和判断", "完全不信", "只读不思考"], "answer": "不能完全相信，要有自己的看法和判断" }
            ]
        },
        {
            "sectionTitle": "课文五：“读书好，读好书，好读书”",
            "textContext": "“读书好，读好书，好读书”。虽然这句话只用了三个相同的汉字，但是不同的顺序却表示了不同的意思。首先，“读书好”说的是读书有很多好处；其次，每个人的时间都是有限的，不可能把世界上每一本书都读完，所以要读好的书；最后，“好读书”就是要养成阅读的习惯，使读书真正成为自己的兴趣爱好。阅读有许多好处，它能丰富你的知识，让你找到解决问题的办法；同时，它还会丰富你的情感，使你的生活更精彩。所以，让阅读成为你的习惯吧！",
            "questions": [
                { "question": "“好(hào)读书”表达的是什么意思？", "options": ["读书好处多", "选择好书阅读", "养成阅读习惯，使读书成为爱好", "读书要快速"], "answer": "养成阅读习惯，使读书成为爱好" },
                { "question": "为什么要“读好书”？", "options": ["因为好书便宜", "因为人的时间是有限的，不能读完所有书", "因为好书字数少", "因为考试要求"], "answer": "因为人的时间是有限的，不能读完所有书" }
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
window.LESSONS_DATA['hsk4-11'] = lessonData;
window.lessonData = lessonData;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = lessonData;
}
