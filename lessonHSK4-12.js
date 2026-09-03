/*
================================================================
== 课程数据文件 (Lesson Data File)
== 第十二课: 用心发现世界
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
    "lesson": "HSK 4 - 第十二课《用心发现世界》",
    "students": [ "列夏", "丽莎", "明溪", "星悦", "德昊", "任华", "梦航", "基里尔", "萨~沙~", "萨沙", "达铭", "安德烈", "纪嘉", "高斯佳", "瓦列", "Maiia" ],

    "pinyin_map": {
        "规定": "guīdìng", "死": "sǐ", "可惜": "kěxī", "全部": "quánbù", "也许": "yěxǔ",
        "商量": "shāngliang", "并且": "bìngqiě", "盐": "yán", "勺子": "sháozi", "保护": "bǎohù",
        "作用": "zuòyòng", "无法": "wúfǎ", "节": "jié", "详细": "xiángxì", "解释": "jiěshì",
        "对于": "duìyú", "叶子": "yèzi", "教育": "jiàoyù", "使用": "shǐyòng", "语言": "yǔyán",
        "直接": "zhíjiē", "引起": "yǐnqǐ", "误会": "wùhuì", "友好": "yǒuhǎo", "事半功倍": "shì bàn gōng bèi",
        "节约": "jiéyuē", "力气": "lìqi", "相反": "xiāngfǎn", "任务": "rènwu", "意见": "yìjiàn",
        "仔细": "zǐxì", "达到": "dádào"
    },

    "translation_dict": {
        "规定": "правило, регулирование; постановлять", "死": "негибкий, жесткий; умирать", "可惜": "к сожалению, жалкий", "全部": "все, весь, целиком", "也许": "возможно, может быть",
        "商量": "советоваться, обсуждать", "并且": "к тому же, а также", "盐": "соль", "勺子": "ложка", "保护": "защищать, охранять",
        "作用": "роль, функция, эффект", "无法": "не иметь возможности, быть не в состоянии", "节": "счетное слово для уроков/секций", "详细": "подробный, детальный", "解释": "объяснять, разъяснять",
        "对于": "что касается, по отношению к", "叶子": "лист (растения)", "教育": "образовывать; образование", "使用": "использовать, применять", "语言": "язык, речь",
        "直接": "прямой, непосредственно", "引起": "вызывать, приводить к", "误会": "непонимание, заблуждение", "友好": "дружелюбный", "事半功倍": "вдвое больше результата с половиной усилий",
        "节约": "экономить, беречь", "力气": "физическая сила, усилия", "相反": "наоборот, противоположный", "任务": "задача, задание", "意见": "мнение, замечание",
        "仔细": "тщательный, внимательный", "达到": "достигать, доходить до"
    },

    "collocations": [
        { "left": "按照", "right": "规定" },
        { "left": "跟人", "right": "商量" },
        { "left": "起到了", "right": "保护作用" },
        { "left": "详细地", "right": "解释" },
        { "left": "使用", "right": "语言" },
        { "left": "引起", "right": "误会" },
        { "left": "事半功倍的", "right": "效果" },
        { "left": "节约", "right": "时间" },
        { "left": "浪费", "right": "力气" },
        { "left": "完成", "right": "任务" },
        { "left": "听取", "right": "意见" },
        { "left": "达到", "right": "目标" }
    ],

    // 1. 词汇基础模块
    "module_1_vocab": {
        "pinyin_match": [
            ["规定", "死", "可惜", "全部", "也许", "商量"],
            ["并且", "盐", "勺子", "保护", "作用", "无法"],
            ["详细", "解释", "对于", "叶子", "教育", "使用"],
            ["语言", "直接", "引起", "误会", "友好", "节约"],
            ["力气", "相反", "任务", "意见", "仔细", "达到"]
        ],
        "char_match": [
            ["规定", "死活", "可惜", "全部", "也许", "商量"],
            ["并且", "加盐", "勺子", "保护", "作用", "无法"],
            ["详细", "解释", "对于", "树叶", "教育", "使用"],
            ["语言", "直接", "引起", "误会", "友好", "节约"],
            ["力气", "相反", "任务", "意见", "仔细", "达到"]
        ],
        "guess_words": [
            "规定", "死", "可惜", "全部", "也许", "商量", "并且", "盐", "勺子", "保护",
            "作用", "无法", "详细", "解释", "对于", "叶子", "教育", "使用", "语言", "直接",
            "引起", "误会", "友好", "事半功倍", "节约", "力气", "相反", "任务", "意见", "仔细", "达到"
        ]
    },

    // 2. 词汇操练
    "module_2_vocab_drill": {
        "word_bomb": [
            { "word": "盐", "img_url": "https://images.unsplash.com/photo-1518110165401-447a1bc7e4d8?w=400", "en_hint": "salt" },
            { "word": "勺子", "img_url": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400", "en_hint": "spoon" },
            { "word": "叶子", "img_url": "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400", "en_hint": "leaf" },
            { "word": "规定", "img_url": "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=400", "en_hint": "rule / regulation" },
            { "word": "误会", "img_url": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400", "en_hint": "misunderstanding" },
            { "word": "节约", "img_url": "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=400", "en_hint": "save / economize" },
            { "word": "任务", "img_url": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400", "en_hint": "task / mission" },
            { "word": "仔细", "img_url": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400", "en_hint": "careful / meticulous" }
        ],
        "guess_words": [
            { "target_word": "可惜" }, { "target_word": "商量" }, { "target_word": "保护" },
            { "target_word": "无法" }, { "target_word": "解释" }, { "target_word": "教育" },
            { "target_word": "直接" }, { "target_word": "相反" }, { "target_word": "达到" }
        ],
        "blind_box_spinner": [
            { "words": [{ "text": "规定" }, { "text": "改变" }, { "text": "态度" }] },
            { "words": [{ "text": "商量" }, { "text": "及时" }, { "text": "解决" }] },
            { "words": [{ "text": "保护" }, { "text": "作用" }, { "text": "知识" }] },
            { "words": [{ "text": "节约" }, { "text": "事半功倍" }, { "text": "效果" }] }
        ]
    },

    // 3. 语法逻辑多关卡
    "module_3_grammar": {
        "grammar_points": [
            {
                "grammar_point_name": "连词：并且",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["他", "做事", "很认真，", "并且", "有", "丰富的", "经验。"], "correct_answer": "他做事很认真，并且有丰富的经验。", "en_hint": "He is very conscientious in work, and has rich experience." },
                        { "chunks": ["希望", "能", "及时", "发现问题，", "并且", "准确地", "找到", "解决方法。"], "correct_answer": "希望能及时发现问题，并且准确地找到解决方法。", "en_hint": "Hope to spot problems in time and accurately find solutions." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400",
                            "hint": "用“并且”描述该员工的工作表现。",
                            "en_hint": "Use '并且' to describe performance.",
                            "keywords": ["完成了", "并且", "检查"],
                            "reference_answer": "他按时完成了工作任务，并且认真检查了一遍。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "请介绍你的一个好朋友，用“并且”说明他/她的两个优秀品质或技能。",
                            "en_scenario": "Introduce a good friend using '并且' to combine two positive qualities.",
                            "reference": "他汉语说得非常流利，并且还会说法语。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "句型：再……也……",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["事情", "已经发生了，", "你", "再生气", "也", "无法", "改变。"], "correct_answer": "事情已经发生了，你再生气也无法改变。", "en_hint": "The thing has already happened, no matter how angry you are, it can't be changed." },
                        { "chunks": ["用", "盐水", "洗", "新衣服，", "穿得", "再久", "也", "不容易掉颜色。"], "correct_answer": "用盐水洗新衣服，穿得再久也不容易掉颜色。", "en_hint": "Washing new clothes in salt water prevents color fading no matter how long they are worn." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400",
                            "hint": "用“再……也……”描述对学习或目标的坚持。",
                            "en_hint": "Use '再...也...' to describe perseverance.",
                            "keywords": ["任务", "再难", "也"],
                            "reference_answer": "学习任务再难，我们也要坚持完成。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "朋友觉得工作太累想放弃，请你用“再……也……”劝说他坚持到底。",
                            "en_scenario": "Encourage a friend not to give up using '再...也...'.",
                            "reference": "工作再累也要坚持下去，只有这样才能达到你的目标。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "介词：对于",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["对于", "这件事，", "我", "跟", "大家", "的", "看法", "不同。"], "correct_answer": "对于这件事，我跟大家的看法不同。", "en_hint": "Regarding this matter, my view is different from everyone else's." },
                        { "chunks": ["对于", "老师", "来说，", "因材施教", "是", "最重要的。"], "correct_answer": "对于老师来说，因材施教是最重要的。", "en_hint": "For teachers, teaching in accordance with students' aptitudes is the most important." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400",
                            "hint": "用“对于……来说”说明学习汉语的心得。",
                            "en_hint": "Use '对于...来说' to express an opinion.",
                            "keywords": ["对于", "学生", "困难"],
                            "reference_answer": "对于刚接触汉语的学生来说，记生词确实有点儿困难。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "请你用“对于……来说”谈谈健康/时间对个人的重要性。",
                            "en_scenario": "Express the importance of health/time using '对于...来说'.",
                            "reference": "对于每个人来说，保持健康都是最重要的事情。"
                        }
                    ]
                }
            },
            {
                "grammar_point_name": "连词/形容词：相反",
                "levels": {
                    "level_1_drag_drop": [
                        { "chunks": ["如果", "方法", "不对，", "相反，", "会", "变成", "事倍功半。"], "correct_answer": "如果方法不对，相反，会变成事倍功半。", "en_hint": "If the method is wrong, on the contrary, it will become twice the effort for half the result." },
                        { "chunks": ["妹妹的", "性格", "和", "姐姐", "完全", "相反。"], "correct_answer": "妹妹的性格和姐姐完全相反。", "en_hint": "The younger sister's personality is completely opposite to the elder sister's." }
                    ],
                    "level_2_picture_make_sentence": [
                        {
                            "img_url": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400",
                            "hint": "用“相反”对比两种截然不同的情况或结果。",
                            "en_hint": "Use '相反' to contrast two outcomes.",
                            "keywords": ["没有", "相反"],
                            "reference_answer": "事情并没有像大家预想的那样发展，相反，遇到了更多困难。"
                        }
                    ],
                    "level_3_scenario": [
                        {
                            "scenario": "有人说“只要花时间多就能学好”，请用“相反”反驳并说明方法的重要性。",
                            "en_scenario": "Refute a statement using '相反' to emphasize proper methodology.",
                            "reference": "光花时间不注意方法并不能学好；相反，可能还会浪费力气。"
                        }
                    ]
                }
            }
        ],
        "synonym_distinction": [
            { "sentence": "____这次调查计划，经理说有很多不清楚的地方。", "options": [ "关于", "对于" ], "answer": "关于", "explanation": "<strong>关于:</strong> 侧重指出范围，介绍所关系到的事物；且只可置于主语前。" },
            { "sentence": "____这件事，大家都有不同的看法。", "options": [ "对于/关于", "只允许用关于" ], "answer": "对于/关于", "explanation": "<strong>对于 / 关于:</strong> 放在句首引入对象或主题时，两者均可使用。" },
            { "sentence": "《____中国经济的几个问题》是一本非常值得一读的书。", "options": [ "关于", "对于" ], "answer": "关于", "explanation": "<strong>关于:</strong> “关于……”可以出现在书名或文章标题中，而“对于”无此用法。" },
            { "sentence": "他____每个需要帮助的人都会热情、耐心地提供帮助。", "options": [ "对于", "关于" ], "answer": "对于", "explanation": "<strong>对于:</strong> 可以放在主语后面（“他对于……”），而“关于”不能放在主语后。" }
        ]
    },

    // 4. 篇章阅读 (语段排序)
    "module_4_text": {
        "level_1_sorting": [
            {
                "id": 1,
                "shuffled_items": [
                    { "tag": "A", "content": "做事情都应该注意方法，学习尤其是这样。" },
                    { "tag": "B", "content": "使用正确的方法，我们做起事来能“事半功倍”；" },
                    { "tag": "C", "content": "相反，如果方法不对，可能花五倍的时间都不能完成任务。" }
                ],
                "correct_order": ["A", "B", "C"],
                "explanation": "先引出观点（注意方法），再从正反两方面（正确方法 vs 不对的方法）用“相反”进行对比。"
            },
            {
                "id": 2,
                "shuffled_items": [
                    { "tag": "A", "content": "有的人心里怎么想嘴上就怎么说，直接指责别人的缺点，容易引起误会；" },
                    { "tag": "B", "content": "人人都会使用语言，但是怎么用语言把话说好却是一门艺术。" },
                    { "tag": "C", "content": "而有的人会通过别的方法来提醒，这样的人会让人觉得更友好。" }
                ],
                "correct_order": ["B", "A", "C"],
                "explanation": "先提出总观点“说话是一门艺术”，再说明直接指出缺点的后果，最后说明间接提醒的好处。"
            }
        ]
    },

    // 5. 跟读练习
    "module_4_repetition": {
        "sentences": [
            "有句话叫“规定和经验是死的，人是活的”。",
            "遇到不能解决的问题时，我们应该试着走走以前从来没走过的路。",
            "用盐水来洗新衣服，这样穿得再久、洗的次数再多，衣服也不容易掉颜色。",
            "世界上没有完全相同的叶子，同样地，世界上也没有完全一样的人。",
            "我们应该在听取别人意见的同时，仔细考虑一下，再根据不同的情况选择不同的方法。"
        ]
    },

    // 6. 动态词云
    "module_5_wordcloud": {
        "title": "💡 谈谈你在生活或学习中发现的“事半功倍”的小妙招",
        "hint": "请扫码发送1-2个词描述你的妙招（如：用盐水洗衣服、做计划、听取意见...）"
    },

    // 7. 极限挑战
    "module_6_challenge": {
        "challenge_sets": [
            { "id": 1, "keywords": ["规定", "经验", "也许"], "framework": "**规定**和**经验**是死的，换个角度看问题，**也许**就能找到解决办法。", "translation": "Rules and experience are rigid; if you look at the problem from another angle, maybe you can find a solution." },
            { "id": 2, "keywords": ["保护", "作用", "无法"], "framework": "生活中很多小东西都有**保护**环境的**作用**，这是课本上**无法**学到的知识。", "translation": "Many small things in life have the function of protecting the environment, which is knowledge that cannot be learned from textbooks." },
            { "id": 3, "keywords": ["节约", "相反", "仔细"], "framework": "正确的方法能**节约**时间；**相反**，不**仔细**思考盲目去做只会浪费力气。", "translation": "Correct methods can save time; on the contrary, doing things blindly without careful thinking will only waste energy." }
        ]
    },

    // 8. 找茬大师（文字辨错）
    "module_7_find_error": {
        "questions": [
            { "sentence": "对于这次调查计划，经理说有很多不清楚的地方。", "error": "对于这次调查计划", "correct": "关于这次调查计划", "explanation": "引入讲话或调查涉及的范围/主题，应用介词“关于”。" },
            { "sentence": "我们再忙，也要按时吃饭。", "error": "我们再忙", "correct": "我们再忙，也（正确语法结构，此项为防错示范：再忙也...表示让步假设）", "explanation": "此句语法正确。注意：“再+Adj+也”中“也”不可遗漏。" },
            { "sentence": "他做事情很认真，但是有丰富的经验，让大家非常信任他。", "error": "但是有丰富的经验", "correct": "并且有丰富的经验", "explanation": "前后是递进/并列关系而非转折关系，应将“但是”改为“并且”。" }
        ]
    },

    // 9. 终极对决 Jeopardy (诸神之战)
    "module_8_jeopardy": {
        "categories": ["词语应用", "课文理解", "语法造句"],
        "teamNames": { "wei": "魏国", "shu": "蜀国", "wu": "吴国" },
        "teamColors": { "wei": "#ef4444", "shu": "#10b981", "wu": "#3b82f6" },
        "questions": {
            "q_0_10": { "question": "请填空：做事情要注意方法，才能达到____的效果。", "question_en": "Achieve twice the result with half the effort.", "answer": "事半功倍" },
            "q_0_20": { "question": "请填空：遇到不认识的字，应该____字典。", "question_en": "Consult/use the dictionary.", "answer": "使用 / 查" },
            "q_0_30": { "question": "请填空：解决问题前，我们要先____听听大家的意见。", "question_en": "Listen carefully to opinions.", "answer": "仔细" },
            "q_1_10": { "question": "高老师建议用什么方法解决新衣服掉颜色的问题？", "question_en": "What method prevents new clothes from fading?", "answer": "在洗衣服的水里加一勺盐" },
            "q_1_20": { "question": "“规定和经验是死的，人是活的”这句话是什么意思？", "question_en": "What does this saying mean?", "answer": "遇到困难时不能死板照搬规定，要改变态度和想法灵活解决" },
            "q_1_30": { "question": "孔子“因材施教”的故事告诉我们什么道理？", "question_en": "What lesson does Confucius's story tell us?", "answer": "教育要根据学生的特点和能力选择不同的方法" },
            "q_2_10": { "question": "用“并且”造一个句子。", "question_en": "Make a sentence with '并且'.", "answer": "他完成作业速度很快，并且保证了很高的准确率。" },
            "q_2_20": { "question": "用“再……也……”造一个句子。", "question_en": "Make a sentence with '再...也...'.", "answer": "天气再冷，他也坚持每天早起锻炼。" },
            "q_2_30": { "question": "用“相反”造一个句子。", "question_en": "Make a sentence with '相反'.", "answer": "合适的方法能节约时间；相反，方法不对只会浪费力气。" }
        },
        "extra_pk_questions": [
            { "type": "快问快答", "q": "“事半功倍”的反义词是什么？", "q_en": "Antonym of '事半功倍'?", "a": "事倍功半" },
            { "type": "抢答", "q": "“世界上没有完全相同的叶子”出自课文第几段/谁的口中？", "q_en": "Who said 'there are no two identical leaves'?", "a": "王教授（课文3）" }
        ]
    },

    // 10. 词义搭配测验
    "module_9_vocab_practice": [
        { "question": "这是公司的____，大家都要按照这个做。", "options": [ "力气", "勺子","规定", "叶子"], "answer": "规定" },
        { "question": "那场比赛太精彩了，你没去真是太____了。", "options": [ "详细", "友好","可惜", "直接"], "answer": "可惜" },
        { "question": "他把____时间都用在了教育上。", "options": ["全部", "相反", "详细", "死"], "answer": "全部" },
        { "question": "这件事你最好先跟家人____一下再做决定。", "options": ["解释", "保护", "商量", "引起"], "answer": "商量" },
        { "question": "他及时发现了问题，____找到了解决办法。", "options": ["并且", "对于", "相反", "无法"], "answer": "并且" },
        { "question": "做菜的时候少放一点儿____，对身体更好。", "options": ["盐", "勺子", "叶子", "意见"], "answer": "盐" },
        { "question": "喝汤的时候需要用____。", "options": ["勺子", "盐", "叶子", "规定"], "answer": "勺子" },
        { "question": "我们要共同____环境，爱护地球。", "options": ["保护", "引起", "节约", "达到"], "answer": "保护" },
        { "question": "这种药对于治疗头疼有很好的____。", "options": ["作用", "任务", "意见", "语言"], "answer": "作用" },
        { "question": "突然的大雨让我们____按计划出门旅行。", "options": ["无法", "也许", "仔细", "直接"], "answer": "无法" },
        { "question": "请您____谈谈对这个计划的看法。", "options": ["详细", "直接", "友好", "相反"], "answer": "详细" },
        { "question": "老师耐心地向同学们____这个复杂的语法。", "options": ["解释", "引起", "达到", "商量"], "answer": "解释" },
        { "question": "____这个问题，每个人都有不同的见解。", "options": ["对于", "并且", "相反", "无法"], "answer": "对于" },
        { "question": "秋天到了，树上的____慢慢变黄了。", "options": ["叶子", "勺子", "盐", "任务"], "answer": "叶子" },
        { "question": "家庭和学校在____孩子方面都有重要的责任。", "options": ["教育", "保护", "节约", "引起"], "answer": "教育" },
        { "question": "请注意____文明语言。", "options": ["使用", "达到", "引起", "商量"], "answer": "使用" },
        { "question": "____和文化有着非常重要的关系。", "options": ["语言", "意见", "任务", "作用"], "answer": "语言" },
        { "question": "他有话就会____说出来。", "options": ["直接", "详细", "仔细", "友好"], "answer": "直接" },
        { "question": "他的话____了很大的误会。", "options": ["引起", "保护", "达到", "节约"], "answer": "引起" },
        { "question": "你____我了，我不是那个意思。", "options": ["误会", "任务", "意见", "规定"], "answer": "误会" },
        { "question": "这里的人们对外来游客非常____。", "options": ["友好", "详细", "仔细", "直接"], "answer": "友好" },
        { "question": "学会正确的学习方法，就能收到____的效果。", "options": ["事半功倍", "事倍功半", "无法", "相反"], "answer": "事半功倍" },
        { "question": "离开房间就把灯关了 是____用电的好习惯。", "options": ["节约", "保护", "引起", "达到"], "answer": "节约" },
        { "question": "搬这个箱子需要很大的____。", "options": ["意见", "力气", "任务", "作用"], "answer": "力气" },
        { "question": "结果与我们想的完全____。", "options": [ "详细", "友好", "相反","直接"], "answer": "相反" },
        { "question": "经过努力，我们终于按时完成了这项重要的____。", "options": [ "意见", "规定", "任务","勺子"], "answer": "任务" },
        { "question": "大家对于这个设计方案提出了很多很好的____。", "options": ["意见", "任务", "语言", "作用"], "answer": "意见" },
        { "question": "做事前多____考虑，能减少出错的概率。", "options": [ "直接", "友好", "相反","仔细"], "answer": "仔细" },
        { "question": "经过长期的锻炼，他终于____了减肥目标。", "options": [ "引起","达到", "保护", "节约"], "answer": "达到" }
    ],

    // 11. 课文篇章理解
    "module_10_comprehension": [
        {
            "sectionTitle": "课文一：王经理与马经理谈生意困难",
            "textContext": "王经理：听说这次生意你到现在还没谈成。\n马经理：按我以前的经验，早应该谈成了，这次我也不知道哪儿出了问题。\n王经理：有句话叫“规定和经验是死的，人是活的”。当“规定”和“经验”不能解决问题时，建议你改变一下自己的态度和想法。\n马经理：很多时候，我都习惯根据过去的经验做事，可惜，经验不是全部都是对的。\n王经理：遇到不能解决的问题时，我们应该试着走走以前从来没走过的路，也许这样就能找到解决问题的方法了。\n马经理：好，我再跟同事商量商量，希望能及时发现问题，并且准确地找到解决问题的方法。",
            "questions": [
                { "question": "王经理给马经理提出了什么建议？", "options": ["放弃这次生意", "改变态度和想法，尝试新路径", "完全照搬以前的经验", "严厉惩罚员工"], "answer": "改变态度和想法，尝试新路径" },
                { "question": "马经理认识到了自己以前做事有什么不足？", "options": ["工作不够努力", "过于依赖过去的经验，以为经验全是对的", "没有按时上班", "不愿意跟同事说话"], "answer": "过于依赖过去的经验，以为经验全是对的" }
            ]
        },
        {
            "sectionTitle": "课文二：高老师告诉女儿洗衣服的妙招",
            "textContext": "女儿：妈，您看我刚买的裤子，洗完以后颜色怎么变得这么难看呢？\n高老师：看来是掉颜色了，你洗的时候在水里加点儿盐就不会这样了。\n女儿：放盐？！盐不是用来做饭的吗？难道它还能让衣服不掉颜色？\n高老师：当然。有些衣服第一次洗的时候会掉颜色，其实，有很多方法可以解决这个问题。在水里加勺盐再洗是最简单的方法。用盐水来洗新衣服，这样穿得再久、洗的次数再多，衣服也不容易掉颜色。\n女儿：我第一次听说盐有保护衣服颜色的作用，生活中还真有不少课本上无法学到的知识。\n高老师：实际上，很多问题的答案都可以从生活中找到。但这需要你用眼睛去发现，用心去总结。",
            "questions": [
                { "question": "怎样洗新衣服才不容易掉颜色？", "options": ["用热水洗", "在水里加一勺盐", "多放洗涤剂", "洗完后在太阳下晒"], "answer": "在水里加一勺盐" },
                { "question": "高老师认为怎样才能获得课本上学不到的知识？", "options": ["多去图书馆", "用眼睛去发现，用心去总结生活", "花钱去买答案", "经常请教老师"], "answer": "用眼睛去发现，用心去总结生活" }
            ]
        },
        {
            "sectionTitle": "课文三：高老师学习王教授的教育方法",
            "textContext": "高老师：王教授，今天听完您的这节课，我终于明白为什么您的课那么受学生欢迎了。\n王教授：谢谢！您能详细谈谈对我的课的看法吗？\n高老师：我发现您对学生特别了解，而且总是能用最简单的方法把复杂的问题解释清楚，让每个学生都能听懂，这一点真是值得我们好好学习。\n王教授：哪里哪里，这只是因为我对每个学生的能力水平比较了解。\n高老师：那您认为对于老师来说，什么是最难做到的？\n王教授：世界上没有完全相同的叶子，同样地，世界上也没有完全一样的人。所以，在教育学生时，要根据学生的特点选择不同的方法，我想这应该是最不容易做到的。",
            "questions": [
                { "question": "高老师认为王教授的课为什么受学生欢迎？", "options": ["能用最简单的方法把复杂问题解释清楚", "上课时间很短", "不给学生布置作业", "讲课声音非常大"], "answer": "能用最简单的方法把复杂问题解释清楚" },
                { "question": "王教授认为对于老师来说最难做到的是什么？", "options": ["记住每个学生的名字", "根据学生的特点选择不同的教育方法（因材施教）", "每天准时上课", "写好教案"], "answer": "根据学生的特点选择不同的教育方法（因材施教）" }
            ]
        },
        {
            "sectionTitle": "课文四：说话的艺术与交流沟通",
            "textContext": "人人都会使用语言，但是怎么用语言把话说好却是一门艺术。看一个人怎么说话，往往可以比较准确地判断出他是一个什么样的人。有的人心里怎么想，嘴上就怎么说，即使是别人的缺点，他也会直接说出来，这样的人虽然很诚实，但是可能会引起别人的误会；有的人虽然也看到了别人的缺点，但却不会直接指出来，而是通过别的方法来提醒，让他认识到自己的缺点，这样的人会让人觉得更友好。",
            "questions": [
                { "question": "直接说出别人的缺点可能会带来什么结果？", "options": ["让别人立刻感谢你", "可能引起别人的误会", "让人觉得非常有礼貌", "提高工作效率"], "answer": "可能引起别人的误会" },
                { "question": "课文认为怎样指出别人的缺点会让人觉得更友好？", "options": ["在很多人面前大声说", "通过别的方法来间接提醒", "永远不说别人的缺点", "写信给他的父母"], "answer": "通过别的方法来间接提醒" }
            ]
        },
        {
            "sectionTitle": "课文五：讲究方法，事半功倍",
            "textContext": "无论做什么事情，都要注意方法，学习尤其是这样。使用正确的方法，我们做起事来能“事半功倍”，也就是说，能节约时间，用较少的力气，取得更好的效果。相反，如果方法不对，可能花五倍甚至十倍的时间都不能完成任务，结果变成了“事倍功半”。有一点需要提醒大家，别人的方法也许很有效，但是并不一定适合自己。因此，我们应该在听取别人意见的同时，仔细考虑一下，再根据不同的情况选择不同的方法，这样才能达到最好的效果。",
            "questions": [
                { "question": "“事半功倍”指的是什么？", "options": ["花很多时间取得很小的效果", "节约时间，用较少的力气取得更好的效果", "不花任何力气就成功", "两个人一起合作完成任务"], "answer": "节约时间，用较少的力气取得更好的效果" },
                { "question": "面对别人的成功方法，我们应该采取什么态度？", "options": ["照单全收，完全照搬", "听取意见的同时仔细考虑，选择适合自己的方法", "完全不听别人的意见", "只用自己的方法，绝不改变"], "answer": "听取意见的同时仔细考虑，选择适合自己的方法" }
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

// 统一导出挂载
window.LESSONS_DATA = window.LESSONS_DATA || {};
window.LESSONS_DATA['hsk4-12'] = lessonData;
window.lessonData = lessonData;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = lessonData;
}