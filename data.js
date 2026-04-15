// DUO 3.0 Vocabulary Data - OCR extracted + original sentences
// Sections 1-67 (sentences 1-710)
const DUO_DATA = [
  {
    section: 1,
    title: "Basic Verbs & Adjectives",
    sentences: [
      {
        id: 1,
        en: "We must respect the will of the individual.",
        ja: "個人の意志は尊重しなければいけない。",
        words: [
          { word: "respect", phonetic: "rispékt", pos: "動", meanings: ["...（気持・意見など）を尊重する", "...を尊敬する"], related: ["respectful 形 敬意を示す", "respectable 形 まともな", "respective 形 それぞれの"] },
          { word: "will", phonetic: "wíl", pos: "名", meanings: ["意志", "遺書"], related: ["willpower 名 意志の力"] },
          { word: "individual", phonetic: "indivídʒuəl", pos: "名", meanings: ["個人", "人間"], related: ["individual 形 個人の、個性的な", "individuality 名 個性"] }
        ]
      },
      {
        id: 2,
        en: "Take it easy. I can assure you that everything will turn out fine.",
        ja: "気楽にやれ、くよくよするな。安心していいよ、すべてうまくいくさ。",
        words: [
          { word: "Take it easy", phonetic: "", pos: "定", meanings: ["気楽にやれ、くよくよするな", "別れの挨拶：じゃあね"], related: [] },
          { word: "assure A (that)", phonetic: "əʃúər", pos: "動", meanings: ["A（人）に〜を確約する【保証する】"], related: ["assurance 名 確約、保証"] },
          { word: "turn out (to be)...", phonetic: "", pos: "動", meanings: ["...という結果になる"], related: ["turn out 動 (人々が)集まる「集まる」", "turn ... out 動 消す、追い出す"] }
        ]
      },
      {
        id: 3,
        en: "Let go of your negative outlook on life. Always maintain a positive attitude.",
        ja: "悲観的な人生観を捨て、前向きな態度を常に持ち続けよう。",
        words: [
          { word: "let go of...", phonetic: "", pos: "動", meanings: ["...を放す、...を諦める"], related: ["release, set...free, hold, grab, grasp, catch"] },
          { word: "negative", phonetic: "négətiv", pos: "形", meanings: ["消極的な、悲観的な"], related: ["⇔ positive 前向きな", "affirmative 肯定の"] },
          { word: "outlook", phonetic: "áutlùk", pos: "名", meanings: ["（...に対する）見方【展望】、見通し"], related: ["attitude/perspective", "prospect/expectation"] },
          { word: "maintain", phonetic: "meintéin", pos: "動", meanings: ["（状態を）維持する、保持する"], related: ["maintenance 名 維持、保全"] },
          { word: "positive", phonetic: "pɑ́zətiv", pos: "形", meanings: ["積極的な、前向きな", "確信【自信】のある"], related: ["⇔ negative 消極的な", "⇔ uncertain 確信がない"] },
          { word: "attitude", phonetic: "ǽtitjùːd", pos: "名", meanings: ["（...に対する）態度、姿勢"], related: ["aptitude 才能、適性"] }
        ]
      },
      {
        id: 4,
        en: "You should be fair to everyone regardless of national origin, gender, or creed.",
        ja: "生まれた国、性別、信条に関係なく、誰に対しても公平でなくてはならない。",
        words: [
          { word: "fair", phonetic: "féər", pos: "形", meanings: ["公平な、公正な", "かなりの、かなかなの、よい"], related: ["⇔ unfair/unjust/partial 不公平な", "fairly 副 かなり"] },
          { word: "regardless of...", phonetic: "rigɑ́ːrdlis", pos: "副", meanings: ["にもかかわらず、いかなる...であろうとも"], related: ["regardless 副 何があっても、とにかく"] },
          { word: "national", phonetic: "nǽʃənl", pos: "形", meanings: ["国の、国内の、全国の"], related: ["⇔ international 世界の", "national anthem 名 国歌", "nationalism 名 民族主義"] },
          { word: "origin", phonetic: "ɔ́ridʒin", pos: "名", meanings: ["起源、生まれ"], related: ["original 形 原型、本物の", "originate 動 起こる"] },
          { word: "gender", phonetic: "dʒéndər", pos: "名", meanings: ["性別"], related: ["sex は肉体的性、gender は社会的に規定される性"] },
          { word: "creed", phonetic: "kríːd", pos: "名", meanings: ["信条、信仰"], related: ["religious beliefs/doctrine/dogma"] }
        ]
      },
      {
        id: 5,
        en: "Equality is guaranteed by the Constitution.",
        ja: "平等は憲法で守られている。",
        words: [
          { word: "equality", phonetic: "ikwɑ́ləti", pos: "名", meanings: ["平等"], related: ["⇔ inequality 不平等", "equal 形 等しい", "be equal to... と同等である"] },
          { word: "guarantee", phonetic: "gæ̀rəntíː", pos: "動", meanings: ["...を保証する、...を約束する"], related: ["assure/promise/assurance"] },
          { word: "constitution", phonetic: "kɑ̀nstətjúːʃn", pos: "名", meanings: ["憲法"], related: ["constitutional 形 憲法の", "constitute 動 構成する"] }
        ]
      },
      {
        id: 6,
        en: "He leaned against the pillar and gazed at the Statue of Liberty.",
        ja: "彼は柱に寄り掛かって、自由の女神像をじっと見つめた。",
        words: [
          { word: "lean", phonetic: "líːn", pos: "動", meanings: ["体を傾ける、寄り掛かる（〜 against [on]...）"], related: ["lean on... 動 （人に）頼る", "lean 形 細身の、脂肪の少ない"] },
          { word: "pillar", phonetic: "pílər", pos: "名", meanings: ["柱（column/support）、重要人物"], related: [] },
          { word: "gaze (at...)", phonetic: "géiz", pos: "動", meanings: ["...をじっと見つめる"], related: ["stare (at...) / look steadily (at...)"] },
          { word: "statue", phonetic: "stǽtʃuː", pos: "名", meanings: ["像"], related: ["stature 名 身長", "status 名 地位"] },
          { word: "liberty", phonetic: "líbərti", pos: "名", meanings: ["自由"], related: ["liberal 形 自由主義の", "liberate 動 解放する"] }
        ]
      },
      {
        id: 7,
        en: "A woman passed by me giving off a subtle scent of perfume. It reminded me of my ex-girlfriend.",
        ja: "香水のほのかな香りを漂わせながら、一人の女性が僕の前を通り過ぎた。前の彼女のことを思い出してしまった。",
        words: [
          { word: "pass by (...)", phonetic: "", pos: "動", meanings: ["（...の）そばを通り過ぎる"], related: ["passerby 名 通りすがりの人"] },
          { word: "give off ...", phonetic: "", pos: "動", meanings: ["（におい・光・熱）を発する"], related: ["send ... out"] },
          { word: "subtle", phonetic: "sʌ́tl", pos: "形", meanings: ["かすかな、微妙な、巧妙な"], related: ["faint/delicate/slight"] },
          { word: "scent", phonetic: "sént", pos: "名", meanings: ["匂い、香り"], related: ["smell/fragrance/pleasant smell"] },
          { word: "perfume", phonetic: "pərfjúːm", pos: "名", meanings: ["香水（花などの）香り"], related: ["fragrance/scent/pleasant"] },
          { word: "remind...", phonetic: "rimáind", pos: "動", meanings: ["（人に）思い出させる"], related: ["remind A of B AにBを思い出させる", "reminder 名 催促/呼び戻すもの"] },
          { word: "ex-", phonetic: "éks", pos: "接", meanings: ["前の、もと..."], related: ["ex-wife（前の妻）/ ex-husband（前の夫）"] }
        ]
      },
      {
        id: 8,
        en: "\"Natto\" smells awful but tastes terrific.",
        ja: "納豆は臭いはひどいけれど味は最高。",
        words: [
          { word: "smell (...)", phonetic: "smél", pos: "動", meanings: ["においがする、〜な匂いがする"], related: ["scent/odor/aroma/fragrance", "stink 動 臭い"] },
          { word: "awful", phonetic: "ɔ́ːfl", pos: "形", meanings: ["ひどい", "ものすごい"], related: ["very bad/terrible", "awfully 副 とても、ものすごく"] },
          { word: "taste...", phonetic: "téist", pos: "動", meanings: ["味がする、〜な味がする"], related: ["have a ... taste", "tasty 形 おいしい"] },
          { word: "terrific", phonetic: "təríifik", pos: "形", meanings: ["すばらしい", "量・程度がものすごい"], related: ["very good/great/excellent/tremendous"] }
        ]
      },
      {
        id: 9,
        en: "\"I'm soaked with sweat.\" \"Stand back! You stink. Take a shower.\"",
        ja: "「汗でびしょぬれだよ。」「来ないで！臭いわ。シャワーを浴びて。」",
        words: [
          { word: "soaked", phonetic: "sóukt", pos: "形", meanings: ["びしょぬれの"], related: ["drenched/extremely wet", "soak (...) 動 完全に浸す"] },
          { word: "sweat", phonetic: "swét", pos: "名", meanings: ["汗"], related: ["perspiration", "perspire 動 汗をかく"] },
          { word: "stand back", phonetic: "", pos: "動", meanings: ["後ろに下がる"], related: ["step back/back up", "stand aside 脇に寄る"] },
          { word: "stink", phonetic: "stíŋk", pos: "動", meanings: ["悪臭がする、（ひどく）臭い"], related: ["smell very unpleasant", "odor/unpleasant smell"] },
          { word: "take a shower", phonetic: "", pos: "動", meanings: ["シャワーを浴びる"], related: ["take a bath（風呂に入る）"] }
        ]
      },
      {
        id: 10,
        en: "Bob was so beside himself that he could scarcely tell fact from fiction.",
        ja: "ボブはひどく取り乱していて、現実と虚構の区別がほとんどできなかった。",
        words: [
          { word: "be beside oneself (with...)", phonetic: "", pos: "動", meanings: ["ひどく興奮する、取り乱す"], related: ["be upset/be in a frenzy/be frantic"] },
          { word: "scarcely", phonetic: "skéərsli", pos: "副", meanings: ["ほとんど...ない"], related: ["hardly/almost not", "⇔ plentiful 豊富な", "scarcity 名 不足、欠乏"] },
          { word: "tell A from B", phonetic: "", pos: "動", meanings: ["AとBを区別する"], related: ["know A from B / distinguish A from B"] },
          { word: "fact", phonetic: "fǽkt", pos: "名", meanings: ["（個々の）事実"], related: ["truth/reality", "⇔ fiction 虚構"] },
          { word: "fiction", phonetic: "fíkʃn", pos: "名", meanings: ["作り話、虚構、小説"], related: ["⇔ fact/truth/reality", "novel 小説の作品"] }
        ]
      },
      {
        id: 11,
        en: "His new novel, which combines prose with his gift for poetry, is going to be published.",
        ja: "まもなく出版になる彼の小説は、散文に彼の詩の才能を融合させたものだ。",
        words: [
          { word: "novel", phonetic: "nɑ́vl", pos: "名", meanings: ["長編小説（作品）"], related: ["novel 形 新奇な", "novelist 名 小説家"] },
          { word: "combine", phonetic: "kəmbáin", pos: "動", meanings: ["（異質の物を）融合する、結びつける"], related: ["unite/integrate/merge", "combination 名 結合、組み合わせ"] },
          { word: "prose", phonetic: "próuz", pos: "名", meanings: ["散文"], related: ["⇔ verse 韻文"] },
          { word: "gift", phonetic: "gíft", pos: "名", meanings: ["贈り物", "（天賦の）才能"], related: ["present/talent", "gifted 形 才能がある"] },
          { word: "poetry", phonetic: "póuətri", pos: "名", meanings: ["詩（文学の一分野）"], related: ["poet 名 詩人", "poem 名 一編の詩", "poetic 形 詩的な"] },
          { word: "publish", phonetic: "pʌ́bliʃ", pos: "動", meanings: ["...を出版する、公表する"], related: ["publisher 名 出版社", "publication 名 出版物", "publicity 名 宣伝"] }
        ]
      }
    ]
  },
  {
    section: 2,
    title: "Knowledge & Expression",
    sentences: [
      {
        id: 12,
        en: "An up-to-date edition of the encyclopedia will come out next month.",
        ja: "来月、その百科事典の最新版が出る。",
        words: [
          { word: "up-to-date", phonetic: "ʌ̀ptədéit", pos: "形", meanings: ["（情報などが）最新の"], related: ["latest/current/modern", "⇔ out of date/old-fashioned/obsolete"] },
          { word: "edition", phonetic: "idíʃən", pos: "名", meanings: ["（本などの）版"], related: ["edit 動 編集する", "editor 名 編集者", "editorial 名 社説"] },
          { word: "encyclopedia", phonetic: "ensàikləpíːdiə", pos: "名", meanings: ["百科事典"], related: [] },
          { word: "come out", phonetic: "", pos: "動", meanings: ["（人・物が）出る、現れる", "（新製品が）発売される", "（本が）出版される", "（事実が）明るみに出る"], related: ["appear/be released/be published"] }
        ]
      },
      {
        id: 13,
        en: "Ms. Yamada translated the fascinating fairy tale into plain Japanese.",
        ja: "山田さんがその心ひかれるおとぎ話をやさしい日本語に翻訳した。",
        words: [
          { word: "translate (...)", phonetic: "trænzléit", pos: "動", meanings: ["（...を）（AからBに）翻訳する"], related: ["translation 名 翻訳", "translator 名 翻訳家"] },
          { word: "fascinating", phonetic: "fǽsinèitiŋ", pos: "形", meanings: ["（人を）魅了する、（引き込まれるぐらい）おもしろい"], related: ["attractive/charming/alluring", "fascination 名 魅了"] },
          { word: "fairy", phonetic: "féəri", pos: "名", meanings: ["妖精"], related: ["fairy tale 名 おとぎ話、童話", "Grimm's fairy tales"] },
          { word: "tale", phonetic: "téil", pos: "名", meanings: ["話、物語"], related: ["story", "tail（尾）と同音語"] },
          { word: "plain", phonetic: "pléin", pos: "形", meanings: ["平易な、明白な", "普通の、地味な", "率直な"], related: ["clear/obvious/simple", "plainly 副 明白に"] }
        ]
      },
      {
        id: 14,
        en: "The following passage is quoted from a well-known fable.",
        ja: "以下の一節は有名な寓話からの引用です。",
        words: [
          { word: "following", phonetic: "fɑ́louiŋ", pos: "形", meanings: ["（伝える内容が）以下の...", "（日時が）次の..."], related: ["⇔ preceding/previous 前の", "follow 動 （に）続く"] },
          { word: "passage", phonetic: "pǽsidʒ", pos: "名", meanings: ["（文章などの）一節", "通路、廊下", "（時の）経過"], related: ["hall/hallway/corridor"] },
          { word: "quote", phonetic: "kwóut", pos: "動", meanings: ["（...を）引用する"], related: ["quotation 名 引用文", "cite"] },
          { word: "well-known", phonetic: "wélnóun", pos: "形", meanings: ["有名な"], related: ["noted/famous/celebrated/prominent", "⇔ unknown/obscure 無名の"] },
          { word: "fable", phonetic: "féibl", pos: "名", meanings: ["寓話（擬人化された動物などを通して教訓を伝える物語）"], related: ["Aesop Fables（イソップ物語）"] }
        ]
      },
      {
        id: 15,
        en: "\"Are you familiar with contemporary literature?\" \"I know next to nothing about it.\"",
        ja: "「現代文学に詳しいですか？」「ほとんど知りません。」",
        words: [
          { word: "familiar", phonetic: "fəmíljər", pos: "形", meanings: ["よく知っている（⇔ unfamiliar よく知らない）", "なじみの"], related: ["be familiar with... を（よく）知っている", "familiarity 名 よく知っていること"] },
          { word: "contemporary", phonetic: "kəntémpərèri", pos: "形", meanings: ["現代の", "同時代の"], related: ["modern/today's", "同時代の人"] },
          { word: "literature", phonetic: "lítərətʃər", pos: "名", meanings: ["文学"], related: ["literary 形 文学の（⇔ colloquial 口語の）"] },
          { word: "next to...", phonetic: "", pos: "定", meanings: ["...の隣に", "ほとんど..."], related: ["beside.../almost..."] }
        ]
      },
      {
        id: 16,
        en: "At times I confuse \"curve\" with \"carve.\"",
        ja: "時々、\"curve\"と\"carve\"を混同してしまう。",
        words: [
          { word: "at times", phonetic: "", pos: "副", meanings: ["たまに、時々"], related: ["sometimes/once in a while/now and then/occasionally"] },
          { word: "confuse...", phonetic: "kənfjúːz", pos: "動", meanings: ["...を混同する", "...を困惑させる"], related: ["confuse A with B AとBを混同する", "confusion 名 混乱、困惑"] },
          { word: "curve", phonetic: "kə́ːrv", pos: "名", meanings: ["曲線、カーブ"], related: ["curb 動 抑制する"] },
          { word: "carve (...)", phonetic: "kɑ́ːrv", pos: "動", meanings: ["...を彫る、（肉/料理）を切り分ける"], related: [] }
        ]
      },
      {
        id: 17,
        en: "Don't be shy. Your pronunciation is more or less correct.",
        ja: "恥ずかしがらないで。あなたの発音はだいたい合っています。",
        words: [
          { word: "shy", phonetic: "ʃái", pos: "形", meanings: ["恥ずかしがりの、内気な"], related: ["bashful/timid/withdrawn", "shyness 名 内気"] },
          { word: "pronunciation", phonetic: "prənʌ̀nsiéiʃən", pos: "名", meanings: ["発音"], related: ["pronounce 動 発音する、宣言する"] },
          { word: "more or less", phonetic: "", pos: "副", meanings: ["だいたい"], related: ["almost/nearly/approximately/roughly"] },
          { word: "correct", phonetic: "kərékt", pos: "形", meanings: ["正しい、誤りがない", "ふさわしい"], related: ["⇔ wrong/incorrect/inaccurate", "correction 名 訂正"] }
        ]
      },
      {
        id: 18,
        en: "This article contains tips for those who are eager to increase their vocabulary.",
        ja: "この記事には、語彙を本気で増やしたいと思う人々に役立つ情報が含まれています。",
        words: [
          { word: "article", phonetic: "ɑ́ːrtikl", pos: "名", meanings: ["記事、品物、条項"], related: ["item/column/piece"] },
          { word: "contain...", phonetic: "kəntéin", pos: "動", meanings: ["...を含んでいる、...が入っている"], related: ["have...in it", "control 動 抑める"] },
          { word: "tip", phonetic: "típ", pos: "名", meanings: ["先端", "チップ", "役立つ情報"], related: ["gratuity/advice"] },
          { word: "those who~", phonetic: "", pos: "代", meanings: ["~という人たち"], related: ["the people who~"] },
          { word: "eager", phonetic: "íːgər", pos: "形", meanings: ["熱心な"], related: ["be eager to do... しきりに...したがっている", "eagerness 名 熱望"] },
          { word: "increase (...)", phonetic: "inkríːs", pos: "動", meanings: ["...を増やす、増える"], related: ["⇔ decrease/reduce/lower", "increase 名 増加、上昇"] },
          { word: "vocabulary", phonetic: "voukǽbjəlèri", pos: "名", meanings: ["語彙"], related: [] }
        ]
      },
      {
        id: 19,
        en: "His latest works are on display at the city hall. They are fabulous beyond description.",
        ja: "彼の最新の作品が市庁舎で展示されているの。言葉にできないほど素敵よ。",
        words: [
          { word: "latest", phonetic: "léitist", pos: "形", meanings: ["最新の"], related: ["newest/most recent/up-to-date", "lately 副 最近"] },
          { word: "work", phonetic: "wə́ːrk", pos: "名", meanings: ["作業、仕事", "作品", "職、職業"], related: ["public works 名 公共事業", "workforce 名 労働人口"] },
          { word: "display", phonetic: "displéi", pos: "名", meanings: ["展示"], related: ["be on display 展示されている", "exhibition/show"] },
          { word: "hall", phonetic: "hɔ́ːl", pos: "名", meanings: ["廊下、通路、ホール"], related: ["city hall 名 市庁舎、市役所", "hallway/lobby"] },
          { word: "fabulous", phonetic: "fǽbjələs", pos: "形", meanings: ["すてきな（女性的）"], related: ["terrific/wonderful/marvelous/incredible"] },
          { word: "description", phonetic: "diskrípʃən", pos: "名", meanings: ["描写、叙述"], related: ["beyond description 言葉では表せない", "describe 動 描写する"] }
        ]
      },
      {
        id: 20,
        en: "\"Could you move over a little?\" \"Oh, sorry. I didn't realize I was taking up so much space.\"",
        ja: "「少し詰めていただけませんか？」「あ、ごめんなさい。こんなに場所を取っていたなんて気付きませんでした。」",
        words: [
          { word: "move over", phonetic: "", pos: "動", meanings: ["（人が座れるように）席を詰める"], related: ["move"] },
          { word: "realize...", phonetic: "ríːəlàiz", pos: "動", meanings: ["...ということに気付く", "...を実現する"], related: ["become aware of...", "realization 名 実現、悟ること"] },
          { word: "take up...", phonetic: "", pos: "動", meanings: ["（空間・時間などを）取る、占める"], related: ["occupy", "take...up（趣味などを）始める"] }
        ]
      },
      {
        id: 21,
        en: "\"What's this ugly object?\" \"This is a piece of abstract art!\"",
        ja: "「この不格好な物体は何？」「これは抽象芸術の作品だよ！」",
        words: [
          { word: "ugly", phonetic: "ʌ́gli", pos: "形", meanings: ["醜い、不格好な", "とても不快な"], related: ["⇔ beautiful 美しい", "⇔ pleasant 快い"] },
          { word: "object", phonetic: "ɑ́bdʒikt", pos: "名", meanings: ["物体、物", "対象、目的"], related: ["object (to...) 動 異議を唱える", "objection 名 反対意見"] },
          { word: "a piece of...", phonetic: "", pos: "定", meanings: ["1つ【1個】の..."], related: ["information/advice/news/paper/furniture などの不可算名詞を数える"] },
          { word: "abstract", phonetic: "ǽbstrækt", pos: "形", meanings: ["抽象的な（⇔ concrete 具体的な）"], related: ["conceptual/metaphysical", "abstraction 名 抽象概念"] }
        ]
      },
      {
        id: 22,
        en: "I begged Richie to lend me a hundred bucks, but he shook his head, saying, \"I'm broke, too.\"",
        ja: "100ドル貸してくれとリッチーに頼んだら、彼は「俺もお金がないんだよ！」と言って首を横に振った。",
        words: [
          { word: "beg (...)", phonetic: "bég", pos: "動", meanings: ["（...人に）すがってお願いする、懇願する"], related: ["ask...strongly/plead/implore"] },
          { word: "lend ... A", phonetic: "lénd", pos: "動", meanings: ["...にA（物・金）を貸す"], related: ["⇔ borrow A from... Aを借りる", "give/pay...back 返す"] },
          { word: "buck", phonetic: "bʌ́k", pos: "名", meanings: ["ドル", "雄ジカ"], related: [] },
          { word: "shake one's head", phonetic: "", pos: "動", meanings: ["NOと言う、首を横に振る"], related: ["⇔ nod/say \"yes\""] },
          { word: "be (flat) broke", phonetic: "bróuk", pos: "形", meanings: ["（全然）お金がない、すっからかんだ"], related: ["be hard up/be penniless", "go broke 動 破産する"] }
        ]
      },
      {
        id: 23,
        en: "\"I'm apt to buy things on impulse whenever something is on sale.\" \"So am I.\"",
        ja: "「安売りをしているといつも衝動買いしてしまうたちです。」「私も。」",
        words: [
          { word: "apt", phonetic: "ǽpt", pos: "形", meanings: ["適切な", "...しがちである"], related: ["be apt to do... しがちである、する傾向がある", "aptitude 名 才能、適性"] },
          { word: "impulse", phonetic: "ímpʌls", pos: "名", meanings: ["衝動"], related: ["on impulse 副 衝動的に", "impulsive 形 衝動的な"] },
          { word: "on sale", phonetic: "", pos: "副", meanings: ["バーゲン【特売】で"], related: ["go on sale 動 発売になる"] },
          { word: "So am I.", phonetic: "", pos: "定", meanings: ["（先行文に答えて）私もそうです【同じです】"], related: ["Me, too./Ditto."] }
        ]
      }
    ]
  },
  {
    section: 3,
    title: "Economy & Society",
    sentences: [
      {
        id: 24,
        en: "As it is, ordinary people cannot afford to purchase such luxuries.",
        ja: "実際のところ、普通の人々にはそんな贅沢品を購入する余裕はない。",
        words: [
          { word: "as it is", phonetic: "", pos: "副", meanings: ["（文頭で）（残念ながら）実際のところ", "（文中・文尾で）そのままで", "（文尾で）もうすでに"], related: ["actually/in reality/in fact", "as is 副 現状のまま"] },
          { word: "ordinary", phonetic: "ɔ́ːrdənèri", pos: "形", meanings: ["普通の、平凡な"], related: ["usual/normal/common/average", "⇔ special/unusual/extraordinary", "ordinarily 副 普通は"] },
          { word: "can afford...", phonetic: "əfɔ́ːrd", pos: "動", meanings: ["...に費やす（経済的・時間的）余裕がある"], related: ["can afford to do... する余裕がある"] },
          { word: "purchase...", phonetic: "pə́ːrtʃəs", pos: "動", meanings: ["...を購入する（⇔ sell... 売る）"], related: ["buy/get/acquire", "purchase 名 購入、購入品"] },
          { word: "luxury", phonetic: "lʌ́kʃəri", pos: "名", meanings: ["贅沢、贅沢品"], related: ["luxurious 形 贅沢な、豪華な"] }
        ]
      },
      {
        id: 25,
        en: "As we anticipated, the unemployment rate has risen three quarters in a row.",
        ja: "我々が予測した通り、失業率は3四半期連続で上昇した。",
        words: [
          { word: "anticipate...", phonetic: "æntísəpèit", pos: "動", meanings: ["...を予期する、予測する"], related: ["expect/foresee", "anticipation 名 予期、先を見越すこと"] },
          { word: "unemployment", phonetic: "ʌ̀nimplɔ́imənt", pos: "名", meanings: ["失業（状態）"], related: ["⇔ employment 雇用", "unemployed 形 失業した"] },
          { word: "rate", phonetic: "réit", pos: "名", meanings: ["率、割合", "速さ", "料金"], related: ["first-rate 形 一流の", "exchange rate 為替相場", "ratio 名 比率"] },
          { word: "rise", phonetic: "ráiz", pos: "動", meanings: ["（数・量などが）上がる、増える"], related: ["⇔ decrease/decline 減少する", "go up/ascend"] },
          { word: "quarter", phonetic: "kwɔ́ːrtər", pos: "名", meanings: ["四半期【1/4年（3カ月）】", "地区", "15分", "25セント"], related: ["headquarters 名 本社", "quota 名 割り当て数量"] },
          { word: "row", phonetic: "róu", pos: "名", meanings: ["（横の）列"], related: ["in a row 連続で", "line（縦の列）"] }
        ]
      },
      {
        id: 26,
        en: "The research institute was established in the late 1960s.",
        ja: "その研究所は1960年代後半に設立された。",
        words: [
          { word: "research", phonetic: "risə́ːrtʃ", pos: "名", meanings: ["（...に関する）研究【調査】"], related: ["study/exploration", "researcher 名 研究者"] },
          { word: "institute", phonetic: "ínstətjùːt", pos: "名", meanings: ["理系の大学、研究を目的とする組織"], related: ["institution 名 公共性の高い機関、団体", "institutional 形 制度上の"] },
          { word: "establish...", phonetic: "istǽbliʃ", pos: "動", meanings: ["...を設立する"], related: ["set...up/found", "established 形 確立された", "establishment 名 設立"] },
          { word: "late", phonetic: "léit", pos: "形", meanings: ["（年代より）遅い、後半の"], related: ["the early... 前半", "the mid-... 中期"] },
          { word: "1960s", phonetic: "", pos: "名", meanings: ["1960年代"], related: ["数字を複数形にする（後ろにsをつける）と〜年代の意味になる"] }
        ]
      },
      {
        id: 27,
        en: "Competent mechanics are in great demand, so they earn decent wages.",
        ja: "有能な整備士は引っ張りだこだから、なかなかの賃金を稼げる。",
        words: [
          { word: "competent", phonetic: "kɑ́mpətənt", pos: "形", meanings: ["（求められる一定の）能力【技能】を持つ、適格の"], related: ["able/capable/proficient/qualified", "⇔ incompetent 不適格な", "competence 名 能力、技能"] },
          { word: "mechanic", phonetic: "mɪkǽnɪk", pos: "名", meanings: ["（機械の）整備士、修理工"], related: ["mechanical 形 機械の", "mechanism 名 仕組み、機構"] },
          { word: "demand", phonetic: "dimǽnd", pos: "名", meanings: ["需要、要求"], related: ["be in demand 需要がある、人気がある", "supply and demand 需要と供給", "on demand 要求に応じて"] },
          { word: "earn...", phonetic: "ə́ːrn", pos: "動", meanings: ["...（対価・報酬）を稼ぐ、獲得する"], related: ["get/make/win/achieve/attain", "earnings 名 収入、利益"] },
          { word: "decent", phonetic: "díːsnt", pos: "形", meanings: ["（まあ）かなりよい、まともな、きちんとした"], related: ["satisfactory/respectable/good enough", "decency 名 常識"] },
          { word: "wages", phonetic: "wéidʒiz", pos: "名", meanings: ["賃金"], related: ["⇔ salary（月給的・安定的な給料）", "pay/compensation"] }
        ]
      },
      {
        id: 28,
        en: "The power plant supplies the remote county with electricity.",
        ja: "その発電所は遠く離れた郡に電気を供給している。",
        words: [
          { word: "power", phonetic: "páuər", pos: "名", meanings: ["（原・電気の）エネルギー、動力", "能力", "権力"], related: ["force/might/strength", "energy"] },
          { word: "plant", phonetic: "plǽnt", pos: "名", meanings: ["工場、生産設備、プラント", "植物"], related: ["power plant 名 発電所", "plant 動 植える"] },
          { word: "supply A (with B)", phonetic: "səplái", pos: "動", meanings: ["AにBを供給する"], related: ["supply B to A", "supply 名 供給", "⇔ demand 需要", "supplies 名 供給物、必需品"] },
          { word: "remote", phonetic: "rimóut", pos: "形", meanings: ["遠い、離れた"], related: ["far away/distant/isolated", "slight わずかな"] },
          { word: "county", phonetic: "káunti", pos: "名", meanings: ["（米国の）郡"], related: ["country 名 国"] },
          { word: "electricity", phonetic: "ilèktríisti", pos: "名", meanings: ["電気"], related: ["electric 形 電気の", "electrical 形 電気系統の", "electronic 形 電子の"] }
        ]
      }
    ]
  },
  {
    section: 4,
    title: "Daily Life & Habits",
    sentences: [
      {
        id: 29,
        en: "He has a habit of biting his nails. It's absolutely disgusting.",
        ja: "彼は爪を噛む癖がある。あれは本当にぞっとするよ。",
        words: [
          { word: "habit", phonetic: "hǽbit", pos: "名", meanings: ["（よくない）癖", "（人の）習慣"], related: ["have a habit of doing... する癖がある", "habitual 形 習慣的な", "habitually 副 習慣的に"] },
          { word: "bite (...)", phonetic: "báit", pos: "動", meanings: ["（...に）噛む、噛みつく"], related: ["sting 名 刺すこと"] },
          { word: "nail", phonetic: "néil", pos: "名", meanings: ["（手の）爪", "釘"], related: ["fingernail 手の爪、toenail 足の爪"] },
          { word: "absolutely", phonetic: "ǽbsəlùːtli", pos: "副", meanings: ["全く、完全に"], related: ["totally/completely/entirely/utterly", "absolute 形 完全な、絶対の"] },
          { word: "disgusting", phonetic: "disgʌ́stiŋ", pos: "形", meanings: ["ぞっとするような、むかむかするような"], related: ["terrible/revolting", "disgust 名 ひどい嫌悪感"] }
        ]
      },
      {
        id: 30,
        en: "\"Anything else?\" \"That's it.\" \"For here or to go?\" \"To go.\"",
        ja: "「ほかに何か？」「それで全部です。」「こちらでお召し上がりですか？」「持ち帰ります。」",
        words: [
          { word: "Anything else?", phonetic: "", pos: "定", meanings: ["ほかに何か？（レストランなどで聞かれる定型フレーズ）"], related: [] },
          { word: "That's it.", phonetic: "", pos: "定", meanings: ["（それで）以上です、それで全部です", "そう、その通り"], related: ["That's all"] },
          { word: "For here or to go?", phonetic: "", pos: "定", meanings: ["（ファーストフードで）こちらでお召し上がりですか？持ち帰りですか？"], related: [] },
          { word: "I'll take it.", phonetic: "", pos: "定", meanings: ["それに【それに】します（購入しようとするものが手元にあっても）"], related: [] }
        ]
      },
      {
        id: 31,
        en: "\"How much is this rug?\" \"$100 including tax.\" \"OK, I'll take it.\"",
        ja: "「この敷物はいくらですか？」「税込みで100ドルです。」「じゃあ、これにします。」",
        words: [
          { word: "rug", phonetic: "rʌ́g", pos: "名", meanings: ["（小さめの）敷物、絨毯"], related: ["carpet（大きな敷物）"] },
          { word: "including...", phonetic: "inklúːdiŋ", pos: "前", meanings: ["...を含めて（⇔ excluding... を除いて）"], related: ["include 動 含む", "inclusive 形 すべてを含んだ", "inclusion 名 包含"] },
          { word: "tax", phonetic: "tǽks", pos: "名", meanings: ["税金"], related: ["income tax 所得税", "sales tax 売上税", "tax evasion 脱税", "taxation 名 課税"] }
        ]
      },
      {
        id: 32,
        en: "I don't think those pants look good on you. Try these on. They're really in now!",
        ja: "そのパンツはあなたに似合わないと思う。こっちを試着して。今すごく流行ってるの！",
        words: [
          { word: "pants", phonetic: "pǽnts", pos: "名", meanings: ["（米）パンツ、ズボン、スラックス"], related: ["trousers（英）", "（米）男性用下着のパンツ"] },
          { word: "look good on...", phonetic: "", pos: "動", meanings: ["...に似合う"], related: ["suit"] },
          { word: "try ... on", phonetic: "", pos: "動", meanings: ["...を試着する"], related: [] },
          { word: "in", phonetic: "", pos: "形", meanings: ["流行の、人気の"], related: ["⇔ out 流行遅れの", "in fashion/trendy"] }
        ]
      },
      {
        id: 33,
        en: "\"Do you agree or disagree with him?\" \"I'm on his side.\"",
        ja: "「あなたは彼と同じ意見？ それとも違うの？」「彼のほうを支持するよ。」",
        words: [
          { word: "agree", phonetic: "əgríː", pos: "動", meanings: ["（同じ意見である）同意する、賛成する、一致する"], related: ["agree with... と同じ意見である", "agree on... について合意する", "agreement 名 同意、契約", "agreeable 形 心地よい"] },
          { word: "disagree", phonetic: "dìsəgríː", pos: "動", meanings: ["意見が異なる、一致しない"], related: ["disagree with... と意見が異なる", "disagreement 名 意見の対立"] },
          { word: "be on one's side", phonetic: "", pos: "動", meanings: ["...の味方【側】である"], related: ["support.../favor.../be in favor of..."] }
        ]
      },
      {
        id: 34,
        en: "Strictly speaking, his view differs somewhat from mine.",
        ja: "厳密に言うと、彼の見解は私のものとやや異なる。",
        words: [
          { word: "strictly", phonetic: "stríktli", pos: "副", meanings: ["厳密に"], related: ["strictly speaking 厳密に言うと", "strict 形 厳しい、厳格な"] },
          { word: "view", phonetic: "vjúː", pos: "名", meanings: ["考え、見解", "景色、眺め", "視野"], related: ["opinion/sight/landscape/scenery"] },
          { word: "differ", phonetic: "dífər", pos: "動", meanings: ["異なる、違う"], related: ["be different from...", "difference 名 違い"] },
          { word: "somewhat", phonetic: "sʌ́mhwɑt", pos: "副", meanings: ["やや、多少"], related: ["a little/slightly/to some extent"] }
        ]
      },
      {
        id: 35,
        en: "Bringing flammable items into the cabin is prohibited.",
        ja: "機内への可燃物の持ち込みは禁止されています。",
        words: [
          { word: "flammable", phonetic: "flǽməbl", pos: "形", meanings: ["可燃性の"], related: ["= inflammable", "⇔ nonflammable 不燃性の", "flame 名 炎"] },
          { word: "item", phonetic: "áitəm", pos: "名", meanings: ["品目、項目、物", "記事、ニュース"], related: ["article/thing/piece"] },
          { word: "cabin", phonetic: "kǽbin", pos: "名", meanings: ["（飛行機・船などの）客室", "（丸太造りの）小屋"], related: ["compartment/cottage"] },
          { word: "prohibit...", phonetic: "prəhíbit", pos: "動", meanings: ["（法律・規則で）...（行為）を禁止する"], related: ["forbid/ban", "⇔ permit/allow 許可する", "prohibit A from doing Aに...することを禁じる"] }
        ]
      },
      {
        id: 36,
        en: "Our flight to Vienna was delayed on account of a minor accident.",
        ja: "ウィーンへの我々のフライトは小さな事故のために遅延した。",
        words: [
          { word: "flight", phonetic: "fláit", pos: "名", meanings: ["飛ぶこと、飛行、フライト"], related: ["flight attendant 名 客室乗務員"] },
          { word: "Vienna", phonetic: "viénə", pos: "名", meanings: ["（オーストリアの首都）ウィーン"], related: ["Wien（ドイツ語名）"] },
          { word: "delay (...)", phonetic: "diléi", pos: "動", meanings: ["...を遅らせる、...を先延ばしにする"], related: ["postpone/put...off", "delay 名 遅れ、遅延"] },
          { word: "on account of...", phonetic: "əkáunt", pos: "前", meanings: ["...が理由で"], related: ["because of.../due to.../owing to..."] },
          { word: "minor", phonetic: "máinər", pos: "形", meanings: ["（比較的）重要でない、小さな、主ではない"], related: ["small/unimportant/slight/trivial", "⇔ major/great/big"] }
        ]
      }
    ]
  },
  {
    section: 5,
    title: "Travel & Transportation",
    sentences: [
      {
        id: 37,
        en: "The flight was overbooked, so several passengers had to be rerouted through another city.",
        ja: "フライトが定員オーバーだったため、数人の乗客は別の都市経由に変更された。",
        words: [
          { word: "overbooked", phonetic: "òuvərbúkt", pos: "形", meanings: ["定員を超えて予約された"], related: ["overbook 動 予約を取りすぎる"] },
          { word: "passenger", phonetic: "pǽsəndʒər", pos: "名", meanings: ["乗客"], related: [] },
          { word: "reroute", phonetic: "rìːráut", pos: "動", meanings: ["経路を変更する"], related: ["route 名 経路"] }
        ]
      },
      {
        id: 38,
        en: "We got caught in a traffic jam on the way to the airport and nearly missed our connection.",
        ja: "空港に向かう途中で渋滞に巻き込まれ、乗り継ぎに間に合わないところだった。",
        words: [
          { word: "traffic jam", phonetic: "", pos: "名", meanings: ["交通渋滞"], related: ["congestion 名 渋滞"] },
          { word: "connection", phonetic: "kənékʃən", pos: "名", meanings: ["乗り継ぎ", "接続"], related: ["connect 動 接続する"] }
        ]
      },
      {
        id: 39,
        en: "Customs officials confiscated several prohibited items from travelers entering the country.",
        ja: "税関職員が入国する旅行者から禁止品をいくつか没収した。",
        words: [
          { word: "customs", phonetic: "kʌ́stəmz", pos: "名", meanings: ["税関"], related: ["customs duty 関税"] },
          { word: "confiscate", phonetic: "kɑ́nfiskèit", pos: "動", meanings: ["没収する"], related: ["confiscation 名 没収"] },
          { word: "prohibited", phonetic: "prouhíbitid", pos: "形", meanings: ["禁止された"], related: ["prohibit 動 禁止する", "prohibition 名 禁止"] }
        ]
      },
      {
        id: 40,
        en: "The cruise ship set sail at dawn and headed toward the Mediterranean coast.",
        ja: "クルーズ船は夜明けに出航し、地中海沿岸に向かった。",
        words: [
          { word: "set sail", phonetic: "", pos: "動", meanings: ["出航する"], related: ["sail 名 帆", "sailor 名 船乗り"] },
          { word: "dawn", phonetic: "dɔ́ːn", pos: "名", meanings: ["夜明け"], related: ["at dawn 夜明けに", "⇔ dusk 夕暮れ"] },
          { word: "Mediterranean", phonetic: "mèdətəréiniən", pos: "形", meanings: ["地中海の"], related: [] }
        ]
      },
      {
        id: 41,
        en: "I'd recommend booking your accommodation well in advance during peak season.",
        ja: "ピークシーズンには宿泊先をかなり前もって予約することをお勧めします。",
        words: [
          { word: "accommodation", phonetic: "əkɑ̀mədéiʃən", pos: "名", meanings: ["宿泊施設", "適応"], related: ["accommodate 動 収容する、対応する"] },
          { word: "in advance", phonetic: "", pos: "副", meanings: ["前もって"], related: ["ahead of time 前もって"] },
          { word: "peak season", phonetic: "", pos: "名", meanings: ["繁忙期"], related: ["⇔ off-season 閑散期"] }
        ]
      },
      {
        id: 42,
        en: "The subway system in this city is incredibly efficient and rarely experiences delays.",
        ja: "この都市の地下鉄は非常に効率的で、遅延はほとんどない。",
        words: [
          { word: "efficient", phonetic: "ifíʃənt", pos: "形", meanings: ["効率的な"], related: ["efficiency 名 効率", "⇔ inefficient 形 非効率な"] },
          { word: "rarely", phonetic: "rέərli", pos: "副", meanings: ["めったに〜ない"], related: ["rare 形 まれな"] }
        ]
      },
      {
        id: 43,
        en: "A round-trip ticket to Paris costs roughly twice as much as a one-way fare.",
        ja: "パリまでの往復券は片道運賃のおよそ2倍の値段だ。",
        words: [
          { word: "round-trip", phonetic: "", pos: "形", meanings: ["往復の"], related: ["⇔ one-way 片道の"] },
          { word: "roughly", phonetic: "rʌ́fli", pos: "副", meanings: ["おおよそ、大雑把に"], related: ["rough 形 おおよその、粗い"] },
          { word: "fare", phonetic: "fέər", pos: "名", meanings: ["運賃"], related: ["airfare 名 航空運賃"] }
        ]
      },
      {
        id: 44,
        en: "Fasten your seatbelt and put your tray table in the upright position for landing.",
        ja: "着陸に備えてシートベルトを締め、テーブルを元の位置に戻してください。",
        words: [
          { word: "fasten", phonetic: "fǽsn", pos: "動", meanings: ["締める、固定する"], related: ["unfasten 動 外す"] },
          { word: "upright", phonetic: "ʌ́prait", pos: "形", meanings: ["まっすぐな、直立した"], related: [] },
          { word: "landing", phonetic: "lǽndiŋ", pos: "名", meanings: ["着陸"], related: ["land 動 着陸する", "⇔ takeoff 離陸"] }
        ]
      },
      {
        id: 45,
        en: "The itinerary includes a stopover in Dubai before continuing on to Cape Town.",
        ja: "旅程にはケープタウンへ向かう前にドバイでの途中降機が含まれている。",
        words: [
          { word: "itinerary", phonetic: "aitínərèri", pos: "名", meanings: ["旅程、旅行計画"], related: [] },
          { word: "stopover", phonetic: "stɑ́pouvər", pos: "名", meanings: ["途中降機、立ち寄り"], related: ["layover 名 乗り継ぎ待ち"] }
        ]
      },
      {
        id: 46,
        en: "Make sure you have a valid passport and the necessary visa before departing.",
        ja: "出発前に有効なパスポートと必要なビザを持っているか確認してください。",
        words: [
          { word: "valid", phonetic: "vǽlid", pos: "形", meanings: ["有効な", "妥当な"], related: ["validity 名 有効性", "⇔ invalid 形 無効な"] },
          { word: "necessary", phonetic: "nésəsèri", pos: "形", meanings: ["必要な"], related: ["necessity 名 必要性", "necessarily 副 必ずしも"] },
          { word: "depart", phonetic: "dipɑ́ːrt", pos: "動", meanings: ["出発する"], related: ["departure 名 出発"] }
        ]
      }
    ]
  },
  {
    section: 6,
    title: "Shopping & Money",
    sentences: [
      {
        id: 47,
        en: "The store offers a full refund if you return the item within thirty days of purchase.",
        ja: "その店は購入から30日以内に返品すれば全額返金に応じてくれる。",
        words: [
          { word: "refund", phonetic: "ríːfʌnd", pos: "名", meanings: ["返金、払い戻し"], related: ["refund 動 返金する"] },
          { word: "purchase", phonetic: "pə́ːrtʃəs", pos: "名", meanings: ["購入"], related: ["purchase 動 購入する"] }
        ]
      },
      {
        id: 48,
        en: "Inflation has driven up the cost of living, especially in major urban areas.",
        ja: "インフレが生活費を押し上げており、特に大都市圏で顕著だ。",
        words: [
          { word: "inflation", phonetic: "infléiʃən", pos: "名", meanings: ["インフレーション、物価上昇"], related: ["inflate 動 膨張させる", "⇔ deflation デフレ"] },
          { word: "cost of living", phonetic: "", pos: "名", meanings: ["生活費"], related: [] },
          { word: "urban", phonetic: "ə́ːrbən", pos: "形", meanings: ["都市の"], related: ["⇔ rural 形 田舎の"] }
        ]
      },
      {
        id: 49,
        en: "She managed to bargain the price down from fifty euros to thirty.",
        ja: "彼女は50ユーロの値段を30ユーロまで値切ることに成功した。",
        words: [
          { word: "bargain", phonetic: "bɑ́ːrgin", pos: "動", meanings: ["値切る、交渉する"], related: ["bargain 名 お買い得品、取引"] },
          { word: "manage to", phonetic: "mǽnidʒ", pos: "動", meanings: ["なんとか〜する"], related: ["management 名 管理"] }
        ]
      },
      {
        id: 50,
        en: "The company went bankrupt after failing to repay its enormous debts.",
        ja: "その会社は莫大な借金を返済できず倒産した。",
        words: [
          { word: "bankrupt", phonetic: "bǽŋkrʌpt", pos: "形", meanings: ["破産した"], related: ["bankruptcy 名 破産", "go bankrupt 破産する"] },
          { word: "repay", phonetic: "ripéi", pos: "動", meanings: ["返済する"], related: ["repayment 名 返済"] },
          { word: "enormous", phonetic: "inɔ́ːrməs", pos: "形", meanings: ["莫大な、巨大な"], related: ["huge/immense/vast"] },
          { word: "debt", phonetic: "dét", pos: "名", meanings: ["借金、負債"], related: ["debtor 名 債務者"] }
        ]
      },
      {
        id: 51,
        en: "I withdrew some cash from the ATM and deposited the rest into my savings account.",
        ja: "ATMから現金をいくらか引き出し、残りは普通預金口座に預け入れた。",
        words: [
          { word: "withdraw", phonetic: "wiðdrɔ́ː", pos: "動", meanings: ["引き出す、撤退する"], related: ["withdrawal 名 引き出し"] },
          { word: "deposit", phonetic: "dipɑ́zit", pos: "動", meanings: ["預け入れる"], related: ["deposit 名 預金、保証金"] },
          { word: "savings account", phonetic: "", pos: "名", meanings: ["普通預金口座"], related: ["checking account 当座預金口座"] }
        ]
      },
      {
        id: 52,
        en: "The luxury brand launched a limited edition collection that sold out within hours.",
        ja: "その高級ブランドは限定コレクションを発売し、数時間で完売した。",
        words: [
          { word: "luxury", phonetic: "lʌ́kʃəri", pos: "名", meanings: ["贅沢、高級品"], related: ["luxurious 形 豪華な"] },
          { word: "launch", phonetic: "lɔ́ːntʃ", pos: "動", meanings: ["発売する、打ち上げる"], related: ["launch 名 発売、打ち上げ"] },
          { word: "sell out", phonetic: "", pos: "動", meanings: ["完売する"], related: ["sold out 形 売り切れの"] }
        ]
      },
      {
        id: 53,
        en: "Could you split the bill? I only have my credit card on me today.",
        ja: "割り勘にしてもらえますか？今日はクレジットカードしか持ってなくて。",
        words: [
          { word: "split the bill", phonetic: "", pos: "動", meanings: ["割り勘にする"], related: ["go Dutch 割り勘にする"] },
          { word: "credit card", phonetic: "", pos: "名", meanings: ["クレジットカード"], related: ["debit card デビットカード"] }
        ]
      },
      {
        id: 54,
        en: "Tax-free shopping is available for tourists who present their passport at the counter.",
        ja: "カウンターでパスポートを提示すれば、旅行者は免税で買い物ができる。",
        words: [
          { word: "tax-free", phonetic: "", pos: "形", meanings: ["免税の"], related: ["duty-free 形 関税免除の"] },
          { word: "present", phonetic: "prizént", pos: "動", meanings: ["提示する、贈る"], related: ["presentation 名 提示、発表"] }
        ]
      },
      {
        id: 55,
        en: "He inherited a fortune from his late grandfather and invested it in real estate.",
        ja: "彼は亡き祖父から財産を相続し、不動産に投資した。",
        words: [
          { word: "inherit", phonetic: "inhérit", pos: "動", meanings: ["相続する"], related: ["inheritance 名 相続、遺産"] },
          { word: "fortune", phonetic: "fɔ́ːrtʃən", pos: "名", meanings: ["財産、運"], related: ["fortunate 形 幸運な"] },
          { word: "invest", phonetic: "invést", pos: "動", meanings: ["投資する"], related: ["investment 名 投資", "investor 名 投資家"] },
          { word: "real estate", phonetic: "", pos: "名", meanings: ["不動産"], related: [] }
        ]
      },
      {
        id: 56,
        en: "The currency exchange rate fluctuates daily, so check before you convert your money.",
        ja: "為替レートは毎日変動するので、両替の前に確認すること。",
        words: [
          { word: "currency", phonetic: "kə́ːrənsi", pos: "名", meanings: ["通貨"], related: ["foreign currency 外貨"] },
          { word: "exchange rate", phonetic: "", pos: "名", meanings: ["為替レート"], related: [] },
          { word: "fluctuate", phonetic: "flʌ́ktʃuèit", pos: "動", meanings: ["変動する"], related: ["fluctuation 名 変動"] }
        ]
      }
    ]
  },
  {
    section: 7,
    title: "Making Excuses & Complaining",
    sentences: [
      {
        id: 57,
        en: "He came up with a lame excuse for being late, but nobody bought it.",
        ja: "彼は遅刻の下手な言い訳を思いついたが、誰も信じなかった。",
        words: [
          { word: "come up with", phonetic: "", pos: "動", meanings: ["〜を思いつく", "〜を考え出す"], related: ["come up 動 話題に上がる"] },
          { word: "lame", phonetic: "léim", pos: "形", meanings: ["（言い訳などが）下手な、説得力のない"], related: [] },
          { word: "excuse", phonetic: "ikskjúːs", pos: "名", meanings: ["言い訳、弁解"], related: ["excuse 動 許す"] }
        ]
      },
      {
        id: 58,
        en: "I'm fed up with his constant complaints about trivial matters.",
        ja: "些細なことに対する彼の絶え間ない不満にはうんざりだ。",
        words: [
          { word: "fed up with", phonetic: "", pos: "形", meanings: ["〜にうんざりして"], related: ["be sick of 〜にうんざりして"] },
          { word: "constant", phonetic: "kɑ́nstənt", pos: "形", meanings: ["絶え間ない、一定の"], related: ["constantly 副 絶えず"] },
          { word: "complaint", phonetic: "kəmpléint", pos: "名", meanings: ["不満、苦情"], related: ["complain 動 不満を言う"] },
          { word: "trivial", phonetic: "tríviəl", pos: "形", meanings: ["些細な、つまらない"], related: ["trivia 名 雑学"] }
        ]
      },
      {
        id: 59,
        en: "Don't put the blame on others. You ought to take responsibility for your own actions.",
        ja: "人のせいにするな。自分の行動には自分で責任を取るべきだ。",
        words: [
          { word: "put the blame on", phonetic: "", pos: "動", meanings: ["〜のせいにする"], related: ["blame A for B AをBのことで責める"] },
          { word: "ought to", phonetic: "ɔ́ːt", pos: "助", meanings: ["〜すべきである"], related: [] },
          { word: "responsibility", phonetic: "rispɑ̀nsəbíləti", pos: "名", meanings: ["責任"], related: ["responsible 形 責任がある"] }
        ]
      },
      {
        id: 60,
        en: "She tends to exaggerate minor problems and make a fuss over nothing.",
        ja: "彼女は小さな問題を大げさにして、何でもないことで大騒ぎする傾向がある。",
        words: [
          { word: "tend to", phonetic: "ténd", pos: "動", meanings: ["〜する傾向がある"], related: ["tendency 名 傾向"] },
          { word: "exaggerate", phonetic: "igzǽdʒərèit", pos: "動", meanings: ["誇張する、大げさに言う"], related: ["exaggeration 名 誇張"] },
          { word: "make a fuss", phonetic: "", pos: "動", meanings: ["大騒ぎする"], related: ["fussy 形 うるさい"] }
        ]
      },
      {
        id: 61,
        en: "It's no use crying over spilt milk. What's done is done.",
        ja: "覆水盆に返らず。終わったことは仕方がない。",
        words: [
          { word: "It's no use -ing", phonetic: "", pos: "定", meanings: ["〜しても無駄だ"], related: [] },
          { word: "What's done is done", phonetic: "", pos: "定", meanings: ["終わったことは仕方がない"], related: [] }
        ]
      },
      {
        id: 62,
        en: "He reluctantly admitted that he had neglected his duties.",
        ja: "彼はしぶしぶ、自分の職務を怠っていたことを認めた。",
        words: [
          { word: "reluctantly", phonetic: "rilʌ́ktəntli", pos: "副", meanings: ["しぶしぶ"], related: ["reluctant 形 気が進まない"] },
          { word: "admit", phonetic: "ədmít", pos: "動", meanings: ["〜を認める"], related: ["admission 名 入場、自白"] },
          { word: "neglect", phonetic: "niglékt", pos: "動", meanings: ["〜を怠る"], related: ["negligent 形 怠慢な"] }
        ]
      },
      {
        id: 63,
        en: "I can't stand the way he boasts about his achievements all the time.",
        ja: "彼がいつも自分の業績を自慢するのは我慢できない。",
        words: [
          { word: "can't stand", phonetic: "", pos: "動", meanings: ["〜を我慢できない"], related: [] },
          { word: "boast", phonetic: "bóust", pos: "動", meanings: ["自慢する"], related: ["boastful 形 自慢する"] },
          { word: "achievement", phonetic: "ətʃíːvmənt", pos: "名", meanings: ["業績、達成"], related: ["achieve 動 達成する"] }
        ]
      },
      {
        id: 64,
        en: "Quit grumbling and get down to work. The deadline is approaching.",
        ja: "ぶつぶつ言うのはやめて仕事に取りかかれ。締め切りが迫っている。",
        words: [
          { word: "quit", phonetic: "kwít", pos: "動", meanings: ["〜をやめる"], related: [] },
          { word: "grumble", phonetic: "grʌ́mbl", pos: "動", meanings: ["ぶつぶつ不満を言う"], related: [] },
          { word: "get down to", phonetic: "", pos: "動", meanings: ["〜に本格的に取りかかる"], related: [] },
          { word: "deadline", phonetic: "dédlain", pos: "名", meanings: ["締め切り"], related: [] },
          { word: "approach", phonetic: "əpróutʃ", pos: "動", meanings: ["近づく"], related: ["approach 名 接近、取り組み方"] }
        ]
      },
      {
        id: 65,
        en: "I regret not speaking up when I had the chance.",
        ja: "チャンスがあったときに発言しなかったことを後悔している。",
        words: [
          { word: "regret", phonetic: "rigrét", pos: "動", meanings: ["〜を後悔する"], related: ["regrettable 形 残念な"] },
          { word: "speak up", phonetic: "", pos: "動", meanings: ["はっきり言う、声を上げる"], related: [] }
        ]
      },
      {
        id: 66,
        en: "It annoys me that he never bothers to apologize for his mistakes.",
        ja: "彼が自分の過ちを謝ろうともしないのが腹立たしい。",
        words: [
          { word: "annoy", phonetic: "ənɔ́i", pos: "動", meanings: ["〜をいらいらさせる"], related: ["annoying 形 いらいらさせる"] },
          { word: "bother to", phonetic: "bɑ́ðər", pos: "動", meanings: ["わざわざ〜する"], related: [] },
          { word: "apologize", phonetic: "əpɑ́lədʒàiz", pos: "動", meanings: ["謝る"], related: ["apology 名 謝罪"] }
        ]
      },
      {
        id: 67,
        en: "Despite repeated warnings, he persisted in violating the company policy.",
        ja: "度重なる警告にもかかわらず、彼は会社の方針に違反し続けた。",
        words: [
          { word: "despite", phonetic: "dispáit", pos: "前", meanings: ["〜にもかかわらず"], related: ["in spite of"] },
          { word: "persist in", phonetic: "pərsíst", pos: "動", meanings: ["〜し続ける"], related: ["persistent 形 しつこい"] },
          { word: "violate", phonetic: "váiəlèit", pos: "動", meanings: ["〜に違反する"], related: ["violation 名 違反"] }
        ]
      },
      {
        id: 68,
        en: "She was so upset that she burst into tears in front of everyone.",
        ja: "彼女はひどく動揺して、みんなの前で泣き出してしまった。",
        words: [
          { word: "upset", phonetic: "ʌpsét", pos: "形", meanings: ["動揺して"], related: ["upset 動 〜を動揺させる"] },
          { word: "burst into tears", phonetic: "", pos: "動", meanings: ["急に泣き出す"], related: ["burst into laughter 急に笑い出す"] }
        ]
      }
    ]
  },
  {
    section: 8,
    title: "Education & Learning",
    sentences: [
      {
        id: 69,
        en: "The scholarship enabled her to attend a prestigious university abroad.",
        ja: "奨学金のおかげで彼女は海外の名門大学に通うことができた。",
        words: [
          { word: "scholarship", phonetic: "skɑ́lərʃip", pos: "名", meanings: ["奨学金"], related: ["scholar 名 学者"] },
          { word: "enable", phonetic: "inéibl", pos: "動", meanings: ["〜を可能にする"], related: ["able 形 できる"] },
          { word: "prestigious", phonetic: "prestídʒəs", pos: "形", meanings: ["名声のある、一流の"], related: ["prestige 名 名声"] }
        ]
      },
      {
        id: 70,
        en: "He dropped out of college in his sophomore year to pursue his startup idea.",
        ja: "彼は大学2年の時にスタートアップのアイデアを追求するため中退した。",
        words: [
          { word: "drop out of", phonetic: "", pos: "動", meanings: ["〜を中退する"], related: ["dropout 名 中退者"] },
          { word: "sophomore", phonetic: "sɑ́fəmɔ̀ːr", pos: "名", meanings: ["2年生"], related: ["freshman 1年生", "junior 3年生", "senior 4年生"] },
          { word: "pursue", phonetic: "pərsúː", pos: "動", meanings: ["追求する"], related: ["pursuit 名 追求"] }
        ]
      },
      {
        id: 71,
        en: "The curriculum was revised to include more practical, hands-on training.",
        ja: "カリキュラムがより実践的で体験型の訓練を含むよう改訂された。",
        words: [
          { word: "curriculum", phonetic: "kəríkjələm", pos: "名", meanings: ["カリキュラム、教育課程"], related: [] },
          { word: "revise", phonetic: "riváiz", pos: "動", meanings: ["改訂する、見直す"], related: ["revision 名 改訂"] },
          { word: "hands-on", phonetic: "", pos: "形", meanings: ["実践的な、体験型の"], related: ["⇔ theoretical 理論的な"] }
        ]
      },
      {
        id: 72,
        en: "Cramming the night before an exam is far less effective than studying consistently.",
        ja: "試験前夜の一夜漬けは、コツコツ勉強するよりはるかに効果が薄い。",
        words: [
          { word: "cram", phonetic: "krǽm", pos: "動", meanings: ["詰め込む、一夜漬けする"], related: [] },
          { word: "effective", phonetic: "iféktiv", pos: "形", meanings: ["効果的な"], related: ["effect 名 効果", "⇔ ineffective"] },
          { word: "consistently", phonetic: "kənsístəntli", pos: "副", meanings: ["一貫して、コツコツと"], related: ["consistent 形 一貫した"] }
        ]
      },
      {
        id: 73,
        en: "She obtained her master's degree in linguistics and went on to earn a doctorate.",
        ja: "彼女は言語学の修士号を取得し、さらに博士号を取った。",
        words: [
          { word: "obtain", phonetic: "əbtéin", pos: "動", meanings: ["取得する、手に入れる"], related: ["get/acquire"] },
          { word: "degree", phonetic: "digríː", pos: "名", meanings: ["学位、度"], related: ["bachelor's degree 学士号"] },
          { word: "linguistics", phonetic: "liŋgwístiks", pos: "名", meanings: ["言語学"], related: ["linguist 名 言語学者"] },
          { word: "doctorate", phonetic: "dɑ́ktərət", pos: "名", meanings: ["博士号"], related: ["Ph.D. 博士号"] }
        ]
      },
      {
        id: 74,
        en: "The professor assigned a lengthy essay on the causes of the French Revolution.",
        ja: "教授はフランス革命の原因についての長いエッセイを課した。",
        words: [
          { word: "assign", phonetic: "əsáin", pos: "動", meanings: ["割り当てる、課す"], related: ["assignment 名 課題、任務"] },
          { word: "lengthy", phonetic: "léŋkθi", pos: "形", meanings: ["長い、長々しい"], related: ["length 名 長さ"] }
        ]
      },
      {
        id: 75,
        en: "Tuition fees have risen sharply over the past decade, burdening many students with loans.",
        ja: "学費はこの10年で急激に上昇し、多くの学生がローンの負担を抱えている。",
        words: [
          { word: "tuition", phonetic: "tjuːíʃən", pos: "名", meanings: ["授業料"], related: ["tuition fee 学費"] },
          { word: "sharply", phonetic: "ʃɑ́ːrpli", pos: "副", meanings: ["急激に、鋭く"], related: ["sharp 形 鋭い"] },
          { word: "decade", phonetic: "dékeid", pos: "名", meanings: ["10年間"], related: [] },
          { word: "burden", phonetic: "bə́ːrdn", pos: "動", meanings: ["〜に負担をかける"], related: ["burden 名 負担"] }
        ]
      },
      {
        id: 76,
        en: "Critical thinking is an essential skill that every student should develop early on.",
        ja: "批判的思考は、すべての学生が早い段階で身につけるべき不可欠なスキルだ。",
        words: [
          { word: "critical thinking", phonetic: "", pos: "名", meanings: ["批判的思考"], related: ["critical 形 批判的な、重要な"] },
          { word: "essential", phonetic: "isénʃəl", pos: "形", meanings: ["不可欠な"], related: ["essence 名 本質"] }
        ]
      },
      {
        id: 77,
        en: "The seminar on artificial intelligence attracted students from various departments.",
        ja: "人工知能に関するセミナーはさまざまな学部の学生を引きつけた。",
        words: [
          { word: "seminar", phonetic: "sémənɑ̀ːr", pos: "名", meanings: ["セミナー、ゼミ"], related: [] },
          { word: "artificial intelligence", phonetic: "", pos: "名", meanings: ["人工知能（AI）"], related: [] },
          { word: "attract", phonetic: "ətrǽkt", pos: "動", meanings: ["引きつける"], related: ["attractive 形 魅力的な", "attraction 名 魅力"] },
          { word: "department", phonetic: "dipɑ́ːrtmənt", pos: "名", meanings: ["学部、部門"], related: [] }
        ]
      },
      {
        id: 78,
        en: "He plagiarized his entire thesis and was subsequently expelled from the university.",
        ja: "彼は論文全体を盗用し、その結果大学を退学させられた。",
        words: [
          { word: "plagiarize", phonetic: "pléidʒəràiz", pos: "動", meanings: ["盗用する"], related: ["plagiarism 名 盗用"] },
          { word: "thesis", phonetic: "θíːsis", pos: "名", meanings: ["論文、学位論文"], related: ["dissertation 名 博士論文"] },
          { word: "subsequently", phonetic: "sʌ́bsikwəntli", pos: "副", meanings: ["その後"], related: ["subsequent 形 その後の"] },
          { word: "expel", phonetic: "ikspél", pos: "動", meanings: ["退学させる、追放する"], related: ["expulsion 名 追放"] }
        ]
      }
    ]
  },
  {
    section: 9,
    title: "Crime & Law",
    sentences: [
      {
        id: 79,
        en: "The suspect was arrested on charges of robbery and taken into custody.",
        ja: "容疑者は強盗の容疑で逮捕され、拘留された。",
        words: [
          { word: "suspect", phonetic: "sʌ́spekt", pos: "名", meanings: ["容疑者"], related: ["suspect 動 〜を疑う", "suspicion 名 疑い", "suspicious 形 疑わしい"] },
          { word: "arrest", phonetic: "ərést", pos: "動", meanings: ["逮捕する"], related: ["arrest 名 逮捕", "under arrest 逮捕されて"] },
          { word: "charge", phonetic: "tʃɑ́ːrdʒ", pos: "名", meanings: ["容疑、告訴", "料金"], related: ["on charges of 〜の容疑で", "charge 動 告訴する、請求する"] },
          { word: "robbery", phonetic: "rɑ́bəri", pos: "名", meanings: ["強盗"], related: ["rob 動 強奪する", "robber 名 強盗犯"] },
          { word: "custody", phonetic: "kʌ́stədi", pos: "名", meanings: ["拘留、保護", "親権"], related: ["take into custody 拘留する"] }
        ]
      },
      {
        id: 80,
        en: "The jury found the defendant guilty of fraud after a lengthy trial.",
        ja: "長い裁判の末、陪審員は被告に詐欺の有罪判決を下した。",
        words: [
          { word: "jury", phonetic: "dʒúəri", pos: "名", meanings: ["陪審（員）"], related: ["juror 名 陪審員"] },
          { word: "defendant", phonetic: "diféndənt", pos: "名", meanings: ["被告"], related: ["defend 動 弁護する、守る", "⇔ plaintiff 原告"] },
          { word: "guilty", phonetic: "gílti", pos: "形", meanings: ["有罪の"], related: ["⇔ innocent/not guilty 無罪の", "guilt 名 有罪、罪悪感"] },
          { word: "fraud", phonetic: "frɔ́ːd", pos: "名", meanings: ["詐欺"], related: ["fraudulent 形 詐欺の"] },
          { word: "trial", phonetic: "tráiəl", pos: "名", meanings: ["裁判、公判", "試み"], related: ["stand trial 裁判にかけられる"] }
        ]
      },
      {
        id: 81,
        en: "Shoplifting may seem like a petty offense, but it carries serious legal consequences.",
        ja: "万引きは軽い犯罪に思えるかもしれないが、重大な法的結果を伴う。",
        words: [
          { word: "shoplifting", phonetic: "ʃɑ́plìftiŋ", pos: "名", meanings: ["万引き"], related: ["shoplift 動 万引きする", "shoplifter 名 万引き犯"] },
          { word: "petty", phonetic: "péti", pos: "形", meanings: ["軽微な、小さな", "くだらない"], related: ["petty crime 軽犯罪"] },
          { word: "offense", phonetic: "əféns", pos: "名", meanings: ["犯罪、違反", "侮辱"], related: ["offend 動 怒らせる", "offender 名 犯罪者"] },
          { word: "consequence", phonetic: "kɑ́nsəkwèns", pos: "名", meanings: ["結果、影響"], related: ["consequently 副 その結果"] }
        ]
      },
      {
        id: 82,
        en: "The attorney argued that the evidence was insufficient to convict his client.",
        ja: "弁護士は、依頼人を有罪にするには証拠が不十分であると主張した。",
        words: [
          { word: "attorney", phonetic: "ətə́ːrni", pos: "名", meanings: ["弁護士"], related: ["lawyer/counsel"] },
          { word: "argue", phonetic: "ɑ́ːrgjuː", pos: "動", meanings: ["主張する、議論する"], related: ["argument 名 議論、主張"] },
          { word: "evidence", phonetic: "évədəns", pos: "名", meanings: ["証拠"], related: ["evident 形 明白な"] },
          { word: "insufficient", phonetic: "ìnsəfíʃənt", pos: "形", meanings: ["不十分な"], related: ["⇔ sufficient 十分な"] },
          { word: "convict", phonetic: "kənvíkt", pos: "動", meanings: ["有罪と判決する"], related: ["conviction 名 有罪判決、信念", "convict 名 受刑者"] }
        ]
      },
      {
        id: 83,
        en: "Witnesses testified that the accused had been at the scene of the crime.",
        ja: "目撃者たちは、被告人が犯行現場にいたと証言した。",
        words: [
          { word: "witness", phonetic: "wítnəs", pos: "名", meanings: ["目撃者、証人"], related: ["witness 動 目撃する"] },
          { word: "testify", phonetic: "téstəfài", pos: "動", meanings: ["証言する"], related: ["testimony 名 証言"] },
          { word: "accused", phonetic: "əkjúːzd", pos: "名", meanings: ["被告人"], related: ["accuse 動 告発する", "accusation 名 告発"] },
          { word: "scene", phonetic: "síːn", pos: "名", meanings: ["現場、場面"], related: ["scenery 名 風景"] }
        ]
      },
      {
        id: 84,
        en: "The criminal was sentenced to ten years in prison for armed assault.",
        ja: "その犯罪者は武装暴行の罪で10年の禁固刑を言い渡された。",
        words: [
          { word: "criminal", phonetic: "krímənl", pos: "名", meanings: ["犯罪者"], related: ["criminal 形 犯罪の", "crime 名 犯罪"] },
          { word: "sentence", phonetic: "séntəns", pos: "動", meanings: ["〜に判決を下す"], related: ["sentence 名 判決、文"] },
          { word: "prison", phonetic: "prízn", pos: "名", meanings: ["刑務所"], related: ["prisoner 名 囚人", "imprison 動 投獄する"] },
          { word: "assault", phonetic: "əsɔ́ːlt", pos: "名", meanings: ["暴行、攻撃"], related: ["assault 動 暴行する"] }
        ]
      },
      {
        id: 85,
        en: "The detective investigated the burglary and found crucial clues at the site.",
        ja: "刑事がその窃盗事件を捜査し、現場で重要な手がかりを見つけた。",
        words: [
          { word: "detective", phonetic: "ditéktiv", pos: "名", meanings: ["刑事、探偵"], related: ["detect 動 発見する", "detection 名 発見"] },
          { word: "investigate", phonetic: "invéstigèit", pos: "動", meanings: ["捜査する、調査する"], related: ["investigation 名 捜査", "investigator 名 捜査官"] },
          { word: "burglary", phonetic: "bə́ːrgləri", pos: "名", meanings: ["窃盗、空き巣"], related: ["burglar 名 泥棒"] },
          { word: "crucial", phonetic: "krúːʃəl", pos: "形", meanings: ["極めて重要な"], related: ["critical/vital/essential"] },
          { word: "clue", phonetic: "klúː", pos: "名", meanings: ["手がかり"], related: ["hint/lead"] }
        ]
      },
      {
        id: 86,
        en: "Cybercrime is on the rise, and identity theft has become a widespread threat.",
        ja: "サイバー犯罪は増加しており、個人情報の盗用は広範な脅威となっている。",
        words: [
          { word: "cybercrime", phonetic: "sáibərkràim", pos: "名", meanings: ["サイバー犯罪"], related: ["cyber 形 サイバーの"] },
          { word: "on the rise", phonetic: "", pos: "副", meanings: ["増加して"], related: ["increasing/growing"] },
          { word: "identity theft", phonetic: "", pos: "名", meanings: ["個人情報の盗用、なりすまし犯罪"], related: ["identity 名 身元、身分"] },
          { word: "widespread", phonetic: "wáidsprèd", pos: "形", meanings: ["広範な"], related: ["prevalent/extensive"] },
          { word: "threat", phonetic: "θrét", pos: "名", meanings: ["脅威"], related: ["threaten 動 脅かす", "threatening 形 脅迫的な"] }
        ]
      },
      {
        id: 87,
        en: "The judge dismissed the case due to a lack of credible testimony.",
        ja: "信頼できる証言が不足しているため、裁判官はその訴えを棄却した。",
        words: [
          { word: "judge", phonetic: "dʒʌ́dʒ", pos: "名", meanings: ["裁判官"], related: ["judge 動 判断する", "judgment 名 判決、判断"] },
          { word: "dismiss", phonetic: "dismís", pos: "動", meanings: ["棄却する、解雇する"], related: ["dismissal 名 棄却、解雇"] },
          { word: "case", phonetic: "kéis", pos: "名", meanings: ["訴訟、事件", "場合"], related: ["in case of 〜の場合には"] },
          { word: "credible", phonetic: "krédəbl", pos: "形", meanings: ["信頼できる"], related: ["credibility 名 信頼性", "⇔ incredible 信じがたい"] }
        ]
      },
      {
        id: 88,
        en: "Smuggling illegal goods across the border is punishable by heavy fines or imprisonment.",
        ja: "国境を越えて違法品を密輸することは、高額の罰金または禁固刑に処される。",
        words: [
          { word: "smuggling", phonetic: "smʌ́gliŋ", pos: "名", meanings: ["密輸"], related: ["smuggle 動 密輸する", "smuggler 名 密輸者"] },
          { word: "illegal", phonetic: "ilíːgəl", pos: "形", meanings: ["違法な"], related: ["⇔ legal 合法な", "illegally 副 違法に"] },
          { word: "border", phonetic: "bɔ́ːrdər", pos: "名", meanings: ["国境、境界"], related: ["boundary 名 境界線"] },
          { word: "punishable", phonetic: "pʌ́niʃəbl", pos: "形", meanings: ["罰せられうる"], related: ["punish 動 罰する", "punishment 名 罰"] },
          { word: "imprisonment", phonetic: "imprízənmənt", pos: "名", meanings: ["禁固刑、投獄"], related: ["imprison 動 投獄する"] }
        ]
      },
      {
        id: 89,
        en: "The victim filed a lawsuit against the company for negligence.",
        ja: "被害者は過失を理由にその会社を相手に訴訟を起こした。",
        words: [
          { word: "victim", phonetic: "víktim", pos: "名", meanings: ["被害者"], related: ["victimize 動 被害を与える"] },
          { word: "file", phonetic: "fáil", pos: "動", meanings: ["提出する、申請する"], related: ["file a lawsuit 訴訟を起こす"] },
          { word: "lawsuit", phonetic: "lɔ́ːsùːt", pos: "名", meanings: ["訴訟"], related: ["sue 動 訴える"] },
          { word: "negligence", phonetic: "néglidʒəns", pos: "名", meanings: ["過失、怠慢"], related: ["negligent 形 怠慢な", "neglect 動 怠る"] }
        ]
      }
    ]
  },
  {
    section: 10,
    title: "Politics & Government",
    sentences: [
      {
        id: 90,
        en: "The candidate delivered a compelling speech and won the election by a narrow margin.",
        ja: "その候補者は説得力のある演説を行い、僅差で選挙に勝利した。",
        words: [
          { word: "candidate", phonetic: "kǽndidèit", pos: "名", meanings: ["候補者"], related: ["candidacy 名 立候補"] },
          { word: "deliver", phonetic: "dilívər", pos: "動", meanings: ["（演説を）行う", "配達する"], related: ["delivery 名 配達"] },
          { word: "compelling", phonetic: "kəmpéliŋ", pos: "形", meanings: ["説得力のある、抗しがたい"], related: ["compel 動 強いる"] },
          { word: "election", phonetic: "ilékʃən", pos: "名", meanings: ["選挙"], related: ["elect 動 選出する", "electoral 形 選挙の"] },
          { word: "margin", phonetic: "mɑ́ːrdʒin", pos: "名", meanings: ["差、余裕", "余白"], related: ["marginal 形 わずかな"] }
        ]
      },
      {
        id: 91,
        en: "Congress passed a new bill aimed at reducing income inequality.",
        ja: "議会は所得格差の是正を目的とした新しい法案を可決した。",
        words: [
          { word: "Congress", phonetic: "kɑ́ŋgrəs", pos: "名", meanings: ["（米国の）議会"], related: ["congressman 名 議員"] },
          { word: "pass", phonetic: "pǽs", pos: "動", meanings: ["（法案を）可決する", "通過する"], related: [] },
          { word: "bill", phonetic: "bíl", pos: "名", meanings: ["法案", "請求書", "紙幣"], related: [] },
          { word: "aim at", phonetic: "éim", pos: "動", meanings: ["〜を目指す"], related: ["aim 名 目的"] },
          { word: "inequality", phonetic: "ìnikwɑ́ləti", pos: "名", meanings: ["不平等、格差"], related: ["⇔ equality 平等"] }
        ]
      },
      {
        id: 92,
        en: "The president vetoed the legislation, sparking a heated debate among lawmakers.",
        ja: "大統領がその法律に拒否権を行使し、議員たちの間で激しい議論が起こった。",
        words: [
          { word: "veto", phonetic: "víːtou", pos: "動", meanings: ["拒否権を行使する"], related: ["veto 名 拒否権"] },
          { word: "legislation", phonetic: "lèdʒisléiʃən", pos: "名", meanings: ["法律、立法"], related: ["legislator 名 立法者", "legislature 名 立法府"] },
          { word: "spark", phonetic: "spɑ́ːrk", pos: "動", meanings: ["引き起こす"], related: ["spark 名 火花"] },
          { word: "debate", phonetic: "dibéit", pos: "名", meanings: ["討論、議論"], related: ["debate 動 討論する"] },
          { word: "lawmaker", phonetic: "lɔ́ːmèikər", pos: "名", meanings: ["議員、立法者"], related: ["legislator 名 立法者"] }
        ]
      },
      {
        id: 93,
        en: "Diplomats from both nations gathered to negotiate a ceasefire agreement.",
        ja: "両国の外交官が停戦協定の交渉のために集まった。",
        words: [
          { word: "diplomat", phonetic: "dípləmæ̀t", pos: "名", meanings: ["外交官"], related: ["diplomacy 名 外交", "diplomatic 形 外交の"] },
          { word: "negotiate", phonetic: "nigóuʃièit", pos: "動", meanings: ["交渉する"], related: ["negotiation 名 交渉"] },
          { word: "ceasefire", phonetic: "síːsfàiər", pos: "名", meanings: ["停戦"], related: ["cease 動 やめる"] }
        ]
      },
      {
        id: 94,
        en: "The mayor announced a new policy to tackle corruption within the administration.",
        ja: "市長は行政内の汚職に取り組む新しい政策を発表した。",
        words: [
          { word: "mayor", phonetic: "méiər", pos: "名", meanings: ["市長"], related: [] },
          { word: "policy", phonetic: "pɑ́ləsi", pos: "名", meanings: ["政策、方針"], related: ["foreign policy 外交政策"] },
          { word: "tackle", phonetic: "tǽkl", pos: "動", meanings: ["（問題に）取り組む"], related: ["address/deal with"] },
          { word: "corruption", phonetic: "kərʌ́pʃən", pos: "名", meanings: ["汚職、腐敗"], related: ["corrupt 形 腐敗した", "corrupt 動 堕落させる"] },
          { word: "administration", phonetic: "ædmìnistréiʃən", pos: "名", meanings: ["行政、政権"], related: ["administer 動 管理する", "administrative 形 行政の"] }
        ]
      },
      {
        id: 95,
        en: "Citizens have the right to petition the government for reforms.",
        ja: "市民には政府に改革を請願する権利がある。",
        words: [
          { word: "citizen", phonetic: "sítəzn", pos: "名", meanings: ["市民、国民"], related: ["citizenship 名 市民権"] },
          { word: "petition", phonetic: "pətíʃən", pos: "動", meanings: ["請願する"], related: ["petition 名 請願書"] },
          { word: "reform", phonetic: "rifɔ́ːrm", pos: "名", meanings: ["改革"], related: ["reform 動 改革する", "reformer 名 改革者"] }
        ]
      },
      {
        id: 96,
        en: "The opposition party accused the ruling coalition of abusing its authority.",
        ja: "野党は与党連合が権力を乱用していると非難した。",
        words: [
          { word: "opposition", phonetic: "ɑ̀pəzíʃən", pos: "名", meanings: ["野党、反対"], related: ["oppose 動 反対する", "opponent 名 相手"] },
          { word: "ruling", phonetic: "rúːliŋ", pos: "形", meanings: ["与党の、支配する"], related: ["rule 動 統治する"] },
          { word: "coalition", phonetic: "kòuəlíʃən", pos: "名", meanings: ["連合、連立"], related: ["alliance 名 同盟"] },
          { word: "abuse", phonetic: "əbjúːz", pos: "動", meanings: ["乱用する、虐待する"], related: ["abuse 名 乱用、虐待"] },
          { word: "authority", phonetic: "əθɔ́ːrəti", pos: "名", meanings: ["権力、権限", "当局"], related: ["authorize 動 認可する"] }
        ]
      },
      {
        id: 97,
        en: "A referendum was held to determine whether the region should become autonomous.",
        ja: "その地域が自治権を持つべきかを決めるため、住民投票が行われた。",
        words: [
          { word: "referendum", phonetic: "rèfəréndəm", pos: "名", meanings: ["国民投票、住民投票"], related: ["plebiscite 名 国民投票"] },
          { word: "determine", phonetic: "ditə́ːrmin", pos: "動", meanings: ["決定する"], related: ["determination 名 決意、決定"] },
          { word: "region", phonetic: "ríːdʒən", pos: "名", meanings: ["地域"], related: ["regional 形 地域の"] },
          { word: "autonomous", phonetic: "ɔːtɑ́nəməs", pos: "形", meanings: ["自治の、自律した"], related: ["autonomy 名 自治権"] }
        ]
      },
      {
        id: 98,
        en: "The regime suppressed freedom of the press and detained several journalists.",
        ja: "その政権は報道の自由を弾圧し、数名のジャーナリストを拘束した。",
        words: [
          { word: "regime", phonetic: "reʒíːm", pos: "名", meanings: ["政権、体制"], related: [] },
          { word: "suppress", phonetic: "səprés", pos: "動", meanings: ["弾圧する、抑える"], related: ["suppression 名 弾圧"] },
          { word: "freedom of the press", phonetic: "", pos: "名", meanings: ["報道の自由"], related: ["freedom of speech 言論の自由"] },
          { word: "detain", phonetic: "ditéin", pos: "動", meanings: ["拘束する、留置する"], related: ["detention 名 拘留"] }
        ]
      },
      {
        id: 99,
        en: "Voter turnout in the municipal election was disappointingly low this year.",
        ja: "今年の市議会選挙の投票率は期待外れに低かった。",
        words: [
          { word: "voter", phonetic: "vóutər", pos: "名", meanings: ["有権者"], related: ["vote 動 投票する", "vote 名 投票"] },
          { word: "turnout", phonetic: "tə́ːrnaut", pos: "名", meanings: ["投票率、参加者数"], related: [] },
          { word: "municipal", phonetic: "mjuːnísəpəl", pos: "形", meanings: ["市の、地方自治体の"], related: ["municipality 名 自治体"] },
          { word: "disappointingly", phonetic: "dìsəpɔ́intiŋli", pos: "副", meanings: ["期待外れに"], related: ["disappoint 動 がっかりさせる", "disappointment 名 失望"] }
        ]
      },
      {
        id: 100,
        en: "The treaty was ratified by all member states after months of deliberation.",
        ja: "数か月の審議を経て、条約は全加盟国により批准された。",
        words: [
          { word: "treaty", phonetic: "tríːti", pos: "名", meanings: ["条約"], related: ["peace treaty 平和条約"] },
          { word: "ratify", phonetic: "rǽtəfài", pos: "動", meanings: ["批准する"], related: ["ratification 名 批准"] },
          { word: "member state", phonetic: "", pos: "名", meanings: ["加盟国"], related: [] },
          { word: "deliberation", phonetic: "dilìbəréiʃən", pos: "名", meanings: ["審議、熟考"], related: ["deliberate 形 意図的な", "deliberate 動 熟慮する"] }
        ]
      }
    ]
  },
  {
    section: 11,
    title: "Nature & Environment",
    sentences: [
      {
        id: 101,
        en: "Deforestation in tropical regions has accelerated the loss of biodiversity.",
        ja: "熱帯地域の森林伐採が生物多様性の喪失を加速させている。",
        words: [
          { word: "deforestation", phonetic: "dìːfɔ̀ristéiʃən", pos: "名", meanings: ["森林伐採"], related: ["forest 名 森林"] },
          { word: "tropical", phonetic: "trɑ́pikəl", pos: "形", meanings: ["熱帯の"], related: ["tropics 名 熱帯地方"] },
          { word: "accelerate", phonetic: "æksélərèit", pos: "動", meanings: ["加速させる"], related: ["acceleration 名 加速"] },
          { word: "biodiversity", phonetic: "bàioudəvə́ːrsəti", pos: "名", meanings: ["生物多様性"], related: ["diversity 名 多様性"] }
        ]
      },
      {
        id: 102,
        en: "The volcano erupted violently, forcing thousands of residents to evacuate.",
        ja: "火山が激しく噴火し、数千人の住民が避難を余儀なくされた。",
        words: [
          { word: "volcano", phonetic: "vɑlkéinou", pos: "名", meanings: ["火山"], related: ["volcanic 形 火山の"] },
          { word: "erupt", phonetic: "irʌ́pt", pos: "動", meanings: ["噴火する、勃発する"], related: ["eruption 名 噴火"] },
          { word: "violently", phonetic: "váiələntli", pos: "副", meanings: ["激しく"], related: ["violent 形 激しい", "violence 名 暴力"] },
          { word: "evacuate", phonetic: "ivǽkjuèit", pos: "動", meanings: ["避難する、避難させる"], related: ["evacuation 名 避難"] }
        ]
      },
      {
        id: 103,
        en: "Greenhouse gas emissions are the primary cause of global warming.",
        ja: "温室効果ガスの排出が地球温暖化の主要な原因である。",
        words: [
          { word: "greenhouse gas", phonetic: "", pos: "名", meanings: ["温室効果ガス"], related: ["greenhouse effect 温室効果"] },
          { word: "emission", phonetic: "imíʃən", pos: "名", meanings: ["排出、排出物"], related: ["emit 動 排出する"] },
          { word: "primary", phonetic: "práiməri", pos: "形", meanings: ["主要な、最も重要な"], related: ["primarily 副 主に"] },
          { word: "global warming", phonetic: "", pos: "名", meanings: ["地球温暖化"], related: ["climate change 気候変動"] }
        ]
      },
      {
        id: 104,
        en: "The drought devastated crops across the entire continent last summer.",
        ja: "昨夏の干ばつは大陸全体の農作物に壊滅的な被害を与えた。",
        words: [
          { word: "drought", phonetic: "dráut", pos: "名", meanings: ["干ばつ"], related: ["⇔ flood 洪水"] },
          { word: "devastate", phonetic: "dévəstèit", pos: "動", meanings: ["壊滅させる"], related: ["devastating 形 壊滅的な", "devastation 名 壊滅"] },
          { word: "crop", phonetic: "krɑ́p", pos: "名", meanings: ["農作物"], related: ["harvest 名 収穫"] },
          { word: "continent", phonetic: "kɑ́ntənənt", pos: "名", meanings: ["大陸"], related: ["continental 形 大陸の"] }
        ]
      },
      {
        id: 105,
        en: "Renewable energy sources such as solar and wind power are essential for sustainability.",
        ja: "太陽光や風力などの再生可能エネルギーは持続可能性に不可欠だ。",
        words: [
          { word: "renewable", phonetic: "rinjúːəbl", pos: "形", meanings: ["再生可能な"], related: ["⇔ nonrenewable 再生不可能な", "renew 動 更新する"] },
          { word: "solar", phonetic: "sóulər", pos: "形", meanings: ["太陽の"], related: ["solar panel 太陽光パネル"] },
          { word: "sustainability", phonetic: "səstèinəbíləti", pos: "名", meanings: ["持続可能性"], related: ["sustainable 形 持続可能な", "sustain 動 維持する"] }
        ]
      },
      {
        id: 106,
        en: "Several species of marine life are on the verge of extinction due to ocean pollution.",
        ja: "海洋汚染のため、いくつかの海洋生物の種が絶滅の瀬戸際にある。",
        words: [
          { word: "species", phonetic: "spíːʃiːz", pos: "名", meanings: ["種（単複同形）"], related: [] },
          { word: "marine", phonetic: "məríːn", pos: "形", meanings: ["海の、海洋の"], related: ["marine life 海洋生物"] },
          { word: "on the verge of", phonetic: "", pos: "副", meanings: ["〜の瀬戸際に"], related: ["on the brink of 〜の瀬戸際に"] },
          { word: "extinction", phonetic: "ikstiŋkʃən", pos: "名", meanings: ["絶滅"], related: ["extinct 形 絶滅した"] },
          { word: "pollution", phonetic: "pəlúːʃən", pos: "名", meanings: ["汚染"], related: ["pollute 動 汚染する", "pollutant 名 汚染物質"] }
        ]
      },
      {
        id: 107,
        en: "The earthquake measured 7.2 on the Richter scale and triggered a massive tsunami.",
        ja: "その地震はリヒタースケールで7.2を記録し、大規模な津波を引き起こした。",
        words: [
          { word: "earthquake", phonetic: "ə́ːrθkwèik", pos: "名", meanings: ["地震"], related: ["quake 名 地震"] },
          { word: "measure", phonetic: "méʒər", pos: "動", meanings: ["測定する、〜を示す"], related: ["measurement 名 測定"] },
          { word: "trigger", phonetic: "trígər", pos: "動", meanings: ["引き起こす"], related: ["trigger 名 引き金、きっかけ"] },
          { word: "massive", phonetic: "mǽsiv", pos: "形", meanings: ["大規模な、巨大な"], related: ["mass 名 大量、塊"] }
        ]
      },
      {
        id: 108,
        en: "Conservation efforts have helped restore the population of several endangered animals.",
        ja: "保全活動のおかげで、いくつかの絶滅危惧種の個体数が回復した。",
        words: [
          { word: "conservation", phonetic: "kɑ̀nsərvéiʃən", pos: "名", meanings: ["保全、保護"], related: ["conserve 動 保護する", "conservative 形 保守的な"] },
          { word: "restore", phonetic: "ristɔ́ːr", pos: "動", meanings: ["回復する、修復する"], related: ["restoration 名 回復、修復"] },
          { word: "population", phonetic: "pɑ̀pjuléiʃən", pos: "名", meanings: ["個体数、人口"], related: ["populate 動 居住する"] },
          { word: "endangered", phonetic: "indéindʒərd", pos: "形", meanings: ["絶滅危惧の"], related: ["endanger 動 危険にさらす"] }
        ]
      },
      {
        id: 109,
        en: "Illegal dumping of toxic waste into rivers poses a grave risk to public health.",
        ja: "河川への有害廃棄物の不法投棄は、公衆衛生に深刻なリスクをもたらす。",
        words: [
          { word: "dump", phonetic: "dʌ́mp", pos: "動", meanings: ["投棄する、捨てる"], related: ["dump 名 ゴミ捨て場"] },
          { word: "toxic", phonetic: "tɑ́ksik", pos: "形", meanings: ["有毒な"], related: ["toxin 名 毒素"] },
          { word: "waste", phonetic: "wéist", pos: "名", meanings: ["廃棄物、ゴミ"], related: ["waste 動 浪費する"] },
          { word: "pose", phonetic: "póuz", pos: "動", meanings: ["（問題・脅威を）もたらす"], related: [] },
          { word: "grave", phonetic: "gréiv", pos: "形", meanings: ["深刻な、重大な"], related: ["grave 名 墓"] }
        ]
      },
      {
        id: 110,
        en: "Coral reefs are declining rapidly as ocean temperatures continue to climb.",
        ja: "海水温が上昇し続ける中、サンゴ礁は急速に減少している。",
        words: [
          { word: "coral reef", phonetic: "kɔ́ːrəl ríːf", pos: "名", meanings: ["サンゴ礁"], related: ["coral 名 サンゴ"] },
          { word: "decline", phonetic: "dikláin", pos: "動", meanings: ["減少する、衰退する"], related: ["decline 名 減少、衰退"] },
          { word: "rapidly", phonetic: "rǽpidli", pos: "副", meanings: ["急速に"], related: ["rapid 形 急速な"] },
          { word: "temperature", phonetic: "témpərətʃər", pos: "名", meanings: ["温度、気温"], related: [] }
        ]
      },
      {
        id: 111,
        en: "The glacier has shrunk by nearly forty percent over the past century.",
        ja: "その氷河は過去1世紀の間にほぼ40パーセント縮小した。",
        words: [
          { word: "glacier", phonetic: "gléiʃər", pos: "名", meanings: ["氷河"], related: ["glacial 形 氷河の"] },
          { word: "shrink", phonetic: "ʃríŋk", pos: "動", meanings: ["縮む、小さくなる"], related: ["shrinkage 名 縮小"] },
          { word: "percent", phonetic: "pərséns", pos: "名", meanings: ["パーセント"], related: ["percentage 名 割合"] },
          { word: "century", phonetic: "séntʃəri", pos: "名", meanings: ["世紀、100年"], related: [] }
        ]
      }
    ]
  },
  {
    section: 12,
    title: "Science & Technology",
    sentences: [
      {
        id: 112,
        en: "The researchers conducted an experiment to test the hypothesis about cell growth.",
        ja: "研究者たちは細胞の成長に関する仮説を検証する実験を行った。",
        words: [
          { word: "researcher", phonetic: "risə́ːrtʃər", pos: "名", meanings: ["研究者"], related: ["research 名 研究"] },
          { word: "conduct", phonetic: "kəndʌ́kt", pos: "動", meanings: ["（実験・調査を）行う"], related: ["conduct 名 行動"] },
          { word: "experiment", phonetic: "ikspérəmənt", pos: "名", meanings: ["実験"], related: ["experimental 形 実験的な"] },
          { word: "hypothesis", phonetic: "haipɑ́θəsis", pos: "名", meanings: ["仮説"], related: ["hypothetical 形 仮説の", "hypothesize 動 仮説を立てる"] },
          { word: "cell", phonetic: "sél", pos: "名", meanings: ["細胞", "電池"], related: ["cellular 形 細胞の"] }
        ]
      },
      {
        id: 113,
        en: "Advances in genetic engineering have opened up new possibilities in medicine.",
        ja: "遺伝子工学の進歩が医療に新たな可能性を開いた。",
        words: [
          { word: "advance", phonetic: "ədvǽns", pos: "名", meanings: ["進歩、前進"], related: ["advanced 形 先進的な"] },
          { word: "genetic", phonetic: "dʒənétik", pos: "形", meanings: ["遺伝子の"], related: ["gene 名 遺伝子", "genetics 名 遺伝学"] },
          { word: "engineering", phonetic: "èndʒəníəriŋ", pos: "名", meanings: ["工学"], related: ["engineer 名 技術者"] },
          { word: "possibility", phonetic: "pɑ̀səbíləti", pos: "名", meanings: ["可能性"], related: ["possible 形 可能な"] }
        ]
      },
      {
        id: 114,
        en: "The satellite was launched into orbit to gather data on atmospheric conditions.",
        ja: "大気の状態に関するデータを収集するため、衛星が軌道に打ち上げられた。",
        words: [
          { word: "satellite", phonetic: "sǽtəlàit", pos: "名", meanings: ["衛星"], related: [] },
          { word: "orbit", phonetic: "ɔ́ːrbit", pos: "名", meanings: ["軌道"], related: ["orbit 動 軌道を回る", "orbital 形 軌道の"] },
          { word: "gather", phonetic: "gǽðər", pos: "動", meanings: ["集める、収集する"], related: ["gathering 名 集会"] },
          { word: "atmospheric", phonetic: "æ̀tməsférik", pos: "形", meanings: ["大気の"], related: ["atmosphere 名 大気、雰囲気"] }
        ]
      },
      {
        id: 115,
        en: "Quantum computing could revolutionize the way we process complex calculations.",
        ja: "量子コンピューティングは複雑な計算の処理方法に革命をもたらしうる。",
        words: [
          { word: "quantum", phonetic: "kwɑ́ntəm", pos: "形", meanings: ["量子の"], related: ["quantum physics 量子物理学"] },
          { word: "computing", phonetic: "kəmpjúːtiŋ", pos: "名", meanings: ["コンピューティング、計算処理"], related: ["compute 動 計算する", "computer 名 コンピュータ"] },
          { word: "revolutionize", phonetic: "rèvəlúːʃənàiz", pos: "動", meanings: ["革命をもたらす、一変させる"], related: ["revolution 名 革命"] },
          { word: "calculation", phonetic: "kæ̀lkjuléiʃən", pos: "名", meanings: ["計算"], related: ["calculate 動 計算する"] }
        ]
      },
      {
        id: 116,
        en: "The prototype failed during testing, so the engineers had to modify the design.",
        ja: "試験中にプロトタイプが故障したため、技術者は設計を修正しなければならなかった。",
        words: [
          { word: "prototype", phonetic: "próutətàip", pos: "名", meanings: ["試作品"], related: [] },
          { word: "fail", phonetic: "féil", pos: "動", meanings: ["失敗する、故障する"], related: ["failure 名 失敗"] },
          { word: "modify", phonetic: "mɑ́dəfài", pos: "動", meanings: ["修正する、変更する"], related: ["modification 名 修正"] },
          { word: "design", phonetic: "dizáin", pos: "名", meanings: ["設計、デザイン"], related: ["design 動 設計する", "designer 名 デザイナー"] }
        ]
      },
      {
        id: 117,
        en: "The algorithm analyzes vast amounts of data to detect patterns invisible to humans.",
        ja: "そのアルゴリズムは人間には見えないパターンを検出するため膨大なデータを分析する。",
        words: [
          { word: "algorithm", phonetic: "ǽlgərìðm", pos: "名", meanings: ["アルゴリズム"], related: [] },
          { word: "analyze", phonetic: "ǽnəlàiz", pos: "動", meanings: ["分析する"], related: ["analysis 名 分析", "analyst 名 分析家"] },
          { word: "vast", phonetic: "vǽst", pos: "形", meanings: ["膨大な、広大な"], related: ["enormous/immense/huge"] },
          { word: "detect", phonetic: "ditékt", pos: "動", meanings: ["検出する、見つける"], related: ["detection 名 検出", "detector 名 検出器"] },
          { word: "invisible", phonetic: "invízəbl", pos: "形", meanings: ["目に見えない"], related: ["⇔ visible 見える"] }
        ]
      },
      {
        id: 118,
        en: "The pharmaceutical company developed a vaccine that proved highly effective in clinical trials.",
        ja: "その製薬会社は臨床試験で高い有効性が証明されたワクチンを開発した。",
        words: [
          { word: "pharmaceutical", phonetic: "fɑ̀ːrməsúːtikəl", pos: "形", meanings: ["製薬の"], related: ["pharmacy 名 薬局", "pharmacist 名 薬剤師"] },
          { word: "develop", phonetic: "divéləp", pos: "動", meanings: ["開発する、発展させる"], related: ["development 名 開発"] },
          { word: "vaccine", phonetic: "højksiːn", pos: "名", meanings: ["ワクチン"], related: ["vaccination 名 予防接種", "vaccinate 動 予防接種する"] },
          { word: "clinical", phonetic: "klínikəl", pos: "形", meanings: ["臨床の"], related: ["clinic 名 診療所"] }
        ]
      },
      {
        id: 119,
        en: "Robotics and automation are transforming manufacturing processes worldwide.",
        ja: "ロボット工学と自動化が世界中の製造工程を変革している。",
        words: [
          { word: "robotics", phonetic: "roubɑ́tiks", pos: "名", meanings: ["ロボット工学"], related: ["robot 名 ロボット"] },
          { word: "automation", phonetic: "ɔ̀ːtəméiʃən", pos: "名", meanings: ["自動化"], related: ["automate 動 自動化する", "automatic 形 自動の"] },
          { word: "transform", phonetic: "trænsfɔ́ːrm", pos: "動", meanings: ["変革する、変える"], related: ["transformation 名 変革"] },
          { word: "manufacturing", phonetic: "mæ̀njufǽktʃəriŋ", pos: "名", meanings: ["製造"], related: ["manufacture 動 製造する", "manufacturer 名 製造業者"] }
        ]
      },
      {
        id: 120,
        en: "The telescope enabled astronomers to observe a previously unknown phenomenon in deep space.",
        ja: "その望遠鏡のおかげで天文学者たちは深宇宙でこれまで知られていなかった現象を観測できた。",
        words: [
          { word: "telescope", phonetic: "téləskòup", pos: "名", meanings: ["望遠鏡"], related: [] },
          { word: "astronomer", phonetic: "əstrɑ́nəmər", pos: "名", meanings: ["天文学者"], related: ["astronomy 名 天文学", "astronomical 形 天文学の"] },
          { word: "observe", phonetic: "əbzə́ːrv", pos: "動", meanings: ["観測する、観察する"], related: ["observation 名 観察", "observatory 名 天文台"] },
          { word: "phenomenon", phonetic: "fənɑ́mənɑ̀n", pos: "名", meanings: ["現象"], related: ["phenomena 名 現象（複数形）"] }
        ]
      },
      {
        id: 121,
        en: "Artificial neural networks mimic the structure of the human brain to solve problems.",
        ja: "人工ニューラルネットワークは問題解決のために人間の脳の構造を模倣している。",
        words: [
          { word: "neural", phonetic: "njúərəl", pos: "形", meanings: ["神経の"], related: ["neuron 名 神経細胞", "neuroscience 名 神経科学"] },
          { word: "mimic", phonetic: "mímik", pos: "動", meanings: ["模倣する"], related: ["imitate/simulate"] },
          { word: "structure", phonetic: "strʌ́ktʃər", pos: "名", meanings: ["構造"], related: ["structural 形 構造の"] },
          { word: "brain", phonetic: "bréin", pos: "名", meanings: ["脳"], related: [] },
          { word: "solve", phonetic: "sɑ́lv", pos: "動", meanings: ["解決する"], related: ["solution 名 解決策"] }
        ]
      },
      {
        id: 122,
        en: "The discovery of a new antibiotic could potentially save millions of lives.",
        ja: "新しい抗生物質の発見は数百万の命を救う可能性がある。",
        words: [
          { word: "discovery", phonetic: "diskʌ́vəri", pos: "名", meanings: ["発見"], related: ["discover 動 発見する"] },
          { word: "antibiotic", phonetic: "æ̀ntibaiɑ́tik", pos: "名", meanings: ["抗生物質"], related: [] },
          { word: "potentially", phonetic: "pəténʃəli", pos: "副", meanings: ["潜在的に、〜しうる"], related: ["potential 形 潜在的な", "potential 名 可能性"] }
        ]
      }
    ]
  },
  {
    section: 13,
    title: "Media & Communication",
    sentences: [
      {
        id: 123,
        en: "The journalist exposed a major scandal that shook the entire industry.",
        ja: "そのジャーナリストは業界全体を揺るがす大スキャンダルを暴露した。",
        words: [
          { word: "journalist", phonetic: "dʒə́ːrnəlist", pos: "名", meanings: ["ジャーナリスト"], related: ["journalism 名 ジャーナリズム"] },
          { word: "expose", phonetic: "ikspóuz", pos: "動", meanings: ["暴露する、さらす"], related: ["exposure 名 暴露、露出"] },
          { word: "scandal", phonetic: "skǽndl", pos: "名", meanings: ["スキャンダル、不祥事"], related: ["scandalous 形 不祥事の"] }
        ]
      },
      {
        id: 124,
        en: "Social media platforms have become a powerful tool for spreading both information and misinformation.",
        ja: "ソーシャルメディアは情報と誤情報の両方を拡散する強力なツールとなった。",
        words: [
          { word: "platform", phonetic: "plǽtfɔ̀ːrm", pos: "名", meanings: ["プラットフォーム、基盤"], related: [] },
          { word: "powerful", phonetic: "páuərfəl", pos: "形", meanings: ["強力な"], related: ["power 名 力"] },
          { word: "spread", phonetic: "spréd", pos: "動", meanings: ["広める、広がる"], related: ["spread 名 拡散"] },
          { word: "misinformation", phonetic: "mìsinfərméiʃən", pos: "名", meanings: ["誤情報"], related: ["disinformation 名 偽情報（意図的）"] }
        ]
      },
      {
        id: 125,
        en: "The broadcast was watched by an estimated fifty million viewers worldwide.",
        ja: "その放送は推定5000万人の視聴者が世界中で視聴した。",
        words: [
          { word: "broadcast", phonetic: "brɔ́ːdkæ̀st", pos: "名", meanings: ["放送"], related: ["broadcast 動 放送する", "broadcaster 名 放送局"] },
          { word: "estimated", phonetic: "éstəmèitid", pos: "形", meanings: ["推定の"], related: ["estimate 動 推定する", "estimate 名 見積もり"] },
          { word: "viewer", phonetic: "vjúːər", pos: "名", meanings: ["視聴者"], related: ["view 動 見る"] }
        ]
      },
      {
        id: 126,
        en: "Censorship of online content remains a controversial issue in many countries.",
        ja: "ネット上のコンテンツの検閲は多くの国で依然として物議を醸す問題だ。",
        words: [
          { word: "censorship", phonetic: "sénsərʃip", pos: "名", meanings: ["検閲"], related: ["censor 動 検閲する", "censor 名 検閲官"] },
          { word: "content", phonetic: "kɑ́ntent", pos: "名", meanings: ["コンテンツ、内容"], related: ["content 形 満足した"] },
          { word: "controversial", phonetic: "kɑ̀ntrəvə́ːrʃəl", pos: "形", meanings: ["物議を醸す、論争の的の"], related: ["controversy 名 論争"] }
        ]
      },
      {
        id: 127,
        en: "The editorial criticized the government's lack of transparency regarding public spending.",
        ja: "その社説は公共支出に関する政府の透明性の欠如を批判した。",
        words: [
          { word: "editorial", phonetic: "èditɔ́ːriəl", pos: "名", meanings: ["社説"], related: ["editor 名 編集者", "edit 動 編集する"] },
          { word: "criticize", phonetic: "krítisàiz", pos: "動", meanings: ["批判する"], related: ["criticism 名 批判", "critic 名 批評家", "critical 形 批判的な"] },
          { word: "transparency", phonetic: "trænspǽrənsi", pos: "名", meanings: ["透明性"], related: ["transparent 形 透明な"] }
        ]
      },
      {
        id: 128,
        en: "The documentary shed light on the harsh realities faced by refugees.",
        ja: "そのドキュメンタリーは難民が直面する厳しい現実に光を当てた。",
        words: [
          { word: "documentary", phonetic: "dɑ̀kjuméntəri", pos: "名", meanings: ["ドキュメンタリー"], related: ["document 名 文書"] },
          { word: "shed light on", phonetic: "", pos: "動", meanings: ["〜を明らかにする、光を当てる"], related: [] },
          { word: "harsh", phonetic: "hɑ́ːrʃ", pos: "形", meanings: ["厳しい、過酷な"], related: ["severe/tough"] },
          { word: "refugee", phonetic: "rèfjudʒíː", pos: "名", meanings: ["難民"], related: ["refuge 名 避難所"] }
        ]
      },
      {
        id: 129,
        en: "Fake news spreads faster than verified facts, especially during election seasons.",
        ja: "偽ニュースは検証された事実よりも速く広がり、特に選挙期間中に顕著だ。",
        words: [
          { word: "fake", phonetic: "féik", pos: "形", meanings: ["偽の"], related: ["fake 名 偽物", "counterfeit 形 偽造の"] },
          { word: "verify", phonetic: "vérəfài", pos: "動", meanings: ["検証する、確認する"], related: ["verification 名 検証"] },
          { word: "especially", phonetic: "ispéʃəli", pos: "副", meanings: ["特に"], related: ["special 形 特別な"] }
        ]
      },
      {
        id: 130,
        en: "The podcast gained enormous popularity after featuring interviews with prominent scientists.",
        ja: "そのポッドキャストは著名な科学者へのインタビューを特集して大きな人気を得た。",
        words: [
          { word: "popularity", phonetic: "pɑ̀pjulǽrəti", pos: "名", meanings: ["人気"], related: ["popular 形 人気のある"] },
          { word: "feature", phonetic: "fíːtʃər", pos: "動", meanings: ["〜を特集する、〜を特徴とする"], related: ["feature 名 特徴、特集"] },
          { word: "prominent", phonetic: "prɑ́mənənt", pos: "形", meanings: ["著名な、目立つ"], related: ["prominence 名 著名さ"] }
        ]
      },
      {
        id: 131,
        en: "Subscribers receive a daily newsletter summarizing the latest headlines.",
        ja: "購読者は最新の見出しをまとめた日刊ニュースレターを受け取る。",
        words: [
          { word: "subscriber", phonetic: "səbskráibər", pos: "名", meanings: ["購読者、加入者"], related: ["subscribe 動 購読する", "subscription 名 購読"] },
          { word: "newsletter", phonetic: "njúːzlètər", pos: "名", meanings: ["ニュースレター"], related: [] },
          { word: "summarize", phonetic: "sʌ́məràiz", pos: "動", meanings: ["要約する"], related: ["summary 名 要約"] },
          { word: "headline", phonetic: "hédlàin", pos: "名", meanings: ["見出し"], related: ["make headlines ニュースになる"] }
        ]
      },
      {
        id: 132,
        en: "The anchor reported live from the scene of the natural disaster.",
        ja: "アンカーは自然災害の現場から生中継で報道した。",
        words: [
          { word: "anchor", phonetic: "ǽŋkər", pos: "名", meanings: ["（ニュースの）アンカー、司会者"], related: ["anchorman/anchorwoman"] },
          { word: "report", phonetic: "ripɔ́ːrt", pos: "動", meanings: ["報道する、報告する"], related: ["reporter 名 記者", "report 名 報告"] },
          { word: "live", phonetic: "láiv", pos: "副", meanings: ["生で、ライブで"], related: ["live 形 生放送の"] },
          { word: "disaster", phonetic: "dizǽstər", pos: "名", meanings: ["災害"], related: ["disastrous 形 壊滅的な"] }
        ]
      },
      {
        id: 133,
        en: "Media literacy is crucial for distinguishing reliable sources from propaganda.",
        ja: "メディアリテラシーは、信頼できる情報源とプロパガンダを区別するために不可欠だ。",
        words: [
          { word: "literacy", phonetic: "lítərəsi", pos: "名", meanings: ["リテラシー、読み書き能力"], related: ["literate 形 読み書きができる", "⇔ illiterate 形 読み書きができない"] },
          { word: "distinguish", phonetic: "distíŋgwiʃ", pos: "動", meanings: ["区別する"], related: ["distinction 名 区別"] },
          { word: "reliable", phonetic: "riláiəbl", pos: "形", meanings: ["信頼できる"], related: ["rely 動 頼る", "reliability 名 信頼性"] },
          { word: "propaganda", phonetic: "prɑ̀pəgǽndə", pos: "名", meanings: ["プロパガンダ、政治宣伝"], related: [] }
        ]
      }
    ]
  },
  {
    section: 14,
    title: "Culture & Society",
    sentences: [
      {
        id: 134,
        en: "The annual festival celebrates the rich cultural heritage of the indigenous people.",
        ja: "その年次祭は先住民の豊かな文化遺産を祝うものだ。",
        words: [
          { word: "annual", phonetic: "ǽnjuəl", pos: "形", meanings: ["年に一度の"], related: ["annually 副 年に一度"] },
          { word: "festival", phonetic: "féstəvəl", pos: "名", meanings: ["祭り、フェスティバル"], related: ["festive 形 祝祭の"] },
          { word: "heritage", phonetic: "héritidʒ", pos: "名", meanings: ["遺産、伝統"], related: ["inherit 動 受け継ぐ"] },
          { word: "indigenous", phonetic: "indídʒənəs", pos: "形", meanings: ["先住の、土着の"], related: ["native/aboriginal"] }
        ]
      },
      {
        id: 135,
        en: "Prejudice based on race or religion has no place in a civilized society.",
        ja: "人種や宗教に基づく偏見は文明社会にあってはならない。",
        words: [
          { word: "prejudice", phonetic: "prédʒudis", pos: "名", meanings: ["偏見"], related: ["prejudiced 形 偏見を持った"] },
          { word: "race", phonetic: "réis", pos: "名", meanings: ["人種", "競争"], related: ["racial 形 人種の", "racism 名 人種差別"] },
          { word: "religion", phonetic: "rilídʒən", pos: "名", meanings: ["宗教"], related: ["religious 形 宗教の"] },
          { word: "civilized", phonetic: "sívəlàizd", pos: "形", meanings: ["文明化した"], related: ["civilization 名 文明", "civil 形 市民の"] }
        ]
      },
      {
        id: 136,
        en: "The museum exhibition showcased artifacts dating back to the Bronze Age.",
        ja: "博物館の展示は青銅器時代にさかのぼる遺物を披露した。",
        words: [
          { word: "exhibition", phonetic: "èksibíʃən", pos: "名", meanings: ["展示会、展覧会"], related: ["exhibit 動 展示する", "exhibit 名 展示品"] },
          { word: "showcase", phonetic: "ʃóukèis", pos: "動", meanings: ["披露する、展示する"], related: ["showcase 名 陳列ケース"] },
          { word: "artifact", phonetic: "ɑ́ːrtəfæ̀kt", pos: "名", meanings: ["遺物、工芸品"], related: [] },
          { word: "date back to", phonetic: "", pos: "動", meanings: ["〜にさかのぼる"], related: [] }
        ]
      },
      {
        id: 137,
        en: "Immigration has significantly shaped the demographic landscape of many Western nations.",
        ja: "移民は多くの西洋諸国の人口構成を大きく変えてきた。",
        words: [
          { word: "immigration", phonetic: "ìmigréiʃən", pos: "名", meanings: ["移民、入国"], related: ["immigrant 名 移民", "immigrate 動 移住する", "⇔ emigration 移出"] },
          { word: "significantly", phonetic: "signífikəntli", pos: "副", meanings: ["大きく、著しく"], related: ["significant 形 重要な、著しい", "significance 名 重要性"] },
          { word: "demographic", phonetic: "dèməgrǽfik", pos: "形", meanings: ["人口統計の"], related: ["demography 名 人口統計学"] },
          { word: "landscape", phonetic: "lǽndskèip", pos: "名", meanings: ["景観、状況"], related: [] }
        ]
      },
      {
        id: 138,
        en: "Traditional craftsmanship is gradually disappearing in the face of mass production.",
        ja: "伝統的な職人技は大量生産の前に徐々に消えつつある。",
        words: [
          { word: "traditional", phonetic: "trədíʃənl", pos: "形", meanings: ["伝統的な"], related: ["tradition 名 伝統"] },
          { word: "craftsmanship", phonetic: "krǽftsmənʃip", pos: "名", meanings: ["職人技"], related: ["craftsman 名 職人", "craft 名 技術"] },
          { word: "gradually", phonetic: "grǽdʒuəli", pos: "副", meanings: ["徐々に"], related: ["gradual 形 徐々の"] },
          { word: "mass production", phonetic: "", pos: "名", meanings: ["大量生産"], related: ["mass 形 大量の"] }
        ]
      },
      {
        id: 139,
        en: "The charity organization provides humanitarian aid to communities affected by conflict.",
        ja: "その慈善団体は紛争の影響を受けた地域社会に人道的支援を提供している。",
        words: [
          { word: "charity", phonetic: "tʃǽrəti", pos: "名", meanings: ["慈善、慈善団体"], related: ["charitable 形 慈善の"] },
          { word: "humanitarian", phonetic: "hjuːmæ̀nətéəriən", pos: "形", meanings: ["人道的な"], related: ["humanity 名 人類、人間性"] },
          { word: "aid", phonetic: "éid", pos: "名", meanings: ["支援、援助"], related: ["aid 動 支援する"] },
          { word: "conflict", phonetic: "kɑ́nflikt", pos: "名", meanings: ["紛争、対立"], related: ["conflict 動 対立する"] }
        ]
      },
      {
        id: 140,
        en: "Gender equality in the workplace has improved, but significant gaps still remain.",
        ja: "職場におけるジェンダー平等は改善されたが、依然として大きな格差が残っている。",
        words: [
          { word: "workplace", phonetic: "wə́ːrkplèis", pos: "名", meanings: ["職場"], related: [] },
          { word: "improve", phonetic: "imprúːv", pos: "動", meanings: ["改善する"], related: ["improvement 名 改善"] },
          { word: "gap", phonetic: "gǽp", pos: "名", meanings: ["格差、隔たり"], related: ["gender gap 男女格差"] },
          { word: "remain", phonetic: "riméin", pos: "動", meanings: ["残る、〜のままである"], related: ["remaining 形 残りの"] }
        ]
      },
      {
        id: 141,
        en: "The philosopher argued that moral values are shaped by the era in which one lives.",
        ja: "その哲学者は、道徳的価値観はその人が生きる時代によって形成されると主張した。",
        words: [
          { word: "philosopher", phonetic: "filɑ́səfər", pos: "名", meanings: ["哲学者"], related: ["philosophy 名 哲学", "philosophical 形 哲学的な"] },
          { word: "moral", phonetic: "mɔ́ːrəl", pos: "形", meanings: ["道徳の"], related: ["morality 名 道徳", "⇔ immoral 不道徳な"] },
          { word: "value", phonetic: "vǽljuː", pos: "名", meanings: ["価値、価値観"], related: ["valuable 形 価値のある"] },
          { word: "era", phonetic: "íərə", pos: "名", meanings: ["時代"], related: ["epoch/age/period"] }
        ]
      },
      {
        id: 142,
        en: "Multilingual societies tend to be more tolerant of cultural differences.",
        ja: "多言語社会は文化的差異に対してより寛容である傾向がある。",
        words: [
          { word: "multilingual", phonetic: "mʌ̀ltilíŋgwəl", pos: "形", meanings: ["多言語の"], related: ["bilingual 形 二言語の", "monolingual 形 単一言語の"] },
          { word: "tolerant", phonetic: "tɑ́lərənt", pos: "形", meanings: ["寛容な"], related: ["tolerance 名 寛容", "tolerate 動 許容する", "⇔ intolerant 不寛容な"] }
        ]
      },
      {
        id: 143,
        en: "The ritual has been passed down through generations and still holds deep symbolic meaning.",
        ja: "その儀式は何世代にもわたって受け継がれ、今も深い象徴的意味を持っている。",
        words: [
          { word: "ritual", phonetic: "rítʃuəl", pos: "名", meanings: ["儀式"], related: ["ritual 形 儀式の"] },
          { word: "pass down", phonetic: "", pos: "動", meanings: ["伝える、受け継ぐ"], related: ["hand down 受け継ぐ"] },
          { word: "generation", phonetic: "dʒènəréiʃən", pos: "名", meanings: ["世代"], related: ["generate 動 生み出す"] },
          { word: "symbolic", phonetic: "simbɑ́lik", pos: "形", meanings: ["象徴的な"], related: ["symbol 名 象徴", "symbolize 動 象徴する"] }
        ]
      },
      {
        id: 144,
        en: "Urbanization has led to the erosion of close-knit rural communities.",
        ja: "都市化は結束の固い農村コミュニティの衰退を招いた。",
        words: [
          { word: "urbanization", phonetic: "ə̀ːrbənəzéiʃən", pos: "名", meanings: ["都市化"], related: ["urban 形 都市の"] },
          { word: "erosion", phonetic: "iróuʒən", pos: "名", meanings: ["浸食、衰退"], related: ["erode 動 浸食する"] },
          { word: "close-knit", phonetic: "klóusnít", pos: "形", meanings: ["結束の固い"], related: [] },
          { word: "rural", phonetic: "rúərəl", pos: "形", meanings: ["農村の、田舎の"], related: ["⇔ urban 都市の"] }
        ]
      }
    ]
  },
  {
    section: 15,
    title: "Abstract Concepts",
    sentences: [
      {
        id: 145,
        en: "The concept of justice varies considerably across different philosophical traditions.",
        ja: "正義の概念は異なる哲学的伝統によってかなり異なる。",
        words: [
          { word: "concept", phonetic: "kɑ́nsept", pos: "名", meanings: ["概念"], related: ["conceptual 形 概念の"] },
          { word: "justice", phonetic: "dʒʌ́stis", pos: "名", meanings: ["正義、公正"], related: ["just 形 公正な", "⇔ injustice 不正"] },
          { word: "vary", phonetic: "véəri", pos: "動", meanings: ["異なる、変化する"], related: ["variation 名 変化", "various 形 さまざまな", "variety 名 多様性"] },
          { word: "considerably", phonetic: "kənsídərəbli", pos: "副", meanings: ["かなり"], related: ["considerable 形 かなりの"] }
        ]
      },
      {
        id: 146,
        en: "Ambiguity in language can lead to misunderstanding if the context is unclear.",
        ja: "言語の曖昧さは、文脈が不明確だと誤解を招く可能性がある。",
        words: [
          { word: "ambiguity", phonetic: "æ̀mbəgjúːəti", pos: "名", meanings: ["曖昧さ"], related: ["ambiguous 形 曖昧な", "⇔ clarity 明確さ"] },
          { word: "misunderstanding", phonetic: "mìsʌndərstǽndiŋ", pos: "名", meanings: ["誤解"], related: ["misunderstand 動 誤解する"] },
          { word: "context", phonetic: "kɑ́ntekst", pos: "名", meanings: ["文脈、状況"], related: ["contextual 形 文脈上の"] }
        ]
      },
      {
        id: 147,
        en: "His persistent dedication to the cause ultimately earned him widespread admiration.",
        ja: "その大義への彼の粘り強い献身は、最終的に広く称賛を得た。",
        words: [
          { word: "persistent", phonetic: "pərsístənt", pos: "形", meanings: ["粘り強い、持続する"], related: ["persist 動 固執する", "persistence 名 粘り強さ"] },
          { word: "dedication", phonetic: "dèdikéiʃən", pos: "名", meanings: ["献身、専念"], related: ["dedicate 動 捧げる", "dedicated 形 献身的な"] },
          { word: "cause", phonetic: "kɔ́ːz", pos: "名", meanings: ["大義、原因"], related: [] },
          { word: "ultimately", phonetic: "ʌ́ltəmətli", pos: "副", meanings: ["最終的に"], related: ["ultimate 形 究極の"] },
          { word: "admiration", phonetic: "æ̀dməréiʃən", pos: "名", meanings: ["称賛、賞賛"], related: ["admire 動 称賛する", "admirable 形 立派な"] }
        ]
      },
      {
        id: 148,
        en: "The paradox is that the more choices we have, the less satisfied we tend to feel.",
        ja: "選択肢が多いほど満足度が低くなりがちだというのがこのパラドックスだ。",
        words: [
          { word: "paradox", phonetic: "pǽrədɑ̀ks", pos: "名", meanings: ["パラドックス、逆説"], related: ["paradoxical 形 逆説的な"] },
          { word: "choice", phonetic: "tʃɔ́is", pos: "名", meanings: ["選択、選択肢"], related: ["choose 動 選ぶ"] },
          { word: "satisfied", phonetic: "sǽtisfàid", pos: "形", meanings: ["満足した"], related: ["satisfy 動 満足させる", "satisfaction 名 満足"] }
        ]
      },
      {
        id: 149,
        en: "Empathy is the ability to understand and share the feelings of another person.",
        ja: "共感とは他者の感情を理解し共有する能力のことだ。",
        words: [
          { word: "empathy", phonetic: "émpəθi", pos: "名", meanings: ["共感"], related: ["empathize 動 共感する", "empathetic 形 共感力のある"] },
          { word: "ability", phonetic: "əbíləti", pos: "名", meanings: ["能力"], related: ["able 形 できる", "⇔ inability 無能"] },
          { word: "share", phonetic: "ʃéər", pos: "動", meanings: ["共有する"], related: ["share 名 分け前、株"] }
        ]
      },
      {
        id: 150,
        en: "Integrity is a virtue that cannot be acquired overnight; it is built through consistent actions.",
        ja: "誠実さは一夜にして得られる美徳ではなく、一貫した行動によって築かれるものだ。",
        words: [
          { word: "integrity", phonetic: "intégrəti", pos: "名", meanings: ["誠実さ、高潔さ"], related: ["integral 形 不可欠な"] },
          { word: "virtue", phonetic: "və́ːrtʃuː", pos: "名", meanings: ["美徳、長所"], related: ["virtuous 形 高潔な", "⇔ vice 悪徳"] },
          { word: "acquire", phonetic: "əkwáiər", pos: "動", meanings: ["獲得する、身につける"], related: ["acquisition 名 獲得"] },
          { word: "overnight", phonetic: "òuvərnáit", pos: "副", meanings: ["一夜にして、急に"], related: [] }
        ]
      },
      {
        id: 151,
        en: "Skepticism toward authority is considered healthy in a democratic society.",
        ja: "権威に対する懐疑心は民主主義社会では健全とみなされている。",
        words: [
          { word: "skepticism", phonetic: "sképtisìzm", pos: "名", meanings: ["懐疑心、懐疑主義"], related: ["skeptic 名 懐疑論者", "skeptical 形 懐疑的な"] },
          { word: "considered", phonetic: "kənsídərd", pos: "形", meanings: ["〜とみなされている"], related: ["consider 動 みなす、考慮する"] },
          { word: "democratic", phonetic: "dèməkrǽtik", pos: "形", meanings: ["民主的な"], related: ["democracy 名 民主主義", "democrat 名 民主主義者"] }
        ]
      },
      {
        id: 152,
        en: "The notion of free will has been debated by philosophers for centuries.",
        ja: "自由意志の概念は何世紀にもわたって哲学者たちによって議論されてきた。",
        words: [
          { word: "notion", phonetic: "nóuʃən", pos: "名", meanings: ["概念、考え"], related: ["idea/concept"] },
          { word: "free will", phonetic: "", pos: "名", meanings: ["自由意志"], related: [] },
          { word: "debate", phonetic: "dibéit", pos: "動", meanings: ["議論する"], related: ["debate 名 議論"] }
        ]
      },
      {
        id: 153,
        en: "Prejudice often stems from ignorance rather than genuine hostility.",
        ja: "偏見は本当の敵意よりも無知から生じることが多い。",
        words: [
          { word: "stem from", phonetic: "stém", pos: "動", meanings: ["〜に起因する、〜から生じる"], related: ["originate from/arise from"] },
          { word: "ignorance", phonetic: "ígnərəns", pos: "名", meanings: ["無知"], related: ["ignorant 形 無知な", "ignore 動 無視する"] },
          { word: "genuine", phonetic: "dʒénjuin", pos: "形", meanings: ["本当の、純粋な"], related: ["authentic/real/true"] },
          { word: "hostility", phonetic: "hɑstíləti", pos: "名", meanings: ["敵意"], related: ["hostile 形 敵対的な"] }
        ]
      },
      {
        id: 154,
        en: "Wisdom is not merely the accumulation of knowledge but the ability to apply it wisely.",
        ja: "知恵とは単なる知識の蓄積ではなく、それを賢く活用する能力のことだ。",
        words: [
          { word: "wisdom", phonetic: "wízdəm", pos: "名", meanings: ["知恵"], related: ["wise 形 賢い"] },
          { word: "merely", phonetic: "míərli", pos: "副", meanings: ["単に、〜にすぎない"], related: ["mere 形 単なる"] },
          { word: "accumulation", phonetic: "əkjùːmjuléiʃən", pos: "名", meanings: ["蓄積"], related: ["accumulate 動 蓄積する"] },
          { word: "apply", phonetic: "əplái", pos: "動", meanings: ["適用する、応用する"], related: ["application 名 応用、申請"] }
        ]
      },
      {
        id: 155,
        en: "The dilemma forced her to choose between loyalty to a friend and adherence to the rules.",
        ja: "そのジレンマは、友人への忠誠とルールの遵守のどちらかを選ぶことを彼女に迫った。",
        words: [
          { word: "dilemma", phonetic: "dilémə", pos: "名", meanings: ["ジレンマ、板挟み"], related: [] },
          { word: "loyalty", phonetic: "lɔ́iəlti", pos: "名", meanings: ["忠誠、忠実"], related: ["loyal 形 忠実な", "⇔ disloyal 不忠実な"] },
          { word: "adherence", phonetic: "ædhíərəns", pos: "名", meanings: ["遵守、固守"], related: ["adhere 動 固守する", "adherent 名 支持者"] }
        ]
      },
      {
        id: 156,
        en: "Perception shapes our reality more profoundly than we often realize.",
        ja: "認識は私たちが思っている以上に深く現実を形作っている。",
        words: [
          { word: "perception", phonetic: "pərséoʃən", pos: "名", meanings: ["認識、知覚"], related: ["perceive 動 知覚する", "perceptive 形 知覚の鋭い"] },
          { word: "shape", phonetic: "ʃéip", pos: "動", meanings: ["形作る"], related: ["shape 名 形"] },
          { word: "reality", phonetic: "riǽləti", pos: "名", meanings: ["現実"], related: ["real 形 現実の", "realistic 形 現実的な"] },
          { word: "profoundly", phonetic: "prəfáundli", pos: "副", meanings: ["深く、深遠に"], related: ["profound 形 深い、深遠な"] }
        ]
      },
      {
        id: 157,
        en: "Altruism, the selfless concern for others, is regarded as one of humanity's noblest traits.",
        ja: "利他主義、つまり他者への無私の関心は、人類の最も崇高な特質の一つとされている。",
        words: [
          { word: "altruism", phonetic: "ǽltruìzm", pos: "名", meanings: ["利他主義"], related: ["altruistic 形 利他的な", "⇔ egoism 利己主義"] },
          { word: "selfless", phonetic: "sélfləs", pos: "形", meanings: ["無私の、利他的な"], related: ["⇔ selfish 利己的な"] },
          { word: "regard", phonetic: "rigɑ́ːrd", pos: "動", meanings: ["〜とみなす"], related: ["regard 名 敬意", "regarding 前 〜に関して"] },
          { word: "trait", phonetic: "tréit", pos: "名", meanings: ["特質、特性"], related: ["characteristic/feature"] }
        ]
      },
      {
        id: 158,
        en: "Resilience in the face of adversity defines the true strength of one's character.",
        ja: "逆境に直面した時の回復力こそが、その人の本当の人格的強さを示す。",
        words: [
          { word: "resilience", phonetic: "rizíliəns", pos: "名", meanings: ["回復力、耐久力"], related: ["resilient 形 回復力のある"] },
          { word: "adversity", phonetic: "ædvə́ːrsəti", pos: "名", meanings: ["逆境"], related: ["adverse 形 不利な"] },
          { word: "define", phonetic: "difáin", pos: "動", meanings: ["定義する、示す"], related: ["definition 名 定義"] },
          { word: "character", phonetic: "kǽrəktər", pos: "名", meanings: ["人格、性格", "文字"], related: ["characteristic 形 特徴的な"] }
        ]
      }
    ]
  },
  {
    section: 16,
    title: "Business & Economy",
    sentences: [
      {
        id: 159,
        en: "The company aims to boost its revenue by expanding into overseas markets.",
        ja: "その会社は海外市場に進出することで収益を増やすことを目指している。",
        words: [
          { word: "aim", phonetic: "éim", pos: "動", meanings: ["目指す、狙う"], related: ["aim 名 目標、狙い"] },
          { word: "boost", phonetic: "búːst", pos: "動", meanings: ["押し上げる、増やす"], related: ["boost 名 増加、後押し"] },
          { word: "revenue", phonetic: "révənjuː", pos: "名", meanings: ["収入、歳入"], related: ["income/earnings"] },
          { word: "expand", phonetic: "ikspǽnd", pos: "動", meanings: ["拡大する、広げる"], related: ["expansion 名 拡大", "⇔ contract 縮小する"] }
        ]
      },
      {
        id: 160,
        en: "Inflation has been gradually eroding the purchasing power of consumers.",
        ja: "インフレが消費者の購買力を徐々にむしばんでいる。",
        words: [
          { word: "inflation", phonetic: "infléiʃən", pos: "名", meanings: ["インフレ、物価上昇"], related: ["inflate 動 膨張させる", "⇔ deflation デフレ"] },
          { word: "gradually", phonetic: "grǽdʒuəli", pos: "副", meanings: ["徐々に"], related: ["gradual 形 徐々の"] },
          { word: "erode", phonetic: "iróud", pos: "動", meanings: ["浸食する、むしばむ"], related: ["erosion 名 浸食"] },
          { word: "purchasing power", phonetic: "", pos: "名", meanings: ["購買力"], related: ["purchase 動 購入する"] }
        ]
      },
      {
        id: 161,
        en: "The entrepreneur launched a startup despite the fierce competition in the industry.",
        ja: "その起業家は業界の激しい競争にもかかわらず、スタートアップを立ち上げた。",
        words: [
          { word: "entrepreneur", phonetic: "ɑ̀ːntrəprənə́ːr", pos: "名", meanings: ["起業家"], related: ["entrepreneurial 形 起業家精神の"] },
          { word: "launch", phonetic: "lɔ́ːntʃ", pos: "動", meanings: ["立ち上げる、開始する", "打ち上げる"], related: ["launch 名 立ち上げ、発射"] },
          { word: "fierce", phonetic: "fíərs", pos: "形", meanings: ["激しい、猛烈な"], related: ["fiercely 副 激しく"] },
          { word: "competition", phonetic: "kɑ̀mpətíʃən", pos: "名", meanings: ["競争、競合"], related: ["compete 動 競争する", "competitive 形 競争力のある", "competitor 名 競争相手"] }
        ]
      },
      {
        id: 162,
        en: "The merger between the two corporations was subject to regulatory approval.",
        ja: "その二社の合併は規制当局の承認を必要とした。",
        words: [
          { word: "merger", phonetic: "mə́ːrdʒər", pos: "名", meanings: ["合併"], related: ["merge 動 合併する"] },
          { word: "corporation", phonetic: "kɔ̀ːrpəréiʃən", pos: "名", meanings: ["（大）企業、法人"], related: ["corporate 形 企業の", "incorporate 動 組み込む"] },
          { word: "subject to", phonetic: "", pos: "形", meanings: ["〜を条件として、〜の対象で"], related: [] },
          { word: "regulatory", phonetic: "régjulətɔ̀ːri", pos: "形", meanings: ["規制の、監督の"], related: ["regulate 動 規制する", "regulation 名 規制"] }
        ]
      },
      {
        id: 163,
        en: "The stock market plunged sharply following the unexpected announcement of trade tariffs.",
        ja: "貿易関税の予想外の発表を受けて、株式市場は急落した。",
        words: [
          { word: "stock market", phonetic: "stɑ́k mɑ́ːrkit", pos: "名", meanings: ["株式市場"], related: ["stock 名 株、在庫"] },
          { word: "plunge", phonetic: "plʌ́ndʒ", pos: "動", meanings: ["急落する、飛び込む"], related: ["plunge 名 急落"] },
          { word: "sharply", phonetic: "ʃɑ́ːrpli", pos: "副", meanings: ["急激に、鋭く"], related: ["sharp 形 鋭い、急激な"] },
          { word: "tariff", phonetic: "tǽrif", pos: "名", meanings: ["関税、料金表"], related: [] }
        ]
      },
      {
        id: 164,
        en: "A thorough audit revealed significant discrepancies in the company's financial statements.",
        ja: "徹底的な監査により、会社の財務諸表に重大な不一致が見つかった。",
        words: [
          { word: "thorough", phonetic: "θə́ːrou", pos: "形", meanings: ["徹底的な、完全な"], related: ["thoroughly 副 徹底的に"] },
          { word: "audit", phonetic: "ɔ́ːdit", pos: "名", meanings: ["監査"], related: ["audit 動 監査する", "auditor 名 監査役"] },
          { word: "discrepancy", phonetic: "diskrépənsi", pos: "名", meanings: ["不一致、食い違い"], related: [] },
          { word: "financial", phonetic: "fənǽnʃəl", pos: "形", meanings: ["財務の、金融の"], related: ["finance 名 財政", "financially 副 財政的に"] }
        ]
      },
      {
        id: 165,
        en: "The budget deficit has been a major obstacle to sustainable economic growth.",
        ja: "財政赤字は持続可能な経済成長の大きな障害となっている。",
        words: [
          { word: "budget", phonetic: "bʌ́dʒit", pos: "名", meanings: ["予算"], related: ["budget 形 格安の"] },
          { word: "deficit", phonetic: "défisit", pos: "名", meanings: ["赤字、不足"], related: ["⇔ surplus 黒字"] },
          { word: "obstacle", phonetic: "ɑ́bstəkl", pos: "名", meanings: ["障害、妨げ"], related: ["barrier/hindrance"] },
          { word: "sustainable", phonetic: "səstéinəbl", pos: "形", meanings: ["持続可能な"], related: ["sustain 動 持続する", "sustainability 名 持続可能性"] }
        ]
      },
      {
        id: 166,
        en: "Consumers tend to be cautious about spending during a recession.",
        ja: "消費者は不況の時期には支出に慎重になる傾向がある。",
        words: [
          { word: "consumer", phonetic: "kənsúːmər", pos: "名", meanings: ["消費者"], related: ["consume 動 消費する", "consumption 名 消費"] },
          { word: "tend to", phonetic: "ténd", pos: "動", meanings: ["〜する傾向がある"], related: ["tendency 名 傾向"] },
          { word: "cautious", phonetic: "kɔ́ːʃəs", pos: "形", meanings: ["慎重な、用心深い"], related: ["caution 名 注意、警告", "⇔ reckless 無謀な"] },
          { word: "recession", phonetic: "riséʃən", pos: "名", meanings: ["不況、景気後退"], related: ["⇔ boom 好況"] }
        ]
      },
      {
        id: 167,
        en: "The CEO acknowledged that the company's profits had declined considerably over the past quarter.",
        ja: "CEOは過去四半期で会社の利益がかなり減少したことを認めた。",
        words: [
          { word: "acknowledge", phonetic: "æknɑ́lidʒ", pos: "動", meanings: ["認める、承認する"], related: ["acknowledgement 名 承認"] },
          { word: "profit", phonetic: "prɑ́fit", pos: "名", meanings: ["利益"], related: ["profitable 形 利益になる", "⇔ loss 損失"] },
          { word: "decline", phonetic: "dikláin", pos: "動", meanings: ["減少する、衰退する", "断る"], related: ["decline 名 減少、衰退"] },
          { word: "considerably", phonetic: "kənsídərəbli", pos: "副", meanings: ["かなり、相当に"], related: ["considerable 形 かなりの"] }
        ]
      },
      {
        id: 168,
        en: "Negotiating a favorable contract requires patience and a solid understanding of the market.",
        ja: "有利な契約を交渉するには忍耐と市場の確かな理解が必要だ。",
        words: [
          { word: "negotiate", phonetic: "nigóuʃièit", pos: "動", meanings: ["交渉する"], related: ["negotiation 名 交渉", "negotiator 名 交渉者"] },
          { word: "favorable", phonetic: "féivərəbl", pos: "形", meanings: ["有利な、好意的な"], related: ["favor 名 好意", "⇔ unfavorable 不利な"] },
          { word: "contract", phonetic: "kɑ́ntrækt", pos: "名", meanings: ["契約"], related: ["contract 動 契約する、収縮する", "contractor 名 請負業者"] },
          { word: "patience", phonetic: "péiʃəns", pos: "名", meanings: ["忍耐、辛抱"], related: ["patient 形 忍耐強い", "⇔ impatience 短気"] }
        ]
      },
      {
        id: 169,
        en: "The board of directors approved the proposal to allocate more funds to research and development.",
        ja: "取締役会は研究開発にさらに資金を配分する提案を承認した。",
        words: [
          { word: "board of directors", phonetic: "", pos: "名", meanings: ["取締役会"], related: ["director 名 取締役"] },
          { word: "approve", phonetic: "əprúːv", pos: "動", meanings: ["承認する、認可する"], related: ["approval 名 承認", "⇔ disapprove 不承認"] },
          { word: "proposal", phonetic: "prəpóuzəl", pos: "名", meanings: ["提案"], related: ["propose 動 提案する"] },
          { word: "allocate", phonetic: "ǽləkèit", pos: "動", meanings: ["配分する、割り当てる"], related: ["allocation 名 配分"] }
        ]
      },
      {
        id: 170,
        en: "Bankruptcy is often the consequence of poor management and excessive debt.",
        ja: "破産はしばしば、ずさんな経営と過度の借金の結果である。",
        words: [
          { word: "bankruptcy", phonetic: "bǽŋkrəptsi", pos: "名", meanings: ["破産、倒産"], related: ["bankrupt 形 破産した"] },
          { word: "consequence", phonetic: "kɑ́nsəkwèns", pos: "名", meanings: ["結果、帰結"], related: ["consequent 形 結果として生じる", "consequently 副 その結果"] },
          { word: "excessive", phonetic: "iksésiv", pos: "形", meanings: ["過度の、過剰な"], related: ["excess 名 超過、過剰", "exceed 動 超える"] },
          { word: "debt", phonetic: "dét", pos: "名", meanings: ["借金、負債"], related: ["debtor 名 債務者", "⇔ credit 信用、貸し"] }
        ]
      }
    ]
  },
  {
    section: 17,
    title: "Health & Medicine",
    sentences: [
      {
        id: 171,
        en: "The physician diagnosed the patient with a chronic respiratory condition.",
        ja: "医師はその患者を慢性呼吸器疾患と診断した。",
        words: [
          { word: "physician", phonetic: "fizíʃən", pos: "名", meanings: ["内科医、医師"], related: ["physical 形 身体の"] },
          { word: "diagnose", phonetic: "dàiəgnóus", pos: "動", meanings: ["診断する"], related: ["diagnosis 名 診断", "diagnostic 形 診断の"] },
          { word: "chronic", phonetic: "krɑ́nik", pos: "形", meanings: ["慢性の"], related: ["⇔ acute 急性の"] },
          { word: "respiratory", phonetic: "réspərətɔ̀ːri", pos: "形", meanings: ["呼吸の"], related: ["respiration 名 呼吸", "respire 動 呼吸する"] }
        ]
      },
      {
        id: 172,
        en: "Symptoms of the disease include fever, fatigue, and a persistent cough.",
        ja: "その病気の症状には発熱、疲労、そして持続的な咳が含まれる。",
        words: [
          { word: "symptom", phonetic: "símptəm", pos: "名", meanings: ["症状、兆候"], related: ["symptomatic 形 症状の"] },
          { word: "disease", phonetic: "dizíːz", pos: "名", meanings: ["病気"], related: ["illness/sickness"] },
          { word: "fatigue", phonetic: "fətíːg", pos: "名", meanings: ["疲労、倦怠感"], related: ["fatigue 動 疲れさせる"] },
          { word: "persistent", phonetic: "pərsístənt", pos: "形", meanings: ["持続する、しつこい"], related: ["persist 動 持続する", "persistence 名 持続"] }
        ]
      },
      {
        id: 173,
        en: "Moderate exercise on a regular basis can significantly reduce the risk of heart disease.",
        ja: "適度な運動を定期的に行うことで、心臓病のリスクを大幅に減らせる。",
        words: [
          { word: "moderate", phonetic: "mɑ́dərət", pos: "形", meanings: ["適度な、穏健な"], related: ["moderation 名 適度、節度"] },
          { word: "on a regular basis", phonetic: "", pos: "副", meanings: ["定期的に"], related: ["regularly 副 定期的に"] },
          { word: "significantly", phonetic: "signífikəntli", pos: "副", meanings: ["大幅に、著しく"], related: ["significant 形 重要な、著しい", "significance 名 重要性"] },
          { word: "reduce", phonetic: "ridjúːs", pos: "動", meanings: ["減らす、縮小する"], related: ["reduction 名 削減"] }
        ]
      },
      {
        id: 174,
        en: "The surgeon performed a delicate operation to remove the tumor from the patient's brain.",
        ja: "外科医は患者の脳から腫瘍を除去する繊細な手術を行った。",
        words: [
          { word: "surgeon", phonetic: "sə́ːrdʒən", pos: "名", meanings: ["外科医"], related: ["surgery 名 手術、外科"] },
          { word: "perform", phonetic: "pərfɔ́ːrm", pos: "動", meanings: ["行う、演じる"], related: ["performance 名 演技、実績"] },
          { word: "delicate", phonetic: "délikət", pos: "形", meanings: ["繊細な、微妙な"], related: ["delicacy 名 繊細さ"] },
          { word: "tumor", phonetic: "tjúːmər", pos: "名", meanings: ["腫瘍"], related: [] }
        ]
      },
      {
        id: 175,
        en: "The vaccine proved to be highly effective in preventing the spread of the virus.",
        ja: "そのワクチンはウイルスの拡散を防ぐのに非常に効果的であることが証明された。",
        words: [
          { word: "vaccine", phonetic: "højvæksíːn", pos: "名", meanings: ["ワクチン"], related: ["vaccinate 動 ワクチン接種する", "vaccination 名 予防接種"] },
          { word: "prove", phonetic: "prúːv", pos: "動", meanings: ["証明する、〜であることがわかる"], related: ["proof 名 証拠"] },
          { word: "effective", phonetic: "iféktiv", pos: "形", meanings: ["効果的な"], related: ["effect 名 効果", "effectiveness 名 有効性", "⇔ ineffective 無効な"] },
          { word: "prevent", phonetic: "privént", pos: "動", meanings: ["防ぐ、予防する"], related: ["prevention 名 予防", "preventive 形 予防の"] }
        ]
      },
      {
        id: 176,
        en: "Adequate sleep is essential for maintaining both mental and physical well-being.",
        ja: "十分な睡眠は精神的・身体的な健康を維持するために不可欠だ。",
        words: [
          { word: "adequate", phonetic: "ǽdikwət", pos: "形", meanings: ["十分な、適切な"], related: ["adequacy 名 十分さ", "⇔ inadequate 不十分な"] },
          { word: "essential", phonetic: "isénʃəl", pos: "形", meanings: ["不可欠な、本質的な"], related: ["essence 名 本質", "essentially 副 本質的に"] },
          { word: "maintain", phonetic: "meintéin", pos: "動", meanings: ["維持する、主張する"], related: ["maintenance 名 維持、整備"] },
          { word: "well-being", phonetic: "wélbìːiŋ", pos: "名", meanings: ["幸福、健康"], related: ["welfare 名 福祉"] }
        ]
      },
      {
        id: 177,
        en: "The pharmacist cautioned him against taking the medication on an empty stomach.",
        ja: "薬剤師は空腹時にその薬を服用しないよう彼に注意した。",
        words: [
          { word: "pharmacist", phonetic: "fɑ́ːrməsist", pos: "名", meanings: ["薬剤師"], related: ["pharmacy 名 薬局", "pharmaceutical 形 製薬の"] },
          { word: "caution", phonetic: "kɔ́ːʃən", pos: "動", meanings: ["注意する、警告する"], related: ["caution 名 注意、警告", "cautious 形 慎重な"] },
          { word: "medication", phonetic: "mèdikéiʃən", pos: "名", meanings: ["薬、薬物治療"], related: ["medicate 動 薬を投与する", "medicine 名 薬、医学"] },
          { word: "empty stomach", phonetic: "", pos: "名", meanings: ["空腹"], related: [] }
        ]
      },
      {
        id: 178,
        en: "The epidemic overwhelmed the healthcare system, causing a severe shortage of medical supplies.",
        ja: "その伝染病は医療制度を圧倒し、医療物資の深刻な不足を引き起こした。",
        words: [
          { word: "epidemic", phonetic: "èpidémik", pos: "名", meanings: ["伝染病、流行病"], related: ["pandemic 名 世界的流行病"] },
          { word: "overwhelm", phonetic: "òuvərwélm", pos: "動", meanings: ["圧倒する、参らせる"], related: ["overwhelming 形 圧倒的な"] },
          { word: "severe", phonetic: "sivíər", pos: "形", meanings: ["深刻な、厳しい"], related: ["severely 副 深刻に", "severity 名 深刻さ"] },
          { word: "shortage", phonetic: "ʃɔ́ːrtidʒ", pos: "名", meanings: ["不足"], related: ["short 形 不足した", "⇔ surplus 余剰"] }
        ]
      },
      {
        id: 179,
        en: "Obesity is increasingly recognized as a major risk factor for various illnesses.",
        ja: "肥満はさまざまな病気の主要なリスク要因としてますます認識されている。",
        words: [
          { word: "obesity", phonetic: "oubíːsəti", pos: "名", meanings: ["肥満"], related: ["obese 形 肥満の"] },
          { word: "increasingly", phonetic: "inkríːsiŋli", pos: "副", meanings: ["ますます"], related: ["increase 動 増加する", "increase 名 増加"] },
          { word: "recognize", phonetic: "rékəgnàiz", pos: "動", meanings: ["認識する、認める"], related: ["recognition 名 認識、承認"] },
          { word: "factor", phonetic: "fǽktər", pos: "名", meanings: ["要因、要素"], related: [] }
        ]
      },
      {
        id: 180,
        en: "The therapist recommended a combination of counseling and meditation to cope with anxiety.",
        ja: "セラピストは不安に対処するためにカウンセリングと瞑想の組み合わせを勧めた。",
        words: [
          { word: "therapist", phonetic: "θérəpist", pos: "名", meanings: ["セラピスト、治療士"], related: ["therapy 名 療法", "therapeutic 形 治療の"] },
          { word: "recommend", phonetic: "rèkəménd", pos: "動", meanings: ["勧める、推薦する"], related: ["recommendation 名 推薦"] },
          { word: "combination", phonetic: "kɑ̀mbənéiʃən", pos: "名", meanings: ["組み合わせ"], related: ["combine 動 組み合わせる"] },
          { word: "cope with", phonetic: "kóup", pos: "動", meanings: ["〜に対処する、〜を乗り越える"], related: ["deal with / handle"] },
          { word: "anxiety", phonetic: "æŋzáiəti", pos: "名", meanings: ["不安、心配"], related: ["anxious 形 不安な"] }
        ]
      },
      {
        id: 181,
        en: "Allergic reactions can range from mild skin irritation to life-threatening anaphylaxis.",
        ja: "アレルギー反応は軽い皮膚の炎症から命に関わるアナフィラキシーまで様々だ。",
        words: [
          { word: "allergic", phonetic: "ələ́ːrdʒik", pos: "形", meanings: ["アレルギーの"], related: ["allergy 名 アレルギー", "allergen 名 アレルゲン"] },
          { word: "reaction", phonetic: "riǽkʃən", pos: "名", meanings: ["反応"], related: ["react 動 反応する", "reactive 形 反応の"] },
          { word: "mild", phonetic: "máild", pos: "形", meanings: ["軽い、穏やかな"], related: ["mildly 副 穏やかに"] },
          { word: "irritation", phonetic: "ìritéiʃən", pos: "名", meanings: ["炎症、いらだち"], related: ["irritate 動 刺激する、いらだたせる"] }
        ]
      }
    ]
  },
  {
    section: 18,
    title: "Emotions & Psychology",
    sentences: [
      {
        id: 182,
        en: "She was overwhelmed with grief after the sudden loss of her beloved pet.",
        ja: "愛するペットの突然の死に、彼女は悲しみに打ちひしがれた。",
        words: [
          { word: "grief", phonetic: "gríːf", pos: "名", meanings: ["深い悲しみ、悲嘆"], related: ["grieve 動 悲しむ", "grievous 形 嘆かわしい"] },
          { word: "sudden", phonetic: "sʌ́dn", pos: "形", meanings: ["突然の"], related: ["suddenly 副 突然に"] },
          { word: "loss", phonetic: "lɔ́ːs", pos: "名", meanings: ["喪失、損失"], related: ["lose 動 失う"] },
          { word: "beloved", phonetic: "bilʌ́vid", pos: "形", meanings: ["最愛の"], related: [] }
        ]
      },
      {
        id: 183,
        en: "Jealousy can be destructive if you fail to manage your emotions properly.",
        ja: "感情をきちんと管理できないと、嫉妬は破壊的になりうる。",
        words: [
          { word: "jealousy", phonetic: "dʒéləsi", pos: "名", meanings: ["嫉妬"], related: ["jealous 形 嫉妬深い"] },
          { word: "destructive", phonetic: "distrʌ́ktiv", pos: "形", meanings: ["破壊的な"], related: ["destroy 動 破壊する", "destruction 名 破壊", "⇔ constructive 建設的な"] },
          { word: "fail to", phonetic: "féil", pos: "動", meanings: ["〜しそこなう、〜できない"], related: ["failure 名 失敗"] },
          { word: "manage", phonetic: "mǽnidʒ", pos: "動", meanings: ["管理する、なんとかやる"], related: ["management 名 管理、経営"] }
        ]
      },
      {
        id: 184,
        en: "His frustration was apparent, but he managed to suppress his anger in public.",
        ja: "彼の苛立ちは明らかだったが、人前では怒りを抑えることができた。",
        words: [
          { word: "frustration", phonetic: "frʌstréiʃən", pos: "名", meanings: ["苛立ち、欲求不満"], related: ["frustrate 動 苛立たせる", "frustrating 形 苛立たしい"] },
          { word: "apparent", phonetic: "əpǽrənt", pos: "形", meanings: ["明らかな、見かけの"], related: ["apparently 副 明らかに、どうやら"] },
          { word: "suppress", phonetic: "səprés", pos: "動", meanings: ["抑える、抑圧する"], related: ["suppression 名 抑圧"] },
          { word: "anger", phonetic: "ǽŋgər", pos: "名", meanings: ["怒り"], related: ["angry 形 怒った", "angrily 副 怒って"] }
        ]
      },
      {
        id: 185,
        en: "A sense of accomplishment can greatly enhance your self-esteem and motivation.",
        ja: "達成感は自尊心とやる気を大いに高めてくれる。",
        words: [
          { word: "accomplishment", phonetic: "əkɑ́mpliʃmənt", pos: "名", meanings: ["達成、業績"], related: ["accomplish 動 達成する"] },
          { word: "enhance", phonetic: "inhǽns", pos: "動", meanings: ["高める、強化する"], related: ["enhancement 名 向上"] },
          { word: "self-esteem", phonetic: "sèlfistíːm", pos: "名", meanings: ["自尊心"], related: ["esteem 名 尊敬", "self-confidence 自信"] },
          { word: "motivation", phonetic: "mòutəvéiʃən", pos: "名", meanings: ["動機付け、やる気"], related: ["motivate 動 動機を与える", "motive 名 動機"] }
        ]
      },
      {
        id: 186,
        en: "Loneliness is not merely the absence of company but a deep emotional void.",
        ja: "孤独とは単に人がいないことではなく、深い感情的な空虚感である。",
        words: [
          { word: "loneliness", phonetic: "lóunlinəs", pos: "名", meanings: ["孤独、寂しさ"], related: ["lonely 形 孤独な"] },
          { word: "merely", phonetic: "míərli", pos: "副", meanings: ["単に、ただ〜にすぎない"], related: ["mere 形 単なる"] },
          { word: "absence", phonetic: "ǽbsəns", pos: "名", meanings: ["不在、欠如"], related: ["absent 形 不在の", "⇔ presence 存在"] },
          { word: "void", phonetic: "vɔ́id", pos: "名", meanings: ["空虚、空白"], related: ["void 形 無効の", "avoid 動 避ける"] }
        ]
      },
      {
        id: 187,
        en: "The psychologist explained that trauma can manifest in various unconscious behaviors.",
        ja: "心理学者はトラウマがさまざまな無意識の行動として現れうると説明した。",
        words: [
          { word: "psychologist", phonetic: "saikɑ́lədʒist", pos: "名", meanings: ["心理学者"], related: ["psychology 名 心理学", "psychological 形 心理学の"] },
          { word: "trauma", phonetic: "trɔ́ːmə", pos: "名", meanings: ["トラウマ、心的外傷"], related: ["traumatic 形 トラウマの"] },
          { word: "manifest", phonetic: "mǽnəfèst", pos: "動", meanings: ["現れる、明らかにする"], related: ["manifestation 名 表れ、兆候"] },
          { word: "unconscious", phonetic: "ʌnkɑ́nʃəs", pos: "形", meanings: ["無意識の、意識不明の"], related: ["⇔ conscious 意識のある", "consciousness 名 意識"] }
        ]
      },
      {
        id: 188,
        en: "Empathy enables us to understand and share the feelings of others without judgment.",
        ja: "共感は批判なしに他者の気持ちを理解し共有することを可能にする。",
        words: [
          { word: "empathy", phonetic: "émpəθi", pos: "名", meanings: ["共感、感情移入"], related: ["empathize 動 共感する", "empathetic 形 共感的な"] },
          { word: "enable", phonetic: "inéibl", pos: "動", meanings: ["可能にする"], related: ["⇔ disable 不能にする"] },
          { word: "share", phonetic: "ʃéər", pos: "動", meanings: ["共有する、分け合う"], related: ["share 名 分け前、株"] },
          { word: "judgment", phonetic: "dʒʌ́dʒmənt", pos: "名", meanings: ["判断、批判"], related: ["judge 動 判断する", "judge 名 裁判官"] }
        ]
      },
      {
        id: 189,
        en: "Nostalgia often distorts our memories, making the past seem more pleasant than it actually was.",
        ja: "ノスタルジアはしばしば記憶を歪め、過去を実際よりも心地よく見せる。",
        words: [
          { word: "nostalgia", phonetic: "nɑstǽldʒə", pos: "名", meanings: ["ノスタルジア、郷愁"], related: ["nostalgic 形 郷愁の"] },
          { word: "distort", phonetic: "distɔ́ːrt", pos: "動", meanings: ["歪める、ゆがめる"], related: ["distortion 名 歪み"] },
          { word: "memory", phonetic: "méməri", pos: "名", meanings: ["記憶、思い出"], related: ["memorize 動 暗記する", "memorable 形 記憶に残る"] },
          { word: "pleasant", phonetic: "pléznt", pos: "形", meanings: ["心地よい、楽しい"], related: ["pleasure 名 喜び", "⇔ unpleasant 不快な"] }
        ]
      },
      {
        id: 190,
        en: "Cognitive biases can subtly influence our decision-making without our awareness.",
        ja: "認知バイアスは私たちの気づかないうちに意思決定に微妙に影響を与える。",
        words: [
          { word: "cognitive", phonetic: "kɑ́gnətiv", pos: "形", meanings: ["認知の"], related: ["cognition 名 認知"] },
          { word: "bias", phonetic: "báiəs", pos: "名", meanings: ["偏見、先入観"], related: ["biased 形 偏った", "⇔ unbiased 公平な"] },
          { word: "subtly", phonetic: "sʌ́tli", pos: "副", meanings: ["微妙に、巧妙に"], related: ["subtle 形 微妙な、巧妙な"] },
          { word: "awareness", phonetic: "əwéərnəs", pos: "名", meanings: ["認識、自覚"], related: ["aware 形 気づいている", "⇔ unaware 気づかない"] }
        ]
      },
      {
        id: 191,
        en: "Her genuine compassion for the vulnerable inspired those around her to act with kindness.",
        ja: "弱者への彼女の真の思いやりは、周囲の人々に親切に行動するよう促した。",
        words: [
          { word: "genuine", phonetic: "dʒénjuin", pos: "形", meanings: ["本物の、真の"], related: ["genuinely 副 本当に"] },
          { word: "compassion", phonetic: "kəmpǽʃən", pos: "名", meanings: ["思いやり、同情"], related: ["compassionate 形 思いやりのある"] },
          { word: "vulnerable", phonetic: "vʌ́lnərəbl", pos: "形", meanings: ["弱い、傷つきやすい"], related: ["vulnerability 名 脆弱性"] },
          { word: "inspire", phonetic: "inspáiər", pos: "動", meanings: ["鼓舞する、着想を与える"], related: ["inspiration 名 霊感、ひらめき"] }
        ]
      },
      {
        id: 192,
        en: "Prolonged stress can lead to depression if left unaddressed over time.",
        ja: "長期のストレスは対処しないまま放置すると、うつ病につながりうる。",
        words: [
          { word: "prolonged", phonetic: "prəlɔ́ːŋd", pos: "形", meanings: ["長引いた、長期の"], related: ["prolong 動 延長する"] },
          { word: "stress", phonetic: "strés", pos: "名", meanings: ["ストレス、圧力"], related: ["stressful 形 ストレスの多い"] },
          { word: "lead to", phonetic: "líːd", pos: "動", meanings: ["〜につながる、〜を引き起こす"], related: ["result in / cause"] },
          { word: "depression", phonetic: "dipréʃən", pos: "名", meanings: ["うつ病、不況"], related: ["depress 動 落ち込ませる", "depressed 形 落ち込んだ"] }
        ]
      }
    ]
  },
  {
    section: 19,
    title: "Relationships & Family",
    sentences: [
      {
        id: 193,
        en: "Mutual trust and open communication are the foundation of any lasting relationship.",
        ja: "相互の信頼とオープンなコミュニケーションは、あらゆる永続的な関係の基盤だ。",
        words: [
          { word: "mutual", phonetic: "mjúːtʃuəl", pos: "形", meanings: ["相互の、共通の"], related: ["mutually 副 相互に"] },
          { word: "trust", phonetic: "trʌ́st", pos: "名", meanings: ["信頼、信用"], related: ["trust 動 信頼する", "trustworthy 形 信頼できる"] },
          { word: "foundation", phonetic: "faundéiʃən", pos: "名", meanings: ["基盤、基礎", "財団"], related: ["found 動 設立する"] },
          { word: "lasting", phonetic: "lǽstiŋ", pos: "形", meanings: ["永続する、長続きする"], related: ["last 動 続く"] }
        ]
      },
      {
        id: 194,
        en: "The couple decided to split up after years of constant quarrels and misunderstandings.",
        ja: "その夫婦は絶え間ない口論と誤解の末、別れることを決めた。",
        words: [
          { word: "couple", phonetic: "kʌ́pl", pos: "名", meanings: ["夫婦、カップル", "2つ"], related: [] },
          { word: "split up", phonetic: "splít", pos: "動", meanings: ["別れる、分裂する"], related: ["split 動 割る、分ける"] },
          { word: "constant", phonetic: "kɑ́nstənt", pos: "形", meanings: ["絶え間ない、一定の"], related: ["constantly 副 絶えず"] },
          { word: "quarrel", phonetic: "kwɔ́rəl", pos: "名", meanings: ["口論、けんか"], related: ["quarrel 動 口論する"] }
        ]
      },
      {
        id: 195,
        en: "Raising children demands enormous patience and a willingness to sacrifice personal time.",
        ja: "子育てには膨大な忍耐と個人の時間を犠牲にする覚悟が求められる。",
        words: [
          { word: "raise", phonetic: "réiz", pos: "動", meanings: ["育てる、上げる"], related: ["raise 名 昇給"] },
          { word: "demand", phonetic: "dimǽnd", pos: "動", meanings: ["要求する、必要とする"], related: ["demand 名 要求、需要", "demanding 形 要求の厳しい"] },
          { word: "enormous", phonetic: "inɔ́ːrməs", pos: "形", meanings: ["莫大な、巨大な"], related: ["enormously 副 非常に"] },
          { word: "sacrifice", phonetic: "sǽkrəfàis", pos: "動", meanings: ["犠牲にする"], related: ["sacrifice 名 犠牲"] },
          { word: "willingness", phonetic: "wíliŋnəs", pos: "名", meanings: ["意欲、進んで〜する気持ち"], related: ["willing 形 進んで〜する", "⇔ unwilling いやいやの"] }
        ]
      },
      {
        id: 196,
        en: "She was deeply grateful for the unconditional support her parents had provided throughout her life.",
        ja: "彼女は生涯を通じて両親が与えてくれた無条件のサポートに深く感謝していた。",
        words: [
          { word: "grateful", phonetic: "gréitfəl", pos: "形", meanings: ["感謝している"], related: ["gratitude 名 感謝", "⇔ ungrateful 恩知らずの"] },
          { word: "unconditional", phonetic: "ʌ̀nkəndíʃənəl", pos: "形", meanings: ["無条件の"], related: ["condition 名 条件", "⇔ conditional 条件付きの"] },
          { word: "provide", phonetic: "prəváid", pos: "動", meanings: ["提供する、与える"], related: ["provision 名 提供、規定"] },
          { word: "throughout", phonetic: "θruːáut", pos: "前", meanings: ["〜の間ずっと、〜の全体にわたって"], related: [] }
        ]
      },
      {
        id: 197,
        en: "Sibling rivalry is a common phenomenon, but it can strengthen bonds in the long run.",
        ja: "兄弟姉妹間のライバル関係はよくあることだが、長い目で見ると絆を強めることもある。",
        words: [
          { word: "sibling", phonetic: "síbliŋ", pos: "名", meanings: ["兄弟姉妹"], related: [] },
          { word: "rivalry", phonetic: "ráivəlri", pos: "名", meanings: ["ライバル関係、競争"], related: ["rival 名 ライバル"] },
          { word: "phenomenon", phonetic: "fənɑ́mənɑ̀n", pos: "名", meanings: ["現象"], related: ["phenomena 名 (複数形)"] },
          { word: "bond", phonetic: "bɑ́nd", pos: "名", meanings: ["絆、結びつき"], related: ["bond 動 結びつく", "bonding 名 絆の形成"] },
          { word: "in the long run", phonetic: "", pos: "副", meanings: ["長い目で見れば"], related: ["⇔ in the short run 短期的には"] }
        ]
      },
      {
        id: 198,
        en: "He inherited not only his grandfather's estate but also his stubborn temperament.",
        ja: "彼は祖父の財産だけでなく、頑固な気質も受け継いだ。",
        words: [
          { word: "inherit", phonetic: "inhérit", pos: "動", meanings: ["相続する、受け継ぐ"], related: ["inheritance 名 遺産、相続", "heir 名 相続人"] },
          { word: "estate", phonetic: "istéit", pos: "名", meanings: ["財産、地所"], related: ["real estate 不動産"] },
          { word: "stubborn", phonetic: "stʌ́bərn", pos: "形", meanings: ["頑固な"], related: ["stubbornly 副 頑固に", "stubbornness 名 頑固さ"] },
          { word: "temperament", phonetic: "témpərəmənt", pos: "名", meanings: ["気質、気性"], related: ["temperamental 形 気性の激しい"] }
        ]
      },
      {
        id: 199,
        en: "Divorce can have a profound impact on children's emotional development.",
        ja: "離婚は子供の情緒的発達に深い影響を与えることがある。",
        words: [
          { word: "divorce", phonetic: "divɔ́ːrs", pos: "名", meanings: ["離婚"], related: ["divorce 動 離婚する"] },
          { word: "profound", phonetic: "prəfáund", pos: "形", meanings: ["深い、深遠な"], related: ["profoundly 副 深く"] },
          { word: "impact", phonetic: "ímpækt", pos: "名", meanings: ["影響、衝撃"], related: ["impact 動 影響を与える"] },
          { word: "emotional", phonetic: "imóuʃənəl", pos: "形", meanings: ["感情の、情緒的な"], related: ["emotion 名 感情", "emotionally 副 感情的に"] }
        ]
      },
      {
        id: 200,
        en: "Adolescents often rebel against their parents as they seek to establish their own identity.",
        ja: "思春期の若者は自分のアイデンティティを確立しようとして、しばしば親に反抗する。",
        words: [
          { word: "adolescent", phonetic: "æ̀dəlésnt", pos: "名", meanings: ["思春期の若者"], related: ["adolescence 名 思春期"] },
          { word: "rebel", phonetic: "ribél", pos: "動", meanings: ["反抗する、反乱を起こす"], related: ["rebel 名 反逆者", "rebellion 名 反乱", "rebellious 形 反抗的な"] },
          { word: "seek", phonetic: "síːk", pos: "動", meanings: ["求める、探し求める"], related: [] },
          { word: "establish", phonetic: "istǽbliʃ", pos: "動", meanings: ["確立する、設立する"], related: ["establishment 名 設立、施設"] },
          { word: "identity", phonetic: "aidéntəti", pos: "名", meanings: ["アイデンティティ、身元"], related: ["identify 動 特定する", "identification 名 身分証明"] }
        ]
      },
      {
        id: 201,
        en: "The generation gap makes it difficult for grandparents and grandchildren to see eye to eye.",
        ja: "世代間のギャップは祖父母と孫が意見を一致させることを難しくする。",
        words: [
          { word: "generation", phonetic: "dʒènəréiʃən", pos: "名", meanings: ["世代"], related: ["generate 動 生み出す"] },
          { word: "gap", phonetic: "gǽp", pos: "名", meanings: ["格差、隔たり"], related: [] },
          { word: "see eye to eye", phonetic: "", pos: "動", meanings: ["意見が一致する"], related: ["agree / concur"] },
          { word: "grandchildren", phonetic: "grǽntʃìldrən", pos: "名", meanings: ["孫たち"], related: ["grandchild 名 孫"] }
        ]
      },
      {
        id: 202,
        en: "She confided in her closest friend about the marital problems she had been enduring.",
        ja: "彼女は耐えてきた夫婦間の問題について、最も親しい友人に打ち明けた。",
        words: [
          { word: "confide", phonetic: "kənfáid", pos: "動", meanings: ["打ち明ける、信頼して話す"], related: ["confidence 名 信頼、自信", "confidential 形 機密の"] },
          { word: "closest", phonetic: "klóusəst", pos: "形", meanings: ["最も親しい"], related: ["close 形 親しい、近い"] },
          { word: "marital", phonetic: "mǽrətl", pos: "形", meanings: ["婚姻の、夫婦の"], related: ["marriage 名 結婚", "marry 動 結婚する"] },
          { word: "endure", phonetic: "indjúər", pos: "動", meanings: ["耐える、我慢する"], related: ["endurance 名 忍耐力"] }
        ]
      },
      {
        id: 203,
        en: "Nurturing a child's curiosity from an early age lays the groundwork for lifelong learning.",
        ja: "幼い頃から子供の好奇心を育むことは、生涯学習の基礎を築く。",
        words: [
          { word: "nurture", phonetic: "nə́ːrtʃər", pos: "動", meanings: ["育む、養育する"], related: ["nurture 名 養育", "⇔ nature 天性"] },
          { word: "curiosity", phonetic: "kjùəriɑ́səti", pos: "名", meanings: ["好奇心"], related: ["curious 形 好奇心の強い"] },
          { word: "lay", phonetic: "léi", pos: "動", meanings: ["置く、敷く"], related: ["lay off 解雇する", "lay out 並べる"] },
          { word: "groundwork", phonetic: "gráundwə̀ːrk", pos: "名", meanings: ["基礎、土台"], related: ["foundation / basis"] }
        ]
      }
    ]
  },
  {
    section: 20,
    title: "Daily Life & Routines",
    sentences: [
      {
        id: 204,
        en: "I make it a rule to get up early and go for a brisk walk before breakfast.",
        ja: "朝食前に早起きして速歩きをすることにしている。",
        words: [
          { word: "make it a rule to", phonetic: "", pos: "動", meanings: ["〜することにしている"], related: [] },
          { word: "brisk", phonetic: "brísk", pos: "形", meanings: ["きびきびした、活発な"], related: ["briskly 副 きびきびと"] },
          { word: "walk", phonetic: "wɔ́ːk", pos: "名", meanings: ["散歩、歩行"], related: ["go for a walk 散歩に行く"] }
        ]
      },
      {
        id: 205,
        en: "She commutes to work by train, which takes approximately forty-five minutes each way.",
        ja: "彼女は電車で通勤しており、片道約45分かかる。",
        words: [
          { word: "commute", phonetic: "kəmjúːt", pos: "動", meanings: ["通勤する"], related: ["commute 名 通勤", "commuter 名 通勤者"] },
          { word: "approximately", phonetic: "əprɑ́ksəmətli", pos: "副", meanings: ["およそ、約"], related: ["approximate 形 おおよその", "approximation 名 近似"] },
          { word: "each way", phonetic: "", pos: "副", meanings: ["片道"], related: ["one way 片道", "round trip 往復"] }
        ]
      },
      {
        id: 206,
        en: "Household chores such as laundry, vacuuming, and ironing can be quite tedious.",
        ja: "洗濯、掃除機がけ、アイロンがけなどの家事はかなり退屈なこともある。",
        words: [
          { word: "household", phonetic: "háushòuld", pos: "名", meanings: ["家庭、世帯"], related: ["household 形 家庭の"] },
          { word: "chore", phonetic: "tʃɔ́ːr", pos: "名", meanings: ["家事、雑用"], related: [] },
          { word: "laundry", phonetic: "lɔ́ːndri", pos: "名", meanings: ["洗濯、洗濯物"], related: ["do the laundry 洗濯する"] },
          { word: "tedious", phonetic: "tíːdiəs", pos: "形", meanings: ["退屈な、うんざりする"], related: ["tedium 名 退屈"] }
        ]
      },
      {
        id: 207,
        en: "He tends to procrastinate, always putting off important tasks until the last minute.",
        ja: "彼は先延ばしにする傾向があり、いつも大事な仕事をギリギリまで後回しにする。",
        words: [
          { word: "procrastinate", phonetic: "proukrǽstənèit", pos: "動", meanings: ["先延ばしにする"], related: ["procrastination 名 先延ばし"] },
          { word: "put off", phonetic: "", pos: "動", meanings: ["延期する、後回しにする"], related: ["postpone / delay"] },
          { word: "task", phonetic: "tǽsk", pos: "名", meanings: ["仕事、課題"], related: [] },
          { word: "last minute", phonetic: "", pos: "名", meanings: ["土壇場、最後の瞬間"], related: ["at the last minute ギリギリに"] }
        ]
      },
      {
        id: 208,
        en: "Setting a monthly budget helps you keep track of your expenses and avoid overspending.",
        ja: "月間予算を立てると支出を把握し、使いすぎを防ぐのに役立つ。",
        words: [
          { word: "set", phonetic: "sét", pos: "動", meanings: ["設定する、立てる"], related: [] },
          { word: "monthly", phonetic: "mʌ́nθli", pos: "形", meanings: ["月間の、毎月の"], related: ["month 名 月"] },
          { word: "keep track of", phonetic: "", pos: "動", meanings: ["〜を把握する、記録する"], related: ["⇔ lose track of 見失う"] },
          { word: "expense", phonetic: "ikspéns", pos: "名", meanings: ["費用、出費"], related: ["expensive 形 高価な", "expenditure 名 支出"] }
        ]
      },
      {
        id: 209,
        en: "She accidentally locked herself out of the apartment and had to call a locksmith.",
        ja: "彼女はうっかりアパートに鍵を閉め出されてしまい、鍵屋を呼ばなければならなかった。",
        words: [
          { word: "accidentally", phonetic: "æ̀ksədéntəli", pos: "副", meanings: ["うっかり、偶然に"], related: ["accident 名 事故、偶然", "accidental 形 偶然の", "⇔ deliberately わざと"] },
          { word: "lock out", phonetic: "lɑ́k", pos: "動", meanings: ["締め出す"], related: ["lock 動 鍵をかける", "lock 名 鍵"] },
          { word: "apartment", phonetic: "əpɑ́ːrtmənt", pos: "名", meanings: ["アパート、マンション"], related: [] },
          { word: "locksmith", phonetic: "lɑ́ksmìθ", pos: "名", meanings: ["鍵屋"], related: [] }
        ]
      },
      {
        id: 210,
        en: "Sorting out the cluttered garage took the entire weekend, but it was worth the effort.",
        ja: "散らかったガレージの整理に週末丸ごとかかったが、努力する価値はあった。",
        words: [
          { word: "sort out", phonetic: "sɔ́ːrt", pos: "動", meanings: ["整理する、解決する"], related: ["sort 名 種類"] },
          { word: "cluttered", phonetic: "klʌ́tərd", pos: "形", meanings: ["散らかった"], related: ["clutter 名 散らかったもの", "clutter 動 散らかす"] },
          { word: "entire", phonetic: "intáiər", pos: "形", meanings: ["全体の、まるごとの"], related: ["entirely 副 完全に"] },
          { word: "worth", phonetic: "wə́ːrθ", pos: "形", meanings: ["〜の価値がある"], related: ["worthy 形 価値のある", "worthwhile 形 やりがいのある"] }
        ]
      },
      {
        id: 211,
        en: "Due to the heavy traffic, I barely made it to the appointment on time.",
        ja: "ひどい渋滞のせいで、かろうじて約束の時間に間に合った。",
        words: [
          { word: "due to", phonetic: "djúː", pos: "前", meanings: ["〜のせいで、〜のために"], related: ["because of / owing to"] },
          { word: "barely", phonetic: "béərli", pos: "副", meanings: ["かろうじて、ほとんど〜ない"], related: ["bare 形 むき出しの"] },
          { word: "make it", phonetic: "", pos: "動", meanings: ["間に合う、成功する"], related: [] },
          { word: "appointment", phonetic: "əpɔ́intmənt", pos: "名", meanings: ["約束、予約"], related: ["appoint 動 任命する"] }
        ]
      },
      {
        id: 212,
        en: "He renewed his driver's license and updated his mailing address at the same time.",
        ja: "彼は運転免許証を更新し、同時に郵送先住所も変更した。",
        words: [
          { word: "renew", phonetic: "rinjúː", pos: "動", meanings: ["更新する、再開する"], related: ["renewal 名 更新"] },
          { word: "license", phonetic: "láisəns", pos: "名", meanings: ["免許、許可証"], related: ["license 動 免許を与える"] },
          { word: "update", phonetic: "ʌpdéit", pos: "動", meanings: ["更新する、最新にする"], related: ["update 名 更新、最新情報"] },
          { word: "mailing address", phonetic: "", pos: "名", meanings: ["郵送先住所"], related: ["mail 名 郵便"] }
        ]
      },
      {
        id: 213,
        en: "I am in the habit of jotting down a to-do list every morning to stay organized.",
        ja: "整理された状態を保つために、毎朝やることリストを書き留める習慣がある。",
        words: [
          { word: "be in the habit of", phonetic: "", pos: "動", meanings: ["〜する習慣がある"], related: ["habit 名 習慣", "habitual 形 習慣的な"] },
          { word: "jot down", phonetic: "dʒɑ́t", pos: "動", meanings: ["書き留める、メモする"], related: ["note down / write down"] },
          { word: "to-do list", phonetic: "", pos: "名", meanings: ["やることリスト"], related: [] },
          { word: "organized", phonetic: "ɔ́ːrgənàizd", pos: "形", meanings: ["整理された、組織化された"], related: ["organize 動 整理する", "organization 名 組織"] }
        ]
      },
      {
        id: 214,
        en: "Running errands on a day off can be surprisingly tiring, especially in the summer heat.",
        ja: "休日に用事を済ませるのは、特に夏の暑さの中では驚くほど疲れる。",
        words: [
          { word: "run errands", phonetic: "érəndz", pos: "動", meanings: ["用事を済ませる"], related: ["errand 名 用事、使い走り"] },
          { word: "day off", phonetic: "", pos: "名", meanings: ["休日"], related: ["take a day off 休みを取る"] },
          { word: "surprisingly", phonetic: "sərpráiziŋli", pos: "副", meanings: ["驚くほど"], related: ["surprise 名 驚き", "surprising 形 驚くべき"] },
          { word: "tiring", phonetic: "táiəriŋ", pos: "形", meanings: ["疲れさせる"], related: ["tire 動 疲れる", "tired 形 疲れた", "tiresome 形 うんざりする"] }
        ]
      }
    ]
  },
  {
    section: 21,
    title: "Food & Cooking",
    sentences: [
      {
        id: 215,
        en: "The recipe calls for a pinch of salt and a tablespoon of olive oil.",
        ja: "そのレシピでは塩ひとつまみとオリーブオイル大さじ1杯が必要だ。",
        words: [
          { word: "recipe", phonetic: "résəpi", pos: "名", meanings: ["レシピ、調理法"], related: [] },
          { word: "call for", phonetic: "", pos: "動", meanings: ["〜を必要とする、〜を要求する"], related: ["require / demand"] },
          { word: "pinch", phonetic: "píntʃ", pos: "名", meanings: ["ひとつまみ"], related: ["pinch 動 つまむ"] },
          { word: "tablespoon", phonetic: "téiblspùːn", pos: "名", meanings: ["大さじ"], related: ["teaspoon 名 小さじ"] }
        ]
      },
      {
        id: 216,
        en: "She prefers organic vegetables, claiming they are more nutritious and flavorful.",
        ja: "彼女はオーガニック野菜を好み、より栄養があっておいしいと主張している。",
        words: [
          { word: "prefer", phonetic: "prifə́ːr", pos: "動", meanings: ["好む、〜の方を選ぶ"], related: ["preference 名 好み", "preferable 形 好ましい"] },
          { word: "organic", phonetic: "ɔːrgǽnik", pos: "形", meanings: ["有機の、オーガニックの"], related: ["organism 名 有機体"] },
          { word: "nutritious", phonetic: "njuːtríʃəs", pos: "形", meanings: ["栄養のある"], related: ["nutrition 名 栄養", "nutrient 名 栄養素"] },
          { word: "flavorful", phonetic: "fléivərfəl", pos: "形", meanings: ["風味豊かな"], related: ["flavor 名 風味、味"] }
        ]
      },
      {
        id: 217,
        en: "The steak was grilled to perfection—juicy on the inside and slightly charred on the outside.",
        ja: "ステーキは完璧に焼かれていた——中はジューシーで外側はほんのり焦げていた。",
        words: [
          { word: "grill", phonetic: "gríl", pos: "動", meanings: ["グリルで焼く"], related: ["grill 名 グリル"] },
          { word: "perfection", phonetic: "pərfékʃən", pos: "名", meanings: ["完璧"], related: ["perfect 形 完璧な", "perfectly 副 完璧に"] },
          { word: "juicy", phonetic: "dʒúːsi", pos: "形", meanings: ["ジューシーな、汁の多い"], related: ["juice 名 果汁"] },
          { word: "charred", phonetic: "tʃɑ́ːrd", pos: "形", meanings: ["焦げた、黒焦げの"], related: ["char 動 焦がす"] }
        ]
      },
      {
        id: 218,
        en: "Fermented foods such as yogurt and kimchi are said to be beneficial for digestion.",
        ja: "ヨーグルトやキムチなどの発酵食品は消化に良いと言われている。",
        words: [
          { word: "fermented", phonetic: "fərméntid", pos: "形", meanings: ["発酵した"], related: ["ferment 動 発酵する", "fermentation 名 発酵"] },
          { word: "beneficial", phonetic: "bènəfíʃəl", pos: "形", meanings: ["有益な、有利な"], related: ["benefit 名 利益", "benefit 動 利益を得る"] },
          { word: "digestion", phonetic: "didʒéstʃən", pos: "名", meanings: ["消化"], related: ["digest 動 消化する", "digestive 形 消化の"] }
        ]
      },
      {
        id: 219,
        en: "He has a sweet tooth and cannot resist the temptation of freshly baked pastries.",
        ja: "彼は甘党で、焼きたてのペストリーの誘惑に抗えない。",
        words: [
          { word: "sweet tooth", phonetic: "", pos: "名", meanings: ["甘党、甘いもの好き"], related: [] },
          { word: "resist", phonetic: "rizíst", pos: "動", meanings: ["抵抗する、我慢する"], related: ["resistance 名 抵抗", "resistant 形 抵抗力のある"] },
          { word: "temptation", phonetic: "temptéiʃən", pos: "名", meanings: ["誘惑"], related: ["tempt 動 誘惑する", "tempting 形 魅力的な"] },
          { word: "pastry", phonetic: "péistri", pos: "名", meanings: ["ペストリー、焼き菓子"], related: [] }
        ]
      },
      {
        id: 220,
        en: "Overcooking the pasta will make it soggy, so be sure to drain it while it is still al dente.",
        ja: "パスタを茹ですぎるとふやけるので、アルデンテのうちに必ず湯切りすること。",
        words: [
          { word: "overcook", phonetic: "òuvərkúk", pos: "動", meanings: ["加熱しすぎる、茹ですぎる"], related: ["cook 動 料理する"] },
          { word: "soggy", phonetic: "sɑ́gi", pos: "形", meanings: ["ふやけた、水っぽい"], related: [] },
          { word: "drain", phonetic: "dréin", pos: "動", meanings: ["水を切る、排水する"], related: ["drain 名 排水管"] },
          { word: "al dente", phonetic: "ɑːl déntei", pos: "形", meanings: ["アルデンテの、歯ごたえのある"], related: [] }
        ]
      },
      {
        id: 221,
        en: "The aroma of freshly brewed coffee is enough to stimulate my appetite every morning.",
        ja: "淹れたてのコーヒーの香りは、毎朝私の食欲を刺激するのに十分だ。",
        words: [
          { word: "aroma", phonetic: "əróumə", pos: "名", meanings: ["芳香、香り"], related: ["aromatic 形 芳香のある"] },
          { word: "brew", phonetic: "brúː", pos: "動", meanings: ["淹れる、醸造する"], related: ["brewery 名 醸造所"] },
          { word: "stimulate", phonetic: "stímjulèit", pos: "動", meanings: ["刺激する、促進する"], related: ["stimulation 名 刺激", "stimulus 名 刺激"] },
          { word: "appetite", phonetic: "ǽpətàit", pos: "名", meanings: ["食欲"], related: ["appetizer 名 前菜", "appetizing 形 食欲をそそる"] }
        ]
      },
      {
        id: 222,
        en: "She is allergic to dairy products, so she substitutes soy milk for regular milk in every recipe.",
        ja: "彼女は乳製品アレルギーなので、あらゆるレシピで通常の牛乳の代わりに豆乳を使っている。",
        words: [
          { word: "dairy", phonetic: "déəri", pos: "形", meanings: ["乳製品の"], related: ["dairy 名 乳製品、酪農場"] },
          { word: "substitute A for B", phonetic: "sʌ́bstətjùːt", pos: "動", meanings: ["Bの代わりにAを使う"], related: ["substitute 名 代用品", "substitution 名 代用"] },
          { word: "soy milk", phonetic: "sɔ́i mílk", pos: "名", meanings: ["豆乳"], related: ["soybean 名 大豆"] },
          { word: "regular", phonetic: "régjulər", pos: "形", meanings: ["通常の、規則的な"], related: ["regularly 副 定期的に"] }
        ]
      },
      {
        id: 223,
        en: "The chef demonstrated how to chop, dice, and mince vegetables efficiently.",
        ja: "シェフは野菜を効率よく切る・さいの目に切る・みじん切りにする方法を実演した。",
        words: [
          { word: "chef", phonetic: "ʃéf", pos: "名", meanings: ["シェフ、料理長"], related: [] },
          { word: "demonstrate", phonetic: "démənstrèit", pos: "動", meanings: ["実演する、証明する"], related: ["demonstration 名 実演、デモ"] },
          { word: "chop", phonetic: "tʃɑ́p", pos: "動", meanings: ["切る、刻む"], related: ["chop 名 一切れ"] },
          { word: "dice", phonetic: "dáis", pos: "動", meanings: ["さいの目に切る"], related: ["dice 名 さいころ"] },
          { word: "mince", phonetic: "míns", pos: "動", meanings: ["みじん切りにする"], related: ["mince 名 ひき肉"] }
        ]
      },
      {
        id: 224,
        en: "Leftover ingredients should be stored in the refrigerator to preserve their freshness.",
        ja: "余った食材は鮮度を保つために冷蔵庫に保存すべきだ。",
        words: [
          { word: "leftover", phonetic: "léftòuvər", pos: "形", meanings: ["残った、余りの"], related: ["leftover 名 残り物"] },
          { word: "ingredient", phonetic: "ingríːdiənt", pos: "名", meanings: ["材料、食材"], related: [] },
          { word: "store", phonetic: "stɔ́ːr", pos: "動", meanings: ["保存する、蓄える"], related: ["storage 名 保管、貯蔵"] },
          { word: "preserve", phonetic: "prizə́ːrv", pos: "動", meanings: ["保存する、維持する"], related: ["preservation 名 保存", "preservative 名 防腐剤"] },
          { word: "freshness", phonetic: "fréʃnəs", pos: "名", meanings: ["鮮度、新鮮さ"], related: ["fresh 形 新鮮な"] }
        ]
      },
      {
        id: 225,
        en: "Adding a squeeze of lemon juice can dramatically enhance the flavor of grilled fish.",
        ja: "レモン汁をひと絞り加えるだけで焼き魚の風味が劇的に良くなる。",
        words: [
          { word: "squeeze", phonetic: "skwíːz", pos: "名", meanings: ["ひと絞り"], related: ["squeeze 動 絞る、圧搾する"] },
          { word: "dramatically", phonetic: "drəmǽtikəli", pos: "副", meanings: ["劇的に"], related: ["dramatic 形 劇的な"] },
          { word: "flavor", phonetic: "fléivər", pos: "名", meanings: ["風味、味"], related: ["flavor 動 風味をつける", "flavorful 形 風味豊かな"] }
        ]
      }
    ]
  },
  {
    section: 22,
    title: "Sports & Hobbies",
    sentences: [
      {
        id: 226,
        en: "The athlete trained rigorously for months in preparation for the championship.",
        ja: "その選手は選手権に備えて何ヶ月も厳しく訓練した。",
        words: [
          { word: "athlete", phonetic: "ǽθlìːt", pos: "名", meanings: ["スポーツ選手"], related: ["athletic 形 運動の", "athletics 名 陸上競技"] },
          { word: "rigorously", phonetic: "rígərəsli", pos: "副", meanings: ["厳しく、徹底的に"], related: ["rigorous 形 厳格な", "rigor 名 厳格さ"] },
          { word: "preparation", phonetic: "prèpəréiʃən", pos: "名", meanings: ["準備"], related: ["prepare 動 準備する"] },
          { word: "championship", phonetic: "tʃǽmpiənʃìp", pos: "名", meanings: ["選手権、チャンピオンシップ"], related: ["champion 名 チャンピオン"] }
        ]
      },
      {
        id: 227,
        en: "The referee's controversial decision sparked outrage among the spectators.",
        ja: "審判の物議を醸す判定が観客の怒りを引き起こした。",
        words: [
          { word: "referee", phonetic: "rèfəríː", pos: "名", meanings: ["審判"], related: ["umpire 名 審判（野球など）"] },
          { word: "controversial", phonetic: "kɑ̀ntrəvə́ːrʃəl", pos: "形", meanings: ["物議を醸す、議論のある"], related: ["controversy 名 論争"] },
          { word: "spark", phonetic: "spɑ́ːrk", pos: "動", meanings: ["引き起こす、火花を散らす"], related: ["spark 名 火花"] },
          { word: "outrage", phonetic: "áutrèidʒ", pos: "名", meanings: ["激怒、暴挙"], related: ["outrageous 形 法外な、けしからん"] },
          { word: "spectator", phonetic: "spékteitər", pos: "名", meanings: ["観客、見物人"], related: ["spectate 動 観戦する"] }
        ]
      },
      {
        id: 228,
        en: "Gardening is a therapeutic hobby that allows you to unwind while staying physically active.",
        ja: "ガーデニングは体を動かしながらリラックスできる、癒しの趣味だ。",
        words: [
          { word: "therapeutic", phonetic: "θèrəpjúːtik", pos: "形", meanings: ["治療の、癒しの"], related: ["therapy 名 療法"] },
          { word: "hobby", phonetic: "hɑ́bi", pos: "名", meanings: ["趣味"], related: ["hobbyist 名 趣味人"] },
          { word: "unwind", phonetic: "ʌnwáind", pos: "動", meanings: ["リラックスする、くつろぐ"], related: ["relax / wind down"] },
          { word: "physically", phonetic: "fízikəli", pos: "副", meanings: ["身体的に"], related: ["physical 形 身体の"] }
        ]
      },
      {
        id: 229,
        en: "The marathon runner collapsed from exhaustion just meters before the finish line.",
        ja: "そのマラソンランナーはゴールの数メートル手前で疲労のため倒れた。",
        words: [
          { word: "marathon", phonetic: "mǽrəθɑ̀n", pos: "名", meanings: ["マラソン"], related: [] },
          { word: "collapse", phonetic: "kəlǽps", pos: "動", meanings: ["倒れる、崩壊する"], related: ["collapse 名 崩壊"] },
          { word: "exhaustion", phonetic: "igzɔ́ːstʃən", pos: "名", meanings: ["疲労困憊"], related: ["exhaust 動 疲れ果てさせる", "exhausted 形 疲れ果てた", "exhausting 形 疲れさせる"] },
          { word: "finish line", phonetic: "", pos: "名", meanings: ["ゴールライン"], related: ["⇔ starting line スタートライン"] }
        ]
      },
      {
        id: 230,
        en: "She took up pottery as a creative outlet and found it incredibly rewarding.",
        ja: "彼女は創造的なはけ口として陶芸を始め、非常にやりがいがあると感じた。",
        words: [
          { word: "take up", phonetic: "", pos: "動", meanings: ["始める、取り組む"], related: ["take up 時間を取る"] },
          { word: "pottery", phonetic: "pɑ́təri", pos: "名", meanings: ["陶芸、陶器"], related: ["potter 名 陶芸家"] },
          { word: "outlet", phonetic: "áutlèt", pos: "名", meanings: ["はけ口、出口"], related: [] },
          { word: "rewarding", phonetic: "riwɔ́ːrdiŋ", pos: "形", meanings: ["やりがいのある、報いのある"], related: ["reward 名 報酬", "reward 動 報いる"] }
        ]
      },
      {
        id: 231,
        en: "The coach emphasized the importance of teamwork and discipline over individual talent.",
        ja: "コーチは個人の才能よりもチームワークと規律の重要性を強調した。",
        words: [
          { word: "coach", phonetic: "kóutʃ", pos: "名", meanings: ["コーチ、監督"], related: ["coach 動 指導する"] },
          { word: "emphasize", phonetic: "émfəsàiz", pos: "動", meanings: ["強調する"], related: ["emphasis 名 強調"] },
          { word: "discipline", phonetic: "dísəplin", pos: "名", meanings: ["規律、訓練"], related: ["discipline 動 訓練する", "disciplined 形 規律のある"] },
          { word: "talent", phonetic: "tǽlənt", pos: "名", meanings: ["才能"], related: ["talented 形 才能のある"] }
        ]
      },
      {
        id: 232,
        en: "Photography requires not only technical skill but also a keen eye for composition.",
        ja: "写真撮影には技術的なスキルだけでなく、構図に対する鋭い目も必要だ。",
        words: [
          { word: "photography", phonetic: "fətɑ́grəfi", pos: "名", meanings: ["写真撮影"], related: ["photograph 名 写真", "photographer 名 写真家"] },
          { word: "technical", phonetic: "téknikəl", pos: "形", meanings: ["技術的な"], related: ["technique 名 技術", "technology 名 テクノロジー"] },
          { word: "keen", phonetic: "kíːn", pos: "形", meanings: ["鋭い、熱心な"], related: ["keenly 副 鋭く"] },
          { word: "composition", phonetic: "kɑ̀mpəzíʃən", pos: "名", meanings: ["構図、構成", "作文"], related: ["compose 動 構成する"] }
        ]
      },
      {
        id: 233,
        en: "The underdog team pulled off a stunning upset in the tournament semifinals.",
        ja: "劣勢と見られていたチームがトーナメント準決勝で見事な番狂わせを演じた。",
        words: [
          { word: "underdog", phonetic: "ʌ́ndərdɔ̀ːg", pos: "名", meanings: ["劣勢の者、負けそうな方"], related: ["⇔ favorite 本命"] },
          { word: "pull off", phonetic: "", pos: "動", meanings: ["やってのける、成功する"], related: ["accomplish / achieve"] },
          { word: "stunning", phonetic: "stʌ́niŋ", pos: "形", meanings: ["見事な、驚くべき"], related: ["stun 動 驚かせる"] },
          { word: "upset", phonetic: "ʌpsét", pos: "名", meanings: ["番狂わせ"], related: ["upset 動 動揺させる、ひっくり返す"] },
          { word: "semifinals", phonetic: "sèmifáinlz", pos: "名", meanings: ["準決勝"], related: ["semifinal 名 準決勝", "final 名 決勝"] }
        ]
      },
      {
        id: 234,
        en: "Hiking in the mountains is a fantastic way to escape the hustle and bustle of city life.",
        ja: "山でのハイキングは都会の喧騒から逃れる素晴らしい方法だ。",
        words: [
          { word: "hiking", phonetic: "háikiŋ", pos: "名", meanings: ["ハイキング"], related: ["hike 動 ハイキングする", "hiker 名 ハイカー"] },
          { word: "fantastic", phonetic: "fæntǽstik", pos: "形", meanings: ["素晴らしい、幻想的な"], related: ["fantasy 名 空想"] },
          { word: "escape", phonetic: "iskéip", pos: "動", meanings: ["逃れる、脱出する"], related: ["escape 名 脱出、逃避"] },
          { word: "hustle and bustle", phonetic: "hʌ́sl ənd bʌ́sl", pos: "名", meanings: ["喧騒、雑踏"], related: [] }
        ]
      },
      {
        id: 235,
        en: "The amateur golfer was thrilled to score under par for the very first time.",
        ja: "そのアマチュアゴルファーは初めてパーを下回るスコアを出して大喜びだった。",
        words: [
          { word: "amateur", phonetic: "ǽmətʃùər", pos: "名", meanings: ["アマチュア、素人"], related: ["⇔ professional プロ"] },
          { word: "thrilled", phonetic: "θríld", pos: "形", meanings: ["わくわくした、大喜びの"], related: ["thrill 名 スリル", "thrilling 形 わくわくさせる"] },
          { word: "score", phonetic: "skɔ́ːr", pos: "動", meanings: ["得点する"], related: ["score 名 得点、スコア"] },
          { word: "par", phonetic: "pɑ́ːr", pos: "名", meanings: ["パー、基準"], related: ["on par with 〜と同等の"] }
        ]
      },
      {
        id: 236,
        en: "Collecting vintage records has become his lifelong passion, filling shelves across every room.",
        ja: "ヴィンテージレコードの収集は彼の生涯の情熱となり、部屋中の棚を埋め尽くしている。",
        words: [
          { word: "collect", phonetic: "kəlékt", pos: "動", meanings: ["収集する、集める"], related: ["collection 名 コレクション", "collector 名 収集家"] },
          { word: "vintage", phonetic: "víntidʒ", pos: "形", meanings: ["ヴィンテージの、年代物の"], related: [] },
          { word: "lifelong", phonetic: "láiflɔ̀ːŋ", pos: "形", meanings: ["生涯の、一生の"], related: ["lifetime 名 生涯"] },
          { word: "passion", phonetic: "pǽʃən", pos: "名", meanings: ["情熱"], related: ["passionate 形 情熱的な"] }
        ]
      },
      {
        id: 237,
        en: "Stretching before and after exercise is crucial for preventing muscle injuries.",
        ja: "運動の前後にストレッチすることは筋肉のけがを防ぐために不可欠だ。",
        words: [
          { word: "stretch", phonetic: "strétʃ", pos: "動", meanings: ["ストレッチする、伸ばす"], related: ["stretch 名 伸び、ストレッチ"] },
          { word: "crucial", phonetic: "krúːʃəl", pos: "形", meanings: ["極めて重要な、決定的な"], related: ["crucially 副 決定的に"] },
          { word: "muscle", phonetic: "mʌ́sl", pos: "名", meanings: ["筋肉"], related: ["muscular 形 筋肉の"] },
          { word: "injury", phonetic: "índʒəri", pos: "名", meanings: ["けが、負傷"], related: ["injure 動 傷つける", "injured 形 負傷した"] }
        ]
      },
      {
        id: 238,
        en: "The chess grandmaster anticipated his opponent's strategy several moves in advance.",
        ja: "そのチェスのグランドマスターは何手も先まで相手の戦略を読んでいた。",
        words: [
          { word: "anticipate", phonetic: "æntísəpèit", pos: "動", meanings: ["予測する、見越す"], related: ["anticipation 名 予測、期待"] },
          { word: "opponent", phonetic: "əpóunənt", pos: "名", meanings: ["対戦相手、敵"], related: ["oppose 動 反対する"] },
          { word: "strategy", phonetic: "strǽtədʒi", pos: "名", meanings: ["戦略"], related: ["strategic 形 戦略的な", "strategist 名 戦略家"] },
          { word: "in advance", phonetic: "", pos: "副", meanings: ["前もって、事前に"], related: ["advance 名 前進、進歩"] }
        ]
      },
      {
        id: 239,
        en: "Surfing demands excellent balance, endurance, and a thorough understanding of ocean currents.",
        ja: "サーフィンには優れたバランス感覚、持久力、そして海流への十分な理解が求められる。",
        words: [
          { word: "surfing", phonetic: "sə́ːrfiŋ", pos: "名", meanings: ["サーフィン"], related: ["surf 動 サーフィンする", "surfer 名 サーファー"] },
          { word: "balance", phonetic: "bǽləns", pos: "名", meanings: ["バランス、均衡"], related: ["balance 動 バランスを取る", "balanced 形 バランスのとれた"] },
          { word: "endurance", phonetic: "indjúərəns", pos: "名", meanings: ["持久力、忍耐"], related: ["endure 動 耐える"] },
          { word: "current", phonetic: "kə́ːrənt", pos: "名", meanings: ["流れ、海流", "電流"], related: ["current 形 現在の"] }
        ]
      },
      {
        id: 240,
        en: "Board games have made a remarkable comeback, appealing to both adults and children alike.",
        ja: "ボードゲームは目覚ましい復活を遂げ、大人にも子供にも等しく人気がある。",
        words: [
          { word: "remarkable", phonetic: "rimɑ́ːrkəbl", pos: "形", meanings: ["目覚ましい、注目すべき"], related: ["remarkably 副 著しく", "remark 名 発言"] },
          { word: "comeback", phonetic: "kʌ́mbæ̀k", pos: "名", meanings: ["復活、カムバック"], related: ["come back 戻る"] },
          { word: "appeal to", phonetic: "əpíːl", pos: "動", meanings: ["〜に訴える、〜の心を引く"], related: ["appeal 名 訴え、魅力", "appealing 形 魅力的な"] },
          { word: "alike", phonetic: "əláik", pos: "副", meanings: ["同様に、等しく"], related: ["alike 形 似ている"] }
        ]
      },
      {
        id: 241,
        en: "The gymnast's flawless routine earned her a standing ovation from the audience.",
        ja: "その体操選手の完璧な演技は観客からスタンディングオベーションを得た。",
        words: [
          { word: "gymnast", phonetic: "dʒímnæst", pos: "名", meanings: ["体操選手"], related: ["gymnastics 名 体操", "gymnasium 名 体育館"] },
          { word: "flawless", phonetic: "flɔ́ːləs", pos: "形", meanings: ["完璧な、欠点のない"], related: ["flaw 名 欠点", "⇔ flawed 欠点のある"] },
          { word: "routine", phonetic: "ruːtíːn", pos: "名", meanings: ["演技、日課"], related: ["routine 形 日常の"] },
          { word: "ovation", phonetic: "ouvéiʃən", pos: "名", meanings: ["大喝采"], related: ["standing ovation スタンディングオベーション"] }
        ]
      },
      {
        id: 242,
        en: "Fishing teaches you patience; sometimes you sit for hours without a single bite.",
        ja: "釣りは忍耐を教えてくれる——何時間座っていても一度もアタリがないこともある。",
        words: [
          { word: "fishing", phonetic: "fíʃiŋ", pos: "名", meanings: ["釣り"], related: ["fish 動 釣りをする", "fisherman 名 釣り人"] },
          { word: "patience", phonetic: "péiʃəns", pos: "名", meanings: ["忍耐、辛抱"], related: ["patient 形 忍耐強い"] },
          { word: "bite", phonetic: "báit", pos: "名", meanings: ["アタリ（釣り）、一口"], related: ["bite 動 噛む"] }
        ]
      }
    ]
  },
  {
    section: 23,
    title: "Work & Career",
    sentences: [
      {
        id: 243,
        en: "She submitted her résumé to several firms, hoping to land an entry-level position.",
        ja: "彼女は初級職に就くことを期待して、いくつかの会社に履歴書を提出した。",
        words: [
          { word: "submit", phonetic: "səbmít", pos: "動", meanings: ["提出する", "服従する"], related: ["submission 名 提出、服従"] },
          { word: "résumé", phonetic: "rézəmèi", pos: "名", meanings: ["履歴書"], related: ["CV (curriculum vitae) 履歴書"] },
          { word: "firm", phonetic: "fə́ːrm", pos: "名", meanings: ["会社、事務所"], related: ["firm 形 堅い、断固とした"] },
          { word: "entry-level", phonetic: "éntrilèvəl", pos: "形", meanings: ["初級の、入門レベルの"], related: ["entry 名 入場、参入"] }
        ]
      },
      {
        id: 244,
        en: "Employees who demonstrate initiative are more likely to be promoted.",
        ja: "率先力を示す従業員は昇進する可能性が高い。",
        words: [
          { word: "employee", phonetic: "implɔ́ii", pos: "名", meanings: ["従業員"], related: ["employer 名 雇用主", "employment 名 雇用"] },
          { word: "demonstrate", phonetic: "démənstrèit", pos: "動", meanings: ["示す、実演する"], related: ["demonstration 名 実演、デモ"] },
          { word: "initiative", phonetic: "iníʃətiv", pos: "名", meanings: ["率先力、主導権"], related: ["initiate 動 開始する", "initial 形 最初の"] },
          { word: "promote", phonetic: "prəmóut", pos: "動", meanings: ["昇進させる", "促進する"], related: ["promotion 名 昇進、販促"] }
        ]
      },
      {
        id: 245,
        en: "The board appointed a competent executive to oversee the merger.",
        ja: "取締役会は合併を監督する有能な幹部を任命した。",
        words: [
          { word: "appoint", phonetic: "əpɔ́int", pos: "動", meanings: ["任命する、指名する"], related: ["appointment 名 任命、予約"] },
          { word: "competent", phonetic: "kɑ́mpətənt", pos: "形", meanings: ["有能な、適格な"], related: ["competence 名 能力", "⇔ incompetent 無能な"] },
          { word: "executive", phonetic: "igzékjutiv", pos: "名", meanings: ["幹部、重役"], related: ["execute 動 実行する", "execution 名 実行"] },
          { word: "oversee", phonetic: "òuvərsíː", pos: "動", meanings: ["監督する、管理する"], related: ["oversight 名 監視、見落とし"] },
          { word: "merger", phonetic: "mə́ːrdʒər", pos: "名", meanings: ["合併"], related: ["merge 動 合併する"] }
        ]
      },
      {
        id: 246,
        en: "Freelancers enjoy flexibility but must cope with irregular income.",
        ja: "フリーランスは柔軟性を享受できるが、不規則な収入に対処しなければならない。",
        words: [
          { word: "freelancer", phonetic: "fríːlæ̀nsər", pos: "名", meanings: ["フリーランス"], related: ["freelance 形 フリーランスの"] },
          { word: "flexibility", phonetic: "flèksəbíləti", pos: "名", meanings: ["柔軟性"], related: ["flexible 形 柔軟な", "⇔ rigid 硬い"] },
          { word: "cope with", phonetic: "kóup", pos: "動", meanings: ["〜に対処する、〜を乗り切る"], related: ["deal with, handle"] },
          { word: "irregular", phonetic: "irrégjulər", pos: "形", meanings: ["不規則な"], related: ["⇔ regular 規則的な", "irregularity 名 不規則"] }
        ]
      },
      {
        id: 247,
        en: "His dedication to the project earned him a generous bonus at the end of the fiscal year.",
        ja: "プロジェクトへの献身が評価され、会計年度末に多額のボーナスを得た。",
        words: [
          { word: "dedication", phonetic: "dèdikéiʃən", pos: "名", meanings: ["献身、専念"], related: ["dedicate 動 捧げる", "dedicated 形 献身的な"] },
          { word: "generous", phonetic: "dʒénərəs", pos: "形", meanings: ["気前のよい、寛大な"], related: ["generosity 名 寛大さ"] },
          { word: "bonus", phonetic: "bóunəs", pos: "名", meanings: ["ボーナス、賞与"], related: [] },
          { word: "fiscal", phonetic: "fískəl", pos: "形", meanings: ["会計の、財政の"], related: ["fiscal year 会計年度"] }
        ]
      },
      {
        id: 248,
        en: "The labor union negotiated better working conditions on behalf of the staff.",
        ja: "労働組合はスタッフに代わってより良い労働条件を交渉した。",
        words: [
          { word: "labor", phonetic: "léibər", pos: "名", meanings: ["労働、労力"], related: ["laborer 名 労働者", "labor union 労働組合"] },
          { word: "union", phonetic: "júːnjən", pos: "名", meanings: ["組合、連合"], related: ["unite 動 統合する", "unity 名 統一"] },
          { word: "negotiate", phonetic: "nigóuʃièit", pos: "動", meanings: ["交渉する"], related: ["negotiation 名 交渉", "negotiator 名 交渉人"] },
          { word: "on behalf of", phonetic: "", pos: "前", meanings: ["〜に代わって、〜のために"], related: ["behalf 名 利益、ため"] }
        ]
      },
      {
        id: 249,
        en: "Burnout is common among professionals who neglect to take adequate breaks.",
        ja: "十分な休憩を取ることを怠る専門職の間では燃え尽き症候群がよく見られる。",
        words: [
          { word: "burnout", phonetic: "bə́ːrnàut", pos: "名", meanings: ["燃え尽き症候群"], related: ["burn out 動 燃え尽きる"] },
          { word: "professional", phonetic: "prəféʃənl", pos: "名", meanings: ["専門家、プロ"], related: ["profession 名 職業"] },
          { word: "neglect", phonetic: "niglékt", pos: "動", meanings: ["怠る、無視する"], related: ["neglect 名 怠慢", "negligence 名 過失"] },
          { word: "adequate", phonetic: "ǽdikwit", pos: "形", meanings: ["十分な、適切な"], related: ["⇔ inadequate 不十分な"] }
        ]
      },
      {
        id: 250,
        en: "The intern gradually acquired practical skills under the guidance of a senior colleague.",
        ja: "インターンは先輩の指導のもとで徐々に実践的なスキルを身につけた。",
        words: [
          { word: "intern", phonetic: "intə́ːrn", pos: "名", meanings: ["インターン、実習生"], related: ["internship 名 実習期間"] },
          { word: "gradually", phonetic: "grǽdʒuəli", pos: "副", meanings: ["徐々に、段階的に"], related: ["gradual 形 緩やかな"] },
          { word: "acquire", phonetic: "əkwáiər", pos: "動", meanings: ["習得する、取得する"], related: ["acquisition 名 取得、買収"] },
          { word: "guidance", phonetic: "gáidəns", pos: "名", meanings: ["指導、案内"], related: ["guide 動 導く", "guideline 名 指針"] },
          { word: "colleague", phonetic: "kɑ́liːg", pos: "名", meanings: ["同僚"], related: ["coworker 名 同僚"] }
        ]
      },
      {
        id: 251,
        en: "She resigned from her corporate job to pursue an entrepreneurial venture.",
        ja: "彼女は起業の道を追求するために会社の仕事を辞めた。",
        words: [
          { word: "resign", phonetic: "rizáin", pos: "動", meanings: ["辞職する"], related: ["resignation 名 辞職、諦め"] },
          { word: "corporate", phonetic: "kɔ́ːrpərət", pos: "形", meanings: ["企業の、法人の"], related: ["corporation 名 企業、法人"] },
          { word: "pursue", phonetic: "pərsúː", pos: "動", meanings: ["追求する、追い求める"], related: ["pursuit 名 追求"] },
          { word: "entrepreneurial", phonetic: "ɑ̀ːntrəprənə́ːriəl", pos: "形", meanings: ["起業家の"], related: ["entrepreneur 名 起業家"] },
          { word: "venture", phonetic: "véntʃər", pos: "名", meanings: ["冒険的事業、ベンチャー"], related: ["venture 動 思い切ってする"] }
        ]
      },
      {
        id: 252,
        en: "Automation has displaced many routine tasks, compelling workers to upgrade their skills.",
        ja: "自動化は多くの定型業務を置き換え、労働者にスキルアップを迫っている。",
        words: [
          { word: "automation", phonetic: "ɔ̀ːtəméiʃən", pos: "名", meanings: ["自動化"], related: ["automate 動 自動化する", "automatic 形 自動の"] },
          { word: "displace", phonetic: "displéis", pos: "動", meanings: ["取って代わる、追い出す"], related: ["displacement 名 置き換え"] },
          { word: "routine", phonetic: "ruːtíːn", pos: "形", meanings: ["日常の、定型の"], related: ["routine 名 日課"] },
          { word: "compel", phonetic: "kəmpél", pos: "動", meanings: ["強いる、やむを得ずさせる"], related: ["compelling 形 説得力のある"] },
          { word: "upgrade", phonetic: "ʌ̀pgréid", pos: "動", meanings: ["向上させる、アップグレードする"], related: ["upgrade 名 向上"] }
        ]
      },
      {
        id: 253,
        en: "A well-structured interview reveals whether a candidate is the right fit for the role.",
        ja: "よく構成された面接は、候補者がその役割にふさわしいかを明らかにする。",
        words: [
          { word: "structured", phonetic: "strʌ́ktʃərd", pos: "形", meanings: ["構造化された、体系的な"], related: ["structure 名 構造"] },
          { word: "interview", phonetic: "íntərvjùː", pos: "名", meanings: ["面接、インタビュー"], related: ["interviewer 名 面接官"] },
          { word: "reveal", phonetic: "rivíːl", pos: "動", meanings: ["明らかにする、暴露する"], related: ["revelation 名 暴露"] },
          { word: "candidate", phonetic: "kǽndidèit", pos: "名", meanings: ["候補者、志願者"], related: ["candidacy 名 立候補"] }
        ]
      }
    ]
  },
  {
    section: 24,
    title: "Housing & Living",
    sentences: [
      {
        id: 254,
        en: "The landlord raised the rent, forcing several tenants to relocate.",
        ja: "大家が家賃を上げたため、数人の入居者は転居を余儀なくされた。",
        words: [
          { word: "landlord", phonetic: "lǽndlɔ̀ːrd", pos: "名", meanings: ["大家、家主"], related: ["tenant 名 入居者"] },
          { word: "rent", phonetic: "rént", pos: "名", meanings: ["家賃"], related: ["rent 動 賃借する", "rental 名 賃貸料"] },
          { word: "tenant", phonetic: "ténənt", pos: "名", meanings: ["入居者、借家人"], related: ["tenancy 名 借用期間"] },
          { word: "relocate", phonetic: "rìːloukéit", pos: "動", meanings: ["移転する、引っ越す"], related: ["relocation 名 移転"] }
        ]
      },
      {
        id: 255,
        en: "They renovated the basement and converted it into a cozy guest room.",
        ja: "彼らは地下室を改装し、居心地のよいゲストルームに改造した。",
        words: [
          { word: "renovate", phonetic: "rénəvèit", pos: "動", meanings: ["改装する、修繕する"], related: ["renovation 名 改装"] },
          { word: "basement", phonetic: "béismənt", pos: "名", meanings: ["地下室"], related: [] },
          { word: "convert", phonetic: "kənvə́ːrt", pos: "動", meanings: ["変換する、改造する"], related: ["conversion 名 変換", "convertible 形 変換可能な"] },
          { word: "cozy", phonetic: "kóuzi", pos: "形", meanings: ["居心地のよい"], related: ["coziness 名 居心地のよさ"] }
        ]
      },
      {
        id: 256,
        en: "Utility bills tend to spike during the winter due to heating costs.",
        ja: "暖房費のため、公共料金は冬の間に急増する傾向がある。",
        words: [
          { word: "utility", phonetic: "juːtíləti", pos: "名", meanings: ["公共料金、有用性"], related: ["utilize 動 利用する"] },
          { word: "bill", phonetic: "bíl", pos: "名", meanings: ["請求書、法案"], related: [] },
          { word: "spike", phonetic: "spáik", pos: "動", meanings: ["急増する、急騰する"], related: ["spike 名 急増"] },
          { word: "heating", phonetic: "híːtiŋ", pos: "名", meanings: ["暖房"], related: ["heat 名 熱", "heater 名 暖房器具"] }
        ]
      },
      {
        id: 257,
        en: "The plumber fixed the leaking faucet before it caused any further damage.",
        ja: "配管工は水漏れする蛇口をそれ以上の被害が出る前に修理した。",
        words: [
          { word: "plumber", phonetic: "plʌ́mər", pos: "名", meanings: ["配管工"], related: ["plumbing 名 配管工事"] },
          { word: "leak", phonetic: "líːk", pos: "動", meanings: ["漏れる"], related: ["leak 名 漏れ", "leakage 名 漏出"] },
          { word: "faucet", phonetic: "fɔ́ːsit", pos: "名", meanings: ["蛇口"], related: ["tap 名 蛇口（英）"] },
          { word: "damage", phonetic: "dǽmidʒ", pos: "名", meanings: ["損害、被害"], related: ["damage 動 損害を与える"] }
        ]
      },
      {
        id: 258,
        en: "Living in a suburb offers more space, though the commute can be tedious.",
        ja: "郊外に住むとより広い空間が得られるが、通勤が退屈になりうる。",
        words: [
          { word: "suburb", phonetic: "sʌ́bərb", pos: "名", meanings: ["郊外"], related: ["suburban 形 郊外の"] },
          { word: "commute", phonetic: "kəmjúːt", pos: "名", meanings: ["通勤"], related: ["commute 動 通勤する", "commuter 名 通勤者"] },
          { word: "tedious", phonetic: "tíːdiəs", pos: "形", meanings: ["退屈な、うんざりする"], related: ["tedium 名 退屈さ"] }
        ]
      },
      {
        id: 259,
        en: "The mortgage rate has risen sharply, discouraging first-time buyers from purchasing homes.",
        ja: "住宅ローン金利が急上昇し、初めての購入者がマイホームを買う意欲を削いでいる。",
        words: [
          { word: "mortgage", phonetic: "mɔ́ːrgidʒ", pos: "名", meanings: ["住宅ローン、抵当"], related: [] },
          { word: "sharply", phonetic: "ʃɑ́ːrpli", pos: "副", meanings: ["急激に、鋭く"], related: ["sharp 形 急な、鋭い"] },
          { word: "discourage", phonetic: "diskə́ːridʒ", pos: "動", meanings: ["思いとどまらせる、落胆させる"], related: ["⇔ encourage 励ます", "discouragement 名 落胆"] },
          { word: "purchase", phonetic: "pə́ːrtʃəs", pos: "動", meanings: ["購入する"], related: ["purchase 名 購入"] }
        ]
      },
      {
        id: 260,
        en: "Household chores are less burdensome when shared equally among family members.",
        ja: "家事は家族の間で均等に分担すると負担が少なくなる。",
        words: [
          { word: "household", phonetic: "háushòuld", pos: "名", meanings: ["家庭、世帯"], related: ["household 形 家庭の"] },
          { word: "chore", phonetic: "tʃɔ́ːr", pos: "名", meanings: ["家事、雑用"], related: [] },
          { word: "burdensome", phonetic: "bə́ːrdnsəm", pos: "形", meanings: ["負担の大きい"], related: ["burden 名 負担、重荷"] },
          { word: "equally", phonetic: "íːkwəli", pos: "副", meanings: ["均等に、平等に"], related: ["equal 形 平等な", "equality 名 平等"] }
        ]
      },
      {
        id: 261,
        en: "The architect designed an eco-friendly dwelling that maximizes natural ventilation.",
        ja: "建築家は自然換気を最大限に活かした環境にやさしい住居を設計した。",
        words: [
          { word: "architect", phonetic: "ɑ́ːrkitèkt", pos: "名", meanings: ["建築家"], related: ["architecture 名 建築"] },
          { word: "eco-friendly", phonetic: "ìːkoufréndli", pos: "形", meanings: ["環境にやさしい"], related: ["ecology 名 生態学"] },
          { word: "dwelling", phonetic: "dwéliŋ", pos: "名", meanings: ["住居"], related: ["dwell 動 住む"] },
          { word: "ventilation", phonetic: "vèntəléiʃən", pos: "名", meanings: ["換気、通風"], related: ["ventilate 動 換気する"] }
        ]
      },
      {
        id: 262,
        en: "Cluttered rooms can increase stress, so decluttering has become a popular lifestyle trend.",
        ja: "散らかった部屋はストレスを増やしうるため、断捨離は人気のライフスタイルトレンドになった。",
        words: [
          { word: "cluttered", phonetic: "klʌ́tərd", pos: "形", meanings: ["散らかった"], related: ["clutter 名 散らかり", "clutter 動 散らかす"] },
          { word: "stress", phonetic: "strés", pos: "名", meanings: ["ストレス、圧力"], related: ["stressful 形 ストレスの多い"] },
          { word: "declutter", phonetic: "dìːklʌ́tər", pos: "動", meanings: ["片付ける、断捨離する"], related: [] },
          { word: "trend", phonetic: "trénd", pos: "名", meanings: ["傾向、トレンド"], related: ["trendy 形 流行の"] }
        ]
      },
      {
        id: 263,
        en: "The neighborhood association held a meeting to address noise complaints from residents.",
        ja: "町内会は住民からの騒音苦情に対処するため会議を開いた。",
        words: [
          { word: "neighborhood", phonetic: "néibərhùd", pos: "名", meanings: ["近所、地域"], related: ["neighbor 名 隣人"] },
          { word: "association", phonetic: "əsòusiéiʃən", pos: "名", meanings: ["協会、組合"], related: ["associate 動 関連づける"] },
          { word: "address", phonetic: "ədréss", pos: "動", meanings: ["対処する、演説する"], related: ["address 名 住所、演説"] },
          { word: "complaint", phonetic: "kəmpléint", pos: "名", meanings: ["苦情、不満"], related: ["complain 動 不平を言う"] },
          { word: "resident", phonetic: "rézidənt", pos: "名", meanings: ["住民、居住者"], related: ["residence 名 住居", "residential 形 住宅の"] }
        ]
      }
    ]
  },
  {
    section: 25,
    title: "Transportation & Travel",
    sentences: [
      {
        id: 264,
        en: "The express train departs from platform three at precisely eight o'clock.",
        ja: "急行列車はちょうど8時に3番ホームから出発する。",
        words: [
          { word: "express", phonetic: "iksprés", pos: "形", meanings: ["急行の、速達の"], related: ["express 名 急行", "express 動 表現する"] },
          { word: "depart", phonetic: "dipɑ́ːrt", pos: "動", meanings: ["出発する"], related: ["departure 名 出発"] },
          { word: "platform", phonetic: "plǽtfɔ̀ːrm", pos: "名", meanings: ["プラットホーム、壇"], related: [] },
          { word: "precisely", phonetic: "prisáisli", pos: "副", meanings: ["正確に、ちょうど"], related: ["precise 形 正確な", "precision 名 精度"] }
        ]
      },
      {
        id: 265,
        en: "Turbulence during the flight alarmed the passengers, but the crew remained calm.",
        ja: "飛行中の乱気流は乗客を不安にさせたが、乗務員は冷静さを保った。",
        words: [
          { word: "turbulence", phonetic: "tə́ːrbjuləns", pos: "名", meanings: ["乱気流、騒動"], related: ["turbulent 形 荒れた"] },
          { word: "alarm", phonetic: "əlɑ́ːrm", pos: "動", meanings: ["不安にさせる、警報を出す"], related: ["alarm 名 警報", "alarming 形 不安にさせる"] },
          { word: "passenger", phonetic: "pǽsəndʒər", pos: "名", meanings: ["乗客"], related: [] },
          { word: "crew", phonetic: "krúː", pos: "名", meanings: ["乗組員、乗務員"], related: [] }
        ]
      },
      {
        id: 266,
        en: "Traffic congestion in the city center has prompted the government to invest in public transit.",
        ja: "都心の交通渋滞により、政府は公共交通機関への投資を促された。",
        words: [
          { word: "congestion", phonetic: "kəndʒéstʃən", pos: "名", meanings: ["渋滞、混雑"], related: ["congest 動 混雑させる"] },
          { word: "prompt", phonetic: "prɑ́mpt", pos: "動", meanings: ["促す、引き起こす"], related: ["prompt 形 迅速な", "promptly 副 すぐに"] },
          { word: "invest", phonetic: "invést", pos: "動", meanings: ["投資する"], related: ["investment 名 投資", "investor 名 投資家"] },
          { word: "transit", phonetic: "trǽnzit", pos: "名", meanings: ["交通機関、通過"], related: ["transition 名 移行"] }
        ]
      },
      {
        id: 267,
        en: "She booked a round-trip ticket well in advance to get a considerable discount.",
        ja: "彼女はかなりの割引を得るために、往復チケットをかなり前に予約した。",
        words: [
          { word: "book", phonetic: "búk", pos: "動", meanings: ["予約する"], related: ["booking 名 予約"] },
          { word: "round-trip", phonetic: "ráundtrìp", pos: "形", meanings: ["往復の"], related: ["⇔ one-way 片道の"] },
          { word: "considerable", phonetic: "kənsídərəbl", pos: "形", meanings: ["かなりの、相当な"], related: ["considerably 副 かなり"] },
          { word: "discount", phonetic: "dískaunt", pos: "名", meanings: ["割引"], related: ["discount 動 割引する"] }
        ]
      },
      {
        id: 268,
        en: "Cyclists are required to obey traffic signals and wear helmets at all times.",
        ja: "自転車利用者は常に交通信号を守り、ヘルメットを着用することが求められる。",
        words: [
          { word: "cyclist", phonetic: "sáiklist", pos: "名", meanings: ["自転車利用者"], related: ["cycle 名 自転車", "bicycle 名 自転車"] },
          { word: "obey", phonetic: "oubéi", pos: "動", meanings: ["従う、守る"], related: ["obedient 形 従順な", "⇔ disobey 従わない"] },
          { word: "signal", phonetic: "sígnəl", pos: "名", meanings: ["信号、合図"], related: ["signal 動 合図する"] },
          { word: "helmet", phonetic: "hélmit", pos: "名", meanings: ["ヘルメット"], related: [] }
        ]
      },
      {
        id: 269,
        en: "The ferry crosses the strait twice a day regardless of the weather conditions.",
        ja: "フェリーは天候に関係なく1日2回海峡を横断する。",
        words: [
          { word: "ferry", phonetic: "féri", pos: "名", meanings: ["フェリー、渡し船"], related: ["ferry 動 渡す"] },
          { word: "strait", phonetic: "stréit", pos: "名", meanings: ["海峡"], related: [] },
          { word: "twice", phonetic: "twáis", pos: "副", meanings: ["2回、2倍"], related: [] },
          { word: "condition", phonetic: "kəndíʃən", pos: "名", meanings: ["状態、条件"], related: ["conditional 形 条件付きの"] }
        ]
      },
      {
        id: 270,
        en: "Customs officers inspected every piece of luggage before allowing passengers through.",
        ja: "税関職員は乗客を通す前にすべての荷物を検査した。",
        words: [
          { word: "customs", phonetic: "kʌ́stəmz", pos: "名", meanings: ["税関"], related: ["custom 名 習慣"] },
          { word: "inspect", phonetic: "inspékt", pos: "動", meanings: ["検査する、調べる"], related: ["inspection 名 検査", "inspector 名 検査官"] },
          { word: "luggage", phonetic: "lʌ́gidʒ", pos: "名", meanings: ["荷物"], related: ["baggage 名 荷物"] }
        ]
      },
      {
        id: 271,
        en: "The highway was temporarily closed due to a landslide caused by heavy rainfall.",
        ja: "大雨による地滑りのため、高速道路は一時的に閉鎖された。",
        words: [
          { word: "highway", phonetic: "háiwèi", pos: "名", meanings: ["高速道路、幹線道路"], related: ["freeway 名 高速道路"] },
          { word: "temporarily", phonetic: "tèmpəréərili", pos: "副", meanings: ["一時的に"], related: ["temporary 形 一時的な", "⇔ permanent 永久の"] },
          { word: "landslide", phonetic: "lǽndslàid", pos: "名", meanings: ["地滑り"], related: [] },
          { word: "rainfall", phonetic: "réinfɔ̀ːl", pos: "名", meanings: ["降雨、雨量"], related: [] }
        ]
      },
      {
        id: 272,
        en: "Navigating through unfamiliar streets is much easier with a reliable GPS device.",
        ja: "信頼できるGPS端末があれば、見知らぬ通りを走るのもずっと簡単だ。",
        words: [
          { word: "navigate", phonetic: "nǽvigèit", pos: "動", meanings: ["道を見つける、航行する"], related: ["navigation 名 航行", "navigator 名 ナビゲーター"] },
          { word: "unfamiliar", phonetic: "ʌ̀nfəmíljər", pos: "形", meanings: ["よく知らない、なじみのない"], related: ["⇔ familiar なじみのある"] },
          { word: "reliable", phonetic: "riláiəbl", pos: "形", meanings: ["信頼できる"], related: ["rely 動 頼る", "reliability 名 信頼性"] },
          { word: "device", phonetic: "diváis", pos: "名", meanings: ["装置、端末"], related: ["devise 動 考案する"] }
        ]
      },
      {
        id: 273,
        en: "Traveling abroad broadens your perspective and deepens your appreciation of other cultures.",
        ja: "海外旅行は視野を広げ、他文化への理解を深めてくれる。",
        words: [
          { word: "abroad", phonetic: "əbrɔ́ːd", pos: "副", meanings: ["海外に、外国で"], related: ["overseas 副 海外に"] },
          { word: "broaden", phonetic: "brɔ́ːdn", pos: "動", meanings: ["広げる"], related: ["broad 形 広い"] },
          { word: "perspective", phonetic: "pərspéktiv", pos: "名", meanings: ["視点、観点"], related: ["viewpoint 名 視点"] },
          { word: "appreciation", phonetic: "əprìːʃiéiʃən", pos: "名", meanings: ["理解、感謝、鑑賞"], related: ["appreciate 動 感謝する、理解する"] }
        ]
      },
      {
        id: 274,
        en: "The cruise ship docked at the harbor after a spectacular voyage across the Atlantic.",
        ja: "クルーズ船は大西洋の壮大な航海を終えて港に接岸した。",
        words: [
          { word: "cruise", phonetic: "krúːz", pos: "名", meanings: ["クルーズ、巡航"], related: ["cruise 動 巡航する"] },
          { word: "dock", phonetic: "dɑ́k", pos: "動", meanings: ["接岸する、入港する"], related: ["dock 名 ドック、波止場"] },
          { word: "harbor", phonetic: "hɑ́ːrbər", pos: "名", meanings: ["港"], related: ["harbor 動 かくまう"] },
          { word: "spectacular", phonetic: "spektǽkjulər", pos: "形", meanings: ["壮大な、目を見張る"], related: ["spectacle 名 光景"] },
          { word: "voyage", phonetic: "vɔ́iidʒ", pos: "名", meanings: ["航海、旅行"], related: ["voyager 名 航海者"] }
        ]
      }
    ]
  },
  {
    section: 26,
    title: "Communication & Language",
    sentences: [
      {
        id: 275,
        en: "Fluency in a foreign language requires consistent practice and persistent effort.",
        ja: "外国語の流暢さには一貫した練習と粘り強い努力が必要だ。",
        words: [
          { word: "fluency", phonetic: "flúːənsi", pos: "名", meanings: ["流暢さ"], related: ["fluent 形 流暢な", "fluently 副 流暢に"] },
          { word: "consistent", phonetic: "kənsístənt", pos: "形", meanings: ["一貫した、矛盾のない"], related: ["consistency 名 一貫性", "⇔ inconsistent 矛盾した"] },
          { word: "persistent", phonetic: "pərsístənt", pos: "形", meanings: ["粘り強い、しつこい"], related: ["persist 動 固執する", "persistence 名 粘り強さ"] }
        ]
      },
      {
        id: 276,
        en: "The interpreter conveyed the speaker's message accurately despite the complex terminology.",
        ja: "通訳者は複雑な専門用語にもかかわらず、話者のメッセージを正確に伝えた。",
        words: [
          { word: "interpreter", phonetic: "intə́ːrpritər", pos: "名", meanings: ["通訳者"], related: ["interpret 動 通訳する、解釈する"] },
          { word: "convey", phonetic: "kənvéi", pos: "動", meanings: ["伝える、運ぶ"], related: ["conveyance 名 伝達、運搬"] },
          { word: "accurately", phonetic: "ǽkjurətli", pos: "副", meanings: ["正確に"], related: ["accurate 形 正確な", "accuracy 名 正確さ"] },
          { word: "terminology", phonetic: "tə̀ːrmənɑ́lədʒi", pos: "名", meanings: ["専門用語"], related: ["term 名 用語、期間"] }
        ]
      },
      {
        id: 277,
        en: "Ambiguous wording in the contract led to a serious misunderstanding between both parties.",
        ja: "契約書のあいまいな表現が両者間の深刻な誤解を引き起こした。",
        words: [
          { word: "ambiguous", phonetic: "æmbígjuəs", pos: "形", meanings: ["あいまいな、多義的な"], related: ["ambiguity 名 あいまいさ", "⇔ unambiguous 明白な"] },
          { word: "wording", phonetic: "wə́ːrdiŋ", pos: "名", meanings: ["言い回し、表現"], related: ["word 名 語"] },
          { word: "contract", phonetic: "kɑ́ntrækt", pos: "名", meanings: ["契約書"], related: ["contract 動 契約する", "contractor 名 請負業者"] },
          { word: "misunderstanding", phonetic: "mìsʌndərstǽndiŋ", pos: "名", meanings: ["誤解"], related: ["misunderstand 動 誤解する"] }
        ]
      },
      {
        id: 278,
        en: "Body language often communicates more than spoken words in everyday interactions.",
        ja: "日常のやりとりでは、ボディランゲージが言葉以上に多くを伝えることが多い。",
        words: [
          { word: "body language", phonetic: "bɑ́di lǽŋgwidʒ", pos: "名", meanings: ["ボディランゲージ、身振り"], related: ["gesture 名 ジェスチャー"] },
          { word: "communicate", phonetic: "kəmjúːnikèit", pos: "動", meanings: ["伝える、意思疎通する"], related: ["communication 名 伝達、通信"] },
          { word: "interaction", phonetic: "ìntərǽkʃən", pos: "名", meanings: ["やりとり、交流"], related: ["interact 動 交流する", "interactive 形 双方向の"] }
        ]
      },
      {
        id: 279,
        en: "The editor corrected numerous grammatical errors before the manuscript went to print.",
        ja: "編集者は原稿が印刷に回る前に多数の文法ミスを修正した。",
        words: [
          { word: "editor", phonetic: "éditər", pos: "名", meanings: ["編集者"], related: ["edit 動 編集する", "editorial 形 編集の"] },
          { word: "numerous", phonetic: "njúːmərəs", pos: "形", meanings: ["多数の"], related: ["number 名 数"] },
          { word: "grammatical", phonetic: "grəmǽtikəl", pos: "形", meanings: ["文法の"], related: ["grammar 名 文法"] },
          { word: "manuscript", phonetic: "mǽnjuskrìpt", pos: "名", meanings: ["原稿"], related: [] }
        ]
      },
      {
        id: 280,
        en: "Slang expressions evolve rapidly, often confusing those unfamiliar with current usage.",
        ja: "スラング表現は急速に進化し、現在の用法に慣れていない人を混乱させることが多い。",
        words: [
          { word: "slang", phonetic: "slǽŋ", pos: "名", meanings: ["スラング、俗語"], related: ["colloquial 形 口語の"] },
          { word: "evolve", phonetic: "ivɑ́lv", pos: "動", meanings: ["進化する、発展する"], related: ["evolution 名 進化"] },
          { word: "rapidly", phonetic: "rǽpidli", pos: "副", meanings: ["急速に"], related: ["rapid 形 急速な"] },
          { word: "usage", phonetic: "júːsidʒ", pos: "名", meanings: ["用法、使用"], related: ["use 動 使う"] }
        ]
      },
      {
        id: 281,
        en: "Learning to articulate your thoughts clearly is essential for effective persuasion.",
        ja: "自分の考えを明確に言語化する力を身につけることは、効果的な説得に不可欠だ。",
        words: [
          { word: "articulate", phonetic: "ɑːrtíkjulèit", pos: "動", meanings: ["明確に述べる、言語化する"], related: ["articulate 形 明瞭な", "articulation 名 明瞭な発音"] },
          { word: "essential", phonetic: "isénʃəl", pos: "形", meanings: ["不可欠な、本質的な"], related: ["essence 名 本質", "essentially 副 本質的に"] },
          { word: "persuasion", phonetic: "pərswéiʒən", pos: "名", meanings: ["説得"], related: ["persuade 動 説得する", "persuasive 形 説得力のある"] }
        ]
      },
      {
        id: 282,
        en: "The dialect spoken in that remote village is barely intelligible to outsiders.",
        ja: "あの辺境の村で話される方言は、外部の人にはほとんど理解できない。",
        words: [
          { word: "dialect", phonetic: "dáiəlèkt", pos: "名", meanings: ["方言"], related: ["accent 名 なまり"] },
          { word: "remote", phonetic: "rimóut", pos: "形", meanings: ["辺境の、遠い"], related: ["remotely 副 遠くに", "remoteness 名 遠さ"] },
          { word: "barely", phonetic: "béərli", pos: "副", meanings: ["かろうじて、ほとんど〜ない"], related: ["bare 形 裸の、むき出しの"] },
          { word: "intelligible", phonetic: "intélidʒəbl", pos: "形", meanings: ["理解できる"], related: ["⇔ unintelligible 理解しがたい"] }
        ]
      },
      {
        id: 283,
        en: "Social media platforms have transformed the way people exchange information worldwide.",
        ja: "ソーシャルメディアは世界中の人々の情報交換の方法を一変させた。",
        words: [
          { word: "platform", phonetic: "plǽtfɔ̀ːrm", pos: "名", meanings: ["プラットフォーム、基盤"], related: [] },
          { word: "transform", phonetic: "trænsfɔ́ːrm", pos: "動", meanings: ["一変させる、変形する"], related: ["transformation 名 変革"] },
          { word: "exchange", phonetic: "ikstʃéindʒ", pos: "動", meanings: ["交換する"], related: ["exchange 名 交換"] },
          { word: "worldwide", phonetic: "wə́ːrldwàid", pos: "副", meanings: ["世界中で"], related: ["worldwide 形 世界規模の"] }
        ]
      },
      {
        id: 284,
        en: "A concise summary is far more effective than a lengthy, verbose explanation.",
        ja: "簡潔な要約は、長くて冗長な説明よりもはるかに効果的だ。",
        words: [
          { word: "concise", phonetic: "kənsáis", pos: "形", meanings: ["簡潔な"], related: ["⇔ verbose 冗長な", "conciseness 名 簡潔さ"] },
          { word: "summary", phonetic: "sʌ́məri", pos: "名", meanings: ["要約"], related: ["summarize 動 要約する"] },
          { word: "lengthy", phonetic: "léŋkθi", pos: "形", meanings: ["長い、冗長な"], related: ["length 名 長さ"] },
          { word: "verbose", phonetic: "vəːrbóus", pos: "形", meanings: ["冗長な、くどい"], related: ["verbosity 名 冗長さ"] }
        ]
      },
      {
        id: 285,
        en: "Nonverbal cues such as eye contact and posture significantly influence first impressions.",
        ja: "アイコンタクトや姿勢などの非言語的な手がかりは第一印象に大きく影響する。",
        words: [
          { word: "nonverbal", phonetic: "nɑ̀nvə́ːrbəl", pos: "形", meanings: ["非言語の"], related: ["verbal 形 言語の"] },
          { word: "cue", phonetic: "kjúː", pos: "名", meanings: ["手がかり、合図"], related: [] },
          { word: "posture", phonetic: "pɑ́stʃər", pos: "名", meanings: ["姿勢"], related: [] },
          { word: "impression", phonetic: "impréʃən", pos: "名", meanings: ["印象"], related: ["impress 動 感銘を与える", "impressive 形 印象的な"] }
        ]
      }
    ]
  },
  {
    section: 27,
    title: "History & Tradition",
    sentences: [
      {
        id: 286,
        en: "Ancient civilizations flourished along the banks of major rivers for centuries.",
        ja: "古代文明は何世紀にもわたり大河の流域で栄えた。",
        words: [
          { word: "ancient", phonetic: "éinʃənt", pos: "形", meanings: ["古代の、太古の"], related: ["⇔ modern 現代の"] },
          { word: "civilization", phonetic: "sìvələzéiʃən", pos: "名", meanings: ["文明"], related: ["civilize 動 文明化する", "civilized 形 文明化した"] },
          { word: "flourish", phonetic: "flə́ːriʃ", pos: "動", meanings: ["栄える、繁栄する"], related: ["flourishing 形 繁栄している"] },
          { word: "bank", phonetic: "bǽŋk", pos: "名", meanings: ["（川の）岸、銀行"], related: [] }
        ]
      },
      {
        id: 287,
        en: "The dynasty collapsed when internal conflicts weakened its military power.",
        ja: "内部抗争が軍事力を弱めたとき、その王朝は崩壊した。",
        words: [
          { word: "dynasty", phonetic: "dáinəsti", pos: "名", meanings: ["王朝"], related: ["dynastic 形 王朝の"] },
          { word: "collapse", phonetic: "kəlǽps", pos: "動", meanings: ["崩壊する"], related: ["collapse 名 崩壊"] },
          { word: "conflict", phonetic: "kɑ́nflikt", pos: "名", meanings: ["争い、対立"], related: ["conflict 動 対立する"] },
          { word: "weaken", phonetic: "wíːkən", pos: "動", meanings: ["弱める、弱まる"], related: ["weak 形 弱い", "weakness 名 弱さ"] }
        ]
      },
      {
        id: 288,
        en: "Archaeologists unearthed a collection of pottery dating back to the Bronze Age.",
        ja: "考古学者たちは青銅器時代に遡る陶器のコレクションを発掘した。",
        words: [
          { word: "archaeologist", phonetic: "ɑ̀ːrkiɑ́lədʒist", pos: "名", meanings: ["考古学者"], related: ["archaeology 名 考古学"] },
          { word: "unearth", phonetic: "ʌnə́ːrθ", pos: "動", meanings: ["発掘する、発見する"], related: ["earth 名 地球、土"] },
          { word: "pottery", phonetic: "pɑ́təri", pos: "名", meanings: ["陶器"], related: ["potter 名 陶芸家"] },
          { word: "date back to", phonetic: "", pos: "動", meanings: ["〜に遡る"], related: [] }
        ]
      },
      {
        id: 289,
        en: "Colonialism left a lasting legacy that continues to shape political boundaries today.",
        ja: "植民地主義は今日も政治的境界を形作り続ける永続的な遺産を残した。",
        words: [
          { word: "colonialism", phonetic: "kəlóuniəlìzm", pos: "名", meanings: ["植民地主義"], related: ["colony 名 植民地", "colonial 形 植民地の"] },
          { word: "lasting", phonetic: "lǽstiŋ", pos: "形", meanings: ["永続的な、長く続く"], related: ["last 動 続く"] },
          { word: "legacy", phonetic: "légəsi", pos: "名", meanings: ["遺産、レガシー"], related: [] },
          { word: "boundary", phonetic: "báundəri", pos: "名", meanings: ["境界"], related: ["bound 名 限界"] }
        ]
      },
      {
        id: 290,
        en: "Medieval knights swore an oath of loyalty to their sovereign lord.",
        ja: "中世の騎士たちは主権者に忠誠の誓いを立てた。",
        words: [
          { word: "medieval", phonetic: "mìːdiíːvəl", pos: "形", meanings: ["中世の"], related: ["Middle Ages 中世"] },
          { word: "knight", phonetic: "náit", pos: "名", meanings: ["騎士"], related: ["knighthood 名 騎士の位"] },
          { word: "oath", phonetic: "óuθ", pos: "名", meanings: ["誓い、宣誓"], related: ["swear an oath 誓いを立てる"] },
          { word: "loyalty", phonetic: "lɔ́iəlti", pos: "名", meanings: ["忠誠、忠実"], related: ["loyal 形 忠実な", "⇔ disloyal 不忠実な"] },
          { word: "sovereign", phonetic: "sɑ́vrən", pos: "形", meanings: ["主権のある、最高の"], related: ["sovereignty 名 主権"] }
        ]
      },
      {
        id: 291,
        en: "The revolution overthrew the monarchy and established a republic based on democratic principles.",
        ja: "革命は君主制を打倒し、民主主義の原則に基づく共和国を樹立した。",
        words: [
          { word: "revolution", phonetic: "rèvəlúːʃən", pos: "名", meanings: ["革命"], related: ["revolutionary 形 革命的な"] },
          { word: "overthrow", phonetic: "òuvərθróu", pos: "動", meanings: ["打倒する、転覆する"], related: ["overthrow 名 転覆"] },
          { word: "monarchy", phonetic: "mɑ́nərki", pos: "名", meanings: ["君主制"], related: ["monarch 名 君主"] },
          { word: "republic", phonetic: "ripʌ́blik", pos: "名", meanings: ["共和国"], related: ["republican 形 共和国の"] },
          { word: "democratic", phonetic: "dèməkrǽtik", pos: "形", meanings: ["民主主義の"], related: ["democracy 名 民主主義"] }
        ]
      },
      {
        id: 292,
        en: "Oral traditions preserved the folklore of indigenous communities for generations.",
        ja: "口承の伝統が先住民コミュニティの民間伝承を何世代にもわたって守ってきた。",
        words: [
          { word: "oral", phonetic: "ɔ́ːrəl", pos: "形", meanings: ["口頭の、口述の"], related: ["orally 副 口頭で"] },
          { word: "preserve", phonetic: "prizə́ːrv", pos: "動", meanings: ["保存する、守る"], related: ["preservation 名 保存"] },
          { word: "folklore", phonetic: "fóuklɔ̀ːr", pos: "名", meanings: ["民間伝承"], related: ["folk 名 民衆"] },
          { word: "indigenous", phonetic: "indídʒənəs", pos: "形", meanings: ["先住の、土着の"], related: ["native 形 生まれつきの"] },
          { word: "generation", phonetic: "dʒènəréiʃən", pos: "名", meanings: ["世代"], related: ["generate 動 生み出す"] }
        ]
      },
      {
        id: 293,
        en: "The treaty ended decades of hostility and marked the beginning of a new diplomatic era.",
        ja: "その条約は何十年もの敵対関係を終わらせ、新たな外交時代の幕開けとなった。",
        words: [
          { word: "treaty", phonetic: "tríːti", pos: "名", meanings: ["条約"], related: ["treaty 条約を結ぶ"] },
          { word: "decade", phonetic: "dékeid", pos: "名", meanings: ["10年間"], related: [] },
          { word: "hostility", phonetic: "hɑstíləti", pos: "名", meanings: ["敵意、敵対"], related: ["hostile 形 敵対的な"] },
          { word: "diplomatic", phonetic: "dìpləmǽtik", pos: "形", meanings: ["外交の"], related: ["diplomat 名 外交官", "diplomacy 名 外交"] },
          { word: "era", phonetic: "íərə", pos: "名", meanings: ["時代"], related: ["epoch 名 時代"] }
        ]
      },
      {
        id: 294,
        en: "Harvest festivals have been celebrated since antiquity to express gratitude for abundant crops.",
        ja: "収穫祭は豊作への感謝を表すために古代から祝われてきた。",
        words: [
          { word: "harvest", phonetic: "hɑ́ːrvist", pos: "名", meanings: ["収穫"], related: ["harvest 動 収穫する"] },
          { word: "celebrate", phonetic: "séləbrèit", pos: "動", meanings: ["祝う"], related: ["celebration 名 祝祭"] },
          { word: "antiquity", phonetic: "æntíkwəti", pos: "名", meanings: ["古代、古さ"], related: ["antique 形 骨董の"] },
          { word: "gratitude", phonetic: "grǽtitjùːd", pos: "名", meanings: ["感謝"], related: ["grateful 形 感謝している"] },
          { word: "abundant", phonetic: "əbʌ́ndənt", pos: "形", meanings: ["豊富な"], related: ["abundance 名 豊富"] }
        ]
      },
      {
        id: 295,
        en: "The historian traced the origins of the custom to a feudal ceremony in the fifteenth century.",
        ja: "その歴史家はその慣習の起源を15世紀の封建的な儀式に辿った。",
        words: [
          { word: "historian", phonetic: "histɔ́ːriən", pos: "名", meanings: ["歴史家"], related: ["history 名 歴史", "historic 形 歴史的な"] },
          { word: "trace", phonetic: "tréis", pos: "動", meanings: ["辿る、追跡する"], related: ["trace 名 痕跡"] },
          { word: "custom", phonetic: "kʌ́stəm", pos: "名", meanings: ["慣習、風習"], related: ["customary 形 慣習的な"] },
          { word: "feudal", phonetic: "fjúːdl", pos: "形", meanings: ["封建的な"], related: ["feudalism 名 封建制度"] },
          { word: "ceremony", phonetic: "sérəmòuni", pos: "名", meanings: ["儀式、式典"], related: ["ceremonial 形 儀式の"] }
        ]
      },
      {
        id: 296,
        en: "Monuments and memorials serve as reminders of the sacrifices made by previous generations.",
        ja: "記念碑や慰霊碑は前の世代がなした犠牲を思い起こさせる役割を果たす。",
        words: [
          { word: "monument", phonetic: "mɑ́njumənt", pos: "名", meanings: ["記念碑"], related: ["monumental 形 記念碑の、巨大な"] },
          { word: "memorial", phonetic: "məmɔ́ːriəl", pos: "名", meanings: ["慰霊碑、記念物"], related: ["memory 名 記憶", "memorize 動 暗記する"] },
          { word: "reminder", phonetic: "rimáindər", pos: "名", meanings: ["思い出させるもの"], related: ["remind 動 思い出させる"] },
          { word: "sacrifice", phonetic: "sǽkrəfàis", pos: "名", meanings: ["犠牲"], related: ["sacrifice 動 犠牲にする"] }
        ]
      }
    ]
  },
  {
    section: 28,
    title: "Art & Creativity",
    sentences: [
      {
        id: 297,
        en: "The sculptor carved an intricate figure out of a single block of marble.",
        ja: "その彫刻家は一つの大理石の塊から精巧な像を彫り上げた。",
        words: [
          { word: "sculptor", phonetic: "skʌ́lptər", pos: "名", meanings: ["彫刻家"], related: ["sculpture 名 彫刻", "sculpt 動 彫る"] },
          { word: "carve", phonetic: "kɑ́ːrv", pos: "動", meanings: ["彫る、刻む"], related: ["carving 名 彫刻作品"] },
          { word: "intricate", phonetic: "íntrikət", pos: "形", meanings: ["精巧な、複雑な"], related: ["intricacy 名 複雑さ"] },
          { word: "marble", phonetic: "mɑ́ːrbl", pos: "名", meanings: ["大理石"], related: [] }
        ]
      },
      {
        id: 298,
        en: "Abstract paintings challenge viewers to interpret the meaning beyond the visible surface.",
        ja: "抽象画は、目に見える表面を超えた意味を解釈するよう鑑賞者に問いかける。",
        words: [
          { word: "abstract", phonetic: "ǽbstrækt", pos: "形", meanings: ["抽象的な"], related: ["abstraction 名 抽象", "⇔ concrete 具体的な"] },
          { word: "challenge", phonetic: "tʃǽləndʒ", pos: "動", meanings: ["挑む、問いかける"], related: ["challenge 名 挑戦", "challenging 形 困難な"] },
          { word: "viewer", phonetic: "vjúːər", pos: "名", meanings: ["鑑賞者、視聴者"], related: ["view 動 見る", "view 名 景色、見解"] },
          { word: "interpret", phonetic: "intə́ːrprit", pos: "動", meanings: ["解釈する"], related: ["interpretation 名 解釈"] },
          { word: "visible", phonetic: "vízəbl", pos: "形", meanings: ["目に見える"], related: ["⇔ invisible 見えない", "visibility 名 視界"] }
        ]
      },
      {
        id: 299,
        en: "The composer blended classical melodies with contemporary rhythms to create a unique piece.",
        ja: "その作曲家は古典的なメロディーと現代的なリズムを融合させ、独自の作品を生み出した。",
        words: [
          { word: "composer", phonetic: "kəmpóuzər", pos: "名", meanings: ["作曲家"], related: ["compose 動 作曲する", "composition 名 作曲、構成"] },
          { word: "blend", phonetic: "blénd", pos: "動", meanings: ["混ぜる、融合させる"], related: ["blend 名 混合"] },
          { word: "classical", phonetic: "klǽsikəl", pos: "形", meanings: ["古典の、クラシックの"], related: ["classic 形 古典的な"] },
          { word: "melody", phonetic: "mélədi", pos: "名", meanings: ["メロディー、旋律"], related: ["melodic 形 旋律的な"] },
          { word: "contemporary", phonetic: "kəntémpərèri", pos: "形", meanings: ["現代の、同時代の"], related: [] }
        ]
      },
      {
        id: 300,
        en: "Creativity thrives when artists are free from rigid conventions and external pressure.",
        ja: "堅苦しい慣例や外部の圧力から解放されたとき、創造性は花開く。",
        words: [
          { word: "creativity", phonetic: "krìːeitivəti", pos: "名", meanings: ["創造性"], related: ["creative 形 創造的な", "create 動 創造する"] },
          { word: "thrive", phonetic: "θráiv", pos: "動", meanings: ["繁栄する、花開く"], related: ["thriving 形 繁栄している"] },
          { word: "rigid", phonetic: "rídʒid", pos: "形", meanings: ["堅い、厳格な"], related: ["rigidity 名 堅さ", "⇔ flexible 柔軟な"] },
          { word: "convention", phonetic: "kənvénʃən", pos: "名", meanings: ["慣例、大会"], related: ["conventional 形 従来の", "⇔ unconventional 型破りな"] },
          { word: "external", phonetic: "ikstə́ːrnl", pos: "形", meanings: ["外部の"], related: ["⇔ internal 内部の"] }
        ]
      },
      {
        id: 301,
        en: "The gallery exhibited a stunning collection of watercolor landscapes by local artists.",
        ja: "そのギャラリーは地元のアーティストによる見事な水彩風景画のコレクションを展示した。",
        words: [
          { word: "gallery", phonetic: "gǽləri", pos: "名", meanings: ["ギャラリー、画廊"], related: [] },
          { word: "exhibit", phonetic: "igzíbit", pos: "動", meanings: ["展示する"], related: ["exhibition 名 展覧会", "exhibit 名 展示品"] },
          { word: "stunning", phonetic: "stʌ́niŋ", pos: "形", meanings: ["見事な、驚くほど美しい"], related: ["stun 動 驚かせる"] },
          { word: "watercolor", phonetic: "wɔ́ːtərkʌ̀lər", pos: "名", meanings: ["水彩画"], related: [] },
          { word: "landscape", phonetic: "lǽndskèip", pos: "名", meanings: ["風景、風景画"], related: [] }
        ]
      },
      {
        id: 302,
        en: "The playwright crafted a gripping drama that moved audiences to tears every night.",
        ja: "その劇作家は毎晩観客を涙に誘う迫力ある劇を生み出した。",
        words: [
          { word: "playwright", phonetic: "pléiràit", pos: "名", meanings: ["劇作家"], related: ["play 名 劇"] },
          { word: "craft", phonetic: "krǽft", pos: "動", meanings: ["巧みに作る"], related: ["craft 名 工芸、技能", "craftsman 名 職人"] },
          { word: "gripping", phonetic: "grípiŋ", pos: "形", meanings: ["手に汗握る、心をつかむ"], related: ["grip 動 つかむ"] },
          { word: "drama", phonetic: "drɑ́ːmə", pos: "名", meanings: ["劇、ドラマ"], related: ["dramatic 形 劇的な"] },
          { word: "audience", phonetic: "ɔ́ːdiəns", pos: "名", meanings: ["観客、聴衆"], related: [] }
        ]
      },
      {
        id: 303,
        en: "Photography captures fleeting moments that would otherwise vanish from memory.",
        ja: "写真はそうでなければ記憶から消え去ってしまう一瞬の瞬間を捉える。",
        words: [
          { word: "photography", phonetic: "fətɑ́grəfi", pos: "名", meanings: ["写真術、写真"], related: ["photograph 名 写真", "photographer 名 写真家"] },
          { word: "capture", phonetic: "kǽptʃər", pos: "動", meanings: ["捉える、撮影する"], related: ["capture 名 捕獲"] },
          { word: "fleeting", phonetic: "flíːtiŋ", pos: "形", meanings: ["束の間の、はかない"], related: ["fleet 動 素早く過ぎ去る"] },
          { word: "vanish", phonetic: "vǽniʃ", pos: "動", meanings: ["消え去る"], related: ["disappear 動 消える"] }
        ]
      },
      {
        id: 304,
        en: "The mural on the building's facade depicts the cultural heritage of the neighborhood.",
        ja: "建物のファサードの壁画はその地域の文化遺産を描いている。",
        words: [
          { word: "mural", phonetic: "mjúərəl", pos: "名", meanings: ["壁画"], related: [] },
          { word: "facade", phonetic: "fəsɑ́ːd", pos: "名", meanings: ["建物の正面、ファサード"], related: [] },
          { word: "depict", phonetic: "dipíkt", pos: "動", meanings: ["描く、表現する"], related: ["depiction 名 描写"] },
          { word: "heritage", phonetic: "héritidʒ", pos: "名", meanings: ["遺産、伝統"], related: ["inherit 動 受け継ぐ"] }
        ]
      },
      {
        id: 305,
        en: "Improvisation in jazz allows musicians to express spontaneous emotion through their instruments.",
        ja: "ジャズにおける即興演奏は、ミュージシャンが楽器を通じて即発的な感情を表現することを可能にする。",
        words: [
          { word: "improvisation", phonetic: "ìmprəvəzéiʃən", pos: "名", meanings: ["即興演奏、即興"], related: ["improvise 動 即興で行う"] },
          { word: "spontaneous", phonetic: "spɑntéiniəs", pos: "形", meanings: ["自発的な、即発的な"], related: ["spontaneity 名 自発性"] },
          { word: "emotion", phonetic: "imóuʃən", pos: "名", meanings: ["感情"], related: ["emotional 形 感情の"] },
          { word: "instrument", phonetic: "ínstrəmənt", pos: "名", meanings: ["楽器、道具"], related: ["instrumental 形 楽器の、助けとなる"] }
        ]
      },
      {
        id: 306,
        en: "The ceramic vase, though fragile in appearance, has survived intact for over three centuries.",
        ja: "その陶磁器の花瓶は見た目はもろいが、3世紀以上にわたり無傷で残っている。",
        words: [
          { word: "ceramic", phonetic: "sərǽmik", pos: "形", meanings: ["陶磁器の"], related: ["ceramics 名 陶芸"] },
          { word: "fragile", phonetic: "frǽdʒəl", pos: "形", meanings: ["もろい、壊れやすい"], related: ["fragility 名 もろさ"] },
          { word: "survive", phonetic: "sərváiv", pos: "動", meanings: ["生き残る、残存する"], related: ["survival 名 生存", "survivor 名 生存者"] },
          { word: "intact", phonetic: "intǽkt", pos: "形", meanings: ["無傷の、そのままの"], related: [] },
          { word: "century", phonetic: "séntʃuri", pos: "名", meanings: ["世紀、100年"], related: [] }
        ]
      },
      {
        id: 307,
        en: "Literary critics praised the novel for its vivid imagery and compelling narrative.",
        ja: "文芸評論家たちはその小説の鮮やかなイメージと説得力のある物語を称賛した。",
        words: [
          { word: "literary", phonetic: "lítərèri", pos: "形", meanings: ["文学の"], related: ["literature 名 文学"] },
          { word: "critic", phonetic: "krítik", pos: "名", meanings: ["評論家、批評家"], related: ["criticism 名 批評", "criticize 動 批判する"] },
          { word: "vivid", phonetic: "vívid", pos: "形", meanings: ["鮮やかな、生き生きとした"], related: ["vividly 副 鮮やかに"] },
          { word: "imagery", phonetic: "ímidʒəri", pos: "名", meanings: ["イメージ、比喩表現"], related: ["image 名 画像、イメージ"] },
          { word: "narrative", phonetic: "nǽrətiv", pos: "名", meanings: ["物語、語り"], related: ["narrate 動 語る", "narrator 名 語り手"] }
        ]
      }
    ]
  },
  {
    section: 29,
    title: "Philosophy & Ethics",
    sentences: [
      {
        id: 308,
        en: "The philosopher argued that genuine happiness stems from inner contentment, not material wealth.",
        ja: "その哲学者は、本当の幸福は物質的な富ではなく内面の満足から生じると主張した。",
        words: [
          { word: "philosopher", phonetic: "fəlɑ́səfər", pos: "名", meanings: ["哲学者"], related: ["philosophy 名 哲学", "philosophical 形 哲学的な"] },
          { word: "genuine", phonetic: "dʒénjuin", pos: "形", meanings: ["本物の、偽りのない"], related: ["genuinely 副 心から"] },
          { word: "stem from", phonetic: "stém", pos: "動", meanings: ["〜から生じる、〜に由来する"], related: ["stem 名 茎、幹"] },
          { word: "contentment", phonetic: "kənténtmənt", pos: "名", meanings: ["満足"], related: ["content 形 満足した"] },
          { word: "material", phonetic: "mətíəriəl", pos: "形", meanings: ["物質的な、有形の"], related: ["materialism 名 唯物論、物質主義"] }
        ]
      },
      {
        id: 309,
        en: "Ethical dilemmas arise when personal interests collide with the greater good of society.",
        ja: "個人的利益と社会全体の利益が衝突するとき、倫理的ジレンマが生じる。",
        words: [
          { word: "ethical", phonetic: "éθikəl", pos: "形", meanings: ["倫理的な"], related: ["ethics 名 倫理学", "⇔ unethical 非倫理的な"] },
          { word: "dilemma", phonetic: "diléma", pos: "名", meanings: ["ジレンマ、板挟み"], related: [] },
          { word: "collide", phonetic: "kəláid", pos: "動", meanings: ["衝突する"], related: ["collision 名 衝突"] },
          { word: "the greater good", phonetic: "", pos: "名", meanings: ["より大きな利益、公益"], related: [] }
        ]
      },
      {
        id: 310,
        en: "Skepticism encourages us to question assumptions rather than accept them blindly.",
        ja: "懐疑主義は前提を盲目的に受け入れるのではなく疑うことを促す。",
        words: [
          { word: "skepticism", phonetic: "sképtisìzm", pos: "名", meanings: ["懐疑主義"], related: ["skeptic 名 懐疑論者", "skeptical 形 懐疑的な"] },
          { word: "assumption", phonetic: "əsʌ́mpʃən", pos: "名", meanings: ["前提、仮定"], related: ["assume 動 仮定する"] },
          { word: "accept", phonetic: "əksépt", pos: "動", meanings: ["受け入れる"], related: ["acceptance 名 受容"] },
          { word: "blindly", phonetic: "bláindli", pos: "副", meanings: ["盲目的に"], related: ["blind 形 盲目の"] }
        ]
      },
      {
        id: 311,
        en: "The concept of free will has been debated by thinkers for millennia without resolution.",
        ja: "自由意志の概念は何千年もの間、思想家たちによって結論なく議論されてきた。",
        words: [
          { word: "concept", phonetic: "kɑ́nsept", pos: "名", meanings: ["概念"], related: ["conceptual 形 概念の"] },
          { word: "free will", phonetic: "fríː wíl", pos: "名", meanings: ["自由意志"], related: [] },
          { word: "debate", phonetic: "dibéit", pos: "動", meanings: ["議論する"], related: ["debate 名 議論、討論"] },
          { word: "millennium", phonetic: "miléniəm", pos: "名", meanings: ["千年間"], related: ["millennia 名 千年間（複数形）"] },
          { word: "resolution", phonetic: "rèzəlúːʃən", pos: "名", meanings: ["解決、決意"], related: ["resolve 動 解決する"] }
        ]
      },
      {
        id: 312,
        en: "Compassion toward others is widely regarded as a fundamental moral virtue.",
        ja: "他者への思いやりは基本的な道徳的美徳として広く認められている。",
        words: [
          { word: "compassion", phonetic: "kəmpǽʃən", pos: "名", meanings: ["思いやり、同情"], related: ["compassionate 形 思いやりのある"] },
          { word: "widely", phonetic: "wáidli", pos: "副", meanings: ["広く"], related: ["wide 形 広い"] },
          { word: "regard", phonetic: "rigɑ́ːrd", pos: "動", meanings: ["みなす、考える"], related: ["regarding 前 〜に関して"] },
          { word: "fundamental", phonetic: "fʌ̀ndəméntl", pos: "形", meanings: ["基本的な、根本的な"], related: ["fundamentally 副 根本的に"] },
          { word: "virtue", phonetic: "və́ːrtʃuː", pos: "名", meanings: ["美徳、長所"], related: ["virtuous 形 高潔な", "⇔ vice 悪徳"] }
        ]
      },
      {
        id: 313,
        en: "Justice demands that laws apply equally to everyone, irrespective of status or privilege.",
        ja: "正義は、地位や特権に関係なく法がすべての人に等しく適用されることを求める。",
        words: [
          { word: "justice", phonetic: "dʒʌ́stis", pos: "名", meanings: ["正義、公正"], related: ["just 形 公正な", "⇔ injustice 不正"] },
          { word: "apply", phonetic: "əplái", pos: "動", meanings: ["適用する、申し込む"], related: ["application 名 適用、申請"] },
          { word: "irrespective of", phonetic: "ìrispéktiv", pos: "前", meanings: ["〜に関係なく"], related: ["regardless of"] },
          { word: "privilege", phonetic: "prívəlidʒ", pos: "名", meanings: ["特権"], related: ["privileged 形 特権のある"] }
        ]
      },
      {
        id: 314,
        en: "Existentialist writers emphasized that individuals must forge their own meaning in life.",
        ja: "実存主義の作家たちは、個人が自らの人生の意味を自分で築かなければならないと強調した。",
        words: [
          { word: "existentialist", phonetic: "ègzisténʃəlist", pos: "名", meanings: ["実存主義者"], related: ["existentialism 名 実存主義", "existence 名 存在"] },
          { word: "emphasize", phonetic: "émfəsàiz", pos: "動", meanings: ["強調する"], related: ["emphasis 名 強調"] },
          { word: "forge", phonetic: "fɔ́ːrdʒ", pos: "動", meanings: ["築く、鍛える"], related: [] },
          { word: "meaning", phonetic: "míːniŋ", pos: "名", meanings: ["意味"], related: ["meaningful 形 意味のある", "⇔ meaningless 無意味な"] }
        ]
      },
      {
        id: 315,
        en: "The doctrine of utilitarianism holds that the best action produces the greatest benefit for the most people.",
        ja: "功利主義の教義は、最善の行動は最も多くの人に最大の利益をもたらすものだと説く。",
        words: [
          { word: "doctrine", phonetic: "dɑ́ktrin", pos: "名", meanings: ["教義、主義"], related: [] },
          { word: "utilitarianism", phonetic: "juːtìlitéəriənìzm", pos: "名", meanings: ["功利主義"], related: ["utilitarian 形 功利主義の"] },
          { word: "hold", phonetic: "hóuld", pos: "動", meanings: ["主張する、保持する"], related: [] },
          { word: "benefit", phonetic: "bénəfit", pos: "名", meanings: ["利益、恩恵"], related: ["benefit 動 利益を得る", "beneficial 形 有益な"] }
        ]
      },
      {
        id: 316,
        en: "Conscience serves as an inner guide, urging us to distinguish right from wrong.",
        ja: "良心は内なる指針として、善悪を区別するよう我々を促す。",
        words: [
          { word: "conscience", phonetic: "kɑ́nʃəns", pos: "名", meanings: ["良心"], related: ["conscientious 形 良心的な"] },
          { word: "serve as", phonetic: "sə́ːrv", pos: "動", meanings: ["〜として役立つ"], related: [] },
          { word: "urge", phonetic: "ə́ːrdʒ", pos: "動", meanings: ["促す、強く勧める"], related: ["urge 名 衝動", "urgent 形 緊急の"] },
          { word: "distinguish", phonetic: "distíŋgwiʃ", pos: "動", meanings: ["区別する、見分ける"], related: ["distinction 名 区別", "distinguished 形 著名な"] }
        ]
      },
      {
        id: 317,
        en: "Tolerance of differing viewpoints is the cornerstone of a civilized and pluralistic society.",
        ja: "異なる見解への寛容さは文明化された多元的社会の礎である。",
        words: [
          { word: "tolerance", phonetic: "tɑ́lərəns", pos: "名", meanings: ["寛容"], related: ["tolerant 形 寛容な", "tolerate 動 許容する"] },
          { word: "viewpoint", phonetic: "vjúːpɔ̀int", pos: "名", meanings: ["見解、観点"], related: ["perspective 名 視点"] },
          { word: "cornerstone", phonetic: "kɔ́ːrnərstòun", pos: "名", meanings: ["礎、土台"], related: ["foundation 名 基盤"] },
          { word: "civilized", phonetic: "sívəlàizd", pos: "形", meanings: ["文明化された"], related: ["civilization 名 文明"] },
          { word: "pluralistic", phonetic: "plùərəlístik", pos: "形", meanings: ["多元的な"], related: ["plural 形 複数の", "pluralism 名 多元主義"] }
        ]
      }
    ]
  },
  {
    section: 30,
    title: "Global Issues",
    sentences: [
      {
        id: 318,
        en: "Climate change poses an unprecedented threat to ecosystems across every continent.",
        ja: "気候変動はすべての大陸の生態系に前例のない脅威をもたらしている。",
        words: [
          { word: "climate", phonetic: "kláimit", pos: "名", meanings: ["気候"], related: ["climate change 気候変動"] },
          { word: "unprecedented", phonetic: "ʌnprésədèntid", pos: "形", meanings: ["前例のない"], related: ["precedent 名 前例"] },
          { word: "threat", phonetic: "θrét", pos: "名", meanings: ["脅威"], related: ["threaten 動 脅かす", "threatening 形 脅かすような"] },
          { word: "ecosystem", phonetic: "íːkousìstəm", pos: "名", meanings: ["生態系"], related: ["ecology 名 生態学"] },
          { word: "continent", phonetic: "kɑ́ntənənt", pos: "名", meanings: ["大陸"], related: ["continental 形 大陸の"] }
        ]
      },
      {
        id: 319,
        en: "Millions of refugees have been displaced by armed conflicts and political persecution.",
        ja: "何百万人もの難民が武力紛争や政治的迫害によって避難を余儀なくされている。",
        words: [
          { word: "refugee", phonetic: "rèfjudʒíː", pos: "名", meanings: ["難民"], related: ["refuge 名 避難所"] },
          { word: "armed", phonetic: "ɑ́ːrmd", pos: "形", meanings: ["武装した"], related: ["arm 名 武器、腕"] },
          { word: "persecution", phonetic: "pə̀ːrsikjúːʃən", pos: "名", meanings: ["迫害"], related: ["persecute 動 迫害する"] }
        ]
      },
      {
        id: 320,
        en: "International cooperation is indispensable for tackling pandemics that transcend national borders.",
        ja: "国境を越えるパンデミックへの対処には、国際協力が不可欠だ。",
        words: [
          { word: "cooperation", phonetic: "kouɑ̀pəréiʃən", pos: "名", meanings: ["協力"], related: ["cooperate 動 協力する", "cooperative 形 協力的な"] },
          { word: "indispensable", phonetic: "ìndispénsəbl", pos: "形", meanings: ["不可欠な"], related: ["⇔ dispensable なくてもよい"] },
          { word: "tackle", phonetic: "tǽkl", pos: "動", meanings: ["取り組む、対処する"], related: [] },
          { word: "pandemic", phonetic: "pændémik", pos: "名", meanings: ["パンデミック、世界的流行"], related: ["epidemic 名 流行病"] },
          { word: "transcend", phonetic: "trænsénd", pos: "動", meanings: ["超越する"], related: ["transcendence 名 超越"] }
        ]
      },
      {
        id: 321,
        en: "Deforestation accelerates soil erosion and diminishes biodiversity at an alarming rate.",
        ja: "森林破壊は土壌浸食を加速させ、驚くべき速度で生物多様性を減少させる。",
        words: [
          { word: "deforestation", phonetic: "dìːfɔ̀ːristéiʃən", pos: "名", meanings: ["森林破壊"], related: ["forest 名 森林"] },
          { word: "accelerate", phonetic: "æksélerèit", pos: "動", meanings: ["加速する"], related: ["acceleration 名 加速"] },
          { word: "erosion", phonetic: "iróuʒən", pos: "名", meanings: ["浸食、侵食"], related: ["erode 動 侵食する"] },
          { word: "diminish", phonetic: "dimíniʃ", pos: "動", meanings: ["減少する、減らす"], related: [] },
          { word: "biodiversity", phonetic: "bàioudəvə́ːrsəti", pos: "名", meanings: ["生物多様性"], related: ["biology 名 生物学", "diversity 名 多様性"] }
        ]
      },
      {
        id: 322,
        en: "Humanitarian organizations distribute food and medical supplies to regions devastated by famine.",
        ja: "人道支援組織は飢饉で荒廃した地域に食料と医療物資を配布している。",
        words: [
          { word: "humanitarian", phonetic: "hjùːmæ̀nətéəriən", pos: "形", meanings: ["人道主義の"], related: ["humanity 名 人類、人間性"] },
          { word: "distribute", phonetic: "distríbjuːt", pos: "動", meanings: ["配布する、分配する"], related: ["distribution 名 分配"] },
          { word: "devastate", phonetic: "dévəstèit", pos: "動", meanings: ["荒廃させる"], related: ["devastating 形 壊滅的な", "devastation 名 荒廃"] },
          { word: "famine", phonetic: "fǽmin", pos: "名", meanings: ["飢饉"], related: ["starvation 名 飢餓"] }
        ]
      },
      {
        id: 323,
        en: "The widening gap between the wealthy and the impoverished remains a pressing concern.",
        ja: "富裕層と貧困層の間の広がる格差は依然として差し迫った懸念である。",
        words: [
          { word: "widen", phonetic: "wáidn", pos: "動", meanings: ["広げる、広がる"], related: ["wide 形 広い"] },
          { word: "gap", phonetic: "gǽp", pos: "名", meanings: ["格差、隙間"], related: [] },
          { word: "impoverished", phonetic: "impɑ́vəriʃt", pos: "形", meanings: ["貧困化した"], related: ["poverty 名 貧困"] },
          { word: "pressing", phonetic: "présiŋ", pos: "形", meanings: ["差し迫った、緊急の"], related: ["press 動 押す、圧迫する"] }
        ]
      },
      {
        id: 324,
        en: "Sustainable development seeks to meet present needs without compromising future generations.",
        ja: "持続可能な開発は将来の世代を犠牲にすることなく現在のニーズを満たすことを目指す。",
        words: [
          { word: "sustainable", phonetic: "səstéinəbl", pos: "形", meanings: ["持続可能な"], related: ["sustain 動 維持する", "sustainability 名 持続可能性"] },
          { word: "development", phonetic: "divéləpmənt", pos: "名", meanings: ["開発、発展"], related: ["develop 動 発展させる"] },
          { word: "compromise", phonetic: "kɑ́mprəmàiz", pos: "動", meanings: ["犠牲にする、妥協する"], related: ["compromise 名 妥協"] }
        ]
      },
      {
        id: 325,
        en: "Corruption undermines public trust and hinders economic growth in developing nations.",
        ja: "汚職は公共の信頼を損ない、発展途上国の経済成長を妨げる。",
        words: [
          { word: "corruption", phonetic: "kərʌ́pʃən", pos: "名", meanings: ["汚職、腐敗"], related: ["corrupt 形 腐敗した", "corrupt 動 堕落させる"] },
          { word: "undermine", phonetic: "ʌ̀ndərmáin", pos: "動", meanings: ["損なう、弱体化させる"], related: [] },
          { word: "hinder", phonetic: "híndər", pos: "動", meanings: ["妨げる"], related: ["hindrance 名 妨害"] },
          { word: "developing", phonetic: "divéləpiŋ", pos: "形", meanings: ["発展途上の"], related: ["developed 形 先進の"] }
        ]
      },
      {
        id: 326,
        en: "Nuclear proliferation remains one of the most critical security challenges of our time.",
        ja: "核拡散は現代における最も重大な安全保障上の課題の一つであり続けている。",
        words: [
          { word: "nuclear", phonetic: "njúːkliər", pos: "形", meanings: ["核の、原子力の"], related: ["nucleus 名 核"] },
          { word: "proliferation", phonetic: "pròulìfəréiʃən", pos: "名", meanings: ["拡散、増殖"], related: ["proliferate 動 増殖する"] },
          { word: "critical", phonetic: "krítikəl", pos: "形", meanings: ["重大な、批判的な"], related: ["critically 副 批判的に"] },
          { word: "security", phonetic: "sikjúərəti", pos: "名", meanings: ["安全保障、治安"], related: ["secure 形 安全な"] }
        ]
      },
      {
        id: 327,
        en: "Raising awareness about ocean pollution is the first step toward preserving marine life.",
        ja: "海洋汚染についての意識を高めることは、海洋生物を守るための第一歩だ。",
        words: [
          { word: "awareness", phonetic: "əwéərnəs", pos: "名", meanings: ["意識、認識"], related: ["aware 形 意識している"] },
          { word: "pollution", phonetic: "pəlúːʃən", pos: "名", meanings: ["汚染"], related: ["pollute 動 汚染する", "pollutant 名 汚染物質"] },
          { word: "preserve", phonetic: "prizə́ːrv", pos: "動", meanings: ["保護する、保存する"], related: ["preservation 名 保存"] },
          { word: "marine", phonetic: "məríːn", pos: "形", meanings: ["海の、海洋の"], related: ["maritime 形 海事の"] }
        ]
      },
      {
        id: 328,
        en: "Access to clean drinking water is a basic human right that millions still lack.",
        ja: "清潔な飲料水へのアクセスは基本的人権であるが、何百万人もの人々がいまだに欠いている。",
        words: [
          { word: "access", phonetic: "ǽkses", pos: "名", meanings: ["アクセス、利用する権利"], related: ["accessible 形 利用可能な"] },
          { word: "basic", phonetic: "béisik", pos: "形", meanings: ["基本的な"], related: ["basically 副 基本的に"] },
          { word: "human right", phonetic: "hjúːmən ráit", pos: "名", meanings: ["人権"], related: [] },
          { word: "lack", phonetic: "lǽk", pos: "動", meanings: ["欠いている"], related: ["lack 名 欠如"] }
        ]
      },
      {
        id: 329,
        en: "Cyberattacks on critical infrastructure could paralyze entire nations within hours.",
        ja: "重要インフラへのサイバー攻撃は数時間で国家全体を麻痺させうる。",
        words: [
          { word: "cyberattack", phonetic: "sáibərətæ̀k", pos: "名", meanings: ["サイバー攻撃"], related: ["cybersecurity 名 サイバーセキュリティ"] },
          { word: "infrastructure", phonetic: "ínfrəstrʌ̀ktʃər", pos: "名", meanings: ["インフラ、基盤"], related: [] },
          { word: "paralyze", phonetic: "pǽrəlàiz", pos: "動", meanings: ["麻痺させる"], related: ["paralysis 名 麻痺"] }
        ]
      },
      {
        id: 330,
        en: "Multilateral trade agreements foster economic interdependence among participating countries.",
        ja: "多国間貿易協定は参加国間の経済的相互依存を促進する。",
        words: [
          { word: "multilateral", phonetic: "mʌ̀ltilǽtərəl", pos: "形", meanings: ["多国間の"], related: ["⇔ bilateral 二国間の", "⇔ unilateral 一方的な"] },
          { word: "trade", phonetic: "tréid", pos: "名", meanings: ["貿易、取引"], related: ["trade 動 取引する"] },
          { word: "foster", phonetic: "fɔ́ːstər", pos: "動", meanings: ["促進する、育てる"], related: [] },
          { word: "interdependence", phonetic: "ìntərdipéndəns", pos: "名", meanings: ["相互依存"], related: ["interdependent 形 相互依存の", "dependent 形 依存した"] }
        ]
      },
      {
        id: 331,
        en: "Grassroots movements have proven capable of influencing national policy on environmental protection.",
        ja: "草の根運動は環境保護に関する国の政策に影響を与える力があると証明されている。",
        words: [
          { word: "grassroots", phonetic: "grǽsrùːts", pos: "形", meanings: ["草の根の、民衆の"], related: [] },
          { word: "movement", phonetic: "múːvmənt", pos: "名", meanings: ["運動、動き"], related: ["move 動 動く"] },
          { word: "capable", phonetic: "kéipəbl", pos: "形", meanings: ["能力がある、〜できる"], related: ["capability 名 能力", "⇔ incapable 能力がない"] },
          { word: "influence", phonetic: "ínfluəns", pos: "動", meanings: ["影響を与える"], related: ["influence 名 影響", "influential 形 影響力のある"] },
          { word: "policy", phonetic: "pɑ́ləsi", pos: "名", meanings: ["政策、方針"], related: ["policymaker 名 政策立案者"] }
        ]
      },
      {
        id: 332,
        en: "Bridging the digital divide is essential for ensuring equal opportunity in the modern world.",
        ja: "デジタルデバイドを埋めることは、現代世界で平等な機会を確保するために不可欠だ。",
        words: [
          { word: "bridge", phonetic: "brídʒ", pos: "動", meanings: ["橋渡しする、埋める"], related: ["bridge 名 橋"] },
          { word: "digital divide", phonetic: "dídʒitl diváid", pos: "名", meanings: ["デジタルデバイド、情報格差"], related: ["digital 形 デジタルの"] },
          { word: "ensure", phonetic: "inʃúər", pos: "動", meanings: ["確保する、保証する"], related: [] },
          { word: "opportunity", phonetic: "ɑ̀pərtjúːnəti", pos: "名", meanings: ["機会"], related: ["⇔ obstacle 障害"] }
        ]
      }
    ]
  },
  {
    section: 31,
    title: "Education System",
    sentences: [
      {
        id: 333,
        en: "The national curriculum underwent a drastic overhaul to accommodate modern learning standards.",
        ja: "国のカリキュラムは現代の学習基準に対応するために大幅な見直しが行われた。",
        words: [
          { word: "curriculum", phonetic: "kəríkjuləm", pos: "名", meanings: ["教育課程、カリキュラム"], related: ["curricula 名 （複数形）"] },
          { word: "undergo", phonetic: "ʌ̀ndərgóu", pos: "動", meanings: ["（変化・試練を）経験する"], related: ["underwent - undergone"] },
          { word: "drastic", phonetic: "drǽstik", pos: "形", meanings: ["思い切った、大幅な"], related: ["drastically 副 大幅に"] },
          { word: "overhaul", phonetic: "óuvərhɔ̀ːl", pos: "名", meanings: ["全面的な見直し、改修"], related: ["overhaul 動 徹底的に見直す"] },
          { word: "accommodate", phonetic: "əkɑ́mədèit", pos: "動", meanings: ["対応する、適応させる", "収容する"], related: ["accommodation 名 宿泊施設、適応"] }
        ]
      },
      {
        id: 334,
        en: "Compulsory education ensures that every child has access to basic literacy and numeracy skills.",
        ja: "義務教育はすべての子供が基本的な読み書きと計算の能力を身につけることを保証する。",
        words: [
          { word: "compulsory", phonetic: "kəmpʌ́lsəri", pos: "形", meanings: ["義務的な、強制の"], related: ["⇔ voluntary 任意の", "compel 動 強制する"] },
          { word: "literacy", phonetic: "lítərəsi", pos: "名", meanings: ["読み書きの能力"], related: ["literate 形 読み書きができる", "⇔ illiteracy 非識字"] },
          { word: "numeracy", phonetic: "njúːmərəsi", pos: "名", meanings: ["計算能力"], related: ["numeral 名 数字", "numerical 形 数の"] }
        ]
      },
      {
        id: 335,
        en: "Many prestigious universities offer generous scholarships to attract talented applicants.",
        ja: "多くの名門大学は優秀な志願者を引き付けるために手厚い奨学金を提供している。",
        words: [
          { word: "prestigious", phonetic: "prestídʒəs", pos: "形", meanings: ["名声のある、一流の"], related: ["prestige 名 名声、威信"] },
          { word: "scholarship", phonetic: "skɑ́lərʃìp", pos: "名", meanings: ["奨学金", "学識"], related: ["scholar 名 学者"] },
          { word: "talented", phonetic: "tǽləntid", pos: "形", meanings: ["才能のある"], related: ["talent 名 才能"] },
          { word: "applicant", phonetic: "ǽplikənt", pos: "名", meanings: ["志願者、応募者"], related: ["apply 動 応募する", "application 名 応募、申請"] }
        ]
      },
      {
        id: 336,
        en: "The tuition fees at private institutions have soared beyond what ordinary families can afford.",
        ja: "私立教育機関の授業料は一般家庭が支払える範囲を超えて高騰している。",
        words: [
          { word: "tuition", phonetic: "tjuːíʃən", pos: "名", meanings: ["授業料", "授業"], related: [] },
          { word: "institution", phonetic: "ìnstitjúːʃən", pos: "名", meanings: ["機関、施設"], related: ["institute 名 研究所", "institutional 形 制度の"] },
          { word: "soar", phonetic: "sɔ́ːr", pos: "動", meanings: ["急上昇する、高騰する"], related: ["⇔ plunge 急落する"] },
          { word: "afford", phonetic: "əfɔ́ːrd", pos: "動", meanings: ["〜する余裕がある"], related: ["affordable 形 手頃な"] }
        ]
      },
      {
        id: 337,
        en: "Vocational training equips students with practical skills that are immediately applicable in the workforce.",
        ja: "職業訓練は学生にすぐに労働現場で応用できる実践的なスキルを身につけさせる。",
        words: [
          { word: "vocational", phonetic: "voukéiʃənl", pos: "形", meanings: ["職業の"], related: ["vocation 名 職業、天職"] },
          { word: "equip", phonetic: "ikwíp", pos: "動", meanings: ["装備させる、身につけさせる"], related: ["equipment 名 機器、装備"] },
          { word: "applicable", phonetic: "ǽplikəbl", pos: "形", meanings: ["応用できる、適用できる"], related: ["apply 動 適用する", "application 名 応用"] },
          { word: "workforce", phonetic: "wə́ːrkfɔ̀ːrs", pos: "名", meanings: ["労働力、労働人口"], related: [] }
        ]
      },
      {
        id: 338,
        en: "Peer-reviewed academic journals serve as the primary outlet for disseminating research findings.",
        ja: "査読付き学術誌は研究成果を広めるための主要な媒体である。",
        words: [
          { word: "peer-reviewed", phonetic: "píər rivjúːd", pos: "形", meanings: ["査読付きの"], related: ["peer 名 同僚、同等の人"] },
          { word: "academic", phonetic: "æ̀kədémik", pos: "形", meanings: ["学問の、学術の"], related: ["academy 名 学会、学院"] },
          { word: "journal", phonetic: "dʒə́ːrnl", pos: "名", meanings: ["学術誌、雑誌", "日誌"], related: ["journalism 名 ジャーナリズム"] },
          { word: "disseminate", phonetic: "diséminèit", pos: "動", meanings: ["広める、普及させる"], related: ["dissemination 名 普及、流布"] }
        ]
      },
      {
        id: 339,
        en: "A well-rounded education nurtures critical thinking alongside creativity and empathy.",
        ja: "バランスの取れた教育は批判的思考力とともに創造性や共感力を育む。",
        words: [
          { word: "well-rounded", phonetic: "wèl ráundid", pos: "形", meanings: ["バランスの取れた、多方面の"], related: [] },
          { word: "nurture", phonetic: "nə́ːrtʃər", pos: "動", meanings: ["育む、養う"], related: ["nurture 名 養育", "⇔ nature 天性"] },
          { word: "critical thinking", phonetic: "krítikl θíŋkiŋ", pos: "名", meanings: ["批判的思考"], related: ["critical 形 批判的な、重要な"] },
          { word: "empathy", phonetic: "émpəθi", pos: "名", meanings: ["共感、感情移入"], related: ["empathize 動 共感する", "⇔ apathy 無関心"] }
        ]
      },
      {
        id: 340,
        en: "Standardized testing has been criticized for failing to measure the full range of student abilities.",
        ja: "標準テストは学生の能力の全範囲を測定できないとして批判されてきた。",
        words: [
          { word: "standardized", phonetic: "stǽndərdàizd", pos: "形", meanings: ["標準化された"], related: ["standardize 動 標準化する", "standard 名 基準"] },
          { word: "criticize", phonetic: "krítisàiz", pos: "動", meanings: ["批判する"], related: ["criticism 名 批判", "critic 名 批評家", "critical 形 批判的な"] },
          { word: "measure", phonetic: "méʒər", pos: "動", meanings: ["測定する、測る"], related: ["measurement 名 測定", "measure 名 対策、手段"] },
          { word: "range", phonetic: "réindʒ", pos: "名", meanings: ["範囲、幅"], related: ["range 動 及ぶ、分布する"] }
        ]
      },
      {
        id: 341,
        en: "Enrollment in online degree programs has surged as remote learning becomes more prevalent.",
        ja: "遠隔学習が普及するにつれ、オンライン学位プログラムへの入学者数が急増した。",
        words: [
          { word: "enrollment", phonetic: "inróulmənt", pos: "名", meanings: ["入学、登録、入学者数"], related: ["enroll 動 入学する、登録する"] },
          { word: "degree", phonetic: "digríː", pos: "名", meanings: ["学位", "程度", "度"], related: [] },
          { word: "surge", phonetic: "sə́ːrdʒ", pos: "動", meanings: ["急増する、急上昇する"], related: ["surge 名 急増、高まり"] },
          { word: "prevalent", phonetic: "prévələnt", pos: "形", meanings: ["普及した、広く行き渡った"], related: ["prevalence 名 普及、蔓延"] }
        ]
      },
      {
        id: 342,
        en: "Mentors play a pivotal role in guiding students through the complexities of postgraduate research.",
        ja: "指導者は大学院の研究の複雑さを学生が乗り越えるうえで極めて重要な役割を果たす。",
        words: [
          { word: "mentor", phonetic: "méntɔːr", pos: "名", meanings: ["指導者、助言者"], related: ["mentorship 名 指導関係"] },
          { word: "pivotal", phonetic: "pívətl", pos: "形", meanings: ["極めて重要な、中核となる"], related: ["pivot 名 中心、軸"] },
          { word: "postgraduate", phonetic: "pòustgrǽdʒuət", pos: "形", meanings: ["大学院の"], related: ["graduate 名 卒業生", "undergraduate 名 学部生"] },
          { word: "complexity", phonetic: "kəmpléksəti", pos: "名", meanings: ["複雑さ"], related: ["complex 形 複雑な"] }
        ]
      },
      {
        id: 343,
        en: "The seminar encouraged participants to engage in lively debate about pedagogy and innovation.",
        ja: "そのセミナーは参加者に教育学と革新に関する活発な議論を促した。",
        words: [
          { word: "seminar", phonetic: "sémənɑ̀ːr", pos: "名", meanings: ["セミナー、研究会"], related: [] },
          { word: "participant", phonetic: "pɑːrtísəpənt", pos: "名", meanings: ["参加者"], related: ["participate 動 参加する", "participation 名 参加"] },
          { word: "pedagogy", phonetic: "pédəgɑ̀dʒi", pos: "名", meanings: ["教育学、教授法"], related: ["pedagogical 形 教育学の"] },
          { word: "innovation", phonetic: "ìnəvéiʃən", pos: "名", meanings: ["革新、イノベーション"], related: ["innovate 動 革新する", "innovative 形 革新的な"] }
        ]
      }
    ]
  },
  {
    section: 32,
    title: "Technology & Internet",
    sentences: [
      {
        id: 344,
        en: "Artificial intelligence algorithms can analyze vast datasets far more efficiently than human researchers.",
        ja: "人工知能のアルゴリズムは人間の研究者よりもはるかに効率的に膨大なデータセットを分析できる。",
        words: [
          { word: "artificial intelligence", phonetic: "ɑ̀ːrtifíʃəl intélidʒəns", pos: "名", meanings: ["人工知能"], related: ["AI"] },
          { word: "algorithm", phonetic: "ǽlgərìðm", pos: "名", meanings: ["アルゴリズム、算法"], related: ["algorithmic 形 アルゴリズムの"] },
          { word: "analyze", phonetic: "ǽnəlàiz", pos: "動", meanings: ["分析する"], related: ["analysis 名 分析", "analyst 名 分析者"] },
          { word: "dataset", phonetic: "déitəsèt", pos: "名", meanings: ["データセット、データ集合"], related: ["data 名 データ"] }
        ]
      },
      {
        id: 345,
        en: "Cybersecurity breaches can compromise sensitive personal information stored in cloud servers.",
        ja: "サイバーセキュリティの侵害はクラウドサーバーに保存された機密性の高い個人情報を危険にさらす。",
        words: [
          { word: "cybersecurity", phonetic: "sàibərsikjúərəti", pos: "名", meanings: ["サイバーセキュリティ"], related: ["cyber 形 サイバーの"] },
          { word: "breach", phonetic: "bríːtʃ", pos: "名", meanings: ["侵害、違反", "裂け目"], related: ["breach 動 侵害する、破る"] },
          { word: "compromise", phonetic: "kɑ́mprəmàiz", pos: "動", meanings: ["危険にさらす", "妥協する"], related: ["compromise 名 妥協"] },
          { word: "sensitive", phonetic: "sénsətiv", pos: "形", meanings: ["機密性の高い", "敏感な"], related: ["sensitivity 名 感度、敏感さ"] }
        ]
      },
      {
        id: 346,
        en: "The startup secured venture capital funding to commercialize its innovative wearable device.",
        ja: "そのスタートアップは革新的なウェアラブル端末を商業化するためにベンチャーキャピタルの資金を獲得した。",
        words: [
          { word: "startup", phonetic: "stɑ́ːrtʌ̀p", pos: "名", meanings: ["新興企業、スタートアップ"], related: [] },
          { word: "venture capital", phonetic: "véntʃər kǽpitl", pos: "名", meanings: ["ベンチャーキャピタル、投資資本"], related: ["venture 名 冒険的事業"] },
          { word: "commercialize", phonetic: "kəmə́ːrʃəlàiz", pos: "動", meanings: ["商業化する"], related: ["commercial 形 商業の"] },
          { word: "wearable", phonetic: "wéərəbl", pos: "形", meanings: ["着用できる、ウェアラブルの"], related: ["wear 動 着る"] }
        ]
      },
      {
        id: 347,
        en: "Social media platforms are obligated to moderate harmful content and prevent the spread of misinformation.",
        ja: "ソーシャルメディアプラットフォームは有害なコンテンツを管理し、偽情報の拡散を防ぐ義務がある。",
        words: [
          { word: "platform", phonetic: "plǽtfɔ̀ːrm", pos: "名", meanings: ["プラットフォーム、基盤"], related: [] },
          { word: "obligated", phonetic: "ɑ́bligèitid", pos: "形", meanings: ["義務がある"], related: ["obligation 名 義務", "oblige 動 義務づける"] },
          { word: "moderate", phonetic: "mɑ́dərèit", pos: "動", meanings: ["規制する、管理する"], related: ["moderation 名 節度、適度"] },
          { word: "misinformation", phonetic: "mìsinfərméiʃən", pos: "名", meanings: ["偽情報、誤報"], related: ["disinformation 名 意図的偽情報"] }
        ]
      },
      {
        id: 348,
        en: "Encryption technology safeguards digital communications from unauthorized interception.",
        ja: "暗号化技術はデジタル通信を不正な傍受から守る。",
        words: [
          { word: "encryption", phonetic: "inkrípʃən", pos: "名", meanings: ["暗号化"], related: ["encrypt 動 暗号化する", "⇔ decryption 復号化"] },
          { word: "safeguard", phonetic: "séifgɑ̀ːrd", pos: "動", meanings: ["守る、保護する"], related: ["safeguard 名 保護手段"] },
          { word: "unauthorized", phonetic: "ʌnɔ́ːθəràizd", pos: "形", meanings: ["許可されていない、不正な"], related: ["authorize 動 許可する", "authorization 名 許可"] },
          { word: "interception", phonetic: "ìntərséptʃən", pos: "名", meanings: ["傍受、遮断"], related: ["intercept 動 傍受する"] }
        ]
      },
      {
        id: 349,
        en: "Autonomous vehicles rely on sophisticated sensors and machine learning to navigate safely.",
        ja: "自動運転車は安全に走行するために高度なセンサーと機械学習に依存している。",
        words: [
          { word: "autonomous", phonetic: "ɔːtɑ́nəməs", pos: "形", meanings: ["自律的な、自動運転の"], related: ["autonomy 名 自律性"] },
          { word: "sophisticated", phonetic: "səfístikèitid", pos: "形", meanings: ["高度な、精巧な"], related: ["sophistication 名 精巧さ"] },
          { word: "sensor", phonetic: "sénsər", pos: "名", meanings: ["センサー、感知器"], related: ["sense 動 感知する"] },
          { word: "navigate", phonetic: "nǽvigèit", pos: "動", meanings: ["操縦する、航行する"], related: ["navigation 名 航行、ナビゲーション"] }
        ]
      },
      {
        id: 350,
        en: "The proliferation of smartphones has fundamentally altered how people interact and consume media.",
        ja: "スマートフォンの普及は人々の交流やメディア消費のあり方を根本的に変えた。",
        words: [
          { word: "proliferation", phonetic: "prəlìfəréiʃən", pos: "名", meanings: ["急増、拡散"], related: ["proliferate 動 急増する"] },
          { word: "fundamentally", phonetic: "fʌ̀ndəméntəli", pos: "副", meanings: ["根本的に"], related: ["fundamental 形 根本的な"] },
          { word: "alter", phonetic: "ɔ́ːltər", pos: "動", meanings: ["変える、変わる"], related: ["alteration 名 変更"] },
          { word: "consume", phonetic: "kənsúːm", pos: "動", meanings: ["消費する"], related: ["consumer 名 消費者", "consumption 名 消費"] }
        ]
      },
      {
        id: 351,
        en: "Blockchain technology has the potential to revolutionize supply chain management and financial transactions.",
        ja: "ブロックチェーン技術はサプライチェーン管理と金融取引に革命を起こす可能性がある。",
        words: [
          { word: "blockchain", phonetic: "blɑ́ktʃèin", pos: "名", meanings: ["ブロックチェーン"], related: [] },
          { word: "potential", phonetic: "pəténʃəl", pos: "名", meanings: ["可能性、潜在力"], related: ["potential 形 潜在的な", "potentially 副 潜在的に"] },
          { word: "revolutionize", phonetic: "rèvəlúːʃənàiz", pos: "動", meanings: ["革命を起こす、大変革する"], related: ["revolution 名 革命"] },
          { word: "transaction", phonetic: "trænzǽkʃən", pos: "名", meanings: ["取引"], related: ["transact 動 取引する"] }
        ]
      },
      {
        id: 352,
        en: "Users must be vigilant about phishing scams that attempt to extract login credentials through deception.",
        ja: "ユーザーは欺瞞によってログイン資格情報を抜き取ろうとするフィッシング詐欺に警戒しなければならない。",
        words: [
          { word: "vigilant", phonetic: "vídʒilənt", pos: "形", meanings: ["警戒している、用心深い"], related: ["vigilance 名 警戒"] },
          { word: "phishing", phonetic: "fíʃiŋ", pos: "名", meanings: ["フィッシング（詐欺）"], related: [] },
          { word: "extract", phonetic: "ikstrǽkt", pos: "動", meanings: ["抜き取る、抽出する"], related: ["extraction 名 抽出"] },
          { word: "credential", phonetic: "kridénʃəl", pos: "名", meanings: ["資格情報、認証情報"], related: ["credentials 名 信任状"] },
          { word: "deception", phonetic: "diséptʃən", pos: "名", meanings: ["欺瞞、詐欺"], related: ["deceive 動 騙す", "deceptive 形 人を欺く"] }
        ]
      },
      {
        id: 353,
        en: "Open-source software empowers developers worldwide to collaborate without proprietary restrictions.",
        ja: "オープンソースソフトウェアは世界中の開発者が所有権の制約なく共同作業できるようにする。",
        words: [
          { word: "open-source", phonetic: "óupən sɔ́ːrs", pos: "形", meanings: ["オープンソースの"], related: [] },
          { word: "empower", phonetic: "impáuər", pos: "動", meanings: ["権限を与える、力を与える"], related: ["empowerment 名 権限付与"] },
          { word: "collaborate", phonetic: "kəlǽbərèit", pos: "動", meanings: ["共同作業する、協力する"], related: ["collaboration 名 共同作業"] },
          { word: "proprietary", phonetic: "prəpráiəteri", pos: "形", meanings: ["所有権のある、独占の"], related: ["property 名 財産、所有物"] }
        ]
      },
      {
        id: 354,
        en: "Bandwidth limitations can severely hinder the performance of cloud-based applications during peak hours.",
        ja: "帯域幅の制限はピーク時にクラウドベースのアプリケーションの性能を著しく妨げる。",
        words: [
          { word: "bandwidth", phonetic: "bǽndwìdθ", pos: "名", meanings: ["帯域幅、通信容量"], related: [] },
          { word: "limitation", phonetic: "lìmitéiʃən", pos: "名", meanings: ["制限、限界"], related: ["limit 動 制限する", "limited 形 限られた"] },
          { word: "hinder", phonetic: "híndər", pos: "動", meanings: ["妨げる、邪魔する"], related: ["hindrance 名 障害、妨げ"] },
          { word: "peak", phonetic: "píːk", pos: "形", meanings: ["最高の、ピークの"], related: ["peak 名 頂点、ピーク"] }
        ]
      }
    ]
  },
  {
    section: 33,
    title: "Weather & Climate",
    sentences: [
      {
        id: 355,
        en: "Meteorologists predict that an intense heat wave will persist throughout the remainder of the month.",
        ja: "気象学者は激しい熱波が月末まで続くと予測している。",
        words: [
          { word: "meteorologist", phonetic: "mìːtiərɑ́lədʒist", pos: "名", meanings: ["気象学者"], related: ["meteorology 名 気象学"] },
          { word: "intense", phonetic: "inténs", pos: "形", meanings: ["激しい、強烈な"], related: ["intensity 名 強度", "intensify 動 強まる"] },
          { word: "heat wave", phonetic: "híːt wèiv", pos: "名", meanings: ["熱波"], related: [] },
          { word: "persist", phonetic: "pərsíst", pos: "動", meanings: ["持続する、続く"], related: ["persistent 形 持続的な", "persistence 名 持続"] },
          { word: "remainder", phonetic: "riméindər", pos: "名", meanings: ["残り"], related: ["remain 動 残る", "remaining 形 残りの"] }
        ]
      },
      {
        id: 356,
        en: "Torrential rainfall triggered devastating floods that submerged entire neighborhoods overnight.",
        ja: "激しい豪雨が壊滅的な洪水を引き起こし、一夜にして地域全体が水没した。",
        words: [
          { word: "torrential", phonetic: "tɔːrénʃəl", pos: "形", meanings: ["激しい（雨の）、土砂降りの"], related: ["torrent 名 激流、土砂降り"] },
          { word: "rainfall", phonetic: "réinfɔ̀ːl", pos: "名", meanings: ["降雨、降雨量"], related: [] },
          { word: "trigger", phonetic: "trígər", pos: "動", meanings: ["引き起こす、きっかけとなる"], related: ["trigger 名 引き金"] },
          { word: "submerge", phonetic: "səbmə́ːrdʒ", pos: "動", meanings: ["水没させる、沈める"], related: ["submersion 名 水没"] }
        ]
      },
      {
        id: 357,
        en: "Prolonged drought conditions have dried up reservoirs and severely affected agricultural output.",
        ja: "長引く干ばつにより貯水池が干上がり、農業生産に深刻な影響が出ている。",
        words: [
          { word: "prolonged", phonetic: "prəlɔ́ːŋd", pos: "形", meanings: ["長引いた、長期にわたる"], related: ["prolong 動 延長する"] },
          { word: "drought", phonetic: "dráut", pos: "名", meanings: ["干ばつ"], related: [] },
          { word: "reservoir", phonetic: "rézərvwɑ̀ːr", pos: "名", meanings: ["貯水池、貯蔵所"], related: ["reserve 動 蓄える"] },
          { word: "agricultural", phonetic: "æ̀grikʌ́ltʃərəl", pos: "形", meanings: ["農業の"], related: ["agriculture 名 農業"] }
        ]
      },
      {
        id: 358,
        en: "The polar ice caps are shrinking at an unprecedented rate due to rising global temperatures.",
        ja: "地球の気温上昇により極地の氷冠が前例のない速度で縮小している。",
        words: [
          { word: "polar", phonetic: "póulər", pos: "形", meanings: ["極地の"], related: ["pole 名 極"] },
          { word: "ice cap", phonetic: "áis kæ̀p", pos: "名", meanings: ["氷冠、万年雪"], related: ["glacier 名 氷河"] },
          { word: "shrink", phonetic: "ʃríŋk", pos: "動", meanings: ["縮小する、縮む"], related: ["shrinkage 名 縮小"] },
          { word: "unprecedented", phonetic: "ʌnprésidentid", pos: "形", meanings: ["前例のない"], related: ["precedent 名 前例"] }
        ]
      },
      {
        id: 359,
        en: "Seasonal monsoons bring much-needed moisture to the parched farmland of the subcontinent.",
        ja: "季節性のモンスーンは亜大陸の乾ききった農地に待望の水分をもたらす。",
        words: [
          { word: "seasonal", phonetic: "síːzənl", pos: "形", meanings: ["季節の、季節的な"], related: ["season 名 季節"] },
          { word: "monsoon", phonetic: "mɑnsúːn", pos: "名", meanings: ["モンスーン、季節風"], related: [] },
          { word: "moisture", phonetic: "mɔ́istʃər", pos: "名", meanings: ["水分、湿気"], related: ["moist 形 湿った"] },
          { word: "parched", phonetic: "pɑ́ːrtʃt", pos: "形", meanings: ["乾ききった、カラカラの"], related: ["parch 動 乾かす"] },
          { word: "subcontinent", phonetic: "sʌ̀bkɑ́ntənənt", pos: "名", meanings: ["亜大陸"], related: ["continent 名 大陸"] }
        ]
      },
      {
        id: 360,
        en: "Dense fog blanketed the harbor, forcing all maritime traffic to come to a standstill.",
        ja: "濃い霧が港を覆い、すべての海上交通が停止を余儀なくされた。",
        words: [
          { word: "dense", phonetic: "déns", pos: "形", meanings: ["濃い、密集した"], related: ["density 名 密度"] },
          { word: "fog", phonetic: "fɔ́ːg", pos: "名", meanings: ["霧"], related: ["foggy 形 霧の深い"] },
          { word: "blanket", phonetic: "blǽŋkit", pos: "動", meanings: ["覆う、包む"], related: ["blanket 名 毛布"] },
          { word: "harbor", phonetic: "hɑ́ːrbər", pos: "名", meanings: ["港"], related: ["harbor 動 抱く、かくまう"] },
          { word: "maritime", phonetic: "mǽrətàim", pos: "形", meanings: ["海上の、海事の"], related: ["marine 形 海の"] },
          { word: "standstill", phonetic: "stǽndstìl", pos: "名", meanings: ["停止、行き詰まり"], related: [] }
        ]
      },
      {
        id: 361,
        en: "Carbon emissions from fossil fuels are widely recognized as the primary driver of climate change.",
        ja: "化石燃料からの炭素排出は気候変動の主要な原因として広く認識されている。",
        words: [
          { word: "carbon emission", phonetic: "kɑ́ːrbən imíʃən", pos: "名", meanings: ["炭素排出"], related: ["emission 名 排出", "emit 動 排出する"] },
          { word: "fossil fuel", phonetic: "fɑ́sl fjúːəl", pos: "名", meanings: ["化石燃料"], related: ["fossil 名 化石"] },
          { word: "recognize", phonetic: "rékəgnàiz", pos: "動", meanings: ["認識する、認める"], related: ["recognition 名 認識"] },
          { word: "driver", phonetic: "dráivər", pos: "名", meanings: ["原動力、推進要因"], related: ["drive 動 駆り立てる"] }
        ]
      },
      {
        id: 362,
        en: "A sudden blizzard stranded hundreds of commuters on icy highways for several hours.",
        ja: "突然の猛吹雪により何百人もの通勤者が凍結した高速道路で数時間立ち往生した。",
        words: [
          { word: "blizzard", phonetic: "blízərd", pos: "名", meanings: ["猛吹雪"], related: [] },
          { word: "strand", phonetic: "strǽnd", pos: "動", meanings: ["立ち往生させる"], related: ["stranded 形 立ち往生した"] },
          { word: "commuter", phonetic: "kəmjúːtər", pos: "名", meanings: ["通勤者"], related: ["commute 動 通勤する"] },
          { word: "icy", phonetic: "áisi", pos: "形", meanings: ["凍った、氷のような"], related: ["ice 名 氷"] }
        ]
      },
      {
        id: 363,
        en: "Renewable energy sources such as solar and wind power are crucial for mitigating greenhouse gas effects.",
        ja: "太陽光や風力などの再生可能エネルギー源は温室効果ガスの影響を軽減するために不可欠だ。",
        words: [
          { word: "renewable", phonetic: "rinjúːəbl", pos: "形", meanings: ["再生可能な"], related: ["renew 動 更新する、再生する"] },
          { word: "solar", phonetic: "sóulər", pos: "形", meanings: ["太陽の、太陽光の"], related: [] },
          { word: "crucial", phonetic: "krúːʃəl", pos: "形", meanings: ["極めて重要な"], related: [] },
          { word: "mitigate", phonetic: "mítəgèit", pos: "動", meanings: ["軽減する、和らげる"], related: ["mitigation 名 軽減、緩和"] },
          { word: "greenhouse gas", phonetic: "gríːnhàus gǽs", pos: "名", meanings: ["温室効果ガス"], related: ["greenhouse effect 名 温室効果"] }
        ]
      },
      {
        id: 364,
        en: "Humidity levels soared above ninety percent, making outdoor activity nearly unbearable.",
        ja: "湿度が90パーセントを超え、屋外での活動がほぼ耐えられなくなった。",
        words: [
          { word: "humidity", phonetic: "hjuːmídəti", pos: "名", meanings: ["湿度、湿気"], related: ["humid 形 湿気の多い"] },
          { word: "soar", phonetic: "sɔ́ːr", pos: "動", meanings: ["急上昇する"], related: [] },
          { word: "outdoor", phonetic: "àutdɔ́ːr", pos: "形", meanings: ["屋外の"], related: ["⇔ indoor 屋内の", "outdoors 副 屋外で"] },
          { word: "unbearable", phonetic: "ʌnbéərəbl", pos: "形", meanings: ["耐えられない"], related: ["bear 動 耐える", "bearable 形 耐えられる"] }
        ]
      },
      {
        id: 365,
        en: "Tidal surges caused by the typhoon inundated coastal villages, displacing thousands of residents.",
        ja: "台風による高潮が沿岸の村々を浸水させ、何千人もの住民が避難を余儀なくされた。",
        words: [
          { word: "tidal", phonetic: "táidl", pos: "形", meanings: ["潮の"], related: ["tide 名 潮"] },
          { word: "typhoon", phonetic: "taifúːn", pos: "名", meanings: ["台風"], related: ["hurricane 名 ハリケーン"] },
          { word: "inundate", phonetic: "ínʌndèit", pos: "動", meanings: ["浸水させる、殺到する"], related: ["inundation 名 浸水"] },
          { word: "coastal", phonetic: "kóustəl", pos: "形", meanings: ["沿岸の"], related: ["coast 名 海岸"] },
          { word: "displace", phonetic: "displéis", pos: "動", meanings: ["立ち退かせる、追い出す"], related: ["displacement 名 立ち退き"] }
        ]
      }
    ]
  },
  {
    section: 34,
    title: "Urban & Rural Life",
    sentences: [
      {
        id: 366,
        en: "Rapid urbanization has led to severe congestion and a chronic shortage of affordable housing.",
        ja: "急速な都市化は深刻な渋滞と慢性的な手頃な住宅の不足を引き起こしている。",
        words: [
          { word: "urbanization", phonetic: "ə̀ːrbənəzéiʃən", pos: "名", meanings: ["都市化"], related: ["urban 形 都市の", "⇔ rural 地方の"] },
          { word: "congestion", phonetic: "kəndʒéstʃən", pos: "名", meanings: ["渋滞、混雑"], related: ["congest 動 混雑させる"] },
          { word: "chronic", phonetic: "krɑ́nik", pos: "形", meanings: ["慢性的な"], related: ["⇔ acute 急性の"] },
          { word: "shortage", phonetic: "ʃɔ́ːrtidʒ", pos: "名", meanings: ["不足"], related: ["short 形 不足した"] }
        ]
      },
      {
        id: 367,
        en: "Rural communities often lack adequate access to healthcare facilities and public transportation.",
        ja: "地方のコミュニティは医療施設や公共交通機関への十分なアクセスがないことが多い。",
        words: [
          { word: "rural", phonetic: "rúərəl", pos: "形", meanings: ["地方の、田舎の"], related: ["⇔ urban 都市の"] },
          { word: "adequate", phonetic: "ǽdikwit", pos: "形", meanings: ["十分な、適切な"], related: ["⇔ inadequate 不十分な", "adequacy 名 適切さ"] },
          { word: "facility", phonetic: "fəsíləti", pos: "名", meanings: ["施設、設備"], related: ["facilitate 動 促進する"] }
        ]
      },
      {
        id: 368,
        en: "The municipality invested heavily in renovating dilapidated infrastructure to revitalize the downtown district.",
        ja: "市当局は荒廃したインフラの改修に多額の投資を行い、中心部の再活性化を図った。",
        words: [
          { word: "municipality", phonetic: "mjùːnísəpǽləti", pos: "名", meanings: ["自治体、市当局"], related: ["municipal 形 市の、地方自治体の"] },
          { word: "renovate", phonetic: "rénəvèit", pos: "動", meanings: ["改修する、修復する"], related: ["renovation 名 改修"] },
          { word: "dilapidated", phonetic: "diǽpidèitid", pos: "形", meanings: ["荒廃した、老朽化した"], related: [] },
          { word: "revitalize", phonetic: "riváitəlàiz", pos: "動", meanings: ["再活性化する"], related: ["vital 形 活力のある"] }
        ]
      },
      {
        id: 369,
        en: "Suburban sprawl continues to encroach on fertile farmland surrounding metropolitan areas.",
        ja: "郊外のスプロール現象は大都市圏周辺の肥沃な農地を侵食し続けている。",
        words: [
          { word: "suburban", phonetic: "səbə́ːrbən", pos: "形", meanings: ["郊外の"], related: ["suburb 名 郊外"] },
          { word: "sprawl", phonetic: "sprɔ́ːl", pos: "名", meanings: ["無秩序な広がり、スプロール"], related: ["sprawl 動 だらしなく広がる"] },
          { word: "encroach", phonetic: "inkróutʃ", pos: "動", meanings: ["侵食する、侵害する"], related: ["encroachment 名 侵害"] },
          { word: "fertile", phonetic: "fə́ːrtl", pos: "形", meanings: ["肥沃な、豊かな"], related: ["fertility 名 肥沃さ", "⇔ barren 不毛の"] },
          { word: "metropolitan", phonetic: "mètrəpɑ́lətən", pos: "形", meanings: ["大都市の"], related: ["metropolis 名 大都市"] }
        ]
      },
      {
        id: 370,
        en: "Gentrification has displaced long-term residents who can no longer afford skyrocketing rents.",
        ja: "ジェントリフィケーションにより急騰する家賃を払えなくなった長期居住者が立ち退かされている。",
        words: [
          { word: "gentrification", phonetic: "dʒèntrifikéiʃən", pos: "名", meanings: ["ジェントリフィケーション、高級化"], related: ["gentrify 動 高級化する"] },
          { word: "long-term", phonetic: "lɔ́ːŋ tə́ːrm", pos: "形", meanings: ["長期の"], related: ["⇔ short-term 短期の"] },
          { word: "skyrocketing", phonetic: "skáiràkitiŋ", pos: "形", meanings: ["急騰する"], related: ["skyrocket 動 急騰する"] },
          { word: "rent", phonetic: "rént", pos: "名", meanings: ["家賃、賃料"], related: ["rent 動 賃借する", "rental 名 賃貸"] }
        ]
      },
      {
        id: 371,
        en: "Pedestrian-friendly zones with ample green space contribute to the overall well-being of city dwellers.",
        ja: "十分な緑地を備えた歩行者に優しい区域は都市住民の全体的な幸福に寄与する。",
        words: [
          { word: "pedestrian", phonetic: "pədéstriən", pos: "名", meanings: ["歩行者"], related: ["pedestrian 形 歩行者の"] },
          { word: "ample", phonetic: "ǽmpl", pos: "形", meanings: ["十分な、豊富な"], related: [] },
          { word: "contribute", phonetic: "kəntríbjuːt", pos: "動", meanings: ["寄与する、貢献する"], related: ["contribution 名 貢献"] },
          { word: "well-being", phonetic: "wélbìːiŋ", pos: "名", meanings: ["幸福、健康"], related: ["welfare 名 福祉"] },
          { word: "dweller", phonetic: "dwélər", pos: "名", meanings: ["住民、居住者"], related: ["dwell 動 住む"] }
        ]
      },
      {
        id: 372,
        en: "Agricultural mechanization has reduced the demand for manual labor in rural provinces.",
        ja: "農業の機械化は地方の州における手作業の需要を減少させた。",
        words: [
          { word: "mechanization", phonetic: "mèkənəzéiʃən", pos: "名", meanings: ["機械化"], related: ["mechanize 動 機械化する"] },
          { word: "manual", phonetic: "mǽnjuəl", pos: "形", meanings: ["手作業の、肉体の"], related: ["manual 名 手引き書"] },
          { word: "labor", phonetic: "léibər", pos: "名", meanings: ["労働"], related: ["laborer 名 労働者", "laborious 形 骨の折れる"] },
          { word: "province", phonetic: "prɑ́vins", pos: "名", meanings: ["州、省、地方"], related: ["provincial 形 地方の"] }
        ]
      },
      {
        id: 373,
        en: "Public transit networks are essential for reducing commuter dependency on private automobiles.",
        ja: "公共交通ネットワークは通勤者の自家用車への依存を減らすために不可欠だ。",
        words: [
          { word: "transit", phonetic: "trǽnzit", pos: "名", meanings: ["交通、輸送"], related: ["transition 名 移行"] },
          { word: "dependency", phonetic: "dipéndənsi", pos: "名", meanings: ["依存"], related: ["depend 動 依存する", "dependent 形 依存した"] },
          { word: "automobile", phonetic: "ɔ́ːtəməbìːl", pos: "名", meanings: ["自動車"], related: ["automotive 形 自動車の"] }
        ]
      },
      {
        id: 374,
        en: "The migration of young people from villages to cities has left many rural areas with an aging population.",
        ja: "若者の村から都市への移住は多くの地方に高齢化した人口を残している。",
        words: [
          { word: "migration", phonetic: "maigréiʃən", pos: "名", meanings: ["移住、移動"], related: ["migrate 動 移住する", "migrant 名 移住者"] },
          { word: "aging", phonetic: "éidʒiŋ", pos: "形", meanings: ["高齢化する"], related: ["age 動 年をとる"] },
          { word: "population", phonetic: "pɑ̀pjuléiʃən", pos: "名", meanings: ["人口"], related: ["populate 動 住まわせる"] }
        ]
      },
      {
        id: 375,
        en: "Zoning regulations determine whether a plot of land may be used for residential, commercial, or industrial purposes.",
        ja: "ゾーニング規制は土地が住居用、商業用、工業用のいずれに使えるかを決定する。",
        words: [
          { word: "zoning", phonetic: "zóuniŋ", pos: "名", meanings: ["ゾーニング、区域指定"], related: ["zone 名 地域、区域"] },
          { word: "regulation", phonetic: "règjuléiʃən", pos: "名", meanings: ["規制、法規"], related: ["regulate 動 規制する"] },
          { word: "plot", phonetic: "plɑ́t", pos: "名", meanings: ["区画、一区画の土地"], related: [] },
          { word: "residential", phonetic: "rèzidénʃəl", pos: "形", meanings: ["住居の"], related: ["reside 動 住む", "resident 名 住民"] },
          { word: "industrial", phonetic: "indʌ́striəl", pos: "形", meanings: ["工業の、産業の"], related: ["industry 名 産業", "industrialize 動 工業化する"] }
        ]
      },
      {
        id: 376,
        en: "Community gardens have emerged as a creative solution to the scarcity of fresh produce in urban food deserts.",
        ja: "コミュニティガーデンは都市のフードデザートにおける新鮮な農産物の不足への創造的な解決策として現れた。",
        words: [
          { word: "emerge", phonetic: "imə́ːrdʒ", pos: "動", meanings: ["現れる、出現する"], related: ["emergence 名 出現", "emerging 形 新興の"] },
          { word: "scarcity", phonetic: "skéərsəti", pos: "名", meanings: ["不足、希少"], related: ["scarce 形 乏しい"] },
          { word: "produce", phonetic: "próudjuːs", pos: "名", meanings: ["農産物"], related: ["produce 動 生産する", "product 名 製品"] }
        ]
      }
    ]
  },
  {
    section: 35,
    title: "Fashion & Appearance",
    sentences: [
      {
        id: 377,
        en: "The designer's latest collection showcases an eclectic blend of vintage aesthetics and contemporary minimalism.",
        ja: "そのデザイナーの最新コレクションはヴィンテージの美学と現代のミニマリズムの折衷的な融合を披露している。",
        words: [
          { word: "showcase", phonetic: "ʃóukèis", pos: "動", meanings: ["披露する、展示する"], related: ["showcase 名 ショーケース"] },
          { word: "eclectic", phonetic: "ikléktic", pos: "形", meanings: ["折衷的な、多様な"], related: [] },
          { word: "vintage", phonetic: "víntidʒ", pos: "形", meanings: ["ヴィンテージの、年代物の"], related: [] },
          { word: "aesthetics", phonetic: "esθétiks", pos: "名", meanings: ["美学、美的感覚"], related: ["aesthetic 形 美的な"] },
          { word: "minimalism", phonetic: "mínimàlizm", pos: "名", meanings: ["ミニマリズム、最小限主義"], related: ["minimal 形 最小限の"] }
        ]
      },
      {
        id: 378,
        en: "Fast fashion generates enormous textile waste, prompting calls for more sustainable consumption habits.",
        ja: "ファストファッションは膨大な繊維廃棄物を生み出し、より持続可能な消費習慣を求める声を促している。",
        words: [
          { word: "textile", phonetic: "tékstàil", pos: "名", meanings: ["繊維、織物"], related: [] },
          { word: "waste", phonetic: "wéist", pos: "名", meanings: ["廃棄物、無駄"], related: ["wasteful 形 無駄の多い"] },
          { word: "prompt", phonetic: "prɑ́mpt", pos: "動", meanings: ["促す、引き起こす"], related: ["prompt 形 迅速な"] },
          { word: "sustainable", phonetic: "səstéinəbl", pos: "形", meanings: ["持続可能な"], related: ["sustain 動 持続する", "sustainability 名 持続可能性"] }
        ]
      },
      {
        id: 379,
        en: "Her attire was impeccably tailored, exuding an air of elegance that captivated everyone at the gala.",
        ja: "彼女の服装は完璧に仕立てられ、ガラパーティーの全員を魅了する優雅な雰囲気を醸し出していた。",
        words: [
          { word: "attire", phonetic: "ətáiər", pos: "名", meanings: ["服装、衣装"], related: ["attire 動 装う"] },
          { word: "impeccably", phonetic: "impékəbli", pos: "副", meanings: ["完璧に、非の打ち所なく"], related: ["impeccable 形 完璧な"] },
          { word: "tailor", phonetic: "téilər", pos: "動", meanings: ["仕立てる、合わせる"], related: ["tailor 名 仕立屋"] },
          { word: "exude", phonetic: "igzúːd", pos: "動", meanings: ["醸し出す、にじみ出す"], related: [] },
          { word: "elegance", phonetic: "éligəns", pos: "名", meanings: ["優雅さ"], related: ["elegant 形 優雅な"] },
          { word: "captivate", phonetic: "kǽptivèit", pos: "動", meanings: ["魅了する"], related: ["captivating 形 魅惑的な"] }
        ]
      },
      {
        id: 380,
        en: "Cosmetic surgery has become increasingly mainstream, though it still carries inherent medical risks.",
        ja: "美容整形はますます一般的になっているが、依然として固有の医療リスクを伴う。",
        words: [
          { word: "cosmetic", phonetic: "kɑzmétic", pos: "形", meanings: ["美容の、化粧の"], related: ["cosmetics 名 化粧品"] },
          { word: "mainstream", phonetic: "méinstríːm", pos: "形", meanings: ["主流の、一般的な"], related: ["mainstream 名 主流"] },
          { word: "inherent", phonetic: "inhíərənt", pos: "形", meanings: ["固有の、本来備わった"], related: ["inherently 副 本質的に"] }
        ]
      },
      {
        id: 381,
        en: "Grooming habits vary considerably across cultures, reflecting diverse standards of personal hygiene.",
        ja: "身だしなみの習慣は文化によって大きく異なり、個人の衛生に関する多様な基準を反映している。",
        words: [
          { word: "grooming", phonetic: "grúːmiŋ", pos: "名", meanings: ["身だしなみ、手入れ"], related: ["groom 動 手入れする"] },
          { word: "vary", phonetic: "véəri", pos: "動", meanings: ["異なる、変わる"], related: ["various 形 様々な", "variation 名 変化"] },
          { word: "considerably", phonetic: "kənsídərəbli", pos: "副", meanings: ["かなり、相当"], related: ["considerable 形 かなりの"] },
          { word: "hygiene", phonetic: "háidʒiːn", pos: "名", meanings: ["衛生"], related: ["hygienic 形 衛生的な"] }
        ]
      },
      {
        id: 382,
        en: "The boutique specializes in handcrafted accessories made from ethically sourced materials.",
        ja: "そのブティックは倫理的に調達された素材から作られた手作りのアクセサリーを専門としている。",
        words: [
          { word: "boutique", phonetic: "buːtíːk", pos: "名", meanings: ["ブティック、専門店"], related: [] },
          { word: "specialize", phonetic: "spéʃəlàiz", pos: "動", meanings: ["専門にする"], related: ["specialist 名 専門家", "specialty 名 専門"] },
          { word: "handcrafted", phonetic: "hǽndkrɑ̀ːftid", pos: "形", meanings: ["手作りの"], related: ["craft 名 工芸"] },
          { word: "ethically", phonetic: "éθikəli", pos: "副", meanings: ["倫理的に"], related: ["ethical 形 倫理的な", "ethics 名 倫理"] }
        ]
      },
      {
        id: 383,
        en: "Runway trends rarely translate directly into everyday wardrobe choices for the average consumer.",
        ja: "ランウェイのトレンドが一般消費者の日常のワードローブの選択に直接反映されることはめったにない。",
        words: [
          { word: "runway", phonetic: "rʌ́nwèi", pos: "名", meanings: ["ランウェイ、ファッションショーの舞台"], related: [] },
          { word: "trend", phonetic: "trénd", pos: "名", meanings: ["トレンド、傾向"], related: ["trendy 形 流行の"] },
          { word: "translate", phonetic: "trænzléit", pos: "動", meanings: ["翻訳する", "反映される、変わる"], related: ["translation 名 翻訳"] },
          { word: "wardrobe", phonetic: "wɔ́ːrdròub", pos: "名", meanings: ["ワードローブ、衣装一式"], related: [] }
        ]
      },
      {
        id: 384,
        en: "Body image issues among adolescents have been exacerbated by unrealistic portrayals on social media.",
        ja: "ソーシャルメディア上の非現実的な描写によって、青少年のボディイメージの問題が悪化している。",
        words: [
          { word: "body image", phonetic: "bɑ́di ímidʒ", pos: "名", meanings: ["ボディイメージ、自分の体に対する認識"], related: [] },
          { word: "adolescent", phonetic: "æ̀dəlésnt", pos: "名", meanings: ["青少年"], related: ["adolescence 名 青春期"] },
          { word: "exacerbate", phonetic: "igzǽsərbèit", pos: "動", meanings: ["悪化させる"], related: ["⇔ alleviate 緩和する"] },
          { word: "portrayal", phonetic: "pɔːrtréiəl", pos: "名", meanings: ["描写、表現"], related: ["portray 動 描写する"] }
        ]
      },
      {
        id: 385,
        en: "Dyeing fabrics with natural pigments is gaining popularity as an eco-friendly alternative to synthetic chemicals.",
        ja: "天然の色素で生地を染めることが合成化学物質に代わる環境に優しい方法として人気を集めている。",
        words: [
          { word: "dye", phonetic: "dái", pos: "動", meanings: ["染める"], related: ["dye 名 染料"] },
          { word: "fabric", phonetic: "fǽbrik", pos: "名", meanings: ["生地、布地"], related: [] },
          { word: "pigment", phonetic: "pígmənt", pos: "名", meanings: ["色素、顔料"], related: ["pigmentation 名 色素沈着"] },
          { word: "synthetic", phonetic: "sinθétik", pos: "形", meanings: ["合成の、人工の"], related: ["synthesize 動 合成する", "⇔ natural 天然の"] }
        ]
      },
      {
        id: 386,
        en: "A well-fitted suit can dramatically enhance one's professional appearance and boost self-confidence.",
        ja: "体に合ったスーツは仕事上の外見を劇的に高め、自信を増す。",
        words: [
          { word: "well-fitted", phonetic: "wèl fítid", pos: "形", meanings: ["体にぴったり合った"], related: ["fit 動 合う"] },
          { word: "dramatically", phonetic: "drəmǽtikəli", pos: "副", meanings: ["劇的に"], related: ["dramatic 形 劇的な"] },
          { word: "enhance", phonetic: "inhǽns", pos: "動", meanings: ["高める、強化する"], related: ["enhancement 名 向上"] },
          { word: "appearance", phonetic: "əpíərəns", pos: "名", meanings: ["外見、容姿"], related: ["appear 動 現れる"] },
          { word: "self-confidence", phonetic: "sèlf kɑ́nfidəns", pos: "名", meanings: ["自信"], related: ["confident 形 自信のある"] }
        ]
      },
      {
        id: 387,
        en: "Cultural heritage is often expressed through traditional garments passed down across generations.",
        ja: "文化遺産はしばしば世代を超えて受け継がれる伝統的な衣服を通じて表現される。",
        words: [
          { word: "heritage", phonetic: "héritidʒ", pos: "名", meanings: ["遺産、伝統"], related: ["inherit 動 受け継ぐ"] },
          { word: "garment", phonetic: "gɑ́ːrmənt", pos: "名", meanings: ["衣服"], related: [] },
          { word: "pass down", phonetic: "", pos: "動", meanings: ["受け継ぐ、伝える"], related: [] },
          { word: "generation", phonetic: "dʒènəréiʃən", pos: "名", meanings: ["世代"], related: ["generate 動 生み出す"] }
        ]
      }
    ]
  },
  {
    section: 36,
    title: "Music & Entertainment",
    sentences: [
      {
        id: 388,
        en: "The symphony orchestra delivered a breathtaking performance that earned a prolonged standing ovation.",
        ja: "交響楽団は息をのむような演奏を披露し、長時間のスタンディングオベーションを受けた。",
        words: [
          { word: "symphony", phonetic: "símfəni", pos: "名", meanings: ["交響曲、交響楽団"], related: ["symphonic 形 交響曲の"] },
          { word: "orchestra", phonetic: "ɔ́ːrkistrə", pos: "名", meanings: ["オーケストラ、管弦楽団"], related: ["orchestral 形 管弦楽の"] },
          { word: "breathtaking", phonetic: "bréθtèikiŋ", pos: "形", meanings: ["息をのむような"], related: [] },
          { word: "ovation", phonetic: "ouvéiʃən", pos: "名", meanings: ["大喝采、オベーション"], related: ["standing ovation 名 スタンディングオベーション"] }
        ]
      },
      {
        id: 389,
        en: "Streaming services have disrupted traditional revenue models in the recording industry.",
        ja: "ストリーミングサービスはレコード業界の伝統的な収益モデルを破壊した。",
        words: [
          { word: "streaming", phonetic: "stríːmiŋ", pos: "名", meanings: ["ストリーミング"], related: ["stream 動 配信する"] },
          { word: "disrupt", phonetic: "disrʌ́pt", pos: "動", meanings: ["破壊する、混乱させる"], related: ["disruption 名 混乱", "disruptive 形 破壊的な"] },
          { word: "revenue", phonetic: "révənjùː", pos: "名", meanings: ["収益、歳入"], related: [] },
          { word: "recording", phonetic: "rikɔ́ːrdiŋ", pos: "名", meanings: ["録音、レコーディング"], related: ["record 動 録音する"] }
        ]
      },
      {
        id: 390,
        en: "The vocalist's remarkable range spans four octaves, captivating audiences worldwide.",
        ja: "そのボーカリストの驚くべき音域は4オクターブに及び、世界中の聴衆を魅了している。",
        words: [
          { word: "vocalist", phonetic: "vóukəlist", pos: "名", meanings: ["ボーカリスト、歌手"], related: ["vocal 形 声の", "vocals 名 ボーカル"] },
          { word: "remarkable", phonetic: "rimɑ́ːrkəbl", pos: "形", meanings: ["驚くべき、注目すべき"], related: ["remarkably 副 驚くほど"] },
          { word: "span", phonetic: "spǽn", pos: "動", meanings: ["及ぶ、広がる"], related: ["span 名 期間、範囲"] },
          { word: "octave", phonetic: "ɑ́ktiv", pos: "名", meanings: ["オクターブ"], related: [] },
          { word: "audience", phonetic: "ɔ́ːdiəns", pos: "名", meanings: ["聴衆、観客"], related: [] }
        ]
      },
      {
        id: 391,
        en: "Independent filmmakers often struggle to secure distribution deals despite producing critically acclaimed works.",
        ja: "インディペンデント映画制作者は批評家に絶賛される作品を制作しても配給契約の確保に苦労することが多い。",
        words: [
          { word: "independent", phonetic: "ìndipéndənt", pos: "形", meanings: ["独立した、自主制作の"], related: ["independence 名 独立"] },
          { word: "filmmaker", phonetic: "fílmmèikər", pos: "名", meanings: ["映画制作者"], related: [] },
          { word: "distribution", phonetic: "dìstəbjúːʃən", pos: "名", meanings: ["配給、流通"], related: ["distribute 動 配給する"] },
          { word: "critically acclaimed", phonetic: "krítikəli əkléimd", pos: "形", meanings: ["批評家に絶賛された"], related: ["acclaim 動 絶賛する"] }
        ]
      },
      {
        id: 392,
        en: "The composer drew inspiration from folk melodies indigenous to the mountain regions of Eastern Europe.",
        ja: "その作曲家は東ヨーロッパの山岳地域に固有のフォークメロディーからインスピレーションを得た。",
        words: [
          { word: "composer", phonetic: "kəmpóuzər", pos: "名", meanings: ["作曲家"], related: ["compose 動 作曲する", "composition 名 作曲、構成"] },
          { word: "inspiration", phonetic: "ìnspəréiʃən", pos: "名", meanings: ["インスピレーション、着想"], related: ["inspire 動 触発する"] },
          { word: "folk", phonetic: "fóuk", pos: "形", meanings: ["民俗の、フォークの"], related: ["folklore 名 民間伝承"] },
          { word: "melody", phonetic: "mélədi", pos: "名", meanings: ["メロディー、旋律"], related: ["melodic 形 旋律の"] },
          { word: "indigenous", phonetic: "indídʒənəs", pos: "形", meanings: ["固有の、土着の"], related: [] }
        ]
      },
      {
        id: 393,
        en: "Live concert attendance has rebounded sharply after a prolonged hiatus caused by the global health crisis.",
        ja: "世界的な健康危機による長期の中断の後、ライブコンサートの参加者数が急速に回復した。",
        words: [
          { word: "attendance", phonetic: "əténdəns", pos: "名", meanings: ["出席者数、参加"], related: ["attend 動 出席する", "attendee 名 出席者"] },
          { word: "rebound", phonetic: "ribáund", pos: "動", meanings: ["回復する、跳ね返る"], related: ["rebound 名 回復"] },
          { word: "sharply", phonetic: "ʃɑ́ːrpli", pos: "副", meanings: ["急激に、鋭く"], related: ["sharp 形 鋭い、急激な"] },
          { word: "hiatus", phonetic: "haiéitəs", pos: "名", meanings: ["中断、休止"], related: [] }
        ]
      },
      {
        id: 394,
        en: "The documentary sheds light on the behind-the-scenes dynamics of producing a Broadway musical.",
        ja: "そのドキュメンタリーはブロードウェイミュージカルの制作の舞台裏の力学に光を当てている。",
        words: [
          { word: "documentary", phonetic: "dɑ̀kjuméntəri", pos: "名", meanings: ["ドキュメンタリー"], related: ["document 名 文書"] },
          { word: "shed light on", phonetic: "", pos: "動", meanings: ["〜に光を当てる、解明する"], related: [] },
          { word: "behind-the-scenes", phonetic: "bìháind ðə síːnz", pos: "形", meanings: ["舞台裏の"], related: ["scene 名 場面"] },
          { word: "dynamics", phonetic: "dainǽmiks", pos: "名", meanings: ["力学、動態"], related: ["dynamic 形 動的な、活力のある"] }
        ]
      },
      {
        id: 395,
        en: "Improvisation is a hallmark of jazz, demanding exceptional musical intuition and technical proficiency.",
        ja: "即興演奏はジャズの特徴であり、卓越した音楽的直感と技術的熟練を要求する。",
        words: [
          { word: "improvisation", phonetic: "ìmprɑ̀vəzéiʃən", pos: "名", meanings: ["即興演奏、即興"], related: ["improvise 動 即興で行う"] },
          { word: "hallmark", phonetic: "hɔ́ːlmɑ̀ːrk", pos: "名", meanings: ["特徴、特質"], related: [] },
          { word: "intuition", phonetic: "ìntjuíʃən", pos: "名", meanings: ["直感"], related: ["intuitive 形 直感的な"] },
          { word: "proficiency", phonetic: "prəfíʃənsi", pos: "名", meanings: ["熟練、堪能"], related: ["proficient 形 熟達した"] }
        ]
      },
      {
        id: 396,
        en: "The animated feature garnered numerous awards for its stunning visual effects and compelling storyline.",
        ja: "そのアニメーション映画は見事な視覚効果と説得力のあるストーリーで数々の賞を獲得した。",
        words: [
          { word: "animated", phonetic: "ǽnimèitid", pos: "形", meanings: ["アニメーションの"], related: ["animate 動 動かす", "animation 名 アニメーション"] },
          { word: "garner", phonetic: "gɑ́ːrnər", pos: "動", meanings: ["獲得する、集める"], related: [] },
          { word: "stunning", phonetic: "stʌ́niŋ", pos: "形", meanings: ["見事な、圧倒的な"], related: ["stun 動 驚かせる"] },
          { word: "compelling", phonetic: "kəmpéliŋ", pos: "形", meanings: ["説得力のある、やむにやまれぬ"], related: ["compel 動 強いる"] },
          { word: "storyline", phonetic: "stɔ́ːrilàin", pos: "名", meanings: ["ストーリー、筋書き"], related: ["plot 名 筋書き"] }
        ]
      },
      {
        id: 397,
        en: "Ticket scalping has become a pervasive issue, with resellers charging exorbitant premiums for sold-out events.",
        ja: "チケットの転売は蔓延した問題となり、転売業者が完売イベントに法外なプレミアムを課している。",
        words: [
          { word: "scalping", phonetic: "skǽlpiŋ", pos: "名", meanings: ["転売（チケットの）"], related: ["scalp 動 転売する"] },
          { word: "pervasive", phonetic: "pərvéisiv", pos: "形", meanings: ["蔓延した、広範な"], related: ["pervade 動 蔓延する"] },
          { word: "reseller", phonetic: "riːsélər", pos: "名", meanings: ["転売業者"], related: ["resell 動 転売する"] },
          { word: "exorbitant", phonetic: "igzɔ́ːrbitənt", pos: "形", meanings: ["法外な"], related: [] },
          { word: "premium", phonetic: "príːmiəm", pos: "名", meanings: ["割増金、プレミアム"], related: [] }
        ]
      }
    ]
  },
  {
    section: 37,
    title: "Animals & Nature",
    sentences: [
      {
        id: 398,
        en: "Conservationists are working tirelessly to protect endangered species from the brink of extinction.",
        ja: "自然保護活動家は絶滅危惧種を絶滅の瀬戸際から守るために精力的に活動している。",
        words: [
          { word: "conservationist", phonetic: "kɑ̀nsərvéiʃənist", pos: "名", meanings: ["自然保護活動家"], related: ["conservation 名 保護", "conserve 動 保護する"] },
          { word: "tirelessly", phonetic: "táiərləsli", pos: "副", meanings: ["精力的に、たゆまず"], related: ["tireless 形 疲れを知らない"] },
          { word: "endangered", phonetic: "indéindʒərd", pos: "形", meanings: ["絶滅の危機にある"], related: ["endanger 動 危険にさらす"] },
          { word: "species", phonetic: "spíːʃiːz", pos: "名", meanings: ["種"], related: [] },
          { word: "extinction", phonetic: "ikstiŋkʃən", pos: "名", meanings: ["絶滅"], related: ["extinct 形 絶滅した"] }
        ]
      },
      {
        id: 399,
        en: "The intricate ecosystem of a coral reef supports an astonishing diversity of marine organisms.",
        ja: "サンゴ礁の複雑な生態系は驚くほど多様な海洋生物を支えている。",
        words: [
          { word: "intricate", phonetic: "íntrikət", pos: "形", meanings: ["複雑な、入り組んだ"], related: ["intricacy 名 複雑さ"] },
          { word: "ecosystem", phonetic: "íːkousìstəm", pos: "名", meanings: ["生態系"], related: ["ecology 名 生態学"] },
          { word: "coral reef", phonetic: "kɔ́ːrəl ríːf", pos: "名", meanings: ["サンゴ礁"], related: ["coral 名 サンゴ"] },
          { word: "astonishing", phonetic: "əstɑ́niʃiŋ", pos: "形", meanings: ["驚くべき"], related: ["astonish 動 驚かせる"] },
          { word: "organism", phonetic: "ɔ́ːrgənìzm", pos: "名", meanings: ["生物、有機体"], related: ["organic 形 有機の"] }
        ]
      },
      {
        id: 400,
        en: "Migratory birds traverse thousands of kilometers each year, guided by an innate navigational instinct.",
        ja: "渡り鳥は毎年、先天的な航行本能に導かれて何千キロメートルも移動する。",
        words: [
          { word: "migratory", phonetic: "máigrətɔ̀ːri", pos: "形", meanings: ["渡りの、移動性の"], related: ["migrate 動 渡る、移住する"] },
          { word: "traverse", phonetic: "trəvə́ːrs", pos: "動", meanings: ["横断する、移動する"], related: [] },
          { word: "innate", phonetic: "inéit", pos: "形", meanings: ["先天的な、生まれつきの"], related: ["⇔ acquired 後天的な"] },
          { word: "navigational", phonetic: "nǽvigèiʃənl", pos: "形", meanings: ["航行の、ナビゲーションの"], related: ["navigate 動 航行する"] },
          { word: "instinct", phonetic: "ínstiŋkt", pos: "名", meanings: ["本能"], related: ["instinctive 形 本能的な"] }
        ]
      },
      {
        id: 401,
        en: "Poaching remains a grave threat to wildlife populations in many protected national reserves.",
        ja: "密猟は多くの保護区の野生動物の個体数にとって深刻な脅威であり続けている。",
        words: [
          { word: "poaching", phonetic: "póutʃiŋ", pos: "名", meanings: ["密猟"], related: ["poach 動 密猟する"] },
          { word: "grave", phonetic: "gréiv", pos: "形", meanings: ["重大な、深刻な"], related: ["gravity 名 重大さ"] },
          { word: "wildlife", phonetic: "wáildlàif", pos: "名", meanings: ["野生動物"], related: ["wild 形 野生の"] },
          { word: "reserve", phonetic: "rizə́ːrv", pos: "名", meanings: ["保護区、保留地"], related: ["reserve 動 予約する、確保する"] }
        ]
      },
      {
        id: 402,
        en: "Deforestation disrupts the natural habitat of countless species, pushing many toward irreversible decline.",
        ja: "森林破壊は無数の種の自然の生息地を破壊し、多くを不可逆的な減少へと追いやっている。",
        words: [
          { word: "habitat", phonetic: "hǽbitæ̀t", pos: "名", meanings: ["生息地"], related: [] },
          { word: "countless", phonetic: "káuntlis", pos: "形", meanings: ["無数の"], related: ["⇔ few 少数の"] },
          { word: "irreversible", phonetic: "ìrivə́ːrsəbl", pos: "形", meanings: ["不可逆的な、取り返しのつかない"], related: ["⇔ reversible 可逆の", "reverse 動 逆転させる"] },
          { word: "decline", phonetic: "dikláin", pos: "名", meanings: ["減少、衰退"], related: ["decline 動 減少する、断る"] }
        ]
      },
      {
        id: 403,
        en: "Whales communicate over immense oceanic distances through complex vocalizations known as songs.",
        ja: "クジラは歌と呼ばれる複雑な発声を通じて、広大な海洋の距離を越えてコミュニケーションする。",
        words: [
          { word: "whale", phonetic: "hwéil", pos: "名", meanings: ["クジラ"], related: [] },
          { word: "immense", phonetic: "iméns", pos: "形", meanings: ["広大な、莫大な"], related: ["immensely 副 非常に"] },
          { word: "oceanic", phonetic: "òuʃiǽnik", pos: "形", meanings: ["海洋の"], related: ["ocean 名 海洋"] },
          { word: "vocalization", phonetic: "vòukəlizéiʃən", pos: "名", meanings: ["発声"], related: ["vocalize 動 声に出す"] }
        ]
      },
      {
        id: 404,
        en: "Pollination by bees is indispensable for the reproduction of a vast majority of flowering plants.",
        ja: "ミツバチによる受粉は大多数の顕花植物の繁殖に不可欠である。",
        words: [
          { word: "pollination", phonetic: "pɑ̀lənéiʃən", pos: "名", meanings: ["受粉"], related: ["pollinate 動 受粉させる", "pollen 名 花粉"] },
          { word: "bee", phonetic: "bíː", pos: "名", meanings: ["ミツバチ"], related: [] },
          { word: "reproduction", phonetic: "rìːprədʌ́kʃən", pos: "名", meanings: ["繁殖、再生"], related: ["reproduce 動 繁殖する"] },
          { word: "vast", phonetic: "vǽst", pos: "形", meanings: ["広大な、膨大な"], related: ["vastly 副 非常に"] },
          { word: "flowering", phonetic: "fláuəriŋ", pos: "形", meanings: ["花の咲く、顕花の"], related: ["flower 名 花"] }
        ]
      },
      {
        id: 405,
        en: "Predatory animals at the top of the food chain play a crucial role in regulating prey populations.",
        ja: "食物連鎖の頂点にいる捕食動物は獲物の個体数を調節する上で極めて重要な役割を果たす。",
        words: [
          { word: "predatory", phonetic: "prédətɔ̀ːri", pos: "形", meanings: ["捕食性の"], related: ["predator 名 捕食者"] },
          { word: "food chain", phonetic: "fúːd tʃèin", pos: "名", meanings: ["食物連鎖"], related: [] },
          { word: "regulate", phonetic: "régjulèit", pos: "動", meanings: ["調節する、規制する"], related: ["regulation 名 規制"] },
          { word: "prey", phonetic: "préi", pos: "名", meanings: ["獲物、餌食"], related: ["prey 動 捕食する"] }
        ]
      },
      {
        id: 406,
        en: "Reforestation initiatives aim to restore degraded landscapes and sequester atmospheric carbon.",
        ja: "再植林の取り組みは荒廃した景観を回復し、大気中の炭素を固定することを目指している。",
        words: [
          { word: "reforestation", phonetic: "rìːfɔ̀ːristéiʃən", pos: "名", meanings: ["再植林"], related: ["forest 名 森林"] },
          { word: "initiative", phonetic: "iníʃətiv", pos: "名", meanings: ["取り組み、主導権"], related: ["initiate 動 開始する"] },
          { word: "restore", phonetic: "ristɔ́ːr", pos: "動", meanings: ["回復する、復元する"], related: ["restoration 名 回復"] },
          { word: "degraded", phonetic: "digréidid", pos: "形", meanings: ["荒廃した、劣化した"], related: ["degrade 動 劣化させる"] },
          { word: "sequester", phonetic: "sikwéstər", pos: "動", meanings: ["隔離する、固定する（炭素を）"], related: ["sequestration 名 隔離、固定"] }
        ]
      },
      {
        id: 407,
        en: "Nocturnal creatures have evolved specialized sensory adaptations for hunting in complete darkness.",
        ja: "夜行性の生き物は完全な暗闇の中で狩りをするための特殊な感覚適応を進化させてきた。",
        words: [
          { word: "nocturnal", phonetic: "nɑktə́ːrnl", pos: "形", meanings: ["夜行性の"], related: ["⇔ diurnal 昼行性の"] },
          { word: "creature", phonetic: "kríːtʃər", pos: "名", meanings: ["生き物"], related: ["create 動 創造する"] },
          { word: "evolve", phonetic: "ivɑ́lv", pos: "動", meanings: ["進化する"], related: ["evolution 名 進化"] },
          { word: "sensory", phonetic: "sénsəri", pos: "形", meanings: ["感覚の"], related: ["sense 名 感覚"] },
          { word: "adaptation", phonetic: "æ̀dæptéiʃən", pos: "名", meanings: ["適応"], related: ["adapt 動 適応する"] }
        ]
      },
      {
        id: 408,
        en: "Wetlands serve as vital buffers against flooding while providing sanctuary for diverse bird species.",
        ja: "湿地帯は洪水に対する重要な緩衝地帯として機能しながら、多様な鳥類に聖域を提供する。",
        words: [
          { word: "wetland", phonetic: "wétlæ̀nd", pos: "名", meanings: ["湿地帯"], related: [] },
          { word: "vital", phonetic: "váitl", pos: "形", meanings: ["極めて重要な、生命の"], related: ["vitality 名 活力"] },
          { word: "buffer", phonetic: "bʌ́fər", pos: "名", meanings: ["緩衝地帯、緩衝材"], related: [] },
          { word: "sanctuary", phonetic: "sǽŋktʃuèri", pos: "名", meanings: ["聖域、保護区"], related: [] }
        ]
      }
    ]
  },
  {
    section: 38,
    title: "Space & Universe",
    sentences: [
      {
        id: 409,
        en: "Astronomers detected a faint signal from a distant galaxy that may indicate the presence of extraterrestrial life.",
        ja: "天文学者は遠い銀河からの微弱な信号を検出し、地球外生命の存在を示す可能性がある。",
        words: [
          { word: "astronomer", phonetic: "əstrɑ́nəmər", pos: "名", meanings: ["天文学者"], related: ["astronomy 名 天文学", "astronomical 形 天文学の"] },
          { word: "detect", phonetic: "ditékt", pos: "動", meanings: ["検出する、発見する"], related: ["detection 名 検出", "detector 名 検出器"] },
          { word: "faint", phonetic: "féint", pos: "形", meanings: ["微弱な、かすかな"], related: ["faintly 副 かすかに"] },
          { word: "galaxy", phonetic: "gǽləksi", pos: "名", meanings: ["銀河"], related: ["galactic 形 銀河の"] },
          { word: "extraterrestrial", phonetic: "èkstrətəréstriəl", pos: "形", meanings: ["地球外の"], related: ["terrestrial 形 地球の"] }
        ]
      },
      {
        id: 410,
        en: "The space probe transmitted high-resolution imagery of the planet's cratered surface back to mission control.",
        ja: "宇宙探査機はその惑星のクレーターだらけの表面の高解像度画像を管制センターに送信した。",
        words: [
          { word: "probe", phonetic: "próub", pos: "名", meanings: ["探査機、調査"], related: ["probe 動 調査する"] },
          { word: "transmit", phonetic: "trænzmít", pos: "動", meanings: ["送信する、伝送する"], related: ["transmission 名 送信"] },
          { word: "high-resolution", phonetic: "hái rèzəlúːʃən", pos: "形", meanings: ["高解像度の"], related: ["resolution 名 解像度"] },
          { word: "imagery", phonetic: "ímidʒri", pos: "名", meanings: ["画像、映像"], related: ["image 名 画像"] },
          { word: "cratered", phonetic: "kréitərd", pos: "形", meanings: ["クレーターのある"], related: ["crater 名 クレーター"] }
        ]
      },
      {
        id: 411,
        en: "Gravitational waves, first predicted by Einstein, have been directly observed using laser interferometers.",
        ja: "アインシュタインが最初に予測した重力波は、レーザー干渉計を使って直接観測されている。",
        words: [
          { word: "gravitational", phonetic: "grǽvitéiʃənl", pos: "形", meanings: ["重力の"], related: ["gravity 名 重力", "gravitation 名 万有引力"] },
          { word: "predict", phonetic: "pridíkt", pos: "動", meanings: ["予測する"], related: ["prediction 名 予測", "predictable 形 予測可能な"] },
          { word: "observe", phonetic: "əbzə́ːrv", pos: "動", meanings: ["観測する、観察する"], related: ["observation 名 観測", "observatory 名 天文台"] },
          { word: "interferometer", phonetic: "ìntərfərɑ́mətər", pos: "名", meanings: ["干渉計"], related: ["interference 名 干渉"] }
        ]
      },
      {
        id: 412,
        en: "The International Space Station orbits the Earth approximately every ninety minutes at an altitude of four hundred kilometers.",
        ja: "国際宇宙ステーションは高度400キロメートルで約90分ごとに地球を周回している。",
        words: [
          { word: "orbit", phonetic: "ɔ́ːrbit", pos: "動", meanings: ["周回する"], related: ["orbit 名 軌道", "orbital 形 軌道の"] },
          { word: "approximately", phonetic: "əprɑ́ksəmətli", pos: "副", meanings: ["約、おおよそ"], related: ["approximate 形 おおよその"] },
          { word: "altitude", phonetic: "ǽltitjùːd", pos: "名", meanings: ["高度"], related: [] }
        ]
      },
      {
        id: 413,
        en: "A supernova explosion releases more energy in a few seconds than our sun will emit over its entire lifespan.",
        ja: "超新星爆発は太陽がその全寿命にわたって放出するよりも多くのエネルギーを数秒で放出する。",
        words: [
          { word: "supernova", phonetic: "sùːpərnóuvə", pos: "名", meanings: ["超新星"], related: ["nova 名 新星"] },
          { word: "explosion", phonetic: "iksplóuʒən", pos: "名", meanings: ["爆発"], related: ["explode 動 爆発する"] },
          { word: "emit", phonetic: "imít", pos: "動", meanings: ["放出する、放射する"], related: ["emission 名 放出"] },
          { word: "lifespan", phonetic: "láifspæ̀n", pos: "名", meanings: ["寿命"], related: [] }
        ]
      },
      {
        id: 414,
        en: "Dark matter constitutes roughly twenty-seven percent of the universe, yet it remains invisible to telescopes.",
        ja: "暗黒物質は宇宙の約27パーセントを構成するが、望遠鏡には見えないままである。",
        words: [
          { word: "dark matter", phonetic: "dɑ́ːrk mǽtər", pos: "名", meanings: ["暗黒物質"], related: ["dark energy 名 暗黒エネルギー"] },
          { word: "constitute", phonetic: "kɑ́nstətjùːt", pos: "動", meanings: ["構成する"], related: ["constitution 名 構成、憲法"] },
          { word: "roughly", phonetic: "rʌ́fli", pos: "副", meanings: ["おおよそ、大雑把に"], related: ["rough 形 大雑把な"] },
          { word: "invisible", phonetic: "invízəbl", pos: "形", meanings: ["目に見えない"], related: ["⇔ visible 目に見える"] },
          { word: "telescope", phonetic: "téləskòup", pos: "名", meanings: ["望遠鏡"], related: ["telescopic 形 望遠鏡の"] }
        ]
      },
      {
        id: 415,
        en: "Colonizing Mars poses formidable challenges, including extreme radiation exposure and the absence of breathable air.",
        ja: "火星の植民地化は極度の放射線被曝と呼吸可能な空気の欠如を含む手ごわい課題を突きつける。",
        words: [
          { word: "colonize", phonetic: "kɑ́lənàiz", pos: "動", meanings: ["植民地化する"], related: ["colony 名 植民地", "colonization 名 植民地化"] },
          { word: "formidable", phonetic: "fɔ́ːrmidəbl", pos: "形", meanings: ["手ごわい、恐るべき"], related: [] },
          { word: "radiation", phonetic: "rèidiéiʃən", pos: "名", meanings: ["放射線、放射能"], related: ["radiate 動 放射する"] },
          { word: "exposure", phonetic: "ikspóuʒər", pos: "名", meanings: ["被曝、露出"], related: ["expose 動 さらす"] },
          { word: "breathable", phonetic: "bríːðəbl", pos: "形", meanings: ["呼吸可能な"], related: ["breathe 動 呼吸する"] }
        ]
      },
      {
        id: 416,
        en: "The Hubble Space Telescope has captured spectacular images of nebulae where new stars are being born.",
        ja: "ハッブル宇宙望遠鏡は新しい星が誕生している星雲の壮大な画像を撮影してきた。",
        words: [
          { word: "capture", phonetic: "kǽptʃər", pos: "動", meanings: ["撮影する、捕らえる"], related: ["capture 名 捕獲"] },
          { word: "spectacular", phonetic: "spektǽkjulər", pos: "形", meanings: ["壮大な、目を見張るような"], related: ["spectacle 名 光景"] },
          { word: "nebula", phonetic: "nébjulə", pos: "名", meanings: ["星雲"], related: ["nebulae 名 （複数形）"] }
        ]
      },
      {
        id: 417,
        en: "Satellite constellations in low Earth orbit provide global broadband connectivity to remote regions.",
        ja: "低軌道の衛星コンステレーションは遠隔地にグローバルなブロードバンド接続を提供する。",
        words: [
          { word: "satellite", phonetic: "sǽtəlàit", pos: "名", meanings: ["衛星"], related: [] },
          { word: "constellation", phonetic: "kɑ̀nstəléiʃən", pos: "名", meanings: ["星座、衛星群"], related: [] },
          { word: "broadband", phonetic: "brɔ́ːdbæ̀nd", pos: "名", meanings: ["ブロードバンド"], related: [] },
          { word: "connectivity", phonetic: "kɑ̀nektívəti", pos: "名", meanings: ["接続性"], related: ["connect 動 接続する"] }
        ]
      },
      {
        id: 418,
        en: "Black holes possess gravitational pull so immense that not even light can escape their event horizon.",
        ja: "ブラックホールは光さえもその事象の地平面から逃れられないほど強大な重力を持つ。",
        words: [
          { word: "black hole", phonetic: "blǽk hóul", pos: "名", meanings: ["ブラックホール"], related: [] },
          { word: "possess", phonetic: "pəzés", pos: "動", meanings: ["持つ、所有する"], related: ["possession 名 所有"] },
          { word: "gravitational pull", phonetic: "grǽvitéiʃənl púl", pos: "名", meanings: ["重力、引力"], related: [] },
          { word: "escape", phonetic: "iskéip", pos: "動", meanings: ["逃れる、脱出する"], related: ["escape 名 脱出"] },
          { word: "event horizon", phonetic: "ivént hərázn", pos: "名", meanings: ["事象の地平面"], related: ["horizon 名 地平線"] }
        ]
      },
      {
        id: 419,
        en: "Robotic rovers have gathered invaluable geological data from the surface of Mars over the past two decades.",
        ja: "ロボット探査車は過去20年にわたり火星の表面から非常に貴重な地質データを収集してきた。",
        words: [
          { word: "robotic", phonetic: "roubɑ́tik", pos: "形", meanings: ["ロボットの"], related: ["robot 名 ロボット"] },
          { word: "rover", phonetic: "róuvər", pos: "名", meanings: ["探査車、ローバー"], related: ["rove 動 放浪する"] },
          { word: "invaluable", phonetic: "invǽljuəbl", pos: "形", meanings: ["非常に貴重な"], related: ["⇔ worthless 無価値の"] },
          { word: "geological", phonetic: "dʒìːəlɑ́dʒikəl", pos: "形", meanings: ["地質学の"], related: ["geology 名 地質学"] },
          { word: "decade", phonetic: "dékeid", pos: "名", meanings: ["10年間"], related: [] }
        ]
      },
      {
        id: 420,
        en: "The ambitious mission seeks to establish a permanent lunar base capable of sustaining human habitation.",
        ja: "その野心的なミッションは人間の居住を維持できる恒久的な月面基地の設立を目指している。",
        words: [
          { word: "ambitious", phonetic: "æmbíʃəs", pos: "形", meanings: ["野心的な、大志のある"], related: ["ambition 名 野心"] },
          { word: "mission", phonetic: "míʃən", pos: "名", meanings: ["任務、ミッション"], related: [] },
          { word: "permanent", phonetic: "pə́ːrmənənt", pos: "形", meanings: ["恒久的な、永続する"], related: ["⇔ temporary 一時的な"] },
          { word: "lunar", phonetic: "lúːnər", pos: "形", meanings: ["月の"], related: [] },
          { word: "habitation", phonetic: "hæ̀bitéiʃən", pos: "名", meanings: ["居住"], related: ["inhabit 動 住む", "habitable 形 居住可能な"] }
        ]
      }
    ]
  },
  {
    section: 39,
    title: "Law & Crime",
    sentences: [
      {
        id: 421,
        en: "The suspect was arrested on charges of fraud and taken into custody immediately.",
        ja: "容疑者は詐欺の容疑で逮捕され、直ちに拘留された。",
        words: [
          { word: "suspect", phonetic: "sʌ́spekt", pos: "名", meanings: ["容疑者、疑わしい人物"], related: ["suspect 動 疑う", "suspicion 名 疑い", "suspicious 形 疑わしい"] },
          { word: "arrest", phonetic: "ərést", pos: "動", meanings: ["逮捕する"], related: ["arrest 名 逮捕", "under arrest 逮捕されて"] },
          { word: "charge", phonetic: "tʃɑ́ːrdʒ", pos: "名", meanings: ["容疑、告訴、料金"], related: ["on charges of... ...の容疑で", "charge 動 告発する、請求する"] },
          { word: "fraud", phonetic: "frɔ́ːd", pos: "名", meanings: ["詐欺、不正行為"], related: ["fraudulent 形 詐欺の"] },
          { word: "custody", phonetic: "kʌ́stədi", pos: "名", meanings: ["拘留、保護、管理"], related: ["take into custody 拘留する"] }
        ]
      },
      {
        id: 422,
        en: "The jury reached a unanimous verdict after three days of deliberation.",
        ja: "陪審員は3日間の審議の末、全員一致の評決に達した。",
        words: [
          { word: "jury", phonetic: "dʒúəri", pos: "名", meanings: ["陪審（員団）"], related: ["juror 名 陪審員"] },
          { word: "unanimous", phonetic: "juːnǽnəməs", pos: "形", meanings: ["全員一致の、満場一致の"], related: ["unanimously 副 満場一致で"] },
          { word: "verdict", phonetic: "və́ːrdikt", pos: "名", meanings: ["評決、判決"], related: ["reach a verdict 評決に達する"] },
          { word: "deliberation", phonetic: "dilìbəréiʃən", pos: "名", meanings: ["審議、熟慮"], related: ["deliberate 動 審議する 形 意図的な"] }
        ]
      },
      {
        id: 423,
        en: "The attorney argued that the evidence was insufficient to convict his client.",
        ja: "弁護士は、その証拠では依頼人を有罪にするには不十分だと主張した。",
        words: [
          { word: "attorney", phonetic: "ətə́ːrni", pos: "名", meanings: ["弁護士"], related: ["lawyer/counsel 弁護士"] },
          { word: "argue", phonetic: "ɑ́ːrgjuː", pos: "動", meanings: ["主張する、議論する"], related: ["argument 名 議論、主張"] },
          { word: "evidence", phonetic: "évədəns", pos: "名", meanings: ["証拠、根拠"], related: ["evident 形 明白な"] },
          { word: "insufficient", phonetic: "ìnsəfíʃənt", pos: "形", meanings: ["不十分な"], related: ["⇔ sufficient 十分な"] },
          { word: "convict", phonetic: "kənvíkt", pos: "動", meanings: ["有罪と判決する"], related: ["conviction 名 有罪判決、確信", "convict 名 受刑者"] }
        ]
      },
      {
        id: 424,
        en: "Witnesses are obliged to testify under oath in a court of law.",
        ja: "証人は法廷において宣誓の上、証言する義務がある。",
        words: [
          { word: "witness", phonetic: "wítnəs", pos: "名", meanings: ["証人、目撃者"], related: ["witness 動 目撃する"] },
          { word: "oblige", phonetic: "əbláidʒ", pos: "動", meanings: ["義務づける、強いる"], related: ["obligation 名 義務", "be obliged to... ...する義務がある"] },
          { word: "testify", phonetic: "téstəfài", pos: "動", meanings: ["証言する"], related: ["testimony 名 証言"] },
          { word: "oath", phonetic: "óuθ", pos: "名", meanings: ["宣誓、誓い"], related: ["under oath 宣誓して", "take an oath 宣誓する"] }
        ]
      },
      {
        id: 425,
        en: "The defendant pleaded not guilty and demanded a fair trial.",
        ja: "被告人は無罪を主張し、公正な裁判を要求した。",
        words: [
          { word: "defendant", phonetic: "diféndənt", pos: "名", meanings: ["被告（人）"], related: ["⇔ plaintiff 原告", "defend 動 弁護する"] },
          { word: "plead", phonetic: "plíːd", pos: "動", meanings: ["（有罪・無罪を）申し立てる、嘆願する"], related: ["plea 名 申し立て、嘆願"] },
          { word: "guilty", phonetic: "gílti", pos: "形", meanings: ["有罪の、罪悪感がある"], related: ["⇔ not guilty 無罪の", "guilt 名 罪、罪悪感"] },
          { word: "demand", phonetic: "dimǽnd", pos: "動", meanings: ["要求する"], related: ["demand 名 要求、需要"] },
          { word: "trial", phonetic: "tráiəl", pos: "名", meanings: ["裁判、試み"], related: ["trial and error 試行錯誤"] }
        ]
      },
      {
        id: 426,
        en: "The judge sentenced the offender to five years in prison for robbery.",
        ja: "裁判官は強盗罪でその犯人に懲役5年の判決を下した。",
        words: [
          { word: "judge", phonetic: "dʒʌ́dʒ", pos: "名", meanings: ["裁判官、審判"], related: ["judge 動 判断する", "judgment 名 判決、判断"] },
          { word: "sentence", phonetic: "séntəns", pos: "動", meanings: ["判決を下す"], related: ["sentence 名 判決、文"] },
          { word: "offender", phonetic: "əféndər", pos: "名", meanings: ["犯罪者、違反者"], related: ["offend 動 罪を犯す、怒らせる", "offense 名 犯罪、違反"] },
          { word: "prison", phonetic: "prízn", pos: "名", meanings: ["刑務所"], related: ["prisoner 名 囚人", "imprison 動 投獄する"] },
          { word: "robbery", phonetic: "rɑ́bəri", pos: "名", meanings: ["強盗（罪）"], related: ["rob 動 奪う", "robber 名 強盗犯"] }
        ]
      },
      {
        id: 427,
        en: "The police launched an investigation into the alleged corruption scandal.",
        ja: "警察はその汚職疑惑に対する捜査に乗り出した。",
        words: [
          { word: "launch", phonetic: "lɔ́ːntʃ", pos: "動", meanings: ["開始する、着手する、発射する"], related: ["launch 名 開始、発射"] },
          { word: "investigation", phonetic: "invèstəgéiʃən", pos: "名", meanings: ["捜査、調査"], related: ["investigate 動 捜査する", "investigator 名 捜査官"] },
          { word: "alleged", phonetic: "əlédʒd", pos: "形", meanings: ["申し立てられた、疑惑の"], related: ["allege 動 申し立てる", "allegation 名 申し立て"] },
          { word: "corruption", phonetic: "kərʌ́pʃən", pos: "名", meanings: ["汚職、腐敗"], related: ["corrupt 形 腐敗した 動 堕落させる"] },
          { word: "scandal", phonetic: "skǽndl", pos: "名", meanings: ["スキャンダル、不祥事"], related: ["scandalous 形 恥ずべき"] }
        ]
      },
      {
        id: 428,
        en: "The new legislation aims to impose stricter penalties for cybercrimes.",
        ja: "新しい法律はサイバー犯罪に対してより厳しい罰則を課すことを目的としている。",
        words: [
          { word: "legislation", phonetic: "lèdʒisléiʃən", pos: "名", meanings: ["法律、立法"], related: ["legislate 動 法律を制定する", "legislature 名 立法機関"] },
          { word: "aim", phonetic: "éim", pos: "動", meanings: ["目的とする、狙う"], related: ["aim 名 目的、狙い"] },
          { word: "impose", phonetic: "impóuz", pos: "動", meanings: ["課す、押しつける"], related: ["imposition 名 課すこと"] },
          { word: "strict", phonetic: "stríkt", pos: "形", meanings: ["厳しい、厳格な"], related: ["strictly 副 厳密に"] },
          { word: "penalty", phonetic: "pénəlti", pos: "名", meanings: ["罰則、刑罰、ペナルティ"], related: ["penalize 動 罰する"] }
        ]
      },
      {
        id: 429,
        en: "The victim filed a lawsuit against the company, claiming negligence.",
        ja: "被害者は過失を主張して、その会社に対し訴訟を起こした。",
        words: [
          { word: "victim", phonetic: "víktim", pos: "名", meanings: ["被害者、犠牲者"], related: ["victimize 動 犠牲にする"] },
          { word: "file", phonetic: "fáil", pos: "動", meanings: ["（訴訟を）起こす、提出する"], related: ["file a lawsuit 訴訟を起こす"] },
          { word: "lawsuit", phonetic: "lɔ́ːsùːt", pos: "名", meanings: ["訴訟"], related: ["sue 動 訴える"] },
          { word: "claim", phonetic: "kléim", pos: "動", meanings: ["主張する、要求する"], related: ["claim 名 主張、要求"] },
          { word: "negligence", phonetic: "néglidʒəns", pos: "名", meanings: ["過失、怠慢"], related: ["negligent 形 怠慢な", "neglect 動 怠る"] }
        ]
      },
      {
        id: 430,
        en: "The constitution guarantees citizens the right to a fair and public hearing.",
        ja: "憲法は市民に公正かつ公開の審理を受ける権利を保障している。",
        words: [
          { word: "constitution", phonetic: "kɑ̀nstətjúːʃən", pos: "名", meanings: ["憲法、構成"], related: ["constitutional 形 憲法の"] },
          { word: "guarantee", phonetic: "gæ̀rəntíː", pos: "動", meanings: ["保障する、保証する"], related: ["guarantee 名 保証"] },
          { word: "citizen", phonetic: "sítəzən", pos: "名", meanings: ["市民、国民"], related: ["citizenship 名 市民権"] },
          { word: "right", phonetic: "ráit", pos: "名", meanings: ["権利"], related: ["human rights 人権", "civil rights 公民権"] },
          { word: "hearing", phonetic: "híəriŋ", pos: "名", meanings: ["審理、聴聞会、聴力"], related: ["hear 動 聞く"] }
        ]
      }
    ]
  },
  {
    section: 40,
    title: "Politics & Government",
    sentences: [
      {
        id: 431,
        en: "The president vetoed the bill, claiming it would undermine national security.",
        ja: "大統領はその法案が国家安全保障を損なうとして拒否権を行使した。",
        words: [
          { word: "president", phonetic: "prézədənt", pos: "名", meanings: ["大統領、社長"], related: ["presidency 名 大統領の職"] },
          { word: "veto", phonetic: "víːtou", pos: "動", meanings: ["拒否権を行使する"], related: ["veto 名 拒否権"] },
          { word: "bill", phonetic: "bíl", pos: "名", meanings: ["法案、請求書"], related: ["pass a bill 法案を可決する"] },
          { word: "undermine", phonetic: "ʌ̀ndərmáin", pos: "動", meanings: ["徐々にむしばむ、弱体化する"], related: ["weaken/erode"] }
        ]
      },
      {
        id: 432,
        en: "The opposition party demanded a thorough reform of the electoral system.",
        ja: "野党は選挙制度の徹底的な改革を要求した。",
        words: [
          { word: "opposition", phonetic: "ɑ̀pəzíʃən", pos: "名", meanings: ["反対、野党"], related: ["oppose 動 反対する"] },
          { word: "thorough", phonetic: "θə́ːrou", pos: "形", meanings: ["徹底的な、完全な"], related: ["thoroughly 副 徹底的に"] },
          { word: "reform", phonetic: "rifɔ́ːrm", pos: "名", meanings: ["改革、改正"], related: ["reform 動 改革する"] },
          { word: "electoral", phonetic: "iléktərəl", pos: "形", meanings: ["選挙の"], related: ["election 名 選挙", "elect 動 選出する"] }
        ]
      },
      {
        id: 433,
        en: "The diplomat negotiated a ceasefire agreement between the two hostile nations.",
        ja: "外交官は敵対する二国間の停戦合意を交渉した。",
        words: [
          { word: "diplomat", phonetic: "dípləmæ̀t", pos: "名", meanings: ["外交官"], related: ["diplomacy 名 外交"] },
          { word: "negotiate", phonetic: "nigóuʃièit", pos: "動", meanings: ["交渉する"], related: ["negotiation 名 交渉"] },
          { word: "ceasefire", phonetic: "síːsfàiər", pos: "名", meanings: ["停戦"], related: ["truce 名 休戦"] },
          { word: "hostile", phonetic: "hɑ́stl", pos: "形", meanings: ["敵意のある、敵対する"], related: ["hostility 名 敵意"] }
        ]
      },
      {
        id: 434,
        en: "The prime minister addressed the nation in an emergency broadcast regarding the crisis.",
        ja: "首相は危機に関する緊急放送で国民に向けて演説した。",
        words: [
          { word: "prime minister", phonetic: "pràim mínistər", pos: "名", meanings: ["首相、総理大臣"], related: ["minister 名 大臣"] },
          { word: "address", phonetic: "ədrés", pos: "動", meanings: ["演説する、取り組む"], related: ["address 名 住所、演説"] },
          { word: "emergency", phonetic: "imə́ːrdʒənsi", pos: "名", meanings: ["緊急事態"], related: ["emerge 動 現れる"] },
          { word: "crisis", phonetic: "kráisis", pos: "名", meanings: ["危機"], related: ["複数形 crises"] }
        ]
      },
      {
        id: 435,
        en: "The committee approved a budget of three billion dollars for infrastructure development.",
        ja: "委員会はインフラ整備のために30億ドルの予算を承認した。",
        words: [
          { word: "committee", phonetic: "kəmíti", pos: "名", meanings: ["委員会"], related: ["commission 名 委員会"] },
          { word: "approve", phonetic: "əprúːv", pos: "動", meanings: ["承認する、賛成する"], related: ["approval 名 承認"] },
          { word: "budget", phonetic: "bʌ́dʒit", pos: "名", meanings: ["予算"], related: [] },
          { word: "infrastructure", phonetic: "ínfrəstrʌ̀ktʃər", pos: "名", meanings: ["インフラ、社会基盤"], related: [] }
        ]
      },
      {
        id: 436,
        en: "The senator proposed an amendment to the existing immigration policy.",
        ja: "上院議員は現行の移民政策に対する修正案を提案した。",
        words: [
          { word: "senator", phonetic: "sénətər", pos: "名", meanings: ["上院議員"], related: ["senate 名 上院"] },
          { word: "propose", phonetic: "prəpóuz", pos: "動", meanings: ["提案する"], related: ["proposal 名 提案"] },
          { word: "amendment", phonetic: "əméndmənt", pos: "名", meanings: ["修正（案）、改正"], related: ["amend 動 修正する"] },
          { word: "immigration", phonetic: "ìməgréiʃən", pos: "名", meanings: ["移民、入国管理"], related: ["immigrant 名 移民"] },
          { word: "policy", phonetic: "pɑ́ləsi", pos: "名", meanings: ["政策、方針"], related: ["foreign policy 外交政策"] }
        ]
      },
      {
        id: 437,
        en: "The regime suppressed freedom of speech and imposed strict censorship on the media.",
        ja: "その政権は言論の自由を抑圧し、メディアに厳しい検閲を課した。",
        words: [
          { word: "regime", phonetic: "reʒíːm", pos: "名", meanings: ["政権、体制"], related: ["administration 名 政権"] },
          { word: "suppress", phonetic: "səprés", pos: "動", meanings: ["抑圧する、鎮圧する"], related: ["suppression 名 抑圧"] },
          { word: "freedom", phonetic: "fríːdəm", pos: "名", meanings: ["自由"], related: ["free 形 自由な"] },
          { word: "censorship", phonetic: "sénsərʃìp", pos: "名", meanings: ["検閲"], related: ["censor 動 検閲する"] }
        ]
      },
      {
        id: 438,
        en: "A referendum was held to determine whether the territory should become independent.",
        ja: "その領土が独立すべきかどうかを決定するために国民投票が行われた。",
        words: [
          { word: "referendum", phonetic: "rèfəréndəm", pos: "名", meanings: ["国民投票"], related: [] },
          { word: "determine", phonetic: "ditə́ːrmin", pos: "動", meanings: ["決定する、決心する"], related: ["determination 名 決意"] },
          { word: "territory", phonetic: "térətɔ̀ːri", pos: "名", meanings: ["領土、領域"], related: ["territorial 形 領土の"] },
          { word: "independent", phonetic: "ìndipéndənt", pos: "形", meanings: ["独立した"], related: ["independence 名 独立"] }
        ]
      },
      {
        id: 439,
        en: "The bureaucracy was widely criticized for its inefficiency and excessive red tape.",
        ja: "官僚制度はその非効率さと過度な形式主義で広く批判された。",
        words: [
          { word: "bureaucracy", phonetic: "bjuərɑ́krəsi", pos: "名", meanings: ["官僚制度、お役所仕事"], related: ["bureaucrat 名 官僚"] },
          { word: "criticize", phonetic: "krítəsàiz", pos: "動", meanings: ["批判する"], related: ["criticism 名 批判", "critical 形 批判的な"] },
          { word: "inefficiency", phonetic: "ìnifíʃənsi", pos: "名", meanings: ["非効率"], related: ["⇔ efficiency 効率"] },
          { word: "excessive", phonetic: "iksésiv", pos: "形", meanings: ["過度の、度を越した"], related: ["excess 名 超過"] },
          { word: "red tape", phonetic: "réd téip", pos: "名", meanings: ["煩雑な形式的手続き"], related: [] }
        ]
      },
      {
        id: 440,
        en: "The coalition government collapsed due to irreconcilable differences among its members.",
        ja: "連立政権はメンバー間の和解不能な意見の相違により崩壊した。",
        words: [
          { word: "coalition", phonetic: "kòuəlíʃən", pos: "名", meanings: ["連立、連合"], related: ["coalition government 連立政権"] },
          { word: "collapse", phonetic: "kəlǽps", pos: "動", meanings: ["崩壊する、倒れる"], related: ["collapse 名 崩壊"] },
          { word: "irreconcilable", phonetic: "irèkənsáiləbl", pos: "形", meanings: ["和解できない、相容れない"], related: ["reconcile 動 和解させる"] }
        ]
      }
    ]
  },
  {
    section: 41,
    title: "Economy & Business",
    sentences: [
      {
        id: 441,
        en: "The recession forced many companies to lay off a significant portion of their workforce.",
        ja: "不況により多くの企業が従業員のかなりの部分を解雇せざるを得なくなった。",
        words: [
          { word: "recession", phonetic: "riséʃən", pos: "名", meanings: ["不況、景気後退"], related: ["⇔ boom 好況", "depression 大不況"] },
          { word: "lay off", phonetic: "léi ɔ́ːf", pos: "動", meanings: ["一時解雇する"], related: ["layoff 名 一時解雇"] },
          { word: "significant", phonetic: "signífəkənt", pos: "形", meanings: ["かなりの、重要な"], related: ["significance 名 重要性", "significantly 副 著しく"] },
          { word: "workforce", phonetic: "wə́ːrkfɔ̀ːrs", pos: "名", meanings: ["労働力、全従業員"], related: ["labor force 労働力"] }
        ]
      },
      {
        id: 442,
        en: "The startup secured substantial venture capital to fund its rapid expansion.",
        ja: "そのスタートアップは急速な拡大の資金として多額のベンチャーキャピタルを確保した。",
        words: [
          { word: "startup", phonetic: "stɑ́ːrtʌ̀p", pos: "名", meanings: ["新興企業、スタートアップ"], related: [] },
          { word: "secure", phonetic: "sikjúər", pos: "動", meanings: ["確保する、安全にする"], related: ["security 名 安全、証券"] },
          { word: "substantial", phonetic: "səbstǽnʃəl", pos: "形", meanings: ["かなりの、実質的な"], related: ["substance 名 物質、実体"] },
          { word: "fund", phonetic: "fʌ́nd", pos: "動", meanings: ["資金を提供する"], related: ["fund 名 資金、基金", "funding 名 資金提供"] },
          { word: "expansion", phonetic: "ikspǽnʃən", pos: "名", meanings: ["拡大、拡張"], related: ["expand 動 拡大する"] }
        ]
      },
      {
        id: 443,
        en: "Consumer spending accounts for roughly two-thirds of the nation's gross domestic product.",
        ja: "個人消費は国内総生産のおよそ3分の2を占めている。",
        words: [
          { word: "consumer", phonetic: "kənsúːmər", pos: "名", meanings: ["消費者"], related: ["consume 動 消費する", "consumption 名 消費"] },
          { word: "account for", phonetic: "əkáunt fɔːr", pos: "動", meanings: ["（割合を）占める、説明する"], related: [] },
          { word: "roughly", phonetic: "rʌ́fli", pos: "副", meanings: ["およそ、大まかに"], related: ["rough 形 大まかな、荒い"] },
          { word: "gross", phonetic: "gróus", pos: "形", meanings: ["総計の、粗野な"], related: ["gross domestic product (GDP) 国内総生産"] }
        ]
      },
      {
        id: 444,
        en: "The merger between the two corporations was approved despite concerns about a monopoly.",
        ja: "独占への懸念にもかかわらず、2社の合併は承認された。",
        words: [
          { word: "merger", phonetic: "mə́ːrdʒər", pos: "名", meanings: ["合併"], related: ["merge 動 合併する"] },
          { word: "corporation", phonetic: "kɔ̀ːrpəréiʃən", pos: "名", meanings: ["企業、法人"], related: ["corporate 形 企業の"] },
          { word: "despite", phonetic: "dispáit", pos: "前", meanings: ["にもかかわらず"], related: ["in spite of..."] },
          { word: "concern", phonetic: "kənsə́ːrn", pos: "名", meanings: ["懸念、関心"], related: ["concern 動 心配させる", "concerned 形 心配している"] },
          { word: "monopoly", phonetic: "mənɑ́pəli", pos: "名", meanings: ["独占"], related: ["monopolize 動 独占する"] }
        ]
      },
      {
        id: 445,
        en: "Inflation has eroded the purchasing power of middle-class households over the past decade.",
        ja: "インフレが過去10年間にわたって中流家庭の購買力を蝕んできた。",
        words: [
          { word: "inflation", phonetic: "infléiʃən", pos: "名", meanings: ["インフレ、物価上昇"], related: ["⇔ deflation デフレ", "inflate 動 膨らませる"] },
          { word: "erode", phonetic: "iróud", pos: "動", meanings: ["浸食する、徐々にむしばむ"], related: ["erosion 名 浸食"] },
          { word: "purchasing power", phonetic: "pə́ːrtʃəsiŋ páuər", pos: "名", meanings: ["購買力"], related: ["purchase 動 購入する"] },
          { word: "household", phonetic: "háushòuld", pos: "名", meanings: ["世帯、家庭"], related: [] },
          { word: "decade", phonetic: "dékeid", pos: "名", meanings: ["10年間"], related: [] }
        ]
      },
      {
        id: 446,
        en: "The entrepreneur launched an innovative platform that disrupted the traditional retail industry.",
        ja: "その起業家は従来の小売業界を一変させる革新的なプラットフォームを立ち上げた。",
        words: [
          { word: "entrepreneur", phonetic: "ɑ̀ːntrəprənə́ːr", pos: "名", meanings: ["起業家"], related: ["entrepreneurship 名 起業家精神"] },
          { word: "innovative", phonetic: "ínəvèitiv", pos: "形", meanings: ["革新的な"], related: ["innovation 名 革新", "innovate 動 革新する"] },
          { word: "disrupt", phonetic: "disrʌ́pt", pos: "動", meanings: ["混乱させる、覆す"], related: ["disruption 名 混乱、破壊的変革"] },
          { word: "retail", phonetic: "ríːteil", pos: "名", meanings: ["小売"], related: ["⇔ wholesale 卸売り", "retailer 名 小売業者"] }
        ]
      },
      {
        id: 447,
        en: "The stock market plunged after the central bank raised interest rates unexpectedly.",
        ja: "中央銀行が予想外に金利を引き上げた後、株式市場は急落した。",
        words: [
          { word: "stock market", phonetic: "stɑ́k mɑ́ːrkit", pos: "名", meanings: ["株式市場"], related: ["stock 名 株式"] },
          { word: "plunge", phonetic: "plʌ́ndʒ", pos: "動", meanings: ["急落する、飛び込む"], related: ["plunge 名 急落"] },
          { word: "central bank", phonetic: "séntrəl bǽŋk", pos: "名", meanings: ["中央銀行"], related: [] },
          { word: "interest rate", phonetic: "íntrəst réit", pos: "名", meanings: ["金利"], related: ["interest 名 利子、関心"] }
        ]
      },
      {
        id: 448,
        en: "The trade deficit widened as imports continued to outpace exports throughout the fiscal year.",
        ja: "会計年度を通じて輸入が輸出を上回り続けたため、貿易赤字が拡大した。",
        words: [
          { word: "deficit", phonetic: "défəsit", pos: "名", meanings: ["赤字、不足"], related: ["⇔ surplus 黒字、余剰"] },
          { word: "import", phonetic: "impɔ́ːrt", pos: "名", meanings: ["輸入（品）"], related: ["import 動 輸入する"] },
          { word: "outpace", phonetic: "àutpéis", pos: "動", meanings: ["上回る、凌駕する"], related: ["surpass/exceed"] },
          { word: "export", phonetic: "ékspɔːrt", pos: "名", meanings: ["輸出（品）"], related: ["export 動 輸出する"] },
          { word: "fiscal", phonetic: "fískəl", pos: "形", meanings: ["財政の、会計の"], related: ["fiscal year 会計年度"] }
        ]
      },
      {
        id: 449,
        en: "The company's revenue exceeded expectations, leading to a surge in its share price.",
        ja: "その会社の収益は予想を上回り、株価の急上昇につながった。",
        words: [
          { word: "revenue", phonetic: "révənjùː", pos: "名", meanings: ["収益、歳入"], related: ["income/earnings"] },
          { word: "exceed", phonetic: "iksíːd", pos: "動", meanings: ["超える、上回る"], related: ["excess 名 超過"] },
          { word: "expectation", phonetic: "èkspektéiʃən", pos: "名", meanings: ["予想、期待"], related: ["expect 動 予想する"] },
          { word: "surge", phonetic: "sə́ːrdʒ", pos: "名", meanings: ["急上昇、急増"], related: ["surge 動 急増する"] },
          { word: "share", phonetic: "ʃéər", pos: "名", meanings: ["株、分け前"], related: ["shareholder 名 株主"] }
        ]
      },
      {
        id: 450,
        en: "The subsidy program was designed to stimulate economic growth in underdeveloped regions.",
        ja: "その補助金制度は未開発地域の経済成長を刺激するために設計された。",
        words: [
          { word: "subsidy", phonetic: "sʌ́bsədi", pos: "名", meanings: ["補助金"], related: ["subsidize 動 補助金を出す"] },
          { word: "stimulate", phonetic: "stímjəlèit", pos: "動", meanings: ["刺激する、促進する"], related: ["stimulus 名 刺激", "stimulation 名 刺激"] },
          { word: "economic", phonetic: "ìːkənɑ́mik", pos: "形", meanings: ["経済の"], related: ["economy 名 経済", "economics 名 経済学"] },
          { word: "underdeveloped", phonetic: "ʌ̀ndərdivéləpt", pos: "形", meanings: ["未開発の、発展途上の"], related: ["developing 形 発展途上の"] }
        ]
      }
    ]
  },
  {
    section: 42,
    title: "Science & Technology",
    sentences: [
      {
        id: 451,
        en: "The researcher formulated a hypothesis and designed an experiment to test it under controlled conditions.",
        ja: "研究者は仮説を立て、管理された条件下でそれを検証する実験を計画した。",
        words: [
          { word: "formulate", phonetic: "fɔ́ːrmjəlèit", pos: "動", meanings: ["（計画・考えを）練る、定式化する"], related: ["formula 名 公式、処方", "formulation 名 策定"] },
          { word: "hypothesis", phonetic: "haipɑ́θəsis", pos: "名", meanings: ["仮説"], related: ["hypothetical 形 仮説の", "複数形 hypotheses"] },
          { word: "experiment", phonetic: "ikspérəmənt", pos: "名", meanings: ["実験"], related: ["experiment 動 実験する", "experimental 形 実験的な"] },
          { word: "controlled", phonetic: "kəntrɔ́ːld", pos: "形", meanings: ["管理された、制御された"], related: ["control 名/動 管理、制御する"] }
        ]
      },
      {
        id: 452,
        en: "Scientists have observed a peculiar phenomenon that contradicts the conventional theory of particle behavior.",
        ja: "科学者たちは粒子の挙動に関する従来の理論と矛盾する奇妙な現象を観察した。",
        words: [
          { word: "observe", phonetic: "əbzə́ːrv", pos: "動", meanings: ["観察する、気づく"], related: ["observation 名 観察", "observer 名 観察者"] },
          { word: "peculiar", phonetic: "pikjúːljər", pos: "形", meanings: ["奇妙な、独特の"], related: ["peculiarity 名 特異性", "odd/strange"] },
          { word: "phenomenon", phonetic: "fənɑ́mənɑ̀n", pos: "名", meanings: ["現象"], related: ["複数形 phenomena", "phenomenal 形 驚異的な"] },
          { word: "contradict", phonetic: "kɑ̀ntrədíkt", pos: "動", meanings: ["矛盾する、反論する"], related: ["contradiction 名 矛盾", "contradictory 形 矛盾した"] },
          { word: "particle", phonetic: "pɑ́ːrtikl", pos: "名", meanings: ["粒子、微粒子"], related: ["subatomic particle 素粒子"] }
        ]
      },
      {
        id: 453,
        en: "The telescope detected a distant galaxy, enabling astronomers to analyze its chemical composition.",
        ja: "望遠鏡が遠方の銀河を検出し、天文学者たちはその化学組成を分析できるようになった。",
        words: [
          { word: "telescope", phonetic: "téləskòup", pos: "名", meanings: ["望遠鏡"], related: ["microscope 名 顕微鏡"] },
          { word: "detect", phonetic: "ditékt", pos: "動", meanings: ["検出する、見つける"], related: ["detection 名 検出", "detector 名 検出器"] },
          { word: "galaxy", phonetic: "gǽləksi", pos: "名", meanings: ["銀河"], related: ["the Milky Way 天の川"] },
          { word: "analyze", phonetic: "ǽnəlàiz", pos: "動", meanings: ["分析する"], related: ["analysis 名 分析", "analyst 名 分析家", "analytical 形 分析的な"] },
          { word: "composition", phonetic: "kɑ̀mpəzíʃən", pos: "名", meanings: ["構成、組成、作文"], related: ["compose 動 構成する", "component 名 成分"] }
        ]
      },
      {
        id: 454,
        en: "Genetic engineering has the potential to eliminate hereditary diseases, but it raises profound ethical concerns.",
        ja: "遺伝子工学には遺伝性疾患を根絶する可能性があるが、深刻な倫理的懸念を提起する。",
        words: [
          { word: "genetic", phonetic: "dʒənétik", pos: "形", meanings: ["遺伝子の、遺伝的な"], related: ["gene 名 遺伝子", "genetics 名 遺伝学"] },
          { word: "potential", phonetic: "pəténʃəl", pos: "名", meanings: ["可能性、潜在能力"], related: ["potential 形 潜在的な", "potentially 副 潜在的に"] },
          { word: "eliminate", phonetic: "ilímənèit", pos: "動", meanings: ["除去する、根絶する"], related: ["elimination 名 除去"] },
          { word: "hereditary", phonetic: "hərédətèri", pos: "形", meanings: ["遺伝性の、世襲の"], related: ["inherit 動 受け継ぐ", "heritage 名 遺産"] },
          { word: "profound", phonetic: "prəfáund", pos: "形", meanings: ["深い、深遠な、重大な"], related: ["profoundly 副 深く"] },
          { word: "ethical", phonetic: "éθikəl", pos: "形", meanings: ["倫理的な、道徳上の"], related: ["ethics 名 倫理学", "⇔ unethical 非倫理的な"] }
        ]
      },
      {
        id: 455,
        en: "The artificial intelligence algorithm can process vast amounts of data simultaneously and identify subtle patterns.",
        ja: "その人工知能アルゴリズムは膨大なデータを同時に処理し、微妙なパターンを特定できる。",
        words: [
          { word: "artificial", phonetic: "ɑ̀ːrtəfíʃəl", pos: "形", meanings: ["人工的な、人造の"], related: ["⇔ natural 自然の", "artifact 名 人工物"] },
          { word: "algorithm", phonetic: "ǽlgərìðm", pos: "名", meanings: ["アルゴリズム、算法"], related: [] },
          { word: "vast", phonetic: "vǽst", pos: "形", meanings: ["膨大な、広大な"], related: ["vastly 副 大いに", "enormous/immense"] },
          { word: "simultaneously", phonetic: "sàiməltéiniəsli", pos: "副", meanings: ["同時に"], related: ["simultaneous 形 同時の", "at the same time"] },
          { word: "subtle", phonetic: "sʌ́tl", pos: "形", meanings: ["微妙な、巧妙な"], related: ["subtlety 名 微妙さ", "subtly 副 微妙に"] }
        ]
      },
      {
        id: 456,
        en: "The vaccine underwent rigorous clinical trials before it was deemed safe for widespread distribution.",
        ja: "そのワクチンは広範な配布に安全と見なされる前に、厳格な臨床試験を受けた。",
        words: [
          { word: "vaccine", phonetic: "højksiːn", pos: "名", meanings: ["ワクチン"], related: ["vaccinate 動 ワクチン接種する", "vaccination 名 予防接種"] },
          { word: "undergo", phonetic: "ʌ̀ndərgóu", pos: "動", meanings: ["（検査・手術などを）受ける、経験する"], related: ["underwent - undergone"] },
          { word: "rigorous", phonetic: "rígərəs", pos: "形", meanings: ["厳格な、徹底的な"], related: ["rigor 名 厳格さ"] },
          { word: "clinical", phonetic: "klínikəl", pos: "形", meanings: ["臨床の"], related: ["clinic 名 診療所"] },
          { word: "deem", phonetic: "díːm", pos: "動", meanings: ["見なす、考える"], related: ["consider/regard"] },
          { word: "widespread", phonetic: "wáidspréd", pos: "形", meanings: ["広範囲の、広く行き渡った"], related: ["prevalent/extensive"] }
        ]
      },
      {
        id: 457,
        en: "Renewable energy sources, such as solar and wind power, have become increasingly viable alternatives to fossil fuels.",
        ja: "太陽光や風力などの再生可能エネルギー源は、化石燃料に代わる実行可能な選択肢としてますます有力になっている。",
        words: [
          { word: "renewable", phonetic: "rinjúːəbl", pos: "形", meanings: ["再生可能な、更新できる"], related: ["renew 動 更新する", "⇔ non-renewable"] },
          { word: "solar", phonetic: "sóulər", pos: "形", meanings: ["太陽の、太陽光の"], related: ["solar system 太陽系", "solar panel 太陽光パネル"] },
          { word: "viable", phonetic: "váiəbl", pos: "形", meanings: ["実行可能な、存続できる"], related: ["viability 名 実行可能性", "feasible"] },
          { word: "alternative", phonetic: "ɔːltə́ːrnətiv", pos: "名", meanings: ["代替手段、選択肢"], related: ["alternative 形 代替の", "alternatively 副 あるいは"] },
          { word: "fossil fuel", phonetic: "fɑ́sl fjúːəl", pos: "名", meanings: ["化石燃料"], related: ["fossil 名 化石", "fuel 名 燃料"] }
        ]
      },
      {
        id: 458,
        en: "The satellite orbits the Earth every ninety minutes, transmitting crucial data to the ground station.",
        ja: "その衛星は90分ごとに地球を周回し、地上局に重要なデータを送信している。",
        words: [
          { word: "satellite", phonetic: "sǽtəlàit", pos: "名", meanings: ["衛星、人工衛星"], related: [] },
          { word: "orbit", phonetic: "ɔ́ːrbit", pos: "動", meanings: ["軌道を回る"], related: ["orbit 名 軌道", "orbital 形 軌道の"] },
          { word: "transmit", phonetic: "trænsmít", pos: "動", meanings: ["送信する、伝える"], related: ["transmission 名 送信、伝達", "transmitter 名 送信機"] },
          { word: "crucial", phonetic: "krúːʃəl", pos: "形", meanings: ["極めて重要な、決定的な"], related: ["critical/vital/essential"] }
        ]
      },
      {
        id: 459,
        en: "The biologist classified the newly discovered organism as a distinct species based on its unique molecular structure.",
        ja: "生物学者はその独特な分子構造に基づき、新たに発見された生物を別個の種として分類した。",
        words: [
          { word: "classify", phonetic: "klǽsəfài", pos: "動", meanings: ["分類する"], related: ["classification 名 分類", "class 名 種類"] },
          { word: "organism", phonetic: "ɔ́ːrgənìzm", pos: "名", meanings: ["生物、有機体"], related: ["organic 形 有機の", "organ 名 臓器"] },
          { word: "distinct", phonetic: "distíŋkt", pos: "形", meanings: ["別個の、はっきりした"], related: ["distinction 名 区別", "distinctive 形 独特の"] },
          { word: "species", phonetic: "spíːʃiːz", pos: "名", meanings: ["種（生物分類の）"], related: ["単複同形", "genus 名 属"] },
          { word: "molecular", phonetic: "məlékjələr", pos: "形", meanings: ["分子の"], related: ["molecule 名 分子", "atom 名 原子"] }
        ]
      },
      {
        id: 460,
        en: "The prototype demonstrated remarkable efficiency, converting over forty percent of the input energy into usable output.",
        ja: "そのプロトタイプは驚くべき効率を示し、投入エネルギーの40%以上を利用可能な出力に変換した。",
        words: [
          { word: "prototype", phonetic: "próutətàip", pos: "名", meanings: ["試作品、プロトタイプ"], related: ["model/original"] },
          { word: "demonstrate", phonetic: "démənstrèit", pos: "動", meanings: ["実証する、示す"], related: ["demonstration 名 実演、デモ"] },
          { word: "remarkable", phonetic: "rimɑ́ːrkəbl", pos: "形", meanings: ["注目すべき、驚くべき"], related: ["remarkably 副 著しく", "remark 名/動 発言する"] },
          { word: "efficiency", phonetic: "ifíʃənsi", pos: "名", meanings: ["効率"], related: ["efficient 形 効率的な", "⇔ inefficient 非効率な"] },
          { word: "convert", phonetic: "kənvə́ːrt", pos: "動", meanings: ["変換する、転換する"], related: ["conversion 名 変換", "convertible 形 変換可能な"] }
        ]
      }
    ]
  },
  {
    section: 43,
    title: "Nature & Environment",
    sentences: [
      {
        id: 461,
        en: "Deforestation in the tropics has accelerated the extinction of countless species over the past few decades.",
        ja: "熱帯地域の森林破壊がここ数十年で無数の種の絶滅を加速させてきた。",
        words: [
          { word: "deforestation", phonetic: "dìːfɔ̀ːristéiʃən", pos: "名", meanings: ["森林破壊、森林伐採"], related: ["forest 名 森林", "⇔ reforestation 植林"] },
          { word: "tropics", phonetic: "trɑ́piks", pos: "名", meanings: ["熱帯地方"], related: ["tropical 形 熱帯の"] },
          { word: "accelerate", phonetic: "ækséləréit", pos: "動", meanings: ["加速する、促進する"], related: ["acceleration 名 加速"] },
          { word: "extinction", phonetic: "ikstiŋkʃən", pos: "名", meanings: ["絶滅、消滅"], related: ["extinct 形 絶滅した", "go extinct 絶滅する"] },
          { word: "countless", phonetic: "káuntləs", pos: "形", meanings: ["無数の、数えきれない"], related: ["innumerable/numerous"] }
        ]
      },
      {
        id: 462,
        en: "The drought devastated the region's crops, leaving thousands of inhabitants vulnerable to famine.",
        ja: "干ばつがその地域の農作物を壊滅させ、何千人もの住民が飢饉にさらされた。",
        words: [
          { word: "drought", phonetic: "dráut", pos: "名", meanings: ["干ばつ"], related: ["⇔ flood 洪水"] },
          { word: "devastate", phonetic: "dévəstèit", pos: "動", meanings: ["壊滅させる、荒廃させる"], related: ["devastation 名 壊滅", "devastating 形 壊滅的な"] },
          { word: "crop", phonetic: "krɑ́p", pos: "名", meanings: ["農作物、収穫"], related: ["harvest 名/動 収穫"] },
          { word: "inhabitant", phonetic: "inhǽbitənt", pos: "名", meanings: ["住民、居住者"], related: ["inhabit 動 住む", "habitat 名 生息地"] },
          { word: "vulnerable", phonetic: "vʌ́lnərəbl", pos: "形", meanings: ["傷つきやすい、脆弱な"], related: ["vulnerability 名 脆弱性", "⇔ immune 免疫のある"] },
          { word: "famine", phonetic: "fǽmin", pos: "名", meanings: ["飢饉"], related: ["starvation 名 飢餓", "hunger 名 空腹"] }
        ]
      },
      {
        id: 463,
        en: "The volcanic eruption scattered ash across the entire continent, disrupting air traffic for weeks.",
        ja: "火山の噴火が大陸全体に灰をまき散らし、航空交通を数週間にわたって混乱させた。",
        words: [
          { word: "volcanic", phonetic: "vɑlkǽnik", pos: "形", meanings: ["火山の"], related: ["volcano 名 火山"] },
          { word: "eruption", phonetic: "irʌ́pʃən", pos: "名", meanings: ["噴火、爆発"], related: ["erupt 動 噴火する、勃発する"] },
          { word: "scatter", phonetic: "skǽtər", pos: "動", meanings: ["まき散らす、散乱させる"], related: ["scattered 形 散在した"] },
          { word: "ash", phonetic: "ǽʃ", pos: "名", meanings: ["灰"], related: [] },
          { word: "continent", phonetic: "kɑ́ntənənt", pos: "名", meanings: ["大陸"], related: ["continental 形 大陸の"] }
        ]
      },
      {
        id: 464,
        en: "Marine biologists have warned that coral reefs are deteriorating at an alarming rate due to rising sea temperatures.",
        ja: "海洋生物学者たちは海水温の上昇によりサンゴ礁が驚くべき速度で劣化していると警告した。",
        words: [
          { word: "marine", phonetic: "məríːn", pos: "形", meanings: ["海の、海洋の"], related: ["maritime 形 海事の"] },
          { word: "coral reef", phonetic: "kɔ́ːrəl ríːf", pos: "名", meanings: ["サンゴ礁"], related: ["coral 名 サンゴ", "reef 名 岩礁"] },
          { word: "deteriorate", phonetic: "ditíəriərèit", pos: "動", meanings: ["悪化する、劣化する"], related: ["deterioration 名 悪化"] },
          { word: "alarming", phonetic: "əlɑ́ːrmiŋ", pos: "形", meanings: ["驚くべき、憂慮すべき"], related: ["alarm 名/動 警報、驚かせる"] }
        ]
      },
      {
        id: 465,
        en: "The glacier has been retreating steadily, and researchers predict it will vanish entirely within a century.",
        ja: "氷河は着実に後退しており、研究者たちは1世紀以内に完全に消滅すると予測している。",
        words: [
          { word: "glacier", phonetic: "gléiʃər", pos: "名", meanings: ["氷河"], related: ["glacial 形 氷河の、極寒の"] },
          { word: "retreat", phonetic: "ritríːt", pos: "動", meanings: ["後退する、退却する"], related: ["retreat 名 後退、隠れ家"] },
          { word: "steadily", phonetic: "stédəli", pos: "副", meanings: ["着実に、安定して"], related: ["steady 形 安定した、着実な"] },
          { word: "predict", phonetic: "pridíkt", pos: "動", meanings: ["予測する、予言する"], related: ["prediction 名 予測", "predictable 形 予測可能な"] },
          { word: "vanish", phonetic: "vǽniʃ", pos: "動", meanings: ["消える、姿を消す"], related: ["disappear/fade away"] }
        ]
      },
      {
        id: 466,
        en: "Toxic waste dumped into the river contaminated the soil downstream, posing a serious threat to wildlife.",
        ja: "川に投棄された有害廃棄物が下流の土壌を汚染し、野生動物に深刻な脅威をもたらした。",
        words: [
          { word: "toxic", phonetic: "tɑ́ksik", pos: "形", meanings: ["有毒な"], related: ["toxin 名 毒素", "⇔ nontoxic 無毒の"] },
          { word: "dump", phonetic: "dʌ́mp", pos: "動", meanings: ["投棄する、捨てる"], related: ["dump 名 ゴミ捨て場"] },
          { word: "contaminate", phonetic: "kəntǽmənèit", pos: "動", meanings: ["汚染する"], related: ["contamination 名 汚染", "pollute 動 汚染する"] },
          { word: "soil", phonetic: "sɔ́il", pos: "名", meanings: ["土壌、土"], related: ["soil 動 汚す"] },
          { word: "pose", phonetic: "póuz", pos: "動", meanings: ["（問題・脅威を）もたらす、提起する"], related: ["pose 名 ポーズ"] },
          { word: "wildlife", phonetic: "wáildlàif", pos: "名", meanings: ["野生動物"], related: ["wild 形 野生の"] }
        ]
      },
      {
        id: 467,
        en: "The earthquake triggered a massive landslide that buried an entire village beneath tons of debris.",
        ja: "地震が大規模な地滑りを引き起こし、村全体が何トンもの瓦礫の下に埋まった。",
        words: [
          { word: "earthquake", phonetic: "ə́ːrθkwèik", pos: "名", meanings: ["地震"], related: ["tremor 名 微震", "seismic 形 地震の"] },
          { word: "trigger", phonetic: "trígər", pos: "動", meanings: ["引き起こす、誘発する"], related: ["trigger 名 引き金、きっかけ"] },
          { word: "massive", phonetic: "mǽsiv", pos: "形", meanings: ["大規模な、巨大な"], related: ["mass 名 大量、質量"] },
          { word: "landslide", phonetic: "lǽndslàid", pos: "名", meanings: ["地滑り、土砂崩れ"], related: ["landslide victory 圧勝"] },
          { word: "bury", phonetic: "béri", pos: "動", meanings: ["埋める、埋葬する"], related: ["burial 名 埋葬"] },
          { word: "debris", phonetic: "dəbríː", pos: "名", meanings: ["瓦礫、残骸"], related: ["rubble/wreckage"] }
        ]
      },
      {
        id: 468,
        en: "Conservationists are striving to preserve the remaining wetlands, which serve as a crucial habitat for migratory birds.",
        ja: "保護活動家たちは渡り鳥の重要な生息地である残された湿地の保全に努めている。",
        words: [
          { word: "conservationist", phonetic: "kɑ̀nsərvéiʃənist", pos: "名", meanings: ["自然保護活動家"], related: ["conservation 名 保護、保全", "conserve 動 保全する"] },
          { word: "strive", phonetic: "stráiv", pos: "動", meanings: ["努力する、奮闘する"], related: ["strove/strived - striven/strived"] },
          { word: "preserve", phonetic: "prizə́ːrv", pos: "動", meanings: ["保護する、保存する"], related: ["preservation 名 保存", "preserve 名 保護区"] },
          { word: "wetland", phonetic: "wétlæ̀nd", pos: "名", meanings: ["湿地"], related: ["marsh/swamp 沼地"] },
          { word: "habitat", phonetic: "hǽbitæ̀t", pos: "名", meanings: ["生息地、生息環境"], related: ["inhabit 動 住む"] },
          { word: "migratory", phonetic: "máigrətɔ̀ːri", pos: "形", meanings: ["渡りの、移動性の"], related: ["migrate 動 移住する", "migration 名 移住、渡り"] }
        ]
      },
      {
        id: 469,
        en: "The ozone layer shields the Earth from harmful ultraviolet radiation emitted by the sun.",
        ja: "オゾン層は太陽から放出される有害な紫外線から地球を守っている。",
        words: [
          { word: "ozone", phonetic: "óuzoun", pos: "名", meanings: ["オゾン"], related: ["ozone layer オゾン層"] },
          { word: "shield", phonetic: "ʃíːld", pos: "動", meanings: ["保護する、守る"], related: ["shield 名 盾、防護"] },
          { word: "harmful", phonetic: "hɑ́ːrmfəl", pos: "形", meanings: ["有害な"], related: ["harm 名/動 害", "⇔ harmless 無害な"] },
          { word: "ultraviolet", phonetic: "ʌ̀ltrəváiələt", pos: "形", meanings: ["紫外線の"], related: ["UV 紫外線", "⇔ infrared 赤外線の"] },
          { word: "radiation", phonetic: "rèidiéiʃən", pos: "名", meanings: ["放射線、放射"], related: ["radiate 動 放射する", "radioactive 形 放射性の"] },
          { word: "emit", phonetic: "imít", pos: "動", meanings: ["放出する、放射する"], related: ["emission 名 排出、放出"] }
        ]
      },
      {
        id: 470,
        en: "Sustainable agriculture aims to nourish the growing population without depleting natural resources.",
        ja: "持続可能な農業は天然資源を枯渇させることなく増加する人口を養うことを目指している。",
        words: [
          { word: "sustainable", phonetic: "səstéinəbl", pos: "形", meanings: ["持続可能な"], related: ["sustain 動 持続させる", "sustainability 名 持続可能性"] },
          { word: "agriculture", phonetic: "ǽgrikʌ̀ltʃər", pos: "名", meanings: ["農業"], related: ["agricultural 形 農業の"] },
          { word: "nourish", phonetic: "nə́ːriʃ", pos: "動", meanings: ["養う、栄養を与える"], related: ["nourishment 名 栄養", "nutrition 名 栄養"] },
          { word: "deplete", phonetic: "diplíːt", pos: "動", meanings: ["枯渇させる、使い果たす"], related: ["depletion 名 枯渇", "exhaust 動 使い果たす"] },
          { word: "resource", phonetic: "ríːsɔːrs", pos: "名", meanings: ["資源"], related: ["natural resources 天然資源", "resourceful 形 機知に富んだ"] }
        ]
      }
    ]
  },
  {
    section: 44,
    title: "Communication & Media",
    sentences: [
      {
        id: 471,
        en: "The journalist conducted an exclusive interview with the ambassador, revealing previously undisclosed diplomatic tensions.",
        ja: "そのジャーナリストは大使との独占インタビューを行い、これまで非公開だった外交的緊張を明らかにした。",
        words: [
          { word: "journalist", phonetic: "dʒə́ːrnəlist", pos: "名", meanings: ["ジャーナリスト、記者"], related: ["journalism 名 ジャーナリズム"] },
          { word: "conduct", phonetic: "kəndʌ́kt", pos: "動", meanings: ["行う、実施する"], related: ["conduct 名 行為、品行"] },
          { word: "exclusive", phonetic: "iksklúːsiv", pos: "形", meanings: ["独占的な、排他的な"], related: ["exclude 動 除外する", "exclusively 副 もっぱら"] },
          { word: "ambassador", phonetic: "æmbǽsədər", pos: "名", meanings: ["大使"], related: ["embassy 名 大使館"] },
          { word: "reveal", phonetic: "rivíːl", pos: "動", meanings: ["明らかにする、暴露する"], related: ["revelation 名 暴露"] },
          { word: "diplomatic", phonetic: "dìpləmǽtik", pos: "形", meanings: ["外交の、外交的な"], related: ["diplomacy 名 外交", "diplomat 名 外交官"] }
        ]
      },
      {
        id: 472,
        en: "Social media platforms have drastically altered how we perceive current events and form opinions.",
        ja: "ソーシャルメディアのプラットフォームは、我々が時事問題をどう認識し意見を形成するかを劇的に変えた。",
        words: [
          { word: "platform", phonetic: "plǽtfɔ̀ːrm", pos: "名", meanings: ["プラットフォーム、基盤、壇"], related: [] },
          { word: "drastically", phonetic: "drǽstikəli", pos: "副", meanings: ["劇的に、大幅に"], related: ["drastic 形 思い切った、劇的な"] },
          { word: "alter", phonetic: "ɔ́ːltər", pos: "動", meanings: ["変える、変更する"], related: ["alteration 名 変更", "alternative 名 代替案"] },
          { word: "perceive", phonetic: "pərsíːv", pos: "動", meanings: ["認識する、知覚する"], related: ["perception 名 認識、知覚", "perceptive 形 洞察力のある"] },
          { word: "current", phonetic: "kə́ːrənt", pos: "形", meanings: ["現在の、今の"], related: ["current 名 流れ、電流", "currently 副 現在"] }
        ]
      },
      {
        id: 473,
        en: "The editor urged the correspondent to verify the source before publishing the controversial article.",
        ja: "編集者は特派員に、その物議を醸す記事を公表する前に情報源を確認するよう促した。",
        words: [
          { word: "editor", phonetic: "éditər", pos: "名", meanings: ["編集者"], related: ["edit 動 編集する", "editorial 名 社説"] },
          { word: "urge", phonetic: "ə́ːrdʒ", pos: "動", meanings: ["促す、強く勧める"], related: ["urgent 形 緊急の", "urge 名 衝動"] },
          { word: "correspondent", phonetic: "kɔ̀ːrəspɑ́ndənt", pos: "名", meanings: ["特派員、通信員"], related: ["correspond 動 一致する、文通する"] },
          { word: "verify", phonetic: "vérifài", pos: "動", meanings: ["確認する、検証する"], related: ["verification 名 検証", "verified 形 確認済みの"] },
          { word: "source", phonetic: "sɔ́ːrs", pos: "名", meanings: ["情報源、源"], related: ["resource 名 資源"] },
          { word: "controversial", phonetic: "kɑ̀ntrəvə́ːrʃəl", pos: "形", meanings: ["物議を醸す、論争的な"], related: ["controversy 名 論争"] }
        ]
      },
      {
        id: 474,
        en: "The broadcast was temporarily suspended due to a technical malfunction at the transmitting station.",
        ja: "送信局の技術的故障により放送が一時的に中断された。",
        words: [
          { word: "broadcast", phonetic: "brɔ́ːdkæ̀st", pos: "名", meanings: ["放送"], related: ["broadcast 動 放送する（broadcast-broadcast-broadcast）"] },
          { word: "temporarily", phonetic: "tèmpəréərəli", pos: "副", meanings: ["一時的に"], related: ["temporary 形 一時的な", "⇔ permanent 永久の"] },
          { word: "suspend", phonetic: "səspénd", pos: "動", meanings: ["一時停止する、中断する"], related: ["suspension 名 停止、懸濁", "suspense 名 サスペンス"] },
          { word: "malfunction", phonetic: "mæ̀lfʌ́ŋkʃən", pos: "名", meanings: ["故障、機能不全"], related: ["malfunction 動 故障する", "function 名 機能"] }
        ]
      },
      {
        id: 475,
        en: "The documentary vividly portrayed the plight of refugees who had been displaced by the prolonged conflict.",
        ja: "そのドキュメンタリーは長期にわたる紛争で避難を余儀なくされた難民の苦境を生き生きと描いた。",
        words: [
          { word: "documentary", phonetic: "dɑ̀kjəméntəri", pos: "名", meanings: ["ドキュメンタリー、記録映画"], related: ["document 名 文書"] },
          { word: "vividly", phonetic: "vívidli", pos: "副", meanings: ["生き生きと、鮮明に"], related: ["vivid 形 鮮明な、生き生きとした"] },
          { word: "portray", phonetic: "pɔːrtréi", pos: "動", meanings: ["描写する、描く"], related: ["portrayal 名 描写", "portrait 名 肖像画"] },
          { word: "plight", phonetic: "pláit", pos: "名", meanings: ["苦境、窮状"], related: ["predicament/hardship"] },
          { word: "refugee", phonetic: "rèfjudʒíː", pos: "名", meanings: ["難民、避難者"], related: ["refuge 名 避難（所）"] },
          { word: "displace", phonetic: "displéis", pos: "動", meanings: ["追い払う、立ち退かせる"], related: ["displacement 名 強制退去"] },
          { word: "prolonged", phonetic: "prəlɔ́ːŋd", pos: "形", meanings: ["長期にわたる"], related: ["prolong 動 長引かせる"] }
        ]
      },
      {
        id: 476,
        en: "Censorship of the press undermines the fundamental right to freedom of expression in any democratic society.",
        ja: "報道の検閲は、いかなる民主主義社会においても表現の自由という基本的権利を損なう。",
        words: [
          { word: "censorship", phonetic: "sénsərʃìp", pos: "名", meanings: ["検閲"], related: ["censor 名/動 検閲官、検閲する"] },
          { word: "press", phonetic: "prés", pos: "名", meanings: ["報道機関、新聞"], related: ["press conference 記者会見"] },
          { word: "undermine", phonetic: "ʌ̀ndərmáin", pos: "動", meanings: ["損なう、弱体化させる"], related: ["weaken/erode"] },
          { word: "fundamental", phonetic: "fʌ̀ndəméntl", pos: "形", meanings: ["基本的な、根本的な"], related: ["fundamentally 副 根本的に"] },
          { word: "expression", phonetic: "ikspréʃən", pos: "名", meanings: ["表現"], related: ["express 動 表現する", "expressive 形 表現豊かな"] },
          { word: "democratic", phonetic: "dèməkrǽtik", pos: "形", meanings: ["民主主義の"], related: ["democracy 名 民主主義", "democrat 名 民主主義者"] }
        ]
      },
      {
        id: 477,
        en: "The rumor spread rapidly through online forums, but it turned out to be entirely fabricated.",
        ja: "その噂はオンラインフォーラムを通じて急速に広まったが、完全にでっち上げだと判明した。",
        words: [
          { word: "rumor", phonetic: "rúːmər", pos: "名", meanings: ["噂"], related: ["rumor 動 噂する", "gossip 名 うわさ話"] },
          { word: "spread", phonetic: "spréd", pos: "動", meanings: ["広がる、広める"], related: ["spread-spread-spread"] },
          { word: "rapidly", phonetic: "rǽpidli", pos: "副", meanings: ["急速に"], related: ["rapid 形 急速な"] },
          { word: "forum", phonetic: "fɔ́ːrəm", pos: "名", meanings: ["フォーラム、公開討論の場"], related: ["複数形 forums/fora"] },
          { word: "fabricate", phonetic: "fǽbrikèit", pos: "動", meanings: ["でっち上げる、捏造する"], related: ["fabrication 名 捏造", "fabric 名 布地"] }
        ]
      },
      {
        id: 478,
        en: "The publisher reluctantly agreed to retract the misleading headline after receiving numerous complaints.",
        ja: "出版社は多数の苦情を受けて、誤解を招く見出しの撤回にしぶしぶ同意した。",
        words: [
          { word: "publisher", phonetic: "pʌ́bliʃər", pos: "名", meanings: ["出版社、出版者"], related: ["publish 動 出版する", "publication 名 出版物"] },
          { word: "reluctantly", phonetic: "rilʌ́ktəntli", pos: "副", meanings: ["しぶしぶ、不承不承"], related: ["reluctant 形 気が進まない", "reluctance 名 不本意"] },
          { word: "retract", phonetic: "ritrǽkt", pos: "動", meanings: ["撤回する、取り消す"], related: ["retraction 名 撤回"] },
          { word: "misleading", phonetic: "mislíːdiŋ", pos: "形", meanings: ["誤解を招く、紛らわしい"], related: ["mislead 動 誤解させる"] },
          { word: "headline", phonetic: "hédlàin", pos: "名", meanings: ["見出し"], related: ["make headlines 話題になる"] },
          { word: "numerous", phonetic: "njúːmərəs", pos: "形", meanings: ["多数の、おびただしい"], related: ["number 名 数"] }
        ]
      },
      {
        id: 479,
        en: "The anchor delivered the breaking news with composure, despite the chaotic situation unfolding behind the scenes.",
        ja: "舞台裏で混乱した状況が展開する中、そのキャスターは落ち着いてニュース速報を伝えた。",
        words: [
          { word: "anchor", phonetic: "ǽŋkər", pos: "名", meanings: ["（ニュース）キャスター、錨"], related: ["anchorman/anchorwoman"] },
          { word: "deliver", phonetic: "dilívər", pos: "動", meanings: ["届ける、伝える、演説する"], related: ["delivery 名 配達、演説"] },
          { word: "composure", phonetic: "kəmpóuʒər", pos: "名", meanings: ["落ち着き、冷静さ"], related: ["composed 形 冷静な", "compose 動 構成する"] },
          { word: "chaotic", phonetic: "keiɑ́tik", pos: "形", meanings: ["混沌とした、無秩序な"], related: ["chaos 名 混沌"] },
          { word: "unfold", phonetic: "ʌnfóuld", pos: "動", meanings: ["展開する、明らかになる"], related: ["⇔ fold 折りたたむ"] }
        ]
      },
      {
        id: 480,
        en: "The editorial criticized the administration's lack of transparency regarding the allocation of public funds.",
        ja: "その社説は公的資金の配分に関する政府の透明性の欠如を批判した。",
        words: [
          { word: "editorial", phonetic: "èditɔ́ːriəl", pos: "名", meanings: ["社説、論説"], related: ["editor 名 編集者"] },
          { word: "criticize", phonetic: "krítəsàiz", pos: "動", meanings: ["批判する"], related: ["criticism 名 批判", "critic 名 批評家", "critical 形 批判的な"] },
          { word: "administration", phonetic: "ædmìnistréiʃən", pos: "名", meanings: ["政府、行政、管理"], related: ["administer 動 管理する"] },
          { word: "transparency", phonetic: "trænspǽrənsi", pos: "名", meanings: ["透明性"], related: ["transparent 形 透明な"] },
          { word: "allocation", phonetic: "æ̀ləkéiʃən", pos: "名", meanings: ["配分、割り当て"], related: ["allocate 動 配分する"] }
        ]
      }
    ]
  },
  {
    section: 45,
    title: "Education & Learning",
    sentences: [
      {
        id: 481,
        en: "The curriculum was revised to incorporate critical thinking and hands-on laboratory sessions.",
        ja: "カリキュラムは批判的思考力と実践的な実験実習を組み込むように改訂された。",
        words: [
          { word: "curriculum", phonetic: "kəríkjələm", pos: "名", meanings: ["カリキュラム、教育課程"], related: ["複数形 curricula/curriculums"] },
          { word: "revise", phonetic: "riváiz", pos: "動", meanings: ["改訂する、修正する"], related: ["revision 名 改訂、復習"] },
          { word: "incorporate", phonetic: "inkɔ́ːrpərèit", pos: "動", meanings: ["組み込む、取り入れる"], related: ["corporation 名 企業"] },
          { word: "critical thinking", phonetic: "krítikəl θíŋkiŋ", pos: "名", meanings: ["批判的思考"], related: ["critical 形 批判的な、重大な"] },
          { word: "laboratory", phonetic: "lǽbərətɔ̀ːri", pos: "名", meanings: ["実験室、研究所"], related: ["lab 名 略称"] }
        ]
      },
      {
        id: 482,
        en: "The distinguished professor delivered a compelling lecture on the implications of quantum mechanics.",
        ja: "その著名な教授は量子力学の意味合いについて説得力のある講義を行った。",
        words: [
          { word: "distinguished", phonetic: "distíŋgwiʃt", pos: "形", meanings: ["著名な、卓越した"], related: ["distinguish 動 区別する、見分ける"] },
          { word: "professor", phonetic: "prəfésər", pos: "名", meanings: ["教授"], related: ["profession 名 職業", "professional 形 プロの"] },
          { word: "compelling", phonetic: "kəmpéliŋ", pos: "形", meanings: ["説得力のある、やむにやまれぬ"], related: ["compel 動 強いる"] },
          { word: "lecture", phonetic: "léktʃər", pos: "名", meanings: ["講義、講演"], related: ["lecture 動 講義する", "lecturer 名 講師"] },
          { word: "implication", phonetic: "ìmplikéiʃən", pos: "名", meanings: ["意味合い、含意、影響"], related: ["imply 動 暗示する", "implicit 形 暗黙の"] }
        ]
      },
      {
        id: 483,
        en: "She was awarded a prestigious scholarship that covered tuition fees and living expenses throughout her graduate studies.",
        ja: "彼女は大学院課程を通じて授業料と生活費を賄う名門奨学金を授与された。",
        words: [
          { word: "award", phonetic: "əwɔ́ːrd", pos: "動", meanings: ["授与する"], related: ["award 名 賞、賞金"] },
          { word: "prestigious", phonetic: "prestídʒəs", pos: "形", meanings: ["名声のある、一流の"], related: ["prestige 名 名声、威信"] },
          { word: "scholarship", phonetic: "skɑ́lərʃìp", pos: "名", meanings: ["奨学金、学識"], related: ["scholar 名 学者"] },
          { word: "tuition", phonetic: "tjuíʃən", pos: "名", meanings: ["授業料、指導"], related: ["tuition fee 授業料"] },
          { word: "graduate", phonetic: "grǽdʒuət", pos: "形", meanings: ["大学院の"], related: ["graduate 動 卒業する", "graduation 名 卒業"] }
        ]
      },
      {
        id: 484,
        en: "The seminar encouraged participants to articulate their perspectives and engage in constructive debate.",
        ja: "そのセミナーは参加者に自分の見解を明確に述べ、建設的な議論に参加するよう促した。",
        words: [
          { word: "seminar", phonetic: "sémənɑ̀ːr", pos: "名", meanings: ["セミナー、研究会"], related: ["workshop/symposium"] },
          { word: "participant", phonetic: "pɑːrtísəpənt", pos: "名", meanings: ["参加者"], related: ["participate 動 参加する", "participation 名 参加"] },
          { word: "articulate", phonetic: "ɑːrtíkjəlèit", pos: "動", meanings: ["明確に述べる、はっきり発音する"], related: ["articulate 形 明瞭な"] },
          { word: "perspective", phonetic: "pərspéktiv", pos: "名", meanings: ["見方、観点、視点"], related: ["viewpoint/standpoint"] },
          { word: "constructive", phonetic: "kənstrʌ́ktiv", pos: "形", meanings: ["建設的な"], related: ["construct 動 建設する", "⇔ destructive 破壊的な"] },
          { word: "debate", phonetic: "dibéit", pos: "名", meanings: ["議論、討論"], related: ["debate 動 議論する"] }
        ]
      },
      {
        id: 485,
        en: "Literacy rates have improved dramatically in regions where access to elementary education has been prioritized.",
        ja: "初等教育へのアクセスが優先された地域では識字率が劇的に改善した。",
        words: [
          { word: "literacy", phonetic: "lítərəsi", pos: "名", meanings: ["識字能力、読み書き能力"], related: ["literate 形 読み書きのできる", "⇔ illiteracy 非識字"] },
          { word: "dramatically", phonetic: "drəmǽtikəli", pos: "副", meanings: ["劇的に"], related: ["dramatic 形 劇的な", "drama 名 劇"] },
          { word: "access", phonetic: "ǽkses", pos: "名", meanings: ["アクセス、利用する権利"], related: ["accessible 形 利用しやすい"] },
          { word: "elementary", phonetic: "èləméntəri", pos: "形", meanings: ["初等の、基本的な"], related: ["element 名 要素"] },
          { word: "prioritize", phonetic: "praiɔ́rətàiz", pos: "動", meanings: ["優先する、優先順位をつける"], related: ["priority 名 優先事項", "prior 形 前の"] }
        ]
      },
      {
        id: 486,
        en: "The thesis presented a comprehensive analysis of socioeconomic factors that influence academic achievement.",
        ja: "その論文は学業成績に影響を及ぼす社会経済的要因の包括的な分析を提示した。",
        words: [
          { word: "thesis", phonetic: "θíːsis", pos: "名", meanings: ["論文、学位論文"], related: ["複数形 theses", "dissertation 名 学位論文"] },
          { word: "comprehensive", phonetic: "kɑ̀mprihénsiv", pos: "形", meanings: ["包括的な、総合的な"], related: ["comprehend 動 理解する", "comprehension 名 理解"] },
          { word: "socioeconomic", phonetic: "sòusiouìːkənɑ́mik", pos: "形", meanings: ["社会経済的な"], related: ["sociology 名 社会学"] },
          { word: "factor", phonetic: "fǽktər", pos: "名", meanings: ["要因、要素"], related: ["factor 動 考慮に入れる"] },
          { word: "academic", phonetic: "æ̀kədémik", pos: "形", meanings: ["学問の、学術的な"], related: ["academy 名 学術団体", "academia 名 学界"] },
          { word: "achievement", phonetic: "ətʃíːvmənt", pos: "名", meanings: ["達成、業績"], related: ["achieve 動 達成する"] }
        ]
      },
      {
        id: 487,
        en: "The enrollment surge prompted the university to recruit additional faculty members across multiple disciplines.",
        ja: "入学者の急増により大学は複数の学問分野で追加の教員を採用することになった。",
        words: [
          { word: "enrollment", phonetic: "inróulmənt", pos: "名", meanings: ["入学、登録、在籍者数"], related: ["enroll 動 入学する、登録する"] },
          { word: "prompt", phonetic: "prɑ́mpt", pos: "動", meanings: ["促す、引き起こす"], related: ["prompt 形 迅速な", "promptly 副 速やかに"] },
          { word: "recruit", phonetic: "rikrúːt", pos: "動", meanings: ["採用する、新人を募集する"], related: ["recruitment 名 採用", "recruit 名 新人"] },
          { word: "faculty", phonetic: "fǽkəlti", pos: "名", meanings: ["教授陣、学部、能力"], related: ["faculty member 教員"] },
          { word: "discipline", phonetic: "dísəplin", pos: "名", meanings: ["学問分野、規律"], related: ["disciplinary 形 懲戒の、学問分野の"] }
        ]
      },
      {
        id: 488,
        en: "The apprentice diligently studied under the guidance of a skilled craftsman for several years.",
        ja: "その見習いは熟練した職人の指導のもとで数年間勤勉に学んだ。",
        words: [
          { word: "apprentice", phonetic: "əpréntis", pos: "名", meanings: ["見習い、弟子"], related: ["apprenticeship 名 見習い期間"] },
          { word: "diligently", phonetic: "dílidʒəntli", pos: "副", meanings: ["勤勉に、熱心に"], related: ["diligent 形 勤勉な", "diligence 名 勤勉"] },
          { word: "guidance", phonetic: "gáidns", pos: "名", meanings: ["指導、案内"], related: ["guide 動/名 案内する、ガイド"] },
          { word: "skilled", phonetic: "skíld", pos: "形", meanings: ["熟練した"], related: ["skill 名 技能", "⇔ unskilled 未熟な"] },
          { word: "craftsman", phonetic: "krǽftsmən", pos: "名", meanings: ["職人"], related: ["craft 名 技術、工芸"] }
        ]
      },
      {
        id: 489,
        en: "Peer review is an indispensable process for maintaining the integrity and credibility of published research.",
        ja: "査読は出版された研究の誠実さと信頼性を維持するために不可欠なプロセスである。",
        words: [
          { word: "peer", phonetic: "píər", pos: "名", meanings: ["同僚、仲間、同等の人"], related: ["peer review 査読", "peer pressure 仲間からの圧力"] },
          { word: "indispensable", phonetic: "ìndispénsəbl", pos: "形", meanings: ["不可欠な、なくてはならない"], related: ["essential/vital"] },
          { word: "integrity", phonetic: "intégrəti", pos: "名", meanings: ["誠実さ、完全性"], related: ["integral 形 不可欠な"] },
          { word: "credibility", phonetic: "krèdəbíləti", pos: "名", meanings: ["信頼性"], related: ["credible 形 信頼できる", "⇔ incredible 信じられない"] }
        ]
      },
      {
        id: 490,
        en: "The institution implemented a mentoring program to nurture talented students and prevent them from dropping out.",
        ja: "その機関は才能ある学生を育成し退学を防ぐためにメンタリングプログラムを導入した。",
        words: [
          { word: "institution", phonetic: "ìnstətjúːʃən", pos: "名", meanings: ["機関、施設、制度"], related: ["institute 名 研究所", "institutional 形 制度上の"] },
          { word: "implement", phonetic: "ímpləmènt", pos: "動", meanings: ["実施する、導入する"], related: ["implementation 名 実施"] },
          { word: "mentor", phonetic: "méntɔːr", pos: "動", meanings: ["指導する、助言する"], related: ["mentor 名 指導者、助言者"] },
          { word: "nurture", phonetic: "nə́ːrtʃər", pos: "動", meanings: ["育成する、養育する"], related: ["nurture 名 養育", "nature vs. nurture 氏か育ちか"] },
          { word: "talented", phonetic: "tǽləntid", pos: "形", meanings: ["才能のある"], related: ["talent 名 才能"] },
          { word: "drop out", phonetic: "drɑ́p áut", pos: "動", meanings: ["退学する、脱落する"], related: ["dropout 名 退学者、中退者"] }
        ]
      }
    ]
  },
  {
    section: 46,
    title: "Health & Medicine",
    sentences: [
      {
        id: 491,
        en: "The physician diagnosed the patient with a chronic condition that requires ongoing treatment and regular checkups.",
        ja: "医師はその患者を継続的な治療と定期検診が必要な慢性疾患と診断した。",
        words: [
          { word: "physician", phonetic: "fizíʃən", pos: "名", meanings: ["医師、内科医"], related: ["physical 形 身体の", "physicist 名 物理学者"] },
          { word: "diagnose", phonetic: "dàiəgnóuz", pos: "動", meanings: ["診断する"], related: ["diagnosis 名 診断", "複数形 diagnoses"] },
          { word: "patient", phonetic: "péiʃənt", pos: "名", meanings: ["患者"], related: ["patient 形 忍耐強い", "patience 名 忍耐"] },
          { word: "chronic", phonetic: "krɑ́nik", pos: "形", meanings: ["慢性の"], related: ["⇔ acute 急性の", "chronically 副 慢性的に"] },
          { word: "ongoing", phonetic: "ɑ́ngòuiŋ", pos: "形", meanings: ["進行中の、継続的な"], related: ["continuous/continuing"] }
        ]
      },
      {
        id: 492,
        en: "The surgeon performed a delicate operation to remove the tumor without damaging the surrounding tissue.",
        ja: "外科医は周囲の組織を傷つけずに腫瘍を摘出するための繊細な手術を行った。",
        words: [
          { word: "surgeon", phonetic: "sə́ːrdʒən", pos: "名", meanings: ["外科医"], related: ["surgery 名 外科、手術", "surgical 形 外科の"] },
          { word: "delicate", phonetic: "délikət", pos: "形", meanings: ["繊細な、微妙な"], related: ["delicacy 名 繊細さ"] },
          { word: "operation", phonetic: "ɑ̀pəréiʃən", pos: "名", meanings: ["手術、操作"], related: ["operate 動 手術する、操作する"] },
          { word: "tumor", phonetic: "tjúːmər", pos: "名", meanings: ["腫瘍"], related: ["benign 良性の", "malignant 悪性の"] },
          { word: "tissue", phonetic: "tíʃuː", pos: "名", meanings: ["（生体の）組織、ティッシュ"], related: [] }
        ]
      },
      {
        id: 493,
        en: "Symptoms such as persistent fatigue and shortness of breath may indicate an underlying cardiovascular disorder.",
        ja: "持続的な疲労や息切れなどの症状は、潜在的な心血管疾患を示している可能性がある。",
        words: [
          { word: "symptom", phonetic: "símptəm", pos: "名", meanings: ["症状、兆候"], related: ["symptomatic 形 症状を示す"] },
          { word: "persistent", phonetic: "pərsístənt", pos: "形", meanings: ["持続的な、しつこい"], related: ["persist 動 持続する", "persistence 名 持続"] },
          { word: "fatigue", phonetic: "fətíːg", pos: "名", meanings: ["疲労、倦怠感"], related: ["exhaustion/weariness"] },
          { word: "indicate", phonetic: "índikèit", pos: "動", meanings: ["示す、指し示す"], related: ["indication 名 兆候", "indicator 名 指標"] },
          { word: "underlying", phonetic: "ʌ̀ndərláiiŋ", pos: "形", meanings: ["根本的な、潜在的な"], related: ["underlie 動 根底にある"] },
          { word: "disorder", phonetic: "disɔ́ːrdər", pos: "名", meanings: ["障害、疾患、不調"], related: ["⇔ order 秩序"] }
        ]
      },
      {
        id: 494,
        en: "The pharmaceutical company invested billions in developing a remedy for the previously incurable disease.",
        ja: "その製薬会社は以前は不治とされた病気の治療法を開発するために数十億を投資した。",
        words: [
          { word: "pharmaceutical", phonetic: "fɑ̀ːrməsúːtikəl", pos: "形", meanings: ["製薬の"], related: ["pharmacy 名 薬局", "pharmacist 名 薬剤師"] },
          { word: "invest", phonetic: "invést", pos: "動", meanings: ["投資する"], related: ["investment 名 投資", "investor 名 投資家"] },
          { word: "remedy", phonetic: "rémidi", pos: "名", meanings: ["治療法、救済策"], related: ["remedy 動 治す、改善する", "cure 名 治療"] },
          { word: "incurable", phonetic: "inkjúərəbl", pos: "形", meanings: ["不治の"], related: ["⇔ curable 治療可能な", "cure 動 治す"] }
        ]
      },
      {
        id: 495,
        en: "Mental health awareness campaigns have helped reduce the stigma associated with seeking psychiatric help.",
        ja: "メンタルヘルス啓発キャンペーンは精神科の助けを求めることに付随する偏見を減らすのに役立った。",
        words: [
          { word: "awareness", phonetic: "əwéərnis", pos: "名", meanings: ["意識、認識"], related: ["aware 形 気づいている", "⇔ unaware 気づかない"] },
          { word: "campaign", phonetic: "kæmpéin", pos: "名", meanings: ["キャンペーン、運動"], related: ["campaign 動 運動を行う"] },
          { word: "reduce", phonetic: "ridjúːs", pos: "動", meanings: ["減らす、縮小する"], related: ["reduction 名 削減"] },
          { word: "stigma", phonetic: "stígmə", pos: "名", meanings: ["汚名、偏見"], related: ["stigmatize 動 汚名を着せる"] },
          { word: "psychiatric", phonetic: "sàikiǽtrik", pos: "形", meanings: ["精神科の"], related: ["psychiatry 名 精神医学", "psychiatrist 名 精神科医"] }
        ]
      },
      {
        id: 496,
        en: "The outbreak of the infectious disease overwhelmed hospitals, forcing authorities to impose strict quarantine measures.",
        ja: "感染症の発生が病院を圧倒し、当局は厳格な隔離措置を課さざるを得なかった。",
        words: [
          { word: "outbreak", phonetic: "áutbrèik", pos: "名", meanings: ["発生、勃発"], related: ["break out 動 勃発する"] },
          { word: "infectious", phonetic: "inféktʃəs", pos: "形", meanings: ["感染性の、伝染する"], related: ["infect 動 感染させる", "infection 名 感染"] },
          { word: "overwhelm", phonetic: "òuvərwélm", pos: "動", meanings: ["圧倒する、打ちのめす"], related: ["overwhelming 形 圧倒的な"] },
          { word: "impose", phonetic: "impóuz", pos: "動", meanings: ["課す、押しつける"], related: ["imposition 名 課すこと"] },
          { word: "quarantine", phonetic: "kwɔ́ːrəntìːn", pos: "名", meanings: ["隔離、検疫"], related: ["quarantine 動 隔離する"] }
        ]
      },
      {
        id: 497,
        en: "Regular physical exercise combined with a balanced diet can significantly lower the risk of obesity and diabetes.",
        ja: "定期的な運動とバランスの取れた食事を組み合わせることで肥満と糖尿病のリスクを大幅に下げられる。",
        words: [
          { word: "physical", phonetic: "fízikəl", pos: "形", meanings: ["身体の、物理的な"], related: ["physically 副 身体的に", "⇔ mental 精神的な"] },
          { word: "combine", phonetic: "kəmbáin", pos: "動", meanings: ["組み合わせる、結合する"], related: ["combination 名 組み合わせ"] },
          { word: "balanced", phonetic: "bǽlənst", pos: "形", meanings: ["バランスの取れた"], related: ["balance 名/動 バランス"] },
          { word: "obesity", phonetic: "oubíːsəti", pos: "名", meanings: ["肥満"], related: ["obese 形 肥満の"] },
          { word: "diabetes", phonetic: "dàiəbíːtiːz", pos: "名", meanings: ["糖尿病"], related: ["diabetic 形/名 糖尿病の/患者"] }
        ]
      },
      {
        id: 498,
        en: "The allergic reaction was so severe that the paramedics had to administer an injection of epinephrine immediately.",
        ja: "アレルギー反応が非常に重篤だったため、救急隊員はただちにエピネフリンの注射を投与しなければならなかった。",
        words: [
          { word: "allergic", phonetic: "ələ́ːrdʒik", pos: "形", meanings: ["アレルギーの"], related: ["allergy 名 アレルギー", "allergen 名 アレルゲン"] },
          { word: "reaction", phonetic: "riǽkʃən", pos: "名", meanings: ["反応"], related: ["react 動 反応する", "reactive 形 反応性の"] },
          { word: "severe", phonetic: "sivíər", pos: "形", meanings: ["重篤な、厳しい"], related: ["severity 名 深刻さ", "severely 副 厳しく"] },
          { word: "paramedic", phonetic: "pæ̀rəmédik", pos: "名", meanings: ["救急医療隊員"], related: ["medical 形 医療の"] },
          { word: "administer", phonetic: "ədmínistər", pos: "動", meanings: ["投与する、管理する"], related: ["administration 名 投与、管理"] },
          { word: "injection", phonetic: "indʒékʃən", pos: "名", meanings: ["注射"], related: ["inject 動 注射する"] }
        ]
      },
      {
        id: 499,
        en: "The therapist recommended a combination of cognitive behavioral therapy and prescribed medication for the anxiety disorder.",
        ja: "セラピストはその不安障害に対して認知行動療法と処方薬の併用を勧めた。",
        words: [
          { word: "therapist", phonetic: "θérəpist", pos: "名", meanings: ["セラピスト、療法士"], related: ["therapy 名 療法、治療"] },
          { word: "recommend", phonetic: "rèkəménd", pos: "動", meanings: ["勧める、推薦する"], related: ["recommendation 名 推薦"] },
          { word: "cognitive", phonetic: "kɑ́gnətiv", pos: "形", meanings: ["認知の"], related: ["cognition 名 認知"] },
          { word: "prescribe", phonetic: "priskráib", pos: "動", meanings: ["処方する、規定する"], related: ["prescription 名 処方箋"] },
          { word: "medication", phonetic: "mèdikéiʃən", pos: "名", meanings: ["薬、薬物治療"], related: ["medicine 名 薬、医学", "medicate 動 投薬する"] },
          { word: "anxiety", phonetic: "æŋzáiəti", pos: "名", meanings: ["不安、心配"], related: ["anxious 形 不安な"] }
        ]
      },
      {
        id: 500,
        en: "Advances in genetic research have paved the way for personalized medicine tailored to each individual's unique DNA profile.",
        ja: "遺伝子研究の進歩が、個人ごとの固有のDNAプロファイルに合わせたオーダーメイド医療への道を開いた。",
        words: [
          { word: "advance", phonetic: "ədvǽns", pos: "名", meanings: ["進歩、前進"], related: ["advance 動 前進する", "advanced 形 先進的な"] },
          { word: "pave the way", phonetic: "péiv ðə wéi", pos: "動", meanings: ["道を開く、基盤を作る"], related: ["pave 動 舗装する"] },
          { word: "personalized", phonetic: "pə́ːrsənəlàizd", pos: "形", meanings: ["個別化された、オーダーメイドの"], related: ["personalize 動 個別化する"] },
          { word: "tailor", phonetic: "téilər", pos: "動", meanings: ["合わせる、仕立てる"], related: ["tailor 名 仕立屋", "tailored 形 仕立ての"] },
          { word: "profile", phonetic: "próufail", pos: "名", meanings: ["プロファイル、概要"], related: ["profile 動 概要を書く"] }
        ]
      }
    ]
  },
  {
    section: 47,
    title: "Psychology & Human Behavior",
    sentences: [
      {
        id: 501,
        en: "The psychologist argued that early childhood experiences have a profound impact on personality development.",
        ja: "心理学者は幼少期の経験が人格形成に深い影響を与えると主張した。",
        words: [
          { word: "psychologist", phonetic: "saikɑ́lədʒist", pos: "名", meanings: ["心理学者"], related: ["psychology 名 心理学", "psychological 形 心理学的な"] },
          { word: "argue", phonetic: "ɑ́ːrgjuː", pos: "動", meanings: ["主張する、議論する"], related: ["argument 名 議論、主張"] },
          { word: "childhood", phonetic: "tʃáildhùd", pos: "名", meanings: ["幼少期、子供時代"], related: ["child 名 子供", "childish 形 子供っぽい"] },
          { word: "impact", phonetic: "ímpækt", pos: "名", meanings: ["影響、衝撃"], related: ["impact 動 影響を与える"] },
          { word: "personality", phonetic: "pə̀ːrsənǽləti", pos: "名", meanings: ["人格、性格"], related: ["personal 形 個人的な"] }
        ]
      },
      {
        id: 502,
        en: "Prolonged exposure to stress can impair cognitive function and weaken the immune system.",
        ja: "長期にわたるストレスへの曝露は認知機能を損ない、免疫システムを弱める可能性がある。",
        words: [
          { word: "exposure", phonetic: "ikspóuʒər", pos: "名", meanings: ["曝露、露出"], related: ["expose 動 さらす、暴露する"] },
          { word: "stress", phonetic: "strés", pos: "名", meanings: ["ストレス、圧力"], related: ["stressful 形 ストレスの多い"] },
          { word: "impair", phonetic: "impéər", pos: "動", meanings: ["損なう、害する"], related: ["impairment 名 障害、低下"] },
          { word: "function", phonetic: "fʌ́ŋkʃən", pos: "名", meanings: ["機能"], related: ["function 動 機能する", "functional 形 機能的な"] },
          { word: "immune", phonetic: "imjúːn", pos: "形", meanings: ["免疫の、免れている"], related: ["immunity 名 免疫", "immune system 免疫システム"] }
        ]
      },
      {
        id: 503,
        en: "The notion that intelligence is solely determined by heredity has been largely discredited by modern research.",
        ja: "知能がもっぱら遺伝によって決定されるという考えは、現代の研究によって大部分が否定されている。",
        words: [
          { word: "notion", phonetic: "nóuʃən", pos: "名", meanings: ["考え、概念"], related: ["idea/concept"] },
          { word: "intelligence", phonetic: "intélidʒəns", pos: "名", meanings: ["知能、知性"], related: ["intelligent 形 知的な", "intellectual 形 知性の"] },
          { word: "solely", phonetic: "sóulli", pos: "副", meanings: ["もっぱら、ただ〜だけ"], related: ["sole 形 唯一の"] },
          { word: "determine", phonetic: "ditə́ːrmin", pos: "動", meanings: ["決定する、決意する"], related: ["determination 名 決意", "determined 形 決意した"] },
          { word: "discredit", phonetic: "diskrédit", pos: "動", meanings: ["信用を傷つける、否定する"], related: ["discredit 名 不信"] }
        ]
      },
      {
        id: 504,
        en: "Individuals who exhibit empathy tend to form deeper bonds and resolve interpersonal conflicts more effectively.",
        ja: "共感力を示す人はより深い絆を築き、対人関係の衝突をより効果的に解決する傾向がある。",
        words: [
          { word: "exhibit", phonetic: "igzíbit", pos: "動", meanings: ["示す、展示する"], related: ["exhibition 名 展示会", "exhibit 名 展示品"] },
          { word: "empathy", phonetic: "émpəθi", pos: "名", meanings: ["共感、感情移入"], related: ["empathize 動 共感する", "⇔ apathy 無関心"] },
          { word: "tend to", phonetic: "ténd tə", pos: "動", meanings: ["〜する傾向がある"], related: ["tendency 名 傾向"] },
          { word: "bond", phonetic: "bɑ́nd", pos: "名", meanings: ["絆、結合"], related: ["bond 動 結びつける"] },
          { word: "interpersonal", phonetic: "ìntərpə́ːrsənl", pos: "形", meanings: ["対人関係の"], related: ["personal 形 個人的な"] },
          { word: "conflict", phonetic: "kɑ́nflikt", pos: "名", meanings: ["衝突、紛争"], related: ["conflict 動 矛盾する、衝突する"] }
        ]
      },
      {
        id: 505,
        en: "The instinct to conform to group norms is a deeply rooted aspect of human social behavior.",
        ja: "集団の規範に従おうとする本能は、人間の社会的行動に深く根ざした側面である。",
        words: [
          { word: "instinct", phonetic: "ínstiŋkt", pos: "名", meanings: ["本能"], related: ["instinctive 形 本能的な", "instinctively 副 本能的に"] },
          { word: "conform", phonetic: "kənfɔ́ːrm", pos: "動", meanings: ["従う、順応する"], related: ["conformity 名 順応、適合"] },
          { word: "norm", phonetic: "nɔ́ːrm", pos: "名", meanings: ["規範、標準"], related: ["normal 形 普通の", "abnormal 形 異常な"] },
          { word: "rooted", phonetic: "rúːtid", pos: "形", meanings: ["根ざした、根深い"], related: ["root 名 根、根源"] },
          { word: "aspect", phonetic: "ǽspekt", pos: "名", meanings: ["側面、局面"], related: ["facet/dimension"] }
        ]
      },
      {
        id: 506,
        en: "Addiction is now widely recognized as a complex neurological condition rather than a mere lack of willpower.",
        ja: "依存症は現在、単なる意志力の欠如ではなく複雑な神経学的状態として広く認識されている。",
        words: [
          { word: "addiction", phonetic: "ədíkʃən", pos: "名", meanings: ["依存症、中毒"], related: ["addict 名 中毒者", "addicted 形 依存した", "addictive 形 中毒性の"] },
          { word: "recognize", phonetic: "rékəgnàiz", pos: "動", meanings: ["認識する、認める"], related: ["recognition 名 認識"] },
          { word: "neurological", phonetic: "njùərəlɑ́dʒikəl", pos: "形", meanings: ["神経学的な"], related: ["neurology 名 神経学", "neuron 名 神経細胞"] },
          { word: "condition", phonetic: "kəndíʃən", pos: "名", meanings: ["状態、条件、病気"], related: ["conditional 形 条件付きの"] },
          { word: "mere", phonetic: "míər", pos: "形", meanings: ["単なる、ほんの"], related: ["merely 副 単に、ただ"] },
          { word: "willpower", phonetic: "wílpàuər", pos: "名", meanings: ["意志力"], related: ["will 名 意志"] }
        ]
      },
      {
        id: 507,
        en: "The experiment demonstrated that subjects were susceptible to manipulation when placed under authority figures.",
        ja: "その実験は、被験者が権威者のもとに置かれると操作されやすいことを実証した。",
        words: [
          { word: "subject", phonetic: "sʌ́bdʒikt", pos: "名", meanings: ["被験者、主題、科目"], related: ["subject 動 さらす", "subjective 形 主観的な"] },
          { word: "susceptible", phonetic: "səséptəbl", pos: "形", meanings: ["影響を受けやすい、感染しやすい"], related: ["susceptibility 名 感受性"] },
          { word: "manipulation", phonetic: "mənìpjəléiʃən", pos: "名", meanings: ["操作、巧みな扱い"], related: ["manipulate 動 操作する"] },
          { word: "authority", phonetic: "əθɔ́ːrəti", pos: "名", meanings: ["権威、当局"], related: ["authorize 動 認可する", "authoritative 形 権威ある"] },
          { word: "figure", phonetic: "fígjər", pos: "名", meanings: ["人物、数字、姿"], related: ["figure 動 考える、計算する"] }
        ]
      },
      {
        id: 508,
        en: "Trauma experienced during adolescence can manifest as emotional instability and difficulty trusting others in adulthood.",
        ja: "青年期に経験したトラウマは成人期に情緒不安定や他者への信頼の困難として現れることがある。",
        words: [
          { word: "trauma", phonetic: "trɔ́ːmə", pos: "名", meanings: ["トラウマ、心的外傷"], related: ["traumatic 形 トラウマの", "traumatize 動 トラウマを与える"] },
          { word: "adolescence", phonetic: "æ̀dəlésns", pos: "名", meanings: ["青年期、思春期"], related: ["adolescent 名/形 青年、青年期の"] },
          { word: "manifest", phonetic: "mǽnəfèst", pos: "動", meanings: ["現れる、明らかにする"], related: ["manifestation 名 表れ"] },
          { word: "emotional", phonetic: "imóuʃənl", pos: "形", meanings: ["感情的な、情緒の"], related: ["emotion 名 感情", "emotionally 副 感情的に"] },
          { word: "instability", phonetic: "ìnstəbíləti", pos: "名", meanings: ["不安定"], related: ["⇔ stability 安定", "unstable 形 不安定な"] }
        ]
      },
      {
        id: 509,
        en: "Motivation can be broadly categorized into intrinsic drives, such as curiosity, and extrinsic rewards, such as financial incentives.",
        ja: "動機づけは大まかに好奇心などの内発的動因と金銭的報酬などの外発的報酬に分類できる。",
        words: [
          { word: "motivation", phonetic: "mòutəvéiʃən", pos: "名", meanings: ["動機づけ、やる気"], related: ["motivate 動 動機づける", "motive 名 動機"] },
          { word: "categorize", phonetic: "kǽtəgəràiz", pos: "動", meanings: ["分類する"], related: ["category 名 カテゴリー"] },
          { word: "intrinsic", phonetic: "intrínsik", pos: "形", meanings: ["内在的な、本質的な"], related: ["⇔ extrinsic 外的な"] },
          { word: "curiosity", phonetic: "kjùəriɑ́səti", pos: "名", meanings: ["好奇心"], related: ["curious 形 好奇心の強い"] },
          { word: "extrinsic", phonetic: "ekstrísik", pos: "形", meanings: ["外的な、外因性の"], related: ["⇔ intrinsic 内在的な"] },
          { word: "incentive", phonetic: "inséntiv", pos: "名", meanings: ["報酬、動機、奨励"], related: ["motivation/stimulus"] }
        ]
      },
      {
        id: 510,
        en: "Subconscious biases can subtly influence our decision-making process without us being aware of it.",
        ja: "潜在意識の偏見は、我々が気づかないうちに意思決定過程にひそかに影響を及ぼす可能性がある。",
        words: [
          { word: "subconscious", phonetic: "sʌ̀bkɑ́nʃəs", pos: "形", meanings: ["潜在意識の"], related: ["⇔ conscious 意識的な", "unconscious 無意識の"] },
          { word: "bias", phonetic: "báiəs", pos: "名", meanings: ["偏見、偏り"], related: ["biased 形 偏った", "⇔ unbiased 公平な"] },
          { word: "subtly", phonetic: "sʌ́tli", pos: "副", meanings: ["微妙に、巧みに"], related: ["subtle 形 微妙な"] },
          { word: "influence", phonetic: "ínfluəns", pos: "動", meanings: ["影響を与える"], related: ["influence 名 影響", "influential 形 影響力のある"] },
          { word: "decision-making", phonetic: "disíʒən mèikiŋ", pos: "名", meanings: ["意思決定"], related: ["decide 動 決める", "decision 名 決定"] }
        ]
      }
    ]
  },
  {
    section: 48,
    title: "Philosophy & Abstract Thought",
    sentences: [
      {
        id: 511,
        en: "The philosopher contended that the pursuit of virtue is the ultimate purpose of human existence.",
        ja: "その哲学者は美徳の追求が人間の存在の究極の目的であると主張した。",
        words: [
          { word: "philosopher", phonetic: "filɑ́səfər", pos: "名", meanings: ["哲学者"], related: ["philosophy 名 哲学", "philosophical 形 哲学的な"] },
          { word: "contend", phonetic: "kənténd", pos: "動", meanings: ["主張する、競う"], related: ["contention 名 主張、論争"] },
          { word: "pursuit", phonetic: "pərsúːt", pos: "名", meanings: ["追求、追跡"], related: ["pursue 動 追求する"] },
          { word: "virtue", phonetic: "və́ːrtʃuː", pos: "名", meanings: ["美徳、徳"], related: ["virtuous 形 有徳な", "⇔ vice 悪徳"] },
          { word: "ultimate", phonetic: "ʌ́ltəmət", pos: "形", meanings: ["究極の、最終的な"], related: ["ultimately 副 最終的に"] },
          { word: "existence", phonetic: "igzístəns", pos: "名", meanings: ["存在"], related: ["exist 動 存在する", "existent 形 存在する"] }
        ]
      },
      {
        id: 512,
        en: "Skeptics question whether absolute truth can ever be attained through human reasoning alone.",
        ja: "懐疑論者は人間の推論だけで絶対的な真理に到達できるかどうかを疑問視する。",
        words: [
          { word: "skeptic", phonetic: "sképtik", pos: "名", meanings: ["懐疑論者"], related: ["skeptical 形 懐疑的な", "skepticism 名 懐疑主義"] },
          { word: "absolute", phonetic: "ǽbsəlùːt", pos: "形", meanings: ["絶対的な、完全な"], related: ["absolutely 副 絶対に"] },
          { word: "truth", phonetic: "trúːθ", pos: "名", meanings: ["真理、真実"], related: ["true 形 本当の", "truthful 形 正直な"] },
          { word: "attain", phonetic: "ətéin", pos: "動", meanings: ["達成する、到達する"], related: ["attainment 名 達成", "attainable 形 達成可能な"] },
          { word: "reasoning", phonetic: "ríːzəniŋ", pos: "名", meanings: ["推論、論理的思考"], related: ["reason 名/動 理由、推論する", "reasonable 形 合理的な"] }
        ]
      },
      {
        id: 513,
        en: "The concept of free will remains one of the most enduring and contentious topics in philosophical discourse.",
        ja: "自由意志の概念は哲学的議論における最も根強く論争的なテーマの一つであり続けている。",
        words: [
          { word: "concept", phonetic: "kɑ́nsept", pos: "名", meanings: ["概念、考え"], related: ["conceptual 形 概念の", "conceive 動 思いつく"] },
          { word: "free will", phonetic: "fríː wíl", pos: "名", meanings: ["自由意志"], related: ["will 名 意志"] },
          { word: "enduring", phonetic: "indjúəriŋ", pos: "形", meanings: ["永続的な、根強い"], related: ["endure 動 耐える、持続する", "endurance 名 忍耐"] },
          { word: "contentious", phonetic: "konténʃəs", pos: "形", meanings: ["論争的な、異論の多い"], related: ["contention 名 論争"] },
          { word: "discourse", phonetic: "diskɔ́ːrs", pos: "名", meanings: ["談話、論説、議論"], related: ["discuss 動 議論する"] }
        ]
      },
      {
        id: 514,
        en: "Moral relativism asserts that ethical standards vary across cultures and cannot be judged by a single universal framework.",
        ja: "道徳的相対主義は倫理基準が文化によって異なり、単一の普遍的枠組みで判断できないと主張する。",
        words: [
          { word: "moral", phonetic: "mɔ́ːrəl", pos: "形", meanings: ["道徳の、倫理的な"], related: ["morality 名 道徳", "⇔ immoral 不道徳な"] },
          { word: "assert", phonetic: "əsə́ːrt", pos: "動", meanings: ["主張する、断言する"], related: ["assertion 名 主張", "assertive 形 自己主張の強い"] },
          { word: "standard", phonetic: "stǽndərd", pos: "名", meanings: ["基準、水準"], related: ["standardize 動 標準化する"] },
          { word: "universal", phonetic: "jùːnəvə́ːrsəl", pos: "形", meanings: ["普遍的な、全世界の"], related: ["universe 名 宇宙", "universally 副 普遍的に"] },
          { word: "framework", phonetic: "fréimwə̀ːrk", pos: "名", meanings: ["枠組み、体制"], related: ["frame 名 枠"] }
        ]
      },
      {
        id: 515,
        en: "The paradox illustrates how two seemingly contradictory statements can both be valid under certain assumptions.",
        ja: "そのパラドックスは、一見矛盾する2つの命題が特定の前提のもとでは両方とも妥当であり得ることを示している。",
        words: [
          { word: "paradox", phonetic: "pǽrədɑ̀ks", pos: "名", meanings: ["逆説、パラドックス"], related: ["paradoxical 形 逆説的な"] },
          { word: "illustrate", phonetic: "íləstrèit", pos: "動", meanings: ["説明する、例証する"], related: ["illustration 名 図解、実例"] },
          { word: "seemingly", phonetic: "síːmiŋli", pos: "副", meanings: ["一見、見たところ"], related: ["seem 動 〜に見える"] },
          { word: "valid", phonetic: "vǽlid", pos: "形", meanings: ["妥当な、有効な"], related: ["validity 名 妥当性", "⇔ invalid 無効な"] },
          { word: "assumption", phonetic: "əsʌ́mpʃən", pos: "名", meanings: ["仮定、前提"], related: ["assume 動 仮定する、引き受ける"] }
        ]
      },
      {
        id: 516,
        en: "Utilitarians maintain that the most ethical course of action is the one that maximizes overall well-being.",
        ja: "功利主義者は最も倫理的な行動方針は全体的な幸福を最大化するものだと主張する。",
        words: [
          { word: "maintain", phonetic: "meintéin", pos: "動", meanings: ["主張する、維持する"], related: ["maintenance 名 維持"] },
          { word: "course", phonetic: "kɔ́ːrs", pos: "名", meanings: ["方針、過程、コース"], related: ["course of action 行動方針"] },
          { word: "maximize", phonetic: "mǽksəmàiz", pos: "動", meanings: ["最大化する"], related: ["maximum 名/形 最大", "⇔ minimize 最小化する"] },
          { word: "overall", phonetic: "òuvərɔ́ːl", pos: "形", meanings: ["全体的な、総合的な"], related: ["overall 副 全体として"] },
          { word: "well-being", phonetic: "wélbìːiŋ", pos: "名", meanings: ["幸福、健康"], related: ["welfare 名 福祉"] }
        ]
      },
      {
        id: 517,
        en: "The distinction between objective facts and subjective interpretations is central to epistemological inquiry.",
        ja: "客観的事実と主観的解釈の区別は認識論的探究の中心にある。",
        words: [
          { word: "distinction", phonetic: "distíŋkʃən", pos: "名", meanings: ["区別、差異"], related: ["distinguish 動 区別する", "distinct 形 別個の"] },
          { word: "objective", phonetic: "əbdʒéktiv", pos: "形", meanings: ["客観的な"], related: ["objectivity 名 客観性", "⇔ subjective 主観的な"] },
          { word: "subjective", phonetic: "səbdʒéktiv", pos: "形", meanings: ["主観的な"], related: ["subjectivity 名 主観性"] },
          { word: "interpretation", phonetic: "intə̀ːrprətéiʃən", pos: "名", meanings: ["解釈"], related: ["interpret 動 解釈する", "interpreter 名 通訳"] },
          { word: "inquiry", phonetic: "inkwáiəri", pos: "名", meanings: ["探究、調査、質問"], related: ["inquire 動 尋ねる、調査する"] }
        ]
      },
      {
        id: 518,
        en: "Existentialists emphasize that individuals bear the burden of defining their own purpose in an inherently meaningless universe.",
        ja: "実存主義者は、本質的に無意味な宇宙の中で自らの目的を定義する重荷を個人が負っていることを強調する。",
        words: [
          { word: "emphasize", phonetic: "émfəsàiz", pos: "動", meanings: ["強調する"], related: ["emphasis 名 強調"] },
          { word: "bear", phonetic: "béər", pos: "動", meanings: ["負う、耐える、産む"], related: ["bore-borne/born"] },
          { word: "burden", phonetic: "bə́ːrdn", pos: "名", meanings: ["重荷、負担"], related: ["burden 動 負担をかける", "burdensome 形 厄介な"] },
          { word: "define", phonetic: "difáin", pos: "動", meanings: ["定義する、明確にする"], related: ["definition 名 定義"] },
          { word: "inherently", phonetic: "inhíərəntli", pos: "副", meanings: ["本質的に、生まれつき"], related: ["inherent 形 固有の、本来の"] }
        ]
      },
      {
        id: 519,
        en: "The thinker proposed that consciousness arises from the intricate interaction of billions of neurons in the brain.",
        ja: "その思想家は意識が脳内の数十億の神経細胞の複雑な相互作用から生じると提唱した。",
        words: [
          { word: "propose", phonetic: "prəpóuz", pos: "動", meanings: ["提案する、提唱する"], related: ["proposal 名 提案", "proposition 名 命題"] },
          { word: "consciousness", phonetic: "kɑ́nʃəsnis", pos: "名", meanings: ["意識"], related: ["conscious 形 意識のある", "⇔ unconscious 無意識の"] },
          { word: "arise", phonetic: "əráiz", pos: "動", meanings: ["生じる、起こる"], related: ["arose-arisen"] },
          { word: "intricate", phonetic: "íntrikət", pos: "形", meanings: ["複雑な、入り組んだ"], related: ["intricacy 名 複雑さ"] },
          { word: "interaction", phonetic: "ìntərǽkʃən", pos: "名", meanings: ["相互作用、交流"], related: ["interact 動 交流する", "interactive 形 双方向の"] }
        ]
      },
      {
        id: 520,
        en: "Whether artificial intelligence can ever truly possess self-awareness remains a deeply divisive philosophical question.",
        ja: "人工知能が本当に自己認識を持てるかどうかは、今なお深く意見が分かれる哲学的問題である。",
        words: [
          { word: "possess", phonetic: "pəzés", pos: "動", meanings: ["所有する、持っている"], related: ["possession 名 所有、所有物"] },
          { word: "self-awareness", phonetic: "sèlf əwéərnis", pos: "名", meanings: ["自己認識、自覚"], related: ["aware 形 気づいている"] },
          { word: "remain", phonetic: "riméin", pos: "動", meanings: ["〜のままである、残る"], related: ["remainder 名 残り", "remaining 形 残りの"] },
          { word: "divisive", phonetic: "diváisiv", pos: "形", meanings: ["意見を分裂させる、不和を起こす"], related: ["divide 動 分ける", "division 名 分裂"] },
          { word: "philosophical", phonetic: "fìləsɑ́fikəl", pos: "形", meanings: ["哲学的な"], related: ["philosophy 名 哲学"] }
        ]
      }
    ]
  },
  {
    section: 49,
    title: "History & Civilization",
    sentences: [
      {
        id: 521,
        en: "The ancient civilization flourished along the fertile banks of the river for over two millennia.",
        ja: "その古代文明は肥沃な川岸に沿って2千年以上にわたり繁栄した。",
        words: [
          { word: "ancient", phonetic: "éinʃənt", pos: "形", meanings: ["古代の、古い"], related: ["⇔ modern 現代の"] },
          { word: "civilization", phonetic: "sìvəlaizéiʃən", pos: "名", meanings: ["文明"], related: ["civilize 動 文明化する", "civil 形 市民の"] },
          { word: "flourish", phonetic: "flə́ːriʃ", pos: "動", meanings: ["繁栄する、栄える"], related: ["flourishing 形 繁栄している", "thrive/prosper"] },
          { word: "fertile", phonetic: "fə́ːrtl", pos: "形", meanings: ["肥沃な、多産な"], related: ["fertility 名 肥沃さ", "⇔ barren 不毛な"] },
          { word: "millennium", phonetic: "milέniəm", pos: "名", meanings: ["千年紀"], related: ["複数形 millennia"] }
        ]
      },
      {
        id: 522,
        en: "The revolution overthrew the monarchy and established a republic founded on the principles of liberty and equality.",
        ja: "革命は君主制を打倒し、自由と平等の原則に基づく共和国を樹立した。",
        words: [
          { word: "revolution", phonetic: "rèvəlúːʃən", pos: "名", meanings: ["革命"], related: ["revolutionary 形/名 革命的な/革命家", "revolt 動 反乱を起こす"] },
          { word: "overthrow", phonetic: "òuvərθróu", pos: "動", meanings: ["打倒する、転覆させる"], related: ["overthrew-overthrown"] },
          { word: "monarchy", phonetic: "mɑ́nərki", pos: "名", meanings: ["君主制、王政"], related: ["monarch 名 君主", "⇔ republic 共和国"] },
          { word: "establish", phonetic: "istǽbliʃ", pos: "動", meanings: ["設立する、確立する"], related: ["establishment 名 設立、体制"] },
          { word: "republic", phonetic: "ripʌ́blik", pos: "名", meanings: ["共和国"], related: ["republican 形/名 共和制の"] },
          { word: "principle", phonetic: "prínsəpl", pos: "名", meanings: ["原則、原理"], related: ["principal 形/名 主要な/校長"] }
        ]
      },
      {
        id: 523,
        en: "The empire expanded its territory through a series of conquests that spanned three continents.",
        ja: "その帝国は3つの大陸にまたがる一連の征服を通じて領土を拡大した。",
        words: [
          { word: "empire", phonetic: "émpaiər", pos: "名", meanings: ["帝国"], related: ["emperor 名 皇帝", "imperial 形 帝国の"] },
          { word: "territory", phonetic: "térətɔ̀ːri", pos: "名", meanings: ["領土、領域"], related: ["territorial 形 領土の"] },
          { word: "conquest", phonetic: "kɑ́ŋkwest", pos: "名", meanings: ["征服"], related: ["conquer 動 征服する", "conqueror 名 征服者"] },
          { word: "span", phonetic: "spǽn", pos: "動", meanings: ["またがる、及ぶ"], related: ["span 名 期間、範囲"] }
        ]
      },
      {
        id: 524,
        en: "The treaty that concluded the war imposed harsh reparations on the defeated nation, sowing the seeds of future resentment.",
        ja: "戦争を終結させた条約は敗戦国に厳しい賠償金を課し、将来の恨みの種をまいた。",
        words: [
          { word: "treaty", phonetic: "tríːti", pos: "名", meanings: ["条約"], related: ["peace treaty 平和条約"] },
          { word: "conclude", phonetic: "kənklúːd", pos: "動", meanings: ["終結させる、結論を出す"], related: ["conclusion 名 結論"] },
          { word: "harsh", phonetic: "hɑ́ːrʃ", pos: "形", meanings: ["厳しい、過酷な"], related: ["harshly 副 厳しく", "harshness 名 過酷さ"] },
          { word: "reparation", phonetic: "rèpəréiʃən", pos: "名", meanings: ["賠償、償い"], related: ["repair 動 修復する"] },
          { word: "defeat", phonetic: "difíːt", pos: "動", meanings: ["敗北させる"], related: ["defeat 名 敗北"] },
          { word: "resentment", phonetic: "rizéntmənt", pos: "名", meanings: ["恨み、憤り"], related: ["resent 動 恨む", "resentful 形 恨みのある"] }
        ]
      },
      {
        id: 525,
        en: "Archaeological excavations at the site uncovered artifacts dating back to the Bronze Age.",
        ja: "その遺跡での考古学的発掘調査は青銅器時代にさかのぼる工芸品を発見した。",
        words: [
          { word: "archaeological", phonetic: "ɑ̀ːrkiəlɑ́dʒikəl", pos: "形", meanings: ["考古学的な"], related: ["archaeology 名 考古学", "archaeologist 名 考古学者"] },
          { word: "excavation", phonetic: "èkskəvéiʃən", pos: "名", meanings: ["発掘、掘削"], related: ["excavate 動 発掘する"] },
          { word: "uncover", phonetic: "ʌnkʌ́vər", pos: "動", meanings: ["発見する、暴く"], related: ["discover/reveal"] },
          { word: "artifact", phonetic: "ɑ́ːrtəfæ̀kt", pos: "名", meanings: ["工芸品、人工物"], related: ["artificial 形 人工的な"] },
          { word: "date back to", phonetic: "déit bǽk tə", pos: "動", meanings: ["〜にさかのぼる"], related: ["date 名 日付、年代"] }
        ]
      },
      {
        id: 526,
        en: "The colonial powers exploited the natural resources of the occupied regions, leaving a legacy of economic disparity.",
        ja: "植民地勢力は占領地域の天然資源を搾取し、経済格差という遺産を残した。",
        words: [
          { word: "colonial", phonetic: "kəlóuniəl", pos: "形", meanings: ["植民地の"], related: ["colony 名 植民地", "colonize 動 植民地化する"] },
          { word: "exploit", phonetic: "iksplɔ́it", pos: "動", meanings: ["搾取する、利用する"], related: ["exploitation 名 搾取"] },
          { word: "occupy", phonetic: "ɑ́kjəpài", pos: "動", meanings: ["占領する、占める"], related: ["occupation 名 占領、職業"] },
          { word: "legacy", phonetic: "légəsi", pos: "名", meanings: ["遺産、遺物"], related: ["heritage/inheritance"] },
          { word: "disparity", phonetic: "dispǽrəti", pos: "名", meanings: ["格差、不均衡"], related: ["⇔ parity 同等、等価"] }
        ]
      },
      {
        id: 527,
        en: "The Renaissance marked a pivotal era in which art, literature, and scientific inquiry experienced an unprecedented revival.",
        ja: "ルネサンスは芸術、文学、科学的探究が前例のない復興を経験した極めて重要な時代であった。",
        words: [
          { word: "mark", phonetic: "mɑ́ːrk", pos: "動", meanings: ["印をつける、特徴づける"], related: ["mark 名 印、点数"] },
          { word: "pivotal", phonetic: "pívətl", pos: "形", meanings: ["極めて重要な、中枢の"], related: ["pivot 名 中心点、要"] },
          { word: "era", phonetic: "íərə", pos: "名", meanings: ["時代"], related: ["epoch/age/period"] },
          { word: "unprecedented", phonetic: "ʌnprésədèntid", pos: "形", meanings: ["前例のない"], related: ["precedent 名 前例"] },
          { word: "revival", phonetic: "riváivəl", pos: "名", meanings: ["復活、復興"], related: ["revive 動 復活させる"] }
        ]
      },
      {
        id: 528,
        en: "The historian documented the gradual decline of the feudal system as commerce and trade gained prominence.",
        ja: "歴史家は商業と貿易が重要性を増すにつれ封建制度が徐々に衰退した過程を記録した。",
        words: [
          { word: "historian", phonetic: "histɔ́ːriən", pos: "名", meanings: ["歴史家"], related: ["history 名 歴史", "historic 形 歴史的な"] },
          { word: "document", phonetic: "dɑ́kjəmènt", pos: "動", meanings: ["記録する、文書化する"], related: ["document 名 文書"] },
          { word: "gradual", phonetic: "grǽdʒuəl", pos: "形", meanings: ["徐々の、段階的な"], related: ["gradually 副 徐々に"] },
          { word: "decline", phonetic: "dikláin", pos: "名", meanings: ["衰退、減少"], related: ["decline 動 衰退する、断る"] },
          { word: "feudal", phonetic: "fjúːdl", pos: "形", meanings: ["封建の"], related: ["feudalism 名 封建制度"] },
          { word: "commerce", phonetic: "kɑ́mə̀ːrs", pos: "名", meanings: ["商業、通商"], related: ["commercial 形 商業の"] },
          { word: "prominence", phonetic: "prɑ́mənəns", pos: "名", meanings: ["重要性、卓越"], related: ["prominent 形 著名な、目立つ"] }
        ]
      },
      {
        id: 529,
        en: "The abolition of slavery was achieved only after decades of persistent advocacy and tremendous sacrifice.",
        ja: "奴隷制の廃止は数十年にわたる粘り強い擁護活動と多大な犠牲の末にようやく達成された。",
        words: [
          { word: "abolition", phonetic: "æ̀bəlíʃən", pos: "名", meanings: ["廃止、撤廃"], related: ["abolish 動 廃止する"] },
          { word: "slavery", phonetic: "sléivəri", pos: "名", meanings: ["奴隷制"], related: ["slave 名 奴隷", "enslave 動 奴隷にする"] },
          { word: "achieve", phonetic: "ətʃíːv", pos: "動", meanings: ["達成する"], related: ["achievement 名 達成"] },
          { word: "advocacy", phonetic: "ǽdvəkəsi", pos: "名", meanings: ["擁護、支持活動"], related: ["advocate 動/名 擁護する/支持者"] },
          { word: "tremendous", phonetic: "triméndəs", pos: "形", meanings: ["途方もない、巨大な"], related: ["tremendously 副 途方もなく"] },
          { word: "sacrifice", phonetic: "sǽkrəfàis", pos: "名", meanings: ["犠牲"], related: ["sacrifice 動 犠牲にする"] }
        ]
      },
      {
        id: 530,
        en: "The migration of peoples across borders has shaped the demographic and cultural landscape of every major region throughout history.",
        ja: "国境を越えた人々の移住は歴史を通じて全ての主要地域の人口構成と文化的景観を形作ってきた。",
        words: [
          { word: "migration", phonetic: "maigréiʃən", pos: "名", meanings: ["移住、移動"], related: ["migrate 動 移住する", "migrant 名 移住者"] },
          { word: "border", phonetic: "bɔ́ːrdər", pos: "名", meanings: ["国境、境界"], related: ["border 動 接する"] },
          { word: "shape", phonetic: "ʃéip", pos: "動", meanings: ["形作る、形成する"], related: ["shape 名 形"] },
          { word: "demographic", phonetic: "dèməgrǽfik", pos: "形", meanings: ["人口統計学の"], related: ["demography 名 人口統計学"] },
          { word: "landscape", phonetic: "lǽndskèip", pos: "名", meanings: ["景観、風景"], related: ["⇔ seascape 海景"] }
        ]
      }
    ]
  },
  {
    section: 50,
    title: "Art & Culture",
    sentences: [
      {
        id: 531,
        en: "The exhibition showcased a diverse collection of contemporary sculptures that challenged conventional aesthetic norms.",
        ja: "その展覧会は従来の美的規範に挑戦する多様な現代彫刻のコレクションを展示した。",
        words: [
          { word: "exhibition", phonetic: "èksəbíʃən", pos: "名", meanings: ["展覧会、展示"], related: ["exhibit 動 展示する", "exhibit 名 展示品"] },
          { word: "showcase", phonetic: "ʃóukèis", pos: "動", meanings: ["展示する、披露する"], related: ["showcase 名 陳列棚"] },
          { word: "diverse", phonetic: "daivə́ːrs", pos: "形", meanings: ["多様な"], related: ["diversity 名 多様性", "diversify 動 多様化する"] },
          { word: "contemporary", phonetic: "kəntémpərèri", pos: "形", meanings: ["現代の、同時代の"], related: ["⇔ ancient 古代の"] },
          { word: "sculpture", phonetic: "skʌ́lptʃər", pos: "名", meanings: ["彫刻"], related: ["sculptor 名 彫刻家", "sculpt 動 彫刻する"] },
          { word: "aesthetic", phonetic: "esθétik", pos: "形", meanings: ["美的な、美学の"], related: ["aesthetics 名 美学"] }
        ]
      },
      {
        id: 532,
        en: "The composer drew inspiration from traditional folk melodies and wove them into an elaborate orchestral symphony.",
        ja: "その作曲家は伝統的な民謡からインスピレーションを得て、それらを精巧な管弦楽交響曲に織り込んだ。",
        words: [
          { word: "composer", phonetic: "kəmpóuzər", pos: "名", meanings: ["作曲家"], related: ["compose 動 作曲する、構成する", "composition 名 作曲、構成"] },
          { word: "inspiration", phonetic: "ìnspəréiʃən", pos: "名", meanings: ["インスピレーション、霊感"], related: ["inspire 動 鼓舞する、着想を与える"] },
          { word: "folk", phonetic: "fóuk", pos: "形", meanings: ["民間の、民衆の"], related: ["folklore 名 民間伝承"] },
          { word: "melody", phonetic: "mélədi", pos: "名", meanings: ["メロディー、旋律"], related: ["melodic 形 旋律の"] },
          { word: "weave", phonetic: "wíːv", pos: "動", meanings: ["織る、組み合わせる"], related: ["wove-woven"] },
          { word: "elaborate", phonetic: "ilǽbərət", pos: "形", meanings: ["精巧な、手の込んだ"], related: ["elaborate 動 詳しく述べる"] }
        ]
      },
      {
        id: 533,
        en: "The novelist's debut work received widespread acclaim for its vivid depiction of rural life in the postwar era.",
        ja: "その小説家のデビュー作は戦後の農村生活の鮮明な描写で広く称賛を受けた。",
        words: [
          { word: "novelist", phonetic: "nɑ́vəlist", pos: "名", meanings: ["小説家"], related: ["novel 名 小説"] },
          { word: "debut", phonetic: "debjúː", pos: "名", meanings: ["デビュー、初登場"], related: [] },
          { word: "acclaim", phonetic: "əkléim", pos: "名", meanings: ["称賛、喝采"], related: ["acclaim 動 称賛する", "acclaimed 形 絶賛された"] },
          { word: "depiction", phonetic: "dipíkʃən", pos: "名", meanings: ["描写"], related: ["depict 動 描写する"] },
          { word: "rural", phonetic: "rúərəl", pos: "形", meanings: ["農村の、田舎の"], related: ["⇔ urban 都会の"] },
          { word: "postwar", phonetic: "póustwɔ̀ːr", pos: "形", meanings: ["戦後の"], related: ["⇔ prewar 戦前の"] }
        ]
      },
      {
        id: 534,
        en: "The curator carefully restored the faded Renaissance painting, preserving its original palette and brushwork.",
        ja: "学芸員は色褪せたルネサンス絵画を慎重に修復し、本来の色彩と筆致を保存した。",
        words: [
          { word: "curator", phonetic: "kjuəréitər", pos: "名", meanings: ["学芸員、キュレーター"], related: ["curate 動 企画する"] },
          { word: "restore", phonetic: "ristɔ́ːr", pos: "動", meanings: ["修復する、復元する"], related: ["restoration 名 修復"] },
          { word: "fade", phonetic: "féid", pos: "動", meanings: ["色褪せる、薄れる"], related: ["faded 形 色褪せた"] },
          { word: "palette", phonetic: "pǽlət", pos: "名", meanings: ["パレット、色彩"], related: [] },
          { word: "brushwork", phonetic: "brʌ́ʃwə̀ːrk", pos: "名", meanings: ["筆致、筆使い"], related: ["brush 名 筆"] }
        ]
      },
      {
        id: 535,
        en: "Street art has evolved from mere vandalism into a legitimate form of cultural expression embraced by galleries worldwide.",
        ja: "ストリートアートは単なる破壊行為から世界中のギャラリーに受け入れられる正当な文化的表現の形へと進化した。",
        words: [
          { word: "evolve", phonetic: "ivɑ́lv", pos: "動", meanings: ["進化する、発展する"], related: ["evolution 名 進化"] },
          { word: "vandalism", phonetic: "vǽndəlìzm", pos: "名", meanings: ["破壊行為、器物損壊"], related: ["vandal 名 破壊者", "vandalize 動 破壊する"] },
          { word: "legitimate", phonetic: "lidʒítəmət", pos: "形", meanings: ["正当な、合法的な"], related: ["legitimacy 名 正当性", "⇔ illegitimate 不当な"] },
          { word: "embrace", phonetic: "imbréis", pos: "動", meanings: ["受け入れる、抱きしめる"], related: ["embrace 名 抱擁"] },
          { word: "gallery", phonetic: "gǽləri", pos: "名", meanings: ["ギャラリー、画廊"], related: [] }
        ]
      },
      {
        id: 536,
        en: "The playwright crafted a gripping drama that explored the tension between individual ambition and collective responsibility.",
        ja: "その劇作家は個人の野心と集団の責任の間の緊張を探求する、引き込まれるドラマを作り上げた。",
        words: [
          { word: "playwright", phonetic: "pléiràit", pos: "名", meanings: ["劇作家"], related: ["play 名 劇"] },
          { word: "craft", phonetic: "krǽft", pos: "動", meanings: ["巧みに作る"], related: ["craft 名 技術、工芸"] },
          { word: "gripping", phonetic: "grípiŋ", pos: "形", meanings: ["引き込まれる、手に汗握る"], related: ["grip 動 つかむ", "grip 名 握り"] },
          { word: "ambition", phonetic: "æmbíʃən", pos: "名", meanings: ["野心、大志"], related: ["ambitious 形 野心的な"] },
          { word: "collective", phonetic: "kəléktiv", pos: "形", meanings: ["集団の、集合的な"], related: ["collect 動 集める", "collection 名 収集"] }
        ]
      },
      {
        id: 537,
        en: "The documentary traced the origins of jazz, highlighting its roots in African musical traditions and improvisation.",
        ja: "そのドキュメンタリーはジャズの起源をたどり、アフリカの音楽的伝統と即興演奏にそのルーツがあることを強調した。",
        words: [
          { word: "trace", phonetic: "tréis", pos: "動", meanings: ["たどる、追跡する"], related: ["trace 名 跡、痕跡"] },
          { word: "origin", phonetic: "ɔ́ridʒin", pos: "名", meanings: ["起源"], related: ["original 形 元の、独創的な", "originate 動 起こる"] },
          { word: "highlight", phonetic: "háilàit", pos: "動", meanings: ["強調する、目立たせる"], related: ["highlight 名 ハイライト"] },
          { word: "root", phonetic: "rúːt", pos: "名", meanings: ["根、ルーツ"], related: ["rooted 形 根ざした"] },
          { word: "tradition", phonetic: "trədíʃən", pos: "名", meanings: ["伝統"], related: ["traditional 形 伝統的な"] },
          { word: "improvisation", phonetic: "ìmprəvəzéiʃən", pos: "名", meanings: ["即興演奏、即興"], related: ["improvise 動 即興で行う"] }
        ]
      },
      {
        id: 538,
        en: "Critics praised the film for its stunning cinematography and its nuanced portrayal of cultural identity.",
        ja: "批評家たちはその映画の見事な撮影技術と文化的アイデンティティの繊細な描写を称賛した。",
        words: [
          { word: "critic", phonetic: "krítik", pos: "名", meanings: ["批評家"], related: ["criticism 名 批評", "critical 形 批判的な"] },
          { word: "praise", phonetic: "préiz", pos: "動", meanings: ["称賛する"], related: ["praise 名 称賛", "⇔ criticize 批判する"] },
          { word: "stunning", phonetic: "stʌ́niŋ", pos: "形", meanings: ["見事な、驚くほど美しい"], related: ["stun 動 驚かせる"] },
          { word: "nuanced", phonetic: "njúːɑːnst", pos: "形", meanings: ["微妙な、ニュアンスのある"], related: ["nuance 名 ニュアンス"] },
          { word: "identity", phonetic: "aidéntəti", pos: "名", meanings: ["アイデンティティ、身元"], related: ["identify 動 特定する", "identical 形 同一の"] }
        ]
      },
      {
        id: 539,
        en: "The architect designed the museum to blend harmoniously with the surrounding heritage district.",
        ja: "建築家はその美術館を周囲の歴史地区と調和するように設計した。",
        words: [
          { word: "architect", phonetic: "ɑ́ːrkətèkt", pos: "名", meanings: ["建築家"], related: ["architecture 名 建築", "architectural 形 建築の"] },
          { word: "design", phonetic: "dizáin", pos: "動", meanings: ["設計する、デザインする"], related: ["design 名 設計", "designer 名 デザイナー"] },
          { word: "blend", phonetic: "blénd", pos: "動", meanings: ["溶け合う、混ぜる"], related: ["blend 名 混合"] },
          { word: "harmoniously", phonetic: "hɑːrmóuniəsli", pos: "副", meanings: ["調和して"], related: ["harmony 名 調和", "harmonious 形 調和した"] },
          { word: "heritage", phonetic: "héritidʒ", pos: "名", meanings: ["遺産、伝統"], related: ["inherit 動 受け継ぐ", "inheritance 名 相続"] }
        ]
      },
      {
        id: 540,
        en: "The annual festival attracts thousands of spectators who come to appreciate performances ranging from opera to avant-garde theater.",
        ja: "その年次フェスティバルはオペラから前衛演劇まで幅広い公演を鑑賞しに来る何千人もの観客を引きつける。",
        words: [
          { word: "annual", phonetic: "ǽnjuəl", pos: "形", meanings: ["年次の、毎年の"], related: ["annually 副 毎年"] },
          { word: "festival", phonetic: "féstəvəl", pos: "名", meanings: ["祭り、フェスティバル"], related: ["festive 形 祝祭の"] },
          { word: "attract", phonetic: "ətrǽkt", pos: "動", meanings: ["引きつける、魅了する"], related: ["attraction 名 魅力", "attractive 形 魅力的な"] },
          { word: "spectator", phonetic: "spékteitər", pos: "名", meanings: ["観客、傍観者"], related: ["spectacle 名 見もの、光景"] },
          { word: "appreciate", phonetic: "əpríːʃièit", pos: "動", meanings: ["鑑賞する、正しく評価する、感謝する"], related: ["appreciation 名 鑑賞、感謝"] },
          { word: "performance", phonetic: "pərfɔ́ːrməns", pos: "名", meanings: ["公演、演技、成績"], related: ["perform 動 演じる、実行する"] }
        ]
      }
    ]
  },
  {
    section: 51,
    title: "Transportation & Urban Life",
    sentences: [
      {
        id: 541,
        en: "The congestion in the metropolitan area has worsened significantly despite the expansion of public transit networks.",
        ja: "公共交通網の拡張にもかかわらず、大都市圏の渋滞は著しく悪化した。",
        words: [
          { word: "congestion", phonetic: "kəndʒéstʃən", pos: "名", meanings: ["渋滞、混雑"], related: ["congest 動 混雑させる", "congested 形 混雑した"] },
          { word: "metropolitan", phonetic: "mètrəpɑ́lətən", pos: "形", meanings: ["大都市の"], related: ["metropolis 名 大都市"] },
          { word: "worsen", phonetic: "wə́ːrsn", pos: "動", meanings: ["悪化する、悪化させる"], related: ["worse 形 より悪い", "worst 形 最悪の"] },
          { word: "transit", phonetic: "trǽnzit", pos: "名", meanings: ["交通、輸送"], related: ["transition 名 移行", "public transit 公共交通"] }
        ]
      },
      {
        id: 542,
        en: "Commuters who reside in the suburbs often spend over two hours a day traveling to and from the city center.",
        ja: "郊外に住む通勤者は都心への往復に毎日2時間以上費やすことが多い。",
        words: [
          { word: "commuter", phonetic: "kəmjúːtər", pos: "名", meanings: ["通勤者"], related: ["commute 動 通勤する", "commute 名 通勤"] },
          { word: "reside", phonetic: "rizáid", pos: "動", meanings: ["居住する"], related: ["residence 名 住居", "resident 名 住民"] },
          { word: "suburb", phonetic: "sʌ́bəːrb", pos: "名", meanings: ["郊外"], related: ["suburban 形 郊外の", "⇔ urban 都会の"] }
        ]
      },
      {
        id: 543,
        en: "The municipality allocated a substantial budget to renovate deteriorating infrastructure, including bridges and tunnels.",
        ja: "市当局は橋やトンネルを含む劣化したインフラの改修に多額の予算を配分した。",
        words: [
          { word: "municipality", phonetic: "mjuːnìsəpǽləti", pos: "名", meanings: ["自治体、市当局"], related: ["municipal 形 市の、自治体の"] },
          { word: "allocate", phonetic: "ǽləkèit", pos: "動", meanings: ["配分する、割り当てる"], related: ["allocation 名 配分"] },
          { word: "renovate", phonetic: "rénəvèit", pos: "動", meanings: ["改修する、修復する"], related: ["renovation 名 改修"] },
          { word: "infrastructure", phonetic: "ínfrəstrʌ̀ktʃər", pos: "名", meanings: ["インフラ、社会基盤"], related: ["structure 名 構造"] },
          { word: "tunnel", phonetic: "tʌ́nl", pos: "名", meanings: ["トンネル"], related: [] }
        ]
      },
      {
        id: 544,
        en: "Autonomous vehicles are expected to revolutionize urban transportation by reducing accidents caused by human error.",
        ja: "自律走行車はヒューマンエラーによる事故を減らし都市交通に革命を起こすと期待されている。",
        words: [
          { word: "autonomous", phonetic: "ɔːtɑ́nəməs", pos: "形", meanings: ["自律的な、自治の"], related: ["autonomy 名 自律、自治"] },
          { word: "vehicle", phonetic: "víːəkl", pos: "名", meanings: ["車両、乗り物"], related: ["motor vehicle 自動車"] },
          { word: "revolutionize", phonetic: "rèvəlúːʃənàiz", pos: "動", meanings: ["革命を起こす、一変させる"], related: ["revolution 名 革命"] },
          { word: "accident", phonetic: "ǽksədənt", pos: "名", meanings: ["事故"], related: ["accidental 形 偶然の", "accidentally 副 偶然に"] }
        ]
      },
      {
        id: 545,
        en: "Pedestrians are urged to use designated crosswalks, particularly during rush hour when visibility is poor.",
        ja: "歩行者は、特に視界が悪いラッシュアワー時には指定の横断歩道を使うよう求められている。",
        words: [
          { word: "pedestrian", phonetic: "pədéstriən", pos: "名", meanings: ["歩行者"], related: ["pedestrian 形 歩行者の、平凡な"] },
          { word: "designated", phonetic: "dézignèitid", pos: "形", meanings: ["指定された"], related: ["designate 動 指定する", "designation 名 指定"] },
          { word: "crosswalk", phonetic: "krɔ́ːswɔ̀ːk", pos: "名", meanings: ["横断歩道"], related: ["crossing 名 交差点"] },
          { word: "rush hour", phonetic: "rʌ́ʃ àuər", pos: "名", meanings: ["ラッシュアワー、通勤ピーク時間"], related: ["rush 名/動 急ぐ"] },
          { word: "visibility", phonetic: "vìzəbíləti", pos: "名", meanings: ["視界、可視性"], related: ["visible 形 目に見える", "⇔ invisible 見えない"] }
        ]
      },
      {
        id: 546,
        en: "The freight industry relies heavily on an extensive network of highways and railways to distribute goods nationwide.",
        ja: "貨物業界は全国に商品を流通させるために広大な高速道路と鉄道網に大きく依存している。",
        words: [
          { word: "freight", phonetic: "fréit", pos: "名", meanings: ["貨物、運賃"], related: ["freight 動 輸送する", "cargo 名 積み荷"] },
          { word: "rely on", phonetic: "rilái ɑn", pos: "動", meanings: ["〜に頼る、依存する"], related: ["reliable 形 信頼できる", "reliance 名 依存"] },
          { word: "extensive", phonetic: "iksténsiv", pos: "形", meanings: ["広大な、大規模な"], related: ["extend 動 広げる", "extent 名 範囲"] },
          { word: "highway", phonetic: "háiwèi", pos: "名", meanings: ["幹線道路、高速道路"], related: ["freeway/expressway"] },
          { word: "distribute", phonetic: "distríbjuːt", pos: "動", meanings: ["流通させる、配布する"], related: ["distribution 名 流通", "distributor 名 販売業者"] }
        ]
      },
      {
        id: 547,
        en: "The aviation authority grounded all flights following reports of a potential mechanical defect in the aircraft's engine.",
        ja: "航空当局は航空機のエンジンに潜在的な機械的欠陥があるとの報告を受け、全便を運航停止にした。",
        words: [
          { word: "aviation", phonetic: "èiviéiʃən", pos: "名", meanings: ["航空"], related: ["aviator 名 飛行士"] },
          { word: "ground", phonetic: "gráund", pos: "動", meanings: ["（飛行機を）離陸させない、運航停止にする"], related: ["ground 名 地面"] },
          { word: "flight", phonetic: "fláit", pos: "名", meanings: ["飛行、便"], related: ["fly 動 飛ぶ"] },
          { word: "mechanical", phonetic: "mekǽnikəl", pos: "形", meanings: ["機械的な"], related: ["mechanic 名 整備士", "mechanism 名 仕組み"] },
          { word: "defect", phonetic: "díːfekt", pos: "名", meanings: ["欠陥、欠点"], related: ["defective 形 欠陥のある", "⇔ intact 無傷の"] },
          { word: "aircraft", phonetic: "éərkræ̀ft", pos: "名", meanings: ["航空機"], related: ["単複同形"] }
        ]
      },
      {
        id: 548,
        en: "Urban planners advocate for mixed-use zoning that integrates residential, commercial, and recreational spaces within walking distance.",
        ja: "都市計画者は住宅、商業、レクリエーション空間を徒歩圏内に統合する混合用途ゾーニングを提唱している。",
        words: [
          { word: "planner", phonetic: "plǽnər", pos: "名", meanings: ["計画者、プランナー"], related: ["plan 名/動 計画"] },
          { word: "advocate", phonetic: "ǽdvəkèit", pos: "動", meanings: ["提唱する、支持する"], related: ["advocate 名 支持者", "advocacy 名 擁護"] },
          { word: "integrate", phonetic: "íntəgrèit", pos: "動", meanings: ["統合する"], related: ["integration 名 統合", "⇔ segregate 分離する"] },
          { word: "residential", phonetic: "rèzidénʃəl", pos: "形", meanings: ["住宅の"], related: ["reside 動 住む", "residence 名 住居"] },
          { word: "recreational", phonetic: "rèkriéiʃənl", pos: "形", meanings: ["レクリエーションの、娯楽の"], related: ["recreation 名 レクリエーション"] }
        ]
      },
      {
        id: 549,
        en: "The shipping company's fleet of cargo vessels transports millions of containers across the Pacific Ocean each year.",
        ja: "その海運会社の貨物船団は毎年太平洋を越えて数百万のコンテナを輸送している。",
        words: [
          { word: "fleet", phonetic: "flíːt", pos: "名", meanings: ["艦隊、船団、車両群"], related: [] },
          { word: "cargo", phonetic: "kɑ́ːrgou", pos: "名", meanings: ["積み荷、貨物"], related: ["freight/shipment"] },
          { word: "vessel", phonetic: "vésl", pos: "名", meanings: ["船舶、容器"], related: ["ship/boat"] },
          { word: "transport", phonetic: "trænspɔ́ːrt", pos: "動", meanings: ["輸送する"], related: ["transportation 名 輸送"] },
          { word: "container", phonetic: "kəntéinər", pos: "名", meanings: ["コンテナ、容器"], related: ["contain 動 含む"] }
        ]
      },
      {
        id: 550,
        en: "The fare increase sparked public outrage, prompting protesters to demand affordable and accessible mass transportation.",
        ja: "運賃の値上げは世論の怒りを引き起こし、抗議者たちに手頃で利用しやすい大量輸送機関を求めさせた。",
        words: [
          { word: "fare", phonetic: "féər", pos: "名", meanings: ["運賃、料金"], related: ["fare 動 やっていく"] },
          { word: "spark", phonetic: "spɑ́ːrk", pos: "動", meanings: ["引き起こす、火花を散らす"], related: ["spark 名 火花、きっかけ"] },
          { word: "outrage", phonetic: "áutrèidʒ", pos: "名", meanings: ["怒り、憤慨"], related: ["outrage 動 憤慨させる", "outrageous 形 言語道断の"] },
          { word: "protester", phonetic: "prətéstər", pos: "名", meanings: ["抗議者"], related: ["protest 名/動 抗議"] },
          { word: "affordable", phonetic: "əfɔ́ːrdəbl", pos: "形", meanings: ["手頃な、入手可能な"], related: ["afford 動 余裕がある"] },
          { word: "accessible", phonetic: "æksésəbl", pos: "形", meanings: ["利用しやすい、近づきやすい"], related: ["access 名 アクセス", "⇔ inaccessible"] }
        ]
      }
    ]
  },
  {
    section: 52,
    title: "Relationships & Social Dynamics",
    sentences: [
      {
        id: 551,
        en: "Mutual trust is the cornerstone of any lasting relationship, whether personal or professional.",
        ja: "相互信頼は個人的であれ仕事上であれ、あらゆる永続的な関係の礎である。",
        words: [
          { word: "mutual", phonetic: "mjúːtʃuəl", pos: "形", meanings: ["相互の、共通の"], related: ["mutually 副 互いに"] },
          { word: "trust", phonetic: "trʌ́st", pos: "名", meanings: ["信頼"], related: ["trust 動 信頼する", "trustworthy 形 信頼できる"] },
          { word: "cornerstone", phonetic: "kɔ́ːrnərstòun", pos: "名", meanings: ["礎、基盤"], related: ["foundation/basis"] },
          { word: "lasting", phonetic: "lǽstiŋ", pos: "形", meanings: ["永続的な、持続する"], related: ["last 動 続く", "⇔ temporary 一時的な"] }
        ]
      },
      {
        id: 552,
        en: "The couple decided to reconcile after a prolonged estrangement, acknowledging that compromise was essential.",
        ja: "夫婦は長期の疎遠の後に和解を決意し、妥協が不可欠であることを認めた。",
        words: [
          { word: "reconcile", phonetic: "rékənsàil", pos: "動", meanings: ["和解する、調和させる"], related: ["reconciliation 名 和解"] },
          { word: "estrangement", phonetic: "istréindʒmənt", pos: "名", meanings: ["疎遠、仲たがい"], related: ["estrange 動 疎遠にする"] },
          { word: "acknowledge", phonetic: "æknɑ́lidʒ", pos: "動", meanings: ["認める、了承する"], related: ["acknowledgment 名 承認"] },
          { word: "compromise", phonetic: "kɑ́mprəmàiz", pos: "名", meanings: ["妥協、歩み寄り"], related: ["compromise 動 妥協する"] },
          { word: "essential", phonetic: "isénʃəl", pos: "形", meanings: ["不可欠な、本質的な"], related: ["essence 名 本質", "essentially 副 本質的に"] }
        ]
      },
      {
        id: 553,
        en: "Gossip can be remarkably destructive, as it erodes reputations and breeds mistrust among colleagues.",
        ja: "うわさ話は評判を蝕み同僚間の不信を生むため、驚くほど破壊的になりうる。",
        words: [
          { word: "gossip", phonetic: "gɑ́səp", pos: "名", meanings: ["うわさ話、ゴシップ"], related: ["gossip 動 うわさ話をする"] },
          { word: "remarkably", phonetic: "rimɑ́ːrkəbli", pos: "副", meanings: ["驚くほど、著しく"], related: ["remarkable 形 注目すべき"] },
          { word: "destructive", phonetic: "distrʌ́ktiv", pos: "形", meanings: ["破壊的な"], related: ["destroy 動 破壊する", "destruction 名 破壊", "⇔ constructive 建設的な"] },
          { word: "reputation", phonetic: "rèpjutéiʃən", pos: "名", meanings: ["評判、名声"], related: ["reputable 形 評判の良い"] },
          { word: "breed", phonetic: "bríːd", pos: "動", meanings: ["生む、繁殖させる"], related: ["bred-bred", "breed 名 品種"] },
          { word: "mistrust", phonetic: "mistrʌ́st", pos: "名", meanings: ["不信"], related: ["mistrust 動 不信を抱く", "⇔ trust 信頼"] }
        ]
      },
      {
        id: 554,
        en: "She confided in her closest companion about the dilemma she was facing at work.",
        ja: "彼女は仕事で直面しているジレンマについて最も親しい仲間に打ち明けた。",
        words: [
          { word: "confide", phonetic: "kənfáid", pos: "動", meanings: ["打ち明ける、信頼して話す"], related: ["confidence 名 信頼、自信", "confidential 形 機密の"] },
          { word: "companion", phonetic: "kəmpǽnjən", pos: "名", meanings: ["仲間、連れ"], related: ["companionship 名 交友、仲間関係"] },
          { word: "dilemma", phonetic: "diléma", pos: "名", meanings: ["ジレンマ、板挟み"], related: ["predicament/quandary"] },
          { word: "face", phonetic: "féis", pos: "動", meanings: ["直面する、向き合う"], related: ["face 名 顔、表面"] }
        ]
      },
      {
        id: 555,
        en: "The mediator helped the feuding neighbors reach a settlement without resorting to costly litigation.",
        ja: "調停者は争っている隣人たちが費用のかかる訴訟に頼ることなく和解に達するのを助けた。",
        words: [
          { word: "mediator", phonetic: "míːdiètər", pos: "名", meanings: ["調停者、仲介者"], related: ["mediate 動 調停する", "mediation 名 調停"] },
          { word: "feud", phonetic: "fjúːd", pos: "動", meanings: ["争う、確執を持つ"], related: ["feud 名 確執、争い"] },
          { word: "settlement", phonetic: "sétlmənt", pos: "名", meanings: ["和解、解決、定住"], related: ["settle 動 解決する、定住する"] },
          { word: "resort to", phonetic: "rizɔ́ːrt tə", pos: "動", meanings: ["〜に訴える、〜に頼る"], related: ["resort 名 行楽地、手段"] },
          { word: "litigation", phonetic: "lìtəgéiʃən", pos: "名", meanings: ["訴訟"], related: ["litigate 動 訴訟を起こす", "lawsuit 名 訴訟"] }
        ]
      },
      {
        id: 556,
        en: "Peer pressure during adolescence can compel young people to engage in reckless behavior they would otherwise avoid.",
        ja: "青年期の仲間からの圧力は若者を本来なら避けるはずの無謀な行動に駆り立てることがある。",
        words: [
          { word: "pressure", phonetic: "préʃər", pos: "名", meanings: ["圧力、プレッシャー"], related: ["pressure 動 圧力をかける", "pressurize 動 加圧する"] },
          { word: "compel", phonetic: "kəmpél", pos: "動", meanings: ["強いる、駆り立てる"], related: ["compelling 形 説得力のある"] },
          { word: "engage in", phonetic: "ingéidʒ in", pos: "動", meanings: ["〜に従事する、〜に携わる"], related: ["engagement 名 従事、婚約"] },
          { word: "reckless", phonetic: "réklis", pos: "形", meanings: ["無謀な、向こう見ずな"], related: ["recklessly 副 無謀に", "recklessness 名 無謀さ"] },
          { word: "otherwise", phonetic: "ʌ́ðərwàiz", pos: "副", meanings: ["さもなければ、その他の点では"], related: [] }
        ]
      },
      {
        id: 557,
        en: "The generous donation from the anonymous benefactor enabled the orphanage to accommodate twice as many children.",
        ja: "匿名の慈善家からの寛大な寄付により、孤児院は2倍の子供を収容できるようになった。",
        words: [
          { word: "generous", phonetic: "dʒénərəs", pos: "形", meanings: ["寛大な、気前のよい"], related: ["generosity 名 寛大さ"] },
          { word: "donation", phonetic: "dounéiʃən", pos: "名", meanings: ["寄付"], related: ["donate 動 寄付する", "donor 名 寄贈者"] },
          { word: "anonymous", phonetic: "ənɑ́nəməs", pos: "形", meanings: ["匿名の"], related: ["anonymity 名 匿名性"] },
          { word: "benefactor", phonetic: "bénəfæ̀ktər", pos: "名", meanings: ["慈善家、恩人"], related: ["benefit 名 利益", "beneficial 形 有益な"] },
          { word: "accommodate", phonetic: "əkɑ́mədèit", pos: "動", meanings: ["収容する、適応させる"], related: ["accommodation 名 宿泊施設、適応"] }
        ]
      },
      {
        id: 558,
        en: "His arrogant demeanor alienated most of his peers, leaving him increasingly isolated within the organization.",
        ja: "彼の傲慢な態度はほとんどの同僚を遠ざけ、組織内でますます孤立させた。",
        words: [
          { word: "arrogant", phonetic: "ǽrəgənt", pos: "形", meanings: ["傲慢な、横柄な"], related: ["arrogance 名 傲慢", "⇔ humble 謙虚な"] },
          { word: "demeanor", phonetic: "dimíːnər", pos: "名", meanings: ["態度、振る舞い"], related: ["behavior/conduct"] },
          { word: "alienate", phonetic: "éiliənèit", pos: "動", meanings: ["疎外する、遠ざける"], related: ["alienation 名 疎外"] },
          { word: "isolated", phonetic: "áisəlèitid", pos: "形", meanings: ["孤立した"], related: ["isolate 動 孤立させる", "isolation 名 孤立"] }
        ]
      },
      {
        id: 559,
        en: "Volunteering at the community shelter fostered a sense of solidarity among participants from vastly different backgrounds.",
        ja: "地域のシェルターでのボランティア活動は全く異なる背景を持つ参加者の間に連帯感を育んだ。",
        words: [
          { word: "volunteer", phonetic: "vɑ̀ləntíər", pos: "動", meanings: ["ボランティアをする"], related: ["volunteer 名 ボランティア", "voluntary 形 自発的な"] },
          { word: "community", phonetic: "kəmjúːnəti", pos: "名", meanings: ["地域社会、共同体"], related: ["communal 形 共同の"] },
          { word: "foster", phonetic: "fɔ́ːstər", pos: "動", meanings: ["育む、促進する"], related: ["foster 形 里親の"] },
          { word: "solidarity", phonetic: "sɑ̀lədǽrəti", pos: "名", meanings: ["連帯、結束"], related: ["solid 形 固い、堅実な"] },
          { word: "background", phonetic: "bǽkgràund", pos: "名", meanings: ["背景、経歴"], related: ["⇔ foreground 前景"] }
        ]
      },
      {
        id: 560,
        en: "The psychologist noted that prolonged loneliness can be as detrimental to health as smoking fifteen cigarettes a day.",
        ja: "心理学者は長期的な孤独は1日15本の喫煙と同じくらい健康に有害であり得ると指摘した。",
        words: [
          { word: "note", phonetic: "nóut", pos: "動", meanings: ["指摘する、注意する"], related: ["note 名 注記、メモ", "notable 形 注目すべき"] },
          { word: "loneliness", phonetic: "lóunlinis", pos: "名", meanings: ["孤独"], related: ["lonely 形 孤独な", "alone 形 一人の"] },
          { word: "detrimental", phonetic: "dètrəméntl", pos: "形", meanings: ["有害な、不利な"], related: ["detriment 名 損害", "harmful/damaging"] },
          { word: "health", phonetic: "hélθ", pos: "名", meanings: ["健康"], related: ["healthy 形 健康な", "⇔ unhealthy 不健康な"] }
        ]
      }
    ]
  },
  {
    section: 53,
    title: "Crime & Justice",
    sentences: [
      {
        id: 561,
        en: "The suspect was apprehended by detectives shortly after fleeing the scene of the robbery.",
        ja: "容疑者は強盗現場から逃走した直後に刑事たちに逮捕された。",
        words: [
          { word: "suspect", phonetic: "sʌ́spekt", pos: "名", meanings: ["容疑者"], related: ["suspect 動 疑う", "suspicion 名 疑い", "suspicious 形 疑わしい"] },
          { word: "apprehend", phonetic: "æ̀prihénd", pos: "動", meanings: ["逮捕する、理解する"], related: ["apprehension 名 逮捕、不安"] },
          { word: "detective", phonetic: "ditéktiv", pos: "名", meanings: ["刑事、探偵"], related: ["detect 動 探知する"] },
          { word: "flee", phonetic: "flíː", pos: "動", meanings: ["逃げる"], related: ["fled-fled", "flight 名 逃走"] },
          { word: "robbery", phonetic: "rɑ́bəri", pos: "名", meanings: ["強盗"], related: ["rob 動 奪う", "robber 名 強盗犯"] }
        ]
      },
      {
        id: 562,
        en: "The defendant pleaded not guilty, claiming that the prosecution's evidence was entirely circumstantial.",
        ja: "被告は無罪を主張し、検察の証拠は全て状況証拠にすぎないと訴えた。",
        words: [
          { word: "defendant", phonetic: "diféndənt", pos: "名", meanings: ["被告"], related: ["defend 動 弁護する", "⇔ plaintiff 原告"] },
          { word: "plead", phonetic: "plíːd", pos: "動", meanings: ["弁護する、嘆願する、答弁する"], related: ["plea 名 嘆願、答弁"] },
          { word: "guilty", phonetic: "gílti", pos: "形", meanings: ["有罪の、罪を犯した"], related: ["guilt 名 有罪、罪悪感", "⇔ innocent 無罪の"] },
          { word: "prosecution", phonetic: "prɑ̀səkjúːʃən", pos: "名", meanings: ["起訴、検察側"], related: ["prosecute 動 起訴する", "prosecutor 名 検察官"] },
          { word: "evidence", phonetic: "évədəns", pos: "名", meanings: ["証拠"], related: ["evident 形 明らかな"] },
          { word: "circumstantial", phonetic: "sə̀ːrkəmstǽnʃəl", pos: "形", meanings: ["状況の、間接的な"], related: ["circumstance 名 状況"] }
        ]
      },
      {
        id: 563,
        en: "The jury deliberated for three days before reaching a unanimous verdict of acquittal.",
        ja: "陪審員は3日間審議した後、全員一致で無罪の評決に達した。",
        words: [
          { word: "jury", phonetic: "dʒúəri", pos: "名", meanings: ["陪審員団"], related: ["juror 名 陪審員"] },
          { word: "deliberate", phonetic: "dilíbərèit", pos: "動", meanings: ["審議する、熟考する"], related: ["deliberation 名 審議", "deliberate 形 故意の"] },
          { word: "unanimous", phonetic: "junǽnəməs", pos: "形", meanings: ["全員一致の"], related: ["unanimously 副 満場一致で"] },
          { word: "verdict", phonetic: "və́ːrdikt", pos: "名", meanings: ["評決、判定"], related: ["judgment/ruling"] },
          { word: "acquittal", phonetic: "əkwítl", pos: "名", meanings: ["無罪放免"], related: ["acquit 動 無罪にする", "⇔ conviction 有罪判決"] }
        ]
      },
      {
        id: 564,
        en: "The witness testified under oath that she had seen the accused entering the premises on the night in question.",
        ja: "証人は宣誓のもとで、問題の夜に被告人が施設に入るのを見たと証言した。",
        words: [
          { word: "witness", phonetic: "wítnis", pos: "名", meanings: ["証人、目撃者"], related: ["witness 動 目撃する"] },
          { word: "testify", phonetic: "téstəfài", pos: "動", meanings: ["証言する"], related: ["testimony 名 証言"] },
          { word: "oath", phonetic: "óuθ", pos: "名", meanings: ["宣誓、誓い"], related: ["under oath 宣誓のもとで"] },
          { word: "accused", phonetic: "əkjúːzd", pos: "名", meanings: ["被告人"], related: ["accuse 動 告発する", "accusation 名 告発"] },
          { word: "premises", phonetic: "prémisiz", pos: "名", meanings: ["敷地、施設"], related: ["on the premises 敷地内で"] }
        ]
      },
      {
        id: 565,
        en: "Cybercrime has surged in recent years, with hackers exploiting vulnerabilities in corporate databases to steal sensitive data.",
        ja: "サイバー犯罪は近年急増しており、ハッカーが企業データベースの脆弱性を悪用して機密データを盗んでいる。",
        words: [
          { word: "cybercrime", phonetic: "sáibərkràim", pos: "名", meanings: ["サイバー犯罪"], related: ["cyber 形 サイバーの"] },
          { word: "surge", phonetic: "sə́ːrdʒ", pos: "動", meanings: ["急増する"], related: ["surge 名 急増"] },
          { word: "hacker", phonetic: "hǽkər", pos: "名", meanings: ["ハッカー"], related: ["hack 動 ハッキングする"] },
          { word: "vulnerability", phonetic: "vʌ̀lnərəbíləti", pos: "名", meanings: ["脆弱性"], related: ["vulnerable 形 脆弱な"] },
          { word: "sensitive", phonetic: "sénsətiv", pos: "形", meanings: ["機密の、敏感な"], related: ["sensitivity 名 感度", "sensor 名 センサー"] }
        ]
      },
      {
        id: 566,
        en: "The attorney argued that the mandatory minimum sentence was disproportionate to the severity of the offense.",
        ja: "弁護士は義務的最低刑が犯罪の重大性に対して不釣り合いだと主張した。",
        words: [
          { word: "attorney", phonetic: "ətə́ːrni", pos: "名", meanings: ["弁護士"], related: ["lawyer/counsel"] },
          { word: "mandatory", phonetic: "mǽndətɔ̀ːri", pos: "形", meanings: ["義務的な、強制的な"], related: ["mandate 名 命令", "⇔ voluntary 自発的な"] },
          { word: "sentence", phonetic: "séntəns", pos: "名", meanings: ["判決、刑"], related: ["sentence 動 判決を下す"] },
          { word: "disproportionate", phonetic: "dìsprəpɔ́ːrʃənət", pos: "形", meanings: ["不釣り合いな"], related: ["proportion 名 割合", "⇔ proportionate 釣り合った"] },
          { word: "offense", phonetic: "əféns", pos: "名", meanings: ["犯罪、違反"], related: ["offend 動 怒らせる", "offender 名 犯罪者"] }
        ]
      },
      {
        id: 567,
        en: "The warden confirmed that the inmate had been granted parole after serving two-thirds of the original sentence.",
        ja: "刑務所長はその受刑者が元の刑期の3分の2を務めた後に仮釈放を認められたと確認した。",
        words: [
          { word: "warden", phonetic: "wɔ́ːrdn", pos: "名", meanings: ["刑務所長、管理人"], related: [] },
          { word: "confirm", phonetic: "kənfə́ːrm", pos: "動", meanings: ["確認する"], related: ["confirmation 名 確認"] },
          { word: "inmate", phonetic: "ínmèit", pos: "名", meanings: ["受刑者、入所者"], related: ["prisoner/convict"] },
          { word: "grant", phonetic: "grǽnt", pos: "動", meanings: ["認める、与える"], related: ["grant 名 助成金"] },
          { word: "parole", phonetic: "pəróul", pos: "名", meanings: ["仮釈放"], related: ["parole 動 仮釈放する"] }
        ]
      },
      {
        id: 568,
        en: "Forensic investigators collected DNA samples from the crime scene to identify the perpetrator.",
        ja: "法医学調査官は犯人を特定するために犯罪現場からDNAサンプルを採取した。",
        words: [
          { word: "forensic", phonetic: "fərénsik", pos: "形", meanings: ["法医学の、科学捜査の"], related: ["forensics 名 法医学"] },
          { word: "investigator", phonetic: "invéstəgèitər", pos: "名", meanings: ["調査官、捜査官"], related: ["investigate 動 調査する", "investigation 名 調査"] },
          { word: "sample", phonetic: "sǽmpl", pos: "名", meanings: ["サンプル、見本"], related: ["sample 動 試食する"] },
          { word: "crime scene", phonetic: "kráim síːn", pos: "名", meanings: ["犯罪現場"], related: ["crime 名 犯罪", "scene 名 現場"] },
          { word: "perpetrator", phonetic: "pə́ːrpətrèitər", pos: "名", meanings: ["犯人、加害者"], related: ["perpetrate 動 犯す"] }
        ]
      },
      {
        id: 569,
        en: "The judge dismissed the case on the grounds that the statute of limitations had already expired.",
        ja: "裁判官は公訴時効がすでに成立していることを理由にその訴訟を棄却した。",
        words: [
          { word: "judge", phonetic: "dʒʌ́dʒ", pos: "名", meanings: ["裁判官"], related: ["judge 動 判断する", "judgment 名 判決"] },
          { word: "dismiss", phonetic: "dismís", pos: "動", meanings: ["棄却する、解雇する"], related: ["dismissal 名 棄却、解雇"] },
          { word: "grounds", phonetic: "gráundz", pos: "名", meanings: ["根拠、理由"], related: ["on the grounds that... 〜を理由に"] },
          { word: "statute", phonetic: "stǽtʃuːt", pos: "名", meanings: ["法令、法規"], related: ["statute of limitations 公訴時効"] },
          { word: "expire", phonetic: "ikspáiər", pos: "動", meanings: ["期限が切れる、満了する"], related: ["expiration 名 満了"] }
        ]
      },
      {
        id: 570,
        en: "Advocates for prison reform insist that rehabilitation should take precedence over mere punishment.",
        ja: "刑務所改革の支持者たちは更生が単なる処罰よりも優先されるべきだと主張する。",
        words: [
          { word: "reform", phonetic: "rifɔ́ːrm", pos: "名", meanings: ["改革"], related: ["reform 動 改革する", "reformer 名 改革者"] },
          { word: "insist", phonetic: "insíst", pos: "動", meanings: ["主張する、言い張る"], related: ["insistence 名 主張", "insistent 形 しつこい"] },
          { word: "rehabilitation", phonetic: "rìːhəbìlitéiʃən", pos: "名", meanings: ["更生、リハビリ"], related: ["rehabilitate 動 更生させる"] },
          { word: "precedence", phonetic: "présədəns", pos: "名", meanings: ["優先、上位"], related: ["take precedence over 〜に優先する", "precedent 名 前例"] },
          { word: "punishment", phonetic: "pʌ́niʃmənt", pos: "名", meanings: ["罰、処罰"], related: ["punish 動 罰する", "⇔ reward 報酬"] }
        ]
      }
    ]
  },
  {
    section: 54,
    title: "Work & Career",
    sentences: [
      {
        id: 571,
        en: "The applicant submitted a polished résumé along with a compelling cover letter outlining her qualifications.",
        ja: "応募者は自分の資格を概説する説得力のあるカバーレターとともに洗練された履歴書を提出した。",
        words: [
          { word: "applicant", phonetic: "ǽplikənt", pos: "名", meanings: ["応募者、志願者"], related: ["apply 動 応募する", "application 名 応募、申請"] },
          { word: "submit", phonetic: "səbmít", pos: "動", meanings: ["提出する"], related: ["submission 名 提出"] },
          { word: "résumé", phonetic: "rézəmèi", pos: "名", meanings: ["履歴書"], related: ["CV (curriculum vitae)"] },
          { word: "outline", phonetic: "áutlàin", pos: "動", meanings: ["概説する、概要を述べる"], related: ["outline 名 概要、輪郭"] },
          { word: "qualification", phonetic: "kwɑ̀ləfikéiʃən", pos: "名", meanings: ["資格、能力"], related: ["qualify 動 資格を得る", "qualified 形 資格のある"] }
        ]
      },
      {
        id: 572,
        en: "The supervisor praised the intern for taking initiative and exceeding expectations during the probationary period.",
        ja: "上司は試用期間中に率先して行動し期待を超えたインターンを褒めた。",
        words: [
          { word: "supervisor", phonetic: "súːpərvàizər", pos: "名", meanings: ["上司、監督者"], related: ["supervise 動 監督する", "supervision 名 監督"] },
          { word: "intern", phonetic: "intə́ːrn", pos: "名", meanings: ["インターン、実習生"], related: ["internship 名 インターンシップ"] },
          { word: "initiative", phonetic: "iníʃətiv", pos: "名", meanings: ["率先、主導権"], related: ["take initiative 率先する", "initiate 動 開始する"] },
          { word: "probationary", phonetic: "proubéiʃənèri", pos: "形", meanings: ["試用の、仮採用の"], related: ["probation 名 試用期間、執行猶予"] }
        ]
      },
      {
        id: 573,
        en: "Burnout among employees has become a prevalent issue, often stemming from excessive workloads and unrealistic deadlines.",
        ja: "従業員のバーンアウトは蔓延する問題となっており、過度の業務量と非現実的な締め切りに起因することが多い。",
        words: [
          { word: "burnout", phonetic: "bə́ːrnàut", pos: "名", meanings: ["燃え尽き症候群"], related: ["burn out 動 燃え尽きる"] },
          { word: "employee", phonetic: "implɔ́iiː", pos: "名", meanings: ["従業員"], related: ["employ 動 雇用する", "employer 名 雇用者", "employment 名 雇用"] },
          { word: "prevalent", phonetic: "prévələnt", pos: "形", meanings: ["蔓延している、広く行き渡った"], related: ["prevalence 名 蔓延"] },
          { word: "stem from", phonetic: "stém frəm", pos: "動", meanings: ["〜に起因する、〜から生じる"], related: ["originate from/arise from"] },
          { word: "excessive", phonetic: "iksésiv", pos: "形", meanings: ["過度の、度を越した"], related: ["excess 名 超過", "exceed 動 超える"] },
          { word: "deadline", phonetic: "dédlàin", pos: "名", meanings: ["締め切り"], related: ["due date 期日"] }
        ]
      },
      {
        id: 574,
        en: "The executive was promoted to vice president after consistently delivering outstanding quarterly results.",
        ja: "その幹部は四半期ごとに卓越した業績を一貫して出し、副社長に昇進した。",
        words: [
          { word: "executive", phonetic: "igzékjətiv", pos: "名", meanings: ["幹部、経営者"], related: ["execute 動 実行する"] },
          { word: "promote", phonetic: "prəmóut", pos: "動", meanings: ["昇進させる、促進する"], related: ["promotion 名 昇進", "⇔ demote 降格する"] },
          { word: "consistently", phonetic: "kənsístəntli", pos: "副", meanings: ["一貫して"], related: ["consistent 形 一貫した", "consistency 名 一貫性"] },
          { word: "outstanding", phonetic: "àutstǽndiŋ", pos: "形", meanings: ["卓越した、未解決の"], related: ["stand out 動 目立つ"] },
          { word: "quarterly", phonetic: "kwɔ́ːrtərli", pos: "形", meanings: ["四半期の"], related: ["quarter 名 四半期"] }
        ]
      },
      {
        id: 575,
        en: "The labor union threatened to call a strike unless management agreed to negotiate a wage increase.",
        ja: "労働組合は経営陣が賃金引き上げの交渉に応じない限りストライキを呼びかけると脅した。",
        words: [
          { word: "labor", phonetic: "léibər", pos: "名", meanings: ["労働"], related: ["labor 動 働く", "laborer 名 労働者"] },
          { word: "union", phonetic: "júːnjən", pos: "名", meanings: ["組合、連合"], related: ["labor union 労働組合"] },
          { word: "strike", phonetic: "stráik", pos: "名", meanings: ["ストライキ"], related: ["strike 動 ストライキをする、打つ"] },
          { word: "negotiate", phonetic: "nigóuʃièit", pos: "動", meanings: ["交渉する"], related: ["negotiation 名 交渉", "negotiator 名 交渉人"] },
          { word: "wage", phonetic: "wéidʒ", pos: "名", meanings: ["賃金"], related: ["salary 名 給料", "minimum wage 最低賃金"] }
        ]
      },
      {
        id: 576,
        en: "Freelancers must be self-disciplined and adept at managing multiple clients and projects simultaneously.",
        ja: "フリーランサーは自制心があり、複数のクライアントとプロジェクトを同時に管理する能力がなければならない。",
        words: [
          { word: "freelancer", phonetic: "fríːlæ̀nsər", pos: "名", meanings: ["フリーランサー"], related: ["freelance 形/動 フリーランスの"] },
          { word: "self-disciplined", phonetic: "sèlf dísəplind", pos: "形", meanings: ["自制心のある"], related: ["discipline 名 規律"] },
          { word: "adept", phonetic: "ədépt", pos: "形", meanings: ["熟達した、巧みな"], related: ["adept 名 熟達者", "skilled/proficient"] },
          { word: "manage", phonetic: "mǽnidʒ", pos: "動", meanings: ["管理する、なんとかする"], related: ["management 名 管理", "manager 名 管理者"] },
          { word: "client", phonetic: "kláiənt", pos: "名", meanings: ["顧客、依頼人"], related: ["clientele 名 顧客層"] }
        ]
      },
      {
        id: 577,
        en: "The company downsized its workforce by twenty percent, citing declining revenue and mounting operational costs.",
        ja: "企業は収益の減少と運営コストの増加を理由に従業員を20%削減した。",
        words: [
          { word: "downsize", phonetic: "dáunsàiz", pos: "動", meanings: ["人員削減する、規模を縮小する"], related: ["layoff 名 一時解雇"] },
          { word: "cite", phonetic: "sáit", pos: "動", meanings: ["引用する、挙げる"], related: ["citation 名 引用"] },
          { word: "declining", phonetic: "dikláiniŋ", pos: "形", meanings: ["減少している"], related: ["decline 動/名 減少する"] },
          { word: "mount", phonetic: "máunt", pos: "動", meanings: ["増大する、登る"], related: ["mounting 形 増大する"] },
          { word: "operational", phonetic: "ɑ̀pəréiʃənl", pos: "形", meanings: ["運営の、操作上の"], related: ["operation 名 運営、操作"] }
        ]
      },
      {
        id: 578,
        en: "Networking at industry conferences can open doors to lucrative career opportunities that would otherwise remain hidden.",
        ja: "業界カンファレンスでの人脈作りは、そうでなければ隠されたままの有利なキャリア機会への扉を開きうる。",
        words: [
          { word: "network", phonetic: "nétwə̀ːrk", pos: "動", meanings: ["人脈を作る"], related: ["network 名 ネットワーク", "networking 名 人脈作り"] },
          { word: "conference", phonetic: "kɑ́nfərəns", pos: "名", meanings: ["会議、カンファレンス"], related: ["confer 動 協議する"] },
          { word: "lucrative", phonetic: "lúːkrətiv", pos: "形", meanings: ["有利な、儲かる"], related: ["profitable/rewarding"] },
          { word: "career", phonetic: "kəríər", pos: "名", meanings: ["キャリア、経歴"], related: ["career path キャリアパス"] },
          { word: "opportunity", phonetic: "ɑ̀pərtjúːnəti", pos: "名", meanings: ["機会"], related: ["opportune 形 好都合な"] }
        ]
      },
      {
        id: 579,
        en: "The entrepreneur attributes her success to perseverance, willingness to take calculated risks, and unwavering dedication.",
        ja: "その起業家は成功の要因を忍耐力、計算されたリスクを取る意欲、そして揺るぎない献身に帰している。",
        words: [
          { word: "attribute", phonetic: "ətríbjuːt", pos: "動", meanings: ["〜に帰する、〜のせいにする"], related: ["attribute 名 属性"] },
          { word: "perseverance", phonetic: "pə̀ːrsəvíərəns", pos: "名", meanings: ["忍耐力、粘り強さ"], related: ["persevere 動 辛抱する"] },
          { word: "willingness", phonetic: "wíliŋnis", pos: "名", meanings: ["意欲、進んでやること"], related: ["willing 形 進んでする", "⇔ reluctance 不本意"] },
          { word: "calculated", phonetic: "kǽlkjəlèitid", pos: "形", meanings: ["計算された、慎重な"], related: ["calculate 動 計算する"] },
          { word: "unwavering", phonetic: "ʌnwéivəriŋ", pos: "形", meanings: ["揺るぎない、確固とした"], related: ["waver 動 揺らぐ"] },
          { word: "dedication", phonetic: "dèdikéiʃən", pos: "名", meanings: ["献身、専念"], related: ["dedicate 動 捧げる", "dedicated 形 献身的な"] }
        ]
      },
      {
        id: 580,
        en: "Remote work has blurred the boundary between professional obligations and personal life, raising concerns about work-life balance.",
        ja: "リモートワークは仕事上の義務と私生活の境界を曖昧にし、ワークライフバランスへの懸念を生んでいる。",
        words: [
          { word: "remote", phonetic: "rimóut", pos: "形", meanings: ["遠隔の、リモートの"], related: ["remotely 副 遠隔で"] },
          { word: "blur", phonetic: "blə́ːr", pos: "動", meanings: ["曖昧にする、ぼやけさせる"], related: ["blurred 形 ぼやけた"] },
          { word: "boundary", phonetic: "báundəri", pos: "名", meanings: ["境界"], related: ["bound 名 限界", "⇔ border 国境"] },
          { word: "obligation", phonetic: "ɑ̀bləgéiʃən", pos: "名", meanings: ["義務、責務"], related: ["oblige 動 義務づける", "obligatory 形 義務的な"] },
          { word: "raise", phonetic: "réiz", pos: "動", meanings: ["提起する、上げる、育てる"], related: ["raise 名 昇給"] }
        ]
      }
    ]
  },
  {
    section: 55,
    title: "Food & Agriculture",
    sentences: [
      {
        id: 581,
        en: "The harvest was exceptionally abundant this year, yielding nearly double the average crop output.",
        ja: "今年の収穫は例外的に豊作で、平均作物生産量のほぼ2倍の収量があった。",
        words: [
          { word: "harvest", phonetic: "hɑ́ːrvist", pos: "名", meanings: ["収穫"], related: ["harvest 動 収穫する"] },
          { word: "exceptionally", phonetic: "ikséptʃənəli", pos: "副", meanings: ["例外的に、非常に"], related: ["exceptional 形 例外的な", "exception 名 例外"] },
          { word: "abundant", phonetic: "əbʌ́ndənt", pos: "形", meanings: ["豊富な"], related: ["abundance 名 豊富", "⇔ scarce 乏しい"] },
          { word: "yield", phonetic: "jíːld", pos: "動", meanings: ["産出する、もたらす、譲る"], related: ["yield 名 収穫量、利回り"] },
          { word: "output", phonetic: "áutpùt", pos: "名", meanings: ["生産量、出力"], related: ["⇔ input 投入"] }
        ]
      },
      {
        id: 582,
        en: "Organic farming prohibits the use of synthetic pesticides and relies instead on natural methods of pest control.",
        ja: "有機農業は合成農薬の使用を禁止し、代わりに自然な害虫駆除法に頼っている。",
        words: [
          { word: "organic", phonetic: "ɔːrgǽnik", pos: "形", meanings: ["有機の、有機栽培の"], related: ["organism 名 生物", "⇔ inorganic 無機の"] },
          { word: "prohibit", phonetic: "prəhíbit", pos: "動", meanings: ["禁止する"], related: ["prohibition 名 禁止", "⇔ permit 許可する"] },
          { word: "synthetic", phonetic: "sinθétik", pos: "形", meanings: ["合成の、人工の"], related: ["synthesize 動 合成する", "⇔ natural 天然の"] },
          { word: "pesticide", phonetic: "péstəsàid", pos: "名", meanings: ["農薬、殺虫剤"], related: ["pest 名 害虫"] },
          { word: "pest", phonetic: "pést", pos: "名", meanings: ["害虫"], related: ["pesticide 名 農薬"] }
        ]
      },
      {
        id: 583,
        en: "The famine was attributed to a prolonged drought compounded by inadequate food distribution infrastructure.",
        ja: "飢饉は長期の干ばつと不十分な食料配給インフラの複合要因に起因するとされた。",
        words: [
          { word: "attribute to", phonetic: "ətríbjuːt tə", pos: "動", meanings: ["〜に帰する、〜の原因とする"], related: ["attribution 名 帰属"] },
          { word: "compound", phonetic: "kəmpáund", pos: "動", meanings: ["悪化させる、複合する"], related: ["compound 名 化合物、複合体"] },
          { word: "inadequate", phonetic: "inǽdəkwət", pos: "形", meanings: ["不十分な、不適切な"], related: ["⇔ adequate 十分な"] },
          { word: "distribution", phonetic: "dìstrəbjúːʃən", pos: "名", meanings: ["配給、流通"], related: ["distribute 動 配布する"] }
        ]
      },
      {
        id: 584,
        en: "Livestock farming accounts for a significant proportion of global greenhouse gas emissions.",
        ja: "畜産業は世界の温室効果ガス排出量のかなりの割合を占めている。",
        words: [
          { word: "livestock", phonetic: "láivstɑ̀k", pos: "名", meanings: ["家畜"], related: ["cattle 名 牛"] },
          { word: "proportion", phonetic: "prəpɔ́ːrʃən", pos: "名", meanings: ["割合、比率"], related: ["proportional 形 比例した"] },
          { word: "global", phonetic: "glóubəl", pos: "形", meanings: ["世界的な、地球規模の"], related: ["globe 名 地球", "globalization 名 グローバル化"] },
          { word: "greenhouse", phonetic: "gríːnhàus", pos: "名", meanings: ["温室"], related: ["greenhouse gas 温室効果ガス", "greenhouse effect 温室効果"] },
          { word: "emission", phonetic: "imíʃən", pos: "名", meanings: ["排出、放出"], related: ["emit 動 排出する"] }
        ]
      },
      {
        id: 585,
        en: "The nutritionist recommended a diet rich in fiber, lean protein, and whole grains to improve overall well-being.",
        ja: "栄養士は全体的な健康を改善するために食物繊維、脂肪の少ないタンパク質、全粒穀物が豊富な食事を勧めた。",
        words: [
          { word: "nutritionist", phonetic: "njuːtríʃənist", pos: "名", meanings: ["栄養士"], related: ["nutrition 名 栄養", "nutritious 形 栄養価の高い"] },
          { word: "diet", phonetic: "dáiət", pos: "名", meanings: ["食事、食生活、ダイエット"], related: ["dietary 形 食事の"] },
          { word: "fiber", phonetic: "fáibər", pos: "名", meanings: ["食物繊維、繊維"], related: [] },
          { word: "protein", phonetic: "próutiːn", pos: "名", meanings: ["タンパク質"], related: [] },
          { word: "grain", phonetic: "gréin", pos: "名", meanings: ["穀物、粒"], related: ["whole grain 全粒穀物"] }
        ]
      },
      {
        id: 586,
        en: "Genetically modified crops remain a subject of fierce debate among consumers, scientists, and policymakers alike.",
        ja: "遺伝子組み換え作物は消費者、科学者、政策立案者の間で激しい議論の対象であり続けている。",
        words: [
          { word: "genetically modified", phonetic: "dʒənétikəli mɑ́dəfàid", pos: "形", meanings: ["遺伝子組み換えの"], related: ["GMO 遺伝子組み換え生物"] },
          { word: "fierce", phonetic: "fíərs", pos: "形", meanings: ["激しい、獰猛な"], related: ["fiercely 副 激しく"] },
          { word: "policymaker", phonetic: "pɑ́ləsimèikər", pos: "名", meanings: ["政策立案者"], related: ["policy 名 政策"] },
          { word: "alike", phonetic: "əláik", pos: "副", meanings: ["同様に、一様に"], related: ["alike 形 似ている"] }
        ]
      },
      {
        id: 587,
        en: "The chef's signature dish incorporated locally sourced ingredients with a distinctive blend of herbs and spices.",
        ja: "シェフの看板料理は地元産の食材とハーブとスパイスの独特なブレンドを取り入れていた。",
        words: [
          { word: "signature", phonetic: "sígnətʃər", pos: "形", meanings: ["看板の、特徴的な"], related: ["signature 名 署名"] },
          { word: "source", phonetic: "sɔ́ːrs", pos: "動", meanings: ["調達する、仕入れる"], related: ["source 名 源、仕入れ先"] },
          { word: "ingredient", phonetic: "ingríːdiənt", pos: "名", meanings: ["材料、成分"], related: ["component/element"] },
          { word: "distinctive", phonetic: "distíŋktiv", pos: "形", meanings: ["独特の、特徴的な"], related: ["distinct 形 別個の", "distinction 名 区別"] },
          { word: "herb", phonetic: "hə́ːrb", pos: "名", meanings: ["ハーブ、薬草"], related: ["herbal 形 ハーブの"] },
          { word: "spice", phonetic: "spáis", pos: "名", meanings: ["スパイス、香辛料"], related: ["spicy 形 辛い"] }
        ]
      },
      {
        id: 588,
        en: "Food contamination incidents have prompted stricter regulations on hygiene standards in processing facilities.",
        ja: "食品汚染事故により加工施設の衛生基準に関するより厳格な規制が促された。",
        words: [
          { word: "contamination", phonetic: "kəntæ̀mənéiʃən", pos: "名", meanings: ["汚染"], related: ["contaminate 動 汚染する"] },
          { word: "incident", phonetic: "ínsədənt", pos: "名", meanings: ["事件、事故"], related: ["incidence 名 発生率"] },
          { word: "regulation", phonetic: "règjəléiʃən", pos: "名", meanings: ["規制、規則"], related: ["regulate 動 規制する", "regulatory 形 規制の"] },
          { word: "hygiene", phonetic: "háidʒiːn", pos: "名", meanings: ["衛生"], related: ["hygienic 形 衛生的な"] },
          { word: "facility", phonetic: "fəsíləti", pos: "名", meanings: ["施設、設備"], related: ["facilitate 動 促進する"] }
        ]
      },
      {
        id: 589,
        en: "Irrigation systems have transformed arid landscapes into productive farmland capable of sustaining entire communities.",
        ja: "灌漑システムは乾燥した土地をコミュニティ全体を支えることができる生産的な農地に変えた。",
        words: [
          { word: "irrigation", phonetic: "ìrəgéiʃən", pos: "名", meanings: ["灌漑"], related: ["irrigate 動 灌漑する"] },
          { word: "transform", phonetic: "trænsfɔ́ːrm", pos: "動", meanings: ["変える、変形する"], related: ["transformation 名 変化"] },
          { word: "arid", phonetic: "ǽrid", pos: "形", meanings: ["乾燥した、不毛の"], related: ["⇔ humid 湿った", "aridity 名 乾燥"] },
          { word: "productive", phonetic: "prədʌ́ktiv", pos: "形", meanings: ["生産的な"], related: ["produce 動 生産する", "productivity 名 生産性"] },
          { word: "sustain", phonetic: "səstéin", pos: "動", meanings: ["維持する、支える"], related: ["sustainable 形 持続可能な"] }
        ]
      },
      {
        id: 590,
        en: "The steep rise in commodity prices has made staple foods increasingly unaffordable for low-income households.",
        ja: "商品価格の急騰により低所得世帯にとって主食がますます手の届かないものになっている。",
        words: [
          { word: "steep", phonetic: "stíːp", pos: "形", meanings: ["急な、法外な"], related: ["steeply 副 急に"] },
          { word: "commodity", phonetic: "kəmɑ́dəti", pos: "名", meanings: ["商品、日用品"], related: ["commodities 複数 一次産品"] },
          { word: "staple", phonetic: "stéipl", pos: "形", meanings: ["主要な、基本の"], related: ["staple 名 主食、主要産物"] },
          { word: "increasingly", phonetic: "inkríːsiŋli", pos: "副", meanings: ["ますます"], related: ["increase 動/名 増加する"] },
          { word: "low-income", phonetic: "lóu ínkʌm", pos: "形", meanings: ["低所得の"], related: ["income 名 所得、収入"] }
        ]
      }
    ]
  },
  {
    section: 56,
    title: "Sports & Physical Activity",
    sentences: [
      {
        id: 591,
        en: "The athlete broke the world record in the sprint, crossing the finish line a full tenth of a second ahead of her rival.",
        ja: "その選手は短距離走で世界記録を破り、ライバルより0.1秒早くゴールラインを越えた。",
        words: [
          { word: "athlete", phonetic: "ǽθliːt", pos: "名", meanings: ["選手、アスリート"], related: ["athletic 形 運動の", "athletics 名 陸上競技"] },
          { word: "record", phonetic: "rékərd", pos: "名", meanings: ["記録"], related: ["record 動 記録する", "break a record 記録を破る"] },
          { word: "sprint", phonetic: "sprínt", pos: "名", meanings: ["短距離走、全力疾走"], related: ["sprint 動 全力疾走する", "sprinter 名 短距離走者"] },
          { word: "rival", phonetic: "ráivəl", pos: "名", meanings: ["ライバル、競争相手"], related: ["rivalry 名 競争、対抗"] }
        ]
      },
      {
        id: 592,
        en: "The coach emphasized that consistent training and mental toughness are just as important as raw physical talent.",
        ja: "コーチは一貫したトレーニングと精神的な強靭さが生まれ持った身体的才能と同じくらい重要だと強調した。",
        words: [
          { word: "coach", phonetic: "kóutʃ", pos: "名", meanings: ["コーチ、監督"], related: ["coach 動 指導する"] },
          { word: "consistent", phonetic: "kənsístənt", pos: "形", meanings: ["一貫した、安定した"], related: ["consistency 名 一貫性", "⇔ inconsistent 一貫しない"] },
          { word: "toughness", phonetic: "tʌ́fnis", pos: "名", meanings: ["強靭さ、頑丈さ"], related: ["tough 形 頑丈な、厳しい"] },
          { word: "raw", phonetic: "rɔ́ː", pos: "形", meanings: ["生の、未加工の、生まれ持った"], related: ["raw material 原材料"] },
          { word: "talent", phonetic: "tǽlənt", pos: "名", meanings: ["才能"], related: ["talented 形 才能のある"] }
        ]
      },
      {
        id: 593,
        en: "The tournament was postponed indefinitely due to severe weather conditions that rendered the stadium unsafe.",
        ja: "スタジアムを危険にした悪天候のため、トーナメントは無期限に延期された。",
        words: [
          { word: "tournament", phonetic: "túərnəmənt", pos: "名", meanings: ["トーナメント、選手権大会"], related: ["competition/championship"] },
          { word: "postpone", phonetic: "poustpóun", pos: "動", meanings: ["延期する"], related: ["postponement 名 延期", "⇔ advance 繰り上げる"] },
          { word: "indefinitely", phonetic: "indéfənətli", pos: "副", meanings: ["無期限に、漠然と"], related: ["indefinite 形 不定の"] },
          { word: "render", phonetic: "réndər", pos: "動", meanings: ["〜の状態にする、提供する"], related: ["rendering 名 描画"] },
          { word: "stadium", phonetic: "stéidiəm", pos: "名", meanings: ["スタジアム、競技場"], related: ["arena/venue"] }
        ]
      },
      {
        id: 594,
        en: "Doping scandals have severely tarnished the reputation of professional cycling in recent decades.",
        ja: "ドーピングスキャンダルがここ数十年でプロ自転車競技の評判をひどく傷つけてきた。",
        words: [
          { word: "doping", phonetic: "dóupiŋ", pos: "名", meanings: ["ドーピング"], related: ["dope 名 薬物"] },
          { word: "scandal", phonetic: "skǽndl", pos: "名", meanings: ["スキャンダル、不祥事"], related: ["scandalous 形 恥ずべき"] },
          { word: "severely", phonetic: "sivíərli", pos: "副", meanings: ["ひどく、厳しく"], related: ["severe 形 厳しい"] },
          { word: "tarnish", phonetic: "tɑ́ːrniʃ", pos: "動", meanings: ["傷つける、くすませる"], related: ["tarnish 名 汚点"] }
        ]
      },
      {
        id: 595,
        en: "The referee's controversial decision to award a penalty kick in the final minutes ignited a heated dispute.",
        ja: "終了間際にペナルティキックを与えるという審判の物議を醸す判定が激しい論争を引き起こした。",
        words: [
          { word: "referee", phonetic: "rèfəríː", pos: "名", meanings: ["審判"], related: ["referee 動 審判する", "umpire 名 審判"] },
          { word: "award", phonetic: "əwɔ́ːrd", pos: "動", meanings: ["与える、授与する"], related: ["award 名 賞"] },
          { word: "penalty", phonetic: "pénəlti", pos: "名", meanings: ["ペナルティ、罰則"], related: ["penalize 動 罰する"] },
          { word: "ignite", phonetic: "ignáit", pos: "動", meanings: ["点火する、引き起こす"], related: ["ignition 名 点火"] },
          { word: "dispute", phonetic: "dispjúːt", pos: "名", meanings: ["論争、紛争"], related: ["dispute 動 異議を唱える"] }
        ]
      },
      {
        id: 596,
        en: "The marathon runner collapsed from exhaustion just meters before the finish line but managed to crawl across it.",
        ja: "マラソンランナーはゴールラインのわずか数メートル手前で疲労から倒れたが、這ってゴールした。",
        words: [
          { word: "marathon", phonetic: "mǽrəθɑ̀n", pos: "名", meanings: ["マラソン"], related: [] },
          { word: "collapse", phonetic: "kəlǽps", pos: "動", meanings: ["倒れる、崩壊する"], related: ["collapse 名 崩壊"] },
          { word: "exhaustion", phonetic: "igzɔ́ːstʃən", pos: "名", meanings: ["疲労、消耗"], related: ["exhaust 動 疲れさせる", "exhausted 形 疲れ果てた"] },
          { word: "crawl", phonetic: "krɔ́ːl", pos: "動", meanings: ["這う、ゆっくり進む"], related: ["crawl 名 這うこと"] }
        ]
      },
      {
        id: 597,
        en: "Regular stretching before and after exercise can help prevent injuries and enhance flexibility over time.",
        ja: "運動前後の定期的なストレッチは怪我の予防と柔軟性の向上に役立つ。",
        words: [
          { word: "stretch", phonetic: "strétʃ", pos: "動", meanings: ["ストレッチする、伸ばす"], related: ["stretch 名 伸び、広がり"] },
          { word: "exercise", phonetic: "éksərsàiz", pos: "名", meanings: ["運動、練習"], related: ["exercise 動 運動する"] },
          { word: "prevent", phonetic: "privént", pos: "動", meanings: ["防ぐ、予防する"], related: ["prevention 名 予防", "preventive 形 予防の"] },
          { word: "injury", phonetic: "índʒəri", pos: "名", meanings: ["怪我、負傷"], related: ["injure 動 傷つける", "injured 形 負傷した"] },
          { word: "flexibility", phonetic: "flèksəbíləti", pos: "名", meanings: ["柔軟性"], related: ["flexible 形 柔軟な", "⇔ rigid 固い"] }
        ]
      },
      {
        id: 598,
        en: "The league implemented a salary cap to promote competitive balance and prevent wealthy teams from dominating.",
        ja: "リーグは競争の均衡を促進し裕福なチームの独占を防ぐためにサラリーキャップを導入した。",
        words: [
          { word: "league", phonetic: "líːg", pos: "名", meanings: ["リーグ、連盟"], related: [] },
          { word: "salary", phonetic: "sǽləri", pos: "名", meanings: ["給料"], related: ["wage 名 賃金"] },
          { word: "competitive", phonetic: "kəmpétətiv", pos: "形", meanings: ["競争の、競争力のある"], related: ["compete 動 競争する", "competition 名 競争"] },
          { word: "wealthy", phonetic: "wélθi", pos: "形", meanings: ["裕福な"], related: ["wealth 名 富", "⇔ poor 貧しい"] },
          { word: "dominate", phonetic: "dɑ́mənèit", pos: "動", meanings: ["支配する、優位に立つ"], related: ["dominant 形 支配的な", "dominance 名 支配"] }
        ]
      },
      {
        id: 599,
        en: "The gymnast executed a flawless routine on the balance beam, earning a perfect score from every judge.",
        ja: "体操選手は平均台で完璧な演技を行い、全審査員から満点を獲得した。",
        words: [
          { word: "gymnast", phonetic: "dʒímnæst", pos: "名", meanings: ["体操選手"], related: ["gymnastics 名 体操", "gymnasium 名 体育館"] },
          { word: "execute", phonetic: "éksikjùːt", pos: "動", meanings: ["実行する、遂行する"], related: ["execution 名 実行"] },
          { word: "flawless", phonetic: "flɔ́ːlis", pos: "形", meanings: ["完璧な、欠点のない"], related: ["flaw 名 欠点", "⇔ flawed 欠陥のある"] },
          { word: "routine", phonetic: "ruːtíːn", pos: "名", meanings: ["演技、日課"], related: ["routine 形 日常的な"] },
          { word: "score", phonetic: "skɔ́ːr", pos: "名", meanings: ["得点、スコア"], related: ["score 動 得点する"] }
        ]
      },
      {
        id: 600,
        en: "Spectators erupted in applause as the underdog team clinched victory in the championship final with a last-minute goal.",
        ja: "不利と見られていたチームが終了間際のゴールで決勝戦の勝利をつかんだとき、観客は歓声を爆発させた。",
        words: [
          { word: "erupt", phonetic: "irʌ́pt", pos: "動", meanings: ["爆発する、噴出する"], related: ["eruption 名 噴火、爆発"] },
          { word: "applause", phonetic: "əplɔ́ːz", pos: "名", meanings: ["拍手喝采"], related: ["applaud 動 拍手する"] },
          { word: "underdog", phonetic: "ʌ́ndərdɔ̀g", pos: "名", meanings: ["劣勢の者、不利な側"], related: ["⇔ favorite 本命"] },
          { word: "clinch", phonetic: "klíntʃ", pos: "動", meanings: ["勝ち取る、決着をつける"], related: ["clinch 名 決着"] },
          { word: "victory", phonetic: "víktəri", pos: "名", meanings: ["勝利"], related: ["victorious 形 勝利の", "⇔ defeat 敗北"] },
          { word: "championship", phonetic: "tʃǽmpiənʃìp", pos: "名", meanings: ["選手権"], related: ["champion 名 チャンピオン"] }
        ]
      }
    ]
  },
  {
    section: 57,
    title: "Weather & Natural Disasters",
    sentences: [
      {
        id: 601,
        en: "The meteorologist issued a severe weather warning as the hurricane approached the densely populated coastline.",
        ja: "ハリケーンが人口密集した海岸線に接近する中、気象予報士は厳重な気象警報を発令した。",
        words: [
          { word: "meteorologist", phonetic: "mìːtiərɑ́lədʒist", pos: "名", meanings: ["気象予報士、気象学者"], related: ["meteorology 名 気象学"] },
          { word: "issue", phonetic: "íʃuː", pos: "動", meanings: ["発行する、発令する"], related: ["issue 名 問題、発行"] },
          { word: "hurricane", phonetic: "hə́ːrikèin", pos: "名", meanings: ["ハリケーン"], related: ["typhoon 台風", "cyclone サイクロン"] },
          { word: "densely", phonetic: "dénsli", pos: "副", meanings: ["密集して"], related: ["dense 形 密集した", "density 名 密度"] },
          { word: "coastline", phonetic: "kóustlàin", pos: "名", meanings: ["海岸線"], related: ["coast 名 海岸"] }
        ]
      },
      {
        id: 602,
        en: "Prolonged heatwaves are becoming more frequent, posing a grave threat to elderly populations and outdoor workers.",
        ja: "長引く熱波がより頻繁になっており、高齢者と屋外労働者に深刻な脅威をもたらしている。",
        words: [
          { word: "heatwave", phonetic: "híːtwèiv", pos: "名", meanings: ["熱波、猛暑"], related: ["⇔ cold wave 寒波"] },
          { word: "frequent", phonetic: "fríːkwənt", pos: "形", meanings: ["頻繁な"], related: ["frequency 名 頻度", "frequently 副 頻繁に"] },
          { word: "grave", phonetic: "gréiv", pos: "形", meanings: ["深刻な、重大な"], related: ["gravity 名 重大さ、重力"] },
          { word: "threat", phonetic: "θrét", pos: "名", meanings: ["脅威"], related: ["threaten 動 脅かす", "threatening 形 脅迫的な"] },
          { word: "elderly", phonetic: "éldərli", pos: "形", meanings: ["高齢の"], related: ["elder 形/名 年上の"] }
        ]
      },
      {
        id: 603,
        en: "The blizzard dumped over two feet of snow overnight, paralyzing transportation and stranding thousands of commuters.",
        ja: "ブリザードが一晩で60センチ以上の雪を降らせ、交通を麻痺させ何千人もの通勤者を立ち往生させた。",
        words: [
          { word: "blizzard", phonetic: "blízərd", pos: "名", meanings: ["ブリザード、猛吹雪"], related: ["snowstorm 吹雪"] },
          { word: "overnight", phonetic: "òuvərnáit", pos: "副", meanings: ["一晩で、夜通し"], related: ["overnight 形 一晩の"] },
          { word: "paralyze", phonetic: "pǽrəlàiz", pos: "動", meanings: ["麻痺させる"], related: ["paralysis 名 麻痺"] },
          { word: "strand", phonetic: "strǽnd", pos: "動", meanings: ["立ち往生させる、座礁させる"], related: ["stranded 形 立ち往生した"] }
        ]
      },
      {
        id: 604,
        en: "The tornado tore through the rural community, uprooting trees and reducing several homes to rubble.",
        ja: "竜巻が農村コミュニティを通り抜け、木々を根こそぎにし複数の家屋を瓦礫と化した。",
        words: [
          { word: "tornado", phonetic: "tɔːrnéidou", pos: "名", meanings: ["竜巻"], related: ["複数形 tornadoes/tornados"] },
          { word: "tear through", phonetic: "téər θruː", pos: "動", meanings: ["突き抜ける、猛威を振るう"], related: ["tore-torn"] },
          { word: "uproot", phonetic: "ʌprúːt", pos: "動", meanings: ["根こそぎにする、根絶する"], related: ["root 名 根"] },
          { word: "rubble", phonetic: "rʌ́bl", pos: "名", meanings: ["瓦礫"], related: ["debris/wreckage"] }
        ]
      },
      {
        id: 605,
        en: "The flood submerged entire neighborhoods, forcing residents to evacuate to temporary shelters on higher ground.",
        ja: "洪水が地区全体を水没させ、住民は高台の臨時避難所への避難を余儀なくされた。",
        words: [
          { word: "flood", phonetic: "flʌ́d", pos: "名", meanings: ["洪水"], related: ["flood 動 氾濫する", "⇔ drought 干ばつ"] },
          { word: "submerge", phonetic: "səbmə́ːrdʒ", pos: "動", meanings: ["水没させる、沈める"], related: ["submersion 名 水没"] },
          { word: "neighborhood", phonetic: "néibərhùd", pos: "名", meanings: ["地区、近隣"], related: ["neighbor 名 隣人"] },
          { word: "evacuate", phonetic: "ivǽkjuèit", pos: "動", meanings: ["避難する、避難させる"], related: ["evacuation 名 避難"] },
          { word: "shelter", phonetic: "ʃéltər", pos: "名", meanings: ["避難所、シェルター"], related: ["shelter 動 保護する"] }
        ]
      },
      {
        id: 606,
        en: "Climate scientists attribute the increase in extreme weather events to the accumulation of greenhouse gases in the atmosphere.",
        ja: "気候科学者は極端な気象現象の増加を大気中の温室効果ガスの蓄積に帰している。",
        words: [
          { word: "climate", phonetic: "kláimət", pos: "名", meanings: ["気候"], related: ["climate change 気候変動"] },
          { word: "extreme", phonetic: "ikstríːm", pos: "形", meanings: ["極端な、極度の"], related: ["extremely 副 極度に"] },
          { word: "accumulation", phonetic: "əkjùːmjəléiʃən", pos: "名", meanings: ["蓄積"], related: ["accumulate 動 蓄積する"] },
          { word: "atmosphere", phonetic: "ǽtməsfìər", pos: "名", meanings: ["大気、雰囲気"], related: ["atmospheric 形 大気の"] }
        ]
      },
      {
        id: 607,
        en: "The tsunami generated by the undersea earthquake devastated coastal villages within minutes of striking the shore.",
        ja: "海底地震で発生した津波が海岸に到達して数分以内に沿岸の村々を壊滅させた。",
        words: [
          { word: "tsunami", phonetic: "tsùnɑ́ːmi", pos: "名", meanings: ["津波"], related: ["tidal wave 津波（旧称）"] },
          { word: "generate", phonetic: "dʒénərèit", pos: "動", meanings: ["発生させる、生み出す"], related: ["generation 名 世代、発生"] },
          { word: "undersea", phonetic: "ʌ́ndərsìː", pos: "形", meanings: ["海底の"], related: ["underwater 形 水中の"] },
          { word: "shore", phonetic: "ʃɔ́ːr", pos: "名", meanings: ["岸、海岸"], related: ["offshore 沖の", "shoreline 海岸線"] }
        ]
      },
      {
        id: 608,
        en: "Forecasters predict that the upcoming monsoon season will bring above-average rainfall to the southern provinces.",
        ja: "予報士はこれから来るモンスーンの季節が南部の州に平均以上の降水量をもたらすと予測している。",
        words: [
          { word: "forecast", phonetic: "fɔ́ːrkæ̀st", pos: "動", meanings: ["予報する"], related: ["forecast 名 予報", "forecaster 名 予報士"] },
          { word: "upcoming", phonetic: "ʌ́pkʌ̀miŋ", pos: "形", meanings: ["これから来る、間近の"], related: ["forthcoming/approaching"] },
          { word: "monsoon", phonetic: "mɑnsúːn", pos: "名", meanings: ["モンスーン、季節風"], related: ["monsoon season 雨季"] },
          { word: "rainfall", phonetic: "réinfɔ̀ːl", pos: "名", meanings: ["降水量、降雨"], related: ["rain 名 雨", "precipitation 名 降水"] },
          { word: "province", phonetic: "prɑ́vins", pos: "名", meanings: ["州、省"], related: ["provincial 形 地方の"] }
        ]
      },
      {
        id: 609,
        en: "Emergency crews worked around the clock to restore electricity to the thousands of households left without power after the ice storm.",
        ja: "緊急作業班は氷嵐の後に停電した何千もの世帯への電力復旧のため昼夜を問わず作業した。",
        words: [
          { word: "emergency", phonetic: "imə́ːrdʒənsi", pos: "名", meanings: ["緊急事態"], related: ["emergency 形 緊急の", "emerge 動 現れる"] },
          { word: "crew", phonetic: "krúː", pos: "名", meanings: ["乗組員、作業班"], related: [] },
          { word: "around the clock", phonetic: "əráund ðə klɑ́k", pos: "副", meanings: ["昼夜を問わず、24時間"], related: ["nonstop"] },
          { word: "restore", phonetic: "ristɔ́ːr", pos: "動", meanings: ["復旧する、修復する"], related: ["restoration 名 復旧"] },
          { word: "electricity", phonetic: "ilèktrisəti", pos: "名", meanings: ["電気、電力"], related: ["electric 形 電気の", "electronic 形 電子の"] }
        ]
      },
      {
        id: 610,
        en: "The wildfire spread at an alarming pace, engulfing thousands of acres of forest before firefighters could contain it.",
        ja: "山火事は驚くべき速さで広がり、消防士が封じ込める前に何千エーカーもの森林を飲み込んだ。",
        words: [
          { word: "wildfire", phonetic: "wáildfàiər", pos: "名", meanings: ["山火事、野火"], related: ["spread like wildfire 急速に広まる"] },
          { word: "pace", phonetic: "péis", pos: "名", meanings: ["速度、ペース"], related: ["pace 動 歩き回る"] },
          { word: "engulf", phonetic: "ingʌ́lf", pos: "動", meanings: ["飲み込む、巻き込む"], related: ["gulf 名 湾"] },
          { word: "acre", phonetic: "éikər", pos: "名", meanings: ["エーカー（約4047平方メートル）"], related: [] },
          { word: "contain", phonetic: "kəntéin", pos: "動", meanings: ["封じ込める、含む"], related: ["container 名 容器", "containment 名 封じ込め"] }
        ]
      }
    ]
  },
  {
    section: 58,
    title: "Religion & Belief Systems",
    sentences: [
      {
        id: 611,
        en: "The congregation gathered at the cathedral to observe a sacred ritual that dates back several centuries.",
        ja: "会衆は数世紀前にさかのぼる神聖な儀式を行うために大聖堂に集まった。",
        words: [
          { word: "congregation", phonetic: "kɑ̀ŋgrigéiʃən", pos: "名", meanings: ["会衆、集会"], related: ["congregate 動 集まる"] },
          { word: "cathedral", phonetic: "kəθíːdrəl", pos: "名", meanings: ["大聖堂"], related: ["church 名 教会"] },
          { word: "observe", phonetic: "əbzə́ːrv", pos: "動", meanings: ["（儀式を）行う、観察する"], related: ["observance 名 遵守、儀式"] },
          { word: "sacred", phonetic: "séikrid", pos: "形", meanings: ["神聖な"], related: ["⇔ profane 世俗の", "⇔ secular 非宗教的な"] },
          { word: "ritual", phonetic: "rítʃuəl", pos: "名", meanings: ["儀式"], related: ["ritual 形 儀式の"] }
        ]
      },
      {
        id: 612,
        en: "The theologian devoted her career to reconciling scientific inquiry with spiritual faith.",
        ja: "その神学者は科学的探究と精神的信仰の調和に生涯を捧げた。",
        words: [
          { word: "theologian", phonetic: "θìːəlóudʒən", pos: "名", meanings: ["神学者"], related: ["theology 名 神学", "theological 形 神学の"] },
          { word: "devote", phonetic: "divóut", pos: "動", meanings: ["捧げる、専念する"], related: ["devotion 名 献身", "devoted 形 献身的な"] },
          { word: "spiritual", phonetic: "spíritʃuəl", pos: "形", meanings: ["精神的な、霊的な"], related: ["spirit 名 精神、霊", "spirituality 名 精神性"] },
          { word: "faith", phonetic: "féiθ", pos: "名", meanings: ["信仰、信頼"], related: ["faithful 形 忠実な", "⇔ doubt 疑い"] }
        ]
      },
      {
        id: 613,
        en: "Pilgrims from around the world travel thousands of miles to visit the ancient shrine believed to possess healing powers.",
        ja: "世界中の巡礼者が治癒の力を持つと信じられている古代の聖地を訪れるために何千マイルも旅をする。",
        words: [
          { word: "pilgrim", phonetic: "pílgrəm", pos: "名", meanings: ["巡礼者"], related: ["pilgrimage 名 巡礼"] },
          { word: "shrine", phonetic: "ʃráin", pos: "名", meanings: ["聖地、神社、祠"], related: ["temple 名 寺院"] },
          { word: "healing", phonetic: "híːliŋ", pos: "名", meanings: ["治癒、癒やし"], related: ["heal 動 癒やす", "healer 名 治療者"] }
        ]
      },
      {
        id: 614,
        en: "The doctrine of religious tolerance was enshrined in the constitution to prevent persecution of minority faiths.",
        ja: "少数派の信仰への迫害を防ぐために宗教的寛容の教義が憲法に明記された。",
        words: [
          { word: "doctrine", phonetic: "dɑ́ktrin", pos: "名", meanings: ["教義、主義"], related: ["dogma 名 教義"] },
          { word: "tolerance", phonetic: "tɑ́lərəns", pos: "名", meanings: ["寛容"], related: ["tolerant 形 寛容な", "tolerate 動 容認する", "⇔ intolerance 不寛容"] },
          { word: "enshrine", phonetic: "inʃráin", pos: "動", meanings: ["（法に）明記する、大切にする"], related: ["shrine 名 聖地"] },
          { word: "persecution", phonetic: "pə̀ːrsikjúːʃən", pos: "名", meanings: ["迫害"], related: ["persecute 動 迫害する"] },
          { word: "minority", phonetic: "mainɔ́ːrəti", pos: "名", meanings: ["少数派"], related: ["⇔ majority 多数派", "minor 形 小さい"] }
        ]
      },
      {
        id: 615,
        en: "Meditation practices rooted in Eastern philosophy have gained widespread popularity as a means of reducing stress.",
        ja: "東洋哲学に根ざした瞑想の実践がストレス軽減の手段として広く普及した。",
        words: [
          { word: "meditation", phonetic: "mèditéiʃən", pos: "名", meanings: ["瞑想"], related: ["meditate 動 瞑想する"] },
          { word: "practice", phonetic: "prǽktis", pos: "名", meanings: ["実践、習慣"], related: ["practice 動 実践する", "practical 形 実用的な"] },
          { word: "philosophy", phonetic: "filɑ́səfi", pos: "名", meanings: ["哲学"], related: ["philosopher 名 哲学者"] },
          { word: "popularity", phonetic: "pɑ̀pjəlǽrəti", pos: "名", meanings: ["人気、普及"], related: ["popular 形 人気のある"] },
          { word: "means", phonetic: "míːnz", pos: "名", meanings: ["手段、方法"], related: ["by means of 〜によって"] }
        ]
      },
      {
        id: 616,
        en: "The missionary dedicated decades to building schools and hospitals in impoverished communities across the region.",
        ja: "その宣教師は地域全体の貧困コミュニティに学校や病院を建設するために数十年を捧げた。",
        words: [
          { word: "missionary", phonetic: "míʃənèri", pos: "名", meanings: ["宣教師"], related: ["mission 名 使命、伝道"] },
          { word: "dedicate", phonetic: "dédikèit", pos: "動", meanings: ["捧げる、専念する"], related: ["dedication 名 献身"] },
          { word: "impoverished", phonetic: "impɑ́vəriʃt", pos: "形", meanings: ["貧困な、困窮した"], related: ["poverty 名 貧困", "impoverish 動 貧しくする"] }
        ]
      },
      {
        id: 617,
        en: "The debate over the separation of church and state continues to stir passionate disagreement among politicians and clergy alike.",
        ja: "政教分離をめぐる議論は政治家と聖職者の両方の間で激しい意見の相違を引き起こし続けている。",
        words: [
          { word: "separation", phonetic: "sèpəréiʃən", pos: "名", meanings: ["分離"], related: ["separate 動 分離する"] },
          { word: "stir", phonetic: "stə́ːr", pos: "動", meanings: ["引き起こす、かき混ぜる"], related: ["stir 名 騒ぎ"] },
          { word: "passionate", phonetic: "pǽʃənət", pos: "形", meanings: ["情熱的な、激しい"], related: ["passion 名 情熱"] },
          { word: "disagreement", phonetic: "dìsəgríːmənt", pos: "名", meanings: ["意見の不一致、不和"], related: ["disagree 動 意見が合わない", "⇔ agreement 合意"] },
          { word: "clergy", phonetic: "klə́ːrdʒi", pos: "名", meanings: ["聖職者（総称）"], related: ["clergyman 名 聖職者"] }
        ]
      },
      {
        id: 618,
        en: "Superstitious beliefs, though largely dismissed by the scientific community, remain deeply embedded in certain cultures.",
        ja: "迷信的信仰は科学界では大部分が退けられているが、特定の文化に深く根付いたままである。",
        words: [
          { word: "superstitious", phonetic: "sùːpərstíʃəs", pos: "形", meanings: ["迷信的な"], related: ["superstition 名 迷信"] },
          { word: "dismiss", phonetic: "dismís", pos: "動", meanings: ["退ける、却下する"], related: ["dismissal 名 却下"] },
          { word: "embedded", phonetic: "imbédid", pos: "形", meanings: ["埋め込まれた、根付いた"], related: ["embed 動 埋め込む"] },
          { word: "certain", phonetic: "sə́ːrtn", pos: "形", meanings: ["特定の、確かな"], related: ["certainly 副 確かに", "certainty 名 確実性"] }
        ]
      },
      {
        id: 619,
        en: "The monk renounced all material possessions and withdrew to a secluded monastery to pursue enlightenment.",
        ja: "修道士は全ての物質的所有物を捨て、悟りを追求するために人里離れた修道院に引きこもった。",
        words: [
          { word: "monk", phonetic: "mʌ́ŋk", pos: "名", meanings: ["修道士、僧侶"], related: ["monastery 名 修道院", "nun 名 修道女"] },
          { word: "renounce", phonetic: "rináuns", pos: "動", meanings: ["放棄する、断念する"], related: ["renunciation 名 放棄"] },
          { word: "material", phonetic: "mətíəriəl", pos: "形", meanings: ["物質的な"], related: ["material 名 材料", "materialism 名 物質主義"] },
          { word: "secluded", phonetic: "siklúːdid", pos: "形", meanings: ["人里離れた、隔離された"], related: ["seclusion 名 隔離"] },
          { word: "monastery", phonetic: "mɑ́nəstèri", pos: "名", meanings: ["修道院"], related: ["monastic 形 修道院の"] },
          { word: "enlightenment", phonetic: "inláitnmənt", pos: "名", meanings: ["悟り、啓蒙"], related: ["enlighten 動 啓発する"] }
        ]
      },
      {
        id: 620,
        en: "Interfaith dialogue has proven to be an effective tool for fostering mutual understanding and reducing prejudice.",
        ja: "宗教間対話は相互理解の促進と偏見の低減に効果的な手段であることが証明されてきた。",
        words: [
          { word: "interfaith", phonetic: "ìntərféiθ", pos: "形", meanings: ["宗教間の、異宗教間の"], related: ["faith 名 信仰"] },
          { word: "dialogue", phonetic: "dáiəlɑ̀g", pos: "名", meanings: ["対話"], related: ["dialog 名 対話（米式綴り）"] },
          { word: "prove", phonetic: "prúːv", pos: "動", meanings: ["証明する、〜だとわかる"], related: ["proof 名 証拠", "proven 形 実証済みの"] },
          { word: "effective", phonetic: "iféktiv", pos: "形", meanings: ["効果的な"], related: ["effect 名 効果", "effectively 副 効果的に"] },
          { word: "prejudice", phonetic: "prédʒədis", pos: "名", meanings: ["偏見"], related: ["prejudiced 形 偏見のある", "⇔ unbiased 公平な"] }
        ]
      }
    ]
  },
  {
    section: 59,
    title: "Architecture & Design",
    sentences: [
      {
        id: 621,
        en: "The skyscraper's facade was constructed entirely of reinforced glass, giving it a striking transparent appearance.",
        ja: "その超高層ビルのファサードは全面が強化ガラスで建設され、印象的な透明感のある外観を持っていた。",
        words: [
          { word: "skyscraper", phonetic: "skáiskrèipər", pos: "名", meanings: ["超高層ビル"], related: ["scrape 動 こする"] },
          { word: "facade", phonetic: "fəsɑ́ːd", pos: "名", meanings: ["ファサード、正面、見せかけ"], related: ["face 名 顔、表面"] },
          { word: "construct", phonetic: "kənstrʌ́kt", pos: "動", meanings: ["建設する"], related: ["construction 名 建設", "structure 名 構造"] },
          { word: "reinforce", phonetic: "rìːinfɔ́ːrs", pos: "動", meanings: ["補強する、強化する"], related: ["reinforcement 名 補強"] },
          { word: "striking", phonetic: "stráikiŋ", pos: "形", meanings: ["印象的な、目立つ"], related: ["strike 動 打つ、印象づける"] }
        ]
      },
      {
        id: 622,
        en: "The interior layout was meticulously planned to maximize natural light and create a sense of spaciousness.",
        ja: "インテリアの配置は自然光を最大限に取り入れ、開放感を生み出すよう緻密に計画された。",
        words: [
          { word: "interior", phonetic: "intíəriər", pos: "名", meanings: ["内部、インテリア"], related: ["interior 形 内部の", "⇔ exterior 外部"] },
          { word: "layout", phonetic: "léiàut", pos: "名", meanings: ["配置、レイアウト"], related: ["lay out 動 配置する"] },
          { word: "meticulously", phonetic: "mətíkjələsli", pos: "副", meanings: ["緻密に、細心の注意を払って"], related: ["meticulous 形 几帳面な"] },
          { word: "maximize", phonetic: "mǽksəmàiz", pos: "動", meanings: ["最大化する"], related: ["maximum 名 最大"] },
          { word: "spaciousness", phonetic: "spéiʃəsnis", pos: "名", meanings: ["広々としていること、開放感"], related: ["spacious 形 広々とした"] }
        ]
      },
      {
        id: 623,
        en: "Gothic cathedrals are renowned for their pointed arches, ribbed vaults, and elaborate stained glass windows.",
        ja: "ゴシック大聖堂は尖頭アーチ、リブ付きヴォールト、そして精巧なステンドグラスで有名である。",
        words: [
          { word: "renowned", phonetic: "rináund", pos: "形", meanings: ["有名な、名高い"], related: ["renown 名 名声", "famous/celebrated"] },
          { word: "arch", phonetic: "ɑ́ːrtʃ", pos: "名", meanings: ["アーチ、弓形"], related: ["arch 動 弓なりにする"] },
          { word: "vault", phonetic: "vɔ́ːlt", pos: "名", meanings: ["丸天井、金庫室"], related: ["vaulted 形 丸天井の"] },
          { word: "stained glass", phonetic: "stéind glǽs", pos: "名", meanings: ["ステンドグラス"], related: ["stain 名/動 汚れ、染める"] }
        ]
      },
      {
        id: 624,
        en: "The urban renewal project demolished dilapidated warehouses and replaced them with affordable housing complexes.",
        ja: "都市再開発プロジェクトは老朽化した倉庫を取り壊し、手頃な住宅団地に置き換えた。",
        words: [
          { word: "renewal", phonetic: "rinjúːəl", pos: "名", meanings: ["再開発、更新"], related: ["renew 動 更新する"] },
          { word: "demolish", phonetic: "dimɑ́liʃ", pos: "動", meanings: ["取り壊す、解体する"], related: ["demolition 名 解体"] },
          { word: "dilapidated", phonetic: "dilǽpidèitid", pos: "形", meanings: ["老朽化した、荒廃した"], related: ["dilapidation 名 荒廃"] },
          { word: "warehouse", phonetic: "wéərhàus", pos: "名", meanings: ["倉庫"], related: ["store/depot"] },
          { word: "complex", phonetic: "kɑ́mpleks", pos: "名", meanings: ["複合施設、団地"], related: ["complex 形 複雑な"] }
        ]
      },
      {
        id: 625,
        en: "The blueprint specified precise dimensions for every structural component, leaving no room for ambiguity.",
        ja: "設計図は全ての構造部品の正確な寸法を明記し、曖昧さの余地を残さなかった。",
        words: [
          { word: "blueprint", phonetic: "blúːprìnt", pos: "名", meanings: ["設計図、青写真"], related: ["plan/design"] },
          { word: "specify", phonetic: "spésəfài", pos: "動", meanings: ["明記する、指定する"], related: ["specific 形 具体的な", "specification 名 仕様"] },
          { word: "precise", phonetic: "prisáis", pos: "形", meanings: ["正確な、精密な"], related: ["precision 名 精度", "precisely 副 正確に"] },
          { word: "dimension", phonetic: "diménʃən", pos: "名", meanings: ["寸法、次元"], related: ["dimensional 形 次元の"] },
          { word: "structural", phonetic: "strʌ́ktʃərəl", pos: "形", meanings: ["構造の"], related: ["structure 名 構造"] },
          { word: "ambiguity", phonetic: "æ̀mbigjúːəti", pos: "名", meanings: ["曖昧さ"], related: ["ambiguous 形 曖昧な", "⇔ clear 明確な"] }
        ]
      },
      {
        id: 626,
        en: "Sustainable architecture incorporates energy-efficient materials and passive ventilation systems to minimize environmental impact.",
        ja: "持続可能な建築はエネルギー効率の良い素材と自然換気システムを取り入れ、環境への影響を最小限にする。",
        words: [
          { word: "sustainable", phonetic: "səstéinəbl", pos: "形", meanings: ["持続可能な"], related: ["sustainability 名 持続可能性"] },
          { word: "architecture", phonetic: "ɑ́ːrkitèktʃər", pos: "名", meanings: ["建築、建築学"], related: ["architect 名 建築家"] },
          { word: "efficient", phonetic: "ifíʃənt", pos: "形", meanings: ["効率的な"], related: ["efficiency 名 効率"] },
          { word: "passive", phonetic: "pǽsiv", pos: "形", meanings: ["受動的な、消極的な"], related: ["⇔ active 能動的な"] },
          { word: "ventilation", phonetic: "vèntəléiʃən", pos: "名", meanings: ["換気"], related: ["ventilate 動 換気する"] },
          { word: "minimize", phonetic: "mínəmàiz", pos: "動", meanings: ["最小限にする"], related: ["minimum 名 最小", "⇔ maximize 最大化する"] }
        ]
      },
      {
        id: 627,
        en: "The monument was erected in the town square to commemorate the centennial of the nation's independence.",
        ja: "その記念碑は国の独立100周年を記念して町の広場に建てられた。",
        words: [
          { word: "monument", phonetic: "mɑ́njəmənt", pos: "名", meanings: ["記念碑、記念建造物"], related: ["monumental 形 記念碑的な、巨大な"] },
          { word: "erect", phonetic: "irékt", pos: "動", meanings: ["建てる、直立させる"], related: ["erection 名 建設"] },
          { word: "commemorate", phonetic: "kəmémərèit", pos: "動", meanings: ["記念する"], related: ["commemoration 名 記念"] },
          { word: "centennial", phonetic: "senténiəl", pos: "名", meanings: ["100周年"], related: ["century 名 世紀"] },
          { word: "independence", phonetic: "ìndipéndəns", pos: "名", meanings: ["独立"], related: ["independent 形 独立した", "⇔ dependent 依存した"] }
        ]
      },
      {
        id: 628,
        en: "The minimalist aesthetic of the dwelling emphasized clean lines, neutral tones, and the absence of unnecessary ornamentation.",
        ja: "その住居のミニマリスト的美学は直線的なライン、ニュートラルな色調、そして不要な装飾の排除を強調した。",
        words: [
          { word: "minimalist", phonetic: "mínəməlist", pos: "形", meanings: ["ミニマリストの、最小限主義の"], related: ["minimalism 名 ミニマリズム"] },
          { word: "dwelling", phonetic: "dwéliŋ", pos: "名", meanings: ["住居"], related: ["dwell 動 住む"] },
          { word: "neutral", phonetic: "njúːtrəl", pos: "形", meanings: ["中立の、ニュートラルな"], related: ["neutrality 名 中立"] },
          { word: "tone", phonetic: "tóun", pos: "名", meanings: ["色調、トーン、口調"], related: ["tone 動 調子を整える"] },
          { word: "absence", phonetic: "ǽbsəns", pos: "名", meanings: ["不在、欠如"], related: ["absent 形 不在の", "⇔ presence 存在"] },
          { word: "ornamentation", phonetic: "ɔ̀ːrnəmentéiʃən", pos: "名", meanings: ["装飾"], related: ["ornament 名 装飾品", "ornamental 形 装飾の"] }
        ]
      },
      {
        id: 629,
        en: "The bridge spanning the gorge was hailed as a masterpiece of civil engineering when it was completed in the nineteenth century.",
        ja: "峡谷にかかるその橋は19世紀の完成時に土木工学の傑作と称賛された。",
        words: [
          { word: "span", phonetic: "spǽn", pos: "動", meanings: ["架かる、またがる"], related: ["span 名 全長、期間"] },
          { word: "gorge", phonetic: "gɔ́ːrdʒ", pos: "名", meanings: ["峡谷"], related: ["canyon/ravine"] },
          { word: "hail", phonetic: "héil", pos: "動", meanings: ["称賛する、歓迎する"], related: ["hail 名 雹"] },
          { word: "masterpiece", phonetic: "mǽstərpìːs", pos: "名", meanings: ["傑作"], related: ["master 名 巨匠"] },
          { word: "civil engineering", phonetic: "sívəl èndʒəníəriŋ", pos: "名", meanings: ["土木工学"], related: ["civil 形 市民の", "engineer 名 技術者"] }
        ]
      },
      {
        id: 630,
        en: "The renovation preserved the original timber beams and exposed brickwork while modernizing the plumbing and electrical systems.",
        ja: "その改修は配管と電気系統を近代化しつつ、元の木造梁とむき出しのレンガ造りを保存した。",
        words: [
          { word: "renovation", phonetic: "rènəvéiʃən", pos: "名", meanings: ["改修、リフォーム"], related: ["renovate 動 改修する"] },
          { word: "timber", phonetic: "tímbər", pos: "名", meanings: ["材木、木材"], related: ["lumber 名 材木"] },
          { word: "beam", phonetic: "bíːm", pos: "名", meanings: ["梁、光線"], related: ["beam 動 輝く"] },
          { word: "brickwork", phonetic: "bríkwə̀ːrk", pos: "名", meanings: ["レンガ造り"], related: ["brick 名 レンガ"] },
          { word: "modernize", phonetic: "mɑ́dərnàiz", pos: "動", meanings: ["近代化する"], related: ["modern 形 現代の", "modernization 名 近代化"] },
          { word: "plumbing", phonetic: "plʌ́miŋ", pos: "名", meanings: ["配管"], related: ["plumber 名 配管工"] }
        ]
      }
    ]
  },
  {
    section: 60,
    title: "Idioms & Expressions",
    sentences: [
      {
        id: 631,
        en: "She was on the verge of giving up, but a sudden breakthrough turned the tide in her favor.",
        ja: "彼女は諦めかけていたが、突然のブレークスルーが形勢を一変させた。",
        words: [
          { word: "on the verge of", phonetic: "ɑn ðə və́ːrdʒ əv", pos: "定", meanings: ["〜しかけている、〜の瀬戸際で"], related: ["verge 名 瀬戸際"] },
          { word: "give up", phonetic: "gív ʌ́p", pos: "動", meanings: ["諦める、やめる"], related: ["surrender/abandon"] },
          { word: "breakthrough", phonetic: "bréikθrùː", pos: "名", meanings: ["突破口、画期的進展"], related: ["break through 動 突破する"] },
          { word: "turn the tide", phonetic: "tə́ːrn ðə táid", pos: "定", meanings: ["形勢を一変させる"], related: ["tide 名 潮、流れ"] }
        ]
      },
      {
        id: 632,
        en: "He tends to beat around the bush instead of getting straight to the point during meetings.",
        ja: "彼は会議中に要点を言わずに遠回しに話す傾向がある。",
        words: [
          { word: "beat around the bush", phonetic: "bíːt əráund ðə búʃ", pos: "定", meanings: ["遠回しに言う、要点を避ける"], related: ["⇔ get to the point 要点を言う"] },
          { word: "straight", phonetic: "stréit", pos: "副", meanings: ["まっすぐに、直接"], related: ["straight 形 まっすぐな"] },
          { word: "point", phonetic: "pɔ́int", pos: "名", meanings: ["要点、点"], related: ["get to the point 要点を言う"] }
        ]
      },
      {
        id: 633,
        en: "The new policy was a blessing in disguise — although painful at first, it ultimately strengthened the company.",
        ja: "その新方針は不幸中の幸いだった — 最初は苦しかったが最終的に会社を強くした。",
        words: [
          { word: "blessing in disguise", phonetic: "blésiŋ in disgáiz", pos: "定", meanings: ["不幸中の幸い、災い転じて福"], related: ["blessing 名 祝福", "disguise 名 変装"] },
          { word: "painful", phonetic: "péinfəl", pos: "形", meanings: ["苦しい、痛い"], related: ["pain 名 痛み", "⇔ painless 無痛の"] },
          { word: "ultimately", phonetic: "ʌ́ltəmətli", pos: "副", meanings: ["最終的に"], related: ["ultimate 形 究極の"] },
          { word: "strengthen", phonetic: "stréŋθən", pos: "動", meanings: ["強化する"], related: ["strength 名 強さ", "strong 形 強い"] }
        ]
      },
      {
        id: 634,
        en: "Don't put all your eggs in one basket — diversify your investments to minimize risk.",
        ja: "一つのカゴに全ての卵を入れるな — リスクを最小限にするため投資を分散させよう。",
        words: [
          { word: "put all eggs in one basket", phonetic: "", pos: "定", meanings: ["一か所に全てを賭ける、一点集中する"], related: ["⇔ diversify 分散する"] },
          { word: "diversify", phonetic: "daivə́ːrsəfài", pos: "動", meanings: ["多様化する、分散する"], related: ["diversification 名 多様化", "diverse 形 多様な"] },
          { word: "investment", phonetic: "invéstmənt", pos: "名", meanings: ["投資"], related: ["invest 動 投資する"] },
          { word: "risk", phonetic: "rísk", pos: "名", meanings: ["リスク、危険"], related: ["risky 形 危険な"] }
        ]
      },
      {
        id: 635,
        en: "After months of heated argument, they decided to bury the hatchet and work together toward a common goal.",
        ja: "数ヶ月にわたる激しい論争の後、彼らは和解して共通の目標に向かって協力することにした。",
        words: [
          { word: "bury the hatchet", phonetic: "béri ðə hǽtʃit", pos: "定", meanings: ["和解する、争いをやめる"], related: ["hatchet 名 手斧"] },
          { word: "heated", phonetic: "híːtid", pos: "形", meanings: ["激しい、白熱した"], related: ["heat 名 熱"] },
          { word: "argument", phonetic: "ɑ́ːrgjəmənt", pos: "名", meanings: ["議論、口論"], related: ["argue 動 議論する"] },
          { word: "common", phonetic: "kɑ́mən", pos: "形", meanings: ["共通の、一般的な"], related: ["commonly 副 一般に"] }
        ]
      },
      {
        id: 636,
        en: "The project is still up in the air — we won't know the final decision until the board meets next week.",
        ja: "プロジェクトはまだ未定だ — 来週の取締役会まで最終決定はわからない。",
        words: [
          { word: "up in the air", phonetic: "ʌ́p in ði éər", pos: "定", meanings: ["未定で、宙ぶらりんで"], related: ["uncertain/undecided"] },
          { word: "decision", phonetic: "disíʒən", pos: "名", meanings: ["決定"], related: ["decide 動 決める", "decisive 形 決定的な"] },
          { word: "board", phonetic: "bɔ́ːrd", pos: "名", meanings: ["取締役会、委員会"], related: ["board of directors 取締役会"] }
        ]
      },
      {
        id: 637,
        en: "She has a knack for breaking the ice at social gatherings, making everyone feel welcome within minutes.",
        ja: "彼女には社交の場で緊張をほぐすコツがあり、数分以内に全員をくつろがせる。",
        words: [
          { word: "knack", phonetic: "nǽk", pos: "名", meanings: ["コツ、才能"], related: ["skill/talent"] },
          { word: "break the ice", phonetic: "bréik ði áis", pos: "定", meanings: ["緊張をほぐす、口火を切る"], related: ["icebreaker 名 場を和ませるもの"] },
          { word: "gathering", phonetic: "gǽðəriŋ", pos: "名", meanings: ["集まり、会合"], related: ["gather 動 集まる"] },
          { word: "welcome", phonetic: "wélkəm", pos: "形", meanings: ["歓迎された"], related: ["welcome 動 歓迎する"] }
        ]
      },
      {
        id: 638,
        en: "Learning a new language from scratch requires patience, but once you get the hang of it, progress accelerates.",
        ja: "新しい言語をゼロから学ぶには忍耐が必要だが、コツをつかめば上達は加速する。",
        words: [
          { word: "from scratch", phonetic: "frəm skrǽtʃ", pos: "定", meanings: ["ゼロから、最初から"], related: ["scratch 名 引っかき傷"] },
          { word: "patience", phonetic: "péiʃəns", pos: "名", meanings: ["忍耐"], related: ["patient 形 忍耐強い", "⇔ impatience 短気"] },
          { word: "get the hang of", phonetic: "gét ðə hǽŋ əv", pos: "定", meanings: ["コツをつかむ、慣れる"], related: [] },
          { word: "progress", phonetic: "prɑ́gres", pos: "名", meanings: ["進歩、上達"], related: ["progress 動 進歩する", "progressive 形 進歩的な"] }
        ]
      },
      {
        id: 639,
        en: "The cost of living has gone through the roof, making it nearly impossible for young adults to afford housing.",
        ja: "生活費が跳ね上がり、若い大人が住居を手に入れるのがほぼ不可能になっている。",
        words: [
          { word: "go through the roof", phonetic: "góu θruː ðə rúːf", pos: "定", meanings: ["（値段が）跳ね上がる、急上昇する"], related: ["skyrocket 動 急騰する"] },
          { word: "cost of living", phonetic: "kɔ́st əv líviŋ", pos: "名", meanings: ["生活費"], related: ["cost 名 費用"] },
          { word: "nearly", phonetic: "níərli", pos: "副", meanings: ["ほぼ、ほとんど"], related: ["near 形 近い", "almost"] },
          { word: "afford", phonetic: "əfɔ́ːrd", pos: "動", meanings: ["余裕がある、手が届く"], related: ["affordable 形 手頃な"] }
        ]
      },
      {
        id: 640,
        en: "In hindsight, quitting that dead-end job and pursuing my passion turned out to be the best decision I ever made.",
        ja: "今振り返ると、あの行き詰まった仕事を辞めて自分の情熱を追いかけたのは最高の決断だった。",
        words: [
          { word: "in hindsight", phonetic: "in háindsàit", pos: "定", meanings: ["今振り返ると、後知恵で"], related: ["hindsight 名 後知恵", "⇔ foresight 先見"] },
          { word: "quit", phonetic: "kwít", pos: "動", meanings: ["辞める、やめる"], related: ["quit-quit-quit"] },
          { word: "dead-end", phonetic: "dédènd", pos: "形", meanings: ["行き詰まった、先のない"], related: ["dead end 名 行き止まり"] },
          { word: "pursue", phonetic: "pərsúː", pos: "動", meanings: ["追求する、追いかける"], related: ["pursuit 名 追求"] },
          { word: "turn out", phonetic: "tə́ːrn áut", pos: "動", meanings: ["〜という結果になる"], related: ["outcome 名 結果"] }
        ]
      }
    ]
  },
  {
    section: 61,
    title: "Daily Life & Routines",
    sentences: [
      {
        id: 641,
        en: "She makes it a habit to wake up at dawn and go for a brisk jog around the neighborhood before breakfast.",
        ja: "彼女は夜明けに起きて朝食前に近所を速歩きでジョギングすることを習慣にしている。",
        words: [
          { word: "habit", phonetic: "hǽbit", pos: "名", meanings: ["習慣"], related: ["habitual 形 習慣的な"] },
          { word: "dawn", phonetic: "dɔ́ːn", pos: "名", meanings: ["夜明け、明け方"], related: ["dawn 動 明ける", "⇔ dusk 夕暮れ"] },
          { word: "brisk", phonetic: "brísk", pos: "形", meanings: ["速い、きびきびした"], related: ["briskly 副 きびきびと"] },
          { word: "jog", phonetic: "dʒɑ́g", pos: "名", meanings: ["ジョギング"], related: ["jog 動 ジョギングする", "jogger 名 ジョガー"] }
        ]
      },
      {
        id: 642,
        en: "The landlord notified the tenants that the monthly rent would increase by five percent starting next quarter.",
        ja: "家主はテナントに来四半期から月額家賃が5%上がると通知した。",
        words: [
          { word: "landlord", phonetic: "lǽndlɔ̀ːrd", pos: "名", meanings: ["家主、大家"], related: ["⇔ tenant 借主"] },
          { word: "notify", phonetic: "nóutəfài", pos: "動", meanings: ["通知する"], related: ["notification 名 通知"] },
          { word: "tenant", phonetic: "ténənt", pos: "名", meanings: ["借主、テナント"], related: ["tenancy 名 賃借"] },
          { word: "rent", phonetic: "rént", pos: "名", meanings: ["家賃、賃貸料"], related: ["rent 動 賃借する", "rental 名 賃貸"] },
          { word: "quarter", phonetic: "kwɔ́ːrtər", pos: "名", meanings: ["四半期、4分の1"], related: ["quarterly 形 四半期の"] }
        ]
      },
      {
        id: 643,
        en: "He accidentally spilled coffee on his shirt and had to rush home to change before the appointment.",
        ja: "彼はうっかりシャツにコーヒーをこぼし、予約の前に着替えに急いで帰宅しなければならなかった。",
        words: [
          { word: "accidentally", phonetic: "æ̀ksədéntəli", pos: "副", meanings: ["うっかり、偶然に"], related: ["accidental 形 偶然の", "accident 名 事故"] },
          { word: "spill", phonetic: "spíl", pos: "動", meanings: ["こぼす"], related: ["spilled/spilt"] },
          { word: "rush", phonetic: "rʌ́ʃ", pos: "動", meanings: ["急ぐ"], related: ["rush 名 急ぎ", "rush hour ラッシュアワー"] },
          { word: "appointment", phonetic: "əpɔ́intmənt", pos: "名", meanings: ["予約、約束"], related: ["appoint 動 任命する"] }
        ]
      },
      {
        id: 644,
        en: "The grocery store around the corner offers a wide assortment of fresh produce at reasonable prices.",
        ja: "角を曲がったところの食料品店は新鮮な農産物を手頃な価格で幅広く取り揃えている。",
        words: [
          { word: "grocery", phonetic: "gróusəri", pos: "名", meanings: ["食料品（店）"], related: ["groceries 名 食料品"] },
          { word: "assortment", phonetic: "əsɔ́ːrtmənt", pos: "名", meanings: ["取り揃え、詰め合わせ"], related: ["assorted 形 各種の"] },
          { word: "produce", phonetic: "próudjuːs", pos: "名", meanings: ["農産物"], related: ["produce 動 生産する"] },
          { word: "reasonable", phonetic: "ríːzənəbl", pos: "形", meanings: ["手頃な、合理的な"], related: ["reason 名 理由", "reasonably 副 合理的に"] }
        ]
      },
      {
        id: 645,
        en: "After a hectic day at work, he finds it soothing to soak in a warm bath and listen to classical music.",
        ja: "忙しい一日の仕事の後、温かいお風呂に浸かってクラシック音楽を聴くのが心地よいと感じている。",
        words: [
          { word: "hectic", phonetic: "héktik", pos: "形", meanings: ["多忙な、慌ただしい"], related: ["busy/frantic"] },
          { word: "soothing", phonetic: "súːðiŋ", pos: "形", meanings: ["心地よい、なだめる"], related: ["soothe 動 なだめる、和らげる"] },
          { word: "soak", phonetic: "sóuk", pos: "動", meanings: ["浸かる、浸す"], related: ["soak 名 浸すこと"] },
          { word: "classical", phonetic: "klǽsikəl", pos: "形", meanings: ["クラシックの、古典の"], related: ["classic 形 典型的な、古典の"] }
        ]
      },
      {
        id: 646,
        en: "The plumber arrived promptly to fix the leaking faucet that had been dripping for over a week.",
        ja: "配管工は1週間以上滴っていた漏れる蛇口を修理するために速やかに到着した。",
        words: [
          { word: "plumber", phonetic: "plʌ́mər", pos: "名", meanings: ["配管工"], related: ["plumbing 名 配管"] },
          { word: "promptly", phonetic: "prɑ́mptli", pos: "副", meanings: ["速やかに、迅速に"], related: ["prompt 形 迅速な"] },
          { word: "fix", phonetic: "fíks", pos: "動", meanings: ["修理する、固定する"], related: ["fix 名 修理"] },
          { word: "leak", phonetic: "líːk", pos: "動", meanings: ["漏れる"], related: ["leak 名 漏れ", "leaky 形 漏れやすい"] },
          { word: "faucet", phonetic: "fɔ́ːsit", pos: "名", meanings: ["蛇口"], related: ["tap 名 蛇口（英）"] },
          { word: "drip", phonetic: "dríp", pos: "動", meanings: ["滴る"], related: ["drip 名 したたり"] }
        ]
      },
      {
        id: 647,
        en: "She sorted the laundry into separate piles — whites, darks, and delicates — before loading the washing machine.",
        ja: "彼女は洗濯機に入れる前に洗濯物を白、暗い色、デリケートなものに分けた。",
        words: [
          { word: "sort", phonetic: "sɔ́ːrt", pos: "動", meanings: ["分類する、仕分ける"], related: ["sort 名 種類"] },
          { word: "laundry", phonetic: "lɔ́ːndri", pos: "名", meanings: ["洗濯物、洗濯"], related: ["laundromat 名 コインランドリー"] },
          { word: "separate", phonetic: "sépərət", pos: "形", meanings: ["別々の、個別の"], related: ["separate 動 分ける", "separation 名 分離"] },
          { word: "pile", phonetic: "páil", pos: "名", meanings: ["山、積み重ね"], related: ["pile 動 積み重ねる"] },
          { word: "load", phonetic: "lóud", pos: "動", meanings: ["積む、入れる"], related: ["load 名 荷物"] }
        ]
      },
      {
        id: 648,
        en: "The commute takes roughly forty minutes by subway, though delays during peak hours are not uncommon.",
        ja: "通勤は地下鉄でおよそ40分かかるが、ピーク時の遅延は珍しくない。",
        words: [
          { word: "commute", phonetic: "kəmjúːt", pos: "名", meanings: ["通勤"], related: ["commute 動 通勤する", "commuter 名 通勤者"] },
          { word: "roughly", phonetic: "rʌ́fli", pos: "副", meanings: ["おおよそ、約"], related: ["rough 形 大まかな"] },
          { word: "subway", phonetic: "sʌ́bwèi", pos: "名", meanings: ["地下鉄"], related: ["underground 名 地下鉄（英）"] },
          { word: "delay", phonetic: "diléi", pos: "名", meanings: ["遅延"], related: ["delay 動 遅らせる"] },
          { word: "peak", phonetic: "píːk", pos: "形", meanings: ["ピーク時の、最高の"], related: ["peak 名 頂点"] }
        ]
      },
      {
        id: 649,
        en: "They hired a babysitter so they could enjoy a rare evening out at a restaurant without the children.",
        ja: "子供なしでレストランでの珍しい外食を楽しめるようにベビーシッターを雇った。",
        words: [
          { word: "hire", phonetic: "háiər", pos: "動", meanings: ["雇う、借りる"], related: ["hire 名 雇用"] },
          { word: "babysitter", phonetic: "béibisìtər", pos: "名", meanings: ["ベビーシッター"], related: ["babysit 動 子守をする"] },
          { word: "rare", phonetic: "réər", pos: "形", meanings: ["珍しい、まれな"], related: ["rarely 副 めったに〜ない", "rarity 名 珍しさ"] },
          { word: "evening", phonetic: "íːvniŋ", pos: "名", meanings: ["夕方、夜"], related: [] }
        ]
      },
      {
        id: 650,
        en: "He set the alarm for six o'clock but kept hitting the snooze button until he was nearly late for work.",
        ja: "彼は6時にアラームをセットしたがスヌーズボタンを押し続け、危うく仕事に遅刻するところだった。",
        words: [
          { word: "alarm", phonetic: "əlɑ́ːrm", pos: "名", meanings: ["アラーム、目覚まし時計"], related: ["alarm 動 驚かせる", "alarming 形 驚くべき"] },
          { word: "set", phonetic: "sét", pos: "動", meanings: ["セットする、設定する"], related: ["set-set-set"] },
          { word: "snooze", phonetic: "snúːz", pos: "名", meanings: ["スヌーズ、居眠り"], related: ["snooze 動 居眠りする"] },
          { word: "nearly", phonetic: "níərli", pos: "副", meanings: ["ほぼ、危うく"], related: ["near 形 近い"] },
          { word: "late", phonetic: "léit", pos: "形", meanings: ["遅い、遅刻した"], related: ["lately 副 最近", "⇔ early 早い"] }
        ]
      }
    ]
  },
  {
    section: 62,
    title: "Emotions & Mental States",
    sentences: [
      {
        id: 651,
        en: "The unexpected news left her utterly bewildered, unable to process what had just happened.",
        ja: "予想外の知らせに彼女はすっかり当惑し、何が起きたのか理解できなかった。",
        words: [
          { word: "unexpected", phonetic: "ʌ̀nikspéktid", pos: "形", meanings: ["予想外の"], related: ["⇔ expected 予想された", "unexpectedly 副 思いがけず"] },
          { word: "utterly", phonetic: "ʌ́tərli", pos: "副", meanings: ["全く、すっかり"], related: ["utter 形 完全な"] },
          { word: "bewildered", phonetic: "biwíldərd", pos: "形", meanings: ["当惑した、途方に暮れた"], related: ["bewilder 動 当惑させる", "bewilderment 名 当惑"] },
          { word: "process", phonetic: "prɑ́ses", pos: "動", meanings: ["処理する、理解する"], related: ["process 名 過程"] }
        ]
      },
      {
        id: 652,
        en: "He struggled to conceal his resentment toward the colleague who had taken credit for his work.",
        ja: "彼は自分の仕事の手柄を横取りした同僚への恨みを隠すのに苦労した。",
        words: [
          { word: "struggle", phonetic: "strʌ́gl", pos: "動", meanings: ["苦労する、もがく"], related: ["struggle 名 苦闘"] },
          { word: "conceal", phonetic: "kənsíːl", pos: "動", meanings: ["隠す"], related: ["concealment 名 隠蔽", "⇔ reveal 明らかにする"] },
          { word: "resentment", phonetic: "rizéntmənt", pos: "名", meanings: ["恨み、憤り"], related: ["resent 動 恨む"] },
          { word: "credit", phonetic: "krédit", pos: "名", meanings: ["手柄、功績、信用"], related: ["take credit for 手柄にする"] }
        ]
      },
      {
        id: 653,
        en: "A wave of nostalgia swept over her as she stumbled upon old photographs from her childhood.",
        ja: "幼少期の古い写真を偶然見つけたとき、郷愁の波が彼女を襲った。",
        words: [
          { word: "nostalgia", phonetic: "nəstǽldʒə", pos: "名", meanings: ["郷愁、ノスタルジア"], related: ["nostalgic 形 懐かしい"] },
          { word: "sweep over", phonetic: "swíːp óuvər", pos: "動", meanings: ["（感情が）押し寄せる"], related: ["swept-swept"] },
          { word: "stumble upon", phonetic: "stʌ́mbl əpɑ́n", pos: "動", meanings: ["偶然見つける"], related: ["stumble 動 つまずく"] },
          { word: "photograph", phonetic: "fóutəgræ̀f", pos: "名", meanings: ["写真"], related: ["photography 名 写真撮影", "photographer 名 写真家"] }
        ]
      },
      {
        id: 654,
        en: "The therapist encouraged her to embrace vulnerability rather than suppress her emotions behind a facade of strength.",
        ja: "セラピストは強さの仮面の裏で感情を抑えるのではなく、脆さを受け入れるよう彼女を励ました。",
        words: [
          { word: "encourage", phonetic: "inkə́ːridʒ", pos: "動", meanings: ["励ます、促す"], related: ["encouragement 名 励まし", "⇔ discourage 落胆させる"] },
          { word: "vulnerability", phonetic: "vʌ̀lnərəbíləti", pos: "名", meanings: ["脆さ、脆弱性"], related: ["vulnerable 形 脆い"] },
          { word: "suppress", phonetic: "səprés", pos: "動", meanings: ["抑える、抑圧する"], related: ["suppression 名 抑圧"] },
          { word: "emotion", phonetic: "imóuʃən", pos: "名", meanings: ["感情"], related: ["emotional 形 感情的な"] }
        ]
      },
      {
        id: 655,
        en: "His persistent optimism in the face of adversity inspired everyone around him to keep pushing forward.",
        ja: "逆境に直面しても変わらない彼の楽観主義が周囲の全員に前進し続ける力を与えた。",
        words: [
          { word: "optimism", phonetic: "ɑ́ptəmìzm", pos: "名", meanings: ["楽観主義"], related: ["optimist 名 楽観主義者", "optimistic 形 楽観的な", "⇔ pessimism 悲観主義"] },
          { word: "adversity", phonetic: "ædvə́ːrsəti", pos: "名", meanings: ["逆境、困難"], related: ["adverse 形 不利な"] },
          { word: "inspire", phonetic: "inspáiər", pos: "動", meanings: ["鼓舞する、着想を与える"], related: ["inspiration 名 インスピレーション"] },
          { word: "push forward", phonetic: "púʃ fɔ́ːrwərd", pos: "動", meanings: ["前進する、推し進める"], related: [] }
        ]
      },
      {
        id: 656,
        en: "Feelings of jealousy can be corrosive if left unchecked, gradually destroying even the strongest friendships.",
        ja: "嫉妬の感情は放置すると腐食性があり、最も強い友情さえも徐々に破壊する。",
        words: [
          { word: "jealousy", phonetic: "dʒéləsi", pos: "名", meanings: ["嫉妬"], related: ["jealous 形 嫉妬深い", "envy 名 羨望"] },
          { word: "corrosive", phonetic: "kəróusiv", pos: "形", meanings: ["腐食性の、じわじわ蝕む"], related: ["corrode 動 腐食する", "corrosion 名 腐食"] },
          { word: "unchecked", phonetic: "ʌntʃékt", pos: "形", meanings: ["放置された、抑制されない"], related: ["check 動 抑制する"] },
          { word: "gradually", phonetic: "grǽdʒuəli", pos: "副", meanings: ["徐々に"], related: ["gradual 形 徐々の"] },
          { word: "friendship", phonetic: "fréndʃip", pos: "名", meanings: ["友情"], related: ["friend 名 友人"] }
        ]
      },
      {
        id: 657,
        en: "She was overcome with gratitude when the strangers went out of their way to help her find her lost luggage.",
        ja: "見知らぬ人たちがわざわざ遺失した荷物を見つける手助けをしてくれたとき、彼女は感謝の気持ちでいっぱいになった。",
        words: [
          { word: "overcome", phonetic: "òuvərkʌ́m", pos: "形", meanings: ["圧倒された、打ちひしがれた"], related: ["overcome 動 克服する"] },
          { word: "gratitude", phonetic: "grǽtətjùːd", pos: "名", meanings: ["感謝"], related: ["grateful 形 感謝している", "⇔ ingratitude 恩知らず"] },
          { word: "stranger", phonetic: "stréindʒər", pos: "名", meanings: ["見知らぬ人"], related: ["strange 形 奇妙な"] },
          { word: "go out of one's way", phonetic: "", pos: "定", meanings: ["わざわざ〜する"], related: [] },
          { word: "luggage", phonetic: "lʌ́gidʒ", pos: "名", meanings: ["荷物"], related: ["baggage 名 手荷物"] }
        ]
      },
      {
        id: 658,
        en: "The relentless pressure at work drove him into a state of chronic anxiety that affected every aspect of his life.",
        ja: "職場での容赦ないプレッシャーが彼を慢性的な不安状態に追い込み、生活のあらゆる面に影響を及ぼした。",
        words: [
          { word: "relentless", phonetic: "riléntlis", pos: "形", meanings: ["容赦ない、絶え間ない"], related: ["relent 動 和らぐ"] },
          { word: "drive", phonetic: "dráiv", pos: "動", meanings: ["追い込む、駆り立てる"], related: ["drove-driven"] },
          { word: "chronic", phonetic: "krɑ́nik", pos: "形", meanings: ["慢性的な"], related: ["⇔ acute 急性の"] },
          { word: "affect", phonetic: "əfékt", pos: "動", meanings: ["影響を及ぼす"], related: ["effect 名 効果", "affection 名 愛情"] }
        ]
      },
      {
        id: 659,
        en: "The child's innocent laughter was so contagious that even the grumpiest adults could not help but smile.",
        ja: "子供の無邪気な笑い声はとても伝染力があり、最も不機嫌な大人でさえ微笑まずにはいられなかった。",
        words: [
          { word: "innocent", phonetic: "ínəsnt", pos: "形", meanings: ["無邪気な、無実の"], related: ["innocence 名 無邪気さ、無実"] },
          { word: "laughter", phonetic: "lǽftər", pos: "名", meanings: ["笑い声"], related: ["laugh 動 笑う"] },
          { word: "contagious", phonetic: "kəntéidʒəs", pos: "形", meanings: ["伝染する、感染力のある"], related: ["contagion 名 伝染"] },
          { word: "grumpy", phonetic: "grʌ́mpi", pos: "形", meanings: ["不機嫌な、気難しい"], related: ["grumble 動 不平を言う"] },
          { word: "cannot help but", phonetic: "", pos: "定", meanings: ["〜せずにはいられない"], related: ["cannot help -ing"] }
        ]
      },
      {
        id: 660,
        en: "Grief manifests differently in every individual; some withdraw in silence while others seek comfort in companionship.",
        ja: "悲しみは人それぞれ異なる形で現れる。沈黙の中に引きこもる人もいれば、仲間との交わりに慰めを求める人もいる。",
        words: [
          { word: "grief", phonetic: "gríːf", pos: "名", meanings: ["深い悲しみ、悲嘆"], related: ["grieve 動 悲しむ"] },
          { word: "manifest", phonetic: "mǽnəfèst", pos: "動", meanings: ["現れる、明らかにする"], related: ["manifestation 名 表れ"] },
          { word: "withdraw", phonetic: "wiðdrɔ́ː", pos: "動", meanings: ["引きこもる、撤退する"], related: ["withdrawal 名 撤退"] },
          { word: "silence", phonetic: "sáiləns", pos: "名", meanings: ["沈黙"], related: ["silent 形 静かな"] },
          { word: "comfort", phonetic: "kʌ́mfərt", pos: "名", meanings: ["慰め、快適さ"], related: ["comfort 動 慰める", "comfortable 形 快適な"] },
          { word: "companionship", phonetic: "kəmpǽnjənʃìp", pos: "名", meanings: ["仲間付き合い、友情"], related: ["companion 名 仲間"] }
        ]
      }
    ]
  },
  {
    section: 63,
    title: "Travel & Tourism",
    sentences: [
      {
        id: 661,
        en: "The itinerary included a three-day excursion to the remote highland village accessible only by a narrow winding road.",
        ja: "旅程には狭い曲がりくねった道でしか行けない辺鄙な高地の村への3日間の遠足が含まれていた。",
        words: [
          { word: "itinerary", phonetic: "aitínərèri", pos: "名", meanings: ["旅程、旅行計画"], related: ["schedule/plan"] },
          { word: "excursion", phonetic: "ikskə́ːrʒən", pos: "名", meanings: ["遠足、小旅行"], related: ["trip/outing"] },
          { word: "remote", phonetic: "rimóut", pos: "形", meanings: ["辺鄙な、遠い"], related: ["remotely 副 遠く"] },
          { word: "highland", phonetic: "háilænd", pos: "名", meanings: ["高地"], related: ["⇔ lowland 低地"] },
          { word: "winding", phonetic: "wáindiŋ", pos: "形", meanings: ["曲がりくねった"], related: ["wind 動 曲がりくねる"] }
        ]
      },
      {
        id: 662,
        en: "Travelers are advised to obtain a valid visa well in advance to avoid complications at the port of entry.",
        ja: "旅行者は入国地での面倒を避けるためにあらかじめ有効なビザを取得するよう勧められている。",
        words: [
          { word: "traveler", phonetic: "trǽvələr", pos: "名", meanings: ["旅行者"], related: ["travel 動 旅行する"] },
          { word: "advise", phonetic: "ədváiz", pos: "動", meanings: ["忠告する、勧める"], related: ["advice 名 忠告", "adviser 名 助言者"] },
          { word: "obtain", phonetic: "əbtéin", pos: "動", meanings: ["取得する、入手する"], related: ["obtainable 形 入手可能な"] },
          { word: "visa", phonetic: "víːzə", pos: "名", meanings: ["ビザ、査証"], related: ["passport 名 パスポート"] },
          { word: "in advance", phonetic: "in ədvǽns", pos: "副", meanings: ["あらかじめ、事前に"], related: ["advance 名 前進"] },
          { word: "complication", phonetic: "kɑ̀mplikéiʃən", pos: "名", meanings: ["面倒、合併症"], related: ["complicate 動 複雑にする"] }
        ]
      },
      {
        id: 663,
        en: "The scenic overlook offered a breathtaking panoramic view of the valley blanketed in autumn foliage.",
        ja: "その景色の良い展望台からは秋の紅葉に覆われた谷の息をのむような全景が見えた。",
        words: [
          { word: "scenic", phonetic: "síːnik", pos: "形", meanings: ["景色の美しい"], related: ["scenery 名 景色", "scene 名 場面"] },
          { word: "overlook", phonetic: "óuvərlùk", pos: "名", meanings: ["展望台"], related: ["overlook 動 見渡す、見落とす"] },
          { word: "breathtaking", phonetic: "bréθtèikiŋ", pos: "形", meanings: ["息をのむような"], related: ["stunning/spectacular"] },
          { word: "panoramic", phonetic: "pæ̀nərǽmik", pos: "形", meanings: ["パノラマの、全景の"], related: ["panorama 名 パノラマ"] },
          { word: "foliage", phonetic: "fóuliidʒ", pos: "名", meanings: ["紅葉、葉"], related: ["leaf 名 葉"] }
        ]
      },
      {
        id: 664,
        en: "The backpacker spent months wandering through Southeast Asia on a shoestring budget, staying in hostels and street markets.",
        ja: "バックパッカーはわずかな予算で東南アジアを何ヶ月も放浪し、ホステルや屋台で過ごした。",
        words: [
          { word: "backpacker", phonetic: "bǽkpæ̀kər", pos: "名", meanings: ["バックパッカー"], related: ["backpack 名 リュック"] },
          { word: "wander", phonetic: "wɑ́ndər", pos: "動", meanings: ["放浪する、さまよう"], related: ["wanderer 名 放浪者"] },
          { word: "shoestring", phonetic: "ʃúːstrìŋ", pos: "形", meanings: ["わずかな、ごく少額の"], related: ["on a shoestring budget ごく低予算で"] },
          { word: "budget", phonetic: "bʌ́dʒit", pos: "名", meanings: ["予算"], related: ["budget 形 格安の"] },
          { word: "hostel", phonetic: "hɑ́stl", pos: "名", meanings: ["ホステル、安宿"], related: ["hotel 名 ホテル"] }
        ]
      },
      {
        id: 665,
        en: "The customs officer inspected the contents of the suitcase and confiscated the prohibited items.",
        ja: "税関職員はスーツケースの中身を検査し、禁止品を没収した。",
        words: [
          { word: "customs", phonetic: "kʌ́stəmz", pos: "名", meanings: ["税関"], related: ["customs officer 税関職員"] },
          { word: "inspect", phonetic: "inspékt", pos: "動", meanings: ["検査する"], related: ["inspection 名 検査", "inspector 名 検査官"] },
          { word: "suitcase", phonetic: "súːtkèis", pos: "名", meanings: ["スーツケース"], related: ["luggage/baggage"] },
          { word: "confiscate", phonetic: "kɑ́nfəskèit", pos: "動", meanings: ["没収する、押収する"], related: ["confiscation 名 没収"] },
          { word: "prohibited", phonetic: "prouhíbətid", pos: "形", meanings: ["禁止された"], related: ["prohibit 動 禁止する"] }
        ]
      },
      {
        id: 666,
        en: "The guided tour of the archaeological ruins gave visitors a vivid glimpse into the daily life of an ancient civilization.",
        ja: "遺跡のガイドツアーは訪問者に古代文明の日常生活の生き生きとした一端を見せた。",
        words: [
          { word: "guided", phonetic: "gáidid", pos: "形", meanings: ["ガイド付きの"], related: ["guide 名 ガイド"] },
          { word: "tour", phonetic: "túər", pos: "名", meanings: ["ツアー、旅行"], related: ["tourist 名 観光客", "tourism 名 観光"] },
          { word: "ruins", phonetic: "rúːinz", pos: "名", meanings: ["遺跡、廃墟"], related: ["ruin 動 台無しにする"] },
          { word: "glimpse", phonetic: "glímps", pos: "名", meanings: ["一瞥、垣間見ること"], related: ["glimpse 動 ちらっと見る"] },
          { word: "vivid", phonetic: "vívid", pos: "形", meanings: ["生き生きとした、鮮明な"], related: ["vividly 副 鮮明に"] }
        ]
      },
      {
        id: 667,
        en: "Jet lag left him disoriented for days after the fourteen-hour flight across multiple time zones.",
        ja: "複数の時間帯をまたぐ14時間のフライトの後、時差ぼけで数日間方向感覚を失った。",
        words: [
          { word: "jet lag", phonetic: "dʒét læ̀g", pos: "名", meanings: ["時差ぼけ"], related: ["jet 名 ジェット機"] },
          { word: "disoriented", phonetic: "disɔ́ːriəntid", pos: "形", meanings: ["方向感覚を失った、混乱した"], related: ["disorient 動 混乱させる"] },
          { word: "flight", phonetic: "fláit", pos: "名", meanings: ["フライト、飛行"], related: ["fly 動 飛ぶ"] },
          { word: "time zone", phonetic: "táim zóun", pos: "名", meanings: ["時間帯"], related: [] }
        ]
      },
      {
        id: 668,
        en: "The resort boasts luxurious accommodations, a private beach, and a world-class spa overlooking the turquoise sea.",
        ja: "そのリゾートは豪華な宿泊施設、プライベートビーチ、そしてターコイズブルーの海を見渡す世界クラスのスパを誇る。",
        words: [
          { word: "resort", phonetic: "rizɔ́ːrt", pos: "名", meanings: ["リゾート、行楽地"], related: [] },
          { word: "boast", phonetic: "bóust", pos: "動", meanings: ["誇る、自慢する"], related: ["boast 名 自慢"] },
          { word: "luxurious", phonetic: "lʌgʒúəriəs", pos: "形", meanings: ["豪華な、贅沢な"], related: ["luxury 名 贅沢"] },
          { word: "accommodation", phonetic: "əkɑ̀mədéiʃən", pos: "名", meanings: ["宿泊施設"], related: ["accommodate 動 収容する"] },
          { word: "turquoise", phonetic: "tə́ːrkwɔiz", pos: "形", meanings: ["ターコイズブルーの"], related: [] }
        ]
      },
      {
        id: 669,
        en: "The souvenir shop near the harbor was packed with handcrafted ornaments and locally made ceramics.",
        ja: "港の近くの土産物店は手作りの装飾品や地元製の陶磁器でいっぱいだった。",
        words: [
          { word: "souvenir", phonetic: "sùːvəníər", pos: "名", meanings: ["お土産"], related: ["memento/keepsake"] },
          { word: "harbor", phonetic: "hɑ́ːrbər", pos: "名", meanings: ["港"], related: ["port 名 港"] },
          { word: "packed", phonetic: "pǽkt", pos: "形", meanings: ["いっぱいの、混んだ"], related: ["pack 動 詰め込む"] },
          { word: "handcrafted", phonetic: "hǽndkræ̀ftid", pos: "形", meanings: ["手作りの"], related: ["craft 名 工芸"] },
          { word: "ceramics", phonetic: "sərǽmiks", pos: "名", meanings: ["陶磁器"], related: ["ceramic 形 陶器の"] }
        ]
      },
      {
        id: 670,
        en: "Ecotourism aims to promote conservation while allowing travelers to appreciate pristine natural habitats firsthand.",
        ja: "エコツーリズムは旅行者が手つかずの自然の生息地を直接鑑賞しつつ保全を促進することを目指す。",
        words: [
          { word: "ecotourism", phonetic: "ìːkoutúərizm", pos: "名", meanings: ["エコツーリズム"], related: ["ecology 名 生態学"] },
          { word: "promote", phonetic: "prəmóut", pos: "動", meanings: ["促進する"], related: ["promotion 名 促進"] },
          { word: "conservation", phonetic: "kɑ̀nsərvéiʃən", pos: "名", meanings: ["保全、保護"], related: ["conserve 動 保全する"] },
          { word: "pristine", phonetic: "prístìːn", pos: "形", meanings: ["手つかずの、原始の"], related: ["untouched/unspoiled"] },
          { word: "firsthand", phonetic: "fə́ːrsthǽnd", pos: "副", meanings: ["直接、じかに"], related: ["⇔ secondhand 間接的に"] }
        ]
      }
    ]
  },
  {
    section: 64,
    title: "Logical Thinking & Argumentation",
    sentences: [
      {
        id: 671,
        en: "The premise of her argument was flawed, which inevitably led to an erroneous conclusion.",
        ja: "彼女の議論の前提に欠陥があり、必然的に誤った結論に至った。",
        words: [
          { word: "premise", phonetic: "prémis", pos: "名", meanings: ["前提"], related: ["premises 名 敷地"] },
          { word: "flaw", phonetic: "flɔ́ː", pos: "名", meanings: ["欠陥、欠点"], related: ["flawed 形 欠陥のある", "flawless 形 完璧な"] },
          { word: "inevitably", phonetic: "inévətəbli", pos: "副", meanings: ["必然的に、避けられなく"], related: ["inevitable 形 避けられない"] },
          { word: "erroneous", phonetic: "iróuniəs", pos: "形", meanings: ["誤った"], related: ["error 名 誤り"] },
          { word: "conclusion", phonetic: "kənklúːʒən", pos: "名", meanings: ["結論"], related: ["conclude 動 結論づける"] }
        ]
      },
      {
        id: 672,
        en: "To refute the opposing viewpoint, he presented a compelling array of empirical data gathered over five years.",
        ja: "対立する見解を反論するために、彼は5年以上かけて集めた説得力のある経験的データを提示した。",
        words: [
          { word: "refute", phonetic: "rifjúːt", pos: "動", meanings: ["反論する、論破する"], related: ["refutation 名 反論"] },
          { word: "opposing", phonetic: "əpóuziŋ", pos: "形", meanings: ["対立する、反対の"], related: ["oppose 動 反対する", "opposition 名 反対"] },
          { word: "viewpoint", phonetic: "vjúːpɔ̀int", pos: "名", meanings: ["見解、観点"], related: ["perspective/standpoint"] },
          { word: "array", phonetic: "əréi", pos: "名", meanings: ["配列、ずらり並んだもの"], related: [] },
          { word: "empirical", phonetic: "empírikəl", pos: "形", meanings: ["経験的な、実証的な"], related: ["empiricism 名 経験主義"] }
        ]
      },
      {
        id: 673,
        en: "Correlation does not imply causation — a principle frequently overlooked in casual analysis of statistical trends.",
        ja: "相関は因果を意味しない — 統計的傾向の安易な分析でしばしば見落とされる原則である。",
        words: [
          { word: "correlation", phonetic: "kɔ̀ːrəléiʃən", pos: "名", meanings: ["相関"], related: ["correlate 動 相関する"] },
          { word: "imply", phonetic: "implái", pos: "動", meanings: ["暗示する、意味する"], related: ["implication 名 含意"] },
          { word: "causation", phonetic: "kɔːzéiʃən", pos: "名", meanings: ["因果関係"], related: ["cause 名 原因"] },
          { word: "overlook", phonetic: "òuvərlúk", pos: "動", meanings: ["見落とす"], related: ["oversight 名 見落とし"] },
          { word: "statistical", phonetic: "stətístikəl", pos: "形", meanings: ["統計の"], related: ["statistics 名 統計学", "statistic 名 統計値"] }
        ]
      },
      {
        id: 674,
        en: "The debater skillfully exploited the ambiguity in her opponent's phrasing to undermine the credibility of the entire argument.",
        ja: "討論者は相手の表現の曖昧さを巧みに利用し、議論全体の信頼性を損なった。",
        words: [
          { word: "debater", phonetic: "dibéitər", pos: "名", meanings: ["討論者"], related: ["debate 名/動 討論"] },
          { word: "skillfully", phonetic: "skílfəli", pos: "副", meanings: ["巧みに"], related: ["skillful 形 巧みな"] },
          { word: "exploit", phonetic: "iksplɔ́it", pos: "動", meanings: ["利用する、悪用する"], related: ["exploitation 名 利用"] },
          { word: "phrasing", phonetic: "fréiziŋ", pos: "名", meanings: ["言い回し、表現法"], related: ["phrase 名 句"] },
          { word: "credibility", phonetic: "krèdəbíləti", pos: "名", meanings: ["信頼性"], related: ["credible 形 信頼できる"] }
        ]
      },
      {
        id: 675,
        en: "A hypothesis must be testable and falsifiable; otherwise, it falls outside the scope of scientific inquiry.",
        ja: "仮説は検証可能かつ反証可能でなければならない。さもなければ科学的探究の範囲外になる。",
        words: [
          { word: "testable", phonetic: "téstəbl", pos: "形", meanings: ["検証可能な"], related: ["test 名/動 検査"] },
          { word: "falsifiable", phonetic: "fɔ́ːlsəfàiəbl", pos: "形", meanings: ["反証可能な"], related: ["falsify 動 偽造する、反証する"] },
          { word: "otherwise", phonetic: "ʌ́ðərwàiz", pos: "副", meanings: ["さもなければ"], related: [] },
          { word: "scope", phonetic: "skóup", pos: "名", meanings: ["範囲"], related: ["scope 動 調査する"] }
        ]
      },
      {
        id: 676,
        en: "Drawing an analogy between the human brain and a computer, while useful, oversimplifies the complexity of neural processes.",
        ja: "人間の脳とコンピュータの類推を引くことは有用だが、神経プロセスの複雑さを過度に単純化してしまう。",
        words: [
          { word: "analogy", phonetic: "ənǽlədʒi", pos: "名", meanings: ["類推、類似"], related: ["analogous 形 類似の"] },
          { word: "useful", phonetic: "júːsfəl", pos: "形", meanings: ["有用な"], related: ["use 名 使用", "⇔ useless 無用な"] },
          { word: "oversimplify", phonetic: "òuvərsímpləfài", pos: "動", meanings: ["過度に単純化する"], related: ["simplify 動 単純化する"] },
          { word: "complexity", phonetic: "kəmpléksəti", pos: "名", meanings: ["複雑さ"], related: ["complex 形 複雑な"] },
          { word: "neural", phonetic: "njúərəl", pos: "形", meanings: ["神経の"], related: ["neuron 名 神経細胞"] }
        ]
      },
      {
        id: 677,
        en: "His reasoning was logically coherent, yet it rested on an unproven assumption that weakened the overall persuasiveness.",
        ja: "彼の推論は論理的に首尾一貫していたが、証明されていない仮定に基づいており全体の説得力を弱めた。",
        words: [
          { word: "logically", phonetic: "lɑ́dʒikəli", pos: "副", meanings: ["論理的に"], related: ["logical 形 論理的な", "logic 名 論理"] },
          { word: "coherent", phonetic: "kouhíərənt", pos: "形", meanings: ["首尾一貫した"], related: ["coherence 名 首尾一貫性", "⇔ incoherent 支離滅裂な"] },
          { word: "rest on", phonetic: "rést ɑn", pos: "動", meanings: ["〜に基づく、〜に依存する"], related: ["rely on/depend on"] },
          { word: "unproven", phonetic: "ʌnprúːvən", pos: "形", meanings: ["証明されていない"], related: ["⇔ proven 証明済みの"] },
          { word: "persuasiveness", phonetic: "pərswéisivnis", pos: "名", meanings: ["説得力"], related: ["persuasive 形 説得力のある", "persuade 動 説得する"] }
        ]
      },
      {
        id: 678,
        en: "The fallacy of generalizing from a single case is one of the most common pitfalls in everyday reasoning.",
        ja: "単一事例から一般化する誤謬は日常的な推論における最も一般的な落とし穴の一つである。",
        words: [
          { word: "fallacy", phonetic: "fǽləsi", pos: "名", meanings: ["誤謬、詭弁"], related: ["fallacious 形 誤った"] },
          { word: "generalize", phonetic: "dʒénərəlàiz", pos: "動", meanings: ["一般化する"], related: ["generalization 名 一般化", "general 形 一般的な"] },
          { word: "pitfall", phonetic: "pítfɔ̀ːl", pos: "名", meanings: ["落とし穴、危険"], related: ["trap/hazard"] },
          { word: "everyday", phonetic: "évridèi", pos: "形", meanings: ["日常の"], related: ["daily/routine"] }
        ]
      },
      {
        id: 679,
        en: "She conceded that her initial stance had been too rigid and acknowledged the merit of the counterargument.",
        ja: "彼女は当初の立場が固すぎたことを認め、反論の利点を認めた。",
        words: [
          { word: "concede", phonetic: "kənsíːd", pos: "動", meanings: ["認める、譲歩する"], related: ["concession 名 譲歩"] },
          { word: "initial", phonetic: "iníʃəl", pos: "形", meanings: ["当初の、最初の"], related: ["initially 副 最初は"] },
          { word: "stance", phonetic: "stǽns", pos: "名", meanings: ["立場、姿勢"], related: ["position/standpoint"] },
          { word: "rigid", phonetic: "rídʒid", pos: "形", meanings: ["固い、厳格な"], related: ["rigidity 名 堅さ", "⇔ flexible 柔軟な"] },
          { word: "merit", phonetic: "mérit", pos: "名", meanings: ["利点、長所"], related: ["merit 動 値する", "⇔ demerit 短所"] },
          { word: "counterargument", phonetic: "káuntərɑ̀ːrgjəmənt", pos: "名", meanings: ["反論"], related: ["counter 形 反対の"] }
        ]
      },
      {
        id: 680,
        en: "Critical thinkers routinely evaluate the reliability of their sources before accepting any claim at face value.",
        ja: "批判的思考者はいかなる主張も額面通りに受け入れる前に情報源の信頼性を日常的に評価する。",
        words: [
          { word: "routinely", phonetic: "ruːtíːnli", pos: "副", meanings: ["日常的に、決まって"], related: ["routine 名 日課"] },
          { word: "evaluate", phonetic: "ivǽljuèit", pos: "動", meanings: ["評価する"], related: ["evaluation 名 評価"] },
          { word: "reliability", phonetic: "rilàiəbíləti", pos: "名", meanings: ["信頼性"], related: ["reliable 形 信頼できる"] },
          { word: "claim", phonetic: "kléim", pos: "名", meanings: ["主張"], related: ["claim 動 主張する"] },
          { word: "at face value", phonetic: "ət féis vǽljuː", pos: "定", meanings: ["額面通りに、そのまま"], related: [] }
        ]
      }
    ]
  },
  {
    section: 65,
    title: "Mathematics & Numbers",
    sentences: [
      {
        id: 681,
        en: "The equation was so complex that even the brightest students in the class struggled to derive the correct solution.",
        ja: "その方程式はとても複雑で、クラスで最も優秀な学生でさえ正しい解を導き出すのに苦労した。",
        words: [
          { word: "equation", phonetic: "ikwéiʒən", pos: "名", meanings: ["方程式、等式"], related: ["equal 形 等しい"] },
          { word: "complex", phonetic: "kəmpléks", pos: "形", meanings: ["複雑な"], related: ["complexity 名 複雑さ"] },
          { word: "brightest", phonetic: "bráitist", pos: "形", meanings: ["最も優秀な、最も明るい"], related: ["bright 形 聡明な"] },
          { word: "derive", phonetic: "diráiv", pos: "動", meanings: ["導き出す、由来する"], related: ["derivation 名 導出", "derivative 名 導関数"] },
          { word: "solution", phonetic: "səlúːʃən", pos: "名", meanings: ["解、解決策"], related: ["solve 動 解く"] }
        ]
      },
      {
        id: 682,
        en: "The ratio of applicants to available positions exceeded ten to one, making the selection process extremely competitive.",
        ja: "応募者と空きポジションの比率は10対1を超え、選考プロセスは極めて競争的になった。",
        words: [
          { word: "ratio", phonetic: "réiʃiou", pos: "名", meanings: ["比率、割合"], related: ["proportion 名 割合"] },
          { word: "exceed", phonetic: "iksíːd", pos: "動", meanings: ["超える、上回る"], related: ["excess 名 超過", "excessive 形 過度の"] },
          { word: "selection", phonetic: "silékʃən", pos: "名", meanings: ["選考、選択"], related: ["select 動 選ぶ", "selective 形 選択的な"] },
          { word: "extremely", phonetic: "ikstríːmli", pos: "副", meanings: ["極めて"], related: ["extreme 形 極端な"] }
        ]
      },
      {
        id: 683,
        en: "Roughly one-third of the annual budget is allocated to research, which amounts to approximately fifty million dollars.",
        ja: "年間予算のおよそ3分の1が研究に配分されており、それはおよそ5千万ドルに相当する。",
        words: [
          { word: "one-third", phonetic: "wʌ́n θə́ːrd", pos: "名", meanings: ["3分の1"], related: ["third 形 3番目の"] },
          { word: "annual", phonetic: "ǽnjuəl", pos: "形", meanings: ["年間の、毎年の"], related: ["annually 副 毎年"] },
          { word: "amount to", phonetic: "əmáunt tə", pos: "動", meanings: ["〜に相当する、合計〜になる"], related: ["amount 名 量、額"] },
          { word: "approximately", phonetic: "əprɑ́ksəmətli", pos: "副", meanings: ["およそ、約"], related: ["approximate 形 おおよその"] }
        ]
      },
      {
        id: 684,
        en: "The graph clearly illustrates an exponential increase in data consumption over the past decade.",
        ja: "そのグラフは過去10年間のデータ消費量の指数関数的な増加を明確に示している。",
        words: [
          { word: "graph", phonetic: "grǽf", pos: "名", meanings: ["グラフ"], related: ["graphic 形 グラフの、図式の"] },
          { word: "illustrate", phonetic: "íləstrèit", pos: "動", meanings: ["示す、図解する"], related: ["illustration 名 図解"] },
          { word: "exponential", phonetic: "èkspənénʃəl", pos: "形", meanings: ["指数関数的な、急激な"], related: ["exponent 名 指数"] },
          { word: "consumption", phonetic: "kənsʌ́mpʃən", pos: "名", meanings: ["消費"], related: ["consume 動 消費する", "consumer 名 消費者"] }
        ]
      },
      {
        id: 685,
        en: "The probability of winning the lottery is astronomically low, yet millions of people purchase tickets every week.",
        ja: "宝くじに当たる確率は天文学的に低いが、それでも毎週何百万人もの人がチケットを買っている。",
        words: [
          { word: "probability", phonetic: "prɑ̀bəbíləti", pos: "名", meanings: ["確率、可能性"], related: ["probable 形 ありそうな", "probably 副 おそらく"] },
          { word: "lottery", phonetic: "lɑ́təri", pos: "名", meanings: ["宝くじ"], related: [] },
          { word: "astronomically", phonetic: "æ̀strənɑ́mikəli", pos: "副", meanings: ["天文学的に、途方もなく"], related: ["astronomical 形 天文学的な"] },
          { word: "purchase", phonetic: "pə́ːrtʃəs", pos: "動", meanings: ["購入する"], related: ["purchase 名 購入", "buy/acquire"] }
        ]
      },
      {
        id: 686,
        en: "To calculate the area of the triangle, multiply the base by the height and divide the result by two.",
        ja: "三角形の面積を計算するには、底辺に高さを掛け、その結果を2で割る。",
        words: [
          { word: "calculate", phonetic: "kǽlkjəlèit", pos: "動", meanings: ["計算する"], related: ["calculation 名 計算", "calculator 名 計算機"] },
          { word: "area", phonetic: "éəriə", pos: "名", meanings: ["面積、地域"], related: [] },
          { word: "triangle", phonetic: "tráiæ̀ŋgl", pos: "名", meanings: ["三角形"], related: ["triangular 形 三角の"] },
          { word: "multiply", phonetic: "mʌ́ltəplài", pos: "動", meanings: ["掛ける、増やす"], related: ["multiplication 名 掛け算", "multiple 形 複数の"] },
          { word: "divide", phonetic: "diváid", pos: "動", meanings: ["割る、分ける"], related: ["division 名 割り算、分割"] }
        ]
      },
      {
        id: 687,
        en: "The survey revealed that the median household income in the region had stagnated for nearly fifteen consecutive years.",
        ja: "調査により、その地域の世帯所得の中央値が約15年連続で停滞していたことが明らかになった。",
        words: [
          { word: "survey", phonetic: "sə́ːrvei", pos: "名", meanings: ["調査"], related: ["survey 動 調査する"] },
          { word: "median", phonetic: "míːdiən", pos: "形", meanings: ["中央値の"], related: ["median 名 中央値", "average 名 平均"] },
          { word: "stagnate", phonetic: "stǽgnèit", pos: "動", meanings: ["停滞する"], related: ["stagnation 名 停滞", "stagnant 形 停滞した"] },
          { word: "consecutive", phonetic: "kənsékjətiv", pos: "形", meanings: ["連続した"], related: ["consecutively 副 連続して"] }
        ]
      },
      {
        id: 688,
        en: "The margin of error in the poll was plus or minus three percentage points, which made the outcome too close to call.",
        ja: "世論調査の誤差範囲はプラスマイナス3パーセントポイントで、結果は僅差で判定不能だった。",
        words: [
          { word: "margin", phonetic: "mɑ́ːrdʒin", pos: "名", meanings: ["余白、差、利幅"], related: ["marginal 形 わずかな"] },
          { word: "error", phonetic: "érər", pos: "名", meanings: ["誤差、誤り"], related: ["erroneous 形 誤った"] },
          { word: "poll", phonetic: "póul", pos: "名", meanings: ["世論調査、投票"], related: ["poll 動 調査する"] },
          { word: "percentage", phonetic: "pərséntidʒ", pos: "名", meanings: ["パーセンテージ、百分率"], related: ["percent 名 パーセント"] },
          { word: "outcome", phonetic: "áutkʌ̀m", pos: "名", meanings: ["結果"], related: ["result/consequence"] }
        ]
      },
      {
        id: 689,
        en: "The variable in the formula represents the rate at which the population doubles under ideal conditions.",
        ja: "公式中の変数は理想的な条件下で人口が2倍になる速度を表している。",
        words: [
          { word: "variable", phonetic: "véəriəbl", pos: "名", meanings: ["変数"], related: ["variable 形 変わりやすい", "vary 動 変わる"] },
          { word: "formula", phonetic: "fɔ́ːrmjələ", pos: "名", meanings: ["公式、数式"], related: ["formulate 動 公式化する", "複数形 formulas/formulae"] },
          { word: "represent", phonetic: "rèprizént", pos: "動", meanings: ["表す、代表する"], related: ["representation 名 表現"] },
          { word: "rate", phonetic: "réit", pos: "名", meanings: ["速度、率、割合"], related: ["rate 動 評価する"] },
          { word: "double", phonetic: "dʌ́bl", pos: "動", meanings: ["2倍になる"], related: ["double 形 2倍の"] }
        ]
      },
      {
        id: 690,
        en: "The accountant detected a subtle discrepancy between the estimated figures and the actual revenue recorded in the ledger.",
        ja: "会計士は見積もり数字と元帳に記録された実際の収益との間に微妙な食い違いを発見した。",
        words: [
          { word: "accountant", phonetic: "əkáuntənt", pos: "名", meanings: ["会計士"], related: ["accounting 名 会計", "account 名 口座"] },
          { word: "detect", phonetic: "ditékt", pos: "動", meanings: ["発見する、検出する"], related: ["detection 名 検出"] },
          { word: "discrepancy", phonetic: "diskrépənsi", pos: "名", meanings: ["食い違い、不一致"], related: ["⇔ consistency 一貫性"] },
          { word: "estimate", phonetic: "éstəmət", pos: "名", meanings: ["見積もり"], related: ["estimate 動 見積もる", "estimation 名 推定"] },
          { word: "figure", phonetic: "fígjər", pos: "名", meanings: ["数字、数値"], related: ["figure 動 計算する"] },
          { word: "ledger", phonetic: "lédʒər", pos: "名", meanings: ["元帳、台帳"], related: ["bookkeeping 名 簿記"] }
        ]
      }
    ]
  },
  {
    section: 66,
    title: "Language & Communication Skills",
    sentences: [
      {
        id: 691,
        en: "Acquiring fluency in a foreign language demands years of consistent practice and immersion in authentic contexts.",
        ja: "外国語の流暢さを身につけるには何年にもわたる一貫した練習と本物の環境への没入が必要だ。",
        words: [
          { word: "acquire", phonetic: "əkwáiər", pos: "動", meanings: ["習得する、取得する"], related: ["acquisition 名 習得、取得"] },
          { word: "fluency", phonetic: "flúːənsi", pos: "名", meanings: ["流暢さ"], related: ["fluent 形 流暢な", "fluently 副 流暢に"] },
          { word: "demand", phonetic: "dimǽnd", pos: "動", meanings: ["要求する、必要とする"], related: ["demand 名 需要、要求"] },
          { word: "immersion", phonetic: "imə́ːrʒən", pos: "名", meanings: ["没入、浸すこと"], related: ["immerse 動 浸す、没頭する"] },
          { word: "authentic", phonetic: "ɔːθéntik", pos: "形", meanings: ["本物の、正真正銘の"], related: ["authenticity 名 真正性"] }
        ]
      },
      {
        id: 692,
        en: "The interpreter simultaneously translated the diplomat's remarks into three languages with remarkable accuracy.",
        ja: "通訳者はその外交官の発言を3つの言語に驚くべき正確さで同時通訳した。",
        words: [
          { word: "interpreter", phonetic: "intə́ːrprətər", pos: "名", meanings: ["通訳者"], related: ["interpret 動 通訳する、解釈する"] },
          { word: "simultaneously", phonetic: "sàiməltéiniəsli", pos: "副", meanings: ["同時に"], related: ["simultaneous 形 同時の"] },
          { word: "translate", phonetic: "trænzléit", pos: "動", meanings: ["翻訳する"], related: ["translation 名 翻訳", "translator 名 翻訳者"] },
          { word: "remark", phonetic: "rimɑ́ːrk", pos: "名", meanings: ["発言、コメント"], related: ["remark 動 述べる", "remarkable 形 注目すべき"] },
          { word: "accuracy", phonetic: "ǽkjərəsi", pos: "名", meanings: ["正確さ"], related: ["accurate 形 正確な", "⇔ inaccuracy 不正確"] }
        ]
      },
      {
        id: 693,
        en: "Mispronouncing certain vowels can completely alter the meaning of a word, leading to embarrassing misunderstandings.",
        ja: "特定の母音を誤って発音すると単語の意味が完全に変わり、恥ずかしい誤解を招くことがある。",
        words: [
          { word: "mispronounce", phonetic: "mìsprənáuns", pos: "動", meanings: ["誤って発音する"], related: ["pronunciation 名 発音", "pronounce 動 発音する"] },
          { word: "vowel", phonetic: "váuəl", pos: "名", meanings: ["母音"], related: ["⇔ consonant 子音"] },
          { word: "alter", phonetic: "ɔ́ːltər", pos: "動", meanings: ["変える"], related: ["alteration 名 変更"] },
          { word: "embarrassing", phonetic: "imbǽrəsiŋ", pos: "形", meanings: ["恥ずかしい"], related: ["embarrass 動 恥ずかしがらせる", "embarrassment 名 恥ずかしさ"] },
          { word: "misunderstanding", phonetic: "mìsʌndərstǽndiŋ", pos: "名", meanings: ["誤解"], related: ["misunderstand 動 誤解する"] }
        ]
      },
      {
        id: 694,
        en: "The linguist's research demonstrated that bilingual children exhibit greater cognitive flexibility than their monolingual peers.",
        ja: "その言語学者の研究はバイリンガルの子供がモノリンガルの同年代より高い認知的柔軟性を示すことを実証した。",
        words: [
          { word: "linguist", phonetic: "líŋgwist", pos: "名", meanings: ["言語学者"], related: ["linguistics 名 言語学", "linguistic 形 言語の"] },
          { word: "bilingual", phonetic: "bailíŋgwəl", pos: "形", meanings: ["バイリンガルの、2か国語を話す"], related: ["⇔ monolingual 1か国語の"] },
          { word: "cognitive", phonetic: "kɑ́gnətiv", pos: "形", meanings: ["認知の"], related: ["cognition 名 認知"] },
          { word: "flexibility", phonetic: "flèksəbíləti", pos: "名", meanings: ["柔軟性"], related: ["flexible 形 柔軟な"] },
          { word: "monolingual", phonetic: "mɑ̀nəlíŋgwəl", pos: "形", meanings: ["1か国語しか話さない"], related: ["⇔ bilingual, multilingual"] }
        ]
      },
      {
        id: 695,
        en: "Effective public speaking hinges on clarity of expression, confident body language, and the ability to engage the audience.",
        ja: "効果的なパブリックスピーキングは表現の明瞭さ、自信のあるボディランゲージ、聴衆を引きつける能力にかかっている。",
        words: [
          { word: "hinge on", phonetic: "híndʒ ɑn", pos: "動", meanings: ["〜にかかっている、〜次第である"], related: ["hinge 名 蝶番"] },
          { word: "clarity", phonetic: "klǽrəti", pos: "名", meanings: ["明瞭さ"], related: ["clear 形 明瞭な", "clarify 動 明確にする"] },
          { word: "confident", phonetic: "kɑ́nfədənt", pos: "形", meanings: ["自信のある"], related: ["confidence 名 自信"] },
          { word: "engage", phonetic: "ingéidʒ", pos: "動", meanings: ["引きつける、従事する"], related: ["engagement 名 関与"] },
          { word: "audience", phonetic: "ɔ́ːdiəns", pos: "名", meanings: ["聴衆、観客"], related: ["auditorium 名 講堂"] }
        ]
      },
      {
        id: 696,
        en: "The essay was riddled with grammatical errors and lacked coherence, making it difficult for the reader to follow the argument.",
        ja: "そのエッセイは文法の誤りだらけで一貫性に欠けており、読者が議論を追うのが困難だった。",
        words: [
          { word: "riddle", phonetic: "rídl", pos: "動", meanings: ["〜だらけにする"], related: ["riddled with 〜だらけの"] },
          { word: "grammatical", phonetic: "grəmǽtikəl", pos: "形", meanings: ["文法の"], related: ["grammar 名 文法"] },
          { word: "lack", phonetic: "lǽk", pos: "動", meanings: ["欠く"], related: ["lack 名 欠如", "lacking 形 欠けている"] },
          { word: "coherence", phonetic: "kouhíərəns", pos: "名", meanings: ["一貫性"], related: ["coherent 形 一貫した"] },
          { word: "follow", phonetic: "fɑ́lou", pos: "動", meanings: ["追う、理解する"], related: ["following 形 次の"] }
        ]
      },
      {
        id: 697,
        en: "Slang evolves rapidly and often differs significantly from one generation to the next, reflecting shifts in cultural values.",
        ja: "スラングは急速に進化し世代間で大きく異なることが多く、文化的価値観の変化を反映している。",
        words: [
          { word: "slang", phonetic: "slǽŋ", pos: "名", meanings: ["スラング、俗語"], related: ["colloquial 形 口語の"] },
          { word: "evolve", phonetic: "ivɑ́lv", pos: "動", meanings: ["進化する、発展する"], related: ["evolution 名 進化"] },
          { word: "differ", phonetic: "dífər", pos: "動", meanings: ["異なる"], related: ["difference 名 違い", "different 形 異なる"] },
          { word: "generation", phonetic: "dʒènəréiʃən", pos: "名", meanings: ["世代"], related: ["generate 動 生み出す"] },
          { word: "reflect", phonetic: "riflékt", pos: "動", meanings: ["反映する、反射する"], related: ["reflection 名 反映、反射"] },
          { word: "shift", phonetic: "ʃíft", pos: "名", meanings: ["変化、移行"], related: ["shift 動 変える、移す"] }
        ]
      },
      {
        id: 698,
        en: "The idiom does not translate literally into Japanese; instead, a culturally equivalent expression must be substituted.",
        ja: "そのイディオムは日本語に直訳できない。代わりに文化的に等価な表現を代用する必要がある。",
        words: [
          { word: "idiom", phonetic: "ídiəm", pos: "名", meanings: ["イディオム、慣用句"], related: ["idiomatic 形 慣用的な"] },
          { word: "literally", phonetic: "lítərəli", pos: "副", meanings: ["文字通りに"], related: ["literal 形 文字通りの"] },
          { word: "equivalent", phonetic: "ikwívələnt", pos: "形", meanings: ["同等の、等価の"], related: ["equivalence 名 同等"] },
          { word: "substitute", phonetic: "sʌ́bstətjùːt", pos: "動", meanings: ["代用する、置き換える"], related: ["substitute 名 代用品", "substitution 名 代用"] }
        ]
      },
      {
        id: 699,
        en: "Her eloquent speech captivated the entire assembly, earning a prolonged standing ovation from the delegates.",
        ja: "彼女の雄弁なスピーチは会場全体を魅了し、代議員から長いスタンディングオベーションを受けた。",
        words: [
          { word: "eloquent", phonetic: "éləkwənt", pos: "形", meanings: ["雄弁な"], related: ["eloquence 名 雄弁"] },
          { word: "captivate", phonetic: "kǽptəvèit", pos: "動", meanings: ["魅了する"], related: ["captivating 形 魅惑的な"] },
          { word: "assembly", phonetic: "əsémbli", pos: "名", meanings: ["集会、会議"], related: ["assemble 動 集める"] },
          { word: "ovation", phonetic: "ouvéiʃən", pos: "名", meanings: ["大喝采"], related: ["standing ovation スタンディングオベーション"] },
          { word: "delegate", phonetic: "déləgət", pos: "名", meanings: ["代議員、代表"], related: ["delegate 動 委任する", "delegation 名 代表団"] }
        ]
      },
      {
        id: 700,
        en: "Nonverbal cues such as gestures, posture, and eye contact often convey more than spoken words in cross-cultural interactions.",
        ja: "ジェスチャー、姿勢、アイコンタクトなどの非言語的手がかりは異文化間の交流では話し言葉以上のものを伝えることが多い。",
        words: [
          { word: "nonverbal", phonetic: "nɑ̀nvə́ːrbəl", pos: "形", meanings: ["非言語的な"], related: ["verbal 形 言語の、口頭の"] },
          { word: "cue", phonetic: "kjúː", pos: "名", meanings: ["手がかり、合図"], related: ["cue 動 合図を出す"] },
          { word: "gesture", phonetic: "dʒéstʃər", pos: "名", meanings: ["ジェスチャー、身振り"], related: ["gesture 動 身振りをする"] },
          { word: "posture", phonetic: "pɑ́stʃər", pos: "名", meanings: ["姿勢"], related: [] },
          { word: "convey", phonetic: "kənvéi", pos: "動", meanings: ["伝える、運ぶ"], related: ["conveyance 名 伝達、運搬"] },
          { word: "cross-cultural", phonetic: "krɔ̀ːs kʌ́ltʃərəl", pos: "形", meanings: ["異文化間の"], related: ["culture 名 文化"] }
        ]
      }
    ]
  },
  {
    section: 67,
    title: "Ethics & Morality",
    sentences: [
      {
        id: 701,
        en: "The whistleblower risked her career to expose the corporation's deliberate concealment of hazardous waste disposal practices.",
        ja: "内部告発者は企業による有害廃棄物処理方法の意図的な隠蔽を暴露するために自らのキャリアを危険にさらした。",
        words: [
          { word: "whistleblower", phonetic: "wísəlblòuər", pos: "名", meanings: ["内部告発者"], related: ["blow the whistle 内部告発する"] },
          { word: "risk", phonetic: "rísk", pos: "動", meanings: ["危険にさらす"], related: ["risk 名 リスク", "risky 形 危険な"] },
          { word: "expose", phonetic: "ikspóuz", pos: "動", meanings: ["暴露する、さらす"], related: ["exposure 名 暴露"] },
          { word: "deliberate", phonetic: "dilíbərət", pos: "形", meanings: ["意図的な、故意の"], related: ["deliberately 副 故意に"] },
          { word: "concealment", phonetic: "kənsíːlmənt", pos: "名", meanings: ["隠蔽"], related: ["conceal 動 隠す"] },
          { word: "hazardous", phonetic: "hǽzərdəs", pos: "形", meanings: ["有害な、危険な"], related: ["hazard 名 危険"] }
        ]
      },
      {
        id: 702,
        en: "The dilemma between loyalty to a friend and adherence to the law placed him in an agonizing moral predicament.",
        ja: "友人への忠誠と法律の遵守の間のジレンマが彼を苦悩に満ちた道徳的窮地に追い込んだ。",
        words: [
          { word: "loyalty", phonetic: "lɔ́iəlti", pos: "名", meanings: ["忠誠、忠実"], related: ["loyal 形 忠実な", "⇔ disloyalty 不忠"] },
          { word: "adherence", phonetic: "ædhíərəns", pos: "名", meanings: ["遵守、固守"], related: ["adhere 動 固守する", "adherent 名 支持者"] },
          { word: "agonizing", phonetic: "ǽgənàiziŋ", pos: "形", meanings: ["苦悩に満ちた"], related: ["agony 名 苦悩", "agonize 動 苦悩する"] },
          { word: "predicament", phonetic: "pridíkəmənt", pos: "名", meanings: ["窮地、苦境"], related: ["dilemma/quandary"] }
        ]
      },
      {
        id: 703,
        en: "Utilitarians would argue that sacrificing the interests of the few for the greater good of the majority is morally justifiable.",
        ja: "功利主義者は多数の大きな利益のために少数の利益を犠牲にすることは道徳的に正当化できると主張するだろう。",
        words: [
          { word: "sacrifice", phonetic: "sǽkrəfàis", pos: "動", meanings: ["犠牲にする"], related: ["sacrifice 名 犠牲"] },
          { word: "interest", phonetic: "íntrəst", pos: "名", meanings: ["利益、関心"], related: ["interested 形 興味のある"] },
          { word: "greater good", phonetic: "gréitər gúd", pos: "名", meanings: ["より大きな善、公益"], related: [] },
          { word: "majority", phonetic: "mədʒɔ́ːrəti", pos: "名", meanings: ["多数派、大多数"], related: ["major 形 主要な", "⇔ minority 少数派"] },
          { word: "justifiable", phonetic: "dʒʌ̀stəfáiəbl", pos: "形", meanings: ["正当化できる"], related: ["justify 動 正当化する", "justification 名 正当化"] }
        ]
      },
      {
        id: 704,
        en: "Plagiarism is considered a grave breach of academic integrity, often resulting in expulsion from the institution.",
        ja: "盗用は学問的誠実さの重大な違反とみなされ、しばしば機関からの退学処分となる。",
        words: [
          { word: "plagiarism", phonetic: "pléidʒərìzm", pos: "名", meanings: ["盗用、剽窃"], related: ["plagiarize 動 盗用する"] },
          { word: "breach", phonetic: "bríːtʃ", pos: "名", meanings: ["違反、不履行"], related: ["breach 動 違反する"] },
          { word: "integrity", phonetic: "intégrəti", pos: "名", meanings: ["誠実さ、完全性"], related: ["integral 形 不可欠な"] },
          { word: "result in", phonetic: "rizʌ́lt in", pos: "動", meanings: ["〜という結果になる"], related: ["result 名 結果"] },
          { word: "expulsion", phonetic: "ikspʌ́lʃən", pos: "名", meanings: ["退学、追放"], related: ["expel 動 追放する"] }
        ]
      },
      {
        id: 705,
        en: "The charity was accused of misappropriating donated funds intended for disaster relief in developing nations.",
        ja: "その慈善団体は途上国での災害救援を目的とした寄付金を不正に流用した疑いをかけられた。",
        words: [
          { word: "charity", phonetic: "tʃǽrəti", pos: "名", meanings: ["慈善団体、慈善"], related: ["charitable 形 慈善の"] },
          { word: "accuse", phonetic: "əkjúːz", pos: "動", meanings: ["告発する、非難する"], related: ["accusation 名 告発", "accused 名 被告人"] },
          { word: "misappropriate", phonetic: "mìsəpróuprieit", pos: "動", meanings: ["不正流用する、横領する"], related: ["appropriate 動 充当する"] },
          { word: "donate", phonetic: "dóuneit", pos: "動", meanings: ["寄付する"], related: ["donation 名 寄付", "donor 名 寄付者"] },
          { word: "relief", phonetic: "rilíːf", pos: "名", meanings: ["救援、安堵"], related: ["relieve 動 和らげる"] }
        ]
      },
      {
        id: 706,
        en: "The philosopher questioned whether it is ever permissible to deceive someone, even with benevolent intentions.",
        ja: "その哲学者は、たとえ善意であっても人を欺くことが許されるのかどうかを問うた。",
        words: [
          { word: "permissible", phonetic: "pərmísəbl", pos: "形", meanings: ["許される、許容できる"], related: ["permit 動 許可する", "permission 名 許可"] },
          { word: "deceive", phonetic: "disíːv", pos: "動", meanings: ["欺く、騙す"], related: ["deception 名 欺き", "deceptive 形 紛らわしい"] },
          { word: "benevolent", phonetic: "bənévələnt", pos: "形", meanings: ["善意の、慈悲深い"], related: ["benevolence 名 善意", "⇔ malevolent 悪意の"] },
          { word: "intention", phonetic: "inténʃən", pos: "名", meanings: ["意図"], related: ["intend 動 意図する", "intentional 形 意図的な"] }
        ]
      },
      {
        id: 707,
        en: "Corporate social responsibility obliges companies to consider the welfare of communities affected by their operations.",
        ja: "企業の社会的責任は企業に対し、その事業活動の影響を受ける地域社会の福祉を考慮する義務を課す。",
        words: [
          { word: "responsibility", phonetic: "rispɑ̀nsəbíləti", pos: "名", meanings: ["責任"], related: ["responsible 形 責任のある"] },
          { word: "oblige", phonetic: "əbláidʒ", pos: "動", meanings: ["義務づける"], related: ["obligation 名 義務", "obligatory 形 義務的な"] },
          { word: "consider", phonetic: "kənsídər", pos: "動", meanings: ["考慮する"], related: ["consideration 名 考慮", "considerable 形 かなりの"] },
          { word: "welfare", phonetic: "wélfeər", pos: "名", meanings: ["福祉、幸福"], related: ["well-being 名 幸福"] },
          { word: "operation", phonetic: "ɑ̀pəréiʃən", pos: "名", meanings: ["事業活動、操作"], related: ["operate 動 操作する"] }
        ]
      },
      {
        id: 708,
        en: "The defendant's attorney invoked the principle of self-defense to justify what the prosecution characterized as excessive force.",
        ja: "被告の弁護士は検察が過剰な暴力と特徴づけたものを正当化するために正当防衛の原則を援用した。",
        words: [
          { word: "invoke", phonetic: "invóuk", pos: "動", meanings: ["援用する、呼び出す"], related: ["invocation 名 祈願、援用"] },
          { word: "self-defense", phonetic: "sèlf diféns", pos: "名", meanings: ["正当防衛、自衛"], related: ["defend 動 守る"] },
          { word: "justify", phonetic: "dʒʌ́stəfài", pos: "動", meanings: ["正当化する"], related: ["justification 名 正当化"] },
          { word: "characterize", phonetic: "kǽrəktəràiz", pos: "動", meanings: ["特徴づける"], related: ["character 名 特性"] },
          { word: "excessive", phonetic: "iksésiv", pos: "形", meanings: ["過度の、行きすぎた"], related: ["excess 名 過剰"] }
        ]
      },
      {
        id: 709,
        en: "Privacy advocates warn that mass surveillance by governments poses a fundamental threat to civil liberties.",
        ja: "プライバシー擁護者は政府による大規模監視が市民的自由への根本的な脅威であると警告する。",
        words: [
          { word: "privacy", phonetic: "práivəsi", pos: "名", meanings: ["プライバシー"], related: ["private 形 私的な"] },
          { word: "advocate", phonetic: "ǽdvəkət", pos: "名", meanings: ["擁護者"], related: ["advocate 動 擁護する"] },
          { word: "surveillance", phonetic: "sərvéiləns", pos: "名", meanings: ["監視"], related: ["survey 動 調査する"] },
          { word: "pose", phonetic: "póuz", pos: "動", meanings: ["（脅威を）もたらす"], related: ["pose 名 ポーズ"] },
          { word: "civil liberties", phonetic: "sívəl líbərtiz", pos: "名", meanings: ["市民的自由"], related: ["liberty 名 自由"] }
        ]
      },
      {
        id: 710,
        en: "The ethical implications of cloning human beings remain fiercely contested, with compelling arguments on both sides of the debate.",
        ja: "ヒトのクローン作成の倫理的含意は激しく議論されており、討論の両側に説得力のある議論がある。",
        words: [
          { word: "ethical", phonetic: "éθikəl", pos: "形", meanings: ["倫理的な"], related: ["ethics 名 倫理学"] },
          { word: "implication", phonetic: "ìmplikéiʃən", pos: "名", meanings: ["含意、影響"], related: ["imply 動 暗示する"] },
          { word: "cloning", phonetic: "klóuniŋ", pos: "名", meanings: ["クローン作成"], related: ["clone 名/動 クローン"] },
          { word: "contest", phonetic: "kəntést", pos: "動", meanings: ["異議を唱える、争う"], related: ["contested 形 議論の余地がある"] },
          { word: "compelling", phonetic: "kəmpéliŋ", pos: "形", meanings: ["説得力のある"], related: ["compel 動 強いる"] }
        ]
      }
    ]
  }
];
