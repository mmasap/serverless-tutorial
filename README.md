#準備
Node.js インストール
https://nodejs.org/ja/

AWS CLI インストール
https://qiita.com/Inon/items/c3c0116445883c088bb2

ServerlessFramework インストール
npm install -g serverless

#チュートリアル

1.プロジェクト作成
serverless create --template aws-nodejs
handler.js プログラムファイル
serverless.yml サービス設定ファイル

2.デプロイ
serverless deploy
serverless deploy --stage prod

3.ローカルテスト
npm init -y
npm install --save-dev serverless-offline
serverless offline

4.削除
serverless remove
serverless remove --stage prod
