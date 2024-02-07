var rule = {
    title:'哔哩',
    host:'https://api.bilibili.com',
    homeUrl:'/x/web-interface/ranking/v2?rid=0&type=origin',
    url:'/x/web-interface/search/type?search_type=videofyfilter',
    class_name:'推荐&音乐&舞蹈&健身&风景&美食&生活&综艺',
    class_url:'推荐&音乐&舞蹈&健身&风景&美食&生活&综艺',
    filterable: 1,
    filter_url: '&keyword={{fl.tid}}&page=fypage&duration={{fl.duration}}&order={{fl.order}}',
    filter_def:{
        推荐:{tid:'推荐'},
        音乐:{tid:'音乐'},
        舞蹈:{tid:'舞蹈'},
        健身:{tid:'健身'},
        风景:{tid:'风景'},
        美食:{tid:'美食'},
        综艺:{tid:'综艺'}
    },
    filter: {
        "音乐":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多播放","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部时长","v":"0"},{"n":"10分钟以下","v":"1"},{"n":"10~30分钟","v":"2"},{"n":"30~60分钟","v":"3"},{"n":"60分钟以上","v":"4"}]},{"key":"tid","name":"分类","value":[{"n":"全部分类","v":"音乐"},{"n":"歌曲","v":"歌曲"},{"n":"MV","v":"MV"},{"n":"演唱会","v":"演唱会"}]}],
        "舞蹈":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多播放","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部时长","v":"0"},{"n":"10分钟以下","v":"1"},{"n":"10~30分钟","v":"2"},{"n":"30~60分钟","v":"3"},{"n":"60分钟以上","v":"4"}]},{"key":"tid","name":"分类","value":[{"n":"全部分类","v":"舞蹈"},{"n":"舞剧","v":"舞剧"},{"n":"古典舞","v":"古典舞"},{"n":"民族舞","v":"民族舞"},{"n":"芭蕾舞","v":"芭蕾舞"},{"n":"现代舞","v":"现代舞"},{"n":"拉丁舞","v":"拉丁舞"},{"n":"街舞","v":"街舞"},{"n":"钢管舞","v":"钢管舞"}]}],
        "健身":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多播放","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部时长","v":"0"},{"n":"10分钟以下","v":"1"},{"n":"10~30分钟","v":"2"},{"n":"30~60分钟","v":"3"},{"n":"60分钟以上","v":"4"}]},{"key":"tid","name":"分类","value":[{"n":"全部分类","v":"健身"},{"n":"广场舞","v":"广场舞"},{"n":"瑜伽","v":"瑜伽"},{"n":"帕梅拉","v":"帕梅拉"}]}],
        "风景":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多播放","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部时长","v":"0"},{"n":"10分钟以下","v":"1"},{"n":"10~30分钟","v":"2"},{"n":"30~60分钟","v":"3"},{"n":"60分钟以上","v":"4"}]},{"key":"tid","name":"分类","value":[{"n":"全部分类","v":"风景"},{"n":"美国街景","v":"美国街景"},{"n":"欧洲街景","v":"欧洲街景"},{"n":"亚洲街景","v":"亚洲街景"},{"n":"日本街景","v":"日本街景"},{"n":"韩国街景","v":"韩国街景"},{"n":"台湾街景","v":"台湾街景"}]}],
        "美食":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多播放","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部时长","v":"0"},{"n":"10分钟以下","v":"1"},{"n":"10~30分钟","v":"2"},{"n":"30~60分钟","v":"3"},{"n":"60分钟以上","v":"4"}]},{"key":"tid","name":"分类","value":[{"n":"全部分类","v":"美食"},{"n":"菜谱","v":"菜谱"},{"n":"美食探店","v":"美食探店"}]}],
        "生活":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多播放","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部时长","v":"0"},{"n":"10分钟以下","v":"1"},{"n":"10~30分钟","v":"2"},{"n":"30~60分钟","v":"3"},{"n":"60分钟以上","v":"4"}]},{"key":"tid","name":"分类","value":[{"n":"全部分类","v":"生活"},{"n":"","v":""},{"n":"","v":""},{"n":"","v":""},{"n":"","v":""}]}],
        "综艺":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多播放","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部时长","v":"0"},{"n":"10分钟以下","v":"1"},{"n":"10~30分钟","v":"2"},{"n":"30~60分钟","v":"3"},{"n":"60分钟以上","v":"4"}]},{"key":"tid","name":"分类","value":[{"n":"全部分类","v":"综艺"},{"n":"台湾综艺","v":"台湾综艺"},{"n":"日本综艺","v":"日本综艺"},{"n":"韩国综艺","v":"韩国综艺"}]}]
    },
    detailUrl:'/x/web-interface/view/detail?aid=fyid',//二级详情拼接链接(json格式用)
    searchUrl:'/x/web-interface/search/type?search_type=video&keyword=**&page=fypage',
    searchable:2,
    quickSearch:0,
    headers:{
        "User-Agent":"PC_UA",
        "Referer": "https://www.bilibili.com",
        "Cookie":"DedeUserID=690781341;DedeUserID__ckMd5=cabc96906269c5b6;SESSDATA=2245ba24%2C1684212125%2C466fd%2Ab2;bili_jct=de6fdb60c10f8a83910aa55d79407b4e"
    },
    timeout:5000,
    limit:8,
    play_parse:true,
    lazy:`js:
        let ids = input.split('_');
        let dan = 'https://api.bilibili.com/x/v1/dm/list.so?oid=' + ids[1];
        let result = {};
        let iurl = 'https://api.bilibili.com:443/x/player/playurl?avid=' + ids[0] + '&cid=' + ids[1] + '&qn=116';
        let html = request(iurl);
        let jRoot = JSON.parse(html);
        let jo = jRoot.data;
        let ja = jo.durl;
        let maxSize = -1;
        let position = -1;
        ja.forEach(function(tmpJo, i) {
            if (maxSize < Number(tmpJo.size)) {
                maxSize = Number(tmpJo.size);
                position = i
            }
        });
        let purl = '';
        if (ja.length > 0) {
            if (position === -1) {
                position = 0
            }
            purl = ja[position].url
        }
        result.parse = 0;
        result.playUrl = '';
        result.url = unescape(purl);
        result.header = {
            'Referer': 'https://live.bilibili.com',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36'
        };
        if (/\\.flv/.test(purl)) {
            result.contentType = 'video/x-flv';
        } else {
            result.contentType = '';
        }
        result.danmaku = dan;
        input = result
    `,
    double:false,
    推荐:`js:
        function stripHtmlTag(src) {
            return src.replace(/<\\/?[^>]+(>|$)/g, '').replace(/&.{1,5};/g, '').replace(/\\s{2,}/g, ' ');
        }
        function turnDHM(duration) {
            let min = '';
            let sec = '';
            try {
                min = duration.split(':')[0];
                sec = duration.split(':')[1];
            } catch (e) {
                min = Math.floor(duration / 60);
                sec = duration % 60;
            }
            if (isNaN(parseInt(duration))) {
                return '无效输入';
            }
            if (min == 0) {
                return sec + '秒'
            } else if (0 < min && min < 60) {
                return min + '分'
            } else if (60 <= min && min < 1440) {
                if (min % 60 == 0) {
                    let h = min / 60;
                    return h + '小时'
                } else {
                    let h = min / 60;
                    h = (h + '').split('.')[0];
                    let m = min % 60;
                    return h + '小时' + m + '分';
                }
            } else if (min >= 1440) {
                let d = min / 60 / 24;
                d = (d + '').split('.')[0];
                let h = min / 60 % 24;
                h = (h + '').split('.')[0];
                let m = min % 60;
                let dhm = '';
                if (d > 0) {
                    dhm = d + '天'
                }
                if (h >= 1) {
                    dhm = dhm + h + '小时'
                }
                if (m > 0) {
                    dhm = dhm + m + '分'
                }
                return dhm
            }
            return null
        }
        function ConvertNum(num) {
            let _ws = Math.pow(10, 1);
            let _b = 1e4;
            if (num < _b) {
                return num.toString();
            }
            let _r = '';
            let _strArg = ['', '万', '亿', '万亿'];
            let _i = Math.floor(Math.log(num) / Math.log(_b));
            if (_i > 3) {
                _i = 3;
            }
            _r = Math.floor(num / Math.pow(_b, _i) * _ws) / _ws + _strArg[_i];
            return _r;
        }
        let html = request(input);
        let vodList = JSON.parse(html).data.list;
        let videos = [];
        vodList.forEach(function(vod) {
            let aid = vod.aid;
            let title = stripHtmlTag(vod.title);
            let img = vod.pic;
            if (img.startsWith('//')) {
                img = 'https:' + img;
            }
            let remark = turnDHM(vod.duration) + ' ▶' + ConvertNum(vod.stat.view) + ' 🆙' + vod.owner.name;
            videos.push({
                vod_id: aid,
                vod_name: title,
                vod_pic: img,
                vod_remarks: remark
            })
        });
        VODS = videos
    `,
    一级:`js:
        if (cateObj.tid.endsWith('_clicklink')) {
            cateObj.tid = cateObj.tid.split('_')[0];
            input = HOST + '/x/web-interface/search/type?search_type=video&keyword=' + cateObj.tid + '&page=' + MY_PAGE;
        }
        function stripHtmlTag(src) {
            return src.replace(/<\\/?[^>]+(>|$)/g, '').replace(/&.{1,5};/g, '').replace(/\\s{2,}/g, ' ');
        }
        function turnDHM(duration) {
            let min = '';
            let sec = '';
            try {
                min = duration.split(':')[0];
                sec = duration.split(':')[1];
            } catch (e) {
                min = Math.floor(duration / 60);
                sec = duration % 60;
            }
            if (isNaN(parseInt(duration))) {
                return '无效输入';
            }
            if (min == 0) {
                return sec + '秒'
            } else if (0 < min && min < 60) {
                return min + '分'
            } else if (60 <= min && min < 1440) {
                if (min % 60 == 0) {
                    let h = min / 60;
                    return h + '小时'
                } else {
                    let h = min / 60;
                    h = (h + '').split('.')[0];
                    let m = min % 60;
                    return h + '小时' + m + '分';
                }
            } else if (min >= 1440) {
                let d = min / 60 / 24;
                d = (d + '').split('.')[0];
                let h = min / 60 % 24;
                h = (h + '').split('.')[0];
                let m = min % 60;
                let dhm = '';
                if (d > 0) {
                    dhm = d + '天'
                }
                if (h >= 1) {
                    dhm = dhm + h + '小时'
                }
                if (m > 0) {
                    dhm = dhm + m + '分'
                }
                return dhm
            }
            return null
        }
        function ConvertNum(num) {
            let _ws = Math.pow(10, 1);
            let _b = 1e4;
            if (num < _b) {
                return num.toString();
            }
            let _r = '';
            let _strArg = ['', '万', '亿', '万亿'];
            let _i = Math.floor(Math.log(num) / Math.log(_b));
            if (_i > 3) {
                _i = 3;
            }
            _r = Math.floor(num / Math.pow(_b, _i) * _ws) / _ws + _strArg[_i];
            return _r;
        }
        let data = [];
        let vodList = [];
        if (MY_CATE === '推荐') {
            input = HOST + '/x/web-interface/index/top/rcmd?ps=14&fresh_idx=' + MY_PAGE + '&fresh_idx_1h=' + MY_PAGE;
            data = JSON.parse(request(input)).data;
            vodList = data.item;
        } else if (MY_CATE === '历史记录') {
            input = HOST + '/x/v2/history?pn=' + MY_PAGE;
            data = JSON.parse(request(input)).data;
            vodList = data;
        } else {
            data = JSON.parse(request(input)).data;
            vodList = data.result;
        }
        let videos = [];
        vodList.forEach(function(vod) {
            let aid = vod.aid?vod.aid:vod.id;
            let title = stripHtmlTag(vod.title);
            let img = vod.pic;
            if (img.startsWith('//')) {
                img = 'https:' + img;
            }
            let play = '';
            let danmaku = '';
            if (MY_CATE === '推荐') {
                play = ConvertNum(vod.stat.view);
                danmaku = vod.stat.danmaku;
            } else if (MY_CATE === '历史记录') {
                play = ConvertNum(vod.stat.view);
                danmaku = vod.stat.danmaku;
            } else {
                play = ConvertNum(vod.play);
                danmaku = vod.video_review;
            }
            let remark = turnDHM(vod.duration) + ' ▶' + play + ' 💬' + danmaku;
            videos.push({
                vod_id: aid,
                vod_name: title,
                vod_pic: img,
                vod_remarks: remark
            })
        });
        VODS = videos
    `,
    二级:`js:
        function stripHtmlTag(src) {
            return src.replace(/<\\/?[^>]+(>|$)/g, '').replace(/&.{1,5};/g, '').replace(/\\s{2,}/g, ' ');
        }
        let html = request(input);
        let jo = JSON.parse(html).data.View;
        // 历史记录
        let cookies = rule_fetch_params.headers.Cookie.split(';');
        let bili_jct = '';
        cookies.forEach(cookie => {
            if (cookie.includes('bili_jct')) {
                bili_jct = cookie.split('=')[1];
            }
        });
        if (bili_jct !== '') {
            let historyReport = 'https://api.bilibili.com/x/v2/history/report';
            let dataPost = {
                aid: jo.aid,
                cid: jo.cid,
                csrf: bili_jct,
            };
            post(historyReport, dataPost, 'form');
        }

        let stat = jo.stat;
        let up_info = JSON.parse(html).data.Card;
        let relation = up_info.following ? '已关注' : '未关注';
        let aid = jo.aid;
        let title = stripHtmlTag(jo.title);
        let pic = jo.pic;
        let desc = jo.desc;

        let date = new Date(jo.pubdate * 1000);
        let yy = date.getFullYear().toString();
        let mm = date.getMonth()+1;
        mm = mm < 10 ? ('0' + mm) : mm;
        let dd = date.getDate();
        dd = dd < 10 ? ('0' + dd) : dd;

        let up_name = jo.owner.name;
        let typeName = jo.tname;
        let vod = {
            vod_id: aid,
            vod_name: title,
            vod_pic: pic,
            type_name: typeName,
            vod_year: yy+mm+dd,
            vod_area: 'bilidanmu',
            vod_tags: 'mv',
            vod_director: '🆙 ' + '[a=cr:' + JSON.stringify({'id':up_name + '_clicklink','name':up_name}) + '/]' + up_name + '[/a]' + '　👥 ' + up_info.follower + '　' + relation,
            vod_actor: '▶' + stat.view + '　' + '💬' + stat.danmaku + '　' + '👍' + stat.like + '　' + '💰' + stat.coin + '　' + '⭐' + stat.favorite,
            vod_content: desc
        };
        let ja = jo.pages;
        let treeMap = {};
        let playurls = [];
        ja.forEach(function(tmpJo) {
            let cid = tmpJo.cid;
            let part = tmpJo.part.replaceAll('#', '﹟').replaceAll('$', '﹩');
            playurls.push(
                part + '$' + aid + '_' + cid
            )
        });
        treeMap['B站'] = playurls.join('#');
        let relatedData = JSON.parse(html).data.Related;
        playurls = [];
        relatedData.forEach(function(rd) {
            let ccid = rd.cid;
            let title = rd.title.replaceAll('#', '﹟').replaceAll('$', '﹩');
            let aaid = rd.aid;
            playurls.push(
                title + '$' + aaid + '_' + ccid
            )
        });
        treeMap['相关推荐'] = playurls.join('#');
        vod.vod_play_from = Object.keys(treeMap).join("$$$");
        vod.vod_play_url = Object.values(treeMap).join("$$$");
        VOD = vod;
    `,
    搜索:`js:
        let html = request(input);
        function stripHtmlTag(src) {
            return src.replace(/<\\/?[^>]+(>|$)/g, '').replace(/&.{1,5};/g, '').replace(/\\s{2,}/g, ' ');
        }
        function turnDHM(duration) {
            let min = '';
            let sec = '';
            try {
                min = duration.split(':')[0];
                sec = duration.split(':')[1];
            } catch (e) {
                min = Math.floor(duration / 60);
                sec = duration % 60;
            }
            if (isNaN(parseInt(duration))) {
                return '无效输入';
            }
            if (min == 0) {
                return sec + '秒'
            } else if (0 < min && min < 60) {
                return min + '分'
            } else if (60 <= min && min < 1440) {
                if (min % 60 == 0) {
                    let h = min / 60;
                    return h + '小时'
                } else {
                    let h = min / 60;
                    h = (h + '').split('.')[0];
                    let m = min % 60;
                    return h + '小时' + m + '分';
                }
            } else if (min >= 1440) {
                let d = min / 60 / 24;
                d = (d + '').split('.')[0];
                let h = min / 60 % 24;
                h = (h + '').split('.')[0];
                let m = min % 60;
                let dhm = '';
                if (d > 0) {
                    dhm = d + '天'
                }
                if (h >= 1) {
                    dhm = dhm + h + '小时'
                }
                if (m > 0) {
                    dhm = dhm + m + '分'
                }
                return dhm
            }
            return null
        }
        let videos = [];
        let vodList = JSON.parse(html).data.result;
        vodList.forEach(function(vod) {
            let aid = vod.aid;
            let title = stripHtmlTag(vod.title);
            let img = vod.pic;
            if (img.startsWith('//')) {
                img = 'https:' + img;
            }
            let remark = turnDHM(vod.duration);
            videos.push({
                vod_id: aid,
                vod_name: title,
                vod_pic: img,
                vod_remarks: remark
            })
        });
        VODS = videos
    `,
}
