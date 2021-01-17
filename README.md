# 環境構築
1. Node.js インストール

https://nodejs.org/ja/

2. AWS CLI インストール

https://qiita.com/Inon/items/c3c0116445883c088bb2

3. ServerlessFramework インストール
```
npm install -g serverless
```

# チュートリアル
1. プロジェクト作成
```
serverless create --template aws-nodejs
```

2. デプロイ
```
serverless deploy
serverless deploy --stage prod
```

3. ローカルテスト
```
npm init -y
npm install --save-dev serverless-offline
serverless offline
```

4. 削除
```
serverless remove
serverless remove --stage prod
```
