/*
================================================================
== 课程数据文件 (Lesson Data File)
== 第二课: 真正的朋友
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
    "lesson": "HSK 4 - 第二课《真正的朋友》",
    "students": [ "列夏", "丽莎", "明溪", "星悦", "德昊", "任华", "梦航", "基里尔", "萨~沙~", "萨沙", "达铭", "安德烈", "纪嘉", "高斯佳", "瓦列", "Maiia" ],

    "pinyin_map": {
        "适应": "shìyìng", "交": "jiāo", "平时": "píngshí", "逛": "guàng", "短信": "duǎnxìn", "正好": "zhènghǎo",
        "聚会": "jùhuì", "联系": "liánxì", "差不多": "chàbuduō", "专门": "zhuānmén", "毕业": "bìyè", "麻烦": "máfan",
        "好像": "hǎoxiàng", "重新": "chóngxīn", "尽管": "jǐnguǎn", "真正": "zhēnzhèng", "友谊": "yǒuyì",
        "丰富": "fēngfù", "无聊": "wúliáo", "讨厌": "tǎoyàn", "却": "què", "周围": "zhōuwéi", "交流": "jiāoliú",
        "理解": "lǐjiě", "镜子": "jìngzi", "而": "ér", "当": "dāng", "困难": "kùnnán", "陪": "péi"
    },

    "translation_dict": {
        "适应": "to get used to", "交": "to make (friends)", "平时": "normal times", "逛": "to stroll, to roam", "短信": "text message", "正好": "just in time, just right",
        "聚会": "party, to get together", "联系": "to contact", "差不多": "almost, about the same", "专门": "specially", "毕业": "to graduate", "麻烦": "troublesome, to bother",
        "好像": "as if, seems like", "重新": "again, once more", "尽管": "although", "真正": "true, real", "友谊": "friendship",
        "丰富": "abundant, to enrich", "无聊": "boring, bored", "讨厌": "to dislike, annoying", "却": "but, yet", "周围": "surrounding", "交流": "to communicate",
        "理解": "to understand", "镜子": "mirror", "而": "and, but (conjunction)", "当": "when, just at", "困难": "difficulty", "陪": "to accompany"
    },

    "collocations": [
        { "left": "适应", "right": "生活" }, { "left": "交", "right": "朋友" }, { "left": "平时", "right": "运动" },
        { "left": "逛", "right": "超市" }, { "left": "发", "right": "短信" }, { "left": "正好", "right": "合适" },
        { "left": "同学", "right": "聚会" }, { "left": "经常", "right": "联系" }, { "left": "差不多", "right": "一半" },
        { "left": "专门", "right": "回来" }, { "left": "大学", "right": "毕业" }, { "left": "麻烦", "right": "你了" },
        { "left": "重新", "right": "开始" }, { "left": "真正的", "right": "朋友" }, { "left": "友谊", "right": "长久" },
        { "left": "丰富", "right": "经验" }, { "left": "感到", "right": "无聊" }, { "left": "讨厌", "right": "吃药" },
        { "left": "周围", "right": "的人" }, { "left": "互相", "right": "交流" }, { "left": "理解", "right": "父母" },
        { "left": "遇到", "right": "困难" }, { "left": "陪在", "right": "身边" }, { "left": "照", "right": "镜子" }
    ],

    // 1. 词汇基础模块
    "module_1_vocab": {
        "pinyin_match": [
            ["适应", "交", "平时", "逛", "短信", "正好", "聚会"],
            ["联系", "专门", "毕业", "麻烦", "差不多", "好像"],
            ["重新", "尽管", "真正", "友谊", "丰富", "无聊"],
            ["讨厌", "周围", "交流", "却", "理解", "镜子"],
            ["困难", "当", "陪", "而"]
        ],
        "char_match": [
            ["适应生活", "交朋友", "平时很少", "逛街", "发短信", "大小正好", "周末聚会"],
            ["保持联系", "专门来看你", "大学毕业", "麻烦你了", "差不多一样", "好像下雨了"],
            ["重新写", "尽管很难", "真正的朋友", "我们的友谊", "经验丰富", "觉得无聊"],
            ["讨厌他", "周围环境", "文化交流", "却不知道", "互相理解", "一面镜子"],
            ["遇到困难", "当...的时候", "陪我", "而他不去"]
        ],
        "guess_words": [
            "适应", "交", "平时", "逛", "短信", "正好", "聚会",
            "联系", "专门", "毕业", "麻烦", "差不多", "重新", "尽管",
            "真正", "友谊", "丰富", "无聊", "讨厌", "周围", "交流",
            "理解", "镜子", "困难", "陪"
        ]
    },

    // 2. 词汇操练 (图片炸弹、抢答揭盖、盲盒造句)
    "module_2_vocab_drill": {
        "word_bomb": [
            { "word": "逛", "img_url": "img1/guang.jpg", "en_hint": "stroll/window shop" },
            { "word": "聚会", "img_url": "img1/juhui.jpg", "en_hint": "party/get-together" },
            { "word": "镜子", "img_url": "img1/jingzi.jpg", "en_hint": "mirror" },
            { "word": "毕业", "img_url": "img1/biye.jpg", "en_hint": "graduate" },
            { "word": "短信", "img_url": "img1/duanxin.jpg", "en_hint": "text message" },
            { "word": "无聊", "img_url": "img1/wuliao.jpg", "en_hint": "boring/bored" },
            { "word": "讨厌", "img_url": "img1/taoyan.jpg", "en_hint": "dislike/annoying" },
            { "word": "困难", "img_url": "img1/kunnan.jpg", "en_hint": "difficulty" }
        ],
        "guess_words": [
            { "target_word": "适应" }, { "target_word": "平时" }, { "target_word": "正好" },
            { "target_word": "联系" }, { "target_word": "专门" }, { "target_word": "麻烦" },
            { "target_word": "好像" }, { "target_word": "重新" }, { "target_word": "尽管" },
            { "target_word": "真正" }, { "target_word": "丰富" }, { "target_word": "周围" },
            { "target_word": "交流" }, { "target_word": "理解" }, { "target_word": "陪" }
        ],
        "blind_box_spinner": [
            { "words": [{ "text": "适应" }, { "text": "生活" }, { "text": "大连" }] },
            { "words": [{ "text": "交" }, { "text": "朋友" }, { "text": "平时" }] },
            { "words": [{ "text": "聚会" }, { "text": "联系" }, { "text": "同学" }] },
            { "words": [{ "text": "麻烦" }, { "text": "专门" }, { "text": "毕业" }] },
            { "words": [{ "text": "尽管" }, { "text": "但是" }, { "text": "还是" }] },
            { "words": [{ "text": "无聊" }, { "text": "丰富" }, { "text": "经历" }] },
            { "words": [{ "text": "周围" }, { "text": "交流" }, { "text": "讨厌" }] },
            { "words": [{ "text": "镜子" }, { "text": "理解" }, { "text": "困难" }] },
            { "words": [{ "text": "陪" }, { "text": "真正" }, { "text": "友谊" }] }
        ]
    },

    // 3. 语法逻辑多关卡
    "module_3_grammar": {
        "grammar_points": [
            {
                "grammar_point_name": "语法1：正好 (Just right / Just in time)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["女儿", "穿", "这件衣服", "不大不小，", "正好。"], "correct_answer": "女儿穿这件衣服不大不小，正好。", "en_hint": "The daughter wearing this clothes is neither too big nor too small, just right." },
                        { "chunks": ["你", "回来得", "正好，", "我们", "正准备", "吃饭呢。"], "correct_answer": "你回来得正好，我们正准备吃饭呢。", "en_hint": "You came back just in time, we are just preparing to eat." },
                        { "chunks": ["我", "要去", "超市，", "正好", "也", "帮", "你买吧。"], "correct_answer": "我要去超市，正好也帮你买吧。", "en_hint": "I am going to the supermarket, I can just buy it for you too." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img1/zhenghao.jpg",
                            "hint": "用“正好”完成对话：A: 我要去图书馆。 B: 太好了，________。",
                            "en_hint": "Complete the dialogue with '正好': A: I am going to the library. B: Great, I also happen to be going.",
                            "keywords": ["我", "正好", "也想去"],
                            "reference_answer": "太好了，我正好也想去，我们一起走吧。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "朋友来找你借两本书，你手里刚好有两本。请用“正好”回答他。",
                            "en_scenario": "A friend wants to borrow 2 books, and you happen to have exactly 2. Answer using '正好'.",
                            "reference": "正好，我这里有两本，都借给你吧。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "语法2：尽管……但是/可是/却/还是…… (Although... but...)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["尽管", "毕业", "这么多年，", "我们", "还是", "经常联系。"], "correct_answer": "尽管毕业这么多年，我们还是经常联系。", "en_hint": "Even though we graduated so many years ago, we still keep in touch frequently." },
                        { "chunks": ["尽管", "房间外面", "很冷，", "但是", "屋里", "很热。"], "correct_answer": "尽管房间外面很冷，但是屋里很热。", "en_hint": "Although it is cold outside the room, it is very hot inside." },
                        { "chunks": ["这份礼物", "尽管", "不贵，", "却", "让我", "非常感动。"], "correct_answer": "这份礼物尽管不贵，却让我非常感动。", "en_hint": "Although this gift is not expensive, it moves me very much." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img1/kunnan.jpg",
                            "hint": "用“尽管……还是……”造句：马克生病了 / 来上课",
                            "en_hint": "Make a sentence: Mark is sick / come to class",
                            "keywords": ["尽管", "生病了", "还是"],
                            "reference_answer": "尽管马克生病了，他还是来上课了。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你学习汉语觉得很难，但你非常喜欢。用“尽管……但是……”表达。",
                            "en_scenario": "You find learning Chinese hard, but you really like it. Express this.",
                            "reference": "尽管汉语比较难，但是我非常喜欢学习。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "语法3：却 (But / Yet - Indicates contrast)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["脾气不好", "的人，", "却", "很难", "交朋友。"], "correct_answer": "脾气不好的人，却很难交朋友。", "en_hint": "People with bad tempers, however, find it hard to make friends." },
                        { "chunks": ["我", "很喜欢", "他，", "但是", "他", "却", "不喜欢我。"], "correct_answer": "我很喜欢他，但是他却不喜欢我。", "en_hint": "I like him very much, but he does not like me." },
                        { "chunks": ["虽然", "外面", "很冷，", "房间里", "却", "很热。"], "correct_answer": "虽然外面很冷，房间里却很热。", "en_hint": "Although it's cold outside, it is hot inside the room." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img1/taoyan.jpg",
                            "hint": "用“却”完成句子：有的人吃得很多也不胖；我吃得很少，________。",
                            "en_hint": "Complete with '却': Some people eat a lot and don't get fat; I eat very little, but...",
                            "keywords": ["却", "很胖/长胖"],
                            "reference_answer": "我吃得很少，却长胖了。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "很多邻居住在同一个楼里，但他们从来不说话。请用“却”描述这个现象。",
                            "en_scenario": "Neighbors live in the same building but never talk. Describe this using '却'.",
                            "reference": "很多人住在同一个楼里，却从来没说过话。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "语法4：差不多 (Almost / About the same)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["这两个", "手机", "看上去", "差不多。"], "correct_answer": "这两个手机看上去差不多。", "en_hint": "These two phones look about the same." },
                        { "chunks": ["同学聚会，", "班里的同学", "差不多", "都来了。"], "correct_answer": "同学聚会，班里的同学差不多都来了。", "en_hint": "For the class reunion, almost all the classmates in the class came." },
                        { "chunks": ["去", "超市", "走路", "差不多", "需要", "半个小时。"], "correct_answer": "去超市走路差不多需要半个小时。", "en_hint": "Walking to the supermarket takes almost half an hour." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img1/chabuduo.jpg",
                            "hint": "回答问题：你和哥哥谁高？(用“差不多”)",
                            "en_hint": "Answer: Who is taller, you or your brother? (use 差不多)",
                            "keywords": ["差不多", "一样高"],
                            "reference_answer": "我和我哥哥差不多一样高。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "朋友问你作业写完没，你写了95%了。用“差不多”回答。",
                            "en_scenario": "A friend asks if you finished homework (95% done). Answer using 差不多.",
                            "reference": "我的作业差不多写完了。"
                        }
                    ]
                }
            }
        ],
        "synonym_distinction": [
            {
                "sentence": "这件衣服的大小很____你，不大不小。",
                "options": ["适合", "合适", "适应"],
                "answer": "适合",
                "explanation": "【适合】是动词，后面可以带宾语（适合你）。"
            },
            {
                "sentence": "这双鞋穿在我脚上正____。",
                "options": ["合适", "适合", "适应"],
                "answer": "合适",
                "explanation": "【合适】是形容词，表示符合实际情况，不能带宾语（正合适）。"
            },
            {
                "sentence": "刚来中国时，我不习惯这里的气候，慢慢才____。",
                "options": ["适应", "合适", "适合"],
                "answer": "适应",
                "explanation": "【适应】是动词，表示改变以适合新的环境或条件（get used to）。"
            }
        ]
    },

    // 4. 篇章阅读 (语段排序)
    "module_4_text": {
        "level_1_sorting": [
            {
                "id": 1,
                "shuffled_items": [
                    { "tag": "A", "content": "马克刚来中国的时候有点儿不习惯。" },
                    { "tag": "B", "content": "后来慢慢适应了这里的生活。" },
                    { "tag": "C", "content": "最近他还在图书馆交了一个中国朋友。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "按照时间顺序：刚来不习惯（A），后来适应了（B），最近交了新朋友（C）。"
            },
            {
                "id": 2,
                "shuffled_items": [
                    { "tag": "A", "content": "星期天班里要举行同学聚会。" },
                    { "tag": "B", "content": "小李已经联系了差不多一半儿的同学。" },
                    { "tag": "C", "content": "张远还会专门从国外飞回来参加呢。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "先说明事件：聚会（A），再说准备情况：联系同学（B），最后补充特例：张远回国（C）。"
            },
            {
                "id": 3,
                "shuffled_items": [
                    { "tag": "A", "content": "王静看大学时的照片，好像重新回到了校园。" },
                    { "tag": "B", "content": "照片旁边的是她的好朋友。" },
                    { "tag": "C", "content": "尽管毕业很多年，她们还是经常联系。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "看照片的感受（A），引出照片里的人（B），说明现在的关系（C）。"
            },
            {
                "id": 4,
                "shuffled_items": [
                    { "tag": "A", "content": "一个脾气不好的人，很难跟人交朋友。" },
                    { "tag": "B", "content": "所以我们要经常跟周围的人交流。" },
                    { "tag": "C", "content": "如果有共同的爱好，就更容易成为朋友了。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "提出反面例子（A），给出解决方法：交流（B），指出更好交友的条件：共同爱好（C）。"
            },
            {
                "id": 5,
                "shuffled_items": [
                    { "tag": "A", "content": "不同的人对真正的朋友有不同的理解。" },
                    { "tag": "B", "content": "有些人觉得朋友应该像镜子，能帮自己看到缺点。" },
                    { "tag": "C", "content": "而我的理解是，遇到困难时，真正的朋友会帮助你。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "先总起（A），再说别人的观点（B），最后用“而”转折，表达自己的观点（C）。"
            }
        ]
    },

    // 5. 跟读练习
    "module_4_repetition": {
        "sentences": [
            "来中国快一年了，你适应这儿的生活了吗？",
            "开始有点儿不习惯，后来就慢慢适应了。",
            "我正好也要去，咱们一起走吧。",
            "班里同学你联系得怎么样了？差不多一半儿吧。",
            "尽管已经毕业这么多年，我们还是经常联系的。",
            "能有一个真正的朋友，有一段真正的友谊，是多么不容易！",
            "交流能让人们互相了解，如果有共同的兴趣，就更容易成为朋友。",
            "脾气不好的人可能不一定让人讨厌，但是却很难跟人交朋友。",
            "有些人觉得朋友应该像镜子，能帮自己看到缺点。",
            "当你遇到困难的时候，真正的朋友会站出来，及时给你帮助。"
        ]
    },

    // 6. 动态词云
    "module_5_wordcloud": {
        "title": "💬 什么是“真正的朋友”？",
        "hint": "请扫码发送1-2个词描述（如：理解、陪伴、帮助、镜子、开心…）"
    },

    // 7. 极限挑战
    "module_6_challenge": {
        "challenge_sets": [
            { "id": 1, "keywords": ["适应", "平时", "聚会"], "framework": "来中国一年，我已经____了这里。____我喜欢和朋友去逛街，周末也会参加同学____。", "translation": "After a year in China, I've adapted here. Usually I like shopping with friends, and I join class parties on weekends." },
            { "id": 2, "keywords": ["正好", "麻烦", "联系"], "framework": "你来得____，我想____你帮我____一下王老师，请她明天开会。", "translation": "You came just in time. I want to trouble you to contact Teacher Wang and invite her to the meeting tomorrow." },
            { "id": 3, "keywords": ["尽管", "重新", "友谊"], "framework": "____毕业多年，大家还是经常联系，聚在一起时好像____回到了校园，我们的____一直没变。", "translation": "Even though we graduated years ago, we still contact each other. Gathering feels like returning to campus again. Our friendship hasn't changed." },
            { "id": 4, "keywords": ["交流", "讨厌", "却"], "framework": "那个脾气不好的人虽然不一定让人____，____很难跟别人交朋友，因为他不跟周围的人____。", "translation": "That bad-tempered person may not necessarily be annoying, but it is hard for him to make friends because he doesn't communicate with people around." },
            { "id": 5, "keywords": ["困难", "镜子", "理解"], "framework": "真正的朋友就像一面____，能让你看到缺点。当你遇到____时，他最能____并帮助你。", "translation": "A true friend is like a mirror, letting you see your shortcomings. When you face difficulties, he understands and helps you the most." }
        ]
    },

    // 8. 找茬大师（文字辨错）
    "module_7_find_error": {
        "questions": [
            { "sentence": "你回来的正好，我们准备吃饭呢。", "error": "回来的正好", "correct": "你回来得正好，我们准备吃饭呢。", "explanation": "动词后的程度补语必须用「得」，如“来得正好”、“做得好”。" },
            { "sentence": "尽管天气很冷，所以他还是去游泳。", "error": "所以", "correct": "尽管天气很冷，但是他还是去游泳。", "explanation": "「尽管」表示让步，后面常跟「但是/可是/还是/却」，不能跟表示因果的「所以」。" },
            { "sentence": "虽然他很有钱，却他一点也不快乐。", "error": "却他", "correct": "虽然他很有钱，他却一点也不快乐。", "explanation": "「却」是副词，必须放在主语（他）的后面，动词的前面。" },
            { "sentence": "我的汉语水平和差不多他一样。", "error": "和差不多他", "correct": "我的汉语水平和他差不多一样。", "explanation": "「差不多」应该放在比较对象「和他」之后，修饰「一样」。" },
            { "sentence": "你遇到困难时候，朋友会帮助你。", "error": "困难时候", "correct": "当你遇到困难的时候，朋友会帮助你。", "explanation": "表示在某一个时间，常用固定搭配「当……的时候」。" },
            { "sentence": "听说读很重要，写汉字也很重要。", "error": "听说读很重要，写汉字", "correct": "听说读很重要，而写汉字也很重要。", "explanation": "为了连接两个并列或对比的句子，中间常加连词「而」。" }
        ]
    },

    // 9. 终极对决 Jeopardy (诸神之战)
    "module_8_jeopardy": {
        "categories": ["词汇搭配", "课文理解", "语法运用"],
        "teamNames": { "wei": "魏国", "shu": "蜀国", "wu": "吴国" },
        "teamColors": { "wei": "#ef4444", "shu": "#10b981", "wu": "#3b82f6" },
        "questions": {
            "q_0_10": { "question": "请搭配：____生活 / ____经验。", "question_en": "Match the words: ____ life / ____ experience.", "answer": "适应 / 丰富" },
            "q_0_20": { "question": "请填空：同学____的时候，张远____从国外飞回来了。", "question_en": "Fill in the blank: During the class ____, Zhang Yuan ____ flew back from abroad.", "answer": "聚会 / 专门" },
            "q_0_30": { "question": "请搭配：感到____ / 遇到____。", "question_en": "Match the words: Feel ____ / Encounter ____.", "answer": "无聊 / 困难" },
            "q_1_10": { "question": "课文一中，马克平时常常和新朋友一起做什么？", "question_en": "In Text 1, what does Mark usually do with his new friend?", "answer": "看书、逛街、踢足球、发短信。" },
            "q_1_20": { "question": "课文四中说，怎样才能交到更多的朋友？（说出两点）", "question_en": "According to Text 4, how can one make more friends? (Name two)", "answer": "有好脾气；经常跟周围的人交流；有共同的兴趣爱好。" },
            "q_1_30": { "question": "课文五认为，真正的朋友是什么样的？", "question_en": "In Text 5, what is a true friend like?", "answer": "像镜子；遇到困难时给帮助；难过时陪在身边让你幸福。" },
            "q_2_10": { "question": "用“正好”完成句子：我想借这本书，______。", "question_en": "Complete with '正好': I want to borrow this book, ...", "answer": "你正好有一本。(答案合理即可)" },
            "q_2_20": { "question": "把两句话用“却”连起来：他每天吃很多。他不胖。", "question_en": "Connect using '却': He eats a lot every day. He is not fat.", "answer": "他每天吃很多，却不胖。" },
            "q_2_30": { "question": "用“尽管……但是……”造句。", "question_en": "Make a sentence using '尽管...但是...'.", "answer": "尽管今天下雨，但是他还是去跑步了。(答案合理即可)" }
        },
        "extra_pk_questions": [
            { "type": "快问快答", "q": "“聚会”的拼音是什么？", "q_en": "What is the pinyin for '聚会'?", "a": "jù huì" },
            { "type": "抢答", "q": "“Boring”用中文怎么说？", "q_en": "How to say 'Boring' in Chinese?", "a": "无聊 (wú liáo)" }
        ]
    },

    // 10. 词汇多项选择 (选项自动打乱)
    "module_9_vocab_practice": [
        { "question": "来中国一年了，你____这里的生活了吗？", "options": ["适应", "合适", "交", "逛"], "answer": "适应" },
        { "question": "他性格很好，喜欢____朋友。", "options": ["交", "发", "打", "看"], "answer": "交" },
        { "question": "我们____经常一起去图书馆看书。", "options": ["平时", "重新", "专门", "正好"], "answer": "平时" },
        { "question": "她很喜欢____街，走一天也不累。", "options": ["逛", "适应", "联系", "交流"], "answer": "逛" },
        { "question": "如果你有事，可以给我发____。", "options": ["短信", "镜子", "麻烦", "友谊"], "answer": "短信" },
        { "question": "我们正准备吃饭，你来得____。", "options": ["正好", "真正", "差不多", "好像"], "answer": "正好" },
        { "question": "周末我们有个同学____，你能来吗？", "options": ["聚会", "联系", "困难", "理解"], "answer": "聚会" },
        { "question": "这是我的电话，有事请随时跟我____。", "options": ["联系", "交流", "适应", "陪"], "answer": "联系" },
        { "question": "今天来的同学____有一半。", "options": ["差不多", "专门", "正好", "无聊"], "answer": "差不多" },
        { "question": "张远____从国外飞回来参加聚会。", "options": ["专门", "重新", "平时", "好像"], "answer": "专门" },
        { "question": "大学____以后，大家去了不同的城市。", "options": ["毕业", "理解", "交流", "联系"], "answer": "毕业" },
        { "question": "____你帮我把这本书给王老师。", "options": ["麻烦", "困难", "讨厌", "理解"], "answer": "麻烦" },
        { "question": "天阴了，____要下雨了。", "options": ["好像", "重新", "尽管", "却"], "answer": "好像" },
        { "question": "你这道题做错了，请____做一遍。", "options": ["重新", "专门", "差不多", "正好"], "answer": "重新" },
        { "question": "____很忙，他周末还是会去打球。", "options": ["尽管", "即使", "虽然", "如果"], "answer": "尽管" },
        { "question": "能有一个____的朋友，是一件很幸福的事。", "options": ["真正", "正好", "专门", "丰富"], "answer": "真正" },
        { "question": "希望我们的____地久天长。", "options": ["友谊", "交流", "脾气", "短信"], "answer": "友谊" },
        { "question": "李老师教了十年书，经验非常____。", "options": ["丰富", "无聊", "麻烦", "困难"], "answer": "丰富" },
        { "question": "周末一直待在家里，我觉得很____。", "options": ["无聊", "讨厌", "丰富", "正好"], "answer": "无聊" },
        { "question": "我不喜欢那个人，他很让人____。", "options": ["讨厌", "麻烦", "理解", "无聊"], "answer": "讨厌" },
        { "question": "很多人住在一栋楼里，____从来不说话。", "options": ["却", "而", "也", "还"], "answer": "却" },
        { "question": "学校____有很多超市，买东西很方便。", "options": ["周围", "镜子", "短信", "友谊"], "answer": "周围" },
        { "question": "我们应该多跟中国人____，练习口语。", "options": ["交流", "交", "联系", "理解"], "answer": "交流" },
        { "question": "孩子还小，希望你能____他的做法。", "options": ["理解", "适应", "交流", "陪"], "answer": "理解" },
        { "question": "出门前，她喜欢照一下____。", "options": ["镜子", "窗户", "照片", "短信"], "answer": "镜子" },
        { "question": "遇到____的时候，真正的朋友会帮助你。", "options": ["困难", "无聊", "聚会", "麻烦"], "answer": "困难" },
        { "question": "____你生病的时候，谁在照顾你？", "options": ["当", "在", "从", "对"], "answer": "当" },
        { "question": "周末我经常____妈妈去超市买菜。", "options": ["陪", "跟", "和", "交"], "answer": "陪" },
        { "question": "听说很重要，____写汉字也很重要。", "options": ["而", "却", "所以", "因为"], "answer": "而" },
        { "question": "这件事太____了，我自己解决不了。", "options": ["麻烦", "无聊", "丰富", "讨厌"], "answer": "麻烦" }
    ],

    // 11. 课文篇章理解
    "module_10_comprehension": [
        {
            "sectionTitle": "课文一：小夏和马克聊中国朋友",
            "textContext": "小夏：来中国快一年了，你适应这儿的生活了吗？\n马克：开始有点儿不习惯，后来就慢慢适应了，最近我还交了一个中国朋友。\n小夏：快给我讲讲你新交的朋友。\n马克：我们是在图书馆认识的。平时常常一起看书、逛街、踢足球。有时候他还给我发幽默短信。\n小夏：下次介绍我们认识认识，怎么样？\n马克：没问题！我们下午要去踢足球，正好一起去吧。",
            "questions": [
                { "question": "马克适应中国的生活了吗？", "options": ["慢慢适应了", "完全不适应", "还没适应", "不知道"], "answer": "慢慢适应了" },
                { "question": "马克和新朋友平时经常做什么？", "options": ["看书、逛街、踢足球", "看电影、喝咖啡、上网", "学习法律、加班", "去超市、做饭"], "answer": "看书、逛街、踢足球" }
            ]
        },
        {
            "sectionTitle": "课文二：小李和小林聊聚会",
            "textContext": "小李：星期天同学聚会，你能来吗？\n小林：能来。班里同学你联系得怎么样了？\n小李：差不多一半儿吧，张远还专门从国外飞回来呢。\n小林：毕业快十年了，真想大家！今天早上我在地铁站遇到了王静，她毕业后去上海工作了，这次是来旅游的。\n小李：太好了！麻烦你跟她联系一下，请她一起来。学校门口饭店，六点半别迟到！",
            "questions": [
                { "question": "张远为了参加聚会做了什么？", "options": ["专门从国外飞回来", "专门请假", "买了很多礼物", "订了饭店"], "answer": "专门从国外飞回来" },
                { "question": "小林在哪里遇到了王静？", "options": ["在地铁站", "在学校门口", "在上海", "在图书馆"], "answer": "在地铁站" }
            ]
        },
        {
            "sectionTitle": "课文三：孙月和王静聊朋友",
            "textContext": "孙月：这是什么时候的照片？\n王静：上大学时的。一看到照片，好像重新回到了校园。\n孙月：旁边是你的好朋友吧？你们现在还联系吗？\n王静：当然，尽管毕业这么多年，我们还是经常联系，每次都有说不完的话。\n孙月：真羡慕你！我大学最好的朋友去了南方，我们已经好久没联系了。要知道，能有一个真正的朋友多么不容易！",
            "questions": [
                { "question": "王静现在还和大学朋友联系吗？", "options": ["经常联系", "偶尔联系", "不联系了", "只发短信"], "answer": "经常联系" },
                { "question": "孙月为什么羡慕王静？", "options": ["因为王静还有真正的友谊", "因为王静越来越年轻", "因为王静在南方工作", "因为王静去过很多地方"], "answer": "因为王静还有真正的友谊" }
            ]
        },
        {
            "sectionTitle": "课文四：怎样交朋友",
            "textContext": "每个人都需要朋友，朋友可以丰富我们的生活，离开朋友生活会很无聊。怎样才能交到更多朋友呢？\n首先，要有好脾气。脾气不好的人很难跟人交朋友。\n其次，要经常跟周围的人交流。交流能让人们互相了解。\n最后，如果有共同的兴趣、爱好或者习惯，就更容易成为朋友了。",
            "questions": [
                { "question": "根据课文，朋友的作用是什么？", "options": ["丰富我们的生活", "帮我们做作业", "借钱给我们", "带我们去旅游"], "answer": "丰富我们的生活" },
                { "question": "什么样的人很难交到朋友？", "options": ["脾气不好的人", "没钱的人", "不漂亮的人", "工作忙的人"], "answer": "脾气不好的人" }
            ]
        },
        {
            "sectionTitle": "课文五：真正的朋友",
            "textContext": "人的一生必须要有自己真正的朋友。什么是真正的朋友？不同的人有不同的理解。\n有些人觉得朋友是能一起快乐的人；有些人觉得朋友应该像镜子，能帮自己看到缺点。\n而我的理解是：当你遇到困难时，真正的朋友会站出来及时给你帮助；当你无聊或难过时，真正的朋友会陪在你身边，想办法让你感到幸福。",
            "questions": [
                { "question": "有些人觉得朋友像什么？", "options": ["镜子", "月亮", "星星", "书本"], "answer": "镜子" },
                { "question": "作者认为真正的朋友在你有困难时会怎么做？", "options": ["站出来给你帮助", "假装不知道", "只说好听的话", "请你吃饭"], "answer": "站出来给你帮助" }
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
window.LESSONS_DATA['hsk4-2'] = lessonData;
window.lessonData = lessonData; // For direct access during development

// Node.js export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lessonData;
}