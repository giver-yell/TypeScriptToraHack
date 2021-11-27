# 1.環境構築

## 1-1. Node 環境の確認とインストール

1. Homebrew のバージョンを確認  
   `brew --version`
2. インストールされていなければ実行  
   `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
3. nodebrew のインストール  
   `brew install nodebrew`
4. node の安定バージョンをインストール  
   `nodebrew install stable`
5. nodebrew のバージョン一覧を確認  
   `nodebrew ls`
6. インストールしたバージョンを指定して切り替える  
   `nodebrew use v14.15.3`
7. node のパスを通す  
   `echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.zprofile'`
8. ターミナルの再起動
9. node と npm のバージョン確認  
   `node -v`
   `npm -v`

## 1-2. TypeScript 環境構築

1. 開発用ディレクトリの作成  
   `mkdir ~/<YOUR_DEV_DIR>/ts-basic`
2. npm の初期化  
   `npm init`
3. 関連パッケージのインストール(※)  
   `npm install --save-dev typescript ts-loader webpack webpack-cli webpack-dev-server`
4. webpack.config.js の作成と設定
5. tsconfig.json の作成と設定  
   `tsc --init`  
   _※ 実行時に`gyp: No Xcode or CLT version detected!`のエラーが出たら_  
   Mac OS に入っている XCode のバージョンと、コマンドラインツールのバージョンが合っていないという理由で怒られています。  
   以下手順でコマンドラインツールのバージョンをアップデートしましょう。

sudo 付きのコマンドは Mac OS のパスワード入力が必要です。 4.を実行すると、コマンドラインツールをインストールするか聞かれるので、同意して進めてください。

1. `sudo rm -rf $(xcode-select -print-path)`
2. `sudo rm -rf /Library/Developer/CommandLineTools
3. `sudo xcode-select --reset`
4. `xcode-select --install`
5. `xcode-select -p` 5.の実行結果が/Library/Developer/CommandLineTools でなければ sudo xcode-select -switch /Library/Developer/CommandLineTools を実行
   インストールが完了したら、「3.関連パッケージのインストール」のコマンドを再実行してください。

# 2. ESLint と Prettier の CI 環境を構築

## 2-1. パッケージのインストール

`npm install --save-dev eslint eslint-config-prettier prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin husky lint-staged`

## 2-2. husky がもし動かなかったら...

.git/hooks が正常に作成されていない可能性アリ これで確認する
`ls -la .git/hooks/ls -la .git/hooks/`
`.sample`しかなかったら NG
NG の場合はインストールし直す `npm uninstall huksy`
`npm install --save-dev husky`
もう一度 hooks を確認
`ls -la .git/hooks/ls -la .git/hooks/`
