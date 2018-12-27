var secClses = [
    ['演唱会', '音乐节', '小型现场', '音乐会'],
    ['歌舞剧', '话剧', '戏曲', '儿童剧'],
    ['热映', '发布会'],
    ['艺术', '动漫', '科技'],
    ['体育', '电子竞技'],
    ['人文', '科学'],
    ['公益', '课程', '签售会', '发布会']
]

var classes = ['推荐','音乐','戏剧','电影','展览','赛事','讲座','其他'];
var classEng = ['music','drama','movie','exhibition','match','lecture','other'];

// itemInfo['music'][0]['name'] -> '李荣浩“年少有为”巡回演唱会'
var itemInfo = 
    {
        'music':[
            {
                'name':'李荣浩“年少有为”<br>巡回演唱会',
                'short':'李荣浩“年少有为”<br>北京演唱会 ',
                'date': '2019-05-18',
                'time':'19:30',
                'location':'北京凯迪拉克中心<br/>北京市海淀区复兴路69号',
                'hot':'400',
                'kind':'演唱会',
                'src':'../imgs/music/music1.jpg'
            },
            {
                'name':'Xmas音乐节',
                'short':'Xmas音乐节<br/>圣诞前夜 来点不一young', 
                'date':'2018-12-24',
                'time':'19:00-22:00',
                'location':'北京 朝阳区<br/>天草之间BSP live House',
                'hot':'120',
                'kind':'音乐节',
                'src':'../imgs/music/music2.jpg'
            },
            {
                'name':'西本智实2019<br>新年音乐会',
                'short':'西本智实与日本辉煌艺术<br/>爱乐乐团2019新年音乐会',
                'date': '2018-12-23',
                'time':'19:30-21:30',
                'location':'北京 中山音乐堂<br/>北京市天安门西侧中山公园',
                'hot':'230',
                'kind':'音乐会',
                'src':'../imgs/music/music3.jpg'
            },
            {
                'name':'小野丽莎<br/>2018巡回演唱会',
                'short':'小野丽莎<br/>2018巡回演唱会', 
                'date':'2018-12-25',
                'time':'20:00-22:00',
                'location':'北展剧场<br/>北京西城区西直门外大街135号',
                'hot':'242',
                'kind':'演唱会',
                'src':'../imgs/music/music4.jpg'
            },
            {
                'name':'维也纳莫扎特乐团<br/>2019北京新年音乐会',
                'date':'2018-12-31 & 2019-01-01',
                'time':'19:30-21:30',
                'location':'北京音乐厅<br/>北京西城区北新华街1号',
                'hot':'168',
                'fee':'350-1177',
                'kind':'音乐会',
                'src':'../imgs/music/music5.jpg'
            },
            {
                'name':'林宥嘉IDOL偶像<br/>巡回演唱会2019北京站',
                'date':'2019-07-13',
                'time':'19:30-21:30',
                'location':'北京凯迪拉克中心<br/>北京市海淀区复兴路69号',
                'hot':'510',
                'fee':'99-9002',
                'kind':'演唱会',
                'src':'../imgs/music/music6.jpg'
            },
            {
                'name':'12.31南锣鼓巷<br/>樂暮跨年音乐会',
                'date':'2018-12-31',
                'time':'22:00-23:59',
                'location':'北京【PINKMOON】<br/>南锣鼓巷雨儿胡同2号2楼',
                'hot':'72',
                'kind':'音乐节',
                'src':'../imgs/music/music7.jpg'
            },
            {
                'name':'蘑菇元旦民谣音乐会',
                'date':'2019-01-01',
                'time':'20:30-22:30',
                'location':'北京海淀区蘑菇商店<br/>钻河中心2号楼东侧底商102',
                'hot':'29',
                'kind':'小型现场',
                'src':'../imgs/music/music8.jpg'
            },
            {
                'name':'蘑菇推荐<br/>蘑菇元旦午后弹唱会',
                'date':'2019-01-01',
                'time':'16:30-18:00',
                'location':'北京海淀区蘑菇商店<br/>交大东路66号钻河中心2号楼东侧底商102',
                'hot':'18',
                'fee':'50',
                'kind':'小型现场',
                'src':'../imgs/music/music9.jpg'
            },
            {
                'name':'蘑菇跨年音乐会<br/>再见2018，你好2019',
                'date':'2018-12-31',
                'time':'21:00-23:30',
                'location':'北京海淀区<br/>交大东路66号钻河中心2号楼东侧底商102',
                'fee':'77',
                'kind':'音乐会',
                'src':'../imgs/music/music10.jpg'
            },
            {
                'name':'蜗牛迎新年音乐会<br/>蜗牛小酒馆',
                'date':'2019-01-01',
                'time':'21:00-23:30',
                'location':'交道口南大街大兴胡同73号<br/>蜗牛小酒馆',
                'fee':'80-100',
                'kind':'小型现场',
                'src':'../imgs/music/music11.jpg'
            },
            {
				'name':'国家大剧院迎钟声音乐会',
			    'date':'2018-12-31',
			    'time':'23:00-02:00',
			    'location':'北京国家大剧院音乐厅<br/>西城区西长安街2号（天安门西侧）',
			    'hot':'180',
			    'fee':'500 - 600',
			    'kind':'音乐会',
			    'src':'../imgs/music/music12.jpg'
			},
			{
				'name':'第23届北京新年音乐会',
			    'date':'2018-12-31',
			    'time':'19:30-21:30',
			    'location':'北京人民大会堂<br/>北京西城区西长安街',
			    'hot':'100',
			    'fee':'441-2019',
			    'kind':'音乐会',
			    'src':'../imgs/music/music13.jpg'
			},
			{
				'name':'2019郭富城<br/>舞林密码巡回演唱会-北京站',
			    'date':'2019-06-01',
			    'time':'19:30-21:30',
			    'location':'北京凯迪拉克中心<br/>北京市海淀区复兴路69号',
			    'hot':'200',
			    'fee':'90 - 900',
			    'kind':'演唱会',
			    'src':'../imgs/music/music14.jpg'
			},
			{
				'name':'《艾克 拜尔》<br/>小型现场歌友会',
			    'date':'2019-01-15',
			    'time':'19:00-23:00',
			    'location':'北京市朝阳区小关街道通联大厦<br/>惠新西街南口',
			    'hot':'109',
			    'fee':'200',
			    'kind':'音乐节',
			    'src':'../imgs/music/music15.jpg'
			},
			{
				'name':'Claptraps<br/>+ 后来的岛屿 + anxt ',
			    'date':'2018-12-29',
			    'time':'21:00-23:00',
			    'location':'北京东城区美术馆后街<br/>山老胡同14号',
			    'hot':'110',
			    'fee':'50',
			    'kind':'小型现场',
			    'src':'../imgs/music/music16.jpg'
			}
        ],
        'other':[
            {
                'name':'奥林匹克公园环保公益活动',
                'short':'保护环境才从我做起<br/>——奥林匹克公园环保公益活动 ',
                'time': '持续至2019.01.26',
                'src':'../imgs/other/other1.jpg'
            },
            {
                'name':'周日一起画线描',
                'short':'周日一起画线描<br/>——线下绘画课程', 
                'time':'持续至2018.12.30',
                'src':'../imgs/other/other2.jpg'
            },
            {
                'name':'图书管理员志愿者招募',
                'short':'到城市边缘做图书管理员<br/>——志愿者招募',
                'time': '持续至2018.12.31',
                'src':'../imgs/other/other3.jpg'
            },
            {
                'name':'古典视频制作课',
                'short':'古典视频制作课<br/>——制作一只发簪', 
                'time':'持续至2019.03.01',
                'src':'../imgs/other/other4.jpg'
            }
        ],
        'drama':[
        	{
                'name':'《谈判专家》',
                'short':'开心麻花2019爆笑贺岁舞台剧<br/>《谈判专家》 ',
                'time': '2019.01.01-01.27',
                'src':'../imgs/drama/drama1.jpg'
            },
            {
                'name':'《李尔王》',
                'short':'国家大剧院制作<br/>威廉·莎士比亚话剧《李尔王》', 
                'time':'2019.01.26-02.02',
                'src':'../imgs/drama/drama2.jpg'
            },
            {
                'name':'《蝴蝶变形记》',
                'short':'孟京辉作品狂躁喜剧<br/>《蝴蝶变形记》',
                'time': '2019.01.24-01.27',
                'src':'../imgs/drama/drama3.jpg'
            },
            {
                'name':'《茶花女》',
                'short':'国家大剧院制作意大利歌剧<br/>泰斗威尔第歌剧《茶花女》', 
                'time':'2019.01.22-01.26',
                'src':'../imgs/drama/drama4.jpg'
            }
        ],
        'lecture':[
            {
                'name':'首师讲坛十五',
                'short':'漫谈古迹保护的目标与路径 ',
                'time': '持续至2018.12.24',
                'src':'../imgs/lecture/lecture1.jpg'

            },
            {

                'name':'情绪管理讲座分享会',
                'short':'抑郁焦虑失眠等情绪管理讲座分享会 ',
                'time': '持续至2019.02.08',
                'src':'../imgs/lecture/lecture2.jpg'
            },
            {

                'name':'互联网电商分享会',
                'short':'互联网电商资本与项目对接与分享 ',
                'time': '持续至2019.02.08',
                'src':'../imgs/lecture/lecture3.jpg'
            },
            {

                'name':'英语口语交流会',
                'short':'下班来聚聚<br/>和老外一起说英语 ',
                'time': '持续至2019.01.30',
                'src':'../imgs/lecture/lecture4.jpg'
            }
        ],
        'match':[
            {
                'name':'中国男子篮球职业联赛',
                'short':'CBA联赛首钢vs马可波罗 ',
                'time': '2018.12.28',
                'src':'../imgs/match/match1.jpg'
            },
            {
                'name':'悦节拍音乐半程马拉松',
                'short':'Run to The Beat<br/>悦节拍音乐半程马拉松', 
                'time':'2019.05.19',
                'src':'../imgs/match/match2.jpg'
            },
            {
                'name':'丝路超级冰球联赛',
                'short':'西本智实与日本辉煌艺术<br/>爱乐乐团2019新年音乐会',
                'time': '2018.12.25',
                'src':'../imgs/match/match3.jpg'
            },
            {
                'name':'中国女子乒超联赛',
                'short':'丝路超级冰球联赛', 
                'time':'持续至2019.02.23',
                'src':'../imgs/match/match4.jpg'
            }
        ],
        'exhibition':[
            {
                'name':'BIGBANG10 THE EXHIBITION ',
                'short':'BIGBANG10 THE EXHIBITION:<br/>A TO Z十周年回顾大展北京站 ',
                'time': '2018.12.07-2019.02.24',
                'src':'../imgs/exhibition/exhibition1.jpg'
            },
            {
                'name':'流光永恒——奥黛丽·赫本展',
                'short':'流光永恒——奥黛丽·赫本展：<br/>穿越至赫本的好莱坞黄金时代', 
                'time':'2018.12.12-2019.02.20',
                'src':'../imgs/exhibition/exhibition2.jpg'
            },
            {
                'name':'天野喜孝《交织の幻想》',
                'short':'日本画家天野喜孝《交织の幻想》<br/>中国巡展北京站',
                'time': '2018.11.03-2019.02.01',
                'src':'../imgs/exhibition/exhibition3.jpg'
            },
            {
                'name':'观唐艺术区首届艺术季桃花源',
                'short':'观唐艺术区首届艺术季桃花源', 
                'time':'2018.09.15-2019.03.31',
                'src':'../imgs/exhibition/exhibition4.jpg'
            }
        ],
        'movie':[
            {
                'name':'悲伤逆流成河',
                'short':'悲伤逆流成河：<br/>再见青春 ',
                'time': '2019.08.30上映',
                'src':'../imgs/movie/movie1.jpg'
            },
            {
                'name':'惊奇队长',
                'short':'漫威影业出品科幻电影：<br/>惊奇队长', 
                'time':'2019.03.08上映',
                'src':'../imgs/movie/movie2.jpg'
            },
            {
                'name':'X战警：黑凤凰',
                'short':'X战警：<br/>黑凤凰',
                'time': '2019.06.07上映',
                'src':'../imgs/movie/movie3.jpg'
            },
            {
                'name':'蜘蛛侠：英雄归来2',
                'short':'蜘蛛侠：<br/>英雄归来2', 
                'time':'2019.07.05上映',
                'src':'../imgs/movie/movie4.jpg'
            }
        ]
    };