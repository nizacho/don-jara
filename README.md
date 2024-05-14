# Don Jara

ドンジャラ計算表 By ChatGPT

## プロジェクト構成

```
don-jara/
├── index.html
├── css/
│ └── styles.css
├── js/
│ └── script.js
└── assets/
└── images/
└── (optional: any image files you might use)
```

プロジェクトの構成を一覧で取得するには、次のコマンドを使用します：

```sh
tree --dirsfirst --filelimit 5
```

## セットアップ

### 前提条件

このプロジェクトを実行するために必要なものは以下の通りです：

- 任意のウェブブラウザ

### インストール

1. このリポジトリをクローンします：

```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/don-jara.git
```

2. プロジェクトディレクトリに移動します：

```sh
cd don-jara
```

3. ウェブブラウザで index.html を開きます：

```sh
open index.html
```

## デプロイ
このプロジェクトは、Cloudflare Pagesを使用してデプロイできます。以下はその手順です：

1. GitHubリポジトリをCloudflare Pagesに接続します。
2. Cloudflare Pagesの設定でビルドコマンドとビルド出力ディレクトリを空欄にします（静的サイトのため）。
3. デプロイが自動的に開始され、URLが提供されます。