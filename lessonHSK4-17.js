/*
================================================================
== 课程数据文件 (Lesson Data File)
== 第十七课: 人与自然
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
    "lesson": "HSK 4 - 第十七课《人与自然》",
    "students": [ "列夏", "丽莎", "明溪", "星悦", "德昊", "任华", "梦航", "基里尔", "萨~沙~", "萨沙", "达铭", "安德烈", "纪嘉", "高斯佳", "瓦列", "Maiia" ],

    "pinyin_map": {
        "凉快": "liángkuai", "热闹": "rènao", "云": "yún", "广播": "guǎngbō", "照": "zhào",
        "倒": "dào", "毛": "máo", "抱": "bào", "干": "gàn", "严格": "yángé",
        "难受": "nánshòu", "趟": "tàng", "放暑假": "fàngshǔjià", "老虎": "lǎohǔ", "入口": "rùkǒu",
        "排队": "páiduì", "活泼": "huópō", "亚洲": "Yàzhōu", "儿童节": "Liùyī Értóngjié", "社会": "shèhuì",
        "竞争": "jìngzhēng", "森林": "sēnlín", "剩": "shèng", "暖和": "nuǎnhuo", "海洋": "hǎiyáng",
        "底": "dǐ", "美人鱼": "měirényú", "公里": "gōnglǐ", "排列": "páiliè", "梦": "mèng",
        // Additional words from context/notes
        "秋天": "qiūtiān", "草地": "cǎodì", "刮": "guā", "黄叶": "huángyè", "降": "jiàng",
        "植物": "zhíwù", "吸引": "xīyǐn", "游客": "yóukè", "参观": "cānguān", "改天": "gǎitiān",
        "专门": "zhuānmén", "可惜": "kěxī", "照片": "zhàopiàn", "生日": "shēngrì", "约": "yuē",
        "稍微": "shāowēi", "教": "jiāo", "学会": "xuéhuì", "任务": "rènwu", "熟悉": "shúxī",
        "按照": "ànzhào", "明白": "míngbai", "陪": "péi", "硕士": "shuòshì", "博士": "bóshì",
        "教授": "jiàoshòu", "使馆": "shǐguǎn", "火车票": "huǒchēpiào", "过程": "guòchéng", "压力": "yālì",
        "困难": "kùnnan", "机会": "jīhuì", "西瓜": "xīguā", "代表": "dàibiǎo", "放弃": "fàngqì",
        "拒绝": "jùjué", "误会": "wùhuì", "伤心": "shāngxīn", "态度": "tàidù", "礼貌": "lǐmào",
        "原谅": "yuánliàng", "浪费": "làngfèi", "预习": "yùxí", "自信": "zìxìn", "骄傲": "jiāo'ào",
        "优秀": "yōuxiù", "谦虚": "qiānxū", "尊重": "zūnzhòng", "能力": "nénglì", "保护": "bǎohù",
        "脱": "tuō", "地球": "dìqiú", "陆地": "lùdì", "底部": "dǐbù", "安静": "ānjìng",
        "声音": "shēngyīn", "仍然": "réngrán", "灯": "dēng", "世界": "shìjiè", "梦想": "mèngxiǎng"
    },

    "translation_dict": {
        "凉快": "pleasantly cool", "热闹": "lively; bustling", "云": "cloud", "广播": "broadcast", "照": "to shine; to take a photo",
        "倒": "to pour; (adverb) contrary to expectation", "毛": "hair; fur", "抱": "to hold; to embrace", "干": "(v) to do; (adj) dry; (n) dried food", "严格": "strict",
        "难受": "uncomfortable; feel bad", "趟": "(measure word for trips)", "放暑假": "to be on summer vacation", "老虎": "tiger", "入口": "entrance",
        "排队": "to queue up", "活泼": "lively; vivid", "亚洲": "Asia", "六一儿童节": "International Children's Day", "社会": "society",
        "竞争": "to compete; competition", "森林": "forest", "剩": "to be left over; to remain", "暖和": "warm", "海洋": "ocean",
        "底": "bottom", "美人鱼": "mermaid", "公里": "kilometer", "排列": "to arrange; to line up", "梦": "dream",
        // Additional translations
        "秋天": "autumn", "草地": "grassland", "刮": "to blow (wind)", "黄叶": "yellow leaves", "降": "to fall; to drop",
        "植物": "plant", "吸引": "to attract", "游客": "tourist", "参观": "to visit", "改天": "another day",
        "专门": "specialized", "可惜": "pity; regrettable", "照片": "photo", "生日": "birthday", "约": "to arrange; to make an appointment",
        "稍微": "a little bit", "教": "to teach", "学会": "to learn; to master", "任务": "task; mission", "熟悉": "to be familiar with",
        "按照": "according to", "明白": "to understand", "陪": "to accompany", "硕士": "master's degree", "博士": "PhD",
        "教授": "professor", "使馆": "embassy", "火车票": "train ticket", "过程": "process", "压力": "pressure",
        "困难": "difficulty", "机会": "opportunity", "西瓜": "watermelon", "代表": "to represent; representative", "放弃": "to give up",
        "拒绝": "to refuse; to reject", "误会": "misunderstanding; to misunderstand", "伤心": "sad; heartbroken", "态度": "attitude", "礼貌": "polite; courtesy",
        "原谅": "to forgive", "浪费": "to waste", "预习": "to preview", "自信": "self-confident", "骄傲": "proud; arrogant",
        "优秀": "excellent; outstanding", "谦虚": "modest", "尊重": "to respect", "能力": "ability", "保护": "to protect",
        "脱": "to take off (clothes)", "地球": "Earth", "陆地": "land", "底部": "bottom part", "安静": "quiet",
        "声音": "sound; voice", "仍然": "still; yet", "灯": "lamp; light", "世界": "world", "梦想": "dream; to dream"
    },

    "collocations": [
        { "left": "天气很", "right": "凉快" }, { "left": "很", "right": "热闹" }, { "left": "天上的", "right": "云" },
        { "left": "听", "right": "广播" }, { "left": "照", "right": "照片" }, { "left": "倒", "right": "一杯水" },
        { "left": "狗", "right": "毛" }, { "left": "抱", "right": "孩子" }, { "left": "很", "right": "严格" },
        { "left": "心里", "right": "难受" }, { "left": "去", "right": "一趟" }, { "left": "放", "right": "暑假" },
        { "left": "入口", "right": "处" }, { "left": "排", "right": "队" }, { "left": "孩子很", "right": "活泼" },
        { "left": "国际", "right": "儿童节" }, { "left": "适应", "right": "社会" }, { "left": "市场", "right": "竞争" },
        { "left": "一片", "right": "森林" }, { "left": "剩下", "right": "的钱" }, { "left": "天气", "right": "暖和" },
        { "left": "蓝色", "right": "海洋" }, { "left": "海底", "right": "世界" }, { "left": "美人鱼", "right": "故事" },
        { "left": "几", "right": "公里" }, { "left": "排列", "right": "顺序" }, { "left": "做", "right": "梦" },
        { "left": "植物的", "right": "叶子" }, { "left": "吸引", "right": "游客" }, { "left": "得到", "right": "原谅" },
        { "left": "保护", "right": "环境" }
    ],

    // 1. 词汇基础模块
    "module_1_vocab": {
        "pinyin_match": [
            ["凉快", "热闹", "云", "广播", "照", "倒"],
            ["毛", "抱", "干", "严格", "难受", "趟"],
            ["放暑假", "老虎", "入口", "排队", "活泼", "亚洲"],
            ["六一儿童节", "社会", "竞争", "森林", "剩", "暖和"],
            ["海洋", "底", "美人鱼", "公里", "排列", "梦"]
        ],
        "char_match": [
            ["凉快", "热闹", "白云", "广播", "照相", "倒水"],
            ["狗毛", "拥抱", "干活", "严格", "难受", "一趟"],
            ["暑假", "老虎", "入口", "排队", "活泼", "亚洲"],
            ["儿童节", "社会", "竞争", "森林", "剩下", "暖和"],
            ["海洋", "海底", "美人鱼", "公里", "排列", "做梦"]
        ],
        "guess_words": [
            "凉快", "热闹", "广播", "照", "抱", "严格", "难受", "趟", "放暑假", "排队",
            "活泼", "社会", "竞争", "森林", "剩", "暖和", "海洋", "美人鱼", "公里", "梦"
        ]
    },

    // 2. 词汇操练 (图片炸弹、抢答揭盖、盲盒造句)
    "module_2_vocab_drill": {
        "word_bomb": [
            { "word": "凉快", "img_url": "https://images.unsplash.com/photo-1596486008112-c28475c4cfc6?w=400", "en_hint": "pleasant cool weather" },
            { "word": "热闹", "img_url": "https://images.unsplash.com/photo-1517594537152-d961a8f9460a?w=400", "en_hint": "bustling crowd" },
            { "word": "云", "img_url": "https://images.unsplash.com/photo-1507525428034-b723cf961dde?w=400", "en_hint": "clouds in the sky" },
            { "word": "抱", "img_url": "https://images.unsplash.com/photo-1601673859737-f1a269d51e73?w=400", "en_hint": "to hug" },
            { "word": "老虎", "img_url": "https://images.unsplash.com/photo-1596131499597-8d9e0344d21e?w=400", "en_hint": "tiger" },
            { "word": "排队", "img_url": "https://images.unsplash.com/photo-1510915228340-974c8033bd21?w=400", "en_hint": "to queue up" },
            { "word": "森林", "img_url": "https://images.unsplash.com/photo-1505856417730-802c67676e1a?w=400", "en_hint": "forest" },
            { "word": "海洋", "img_url": "https://images.unsplash.com/photo-1507525428034-b723cf961dde?w=400", "en_hint": "ocean" }
        ],
        "guess_words": [
            { "target_word": "广播" }, { "target_word": "照" }, { "target_word": "严格" },
            { "target_word": "难受" }, { "target_word": "趟" }, { "target_word": "入口" },
            { "target_word": "活泼" }, { "target_word": "竞争" }, { "target_word": "暖和" }
        ],
        "blind_box_spinner": [
            { "words": [{ "text": "凉快" }, { "text": "暖和" }, { "text": "热" }] },
            { "words": [{ "text": "排队" }, { "text": "排列" }, { "text": "顺序" }] },
            { "words": [{ "text": "社会" }, { "text": "竞争" }, { "text": "压力" }] },
            { "words": [{ "text": "森林" }, { "text": "植物" }, { "text": "动物" }] },
            { "words": [{ "text": "海洋" }, { "text": "美人鱼" }, { "text": "梦" }] }
        ]
    },

    // 3. 语法逻辑多关卡
    "module_3_grammar": {
        "grammar_points": [
            {
                "grammar_point_name": "副词：倒 (dào)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["我以为", "坐出租车", "会快些，", "没", "想", "到", "倒", "比", "骑车", "还慢。"], "correct_answer": "我以为坐出租车会快些，没想到倒比骑车还慢。", "en_hint": "I thought taking a taxi would be faster, but it turned out to be slower than riding a bike." },
                        { "chunks": ["你", "说", "得", "倒", "是", "容易，", "做", "起来", "可", "难了！"], "correct_answer": "你说得倒是容易，做起来可难了！", "en_hint": "It's easy for you to say, but it's hard to do!" },
                        { "chunks": ["去长城", "倒", "是", "一个", "好主意，", "就是", "太远了。"], "correct_answer": "去长城倒是一个好主意，就是太远了。", "en_hint": "Going to the Great Wall is a good idea, it's just too far." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1511984274987-a2f008892f25?w=400", // Rainy day
                            "hint": "用“倒”表示天气不如预期。",
                            "en_hint": "Use '倒' to indicate weather is contrary to expectation.",
                            "keywords": ["天气", "倒", "下雨"],
                            "reference_answer": "我以为今天天气会凉快，没想到倒下雨了。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你的朋友抱怨减肥太难，你觉得他说的容易，但真正坚持做很难。请你用“倒”来表达你的看法。",
                            "en_scenario": "Your friend complains about how hard it is to lose weight. You think it's easy for him to say but hard to actually do. Use '倒' to express your opinion.",
                            "reference": "减肥说得倒是容易，做起来可难了。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "介词：为了...而...",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["植物", "会", "为了", "阳光、", "空气", "和水", "而", "竞争。"], "correct_answer": "植物会为了阳光、空气和水而竞争。", "en_hint": "Plants compete for sunlight, air, and water." },
                        { "chunks": ["她", "为了", "照顾", "孩子，", "而", "放弃", "了", "工作。"], "correct_answer": "她为了照顾孩子，而放弃了工作。", "en_hint": "She gave up her job to take care of her child." },
                        { "chunks": ["很多人", "为了", "快点儿", "把工作", "做完，", "而", "加班。"], "correct_answer": "很多人为了快点儿把工作做完，而加班。", "en_hint": "Many people work overtime to finish their work quickly." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1510915228340-974c8033bd21?w=400", // Earth or nature
                            "hint": "用“为了...而...”谈论保护环境的目的。",
                            "en_hint": "Use '为了...而...' to talk about the purpose of protecting the environment.",
                            "keywords": ["保护环境", "为了", "更好"],
                            "reference_answer": "为了我们和后代的健康，我们要好好保护环境。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你看到很多人为了追求成功而牺牲健康，请你用“为了...而...”表达这种现象。",
                            "en_scenario": "You see many people sacrificing health for success. Use '为了...而...' to describe this phenomenon.",
                            "reference": "很多人为了事业的成功，而牺牲了自己的健康。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "副词：仍然 (réngrán)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["就", "算", "在", "几", "公里", "深", "的", "海底", "也", "仍然", "能", "看到", "东西。"], "correct_answer": "就算在几公里深的海底也仍然能看到东西。", "en_hint": "Even several kilometers deep in the ocean, you can still see things." },
                        { "chunks": ["尽管", "这", "只是", "一", "场", "误会，", "他", "仍然", "很", "难受。"], "correct_answer": "尽管这只是一场误会，他仍然很难受。", "en_hint": "Even though it was just a misunderstanding, he still felt very bad." },
                        { "chunks": ["他", "已经", "退休", "了，", "但", "仍然", "坚持", "每天", "学习。"], "correct_answer": "他已经退休了，但仍然坚持每天学习。", "en_hint": "He has retired, but he still insists on studying every day." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1498050108023-c5249f4cd085?w=400", // Old computer still working
                            "hint": "用“仍然”描述一个旧物还在使用的情况。",
                            "en_hint": "Use '仍然' to describe an old item still being used.",
                            "keywords": ["旧电脑", "仍然", "使用"],
                            "reference_answer": "这台旧电脑虽然很老了，但仍然可以使用。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你和朋友约定了见面，结果下大雨了。朋友问你还来不来，你决定即使下雨也仍然要去。请你用“仍然”回答。",
                            "en_scenario": "You have a meeting with a friend, and it's raining heavily. Your friend asks if you're still coming, and you decide to go despite the rain. Use '仍然' to reply.",
                            "reference": "就算下大雨，我仍然要去。"
                        }
                    ]
                }
            }
        ],
        "synonym_distinction": [
            {
                "sentence": "去年放暑假的时候，我去了____北京动物园。",
                "options": ["一趟", "一次"],
                "answer": "一趟",
                "explanation": "<strong>趟 (tàng):</strong> 表示“一去一回”的往返次数，常用于来回走动的动作，如“来、去、走、跑、接、送”等，强调整个往返过程。<br><strong>次 (cì):</strong> 表示动作重复的次数，不强调“一去一回”的过程，可以用于更广泛的动作，如“问、说、看、讨论”等。"
            },
            {
                "sentence": "他没赶上最后一____公共汽车，只好坐出租车回家了。",
                "options": ["趟", "次"],
                "answer": "趟",
                "explanation": "<strong>趟 (tàng):</strong> 还可以用于按时间、路线行驶的公共汽车或火车，相当于“辆”、“列”。<br><strong>次 (cì):</strong> 没有此用法。"
            },
            {
                "sentence": "我中午给你打了好几____电话，你为什么都不接呢？",
                "options": ["次", "趟"],
                "answer": "次",
                "explanation": "<strong>次 (cì):</strong> 可以表示“打电话”这种动作的重复次数。<br><strong>趟 (tàng):</strong> 不能用于“打电话”这样的动作。"
            },
            {
                "sentence": "西红柿鸡蛋汤的做法很简单，我保证你一____就能学会。",
                "options": ["次", "趟"],
                "answer": "次",
                "explanation": "<strong>次 (cì):</strong> 表示“做饭”、“学习”等动作的次数。<br><strong>趟 (tàng):</strong> 没有此用法。"
            },
            {
                "sentence": "他今年暑假打算先回一____老家，然后再去学校准备考试。",
                "options": ["趟", "次"],
                "answer": "趟",
                "explanation": "<strong>趟 (tàng):</strong> 表示回老家再返回的往返过程，强调了“一去一回”。<br><strong>次 (cì):</strong> 在这里不如“趟”合适，因为“回老家”是明确的往返行程。"
            }
        ]
    },

    // 4. 篇章阅读 (语段排序)
    "module_4_text": {
        "level_1_sorting": [
            {
                "id": 1,
                "shuffled_items": [
                    { "tag": "A", "content": "这几天香山特别热闹，随着气温的降低，那里许多植物的叶子都由绿变黄或者变红，吸引了很多游客参观。" },
                    { "tag": "B", "content": "小夏建议改天去长城，广播里说那里也有不少专门看红叶的好地方。" },
                    { "tag": "C", "content": "安娜想多照点儿香山的照片，但明天是小夏爸爸的生日，去长城恐怕也不行。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "从香山红叶热闹的场景开始，引出小夏的建议，再引出安娜的遗憾和时间问题。"
            },
            {
                "id": 2,
                "shuffled_items": [
                    { "tag": "A", "content": "小李认为狗是很聪明的动物，只要稍微花点儿时间教它，它就能学会很多东西。" },
                    { "tag": "B", "content": "要让它完成一些任务，只教一次是不够的，应该耐心地一遍一遍地交给它，使它熟悉。" },
                    { "tag": "C", "content": "狗能听懂人的话，明白人的心情。在你心里难受的时候，它会一直陪着你。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "先说狗的聪明和训练方法，再具体说训练的耐心，最后总结狗是人类的好朋友。"
            },
            {
                "id": 3,
                "shuffled_items": [
                    { "tag": "A", "content": "地球上大约71%的地方是蓝色的海洋，在美丽的海底世界里，生活着各种各样的植物和动物。" },
                    { "tag": "B", "content": "科学研究发现，海洋底部看上去非常安静，然而却不是一点儿声音也没有，海底的动物们一直在“说话”。" },
                    { "tag": "C", "content": "另外，就算在几公里深的海底也仍然能看到东西，许多鱼会发出各种颜色的亮光，像一个个排列起来的灯。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "先介绍海洋的范围和生物，接着深入海底探讨声音，最后谈论深海的光线现象。"
            }
        ]
    },

    // 5. 跟读练习
    "module_4_repetition": {
        "sentences": [
            "最近天气越来越凉快了，风一刮，草地上就会有一层厚厚的黄叶。",
            "香山上看红叶的人太多了，咱们改天去长城吧。",
            "狗是很聪明的动物，只要稍微花点儿时间教教它，它就能学会很多东西。",
            "要让它完成一些任务，只教一次是不够的，应该耐心地一遍一遍地交给它。",
            "去年的六一儿童节，我去动物园还给熊猫们照了不少照片呢。",
            "植物会为了阳光、空气和水而竞争。",
            "在暖和、水分比较多的地方，叶子往往长得又大又厚。",
            "就算在几公里深的海底也仍然能看到东西。"
        ]
    },

    // 6. 动态词云
    "module_5_wordcloud": {
        "title": "💬 你最喜欢大自然中的什么？为什么？",
        "hint": "请扫码发送1-2个词描述（如：森林、海洋、动物、阳光...）"
    },

    // 7. 极限挑战
    "module_6_challenge": {
        "challenge_sets": [
            { "id": 1, "keywords": ["凉快", "云", "广播"], "framework": "天气____的时候，看着天上的____，听着____，感觉真舒服。", "translation": "When the weather is cool, looking at the clouds in the sky, listening to the broadcast, it feels so comfortable." },
            { "id": 2, "keywords": ["抱", "难受", "陪"], "framework": "我心里____的时候，它会一直____着我，让我____着它。", "translation": "When I feel bad, it will always accompany me, letting me hug it." },
            { "id": 3, "keywords": ["趟", "排队", "活泼"], "framework": "去动物园玩了一____，看到很多____的动物，入口处____的人很多。", "translation": "I went to the zoo for a trip, saw many lively animals, and there were many people queuing at the entrance." },
            { "id": 4, "keywords": ["竞争", "剩", "暖和"], "framework": "社会____很激烈，只有努力才能不被____下，希望今年冬天能____一些。", "translation": "Social competition is fierce, only by working hard can one not be left behind, hoping this winter will be warmer." },
            { "id": 5, "keywords": ["海洋", "排列", "梦"], "framework": "在____的深处，许多鱼发出亮光，像灯一样____着，像____境一样美。", "translation": "In the depths of the ocean, many fish emit light, arranged like lamps, beautiful as a dream." }
        ]
    },

    // 8. 找茬大师（文字辨错）
    "module_7_find_error": {
        "questions": [
            { "sentence": "你说的干容易，做起来可难了！", "error": "干容易", "correct": "倒是容易", "explanation": "“倒”作副词，表示意外或让步，此处应为“倒”。“干”在这里是形容词“干的”或动词“做”，语意不通。" },
            { "sentence": "他很严格学生。", "error": "严格学生", "correct": "他对学生很严格", "explanation": "“严格”作形容词，不能直接跟宾语，需要用介词结构“对...严格”。" },
            { "sentence": "你去了一次北京动物园？", "error": "", "correct": "(此句语法正确)", "explanation": "“一次”是正确的量词，表示动作次数。如果强调往返，用“一趟”更好。" },
            { "sentence": "为了成功而努力学习。", "error": "", "correct": "(此句语法正确)", "explanation": "“为了...而...”结构使用正确。" },
            { "sentence": "外面下雨了，但今天仍然热。", "error": "", "correct": "(此句语法正确)", "explanation": "“仍然”表示情况持续未变，使用正确。" },
            { "sentence": "这个毛真漂亮。", "error": "这个毛", "correct": "这个狗毛/这件毛衣", "explanation": "“毛”是名词，但常指动物的毛发或纤维，单独使用“这个毛”不够具体，应指明是什么毛，如“狗毛”或“毛衣”的毛。" }
        ]
    },

    // 9. 终极对决 Jeopardy (诸神之战)
    "module_8_jeopardy": {
        "categories": ["词语应用", "课文理解", "语法造句"],
        "teamNames": { "wei": "魏国", "shu": "#10b981", "wu": "#3b82f6" },
        "teamColors": { "wei": "#ef4444", "shu": "#10b981", "wu": "#3b82f6" },
        "questions": {
            "q_0_10": { "question": "请填空：今天天气____，很适合出去玩。", "question_en": "Fill in the blank: Today's weather is ____, very suitable for going out.", "answer": "凉快" },
            "q_0_20": { "question": "请填空：他很____，对孩子和学生都一样。", "question_en": "Fill in the blank: He is very ____, both to his children and students.", "answer": "严格" },
            "q_0_30": { "question": "请填空：我上个星期去了北京一____。", "question_en": "Fill in the blank: I went to Beijing last week for a ____.", "answer": "趟" },
            "q_1_10": { "question": "课文一中，小夏为什么不同意去香山看红叶？", "question_en": "In Text 1, why did Xiaoxia disagree to go to Xiangshan to see red leaves?", "answer": "因为香山上人太多，而且担心会下大雨。" },
            "q_1_20": { "question": "课文二中，小林喜欢小李的狗的哪两个优点？", "question_en": "In Text 2, what two advantages of Xiaoli's dog did Xiaolin like?", "answer": "毛漂亮和聪明。" },
            "q_1_30": { "question": "课文五提到，海底动物为什么一直在“说话”？", "question_en": "In Text 5, why do deep-sea animals keep 'talking'?", "answer": "为了交流和导航，发出各种声音，只是人的耳朵听不到。" },
            "q_2_10": { "question": "用“倒”造一个句子，表示意外。", "question_en": "Make a sentence with '倒' to indicate surprise/unexpectedness.", "answer": "他平时看起来不爱学习，没想到考试成绩倒挺好。" },
            "q_2_20": { "question": "用“为了...而...”造一个句子。", "question_en": "Make a sentence with '为了...而...'.", "answer": "为了学习汉语，我搬到了中国。" },
            "q_2_30": { "question": "用“仍然”造一个句子。", "question_en": "Make a sentence with '仍然'.", "answer": "虽然已经十年过去了，但他仍然记得我们第一次见面的场景。" }
        },
        "extra_pk_questions": [
            { "type": "快问快答", "q": "“亚洲最大的动物园之一”是哪个动物园？", "q_en": "Which zoo is 'one of the largest zoos in Asia'?", "a": "北京动物园" },
            { "type": "抢答", "q": "大熊猫以前只有哪个国家有？后来送给其他国家是为了表示什么？", "q_en": "Which country used to have giant pandas exclusively? What was the purpose of giving them to other countries?", "a": "中国，为了表示友好。" }
        ]
    },

    // 10. 词义搭配测验
    "module_9_vocab_practice": [
        { "question": "秋天来了，天气渐渐变得____。", "options": ["凉快", "热闹", "难受", "活泼"], "answer": "凉快" },
        { "question": "过年的时候，街上特别____。", "options": ["热闹", "凉快", "严格", "活泼"], "answer": "热闹" },
        { "question": "天上的____，一会儿像小狗，一会儿像棉花。", "options": ["云", "广播", "毛", "梦"], "answer": "云" },
        { "question": "我每天早上听____，了解新闻。", "options": ["广播", "云", "梦", "照片"], "answer": "广播" },
        { "question": "请你帮我____一张照片。", "options": ["照", "抱", "倒", "剩"], "answer": "照" },
        { "question": "请你帮我____杯水。", "options": ["倒", "照", "抱", "干"], "answer": "倒" },
        { "question": "这只猫的____又长又软，很舒服。", "options": ["毛", "云", "底", "梦"], "answer": "毛" },
        { "question": "妈妈____着孩子，哄他睡觉。", "options": ["抱", "照", "倒", "干"], "answer": "抱" },
        { "question": "我周末喜欢在家____家务。", "options": ["干", "抱", "倒", "照"], "answer": "干" },
        { "question": "老师对我们的要求非常____。", "options": ["严格", "难受", "活泼", "暖和"], "answer": "严格" },
        { "question": "听到这个坏消息，他心里非常____。", "options": ["难受", "严格", "活泼", "暖和"], "answer": "难受" },
        { "question": "我暑假打算去北京一____。", "options": ["趟", "下", "个", "张"], "answer": "趟" },
        { "question": "我们学校下个月就要____了。", "options": ["放暑假", "排队", "竞争", "排列"], "answer": "放暑假" },
        { "question": "动物园里有很多大型动物，比如____和狮子。", "options": ["老虎", "毛", "云", "底"], "answer": "老虎" },
        { "question": "请大家从____排队进入。", "options": ["入口", "出口", "森林", "海洋"], "answer": "入口" },
        { "question": "看电影前要____买票。", "options": ["排队", "竞争", "排列", "抱"], "answer": "排队" },
        { "question": "这个孩子很____，喜欢和别人玩。", "options": ["活泼", "严格", "难受", "暖和"], "answer": "活泼" },
        { "question": "中国是____最大的国家之一。", "options": ["亚洲", "世界", "社会", "森林"], "answer": "亚洲" },
        { "question": "每年____，孩子们都会收到礼物。", "options": ["六一儿童节", "生日", "放暑假", "春节"], "answer": "六一儿童节" },
        { "question": "人与人之间要互相尊重，____才会更好。", "options": ["社会", "森林", "海洋", "梦"], "answer": "社会" },
        { "question": "现在找工作____很激烈。", "options": ["竞争", "排队", "排列", "抱"], "answer": "竞争" },
        { "question": "我们去____里散散步吧，呼吸新鲜空气。", "options": ["森林", "社会", "海洋", "入口"], "answer": "森林" },
        { "question": "我吃了三个苹果，____下两个。", "options": ["剩", "倒", "照", "抱"], "answer": "剩" },
        { "question": "春天来了，天气渐渐____起来。", "options": ["暖和", "凉快", "热闹", "难受"], "answer": "暖和" },
        { "question": "地球的百分之七十是____。", "options": ["海洋", "森林", "陆地", "沙漠"], "answer": "海洋" },
        { "question": "瓶____有一百块钱。", "options": ["底", "毛", "云", "梦"], "answer": "底" },
        { "question": "我女儿从小就喜欢听____的故事，知道海底世界非常美丽。", "options": ["美人鱼", "老虎", "动物", "植物"], "answer": "美人鱼" },
        { "question": "我家离公司有五____。", "options": ["公里", "米", "尺", "寸"], "answer": "公里" },
        { "question": "请把这些书按顺序____好。", "options": ["排列", "排队", "竞争", "抱"], "answer": "排列" },
        { "question": "我昨晚做了一个奇怪的____。", "options": ["梦", "云", "底", "毛"], "answer": "梦" }
    ],

    // 11. 课文篇章理解
    "module_10_comprehension": [
        {
            "sectionTitle": "课文一：小夏和安娜在聊天气",
            "textContext": "小夏：最近天气越来越凉快了，风一刮，草地上就会有一层厚厚的黄叶，看来秋天已经到了。\n安娜：这几天香山特别热闹，随着气温的降低，那里许多植物的叶子都由绿变黄或者变红，吸引了很多游客参观，咱们今天也去看看吧。\n小夏：你看天上的云，今天肯定有大雨。再说，香山上看红叶的人太多了。咱们改天去长城吧，广播里说那里也有不少专门看红叶的好地方。\n安娜：真可惜，我还想多照点儿香山的照片呢。去长城倒是一个好主意，那我们明天去吧。\n小夏：明天恐怕也不行，明天是我爸的生日。\n安娜：没关系，那我们再约时间。",
            "questions": [
                { "question": "现在是什么季节？", "options": ["春天", "夏天", "秋天", "冬天"], "answer": "秋天" },
                { "question": "小夏为什么建议去长城而不是香山？", "options": ["香山太远", "香山景色不好", "香山人太多，而且可能下雨", "小夏不喜欢香山"], "answer": "香山人太多，而且可能下雨" }
            ]
        },
        {
            "sectionTitle": "课文二：小林和小李在聊小李的狗",
            "textContext": "小林：你的这只大黑狗，毛真漂亮，而且这么聪明，每次见了都想抱一抱它。\n小李：狗是很聪明的动物，只要稍微花点儿时间教教它，它就能学会很多东西。\n小林：听你这么一说，我现在也想养一只狗了。每次你让它干什么，它就像能听懂你的话一样去做。你教它是不是用了什么特别的方法？\n小李：要让它完成一些任务，只教一次是不够的，应该耐心地一遍一遍地交给它，使它熟悉，然后它就会严格按照你的要求做了。\n小林：看来没有想的那么容易。\n小李：狗是我们的好朋友，它能听懂人的话，明白人的心情。在你心里难受的时候，它会一直陪着你。",
            "questions": [
                { "question": "小李认为教狗学会东西的关键是什么？", "options": ["只教一次", "花很多钱", "稍微花点儿时间教教它", "让它自己学习"], "answer": "稍微花点儿时间教教它" },
                { "question": "狗在人难受的时候会怎么做？", "options": ["离开", "一直陪着你", "大叫", "不理不睬"], "answer": "一直陪着你" }
            ]
        },
        {
            "sectionTitle": "课文三：马克和小夏在聊动物",
            "textContext": "马克：上个月我去了趟北京动物园，那里约有500种动物，听导游说北京动物园是亚洲最大的动物园之一。\n小夏：去年放暑假的时候，我也去过一次，我在那儿看了马、熊猫、老虎等动物。我特别喜欢熊猫，可惜它们当时大多在睡觉。\n马克：我去的那天正赶上六一儿童节，许多父母带着孩子去动物园。入口处排队的人很多，动物园里热闹极了。熊猫们也变得特别活泼，我还给它们照了不少照片呢。\n小夏：大熊猫身子胖胖的，样子可爱极了。\n马克：不过，他们数量不多，现在全世界一共才有一千多只吧。\n小夏：以前只有中国有大熊猫，为了表示友好，从1957年开始，中国把大熊猫作为礼物送给其他一些国家。现在，很多国家的人们在本国都能看到大熊猫了。",
            "questions": [
                { "question": "马克去北京动物园是哪一天？", "options": ["暑假", "儿童节", "周末", "新年"], "answer": "儿童节" },
                { "question": "中国把大熊猫作为礼物送给其他国家是为了什么？", "options": ["赚钱", "减少熊猫数量", "表示友好", "让熊猫体验不同环境"], "answer": "表示友好" }
            ]
        },
        {
            "sectionTitle": "课文四：植物之间的竞争",
            "textContext": "不仅社会上的人与人之间有竞争，森林里的各种植物之间也有竞争，这一点儿也不奇怪。植物会为了阳光、空气和水而竞争。一些高大的植物往往能获得更多的阳光、空气和水，而剩下的一些比较低矮的植物就只能长在这些高大植物的下面。由于气候条件不同，世界各地植物叶子的样子也很不相同。在暖和、水分比较多的地方，叶子往往长得又大又厚；在阳光特别厉害、水分少的地方，叶子就会长得又细又长。",
            "questions": [
                { "question": "植物之间会为什么而竞争？", "options": ["为了颜色", "为了生长空间", "为了阳光、空气和水", "为了吸引动物"], "answer": "为了阳光、空气和水" },
                { "question": "在暖和、水分多的地方，植物的叶子有什么特点？", "options": ["又细又长", "又大又厚", "颜色鲜艳", "数量很少"], "answer": "又大又厚" }
            ]
        },
        {
            "sectionTitle": "课文五：美丽的海底世界",
            "textContext": "地球上大约71%的地方是蓝色的海洋，在美丽的海底世界里，生活着各种各样的植物和动物。我们小时候都听过美人鱼的故事，其实真正的海底世界比故事里写的更美。科学研究发现，海洋底部看上去非常安静，然而却不是一点儿声音也没有，海底的动物们一直在“说话”，只不过人的耳朵是听不到的。另外，就算在几公里深的海底也仍然能看到东西，许多鱼会发出各种颜色的亮光，像一个个排列起来的灯，美极了，就像在梦里一样。",
            "questions": [
                { "question": "地球上有大约多少地方是海洋？", "options": ["30%", "50%", "71%", "90%"], "answer": "71%" },
                { "question": "科学研究发现，海底动物在“说话”，人的耳朵能听到吗？", "options": ["能", "不能", "有时候能", "不知道"], "answer": "不能" }
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
window.LESSONS_DATA['hsk4-17'] = lessonData;
window.lessonData = lessonData; // For direct access during development

// Node.js export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lessonData;
}