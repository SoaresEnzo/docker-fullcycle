FROM golang:1.18 as builder

WORKDIR /usr/src/app

COPY ./main.go .
RUN go mod init main && \
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -v -o /usr/bin/go . && \
chmod +x  /usr/bin/go

CMD ["app"]

FROM scratch

WORKDIR /usr/bin/go
COPY --from=builder /usr/bin/go .
CMD ["./go"]


