// DUO 3.0 Vocabulary Data - OCR extracted
// Sections 1-4 (sentences 1-32+)
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
          { word: "Take it easy", phonetic: "", pos: "定", meanings: ["気楽にやれ、くよくよするな", "別れの挨拶：じゃあね"] },
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
  }
];
