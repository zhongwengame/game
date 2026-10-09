/*
================================================================
== 课程数据文件 (Lesson Data File)
== 第十六课: 生活可以更美好
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
    "lesson": "HSK 4 - 第十六课《生活可以更美好》",
    "students": [ "列夏", "丽莎", "明溪", "星悦", "德昊", "任华", "梦航", "基里尔", "萨~沙~", "萨沙", "达铭", "安德烈", "纪嘉", "高斯佳", "瓦列", "Maiia" ],

    "pinyin_map": {
        "博士": "bóshì", "签证": "qiānzhèng", "报名": "bàomíng", "表格": "biǎogé", "传真": "chuánzhēn",
        "参观": "cānguān", "激动": "jīdòng", "小伙子": "xiǎohuǒzi", "记者": "jìzhě", "代表": "dàibiǎo",
        "失望": "shīwàng", "郊区": "jiāoqū", "导游": "dǎoyóu", "礼貌": "lǐmào", "原谅": "yuánliàng",
        "挂": "guà", "同情": "tóngqíng", "推": "tuī", "预习": "yùxí", "重点": "zhòngdiǎn",
        "马虎": "mǎhu", "自信": "zìxìn", "冷静": "lěngjìng", "输": "shū", "重视": "zhòngshì",
        "敢": "gǎn", "尊重": "zūnzhòng",
        // Extended from context/pinyin notes
        "硕士": "shuòshì", "毕业": "bìyè", "将来": "jiānglái", "材料": "cáiliào", "成绩": "chéngjì",
        "护照": "hùzhào", "联系": "liánxì", "邀请信": "yāoqǐngxìn", "使馆": "shǐguǎn", "号码": "hàomǎ",
        "过程": "guòchéng", "西瓜": "xīguā", "经验": "jīngyàn", "压力": "yālì", "困难": "kùnnan",
        "相同": "xiāngtóng", "放弃": "fàngqì", "到底": "dàodǐ", "表示": "biǎoshì", "负责": "fùzé",
        "误会": "wùhuì", "伤心": "shāngxīn", "浪费": "làngfèi", "同情心": "tóngqíngxīn", "一切": "yīqiè",
        "首先": "shǒuxiān", "其次": "qícì", "认真": "rènzhēn", "发现": "fāxiàn", "永远": "yǒngyuǎn",
        "赢": "yíng", "积累": "jīlěi", "周围": "zhōuwéi", "诚实": "chéngshí", "缺点": "quēdiǎn",
        "相反": "xiāngfǎn"
    },

    "translation_dict": {
        "博士": "PhD; doctorate", "签证": "visa", "报名": "to sign up; to register", "表格": "form; table", "传真": "fax",
        "参观": "to visit; to look around", "激动": "excited; agitated", "小伙子": "young fellow; lad", "记者": "journalist; reporter", "代表": "to represent; representative",
        "失望": "disappointed; to lose hope", "郊区": "suburb; outskirts", "导游": "tour guide", "礼貌": "polite; manners", "原谅": "to forgive; to excuse",
        "挂": "to hang; to put up; to suspend", "同情": "to sympathize; sympathy", "推": "to push; to put off; to postpone", "预习": "to preview (a lesson)", "重点": "key point; emphasis",
        "马虎": "careless; casual", "自信": "self-confident; self-assured", "冷静": "calm; cool-headed", "输": "to lose; to suffer defeat", "重视": "to attach importance to; to value",
        "敢": "to dare; to be brave enough", "尊重": "to respect; to value",
        // Extended
        "硕士": "Master's degree", "毕业": "to graduate", "将来": "future", "材料": "material; data", "成绩": "grades; achievement",
        "护照": "passport", "联系": "to contact; connection", "邀请信": "invitation letter", "使馆": "embassy", "号码": "number",
        "过程": "process; course", "西瓜": "watermelon", "经验": "experience", "压力": "pressure", "困难": "difficulty; difficult",
        "相同": "identical; same", "放弃": "to give up", "到底": "in the end; after all; (used in questions for emphasis)", "表示": "to express; to show", "负责": "to be responsible for",
        "误会": "to misunderstand; misunderstanding", "伤心": "sad; heartbroken", "浪费": "to waste", "同情心": "sympathy; compassion", "一切": "all; every; everything",
        "首先": "firstly; first of all", "其次": "secondly; next", "认真": "conscientious; serious", "发现": "to discover; to find", "永远": "forever; always",
        "赢": "to win", "积累": "to accumulate; accumulation", "周围": "surrounding; around", "诚实": "honest", "缺点": "shortcoming; defect",
        "相反": "opposite; on the contrary"
    },

    "collocations": [
        { "left": "读", "right": "博士" }, { "left": "办", "right": "签证" }, { "left": "报名", "right": "考试" },
        { "left": "填", "right": "表格" }, { "left": "发", "right": "传真" }, { "left": "参观", "right": "公司" },
        { "left": "心情很", "right": "激动" }, { "left": "年轻的", "right": "小伙子" }, { "left": "采访", "right": "记者" },
        { "left": "代表", "right": "学校" }, { "left": "感到", "right": "失望" }, { "left": "去", "right": "郊区" },
        { "left": "当", "right": "导游" }, { "left": "有", "right": "礼貌" }, { "left": "得到", "right": "原谅" },
        { "left": "把照片", "right": "挂在墙上" }, { "left": "得到", "right": "同情" }, { "left": "推迟", "right": "会议" },
        { "left": "课前", "right": "预习" }, { "left": "学习", "right": "重点" }, { "left": "不要", "right": "马虎" },
        { "left": "充满", "right": "自信" }, { "left": "保持", "right": "冷静" }, { "left": "输掉", "right": "比赛" },
        { "left": "重视", "right": "健康" }, { "left": "不敢", "right": "说话" }, { "left": "互相", "right": "尊重" },
        { "left": "感到", "right": "吃惊" }, { "left": "成功", "right": "经验" }, { "left": "面对", "right": "困难" },
        { "left": "放弃", "right": "机会" }, { "left": "对…", "right": "负责" }, { "left": "产生", "right": "误会" },
        { "left": "浪费", "right": "时间" }, { "left": "积累", "right": "经验" }
    ],

    // 1. 词汇基础模块
    "module_1_vocab": {
        "pinyin_match": [
            ["博士", "签证", "报名", "表格", "传真", "参观"],
            ["激动", "小伙子", "记者", "代表", "失望", "郊区"],
            ["导游", "礼貌", "原谅", "挂", "同情", "推"],
            ["预习", "重点", "马虎", "自信", "冷静", "输"],
            ["重视", "敢", "尊重", "到底", "表示", "负责"]
        ],
        "char_match": [
            ["读博士", "办签证", "报名", "填表格", "传真", "参观"],
            ["激动", "小伙子", "记者", "代表", "失望", "郊区"],
            ["导游", "有礼貌", "原谅", "挂在墙上", "同情", "推迟"],
            ["预习", "重点", "马虎", "自信", "冷静", "输赢"],
            ["重视", "敢", "尊重", "到底", "表示", "负责"]
        ],
        "guess_words": [
            "博士", "签证", "报名", "表格", "传真", "参观", "激动", "小伙子", "记者", "代表",
            "失望", "郊区", "导游", "礼貌", "原谅", "挂", "同情", "推", "预习", "重点",
            "马虎", "自信", "冷静", "输", "重视", "敢", "尊重", "到底", "表示", "负责"
        ]
    },

    // 2. 词汇操练 (图片炸弹、抢答揭盖、盲盒造句)
    "module_2_vocab_drill": {
        "word_bomb": [
            { "word": "博士", "img_url": "https://images.unsplash.com/photo-1627885375531-15cf43387796?w=400", "en_hint": "PhD" }, // Graduation cap
            { "word": "签证", "img_url": "https://images.unsplash.com/photo-1543320297-c2cf92226f37?w=400", "en_hint": "visa" }, // Passport stamp
            { "word": "记者", "img_url": "https://images.unsplash.com/photo-1498758550186-e4179374092b?w=400", "en_hint": "reporter" }, // Microphone
            { "word": "郊区", "img_url": "https://images.unsplash.com/photo-1596700684306-646e31959828?w=400", "en_hint": "suburb" }, // Houses with nature
            { "word": "预习", "img_url": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400", "en_hint": "preview" }, // Open book with notes
            { "word": "自信", "img_url": "https://images.unsplash.com/photo-1579546929518-9257e84122d2?w=400", "en_hint": "self-confident" }, // Empowered person
            { "word": "冷静", "img_url": "https://images.unsplash.com/photo-1510915228340-974c8033bd21?w=400", "en_hint": "calm" }, // Serene landscape
            { "word": "尊重", "img_url": "https://images.unsplash.com/photo-1596205315570-5d6e2c34d830?w=400", "en_hint": "respect" } // Handshake or diverse people
        ],
        "guess_words": [
            { "target_word": "报名" }, { "target_word": "表格" }, { "target_word": "传真" },
            { "target_word": "参观" }, { "target_word": "激动" }, { "target_word": "代表" },
            { "target_word": "失望" }, { "target_word": "导游" }, { "target_word": "礼貌" }
        ],
        "blind_box_spinner": [
            { "words": [{ "text": "博士" }, { "text": "硕士" }, { "text": "毕业" }] },
            { "words": [{ "text": "签证" }, { "text": "使馆" }, { "text": "材料" }] },
            { "words": [{ "text": "激动" }, { "text": "失望" }, { "text": "冷静" }] },
            { "words": [{ "text": "推迟" }, { "text": "浪费" }, { "text": "马虎" }] },
            { "words": [{ "text": "输" }, { "text": "赢" }, { "text": "放弃" }] }
        ]
    },

    // 3. 语法逻辑多关卡
    "module_3_grammar": {
        "grammar_points": [
            {
                "grammar_point_name": "副词：可 (kě) (强调)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["你", "可", "真", "厉害，", "什么", "都", "会。"], "correct_answer": "你可真厉害，什么都会。", "en_hint": "You're really impressive, you know everything." },
                        { "chunks": ["下个", "星期", "就要", "去使馆", "办签证了，", "这", "可", "怎么办？"], "correct_answer": "下个星期就要去使馆办签证了，这可怎么办？", "en_hint": "I have to go to the embassy for a visa next week, what am I going to do?" },
                        { "chunks": ["这", "可", "是", "个", "大问题，", "我", "也", "不太", "清楚。"], "correct_answer": "这可是个大问题，我也不太清楚。", "en_hint": "This is a big problem, and I'm not very clear about it either." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1616428945391-7298c0b5f58c?w=400", // A very complex puzzle
                            "hint": "用“可”强调问题的复杂性。",
                            "en_hint": "Use '可' to emphasize the complexity of a problem.",
                            "keywords": ["可", "复杂", "大问题"],
                            "reference_answer": "这个问题可真复杂，真是个大问题。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你的朋友抱怨说，他办了一张理发店的会员卡，理发便宜了很多。请你用“可”强调会员卡带来的好处。",
                            "en_scenario": "Your friend got a haircut membership card and saved a lot. Use '可' to emphasize the benefit.",
                            "reference": "你办了会员卡，理发可节约了不少钱。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "副词：到底 (dàodǐ)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["你", "不是", "已经", "买好", "火车票", "了吗？", "你", "到底", "怎么", "打算", "的", "呀？"], "correct_answer": "你不是已经买好火车票了吗？你到底怎么打算的呀？", "en_hint": "Didn't you already buy your train ticket? What are your plans after all?" },
                        { "chunks": ["我", "给", "他", "打了", "好几次", "电话了，", "到底", "怎么", "回事？"], "correct_answer": "我给他打了好几次电话了，到底怎么回事？", "en_hint": "I've called him several times, what's going on exactly?" },
                        { "chunks": ["明天", "就是", "报名的", "最后", "一天了，", "你", "到底", "参不参加？"], "correct_answer": "明天就是报名的最后一天了，你到底参不参加？", "en_hint": "Tomorrow is the last day to sign up, are you going to participate or not?" }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1507525428034-b723cf961dde?w=400", // fork in the road
                            "hint": "用“到底”询问最终的选择或决定。",
                            "en_hint": "Use '到底' to ask about a final choice or decision.",
                            "keywords": ["到底", "选择", "决定"],
                            "reference_answer": "面对这么多选择，你到底要怎么决定？"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你和朋友聊天，他说喜欢小李也喜欢小王。你很困惑，想问他到底喜欢谁。",
                            "en_scenario": "Your friend likes two people. You are confused and want to ask who he likes 'after all'.",
                            "reference": "你到底喜欢谁啊？"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "介词：拿...来说 (ná...láishuō)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["就", "拿", "学", "汉语", "来说吧，", "首先", "要", "注意", "课前", "预习。"], "correct_answer": "就拿学汉语来说吧，首先要注意课前预习。", "en_hint": "Take learning Chinese for example, first you need to pay attention to previewing lessons." },
                        { "chunks": ["拿", "他", "来说，", "他", "不仅", "专业", "符合", "要求，", "而且", "还有", "工作", "经验。"], "correct_answer": "拿他来说，他不仅专业符合要求，而且还有工作经验。", "en_hint": "Take him for example, not only does his major meet the requirements, but he also has work experience." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1522031070549-b8efd8e3b798?w=400", // Planet Earth
                            "hint": "用“拿...来说”举例说明保护环境的重要性。",
                            "en_hint": "Use '拿...来说' to give an example of environmental protection.",
                            "keywords": ["保护环境", "小事", "来说"],
                            "reference_answer": "保护环境应该从小事做起，拿节约用水来说，我们每个人都能做到。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你和朋友讨论如何提高汉语口语，你举例说自己通过多说多练提高的。请用“拿...来说”来说明。",
                            "en_scenario": "Discuss how to improve spoken Chinese, using your own experience as an example with '拿...来说'.",
                            "reference": "就拿提高汉语口语来说吧，多说多练是最好的方法。"
                        }
                    ]
                }
            }
        ],
        "synonym_distinction": [
            {
                "sentence": "这个沙发很重，_____ 一个搬不动。",
                "options": ["恐怕", "怕"],
                "answer": "恐怕",
                "explanation": "<strong>恐怕 (kǒngpà):</strong> 作副词时，表示估计，常带有担心语气。这里指估测一个人搬不动。<br><strong>怕 (pà):</strong> 作动词时表示害怕、担心，常指主观感受，也可作副词表示估计（口语多用），但这里更侧重不确定性估测。"
            },
            {
                "sentence": "我的工作经验还比较少，那份工作我_____ 完成不了。",
                "options": ["恐怕", "怕"],
                "answer": "恐怕",
                "explanation": "<strong>恐怕:</strong> 表示一种估计和担忧，担心自己能力不足以完成。<br><strong>怕:</strong> 也可以用，但“恐怕”语气更书面，更强调估计的成分。"
            },
            {
                "sentence": "这几个动作我_____ 做得不标准，所以比赛前要多多练习。",
                "options": ["恐怕", "怕"],
                "answer": "恐怕",
                "explanation": "<strong>恐怕:</strong> 估计自己做不好，带有担忧。口语中两者皆可，书面语“恐怕”更常见。"
            },
            {
                "sentence": "遇到任何困难都不要_____，只要你努力，成功就离你越来越近。",
                "options": ["怕", "恐怕"],
                "answer": "怕",
                "explanation": "<strong>怕:</strong> 作动词，直接跟宾语“困难”，表示“害怕困难”。“恐怕”无此用法。"
            },
            {
                "sentence": "好久没见过他了，他离开这里_____ 有二十天了。",
                "options": ["恐怕", "怕"],
                "answer": "恐怕",
                "explanation": "<strong>恐怕:</strong> 作副词表示估测，有“大概、也许”的意思，常用于时间或数量的推测。在这里，不能用“怕”。"
            }
        ]
    },

    // 4. 篇章阅读 (语段排序)
    "module_4_text": {
        "level_1_sorting": [
            {
                "id": 1,
                "shuffled_items": [
                    { "tag": "A", "content": "成绩证明和护照已经准备好了，另外，还跟国外的大学取得了联系，填写了报名表格。" },
                    { "tag": "B", "content": "我还应该有国外大学给你的邀请信吧？他们把邀请信传真给你了吗？" },
                    { "tag": "C", "content": "没有啊，下个星期我就要去使馆办签证了，这可怎么办？" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "先说已经准备好的材料，接着问最重要的邀请信是否收到，最后引出问题（还没收到邀请信但要办签证了）。"
            },
            {
                "id": 2,
                "shuffled_items": [
                    { "tag": "A", "content": "我们知道得越多，就会发现自己不懂得也越多。" },
                    { "tag": "B", "content": "我们应该重视平时的积累，多向周围的人学习。" },
                    { "tag": "C", "content": "如果你敢诚实地说出自己对哪方面不了解，并不说明自己比别人差，相反，这样做更能得到别人的尊重。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "先说知识越多发现不懂的越多，然后引出应该学习和积累，最后鼓励诚实面对不懂之处。"
            }
        ]
    },

    // 5. 跟读练习
    "module_4_repetition": {
        "sentences": [
            "他父母不仅教他知识，而且还花了很长时间帮助他养成了非常好的习惯。",
            "我帮你查一下学校的电话号码，你打电话问一下吧。",
            "做生意时虽然会遇到各种压力和困难，但是大家的机会都是相同的。",
            "其实拒绝并不表示不愿意帮忙。遇到解决不了的问题或者无法完成的任务时，拒绝正好说明你对朋友负责。",
            "不要把什么事情都推到“明天”，一切从现在开始做起。",
            "当你认为自己在哪方面很优秀时，千万要冷静，不要骄傲。",
            "没有人会永远输，也没有人会一直赢。",
            "我们应该重视平时的积累，多向周围的人学习。"
        ]
    },

    // 6. 动态词云
    "module_5_wordcloud": {
        "title": "💬 你认为一个人成功最重要的因素是什么？",
        "hint": "请扫码发送1-2个词描述你的想法（如：努力、机会、坚持、自信...）"
    },

    // 7. 极限挑战
    "module_6_challenge": {
        "challenge_sets": [
            { "id": 1, "keywords": ["签证", "表格", "传真"], "framework": "办**签证**要填写**表格**，如果来不及，可以先把**表格****传真**过来。", "translation": "To apply for a visa, you need to fill out a form. If there's no time, you can fax the form first." },
            { "id": 2, "keywords": ["参观", "激动", "记者"], "framework": "**记者**去**参观**公司，他发现公司的发展很迅速，心情非常**激动**。", "translation": "The reporter visited the company, found its development rapid, and was very excited." },
            { "id": 3, "keywords": ["失望", "郊区", "导游"], "framework": "放假去**郊区**玩，因为没有**导游**，路线不熟悉，结果很**失望**。", "translation": "During the holiday, I went to the suburbs. Because there was no tour guide and I was unfamiliar with the route, I was very disappointed." },
            { "id": 4, "keywords": ["推", "预习", "重点"], "framework": "学习不能把事情都**推**到明天，要提前**预习**，找出**重点**。", "translation": "You can't push everything off till tomorrow when studying; you need to preview and find the key points." },
            { "id": 5, "keywords": ["冷静", "输", "重视", "尊重"], "framework": "**冷静**看待**输赢**，**重视**过程而不是结果，才能得到别人的**尊重**。", "translation": "Only by calmly viewing wins and losses, valuing the process over the outcome, can one gain the respect of others." }
        ]
    },

    // 8. 找茬大师（文字辨错）
    "module_7_find_error": {
        "questions": [
            { "sentence": "你可真厉害，什么都会。", "error": "", "correct": "（此句语法正确）", "explanation": "“可”作副词表示强调，使用正确。" },
            { "sentence": "你去不去到底？", "error": "你去不去到底？", "correct": "你到底去不去？", "explanation": "“到底”用于疑问句或带有疑问代词的非疑问句中，表示追根究底，通常放在疑问代词或动词谓语前，不能放在句末。且不与“吗”同时使用。" },
            { "sentence": "他很马虎，经常出错误。", "error": "", "correct": "（此句语法正确）", "explanation": "“马虎”作形容词，表示粗心大意，使用正确。" },
            { "sentence": "不要把所有事情都推到明天再说。", "error": "", "correct": "（此句语法正确）", "explanation": "“推到明天”表示推迟，使用正确。" },
            { "sentence": "他很敢回答问题。", "error": "很敢", "correct": "敢回答问题", "explanation": "“敢”是能愿动词，表示有勇气或胆量做某事，不能用副词“很”修饰。形容词如“勇敢”可以被“很”修饰。" },
            { "sentence": "去中国留学前应该先学好汉语，怕否则生活会很不方便。", "error": "怕否则", "correct": "否则", "explanation": "“怕”和“否则”不能连用。“否则”本身就带有“如果不这样做，就会……”的含义。" }
        ]
    },

    // 9. 终极对决 Jeopardy (诸神之战)
    "module_8_jeopardy": {
        "categories": ["词语应用", "课文理解", "语法造句"],
        "teamNames": { "wei": "魏国", "shu": "蜀国", "wu": "吴国" },
        "teamColors": { "wei": "#ef4444", "shu": "#10b981", "wu": "#3b82f6" },
        "questions": {
            "q_0_10": { "question": "请填空：他想出国读____。", "question_en": "Fill in the blank: He wants to study for a ____ abroad.", "answer": "博士" },
            "q_0_20": { "question": "请填空：我心里很____，因为马上要见到偶像了。", "question_en": "Fill in the blank: I'm very ____ because I'm about to meet my idol.", "answer": "激动" },
            "q_0_30": { "question": "请填空：遇到解决不了的问题，我会寻求____的帮助。", "question_en": "Fill in the blank: When I encounter problems I can't solve, I will seek ____'s help.", "answer": "导游" },
            "q_1_10": { "question": "课文一中，小夏为什么遇到问题？", "question_en": "In Text 1, why did Xiaoxia encounter problems?", "answer": "因为她还没有收到国外大学的邀请信，但下周就要办签证了。" },
            "q_1_20": { "question": "课文二中，王老板成功的秘诀是什么？", "question_en": "In Text 2, what is the secret to Boss Wang's success?", "answer": "先吃最小的西瓜，趁别人没吃完大的时多吃，寓意要抓住眼前的机会，从小做起，积累优势。" },
            "q_1_30": { "question": "课文三中，小李和小林对“拒绝别人”的理解有何不同？", "question_en": "In Text 3, what are the different understandings of 'refusing others' between Xiaoli and Xiaolin?", "answer": "小林觉得拒绝会让朋友误会和伤心，小李认为拒绝是负责任的表现，只要方法合适且有礼貌。" },
            "q_2_10": { "question": "用“可”造一个句子，表示强调。", "question_en": "Make a sentence with '可' to show emphasis.", "answer": "这件事情可不简单，需要好好想想。" },
            "q_2_20": { "question": "用“到底”造一个句子。", "question_en": "Make a sentence with '到底'.", "answer": "你到底要不要跟我一起去？" },
            "q_2_30": { "question": "用“拿...来说”造一个句子。", "question_en": "Make a sentence with '拿...来说'.", "answer": "学习任何语言，拿汉语来说，多听多说是很重要的。" }
        },
        "extra_pk_questions": [
            { "type": "快问快答", "q": "“天外有天，人外有人”是什么意思？", "q_en": "What does '天外有天，人外有人' mean?", "a": "比喻能人之外还有能人，劝人不要骄傲自满。" },
            { "type": "抢答", "q": "课文四中，学汉语要注意哪三个方面？", "q_en": "In Text 4, what three aspects should one pay attention to when learning Chinese?", "a": "课前预习、上课认真听、课后复习" }
        ]
    },

    // 10. 词义搭配测验
    "module_9_vocab_practice": [
        { "question": "他硕士毕业后，又去读了____。", "options": ["博士", "签证", "表格", "记者"], "answer": "博士" },
        { "question": "去国外旅游需要提前办好____。", "options": ["签证", "表格", "传真", "护照"], "answer": "签证" },
        { "question": "我想____参加HSK考试。", "options": ["报名", "参观", "代表", "推"], "answer": "报名" },
        { "question": "请大家填写这张____。", "options": ["表格", "传真", "签证", "材料"], "answer": "表格" },
        { "question": "请把会议记录____给我。", "options": ["传真", "参观", "报名", "推"], "answer": "传真" },
        { "question": "我带你____一下我们的公司。", "options": ["参观", "激动", "代表", "失望"], "answer": "参观" },
        { "question": "听到这个好消息，她非常____。", "options": ["激动", "失望", "马虎", "冷静"], "answer": "激动" },
        { "question": "那个____很帅，人也很好。", "options": ["小伙子", "记者", "导游", "小姑娘"], "answer": "小伙子" },
        { "question": "她是一名电视台的____。", "options": ["记者", "护士", "老师", "学生"], "answer": "记者" },
        { "question": "他____学校参加了这次比赛。", "options": ["代表", "参观", "报名", "推"], "answer": "代表" },
        { "question": "考试没考好，我很____。", "options": ["失望", "激动", "自信", "冷静"], "answer": "失望" },
        { "question": "我周末喜欢去____玩，空气很好。", "options": ["郊区", "客厅", "使馆", "公司"], "answer": "郊区" },
        { "question": "她在这家旅行社travel agency当____。", "options": ["导游", "记者", "护士", "老师"], "answer": "导游" },
        { "question": "说话要有____，不要随便打断别人的话。", "options": ["礼貌", "自信", "冷静", "马虎"], "answer": "礼貌" },
        { "question": "请____我迟到了。", "options": ["原谅", "同情", "推", "挂"], "answer": "原谅" },
        { "question": "他把地图____在了墙上。", "options": ["挂", "推", "预习", "重视"], "answer": "挂" },
        { "question": "他很穷，但是没有人____他。", "options": ["同情", "原谅", "尊重", "重视"], "answer": "同情" },
        { "question": "会议____到下周举行。", "options": ["推", "挂", "预习", "报名"], "answer": "推" },
        { "question": "每次上课前我都会认真____。", "options": ["预习", "推", "挂", "报名"], "answer": "预习" },
        { "question": "这次考试的____内容是第三课的语法。", "options": ["重点", "内容", "过程", "顺序"], "answer": "重点" },
        { "question": "他做事总是很____，经常出错误。", "options": ["马虎", "自信", "冷静", "激动"], "answer": "马虎" },
        { "question": "她是一个非常____的女孩，大家都很喜欢她。", "options": ["自信", "马虎", "冷静", "激动"], "answer": "自信" },
        { "question": "遇到问题，我们要保持____。", "options": ["冷静", "激动", "失望", "马虎"], "answer": "冷静" },
        { "question": "比赛有____有赢，这很正常。", "options": ["输", "敢", "推", "挂"], "answer": "输" },
        { "question": "我们应该____教育。", "options": ["重视", "敢", "尊重", "同情"], "answer": "重视" },
        { "question": "你____说出你的真实想法吗？", "options": ["敢", "输", "推", "挂"], "answer": "敢" },
        { "question": "每个人都希望得到别人的____。", "options": ["尊重", "同情", "礼貌", "自信"], "answer": "尊重" },
        { "question": "你不是已经买好火车票了吗？你____怎么打算的呀？", "options": ["到底", "可", "否则", "然而"], "answer": "到底" },
        { "question": "其实拒绝并不____不愿意帮忙。", "options": ["表示", "代表", "发现", "养成"], "answer": "表示" },
        { "question": "作为班长，他要对班里的所有事情____。", "options": ["负责", "激动", "失望", "马虎"], "answer": "负责" }
    ],

    // 11. 课文篇章理解
    "module_10_comprehension": [
        {
            "sectionTitle": "课文一：小夏出国留学遇到了问题",
            "textContext": "小雨：你马上就要硕士毕业了吧？将来有什么打算？\n小夏：我想出国读博士，一直在准备办签证需要的材料。\n小雨：现在材料准备得怎么样了？\n小夏：成绩证明和护照已经准备好了，另外，还跟国外的大学取得了联系，填写了报名表格。\n小雨：还应该有国外大学给你的邀请信吧？他们把邀请信传真给你了吗？\n小夏：没有啊，下个星期我就要去使馆办签证了，这可怎么办？\n小雨：这可是个大问题，我也不太清楚。我帮你查一下学校的电话号码，你打电话问一下吧。",
            "questions": [
                { "question": "小夏马上要毕业的是什么学历？", "options": ["本科", "硕士", "博士", "高中"], "answer": "硕士" },
                { "question": "小夏现在遇到的主要问题是什么？", "options": ["没有报名表格", "护照过期了", "没有收到大学的邀请信", "不知道怎么联系大学"], "answer": "没有收到大学的邀请信" }
            ]
        },
        {
            "sectionTitle": "课文二：王老板告诉李进自己成功的经验",
            "textContext": "李进：谢谢您带我参观您的公司。在参观过程中我很激动，有个问题一直想问您。\n王老板：好啊！小伙子，咱们一边吃西瓜，一边聊。\n李进：您从大学毕业开始工作，到现在才十年时间，怎么给公司赚了这么多钱？这让我非常吃惊。我想向您学习一下成功的经验。\n王老板：这个问题以前一个记者也问过我。做生意时虽然会遇到各种压力和困难，但是大家的机会都是相同的。你看，这里有三块大小不同的西瓜，我们用西瓜的大小代表钱的多少，要是我们一起开始吃，你会先选哪块？\n李进：我肯定先吃最大的一块了，难道您会先吃小的，放弃吃大块的机会吗？\n王老板：我会先吃最小的一块，因为在你没吃完最大的那块时，我还有时间再多吃一块，最后一定比你吃的西瓜多。听完我的回答，恐怕你已经知道我的答案了吧。",
            "questions": [
                { "question": "王老板成功的经验是什么？", "options": ["先吃最大的西瓜", "先吃最小的西瓜", "只吃一块西瓜", "不吃西瓜"], "answer": "先吃最小的西瓜" },
                { "question": "“用西瓜的大小代表钱的多少”的寓意是什么？", "options": ["钱越多越好", "机会的大小不重要", "要抓住眼前的机会，积累优势", "西瓜和钱没有关系"], "answer": "要抓住眼前的机会，积累优势" }
            ]
        },
        {
            "sectionTitle": "课文三：小林不好意思拒绝朋友",
            "textContext": "小林：今年放假我又回不了家了，这次我父母又要失望了。你有什么计划？\n小李：我计划去郊区住一个月。你不是已经买好火车票了吗？你到底怎么打算的呀？\n小林：昨天一个外地的好朋友打电话说要来旅游，让我当导游，我实在不好意思拒绝。\n小李：其实拒绝并不表示不愿意帮忙。遇到解决不了的问题或者无法完成的任务时，拒绝正好说明你对朋友负责。这也是对你父母负责的态度。\n小林：既然别人找我帮忙，说明他真的很需要我的帮忙。我担心要是说“不”的话，会让他误会和伤心。\n小李：别担心！如果你用一个既合适又礼貌的方法告诉朋友，他一定会原谅你的。",
            "questions": [
                { "question": "小林为什么不好意思拒绝朋友？", "options": ["怕朋友误会和伤心", "怕朋友不理他", "怕朋友不再找他帮忙", "觉得当导游很有趣"], "answer": "怕朋友误会和伤心" },
                { "question": "小李认为，在什么情况下拒绝朋友是负责任的表现？", "options": ["不想帮忙的时候", "解决不了问题或无法完成任务时", "朋友要求做违法的事情时", "任何情况下都可以拒绝"], "answer": "解决不了问题或无法完成任务时" }
            ]
        },
        {
            "sectionTitle": "课文四：不要把什么事情都推到“明天”",
            "textContext": "有些同学经常把“明天”和“将来”挂在嘴边，常说作业明天再完成，下次考试一定好好儿复习，等等。这种态度会浪费时间，不但会让你到最后什么事情都做不成，而且还得不到别人的同情。所以不要把什么事情都推到“明天”，一切从现在开始做起。就拿学汉语来说吧，首先要注意课前预习，找出第二天要学习的重点；其次，上课时要认真听，不能马虎；最后课后要记得复习。只要这样，汉语就能越学越好，越说越自信。",
            "questions": [
                { "question": "课文批评了哪种学习态度？", "options": ["把事情推到明天再做", "认真听课", "课前预习", "课后复习"], "answer": "把事情推到明天再做" },
                { "question": "根据课文，学习汉语应该怎么做？", "options": ["只看书不听课", "只要课前预习就好", "课前预习、上课认真听、课后复习", "只靠老师讲不复习"], "answer": "课前预习、上课认真听、课后复习" }
            ]
        },
        {
            "sectionTitle": "课文五：天外有天，人外有人",
            "textContext": "当你认为自己在哪方面很优秀时，千万要冷静，不要骄傲。因为这个世界很大，“天外有天，人外有人”，很可能有人在这方面比你更厉害。你现在是第一，并不表示你永远都是第一。就像比赛一样，没有人会永远输，也没有人会一直赢。我们知道得越多，就会发现自己不懂得也越多。我们应该重视平时的积累，多向周围的人学习。如果你敢诚实地说出自己对哪方面不了解，并不说明自己比别人差，相反，这样做更能得到别人的尊重。",
            "questions": [
                { "question": "“天外有天，人外有人”这句话主要想表达什么？", "options": ["天空很大，外面有很多人", "鼓励人们要谦虚，不要骄傲", "世界很大，有很多优秀的人", "强调竞争的重要性"], "answer": "鼓励人们要谦虚，不要骄傲" },
                { "question": "如果你诚实地说出自己不懂的地方，别人会怎么看你？", "options": ["觉得你很差", "会讨厌你", "更尊重你", "觉得你很笨"], "answer": "更尊重你" }
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
window.LESSONS_DATA['hsk4-16'] = lessonData;
window.lessonData = lessonData; // For direct access during development

// Node.js export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lessonData;
}