/*
================================================================
== 课程数据文件 (Lesson Data File)
== 第十三课: 喝着茶看京剧
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
    "lesson": "HSK 4 - 第十三课《喝着茶看京剧》",
    "students": [ "列夏", "丽莎", "明溪", "星悦", "德昊", "任华", "梦航", "基里尔", "萨~沙~", "萨沙", "达铭", "安德烈", "纪嘉", "高斯佳", "瓦列", "Maiia" ], // Reusing from L12 as L13 doesn't specify unique students

    "pinyin_map": {
        "京剧": "jīngjù", "演员": "yǎnyuán", "演出": "yǎnchū", "观众": "guānzhòng", "厚": "hòu",
        "大概": "dàgài", "偶尔": "ǒu'ěr", "吃惊": "chījīng", "基础": "jīchǔ", "表演": "biǎoyǎn",
        "由": "yóu", "正常": "zhèngcháng", "申请": "shēnqǐng", "有趣": "yǒuqù", "开心": "kāixīn",
        "继续": "jìxù", "讨论": "tǎolùn", "大约": "dàyuē", "餐厅": "cāntīng", "纸袋": "zhǐdài",
        "互联网": "hùliánwǎng", "错误": "cuòwù", "进行": "jìnxíng", "随着": "suízhe", "十分": "shífēn",
        "普遍": "pǔbiàn", "部分": "bùfen", "稍微": "shāowēi", "苦": "kǔ", "省": "shěng",
        "生活习惯": "shēnghuó xíguàn", "解渴": "jiěkě", "中药": "zhōngyào" 
    },

    "translation_dict": {
        "京剧": "Пекинская опера", "演员": "актер, актриса", "演出": "выступать, представление", "观众": "зрители, аудитория", "厚": "глубокий, толстый",
        "大概": "примерно, приблизительно", "偶尔": "время от времени, изредка", "吃惊": "удивляться, быть шокированным", "基础": "основа, фундамент", "表演": "действовать, выступать",
        "由": "кем-либо (указывает на исполнителя)", "正常": "нормальный, регулярный", "申请": "подать заявку на", "有趣": "интересный, забавный", "开心": "счастливый, рад",
        "继续": "продолжать", "讨论": "обсуждать", "大约": "приблизительно, около", "餐厅": "ресторан, столовая", "纸袋": "бумажный пакет",
        "互联网": "интернет", "错误": "неправильный, ошибочный", "进行": "проводить, осуществлять", "随着": "вместе с, по мере", "十分": "очень, чрезвычайно",
        "普遍": "всеобщий, распространенный", "部分": "часть", "稍微": "немного, слегка", "苦": "горький", "省": "провинция",
        "生活习惯": "жизненная привычка", "解渴": "утолять жажду", "中药": "китайская медицина"
    },

    "collocations": [
        { "left": "看", "right": "京剧" },
        { "left": "京剧", "right": "演员" },
        { "left": "上台", "right": "演出" },
        { "left": "深受", "right": "观众喜爱" },
        { "left": "感情", "right": "深厚" },
        { "left": "大概", "right": "有30人" },
        { "left": "偶尔", "right": "加班" }, 
        { "left": "让人", "right": "吃惊" },
        { "left": "音乐", "right": "基础" },
        { "left": "精彩的", "right": "表演" },
        { "left": "由你", "right": "负责" },
        { "left": "正常", "right": "交流" },
        { "left": "申请", "right": "留学" },
        { "left": "有趣的", "right": "活动" },
        { "left": "玩得", "right": "开心" },
        { "left": "继续", "right": "努力" },
        { "left": "开会", "right": "讨论" },
        { "left": "大约", "right": "二百多人" },
        { "left": "中国", "right": "餐厅" },
        { "left": "塑料", "right": "袋" }, 
        { "left": "互联网", "right": "调查" },
        { "left": "错误", "right": "方法" },
        { "left": "进行", "right": "会议" },
        { "left": "随着", "right": "发展" },
        { "left": "十分", "right": "普遍" },
        { "left": "不可缺少", "right": "的部分" },
        { "left": "稍微", "right": "有点儿苦" },
        { "left": "凉", "right": "茶" } 
    ],

    // 1. 词汇基础模块
    "module_1_vocab": {
        "pinyin_match": [
            ["京剧", "演员", "演出", "观众", "厚", "大概"],
            ["偶尔", "吃惊", "基础", "表演", "由", "正常"],
            ["申请", "有趣", "开心", "继续", "讨论", "大约"],
            ["餐厅", "纸袋", "互联网", "错误", "进行", "随着"],
            ["十分", "普遍", "部分", "稍微", "苦", "省"]
        ],
        "char_match": [ 
            ["京剧", "演员", "演出", "观众", "深厚", "大概"],
            ["偶尔", "吃惊", "基础", "表演","辽宁省" , "正常"],
            ["申请", "有趣", "开心", "继续", "讨论", "大约"],
            ["餐厅", "纸袋", "互联网", "错误", "进行", "随着"],
            ["十分", "普遍", "部分", "稍微", "苦味"]
        ],
        "guess_words": [
            "京剧", "演员", "演出", "观众", "厚", "大概", "偶尔", "吃惊", "基础", "表演",
            "由", "正常", "申请", "有趣", "开心", "继续", "讨论", "大约", "餐厅", "纸袋",
            "互联网", "错误", "进行", "随着", "十分", "普遍", "部分", "稍微", "苦", "省"
        ]
    },

    // 2. 词汇操练
    "module_2_vocab_drill": {
        "word_bomb": [
            { "word": "京剧", "img_url": "https://images.unsplash.com/photo-1549298716-e55502c4f826?w=400", "en_hint": "Beijing opera" },
            { "word": "观众", "img_url": "https://images.unsplash.com/photo-1579294285223-2895690b200b?w=400", "en_hint": "audience" },
            { "word": "吃惊", "img_url": "https://images.unsplash.com/photo-1510906594845-4cd62c589851?w=400", "en_hint": "surprised" },
            { "word": "互联网", "img_url": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400", "en_hint": "internet" },
            { "word": "错误", "img_url": "https://images.unsplash.com/photo-1550592955-e405a3036c84?w=400", "en_hint": "wrong" },
            { "word": "讨论", "img_url": "https://images.unsplash.com/photo-1551033621-e40938f4d962?w=400", "en_hint": "discuss" },
            { "word": "普遍", "img_url": "https://images.unsplash.com/photo-1515378791036-0648a3ef5934?w=400", "en_hint": "common" },
            { "word": "苦", "img_url": "https://images.unsplash.com/photo-1563227926-258074d2b27a?w=400", "en_hint": "bitter" }
        ],
        "guess_words": [
            { "target_word": "演员" }, { "target_word": "演出" }, { "target_word": "大概" },
            { "target_word": "基础" }, { "target_word": "申请" }, { "target_word": "继续" },
            { "target_word": "餐厅" }, { "target_word": "进行" }, { "target_word": "部分" }
        ],
        "blind_box_spinner": [
            { "words": [{ "text": "京剧" }, { "text": "演员" }, { "text": "演出" }] },
            { "words": [{ "text": "讨论" }, { "text": "申请" }, { "text": "继续" }] },
            { "words": [{ "text": "大概" }, { "text": "也许" }, { "text": "大约" }] },
            { "words": [{ "text": "互联网" }, { "text": "普遍" }, { "text": "生活习惯" }] }
        ]
    },

    // 3. 语法逻辑多关卡
    "module_3_grammar": {
        "grammar_points": [
            {
                "grammar_point_name": "副词：大概",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["老张", "这个人", "一直", "很准时，", "今天", "还没来，", "大概", "是", "有什么", "事情。"], "correct_answer": "老张这个人一直很准时，今天还没来，大概是有什么事情。", "en_hint": "Lao Zhang is always punctual; he hasn't arrived today, probably because something came up." },
                        { "chunks": ["大概", "有", "三分之二", "的", "人", "反对", "这样做。"], "correct_answer": "大概有三分之二的人反对这样做。", "en_hint": "Probably two-thirds of the people oppose doing this." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1542831371-29b0f74f9455?w=400", // A person thinking, unsure
                            "hint": "用“大概”描述对未来的不确定。",
                            "en_hint": "Use '大概' to describe uncertainty about the future.",
                            "keywords": ["大概", "会", "成功"],
                            "reference_answer": "努力了这么久，大概会成功吧。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你和朋友约好见面，但朋友迟到了。你给朋友打电话时，如何用“大概”猜测他迟到的原因？",
                            "en_scenario": "Your friend is late. How would you use '大概' to guess the reason?",
                            "reference": "你大概是路上堵车了吧？"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "介词：由",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["按照", "规定，", "这", "件", "事情", "应该", "由", "王大夫", "负责。"], "correct_answer": "按照规定，这件事情应该由王大夫负责。", "en_hint": "According to regulations, Dr. Wang should be responsible for this matter." },
                        { "chunks": ["这次", "活动", "继续", "由", "你们", "负责，", "相信", "也", "一定会", "很成功。"], "correct_answer": "这次活动继续由你们负责，相信也一定会很成功。", "en_hint": "You will continue to be responsible for this event, and I believe it will be successful." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=400", // A person leading a meeting or team
                            "hint": "用“由”说明团队中的责任分配。",
                            "en_hint": "Use '由' to describe responsibility assignment in a team.",
                            "keywords": ["由", "小李", "安排"],
                            "reference_answer": "这次会议的具体流程由小李来安排。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你们班要组织一次春游，请你告诉同学这次春游活动的负责人是谁，并说明具体由谁来定目的地。",
                            "en_scenario": "Your class is organizing a spring outing. State who is in charge and who decides the destination using '由'.",
                            "reference": "这次春游活动由班长负责，具体去哪儿由大家投票决定。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "介词：随着",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["随着", "人们", "对", "茶", "的", "认识", "的", "加深，", "慢慢", "开始", "把它", "当作", "饮料。"], "correct_answer": "随着人们对茶的认识的加深，慢慢开始把它当作饮料。", "en_hint": "As people's understanding of tea deepened, they gradually began to treat it as a beverage." },
                        { "chunks": ["随着", "年龄", "的", "增加，", "她", "越来越", "成熟", "了。"], "correct_answer": "随着年龄的增加，她越来越成熟了。", "en_hint": "As she gets older, she becomes more mature." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-154203710485-daeb9a762957?w=400", // Cityscape, growth
                            "hint": "用“随着”描述城市的发展变化。",
                            "en_hint": "Use '随着' to describe urban development and changes.",
                            "keywords": ["随着", "城市", "发展"],
                            "reference_answer": "随着城市经济的快速发展，人们的生活水平也越来越高了。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "请用“随着”描述互联网对人们生活带来的变化。",
                            "en_scenario": "Use '随着' to describe changes Internet brought to people's lives.",
                            "reference": "随着互联网的普及，人们获取信息的方式也变得更加便捷。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "动词：进行",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["有人", "在", "互联网", "上", "专门", "进行", "过", "调查。"], "correct_answer": "有人在互联网上专门进行过调查。", "en_hint": "Someone conducted a specialized survey on the internet." },
                        { "chunks": ["会议", "还在", "进行", "中，", "请", "安静。"], "correct_answer": "会议还在进行中，请安静。", "en_hint": "The meeting is still in progress, please be quiet." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1549923746-c56434447473?w=400", // A discussion in progress
                            "hint": "用“进行”描述一个正在进行的讨论。",
                            "en_hint": "Use '进行' to describe an ongoing discussion.",
                            "keywords": ["正在", "进行", "讨论"],
                            "reference_answer": "大家正在对新项目进行激烈的讨论。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "你的团队计划明天进行一次重要的活动。请用“进行”描述你们正在为此做的准备工作。",
                            "en_scenario": "Your team plans an important event tomorrow. Describe the preparations using '进行'.",
                            "reference": "我们正在对明天的活动进行最后的准备工作。"
                        }
                    ]
                }
            }
        ],
        "synonym_distinction": [
            { "sentence": "老张今天到现在还没来，____是有什么事情。", "options": ["大概", "也许"], "answer": "大概", "explanation": "<strong>大概:</strong> 表示可能性较大，且可以用于对数量的估计。<br><strong>也许:</strong> 表示可能性较小，用于不确定的未来计划或情况。" },
            { "sentence": "我原来想学习法律，____以后我会成为一名记者。", "options": ["大概", "也许"], "answer": "也许", "explanation": "<strong>也许:</strong> 可表示说话人对自己未来的打算不确定。<br><strong>大概:</strong> 无此用法。" },
            { "sentence": "这次电影艺术节____会在北京举行。", "options": ["大概", "也许"], "answer": "也许", "explanation": "两者都可表示对未来情况的推测，但“大概”可能性更大更确定，“也许”相对不确定。" },
            { "sentence": "必须有一个____的想法。", "options": ["大概", "也许"], "answer": "大概", "explanation": "<strong>大概:</strong> 可作形容词，表示不十分精确或详尽。<br><strong>也许:</strong> 无此用法。" }
        ]
    },

    // 4. 篇章阅读 (语段排序)
    "module_4_text": {
        "level_1_sorting": [
            {
                "id": 1,
                "shuffled_items": [
                    { "tag": "A", "content": "他8岁就开始上台演出，到现在大概唱了60多年了。" },
                    { "tag": "B", "content": "小夏的爷爷对京剧有着很深厚的感情。" },
                    { "tag": "C", "content": "他对这门艺术的喜爱从来没有改变过。" }
                ],
                "correct_order": ["B", "A", "C"],
                "explanation": "先提出总的特点（感情深厚），然后用具体事例（演出时长）支持，最后总结（喜爱未变）。"
            },
            {
                "id": 2,
                "shuffled_items": [
                    { "tag": "A", "content": "最早的时候，茶只是被当作一种药，而不是饮料。" },
                    { "tag": "B", "content": "随着人们对茶的认识的加深，慢慢开始把它当作解渴的饮料，这才慢慢有了中国的茶文化。" },
                    { "tag": "C", "content": "茶在中国有几千年的历史，是中国最常见的饮料。" }
                ],
                "correct_order": ["C", "A", "B"],
                "explanation": "先总述茶的历史和常见性，再说明最初的用途，最后用“随着”过渡到茶文化的发展。"
            }
        ]
    },

    // 5. 跟读练习
    "module_4_repetition": {
        "sentences": [
            "你爷爷一定对京剧有着很深厚的感情。",
            "我常常跟着电视学唱京剧，然后一遍一遍地练习。",
            "世界上没有完全相同的叶子，同样地，世界上也没有完全一样的人。",
            "这次活动继续由你负责，相信也一定会很成功。",
            "有人在互联网上专门进行过调查，结果发现每六个中国人中就有一个使用筷子的方法是错误的。"
        ]
    },

    // 6. 动态词云
    "module_5_wordcloud": {
        "title": "💡 谈谈你对中国传统文化（如京剧、茶、筷子等）的看法或感受。",
        "hint": "请扫码发送1-2个词描述你的感受（如：有趣、复杂、普遍、喜爱...）"
    },

    // 7. 极限挑战
    "module_6_challenge": {
        "challenge_sets": [
            { "id": 1, "keywords": ["大概", "演出", "观众"], "framework": "今天晚上有**京剧演出**，**大概**会有很多**观众**前来观看。", "translation": "There's a Beijing opera performance tonight, and probably many audience members will come to watch." },
            { "id": 2, "keywords": ["由", "继续", "讨论"], "framework": "这次的项目**由**小王**继续**负责，大家可以跟他**讨论**详细计划。", "translation": "Xiao Wang will continue to be in charge of this project, everyone can discuss the detailed plan with him." },
            { "id": 3, "keywords": ["随着", "普遍", "生活习惯"], "framework": "**随着**互联网的**普遍**应用，网上购物已经成为人们的**生活习惯**。", "translation": "With the widespread application of the internet, online shopping has become a common lifestyle habit for people." }
        ]
    },

    // 8. 找茬大师（文字辨错）
    "module_7_find_error": {
        "questions": [
            { "sentence": "他今天到现在还没来，也许是有什么事情。", "error": "也许", "correct": "大概", "explanation": "“也许”表示可能性较小或不确定，而“大概”表示可能性较大，更适合于猜测已发生的迟到原因。" },
            { "sentence": "这件事情由王大夫负责。", "error": "", "correct": "（此句语法正确）", "explanation": "此句语法正确，体现了“由+人+负责”的结构。" },
            { "sentence": "随着人们生活水平的提高，越来越多的人喜欢出国旅游。", "error": "", "correct": "（此句语法正确）", "explanation": "此句语法正确，使用了“随着”表示伴随关系。" }
        ]
    },

    // 9. 终极对决 Jeopardy (诸神之战)
    "module_8_jeopardy": {
        "categories": ["词语应用", "课文理解", "语法造句"],
        "teamNames": { "wei": "魏国", "shu": "蜀国", "wu": "吴国" },
        "teamColors": { "wei": "#ef4444", "shu": "#10b981", "wu": "#3b82f6" },
        "questions": {
            "q_0_10": { "question": "请填空：这部电影太精彩了，____的演员也很专业。", "question_en": "Fill in the blank: This movie is wonderful, and the ____ actors are also very professional.", "answer": "演出" },
            "q_0_20": { "question": "请填空：他从小就对音乐感兴趣，所以有一定的音乐____。", "question_en": "Fill in the blank: He has been interested in music since childhood, so he has a certain music ____.", "answer": "基础" },
            "q_0_30": { "question": "请填空：请问，这次活动具体____谁负责？", "question_en": "Fill in the blank: Excuse me, who is specifically ____ for this event?", "answer": "由" },
            "q_1_10": { "question": "小夏的爷爷对京剧有什么样的感情？", "question_en": "What kind of feelings does Xia Xia's grandfather have for Beijing opera?", "answer": "很深厚的感情" },
            "q_1_20": { "question": "马克为什么能比较容易地学会京剧唱法？", "question_en": "Why was Mark able to learn Beijing opera singing relatively easily?", "answer": "因为他以前学习过音乐，有一些音乐基础，又对京剧感兴趣。" },
            "q_1_30": { "question": "校长同意李老师继续负责中国文化活动的原因是什么？", "question_en": "What was the reason the principal agreed for Teacher Li to continue being responsible for Chinese cultural activities?", "answer": "上次的春游活动办得非常有趣，大家玩儿得很开心，相信这次也会成功。" },
            "q_2_10": { "question": "用“大概”造一个句子。", "question_en": "Make a sentence with '大概'.", "answer": "她今年大概三十岁左右，看起来很年轻。" },
            "q_2_20": { "question": "用“随着”造一个句子。", "question_en": "Make a sentence with '随着'.", "answer": "随着生活水平的提高，人们对健康越来越重视。" },
            "q_2_30": { "question": "用“进行”造一个句子。", "question_en": "Make a sentence with '进行'.", "answer": "这项调查正在进行中，请耐心等待结果。" }
        },
        "extra_pk_questions": [
            { "type": "快问快答", "q": "课文中提到，凉茶是什么做成的饮料？", "q_en": "What is 'liangcha' made of, according to the text?", "a": "中药" },
            { "type": "抢答", "q": "中国人使用筷子大约有多少年历史了？", "q_en": "How many years of history do chopsticks have in China?", "a": "3000多年" }
        ]
    },

    // 10. 词义搭配测验
    "module_9_vocab_practice": [
        { "question": "他从小就对京剧很感兴趣，将来想成为一名京剧____。", "options": ["观众", "演员", "基础", "部分"], "answer": "演员" },
        { "question": "这次的____非常精彩，赢得了全场观众的掌声。", "options": ["演出", "进行", "讨论", "申请"], "answer": "演出" },
        { "question": "我很喜欢看电影，是电影院里的老____。", "options": ["演员", "观众", "基础", "部分"], "answer": "观众" },
        { "question": "他们从小一起长大，感情非常____。", "options": ["深厚", "苦", "正常", "错误"], "answer": "深厚" },
        { "question": "他____比我大两岁，但我们看起来差不多。", "options": ["偶尔", "大概", "稍微", "十分"], "answer": "大概" },
        { "question": "我平时很少上网，____会在网上买一些东西。", "options": ["大概", "稍微", "偶尔", "十分"], "answer": "偶尔" },
        { "question": "听到这个消息，大家都很____。", "options": ["正常", "有趣", "开开心心", "吃惊"], "answer": "吃惊" },
        { "question": "学习任何语言，都要打好____。", "options": ["基础", "部分", "省", "纸袋"], "answer": "基础" },
        { "question": "他喜欢在舞台上____。", "options": ["表演", "进行", "讨论", "申请"], "answer": "表演" },
        { "question": "这次活动____小李负责安排。", "options": ["随着", "由", "大概", "稍微"], "answer": "由" },
        { "question": "我的生活很____，每天都按时上班下班。", "options": ["正常", "有趣", "开心", "苦"], "answer": "正常" },
        { "question": "他____了一所英国大学的硕士研究生。", "options": ["进行", "申请", "讨论", "继续"], "answer": "申请" },
        { "question": "这个故事很____，我读了一遍又一遍。", "options": ["正常", "有趣", "开心", "错误"], "answer": "有趣" },
        { "question": "大家玩儿得都很____，不想回家。", "options": ["正常", "有趣", "开心", "苦"], "answer": "开心" },
        { "question": "电影太好看了，我们决定____看下去。", "options": ["进行", "申请", "继续", "讨论"], "answer": "继续" },
        { "question": "我们开会____了一下周末的活动。", "options": ["进行", "申请", "继续", "讨论"], "answer": "讨论" },
        { "question": "我们班____有二十多个学生。", "options": ["大概", "大约", "偶尔", "稍微"], "answer": "大约" },
        { "question": "学校____的菜很好吃，价格也不贵。", "options": ["餐厅", "省", "纸袋", "互联网"], "answer": "餐厅" },
        { "question": "购物时，请自备购物袋，或者购买我们的____。", "options": ["纸袋", "互联网", "省", "餐厅"], "answer": "纸袋" },
        { "question": "现在，人们的生活越来越离不开____了。", "options": ["纸袋", "互联网", "省", "餐厅"], "answer": "互联网" },
        { "question": "你做的这道题答案是____的，请再检查一下。", "options": ["正常", "有趣", "开心", "错误"], "answer": "错误" },
        { "question": "会议正在____中，请稍等。", "options": ["表演", "进行", "讨论", "申请"], "answer": "进行" },
        { "question": "____经济的发展，人们的生活水平也越来越高。", "options": ["随着", "由", "大概", "稍微"], "answer": "随着" },
        { "question": "这个地方的风景____漂亮。", "options": ["大概", "偶尔", "稍微", "十分"], "answer": "十分" },
        { "question": "手机支付现在在中国很____。", "options": ["正常", "普遍", "错误", "厚"], "answer": "普遍" },
        { "question": "这本书我已经看完了，但是只记得____内容。", "options": ["基础", "部分", "省", "纸袋"], "answer": "部分" },
        { "question": "感冒了，头____有点儿疼。", "options": ["大概", "偶尔", "稍微", "十分"], "answer": "稍微" },
        { "question": "中药的味道____，但是对身体好。", "options": ["厚", "苦", "正常", "错误"], "answer": "苦" },
        { "question": "他是广东人，特别喜欢喝凉茶。", "options": ["省", "部分", "基础", "纸袋"], "answer": "省" }
    ],

    // 11. 课文篇章理解
    "module_10_comprehension": [
        {
            "sectionTitle": "课文一：小夏爷爷的京剧情缘",
            "textContext": "小雨：小夏，你爷爷京剧唱得真专业，我还以为他是京剧演员呢。\n小夏：对啊，他本来就是京剧演员，年轻时在我们那儿很有名，深受观众们的喜爱。\n小雨：你爷爷一定对京剧有着很深厚的感情。\n小夏：是啊，他8岁就开始上台演出，到现在大概唱了60多年了，他对这门艺术的喜爱从来没有改变过。\n小雨：这么说你喜欢听京剧也是受了你爷爷的影响？\n小夏：我小时候经常去看他的演出。平时他还给我讲很多京剧里的历史故事，让我学到了很多知识。",
            "questions": [
                { "question": "小夏的爷爷是什么职业？", "options": ["老师", "医生", "京剧演员", "观众"], "answer": "京剧演员" },
                { "question": "小夏喜欢听京剧的原因是什么？", "options": ["他自己喜欢", "他妈妈让他学", "受爷爷的影响", "老师要求他听"], "answer": "受爷爷的影响" }
            ]
        },
        {
            "sectionTitle": "课文二：马克与京剧",
            "textContext": "小雨：真没想到你一个来自美国的外国留学生，能把京剧唱得这么好。\n马克：我常常跟着电视学唱京剧，然后一遍一遍地练习，偶尔跟中国人一起唱上几句。\n小雨：难道你从来没有接受过京剧方面的专门教育吗？\n马克：别吃惊，因为我以前学习过音乐，有一些音乐基础，又对京剧这种表演艺术非常感兴趣，所以能比较容易地学会它的唱法。\n小雨：你真厉害！竟然连很多中国人都听不懂的京剧也能学会。我还是比较喜欢听流行音乐。\n马克：那是你不了解京剧的唱法。在音乐方面，京剧给了我很多新的想法。我还把京剧的一些特点增加到了自己的音乐中，达到了很好的效果。",
            "questions": [
                { "question": "马克是如何学习京剧的？", "options": ["去学校学习", "跟着电视自学和练习", "请老师一对一辅导", "去剧院看演出"], "answer": "跟着电视自学和练习" },
                { "question": "马克能容易学会京剧唱法的原因有哪些？", "options": ["他很聪明", "他有音乐基础并且对京剧感兴趣", "他有很多中国朋友", "他每天都去剧院"], "answer": "他有音乐基础并且对京剧感兴趣" }
            ]
        },
        {
            "sectionTitle": "课文三：李老师申请文化节",
            "textContext": "李老师：校长，因为外国留学生不了解中国文化，有时候会影响他们和中国人之间的正常交流，甚至还可能引起误会，带来麻烦，所以我们想申请举办一次中国传统文化节活动。\n校长：你们的想法很好，举办文化节活动，一方面能让各国学生更好地了解中国，另一方面也能为学生们提供互相交流和学习的机会。\n李老师：谢谢您的支持！\n校长：上次的春游活动你们办得非常有趣，大家都玩儿得很开心，这次活动继续由你负责，相信也一定会很成功。\n李老师：我们回去就开会讨论，星期五之前把详细的计划书发给您。\n校长：好的，准备过程中有什么问题，你们可以直接来找我。",
            "questions": [
                { "question": "李老师为什么想申请举办中国传统文化节？", "options": ["为了让学生有更多假期", "为了让学生更好地了解中国文化", "为了给学校赚钱", "为了提高老师的知名度"], "answer": "为了让学生更好地了解中国文化" },
                { "question": "校长同意李老师继续负责这次活动的原因是什么？", "options": ["因为李老师经验丰富，上次活动办得很成功", "因为没有其他人愿意负责", "因为李老师是校长的亲戚", "因为李老师给了校长礼物"], "answer": "因为李老师经验丰富，上次活动办得很成功" }
            ]
        },
        {
            "sectionTitle": "课文四：筷子文化",
            "textContext": "筷子在中国大约有3000多年的历史了。对外国人来说，使用筷子吃饭并不容易，所以，国外的一些中国餐厅在放筷子的纸袋上会提供使用筷子的详细说明。不过，如果你认为每个中国人都会正确使用筷子，那就错了。有人在互联网上专门进行过调查，结果发现每六个中国人中就有一个使用筷子的方法是错误的。如果你想正确使用筷子，那就好好练习吧。",
            "questions": [
                { "question": "外国人为什么觉得使用筷子不容易？", "options": ["筷子太滑了", "筷子很重", "没有详细说明", "不习惯用筷子吃饭"], "answer": "不习惯用筷子吃饭" },
                { "question": "关于中国人使用筷子的调查结果是什么？", "options": ["所有中国人都会正确使用筷子", "只有少数中国人会使用筷子", "每六个中国人中就有一个使用筷子的方法是错误的", "中国人都不喜欢使用筷子"], "answer": "每六个中国人中就有一个使用筷子的方法是错误的" }
            ]
        },
        {
            "sectionTitle": "课文五：中国茶文化",
            "textContext": "茶在中国有几千年的历史，是中国最常见的饮料。最早的时候，茶只是被当作一种药，而不是饮料。后来，随着人们对茶的认识的加深，慢慢开始把它当作解渴的饮料，这才慢慢有了中国的茶文化。在中国，喝茶是一种十分普遍的生活习惯。对很多中国人来说，喝茶已成为他们生活中不可缺少的一部分。但是有的饮料虽然名字叫“茶”，却并不是真正的茶。比如广东省的人爱喝的“凉茶”，它的味道稍微有点儿苦，其实是一种用中药做成的饮料。",
            "questions": [
                { "question": "茶最初被用来做什么？", "options": ["当作饮料", "当作药", "当作食物", "当作礼物"], "answer": "当作药" },
                { "question": "关于广东人爱喝的“凉茶”，下列说法正确的是？", "options": ["它是一种真正的茶", "它的味道很甜", "它其实是一种用中药做成的饮料", "它的历史只有几十年"], "answer": "它其实是一种用中药做成的饮料" }
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
window.LESSONS_DATA['hsk4-13'] = lessonData;
window.lessonData = lessonData; // For direct access during development

// Node.js export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lessonData;
}