/*
================================================================
== 课程数据文件 (Lesson Data File)
== 第四课: 不要太着急赚钱
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
    "lesson": "HSK 4 - 第四课《不要太着急赚钱》",
    "students": [ "列夏", "丽莎", "明溪", "星悦", "德昊", "任华", "梦航", "基里尔", "萨~沙~", "萨沙", "达铭", "安德烈", "纪嘉", "高斯佳", "瓦列", "Maiia" ],

    "pinyin_map": {
        "提": "tí", "以为": "yǐwéi", "份": "fèn", "完全": "wánquán", "赚": "zhuàn", 
        "调查": "diàochá", "原来": "yuánlái", "计划": "jìhuà", "提前": "tíqián", "保证": "bǎozhèng", "提醒": "tíxǐng", "乱": "luàn",
        "生意": "shēngyi", "谈": "tán", "积累": "jīlěi", "经验": "jīngyàn", "一切": "yíqiè", "并": "bìng",
        "按照": "ànzhào", "顺利": "shùnlì", "感谢": "gǎnxiè", "消息": "xiāoxi", "按时": "ànshí", "奖金": "jiǎngjīn", "成功": "chénggōng",
        "工资": "gōngzī", "方法": "fāngfǎ", "知识": "zhīshi", "不得不": "bùdébù", "责任": "zérèn", "甚至": "shènzhì"
    },

    "translation_dict": {
        "提": "to mention; to bring up", "以为": "to think (mistakenly)", "份": "(measure word for job, document, etc.)", "完全": "completely", "赚": "to earn",
        "调查": "to investigate; survey", "原来": "originally; it turns out", "计划": "plan; to plan", "提前": "in advance; ahead of time", "保证": "to guarantee", "提醒": "to remind", "乱": "messy; in a hurry",
        "生意": "business", "谈": "to talk; to discuss", "积累": "to accumulate", "经验": "experience", "一切": "all; everything", "并": "actually; definitely (used with negative)",
        "按照": "according to", "顺利": "smoothly; successfully", "感谢": "to thank", "消息": "news; information", "按时": "on time", "奖金": "bonus", "成功": "to succeed; successful",
        "工资": "salary; wages", "方法": "method; way", "知识": "knowledge", "不得不": "have no choice but to", "责任": "responsibility", "甚至": "even; so far as to"
    },

    "collocations": [
        { "left": "提", "right": "问题" }, { "left": "一份", "right": "工作" }, { "left": "完全", "right": "明白" },
        { "left": "赚", "right": "大钱" }, { "left": "做", "right": "调查" }, { "left": "提前", "right": "完成" },
        { "left": "保证", "right": "不迟到" }, { "left": "提醒", "right": "自己" }, { "left": "房间", "right": "很乱" },
        { "left": "谈", "right": "生意" }, { "left": "积累", "right": "经验" }, { "left": "一切", "right": "顺利" },
        { "left": "按照", "right": "要求" }, { "left": "感谢", "right": "大家" }, { "left": "好", "right": "消息" },
        { "left": "按时", "right": "吃药" }, { "left": "发", "right": "奖金" }, { "left": "获得", "right": "成功" },
        { "left": "发", "right": "工资" }, { "left": "学习", "right": "方法" }, { "left": "专业", "right": "知识" },
        { "left": "不得不", "right": "做" }, { "left": "责任", "right": "心" }
    ],

    "module_1_vocab": {
        "pinyin_match": [
            ["提", "以为", "份", "完全", "赚", "调查"],
            ["原来", "计划", "提前", "保证", "提醒", "乱"],
            ["生意", "谈", "积累", "经验", "一切", "并"],
            ["按照", "顺利", "感谢", "消息", "按时", "奖金"],
            ["成功", "工资", "方法", "知识", "不得不", "责任", "甚至"]
        ],
        "char_match": [
            ["提问题", "以为", "一份", "完全", "赚钱", "调查", "报告"],
            ["原来", "计划", "提前", "保证", "提醒", "太乱了"],
            ["谈生意", "积累经验", "顺利", "容易", "按照"],
            ["顺利", "感谢", "消息", "按时", "奖金", "成功"],
            ["工资", "方法", "知识", "责任心", "甚至"]
        ],
        "guess_words": [
            "提", "以为", "份", "完全", "赚", "调查",
            "原来", "计划", "提前", "保证", "提醒", "乱",
            "生意", "积累", "经验", "一切", "按照", "顺利",
            "感谢", "消息", "按时", "奖金", "工资", "知识", "责任", "甚至"
        ]
    },

    "module_2_vocab_drill": {
        "word_bomb": [
            { "word": "奖金", "img_url": "img4/jiangjin.jpg", "en_hint": "bonus/money award" },
            { "word": "调查", "img_url": "img4/diaocha.jpg", "en_hint": "survey/investigate" },
            { "word": "计划", "img_url": "img4/jihua.jpg", "en_hint": "plan/schedule" },
            { "word": "生意", "img_url": "img4/shengyi.jpg", "en_hint": "business/trade" },
            { "word": "消息", "img_url": "img4/xiaoxi.jpg", "en_hint": "news/message" },
            { "word": "工资", "img_url": "img4/gongzi.jpg", "en_hint": "salary/wages" },
            { "word": "乱", "img_url": "img4/luan.jpg", "en_hint": "messy/confused" },
            { "word": "经验", "img_url": "img4/jingyan.jpg", "en_hint": "experience" }
        ],
        "guess_words": [
            { "target_word": "提" }, { "target_word": "以为" }, { "target_word": "完全" },
            { "target_word": "赚" }, { "target_word": "原来" }, { "target_word": "提前" },
            { "target_word": "保证" }, { "target_word": "提醒" }, { "target_word": "谈" },
            { "target_word": "积累" }, { "target_word": "一切" }, { "target_word": "按照" },
            { "target_word": "顺利" }, { "target_word": "感谢" }, { "target_word": "成功" },
            { "target_word": "知识" }
        ],
        "blind_box_spinner": [
            { "words": [{ "text": "以为" }, { "text": "赚" }, { "text": "提" }] },
            { "words": [{ "text": "完全" }, { "text": "份" }, { "text": "乱" }] },
            { "words": [{ "text": "调查" }, { "text": "原来" }, { "text": "计划" }] },
            { "words": [{ "text": "提前" }, { "text": "保证" }, { "text": "提醒" }] },
            { "words": [{ "text": "生意" }, { "text": "谈" }, { "text": "积累" }] },
            { "words": [{ "text": "经验" }, { "text": "一切" }, { "text": "并" }] },
            { "words": [{ "text": "按照" }, { "text": "顺利" }, { "text": "感谢" }] },
            { "words": [{ "text": "消息" }, { "text": "按时" }, { "text": "奖金" }] },
            { "words": [{ "text": "方法" }, { "text": "不得不" }, { "text": "甚至" }] }
        ]
    },

    "module_3_grammar": {
        "grammar_points": [
            {
                "grammar_point_name": "语法1：以为 (表示错误的认为/本来觉得)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["我", "以为", "新工作", "比", "以前的", "好。"], "correct_answer": "我以为新工作比以前的好。", "en_hint": "I thought the new job was better than the previous one (but it wasn't)." },
                        { "chunks": ["她", "汉语", "说得", "那么好，", "我", "还以为", "她是中国人。"], "correct_answer": "她汉语说得那么好，我还以为她是中国人。", "en_hint": "She speaks Chinese so well, I even thought she was Chinese." },
                        { "chunks": ["妈妈", "以为", "孩子去", "学校了，", "其实", "她去上网了。"], "correct_answer": "妈妈以为孩子去学校了，其实她去上网了。", "en_hint": "Mom thought the child went to school, but actually she went online." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img4/gongzi.jpg",
                            "hint": "用“以为”造句：你觉得这件衣服很便宜，但其实很贵。",
                            "en_hint": "Make a sentence with '以为': You thought this dress was cheap, but it's actually expensive.",
                            "keywords": ["以为", "便宜", "其实"],
                            "reference_answer": "我以为这件衣服很便宜，其实很贵。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "马克今天没来上课，因为他记错日子了。用“以为”解释。",
                            "en_scenario": "Mark didn't come to class today because he remembered the wrong day. Explain using '以为'.",
                            "reference": "马克以为今天是星期天，所以没来上课。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "语法2：原来 (以前 / 恍然大悟)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["这是", "我", "新买的", "手机，", "原来的", "手机", "坏了。"], "correct_answer": "这是我新买的手机，原来的手机坏了。", "en_hint": "This is my newly bought phone; the original one is broken." },
                        { "chunks": ["她", "原来", "是", "汉语老师，", "现在", "当律师了。"], "correct_answer": "她原来是汉语老师，现在当律师了。", "en_hint": "She was originally a Chinese teacher, now she is a lawyer." },
                        { "chunks": ["我说", "怎么", "没来", "上课，", "原来", "她生病了。"], "correct_answer": "我说怎么没来上课，原来她生病了。", "en_hint": "I was wondering why she didn't come to class; it turns out she is sick." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img4/xiaoxi.jpg",
                            "hint": "有人叫你，你回头一看，发现了老朋友。用“原来”表达惊讶。",
                            "en_hint": "Someone calls you, you look back and find an old friend. Express surprise using '原来'.",
                            "keywords": ["原来", "是", "你"],
                            "reference_answer": "原来是你啊，我差点儿没认出来。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你一直觉得从北京到上海很远，后来才知道坐高铁只要5个小时。用“原来”造句。",
                            "en_scenario": "You always thought Beijing to Shanghai was far, but later found out it takes 5 hours by high-speed rail. Make a sentence using '原来'.",
                            "reference": "原来坐高铁从北京到上海只要5个小时就能到。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "语法3：并 (加在否定词前，表示强调语气)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["今天", "预报", "有雨，", "可是", "并", "没有下雨。"], "correct_answer": "今天预报有雨，可是并没有下雨。", "en_hint": "Rain was forecasted today, but it didn't actually rain." },
                        { "chunks": ["做生意", "其实", "并", "不容易。"], "correct_answer": "做生意其实并不容易。", "en_hint": "Doing business is actually not easy at all." },
                        { "chunks": ["这种", "学习方法", "可能", "并", "不适合你。"], "correct_answer": "这种学习方法可能并不适合你。", "en_hint": "This learning method may not actually suit you." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img4/shengyi.jpg",
                            "hint": "别人说这件衣服很贵，但你觉得还好。用“并不”回答。",
                            "en_hint": "Someone says this dress is expensive, but you think it's okay. Answer using '并不'.",
                            "keywords": ["我", "觉得", "并不"],
                            "reference_answer": "我觉得这件衣服并不贵。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "同事以为经理把开会时间告诉你了，但其实你不知道。用“并没有”回答他。",
                            "en_scenario": "A colleague thought the manager told you the meeting time, but actually you didn't know. Answer him using '并没有'.",
                            "reference": "我不知道啊，经理并没有告诉我。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "语法4：甚至 (强调突出的事例，甚至+连...都/也)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["他", "那么有名，", "甚至", "连小孩子", "都", "知道他。"], "correct_answer": "他那么有名，甚至连小孩子都知道他。", "en_hint": "He is so famous that even little children know him." },
                        { "chunks": ["他", "最近", "很忙，", "甚至", "没有时间", "吃饭。"], "correct_answer": "他最近很忙，甚至没有时间吃饭。", "en_hint": "He has been very busy lately, even having no time to eat." },
                        { "chunks": ["有时候", "我们不得不做", "不喜欢，", "甚至", "很讨厌的", "工作。"], "correct_answer": "有时候我们不得不做不喜欢，甚至很讨厌的工作。", "en_hint": "Sometimes we have to do jobs we don't like, or even hate." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img4/luan.jpg",
                            "hint": "用“甚至”描述这个人很累：他回家后没洗澡，没吃饭...",
                            "en_hint": "Describe this person is very tired using '甚至': He went home, didn't shower, didn't eat...",
                            "keywords": ["累死了", "甚至", "连晚饭"],
                            "reference_answer": "他快累死了，甚至连晚饭都没吃就去睡了。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "李老师说话声音特别大，不仅在教室里听得见，在走廊也能听见。请用“甚至”造句。",
                            "en_scenario": "Teacher Li speaks very loudly; you can hear it not only in the classroom but also in the hallway. Make a sentence with '甚至'.",
                            "reference": "李老师说话的声音非常大，甚至在教室外面都能听清楚。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "语法5：不得不 (双重否定表肯定，没有别的办法)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["因为", "病毒的影响，", "我们", "不得不", "在网上", "上课。"], "correct_answer": "因为病毒的影响，我们不得不在网上上课。", "en_hint": "Due to the virus, we have no choice but to take classes online." },
                        { "chunks": ["他", "病得很重，", "不得不", "去医院。"], "correct_answer": "他病得很重，不得不去医院。", "en_hint": "He is very sick and has to go to the hospital." },
                        { "chunks": ["很多时候，", "我们", "不得不去做", "自己", "不愿意做的事情。"], "correct_answer": "很多时候，我们不得不去做自己不愿意做的事情。", "en_hint": "Many times, we have to do things we don't want to do." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img4/jihua.jpg",
                            "hint": "本来你们计划去爬山，但是下大雨了。用“不得不”改变计划。",
                            "en_hint": "You planned to climb a mountain, but it rained heavily. Change the plan using '不得不'.",
                            "keywords": ["下大雨", "不得不", "改变计划"],
                            "reference_answer": "外面下大雨了，我们不得不改变爬山的计划。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "今天工作特别多，大家都没写完。你和同事晚上该怎么办？用“不得不”回答。",
                            "en_scenario": "There is a lot of work today, and no one has finished. What should you and your colleagues do tonight? Answer with '不得不'.",
                            "reference": "今天工作太多了，我们不得不留下来加班。"
                        }
                    ]
                }
            }
        ],
        "synonym_distinction": [
            {
                "sentence": "事情总是变化着的，我们需要及时对____的计划做出改变。",
                "options": ["原来", "本来"],
                "answer": "原来",
                "explanation": "「原来」既可以表示“以前”，也可以表示“发现了新情况”。修饰名词时，“原来的计划”很常用。「本来」强调理所当然、从一开始就如此。"
            },
            {
                "sentence": "我____大学是学中文专业的，只是后来当了律师。",
                "options": ["本来", "原来"],
                "answer": "本来",
                "explanation": "其实这题「原来」和「本来」都可以用，都表示过去的情况。但在突出“事情转变、原本情况”时，两者往往可互换使用。（根据课件内容均正确）"
            },
            {
                "sentence": "外面下雨了，我没有雨伞，大家帮我想想____。",
                "options": ["办法", "方法"],
                "answer": "办法",
                "explanation": "「办法」用于解决生活中出现的具体问题，多用于口语；「方法」偏向系统的、理论的方式，如“学习方法、使用方法”。"
            },
            {
                "sentence": "老师的这种教学____非常有效，学生们进步很快。",
                "options": ["方法", "办法"],
                "answer": "方法",
                "explanation": "“教学”、“学习”、“科学”等词语通常搭配「方法」。"
            }
        ]
    },

    "module_4_text": {
        "level_1_sorting": [
            {
                "id": 1,
                "shuffled_items": [
                    { "tag": "A", "content": "小林提醒他，完全适应一个新工作需要一年时间，经常换工作不一定好。" },
                    { "tag": "B", "content": "小李今年换了三次工作，他以为新工作比以前好，结果并非如此。" },
                    { "tag": "C", "content": "小李觉得前一份工作收入太少，但小林建议他刚到新公司不要急着赚钱，多学习最重要。" }
                ],
                "correct_order": ["B", "A", "C"],
                "explanation": "先交代小李频繁换工作和他的错觉（B），接着小林给出客观规律的提醒（A），最后小李说出原因，小林给出最终建议（C）。"
            },
            {
                "id": 2,
                "shuffled_items": [
                    { "tag": "A", "content": "王经理问调查还要多久做完，小李说可以提前在周末保证完成。" },
                    { "tag": "B", "content": "小李觉得现在有很多事情等着做，不知道该先做哪个好，有些手忙脚乱。" },
                    { "tag": "C", "content": "王经理建议他每天早上把计划要做的事写在笔记本上提醒自己安排时间。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "先交代工作进度和保证完成（A），引出小李事情多、不知所措的现状（B），最后王经理给出记笔记的好办法（C）。"
            },
            {
                "id": 3,
                "shuffled_items": [
                    { "tag": "A", "content": "马经理很高兴，因为他们和那个公司的生意终于谈成了。" },
                    { "tag": "B", "content": "王经理安慰他说万事开头难，重要的是多积累经验。" },
                    { "tag": "C", "content": "不过马经理觉得做生意并不容易，现在赚钱越来越难了。" }
                ],
                "correct_order": ["A", "C", "B"],
                "explanation": "先说好消息（生意谈成了）（A），然后转折表达做生意并不容易的感慨（C），最后王经理给出鼓励和建议（B）。"
            },
            {
                "id": 4,
                "shuffled_items": [
                    { "tag": "A", "content": "今年工作按照计划顺利完成了，非常感谢大家的努力与帮助。" },
                    { "tag": "B", "content": "因为大家按时完成了工作，公司决定这个月给每人多发三千元奖金。" },
                    { "tag": "C", "content": "希望大家明年继续努力，能有更大的成绩。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "先总结工作顺利完成并表示感谢（A），接着宣布发奖金的好消息（B），最后提出对明年的期望（C）。"
            },
            {
                "id": 5,
                "shuffled_items": [
                    { "tag": "A", "content": "这时，我们最需要的就是对工作的责任心。" },
                    { "tag": "B", "content": "年轻人刚开始工作时不要只想着工资，积累经验和学习方法更重要。" },
                    { "tag": "C", "content": "然而很多时候，我们不得不去做一些自己不愿意做甚至讨厌的工作。" }
                ],
                "correct_order": ["B", "C", "A"],
                "explanation": "首先提出年轻人工作的重点不在钱而在经验（B），然后提出不可避免会遇到不喜欢的工作这一现实（C），最后给出解决这个现实的态度——责任心（A）。"
            }
        ]
    },

    "module_4_repetition": {
        "sentences": [
            "我以为新工作比以前的好，没想到还没有以前好呢。",
            "完全适应一个新的工作需要一年时间，所以经常换工作不一定好。",
            "你才到新公司，不要太急着赚钱，多学习才是最重要的。",
            "按原来的计划应该是两周，但是我们可以提前完成，周末保证做完。",
            "每天早上我都把当天计划要做的事情写在笔记本上，提醒自己安排好时间。",
            "我原来以为做生意很简单，后来才发现其实并不容易。",
            "万事开头难，重要的是要多积累经验。",
            "我们成功地解决了问题，顺利地完成了工作，非常感谢大家。",
            "因为大家按时完成了工作，公司决定给每人多发三千元奖金。",
            "很多时候，我们不得不去做一些自己不愿意做甚至是非常不喜欢的工作。",
            "一个人即使能力再高，如果没有责任心，也很难把工作做好。"
        ]
    },

    "module_5_wordcloud": {
        "title": "💬 谈到“工作”，你会想到什么？",
        "hint": "请扫码发送1-2个词描述（如：赚钱、工资、责任心、累、奖金、计划…）"
    },

    "module_6_challenge": {
        "challenge_sets": [
            { "id": 1, "keywords": ["以为", "份", "赚"], "framework": "小李换了一____工作，他____新工作能____更多的钱。", "translation": "Xiao Li changed jobs; he thought the new job would earn him more money." },
            { "id": 2, "keywords": ["调查", "计划", "提前"], "framework": "这份____报告按____是两周完成，但我们可以____做完。", "translation": "This survey report is planned to take two weeks, but we can finish it ahead of time." },
            { "id": 3, "keywords": ["保证", "提醒", "乱"], "framework": "我____按时完成，我会用笔记____自己，这样就不会手忙脚____了。", "translation": "I guarantee to finish on time; I will use notes to remind myself, so I won't be in a hurry/mess." },
            { "id": 4, "keywords": ["生意", "积累", "并"], "framework": "做____其实____不容易，万事开头难，最重要的是____经验。", "translation": "Doing business is actually not easy at all; the beginning is the hardest, and the most important thing is to accumulate experience." },
            { "id": 5, "keywords": ["按照", "顺利", "按时"], "framework": "只要____计划做，一切都会很____，我们一定能____完成工作。", "translation": "As long as we follow the plan, everything will be very smooth, and we will definitely be able to finish the work on time." },
            { "id": 6, "keywords": ["不得不", "责任", "甚至"], "framework": "有时候我们____做些不喜欢____很讨厌的工作，这就需要____心。", "translation": "Sometimes we have to do jobs we don't like or even hate; this requires a sense of responsibility." }
        ]
    },

    "module_7_find_error": {
        "questions": [
            { "sentence": "我以为今天会下雨，结果真的下大雨了。", "error": "以为", "correct": "我觉得今天会下雨，结果真的下大雨了。", "explanation": "「以为」表示错误的认为（本来这么想，但事实不是这样）。如果事实和你猜想的一样，应该用「觉得」或「认为」。" },
            { "sentence": "可能这种学习方法不并适合你。", "error": "不并", "correct": "可能这种学习方法并不适合你。", "explanation": "「并」作副词表示强调时，必须放在否定词「不」或「没有」的前面，即“并不”或“并没有”。" },
            { "sentence": "如果电脑坏了，你要想个方法解决。", "error": "方法", "correct": "如果电脑坏了，你要想个办法解决。", "explanation": "解决生活中的突发情况和具体问题，习惯用「办法」；「方法」多用于有系统的操作，如“学习方法、使用方法”。" },
            { "sentence": "他最近很忙，没有时间逛街、运动，甚至去吃饭的时间。", "error": "甚至去吃饭的时间", "correct": "他最近很忙，没有时间逛街、运动，甚至没有时间吃饭。", "explanation": "「甚至」后面常连接完整的句子或动宾短语补充说明，应保持结构一致“甚至没有时间吃饭”或者“甚至连吃饭的时间都没有”。" },
            { "sentence": "按着原来的计划，我们明天要考试。", "error": "按着", "correct": "按照原来的计划，我们明天要考试。", "explanation": "表示根据某种规则或计划，应该用介词「按照」，不能说“按着”。口语中可以说“按原来的计划”。" }
        ]
    },

    "module_8_jeopardy": {
        "categories": ["词汇搭配", "课文理解", "语法造句"],
        "teamNames": { "wei": "魏国", "shu": "蜀国", "wu": "吴国" },
        "teamColors": { "wei": "#ef4444", "shu": "#10b981", "wu": "#3b82f6" },
        "questions": {
            "q_0_10": { "question": "请填空：大家按时完成了工作，所以公司给大家发了三千元____。", "question_en": "Fill in the blank: Everyone finished the work on time, so the company gave everyone a 3000 yuan ____.", "answer": "奖金" },
            "q_0_20": { "question": "请填空：在工作的前几年，重要的是多____经验，不要太急着赚钱。", "question_en": "Fill in the blank: In the first few years of work, it is important to ____ more experience and not be too anxious to make money.", "answer": "积累" },
            "q_0_30": { "question": "请填空：一切都按照计划____地完成了，非常感谢大家。", "question_en": "Fill in the blank: Everything was completed ____ according to the plan; thank you all very much.", "answer": "顺利" },
            "q_1_10": { "question": "课文一中，小林认为完全适应一个新的工作需要多长时间？", "question_en": "In Text 1, how long does Xiao Lin think it takes to fully adapt to a new job?", "answer": "需要一年时间。" },
            "q_1_20": { "question": "课文二中，王经理每天早上用什么办法安排好时间？", "question_en": "In Text 2, what method does Manager Wang use every morning to arrange his time?", "answer": "把当天计划要做的事情写在笔记本上，提醒自己。" },
            "q_1_30": { "question": "课文五中，什么比收入和工资更重要？", "question_en": "In Text 5, what is more important than income and salary?", "answer": "丰富工作经验、学习交流的方法、积累专业知识更重要。" },
            "q_2_10": { "question": "用“以为”造一个句子（注意：事实和想法相反）。", "question_en": "Make a sentence with '以为' (Note: The fact should be opposite to the thought).", "answer": "我以为他今天没来，没想到他早就到了。" },
            "q_2_20": { "question": "用“并不/并没有”造一个句子。", "question_en": "Make a sentence with '并不/并没有'.", "answer": "听力考试其实并不难。" },
            "q_2_30": { "question": "用“不得不”造一个句子。", "question_en": "Make a sentence with '不得不'.", "answer": "因为外面下大雨，我们不得不留在家里。" }
        },
        "extra_pk_questions": [
            { "type": "快问快答", "q": "“授人以鱼不如授人以渔”是什么意思？", "q_en": "What does 'Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime' mean?", "a": "意思是给人金钱不如教给人赚钱或学习的方法。" },
            { "type": "抢答", "q": "一个人能力再高、经验再丰富，如果没有什么，也很难把工作做好？", "q_en": "No matter how capable and experienced a person is, without what, it is hard to do the job well?", "a": "责任心。" }
        ]
    },

    "module_9_vocab_practice": [
        { "question": "这____工作收入太少了，我想换工作。", "options": ["份", "提", "乱", "本"], "answer": "份" },
        { "question": "你有什么不懂的，可以向老师____问题。", "options": ["提", "谈", "赚", "并"], "answer": "提" },
        { "question": "刚来中国时不太习惯，现在已经____适应了。", "options": ["完全", "甚至", "原来", "提前"], "answer": "完全" },
        { "question": "年轻人刚开始工作，不要太着急____钱。", "options": ["赚", "提", "积累", "感谢"], "answer": "赚" },
        { "question": "我们正在做一份关于大学生购物习惯的____。", "options": ["调查", "生意", "计划", "责任"], "answer": "调查" },
        { "question": "我看你有点儿面熟，____是你啊！", "options": ["原来", "甚至", "提前", "按时"], "answer": "原来" },
        { "question": "按照原来的____，我们明天要去上海出差。", "options": ["计划", "消息", "知识", "工资"], "answer": "计划" },
        { "question": "因为天气原因，运动会____举行了。", "options": ["提前", "提醒", "保证", "按照"], "answer": "提前" },
        { "question": "我向你____，以后再也不迟到了。", "options": ["保证", "感谢", "提", "以为"], "answer": "保证" },
        { "question": "出门前，妈妈____我带好雨伞。", "options": ["提醒", "提前", "保证", "计划"], "answer": "提醒" },
        { "question": "你的房间太____了，快收拾一下吧。", "options": ["乱", "顺利", "成功", "完全"], "answer": "乱" },
        { "question": "他们公司是做衣服____的。", "options": ["生意", "工资", "奖金", "知识"], "answer": "生意" },
        { "question": "他们正在会议室____重要的合作。", "options": ["谈", "提", "赚", "积累"], "answer": "谈" },
        { "question": "他在这个行业里____了丰富的经验。", "options": ["积累", "提前", "保证", "调查"], "answer": "积累" },
        { "question": "万事开头难，你需要多积累工作____。", "options": ["经验", "责任", "消息", "生意"], "answer": "经验" },
        { "question": "相信经过大家的努力，____都会变好的。", "options": ["一切", "知识", "奖金", "工资"], "answer": "一切" },
        { "question": "这道题看似简单，其实做起来____不容易。", "options": ["并", "乱", "赚", "提"], "answer": "并" },
        { "question": "请大家____要求准备好面试的材料。", "options": ["按照", "提醒", "保证", "甚至"], "answer": "按照" },
        { "question": "这次比赛非常____，我们拿了第一名。", "options": ["顺利", "成功", "完全", "乱"], "answer": "顺利" },
        { "question": "非常____大家一直以来对我的帮助。", "options": ["感谢", "提醒", "保证", "以为"], "answer": "感谢" },
        { "question": "告诉大家一个好____，明天放假！", "options": ["消息", "计划", "生意", "知识"], "answer": "消息" },
        { "question": "请同学们____完成作业交给我。", "options": ["按时", "提前", "甚至", "原来"], "answer": "按时" },
        { "question": "年底了，公司给大家发了一大笔____。", "options": ["奖金", "工资", "生意", "经验"], "answer": "奖金" },
        { "question": "经过几次失败，他终于____了。", "options": ["成功", "顺利", "积累", "感谢"], "answer": "成功" },
        { "question": "这家公司每个月15号发____。", "options": ["工资", "知识", "计划", "生意"], "answer": "工资" },
        { "question": "只要找到了正确的学习____，汉语并不难。", "options": ["方法", "消息", "责任", "经验"], "answer": "方法" },
        { "question": "在大学里，不仅要交朋友，还要学习专业____。", "options": ["知识", "奖金", "生意", "工资"], "answer": "知识" },
        { "question": "雨下得太大了，我们____留在酒店里。", "options": ["不得不", "并", "甚至", "完全"], "answer": "不得不" },
        { "question": "照顾老人和孩子是每一个人的____。", "options": ["责任", "经验", "生意", "消息"], "answer": "责任" },
        { "question": "他太累了，____没洗澡就睡着了。", "options": ["甚至", "不得不", "原来", "并"], "answer": "甚至" },
        { "question": "我____这节课是王老师的课，没想到是张老师的课。", "options": ["以为", "保证", "提醒", "感谢"], "answer": "以为" }
    ],

    "module_10_comprehension": [
        {
            "sectionTitle": "课文一：小林和小李聊工作",
            "textContext": "小林：听说你又换工作了？今年已经换了三次工作了吧？\n小李：别提了！我以为新工作比以前的好，没想到还没有以前好呢。\n小林：上次那份工作你只做了两个月就离开了，其实，完全适应一个新的工作需要一年时间，所以，经常换工作不一定好。\n小李：我也明白。但是那份工作的收入太少了！\n小林：你才到新公司，不要太急着赚钱，多学习才是最重要的。\n小李：好。我一定会努力把现在这份工作做好。",
            "questions": [
                { "question": "小李为什么要离开上次那份工作？", "options": ["因为收入太少了", "因为太累了", "因为同事不好", "因为离家太远"], "answer": "因为收入太少了" },
                { "question": "小林建议小李刚到新公司应该看重什么？", "options": ["多学习", "多赚钱", "多休息", "多交朋友"], "answer": "多学习" }
            ]
        },
        {
            "sectionTitle": "课文二：王经理和小李在说工作",
            "textContext": "王经理：那份调查还要多长时间才能做完？\n小李：按原来的计划应该是两周，但是我们可以提前完成，周末保证做完。\n王经理：虽然最近工作很忙，但你们也要注意身体啊。\n小李：谢谢您！现在有很多事情等着我做，真不知道该先做哪个好。\n王经理：每天早上我都把当天计划要做的事情写在笔记本上，提醒自己安排好时间。你也可以试试这样做。\n小李：这个办法真不错！这样我就不会手忙脚乱了。",
            "questions": [
                { "question": "小李保证什么时候做完调查？", "options": ["这个周末", "两周以后", "明天早上", "下个星期"], "answer": "这个周末" },
                { "question": "为了不手忙脚乱，王经理建议小李怎么做？", "options": ["把要做的事写在笔记本上", "多喝咖啡", "找别人帮忙", "少做点工作"], "answer": "把要做的事写在笔记本上" }
            ]
        },
        {
            "sectionTitle": "课文三：王经理和马经理在说工作",
            "textContext": "王经理：什么事让你这么高兴啊？\n马经理：我们和上次那个公司的生意终于谈成了。\n王经理：太好了！你工作那么努力，公司会越来越好的。\n马经理：我原来以为做生意很简单，后来才发现其实并不容易，现在赚钱越来越难了。\n王经理：慢慢来，万事开头难，重要的是要多积累经验。\n马经理：我相信经过我们大家的努力，公司的生意会越做越大，一切都会好的。",
            "questions": [
                { "question": "马经理为什么这么高兴？", "options": ["生意终于谈成了", "发奖金了", "找到了新工作", "买到了便宜东西"], "answer": "生意终于谈成了" },
                { "question": "马经理现在对做生意有什么感觉？", "options": ["并不容易", "非常简单", "完全不想做了", "很好玩儿"], "answer": "并不容易" }
            ]
        },
        {
            "sectionTitle": "课文四：工作总结与发奖金",
            "textContext": "我们今年的工作都已经按照计划完成了。这一段时间，尽管工作很紧张，中间也遇到了很多困难，但是因为有大家的努力，我们成功地解决了问题，顺利地完成了工作，非常感谢大家对我的帮助！另外，马经理让我告诉大家一个好消息，因为大家按时完成了工作，公司决定这个月给每人多发三千元奖金。感谢大家这三个多月的努力工作，希望明年能有更大的成绩。",
            "questions": [
                { "question": "这段时间的工作情况怎么样？", "options": ["遇到了困难但顺利完成了", "太难了，没有完成", "非常轻松", "换了新的计划"], "answer": "遇到了困难但顺利完成了" },
                { "question": "公司为什么要给每人发三千元奖金？", "options": ["因为大家按时完成了工作", "因为过节了", "因为公司换经理了", "因为有人过生日"], "answer": "因为大家按时完成了工作" }
            ]
        },
        {
            "sectionTitle": "课文五：年轻人的工作建议",
            "textContext": "年轻人刚开始工作的时候，不要太急着赚钱，不要眼睛里只有工资和奖金。在工作的前几年，重要的是丰富自己的工作经验，学习与同事交流的方法，积累专业知识，这些比收入重要多了。但是很多时候，我们不得不去做一些自己不愿意做甚至是非常不喜欢的工作。这时，我们最需要的就是对工作的责任心。一个人即使能力再高，经验再丰富，如果对工作没有责任心，也很难把工作做好。",
            "questions": [
                { "question": "作者认为年轻人在工作的前几年最重要的是什么？", "options": ["积累经验和专业知识", "赚很多钱", "拿到很高的职位", "找一个轻松的工作"], "answer": "积累经验和专业知识" },
                { "question": "做自己不喜欢的工作时，最需要什么？", "options": ["责任心", "好心情", "同事的帮助", "经理的夸奖"], "answer": "责任心" }
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

// 全局/模块导出绑定
window.LESSONS_DATA = window.LESSONS_DATA || {};
window.LESSONS_DATA['hsk4-04'] = lessonData;
window.lessonData = lessonData; // For direct access during development

// Node.js export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lessonData;
}