/*
================================================================
== 课程数据文件 (Lesson Data File)
== 第三课: 经理对我的印象不错
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
    "lesson": "HSK 4 - 第三课《经理对我的印象不错》",
    "students": [ "列夏", "丽莎", "明溪", "星悦", "德昊", "任华", "梦航", "基里尔", "萨~沙~", "萨沙", "达铭", "安德烈", "纪嘉", "高斯佳", "瓦列", "Maiia" ],

    "pinyin_map": {
        "挺": "tǐng", "紧张": "jǐnzhāng", "能力": "nénglì", "信心": "xìnxīn", "招聘": "zhāopìn", "提供": "tígōng",
        "负责": "fùzé", "本来": "běnlái", "应聘": "yìngpìn", "材料": "cáiliào", "符合": "fúhé", "通知": "tōngzhī",
        "律师": "lǜshī", "专业": "zhuānyè", "另外": "lìngwài", "收入": "shōurù", "咱们": "zánmen", "安排": "ānpái",
        "首先": "shǒuxiān", "其次": "qícì", "正式": "zhèngshì", "留": "liú", "诚实": "chéngshí",
        "改变": "gǎibiàn", "感觉": "gǎnjué", "判断": "pànduàn", "顾客": "gùkè", "准时": "zhǔnshí", "与": "yǔ", "约会": "yuēhuì"
    },

    "translation_dict": {
        "挺": "very; rather", "紧张": "nervous", "能力": "ability; competence", "信心": "confidence", "招聘": "to recruit", "提供": "to provide",
        "负责": "to be in charge of", "本来": "originally; at first", "应聘": "to apply for a job", "材料": "material; data", "符合": "to accord with", "通知": "to inform; notice",
        "律师": "lawyer", "专业": "major; specialty", "另外": "besides; in addition", "收入": "income", "咱们": "we; us", "安排": "to arrange",
        "首先": "first", "其次": "second; next", "正式": "formal", "留": "to leave", "诚实": "honest",
        "改变": "to change", "感觉": "feeling; to feel", "判断": "to judge; judgment", "顾客": "customer", "准时": "on time; punctual", "与": "with", "约会": "to date; appointment"
    },

    "collocations": [
        { "left": "挺", "right": "好的" }, { "left": "有点儿", "right": "紧张" }, { "left": "工作", "right": "能力" },
        { "left": "有", "right": "信心" }, { "left": "招聘", "right": "员工" }, { "left": "提供", "right": "机会" },
        { "left": "负责", "right": "工作" }, { "left": "本来", "right": "想去" }, { "left": "应聘", "right": "公司" },
        { "left": "准备", "right": "材料" }, { "left": "符合", "right": "要求" }, { "left": "发", "right": "通知" },
        { "left": "当", "right": "律师" }, { "left": "法律", "right": "专业" }, { "left": "另外", "right": "一件" },
        { "left": "月", "right": "收入" }, { "left": "咱们", "right": "班" }, { "left": "安排", "right": "时间" },
        { "left": "首先", "right": "要穿" }, { "left": "其次", "right": "不要" }, { "left": "正式", "right": "的衣服" },
        { "left": "留下", "right": "好印象" }, { "left": "回答", "right": "诚实" }, { "left": "改变", "right": "想法" },
        { "left": "感觉", "right": "开心" }, { "left": "相信你的", "right": "判断" }, { "left": "很多", "right": "顾客" },
        { "left": "准时", "right": "上课" }, { "left": "与", "right": "别人" }, { "left": "下午", "right": "约会" }
    ],

    "module_1_vocab": {
        "pinyin_match": [
            ["挺", "紧张", "能力", "信心", "招聘", "提供"],
            ["负责", "本来", "应聘", "材料", "符合", "通知"],
            ["律师", "专业", "另外", "收入", "咱们", "安排"],
            ["首先", "其次", "正式", "留", "诚实", "改变"],
            ["感觉", "判断", "顾客", "准时", "与", "约会"]
        ],
        "char_match": [
            ["挺好", "很紧张", "有能力", "没信心", "招聘会", "提供宿舍"],
            ["负责招聘", "本来以为", "去应聘", "学习材料", "符合要求", "通知大家"],
            ["当律师", "英语专业", "另外一个", "收入很高", "咱们走吧", "时间安排"],
            ["首先要", "其次是", "衣服正式", "留下来", "很诚实", "改变主意"],
            ["感觉累", "判断对错", "顾客朋友", "准时到", "与他聊天", "去约会"]
        ],
        "guess_words": [
            "挺", "紧张", "能力", "信心", "招聘", "提供",
            "负责", "本来", "应聘", "材料", "符合", "通知",
            "律师", "专业", "另外", "收入", "安排",
            "正式", "留", "诚实", "改变", "感觉", "判断",
            "顾客", "准时", "约会"
        ]
    },

    "module_2_vocab_drill": {
        "word_bomb": [
            { "word": "律师", "img_url": "img3/lvshi.jpg", "en_hint": "lawyer" },
            { "word": "招聘", "img_url": "img3/zhaopin.jpg", "en_hint": "recruitment" },
            { "word": "材料", "img_url": "img3/cailiao.jpg", "en_hint": "materials/documents" },
            { "word": "顾客", "img_url": "img3/guke.jpg", "en_hint": "customer" },
            { "word": "约会", "img_url": "img3/yuehui.jpg", "en_hint": "date/appointment" },
            { "word": "通知", "img_url": "img3/tongzhi.jpg", "en_hint": "notice/notification" },
            { "word": "收入", "img_url": "img3/shouru.jpg", "en_hint": "income" },
            { "word": "诚实", "img_url": "img3/chengshi.jpg", "en_hint": "honest" }
        ],
        "guess_words": [
            { "target_word": "紧张" }, { "target_word": "能力" }, { "target_word": "信心" },
            { "target_word": "提供" }, { "target_word": "负责" }, { "target_word": "本来" },
            { "target_word": "符合" }, { "target_word": "专业" }, { "target_word": "另外" },
            { "target_word": "安排" }, { "target_word": "正式" }, { "target_word": "留" },
            { "target_word": "改变" }, { "target_word": "感觉" }, { "target_word": "判断" },
            { "target_word": "准时" }
        ],
        "blind_box_spinner": [
            { "words": [{ "text": "挺" }, { "text": "紧张" }, { "text": "能力" }] },
            { "words": [{ "text": "信心" }, { "text": "招聘" }, { "text": "提供" }] },
            { "words": [{ "text": "负责" }, { "text": "本来" }, { "text": "应聘" }] },
            { "words": [{ "text": "材料" }, { "text": "符合" }, { "text": "通知" }] },
            { "words": [{ "text": "律师" }, { "text": "专业" }, { "text": "另外" }] },
            { "words": [{ "text": "收入" }, { "text": "咱们" }, { "text": "安排" }] },
            { "words": [{ "text": "首先" }, { "text": "其次" }, { "text": "正式" }] },
            { "words": [{ "text": "留" }, { "text": "诚实" }, { "text": "改变" }] },
            { "words": [{ "text": "感觉" }, { "text": "判断" }, { "text": "顾客" }] }
        ]
    },

    "module_3_grammar": {
        "grammar_points": [
            {
                "grammar_point_name": "语法1：挺...的 (很，非常)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["我", "对", "他", "的", "印象", "挺", "好", "的。"], "correct_answer": "我对他的印象挺好的。", "en_hint": "My impression of him is quite good." },
                        { "chunks": ["他", "问", "的", "问题", "都", "挺", "容易", "的。"], "correct_answer": "他问的问题都挺容易的。", "en_hint": "The questions he asked were all quite easy." },
                        { "chunks": ["我", "挺", "喜欢", "这个", "地方", "的。"], "correct_answer": "我挺喜欢这个地方的。", "en_hint": "I quite like this place." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img3/zhaopin.jpg",
                            "hint": "用“挺...的”评价这场面试。",
                            "en_hint": "Evaluate this interview using '挺...的'.",
                            "keywords": ["面试", "挺", "的"],
                            "reference_answer": "这次面试挺容易的。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你的朋友穿了一件新衣服，你觉得很好看。请用“挺...的”夸奖她。",
                            "en_scenario": "Your friend is wearing a new dress and you think it looks good. Compliment her using '挺...的'.",
                            "reference": "你穿这件衣服挺漂亮的。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "语法2：本来 (原来，以前)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["她", "本来", "很瘦，", "现在", "变胖", "了。"], "correct_answer": "她本来很瘦，现在变胖了。", "en_hint": "She was originally very thin, but now she has gotten fat." },
                        { "chunks": ["这件", "事", "本来", "是", "小李", "负责。"], "correct_answer": "这件事本来是小李负责。", "en_hint": "This matter was originally Xiao Li's responsibility." },
                        { "chunks": ["我", "本来", "想", "去", "爬山，", "但", "下雨了。"], "correct_answer": "我本来想去爬山，但下雨了。", "en_hint": "I originally wanted to go mountain climbing, but it rained." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img3/yuehui.jpg",
                            "hint": "用“本来”造句：你们计划下午去公园，但是外面下雨了。",
                            "en_hint": "Make a sentence with '本来': You planned to go to the park in the afternoon, but it rained outside.",
                            "keywords": ["本来", "去公园", "下雨了"],
                            "reference_answer": "我们本来下午想去公园，但是外面下雨了。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你迟到了，因为路上堵车。用“本来”向老师解释。",
                            "en_scenario": "You are late because of traffic on the way. Explain to the teacher using '本来'.",
                            "reference": "我本来能准时到的，但是路上堵车了。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "语法3：另外 (除此以外)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["这件", "衣服", "大，", "你", "试试", "另外", "一件。"], "correct_answer": "这件衣服大，你试试另外一件。", "en_hint": "This dress is too big, try another one." },
                        { "chunks": ["前面的车多，", "我们走", "另外的", "路。"], "correct_answer": "前面的车多，我们走另外的路。", "en_hint": "There are too many cars ahead, let's take another road." },
                        { "chunks": ["除了", "解决问题，", "还另外", "认识了", "新朋友。"], "correct_answer": "除了解决问题，还另外认识了新朋友。", "en_hint": "Besides solving the problem, we also additionally made new friends." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img3/cailiao.jpg",
                            "hint": "你买了一些水果，还买了一些牛奶。用“另外”连接。",
                            "en_hint": "You bought some fruits and also some milk. Connect them using '另外'.",
                            "keywords": ["买水果", "另外", "牛奶"],
                            "reference_answer": "我买了一些水果，另外还买了牛奶。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "经理让你通知大家下午开会，还要叫大卫去他办公室。请用“另外”表达。",
                            "en_scenario": "The manager asked you to notify everyone about an afternoon meeting and also call David to his office. Express this using '另外'.",
                            "reference": "你通知大家下午一点开会。另外，让大卫到我办公室一下。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "语法4：首先...其次... (表示顺序)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["首先，", "要穿", "正式", "的衣服，", "其次，", "不要紧张。"], "correct_answer": "首先，要穿正式的衣服，其次，不要紧张。", "en_hint": "First, wear formal clothes; second, don't be nervous." },
                        { "chunks": ["要想", "学好汉语，", "首先", "要多说，", "其次", "要复习。"], "correct_answer": "要想学好汉语，首先要多说，其次要复习。", "en_hint": "To learn Chinese well, first you must speak more, and next you must review." },
                        { "chunks": ["不管", "做什么，", "首先", "要有", "一个", "好身体。"], "correct_answer": "不管做什么，首先要有一个好身体。", "en_hint": "No matter what you do, first you must have a good body." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img3/chengshi.jpg",
                            "hint": "用“首先...其次...”说说怎么交朋友。",
                            "en_hint": "Talk about how to make friends using '首先...其次...'.",
                            "keywords": ["首先", "诚实", "其次", "热情"],
                            "reference_answer": "要想交到朋友，首先要诚实，其次要热情。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "给快要去面试的朋友一些建议。使用“首先...其次...”。",
                            "en_scenario": "Give some advice to a friend who is about to have an interview. Use '首先...其次...'.",
                            "reference": "面试时，首先要对自己有信心，其次回答问题要诚实。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "语法5：不管...(都)... (不论)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["不管", "多累，", "下班后", "我都", "去", "锻炼身体。"], "correct_answer": "不管多累，下班后我都去锻炼身体。", "en_hint": "No matter how tired I am, I go exercise after work." },
                        { "chunks": ["不管", "忙不忙，", "他", "每天", "都", "要", "锻炼。"], "correct_answer": "不管忙不忙，他每天都要锻炼。", "en_hint": "Whether busy or not, he exercises every day." },
                        { "chunks": ["不管", "是", "上课，", "还是", "约会，", "准时", "都很重要。"], "correct_answer": "不管是上课，还是约会，准时都很重要。", "en_hint": "Whether it is class or a date, being on time is very important." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img3/guke.jpg",
                            "hint": "用“不管...都...”造句：天气很冷，但是她每天都去跑步。",
                            "en_hint": "Make a sentence with '不管...都...': The weather is very cold, but she goes running every day.",
                            "keywords": ["不管", "天气", "都", "跑步"],
                            "reference_answer": "不管天气多冷，她每天都去跑步。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "这件衣服很漂亮，但你不知道价格，不过你下定决心要买。用“不管...都...”表达。",
                            "en_scenario": "This dress is very beautiful. You don't know the price, but you are determined to buy it. Express this using '不管...都...'.",
                            "reference": "这件衣服太漂亮了，不管贵不贵，我都要买。"
                        }
                    ]
                }
            }
        ],
        "synonym_distinction": [
            {
                "sentence": "这件衣服有点儿大，你试试____一件。",
                "options": ["另外", "另"],
                "answer": "另外",
                "explanation": "【另外】可以修饰数量词，如“另外一件”；“另”一般直接加名词或单音节动词。"
            },
            {
                "sentence": "要想找个好工作，____要准备好材料，____要好好面试。",
                "options": ["首先...其次", "因为...所以"],
                "answer": "首先...其次",
                "explanation": "表示列举事项的顺序，用“首先...其次...”。"
            },
            {
                "sentence": "今天下午有一个____。",
                "options": ["约会", "感觉"],
                "answer": "约会",
                "explanation": "约会是名词，表示安排好的会面。"
            },
            {
                "sentence": "____是苹果，还是香蕉，我都喜欢。",
                "options": ["不管", "如果"],
                "answer": "不管",
                "explanation": "“不管是...还是...”固定搭配，表示在任何条件下结果不变。"
            }
        ]
    },

    "module_4_text": {
        "level_1_sorting": [
            {
                "id": 1,
                "shuffled_items": [
                    { "tag": "A", "content": "小雨觉得问题挺容易的，就是有点紧张。" },
                    { "tag": "B", "content": "小夏建议他一定要对自己有信心，相信自己的能力。" },
                    { "tag": "C", "content": "小雨上午去面试了，小夏问他情况怎么样。" }
                ],
                "correct_order": ["C", "A", "B"],
                "explanation": "先交代小雨去面试和小夏提问（C），然后小雨回答感觉（A），最后小夏给建议（B）。"
            },
            {
                "id": 2,
                "shuffled_items": [
                    { "tag": "A", "content": "这次来应聘的一共有15人，经过笔试和面试，有两个不错。" },
                    { "tag": "B", "content": "这次招聘本来是小李负责的，但是他生病住院了，就交给了小林。" },
                    { "tag": "C", "content": "马经理让小林通知那两个人下周一来办公室。" }
                ],
                "correct_order": ["B", "A", "C"],
                "explanation": "先交代招聘负责人变更（B），再说应聘结果（A），最后是经理的决定（C）。"
            },
            {
                "id": 3,
                "shuffled_items": [
                    { "tag": "A", "content": "王静现在在上海当律师，对工作很满意。" },
                    { "tag": "B", "content": "小林邀请王静星期天参加同学聚会。" },
                    { "tag": "C", "content": "王静大学毕业后就没和小林联系了。" }
                ],
                "correct_order": ["C", "A", "B"],
                "explanation": "先说毕业后没联系（C），交代现状（A），最后提出聚会邀请（B）。"
            },
            {
                "id": 4,
                "shuffled_items": [
                    { "tag": "A", "content": "面试时，首先要穿正式的衣服，留下好印象。" },
                    { "tag": "B", "content": "经理对小雨印象不错，通知他明天上班。" },
                    { "tag": "C", "content": "其次不要紧张，回答问题要诚实。" }
                ],
                "correct_order": ["B", "A", "C"],
                "explanation": "先说结果（B），然后回顾面试经验的第一点（A）和第二点（C）。"
            },
            {
                "id": 5,
                "shuffled_items": [
                    { "tag": "A", "content": "不管上课、上班还是约会，准时都非常重要。" },
                    { "tag": "B", "content": "如果你留下了不准时的坏印象，很难让别人相信你。" },
                    { "tag": "C", "content": "第一印象就是在第一次见面时留下的感觉，想改变很困难。" }
                ],
                "correct_order": ["C", "B", "A"],
                "explanation": "先引出第一印象的概念（C），举出反面例子（B），最后得出结论（A）。"
            }
        ]
    },

    "module_4_repetition": {
        "sentences": [
            "他们问的问题都挺容易的，就是我有点儿紧张。",
            "面试的时候，一定要对自己有信心，要相信自己的能力。",
            "听说这次招聘会提供的工作机会很多。",
            "本来是小李负责的，但是他突然生病住院了。",
            "这两个人的能力都比较符合我们的要求。",
            "我一毕业就去上海当律师了。",
            "我很喜欢现在的工作，因为我学的就是法律专业。另外，收入也不错。",
            "星期天咱们同学聚会，你能来参加吗？",
            "面试时，首先，要穿正式的衣服。",
            "其次，应聘时不要紧张。当然，最重要的是回答问题要诚实。",
            "第一印象就是在第一次见面时给别人留下的印象。",
            "你给别人的第一印象会影响他们以后对你的感觉和判断。",
            "不管是上课、上班，还是与别人约会，准时都非常重要。"
        ]
    },

    "module_5_wordcloud": {
        "title": "💬 提到“面试”，你会想到什么？",
        "hint": "请扫码发送1-2个词描述（如：紧张、衣服、招聘、准备、自信…）"
    },

    "module_6_challenge": {
        "challenge_sets": [
            { "id": 1, "keywords": ["紧张", "信心", "能力"], "framework": "面试时不要____，要对自己有____，相信自己的____。", "translation": "Don't be nervous during the interview; have confidence in yourself and believe in your abilities." },
            { "id": 2, "keywords": ["本来", "负责", "应聘"], "framework": "这次招聘____是小李____的，来____的人很多。", "translation": "This recruitment was originally Xiao Li's responsibility; many people came to apply." },
            { "id": 3, "keywords": ["材料", "符合", "通知"], "framework": "这两人的____很____我们的要求，你去____他们来上班。", "translation": "The materials of these two people accord well with our requirements; go inform them to come to work." },
            { "id": 4, "keywords": ["律师", "专业", "另外"], "framework": "她学的是法律____，现在当了____。____，她收入也不错。", "translation": "She majored in law and is now a lawyer. Besides, her income is also good." },
            { "id": 5, "keywords": ["首先", "正式", "其次"], "framework": "面试时，____要穿____的衣服；____不要紧张，回答问题要诚实。", "translation": "During an interview, first you must wear formal clothes; second, don't be nervous and answer questions honestly." },
            { "id": 6, "keywords": ["改变", "判断", "不管"], "framework": "第一印象很难____，它会影响别人对你的____，所以____做什么，准时很重要。", "translation": "First impressions are hard to change; they affect others' judgment of you. So no matter what you do, being punctual is very important." }
        ]
    },

    "module_7_find_error": {
        "questions": [
            { "sentence": "老师对你的印象挺好。", "error": "挺好", "correct": "老师对你的印象挺好的。", "explanation": "「挺...的」是固定搭配，表示“很、非常”，通常带有“的”。" },
            { "sentence": "他吃另外苹果吧。", "error": "另外苹果", "correct": "他吃另外一个苹果吧。", "explanation": "「另外」修饰名词时，通常需要加上量词或“的”，如“另外一个苹果”或“另外的苹果”。" },
            { "sentence": "不管天气怎么冷，他每天去跑步。", "error": "每天去", "correct": "不管天气怎么冷，他每天都去跑步。", "explanation": "「不管」后面必须配合「都」或「也」使用。" },
            { "sentence": "我本来想下午去超市呢。", "error": "", "correct": "(此句语法正确)", "explanation": "「本来」表示原来的打算，用法正确。" },
            { "sentence": "首先应该明白为什么做，其次，知道怎么做。", "error": "其次，知道", "correct": "首先应该明白为什么做，其次，要知道怎么做。", "explanation": "「其次」后面一般需要加上动词前缀如“要”、“应该”以保持前后结构对称。" }
        ]
    },

    "module_8_jeopardy": {
        "categories": ["词汇搭配", "课文理解", "语法造句"],
        "teamNames": { "wei": "魏国", "shu": "蜀国", "wu": "吴国" },
        "teamColors": { "wei": "#ef4444", "shu": "#10b981", "wu": "#3b82f6" },
        "questions": {
            "q_0_10": { "question": "请填空：这次考试你要对自己有____。", "question_en": "Fill in the blank: You must have ____ in yourself for this exam.", "answer": "信心" },
            "q_0_20": { "question": "请填空：他现在在一家公司当____，因为他大学学的是法律。", "question_en": "Fill in the blank: He is now a ____ in a company because he studied law in college.", "answer": "律师" },
            "q_0_30": { "question": "请填空：面试时一定要穿____的衣服。", "question_en": "Fill in the blank: You must wear ____ clothes for an interview.", "answer": "正式" },
            "q_1_10": { "question": "课文一中，小夏对小雨的建议是什么？", "question_en": "In Text 1, what is Xiao Xia's advice to Xiao Yu?", "answer": "一定要对自己有信心，相信自己的能力。" },
            "q_1_20": { "question": "课文二中，招聘本来是谁负责的？为什么换人了？", "question_en": "In Text 2, who was originally in charge of recruitment? Why did it change?", "answer": "本来是小李负责，但他生病住院了，交给了小林。" },
            "q_1_30": { "question": "课文五中，第一印象为什么很重要？", "question_en": "In Text 5, why is first impression very important?", "answer": "因为很难改变，而且会影响别人以后对你的感觉和判断。" },
            "q_2_10": { "question": "用“挺...的”造一个句子。", "question_en": "Make a sentence with '挺...的'.", "answer": "这个房间挺干净的。" },
            "q_2_20": { "question": "用“本来”造一个句子。", "question_en": "Make a sentence with '本来'.", "answer": "我本来想去爬山，但是下雨了。" },
            "q_2_30": { "question": "用“不管...都...”造一个句子。", "question_en": "Make a sentence with '不管...都...'.", "answer": "不管是上班还是约会，准时都很重要。" }
        },
        "extra_pk_questions": [
            { "type": "快问快答", "q": "“另外苹果”这种说法对吗？应该怎么说？", "q_en": "Is '另外苹果' correct? How should you say it?", "a": "不对，应该说“另外一个苹果”或者“另外的苹果”。" },
            { "type": "抢答", "q": "课文四里说，面试回答问题时最重要的是什么？", "q_en": "According to Text 4, what is the most important thing when answering questions in an interview?", "a": "最重要的是回答问题要诚实。" }
        ]
    },

    "module_9_vocab_practice": [
        { "question": "这次考试你要对自己有____。", "options": ["信心", "材料", "收入", "通知"], "answer": "信心" },
        { "question": "老师____大家下午两点开会。", "options": ["提供", "通知", "应聘", "改变"], "answer": "通知" },
        { "question": "这家公司正在____新员工。", "options": ["招聘", "负责", "安排", "感觉"], "answer": "招聘" },
        { "question": "这件事____是小李负责的，但是他病了。", "options": ["本来", "另外", "其次", "准时"], "answer": "本来" },
        { "question": "来面试请带好您的简历等____。", "options": ["收入", "材料", "顾客", "约会"], "answer": "材料" },
        { "question": "这两个人的能力很____我们的要求。", "options": ["符合", "提供", "判断", "改变"], "answer": "符合" },
        { "question": "王静在大学学习的是法律____。", "options": ["专业", "律师", "能力", "信心"], "answer": "专业" },
        { "question": "这件衣服太小，你试试____一件吧。", "options": ["另外", "本来", "挺", "咱们"], "answer": "另外" },
        { "question": "这个工作的____很高，每个月有一万块。", "options": ["收入", "材料", "能力", "专业"], "answer": "收入" },
        { "question": "____班一共有多少个学生？", "options": ["提供", "咱们", "律师", "顾客"], "answer": "咱们" },
        { "question": "下周的会议时间____好了吗？", "options": ["安排", "通知", "改变", "判断"], "answer": "安排" },
        { "question": "面试时，你要穿得____一点。", "options": ["正式", "紧张", "诚实", "准时"], "answer": "正式" },
        { "question": "要想成功，____你要努力，其次要有方法。", "options": ["首先", "本来", "另外", "不管"], "answer": "首先" },
        { "question": "面试的时候回答问题一定要____。", "options": ["诚实", "正式", "紧张", "可怜"], "answer": "诚实" },
        { "question": "第一印象虽然不总是对的，但想____却很困难。", "options": ["改变", "提供", "判断", "安排"], "answer": "改变" },
        { "question": "同学聚会时，好久没有这种开心的____了。", "options": ["感觉", "材料", "收入", "顾客"], "answer": "感觉" },
        { "question": "我相信你的____，我们就走这条路吧。", "options": ["判断", "信心", "专业", "约会"], "answer": "判断" },
        { "question": "这家超市今天打折，所以____很多。", "options": ["材料", "顾客", "律师", "专业"], "answer": "顾客" },
        { "question": "不管是上课还是上班，你都应该____到。", "options": ["准时", "诚实", "正式", "另外"], "answer": "准时" },
        { "question": "今天晚上我要____朋友一起看电影。", "options": ["与", "挺", "给", "从"], "answer": "与" },
        { "question": "他今晚有一个____，要去见女朋友。", "options": ["约会", "材料", "通知", "专业"], "answer": "约会" },
        { "question": "我有点儿____，因为马上要考试了。", "options": ["紧张", "诚实", "正式", "准时"], "answer": "紧张" },
        { "question": "他对这次比赛____有信心的。", "options": ["挺", "另外", "其次", "本来"], "answer": "挺" },
        { "question": "学校给留学生____了很好的宿舍。", "options": ["提供", "招聘", "判断", "改变"], "answer": "提供" },
        { "question": "这次的活动由我来____。", "options": ["负责", "应聘", "通知", "安排"], "answer": "负责" },
        { "question": "我想去那家公司____销售经理。", "options": ["应聘", "招聘", "提供", "符合"], "answer": "应聘" },
        { "question": "她想当一名____，帮助别人解决法律问题。", "options": ["律师", "顾客", "专业", "咱们"], "answer": "律师" },
        { "question": "下课以后，没写完作业的同学请____下。", "options": ["留", "存", "给", "与"], "answer": "留" },
        { "question": "要想身体好，首先要多运动，____要注意饮食。", "options": ["其次", "另外", "本来", "首先"], "answer": "其次" }
    ],

    "module_10_comprehension": [
        {
            "sectionTitle": "课文一：小雨面试",
            "textContext": "小夏：你上午的面试怎么样？\n小雨：还可以，他们问的问题都挺容易的，就是我有点儿紧张。\n小夏：面试的时候，一定要对自己有信心，要相信自己的能力。\n小雨：你说的对！3月15号上午8点在学校体育馆还有一个招聘会，你去吗？\n小夏：我还没决定呢。\n小雨：听说这次招聘会提供的工作机会很多，我们一起去看看吧。",
            "questions": [
                { "question": "小雨觉得面试的问题怎么样？", "options": ["挺容易的", "非常难", "很难回答", "没有准备"], "answer": "挺容易的" },
                { "question": "小夏建议小雨面试时应该怎么做？", "options": ["要对自己有信心", "要多穿衣服", "要多说话", "要带好材料"], "answer": "要对自己有信心" }
            ]
        },
        {
            "sectionTitle": "课文二：马经理和小林聊招聘",
            "textContext": "马经理：小林，这次招聘不是小李负责吗？\n小林：本来是小李负责的，但是他突然生病住院了，所以就交给我来做了。\n马经理：哦，这次应聘的人多吗？\n小林：经理，这次来应聘的一共有15人。经过笔试和面试，有两个不错。这是他们的材料，您看看。\n马经理：这两个人的能力都比较符合我们的要求。你通知他们下周一上午九点来我办公室吧。\n小林：好的，那我马上跟他们联系。",
            "questions": [
                { "question": "这次招聘本来是谁负责的？", "options": ["小李", "小林", "马经理", "大卫"], "answer": "小李" },
                { "question": "最后有几个人符合经理的要求？", "options": ["两个", "十五个", "三个", "一个也没有"], "answer": "两个" }
            ]
        },
        {
            "sectionTitle": "课文三：小林和王静聊工作",
            "textContext": "小林：王静，好久不见了！大学毕业后就没联系了，你现在在哪儿工作呢？\n王静：我一毕业就去上海当律师了。\n小林：你对现在的工作一定非常满意吧？\n王静：我很喜欢现在的工作，因为我学的就是法律专业，而且同事们都很喜欢我。另外，收入也不错。\n小林：星期天咱们同学聚会，你能来参加吗？\n王静：能来。虽然这次来北京，时间安排得很紧张，但我一定借这次机会去跟大家见见面。",
            "questions": [
                { "question": "王静现在的工作是什么？", "options": ["律师", "经理", "老师", "医生"], "answer": "律师" },
                { "question": "王静为什么对现在的工作很满意？", "options": ["专业对口而且收入不错", "因为可以经常去北京", "因为经常同学聚会", "因为很轻松"], "answer": "专业对口而且收入不错" }
            ]
        },
        {
            "sectionTitle": "课文四：面试的建议",
            "textContext": "面试的时候，经理对我印象不错，还通知我明天就可以上班了。真没想到，找工作这么顺利。你想知道面试需要注意什么吗？首先，要穿正式的衣服，这会给面试者留下一个好的印象，让他觉得你是一个认真的人。其次，应聘时不要紧张。回答问题时，说话不要太快，声音也不要太小，要相信自己有能力做好。当然，最重要的是回答问题要诚实。",
            "questions": [
                { "question": "面试时穿正式衣服有什么好处？", "options": ["会留下好印象，让人觉得你认真", "会让人觉得你很幽默", "会让人觉得你很聪明", "可以不回答问题"], "answer": "会留下好印象，让人觉得你认真" },
                { "question": "作者认为面试时最重要的是什么？", "options": ["回答问题要诚实", "说话声音要大", "不要紧张", "穿正式衣服"], "answer": "回答问题要诚实" }
            ]
        },
        {
            "sectionTitle": "课文五：第一印象的重要性",
            "textContext": "第一印象就是在第一次见面时给别人留下的印象。虽然第一印象不总是对的，但如果想改变却很困难。你给别人的第一印象会影响他们以后对你的感觉和判断。所以，给第一次见面的同事留下好的印象，以后的工作可能会更顺利；给第一次见面的顾客留下好的印象，你可能会卖出更多的东西。但是，如果第一次见面给别人留下像不准时这样的坏印象，那么以后就很难让别人相信你。所以不管是上课、上班，还是与别人约会，准时都非常重要。",
            "questions": [
                { "question": "关于第一印象，下面哪句话是对的？", "options": ["第一印象很难改变", "第一印象总是对的", "第一印象很容易改变", "第一印象不重要"], "answer": "第一印象很难改变" },
                { "question": "如果给别人留下不准时的印象，会有什么后果？", "options": ["很难让别人相信你", "工作会更顺利", "能卖出更多东西", "别人会觉得你很诚实"], "answer": "很难让别人相信你" }
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

// 全局/模块导出绑定
window.LESSONS_DATA = window.LESSONS_DATA || {};
window.LESSONS_DATA['hsk4-03'] = lessonData;
window.lessonData = lessonData;

// Node.js export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lessonData;
}
