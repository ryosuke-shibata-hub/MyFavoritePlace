FROM node:latest
RUN npm cache clean -f
RUN rm -rf /tmp/* /var/tmp/*
WORKDIR /var/www

COPY ./next-app/package.json ./
RUN npm install

# create-next-appをローカルにインストール
# RUN npx create-next-app next-app

# コンテナ内での実行コマンドを指定
CMD ["npm", "start"]
