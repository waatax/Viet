/**
 * 越南歌曲雙語歌詞與時間軸資料庫 (Vietnamese Songs Bilingual Lyrics & Timestamps)
 * Source YouTube video: https://youtu.be/m7Wya6Z-QdM?si=M96hnlOOjHQ3EjAm
 * 24 complete Vietnamese hit covers with verified Vietnamese lyrics,
 * Traditional Chinese translations, exact start/vocal/section/line seconds, and key vocabulary.
 */

export const SONGS_YOUTUBE_VIDEO_ID = 'm7Wya6Z-QdM';
export const SONGS_YOUTUBE_BASE_URL = 'https://youtu.be/m7Wya6Z-QdM?si=M96hnlOOjHQ3EjAm';

export const SONGS_YOUTUBE_META = {
  videoId: SONGS_YOUTUBE_VIDEO_ID,
  url: SONGS_YOUTUBE_BASE_URL,
  title: 'Từng Là, Giữa Đại Lộ Đông Tây, Thu Cuối, Có Em Chờ - Những Bản Hits Nhạc Trẻ Nhẹ Nhàng Cực Chill',
  channel: 'Soul Tracks',
  coverArtists: 'Trạm Cover & JiKi X',
  totalDurationSec: 5554,
  totalDurationTimestamp: '01:32:34'
};

export function songYoutubeUrl(seconds = 0) {
  const sec = Math.max(0, Math.floor(Number(seconds) || 0));
  return sec > 0 ? `${SONGS_YOUTUBE_BASE_URL}&t=${sec}` : SONGS_YOUTUBE_BASE_URL;
}

export function songYoutubeEmbedUrl(seconds = 0) {
  const sec = Math.max(0, Math.floor(Number(seconds) || 0));
  return `https://www.youtube.com/embed/${SONGS_YOUTUBE_VIDEO_ID}?start=${sec}&autoplay=1&rel=0`;
}

export function formatTimestamp(seconds = 0) {
  const total = Math.max(0, Math.floor(Number(seconds) || 0));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function formatDuration(seconds = 0) {
  const total = Math.max(0, Math.floor(Number(seconds) || 0));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

const LISTENED_KEY = 'viet_songs_listened_v1';
const FAVORITES_KEY = 'viet_songs_favorites_v1';

function readIdList(key) {
  try {
    const raw = localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeIdList(key, ids) {
  try {
    localStorage.setItem(key, JSON.stringify(ids));
  } catch {
    /* storage unavailable */
  }
}

export function readListenedSongs() {
  return readIdList(LISTENED_KEY);
}

export function markSongListened(id) {
  const current = readListenedSongs();
  if (current.includes(id)) return current;
  const next = [...current, id];
  writeIdList(LISTENED_KEY, next);
  return next;
}

export function toggleListenedSong(id) {
  const current = readListenedSongs();
  const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];
  writeIdList(LISTENED_KEY, next);
  return next;
}

export function readFavoriteSongs() {
  return readIdList(FAVORITES_KEY);
}

export function toggleFavoriteSong(id) {
  const current = readFavoriteSongs();
  const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];
  writeIdList(FAVORITES_KEY, next);
  return next;
}

export const VIETNAMESE_SONGS = [
  {
    "no": 1,
    "id": "song-01-tung-la",
    "titleVi": "Từng Là",
    "titleZh": "曾經是",
    "coverArtist": "Trạm Cover",
    "originalArtist": "Vũ Cát Tường",
    "mood": "溫柔抒情",
    "startSec": 0,
    "vocalStartSec": 9,
    "endSec": 242,
    "startTimestamp": "00:00:00",
    "endTimestamp": "00:04:02",
    "durationSec": 242,
    "summaryZh": "以細膩克制的口吻回望一段已成為過去式的戀情，沒有激烈控訴，只有被旁人無意提起舊名時悄然湧上的溫柔遺憾。這首不插電翻唱以輕柔木吉他鋪陳，將「曾經是唯一」的淡淡悵然唱得格外動人。",
    "keyVocab": [
      {
        "vi": "từng là",
        "zh": "曾經是",
        "note": "từng 表示「曾經」，後接動詞或 là（是），用來回顧已逝去的狀態或關係。"
      },
      {
        "vi": "thói quen",
        "zh": "習慣",
        "note": "常見名詞搭配如 bỏ thói quen（戒掉習慣）、không còn những thói quen（不再有那些習慣）。"
      },
      {
        "vi": "vô tư",
        "zh": "無憂無慮、毫不在意",
        "note": "在此指旁人不知兩人已分手，依然自然無心地聊起往事。"
      },
      {
        "vi": "bình yên",
        "zh": "平靜安穩",
        "note": "越南情歌高頻詞，形容讓人安心、沒有波瀾的情感與生活。"
      },
      {
        "vi": "quá khứ",
        "zh": "過去、往事",
        "note": "漢越詞「過去」，常用句型 đã là quá khứ（已經成為過去）。"
      }
    ],
    "sections": [
      {
        "label": "主歌一 (Verse 1)",
        "startSec": 9,
        "timestamp": "00:00:09",
        "lines": [
          {
            "sec": 9,
            "vi": "Anh không còn những thói quen",
            "zh": "我已不再保有從前的那些習慣"
          },
          {
            "sec": 13,
            "vi": "Em không còn nhớ thêm",
            "zh": "妳也不再多添一分牽掛"
          },
          {
            "sec": 16,
            "vi": "Ta trôi xa một nửa kia, nhẹ như mới đến",
            "zh": "我們漸漸漂離彼此的另一半，輕得彷彿初見時那般"
          }
        ]
      },
      {
        "label": "導歌一 (Pre-Chorus 1)",
        "startSec": 24,
        "timestamp": "00:00:24",
        "lines": [
          {
            "sec": 24,
            "vi": "Một ai nhắc tên em trong câu chuyện xưa cũ với anh thật vô tư",
            "zh": "某個人在陳年往事裡，毫無防備地對我提起妳的名字"
          },
          {
            "sec": 32,
            "vi": "Họ chưa biết hai ta đã không còn nhau nữa",
            "zh": "他們還不知道，我們早已不再擁有彼此"
          },
          {
            "sec": 39,
            "vi": "Mọi chuyện đã là quá khứ...",
            "zh": "這一切，都已成為過去⋯⋯"
          }
        ]
      },
      {
        "label": "副歌一 (Chorus 1)",
        "startSec": 41,
        "timestamp": "00:00:41",
        "lines": [
          {
            "sec": 41,
            "vi": "Từng là duy nhất, mối tình bình yên đối với anh",
            "zh": "曾經是唯一，對我而言最安穩平靜的那段戀情"
          },
          {
            "sec": 46,
            "vi": "Từng là những nắm tay mềm thật ấm đối với anh",
            "zh": "曾經是緊握著的柔軟雙手，對我而言如此溫暖"
          },
          {
            "sec": 50,
            "vi": "Từng là cảm xúc nhớ nhiều về đêm đối với anh",
            "zh": "曾經是每到深夜便湧上心頭的深深思念"
          },
          {
            "sec": 55,
            "vi": "Từng là em...",
            "zh": "曾經是妳⋯⋯"
          },
          {
            "sec": 59,
            "vi": "Từng là những tháng năm dài mình chung bước bên nhau",
            "zh": "曾經是我們並肩同行的漫長歲月"
          },
          {
            "sec": 63,
            "vi": "Từng là những nắng ban chiều mà anh bước theo sau",
            "zh": "曾經是午後斜陽裡，我跟在妳身後的溫柔光影"
          },
          {
            "sec": 67,
            "vi": "Từng là tất cả những gì đời mang đến cho ta",
            "zh": "曾經是生命賜予我們的一切美好"
          },
          {
            "sec": 72,
            "vi": "Giờ đã quá xa...",
            "zh": "如今卻已太遙遠⋯⋯"
          }
        ]
      },
      {
        "label": "主歌二 (Verse 2)",
        "startSec": 92,
        "timestamp": "00:01:32",
        "lines": [
          {
            "sec": 92,
            "vi": "Vào một lần em nói ta rồi sẽ cách xa",
            "zh": "曾有一次妳說，我們終究會走向分離"
          },
          {
            "sec": 97,
            "vi": "Một lần anh ngất trong màu mây nắng hạ",
            "zh": "曾有一次我沉醉暈眩在盛夏的雲彩與日光裡"
          },
          {
            "sec": 102,
            "vi": "Chắc có lẽ nên là kết thúc cách im lặng thôi",
            "zh": "或許就該這樣，安靜無聲地畫下句點吧"
          }
        ]
      },
      {
        "label": "導歌二 (Pre-Chorus 2)",
        "startSec": 108,
        "timestamp": "00:01:48",
        "lines": [
          {
            "sec": 108,
            "vi": "Một ai nhắc tên em trong câu chuyện xưa cũ với anh thật vô tư",
            "zh": "某個人在陳年往事裡，毫無防備地對我提起妳的名字"
          },
          {
            "sec": 116,
            "vi": "Họ chưa biết hai ta đã không còn nhau nữa",
            "zh": "他們還不知道，我們早已不再擁有彼此"
          },
          {
            "sec": 122,
            "vi": "Mọi chuyện đã là quá khứ...",
            "zh": "這一切，都已成為過去⋯⋯"
          }
        ]
      },
      {
        "label": "副歌二 (Chorus 2)",
        "startSec": 125,
        "timestamp": "00:02:05",
        "lines": [
          {
            "sec": 125,
            "vi": "Từng là duy nhất, mối tình bình yên đối với anh",
            "zh": "曾經是唯一，對我而言最安穩平靜的那段戀情"
          },
          {
            "sec": 129,
            "vi": "Từng là những nắm tay mềm thật ấm đối với anh",
            "zh": "曾經是緊握著的柔軟雙手，對我而言如此溫暖"
          },
          {
            "sec": 133,
            "vi": "Từng là cảm xúc nhớ nhiều về đêm đối với anh",
            "zh": "曾經是每到深夜便湧上心頭的深深思念"
          },
          {
            "sec": 138,
            "vi": "Từng là em...",
            "zh": "曾經是妳⋯⋯"
          },
          {
            "sec": 142,
            "vi": "Từng là những tháng năm dài mình chung bước bên nhau",
            "zh": "曾經是我們並肩同行的漫長歲月"
          },
          {
            "sec": 147,
            "vi": "Từng là những nắng ban chiều mà anh bước theo sau",
            "zh": "曾經是午後斜陽裡，我跟在妳身後的溫柔光影"
          },
          {
            "sec": 151,
            "vi": "Từng là tất cả những gì đời mang đến cho ta",
            "zh": "曾經是生命賜予我們的一切美好"
          },
          {
            "sec": 155,
            "vi": "Giờ đã quá xa...",
            "zh": "如今卻已太遙遠⋯⋯"
          }
        ]
      },
      {
        "label": "橋段 (Bridge)",
        "startSec": 178,
        "timestamp": "00:02:58",
        "lines": [
          {
            "sec": 178,
            "vi": "Oh no, we used to be, used, used to be",
            "zh": "喔不，我們曾經是、曾經是"
          },
          {
            "sec": 183,
            "vi": "Oh no, we used to be lovers",
            "zh": "喔不，我們曾經是彼此的戀人"
          },
          {
            "sec": 186,
            "vi": "Oh no, we used to be, used, used to be",
            "zh": "喔不，我們曾經是、曾經是"
          },
          {
            "sec": 190,
            "vi": "Oh no, we used to be lovers",
            "zh": "喔不，我們曾經是彼此的戀人"
          }
        ]
      },
      {
        "label": "終段副歌與尾奏 (Final Chorus & Outro)",
        "startSec": 192,
        "timestamp": "00:03:12",
        "lines": [
          {
            "sec": 192,
            "vi": "Từng là duy nhất, mối tình bình yên đối với anh",
            "zh": "曾經是唯一，對我而言最安穩平靜的那段戀情"
          },
          {
            "sec": 197,
            "vi": "Từng là những nắm tay mềm thật ấm đối với anh",
            "zh": "曾經是緊握著的柔軟雙手，對我而言如此溫暖"
          },
          {
            "sec": 201,
            "vi": "Từng là cảm xúc nhớ nhiều về đêm đối với anh",
            "zh": "曾經是每到深夜便湧上心頭的深深思念"
          },
          {
            "sec": 205,
            "vi": "Từng là em...",
            "zh": "曾經是妳⋯⋯"
          },
          {
            "sec": 209,
            "vi": "Từng là những tháng năm dài mình chung bước bên nhau",
            "zh": "曾經是我們並肩同行的漫長歲月"
          },
          {
            "sec": 213,
            "vi": "Từng là những nắng ban chiều mà anh bước theo sau",
            "zh": "曾經是午後斜陽裡，我跟在妳身後的溫柔光影"
          },
          {
            "sec": 217,
            "vi": "Từng là tất cả những gì đời mang đến cho ta",
            "zh": "曾經是生命賜予我們的一切美好"
          },
          {
            "sec": 222,
            "vi": "Giờ đã quá xa...",
            "zh": "如今卻已太遙遠⋯⋯"
          },
          {
            "sec": 225,
            "vi": "Từng là tất cả những gì đời mang đến cho ta",
            "zh": "曾經是生命賜予我們的一切美好"
          },
          {
            "sec": 230,
            "vi": "Giờ đã quá xa...",
            "zh": "如今卻已太遙遠⋯⋯"
          }
        ]
      }
    ]
  },
  {
    "no": 2,
    "id": "song-02-giua-dai-lo-dong-tay",
    "titleVi": "Giữa Đại Lộ Đông Tây",
    "titleZh": "在東西大道上",
    "coverArtist": "Trạm Cover",
    "originalArtist": "Uyên Linh / Hứa Kim Tuyền",
    "mood": "浪漫都會",
    "startSec": 242,
    "vocalStartSec": 249,
    "endSec": 451,
    "startTimestamp": "00:04:02",
    "endTimestamp": "00:07:31",
    "durationSec": 209,
    "summaryZh": "描繪微雨夜色中，情侶共乘機車穿梭在胡志明市東西大道（武文傑大道）的浪漫片段：在倒數三秒轉綠燈的路口輕聲告白，從身後環抱取暖，滿溢都會夜晚的甜蜜與安定感。",
    "keyVocab": [
      {
        "vi": "mưa phùn",
        "zh": "毛毛細雨",
        "note": "mưa（雨）+ phùn（細密如霧），形容輕柔飄落的細雨。"
      },
      {
        "vi": "bờ vai",
        "zh": "肩膀",
        "note": "歌詞中常象徵依靠與安全感，如 tựa vào bờ vai（靠在肩上）。"
      },
      {
        "vi": "nương tựa",
        "zh": "依靠、依偎",
        "note": "較具書面與浪漫色彩的詞彙，常用結構 nương tựa vào ai（依靠某人）。"
      },
      {
        "vi": "choàng tay",
        "zh": "伸手環抱、搭住",
        "note": "形容從身後或身旁輕輕攬住對方的動作。"
      },
      {
        "vi": "vu vơ",
        "zh": "漫無目的、隨口胡謅",
        "note": "常用於 hát vu vơ（隨口哼唱）、nhớ vu vơ（莫名思念）。"
      }
    ],
    "sections": [
      {
        "label": "主歌一 (Verse 1)",
        "startSec": 249,
        "timestamp": "00:04:09",
        "lines": [
          {
            "sec": 249,
            "vi": "Dưới cơn mưa phùn nhẹ có hai kẻ khờ chen xe lướt nhanh",
            "zh": "在綿綿細雨中，有兩個傻瓜騎著車穿梭疾馳"
          },
          {
            "sec": 254,
            "vi": "Lách len qua dòng người vẫn đang ghì chặt tay ga lăn bánh",
            "zh": "靈巧穿過依然緊催油門前進的車潮人海"
          },
          {
            "sec": 259,
            "vi": "Gấp phanh nơi đèn đường đếm tay chờ còn ba giây đến xanh",
            "zh": "在街燈路口急煞停下，屈指倒數還剩三秒變綠燈"
          },
          {
            "sec": 265,
            "vi": "Và em nói yêu anh...",
            "zh": "而我輕聲說出我愛你⋯⋯"
          }
        ]
      },
      {
        "label": "副歌一 (Chorus 1)",
        "startSec": 270,
        "timestamp": "00:04:30",
        "lines": [
          {
            "sec": 270,
            "vi": "Bờ vai của anh là nơi mà em thấy yên bình nhất",
            "zh": "你的肩膀，是我感到最平靜安穩的所在"
          },
          {
            "sec": 275,
            "vi": "Em muốn nương tựa vào anh từ nay về sau mãi mãi",
            "zh": "我想依靠著你，從今以後直到永遠"
          },
          {
            "sec": 280,
            "vi": "Choàng tay khẽ ôm từ sau làn hơi ấm tan vào nhau",
            "zh": "從身後輕輕環抱住你，讓彼此的體溫融為一體"
          },
          {
            "sec": 286,
            "vi": "Em muốn nương tựa vào anh từ nay về sau mãi mãi",
            "zh": "我想依靠著你，從今以後直到永遠"
          }
        ]
      },
      {
        "label": "副歌後段 (Post-Chorus 1)",
        "startSec": 292,
        "timestamp": "00:04:52",
        "lines": [
          {
            "sec": 292,
            "vi": "Giữa đại lộ Đông Tây, có mình cầm đôi tay",
            "zh": "在東西大道上，我們緊牽著雙手"
          },
          {
            "sec": 299,
            "vi": "Giữa đại lộ Đông Tây...",
            "zh": "在東西大道上⋯⋯"
          },
          {
            "sec": 303,
            "vi": "Giữa đại lộ Đông Tây, có mình cầm đôi tay",
            "zh": "在東西大道上，我們緊牽著雙手"
          },
          {
            "sec": 309,
            "vi": "Giữa đại lộ Đông Tây...",
            "zh": "在東西大道上⋯⋯"
          }
        ]
      },
      {
        "label": "主歌二 (Verse 2)",
        "startSec": 312,
        "timestamp": "00:05:12",
        "lines": [
          {
            "sec": 312,
            "vi": "Ánh trăng trên bầu trời nép sau đèn đường như em nép anh",
            "zh": "夜空中的月光藏身在街燈後方，就像我依偎在你身旁"
          },
          {
            "sec": 317,
            "vi": "Hát vu vơ bềnh bồng mấy câu chẳng đầu không đuôi em viết",
            "zh": "隨興飄然地哼起幾句，我寫下沒頭沒尾的小句子"
          },
          {
            "sec": 323,
            "vi": "Là la la là là lắng nghe nhịp đập con tim lướt nhanh",
            "zh": "啦啦啦啦啦，聆聽心跳飛快掠過的節奏"
          },
          {
            "sec": 329,
            "vi": "Từ câu hát yêu anh...",
            "zh": "從那句愛你的歌聲裡⋯⋯"
          }
        ]
      },
      {
        "label": "副歌二 (Chorus 2)",
        "startSec": 333,
        "timestamp": "00:05:33",
        "lines": [
          {
            "sec": 333,
            "vi": "Bờ vai của anh là nơi mà em thấy yên bình nhất",
            "zh": "你的肩膀，是我感到最平靜安穩的所在"
          },
          {
            "sec": 339,
            "vi": "Em muốn nương tựa vào anh từ nay về sau mãi mãi",
            "zh": "我想依靠著你，從今以後直到永遠"
          },
          {
            "sec": 344,
            "vi": "Choàng tay khẽ ôm từ sau làn hơi ấm tan vào nhau",
            "zh": "從身後輕輕環抱住你，讓彼此的體溫融為一體"
          },
          {
            "sec": 350,
            "vi": "Em muốn nương tựa vào anh từ nay về sau mãi mãi",
            "zh": "我想依靠著你，從今以後直到永遠"
          }
        ]
      },
      {
        "label": "橋段 (Bridge)",
        "startSec": 377,
        "timestamp": "00:06:17",
        "lines": [
          {
            "sec": 377,
            "vi": "Trái Đất vẫn cứ xoay, cuộc đời mai đây chẳng biết thế nào",
            "zh": "地球依然不停轉動，未來的人生難以預料"
          },
          {
            "sec": 382,
            "vi": "Nhưng em vẫn mong mình mãi như thế thôi",
            "zh": "但我依然期盼，我們能永遠保持這般模樣就好"
          },
          {
            "sec": 387,
            "vi": "Vẫn sẽ mãi nắm tay, mặc kệ trời mây có thay có đổi",
            "zh": "依然會緊緊牽著手，任憑天色浮雲如何變幻流轉"
          },
          {
            "sec": 393,
            "vi": "Nhưng em vẫn mong mình mãi như thế thôi",
            "zh": "但我依然期盼，我們能永遠保持這般模樣就好"
          }
        ]
      },
      {
        "label": "終段副歌 (Final Chorus)",
        "startSec": 399,
        "timestamp": "00:06:39",
        "lines": [
          {
            "sec": 399,
            "vi": "Bờ vai của anh là nơi mà em thấy yên bình nhất",
            "zh": "你的肩膀，是我感到最平靜安穩的所在"
          },
          {
            "sec": 406,
            "vi": "Em muốn nương tựa vào anh từ nay về sau mãi mãi",
            "zh": "我想依靠著你，從今以後直到永遠"
          },
          {
            "sec": 411,
            "vi": "Choàng tay khẽ ôm từ sau làn hơi ấm tan vào nhau",
            "zh": "從身後輕輕環抱住你，讓彼此的體溫融為一體"
          },
          {
            "sec": 417,
            "vi": "Em muốn nương tựa vào anh từ nay về sau mãi mãi",
            "zh": "我想依靠著你，從今以後直到永遠"
          }
        ]
      },
      {
        "label": "尾奏副歌 (Outro / Post-Chorus)",
        "startSec": 422,
        "timestamp": "00:07:02",
        "lines": [
          {
            "sec": 422,
            "vi": "Giữa đại lộ Đông Tây, có mình cầm đôi tay",
            "zh": "在東西大道上，我們緊牽著雙手"
          },
          {
            "sec": 429,
            "vi": "Giữa đại lộ Đông Tây...",
            "zh": "在東西大道上⋯⋯"
          },
          {
            "sec": 434,
            "vi": "Giữa đại lộ Đông Tây, có mình cầm đôi tay",
            "zh": "在東西大道上，我們緊牽著雙手"
          },
          {
            "sec": 439,
            "vi": "Giữa đại lộ Đông Tây...",
            "zh": "在東西大道上⋯⋯"
          }
        ]
      }
    ]
  },
  {
    "no": 3,
    "id": "song-03-thu-cuoi",
    "titleVi": "Thu Cuối",
    "titleZh": "晚秋",
    "coverArtist": "Trạm Cover, Jiki X Cover",
    "originalArtist": "Yanbi, Mr.T, Hằng BingBoong",
    "mood": "秋日懷舊",
    "startSec": 451,
    "vocalStartSec": 454,
    "endSec": 706,
    "startTimestamp": "00:07:31",
    "endTimestamp": "00:11:46",
    "durationSec": 255,
    "summaryZh": "越南青春世代的經典秋日抒情饒舌代表作，交織河內老街、落葉與黑板樹花（hoa sữa）的濃郁香氣，唱出戀人轉身離去後的錯愕、不捨與深沉悵惘。",
    "keyVocab": [
      {
        "vi": "hoa sữa",
        "zh": "黑板樹花（奶花）",
        "note": "河內深秋最具代表性的花香意象，常在越南歌曲中象徵秋意與懷舊記憶。"
      },
      {
        "vi": "có lẽ nào",
        "zh": "難道說、會不會",
        "note": "用來表達不敢置信的反問與內心動搖，是本曲副歌最具記憶點的核心句型。"
      },
      {
        "vi": "tâm trí",
        "zh": "心智、腦海",
        "note": "漢越詞「心智」，常用 trong tâm trí em（在妳的腦海裡／心裡）。"
      },
      {
        "vi": "dằn vặt",
        "zh": "折磨、煎熬",
        "note": "指內心反覆自責或痛苦掙扎的情緒狀態。"
      },
      {
        "vi": "ngậm ngùi",
        "zh": "感傷、悵然哀嘆",
        "note": "形容帶著委屈與無奈的深沉嘆息。"
      }
    ],
    "sections": [
      {
        "label": "前奏引唱 (Intro)",
        "startSec": 454,
        "timestamp": "00:07:34",
        "lines": [
          {
            "sec": 454,
            "vi": "Cho bao nhiêu tháng ngày nay bay xa",
            "zh": "任憑多少歲月如今隨風遠颺"
          },
          {
            "sec": 457,
            "vi": "Hoen đôi mi khi thu đưa em qua",
            "zh": "當秋風送妳走過，淚水沾濕了眼眶"
          },
          {
            "sec": 460,
            "vi": "Đã từng ngọt ngào giờ nhận đắng cay vì ai",
            "zh": "曾經那樣甜蜜，如今又為了誰嚐盡苦澀"
          },
          {
            "sec": 465,
            "vi": "Thu vờn tóc em mơn man bên làn gió",
            "zh": "秋意在微風中輕拂摩挲著妳的髮絲"
          },
          {
            "sec": 469,
            "vi": "Vương trên mi ai lá rụng con phố nhỏ",
            "zh": "小街飄落的枯葉，停駐在誰的眼睫之間"
          },
          {
            "sec": 474,
            "vi": "Nhẹ nhàng đâu đây mùi hương hoa sữa đó",
            "zh": "不知何處輕輕飄來那縷黑板樹花香"
          },
          {
            "sec": 478,
            "vi": "Nghe xung quanh âm thanh vang lên sao thân quen",
            "zh": "聽著周遭迴盪的聲響，為何如此熟悉"
          },
          {
            "sec": 481,
            "vi": "Cho bao nhiêu ngu ngơ vu vơ mùa lá vắng",
            "zh": "徒留多少落葉零落時節的茫然與惘然"
          },
          {
            "sec": 484,
            "vi": "Thật nhẹ nhàng dù mùa thu không còn yêu anh nữa",
            "zh": "如此輕柔，即便這個秋天已不再愛我"
          }
        ]
      },
      {
        "label": "主歌一 (Verse 1)",
        "startSec": 491,
        "timestamp": "00:08:11",
        "lines": [
          {
            "sec": 491,
            "vi": "Đã từ rất lâu rồi, trong anh định nghĩa hai tiếng yêu thương",
            "zh": "已經好久好久了，在我心中「愛戀」這兩個字的定義"
          },
          {
            "sec": 496,
            "vi": "Anh không thể trao cho ai kể từ khi anh có em",
            "zh": "自從擁有妳之後，我便再也無法交給任何人"
          },
          {
            "sec": 500,
            "vi": "Mùa thu đó anh có em...",
            "zh": "那個秋天，我擁有妳⋯⋯"
          },
          {
            "sec": 503,
            "vi": "Vậy cớ sao giờ hơn một năm trôi qua",
            "zh": "可為什麼如今才過了一年多"
          },
          {
            "sec": 507,
            "vi": "Người đã khác xa thật nhiều",
            "zh": "妳卻變得如此陌生遙遠"
          },
          {
            "sec": 510,
            "vi": "Anh nghe tiếng lá rơi không còn êm nữa",
            "zh": "我聽見落葉的聲響，再也不覺溫柔寧靜"
          },
          {
            "sec": 513,
            "vi": "Và mùa thu đến anh không còn em nữa",
            "zh": "而秋天再度來臨，我身邊卻再也沒有妳"
          }
        ]
      },
      {
        "label": "副歌一 (Chorus 1)",
        "startSec": 516,
        "timestamp": "00:08:36",
        "lines": [
          {
            "sec": 516,
            "vi": "Có lẽ nào em vội quên đi",
            "zh": "難道說，妳就這樣匆匆遺忘"
          },
          {
            "sec": 520,
            "vi": "Và có lẽ nào em đưa mùa thu đi",
            "zh": "又難道說，妳把整個秋天也一併帶走"
          },
          {
            "sec": 523,
            "vi": "Có lẽ nào mùa thu chẳng còn lại gì trong tâm trí em",
            "zh": "難道說，秋天在妳腦海裡已不留任何痕跡"
          },
          {
            "sec": 527,
            "vi": "Có lẽ nào em buông anh đi xa mất",
            "zh": "難道說，妳就這樣放開我漸行漸遠"
          },
          {
            "sec": 531,
            "vi": "Và có lẽ nào anh không phải người mà em yêu nhất",
            "zh": "又難道說，我從來不是妳最愛的那個人"
          },
          {
            "sec": 534,
            "vi": "Có lẽ nào anh phải tự nhủ rằng chỉ là một giấc mơ",
            "zh": "難道說，我只能安慰自己這不過是一場夢"
          },
          {
            "sec": 538,
            "vi": "Anh mất em rồi...",
            "zh": "我已經失去妳了⋯⋯"
          }
        ]
      },
      {
        "label": "饒舌一段 (Rap 1)",
        "startSec": 540,
        "timestamp": "00:09:00",
        "lines": [
          {
            "sec": 540,
            "vi": "Thu đến và đi như những gì đã sắp đặt",
            "zh": "秋天來了又走，彷彿一切早已注定安排"
          },
          {
            "sec": 542,
            "vi": "Trang giấy trắng đâu thể mờ đi từng màu buồn của nắng",
            "zh": "潔白的紙頁，怎能抹去陽光裡那一抹抹哀愁色調"
          },
          {
            "sec": 546,
            "vi": "À ơi vu vơ câu hát có lẽ chưa bao giờ anh viết tặng",
            "zh": "漫不經心哼著搖籃似的旋律，或許我從未真正為妳寫過一首歌"
          },
          {
            "sec": 549,
            "vi": "Em nhẹ bước chân qua bao ngọt ngào, bao nhiêu cố gắng",
            "zh": "妳輕輕跨過了多少甜蜜過往、多少努力付出"
          },
          {
            "sec": 552,
            "vi": "Có hay không những bước thềm trong con tim em cần một khoảng rộng",
            "zh": "在妳心扉的台階之間，是不是需要一片更寬廣的空間"
          },
          {
            "sec": 555,
            "vi": "Biết lúc nào anh có thể lại được gặp em một lần nữa",
            "zh": "不知何時，我才能再次與妳相見"
          },
          {
            "sec": 558,
            "vi": "Là khi đó anh cảm nhận mùi hương tàn cánh hoa sữa",
            "zh": "或許就是當我再次嗅到殘落黑板樹花餘香的那一刻"
          },
          {
            "sec": 561,
            "vi": "Anh yêu em thật nồng nàn như một định lý đã muôn thuở",
            "zh": "我對妳的愛如此熱烈濃厚，宛如永恆不變的定理"
          },
          {
            "sec": 564,
            "vi": "Yêu một người có lẽ phải học thêm nhiều điều",
            "zh": "愛上一個人，或許還需要學會太多課題"
          },
          {
            "sec": 567,
            "vi": "Em là mảnh ghép cuối cùng anh còn thiếu",
            "zh": "妳正是我生命裡缺少的最後一塊拼圖"
          },
          {
            "sec": 569,
            "vi": "Nhiều đêm dằn vặt tự gắng mình không hiểu",
            "zh": "多少個夜晚反覆煎熬，硬撐著假裝自己不懂"
          },
          {
            "sec": 571,
            "vi": "Lắm những yêu thương trôi qua trong em nào thật nhiều",
            "zh": "在妳心裡掠過的種種愛意，究竟有多少曾屬於我"
          },
          {
            "sec": 573,
            "vi": "Không lý do nào đã khiến em cùng người đó gặp mặt rồi vội yêu",
            "zh": "毫無來由地，妳就與那個人相遇而匆匆相愛"
          },
          {
            "sec": 576,
            "vi": "Cánh cửa hy vọng như đang đổ sập ngay trước mắt",
            "zh": "希望的大門彷彿就在我眼前轟然崩塌"
          },
          {
            "sec": 579,
            "vi": "Không còn hơi ấm nụ hôn, bờ vai êm thật chặt",
            "zh": "不再有吻的餘溫，不再有緊緊相依的溫柔肩膀"
          },
          {
            "sec": 581,
            "vi": "Cảm xúc bỗng nhiên chết lặng, đông tới ghé nhắn anh rằng",
            "zh": "情緒瞬間凝結沉寂，冬日悄然降臨並告訴我"
          },
          {
            "sec": 584,
            "vi": "Thu cuối rồi cũng qua nhanh, cuốn theo cơn gió lặng lẽ hòa tan vào trong một buổi chiều mưa vắng",
            "zh": "晚秋終究也飛快消逝，隨風捲走，靜靜融化在一場冷清的午後雨幕中"
          }
        ]
      },
      {
        "label": "橋段 (Bridge)",
        "startSec": 589,
        "timestamp": "00:09:49",
        "lines": [
          {
            "sec": 589,
            "vi": "Lê đôi chân bơ vơ anh đã hụt hẫng thật nhiều",
            "zh": "拖著孤獨無助的步伐，我內心失落掏空了太多"
          },
          {
            "sec": 593,
            "vi": "Sao anh không thể ngăn được nước mắt nhạt nhòa",
            "zh": "為何我無法止住模糊視線的淚水"
          },
          {
            "sec": 596,
            "vi": "Đành ôm bờ vai lạnh cuối thu...",
            "zh": "只能獨自擁抱晚秋冰冷的雙肩⋯⋯"
          },
          {
            "sec": 599,
            "vi": "Cho anh thêm ngậm ngùi...",
            "zh": "徒添我幾分感傷無奈⋯⋯"
          },
          {
            "sec": 601,
            "vi": "Cho bao nhiêu yêu thương vút bay...",
            "zh": "任多少愛戀疾飛遠去⋯⋯"
          },
          {
            "sec": 604,
            "vi": "Cho bao nhiêu yêu thương mãi xa...",
            "zh": "任多少深情永別天涯⋯⋯"
          },
          {
            "sec": 608,
            "vi": "Xa cuối tận chân trời...",
            "zh": "遠逝至天際盡頭⋯⋯"
          }
        ]
      },
      {
        "label": "副歌二 (Chorus 2)",
        "startSec": 612,
        "timestamp": "00:10:12",
        "lines": [
          {
            "sec": 612,
            "vi": "Có lẽ nào em vội quên đi",
            "zh": "難道說，妳就這樣匆匆遺忘"
          },
          {
            "sec": 616,
            "vi": "Và có lẽ nào em đưa mùa thu đi",
            "zh": "又難道說，妳把整個秋天也一併帶走"
          },
          {
            "sec": 619,
            "vi": "Có lẽ nào mùa thu chẳng còn lại gì trong tâm trí em",
            "zh": "難道說，秋天在妳腦海裡已不留任何痕跡"
          },
          {
            "sec": 624,
            "vi": "Có lẽ nào em buông anh đi xa mất",
            "zh": "難道說，妳就這樣放開我漸行漸遠"
          },
          {
            "sec": 627,
            "vi": "Và có lẽ nào anh không phải người mà em yêu nhất",
            "zh": "又難道說，我從來不是妳最愛的那個人"
          },
          {
            "sec": 631,
            "vi": "Có lẽ nào anh phải tự nhủ rằng chỉ là một giấc mơ",
            "zh": "難道說，我只能安慰自己這不過是一場夢"
          },
          {
            "sec": 635,
            "vi": "Anh mất em rồi...",
            "zh": "我已經失去妳了⋯⋯"
          }
        ]
      },
      {
        "label": "饒舌二段 (Rap 2)",
        "startSec": 637,
        "timestamp": "00:10:37",
        "lines": [
          {
            "sec": 637,
            "vi": "Hà Nội có lẽ đẹp nhất về đêm",
            "zh": "河內或許在夜裡最為動人"
          },
          {
            "sec": 639,
            "vi": "Cũng chính là lúc ôm em thật chặt, băng qua mọi nẻo phố cổ ta thường đến",
            "zh": "那也正是我緊緊抱著妳，穿行過我們常去的條條老街巷弄的時刻"
          },
          {
            "sec": 642,
            "vi": "Nhắm mắt chạm nhẹ nỗi đau miền ký ức không tên",
            "zh": "閉上雙眼，輕觸那片無名記憶深處的隱痛"
          },
          {
            "sec": 644,
            "vi": "Giật mình chợt nhớ anh không thể với đến",
            "zh": "猛然驚醒，才想起我早已觸碰不到"
          },
          {
            "sec": 646,
            "vi": "Chỉ là giấc mơ quá êm đềm, trọn vẹn một vòng tay dịu êm",
            "zh": "那不過是一場太過甜美的夢，完整封存著一個溫柔的擁抱"
          },
          {
            "sec": 649,
            "vi": "Rồi cứ man mác vu vơ, ngẩn ngơ chờ đông tới",
            "zh": "於是只能懷著淡淡悵惘，失神佇立等候冬日來臨"
          },
          {
            "sec": 652,
            "vi": "Liệu rằng một mai sẽ còn thấy nhau trên đường đời",
            "zh": "有朝一日，我們是否還會在人生路上重逢"
          },
          {
            "sec": 655,
            "vi": "Ta cũng đâu ngờ sau bao ngày chờ đợi",
            "zh": "我們何曾料到，歷經無數日子的守候之後"
          },
          {
            "sec": 657,
            "vi": "Bài hát cất lên về Thu Hà Nội sẽ theo cùng em, nhưng cùng hình bóng mới...",
            "zh": "這首為河內之秋而唱的歌仍會陪伴著妳，身邊卻已換上新的身影⋯⋯"
          }
        ]
      },
      {
        "label": "終段副歌 (Final Chorus)",
        "startSec": 662,
        "timestamp": "00:11:02",
        "lines": [
          {
            "sec": 662,
            "vi": "Và có lẽ nào... Có lẽ nào em vội quên đi",
            "zh": "又難道說⋯⋯難道說，妳就這樣匆匆遺忘"
          },
          {
            "sec": 666,
            "vi": "Và có lẽ nào em đưa mùa thu đi",
            "zh": "又難道說，妳把整個秋天也一併帶走"
          },
          {
            "sec": 670,
            "vi": "Có lẽ nào mùa thu chẳng còn lại gì trong tâm trí em",
            "zh": "難道說，秋天在妳腦海裡已不留任何痕跡"
          },
          {
            "sec": 674,
            "vi": "Có lẽ nào em buông anh đi xa mất",
            "zh": "難道說，妳就這樣放開我漸行漸遠"
          },
          {
            "sec": 678,
            "vi": "Và có lẽ nào anh không phải người mà em yêu nhất",
            "zh": "又難道說，我從來不是妳最愛的那個人"
          },
          {
            "sec": 682,
            "vi": "Có lẽ nào anh phải tự nhủ rằng chỉ là một giấc mơ",
            "zh": "難道說，我只能安慰自己這不過是一場夢"
          },
          {
            "sec": 686,
            "vi": "Anh mất em rồi...",
            "zh": "我已經失去妳了⋯⋯"
          }
        ]
      }
    ]
  },
  {
    "no": 4,
    "id": "song-04-co-em-cho",
    "titleVi": "Có Em Chờ",
    "titleZh": "有我等你",
    "coverArtist": "Trạm Cover, Jiki X Cover",
    "originalArtist": "MIN ft. Mr A",
    "mood": "甜蜜療癒",
    "startSec": 706,
    "vocalStartSec": 707,
    "endSec": 944,
    "startTimestamp": "00:11:46",
    "endTimestamp": "00:15:44",
    "durationSec": 238,
    "summaryZh": "以「外面太累了就回家吧，有我等你」的暖心告白紅遍全越，將愛情化為小窗邊閃爍的暖黃燈火、一頓熱騰騰的晚餐與雨夜相伴，搭配男聲深情饒舌，勾勒出最踏實幸福的日常承諾。",
    "keyVocab": [
      {
        "vi": "yếu đuối",
        "zh": "脆弱、軟弱",
        "note": "常用於形容內心脆弱的時刻，如 phút giây yếu đuối（脆弱的片刻）。"
      },
      {
        "vi": "về nhà",
        "zh": "回家",
        "note": "句尾加上語氣詞 nhé（關於請求、邀約的溫柔語氣），về nhà anh nhé 意為「回家吧親愛的」。"
      },
      {
        "vi": "dư vị",
        "zh": "餘味、回味",
        "note": "漢越詞「餘味」，常用於形容飯菜或情感留在心頭的溫潤滋味。"
      },
      {
        "vi": "lấp lánh",
        "zh": "閃閃發亮",
        "note": "疊聲形容詞，描繪星光、燈火或水面微光閃爍的畫面。"
      },
      {
        "vi": "khôn nguôi",
        "zh": "難以平息、綿延不止",
        "note": "常搭配 đau đớn khôn nguôi（痛楚難平）或 nỗi nhớ khôn nguôi（思念不止）。"
      }
    ],
    "sections": [
      {
        "label": "主歌一 (Verse 1)",
        "startSec": 707,
        "timestamp": "00:11:47",
        "lines": [
          {
            "sec": 707,
            "vi": "Từ lần đầu tiên ta đi bên nhau, em đã biết tim mình đánh rơi rồi",
            "zh": "從第一次我們並肩走在一起，我就知道自己的心已經淪陷了"
          },
          {
            "sec": 714,
            "vi": "Từ lần đầu tiên môi hôn trao nhau, em đã biết không thể yêu thêm ai",
            "zh": "從第一次雙唇彼此輕吻，我就知道再也愛不上別人"
          },
          {
            "sec": 720,
            "vi": "Cách anh cười cong môi, cách anh lặng lẽ ngồi",
            "zh": "你唇角微揚微笑的模樣，你靜靜坐著的模樣"
          },
          {
            "sec": 726,
            "vi": "Ngồi nhìn bóng tối lặng thầm thời gian trôi",
            "zh": "凝望著夜色默默看時光流逝"
          }
        ]
      },
      {
        "label": "導歌一 (Pre-Chorus 1)",
        "startSec": 731,
        "timestamp": "00:12:11",
        "lines": [
          {
            "sec": 731,
            "vi": "Người đàn ông em yêu đôi khi có những phút giây yếu đuối không ngờ",
            "zh": "我深愛的男人，偶爾也會有意想不到的脆弱時刻"
          },
          {
            "sec": 738,
            "vi": "Ngoài kia nếu có khó khăn quá, về nhà anh nhé, có em chờ",
            "zh": "外頭若是太艱難辛苦了，就回家吧親愛的，家裡有我等你"
          },
          {
            "sec": 744,
            "vi": "Có môi mềm thơm thơm, có dư vị mỗi bữa cơm",
            "zh": "有柔軟清甜的吻，有每一頓家常菜的溫馨餘味"
          },
          {
            "sec": 751,
            "vi": "Xuân, hạ, thu, đông đều có em chờ",
            "zh": "春夏秋冬，四季都有我為你守候"
          }
        ]
      },
      {
        "label": "饒舌一段 (Rap 1)",
        "startSec": 756,
        "timestamp": "00:12:36",
        "lines": [
          {
            "sec": 756,
            "vi": "Có định mệnh nào bao nhiêu lâu anh đã ao ước",
            "zh": "哪一段命中注定，讓我期盼渴望了這麼多年"
          },
          {
            "sec": 759,
            "vi": "Có vần thơ nào bao nhiêu đêm anh đi tìm hoài",
            "zh": "哪一行詩韻，讓我在無數夜裡苦苦追尋"
          },
          {
            "sec": 762,
            "vi": "Và nếu khoảng cách là một nghìn bước",
            "zh": "假如我們之間的距離是一千步"
          },
          {
            "sec": 764,
            "vi": "Thì em chỉ cần bước một bước",
            "zh": "那麼妳只需要踏出第一步"
          },
          {
            "sec": 766,
            "vi": "Anh sẽ bước chín trăm chín mươi chín bước còn lại, bước về phía em",
            "zh": "剩下的九百九十九步由我來走，堅定地朝妳走去"
          },
          {
            "sec": 770,
            "vi": "Nơi mà anh thấy nắng mai",
            "zh": "走向讓我望見晨曦的地方"
          },
          {
            "sec": 774,
            "vi": "Nơi con tim anh biết yên bình và mong thế thôi",
            "zh": "走向讓我心感到安寧的所在，所求僅此而已"
          }
        ]
      },
      {
        "label": "副歌一 (Chorus 1)",
        "startSec": 780,
        "timestamp": "00:13:00",
        "lines": [
          {
            "sec": 780,
            "vi": "Tình yêu là những ánh sáng lấp lánh đèn vàng thắp lên bên ô cửa nhỏ",
            "zh": "愛情是小窗邊亮起的那盞閃爍暖黃燈火"
          },
          {
            "sec": 786,
            "vi": "Tình yêu là những dịu êm từng đêm mình cùng ăn tối và nghe mưa rơi",
            "zh": "愛情是每個溫柔夜晚，我們一起吃晚餐、傾聽窗外雨聲"
          },
          {
            "sec": 792,
            "vi": "Biết sẽ có những lúc trái tim đau đớn khôn nguôi",
            "zh": "明知偶爾也會有心痛難平的時候"
          },
          {
            "sec": 799,
            "vi": "Vẫn yêu và yêu và yêu thế thôi",
            "zh": "卻依然愛著、愛著，就這樣單純地愛著"
          }
        ]
      },
      {
        "label": "饒舌二段 (Rap 2)",
        "startSec": 803,
        "timestamp": "00:13:23",
        "lines": [
          {
            "sec": 803,
            "vi": "Và lần đầu tiên con tim như rụng rời",
            "zh": "第一次，心跳彷彿悸動得幾乎失控"
          },
          {
            "sec": 806,
            "vi": "Lần đầu tiên anh không nói nên lời",
            "zh": "第一次，我感動得說不出話來"
          },
          {
            "sec": 808,
            "vi": "Giấc mơ nào có đâu xa, tình yêu nơi đó có hai ta",
            "zh": "夢想哪有什麼遙不可及，愛情裡就住著你我兩人"
          },
          {
            "sec": 811,
            "vi": "Nơi tóc em quá mượt mà, con phố xưa đón đưa và",
            "zh": "在妳柔順秀髮飄逸的身旁，在老街迎送的時光裡"
          },
          {
            "sec": 814,
            "vi": "Em sẽ yêu mãi anh tháng năm dài",
            "zh": "妳會與我相愛度過漫長歲月"
          },
          {
            "sec": 816,
            "vi": "Bao nhiêu tháng ngày tăm tối khi mà có em ghé qua",
            "zh": "多少灰暗沉寂的日子，自從有妳走進生命"
          },
          {
            "sec": 819,
            "vi": "Nỗi buồn cũng phải buông trôi khi giờ ta có em và",
            "zh": "憂傷也只得煙消雲散，因為如今我擁有妳，還有"
          },
          {
            "sec": 823,
            "vi": "Một ngàn khúc ca quanh ta, xin em đừng giận anh nhé",
            "zh": "圍繞著我們的一千首情歌，親愛的請別生我的氣"
          },
          {
            "sec": 826,
            "vi": "Bởi vì đôi khi anh là...",
            "zh": "因為有時候，我就是⋯⋯"
          }
        ]
      },
      {
        "label": "導歌二 (Pre-Chorus 2)",
        "startSec": 827,
        "timestamp": "00:13:47",
        "lines": [
          {
            "sec": 827,
            "vi": "Người đàn ông em yêu đôi khi có những phút giây yếu đuối không ngờ",
            "zh": "我深愛的男人，偶爾也會有意想不到的脆弱時刻"
          },
          {
            "sec": 834,
            "vi": "Ngoài kia nếu có khó khăn quá, về nhà anh nhé, có em chờ",
            "zh": "外頭若是太艱難辛苦了，就回家吧親愛的，家裡有我等你"
          },
          {
            "sec": 840,
            "vi": "Có môi mềm thơm thơm, có dư vị mỗi bữa cơm",
            "zh": "有柔軟清甜的吻，有每一頓家常菜的溫馨餘味"
          },
          {
            "sec": 846,
            "vi": "Xuân, hạ, thu, đông đều có em chờ",
            "zh": "春夏秋冬，四季都有我為你守候"
          }
        ]
      },
      {
        "label": "副歌二 (Chorus 2)",
        "startSec": 850,
        "timestamp": "00:14:10",
        "lines": [
          {
            "sec": 850,
            "vi": "Tình yêu là những ánh sáng lấp lánh đèn vàng thắp lên bên ô cửa nhỏ",
            "zh": "愛情是小窗邊亮起的那盞閃爍暖黃燈火"
          },
          {
            "sec": 857,
            "vi": "Tình yêu là những dịu êm từng đêm mình cùng ăn tối và nghe mưa rơi",
            "zh": "愛情是每個溫柔夜晚，我們一起吃晚餐、傾聽窗外雨聲"
          },
          {
            "sec": 863,
            "vi": "Biết sẽ có những lúc trái tim đau đớn khôn nguôi",
            "zh": "明知偶爾也會有心痛難平的時候"
          },
          {
            "sec": 870,
            "vi": "Vẫn yêu và yêu và yêu thế thôi",
            "zh": "卻依然愛著、愛著，就這樣單純地愛著"
          }
        ]
      },
      {
        "label": "橋段 (Bridge)",
        "startSec": 876,
        "timestamp": "00:14:36",
        "lines": [
          {
            "sec": 876,
            "vi": "What is love? Can you feel it?",
            "zh": "愛是什麼？你能感受到嗎？"
          },
          {
            "sec": 880,
            "vi": "What is love? Can you feel it?",
            "zh": "愛是什麼？你能感受到嗎？"
          },
          {
            "sec": 884,
            "vi": "What is love? Just tell me, baby",
            "zh": "愛是什麼？親愛的，請告訴我"
          },
          {
            "sec": 888,
            "vi": "What is love? Just tell me, baby",
            "zh": "愛是什麼？親愛的，請告訴我"
          }
        ]
      },
      {
        "label": "終段副歌 (Final Chorus)",
        "startSec": 900,
        "timestamp": "00:15:00",
        "lines": [
          {
            "sec": 900,
            "vi": "Tình yêu là những ánh sáng lấp lánh đèn vàng thắp lên bên ô cửa nhỏ",
            "zh": "愛情是小窗邊亮起的那盞閃爍暖黃燈火"
          },
          {
            "sec": 906,
            "vi": "Tình yêu là những dịu êm từng đêm mình cùng ăn tối và nghe mưa rơi",
            "zh": "愛情是每個溫柔夜晚，我們一起吃晚餐、傾聽窗外雨聲"
          },
          {
            "sec": 912,
            "vi": "Biết sẽ có những lúc trái tim đau đớn khôn nguôi",
            "zh": "明知偶爾也會有心痛難平的時候"
          },
          {
            "sec": 918,
            "vi": "Vẫn yêu và yêu và yêu thế thôi",
            "zh": "卻依然愛著、愛著，就這樣單純地愛著"
          }
        ]
      }
    ]
  },
  {
    "no": 5,
    "id": "song-05-giac-mo-trua",
    "titleVi": "Giấc Mơ Trưa",
    "titleZh": "午後之夢",
    "coverArtist": "Trạm Cover",
    "originalArtist": "Thùy Chi / Giáng Son",
    "mood": "民謠詩意",
    "startSec": 944,
    "vocalStartSec": 946,
    "endSec": 1188,
    "startTimestamp": "00:15:44",
    "endTimestamp": "00:19:48",
    "durationSec": 244,
    "summaryZh": "由女作曲家 Giáng Son 譜曲、詩人 Nguyễn Vĩnh Tiến 作詞的當代民謠名曲，以澄澈田野、天際白鷺、幽靜河流與悠遠寺廟鐘聲，織就一場如詩如畫、空靈淡雅的鄉愁午夢。",
    "keyVocab": [
      {
        "vi": "trong veo",
        "zh": "澄澈透明、清澈見底",
        "note": "trong（清澈）+ veo（極致程度），常用來描繪天空、溪水或純淨的歌聲。"
      },
      {
        "vi": "cánh cò",
        "zh": "白鷺的翅膀／飛翔的白鷺",
        "note": "越南傳統民歌與鄉村詩意中最經典的意象之一，象徵故鄉與田園風景。"
      },
      {
        "vi": "chân trời",
        "zh": "天際、地平線",
        "note": "字面為「天之腳」，詩意地指涉遙遠的天邊。"
      },
      {
        "vi": "dấu chân xưa",
        "zh": "往昔的足跡",
        "note": "dấu chân（腳印、足跡）+ xưa（從前），引申為過去走過的歲月與記憶。"
      },
      {
        "vi": "tiếng chuông chùa",
        "zh": "寺廟的鐘聲",
        "note": "tiếng（聲音）+ chuông（鐘）+ chùa（佛寺），營造靜謐悠遠的東方禪意氛圍。"
      }
    ],
    "sections": [
      {
        "label": "主歌一 (Verse 1)",
        "startSec": 946,
        "timestamp": "00:15:46",
        "lines": [
          {
            "sec": 946,
            "vi": "Em nằm em nhớ một ngày trong veo",
            "zh": "我躺著，懷念起某個澄澈清朗的日子"
          },
          {
            "sec": 952,
            "vi": "Một mùa nghiêng nghiêng cánh đồng xa mờ",
            "zh": "某個微斜搖曳的季節，遠方田野一片朦朧"
          },
          {
            "sec": 957,
            "vi": "Cánh cò nghiêng cuối trời",
            "zh": "一隻白鷺斜飛在天邊盡頭"
          },
          {
            "sec": 962,
            "vi": "Em về nơi ấy một bờ vai xanh, một dòng tóc xanh",
            "zh": "我回到那裡，那青澀的雙肩，那如瀑的青絲"
          },
          {
            "sec": 972,
            "vi": "Đó là chân trời hay là mưa cuối trời",
            "zh": "遠處究竟是天際，抑或是天邊飄落的微雨"
          }
        ]
      },
      {
        "label": "副歌一 (Chorus 1)",
        "startSec": 979,
        "timestamp": "00:16:19",
        "lines": [
          {
            "sec": 979,
            "vi": "Và gió theo em trôi về con đường",
            "zh": "微風隨我一路飄回那條小路"
          },
          {
            "sec": 985,
            "vi": "Và nắng theo em bên dòng sông vắng",
            "zh": "陽光陪我流連在幽靜無人的河畔"
          },
          {
            "sec": 990,
            "vi": "Mùa đã trôi đi những miền xanh thẳm",
            "zh": "季節已飄逝向深邃的青翠遠方"
          },
          {
            "sec": 994,
            "vi": "Mùa đã quên đi những lần em buồn",
            "zh": "季節也遺忘了我曾經落寞憂傷的那些時刻"
          },
          {
            "sec": 999,
            "vi": "Từng dấu chân xưa trên đường em về",
            "zh": "歸途上留下的道道往昔足跡"
          },
          {
            "sec": 1004,
            "vi": "Giờ đã ra hoa những nhành hoa vắng",
            "zh": "如今已靜靜綻放出幾枝寂寥的小花"
          },
          {
            "sec": 1008,
            "vi": "Người đã đi qua những lời em kể",
            "zh": "那人早已走過我所傾訴的字字句句"
          },
          {
            "sec": 1013,
            "vi": "Này giấc mơ trưa bao giờ em về",
            "zh": "喔，這場午後之夢啊，我何時才能歸去"
          },
          {
            "sec": 1017,
            "vi": "Một tiếng chuông chùa...",
            "zh": "遠處傳來一聲悠悠古寺鐘鳴⋯⋯"
          }
        ]
      },
      {
        "label": "主歌二 (Verse 2)",
        "startSec": 1044,
        "timestamp": "00:17:24",
        "lines": [
          {
            "sec": 1044,
            "vi": "Em nằm em nhớ một ngày trong veo",
            "zh": "我躺著，懷念起某個澄澈清朗的日子"
          },
          {
            "sec": 1050,
            "vi": "Một mùa nghiêng nghiêng cánh đồng xa mờ",
            "zh": "某個微斜搖曳的季節，遠方田野一片朦朧"
          },
          {
            "sec": 1055,
            "vi": "Cánh cò nghiêng cuối trời",
            "zh": "一隻白鷺斜飛在天邊盡頭"
          },
          {
            "sec": 1060,
            "vi": "Em về nơi ấy một bờ vai xanh, một dòng tóc xanh",
            "zh": "我回到那裡，那青澀的雙肩，那如瀑的青絲"
          },
          {
            "sec": 1068,
            "vi": "Đó là chân trời hay là mưa cuối trời",
            "zh": "遠處究竟是天際，抑或是天邊飄落的微雨"
          }
        ]
      },
      {
        "label": "副歌二 (Chorus 2)",
        "startSec": 1076,
        "timestamp": "00:17:56",
        "lines": [
          {
            "sec": 1076,
            "vi": "Và gió theo em trôi về con đường",
            "zh": "微風隨我一路飄回那條小路"
          },
          {
            "sec": 1082,
            "vi": "Và nắng theo em bên dòng sông vắng",
            "zh": "陽光陪我流連在幽靜無人的河畔"
          },
          {
            "sec": 1087,
            "vi": "Mùa đã trôi đi những miền xanh thẳm",
            "zh": "季節已飄逝向深邃的青翠遠方"
          },
          {
            "sec": 1091,
            "vi": "Mùa đã quên đi những lần em buồn",
            "zh": "季節也遺忘了我曾經落寞憂傷的那些時刻"
          },
          {
            "sec": 1095,
            "vi": "Từng dấu chân xưa trên đường em về",
            "zh": "歸途上留下的道道往昔足跡"
          },
          {
            "sec": 1101,
            "vi": "Giờ đã ra hoa những nhành hoa vắng",
            "zh": "如今已靜靜綻放出幾枝寂寥的小花"
          },
          {
            "sec": 1106,
            "vi": "Người đã đi qua những lời em kể",
            "zh": "那人早已走過我所傾訴的字字句句"
          },
          {
            "sec": 1111,
            "vi": "Này giấc mơ trưa bao giờ em về",
            "zh": "喔，這場午後之夢啊，我何時才能歸去"
          },
          {
            "sec": 1114,
            "vi": "Một tiếng chuông chùa...",
            "zh": "遠處傳來一聲悠悠古寺鐘鳴⋯⋯"
          }
        ]
      },
      {
        "label": "終段副歌與尾奏 (Final Chorus & Outro)",
        "startSec": 1118,
        "timestamp": "00:18:38",
        "lines": [
          {
            "sec": 1118,
            "vi": "Và gió theo em trôi về con đường",
            "zh": "微風隨我一路飄回那條小路"
          },
          {
            "sec": 1124,
            "vi": "Và nắng theo em bên dòng sông vắng",
            "zh": "陽光陪我流連在幽靜無人的河畔"
          },
          {
            "sec": 1129,
            "vi": "Mùa đã trôi đi những miền xanh thẳm",
            "zh": "季節已飄逝向深邃的青翠遠方"
          },
          {
            "sec": 1133,
            "vi": "Mùa đã quên đi những lần em buồn",
            "zh": "季節也遺忘了我曾經落寞憂傷的那些時刻"
          },
          {
            "sec": 1138,
            "vi": "Từng dấu chân xưa trên đường em về",
            "zh": "歸途上留下的道道往昔足跡"
          },
          {
            "sec": 1143,
            "vi": "Giờ đã ra hoa những nhành hoa vắng",
            "zh": "如今已靜靜綻放出幾枝寂寥的小花"
          },
          {
            "sec": 1148,
            "vi": "Người đã đi qua những lời em kể",
            "zh": "那人早已走過我所傾訴的字字句句"
          },
          {
            "sec": 1153,
            "vi": "Này giấc mơ trưa bao giờ em về",
            "zh": "喔，這場午後之夢啊，我何時才能歸去"
          },
          {
            "sec": 1156,
            "vi": "Một tiếng chuông chùa...",
            "zh": "遠處傳來一聲悠悠古寺鐘鳴⋯⋯"
          },
          {
            "sec": 1161,
            "vi": "Này giấc mơ trưa bao giờ em về",
            "zh": "喔，這場午後之夢啊，我何時才能歸去"
          },
          {
            "sec": 1170,
            "vi": "Một giấc mơ tan...",
            "zh": "一場緩緩散去的夢⋯⋯"
          }
        ]
      }
    ]
  },
  {
    "no": 6,
    "id": "song-06-mo",
    "titleVi": "Mơ",
    "titleZh": "夢",
    "coverArtist": "Trạm Cover",
    "originalArtist": "Vũ Cát Tường",
    "mood": "深情夢幻",
    "startSec": 1188,
    "vocalStartSec": 1189,
    "endSec": 1436,
    "startTimestamp": "00:19:48",
    "endTimestamp": "00:23:56",
    "durationSec": 248,
    "summaryZh": "Vũ Cát Tường 早期最具代表性的靈魂抒情創作，訴說在戀人遠去後，獨自守著秋月與長夜，在夢境中想像對方歸來相擁，最終學會將隱痛交給時間輕輕縫合的溫柔釋懷。",
    "keyVocab": [
      {
        "vi": "nâng niu",
        "zh": "細心珍視、小心捧著",
        "note": "形容對珍貴事物或回憶的溫柔呵護，如 nâng niu những thơ ngây（珍藏那些純真）。"
      },
      {
        "vi": "mơ màng",
        "zh": "迷濛、半夢半醒",
        "note": "描繪恍惚沉浸在思念或夢境裡的狀態。"
      },
      {
        "vi": "chất chứa",
        "zh": "積壓、深藏滿懷",
        "note": "常用於形容壓抑在心底、始終未曾說出口的情緒與心事。"
      },
      {
        "vi": "an nhiên",
        "zh": "安然自在、平靜無憂",
        "note": "漢越詞「安然」，形容心靈毫無負擔與煩擾的寧靜狀態。"
      },
      {
        "vi": "vời vợi",
        "zh": "遙遠高懸、無邊無際",
        "note": "疊詞形容詞，用來形容極為遙遠的距離或高不可及的光影。"
      }
    ],
    "sections": [
      {
        "label": "主歌一 (Verse 1)",
        "startSec": 1189,
        "timestamp": "00:19:49",
        "lines": [
          {
            "sec": 1189,
            "vi": "Và khi mà em rời xa vòng tay của riêng anh",
            "zh": "而當妳離開了只屬於我的懷抱"
          },
          {
            "sec": 1194,
            "vi": "Chạy theo cơn mơ, chạy theo hạnh phúc ở nơi nào",
            "zh": "去追尋夢境，去追尋不知在何方的幸福"
          },
          {
            "sec": 1199,
            "vi": "Chỉ mỗi anh nơi này nâng niu những thơ ngây",
            "zh": "只剩我獨自在原地，細心珍藏那些純真過往"
          },
          {
            "sec": 1204,
            "vi": "Và khi anh lặng lẽ chôn giấu bao buồn vui",
            "zh": "而當我靜靜將無數悲歡深埋心底"
          },
          {
            "sec": 1211,
            "vi": "Gói trong ngăn đựng những niềm đau",
            "zh": "收進裝滿傷痛的抽屜深處"
          },
          {
            "sec": 1214,
            "vi": "Tháng tháng ngày chẳng màng",
            "zh": "歲歲年年不再掛懷世事"
          },
          {
            "sec": 1217,
            "vi": "Anh lạc lối giữa bao làn gió đang hát vu vơ",
            "zh": "我在漫無目的吟唱的陣陣微風裡迷失方向"
          }
        ]
      },
      {
        "label": "導歌 (Pre-Chorus)",
        "startSec": 1231,
        "timestamp": "00:20:31",
        "lines": [
          {
            "sec": 1231,
            "vi": "Tự nắm đôi tay anh mơ màng, hình dung em đang chốn đây",
            "zh": "自己握著自己的雙手，我在迷濛中想像妳就在這裡"
          },
          {
            "sec": 1247,
            "vi": "Tự hé đôi môi anh mỉm cười, hình dung em đang ôm anh lúc này",
            "zh": "自己輕展唇角微微一笑，想像此刻妳正緊緊擁抱著我"
          }
        ]
      },
      {
        "label": "副歌一 (Chorus 1)",
        "startSec": 1257,
        "timestamp": "00:20:57",
        "lines": [
          {
            "sec": 1257,
            "vi": "Mình anh bên những tháng năm âm thầm đổi thay",
            "zh": "我獨自守著悄然變遷的漫長歲月"
          },
          {
            "sec": 1261,
            "vi": "Mình anh bên những chất chứa chưa một lần nói",
            "zh": "我獨自守著滿懷從未說出口的心事"
          },
          {
            "sec": 1265,
            "vi": "Mình anh với trăng thu bên thềm",
            "zh": "我獨自伴著階前的秋月清輝"
          },
          {
            "sec": 1269,
            "vi": "Gợi nhớ ai hương tóc mềm, để thấy không gian dài rộng thế",
            "zh": "勾起對誰柔順髮香的思念，才發覺四周空間如此空曠漫長"
          },
          {
            "sec": 1274,
            "vi": "Mình anh mỗi đêm ru anh vào một giấc mơ có em về",
            "zh": "每個夜晚我都獨自哄著自己入睡，進入一場有妳歸來的夢"
          },
          {
            "sec": 1280,
            "vi": "Dù mai đây ai thay anh yêu em",
            "zh": "即便將來有別人代替我去愛妳"
          },
          {
            "sec": 1283,
            "vi": "Mình anh với riêng anh trong đời",
            "zh": "人海之中，我只與自己相伴度日"
          },
          {
            "sec": 1286,
            "vi": "Vệt nắng trên cao vời vợi, thời gian nhẹ khâu vết thương anh",
            "zh": "高空那道遙遠微光之下，時間會替我輕輕縫合傷口"
          }
        ]
      },
      {
        "label": "主歌二 (Verse 2)",
        "startSec": 1309,
        "timestamp": "00:21:49",
        "lines": [
          {
            "sec": 1309,
            "vi": "Có lúc chỉ muốn nói em nghe",
            "zh": "有時候，只想向妳親口傾訴"
          },
          {
            "sec": 1313,
            "vi": "Những điều cất giấu cứ xoáy trái tim anh",
            "zh": "那些深藏心底的事，總不斷揪痛我的心"
          },
          {
            "sec": 1317,
            "vi": "Những điều quấn lấy nhức nhối trái tim anh",
            "zh": "那些揮之不去的思緒，日夜纏繞刺痛我的心"
          },
          {
            "sec": 1322,
            "vi": "Đánh mất chính bản thân này",
            "zh": "幾乎讓我迷失了原來的自己"
          },
          {
            "sec": 1326,
            "vi": "Có lúc đã mất hết vô tư quanh mình",
            "zh": "有時候，身邊早已失去往日的無憂無慮"
          },
          {
            "sec": 1331,
            "vi": "Chỉ những sóng gió, những ưu tư",
            "zh": "只剩下接連的風波與沉重憂思"
          },
          {
            "sec": 1335,
            "vi": "Anh lại nhớ đến những lúc ta an nhiên",
            "zh": "我又想起我們曾那樣安然自在的時光"
          },
          {
            "sec": 1339,
            "vi": "Nói những câu chuyện thâu đêm",
            "zh": "徹夜長談著說不完的心事"
          }
        ]
      },
      {
        "label": "副歌二 (Chorus 2)",
        "startSec": 1342,
        "timestamp": "00:22:22",
        "lines": [
          {
            "sec": 1342,
            "vi": "Mình anh bên những tháng năm âm thầm đổi thay",
            "zh": "我獨自守著悄然變遷的漫長歲月"
          },
          {
            "sec": 1346,
            "vi": "Mình anh bên những chất chứa chưa một lần nói",
            "zh": "我獨自守著滿懷從未說出口的心事"
          },
          {
            "sec": 1350,
            "vi": "Mình anh với trăng thu bên thềm",
            "zh": "我獨自伴著階前的秋月清輝"
          },
          {
            "sec": 1354,
            "vi": "Gợi nhớ ai hương tóc mềm, để thấy không gian dài rộng thế",
            "zh": "勾起對誰柔順髮香的思念，才發覺四周空間如此空曠漫長"
          },
          {
            "sec": 1359,
            "vi": "Mình anh mỗi đêm ru anh vào một giấc mơ có em về",
            "zh": "每個夜晚我都獨自哄著自己入睡，進入一場有妳歸來的夢"
          },
          {
            "sec": 1366,
            "vi": "Dù mai đây ai thay anh yêu em",
            "zh": "即便將來有別人代替我去愛妳"
          },
          {
            "sec": 1369,
            "vi": "Mình anh với riêng anh trong đời",
            "zh": "人海之中，我只與自己相伴度日"
          },
          {
            "sec": 1372,
            "vi": "Vệt nắng trên cao vời vợi, thời gian nhẹ khâu vết thương anh",
            "zh": "高空那道遙遠微光之下，時間會替我輕輕縫合傷口"
          }
        ]
      },
      {
        "label": "終段副歌與尾奏 (Final Chorus & Outro)",
        "startSec": 1378,
        "timestamp": "00:22:58",
        "lines": [
          {
            "sec": 1378,
            "vi": "Mình anh bên những tháng năm âm thầm đổi thay",
            "zh": "我獨自守著悄然變遷的漫長歲月"
          },
          {
            "sec": 1382,
            "vi": "Mình anh bên những chất chứa chưa một lần nói",
            "zh": "我獨自守著滿懷從未說出口的心事"
          },
          {
            "sec": 1385,
            "vi": "Mình anh với trăng thu bên thềm",
            "zh": "我獨自伴著階前的秋月清輝"
          },
          {
            "sec": 1389,
            "vi": "Gợi nhớ ai hương tóc mềm, để thấy không gian dài rộng thế",
            "zh": "勾起對誰柔順髮香的思念，才發覺四周空間如此空曠漫長"
          },
          {
            "sec": 1394,
            "vi": "Mình anh mỗi đêm ru anh vào một giấc mơ có em về",
            "zh": "每個夜晚我都獨自哄著自己入睡，進入一場有妳歸來的夢"
          },
          {
            "sec": 1400,
            "vi": "Dù mai đây ai thay anh yêu em",
            "zh": "即便將來有別人代替我去愛妳"
          },
          {
            "sec": 1403,
            "vi": "Mình anh với riêng anh trong đời",
            "zh": "人海之中，我只與自己相伴度日"
          },
          {
            "sec": 1407,
            "vi": "Vệt nắng trên cao vời vợi, thời gian nhẹ khâu vết thương anh",
            "zh": "高空那道遙遠微光之下，時間會替我輕輕縫合傷口"
          },
          {
            "sec": 1415,
            "vi": "Mình anh với riêng anh trong đời",
            "zh": "人海之中，我只與自己相伴度日"
          },
          {
            "sec": 1419,
            "vi": "Vệt nắng trên cao vời vợi, thời gian nhẹ khâu vết thương anh...",
            "zh": "高空那道遙遠微光之下，時間會替我輕輕縫合傷口⋯⋯"
          }
        ]
      }
    ]
  },
  {
    "no": 7,
    "id": "song-07-mat-moc",
    "titleVi": "Mặt Mộc",
    "titleZh": "素顏",
    "coverArtist": "Trạm Cover",
    "originalArtist": "Phạm Nguyên Ngọc x VAnh",
    "mood": "清新甜蜜",
    "startSec": 1436,
    "vocalStartSec": 1446,
    "endSec": 1600,
    "startTimestamp": "00:23:56",
    "endTimestamp": "00:26:40",
    "durationSec": 164,
    "summaryZh": "輕快溫暖的民謠告白情歌，描寫不需華麗妝容也能令人心動的純粹愛戀，盼望與摯愛相守至白頭。",
    "keyVocab": [
      {
        "vi": "mặt mộc",
        "zh": "素顏",
        "note": "mặt（臉）＋ mộc（樸實、未經雕飾），指不施脂粉的自然面容"
      },
      {
        "vi": "giày cao gót",
        "zh": "高跟鞋",
        "note": "giày（鞋）＋ cao gót（高鞋跟），日常服飾常見詞彙"
      },
      {
        "vi": "phấn son cầu kỳ",
        "zh": "濃妝豔抹、繁複的妝容",
        "note": "phấn son 指粉底與口紅（彩妝），cầu kỳ 意為講究、繁複"
      },
      {
        "vi": "nâng niu",
        "zh": "呵護、捧在手心疼愛",
        "note": "形容對心愛的人或珍貴事物倍加珍惜照顧"
      },
      {
        "vi": "già nua",
        "zh": "年邁、蒼老",
        "note": "情歌中常用 đến khi già nua 表達「直到白頭偕老」"
      }
    ],
    "sections": [
      {
        "label": "主歌一 (Verse 1)",
        "startSec": 1446,
        "timestamp": "00:24:06",
        "lines": [
          {
            "sec": 1446,
            "vi": "Không cần mang giày cao gót, không cần phấn son cầu kỳ",
            "zh": "不需要穿高跟鞋，不需要繁複妝容"
          },
          {
            "sec": 1449,
            "vi": "Mà khiến anh nằm mơ em đêm ngày",
            "zh": "卻讓我日日夜夜夢見妳"
          },
          {
            "sec": 1451,
            "vi": "Bên cạnh em bình yên quá, anh chỉ muốn say mãi",
            "zh": "在妳身邊如此平靜安穩，我只想永遠沉醉"
          },
          {
            "sec": 1455,
            "vi": "Trong làn tóc thơm dịu dàng",
            "zh": "在妳溫柔芬芳的髮香裡"
          },
          {
            "sec": 1457,
            "vi": "Hay là anh gặp ba má, xin được rước em về nhà",
            "zh": "不如我去拜訪妳爸媽，請求把妳娶回家"
          },
          {
            "sec": 1460,
            "vi": "Để giữ em của riêng anh cả đời",
            "zh": "好讓妳一生一世專屬於我"
          },
          {
            "sec": 1463,
            "vi": "Đợi chờ anh đã lâu biết không, em muốn bên người",
            "zh": "你知道我已等你好久了嗎，我想陪在你身旁"
          }
        ]
      },
      {
        "label": "副歌一 (Chorus 1)",
        "startSec": 1469,
        "timestamp": "00:24:29",
        "lines": [
          {
            "sec": 1469,
            "vi": "Chẳng tìm đâu ra một người như thế",
            "zh": "世上再也找不到像妳這樣的人"
          },
          {
            "sec": 1472,
            "vi": "Môi cười xinh như hoa, đáng yêu thật thà",
            "zh": "笑靨如花般動人，可愛又真誠"
          },
          {
            "sec": 1476,
            "vi": "Cứ êm đềm thương nhau qua bao nắng mưa",
            "zh": "就這樣安穩地相愛，走過無數晴雨"
          },
          {
            "sec": 1479,
            "vi": "Một đời nâng niu, một đời đưa đón",
            "zh": "用一輩子呵護，用一輩子接送相伴"
          },
          {
            "sec": 1484,
            "vi": "Khi bình minh ôm em ngủ say trong lòng",
            "zh": "在破曉時分將熟睡的妳擁入懷中"
          },
          {
            "sec": 1487,
            "vi": "Đến khi già nua vẫn say đắm em thôi",
            "zh": "直到年華老去，依然只為妳著迷"
          }
        ]
      },
      {
        "label": "主歌二 (Verse 2)",
        "startSec": 1514,
        "timestamp": "00:25:14",
        "lines": [
          {
            "sec": 1514,
            "vi": "Muốn tặng anh cả thế giới, anh lại nói anh chẳng mong gì",
            "zh": "想把整個世界送給你，你卻說自己別無所求"
          },
          {
            "sec": 1518,
            "vi": "Chỉ muốn một vườn hoa sau sân nhà",
            "zh": "只想要屋後院子裡的一座小花園"
          },
          {
            "sec": 1520,
            "vi": "Hay tặng em đời anh nhé, đêm ngày luôn săn sóc nuông chiều",
            "zh": "不如把我的餘生送給妳好嗎，日夜悉心照料寵愛"
          },
          {
            "sec": 1524,
            "vi": "Lắng nghe mọi điều",
            "zh": "傾聽妳所有的心事"
          },
          {
            "sec": 1526,
            "vi": "Hay là anh gặp ba má, nói rằng lỡ thương quá em rồi",
            "zh": "不如我去見見爸媽，坦白我早已太愛妳了"
          },
          {
            "sec": 1529,
            "vi": "Vì nhớ nhung ngày đêm anh bơ phờ",
            "zh": "為了日夜思念妳而魂不守舍"
          },
          {
            "sec": 1531,
            "vi": "Tình yêu anh giản đơn, đã thương, thương đến vô bờ",
            "zh": "我的愛很簡單，一旦愛上了，便愛得沒有盡頭"
          }
        ]
      },
      {
        "label": "副歌二 (Chorus 2)",
        "startSec": 1537,
        "timestamp": "00:25:37",
        "lines": [
          {
            "sec": 1537,
            "vi": "Chẳng tìm đâu ra một người như thế",
            "zh": "世上再也找不到像妳這樣的人"
          },
          {
            "sec": 1540,
            "vi": "Môi cười xinh như hoa, đáng yêu thật thà",
            "zh": "笑靨如花般動人，可愛又真誠"
          },
          {
            "sec": 1543,
            "vi": "Cứ êm đềm thương nhau qua bao nắng mưa",
            "zh": "就這樣安穩地相愛，走過無數晴雨"
          },
          {
            "sec": 1547,
            "vi": "Một đời nâng niu, một đời đưa đón",
            "zh": "用一輩子呵護，用一輩子接送相伴"
          },
          {
            "sec": 1552,
            "vi": "Khi bình minh ôm em ngủ say trong lòng",
            "zh": "在破曉時分將熟睡的妳擁入懷中"
          },
          {
            "sec": 1556,
            "vi": "Đến khi già nua vẫn say đắm em thôi",
            "zh": "直到年華老去，依然只為妳著迷"
          }
        ]
      },
      {
        "label": "尾段副歌 (Outro Chorus)",
        "startSec": 1561,
        "timestamp": "00:26:01",
        "lines": [
          {
            "sec": 1561,
            "vi": "Người đẹp như mây, một đời anh say",
            "zh": "佳人美得如雲似霧，令我醉心一生"
          },
          {
            "sec": 1563,
            "vi": "Anh nguyện đưa em đi khắp nơi trên đời",
            "zh": "我願帶妳走遍世間每個角落"
          },
          {
            "sec": 1566,
            "vi": "Ngắm mây ngàn giăng giăng trên núi cao",
            "zh": "一同仰望高山上層疊繚繞的雲海"
          },
          {
            "sec": 1570,
            "vi": "Cuộc đời cho em thật nhiều may mắn",
            "zh": "生命賜予我如此豐厚的幸運"
          },
          {
            "sec": 1575,
            "vi": "Khi chạm môi anh em ngỡ như thiên đàng",
            "zh": "輕吻你雙唇時，我彷彿置身天堂"
          },
          {
            "sec": 1578,
            "vi": "Đến khi già nua vẫn hôn mãi anh thôi",
            "zh": "直到年華老去，依然只想親吻著你"
          },
          {
            "sec": 1583,
            "vi": "Đến khi già nua vẫn say đắm em thôi",
            "zh": "直到年華老去，依然只為妳著迷"
          },
          {
            "sec": 1590,
            "vi": "Đến khi già nua vẫn say đắm em thôi",
            "zh": "直到年華老去，依然只為妳著迷"
          }
        ]
      }
    ]
  },
  {
    "no": 8,
    "id": "song-08-dau-mua",
    "titleVi": "Dấu Mưa",
    "titleZh": "雨跡",
    "coverArtist": "Jiki X Cover",
    "originalArtist": "Trung Quân Idol / Phạm Toàn Thắng",
    "mood": "深情懷舊",
    "startSec": 1600,
    "vocalStartSec": 1601,
    "endSec": 1844,
    "startTimestamp": "00:26:40",
    "endTimestamp": "00:30:44",
    "durationSec": 244,
    "summaryZh": "越南最具代表性的雨季經典抒情曲，以黃昏微雨中追尋回憶的畫面，娓娓道出恍惚卻深刻的心動與思念。",
    "keyVocab": [
      {
        "vi": "ký ức",
        "zh": "記憶、回憶",
        "note": "漢越詞，對應「記憶」，抒情歌高頻詞彙"
      },
      {
        "vi": "thẩn thờ",
        "zh": "恍神、失魂落魄",
        "note": "形容因思念或迷惘而茫然出神的狀態"
      },
      {
        "vi": "dấu vết",
        "zh": "痕跡、蹤跡",
        "note": "lần theo những dấu vết 意為「循著點點痕跡追尋」"
      },
      {
        "vi": "tí tách",
        "zh": "滴答滴答",
        "note": "擬聲詞，專門形容雨滴輕輕落下的聲音"
      },
      {
        "vi": "khoảnh khắc",
        "zh": "瞬間、片刻",
        "note": "漢越詞，對應「頃刻」，常指令人難忘的一瞬間"
      }
    ],
    "sections": [
      {
        "label": "主歌一 (Verse 1)",
        "startSec": 1601,
        "timestamp": "00:26:41",
        "lines": [
          {
            "sec": 1601,
            "vi": "Một cơn mưa đi qua để lại",
            "zh": "一場雨掠過後留下了"
          },
          {
            "sec": 1608,
            "vi": "Những ký ức anh và em",
            "zh": "屬於我與妳的點點回憶"
          },
          {
            "sec": 1613,
            "vi": "Tìm em trong cơn mưa anh thẩn thờ",
            "zh": "我在雨中茫然地尋找妳的身影"
          },
          {
            "sec": 1619,
            "vi": "Lần theo những dấu vết đánh rơi",
            "zh": "循著那些遺落的痕跡追尋"
          },
          {
            "sec": 1624,
            "vi": "Tưởng như rất gần mà ngờ đâu đã rất xa",
            "zh": "原以為近在咫尺，不料早已相隔遙遠"
          },
          {
            "sec": 1630,
            "vi": "Vụt mất theo cơn mưa ngày qua",
            "zh": "隨著昨日的雨勢悄然消逝"
          },
          {
            "sec": 1635,
            "vi": "Tưởng như rất lạ mà ngỡ đâu sao quá quen",
            "zh": "原以為如此陌生，卻又覺得莫名熟悉"
          },
          {
            "sec": 1642,
            "vi": "Là lúc em ngang đời ta",
            "zh": "那正是妳走過我生命的時刻"
          }
        ]
      },
      {
        "label": "副歌一 (Chorus 1)",
        "startSec": 1647,
        "timestamp": "00:27:27",
        "lines": [
          {
            "sec": 1647,
            "vi": "Chiều cuối con đường",
            "zh": "傍晚時分，長路的盡頭"
          },
          {
            "sec": 1650,
            "vi": "Mình nhìn ngắm hoàng hôn",
            "zh": "我們靜靜仰望著黃昏"
          },
          {
            "sec": 1653,
            "vi": "Ẩn sâu trong tiếng tí tách rơi",
            "zh": "藏身在滴答落下的雨聲深處"
          },
          {
            "sec": 1658,
            "vi": "Chờ mãi nơi này",
            "zh": "一直在這裡守候"
          },
          {
            "sec": 1660,
            "vi": "Một cảm giác quá lạ thường",
            "zh": "一種說不出的奇妙感受"
          },
          {
            "sec": 1665,
            "vi": "Cảm giác cho anh nhận ra",
            "zh": "讓我終於明白的感覺"
          },
          {
            "sec": 1670,
            "vi": "I love you, I love you so",
            "zh": "我愛妳，我如此深愛著妳"
          },
          {
            "sec": 1676,
            "vi": "Khoảnh khắc cho anh nhận ra",
            "zh": "讓我豁然明白的那一瞬間"
          },
          {
            "sec": 1682,
            "vi": "I love you, I love you so",
            "zh": "我愛妳，我如此深愛著妳"
          },
          {
            "sec": 1687,
            "vi": "Khoảnh khắc cho anh gần em",
            "zh": "讓我與妳如此貼近的那一瞬間"
          }
        ]
      },
      {
        "label": "主歌二 (Verse 2)",
        "startSec": 1694,
        "timestamp": "00:28:14",
        "lines": [
          {
            "sec": 1694,
            "vi": "Một cơn mưa đi qua để lại",
            "zh": "一場雨掠過後留下了"
          },
          {
            "sec": 1701,
            "vi": "Những ký ức anh và em",
            "zh": "屬於我與妳的點點回憶"
          },
          {
            "sec": 1706,
            "vi": "Tìm em trong cơn mưa anh thẩn thờ",
            "zh": "我在雨中茫然地尋找妳的身影"
          },
          {
            "sec": 1712,
            "vi": "Lần theo những dấu vết đánh rơi",
            "zh": "循著那些遺落的痕跡追尋"
          },
          {
            "sec": 1717,
            "vi": "Tưởng như rất gần mà ngờ đâu đã rất xa",
            "zh": "原以為近在咫尺，不料早已相隔遙遠"
          },
          {
            "sec": 1724,
            "vi": "Vụt mất theo cơn mưa ngày qua",
            "zh": "隨著昨日的雨勢悄然消逝"
          },
          {
            "sec": 1729,
            "vi": "Tưởng như rất lạ mà ngỡ đâu sao quá quen",
            "zh": "原以為如此陌生，卻又覺得莫名熟悉"
          },
          {
            "sec": 1735,
            "vi": "Là lúc em ngang đời ta",
            "zh": "那正是妳走過我生命的時刻"
          }
        ]
      },
      {
        "label": "副歌二 (Chorus 2)",
        "startSec": 1740,
        "timestamp": "00:29:00",
        "lines": [
          {
            "sec": 1740,
            "vi": "Chiều cuối con đường",
            "zh": "傍晚時分，長路的盡頭"
          },
          {
            "sec": 1743,
            "vi": "Mình nhìn ngắm hoàng hôn",
            "zh": "我們靜靜仰望著黃昏"
          },
          {
            "sec": 1746,
            "vi": "Ẩn sâu trong tiếng tí tách rơi",
            "zh": "藏身在滴答落下的雨聲深處"
          },
          {
            "sec": 1752,
            "vi": "Chờ mãi nơi này",
            "zh": "一直在這裡守候"
          },
          {
            "sec": 1755,
            "vi": "Một cảm giác quá lạ thường",
            "zh": "一種說不出的奇妙感受"
          },
          {
            "sec": 1759,
            "vi": "Cảm giác cho anh nhận ra",
            "zh": "讓我終於明白的感覺"
          },
          {
            "sec": 1764,
            "vi": "I love you, I love you so",
            "zh": "我愛妳，我如此深愛著妳"
          },
          {
            "sec": 1769,
            "vi": "Khoảnh khắc cho anh nhận ra",
            "zh": "讓我豁然明白的那一瞬間"
          },
          {
            "sec": 1775,
            "vi": "I love you, I love you so",
            "zh": "我愛妳，我如此深愛著妳"
          },
          {
            "sec": 1780,
            "vi": "Khoảnh khắc cho anh gần em",
            "zh": "讓我與妳如此貼近的那一瞬間"
          }
        ]
      },
      {
        "label": "最終副歌 (Final Chorus)",
        "startSec": 1791,
        "timestamp": "00:29:51",
        "lines": [
          {
            "sec": 1791,
            "vi": "Chiều cuối con đường",
            "zh": "傍晚時分，長路的盡頭"
          },
          {
            "sec": 1794,
            "vi": "Mình nhìn ngắm hoàng hôn",
            "zh": "我們靜靜仰望著黃昏"
          },
          {
            "sec": 1798,
            "vi": "Ẩn sâu trong tiếng tí tách rơi",
            "zh": "藏身在滴答落下的雨聲深處"
          },
          {
            "sec": 1803,
            "vi": "Chờ mãi nơi này",
            "zh": "一直在這裡守候"
          },
          {
            "sec": 1805,
            "vi": "Một cảm giác quá lạ thường",
            "zh": "一種說不出的奇妙感受"
          },
          {
            "sec": 1809,
            "vi": "Cảm giác cho anh nhận ra",
            "zh": "讓我終於明白的感覺"
          },
          {
            "sec": 1814,
            "vi": "I love you, I love you so",
            "zh": "我愛妳，我如此深愛著妳"
          },
          {
            "sec": 1820,
            "vi": "Khoảnh khắc cho anh nhận ra",
            "zh": "讓我豁然明白的那一瞬間"
          },
          {
            "sec": 1825,
            "vi": "I love you, I love you so",
            "zh": "我愛妳，我如此深愛著妳"
          },
          {
            "sec": 1831,
            "vi": "Khoảnh khắc cho anh gần em",
            "zh": "讓我與妳如此貼近的那一瞬間"
          }
        ]
      }
    ]
  },
  {
    "no": 9,
    "id": "song-09-hen-mot-mai",
    "titleVi": "Hẹn Một Mai",
    "titleZh": "相約明日",
    "coverArtist": "Jiki X Cover",
    "originalArtist": "Bùi Anh Tuấn / Nguyễn Duy Anh",
    "mood": "溫暖守候",
    "startSec": 1844,
    "vocalStartSec": 1845,
    "endSec": 2098,
    "startTimestamp": "00:30:44",
    "endTimestamp": "00:34:58",
    "durationSec": 254,
    "summaryZh": "電影《4 năm, 2 chàng, 1 tình yêu》深情主題曲，以溫柔堅定的承諾唱出對愛情的守護與對未來的守候。",
    "keyVocab": [
      {
        "vi": "hẹn hò",
        "zh": "約會、相約",
        "note": "日常指戀人約會，歌詞中帶有「彼此許下相守之約」的浪漫感"
      },
      {
        "vi": "trọng trách",
        "zh": "重責大任",
        "note": "漢越詞，對應「重責」，表現守護心愛之人的擔當"
      },
      {
        "vi": "sang giàu",
        "zh": "榮華富貴",
        "note": "sang（高貴）＋ giàu（富裕），chẳng hứa sẽ sang giàu 指不許諾大富大貴"
      },
      {
        "vi": "ngỏ lời",
        "zh": "開口表白、吐露心意",
        "note": "常用於表達向心儀對象說出愛意或提親"
      },
      {
        "vi": "cùng nhịp",
        "zh": "同頻、步調一致",
        "note": "đôi tim cùng nhịp 意為「兩顆同頻跳動的心」"
      }
    ],
    "sections": [
      {
        "label": "主歌一 (Verse 1)",
        "startSec": 1845,
        "timestamp": "00:30:45",
        "lines": [
          {
            "sec": 1845,
            "vi": "Có con đường nào bước qua",
            "zh": "是否有一條我們曾並肩走過的路"
          },
          {
            "sec": 1848,
            "vi": "Ta đến mang em món quà",
            "zh": "我前來為妳獻上一份心意"
          },
          {
            "sec": 1852,
            "vi": "Hẹn hò yêu thương, ta say đến già",
            "zh": "相約傾心相愛，一起沉醉到白頭"
          },
          {
            "sec": 1860,
            "vi": "Nắng mưa là chuyện nắng mưa",
            "zh": "陰晴圓缺本是世間常態"
          },
          {
            "sec": 1863,
            "vi": "Ai biết con tim đã vừa",
            "zh": "又有誰知道這顆心是否剛好"
          },
          {
            "sec": 1867,
            "vi": "Chạm đến hạnh phúc hay là chưa",
            "zh": "已經觸及幸福，還是仍在途中"
          }
        ]
      },
      {
        "label": "導歌一 (Pre-Chorus 1)",
        "startSec": 1873,
        "timestamp": "00:31:13",
        "lines": [
          {
            "sec": 1873,
            "vi": "Vô tình là cơn gió mang yêu thương đến gần anh",
            "zh": "無意間吹來的微風，將愛意帶到我身旁"
          },
          {
            "sec": 1881,
            "vi": "Giữ gìn là trọng trách đôi vai anh thêm sức mạnh",
            "zh": "守護這份愛是重責，讓我的雙肩更添力量"
          },
          {
            "sec": 1889,
            "vi": "Tin tưởng là lời hứa xa bao lâu vẫn tìm nhau",
            "zh": "信任是一句承諾，無論相隔多遠終會尋回彼此"
          },
          {
            "sec": 1897,
            "vi": "Anh chẳng hứa sẽ sang giàu, chỉ hứa yêu dài lâu",
            "zh": "我不承諾榮華富貴，只許諾長長久久的愛"
          }
        ]
      },
      {
        "label": "副歌一 (Chorus 1)",
        "startSec": 1906,
        "timestamp": "00:31:46",
        "lines": [
          {
            "sec": 1906,
            "vi": "Lỡ mai rời xa, ai biết được",
            "zh": "倘若明日不得不分離，誰又能預料"
          },
          {
            "sec": 1916,
            "vi": "Chợt biến mất hay vội lạc những nốt yêu thương",
            "zh": "會驟然消逝，還是匆匆遺落了愛的音符"
          },
          {
            "sec": 1922,
            "vi": "Mất nhau ngoài kia không với kịp",
            "zh": "在人海之中走散，伸手卻再也來不及抓住"
          },
          {
            "sec": 1930,
            "vi": "Vẽ ánh hoàng hôn nơi có đôi tim cùng nhịp",
            "zh": "描繪一抹黃昏，停留在兩顆心同頻跳動的地方"
          }
        ]
      },
      {
        "label": "主歌二 (Verse 2)",
        "startSec": 1954,
        "timestamp": "00:32:34",
        "lines": [
          {
            "sec": 1954,
            "vi": "Có nhau là chuyện sớm thôi",
            "zh": "擁有彼此只是早晚的事"
          },
          {
            "sec": 1958,
            "vi": "Anh biết yêu thương đến rồi",
            "zh": "我知道愛情已經悄悄降臨"
          },
          {
            "sec": 1961,
            "vi": "Ngần ngại đôi môi ai chưa ngỏ lời",
            "zh": "雙唇卻仍帶著幾分猶豫，尚未說出口"
          },
          {
            "sec": 1969,
            "vi": "Nếu như chậm chạp đến sau",
            "zh": "倘若命運讓我遲了一步"
          },
          {
            "sec": 1973,
            "vi": "Ký ức nơi kia có nhau",
            "zh": "只要那段回憶裡依然有彼此"
          },
          {
            "sec": 1977,
            "vi": "Thì nắng mới ấm áp hãy đợi nhau",
            "zh": "那就讓溫暖的晨光見證，請彼此耐心等候"
          }
        ]
      },
      {
        "label": "導歌二 (Pre-Chorus 2)",
        "startSec": 1982,
        "timestamp": "00:33:02",
        "lines": [
          {
            "sec": 1982,
            "vi": "Vô tình là cơn gió mang yêu thương đến gần anh",
            "zh": "無意間吹來的微風，將愛意帶到我身旁"
          },
          {
            "sec": 1989,
            "vi": "Giữ gìn là trọng trách đôi vai anh thêm sức mạnh",
            "zh": "守護這份愛是重責，讓我的雙肩更添力量"
          },
          {
            "sec": 1996,
            "vi": "Tin tưởng là lời hứa xa bao lâu vẫn tìm nhau",
            "zh": "信任是一句承諾，無論相隔多遠終會尋回彼此"
          },
          {
            "sec": 2005,
            "vi": "Anh chẳng hứa sẽ sang giàu, chỉ hứa yêu dài lâu",
            "zh": "我不承諾榮華富貴，只許諾長長久久的愛"
          }
        ]
      },
      {
        "label": "副歌二 (Chorus 2)",
        "startSec": 2015,
        "timestamp": "00:33:35",
        "lines": [
          {
            "sec": 2015,
            "vi": "Lỡ mai rời xa, ai biết được",
            "zh": "倘若明日不得不分離，誰又能預料"
          },
          {
            "sec": 2024,
            "vi": "Chợt biến mất hay vội lạc những nốt yêu thương",
            "zh": "會驟然消逝，還是匆匆遺落了愛的音符"
          },
          {
            "sec": 2031,
            "vi": "Mất nhau ngoài kia không với kịp",
            "zh": "在人海之中走散，伸手卻再也來不及抓住"
          },
          {
            "sec": 2040,
            "vi": "Vẽ ánh hoàng hôn nơi có đôi tim cùng nhịp",
            "zh": "描繪一抹黃昏，停留在兩顆心同頻跳動的地方"
          }
        ]
      },
      {
        "label": "最終副歌與尾聲 (Final Chorus & Outro)",
        "startSec": 2047,
        "timestamp": "00:34:07",
        "lines": [
          {
            "sec": 2047,
            "vi": "Lỡ mai rời xa, ai biết được",
            "zh": "倘若明日不得不分離，誰又能預料"
          },
          {
            "sec": 2056,
            "vi": "Chợt biến mất hay vội lạc những nốt yêu thương",
            "zh": "會驟然消逝，還是匆匆遺落了愛的音符"
          },
          {
            "sec": 2063,
            "vi": "Mất nhau ngoài kia không với kịp",
            "zh": "在人海之中走散，伸手卻再也來不及抓住"
          },
          {
            "sec": 2071,
            "vi": "Vẽ ánh hoàng hôn nơi có đôi tim cùng nhịp",
            "zh": "描繪一抹黃昏，停留在兩顆心同頻跳動的地方"
          },
          {
            "sec": 2078,
            "vi": "Vẽ ánh hoàng hôn nơi có đôi tim cùng nhịp",
            "zh": "描繪一抹黃昏，停留在兩顆心同頻跳動的地方"
          }
        ]
      }
    ]
  },
  {
    "no": 10,
    "id": "song-10-yeu-em-rat-nhieu",
    "titleVi": "Yêu Em Rất Nhiều",
    "titleZh": "非常愛妳",
    "coverArtist": "JiKi X Cover",
    "originalArtist": "Hoàng Tôn",
    "mood": "深情告白",
    "startSec": 2098,
    "vocalStartSec": 2099,
    "endSec": 2360,
    "startTimestamp": "00:34:58",
    "endTimestamp": "00:39:20",
    "durationSec": 262,
    "summaryZh": "旋律流暢動人的直球告白情歌，細膩刻畫深夜思念的悸動、故作灑脫卻藏不住的牽掛，以及一生相守的決心。",
    "keyVocab": [
      {
        "vi": "vu vơ",
        "zh": "莫名、漫無目的地",
        "note": "形容不自覺湧上心頭的情緒或思念，如 nỗi nhớ vu vơ"
      },
      {
        "vi": "ngập ngừng bối rối",
        "zh": "欲言又止、手足無措",
        "note": "ngập ngừng（猶豫停頓）＋ bối rối（慌亂害羞），生動描繪戀愛中的羞澀"
      },
      {
        "vi": "chở che",
        "zh": "庇護、遮風擋雨",
        "note": "同 che chở，常用來表達保護摯愛免受傷害"
      },
      {
        "vi": "mỏng manh",
        "zh": "脆弱、單薄",
        "note": "常用於形容內心敏感脆弱或情感容易受傷"
      },
      {
        "vi": "thủy chung",
        "zh": "始終如一、忠貞不渝",
        "note": "漢越詞，對應「始終」，專指對愛情的專一與忠誠"
      }
    ],
    "sections": [
      {
        "label": "主歌一 (Verse 1)",
        "startSec": 2099,
        "timestamp": "00:34:59",
        "lines": [
          {
            "sec": 2099,
            "vi": "Ngồi giữa bóng đêm anh chưa thể ngủ được",
            "zh": "獨坐黑夜之中，我始終難以入眠"
          },
          {
            "sec": 2105,
            "vi": "Vì nỗi nhớ em vu vơ bất thường",
            "zh": "因為對妳的思念莫名湧上心頭"
          },
          {
            "sec": 2112,
            "vi": "Cảm giác đắm say cứ thế đong đầy trong nơi trái tim",
            "zh": "沉醉心動的感覺就這樣溢滿整個胸口"
          },
          {
            "sec": 2119,
            "vi": "Là thứ bấy lâu nay anh đã kiếm tìm",
            "zh": "這正是我長久以來苦苦追尋的一切"
          }
        ]
      },
      {
        "label": "導歌一 (Pre-Chorus 1)",
        "startSec": 2126,
        "timestamp": "00:35:26",
        "lines": [
          {
            "sec": 2126,
            "vi": "Những câu chuyện thật dài mỗi tối",
            "zh": "每個夜晚聊不完的長長話題"
          },
          {
            "sec": 2130,
            "vi": "Những phút giây ngập ngừng bối rối",
            "zh": "那些欲言又止、害羞慌亂的片刻"
          },
          {
            "sec": 2134,
            "vi": "Tiếng em cười và lời em nói",
            "zh": "妳的笑聲與妳的每句話語"
          },
          {
            "sec": 2137,
            "vi": "Khiến anh giờ đang như quên mất lối",
            "zh": "令我此刻沉淪得忘了歸途"
          },
          {
            "sec": 2140,
            "vi": "Những khi chạm nhìn vào đôi mắt",
            "zh": "每當望進妳清澈的雙眸"
          },
          {
            "sec": 2144,
            "vi": "Anh chỉ muốn ôm em thật chặt",
            "zh": "我只想把妳緊緊擁入懷裡"
          },
          {
            "sec": 2148,
            "vi": "Để anh nói em nghe, nói em nghe lòng anh",
            "zh": "讓我說給妳聽，說給妳聽我的真心"
          }
        ]
      },
      {
        "label": "副歌一 (Chorus 1)",
        "startSec": 2155,
        "timestamp": "00:35:55",
        "lines": [
          {
            "sec": 2155,
            "vi": "Người ơi em có biết anh đã yêu em rất nhiều",
            "zh": "親愛的，妳知道我早已非常愛妳了嗎"
          },
          {
            "sec": 2162,
            "vi": "Chẳng cần những lý lẽ để nói nên câu tình yêu",
            "zh": "不需要任何理由去詮釋這句我愛妳"
          },
          {
            "sec": 2170,
            "vi": "Làm như không quan tâm nhưng anh thực sự nhớ em",
            "zh": "嘴上故作不在意，心底卻真的無比想妳"
          },
          {
            "sec": 2176,
            "vi": "Muốn được chở che cho em những đêm lạnh về",
            "zh": "好想在寒夜降臨時為妳遮風擋雨"
          },
          {
            "sec": 2182,
            "vi": "Anh muốn nói yêu em rất nhiều",
            "zh": "我想對妳說，我非常非常愛妳"
          }
        ]
      },
      {
        "label": "導歌二 (Pre-Chorus 2)",
        "startSec": 2202,
        "timestamp": "00:36:42",
        "lines": [
          {
            "sec": 2202,
            "vi": "Những câu chuyện thật dài mỗi tối",
            "zh": "每個夜晚聊不完的長長話題"
          },
          {
            "sec": 2206,
            "vi": "Những phút giây ngập ngừng bối rối",
            "zh": "那些欲言又止、害羞慌亂的片刻"
          },
          {
            "sec": 2210,
            "vi": "Tiếng em cười và lời em nói",
            "zh": "妳的笑聲與妳的每句話語"
          },
          {
            "sec": 2213,
            "vi": "Khiến anh giờ đang như quên mất lối",
            "zh": "令我此刻沉淪得忘了歸途"
          },
          {
            "sec": 2218,
            "vi": "Từ khi đã trót lỡ yêu rồi",
            "zh": "自從不小心深陷這場愛戀"
          },
          {
            "sec": 2221,
            "vi": "Anh chỉ mong gần em mãi thôi",
            "zh": "我只盼能永遠伴在妳身旁"
          },
          {
            "sec": 2224,
            "vi": "Để anh hôn nhẹ lên, hôn nhẹ lên bờ môi",
            "zh": "讓我輕輕吻上，輕輕吻上妳的雙唇"
          }
        ]
      },
      {
        "label": "副歌二 (Chorus 2)",
        "startSec": 2231,
        "timestamp": "00:37:11",
        "lines": [
          {
            "sec": 2231,
            "vi": "Người ơi em có biết anh đã yêu em rất nhiều",
            "zh": "親愛的，妳知道我早已非常愛妳了嗎"
          },
          {
            "sec": 2238,
            "vi": "Chẳng cần những lý lẽ để nói nên câu tình yêu",
            "zh": "不需要任何理由去詮釋這句我愛妳"
          },
          {
            "sec": 2246,
            "vi": "Làm như không quan tâm nhưng anh thực sự nhớ em",
            "zh": "嘴上故作不在意，心底卻真的無比想妳"
          },
          {
            "sec": 2252,
            "vi": "Muốn được chở che cho em những đêm lạnh về",
            "zh": "好想在寒夜降臨時為妳遮風擋雨"
          },
          {
            "sec": 2258,
            "vi": "Anh muốn nói yêu em rất nhiều",
            "zh": "我想對妳說，我非常非常愛妳"
          }
        ]
      },
      {
        "label": "橋段 (Bridge)",
        "startSec": 2262,
        "timestamp": "00:37:42",
        "lines": [
          {
            "sec": 2262,
            "vi": "Và anh muốn hát cho em bài hát trong tâm hồn anh",
            "zh": "我想為妳唱出靈魂深處的那首歌"
          },
          {
            "sec": 2269,
            "vi": "Thật mạnh mẽ nhưng sao nhiều lúc cô đơn mỏng manh",
            "zh": "看似如此堅強，為何卻常感到孤獨而脆弱"
          },
          {
            "sec": 2278,
            "vi": "Chuyện tình yêu chẳng thể nói trước điều gì",
            "zh": "愛情裡的事誰也無法預料"
          },
          {
            "sec": 2282,
            "vi": "Nhưng thôi ta mặc kệ cứ yêu đi",
            "zh": "但管他那麼多，就勇敢去愛吧"
          },
          {
            "sec": 2286,
            "vi": "Nguyện bên em trên con đường dài, thủy chung mãi mãi",
            "zh": "願陪妳走過漫漫長路，一生始終如一"
          }
        ]
      },
      {
        "label": "最終副歌與尾聲 (Final Chorus & Outro)",
        "startSec": 2295,
        "timestamp": "00:38:15",
        "lines": [
          {
            "sec": 2295,
            "vi": "Người ơi em có biết anh đã yêu em rất nhiều",
            "zh": "親愛的，妳知道我早已非常愛妳了嗎"
          },
          {
            "sec": 2303,
            "vi": "Chẳng cần những lý lẽ để nói nên câu tình yêu",
            "zh": "不需要任何理由去詮釋這句我愛妳"
          },
          {
            "sec": 2310,
            "vi": "Làm như không quan tâm nhưng anh thực sự nhớ em",
            "zh": "嘴上故作不在意，心底卻真的無比想妳"
          },
          {
            "sec": 2317,
            "vi": "Muốn được chở che cho em những đêm lạnh về",
            "zh": "好想在寒夜降臨時為妳遮風擋雨"
          },
          {
            "sec": 2322,
            "vi": "Anh muốn nói yêu em rất nhiều",
            "zh": "我想對妳說，我非常非常愛妳"
          },
          {
            "sec": 2328,
            "vi": "Muốn được chở che cho em những đêm lạnh về",
            "zh": "好想在寒夜降臨時為妳遮風擋雨"
          },
          {
            "sec": 2334,
            "vi": "Anh muốn nói...",
            "zh": "我想說……"
          },
          {
            "sec": 2340,
            "vi": "Anh muốn nói anh yêu em",
            "zh": "我想說，我愛妳"
          }
        ]
      }
    ]
  },
  {
    "no": 11,
    "id": "song-11-trai-dat-om-mat-troi",
    "titleVi": "Trái Đất Ôm Mặt Trời",
    "titleZh": "地球擁抱太陽",
    "coverArtist": "Trạm Cover",
    "originalArtist": "KAI ĐINH x GREY D x HOÀNG THÙY LINH",
    "mood": "溫柔治癒",
    "startSec": 2360,
    "vocalStartSec": 2360,
    "endSec": 2530,
    "startTimestamp": "00:39:20",
    "endTimestamp": "00:42:10",
    "durationSec": 170,
    "summaryZh": "以宇宙星體運行比喻默默守護的暗戀心境，即便彼此相距遙遠，仍願如地球繞行太陽般，始終追隨並溫柔安撫所愛之人。",
    "keyVocab": [
      {
        "vi": "vì tinh tú",
        "zh": "星辰、繁星",
        "note": "tinh tú 為漢越詞「星宿」，前加量詞 vì 增添文學詩意"
      },
      {
        "vi": "vỗ về",
        "zh": "安撫、輕拍安慰",
        "note": "常用於形容溫柔地撫慰受傷或孤單的心靈"
      },
      {
        "vi": "chôn giấu",
        "zh": "深藏、埋藏心底",
        "note": "chôn（埋葬）＋ giấu（隱藏），指把秘密或心事深埋在內心"
      },
      {
        "vi": "đỡ suy",
        "zh": "少胡思亂想、不再煩憂",
        "note": "越南年輕人常用語，suy 源自 suy nghĩ（過度思考、內耗、低落）"
      },
      {
        "vi": "xiêu lòng",
        "zh": "動心、心軟傾倒",
        "note": "形容被某人某事深深打動、難以抗拒"
      }
    ],
    "sections": [
      {
        "label": "副歌一 (Chorus 1)",
        "startSec": 2360,
        "timestamp": "00:39:20",
        "lines": [
          {
            "sec": 2360,
            "vi": "Anh cứ ôm bao hy vọng nhìn về phía em",
            "zh": "我總是懷抱著滿心希望望向妳的方向"
          },
          {
            "sec": 2364,
            "vi": "Dù nơi chúng ta là ngày với đêm",
            "zh": "即使我們身處宛如白晝與黑夜的兩端"
          },
          {
            "sec": 2368,
            "vi": "Tình yêu ấy vô vọng như nỗi nhớ dịu êm",
            "zh": "這份愛看似徒勞，卻如溫柔的思念般綿長"
          },
          {
            "sec": 2372,
            "vi": "Trái Đất nhìn về Mặt Trời",
            "zh": "就像地球凝望著太陽"
          },
          {
            "sec": 2374,
            "vi": "Trái tim anh cũng như mọi vì tinh tú",
            "zh": "我的心也如同滿天星辰"
          },
          {
            "sec": 2378,
            "vi": "Cứ thế xoay mãi theo vũ trụ",
            "zh": "就這樣循著宇宙軌道不停旋轉"
          },
          {
            "sec": 2381,
            "vi": "Đuổi theo ánh sáng của Mặt Trời",
            "zh": "追逐著太陽灑落的光芒"
          },
          {
            "sec": 2384,
            "vi": "Mà cứ xa vời suốt đời",
            "zh": "卻注定一生遙不可及"
          }
        ]
      },
      {
        "label": "主歌一 (Verse 1)",
        "startSec": 2389,
        "timestamp": "00:39:49",
        "lines": [
          {
            "sec": 2389,
            "vi": "Cho anh được biết vì sao giam bí mật của em",
            "zh": "請讓我知道，是哪顆星星鎖住了妳的秘密"
          },
          {
            "sec": 2392,
            "vi": "Nơi em sẽ đến mỗi khi nỗi cô đơn hiện lên",
            "zh": "每當孤單襲來時，妳會去往哪裡"
          },
          {
            "sec": 2396,
            "vi": "Bài hát mà em muốn nghe để thấy được vỗ về",
            "zh": "妳想聽哪一首歌，才能感受到被溫柔安撫"
          },
          {
            "sec": 2399,
            "vi": "Bài hát sẽ ôm em, ôm em, ôm em, ôm em",
            "zh": "一首能緊緊擁抱妳、擁抱妳、擁抱妳的歌"
          },
          {
            "sec": 2403,
            "vi": "Ý nghĩa của những ngôi sao lấp lánh trên cao em biết không",
            "zh": "高掛夜空閃爍的繁星代表什麼意義，妳知道嗎"
          },
          {
            "sec": 2406,
            "vi": "Ý nghĩa của trái tim anh đang đập từng giây em hiểu không",
            "zh": "我這顆每秒為妳跳動的心代表什麼意義，妳明白嗎"
          },
          {
            "sec": 2410,
            "vi": "Tình yêu mà anh dành cho em",
            "zh": "我獻給妳的這份愛"
          },
          {
            "sec": 2412,
            "vi": "Tình yêu mà không cần gọi tên",
            "zh": "是一份無需命名的深愛"
          }
        ]
      },
      {
        "label": "副歌二 (Chorus 2)",
        "startSec": 2416,
        "timestamp": "00:40:16",
        "lines": [
          {
            "sec": 2416,
            "vi": "Anh cứ ôm bao hy vọng nhìn về phía em",
            "zh": "我總是懷抱著滿心希望望向妳的方向"
          },
          {
            "sec": 2420,
            "vi": "Dù nơi chúng ta là ngày với đêm",
            "zh": "即使我們身處宛如白晝與黑夜的兩端"
          },
          {
            "sec": 2424,
            "vi": "Tình yêu ấy vô vọng như nỗi nhớ dịu êm",
            "zh": "這份愛看似徒勞，卻如溫柔的思念般綿長"
          },
          {
            "sec": 2428,
            "vi": "Trái Đất nhìn về Mặt Trời",
            "zh": "就像地球凝望著太陽"
          },
          {
            "sec": 2431,
            "vi": "Trái tim anh cũng như mọi vì tinh tú",
            "zh": "我的心也如同滿天星辰"
          },
          {
            "sec": 2434,
            "vi": "Cứ thế xoay mãi theo vũ trụ",
            "zh": "就這樣循著宇宙軌道不停旋轉"
          },
          {
            "sec": 2438,
            "vi": "Đuổi theo ánh sáng của Mặt Trời",
            "zh": "追逐著太陽灑落的光芒"
          },
          {
            "sec": 2441,
            "vi": "Mà cứ xa vời suốt đời",
            "zh": "卻注定一生遙不可及"
          }
        ]
      },
      {
        "label": "主歌二 (Verse 2)",
        "startSec": 2465,
        "timestamp": "00:41:05",
        "lines": [
          {
            "sec": 2465,
            "vi": "Một điều em chôn giấu, hãy nói anh biết đi",
            "zh": "妳深藏心底的那個心事，告訴我吧"
          },
          {
            "sec": 2468,
            "vi": "Để anh giữ làm kho báu, để cho anh đỡ suy",
            "zh": "讓我當作寶藏珍藏，也讓我不再胡思亂想"
          },
          {
            "sec": 2471,
            "vi": "Bài hát em từng yêu, hình bóng từng xiêu lòng",
            "zh": "妳曾經鍾愛的歌，曾令妳心動的身影"
          },
          {
            "sec": 2475,
            "vi": "Những điều em chờ mong, và đôi tay em mơ được nắm một đời",
            "zh": "妳心底期盼的一切，還有妳夢想緊握一生的雙手"
          },
          {
            "sec": 2479,
            "vi": "Dù là một ngàn năm ánh sáng, anh vẫn chờ bae, I'm waitin' on the phone này",
            "zh": "即使相隔一千光年我依然守候，寶貝，我就在電話這頭等著妳"
          },
          {
            "sec": 2484,
            "vi": "Nếu buồn hơn, I'm asking are you okay",
            "zh": "要是更難過了，我總會問一聲：妳還好嗎"
          },
          {
            "sec": 2487,
            "vi": "Nếu như không phiền thì để anh tập bay xuyên thế giới",
            "zh": "若妳不介意，就讓我練習飛越整個世界"
          },
          {
            "sec": 2491,
            "vi": "Ở cạnh người nhìn thời gian trôi",
            "zh": "靜靜陪在妳身邊看時光流轉"
          }
        ]
      },
      {
        "label": "最終副歌 (Final Chorus)",
        "startSec": 2494,
        "timestamp": "00:41:34",
        "lines": [
          {
            "sec": 2494,
            "vi": "Anh cứ ôm bao hy vọng nhìn về phía em",
            "zh": "我總是懷抱著滿心希望望向妳的方向"
          },
          {
            "sec": 2498,
            "vi": "Dù nơi chúng ta là ngày với đêm",
            "zh": "即使我們身處宛如白晝與黑夜的兩端"
          },
          {
            "sec": 2501,
            "vi": "Tình yêu ấy vô vọng như nỗi nhớ dịu êm",
            "zh": "這份愛看似徒勞，卻如溫柔的思念般綿長"
          },
          {
            "sec": 2505,
            "vi": "Trái Đất nhìn về Mặt Trời",
            "zh": "就像地球凝望著太陽"
          },
          {
            "sec": 2507,
            "vi": "Trái tim anh cũng như mọi vì tinh tú",
            "zh": "我的心也如同滿天星辰"
          },
          {
            "sec": 2511,
            "vi": "Cứ thế xoay mãi theo vũ trụ",
            "zh": "就這樣循著宇宙軌道不停旋轉"
          },
          {
            "sec": 2514,
            "vi": "Đuổi theo ánh sáng của Mặt Trời",
            "zh": "追逐著太陽灑落的光芒"
          },
          {
            "sec": 2517,
            "vi": "Mà cứ xa vời suốt đời",
            "zh": "卻注定一生遙不可及"
          }
        ]
      }
    ]
  },
  {
    "no": 12,
    "id": "song-12-giac-mo-co-that",
    "titleVi": "Giấc Mơ Có Thật",
    "titleZh": "成真的夢",
    "coverArtist": "Trạm Cover",
    "originalArtist": "Lệ Quyên / Tường Văn",
    "mood": "唯美哀愁",
    "startSec": 2530,
    "vocalStartSec": 2532,
    "endSec": 2768,
    "startTimestamp": "00:42:10",
    "endTimestamp": "00:46:08",
    "durationSec": 238,
    "summaryZh": "經典華麗悲傷情歌，在春日美夢與寒冬醒來的強烈對比中，唱出對逝去初戀的無盡眷戀與深情等待。",
    "keyVocab": [
      {
        "vi": "giấc mơ có thật",
        "zh": "成真的夢、真實的夢",
        "note": "giấc mơ（夢境）＋ có thật（真實存在）"
      },
      {
        "vi": "ban mai",
        "zh": "黎明、清晨",
        "note": "極具詩意的書面語，常用於描寫破曉晨光"
      },
      {
        "vi": "hoen nước mắt",
        "zh": "淚濕眼眶、沾滿淚水",
        "note": "bờ mi hoen nước mắt 意為「睫毛沾濕了淚水」"
      },
      {
        "vi": "sang ngang",
        "zh": "過岸、另尋歸宿",
        "note": "thuyền đã sang ngang（船已渡河離岸），越南文學中常用來比喻愛人離去或另結連理"
      },
      {
        "vi": "vấn vương",
        "zh": "牽掛、依戀不捨",
        "note": "形容對往事或舊情揮之不去的纏綿思緒"
      }
    ],
    "sections": [
      {
        "label": "主歌一 (Verse 1)",
        "startSec": 2532,
        "timestamp": "00:42:12",
        "lines": [
          {
            "sec": 2532,
            "vi": "Đêm qua em mơ thấy anh mang mùa xuân yêu thương dịu êm",
            "zh": "昨夜我夢見你帶著溫柔愛戀的春天而來"
          },
          {
            "sec": 2540,
            "vi": "Cùng điệu nhạc chất ngất hòa theo tiếng trái tim em rộn lên",
            "zh": "伴著令人陶醉的樂聲，與我悸動的心跳共鳴"
          },
          {
            "sec": 2548,
            "vi": "Cầm bàn tay anh nói những lời ân ái mặn nồng",
            "zh": "緊握你的手，訴說著纏綿濃烈的愛語"
          },
          {
            "sec": 2556,
            "vi": "Thời gian ngừng mãi cho hoa lá khoe màu",
            "zh": "願時光永遠靜止，讓花葉盡情綻放色彩"
          }
        ]
      },
      {
        "label": "主歌二 (Verse 2)",
        "startSec": 2563,
        "timestamp": "00:42:43",
        "lines": [
          {
            "sec": 2563,
            "vi": "Khi ban mai đánh thức giấc mơ hồng đêm qua em đã mơ",
            "zh": "當晨曦喚醒了昨夜我所做的粉紅美夢"
          },
          {
            "sec": 2571,
            "vi": "Người giờ này đã đến một nơi rất xa xăm, em còn đây",
            "zh": "如今你已去往遙遠的他方，只留我獨在原地"
          },
          {
            "sec": 2578,
            "vi": "Bờ mi em hoen nước mắt vì tình yêu tan vỡ",
            "zh": "我的眼眶因破碎的愛情而沾濕淚水"
          },
          {
            "sec": 2584,
            "vi": "Đến khi nào anh như giấc mơ ngày qua",
            "zh": "究竟要到何時，你才會像昔日夢境般歸來"
          },
          {
            "sec": 2590,
            "vi": "Lòng em luôn khao khát nhớ mong người ơi anh biết chăng",
            "zh": "我心底始終渴望並思念著你，親愛的你可知道"
          }
        ]
      },
      {
        "label": "副歌一 (Chorus 1)",
        "startSec": 2595,
        "timestamp": "00:43:15",
        "lines": [
          {
            "sec": 2595,
            "vi": "Chìm đắm không gian lặng im ngàn vì sao vụt tắt",
            "zh": "沉溺於寂靜無聲的空間，千萬星辰驟然熄滅"
          },
          {
            "sec": 2598,
            "vi": "Thuyền đã sang ngang làm cho con sóng không xô về bờ",
            "zh": "船隻早已渡岸遠去，讓浪花再也不願拍打岸邊"
          },
          {
            "sec": 2602,
            "vi": "Ngày đó đắm say vì sao anh quên bao câu ca",
            "zh": "昔日如此沉醉，為何你卻遺忘了那無數歌謠"
          },
          {
            "sec": 2606,
            "vi": "Cùng mùa xuân thắm tươi ước hẹn tình đầu môi hôn thay lời yêu",
            "zh": "以及燦爛春光裡初戀的約定，以雙唇之吻代作愛語"
          },
          {
            "sec": 2610,
            "vi": "Lạc bước cô đơn mình em một mùa đông giá băng",
            "zh": "孤單迷失在冰冷嚴寒的冬季，獨剩我一人"
          },
          {
            "sec": 2614,
            "vi": "Lạnh buốt môi em nhẹ run run hát câu ca ngày xưa",
            "zh": "凍得發冷的雙唇微微顫抖，輕唱著往日戀歌"
          },
          {
            "sec": 2618,
            "vi": "Chỉ biết vắng anh là đau thương dù bao vấn vương",
            "zh": "只知失去你滿是傷痛，縱然仍有萬般依戀不捨"
          },
          {
            "sec": 2622,
            "vi": "Em sẽ tin giấc mơ có thật... Em chờ anh",
            "zh": "我仍願相信這場夢會成真……我等你"
          }
        ]
      },
      {
        "label": "主歌三 (Verse 3)",
        "startSec": 2645,
        "timestamp": "00:44:05",
        "lines": [
          {
            "sec": 2645,
            "vi": "Khi ban mai đánh thức giấc mơ hồng đêm qua em đã mơ",
            "zh": "當晨曦喚醒了昨夜我所做的粉紅美夢"
          },
          {
            "sec": 2652,
            "vi": "Người giờ này đã đến một nơi rất xa xăm, em còn đây",
            "zh": "如今你已去往遙遠的他方，只留我獨在原地"
          },
          {
            "sec": 2658,
            "vi": "Bờ mi em hoen nước mắt vì tình yêu tan vỡ",
            "zh": "我的眼眶因破碎的愛情而沾濕淚水"
          },
          {
            "sec": 2667,
            "vi": "Đến khi nào anh như giấc mơ ngày qua",
            "zh": "究竟要到何時，你才會像昔日夢境般歸來"
          },
          {
            "sec": 2671,
            "vi": "Lòng em luôn khao khát nhớ mong người ơi anh biết chăng",
            "zh": "我心底始終渴望並思念著你，親愛的你可知道"
          }
        ]
      },
      {
        "label": "副歌二 (Chorus 2)",
        "startSec": 2675,
        "timestamp": "00:44:35",
        "lines": [
          {
            "sec": 2675,
            "vi": "Chìm đắm không gian lặng im ngàn vì sao vụt tắt",
            "zh": "沉溺於寂靜無聲的空間，千萬星辰驟然熄滅"
          },
          {
            "sec": 2678,
            "vi": "Thuyền đã sang ngang làm cho con sóng không xô về bờ",
            "zh": "船隻早已渡岸遠去，讓浪花再也不願拍打岸邊"
          },
          {
            "sec": 2683,
            "vi": "Ngày đó đắm say vì sao anh quên bao câu ca",
            "zh": "昔日如此沉醉，為何你卻遺忘了那無數歌謠"
          },
          {
            "sec": 2686,
            "vi": "Cùng mùa xuân thắm tươi ước hẹn tình đầu môi hôn thay lời yêu",
            "zh": "以及燦爛春光裡初戀的約定，以雙唇之吻代作愛語"
          },
          {
            "sec": 2691,
            "vi": "Lạc bước cô đơn mình em một mùa đông giá băng",
            "zh": "孤單迷失在冰冷嚴寒的冬季，獨剩我一人"
          },
          {
            "sec": 2694,
            "vi": "Lạnh buốt môi em nhẹ run run hát câu ca ngày xưa",
            "zh": "凍得發冷的雙唇微微顫抖，輕唱著往日戀歌"
          },
          {
            "sec": 2698,
            "vi": "Chỉ biết vắng anh là đau thương dù bao vấn vương",
            "zh": "只知失去你滿是傷痛，縱然仍有萬般依戀不捨"
          },
          {
            "sec": 2702,
            "vi": "Em sẽ tin giấc mơ có thật",
            "zh": "我仍願相信這場夢會成真"
          }
        ]
      },
      {
        "label": "最終副歌 (Final Chorus)",
        "startSec": 2707,
        "timestamp": "00:45:07",
        "lines": [
          {
            "sec": 2707,
            "vi": "Chìm đắm không gian lặng im ngàn vì sao vụt tắt",
            "zh": "沉溺於寂靜無聲的空間，千萬星辰驟然熄滅"
          },
          {
            "sec": 2713,
            "vi": "Thuyền đã sang ngang làm cho con sóng không xô về bờ",
            "zh": "船隻早已渡岸遠去，讓浪花再也不願拍打岸邊"
          },
          {
            "sec": 2717,
            "vi": "Ngày đó đắm say vì sao anh quên bao câu ca",
            "zh": "昔日如此沉醉，為何你卻遺忘了那無數歌謠"
          },
          {
            "sec": 2720,
            "vi": "Cùng mùa xuân thắm tươi ước hẹn tình đầu môi hôn thay lời yêu",
            "zh": "以及燦爛春光裡初戀的約定，以雙唇之吻代作愛語"
          },
          {
            "sec": 2724,
            "vi": "Lạc bước cô đơn mình em một mùa đông giá băng",
            "zh": "孤單迷失在冰冷嚴寒的冬季，獨剩我一人"
          },
          {
            "sec": 2728,
            "vi": "Lạnh buốt môi em nhẹ run run hát câu ca ngày xưa",
            "zh": "凍得發冷的雙唇微微顫抖，輕唱著往日戀歌"
          },
          {
            "sec": 2732,
            "vi": "Chỉ biết vắng anh là đau thương dù bao vấn vương",
            "zh": "只知失去你滿是傷痛，縱然仍有萬般依戀不捨"
          },
          {
            "sec": 2735,
            "vi": "Em sẽ tin giấc mơ có thật... Em chờ anh",
            "zh": "我仍願相信這場夢會成真……我等你"
          }
        ]
      }
    ]
  },
  {
    "no": 13,
    "id": "song-13-phai-dau-cuoc-tinh",
    "titleVi": "Phai Dấu Cuộc Tình",
    "titleZh": "褪色的戀情（越文版《黃昏》）",
    "coverArtist": "Trạm Cover",
    "originalArtist": "Quang Vinh",
    "mood": "經典懷舊",
    "startSec": 2768,
    "vocalStartSec": 2770,
    "endSec": 3058,
    "startTimestamp": "00:46:08",
    "endTimestamp": "00:50:58",
    "durationSec": 290,
    "summaryZh": "改編自周傳雄經典名曲《黃昏》，由音樂人 Thái Thịnh 填寫越文詞、Quang Vinh 唱紅。全曲以濃烈的離愁描繪黃昏雨雲下愛人倉促離去、徒留無盡孤寂與破碎夢境的心境。",
    "keyVocab": [
      {
        "vi": "phai dấu",
        "zh": "褪去痕跡",
        "note": "phai（褪色、淡去）+ dấu（痕跡），形容舊情漸漸消逝"
      },
      {
        "vi": "bơ vơ",
        "zh": "孤苦無依、徬徨",
        "note": "形容獨自一人、沒有依靠的孤寂狀態"
      },
      {
        "vi": "chia ly",
        "zh": "離別、分離",
        "note": "漢越詞，多用於歌詞與書面語中的生離死別"
      },
      {
        "vi": "kỷ niệm",
        "zh": "回憶、紀念",
        "note": "漢越詞（紀念），越南抒情歌中極常見的高頻詞"
      },
      {
        "vi": "nhạt nhòa",
        "zh": "模糊、淡去",
        "note": "形容回憶、影像或淚眼朦朧消散的樣子"
      }
    ],
    "sections": [
      {
        "label": "主歌一 (Verse 1)",
        "startSec": 2770,
        "timestamp": "00:46:10",
        "lines": [
          {
            "sec": 2770,
            "vi": "Một người ra đi vội vã",
            "zh": "一個人匆匆離去"
          },
          {
            "sec": 2775,
            "vi": "Mang theo những dấu yêu xa rời",
            "zh": "帶走了所有摯愛漸行漸遠"
          },
          {
            "sec": 2782,
            "vi": "Một người về trong sầu bơ vơ",
            "zh": "一個人落寞孤單地歸去"
          },
          {
            "sec": 2788,
            "vi": "Mang thương nhớ, mang trái tim vỡ tan bao mộng mơ",
            "zh": "懷抱著思念，與一顆碎盡美夢的心"
          }
        ]
      },
      {
        "label": "導歌一 (Pre-Chorus 1)",
        "startSec": 2795,
        "timestamp": "00:46:35",
        "lines": [
          {
            "sec": 2795,
            "vi": "Để rồi chia ly từ đấy",
            "zh": "從此便天各一方"
          },
          {
            "sec": 2801,
            "vi": "Yêu đương hóa kiếp đau thương người ơi",
            "zh": "愛戀化作了無盡傷痛啊，親愛的"
          },
          {
            "sec": 2807,
            "vi": "Để rồi bao đêm ngồi trong cô đơn hoài chờ mong",
            "zh": "從此多少長夜獨坐孤單苦苦守候"
          },
          {
            "sec": 2814,
            "vi": "Mơ bóng em dấu yêu quay về đây",
            "zh": "夢著深愛的妳再度回到身旁"
          }
        ]
      },
      {
        "label": "副歌一 (Chorus 1)",
        "startSec": 2821,
        "timestamp": "00:47:01",
        "lines": [
          {
            "sec": 2821,
            "vi": "Cuộc tình xưa phai dấu từ một buổi chiều thật buồn",
            "zh": "昔日戀情自那個黯然的黃昏開始褪色"
          },
          {
            "sec": 2826,
            "vi": "Mây xám theo nhau về, sầu thương giăng kín lấp lối",
            "zh": "烏雲接踵而來，哀愁密布遮蔽前路"
          },
          {
            "sec": 2832,
            "vi": "Dĩ vãng tương lai mịt mù, bóng em đã quá xa vời",
            "zh": "過往與未來一片迷茫，妳的身影早已遙不可及"
          },
          {
            "sec": 2838,
            "vi": "Một mình lê chân lạc loài, lang thang đường về mù khơi",
            "zh": "獨自拖著孤寂步伐，迷惘徘徊在渺茫歸途"
          },
          {
            "sec": 2848,
            "vi": "Còn gì đâu em hỡi, từng kỷ niệm nhạt nhòa",
            "zh": "還剩下什麼呢親愛的，段段回憶早已淡去"
          },
          {
            "sec": 2853,
            "vi": "Theo tháng năm mong chờ",
            "zh": "隨漫長等待的歲月流逝"
          },
          {
            "sec": 2855,
            "vi": "Về đâu đêm tối với bóng dáng ấy tan theo làn mây",
            "zh": "黑夜該何去何從，那道身影已隨雲煙消散"
          },
          {
            "sec": 2861,
            "vi": "Giấc mơ nay đã phai tàn, cuộc tình ra đi vội vàng",
            "zh": "美夢如今已凋零殆盡，這段情匆匆散場"
          },
          {
            "sec": 2867,
            "vi": "Con tim này đành vỡ tan",
            "zh": "這顆心也只能支離破碎"
          }
        ]
      },
      {
        "label": "導歌二 (Pre-Chorus 2)",
        "startSec": 2900,
        "timestamp": "00:48:20",
        "lines": [
          {
            "sec": 2900,
            "vi": "Để rồi chia ly từ đấy",
            "zh": "從此便天各一方"
          },
          {
            "sec": 2906,
            "vi": "Yêu đương hóa kiếp đau thương người ơi",
            "zh": "愛戀化作了無盡傷痛啊，親愛的"
          },
          {
            "sec": 2911,
            "vi": "Để rồi bao đêm ngồi trong cô đơn hoài chờ mong",
            "zh": "從此多少長夜獨坐孤單苦苦守候"
          },
          {
            "sec": 2918,
            "vi": "Mơ bóng em dấu yêu quay về đây",
            "zh": "夢著深愛的妳再度回到身旁"
          }
        ]
      },
      {
        "label": "副歌二 (Chorus 2)",
        "startSec": 2925,
        "timestamp": "00:48:45",
        "lines": [
          {
            "sec": 2925,
            "vi": "Cuộc tình xưa phai dấu từ một buổi chiều thật buồn",
            "zh": "昔日戀情自那個黯然的黃昏開始褪色"
          },
          {
            "sec": 2930,
            "vi": "Mây xám theo nhau về, sầu thương giăng kín lấp lối",
            "zh": "烏雲接踵而來，哀愁密布遮蔽前路"
          },
          {
            "sec": 2936,
            "vi": "Dĩ vãng tương lai mịt mù, bóng em đã quá xa vời",
            "zh": "過往與未來一片迷茫，妳的身影早已遙不可及"
          },
          {
            "sec": 2942,
            "vi": "Một mình lê chân lạc loài, lang thang đường về mù khơi",
            "zh": "獨自拖著孤寂步伐，迷惘徘徊在渺茫歸途"
          },
          {
            "sec": 2951,
            "vi": "Còn gì đâu em hỡi, từng kỷ niệm nhạt nhòa",
            "zh": "還剩下什麼呢親愛的，段段回憶早已淡去"
          },
          {
            "sec": 2956,
            "vi": "Theo tháng năm mong chờ",
            "zh": "隨漫長等待的歲月流逝"
          },
          {
            "sec": 2959,
            "vi": "Về đâu đêm tối với bóng dáng ấy tan theo làn mây",
            "zh": "黑夜該何去何從，那道身影已隨雲煙消散"
          },
          {
            "sec": 2964,
            "vi": "Giấc mơ nay đã phai tàn, cuộc tình ra đi vội vàng",
            "zh": "美夢如今已凋零殆盡，這段情匆匆散場"
          },
          {
            "sec": 2971,
            "vi": "Con tim này đành vỡ tan",
            "zh": "這顆心也只能支離破碎"
          }
        ]
      },
      {
        "label": "最終副歌 (Final Chorus)",
        "startSec": 2977,
        "timestamp": "00:49:37",
        "lines": [
          {
            "sec": 2977,
            "vi": "Cuộc tình xưa phai dấu từ một buổi chiều thật buồn",
            "zh": "昔日戀情自那個黯然的黃昏開始褪色"
          },
          {
            "sec": 2982,
            "vi": "Mây xám theo nhau về, sầu thương giăng kín lấp lối",
            "zh": "烏雲接踵而來，哀愁密布遮蔽前路"
          },
          {
            "sec": 2987,
            "vi": "Dĩ vãng tương lai mịt mù, bóng em đã quá xa vời",
            "zh": "過往與未來一片迷茫，妳的身影早已遙不可及"
          },
          {
            "sec": 2993,
            "vi": "Một mình lê chân lạc loài, lang thang đường về mù khơi",
            "zh": "獨自拖著孤寂步伐，迷惘徘徊在渺茫歸途"
          },
          {
            "sec": 3003,
            "vi": "Còn gì đâu em hỡi, từng kỷ niệm nhạt nhòa",
            "zh": "還剩下什麼呢親愛的，段段回憶早已淡去"
          },
          {
            "sec": 3008,
            "vi": "Theo tháng năm mong chờ",
            "zh": "隨漫長等待的歲月流逝"
          },
          {
            "sec": 3010,
            "vi": "Về đâu đêm tối với bóng dáng ấy tan theo làn mây",
            "zh": "黑夜該何去何從，那道身影已隨雲煙消散"
          },
          {
            "sec": 3016,
            "vi": "Giấc mơ nay đã phai tàn, cuộc tình ra đi vội vàng",
            "zh": "美夢如今已凋零殆盡，這段情匆匆散場"
          },
          {
            "sec": 3023,
            "vi": "Con tim này đành vỡ tan",
            "zh": "這顆心也只能支離破碎"
          }
        ]
      },
      {
        "label": "尾聲重唱 (Outro)",
        "startSec": 3028,
        "timestamp": "00:50:28",
        "lines": [
          {
            "sec": 3028,
            "vi": "Giấc mơ nay đã phai tàn, cuộc tình ra đi vội vàng",
            "zh": "美夢如今已凋零殆盡，這段情匆匆散場"
          },
          {
            "sec": 3038,
            "vi": "Con tim này đành vỡ tan",
            "zh": "這顆心也只能支離破碎"
          }
        ]
      }
    ]
  },
  {
    "no": 14,
    "id": "song-14-ngoi-nha-hanh-phuc",
    "titleVi": "Ngôi Nhà Hạnh Phúc",
    "titleZh": "浪漫滿屋（幸福之家）",
    "coverArtist": "Trạm Cover",
    "originalArtist": "Thủy Tiên",
    "mood": "甜蜜治癒",
    "startSec": 3058,
    "vocalStartSec": 3063,
    "endSec": 3216,
    "startTimestamp": "00:50:58",
    "endTimestamp": "00:53:36",
    "durationSec": 158,
    "summaryZh": "越南翻拍劇《浪漫滿屋》同名主題曲，由 Thủy Tiên 親自詞曲創作並演唱。旋律溫暖柔美，細膩傾訴有愛人陪伴在側的踏實幸福與永恆誓言。",
    "keyVocab": [
      {
        "vi": "hạnh phúc",
        "zh": "幸福",
        "note": "漢越詞（幸福），日常對話與情歌中最常見的正面詞彙"
      },
      {
        "vi": "nụ hôn",
        "zh": "一吻、親吻",
        "note": "nụ 原指花苞，搭配 hôn（吻）指「一個吻」"
      },
      {
        "vi": "thầm giấu",
        "zh": "暗暗藏著",
        "note": "thầm（暗自、悄悄地）+ giấu（藏起），常形容藏在心底的心事"
      },
      {
        "vi": "dẫu",
        "zh": "即使、縱然",
        "note": "較具書面與詩意的連詞，口語中常使用 dù"
      },
      {
        "vi": "thuộc về",
        "zh": "屬於",
        "note": "常用動詞片語，例如 thuộc về nhau（屬於彼此）"
      }
    ],
    "sections": [
      {
        "label": "主歌一 (Verse 1)",
        "startSec": 3063,
        "timestamp": "00:51:03",
        "lines": [
          {
            "sec": 3063,
            "vi": "Là vì em hạnh phúc khi có anh bên cạnh em",
            "zh": "因為有你陪伴在身旁，我感到如此幸福"
          },
          {
            "sec": 3067,
            "vi": "Một nụ hôn thật khẽ lên đôi mắt em mỗi khi buồn",
            "zh": "每當我難過時，輕輕印在雙眼上的一吻"
          },
          {
            "sec": 3073,
            "vi": "Những điều em thầm giấu trong trái tim đã lâu thật lâu",
            "zh": "那些我悄悄藏在心底好久好久的話語"
          },
          {
            "sec": 3080,
            "vi": "Dù ngày mai ra sao thì vẫn chỉ yêu người thôi",
            "zh": "無論明天會如何，我依然只愛你一人"
          }
        ]
      },
      {
        "label": "副歌一 (Chorus 1)",
        "startSec": 3087,
        "timestamp": "00:51:27",
        "lines": [
          {
            "sec": 3087,
            "vi": "Dẫu chỉ là giấc mơ, em xin mơ hoài",
            "zh": "縱使只是一場夢，我也願永遠沉醉其中"
          },
          {
            "sec": 3093,
            "vi": "Cuối con đường nắng lên chờ anh đến",
            "zh": "在陽光灑落的長路盡頭等著你到來"
          },
          {
            "sec": 3098,
            "vi": "Đến khi nào trên thế gian mặt trời ngừng sáng lối em đi về",
            "zh": "直到這世上太陽不再照亮我歸途的那一天"
          },
          {
            "sec": 3105,
            "vi": "Ánh mắt này, đôi tay này mãi thuộc về nhau",
            "zh": "這雙眼眸、這雙手，永遠只屬於彼此"
          }
        ]
      },
      {
        "label": "主歌二 (Verse 2)",
        "startSec": 3123,
        "timestamp": "00:52:03",
        "lines": [
          {
            "sec": 3123,
            "vi": "Là vì em hạnh phúc khi có anh bên cạnh em",
            "zh": "因為有你陪伴在身旁，我感到如此幸福"
          },
          {
            "sec": 3127,
            "vi": "Một nụ hôn thật khẽ lên đôi mắt em mỗi khi buồn",
            "zh": "每當我難過時，輕輕印在雙眼上的一吻"
          },
          {
            "sec": 3133,
            "vi": "Những điều em thầm giấu trong trái tim đã lâu thật lâu",
            "zh": "那些我悄悄藏在心底好久好久的話語"
          },
          {
            "sec": 3140,
            "vi": "Dù ngày mai ra sao thì vẫn chỉ yêu người thôi",
            "zh": "無論明天會如何，我依然只愛你一人"
          }
        ]
      },
      {
        "label": "副歌二 (Chorus 2)",
        "startSec": 3147,
        "timestamp": "00:52:27",
        "lines": [
          {
            "sec": 3147,
            "vi": "Dẫu chỉ là giấc mơ, em xin mơ hoài",
            "zh": "縱使只是一場夢，我也願永遠沉醉其中"
          },
          {
            "sec": 3152,
            "vi": "Cuối con đường nắng lên chờ anh đến",
            "zh": "在陽光灑落的長路盡頭等著你到來"
          },
          {
            "sec": 3158,
            "vi": "Đến khi nào trên thế gian mặt trời ngừng sáng lối em đi về",
            "zh": "直到這世上太陽不再照亮我歸途的那一天"
          },
          {
            "sec": 3165,
            "vi": "Ánh mắt này, đôi tay này mãi thuộc về nhau",
            "zh": "這雙眼眸、這雙手，永遠只屬於彼此"
          }
        ]
      },
      {
        "label": "最終副歌 (Final Chorus)",
        "startSec": 3183,
        "timestamp": "00:53:03",
        "lines": [
          {
            "sec": 3183,
            "vi": "Dẫu chỉ là giấc mơ, em xin mơ hoài",
            "zh": "縱使只是一場夢，我也願永遠沉醉其中"
          },
          {
            "sec": 3188,
            "vi": "Cuối con đường nắng lên chờ anh đến",
            "zh": "在陽光灑落的長路盡頭等著你到來"
          },
          {
            "sec": 3194,
            "vi": "Đến khi nào trên thế gian mặt trời ngừng sáng lối em đi về",
            "zh": "直到這世上太陽不再照亮我歸途的那一天"
          },
          {
            "sec": 3201,
            "vi": "Ánh mắt này, đôi tay này mãi thuộc về nhau",
            "zh": "這雙眼眸、這雙手，永遠只屬於彼此"
          }
        ]
      }
    ]
  },
  {
    "no": 15,
    "id": "song-15-anh-sao-va-bau-troi",
    "titleVi": "Ánh Sao Và Bầu Trời",
    "titleZh": "星光與天空",
    "coverArtist": "Trạm Cover",
    "originalArtist": "T.R.I x Cá",
    "mood": "遺憾虐心",
    "startSec": 3216,
    "vocalStartSec": 3217,
    "endSec": 3447,
    "startTimestamp": "00:53:36",
    "endTimestamp": "00:57:27",
    "durationSec": 231,
    "summaryZh": "T.R.I 與創作者 Cá 合作的現象級虐心抒情曲。以「妳多了一道星光，我卻失去了整片天空」的經典對比，刻畫看見前任與新歡幸福時，既心碎又不捨、最終只能默默祝福的遺憾。",
    "keyVocab": [
      {
        "vi": "long lanh",
        "zh": "閃閃發亮、晶瑩",
        "note": "形容眼神閃耀動人，或淚光、水珠晶瑩的樣子"
      },
      {
        "vi": "chơi vơi",
        "zh": "空蕩失落、無依無靠",
        "note": "形容內心茫然懸空、悵然若失的情緒"
      },
      {
        "vi": "buông tay",
        "zh": "放手",
        "note": "buông（鬆開、放下）+ tay（手），常引申為放棄一段感情"
      },
      {
        "vi": "ánh sao",
        "zh": "星光",
        "note": "ánh（光芒）+ sao（星星），在歌中與 bầu trời（天空）形成意象對比"
      },
      {
        "vi": "quan tâm",
        "zh": "關心、在意",
        "note": "漢越詞（關心），日常交流中極為實用的動詞"
      }
    ],
    "sections": [
      {
        "label": "主歌一 (Verse 1)",
        "startSec": 3217,
        "timestamp": "00:53:37",
        "lines": [
          {
            "sec": 3217,
            "vi": "Chưa bao giờ tôi thấy em cười nhiều như hôm nay",
            "zh": "我從未見過妳像今天這般燦爛地笑著"
          },
          {
            "sec": 3223,
            "vi": "Chưa bao giờ tôi thấy mắt em long lanh thế này",
            "zh": "我從未見過妳的雙眼如此閃閃發亮"
          },
          {
            "sec": 3230,
            "vi": "Em say mê nói về anh ta, về cuộc hẹn hò ngày hôm qua",
            "zh": "妳眉飛色舞地談起他，說著昨天的那場約會"
          },
          {
            "sec": 3236,
            "vi": "Người mà luôn làm em ngạc nhiên với những món quà",
            "zh": "那個總是用各種禮物讓妳驚喜的人"
          }
        ]
      },
      {
        "label": "導歌一 (Pre-Chorus 1)",
        "startSec": 3244,
        "timestamp": "00:54:04",
        "lines": [
          {
            "sec": 3244,
            "vi": "Ngỡ như rằng mình sẽ vui khi em nói có người mới",
            "zh": "原以為聽見妳有了新對象，我會替妳高興"
          },
          {
            "sec": 3251,
            "vi": "Thế nhưng trong lòng chơi vơi, con tim vỡ ra thành trăm mảnh rồi",
            "zh": "內心卻一片空蕩失落，這顆心早已碎成千萬片"
          },
          {
            "sec": 3259,
            "vi": "Chỉ là một giây buông tay, giờ đành lỡ nhau cả một đời",
            "zh": "只是一秒鐘的放手，如今竟錯過了彼此一生"
          },
          {
            "sec": 3265,
            "vi": "Em có thêm một ánh sao, tôi mất bầu trời",
            "zh": "妳多了一道星光，而我失去了整片天空"
          }
        ]
      },
      {
        "label": "副歌一 (Chorus 1)",
        "startSec": 3270,
        "timestamp": "00:54:30",
        "lines": [
          {
            "sec": 3270,
            "vi": "Muốn nói tôi vẫn còn yêu em",
            "zh": "好想告訴妳，我依然愛著妳"
          },
          {
            "sec": 3274,
            "vi": "Muốn giữ lấy đôi bờ vai em",
            "zh": "好想緊緊擁住妳的雙肩"
          },
          {
            "sec": 3277,
            "vi": "Muốn nói em ơi đừng đi, đừng đi về nơi có anh ta đang đứng chờ",
            "zh": "好想說別走，別走向那個他正等著妳的地方"
          },
          {
            "sec": 3284,
            "vi": "Muốn nắm tay em một lần nữa",
            "zh": "好想再牽起妳的手一次"
          },
          {
            "sec": 3288,
            "vi": "Cùng quay về lại con phố xưa",
            "zh": "一起回到那條熟悉的舊街"
          },
          {
            "sec": 3292,
            "vi": "Nụ hôn đầu tiên mình trao dưới mưa, em đã quên chưa?",
            "zh": "我們在雨中交換的初吻，妳已經忘了嗎？"
          }
        ]
      },
      {
        "label": "主歌二 (Verse 2)",
        "startSec": 3327,
        "timestamp": "00:55:27",
        "lines": [
          {
            "sec": 3327,
            "vi": "Em, em đừng bao giờ khóc",
            "zh": "妳呀，千萬不要再哭泣"
          },
          {
            "sec": 3329,
            "vi": "Hãy hạnh phúc nhé xin đừng khóc, sẽ có người luôn làm em mỉm cười",
            "zh": "要幸福喔，請別流淚，會有人一直逗妳微笑的"
          },
          {
            "sec": 3334,
            "vi": "Còn điều gì đọng lại ở tim anh",
            "zh": "還有什麼殘留在我心底"
          },
          {
            "sec": 3337,
            "vi": "Dù mọi chuyện giờ đã qua nhanh, anh sẽ cố giữ, cố giữ",
            "zh": "即使一切都已匆匆流逝，我仍會努力珍藏、好好守護"
          },
          {
            "sec": 3341,
            "vi": "Dù rất muốn nói ra",
            "zh": "雖然好想親口說出來"
          },
          {
            "sec": 3343,
            "vi": "Anh rất nhớ em đêm ngày chẳng thể nào ngủ được",
            "zh": "我日日夜夜想念著妳，輾轉難以入眠"
          },
          {
            "sec": 3349,
            "vi": "I really, really miss you",
            "zh": "我真的、真的好想妳"
          }
        ]
      },
      {
        "label": "導歌二 (Pre-Chorus 2)",
        "startSec": 3352,
        "timestamp": "00:55:52",
        "lines": [
          {
            "sec": 3352,
            "vi": "Ngỡ như rằng mình sẽ vui khi em nói có người mới",
            "zh": "原以為聽見妳有了新對象，我會替妳高興"
          },
          {
            "sec": 3359,
            "vi": "Thế nhưng trong lòng chơi vơi, con tim vỡ ra thành trăm mảnh rồi",
            "zh": "內心卻一片空蕩失落，這顆心早已碎成千萬片"
          },
          {
            "sec": 3367,
            "vi": "Chỉ là một giây buông tay, giờ đành lỡ nhau cả một đời",
            "zh": "只是一秒鐘的放手，如今竟錯過了彼此一生"
          },
          {
            "sec": 3373,
            "vi": "Em có thêm một ánh sao, tôi mất bầu trời",
            "zh": "妳多了一道星光，而我失去了整片天空"
          }
        ]
      },
      {
        "label": "副歌二 (Chorus 2)",
        "startSec": 3378,
        "timestamp": "00:56:18",
        "lines": [
          {
            "sec": 3378,
            "vi": "Muốn nói tôi vẫn còn yêu em",
            "zh": "好想告訴妳，我依然愛著妳"
          },
          {
            "sec": 3383,
            "vi": "Muốn giữ lấy đôi bờ vai em",
            "zh": "好想緊緊擁住妳的雙肩"
          },
          {
            "sec": 3386,
            "vi": "Muốn nói em ơi đừng đi, đừng đi về nơi có anh ta đang đứng chờ",
            "zh": "好想說別走，別走向那個他正等著妳的地方"
          },
          {
            "sec": 3394,
            "vi": "Muốn nắm tay em một lần nữa",
            "zh": "好想再牽起妳的手一次"
          },
          {
            "sec": 3398,
            "vi": "Cùng quay về lại con phố xưa",
            "zh": "一起回到那條熟悉的舊街"
          },
          {
            "sec": 3401,
            "vi": "Nụ hôn đầu tiên mình trao dưới mưa, em đã quên chưa?",
            "zh": "我們在雨中交換的初吻，妳已經忘了嗎？"
          }
        ]
      },
      {
        "label": "尾聲 (Outro)",
        "startSec": 3409,
        "timestamp": "00:56:49",
        "lines": [
          {
            "sec": 3409,
            "vi": "Mong cho em luôn vui và cười như lúc này",
            "zh": "願妳永遠快樂，像此刻這般笑著"
          },
          {
            "sec": 3417,
            "vi": "Dù anh sẽ chẳng ở mãi bên em, vì giờ đã có người thay thế anh",
            "zh": "即使我無法永遠陪在妳身邊，因為現在已有人取代了我"
          },
          {
            "sec": 3423,
            "vi": "Xin người kia sẽ chẳng để lệ rơi mắt em",
            "zh": "願那個人絕不讓淚水滑落妳的眼眶"
          },
          {
            "sec": 3428,
            "vi": "Sẽ luôn thật quan tâm em",
            "zh": "永遠真心地疼惜與關心妳"
          }
        ]
      }
    ]
  },
  {
    "no": 16,
    "id": "song-16-suy-nghi-trong-anh",
    "titleVi": "Suy Nghĩ Trong Anh",
    "titleZh": "我心中的思緒",
    "coverArtist": "Jiki X Cover",
    "originalArtist": "Khắc Việt",
    "mood": "深情告白",
    "startSec": 3447,
    "vocalStartSec": 3452,
    "endSec": 3696,
    "startTimestamp": "00:57:27",
    "endTimestamp": "01:01:36",
    "durationSec": 249,
    "summaryZh": "越南國民情歌大師 Khắc Việt 創作的經典代表作，也是無數人心中最真摯的告白曲。歌詞坦率吐露熱戀中既憧憬共組家庭、又害怕失去對方的矛盾思緒。",
    "keyVocab": [
      {
        "vi": "suy nghĩ",
        "zh": "思緒、想法、思考",
        "note": "可作名詞「心中的想法」，亦可作動詞「思考」"
      },
      {
        "vi": "vội vã",
        "zh": "匆忙、急促",
        "note": "形容時光飛逝或舉止匆忙的模樣"
      },
      {
        "vi": "trọn đời",
        "zh": "一生一世、終生",
        "note": "trọn（完整）+ đời（一生），常見於愛情誓言"
      },
      {
        "vi": "tưởng tượng",
        "zh": "想像",
        "note": "漢越詞（想像），指腦海中的幻想或假設"
      },
      {
        "vi": "ngẩn ngơ",
        "zh": "出神、癡癡發呆",
        "note": "形容沉浸在美好幻想或思念中傻笑出神的神情"
      }
    ],
    "sections": [
      {
        "label": "主歌一 (Verse 1)",
        "startSec": 3452,
        "timestamp": "00:57:32",
        "lines": [
          {
            "sec": 3452,
            "vi": "Cứ qua thêm một ngày mới biết thế nào là yêu",
            "zh": "每多過一天，才更懂得什麼叫做愛"
          },
          {
            "sec": 3456,
            "vi": "Một ngày trôi qua vội vã nhưng trong anh rất nhiều điều",
            "zh": "一天匆匆流逝，我心裡卻裝滿了無數牽掛"
          },
          {
            "sec": 3461,
            "vi": "Những suy nghĩ trong anh cứ lớn lên từng phút",
            "zh": "我心中的思緒分分秒秒不斷滋長"
          },
          {
            "sec": 3465,
            "vi": "Cứ lớn theo từng ngày khi anh được ấm áp bên em",
            "zh": "在與妳相依取暖的每一天裡愈發深沉"
          },
          {
            "sec": 3470,
            "vi": "Những suy nghĩ trong anh giờ đang chia làm hai",
            "zh": "此刻我心中的思緒正一分為二"
          },
          {
            "sec": 3475,
            "vi": "Một nửa trong anh từng nghĩ chúng ta sẽ bên nhau trọn đời",
            "zh": "一半的我曾堅信，我們會攜手相伴一生"
          },
          {
            "sec": 3480,
            "vi": "Nhưng nếu lỡ một ngày em nói lời chia tay",
            "zh": "但萬一哪天妳開口說出分手"
          },
          {
            "sec": 3484,
            "vi": "Anh sẽ thế nào đây, anh sống thế nào đây?",
            "zh": "我該怎麼辦呢，我該如何活下去呢？"
          }
        ]
      },
      {
        "label": "副歌一 (Chorus 1)",
        "startSec": 3489,
        "timestamp": "00:58:09",
        "lines": [
          {
            "sec": 3489,
            "vi": "Hãy để cho anh được yêu, yêu em trong từng suy nghĩ",
            "zh": "請讓我好好去愛，在每一縷思緒中愛著妳"
          },
          {
            "sec": 3495,
            "vi": "Dù là tưởng tượng thôi nhưng anh cũng thấy vui rồi",
            "zh": "即使只是想像，我也已經覺得好快樂"
          },
          {
            "sec": 3499,
            "vi": "Đừng nói chi em ơi, tình yêu không cần nói",
            "zh": "別多說什麼了親愛的，愛情不需要言語"
          },
          {
            "sec": 3504,
            "vi": "Chỉ cần cảm nhận thôi anh nghĩ cũng đủ rồi",
            "zh": "我想只要靜靜感受，就已經足夠了"
          },
          {
            "sec": 3508,
            "vi": "Nhiều khi anh từng mơ ngồi một mình cười ngẩn ngơ",
            "zh": "好多時候我曾做夢，獨自坐著癡癡傻笑"
          },
          {
            "sec": 3513,
            "vi": "Chúng ta sẽ được sống trong ngôi nhà đầy trẻ thơ",
            "zh": "夢見我們一同住在滿是孩童歡笑的家裡"
          },
          {
            "sec": 3518,
            "vi": "Có khó không em ơi, nếu giấc mơ này xa xôi",
            "zh": "這會很難嗎親愛的，倘若這場夢太過遙遠"
          },
          {
            "sec": 3522,
            "vi": "Thì anh xin được giữ giấc mơ đó ở trong suy nghĩ anh mà thôi",
            "zh": "那我只願將這份美夢，悄悄珍藏在我的思緒裡"
          }
        ]
      },
      {
        "label": "主歌二 (Verse 2)",
        "startSec": 3536,
        "timestamp": "00:58:56",
        "lines": [
          {
            "sec": 3536,
            "vi": "Cứ qua thêm một ngày mới biết thế nào là yêu",
            "zh": "每多過一天，才更懂得什麼叫做愛"
          },
          {
            "sec": 3540,
            "vi": "Một ngày trôi qua vội vã nhưng trong anh rất nhiều điều",
            "zh": "一天匆匆流逝，我心裡卻裝滿了無數牽掛"
          },
          {
            "sec": 3545,
            "vi": "Những suy nghĩ trong anh cứ lớn lên từng phút",
            "zh": "我心中的思緒分分秒秒不斷滋長"
          },
          {
            "sec": 3549,
            "vi": "Cứ lớn theo từng ngày khi anh được ấm áp bên em",
            "zh": "在與妳相依取暖的每一天裡愈發深沉"
          },
          {
            "sec": 3554,
            "vi": "Những suy nghĩ trong anh giờ đang chia làm hai",
            "zh": "此刻我心中的思緒正一分為二"
          },
          {
            "sec": 3558,
            "vi": "Một nửa trong anh từng nghĩ chúng ta sẽ bên nhau trọn đời",
            "zh": "一半的我曾堅信，我們會攜手相伴一生"
          },
          {
            "sec": 3563,
            "vi": "Nhưng nếu lỡ một ngày em nói lời chia tay",
            "zh": "但萬一哪天妳開口說出分手"
          },
          {
            "sec": 3568,
            "vi": "Anh sẽ thế nào đây, anh sống thế nào đây?",
            "zh": "我該怎麼辦呢，我該如何活下去呢？"
          }
        ]
      },
      {
        "label": "副歌二 (Chorus 2)",
        "startSec": 3573,
        "timestamp": "00:59:33",
        "lines": [
          {
            "sec": 3573,
            "vi": "Hãy để cho anh được yêu, yêu em trong từng suy nghĩ",
            "zh": "請讓我好好去愛，在每一縷思緒中愛著妳"
          },
          {
            "sec": 3579,
            "vi": "Dù là tưởng tượng thôi nhưng anh cũng thấy vui rồi",
            "zh": "即使只是想像，我也已經覺得好快樂"
          },
          {
            "sec": 3583,
            "vi": "Đừng nói chi em ơi, tình yêu không cần nói",
            "zh": "別多說什麼了親愛的，愛情不需要言語"
          },
          {
            "sec": 3588,
            "vi": "Chỉ cần cảm nhận thôi anh nghĩ cũng đủ rồi",
            "zh": "我想只要靜靜感受，就已經足夠了"
          },
          {
            "sec": 3593,
            "vi": "Nhiều khi anh từng mơ ngồi một mình cười ngẩn ngơ",
            "zh": "好多時候我曾做夢，獨自坐著癡癡傻笑"
          },
          {
            "sec": 3598,
            "vi": "Chúng ta sẽ được sống trong ngôi nhà đầy trẻ thơ",
            "zh": "夢見我們一同住在滿是孩童歡笑的家裡"
          },
          {
            "sec": 3602,
            "vi": "Có khó không em ơi, nếu giấc mơ này xa xôi",
            "zh": "這會很難嗎親愛的，倘若這場夢太過遙遠"
          },
          {
            "sec": 3606,
            "vi": "Thì anh xin được giữ giấc mơ đó ở trong suy nghĩ anh mà thôi",
            "zh": "那我只願將這份美夢，悄悄珍藏在我的思緒裡"
          }
        ]
      },
      {
        "label": "最終副歌 (Final Chorus)",
        "startSec": 3631,
        "timestamp": "01:00:31",
        "lines": [
          {
            "sec": 3631,
            "vi": "Hãy để cho anh được yêu, yêu em trong từng suy nghĩ",
            "zh": "請讓我好好去愛，在每一縷思緒中愛著妳"
          },
          {
            "sec": 3635,
            "vi": "Dù là tưởng tượng thôi nhưng anh cũng thấy vui rồi",
            "zh": "即使只是想像，我也已經覺得好快樂"
          },
          {
            "sec": 3640,
            "vi": "Đừng nói chi em ơi, tình yêu không cần nói",
            "zh": "別多說什麼了親愛的，愛情不需要言語"
          },
          {
            "sec": 3645,
            "vi": "Chỉ cần cảm nhận thôi anh nghĩ cũng đủ rồi",
            "zh": "我想只要靜靜感受，就已經足夠了"
          },
          {
            "sec": 3649,
            "vi": "Nhiều khi anh từng mơ ngồi một mình cười ngẩn ngơ",
            "zh": "好多時候我曾做夢，獨自坐著癡癡傻笑"
          },
          {
            "sec": 3654,
            "vi": "Chúng ta sẽ được sống trong ngôi nhà đầy trẻ thơ",
            "zh": "夢見我們一同住在滿是孩童歡笑的家裡"
          },
          {
            "sec": 3658,
            "vi": "Có khó không em ơi, nếu giấc mơ này xa xôi",
            "zh": "這會很難嗎親愛的，倘若這場夢太過遙遠"
          },
          {
            "sec": 3663,
            "vi": "Thì anh xin được giữ giấc mơ đó ở trong suy nghĩ anh mà thôi",
            "zh": "那我只願將這份美夢，悄悄珍藏在我的思緒裡"
          },
          {
            "sec": 3675,
            "vi": "Anh mà thôi...",
            "zh": "只留在我的心底罷了⋯⋯"
          }
        ]
      }
    ]
  },
  {
    "no": 17,
    "id": "song-17-em-cua-qua-khu",
    "titleVi": "Em Của Quá Khứ",
    "titleZh": "過去的妳",
    "coverArtist": "Trạm Cover",
    "originalArtist": "Nguyễn Đình Vũ / Huy Nam",
    "mood": "懷舊思念",
    "startSec": 3696,
    "vocalStartSec": 3697,
    "endSec": 3889,
    "startTimestamp": "01:01:36",
    "endTimestamp": "01:04:49",
    "durationSec": 193,
    "summaryZh": "由 Nguyễn Đình Vũ 創作、Huy Nam 唱紅的深情木吉他抒情曲。失去愛人後只剩孤獨琴聲相伴，寧願停留在過去的回憶裡，只因為那裡還有妳的身影。",
    "keyVocab": [
      {
        "vi": "hiện tại",
        "zh": "現在、當下",
        "note": "漢越詞（現在），與 quá khứ（過去）互為對照"
      },
      {
        "vi": "mái nhà",
        "zh": "屋簷、家園",
        "note": "字面為「屋頂」，常引申為安穩溫暖的家"
      },
      {
        "vi": "nỗi lòng",
        "zh": "心事、衷腸",
        "note": "nỗi（情緒名詞前綴）+ lòng（內心），指深藏的情感"
      },
      {
        "vi": "lòng tin",
        "zh": "信任、信心",
        "note": "常用搭配 đem lòng tin trao（把信任交付給對方）"
      },
      {
        "vi": "cặm cụi",
        "zh": "埋頭專注地",
        "note": "形容默默低頭、執著不懈地尋找或做事"
      }
    ],
    "sections": [
      {
        "label": "主歌一 (Verse 1)",
        "startSec": 3697,
        "timestamp": "01:01:37",
        "lines": [
          {
            "sec": 3697,
            "vi": "Ngoài anh em có những ai bên em hiện tại?",
            "zh": "除了我以外，如今妳身邊還有誰相伴？"
          },
          {
            "sec": 3703,
            "vi": "Vì yêu em nên anh còn ở lại",
            "zh": "只因愛著妳，我才依然留守原地"
          },
          {
            "sec": 3707,
            "vi": "Cuộc đời cho em tiếng ca, yên vui mái nhà",
            "zh": "這一生給了妳歌聲與安穩和樂的家園"
          },
          {
            "sec": 3712,
            "vi": "Nhưng đối với em không bao giờ là tất cả",
            "zh": "但對妳而言，這從來都不是全部"
          },
          {
            "sec": 3716,
            "vi": "Cùng một ghi-ta anh đã từng hát cho em nghe",
            "zh": "曾抱著一把吉他為妳輕輕歌唱"
          },
          {
            "sec": 3722,
            "vi": "Hát về nỗi lòng, về tình yêu em trao anh",
            "zh": "唱著滿腔心事，唱著妳曾給我的愛"
          },
          {
            "sec": 3727,
            "vi": "Đến nay chỉ còn lại mình anh với tiếng hát trong tâm trí anh này",
            "zh": "如今卻只剩下我一人，與縈繞心頭的歌聲"
          },
          {
            "sec": 3735,
            "vi": "Anh đã mất em sao?",
            "zh": "我真的失去妳了嗎？"
          }
        ]
      },
      {
        "label": "副歌一 (Chorus 1)",
        "startSec": 3737,
        "timestamp": "01:02:17",
        "lines": [
          {
            "sec": 3737,
            "vi": "Em sẽ không ở nơi này, anh biết phải đàn cho ai đây?",
            "zh": "妳已不在這裡，我該為誰撥動琴弦呢？"
          },
          {
            "sec": 3742,
            "vi": "Đâu đó nỗi buồn, cung đàn rung đôi tay lau nước mắt rơi",
            "zh": "某處湧起哀愁，琴聲輕顫，雙手拭去滑落的淚"
          },
          {
            "sec": 3749,
            "vi": "Anh đã đem lòng tin anh trao một người con gái",
            "zh": "我曾將全部信任交託給一個女孩"
          },
          {
            "sec": 3754,
            "vi": "Anh đã yêu, anh đã từng yêu em rất nhiều",
            "zh": "我曾愛過，曾經那樣深愛著妳"
          },
          {
            "sec": 3758,
            "vi": "Nơi ấy suy nghĩ anh còn thương em, anh cặm cụi tìm kiếm",
            "zh": "在那方思念裡我仍疼惜著妳，默默埋頭追尋"
          },
          {
            "sec": 3763,
            "vi": "Tìm những yêu thương em gửi trong khúc ca",
            "zh": "尋找那些妳曾寄託在歌聲裡的愛意"
          },
          {
            "sec": 3768,
            "vi": "Nay đi xa rồi, em đã xa tôi",
            "zh": "如今已遠去，妳已離我而去"
          },
          {
            "sec": 3772,
            "vi": "Thà anh sống trong quá khứ nhưng anh có em",
            "zh": "寧願我活在過去裡，只因那裡還有妳"
          }
        ]
      },
      {
        "label": "主歌二 (Verse 2)",
        "startSec": 3797,
        "timestamp": "01:03:17",
        "lines": [
          {
            "sec": 3797,
            "vi": "Ngoài anh em có những ai bên em hiện tại?",
            "zh": "除了我以外，如今妳身邊還有誰相伴？"
          },
          {
            "sec": 3804,
            "vi": "Vì yêu em nên anh còn ở lại",
            "zh": "只因愛著妳，我才依然留守原地"
          },
          {
            "sec": 3808,
            "vi": "Cuộc đời cho em tiếng ca, yên vui mái nhà",
            "zh": "這一生給了妳歌聲與安穩和樂的家園"
          },
          {
            "sec": 3813,
            "vi": "Nhưng đối với em không bao giờ là tất cả",
            "zh": "但對妳而言，這從來都不是全部"
          },
          {
            "sec": 3817,
            "vi": "Cùng một ghi-ta anh đã từng hát cho em nghe",
            "zh": "曾抱著一把吉他為妳輕輕歌唱"
          },
          {
            "sec": 3823,
            "vi": "Hát về nỗi lòng, về tình yêu em trao anh",
            "zh": "唱著滿腔心事，唱著妳曾給我的愛"
          },
          {
            "sec": 3828,
            "vi": "Đến nay chỉ còn lại mình anh với tiếng hát trong tâm trí anh này",
            "zh": "如今卻只剩下我一人，與縈繞心頭的歌聲"
          },
          {
            "sec": 3835,
            "vi": "Anh đã mất em sao?",
            "zh": "我真的失去妳了嗎？"
          }
        ]
      },
      {
        "label": "副歌二 (Chorus 2)",
        "startSec": 3838,
        "timestamp": "01:03:58",
        "lines": [
          {
            "sec": 3838,
            "vi": "Em sẽ không ở nơi này, anh biết phải đàn cho ai đây?",
            "zh": "妳已不在這裡，我該為誰撥動琴弦呢？"
          },
          {
            "sec": 3843,
            "vi": "Đâu đó nỗi buồn, cung đàn rung đôi tay lau nước mắt rơi",
            "zh": "某處湧起哀愁，琴聲輕顫，雙手拭去滑落的淚"
          },
          {
            "sec": 3849,
            "vi": "Anh đã đem lòng tin anh trao một người con gái",
            "zh": "我曾將全部信任交託給一個女孩"
          },
          {
            "sec": 3854,
            "vi": "Anh đã yêu, anh đã từng yêu em rất nhiều",
            "zh": "我曾愛過，曾經那樣深愛著妳"
          },
          {
            "sec": 3858,
            "vi": "Nơi ấy suy nghĩ anh còn thương em, anh cặm cụi tìm kiếm",
            "zh": "在那方思念裡我仍疼惜著妳，默默埋頭追尋"
          },
          {
            "sec": 3864,
            "vi": "Tìm những yêu thương em gửi trong khúc ca",
            "zh": "尋找那些妳曾寄託在歌聲裡的愛意"
          },
          {
            "sec": 3869,
            "vi": "Nay đi xa rồi, em đã xa tôi",
            "zh": "如今已遠去，妳已離我而去"
          },
          {
            "sec": 3873,
            "vi": "Thà anh sống trong quá khứ nhưng anh có em",
            "zh": "寧願我活在過去裡，只因那裡還有妳"
          }
        ]
      }
    ]
  },
  {
    "no": 18,
    "id": "song-18-thang-may-em-nho-anh",
    "titleVi": "Tháng Mấy Em Nhớ Anh",
    "titleZh": "幾月妳會想起我",
    "coverArtist": "JiKi X Cover",
    "originalArtist": "Hà Anh Tuấn",
    "mood": "詩意惆悵",
    "startSec": 3889,
    "vocalStartSec": 3889,
    "endSec": 4131,
    "startTimestamp": "01:04:49",
    "endTimestamp": "01:08:51",
    "durationSec": 242,
    "summaryZh": "由音樂人 Nguyễn Minh Cường 創作、情歌王子 Hà Anh Tuấn 原唱的詩意佳作。歌詞巧妙串起一年十二個月份的季節景致，將離別後的綿長思念化為一場周而復始的四月落花。",
    "keyVocab": [
      {
        "vi": "thấp thoáng",
        "zh": "若隱若現",
        "note": "形容遠方身影或景物忽隱忽現的朦朧感"
      },
      {
        "vi": "mưa ngâu",
        "zh": "七月綿雨",
        "note": "指越南農曆七月的連綿細雨（牛郎織女淚雨），象徵離愁相思"
      },
      {
        "vi": "tương tư",
        "zh": "相思",
        "note": "漢越詞（相思），極具文學氣息的抒情詞彙"
      },
      {
        "vi": "lay lắt",
        "zh": "微弱殘存、苟延殘喘",
        "note": "形容火光搖曳將熄，或傷痛與思念在心頭綿延不絕"
      },
      {
        "vi": "vụn vỡ",
        "zh": "支離破碎",
        "note": "形容心碎或事物碎裂成細小片段，語氣比 vỡ 更深沉"
      }
    ],
    "sections": [
      {
        "label": "主歌一 (Verse 1)",
        "startSec": 3889,
        "timestamp": "01:04:49",
        "lines": [
          {
            "sec": 3889,
            "vi": "Tháng Tư về, cánh hoa phai tàn",
            "zh": "四月歸來，花瓣已然凋謝"
          },
          {
            "sec": 3894,
            "vi": "Mắt ướt nhòe nỗi đau vô lường",
            "zh": "雙眼淚濕模糊，滿是難以丈量的傷痛"
          },
          {
            "sec": 3898,
            "vi": "Tháng Năm buồn vương những phố phường",
            "zh": "五月的愁緒縈繞在街頭巷尾"
          },
          {
            "sec": 3902,
            "vi": "Thấp thoáng bóng người thương",
            "zh": "若隱若現著心上人的身影"
          },
          {
            "sec": 3906,
            "vi": "Bước trong cơn mưa rào tháng Sáu",
            "zh": "漫步在六月的驟雨之中"
          },
          {
            "sec": 3910,
            "vi": "Chợt nhớ tới khi xưa tháng Bảy mưa ngâu",
            "zh": "忽然憶起往昔七月的綿綿雨季"
          },
          {
            "sec": 3915,
            "vi": "Từ bao lâu rồi ta đã quen không nhìn thấy nhau?",
            "zh": "從何時起，我們已習慣不再見面？"
          }
        ]
      },
      {
        "label": "導歌一 (Pre-Chorus 1)",
        "startSec": 3922,
        "timestamp": "01:05:22",
        "lines": [
          {
            "sec": 3922,
            "vi": "Lá thư tình gửi chiều tháng Tám",
            "zh": "八月午後寄出的那封情書"
          },
          {
            "sec": 3927,
            "vi": "Còn dấu vết môi son của ngày thu qua",
            "zh": "仍留著逝去秋日裡的紅唇印記"
          },
          {
            "sec": 3932,
            "vi": "Để rồi như tháng Chín hoa buồn tím tương tư",
            "zh": "以致如同九月裡憂傷的紫色相思花"
          },
          {
            "sec": 3939,
            "vi": "Lá xác xơ tháng Mười vẫn thế",
            "zh": "十月的枯葉依舊蕭索如昔"
          },
          {
            "sec": 3944,
            "vi": "Còn lay lắt trong tim Mười Một vẫn thế",
            "zh": "十一月心底殘存的痛楚依然未散"
          },
          {
            "sec": 3949,
            "vi": "Để lại cơn mưa cuối đông muộn màng",
            "zh": "徒留一場遲來的冬末冷雨"
          }
        ]
      },
      {
        "label": "副歌一 (Chorus 1)",
        "startSec": 3956,
        "timestamp": "01:05:56",
        "lines": [
          {
            "sec": 3956,
            "vi": "Một lần xa, bao lần nhớ",
            "zh": "一次離別，換來多少次思念"
          },
          {
            "sec": 3960,
            "vi": "Mười Hai đi qua tim vụn vỡ",
            "zh": "十二月走過，心已支離破碎"
          },
          {
            "sec": 3964,
            "vi": "Tháng Giêng đợi chờ, tháng Hai ngu ngơ, tháng Ba chơ vơ",
            "zh": "一月苦苦守候，二月癡癡迷惘，三月孤影伶仃"
          },
          {
            "sec": 3972,
            "vi": "Một lần xa là bao lần nhớ",
            "zh": "一次離別便是無數次思念"
          },
          {
            "sec": 3976,
            "vi": "Chừng đơn sơ nhưng sao buồn ngẩn ngơ",
            "zh": "看似如此簡單，卻為何令人惆悵失神"
          },
          {
            "sec": 3981,
            "vi": "Bước thật chậm dưới cánh hoa rơi, tháng Tư về",
            "zh": "在飄落的花瓣下緩緩獨行，四月又來了"
          }
        ]
      },
      {
        "label": "導歌二 (Pre-Chorus 2)",
        "startSec": 4005,
        "timestamp": "01:06:45",
        "lines": [
          {
            "sec": 4005,
            "vi": "Lá thư tình gửi chiều tháng Tám",
            "zh": "八月午後寄出的那封情書"
          },
          {
            "sec": 4010,
            "vi": "Còn dấu vết môi son của ngày thu qua",
            "zh": "仍留著逝去秋日裡的紅唇印記"
          },
          {
            "sec": 4015,
            "vi": "Để rồi như tháng Chín hoa buồn tím tương tư",
            "zh": "以致如同九月裡憂傷的紫色相思花"
          },
          {
            "sec": 4022,
            "vi": "Lá xác xơ tháng Mười vẫn thế",
            "zh": "十月的枯葉依舊蕭索如昔"
          },
          {
            "sec": 4026,
            "vi": "Còn lay lắt trong tim Mười Một vẫn thế",
            "zh": "十一月心底殘存的痛楚依然未散"
          },
          {
            "sec": 4031,
            "vi": "Để lại cơn mưa cuối đông muộn màng",
            "zh": "徒留一場遲來的冬末冷雨"
          }
        ]
      },
      {
        "label": "副歌二 (Chorus 2)",
        "startSec": 4037,
        "timestamp": "01:07:17",
        "lines": [
          {
            "sec": 4037,
            "vi": "Một lần xa, bao lần nhớ",
            "zh": "一次離別，換來多少次思念"
          },
          {
            "sec": 4042,
            "vi": "Mười Hai đi qua tim vụn vỡ",
            "zh": "十二月走過，心已支離破碎"
          },
          {
            "sec": 4046,
            "vi": "Tháng Giêng đợi chờ, tháng Hai ngu ngơ, tháng Ba chơ vơ",
            "zh": "一月苦苦守候，二月癡癡迷惘，三月孤影伶仃"
          },
          {
            "sec": 4054,
            "vi": "Một lần xa là bao lần nhớ",
            "zh": "一次離別便是無數次思念"
          },
          {
            "sec": 4059,
            "vi": "Chừng đơn sơ nhưng sao buồn ngẩn ngơ",
            "zh": "看似如此簡單，卻為何令人惆悵失神"
          },
          {
            "sec": 4064,
            "vi": "Bước thật chậm dưới cánh hoa rơi, tháng Tư về",
            "zh": "在飄落的花瓣下緩緩獨行，四月又來了"
          }
        ]
      },
      {
        "label": "最終副歌與尾聲 (Final Chorus & Outro)",
        "startSec": 4071,
        "timestamp": "01:07:51",
        "lines": [
          {
            "sec": 4071,
            "vi": "Một lần xa, bao lần nhớ",
            "zh": "一次離別，換來多少次思念"
          },
          {
            "sec": 4075,
            "vi": "Tình yêu đi qua tim vụn vỡ",
            "zh": "愛情走過，心已支離破碎"
          },
          {
            "sec": 4079,
            "vi": "Có khi đợi chờ, có khi ngu ngơ, có khi chơ vơ",
            "zh": "有時苦苦守候，有時癡癡迷惘，有時孤影伶仃"
          },
          {
            "sec": 4087,
            "vi": "Một lần xa là bao lần nhớ",
            "zh": "一次離別便是無數次思念"
          },
          {
            "sec": 4092,
            "vi": "Chừng đơn sơ nhưng sao buồn ngẩn ngơ",
            "zh": "看似如此簡單，卻為何令人惆悵失神"
          },
          {
            "sec": 4097,
            "vi": "Bước thật chậm dưới cánh hoa rơi, tháng Tư về",
            "zh": "在飄落的花瓣下緩緩獨行，四月又來了"
          },
          {
            "sec": 4106,
            "vi": "Bước thật chậm dưới cánh hoa rơi",
            "zh": "在飄落的花瓣下緩緩獨行"
          },
          {
            "sec": 4114,
            "vi": "Anh nhớ em...",
            "zh": "我想妳⋯⋯"
          }
        ]
      }
    ]
  },
  {
    "no": 19,
    "id": "song-19-dieu-khac-la",
    "titleVi": "Điều Khác Lạ",
    "titleZh": "與眾不同",
    "coverArtist": "Trạm Cover",
    "originalArtist": "Đạt G ft. Ngọc Haleyy",
    "mood": "深情對唱",
    "startSec": 4131,
    "vocalStartSec": 4131,
    "endSec": 4412,
    "startTimestamp": "01:08:51",
    "endTimestamp": "01:13:32",
    "durationSec": 281,
    "summaryZh": "揉合抒情女聲與深沉饒舌的男女對唱情歌，描繪緣盡後兩人依然難捨彼此的心酸。女聲傾訴思念的破碎與孤寂，男聲饒舌則將所有傷痛獨自扛下，把快樂留給曾經深愛的人。",
    "keyVocab": [
      {
        "vi": "vụn vỡ",
        "zh": "支離破碎、碎裂",
        "note": "常用來形容夢想、情感或心靈徹底破碎"
      },
      {
        "vi": "lấn át",
        "zh": "壓倒、淹沒",
        "note": "形容某種強烈情緒（如孤單）徹底覆蓋其他感受"
      },
      {
        "vi": "rưng rưng",
        "zh": "淚眼婆娑、熱淚盈眶",
        "note": "疊詞，生動描繪眼眶泛淚、欲滴未滴的模樣"
      },
      {
        "vi": "sườn dốc",
        "zh": "山坡、斜坡",
        "note": "歌詞中比喻感情路上艱難沉重的下坡或險坡"
      },
      {
        "vi": "gồng gánh",
        "zh": "咬牙扛起、一肩承擔",
        "note": "原意為挑擔，引申為獨自承受沉重壓力或悲傷"
      }
    ],
    "sections": [
      {
        "label": "主歌一 (Verse 1)",
        "startSec": 4131,
        "timestamp": "01:08:51",
        "lines": [
          {
            "sec": 4131,
            "vi": "Anh thấy được gì qua những nỗi buồn của em",
            "zh": "你從我的陣陣哀愁裡，究竟看懂了什麼"
          },
          {
            "sec": 4139,
            "vi": "Em thấy được gì qua những nỗi nhớ khi em xa anh",
            "zh": "我從離開你後的綿長思念裡，又看清了什麼"
          },
          {
            "sec": 4145,
            "vi": "Em đang cố tìm lại anh, người con trai đã quên em",
            "zh": "我正努力尋找著你，那個早已把我遺忘的男孩"
          },
          {
            "sec": 4154,
            "vi": "Giờ đây mọi thứ vụn vỡ đi tất cả, anh ơi",
            "zh": "如今一切全都支離破碎了啊，親愛的你"
          },
          {
            "sec": 4161,
            "vi": "Anh mơ tiếng cười thân quen, chiều trong tay bước rong chơi",
            "zh": "我夢見熟悉的笑聲，傍晚手牽手漫步同遊"
          },
          {
            "sec": 4166,
            "vi": "Mông lung đứt đoạn yêu thương, có lẽ duyên ta không thành",
            "zh": "迷茫中愛意斷了線，或許我們終究有緣無分"
          },
          {
            "sec": 4177,
            "vi": "Anh mang hết chuyện cô đơn gửi cho cơn gió phiêu du",
            "zh": "我將滿腹孤單心事，全都託付給四處漂泊的風"
          },
          {
            "sec": 4182,
            "vi": "Chiều tàn hoàng hôn xóa hết những nghi ngờ",
            "zh": "殘陽黃昏悄然抹去所有猜疑"
          }
        ]
      },
      {
        "label": "副歌一 (Chorus 1)",
        "startSec": 4192,
        "timestamp": "01:09:52",
        "lines": [
          {
            "sec": 4192,
            "vi": "Sao đôi tay chưa buông đôi chân em đi rồi",
            "zh": "為何雙手尚未放開，你的腳步卻已遠去"
          },
          {
            "sec": 4195,
            "vi": "Sao đêm nay cô đơn lấn át nỗi nhớ tơi bời",
            "zh": "為何今夜的孤寂淹沒了凌亂不堪的思念"
          },
          {
            "sec": 4199,
            "vi": "Buồn kia còn sau màu mắt",
            "zh": "那抹憂傷依然深藏在眼眸之後"
          },
          {
            "sec": 4206,
            "vi": "Em lang thang nơi anh từng hay đi qua",
            "zh": "我獨自徘徊在你曾經走過的街角"
          },
          {
            "sec": 4211,
            "vi": "Mà nhìn khóe mắt rưng rưng",
            "zh": "望著彼此泛紅含淚的眼眶"
          },
          {
            "sec": 4217,
            "vi": "Biết bao chuyện buồn",
            "zh": "道不盡多少心酸往事"
          }
        ]
      },
      {
        "label": "饒舌段 (Rap Verse)",
        "startSec": 4252,
        "timestamp": "01:10:52",
        "lines": [
          {
            "sec": 4252,
            "vi": "Đêm nay một đêm buồn",
            "zh": "今夜是個悲傷的夜晚"
          },
          {
            "sec": 4254,
            "vi": "Anh muốn cảm xúc của mình không ai có thể được chạm vào nó",
            "zh": "我只想把自己的情緒封存，不讓任何人觸碰"
          },
          {
            "sec": 4257,
            "vi": "Nơi có hai làn xe chạy, giờ thì anh đứng ở giữa mơ màng gọi gió",
            "zh": "在雙向車道之間，此刻我佇立其中恍惚地呼喚微風"
          },
          {
            "sec": 4263,
            "vi": "Anh nhớ nụ cười thân thương ngày trước",
            "zh": "我想念從前那抹親切溫暖的笑容"
          },
          {
            "sec": 4265,
            "vi": "Anh mặt lạnh nhạt ở trên đỉnh đầu",
            "zh": "我強裝冷漠的神情，孤冷籠罩在頭頂上方"
          },
          {
            "sec": 4267,
            "vi": "Người chưa từng khóc là người chưa từng biết đau",
            "zh": "未曾哭過的人，就不曾真正懂得心痛"
          },
          {
            "sec": 4270,
            "vi": "Nỗi buồn của anh, anh cũng không muốn cho em biết đâu",
            "zh": "我心裡的難過，其實並不想讓你知道"
          },
          {
            "sec": 4272,
            "vi": "Ngày dài tháng rộng che chở ta ôm lấy nhau",
            "zh": "漫長歲月裡我們曾相擁取暖、彼此守護"
          },
          {
            "sec": 4275,
            "vi": "Giấu thật sâu vào trong đôi mắt buồn",
            "zh": "將一切深深藏進這雙憂鬱的眼眸裡"
          },
          {
            "sec": 4277,
            "vi": "Nhìn thấy nhau vui là điều ai cũng muốn, em đừng buồn",
            "zh": "看見對方過得開心是彼此的心願，妳別難過"
          },
          {
            "sec": 4281,
            "vi": "Thả xuống lại những kỷ niệm anh dành cho em",
            "zh": "輕輕放下那些我曾為妳留下的回憶"
          },
          {
            "sec": 4285,
            "vi": "Dù đẹp dù xấu dù có vụn vỡ anh dành cho em",
            "zh": "無論美好、殘缺或已破碎，全都是我給妳的心意"
          },
          {
            "sec": 4288,
            "vi": "Nghe xong xin em đừng khóc, vì khi anh viết đã bao lần khóc",
            "zh": "聽完後請妳別流淚，因為寫下這段詞時我早已哭過無數回"
          },
          {
            "sec": 4294,
            "vi": "Anh thấy nặng nề đôi chân của mình vì lỡ đi nhầm lên trên sườn dốc",
            "zh": "我只覺腳步無比沉重，只因不小心誤踏上陡峭的斜坡"
          },
          {
            "sec": 4298,
            "vi": "Kết thúc không đẹp đâu phải nói quên là quên",
            "zh": "不完美的結局，哪是說忘就能輕易忘懷"
          },
          {
            "sec": 4301,
            "vi": "Khi bao đêm anh say, anh vẫn muốn em một lần gọi tên",
            "zh": "無數個買醉的深夜裡，我仍渴望聽妳再喚我一聲名字"
          },
          {
            "sec": 4304,
            "vi": "Có thể trong giây phút nào đó, những tổn thương này hóa thành sắt đá",
            "zh": "或許在某個瞬間，這些傷痕會凝結成冰冷的鐵石"
          },
          {
            "sec": 4309,
            "vi": "Thôi thì phần vui em cứ giữ, gồng gánh phần buồn cứ để anh",
            "zh": "罷了，快樂的那份就留給妳，悲傷的重量全都讓我來扛"
          }
        ]
      },
      {
        "label": "主歌二 (Verse 2)",
        "startSec": 4312,
        "timestamp": "01:11:52",
        "lines": [
          {
            "sec": 4312,
            "vi": "Đâu ai muốn nhìn lại nhau bằng những ánh mắt vô hồn",
            "zh": "誰會願意用空洞失神的目光再次凝望彼此"
          },
          {
            "sec": 4317,
            "vi": "Con tim đã nhiều phen đau vẫn cố tươi vui bên ngoài",
            "zh": "這顆心已歷經無數次傷痛，外表卻仍強顏歡笑"
          },
          {
            "sec": 4323,
            "vi": "Đâu ai biết được thân tâm chờ mong anh đến mỏi mòn",
            "zh": "有誰知曉我身心俱疲，卻依舊望穿秋水地等待著你"
          },
          {
            "sec": 4335,
            "vi": "Mộng kia dần tan chẳng còn mơ ước được gì, anh ơi",
            "zh": "舊夢漸漸消散，再也無力奢望任何未來了，親愛的你"
          }
        ]
      },
      {
        "label": "副歌二 (Chorus 2)",
        "startSec": 4342,
        "timestamp": "01:12:22",
        "lines": [
          {
            "sec": 4342,
            "vi": "Sao đôi tay chưa buông đôi chân em đi rồi",
            "zh": "為何雙手尚未放開，你的腳步卻已遠去"
          },
          {
            "sec": 4345,
            "vi": "Sao đêm nay cô đơn lấn át nỗi nhớ tơi bời",
            "zh": "為何今夜的孤寂淹沒了凌亂不堪的思念"
          },
          {
            "sec": 4349,
            "vi": "Buồn kia còn sau màu mắt",
            "zh": "那抹憂傷依然深藏在眼眸之後"
          },
          {
            "sec": 4356,
            "vi": "Em lang thang nơi anh từng hay đi qua",
            "zh": "我獨自徘徊在你曾經走過的街角"
          },
          {
            "sec": 4362,
            "vi": "Mà nhìn khóe mắt rưng rưng",
            "zh": "望著彼此泛紅含淚的眼眶"
          },
          {
            "sec": 4367,
            "vi": "Biết bao chuyện buồn",
            "zh": "道不盡多少心酸往事"
          }
        ]
      }
    ]
  },
  {
    "no": 20,
    "id": "song-20-cong-chua-bong-bong",
    "titleVi": "Công Chúa Bong Bóng",
    "titleZh": "泡泡公主",
    "coverArtist": "Trạm Cover",
    "originalArtist": "Bảo Thy ft. 2B",
    "mood": "童話哀愁",
    "startSec": 4412,
    "vocalStartSec": 4420,
    "endSec": 4678,
    "startTimestamp": "01:13:32",
    "endTimestamp": "01:17:58",
    "durationSec": 266,
    "summaryZh": "越南七、八年級生耳熟能詳的經典童話風流行名曲，以母親的床邊故事為引子，訴說天真爛漫的「泡泡公主」愛上薄情「雨王子」卻終究心碎破滅的淒美寓言。翻唱版省去口白與饒舌，更添純粹哀傷的抒情氛圍。",
    "keyVocab": [
      {
        "vi": "bong bóng",
        "zh": "泡泡、氣泡",
        "note": "此處指大雨打在水面上泛起又瞬逝的水泡（bong bóng mưa）"
      },
      {
        "vi": "hồn nhiên",
        "zh": "天真爛漫、無憂無慮",
        "note": "形容純真自然、不帶心機的模樣"
      },
      {
        "vi": "lơ đãng",
        "zh": "漫不經心、心不在焉",
        "note": "形容雨王子對待感情飄忽不定的態度"
      },
      {
        "vi": "dối gian",
        "zh": "虛情假意、欺騙",
        "note": "文雅書面語，意同 gian dối，常用於歌詞"
      },
      {
        "vi": "nhạt nhòa",
        "zh": "模糊不清、淚眼迷濛",
        "note": "常用於形容淚水模糊視線或記憶漸淡"
      }
    ],
    "sections": [
      {
        "label": "主歌一 (Verse 1)",
        "startSec": 4420,
        "timestamp": "01:13:40",
        "lines": [
          {
            "sec": 4420,
            "vi": "Ngày xưa lúc thơ bé ta thường nhìn mưa hát",
            "zh": "兒時年幼，我們總愛望著細雨哼唱"
          },
          {
            "sec": 4424,
            "vi": "Và khi cơn mưa như nặng hạt, lại có bóng nước chợt tan",
            "zh": "每當雨勢漸漸滂沱，水面總會泛起轉瞬即逝的水泡"
          },
          {
            "sec": 4429,
            "vi": "Mẹ bảo ta rằng bong bóng mưa",
            "zh": "母親告訴我們，那是雨的泡泡"
          },
          {
            "sec": 4436,
            "vi": "Và mẹ cũng đi mãi trong chiều mưa bong bóng",
            "zh": "而母親也在某個泛著水泡的雨後黃昏永遠離去"
          },
          {
            "sec": 4440,
            "vi": "Mẹ đi mang theo câu chuyện buồn cổ tích bong bóng và mưa",
            "zh": "母親帶走了那則關於泡泡與雨的悲傷童話"
          },
          {
            "sec": 4444,
            "vi": "Chuyện mẹ ru ngày xưa thật xưa",
            "zh": "那首母親在遙遠從前哄我入睡的故事"
          }
        ]
      },
      {
        "label": "主歌二 (Verse 2)",
        "startSec": 4459,
        "timestamp": "01:14:19",
        "lines": [
          {
            "sec": 4459,
            "vi": "Ngày xưa rất xưa ấy có một nàng công chúa",
            "zh": "很久很久以前，有一位美麗的公主"
          },
          {
            "sec": 4465,
            "vi": "Hồn nhiên như mây trên bầu trời đùa giỡn với gió và trăng",
            "zh": "如天際白雲般純真無邪，與清風明月嬉戲"
          },
          {
            "sec": 4468,
            "vi": "Được tự do cùng mưa hát vang",
            "zh": "能自由自在地與細雨一同放聲高歌"
          },
          {
            "sec": 4475,
            "vi": "Nàng công chúa bong bóng yêu chàng mưa lơ đãng",
            "zh": "泡泡公主深深愛上了漫不經心的雨王子"
          },
          {
            "sec": 4480,
            "vi": "Dường như bên nhau quên giận hờn, dù có những lúc mưa vô tình",
            "zh": "只要相伴便彷彿忘了嗔怨，即使雨偶爾顯得那般無情"
          },
          {
            "sec": 4487,
            "vi": "Làm buồn công chúa bong bóng nhiều lần",
            "zh": "一次又一次讓泡泡公主暗自神傷"
          }
        ]
      },
      {
        "label": "副歌一 (Chorus 1)",
        "startSec": 4491,
        "timestamp": "01:14:51",
        "lines": [
          {
            "sec": 4491,
            "vi": "Yêu và yêu có thế thôi, thu về làm mưa không ngớt",
            "zh": "愛啊愛，不過就是如此，秋風起時讓雨下個不停"
          },
          {
            "sec": 4495,
            "vi": "Bong bóng bên mưa, bong bóng không nghe giá lạnh",
            "zh": "泡泡依偎在雨身旁，絲毫不覺寒意刺骨"
          },
          {
            "sec": 4502,
            "vi": "Nhưng nàng công chúa biết chăng, mưa là người đàn ông dối gian",
            "zh": "可公主妳可曾知曉，雨本就是個虛情假意的男子"
          },
          {
            "sec": 4509,
            "vi": "Vì mưa chỉ yêu có chính mưa mà thôi",
            "zh": "因為雨從頭到尾只愛著他自己罷了"
          }
        ]
      },
      {
        "label": "橋段一 (Bridge 1)",
        "startSec": 4532,
        "timestamp": "01:15:32",
        "lines": [
          {
            "sec": 4532,
            "vi": "Thời gian cứ trôi mãi mang mùa thu đi mất",
            "zh": "時光不停流逝，悄悄帶走了整個秋天"
          },
          {
            "sec": 4536,
            "vi": "Để đông sang mưa phùn lạnh, để bong bóng vỡ tan",
            "zh": "冬日降臨帶來清冷毛毛雨，讓脆弱的泡泡隨之破滅"
          },
          {
            "sec": 4541,
            "vi": "Vì trời cho làn mưa giá băng",
            "zh": "只因蒼天降下了一陣冰封刺骨的寒雨"
          },
          {
            "sec": 4547,
            "vi": "Nàng công chúa bong bóng không còn yêu mưa nữa",
            "zh": "從此泡泡公主不再愛著雨了"
          },
          {
            "sec": 4551,
            "vi": "Dường như không yêu không giận hờn, nàng khóc nước mắt nhạt nhòa",
            "zh": "彷彿不再愛也不再怨，她只是淚眼模糊地啜泣著"
          },
          {
            "sec": 4558,
            "vi": "Hòa cùng mưa vào trong niềm đau",
            "zh": "與冰冷的雨水一同融進無盡的哀痛裡"
          }
        ]
      },
      {
        "label": "主歌三 (Verse 3)",
        "startSec": 4571,
        "timestamp": "01:16:11",
        "lines": [
          {
            "sec": 4571,
            "vi": "Ngày xưa rất xưa ấy có một nàng công chúa",
            "zh": "很久很久以前，有一位美麗的公主"
          },
          {
            "sec": 4576,
            "vi": "Hồn nhiên như mây trên bầu trời đùa giỡn với gió và trăng",
            "zh": "如天際白雲般純真無邪，與清風明月嬉戲"
          },
          {
            "sec": 4580,
            "vi": "Được tự do cùng mưa hát vang",
            "zh": "能自由自在地與細雨一同放聲高歌"
          },
          {
            "sec": 4587,
            "vi": "Nàng công chúa bong bóng yêu chàng mưa lơ đãng",
            "zh": "泡泡公主深深愛上了漫不經心的雨王子"
          },
          {
            "sec": 4592,
            "vi": "Dường như bên nhau quên giận hờn, dù có những lúc mưa vô tình",
            "zh": "只要相伴便彷彿忘了嗔怨，即使雨偶爾顯得那般無情"
          },
          {
            "sec": 4599,
            "vi": "Làm buồn công chúa bong bóng nhiều lần",
            "zh": "一次又一次讓泡泡公主暗自神傷"
          }
        ]
      },
      {
        "label": "副歌二 (Chorus 2)",
        "startSec": 4603,
        "timestamp": "01:16:43",
        "lines": [
          {
            "sec": 4603,
            "vi": "Yêu và yêu có thế thôi, thu về làm mưa không ngớt",
            "zh": "愛啊愛，不過就是如此，秋風起時讓雨下個不停"
          },
          {
            "sec": 4608,
            "vi": "Bong bóng bên mưa, bong bóng không nghe giá lạnh",
            "zh": "泡泡依偎在雨身旁，絲毫不覺寒意刺骨"
          },
          {
            "sec": 4615,
            "vi": "Nhưng nàng công chúa biết chăng, mưa là người đàn ông dối gian",
            "zh": "可公主妳可曾知曉，雨本就是個虛情假意的男子"
          },
          {
            "sec": 4618,
            "vi": "Vì mưa chỉ yêu có chính mưa mà thôi",
            "zh": "因為雨從頭到尾只愛著他自己罷了"
          }
        ]
      },
      {
        "label": "尾聲 (Outro)",
        "startSec": 4633,
        "timestamp": "01:17:13",
        "lines": [
          {
            "sec": 4633,
            "vi": "Thời gian cứ trôi mãi mang mùa thu đi mất",
            "zh": "時光不停流逝，悄悄帶走了整個秋天"
          },
          {
            "sec": 4637,
            "vi": "Để đông sang mưa phùn lạnh, để bong bóng vỡ tan",
            "zh": "冬日降臨帶來清冷毛毛雨，讓脆弱的泡泡隨之破滅"
          },
          {
            "sec": 4642,
            "vi": "Vì trời cho làn mưa giá băng",
            "zh": "只因蒼天降下了一陣冰封刺骨的寒雨"
          },
          {
            "sec": 4648,
            "vi": "Nàng công chúa bong bóng không còn yêu mưa nữa",
            "zh": "從此泡泡公主不再愛著雨了"
          },
          {
            "sec": 4653,
            "vi": "Dường như không yêu không giận hờn, nàng khóc nước mắt nhạt nhòa",
            "zh": "彷彿不再愛也不再怨，她只是淚眼模糊地啜泣著"
          },
          {
            "sec": 4660,
            "vi": "Hòa cùng mưa vào trong niềm đau",
            "zh": "與冰冷的雨水一同融進無盡的哀痛裡"
          }
        ]
      }
    ]
  },
  {
    "no": 21,
    "id": "song-21-neu-la-anh",
    "titleVi": "Nếu Là Anh",
    "titleZh": "如果是我",
    "coverArtist": "JiKi X Cover",
    "originalArtist": "The Men",
    "mood": "溫柔守候",
    "startSec": 4678,
    "vocalStartSec": 4678,
    "endSec": 4878,
    "startTimestamp": "01:17:58",
    "endTimestamp": "01:21:18",
    "durationSec": 200,
    "summaryZh": "越南男子雙人組 The Men 的代表作，以一句句「如果是我」道出默默守護者的深情承諾。歌詞真摯直白，願化作輕風撫平愛人的煩憂，在每一個黑夜與漫長人生裡溫柔相伴。",
    "keyVocab": [
      {
        "vi": "bình yên",
        "zh": "平靜、安穩",
        "note": "情歌中極常見的詞彙，形容安心踏實的幸福感"
      },
      {
        "vi": "màn đêm",
        "zh": "夜幕",
        "note": "常用搭配 màn đêm buông xuống（夜幕低垂）"
      },
      {
        "vi": "muộn phiền",
        "zh": "煩憂、煩惱",
        "note": "偏書面且帶詩意的用法，常與 quên hết（忘卻所有）連用"
      },
      {
        "vi": "nâng niu",
        "zh": "呵護、捧在手心珍惜",
        "note": "形容極其小心翼翼地疼愛與珍視"
      },
      {
        "vi": "chiếm trọn",
        "zh": "完全佔據、徹底擄獲",
        "note": "chiếm（佔有）+ trọn（完整），常用於 chiếm trọn tim anh（佔據我整顆心）"
      }
    ],
    "sections": [
      {
        "label": "主歌一 (Verse 1)",
        "startSec": 4678,
        "timestamp": "01:17:58",
        "lines": [
          {
            "sec": 4678,
            "vi": "Nếu là anh thì anh sẽ dành cho em những ngày hạnh phúc",
            "zh": "如果換作是我，我會給妳滿滿幸福的日子"
          },
          {
            "sec": 4684,
            "vi": "Nếu là anh thì anh sẽ nắm tay em không bao giờ buông",
            "zh": "如果換作是我，我會緊握妳的手永不放開"
          },
          {
            "sec": 4690,
            "vi": "Anh sẽ không làm em khóc, anh sẽ không bao giờ như thế",
            "zh": "我絕不會讓妳落淚，我絕不會那樣傷害妳"
          },
          {
            "sec": 4697,
            "vi": "Anh sẽ cố làm tất cả để cho em tháng ngày bình yên",
            "zh": "我會傾盡全力，只為換妳歲月靜好、日日安穩"
          }
        ]
      },
      {
        "label": "副歌一 (Chorus 1)",
        "startSec": 4711,
        "timestamp": "01:18:31",
        "lines": [
          {
            "sec": 4711,
            "vi": "Nếu là anh thì anh sẽ dành yêu thương đến em mỗi ngày",
            "zh": "如果換作是我，我會每天都把愛意傾注給妳"
          },
          {
            "sec": 4717,
            "vi": "Khi màn đêm nhẹ buông xuống, anh sẽ ru em giấc ngủ ngon",
            "zh": "當夜幕輕輕低垂，我會輕哄妳安穩入眠"
          },
          {
            "sec": 4728,
            "vi": "Anh sẽ như là cơn gió, làm em quên hết bao muộn phiền",
            "zh": "我會化作一陣清風，吹散妳心頭所有煩憂"
          },
          {
            "sec": 4737,
            "vi": "Anh sẽ nâng niu vòng tay ấy, không để em một ngày xa anh",
            "zh": "我會倍加珍惜那份擁抱，不讓妳離開我身邊哪怕一天"
          }
        ]
      },
      {
        "label": "主歌二 (Verse 2)",
        "startSec": 4765,
        "timestamp": "01:19:25",
        "lines": [
          {
            "sec": 4765,
            "vi": "Nếu là anh thì anh sẽ dành cho em những ngày hạnh phúc",
            "zh": "如果換作是我，我會給妳滿滿幸福的日子"
          },
          {
            "sec": 4770,
            "vi": "Nếu là anh thì anh sẽ nắm tay em không bao giờ buông",
            "zh": "如果換作是我，我會緊握妳的手永不放開"
          },
          {
            "sec": 4780,
            "vi": "Anh sẽ không làm em khóc, anh sẽ không bao giờ như thế",
            "zh": "我絕不會讓妳落淚，我絕不會那樣傷害妳"
          },
          {
            "sec": 4785,
            "vi": "Anh sẽ cố làm tất cả để cho em tháng ngày bình yên",
            "zh": "我會傾盡全力，只為換妳歲月靜好、日日安穩"
          }
        ]
      },
      {
        "label": "副歌二 (Chorus 2)",
        "startSec": 4797,
        "timestamp": "01:19:57",
        "lines": [
          {
            "sec": 4797,
            "vi": "Nếu là anh thì anh sẽ dành yêu thương đến em mỗi ngày",
            "zh": "如果換作是我，我會每天都把愛意傾注給妳"
          },
          {
            "sec": 4803,
            "vi": "Khi màn đêm nhẹ buông xuống, anh sẽ ru em giấc ngủ ngon",
            "zh": "當夜幕輕輕低垂，我會輕哄妳安穩入眠"
          },
          {
            "sec": 4814,
            "vi": "Anh sẽ như là cơn gió, làm em quên hết bao muộn phiền",
            "zh": "我會化作一陣清風，吹散妳心頭所有煩憂"
          },
          {
            "sec": 4823,
            "vi": "Anh sẽ nâng niu vòng tay ấy, không để em một ngày xa anh",
            "zh": "我會倍加珍惜那份擁抱，不讓妳離開我身邊哪怕一天"
          }
        ]
      },
      {
        "label": "尾聲副歌 (Outro Chorus)",
        "startSec": 4830,
        "timestamp": "01:20:30",
        "lines": [
          {
            "sec": 4830,
            "vi": "Nếu là anh thì anh sẽ cùng em đi hết con đường dài",
            "zh": "如果換作是我，我會陪妳走完漫長的人生路"
          },
          {
            "sec": 4837,
            "vi": "Khi buồn đau và khi hạnh phúc, luôn có anh bên cạnh em thôi",
            "zh": "無論悲傷還是快樂，妳身旁永遠都有我相伴"
          },
          {
            "sec": 4847,
            "vi": "Nếu là anh, anh sẽ hứa, dù mai sau hay ngay bây giờ",
            "zh": "如果換作是我，我會許下承諾，無論未來或此刻當下"
          },
          {
            "sec": 4853,
            "vi": "Em sẽ luôn là tất cả, em vẫn luôn chiếm trọn tim anh",
            "zh": "妳永遠是我的全部，妳始終佔據我整顆心"
          }
        ]
      }
    ]
  },
  {
    "no": 22,
    "id": "song-22-buoc-qua-doi-nhau",
    "titleVi": "Bước Qua Đời Nhau",
    "titleZh": "擦肩走過彼此人生",
    "coverArtist": "Jiki X Cover",
    "originalArtist": "Lê Bảo Bình / Khắc Việt",
    "mood": "遺憾心碎",
    "startSec": 4878,
    "vocalStartSec": 4878,
    "endSec": 5117,
    "startTimestamp": "01:21:18",
    "endTimestamp": "01:25:17",
    "durationSec": 239,
    "summaryZh": "由名作曲家 Khắc Việt 創作、Lê Bảo Bình 唱紅的催淚抒情神曲。全曲圍繞「早知道當時不那麼固執」的悔恨，細數曾經同甘共苦的誓言，最終卻只留下一道抹不去的傷痕與形同陌路的遺憾。",
    "keyVocab": [
      {
        "vi": "bước qua đời nhau",
        "zh": "走過彼此的生命、擦肩而過",
        "note": "形容曾相愛卻終究成為彼此人生過客的惆悵"
      },
      {
        "vi": "thề ước",
        "zh": "發誓、立下山盟海誓",
        "note": "thề（發誓）+ ước（約定），指戀人間的深情誓言"
      },
      {
        "vi": "cố chấp",
        "zh": "固執、執拗",
        "note": "漢越詞「固執」，常指吵架時誰也不肯讓步"
      },
      {
        "vi": "kìm nén",
        "zh": "克制、忍耐",
        "note": "指壓抑情緒、克制怒氣以免傷人"
      },
      {
        "vi": "cãi vã",
        "zh": "爭吵、口角",
        "note": "日常與情歌中極常用的「吵架」說法"
      }
    ],
    "sections": [
      {
        "label": "主歌一 (Verse 1)",
        "startSec": 4878,
        "timestamp": "01:21:18",
        "lines": [
          {
            "sec": 4878,
            "vi": "Mình bước qua đời nhau để làm nhau đau",
            "zh": "我們走過彼此的生命，只為了讓彼此心痛"
          },
          {
            "sec": 4883,
            "vi": "Để làm nhau khóc, gặp nhau không muốn chào",
            "zh": "只為了讓彼此落淚，重逢卻連招呼都不願打"
          },
          {
            "sec": 4887,
            "vi": "Mình bước qua đời nhau để lại thương đau",
            "zh": "我們走過彼此的生命，徒留滿身傷痛"
          },
          {
            "sec": 4892,
            "vi": "Để lại vết sâu có xóa mờ được đâu",
            "zh": "留下那道深深傷痕，怎能輕易抹去"
          }
        ]
      },
      {
        "label": "導歌一 (Pre-Chorus 1)",
        "startSec": 4897,
        "timestamp": "01:21:37",
        "lines": [
          {
            "sec": 4897,
            "vi": "Mình đã từng hạnh phúc phải không em ơi",
            "zh": "我們曾經也很幸福，對吧，親愛的妳"
          },
          {
            "sec": 4900,
            "vi": "Mình từng chung lối khổ đau lẫn tiếng cười",
            "zh": "我們曾攜手同行，共度苦痛也共享歡笑"
          },
          {
            "sec": 4904,
            "vi": "Mình đã luôn từng nói, à không, thề chưa",
            "zh": "我們曾不斷說過……啊不，應該說曾立過誓吧"
          },
          {
            "sec": 4909,
            "vi": "Mình từng thề ước mãi không bao giờ xa",
            "zh": "我們曾許下誓言，永遠都不分離"
          }
        ]
      },
      {
        "label": "副歌一 (Chorus 1)",
        "startSec": 4914,
        "timestamp": "01:21:54",
        "lines": [
          {
            "sec": 4914,
            "vi": "Mà cớ sao ta giờ đây bước qua đời nhau",
            "zh": "可為何如今我們卻成了彼此人生的過客"
          },
          {
            "sec": 4919,
            "vi": "Rồi trái tim ta phải đau, nhớ nhung vì nhau",
            "zh": "然後讓兩顆心隱隱作痛，仍為彼此日夜思念"
          },
          {
            "sec": 4923,
            "vi": "Và có khi nào em thấy tiếc nuối về ngày xưa",
            "zh": "妳是否也曾有過那麼一刻，對往昔感到惋惜"
          },
          {
            "sec": 4928,
            "vi": "Vội vàng quá để mình mất nhau",
            "zh": "當初太過倉促衝動，才讓我們失去了彼此"
          },
          {
            "sec": 4933,
            "vi": "Ngày ấy giá anh và em chúng ta đừng cố chấp",
            "zh": "如果那時妳和我都不要如此固執"
          },
          {
            "sec": 4937,
            "vi": "Ngày ấy giá anh và em chúng ta bình tĩnh hơn",
            "zh": "如果那時妳和我都能多一點冷靜"
          },
          {
            "sec": 4942,
            "vi": "Ngày ấy giá anh kìm nén mỗi khi mình cãi vã",
            "zh": "如果那時每次爭吵我都能多忍讓一些"
          },
          {
            "sec": 4951,
            "vi": "Để hai ta, hai ta sẽ không bước qua đời nhau",
            "zh": "或許我們倆，就不會就這樣擦肩走過彼此人生"
          }
        ]
      },
      {
        "label": "主歌二 (Verse 2)",
        "startSec": 4966,
        "timestamp": "01:22:46",
        "lines": [
          {
            "sec": 4966,
            "vi": "Mình bước qua đời nhau để làm nhau đau",
            "zh": "我們走過彼此的生命，只為了讓彼此心痛"
          },
          {
            "sec": 4972,
            "vi": "Để làm nhau khóc, gặp nhau không muốn chào",
            "zh": "只為了讓彼此落淚，重逢卻連招呼都不願打"
          },
          {
            "sec": 4976,
            "vi": "Mình bước qua đời nhau để lại thương đau",
            "zh": "我們走過彼此的生命，徒留滿身傷痛"
          },
          {
            "sec": 4981,
            "vi": "Để lại vết sâu có xóa mờ được đâu",
            "zh": "留下那道深深傷痕，怎能輕易抹去"
          }
        ]
      },
      {
        "label": "導歌二 (Pre-Chorus 2)",
        "startSec": 4987,
        "timestamp": "01:23:07",
        "lines": [
          {
            "sec": 4987,
            "vi": "Mình đã từng hạnh phúc phải không em ơi",
            "zh": "我們曾經也很幸福，對吧，親愛的妳"
          },
          {
            "sec": 4989,
            "vi": "Mình từng chung lối khổ đau lẫn tiếng cười",
            "zh": "我們曾攜手同行，共度苦痛也共享歡笑"
          },
          {
            "sec": 4993,
            "vi": "Mình đã luôn từng nói, à không, thề chưa",
            "zh": "我們曾不斷說過……啊不，應該說曾立過誓吧"
          },
          {
            "sec": 4997,
            "vi": "Mình từng thề ước mãi không bao giờ xa",
            "zh": "我們曾許下誓言，永遠都不分離"
          }
        ]
      },
      {
        "label": "副歌二 (Chorus 2)",
        "startSec": 5003,
        "timestamp": "01:23:23",
        "lines": [
          {
            "sec": 5003,
            "vi": "Mà cớ sao ta giờ đây bước qua đời nhau",
            "zh": "可為何如今我們卻成了彼此人生的過客"
          },
          {
            "sec": 5007,
            "vi": "Rồi trái tim ta phải đau, nhớ nhung vì nhau",
            "zh": "然後讓兩顆心隱隱作痛，仍為彼此日夜思念"
          },
          {
            "sec": 5012,
            "vi": "Và có khi nào em thấy tiếc nuối về ngày xưa",
            "zh": "妳是否也曾有過那麼一刻，對往昔感到惋惜"
          },
          {
            "sec": 5017,
            "vi": "Vội vàng quá để mình mất nhau",
            "zh": "當初太過倉促衝動，才讓我們失去了彼此"
          },
          {
            "sec": 5021,
            "vi": "Ngày ấy giá anh và em chúng ta đừng cố chấp",
            "zh": "如果那時妳和我都不要如此固執"
          },
          {
            "sec": 5026,
            "vi": "Ngày ấy giá anh và em chúng ta bình tĩnh hơn",
            "zh": "如果那時妳和我都能多一點冷靜"
          },
          {
            "sec": 5035,
            "vi": "Ngày ấy giá anh kìm nén mỗi khi mình cãi vã",
            "zh": "如果那時每次爭吵我都能多忍讓一些"
          },
          {
            "sec": 5039,
            "vi": "Để hai ta, hai ta sẽ không bước qua đời nhau",
            "zh": "或許我們倆，就不會就這樣擦肩走過彼此人生"
          }
        ]
      },
      {
        "label": "副歌三 / 尾聲 (Final Chorus)",
        "startSec": 5052,
        "timestamp": "01:24:12",
        "lines": [
          {
            "sec": 5052,
            "vi": "Mà cớ sao ta giờ đây bước qua đời nhau",
            "zh": "可為何如今我們卻成了彼此人生的過客"
          },
          {
            "sec": 5058,
            "vi": "Rồi trái tim ta phải đau, nhớ nhung vì nhau",
            "zh": "然後讓兩顆心隱隱作痛，仍為彼此日夜思念"
          },
          {
            "sec": 5062,
            "vi": "Và có khi nào em thấy tiếc nuối về ngày xưa",
            "zh": "妳是否也曾有過那麼一刻，對往昔感到惋惜"
          },
          {
            "sec": 5067,
            "vi": "Vội vàng quá để mình mất nhau",
            "zh": "當初太過倉促衝動，才讓我們失去了彼此"
          },
          {
            "sec": 5072,
            "vi": "Ngày ấy giá anh và em chúng ta đừng cố chấp",
            "zh": "如果那時妳和我都不要如此固執"
          },
          {
            "sec": 5077,
            "vi": "Ngày ấy giá anh và em chúng ta bình tĩnh hơn",
            "zh": "如果那時妳和我都能多一點冷靜"
          },
          {
            "sec": 5081,
            "vi": "Ngày ấy giá anh kìm nén mỗi khi mình cãi vã",
            "zh": "如果那時每次爭吵我都能多忍讓一些"
          },
          {
            "sec": 5085,
            "vi": "Để hai ta, hai ta sẽ không bước qua đời nhau",
            "zh": "或許我們倆，就不會就這樣擦肩走過彼此人生"
          }
        ]
      }
    ]
  },
  {
    "no": 23,
    "id": "song-23-ngay-chua-giong-bao",
    "titleVi": "Ngày Chưa Giông Bão",
    "titleZh": "風暴來臨之前",
    "coverArtist": "Trạm Cover",
    "originalArtist": "Bùi Lan Hương / Phan Mạnh Quỳnh",
    "mood": "空靈迷幻",
    "startSec": 5117,
    "vocalStartSec": 5117,
    "endSec": 5337,
    "startTimestamp": "01:25:17",
    "endTimestamp": "01:28:57",
    "durationSec": 220,
    "summaryZh": "電影《不死人》（Người Bất Tử）主題曲，由才子 Phan Mạnh Quỳnh 詞曲創作、空靈系女聲 Bùi Lan Hương 原唱。以如詩般的意象對比暴風雨前的溫柔與命運摧折後的迷失，唱出「只要還會痛，就代表依然深愛」的宿命深情。",
    "keyVocab": [
      {
        "vi": "giông bão",
        "zh": "暴風雨、人生風浪",
        "note": "常用來隱喻命運中的劫難與情感考驗"
      },
      {
        "vi": "quẩn quanh",
        "zh": "縈繞、徘徊不去",
        "note": "形容如湖面浪波般久久縈繞不肯散去"
      },
      {
        "vi": "luyến lưu",
        "zh": "留戀、依依不捨",
        "note": "漢越詞「戀留」，比 lưu luyến 更富古雅詩意"
      },
      {
        "vi": "vô lối",
        "zh": "迷失方向、無路可去",
        "note": "vô（無）+ lối（路），形容深陷迷惘找不到歸途"
      },
      {
        "vi": "muộn sầu",
        "zh": "憂愁、哀愁",
        "note": "高雅書面語，句尾「hết muộn sầu」意為再無憂愁"
      }
    ],
    "sections": [
      {
        "label": "主歌一 (Verse 1)",
        "startSec": 5117,
        "timestamp": "01:25:17",
        "lines": [
          {
            "sec": 5117,
            "vi": "Vì ta yêu nhau như cơn sóng vỗ",
            "zh": "因為我們相愛，宛如輕拍岸邊的浪濤"
          },
          {
            "sec": 5122,
            "vi": "Quẩn quanh bao năm không buông mặt hồ",
            "zh": "經年累月縈繞著，始終不肯離開平靜湖面"
          },
          {
            "sec": 5126,
            "vi": "Thuyền anh đi xa bờ thì em vẫn dõi chờ",
            "zh": "你的孤舟駛向遠方，我仍在岸邊翹首守望"
          },
          {
            "sec": 5130,
            "vi": "Duyên mình dịu êm thơ rất thơ",
            "zh": "我們的緣分如此溫柔靜謐，美得像一首詩"
          },
          {
            "sec": 5135,
            "vi": "Và anh nâng niu em như đóa hoa",
            "zh": "你將我捧在手心呵護，宛如珍稀花朵"
          },
          {
            "sec": 5139,
            "vi": "Còn em xem anh như trăng ngọc ngà",
            "zh": "而我視你如皎潔溫潤的玉月光華"
          },
          {
            "sec": 5140,
            "vi": "Tự do như mây vàng mình phiêu du non ngàn",
            "zh": "如金色浮雲般自在，我們攜手漫遊萬重青山"
          },
          {
            "sec": 5143,
            "vi": "Dẫu trần gian bao la đến đâu nơi anh là nhà",
            "zh": "任憑塵世再怎麼遼闊，有你的地方就是家"
          }
        ]
      },
      {
        "label": "副歌一 (Chorus 1)",
        "startSec": 5162,
        "timestamp": "01:26:02",
        "lines": [
          {
            "sec": 5162,
            "vi": "Khi anh qua thung lũng và bóng đêm ghì bàn chân",
            "zh": "當你行經幽暗山谷，黑夜緊緊拖住你的雙腳"
          },
          {
            "sec": 5167,
            "vi": "Đời khiến anh chẳng còn nhiều luyến lưu",
            "zh": "滄桑人世讓你對一切不再有所留戀"
          },
          {
            "sec": 5172,
            "vi": "Em mong lau mắt anh khô",
            "zh": "我多願能為你拭乾眼角淚痕"
          },
          {
            "sec": 5175,
            "vi": "Ta yêu sai hay đúng, còn thấy đau là còn thương",
            "zh": "無論我們愛得是錯是對，只要還會痛，就代表依然深愛"
          },
          {
            "sec": 5183,
            "vi": "Khi bão qua rồi biết đâu sẽ đi tới nơi của ngày đầu",
            "zh": "待風暴平息之後，或許我們終能回到最初相愛的地方"
          }
        ]
      },
      {
        "label": "主歌二 (Verse 2)",
        "startSec": 5205,
        "timestamp": "01:26:45",
        "lines": [
          {
            "sec": 5205,
            "vi": "Lạc bước giữa những đam mê tăm tối",
            "zh": "迷失在幽暗深沉的慾望執念之中"
          },
          {
            "sec": 5211,
            "vi": "Liệu máu vẫn nóng nơi tim bồi hồi",
            "zh": "胸口那顆激盪的心，血液是否依然溫熱"
          },
          {
            "sec": 5215,
            "vi": "Người năm xưa đâu rồi, lạnh băng tiếng khóc cười",
            "zh": "昔日的那個人去了何處，連哭聲與笑聲都變得冰冷"
          },
          {
            "sec": 5219,
            "vi": "Anh ở nơi xa xôi vô lối",
            "zh": "你身處遙遠而迷惘無路的彼方"
          },
          {
            "sec": 5221,
            "vi": "Mặt đất níu giữ đôi chân chúng ta",
            "zh": "若塵土大地緊緊束縛住我們的腳步"
          },
          {
            "sec": 5224,
            "vi": "Thì bay lên trong cơn mơ kỳ lạ",
            "zh": "那就乘著奇幻的夢境振翅高飛吧"
          },
          {
            "sec": 5228,
            "vi": "Ở đó anh vẫn là người yêu thương chan hòa",
            "zh": "在夢裡你依然是那個滿懷溫柔愛意的人"
          },
          {
            "sec": 5233,
            "vi": "Dẫu trần gian cho anh đắng cay nơi em là nhà",
            "zh": "即便世間給了你滿腹苦澀，我這裡永遠是你的歸宿"
          }
        ]
      },
      {
        "label": "副歌二 (Chorus 2)",
        "startSec": 5250,
        "timestamp": "01:27:30",
        "lines": [
          {
            "sec": 5250,
            "vi": "Khi anh qua thung lũng và bóng đêm ghì bàn chân",
            "zh": "當你行經幽暗山谷，黑夜緊緊拖住你的雙腳"
          },
          {
            "sec": 5256,
            "vi": "Đời khiến anh chẳng còn nhiều luyến lưu",
            "zh": "滄桑人世讓你對一切不再有所留戀"
          },
          {
            "sec": 5260,
            "vi": "Em mong lau mắt anh khô",
            "zh": "我多願能為你拭乾眼角淚痕"
          },
          {
            "sec": 5264,
            "vi": "Ta yêu sai hay đúng, còn thấy đau là còn thương",
            "zh": "無論我們愛得是錯是對，只要還會痛，就代表依然深愛"
          },
          {
            "sec": 5271,
            "vi": "Khi bão qua rồi biết đâu sẽ đi tới nơi của ngày đầu",
            "zh": "待風暴平息之後，或許我們終能回到最初相愛的地方"
          }
        ]
      },
      {
        "label": "副歌三 / 尾聲 (Final Chorus & Outro)",
        "startSec": 5279,
        "timestamp": "01:27:59",
        "lines": [
          {
            "sec": 5279,
            "vi": "Khi anh qua thung lũng và bóng đêm ghì bàn chân",
            "zh": "當你行經幽暗山谷，黑夜緊緊拖住你的雙腳"
          },
          {
            "sec": 5282,
            "vi": "Đời khiến anh chẳng còn nhiều luyến lưu",
            "zh": "滄桑人世讓你對一切不再有所留戀"
          },
          {
            "sec": 5288,
            "vi": "Em mong lau mắt anh khô",
            "zh": "我多願能為你拭乾眼角淚痕"
          },
          {
            "sec": 5292,
            "vi": "Ta yêu sai hay đúng, còn thấy đau là còn thương",
            "zh": "無論我們愛得是錯是對，只要還會痛，就代表依然深愛"
          },
          {
            "sec": 5301,
            "vi": "Khi bão qua rồi biết đâu sẽ đi tới nơi của ngày đầu",
            "zh": "待風暴平息之後，或許我們終能回到最初相愛的地方"
          },
          {
            "sec": 5308,
            "vi": "Ta yêu sai hay đúng, còn thấy đau là còn thương",
            "zh": "無論我們愛得是錯是對，只要還會痛，就代表依然深愛"
          },
          {
            "sec": 5315,
            "vi": "Khi bão qua rồi biết đâu sẽ đi tới nơi của ngày đầu",
            "zh": "待風暴平息之後，或許我們終能回到最初相愛的地方"
          },
          {
            "sec": 5324,
            "vi": "Hết muộn sầu",
            "zh": "從此再無憂愁"
          }
        ]
      }
    ]
  },
  {
    "no": 24,
    "id": "song-24-roi-bo",
    "titleVi": "Rời Bỏ",
    "titleZh": "離去",
    "coverArtist": "Trạm Cover",
    "originalArtist": "Hòa Minzy / Vũ Huy Hoàng",
    "mood": "成全放手",
    "startSec": 5337,
    "vocalStartSec": 5337,
    "endSec": 5554,
    "startTimestamp": "01:28:57",
    "endTimestamp": "01:32:34",
    "durationSec": 217,
    "summaryZh": "實力派女聲 Hòa Minzy 的代表抒情金曲，細膩刻畫單戀者選擇悄然退場的卑微與成全。明知對方的心屬於另一個人，仍寧願承擔失去一切的痛，含淚微笑祝福愛人奔向真正所愛。",
    "keyVocab": [
      {
        "vi": "rời bỏ",
        "zh": "離開、捨棄離去",
        "note": "比單純的 rời đi（離開）多了一層決絕放手的意味"
      },
      {
        "vi": "đắm chìm",
        "zh": "沉醉、深陷其中",
        "note": "形容全心沉溺於某種美好瞬間或情緒之中"
      },
      {
        "vi": "thoáng qua",
        "zh": "一閃而過、匆匆掠過",
        "note": "形容短暫停留、不留痕跡的過客"
      },
      {
        "vi": "vô cớ",
        "zh": "無緣無故、毫無理由",
        "note": "漢越詞「無故」，歌詞中指單戀時莫名其妙的喜怒哀樂"
      },
      {
        "vi": "giữ chân",
        "zh": "挽留、留住腳步",
        "note": "常用於感情中想留住即將離去的人"
      }
    ],
    "sections": [
      {
        "label": "主歌一 (Verse 1)",
        "startSec": 5337,
        "timestamp": "01:28:57",
        "lines": [
          {
            "sec": 5337,
            "vi": "Hết hôm nay là em đi khỏi nơi đây",
            "zh": "過了今天，我就要離開這個地方"
          },
          {
            "sec": 5343,
            "vi": "Anh sẽ không phải nhìn thấy em nữa đâu",
            "zh": "你往後再也不必看見我的身影了"
          },
          {
            "sec": 5350,
            "vi": "Khoảnh khắc đắm chìm vào nụ cười ấy",
            "zh": "沉醉在那抹笑容裡的瞬間"
          },
          {
            "sec": 5355,
            "vi": "Là điều cuối cùng em còn lưu lại cho đến khi",
            "zh": "是我最後珍藏在心底的回憶，直到某天"
          },
          {
            "sec": 5360,
            "vi": "Mình có thể quên hết đi",
            "zh": "我終於能將這一切徹底忘懷"
          }
        ]
      },
      {
        "label": "導歌一 (Pre-Chorus 1)",
        "startSec": 5364,
        "timestamp": "01:29:24",
        "lines": [
          {
            "sec": 5364,
            "vi": "Vì em không muốn trở thành một người khiến anh cứ gợn nhớ thương",
            "zh": "因為我不想成為一個總讓你泛起牽掛思念的人"
          },
          {
            "sec": 5375,
            "vi": "Khi em chỉ là thoáng qua như mây cuối trời",
            "zh": "既然我不過是天邊匆匆掠過的一抹浮雲"
          },
          {
            "sec": 5379,
            "vi": "Và em tự biết rằng mình là ai, có tư cách gì để mong",
            "zh": "我也清楚自己的身分，又有什麼資格去奢求"
          },
          {
            "sec": 5385,
            "vi": "Tình cảm từ một trái tim đang thuộc về người khác",
            "zh": "一顆早已屬於別人的心所給予的溫柔"
          }
        ]
      },
      {
        "label": "副歌一 (Chorus 1)",
        "startSec": 5393,
        "timestamp": "01:29:53",
        "lines": [
          {
            "sec": 5393,
            "vi": "Chỉ vì em yêu và vui buồn vô cớ",
            "zh": "只因為我愛著你，才總會無緣無故地又喜又悲"
          },
          {
            "sec": 5396,
            "vi": "Nên không bao giờ có quyền nói hết những gì để giữ chân ai đừng vội đi",
            "zh": "所以從來沒有權利傾訴心聲，去挽留誰別急著離開"
          },
          {
            "sec": 5407,
            "vi": "Vì yêu là cho và chấp nhận mất hết",
            "zh": "因為愛本就是付出，並且甘心承受失去一切"
          },
          {
            "sec": 5413,
            "vi": "Dẫu không bao giờ anh được biết",
            "zh": "哪怕你這輩子永遠都不會知道"
          },
          {
            "sec": 5417,
            "vi": "Hãy đi đi, về với người anh yêu đi",
            "zh": "走吧，回到你深愛的人身邊去吧"
          }
        ]
      },
      {
        "label": "導歌二 (Pre-Chorus 2)",
        "startSec": 5436,
        "timestamp": "01:30:36",
        "lines": [
          {
            "sec": 5436,
            "vi": "Vì em không muốn trở thành một người khiến anh cứ gợn nhớ thương",
            "zh": "因為我不想成為一個總讓你泛起牽掛思念的人"
          },
          {
            "sec": 5446,
            "vi": "Khi em chỉ là thoáng qua như mây cuối trời",
            "zh": "既然我不過是天邊匆匆掠過的一抹浮雲"
          },
          {
            "sec": 5453,
            "vi": "Và em tự biết rằng mình là ai, có tư cách gì để mong",
            "zh": "我也清楚自己的身分，又有什麼資格去奢求"
          },
          {
            "sec": 5458,
            "vi": "Tình cảm từ một trái tim đang thuộc về người khác",
            "zh": "一顆早已屬於別人的心所給予的溫柔"
          }
        ]
      },
      {
        "label": "副歌二 (Chorus 2)",
        "startSec": 5465,
        "timestamp": "01:31:05",
        "lines": [
          {
            "sec": 5465,
            "vi": "Chỉ vì em yêu và vui buồn vô cớ",
            "zh": "只因為我愛著你，才總會無緣無故地又喜又悲"
          },
          {
            "sec": 5469,
            "vi": "Nên không bao giờ có quyền nói hết những gì để giữ chân ai đừng vội đi",
            "zh": "所以從來沒有權利傾訴心聲，去挽留誰別急著離開"
          },
          {
            "sec": 5479,
            "vi": "Vì yêu là cho và chấp nhận mất hết",
            "zh": "因為愛本就是付出，並且甘心承受失去一切"
          },
          {
            "sec": 5485,
            "vi": "Dẫu không bao giờ anh được biết",
            "zh": "哪怕你這輩子永遠都不會知道"
          },
          {
            "sec": 5490,
            "vi": "Hãy đi đi, về với người anh yêu đi",
            "zh": "走吧，回到你深愛的人身邊去吧"
          },
          {
            "sec": 5494,
            "vi": "Hãy đi đi, về với người anh yêu đi",
            "zh": "快走吧，回到你深愛的人身邊去吧"
          }
        ]
      },
      {
        "label": "副歌三 / 尾聲 (Final Chorus & Outro)",
        "startSec": 5500,
        "timestamp": "01:31:40",
        "lines": [
          {
            "sec": 5500,
            "vi": "Chỉ vì em yêu và vui buồn vô cớ",
            "zh": "只因為我愛著你，才總會無緣無故地又喜又悲"
          },
          {
            "sec": 5506,
            "vi": "Nên không bao giờ có quyền nói hết những gì để giữ chân ai đừng vội đi",
            "zh": "所以從來沒有權利傾訴心聲，去挽留誰別急著離開"
          },
          {
            "sec": 5515,
            "vi": "Vì yêu là cho và chấp nhận mất hết",
            "zh": "因為愛本就是付出，並且甘心承受失去一切"
          },
          {
            "sec": 5520,
            "vi": "Dẫu không bao giờ anh được biết",
            "zh": "哪怕你這輩子永遠都不會知道"
          },
          {
            "sec": 5526,
            "vi": "Hãy đi đi, về với người anh yêu đi",
            "zh": "走吧，回到你深愛的人身邊去吧"
          },
          {
            "sec": 5530,
            "vi": "Hãy đi đi, về với người anh yêu đi",
            "zh": "快走吧，回到你深愛的人身邊去吧"
          }
        ]
      }
    ]
  }
];
