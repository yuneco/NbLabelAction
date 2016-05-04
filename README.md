# これは何？

+ AnimateCC(旧Flash)でhtml5出力する際に使うJavaScriptライブラリです
+ 簡単なクリック制御/アニメーション制御をプログラミングなしで実現します
+ 主に非プログラマなイラストレーター/デザイナが「動く絵本」レベルの作品を制作する際に使用することを想定しています

# 導入方法

## 簡単な方法
+ 右上の「download zip」を押してファイル一式をダウンロード
+ templateフォルダに設定済みのflaファイルがあるので、これを雛形に制作してください
+ flaを開いたら、Cmd(Ctrl)+Enterで普通にパブリッシュプレビューしてください。ブラウザが開いて、簡単なページ送りのデモが確認できるはずです
+ 不要なデモ用コンテンツを削除して、あとは好きに制作してください。ただし、ステージ1フレーム目に書いてあるフレームアクションは削除しないでください。削除してしまった場合、下記をもういちどコピペすればOK:+1:

```javascript
NbLabelAction.init();
```

## もうちょっとちゃんとした説明
テンプレートを使用しない場合、下記の手順に従ってください：
1. 新規ドキュメントから「HTML5 Canvas」を作成
2. 適当に保存して、一旦パブリッシュ
3. 生成されたhtmlファイルと同じ階層に「NbLabelAction.js」をコピー
4. 生成されたhtmlを開いて、NbLabelAction.jsのscriptタグを追加
5. Animate(Flash)に戻って、パブリッシュ設定を開く
6. 「パブリッシュ時にHTMLファイルを上書き」のチェックを外してOK
7. ステージのタイムライン1フレーム目のアクションに、下記をそのまま貼り付け
```javascript
NbLabelAction.init();
```

# アニメーションの制御方法
全て、フレームにラベルをつけることで、アニメーションを制御します。

## とりあえず、例
![サンプル](https://github.com/yuneco/NbLabelAction/blob/master/example/sample_img1.png)
+ 普通に1フレーム目(ラベル：top)から再生開始
+ ラベル：topの最後（15フレーム目）まで来たらtopの先頭に戻る
+ クリックされたらラベル：@clickに飛ぶ
+ ラベル：@clickの最後（26フレーム目）まで来たらtopに飛ぶ

## ラベルの形式
制御用のラベル（以下、アクションラベルと呼びます）は下記の形式で記載します：
``` 
ラベル名:アクション 
```
例：
```
PiyoPiyo:<
MiyaoMiyao:s.>
@click:s.PiyoPiyo
```
これらは全て有効なアクションラベルです。

### ラベル名
ラベル名はラベルを識別するための名前です。半角英数字（1文字目はアルファベットのみ可）で命名してください。

### 「@click」ラベル名
ラベル名として「@click」を指定すると、クリック時に自動的にこのラベルの位置にジャンプいるようになります。

### アクション
アクションは *** 「そのラベルのフレームの最後に到達した時に実行すること」 *** を指定します。アクションには以下の種類があります。

|アクション|意味|例|
|:--:|:--:|:--:|
|\||停止|PlayOnce: \||
|>|次のラベルへ移動|Next:>|
|<|ラベルの先頭に戻る＝ループする|LoopMe:<|
|<<|一つ前のラベルへ移動|Back:<|
|ラベル名|「ラベル名」の位置に移動|@click:Next|

アクションには操作対象として「親」または「ステージ」を指定するとこができます。

|対象|対象の意味|例|例の意味|
|:--:|:--|:--|:--|
|p.|親|@click:p.>|クリック時にここから再生し、最後まで到達したら、親タイムラインを次のラベル位置に進める（=ページ送り的な使い方）|
|s.|ステージ|@click:s.FirstPage|クリック時にここから再生し、最後まで到達したら、ステージの「FirstPage」に移動する（ホームボタン的な使い方）|

# 連絡先
+ twitter : @yuneco
+ mail : info@nekobooks.com
