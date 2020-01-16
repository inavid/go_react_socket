# build stage
FROM golang:latest

ENV GO111MODULE=on

WORKDIR /app

COPY . .

RUN go mod download

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build

RUN go build .

EXPOSE 5000
ENTRYPOINT ["/app/backend"]
