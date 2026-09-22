/*
================================================================
== 课程数据文件 (Lesson Data File)
== 第十五课: 教育孩子的艺术
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
    "lesson": "HSK 4 - 第十五课《教育孩子的艺术》",
    "students": [ "列夏", "丽莎", "明溪", "星悦", "德昊", "任华", "梦航", "基里尔", "萨~沙~", "萨沙", "达铭", "安德烈", "纪嘉", "高斯佳", "瓦列", "Maiia" ],

    "pinyin_map": {
        "弹": "tán", "钢琴": "gāngqín", "棒": "bàng", "孙子": "sūnzi", "寒假": "hánjià",
        "父亲": "fùqin", "闹钟": "nàozhōng", "响": "xiǎng", "醒": "xǐng", "赶": "gǎn",
        "厕所": "cèsuǒ", "批评": "pīpíng", "弄": "nòng", "管理": "guǎnlǐ", "打针": "dǎzhēn",
        "护士": "hùshi", "表扬": "biǎoyáng", "怀疑": "huáiyí", "千万": "qiānwàn", "故意": "gùyì",
        "敲": "qiāo", "整理": "zhěnglǐ", "合适": "héshì", "骗": "piàn", "儿童": "értóng",
        "假": "jiǎ", "左右": "zuǒyòu", "懒": "lǎn", "笨": "bèn", "粗心": "cūxīn",
        "骄傲": "jiāo'ào", "害羞": "hàixiū",
        // Extended from context/Pinyin notes
        "乐器": "yuèqì", "孙女": "sūnnü", "外孙": "wàisūn", "外孙女": "wàisūnnü", "子孙": "zǐsūn",
        "暑假": "shǔjià", "放假": "fàngjià", "休假": "xiūjià", "双亲": "shuāngqīn", "亲人": "qīnrén",
        "亲情": "qīnqíng", "聪明": "cōngmíng", "可爱": "kě'ài", "教育": "jiàoyù", "知识": "zhīshi",
        "养成": "yǎngchéng", "习惯": "xíguàn", "优秀": "yōuxiù", "睡觉": "shuìjiào", "好处": "hǎochù",
        "主要": "zhǔyào", "心情": "xīnqíng", "安排": "ānpái", "舒服": "shūfu", "勇敢": "yǒnggǎn",
        "积极性": "jījíxìng", "困难": "kùnnan", "敲打": "qiāodǎ", "关心": "guānxīn", "愉快": "yúkuài",
        "选择": "xuǎnzé", "判断": "pànduàn", "普遍": "pǔbiàn", "好动": "hàodòng", "引起": "yǐnqǐ",
        "兴趣": "xìngqù", "明白": "míngbai", "正常": "zhèngcháng", "发展": "fāzhǎn", "性格": "xìnggé",
        "健康": "jiànkāng", "看法": "kànfǎ", "遵守": "zūnshǒu" // Added from exercises
    },

    "translation_dict": {
        "弹": "to play (a stringed instrument or piano)", "钢琴": "piano", "棒": "excellent; great", "孙子": "grandson (son's son)", "寒假": "winter holiday",
        "父亲": "father", "闹钟": "alarm clock", "响": "to sound; to ring", "醒": "to wake up; to be awake", "赶": "to rush for; to hurry",
        "厕所": "lavatory; toilet", "批评": "to criticize", "弄": "to do; to make; to get", "管理": "to manage; to administer", "打针": "to give/get an injection",
        "护士": "nurse", "表扬": "to praise; commend", "怀疑": "to doubt; suspect", "千万": "by all means; absolutely must (used with imperative)", "故意": "intentionally; on purpose",
        "敲": "to knock; to beat; to strike", "整理": "to tidy up; to arrange", "合适": "fit; suitable", "骗": "to cheat; to deceive", "儿童": "children",
        "假": "false; fake", "左右": "around; or so; about", "懒": "lazy", "笨": "stupid; foolish", "粗心": "careless; thoughtless",
        "骄傲": "arrogant; conceited; proud", "害羞": "to be shy; to be timid",
        // Extended
        "乐器": "musical instrument", "孙女": "granddaughter (son's daughter)", "外孙": "maternal grandson", "外孙女": "maternal granddaughter", "子孙": "descendants",
        "暑假": "summer holiday", "放假": "to have a holiday", "休假": "to take a holiday", "双亲": "parents", "亲人": "family member; relative",
        "亲情": "family love/affection", "聪明": "clever; intelligent", "可爱": "cute; lovely", "教育": "to educate; education", "知识": "knowledge",
        "养成": "to form (a habit); to cultivate", "习惯": "habit; custom", "优秀": "excellent; outstanding", "睡觉": "to sleep", "好处": "benefit; advantage",
        "主要": "main; principal", "心情": "mood; state of mind", "安排": "to arrange; to plan", "舒服": "comfortable; well", "勇敢": "brave; courageous",
        "积极性": "enthusiasm; initiative", "困难": "difficulty; difficult", "敲打": "to tap; to knock", "关心": "to care for; concern", "愉快": "happy; pleasant",
        "选择": "to choose; choice", "判断": "to judge; judgment", "普遍": "universal; widespread", "好动": "active; restless", "引起": "to cause; to arouse; to attract",
        "兴趣": "interest", "明白": "to understand; clear", "正常": "normal; regular", "发展": "to develop; development", "性格": "character; personality",
        "健康": "healthy; health", "看法": "view; opinion", "遵守": "to observe; to obey"
    },

    "collocations": [
        { "left": "弹", "right": "钢琴" }, { "left": "弹", "right": "吉他" }, { "left": "拉", "right": "小提琴" },
        { "left": "表演得真", "right": "棒" }, { "left": "我的", "right": "孙子" }, { "left": "放", "right": "寒假" },
        { "left": "教育得真", "right": "好" }, { "left": "父母是孩子最重要的", "right": "老师" }, { "left": "养成好", "right": "习惯" },
        { "left": "定", "right": "闹钟" }, { "left": "闹钟", "right": "响了" }, { "left": "没", "right": "醒" },
        { "left": "赶", "right": "时间" }, { "left": "赶", "right": "火车" }, { "left": "上", "right": "厕所" },
        { "left": "批评", "right": "孩子" }, { "left": "把电脑", "right": "弄坏了" }, { "left": "学会", "right": "管理" },
        { "left": "去医院", "right": "打针" }, { "left": "给病人", "right": "打针" }, { "left": "害怕", "right": "打针" },
        { "left": "医院的", "right": "护士" }, { "left": "老师", "right": "表扬" }, { "left": "得到", "right": "表扬" },
        { "left": "怀疑自己的", "right": "能力" }, { "left": "千万", "right": "别迟到" }, { "left": "千万", "right": "要小心" },
        { "left": "故意", "right": "弄坏" }, { "left": "故意", "right": "大声哭" }, { "left": "敲", "right": "门" },
        { "left": "整理", "right": "房间" }, { "left": "整理", "right": "衣服" }, { "left": "非常", "right": "合适" },
        { "left": "骗", "right": "人" }, { "left": "骗", "right": "自己" }, { "left": "儿童", "right": "节" },
        { "left": "说", "right": "假话" }, { "left": "七岁", "right": "左右" }, { "left": "他很", "right": "懒" },
        { "left": "我有点儿", "right": "笨" }, { "left": "他很", "right": "粗心" }, { "left": "感到", "right": "骄傲" },
        { "left": "有点儿", "right": "害羞" }, { "left": "引起", "right": "兴趣" }, { "left": "正常", "right": "发展" },
        { "left": "健康", "right": "发展" }
    ],

    // 1. 词汇基础模块
    "module_1_vocab": {
        "pinyin_match": [
            ["弹", "钢琴", "棒", "孙子", "寒假", "父亲"],
            ["闹钟", "响", "醒", "赶", "厕所", "批评"],
            ["弄", "管理", "打针", "护士", "表扬", "怀疑"],
            ["千万", "故意", "敲", "整理", "合适", "骗"],
            ["儿童", "假", "左右", "懒", "笨", "粗心"],
            ["骄傲", "害羞", "聪明", "教育", "习惯", "优秀"]
        ],
        "char_match": [
            ["弹钢琴", "好棒", "孙子", "寒假", "父亲"],
            ["闹钟", "响声", "叫醒", "赶时间", "厕所", "批评"],
            ["弄坏", "管理", "打针", "护士", "表扬", "怀疑"],
            ["千万", "故意", "敲门", "整理", "合适", "骗人"],
            ["儿童", "假的", "左右", "懒得", "笨蛋", "粗心"],
            ["骄傲", "害羞", "养成", "安排", "判断", "发展"]
        ],
        "guess_words": [
            "弹钢琴", "棒", "孙子", "寒假", "父亲", "闹钟", "响", "醒", "赶", "厕所",
            "批评", "弄", "管理", "打针", "护士", "表扬", "怀疑", "千万", "故意", "敲",
            "整理", "合适", "骗", "儿童", "假", "左右", "懒", "笨", "粗心", "骄傲", "害羞"
        ]
    },

    // 2. 词汇操练
    "module_2_vocab_drill": {
        "word_bomb": [
            { "word": "闹钟", "img_url": "https://images.unsplash.com/photo-1549419139-c16e78077c5c?w=400", "en_hint": "alarm clock" },
            { "word": "厕所", "img_url": "https://images.unsplash.com/photo-1610475456484-93e506691494?w=400", "en_hint": "toilet" },
            { "word": "护士", "img_url": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400", "en_hint": "nurse" },
            { "word": "儿童", "img_url": "https://images.unsplash.com/photo-1522778848773-40b904d96a67?w=400", "en_hint": "children" },
            { "word": "整理", "img_url": "https://images.unsplash.com/photo-1616239103004-9469e719602e?w=400", "en_hint": "to tidy up" },
            { "word": "批评", "img_url": "https://images.unsplash.com/photo-1559132145-2f8d8393d142?w=400", "en_hint": "to criticize" },
            { "word": "害羞", "img_url": "https://images.unsplash.com/photo-1490237012356-d71d3780a133?w=400", "en_hint": "shy" },
            { "word": "骄傲", "img_url": "https://images.unsplash.com/photo-1627885375531-15cf43387796?w=400", "en_hint": "proud/arrogant" }
        ],
        "guess_words": [
            { "target_word": "钢琴" }, { "target_word": "棒" }, { "target_word": "醒" },
            { "target_word": "赶" }, { "target_word": "弄" }, { "target_word": "管理" },
            { "target_word": "打针" }, { "target_word": "表扬" }, { "target_word": "怀疑" }
        ],
        "blind_box_spinner": [
            { "words": [{ "text": "闹钟" }, { "text": "响" }, { "text": "醒" }] },
            { "words": [{ "text": "批评" }, { "text": "表扬" }, { "text": "鼓励" }] },
            { "words": [{ "text": "故意" }, { "text": "骗" }, { "text": "假" }] },
            { "words": [{ "text": "懒" }, { "text": "笨" }, { "text": "粗心" }] },
            { "words": [{ "text": "整理" }, { "text": "安排" }, { "text": "管理" }] }
        ]
    },

    // 3. 语法逻辑多关卡
    "module_3_grammar": {
        "grammar_points": [
            {
                "grammar_point_name": "动词：弄 (nòng)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["她", "画画", "的时候，", "弄", "脏", "了", "衣服。"], "correct_answer": "她画画的时候，弄脏了衣服。", "en_hint": "She stained her clothes while painting." },
                        { "chunks": ["你", "怎么", "把", "电脑", "弄", "坏", "了？"], "correct_answer": "你怎么把电脑弄坏了？", "en_hint": "How did you break the computer?" },
                        { "chunks": ["这些", "小事", "弄", "得", "我俩", "心情", "都", "不好。"], "correct_answer": "每天因为这些小事批评她，弄得我俩心情都不好。", "en_hint": "Criticizing her for these small things every day makes both of us feel bad." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1549445100-36d7a4b1f61d?w=400", // Messy room
                            "hint": "用“弄”表示让东西变得很乱。",
                            "en_hint": "Use '弄' to describe making something messy.",
                            "keywords": ["孩子", "弄", "房间", "乱"],
                            "reference_answer": "孩子把房间弄得太乱了，得整理一下。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你的朋友抱怨手机不小心掉地上摔坏了。请你用“弄”来描述他把手机弄坏了。",
                            "en_scenario": "Your friend complains that he accidentally dropped his phone and broke it. Use '弄' to describe how he broke it.",
                            "reference": "真可惜，他昨天不小心把新手机弄坏了。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "副词：千万 (qiānwàn)",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["过马路时", "千万", "要", "小心，", "注意", "周围", "的", "车。"], "correct_answer": "过马路时千万要小心，注意周围的车。", "en_hint": "Be sure to be careful when crossing the road, and pay attention to the surrounding vehicles." },
                        { "chunks": ["如果", "考试", "那天", "你", "迟到了，", "就", "不能", "参加", "考试了，", "所以", "千万", "不能", "迟到。"], "correct_answer": "如果考试那天你迟到了，就不能参加考试了，所以千万不能迟到。", "en_hint": "If you are late on the day of the exam, you won't be able to participate, so absolutely do not be late." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1621644788320-1a742a781b0f?w=400", // Person drinking and car keys
                            "hint": "用“千万”提醒喝酒不开车。",
                            "en_hint": "Use '千万' to remind someone not to drink and drive.",
                            "keywords": ["喝酒", "开车", "千万", "别"],
                            "reference_answer": "开车千万别喝酒，喝酒千万别开车。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你发现你的朋友最近工作压力很大，脸色不好。请你用“千万”提醒他要注意身体。",
                            "en_scenario": "You notice your friend has been under a lot of work pressure lately and looks pale. Use '千万' to remind him to take care of his health.",
                            "reference": "你最近工作太累了，千万要注意身体，多休息。"
                        }
                    ]
                }
            }
        ],
        "synonym_distinction": [
            { "sentence": "不管压力有多么大，____不能放弃，而是要继续坚持下去。", "options": ["千万", "一定"], "answer": "千万", "explanation": "<strong>千万:</strong> 表示强烈提醒或劝告，常用于否定或带有禁止意味的语境中。<br><strong>一定:</strong> 表示肯定、确定或决心，语气更直接、肯定。" },
            { "sentence": "这次你____要按照要求认真填写，小心一点儿，别写错了。", "options": ["千万", "一定"], "answer": "一定", "explanation": "这里“一定”表示强调必须这样做，语气肯定，且符合语境。" },
            { "sentence": "兴趣是最好的老师，如果孩子对一件事情感兴趣，那他____会努力地去学习，效果也会更好。", "options": ["千万", "一定"], "answer": "一定", "explanation": "这里“一定”表示肯定的推测，这种情况下不能用“千万”。" },
            { "sentence": "通过失败你能得到一些经验，____不要因为失败就不努力了。", "options": ["千万", "一定"], "answer": "千万", "explanation": "“千万不要”表示强烈的告诫，与“一定不要”意思相近，但在此更强调提醒。两者都可以。" }
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
            "孩子做事慢，往往是因为他们不会安排自己的时间。",
            "闹钟响了，孩子也没醒。",
            "过多的表扬可能会给孩子带来压力。",
            "教育孩子应该选择合适的教育方法。",
            "七岁左右的儿童普遍好动，坐不住。"
        ]
    },

    // 6. 动态词云
    "module_5_wordcloud": {
        "title": "💡 你认为什么是好的教育？",
        "hint": "请扫码发送1-2个词描述你的想法（如：耐心、鼓励、管理、引导...）"
    },

    // 7. 极限挑战
    "module_6_challenge": {
        "challenge_sets": [
            { "id": 1, "keywords": ["管理", "安排", "习惯"], "framework": "要让孩子学会**管理**时间，**安排**好自己的事情，养成好的**习惯**。", "translation": "Children should learn to manage their time, arrange their own affairs, and develop good habits." },
            { "id": 2, "keywords": ["批评", "表扬", "鼓励"], "framework": "教育孩子时，**批评**要少，**表扬**和**鼓励**要多。", "translation": "When educating children, there should be less criticism, and more praise and encouragement." },
            { "id": 3, "keywords": ["故意", "骗", "假"], "framework": "孩子会**故意**做一些事情引起注意，但父母**千万**不要**骗**孩子，更不能说**假**话。", "translation": "Children might intentionally do things to get attention, but parents must never deceive children, let alone tell lies." },
            { "id": 4, "keywords": ["懒", "笨", "粗心", "发展"], "framework": "不要用“**懒**”、“**笨**”、“**粗心**”来批评孩子，这不利于他们的正常**发展**。", "translation": "Don't criticize children using words like 'lazy', 'stupid', or 'careless'; this is not good for their normal development." }
        ]
    },

    // 8. 找茬大师（文字辨错）
    "module_7_find_error": {
        "questions": [
            { "sentence": "他很粗心，经常把东西弄丢。", "error": "", "correct": "（此句语法正确）", "explanation": "“弄”表示“使...变得/处于某种状态”，这里是“弄丢”使东西丢失，使用正确。" },
            { "sentence": "你千万要告诉我实话，别骗我。", "error": "", "correct": "（此句语法正确）", "explanation": "“千万+要/别+动词”表示强烈劝告或禁止，使用正确。" },
            { "sentence": "老师表扬我的话让我感到非常骄傲。", "error": "骄傲", "correct": "自豪/高兴", "explanation": "“骄傲”有自满、轻视他人的贬义，或表示为某事感到光荣。这里应是感到“自豪”或“高兴”。" },
            { "sentence": "闹钟响了，我还没醒。", "error": "", "correct": "（此句语法正确）", "explanation": "“醒”表示从睡眠状态中恢复清醒，与“响”连用，表达未醒的状态，使用正确。" },
            { "sentence": "这双鞋子很适合我。", "error": "", "correct": "（此句语法正确）", "explanation": "“适合”是动词，可直接作谓语。与“合适”（形容词）用法不同。" },
            { "sentence": "他没有故意这样做，他只是不小心。", "error": "", "correct": "（此句语法正确）", "explanation": "“故意”是副词，表示有意识地、有目的地去做某事，与“不小心”相对，使用正确。" }
        ]
    },

    // 9. 终极对决 Jeopardy (诸神之战)
    "module_8_jeopardy": {
        "categories": ["词语应用", "课文理解", "语法造句"],
        "teamNames": { "wei": "魏国", "shu": "蜀国", "wu": "吴国" },
        "teamColors": { "wei": "#ef4444", "shu": "#10b981", "wu": "#3b82f6" },
        "questions": {
            "q_0_10": { "question": "请填空：我每天早上都被____吵醒。", "question_en": "Fill in the blank: I'm woken up by the ____ every morning.", "answer": "闹钟" },
            "q_0_20": { "question": "请填空：他把玩具____坏了。", "question_en": "Fill in the blank: He ____ the toy.", "answer": "弄" },
            "q_0_30": { "question": "请填空：教育孩子要选择____的方法。", "question_en": "Fill in the blank: When educating children, one should choose ____ methods.", "answer": "合适" },
            "q_1_10": { "question": "请快速读出这些词语：弹钢琴、打针、醒、响、管理" },
            "q_1_20": { "question": "请快速读出这些词语：批评、弄、杆、表扬、怀疑" },
            "q_1_30": { "question": "请快速读出这些词语：故意、整理、骗、骄傲、害羞" },
            "q_2_10": { "question": "用“弄”造一个句子。", "question_en": "Make a sentence with '弄'.", "answer": "别把我的文件弄湿了。" },
            "q_2_20": { "question": "用“千万”造一个句子。", "question_en": "Make a sentence with '千万'.", "answer": "出门千万记得关灯。" },
            "q_2_30": { "question": "用“害羞”和“鼓励”造一个句子。", "question_en": "Make a sentence with '害羞' and '鼓励'.", "answer": "孩子有点害羞，我们要多鼓励他。" }
        },
        "extra_pk_questions": [
            { "type": "快问快答", "q": "除了弹钢琴，课文中还提到了什么乐器？", "q_en": "Besides playing the piano, what other musical instruments are mentioned in the text?", "a": "吉他、小提琴" },
            { "type": "抢答", "q": "孟母三迁的故事说明了什么？", "q_en": "What does the story of Mencius' Mother Moving Thrice illustrate?", "a": "环境能改变一个人的爱好和习惯，创造一个好的环境对一个人的成长非常重要。" }
        ]
    },

    // 10. 词义搭配测验
    "module_9_vocab_practice": [
        { "question": "他会____钢琴和吉他。", "options": ["弹", "敲", "弄", "赶"], "answer": "弹" },
        { "question": "她表演得真____！", "options": ["棒", "假", "懒", "笨"], "answer": "棒" },
        { "question": "我爷爷有三个____，一个孙女。", "options": ["孙子", "儿童", "父亲", "护士"], "answer": "孙子" },
        { "question": "我们快放____了，同学们都很高兴。", "options": ["寒假", "闹钟", "厕所", "知识"], "answer": "寒假" },
        { "question": "他____是一位非常成功的商人。", "options": ["父亲", "孙子", "儿童", "护士"], "answer": "父亲" },
        { "question": "早上____响了，我才____。", "options": ["闹钟, 醒", "闹钟, 响", "醒, 闹钟", "响, 闹钟"], "answer": "闹钟, 醒" },
        { "question": "我起床晚了，差点儿没____上飞机。", "options": ["赶", "弄", "敲", "骗"], "answer": "赶" },
        { "question": "他在____里待了很久。", "options": ["厕所", "钢琴", "知识", "能力"], "answer": "厕所" },
        { "question": "老师____了他不按照要求写作业。", "options": ["批评", "表扬", "怀疑", "管理"], "answer": "批评" },
        { "question": "别把我的书____脏了。", "options": ["弄", "赶", "敲", "骗"], "answer": "弄" },
        { "question": "这家公司____得很好。", "options": ["管理", "批评", "表扬", "怀疑"], "answer": "管理" },
        { "question": "我儿子不怕____，很勇敢。", "options": ["打针", "表扬", "批评", "怀疑"], "answer": "打针" },
        { "question": "这位____很细心。", "options": ["护士", "儿童", "孙子", "父亲"], "answer": "护士" },
        { "question": "老师____了我学习努力。", "options": ["表扬", "批评", "怀疑", "管理"], "answer": "表扬" },
        { "question": "我____他是不是在说假话。", "options": ["怀疑", "表扬", "批评", "管理"], "answer": "怀疑" },
        { "question": "你____别忘了带钥匙。", "options": ["千万", "故意", "左右", "普遍"], "answer": "千万" },
        { "question": "他____把我的杯子打碎了。", "options": ["故意", "千万", "左右", "普遍"], "answer": "故意" },
        { "question": "有人在____门。", "options": ["敲", "弄", "赶", "骗"], "answer": "敲" },
        { "question": "请把这些文件____一下。", "options": ["整理", "批评", "怀疑", "管理"], "answer": "整理" },
        { "question": "这件衣服，你穿很____。", "options": ["合适", "棒", "懒", "笨"], "answer": "合适" },
        { "question": "他____了所有的人。", "options": ["骗", "敲", "弄", "赶"], "answer": "骗" },
        { "question": "____是一个国家的未来。", "options": ["儿童", "护士", "孙子", "父亲"], "answer": "儿童" },
        { "question": "这个消息是____的，别相信。", "options": ["假", "棒", "懒", "笨"], "answer": "假" },
        { "question": "他大约七岁____。", "options": ["左右", "千万", "故意", "普遍"], "answer": "左右" },
        { "question": "他很____，什么都不想做。", "options": ["懒", "笨", "粗心", "骄傲"], "answer": "懒" },
        { "question": "我的数学不好，觉得自己有点儿____。", "options": ["笨", "懒", "粗心", "骄傲"], "answer": "笨" },
        { "question": "他总是很____，经常出错误。", "options": ["粗心", "懒", "笨", "骄傲"], "answer": "粗心" },
        { "question": "取得一点成绩就____的人很难进步。", "options": ["骄傲", "懒", "笨", "粗心"], "answer": "骄傲" },
        { "question": "她第一次见生人，有点儿____。", "options": ["害羞", "懒", "笨", "粗心"], "answer": "害羞" }
    ],

    // 11. 课文篇章理解
    "module_10_comprehension": [
        {
            "sectionTitle": "课文一：李老师建议王静让孩子养成好习惯",
            "textContext": "王静：那个一边弹钢琴一边唱歌的男孩子是谁？表演得真棒！\n李老师：是我孙子。去年寒假前的新年晚会他也表演过一次。\n王静：我想起来了，这孩子又聪明又可爱，你们教育得真好！\n李老师：是他父母教育得好。父母是孩子最重要的老师。他父母不仅教他知识，而且还花了很长时间帮助他养成了非常好的习惯，现在他每天都自己练习弹钢琴。\n王静：让孩子养成一个好习惯实在太重要了，看来我得向他父母好好儿学习。\n李老师：对。如果希望有一个优秀的孩子，你就要先成为一位优秀的父亲或者母亲。",
            "questions": [
                { "question": "王静以前看过李老师孙子的表演吗？你是怎么知道的？", "options": ["看过，她说“我想起来了”", "没看过，她问“是谁”", "不确定，她只说了“真棒”", "看过，因为他去年也表演过"], "answer": "看过，她说“我想起来了”" },
                { "question": "李老师认为“父母是孩子最重要的老师”这句话的意思是什么？", "options": ["父母应该教孩子所有知识", "父母要成为孩子的榜样，帮助他们养成好习惯", "父母是孩子唯一的老师", "父母应该替孩子做所有决定"], "answer": "父母要成为孩子的榜样，帮助他们养成好习惯" }
            ]
        },
        {
            "sectionTitle": "课文二：王静建议孙月教育孩子学会安排时间",
            "textContext": "王静：看你脸色不太好，是不是昨晚没休息好？\n孙月：别提了。我女儿昨晚做作业又做到11点。\n王静：睡觉太晚对孩子的身体没有好处。最近孩子作业是不是太多了？\n孙月：主要是她做事情比较慢，比如早上闹钟响了她不醒，我赶时间送她上学，她又急着上厕所。每天因为这些小事批评她，弄得我俩心情都不好。\n王静：孩子做事慢，往往是因为他们不会安排自己的时间。你应该让孩子学会管理时间。\n孙月：看来还是我的教育方法有问题。平时看她做事情慢，总想替她做，以后得让她学会安排时间，自己的事情自己做。",
            "questions": [
                { "question": "孙月常因为什么事情心情不好？", "options": ["女儿做作业太慢，早上赶时间又急着上厕所", "女儿不听话，总是和她吵架", "女儿成绩不好，让她很担心", "女儿身体不好，需要照顾"], "answer": "女儿做作业太慢，早上赶时间又急着上厕所" },
                { "question": "王静建议孙月怎么做可以帮助孩子学会安排自己的事情？", "options": ["多批评孩子，让他们知道错误", "多替孩子做事情，节省时间", "让孩子学会管理时间，自己的事情自己做", "请家教辅导孩子做作业"], "answer": "让孩子学会管理时间，自己的事情自己做" }
            ]
        },
        {
            "sectionTitle": "课文三：王静和孙月讨论表扬孩子的方法",
            "textContext": "王静：明天又要带我儿子去医院打针，想想我就头疼。他就怕打针，每次打针都哭得特别厉害。\n孙月：记得我女儿小时候，带她去医院打针，刚开始，她害怕得要哭。我就小声地和护士说我女儿很勇敢，一点儿也不怕打针，女儿听了以后马上就不哭了。\n王静：原来鼓励和表扬对小孩儿挺有用的，下次我也试试。\n孙月：不过表扬也是一门艺术，表扬千万不要太多，过多的表扬可能会给孩子带来压力。不仅起不到鼓励作用，还可能让孩子怀疑自己的能力，变得没有信心。\n王静：那怎么表扬孩子才会更 有 效果呢？\n孙月：我认为表扬要及时，而且表扬不仅仅要看结果，更要看过程，这样才能鼓励他的积极性，让他变得勇敢，不怕困难。",
            "questions": [
                { "question": "孙月是如何让女儿在打针时不哭的？", "options": ["大声批评她", "威胁她", "小声表扬她勇敢", "给她买玩具"], "answer": "小声表扬她勇敢" },
                { "question": "关于表扬孩子，孙月提出了哪些建议？", "options": ["表扬越多越好", "只看结果不看过程", "要及时，要看过程，不能太多", "只在孩子表现完美时才表扬"], "answer": "要及时，要看过程，不能太多" }
            ]
        },
        {
            "sectionTitle": "课文四：有的孩子会故意乱扔东西",
            "textContext": "有的孩子在得不到自己想要的东西的时候，会通过哭、扔东西或者故意敲打来引起父母的注意。在这种情况下，建议父母先不要生气，应该停下手中的事情，陪孩子整理整理东西，和他们聊聊天儿，弄清楚他们的问题。父母的关心，可以让孩子心情愉快起来。教育孩子应该选择合适的教育方法，最好不要为了解决问题而骗孩子，这是因为儿童缺少判断能力，看到父母骗人，他们也会学着说假话。",
            "questions": [
                { "question": "有的孩子为什么故意乱扔东西？", "options": ["心情不好", "想引起父母的注意", "不知道该怎么玩", "模仿大人"], "answer": "想引起父母的注意" },
                { "question": "为什么父母不应该骗孩子？", "options": ["孩子会学着说假话", "孩子会生气", "孩子会不再爱父母", "孩子会变得不聪明"], "answer": "孩子会学着说假话" }
            ]
        },
        {
            "sectionTitle": "课文五：保护地球的小事",
            "textContext": "七岁左右的儿童普遍好动，坐不住，所以老师在教这个年龄段的孩子时，一定要想办法引起他们的兴趣。只有让他们觉得你教的内容有趣，他们才会愿意努力学习。当孩子不明白时，应该多鼓励他，不要用“懒”“笨”“粗心”这种词批评他，这样对他们的正常发展不好。而且，对不同性格的孩子要使用不同的教育方法。如果孩子比较骄傲，应该让他明白还有很多知识需要学习；要是孩子性格有些害羞，就要经常鼓励他说出自己的看法，这样才能让每一个孩子都健康地发展。",
            "questions": [
                { "question": "对七岁左右好动的儿童，老师应该怎么做才能让他们安静地学习？", "options": ["多批评他们", "想办法引起他们的兴趣", "强迫他们坐着", "给他们布置很多作业"], "answer": "想办法引起他们的兴趣" },
                { "question": "如果孩子比较骄傲，应该怎么教育？", "options": ["多表扬他", "让他明白还有很多知识需要学习", "不理他", "让他自己反省"], "answer": "让他明白还有很多知识需要学习" },
                { "question": "如果孩子性格害羞，应该怎么办？", "options": ["让他独自玩耍", "经常鼓励他说出自己的看法", "批评他不要害羞", "给他很多玩具"], "answer": "经常鼓励他说出自己的看法" }
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
window.LESSONS_DATA['hsk4-15'] = lessonData;
window.lessonData = lessonData; // For direct access during development

// Node.js export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lessonData;
}