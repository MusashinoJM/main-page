//「ファイルパスとファイル名」「表示するテキスト」の順で用意した音声パーツの情報を入力してください。
//予め入力されているサンプルを参考に入力してください。
//1行1文節で設定してください。
//無音パーツは流用して使っていただいても構いません。
//ダブルクォートや括弧、カンマ記号に1文字でも不備があると正しく読み込ませません。
soundData = 
[
 ["sound/k-9ji.wav", "9時・田"],
 ["sound/k-10.wav", "10・田"],
 ["sound/k-3min.wav", "3分・田"],
 ["sound/k-kakutei.wav", "各駅停車・田"],
 ["sound/k-fuchuhonmachiyukidesu.wav", "府中本町行きです・田"],
 ["sound/k-hatsu.wav", "発・田"],
 ["sound/em-thankyoufor.wav", "Thank you for riding with JR East・英・男"],
 ["sound/em-thenextde.wav", "The next departure from・英・男"],
 ["sound/em-trackno.wav", "Track No.・英・男"],
 ["sound/em-tr1.wav", "1(番線)・英・男"],
 ["sound/em-willbe.wav", "will be・英・男"],
 ["sound/em-the9.wav", "The9・英・男"],
 ["sound/em-13min.wav", "13(分)・英・男"],
 ["sound/em-am.wav", "AM・英・男"],
 ["sound/em-localtrain.wav", "Local Train・英・男"],
 ["sound/em-boundfor.wav", "bound for・英・男"],
 ["sound/em-fuchuhonmachi.wav", "Fuchuhommachi・英・男"],
 ["sound/k-touekiwodemasuto.wav", "当駅を出ますと・田"],
 ["sound/k-tsugiha.wav", "次は・田"],
 ["sound/ka-niiza.wav", "新座・案・田"],
 ["sound/k-nitomarimasu.wav", "に停まります・田"],
 ["sound/kt-kitaasaka.wav", "北朝霞・到・田"],
 ["sound/k-1bansen.wav", "1番線・田"],
 ["sound/k-drcl.wav", "ドアが閉まります・田"],
 ["sound/k-gochuikudasai.wav", "御注意下さい・田"],
 ["sound/s-kinen.wav", "禁煙放送"],
 ["sound/k-honjitsumo.wav", "本日も・田"],
 ["sound/k-jrewogoriyou.wav", "JR東日本をご利用くださいまして・田"],
 ["sound/ka-arigatougozaimasu.wav", "ありがとうございます・案・田"],
 ["sound/k-kondono.wav", "今度の・田"],
 ["sound/k-1bansenno.wav", "1番線の・田"],
 ["sound/k-denshaha.wav", "電車は・田"],
 ["sound/k-20.wav", "20・田"],
 ["sound/em-23min.wav", "23(分)・英・男"],
 ["sound/atos-chime.wav", "ATOS接近チャイム"],
 ["sound/k-mamonaku.wav", "まもなく・田"],
 ["sound/k-1bansenni.wav", "1番線に・田"],
 ["sound/k-fuchuhonmachiyukigamairimasu.wav", "府中本町行きが参ります・田"],
 ["sound/k-abunaidesukara.wav", "危ないですから・田"],
 ["sound/k-kiiroitenjiburokkumade.wav", "黄色い点字ブロックまで・田"],
 ["sound/k-osagarikudasai.wav", "お下がりください・田"],
 ["sound/em-youraten.wav", "Your attention please・英・男"],
 ["sound/em-thelocal.wav", "the local train・英・男"],
 ["sound/em-willsoon.wav", "will soon arrive on・英・男"],
 ["sound/em-foryour.wav", "for your safety・英・男"],
 ["sound/em-pleasestand.wav", "please stand behind the yellow line・英・男"],
 ["sound/k-gojousha.wav", "ご乗車・田"],
 ["sound/s-honjitsumo.wav", "本日も・女"],
 ["sound/s-jrewogoriyou.wav", "JR東日本をご利用くださいまして・女"],
 ["sound/sa-arigatougozaimasu.wav", "ありがとうございます・案・女"],
 ["sound/s-kondono.wav", "今度の・女"],
 ["sound/s-2bansenno.wav", "2番線の・女"],
 ["sound/s-denshaha.wav", "電車は・女"],
 ["sound/s-9ji.wav", "9時・女"],
 ["sound/s-30.wav", "30・女"],
 ["sound/s-3min.wav", "3分・女"],
 ["sound/s-hatsu.wav", "発・女"],
 ["sound/s-kakutei.wav", "各駅停車・女"],
 ["sound/s-minamifunabashiyukidesu.wav", "南船橋行きです・女"],
 ["sound/ew-thankyoufor.wav", "Thank you for riding with JR East・英・女"],
 ["sound/ew-thenextde.wav", "The next departure from・英・女"],
 ["sound/ew-trackno.wav", "Track No.・英・女"],
 ["sound/ew-tr2.wav", "2(番線)・英・女"],
 ["sound/ew-willbe.wav", "will be・英・女"],
 ["sound/ew-the9.wav", "The9・英・女"],
 ["sound/ew-33min.wav", "33(分)・英・女"],
 ["sound/ew-am.wav", "AM・英・女"],
 ["sound/ew-localtrain.wav", "local train・英・女"],
 ["sound/ew-boundfor.wav", "bound for・英・女"],
 ["sound/ew-minamifunabashi.wav", "Minami-Funabashi・英・女"],
 ["sound/s-touekiwodemasuto.wav", "当駅を出ますと・女"],
 ["sound/s-tsugiha.wav", "次は・女"],
 ["sound/sa-nishiurawa.wav", "西浦和・案・女"],
 ["sound/s-nitomarimasu.wav", "に停まります・女"],
 ["sound/ew-thenextst.wav", "The next stop is・英・女"],
 ["sound/ew-nishiurawa.wav", "Nishi-Urawa・英・女"],
 ["sound/s-mamonaku.wav", "まもなく・女"],
 ["sound/s-2bannsennni.wav", "2番線に・女"],
 ["sound/s-minamifunabashiyukigamairimasu.wav", "南船橋行きが参ります・女"],
 ["sound/s-abunaidesukara.wav", "危ないですから・女"],
 ["sound/s-kiiroitennjiburokkumade.wav", "黄色い点字ブロックまで・女"],
 ["sound/s-osagarikudasai.wav", "お下がりください・女"],
 ["sound/ew-youraten.wav", "Your attention please・英・女"],
 ["sound/ew-thelocal.wav", "the local train・英・女"],
 ["sound/ew-willsoon.wav", "will soon arrive on・英・女"],
 ["sound/ew-foryour.wav", "For your safety・英・女"],
 ["sound/ew-pleasestand.wav", "please stand behind the yellow line・英・女"],
 ["sound/st-kitaasaka.wav", "北朝霞・到・女"],
 ["sound/st-gojousha.wav", "ご乗車・到・女"],
 ["sound/st-arigatougozaimasu.wav", "ありがとうございます・到・女"],
 ["sound/s-2bannsenn.wav", "2番線・女"],
 ["sound/s-drcl.wav", "ドアが閉まります・女"],
 ["sound/s-gochuuikudasai.wav", "御注意下さい・女"],
 ["sound/kt-gojousha.wav", "ご乗車・到・田"],
 ["sound/t-honjitsumo.wav", "本日も・津"],
 ["sound/t-jrewogoriyou.wav", "JR東日本をご利用くださいまして・津"],
 ["sound/ta-arigatougozaimasu.wav", "ありがとうございます・案・津"],
 ["sound/t-kondono.wav", "今度の・津"],
 ["sound/t-1bansenno.wav", "1番線の・津"],
 ["sound/t-dennshaha.wav", "電車は・津"],
 ["sound/t-9ji.wav", "9時・津"],
 ["sound/t-50.wav", "50・津"],
 ["sound/t-2min.wav", "2分・津"],
 ["sound/t-hatsu.wav", "発・津"],
 ["sound/t-kakuekiteisha.wav", "各駅停車・津"],
 ["sound/t-fuchuuhonnmachiyukidesu.wav", "府中本町行きです・津"],

 ["sound/null-250.mp3", "(無音0.25秒)"],
 ["sound/null-500.mp3", "(無音0.5秒)"],
 ["sound/null-750.mp3", "(無音0.75秒)"],
 ["sound/null-1000.mp3", "(無音1.0秒)"],
 ["sound/null-2000.mp3", "(無音2.0秒)"],
 ["sound/null-3000.mp3", "(無音3.0秒)"],

 ["sound/null-250.mp3", ""] //この最後の行は編集しないでください
 ]
