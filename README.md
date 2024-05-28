# ローカル環境の起動

1. node_modulesをインストール（初回のみ）

```bash
npm ci
```

2. ローカルサーバー立ち上げ

```bash
# localhost:3000 で立ち上がる
# localhost:3000 でディレクトリマップが見れます

npm run dev
```

# ビルドの方法

1. buildを実行

```bash
# distディレクトリにビルドされる（実行のたびに一度削除され再作成されます）
npm run build
```

# はじめに知っておくべき内容

## ディレクトリマップについて

案件開始時に front/src/pages/index.html　をメンテナンスしてください。

localhost:3000 で確認できます。

## html ファイルについて

src 配下の html ファイルは ejs 記法が使えます。

拡張子は html ですが、ejs として認識されます。

## トレイリングスラッシュについて（末尾のスラッシュについて）

末尾のスラッシュは、ディレクトリの扱いによって挙動が変わります。

詳しくは以下の記事を参照してください。

[vite トレイリングスラッシュの取り扱い](https://ja.vitejs.dev/guide/migration.html#%E9%96%8B%E7%99%BA%E6%99%82%E3%81%A8%E3%83%95%E3%82%9A%E3%83%AC%E3%83%92%E3%82%99%E3%83%A5%E3%83%BC%E6%99%82%E3%81%AE-html-%E9%85%8D%E4%BF%A1%E5%8B%95%E4%BD%9C%E3%81%AE%E4%B8%80%E8%87%B4%E3%81%99%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB)

## エディターはVSCodeの利用を推奨します

### 推奨エクステンションについて

- dbaeumer.vscode-eslint

  eslint によるエラーを表示してくれます

- esbenp.prettier-vscode

  prettier によるフォーマットをしてくれます

- csstools.postcss

  不要な css エラーを出さないようにしてくれます

- stylelint.vscode-stylelint

  stylelint によるエラーを表示&フォーマットをしてくれます

- leonzalion.vscode-ejs

  ejs のシンタックスハイライトをしてくれます

- j69.ejs-beautify

  ejs のフォーマットをしてくれます

## ESlint

基本的に JavaScript Standard Style というルールに則っています

https://standardjs.com/readme-ja.html

prettier-config-standard と eslint-config-standard の競合してしまう部分のみ prettier に合わせて個別に調整をしています

※詳細は .eslintrc.json, .prettierrc.js を参照

エディタで VSCode を利用していれば、保存時に修正できるところは修正されます！

## Stylelint

基本的に Stylelint が公式で紹介している stylelint-config-standard のルールを利用しています

https://stylelint.io/user-guide/get-started/

調整箇所としては BEM の記述に対応するためにクラス名の命名規則に関するルール等を微調整しています

また、stylelint-config-recess-order によりプロパティの順番を推奨しています

※詳細は.stylelintrc.json 参照

エディタで VSCode を利用していれば、保存時に修正できるところは修正されます！
