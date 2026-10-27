/*
================================================================
== 课程数据文件 (Lesson Data File)
== 第一课: 简单的爱情 
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
    "lesson": "HSK 4 - 第一课《简单的爱情》",
    "students": [ "列夏", "丽莎", "明溪", "星悦", "德昊", "任华", "梦航", "基里尔", "萨~沙~", "萨沙", "达铭", "安德烈", "纪嘉", "高斯佳", "瓦列", "Maiia" ],

    "pinyin_map": {
        "法律": "fǎlǜ", "俩": "liǎ", "印象": "yìnxiàng", "深": "shēn", "熟悉": "shúxī", "不仅": "bùjǐn", "性格": "xìnggé",
        "开玩笑": "kāi wánxiào", "从来": "cónglái", "最好": "zuìhǎo", "共同": "gòngtóng", "适合": "shìhé", "幸福": "xìngfú", 
        "生活": "shēnghuó", "刚": "gāng", "浪漫": "làngmàn", "够": "gòu", "缺点": "quēdiǎn", "接受": "jiēshòu",
        "羡慕": "xiànmù", "爱情": "àiqíng", "星星": "xīngxing", "加班": "jiābān", "亮": "liàng", "感动": "gǎndòng",
        "自然": "zìrán", "原因": "yuányīn", "互相": "hùxiāng", "吸引": "xīyǐn", "幽默": "yōumò", "脾气": "píqi"
    },

    "translation_dict": {
        "法律": "law", "俩": "two; both", "印象": "impression", "深": "deep", "熟悉": "to be familiar with", "不仅": "not only", "性格": "character; personality",
        "开玩笑": "to be kidding; to crack a joke", "从来": "always; all along (never)", "最好": "had better", "共同": "common; shared", "适合": "to suit; to fit", "幸福": "happy; happiness",
        "生活": "life; to live", "刚": "just; not long", "浪漫": "romantic", "够": "to be enough", "缺点": "shortcoming; weakness", "接受": "to accept",
        "羡慕": "to envy; to admire", "爱情": "romantic love", "星星": "star", "加班": "to work overtime", "亮": "to shine; to be lit", "感动": "to move; to touch (emotionally)",
        "自然": "naturally; natural", "原因": "reason", "互相": "mutually; each other", "吸引": "to attract", "幽默": "humorous", "脾气": "temper"
    },

    "collocations": [
        { "left": "学习", "right": "法律" }, { "left": "印象", "right": "很深" }, { "left": "性格", "right": "不错" },
        { "left": "慢慢", "right": "熟悉" }, { "left": "开", "right": "玩笑" }, { "left": "从来没", "right": "去过" },
        { "left": "共同的", "right": "爱好" }, { "left": "适合", "right": "妈妈" }, { "left": "生活", "right": "幸福" },
        { "left": "不仅高", "right": "而且帅" }, { "left": "刚", "right": "结婚" }, { "left": "浪漫的", "right": "爱情" },
        { "left": "时间", "right": "不够" }, { "left": "接受", "right": "缺点" }, { "left": "羡慕", "right": "别人" },
        { "left": "经常", "right": "加班" }, { "left": "灯", "right": "亮着" }, { "left": "感动得", "right": "哭了" },
        { "left": "互相", "right": "吸引" }, { "left": "重要", "right": "原因" }, { "left": "人很", "right": "幽默" },
        { "left": "发", "right": "脾气" }
    ],

    // 1. 词汇基础模块
    "module_1_vocab": {
        "pinyin_match": [
            ["法律", "俩", "印象", "深", "熟悉", "不仅", "性格"],
            ["开玩笑", "从来", "最好", "共同", "适合", "幸福", "生活"],
            ["刚", "浪漫", "够", "缺点", "接受", "羡慕", "爱情"],
            ["星星", "加班", "亮", "感动", "自然", "原因"],
            ["互相", "吸引", "幽默", "脾气"]
        ],
        "char_match": [
            ["学法律", "我们俩", "印象很深", "很熟悉", "不仅...也", "性格很好"],
            ["开玩笑", "从来不", "你最好去", "共同爱好", "很适合", "生活幸福"],
            ["刚下课", "很浪漫", "钱不够", "接受缺点", "羡慕你", "爱情故事"],
            ["看星星", "周末加班", "灯亮了", "很感动", "自然现象", "迟到原因"],
            ["互相帮助", "互相吸引", "很幽默", "脾气不好"]
        ],
        "guess_words": [
            "法律", "俩", "印象", "熟悉", "不仅", "性格", "从来",
            "共同", "适合", "幸福", "生活", "浪漫", "缺点", "接受",
            "羡慕", "爱情", "星星", "加班", "感动", "原因", "互相",
            "吸引", "幽默", "脾气"
        ]
    },

    // 2. 词汇操练 (图片炸弹、抢答揭盖、盲盒造句)
    "module_2_vocab_drill": {
        "word_bomb": [
            { "word": "法律", "img_url": "img1/falv.jpg", "en_hint": "law" },
            { "word": "加班", "img_url": "img1/jiaban.jpg", "en_hint": "work overtime" },
            { "word": "星星", "img_url": "img1/xingxing.jpg", "en_hint": "star" },
            { "word": "浪漫", "img_url": "img1/langman.jpg", "en_hint": "romantic" },
            { "word": "发脾气", "img_url": "img1/piqi.jpg", "en_hint": "lose temper" },
            { "word": "开玩笑", "img_url": "img1/kaiwanxiao.jpg", "en_hint": "joke around" },
            { "word": "幸福", "img_url": "img1/xingfu.jpg", "en_hint": "happiness" },
            { "word": "缺点", "img_url": "img1/quedian.jpg", "en_hint": "shortcoming" }
        ],
        "guess_words": [
            { "target_word": "印象" }, { "target_word": "熟悉" }, { "target_word": "性格" },
            { "target_word": "共同" }, { "target_word": "适合" }, { "target_word": "生活" },
            { "target_word": "接受" }, { "target_word": "羡慕" }, { "target_word": "爱情" },
            { "target_word": "亮" }, { "target_word": "感动" }, { "target_word": "原因" },
            { "target_word": "互相" }, { "target_word": "吸引" }, { "target_word": "幽默" }
        ],
        "blind_box_spinner": [
            { "words": [{ "text": "印象" }, { "text": "深" }, { "text": "熟悉" }] },
            { "words": [{ "text": "不仅" }, { "text": "性格" }, { "text": "俩" }] },
            { "words": [{ "text": "开玩笑" }, { "text": "从来" }, { "text": "最好" }] },
            { "words": [{ "text": "共同" }, { "text": "适合" }, { "text": "生活" }] },
            { "words": [{ "text": "刚" }, { "text": "浪漫" }, { "text": "够" }] },
            { "words": [{ "text": "缺点" }, { "text": "接受" }, { "text": "爱情" }] },
            { "words": [{ "text": "星星" }, { "text": "加班" }, { "text": "亮" }] },
            { "words": [{ "text": "感动" }, { "text": "原因" }, { "text": "自然" }] },
            { "words": [{ "text": "互相" }, { "text": "吸引" }, { "text": "幽默" }] }
        ]
    },

    // 3. 语法逻辑多关卡
    "module_3_grammar": {
        "grammar_points": [
            {
                "grammar_point_name": "语法1：不仅…… 也/还/而且…… (Not only... but also)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["他", "不仅", "足球", "踢得好，", "性格", "也", "不错。"], "correct_answer": "他不仅足球踢得好，性格也不错。", "en_hint": "Not only does he play football well, but his personality is also good." },
                        { "chunks": ["我", "觉得", "在网上", "买东西", "不仅", "方便，", "而且", "很便宜。"], "correct_answer": "我觉得在网上买东西不仅方便，而且很便宜。", "en_hint": "I think buying things online is not only convenient, but also very cheap." },
                        { "chunks": ["中国", "不仅", "风景", "很美，", "人", "也", "很热情。"], "correct_answer": "中国不仅风景很美，人也很热情。", "en_hint": "Not only is the scenery in China beautiful, but the people are also very enthusiastic." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img1/langman.jpg",
                            "hint": "用“不仅……而且……”造句：她会说汉语，还会说日语。",
                            "en_hint": "Make a sentence: She can speak Chinese, and she can also speak Japanese.",
                            "keywords": ["不仅", "会说", "而且"],
                            "reference_answer": "她不仅会说汉语，而且还会说日语。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你的朋友长得很高，而且长得很帅。请用“不仅……也/而且……”描述他。",
                            "en_scenario": "Your friend is tall and handsome. Describe him using '不仅...也/而且...'.",
                            "reference": "我的朋友不仅很高，而且很帅。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "语法2：从来 (Always / Never [used with 没/不])",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["虽然", "认识的时间", "不长，", "但", "我", "从来", "没", "这么", "快乐过。"], "correct_answer": "虽然认识的时间不长，但我从来没这么快乐过。", "en_hint": "Even though we haven't known each other long, I have never been this happy." },
                        { "chunks": ["王静", "上课", "从来", "不", "迟到。"], "correct_answer": "王静上课从来不迟到。", "en_hint": "Wang Jing is never late for class." },
                        { "chunks": ["我", "经常", "遇到她，", "但是", "从来没", "说", "过", "话。"], "correct_answer": "我经常遇到她，但是从来没说过话。", "en_hint": "I often run into her, but we have never spoken." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img1/piqi.jpg",
                            "hint": "用“从来不”完成句子：爸爸性格非常好，______。",
                            "en_hint": "Complete the sentence with '从来不': Dad's personality is very good, he never...",
                            "keywords": ["从来不", "发脾气"],
                            "reference_answer": "爸爸性格非常好，从来不发脾气。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "有人问你吃过北京烤鸭吗？你想说你一次都没吃过。用“从来没”回答。",
                            "en_scenario": "Someone asks if you've had Peking duck. Say you have never eaten it.",
                            "reference": "我从来没吃过北京烤鸭。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "语法3：即使…… 也…… (Even if... still...)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["即使", "晚上", "加班", "到零点，", "家里", "也", "还", "亮着灯。"], "correct_answer": "即使晚上加班到零点，家里也还亮着灯。", "en_hint": "Even if working overtime until midnight, the lights at home are still on." },
                        { "chunks": ["即使", "明天", "下雨，", "他", "也", "去", "运动。"], "correct_answer": "即使明天下雨，他也去运动。", "en_hint": "Even if it rains tomorrow, he will still go exercise." },
                        { "chunks": ["即使", "很累，", "她", "也", "要", "写完作业", "再睡觉。"], "correct_answer": "即使很累，她也要写完作业再睡觉。", "en_hint": "Even if she's tired, she still wants to finish homework before sleeping." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img1/jiaban.jpg",
                            "hint": "用“即使……也……”造句：很贵 / 孩子要买",
                            "en_hint": "Make a sentence: very expensive / child wants to buy it",
                            "keywords": ["即使", "很贵", "也"],
                            "reference_answer": "即使很贵，孩子也要买。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你朋友不同意你去美国，但你下定决心一定要去。请用“即使……也……”表达。",
                            "en_scenario": "Your friend disagrees with you going to America, but you are determined. Express this.",
                            "reference": "即使你不同意，我也要去美国。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "语法4：（在）…… 上 (In terms of... / On the aspect of...)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["我们", "在", "生活习惯", "上，", "非常", "不一样。"], "correct_answer": "我们在生活习惯上，非常不一样。", "en_hint": "In terms of living habits, we are very different." },
                        { "chunks": ["两个", "人", "共同生活，", "更", "需要", "性格", "上", "互相吸引。"], "correct_answer": "两个人共同生活，更需要性格上互相吸引。", "en_hint": "For two people living together, it's even more necessary to be mutually attracted in terms of personality." },
                        { "chunks": ["中国", "在", "文化", "上，", "和", "俄罗斯", "不一样。"], "correct_answer": "中国在文化上，和俄罗斯不一样。", "en_hint": "China and Russia are different in terms of culture." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "img1/xingfu.jpg",
                            "hint": "回答问题：你和你爸爸，谁更喜欢运动？(用“在……上”)",
                            "en_hint": "Answer: Who likes sports more, you or your dad? (use 在...上)",
                            "keywords": ["在", "爱好", "上"],
                            "reference_answer": "在爱好上，我更像我爸爸，我们都喜欢运动。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "朋友问你在这儿过得怎么样，你想说学习和生活方面都很好。请用“在……上”。",
                            "en_scenario": "A friend asks how you're doing. Say that in terms of study and life, everything is good.",
                            "reference": "在学习上和生活上，我都挺好的。"
                        }
                    ]
                }
            }
        ],
        "synonym_distinction": [
            {
                "sentence": "这部电影讲的是一个浪漫的爱情故事，很多人都被____得哭了。",
                "options": ["感动", "感到", "感兴趣"],
                "answer": "感动",
                "explanation": "【感动】是动词，表示思想感情受外界事物的影响而激动，引起同情或向慕（Moved emotionally）。"
            },
            {
                "sentence": "他的话让我____事情不太好。",
                "options": ["感到", "感动", "感兴趣"],
                "answer": "感到",
                "explanation": "【感到】是动词，表示觉得、认为（To feel/sense something）。"
            },
            {
                "sentence": "很多留学生到中国学习汉语，是因为他们对中国文化____。",
                "options": ["感兴趣", "感动", "感到"],
                "answer": "感兴趣",
                "explanation": "【对……感兴趣】是固定搭配，表示对某事物有兴趣（To be interested in）。"
            }
        ]
    },

    // 4. 篇章阅读 (语段排序)
    "module_4_text": {
        "level_1_sorting": [
            {
                "id": 1,
                "shuffled_items": [
                    { "tag": "A", "content": "王静和李进是在一次足球比赛中认识的。" },
                    { "tag": "B", "content": "因为李进一个人踢进两个球，王静对他印象很深。" },
                    { "tag": "C", "content": "后来他们慢慢熟悉了，王静觉得他不仅球踢得好，性格也不错。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "先交代认识的场景（A），再说明留下深刻印象的原因（B），最后是熟悉后的评价（C）。"
            },
            {
                "id": 2,
                "shuffled_items": [
                    { "tag": "A", "content": "王静下个月五号就要和李进结婚了。" },
                    { "tag": "B", "content": "虽然他们刚认识一个月，但她从来没这么快乐过。" },
                    { "tag": "C", "content": "李老师觉得，他们有很多共同爱好，真的很适合。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "先提出结婚的消息（A），接着解释虽然时间短但很快乐（B），最后是老师的祝福与评价（C）。"
            },
            {
                "id": 3,
                "shuffled_items": [
                    { "tag": "A", "content": "高老师和丈夫刚结婚时每天都觉得新鲜，有说不完的话。" },
                    { "tag": "B", "content": "可是现在，高老师每天看到的都是丈夫的缺点。" },
                    { "tag": "C", "content": "李老师告诉她，只有接受他的缺点，才能更好地一起生活。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "按照时间顺序：刚结婚时（A），现在的烦恼（B），最后是李老师的建议（C）。"
            },
            {
                "id": 4,
                "shuffled_items": [
                    { "tag": "A", "content": "很多女孩子羡慕浪漫的爱情，但什么是浪漫呢？" },
                    { "tag": "B", "content": "年轻人觉得浪漫是星星月亮，中年人觉得是加班回家时亮着的灯。" },
                    { "tag": "C", "content": "其实，让我们感动的，就是生活中简单的爱情。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "先提出“什么是浪漫”的问题（A），接着列举不同年龄段的看法（B），最后总结真正感人的是简单的爱情（C）。"
            },
            {
                "id": 5,
                "shuffled_items": [
                    { "tag": "A", "content": "说到结婚，人们就会很自然地想起爱情。" },
                    { "tag": "B", "content": "两个人共同生活，不仅需要浪漫，更需要在性格上互相吸引。" },
                    { "tag": "C", "content": "比如我丈夫脾气很好，很幽默，我们结婚十年几乎没红过脸。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "由结婚引出爱情（A），提出理论观点：需要性格互相吸引（B），最后用自己丈夫的例子来证明（C）。"
            }
        ]
    },

    // 5. 跟读练习
    "module_4_repetition": {
        "sentences": [
            "我们班跟他们班比赛，他一个人踢进两个球，我对他印象很深。",
            "他不仅足球踢得好，性格也不错。",
            "虽然我们认识的时间不长，但我从来没这么快乐过。",
            "两个人在一起，最好能有共同的兴趣和爱好。",
            "两个人共同生活，只有浪漫和新鲜感是不够的。",
            "只有接受了他的缺点，你们才能更好地一起生活。",
            "浪漫是即使晚上加班到零点，到家时，家里也还亮着灯。",
            "其实，让我们感动的，就是生活中简单的爱情。",
            "两个人共同生活，不仅需要浪漫的爱情，更需要性格上互相吸引。",
            "即使是很普通的事情，从他嘴里说出来也会变得很有意思。"
        ]
    },

    // 6. 动态词云
    "module_5_wordcloud": {
        "title": "💬 提到“浪漫的爱情”，你会想到什么？",
        "hint": "请扫码发送1-2个词描述（如：星星、结婚、幸福、陪伴、感动、花…）"
    },

    // 7. 极限挑战
    "module_6_challenge": {
        "challenge_sets": [
            { "id": 1, "keywords": ["不仅", "性格", "印象"], "framework": "王静对李进的____很深，因为他____足球踢得好，____也不错。", "translation": "Wang Jing has a deep impression of Li Jin because he not only plays football well, but his personality is also good." },
            { "id": 2, "keywords": ["从来", "共同", "适合"], "framework": "我们有很多____的爱好，我____没这么快乐过，看来我找到了____我的人。", "translation": "We have many common hobbies. I have never been this happy before. It seems I found the right person for me." },
            { "id": 3, "keywords": ["浪漫", "缺点", "接受"], "framework": "结婚后只有____是不够的，你必须____他的____，才能一起生活。", "translation": "After marriage, just romance is not enough; you must accept his shortcomings to live together." },
            { "id": 4, "keywords": ["加班", "即使", "感动"], "framework": "最让我____的浪漫是，____晚上____到零点，家里也还亮着灯。", "translation": "The romance that moves me the most is that even if I work overtime until midnight, the lights at home are still on." },
            { "id": 5, "keywords": ["互相", "吸引", "幽默"], "framework": "两个人共同生活需要在性格上____ ____。我丈夫是个很____的人。", "translation": "Two people living together need to mutually attract each other in terms of personality. My husband is a very humorous person." }
        ]
    },

    // 8. 找茬大师（文字辨错）
    "module_7_find_error": {
        "questions": [
            { "sentence": "我不仅喜欢吃苹果，也我妹妹喜欢吃苹果。", "error": "也我妹妹喜欢", "correct": "不仅我喜欢吃苹果，我妹妹也喜欢吃苹果。", "explanation": "当主语不同时（我 / 妹妹），「不仅」要放在第一个主语的前面。" },
            { "sentence": "我从来去过美国。", "error": "从来去过", "correct": "我从来没去过美国。", "explanation": "「从来」表示过去到现在都一样，通常用于否定句，后面必须加「不」或「没」。" },
            { "sentence": "即使很累，我但是要写完作业。", "error": "我但是要", "correct": "即使很累，我也要写完作业。", "explanation": "「即使」表示假设的让步，后面必须用「也」，不能用「但是」。" },
            { "sentence": "在学习，她是个好学生。", "error": "在学习", "correct": "在学习上，她是个好学生。", "explanation": "表示在某一方面，应该用结构「在……上」，缺少了方位词「上」。" },
            { "sentence": "我们共同爱好是打篮球。", "error": "我们共同爱好", "correct": "我们共同的爱好是打篮球。", "explanation": "「共同」作形容词修饰名词时，通常要加「的」，如“共同的爱好”。" },
            { "sentence": "这双鞋子很适合对于我。", "error": "适合对于", "correct": "这双鞋子很适合我。", "explanation": "「适合」是及物动词，后面直接加宾语，不需要加「对于」。" }
        ]
    },

    // 9. 终极对决 Jeopardy (诸神之战)
    "module_8_jeopardy": {
        "categories": ["词汇搭配", "课文理解", "语法造句"],
        "teamNames": { "wei": "魏国", "shu": "蜀国", "wu": "吴国" },
        "teamColors": { "wei": "#ef4444", "shu": "#10b981", "wu": "#3b82f6" },
        "questions": {
            "q_0_10": { "question": "请填空：我对他____很深，后来就慢慢熟悉了。", "question_en": "Fill in the blank: I had a deep ____ of him, and later we slowly became familiar.", "answer": "印象" },
            "q_0_20": { "question": "请填空：每个人都有____，我们要学会____别人的____。", "question_en": "Fill in the blank: Everyone has ____, we must learn to ____ others' ____.", "answer": "缺点 / 接受" },
            "q_0_30": { "question": "请填空：很多人都特别____我们有这么浪漫的____。", "question_en": "Fill in the blank: Many people especially ____ that we have such a romantic ____.", "answer": "羡慕 / 爱情" },
            "q_1_10": { "question": "课文一中，王静为什么喜欢李进？", "question_en": "In Text 1, why does Wang Jing like Li Jin?", "answer": "因为他不仅足球踢得好，性格也不错。" },
            "q_1_20": { "question": "课文三中，李老师认为两个人共同生活，最重要的是什么？", "question_en": "In Text 3, what does Teacher Li think is most important for living together?", "answer": "只有浪漫和新鲜感是不够的，只有接受了他的缺点，才能更好地一起生活。" },
            "q_1_30": { "question": "课文五中，丈夫的什么性格让作者觉得很幸福？", "question_en": "In Text 5, what personality of the husband makes the author feel happy?", "answer": "丈夫是个很幽默的人，脾气也不错，遇到普通事也能说得很有意思。" },
            "q_2_10": { "question": "用“不仅……而且……”造句。", "question_en": "Make a sentence with '不仅...而且...'.", "answer": "他不仅很高，而且很帅。(答案合理即可)" },
            "q_2_20": { "question": "用“从来没”造句。", "question_en": "Make a sentence with '从来没'.", "answer": "我从来没去过中国。(答案合理即可)" },
            "q_2_30": { "question": "用“即使……也……”造句。", "question_en": "Make a sentence with '即使...也...'.", "answer": "即使明天下大雨，我也要去上课。(答案合理即可)" }
        },
        "extra_pk_questions": [
            { "type": "快问快答", "q": "“适合”和“合适”有什么区别？", "q_en": "What's the difference between '适合' and '合适'?", "a": "“适合”是动词（适合我）；“合适”是形容词（这件衣服很合适）。" },
            { "type": "抢答", "q": "中年人认为什么是浪漫？", "q_en": "What do middle-aged people consider romantic?", "a": "即使晚上加班到零点，到家时，家里也还亮着灯。" }
        ]
    },

    // 10. 词汇多项选择 (已按需分布正确答案 A/B/C/D)
    "module_9_vocab_practice": [
        { "question": "我大学学的是____，现在在法院工作。", "options": ["法律", "印象", "脾气", "星星"], "answer": "法律" },
        { "question": "这____鞋子有点儿小，有没有大一点的？", "options": ["两", "俩", "双", "对"], "answer": "双" },
        { "question": "你对北京的____怎么样？", "options": ["原因", "印象", "爱情", "幽默"], "answer": "印象" },
        { "question": "这条河的水很____，游泳要小心。", "options": ["深", "亮", "共同", "熟悉"], "answer": "深" },
        { "question": "我们每天一起上课，很快就____了。", "options": ["幽默", "感动", "熟悉", "加班"], "answer": "熟悉" },
        { "question": "他____会说英语，还会说法语。", "options": ["从来", "不仅", "即使", "互相"], "answer": "不仅" },
        { "question": "姐姐的____很好，很少生气。", "options": ["法律", "印象", "性格", "缺点"], "answer": "性格" },
        { "question": "你别生气，我是在跟你____呢。", "options": ["开玩笑", "发脾气", "加班", "接受"], "answer": "开玩笑" },
        { "question": "我____没吃过这么好吃的烤鸭。", "options": ["不仅", "从来", "互相", "即使"], "answer": "从来" },
        { "question": "明天考试，你____今晚早点睡觉。", "options": ["刚", "适合", "最好", "够"], "answer": "最好" },
        { "question": "我们有很多____的爱好，所以成了好朋友。", "options": ["浪漫", "幸福", "共同", "幽默"], "answer": "共同" },
        { "question": "这件红色的衣服很____你。", "options": ["合适", "适合", "接受", "吸引"], "answer": "适合" },
        { "question": "祝你们新婚快乐，永远____！", "options": ["浪漫", "幸福", "共同", "自然"], "answer": "幸福" },
        { "question": "大连的____很舒服，我很喜欢这里。", "options": ["爱情", "法律", "脾气", "生活"], "answer": "生活" },
        { "question": "我____下课，马上就去找你。", "options": ["刚", "从来", "即使", "最好"], "answer": "刚" },
        { "question": "送玫瑰花是一件很____的事情。", "options": ["幸福", "浪漫", "幽默", "共同"], "answer": "浪漫" },
        { "question": "我的钱不____了，你能借我一点吗？", "options": ["少", "深", "足", "够"], "answer": "够" },
        { "question": "每个人都有____，我们不能要求别人完美。", "options": ["优点", "缺点", "原因", "脾气"], "answer": "缺点" },
        { "question": "这个礼物太贵了，我不能____。", "options": ["适合", "吸引", "感动", "接受"], "answer": "接受" },
        { "question": "她找到了一份好工作，大家都非常____她。", "options": ["羡慕", "感动", "吸引", "熟悉"], "answer": "羡慕" },
        { "question": "这就是我想要的简单____。", "options": ["爱情", "脾气", "印象", "法律"], "answer": "爱情" },
        { "question": "今天晚上的天空中有很多____。", "options": ["月亮", "星星", "灯", "太阳"], "answer": "星星" },
        { "question": "公司最近很忙，爸爸每天都要____。", "options": ["发脾气", "开玩笑", "加班", "接受"], "answer": "加班" },
        { "question": "天____了，我们该起床了。", "options": ["黑", "亮", "深", "明"], "answer": "亮" },
        { "question": "那个电影的故事让人非常____，我都哭了。", "options": ["羡慕", "幽默", "感动", "浪漫"], "answer": "感动" },
        { "question": "如果你每天努力练习，汉语____会提高。", "options": ["自然", "从来", "互相", "不仅"], "answer": "自然" },
        { "question": "你能告诉我你迟到的____吗？", "options": ["印象", "原因", "脾气", "法律"], "answer": "原因" },
        { "question": "同学之间应该____帮助。", "options": ["互相", "不仅", "共同", "从来"], "answer": "互相" },
        { "question": "这部小说的情节很____人。", "options": ["羡慕", "接受", "吸引", "感动"], "answer": "吸引" },
        { "question": "李老师很____，同学们都喜欢听他的课。", "options": ["深", "幽默", "浪漫", "幸福"], "answer": "幽默" },
        { "question": "他虽然工作很累，但从来不跟家人发____。", "options": ["玩笑", "脾气", "缺点", "原因"], "answer": "脾气" }
    ],

    // 11. 课文篇章理解
    "module_10_comprehension": [
        {
            "sectionTitle": "课文一：孙月和王静聊王静的男朋友",
            "textContext": "孙月：听说你男朋友李进跟你是同一个学校的，是你同学吗？\n王静：是的，他学的是新闻，我学的是法律，我和他不是一个班。\n孙月：那你们俩是怎么认识的？\n王静：我们是在一次足球比赛中认识的。我们班跟他们班比赛，他一个人踢进两个球，我对他印象很深，后来就慢慢熟悉了。\n孙月：你为什么喜欢他？\n王静：他不仅足球踢得好，性格也不错。",
            "questions": [
                { "question": "王静和李进是学什么专业的？", "options": ["王静学法律，李进学新闻", "王静学新闻，李进学法律", "两个人都学新闻", "两个人都学法律"], "answer": "王静学法律，李进学新闻" },
                { "question": "王静为什么对李进印象很深？", "options": ["他一个人踢进了两个球", "他是学新闻的", "他长得很帅", "他喜欢开玩笑"], "answer": "他一个人踢进了两个球" }
            ]
        },
        {
            "sectionTitle": "课文二：王静跟李老师聊结婚的事情",
            "textContext": "王静：李老师，我下个月五号就要结婚了。\n李老师：你是在开玩笑吧？你们不是才认识一个月？\n王静：虽然我们认识的时间不长，但我从来没这么快乐过。\n李老师：两个人在一起，最好能有共同的兴趣和爱好。\n王静：我们有很多共同的爱好，经常一起打球、唱歌、做菜。\n李老师：看来你真的找到适合你的人了。祝你们幸福！",
            "questions": [
                { "question": "李老师为什么觉得王静在开玩笑？", "options": ["因为他们才认识一个月就要结婚", "因为王静没有男朋友", "因为他们没有共同的爱好", "因为王静还没毕业"], "answer": "因为他们才认识一个月就要结婚" },
                { "question": "王静和男朋友有哪些共同的爱好？", "options": ["打球、唱歌、做菜", "看书、看电影、旅游", "踢足球、学法律、看新闻", "加班、买衣服、听音乐"], "answer": "打球、唱歌、做菜" }
            ]
        },
        {
            "sectionTitle": "课文三：高老师和李老师聊结婚后的生活",
            "textContext": "高老师：听说您跟妻子结婚快二十年了？\n李老师：到6月9号，我们就结婚二十年了。这么多年，我们的生活一直挺幸福的。\n高老师：我和丈夫刚结婚的时候，每天都觉得新鲜，在一起有说不完的话。但是现在……\n李老师：两个人共同生活，只有浪漫和新鲜感是不够的。\n高老师：您说的对！我现在每天看到的都是他的缺点。\n李老师：两个人在一起时间长了，就会有很多问题。只有接受了他的缺点，你们才能更好地一起生活。",
            "questions": [
                { "question": "高老师现在面临什么问题？", "options": ["她每天看到的都是丈夫的缺点", "她丈夫经常出差", "她和丈夫没有新鲜感，要离婚", "她丈夫不喜欢浪漫"], "answer": "她每天看到的都是丈夫的缺点" },
                { "question": "李老师给了高老师什么建议？", "options": ["要接受丈夫的缺点", "要多制造浪漫", "要找共同的爱好", "要经常去旅游寻找新鲜感"], "answer": "要接受丈夫的缺点" }
            ]
        },
        {
            "sectionTitle": "课文四：关于浪漫的定义",
            "textContext": "很多女孩子羡慕浪漫的爱情。那什么是浪漫呢？\n年轻人说：浪漫是她想要月亮时，你不会给她星星；\n中年人说：浪漫是即使晚上加班到零点，到家时，自己家里也还亮着灯；\n老年人说：浪漫其实就像歌中唱的那样，“我能想到最浪漫的事，就是和你一起慢慢变老。”\n其实，让我们感动的，就是生活中简单的爱情。有时候，简单就是最大的幸福。",
            "questions": [
                { "question": "中年人认为什么是浪漫？", "options": ["加班回家时家里还亮着灯", "想要月亮不给星星", "一起慢慢变老", "送很贵的礼物"], "answer": "加班回家时家里还亮着灯" },
                { "question": "这段话最后总结，什么是最大的幸福？", "options": ["简单就是最大的幸福", "有钱就是最大的幸福", "年轻就是最大的幸福", "不加班就是最大的幸福"], "answer": "简单就是最大的幸福" }
            ]
        },
        {
            "sectionTitle": "课文五：爱情与性格",
            "textContext": "说到结婚，人们就会很自然地想起爱情。爱情是结婚的重要原因，因为两个人共同生活，不仅需要浪漫的爱情，更需要性格上互相吸引。\n我丈夫是个很幽默的人。即使是很普通的事情，从他嘴里说出来也会变得很有意思。在我难过的时候，他总是有办法让我高兴起来。而且他的脾气也不错，结婚快十年了，我们俩几乎没因为什么事红过脸，很多人都特别羡慕我们。",
            "questions": [
                { "question": "两个人共同生活，除了爱情，还需要什么？", "options": ["性格上互相吸引", "很多钱", "共同的爱好", "很好的工作"], "answer": "性格上互相吸引" },
                { "question": "作者的丈夫是一个什么样的人？", "options": ["幽默、脾气好", "喜欢浪漫、喜欢加班", "很帅、喜欢踢球", "很有钱、脾气差"], "answer": "幽默、脾气好" }
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
window.LESSONS_DATA['hsk4-1'] = lessonData;
window.lessonData = lessonData; // For direct access during development

// Node.js export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lessonData;
}
