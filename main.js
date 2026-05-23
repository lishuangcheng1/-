const knowledge = {
      "北京市": { short: "北京", abbr: "京", capital: "北京", region: "华北", sights: "故宫、八达岭长城、颐和园、天坛、恭王府", food: "北京烤鸭、炸酱面", people: "老舍、梅兰芳", cities: "东城、西城、海淀、朝阳", clue: "华北平原北缘，靠近天津与河北。" },
      "天津市": { short: "天津", abbr: "津", capital: "天津", region: "华北", sights: "天津古文化街、盘山、五大道、天津之眼、意式风情区", food: "煎饼果子、麻花", people: "霍元甲、曹禺", cities: "和平、南开、滨海新区", clue: "紧邻北京东南，是重要港口城市。" },
      "河北省": { short: "河北", abbr: "冀", capital: "石家庄", region: "华北", sights: "承德避暑山庄、山海关、白洋淀、野三坡、西柏坡", food: "驴肉火烧、缸炉烧饼", people: "赵云、曹雪芹", cities: "石家庄、唐山、保定、秦皇岛", clue: "环抱北京、天津，东临渤海。" },
      "山西省": { short: "山西", abbr: "晋", capital: "太原", region: "华北", sights: "五台山、云冈石窟、平遥古城、雁门关、皇城相府", food: "刀削面、陈醋", people: "关羽、司马光", cities: "太原、大同、临汾、晋中", clue: "在太行山以西，黄河东岸。" },
      "内蒙古自治区": { short: "内蒙古", abbr: "蒙", capital: "呼和浩特", region: "华北", sights: "响沙湾、成吉思汗陵、阿尔山柴河、满洲里套娃、额济纳胡杨林", food: "手把肉、奶茶、烤全羊", people: "成吉思汗、德德玛", cities: "呼和浩特、包头、赤峰、鄂尔多斯", clue: "横跨中国北部，呈东西向长条形。" },
      "辽宁省": { short: "辽宁", abbr: "辽", capital: "沈阳", region: "东北", sights: "沈阳故宫、金石滩、本溪水洞、千山、盘锦红海滩", food: "锅包肉、海鲜、老边饺子", people: "张学良、雷锋", cities: "沈阳、大连、鞍山、丹东", clue: "东北最南端，辽东半岛伸向渤海和黄海。" },
      "吉林省": { short: "吉林", abbr: "吉", capital: "长春", region: "东北", sights: "长白山、伪满皇宫、净月潭、长影世纪城、六鼎山", food: "冷面、人参鸡汤", people: "李四光、黄大年", cities: "长春、吉林、延边、通化", clue: "在辽宁以北、黑龙江以南，东靠长白山。" },
      "黑龙江省": { short: "黑龙江", abbr: "黑", capital: "哈尔滨", region: "东北", sights: "五大连池、镜泊湖、漠河北极村、虎林虎头、太阳岛", food: "红肠、锅包肉、杀猪菜", people: "萧红、孔令辉", cities: "哈尔滨、齐齐哈尔、牡丹江、大庆", clue: "中国最东北，冬季冰雪特色鲜明。" },
      "上海市": { short: "上海", abbr: "沪", capital: "上海", region: "华东", sights: "东方明珠、上海科技馆、上海野生动物园、豫园、外滩", food: "生煎、小笼包、本帮菜", people: "徐光启、姚明", cities: "黄浦、浦东、徐汇、杨浦", clue: "长江入海口附近，面向东海。" },
      "江苏省": { short: "江苏", abbr: "苏", capital: "南京", region: "华东", sights: "苏州园林、中山陵、周庄、瘦西湖、鼋头渚", food: "盐水鸭、大闸蟹", people: "项羽、钱钟书", cities: "南京、苏州、无锡、扬州", clue: "长江下游，东临黄海，南接上海和浙江。" },
      "浙江省": { short: "浙江", abbr: "浙", capital: "杭州", region: "华东", sights: "西湖、乌镇、普陀山、横店影视城、雁荡山", food: "西湖醋鱼、龙井虾仁", people: "鲁迅、王羲之", cities: "杭州、宁波、温州、绍兴", clue: "在上海以南，东海之滨。" },
      "安徽省": { short: "安徽", abbr: "皖", capital: "合肥", region: "华东", sights: "黄山、九华山、天柱山、西递宏村、天堂寨", food: "臭鳜鱼、符离集烧鸡", people: "包拯、朱元璋", cities: "合肥、芜湖、黄山、安庆", clue: "夹在江苏、浙江、江西、湖北、河南之间。" },
      "福建省": { short: "福建", abbr: "闽", capital: "福州", region: "华东", sights: "武夷山、鼓浪屿、福建土楼、太姥山、三坊七巷", food: "佛跳墙、沙茶面、鱼丸", people: "林则徐、严复", cities: "福州、厦门、泉州、漳州", clue: "东南沿海，与台湾隔海相望。" },
      "江西省": { short: "江西", abbr: "赣", capital: "南昌", region: "华东", sights: "庐山、井冈山、三清山、龙虎山、婺源江湾", food: "瓦罐汤、南昌拌粉", people: "陶渊明、文天祥", cities: "南昌、九江、赣州、景德镇", clue: "在湖南东边、福建西边，赣江纵贯南北。" },
      "山东省": { short: "山东", abbr: "鲁", capital: "济南", region: "华东", sights: "泰山、曲阜三孔、崂山、蓬莱阁、台儿庄古城", food: "煎饼卷大葱、把子肉", people: "孔子、孟子", cities: "济南、青岛、烟台、曲阜", clue: "黄河下游，半岛伸入渤海和黄海。" },
      "河南省": { short: "河南", abbr: "豫", capital: "郑州", region: "华中", sights: "龙门石窟、少林寺、云台山、清明上河园、老君山", food: "烩面、胡辣汤", people: "杜甫、岳飞", cities: "郑州、洛阳、开封、安阳", clue: "中原腹地，黄河穿过北部。" },
      "湖北省": { short: "湖北", abbr: "鄂", capital: "武汉", region: "华中", sights: "黄鹤楼、武当山、三峡大坝、神农架、恩施大峡谷", food: "热干面、武昌鱼", people: "屈原、李时珍", cities: "武汉、宜昌、襄阳、荆州", clue: "长江中游，武汉三镇在这里。" },
      "湖南省": { short: "湖南", abbr: "湘", capital: "长沙", region: "华中", sights: "张家界武陵源、岳阳楼、韶山、崀山、凤凰古城", food: "剁椒鱼头、臭豆腐", people: "蔡伦、齐白石", cities: "长沙、岳阳、衡阳、湘西", clue: "洞庭湖以南，紧邻湖北。" },
      "广东省": { short: "广东", abbr: "粤", capital: "广州", region: "华南", sights: "丹霞山、长隆旅游度假区、白云山、罗浮山、开平碉楼", food: "早茶、肠粉、烧鹅", people: "孙中山、詹天佑", cities: "广州、深圳、珠海、佛山", clue: "中国大陆南部沿海，珠江三角洲所在地。" },
      "广西壮族自治区": { short: "广西", abbr: "桂", capital: "南宁", region: "华南", sights: "桂林漓江、青秀山、德天瀑布、涠洲岛、两江四湖", food: "螺蛳粉、桂林米粉", people: "李宗仁、石达开", cities: "南宁、桂林、柳州、北海", clue: "在广东以西、云南以东，南临北部湾。" },
      "海南省": { short: "海南", abbr: "琼", capital: "海口", region: "华南", sights: "蜈支洲岛、南山文化旅游区、分界洲岛、呀诺达、大小洞天", food: "文昌鸡、海南粉、清补凉", people: "海瑞", cities: "海口、三亚、儋州、琼海", clue: "中国最南的省份，是南海中的热带岛屿。" },
      "重庆市": { short: "重庆", abbr: "渝", capital: "重庆", region: "西南", sights: "武隆喀斯特、大足石刻、巫山小三峡、酉阳桃花源、洪崖洞", food: "火锅、小面", people: "聂荣臻、刘伯承", cities: "渝中、江北、万州、涪陵", clue: "长江和嘉陵江交汇，山城地形明显。" },
      "四川省": { short: "四川", abbr: "川", capital: "成都", region: "西南", sights: "九寨沟、黄龙、峨眉山、都江堰青城山、乐山大佛", food: "火锅、担担面、麻婆豆腐", people: "李白、苏轼", cities: "成都、绵阳、乐山、阿坝", clue: "位于四川盆地及周边山地，西接青藏高原。" },
      "贵州省": { short: "贵州", abbr: "黔", capital: "贵阳", region: "西南", sights: "黄果树瀑布、荔波小七孔、西江千户苗寨、梵净山、镇远古城", food: "酸汤鱼、丝娃娃", people: "王阳明、丁宝桢", cities: "贵阳、遵义、安顺、黔东南", clue: "云贵高原东部，多山、多喀斯特地貌。" },
      "云南省": { short: "云南", abbr: "滇", capital: "昆明", region: "西南", sights: "丽江古城、石林、西双版纳、玉龙雪山、崇圣寺三塔", food: "过桥米线、汽锅鸡", people: "郑和、聂耳", cities: "昆明、大理、丽江、西双版纳", clue: "中国西南边陲，少数民族文化丰富。" },
      "西藏自治区": { short: "西藏", abbr: "藏", capital: "拉萨", region: "西南", sights: "布达拉宫、大昭寺、纳木错、巴松措、珠穆朗玛峰", food: "糌粑、酥油茶", people: "仓央嘉措", cities: "拉萨、日喀则、林芝、阿里", clue: "青藏高原主体，平均海拔很高。" },
      "陕西省": { short: "陕西", abbr: "陕", capital: "西安", region: "西北", sights: "秦始皇兵马俑、华山、大雁塔、大唐芙蓉园、黄帝陵", food: "肉夹馍、羊肉泡馍、凉皮", people: "司马迁、张骞", cities: "西安、咸阳、延安、汉中", clue: "关中平原在这里，南有秦岭、北接黄土高原。" },
      "甘肃省": { short: "甘肃", abbr: "甘", capital: "兰州", region: "西北", sights: "敦煌鸣沙山月牙泉、嘉峪关、张掖丹霞、崆峒山、麦积山", food: "兰州牛肉面、酿皮", people: "李广、姜维", cities: "兰州、敦煌、天水、张掖", clue: "形状狭长，河西走廊连接中原与西域。" },
      "青海省": { short: "青海", abbr: "青", capital: "西宁", region: "西北", sights: "青海湖、塔尔寺、茶卡盐湖、可可西里、祁连卓尔山", food: "手抓羊肉、酸奶", people: "格萨尔王传说", cities: "西宁、海东、玉树、海西", clue: "在青藏高原东北部，黄河、长江源区附近。" },
      "宁夏回族自治区": { short: "宁夏", abbr: "宁", capital: "银川", region: "西北", sights: "沙坡头、镇北堡西部影城、水洞沟、贺兰山岩画、西夏王陵", food: "羊肉臊子面、手抓羊肉", people: "李元昊", cities: "银川、石嘴山、吴忠、中卫", clue: "黄河穿境而过，位于甘肃、内蒙古、陕西之间。" },
      "新疆维吾尔自治区": { short: "新疆", abbr: "新", capital: "乌鲁木齐", region: "西北", sights: "天山天池、喀纳斯、可可托海、葡萄沟、那拉提", food: "大盘鸡、烤包子、抓饭", people: "林则徐曾谪戍伊犁", cities: "乌鲁木齐、喀什、伊犁、吐鲁番", clue: "中国西北最大省级行政区，天山横贯中部。" },
      "台湾省": { short: "台湾", abbr: "台", capital: "台北", region: "华东", sights: "日月潭、阿里山、台北故宫博物院、太鲁阁、垦丁", food: "牛肉面、卤肉饭、凤梨酥", people: "林语堂、邓丽君", cities: "台北、高雄、台中、台南", clue: "位于东南海上，隔台湾海峡与福建相望。" },
      "香港特别行政区": { short: "香港", abbr: "港", capital: "香港", region: "华南", sights: "维多利亚港、太平山、香港迪士尼、海洋公园、昂坪360", food: "港式点心、菠萝包", people: "金庸、梅艳芳", cities: "中西区、九龙、沙田、离岛", clue: "在珠江口东侧，紧邻深圳。" },
      "澳门特别行政区": { short: "澳门", abbr: "澳", capital: "澳门", region: "华南", sights: "大三巴牌坊、妈阁庙、澳门历史城区、路环、澳门塔", food: "葡挞、猪扒包", people: "冼星海", cities: "澳门半岛、氹仔、路环", clue: "在珠江口西侧，紧邻珠海。" }
    };

    const map = document.querySelector("#map");
    const scoreEl = document.querySelector("#score");
    const streakEl = document.querySelector("#streak");
    const roundEl = document.querySelector("#round");
    const totalEl = document.querySelector("#total");
    const promptLabel = document.querySelector("#promptLabel");
    const promptEl = document.querySelector("#prompt");
    const hintEl = document.querySelector("#hint");
    const feedbackEl = document.querySelector("#feedback");
    const infoCard = document.querySelector("#infoCard");
    const nextBtn = document.querySelector("#nextBtn");
    const hintBtn = document.querySelector("#hintBtn");
    const answerForm = document.querySelector("#answerForm");
    const answerInput = document.querySelector("#answerInput");
    const submitAnswerBtn = document.querySelector("#submitAnswerBtn");
    const regionFilter = document.querySelector("#regionFilter");
    const mistakeList = document.querySelector("#mistakeList");
    const modeBtns = document.querySelectorAll("[data-mode]");
    const zoomInBtn = document.querySelector("#zoomInBtn");
    const zoomOutBtn = document.querySelector("#zoomOutBtn");
    const resetMapBtn = document.querySelector("#resetMapBtn");

    const width = 1000;
    const height = 760;
    const padding = 28;
    const interactiveFeatures = window.CHINA_GEOJSON.features
      .filter((feature) => knowledge[feature.properties.name])
      .map((feature) => ({ feature, data: knowledge[feature.properties.name] }));
    const extraFeatures = window.CHINA_GEOJSON.features.filter((feature) => !knowledge[feature.properties.name]);

    let bounds = getProjectedBounds(interactiveFeatures.map((item) => item.feature));
    let scale = Math.min((width - padding * 2) / (bounds.maxX - bounds.minX), (height - padding * 2) / (bounds.maxY - bounds.minY));
    let offsetX = (width - (bounds.maxX - bounds.minX) * scale) / 2;
    let offsetY = (height - (bounds.maxY - bounds.minY) * scale) / 2;
    let mode = "locate";
    let score = 0;
    let streak = 0;
    let round = 1;
    let target = null;
    let answered = false;
    let currentRegion = "all";
    let mistakes = new Map();
    let autoNextTimer = null;
    let viewBox = { x: 0, y: 0, w: width, h: height };
    let activePointers = new Map();
    let lastPanPoint = null;
    let lastPinchDistance = 0;
    let pendingTapName = null;
    let pointerStartPoint = null;
    let pointerMoved = false;

    totalEl.textContent = interactiveFeatures.length;

    function project(coord) {
      const [x0, y0] = projectRaw(coord);
      return [
        offsetX + (x0 - bounds.minX) * scale,
        offsetY + (bounds.maxY - y0) * scale
      ];
    }

    function projectRaw(coord) {
      const lon = coord[0];
      const lat = Math.max(-85, Math.min(85, coord[1]));
      const rad = lat * Math.PI / 180;
      return [lon, Math.log(Math.tan(Math.PI / 4 + rad / 2)) * 180 / Math.PI];
    }

    function getProjectedBounds(features) {
      const box = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
      features.forEach((feature) => visitCoords(feature.geometry.coordinates, (coord) => {
        const [x, y] = projectRaw(coord);
        box.minX = Math.min(box.minX, x);
        box.maxX = Math.max(box.maxX, x);
        box.minY = Math.min(box.minY, y);
        box.maxY = Math.max(box.maxY, y);
      }));
      return box;
    }

    function visitCoords(coords, callback) {
      if (typeof coords[0] === "number") {
        callback(coords);
        return;
      }
      coords.forEach((item) => visitCoords(item, callback));
    }

    function pathFromGeometry(geometry) {
      const polygons = geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates;
      return polygons.map((polygon) => polygon.map((ring) => ring.map((coord, index) => {
        const [x, y] = project(coord);
        return `${index === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`;
      }).join(" ") + " Z").join(" ")).join(" ");
    }

    function labelPoint(feature) {
      const props = feature.properties;
      const coord = props.centroid || props.center;
      return project(coord);
    }

    function drawMap() {
      map.innerHTML = "";
      extraFeatures.forEach((feature) => {
        const path = svg("path", { class: "boundary-extra", d: pathFromGeometry(feature.geometry) });
        map.appendChild(path);
      });

      interactiveFeatures.forEach(({ feature, data }) => {
        const group = svg("g", { "data-name": feature.properties.name });
        const path = svg("path", {
          class: "province",
          d: pathFromGeometry(feature.geometry),
          tabindex: "0",
          role: "button",
          "aria-label": data.short
        });
        path.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") chooseProvince(feature.properties.name);
        });
        path.addEventListener("mouseenter", () => {
          path.classList.add("focused");
          if (mode === "study") showInfo(feature.properties.name, false);
        });
        path.addEventListener("mouseleave", () => {
          if (!answered) path.classList.remove("focused");
        });

        const [x, y] = labelPoint(feature);
        const label = svg("text", {
          class: `label ${data.short.length <= 2 ? "small-label" : ""}`,
          x: x.toFixed(1),
          y: y.toFixed(1)
        });
        label.textContent = data.short;
        group.append(path, label);
        map.appendChild(group);
      });
      applyRegionFilter();
    }

    function svg(tag, attrs) {
      const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
      Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
      return element;
    }

    function applyViewBox() {
      clampViewBox();
      map.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
    }

    function clampViewBox() {
      viewBox.w = Math.max(width / 10, Math.min(width, viewBox.w));
      viewBox.h = Math.max(height / 10, Math.min(height, viewBox.h));
      viewBox.x = Math.max(0, Math.min(width - viewBox.w, viewBox.x));
      viewBox.y = Math.max(0, Math.min(height - viewBox.h, viewBox.y));
    }

    function zoomMap(factor, clientX, clientY) {
      const rect = map.getBoundingClientRect();
      const px = clientX == null ? rect.left + rect.width / 2 : clientX;
      const py = clientY == null ? rect.top + rect.height / 2 : clientY;
      const rx = (px - rect.left) / rect.width;
      const ry = (py - rect.top) / rect.height;
      const mapX = viewBox.x + rx * viewBox.w;
      const mapY = viewBox.y + ry * viewBox.h;
      const nextW = viewBox.w * factor;
      const nextH = viewBox.h * factor;
      viewBox.x = mapX - rx * nextW;
      viewBox.y = mapY - ry * nextH;
      viewBox.w = nextW;
      viewBox.h = nextH;
      applyViewBox();
    }

    function panMap(dx, dy) {
      const rect = map.getBoundingClientRect();
      viewBox.x -= dx / rect.width * viewBox.w;
      viewBox.y -= dy / rect.height * viewBox.h;
      applyViewBox();
    }

    function resetMapView() {
      viewBox = { x: 0, y: 0, w: width, h: height };
      applyViewBox();
    }

    function pickPool() {
      return interactiveFeatures.filter(({ data }) => currentRegion === "all" || data.region === currentRegion);
    }

    function pickTarget() {
      clearTimeout(autoNextTimer);
      const pool = pickPool();
      const candidates = pool.filter((item) => !target || item.feature.properties.name !== target.feature.properties.name);
      target = candidates[Math.floor(Math.random() * candidates.length)] || pool[0];
      answered = mode === "study";
      document.body.dataset.mode = mode;
      document.body.dataset.answered = answered ? "true" : "false";
      map.classList.toggle("study-mode", mode === "study");
      feedbackEl.textContent = "";
      answerInput.value = "";
      answerInput.disabled = mode === "study";
      submitAnswerBtn.disabled = mode === "study";
      answerInput.placeholder = mode === "study" ? "自由学模式无需答题" : "输入省份名称，如：广东";
      hintEl.textContent = mode === "study" ? "学习模式下，点击地图任意省份查看知识卡。" : "先看它在中国的大致方位，再点击省份轮廓。";
      clearMapState();

      if (mode === "locate") {
        promptLabel.textContent = "请在地图上点出";
        promptEl.textContent = target.data.short;
      } else if (mode === "capital") {
        promptLabel.textContent = "省会/首府/行政中心是";
        promptEl.textContent = target.data.capital;
      } else if (mode === "feature") {
        promptLabel.textContent = "这些特色属于哪里";
        promptEl.textContent = `${target.data.sights.split("、")[0]} / ${target.data.food.split("、")[0]}`;
      } else {
        promptLabel.textContent = "自由学习";
        promptEl.textContent = "点哪里，学哪里";
        hintEl.textContent = "不答题、不计分。直接点击地图上的省份，右侧会固定显示它的介绍。";
      }
      if (isMobileLayout()) showInfo(target.feature.properties.name, false);
      updateStats();
    }

    function isMobileLayout() {
      return window.matchMedia("(max-width: 768px)").matches;
    }

    function chooseProvince(name) {
      if (mode === "study") {
        showInfo(name, true);
        feedbackEl.textContent = `正在学习：${knowledge[name].short}`;
        return;
      }
      if (answered) return;

      const path = getPath(name);
      const right = name === target.feature.properties.name;
      if (right) {
        answered = true;
        document.body.dataset.answered = "true";
        score += 10 + Math.min(streak, 5) * 2;
        streak += 1;
        path.classList.add("correct", "target");
        revealAnswer();
        showInfo(target.feature.properties.name, true);
        feedbackEl.textContent = `答对了：${knowledge[name].short}，属于${knowledge[name].region}。`;
        scheduleNext(4200);
      } else {
        answered = true;
        document.body.dataset.answered = "true";
        streak = 0;
        mistakes.set(target.feature.properties.name, target.data.short);
        path.classList.add("wrong");
        revealAnswer();
        showInfo(target.feature.properties.name, true);
        feedbackEl.textContent = `答错了。正确答案：${target.data.short}。${target.data.clue}`;
        renderMistakes();
        scheduleNext(5200);
      }
      updateStats();
    }

    function normalizeAnswer(value) {
      return value
        .trim()
        .replace(/\s/g, "")
        .replace(/特别行政区|维吾尔自治区|壮族自治区|回族自治区|自治区|省|市/g, "");
    }

    function findProvinceByAnswer(value) {
      const normalized = normalizeAnswer(value);
      if (!normalized) return null;
      return interactiveFeatures.find(({ feature, data }) => {
        const candidates = [
          feature.properties.name,
          data.short,
          data.abbr,
          data.capital
        ].map(normalizeAnswer);
        return candidates.includes(normalized);
      });
    }

    function revealAnswer() {
      const rightName = target.feature.properties.name;
      getPath(rightName)?.classList.add("target");
      getLabel(rightName)?.classList.add("reveal");
    }

    function scheduleNext(delay) {
      clearTimeout(autoNextTimer);
      autoNextTimer = setTimeout(() => {
        round = (round % Math.max(1, pickPool().length)) + 1;
        pickTarget();
      }, delay);
    }

    function showInfo(name, focusMap) {
      const item = knowledge[name];
      if (!item) return;
      if (focusMap) {
        document.querySelectorAll(".province").forEach((path) => path.classList.remove("focused"));
        getPath(name)?.classList.add("focused");
      }
      infoCard.innerHTML = `
        <h2>${item.short} <span style="color: var(--muted); font-size: 16px;">${item.abbr}</span></h2>
        <div class="meta">${item.region} · 行政中心：${item.capital}</div>
        <div class="facts">
          <div class="fact"><span class="tag">位置</span><span>${item.clue}</span></div>
          <div class="fact"><span class="tag">5A/热门</span><span>${item.sights}</span></div>
          <div class="fact"><span class="tag">美食</span><span>${item.food}</span></div>
          <div class="fact"><span class="tag">人物</span><span>${item.people}</span></div>
          <div class="fact"><span class="tag">城市</span><span>${item.cities}</span></div>
        </div>
        ${mode === "study" ? `<div class="quick-grid">${interactiveFeatures.map(({ feature, data }) => `<button type="button" data-jump="${feature.properties.name}">${data.short}</button>`).join("")}</div>` : ""}
      `;
      infoCard.querySelectorAll("[data-jump]").forEach((button) => {
        button.addEventListener("click", () => chooseProvince(button.dataset.jump));
      });
    }

    function getPath(name) {
      return document.querySelector(`[data-name="${name}"] .province`);
    }

    function getLabel(name) {
      return document.querySelector(`[data-name="${name}"] .label`);
    }

    function clearMapState() {
      document.querySelectorAll(".province").forEach((path) => {
        path.classList.remove("correct", "wrong", "target", "focused");
      });
      document.querySelectorAll(".label").forEach((label) => label.classList.remove("reveal"));
      applyRegionFilter();
    }

    function applyRegionFilter() {
      interactiveFeatures.forEach(({ feature, data }) => {
        const path = getPath(feature.properties.name);
        if (!path) return;
        path.classList.toggle("dimmed", currentRegion !== "all" && data.region !== currentRegion);
      });
    }

    function renderMistakes() {
      if (!mistakes.size) {
        mistakeList.textContent = "答错的省份会出现在这里，方便复习。";
        return;
      }
      mistakeList.textContent = Array.from(mistakes.values()).join("、");
    }

    function updateStats() {
      scoreEl.textContent = score;
      streakEl.textContent = streak;
      roundEl.textContent = round;
    }

    nextBtn.addEventListener("click", () => {
      clearTimeout(autoNextTimer);
      round = (round % Math.max(1, pickPool().length)) + 1;
      pickTarget();
    });

    answerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (mode === "study") {
        feedbackEl.textContent = "自由学模式不用答题，直接点击地图学习。";
        return;
      }
      if (answered) return;
      const match = findProvinceByAnswer(answerInput.value);
      if (!match) {
        feedbackEl.textContent = "没有识别到这个省级行政区，可以输入简称或全称，比如“广东”或“广东省”。";
        answerInput.select();
        return;
      }
      chooseProvince(match.feature.properties.name);
    });

    hintBtn.addEventListener("click", () => {
      if (mode === "study") {
        hintEl.textContent = "现在不用答题。直接点击任意省份，右侧会显示它的位置、省会、5A/热门景区、美食、人物和代表城市。";
        return;
      }
      hintEl.textContent = target.data.clue;
      const path = getPath(target.feature.properties.name);
      path?.classList.add("target");
    });

    regionFilter.addEventListener("change", () => {
      currentRegion = regionFilter.value;
      round = 1;
      applyRegionFilter();
      pickTarget();
    });

    modeBtns.forEach((button) => {
      button.addEventListener("click", () => {
        modeBtns.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        mode = button.dataset.mode;
        pickTarget();
      });
    });

    zoomInBtn.addEventListener("click", () => zoomMap(0.62));
    zoomOutBtn.addEventListener("click", () => zoomMap(1.28));
    resetMapBtn.addEventListener("click", resetMapView);

    map.addEventListener("wheel", (event) => {
      event.preventDefault();
      zoomMap(event.deltaY < 0 ? 0.78 : 1.16, event.clientX, event.clientY);
    }, { passive: false });

    map.addEventListener("pointerdown", (event) => {
      try {
        map.setPointerCapture(event.pointerId);
      } catch (error) {
        // Some mobile browsers do not allow capture after SVG child events.
      }
      activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      const province = event.target.closest?.(".province");
      if (activePointers.size === 1) {
        lastPanPoint = { x: event.clientX, y: event.clientY };
        pointerStartPoint = { x: event.clientX, y: event.clientY };
        pointerMoved = false;
        pendingTapName = province?.parentElement?.dataset.name || null;
      } else if (activePointers.size === 2) {
        pendingTapName = null;
        const points = Array.from(activePointers.values());
        lastPinchDistance = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
      }
    });

    map.addEventListener("pointermove", (event) => {
      if (!activePointers.has(event.pointerId)) return;
      activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      if (activePointers.size === 1 && lastPanPoint) {
        const totalMove = pointerStartPoint
          ? Math.hypot(event.clientX - pointerStartPoint.x, event.clientY - pointerStartPoint.y)
          : 0;
        if (totalMove > 7) pointerMoved = true;
        if (pointerMoved) panMap(event.clientX - lastPanPoint.x, event.clientY - lastPanPoint.y);
        lastPanPoint = { x: event.clientX, y: event.clientY };
      } else if (activePointers.size === 2) {
        pointerMoved = true;
        const points = Array.from(activePointers.values());
        const distance = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
        if (lastPinchDistance) {
          const centerX = (points[0].x + points[1].x) / 2;
          const centerY = (points[0].y + points[1].y) / 2;
          zoomMap(lastPinchDistance / distance, centerX, centerY);
        }
        lastPinchDistance = distance;
      }
    });

    function endPointer(event) {
      if (event.type === "pointerup" && activePointers.size === 1 && pendingTapName && !pointerMoved) {
        chooseProvince(pendingTapName);
      }
      activePointers.delete(event.pointerId);
      lastPanPoint = null;
      lastPinchDistance = 0;
      pendingTapName = null;
      pointerStartPoint = null;
      pointerMoved = false;
    }

    map.addEventListener("pointerup", endPointer);
    map.addEventListener("pointercancel", endPointer);
    map.addEventListener("pointerleave", endPointer);

    drawMap();
    applyViewBox();
    pickTarget();
