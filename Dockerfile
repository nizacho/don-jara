FROM golang:1.17

WORKDIR $GOPATH/src/mahjong-note

# ホストのファイルをコンテナにコピー
COPY . .

RUN go mod download

CMD ["go","run","server.go"]